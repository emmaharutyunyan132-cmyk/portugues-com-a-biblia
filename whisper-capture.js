/* Optional local transcription. No microphone uploads, no audio persistence. */
let whisperWorker=null,whisperReady=false,whisperJob=null,whisperSerial=0;
function whisperSupported(){return typeof Worker==='function'&&typeof MediaRecorder==='function'&&typeof navigator!=='undefined'&&!!navigator.mediaDevices?.getUserMedia&&(typeof AudioContext==='function'||typeof webkitAudioContext==='function')}
function whisperRelease(j){if(!j)return;if(j.timer!==null)clearTimeout(j.timer);j.timer=null;if(j.rec){j.rec.ondataavailable=j.rec.onstop=j.rec.onerror=null;if(j.rec.state!=='inactive')try{j.rec.stop()}catch(e){}}if(j.stream)j.stream.getTracks().forEach(t=>t.stop());j.stream=null;j.chunks=[];if(j.ctx)try{Promise.resolve(j.ctx.close()).catch(()=>{})}catch(e){}j.ctx=null}
function whisperDropWorker(){if(whisperWorker)whisperWorker.terminate();whisperWorker=null;whisperReady=false}
function whisperCancel(){let j=whisperJob;whisperJob=null;if(!j)return;whisperRelease(j);if(j.stage==='loading'||j.stage==='recognizing')whisperDropWorker();micSetStatus(tr('Микрофон выключен.','Microfone desligado.'));micButtons(!!micRun)}
function whisperFinish(j,msg){if(whisperJob!==j)return;whisperJob=null;whisperRelease(j);micButtons(!!micRun);micSetStatus(msg)}
function whisperFail(j,msg){if(whisperJob!==j)return;if(j.stage==='loading'||j.stage==='recognizing')whisperDropWorker();whisperFinish(j,msg);micOfferDictation()}
function whisperTimeout(j,ms,msg){if(j.timer!==null)clearTimeout(j.timer);j.timer=setTimeout(()=>whisperFail(j,msg),ms)}
function whisperMessage(w,m){let j=whisperJob;if(w!==whisperWorker||!j||m.id!==j.id)return;
 if(m.stage==='loading'){micSetStatus(tr('Загрузка Whisper','Carregando Whisper')+(Number.isFinite(m.percent)?' · '+m.percent+'%':'…'));return}
 if(m.stage==='ready'&&j.stage==='loading'){whisperReady=true;whisperFinish(j,tr('Whisper готов. Нажми «Говорить» ещё раз.','Whisper pronto. Toque em Falar novamente.'));return}
 if(m.stage==='result'&&j.stage==='recognizing'){let t=String(m.text||'').trim();if(t){micShowText(t,j.context);whisperFinish(j,tr('Готово. Проверь распознанный текст.','Pronto. Confira o texto reconhecido.'))}else whisperFail(j,tr('Whisper не разобрал речь. Повтори фразу.','Whisper não reconheceu a fala. Repita a frase.'));return}
 if(m.stage==='error')whisperFail(j,tr('Ошибка Whisper: ','Erro do Whisper: ')+String(m.detail||'').slice(0,160));
}
function whisperLoad(j){try{let w=new Worker('./whisper-worker.js?v=090',{type:'module'});whisperWorker=w;w.onmessage=e=>whisperMessage(w,e.data);w.onerror=()=>whisperFail(j,tr('Не удалось загрузить Whisper. Попробуй браузер или диктовку.','Não foi possível carregar Whisper. Use o navegador ou o ditado.'));whisperTimeout(j,180000,tr('Загрузка модели не завершилась. Попробуй Wi-Fi или диктовку.','Download não concluído. Tente Wi-Fi ou ditado.'));w.postMessage({id:j.id,type:'load'})}catch(e){whisperFail(j,tr('Whisper недоступен в этом браузере.','Whisper indisponível neste navegador.'))}}
function whisperPCM(buf){let n=buf.length,channels=buf.numberOfChannels,rate=buf.sampleRate;if(!n||!channels||!Number.isFinite(rate)||rate<=0)throw Error('Invalid audio');let mono=new Float32Array(n);for(let c=0;c<channels;c++){let x=buf.getChannelData(c);for(let i=0;i<n;i++)mono[i]+=x[i]/channels}
 let size=Math.min(320000,Math.floor(n*16000/rate)),out=new Float32Array(size),ratio=rate/16000;
 for(let i=0;i<size;i++){let start=i*ratio,end=Math.min(n,(i+1)*ratio);if(ratio>=1){let sum=0,weight=0;for(let k=Math.floor(start);k<Math.ceil(end)&&k<n;k++){let w=Math.min(end,k+1)-Math.max(start,k);if(w>0){sum+=mono[k]*w;weight+=w}}out[i]=weight?sum/weight:0}else{let k=Math.floor(start),f=start-k;out[i]=mono[k]*(1-f)+(mono[Math.min(n-1,k+1)]||0)*f}}
 return out;
}
function whisperHasAudio(pcm){if(pcm.length<4000)return false;let sq=0,peak=0;for(let x of pcm){if(!Number.isFinite(x))return false;sq+=x*x;peak=Math.max(peak,Math.abs(x))}return peak>=.006&&Math.sqrt(sq/pcm.length)>=.001}
async function whisperDecode(j){if(whisperJob!==j)return;try{
 let blob=new Blob(j.chunks,{type:j.rec.mimeType||j.chunks[0]?.type||''});j.chunks=[];if(!blob.size||blob.size>8*1024*1024)throw Error('Empty or oversized recording');
 let C=typeof AudioContext==='function'?AudioContext:webkitAudioContext;j.ctx=new C();let data=await blob.arrayBuffer();if(whisperJob!==j)return;
 let buf=await j.ctx.decodeAudioData(data);if(whisperJob!==j)return;
 let pcm=whisperPCM(buf);try{Promise.resolve(j.ctx.close()).catch(()=>{})}catch(e){}j.ctx=null;
 if(!whisperHasAudio(pcm)){whisperFail(j,tr('Запись слишком тихая или короткая. Повтори фразу.','Gravação muito baixa ou curta. Repita a frase.'));return}
 j.stage='recognizing';micSetStatus(tr('Whisper распознаёт речь…','Whisper reconhecendo a fala…'));micButtons(!!micRun);
 whisperTimeout(j,90000,tr('Распознавание не завершилось. Попробуй короткую фразу или диктовку.','Reconhecimento não concluído. Tente uma frase curta ou ditado.'));
 if(!whisperWorker||!whisperReady)throw Error('Model unavailable');
 whisperWorker.postMessage({id:j.id,type:'recognize',pcm},[pcm.buffer]);
 }catch(e){whisperFail(j,tr('Не удалось обработать запись: ','Não foi possível processar a gravação: ')+String(e?.message||e).slice(0,100))}
}
async function whisperRecord(j){try{
 whisperTimeout(j,30000,tr('Нет доступа к микрофону. Проверь разрешения.','Sem acesso ao microfone. Verifique as permissões.'));
 let stream=await navigator.mediaDevices.getUserMedia({audio:true,video:false});if(whisperJob!==j){stream.getTracks().forEach(t=>t.stop());return}j.stream=stream;
 let mime=typeof MediaRecorder.isTypeSupported==='function'?['audio/mp4','audio/webm;codecs=opus','audio/webm','audio/ogg;codecs=opus'].find(t=>MediaRecorder.isTypeSupported(t)):null;
 let rec=mime?new MediaRecorder(stream,{mimeType:mime}):new MediaRecorder(stream);j.rec=rec;j.stage='recording';
 rec.ondataavailable=e=>{if(whisperJob===j&&e.data?.size)j.chunks.push(e.data)};
 rec.onerror=()=>whisperFail(j,tr('Ошибка записи микрофона.','Erro ao gravar o microfone.'));
 rec.onstop=()=>{if(whisperJob!==j)return;stream.getTracks().forEach(t=>t.stop());j.stream=null;j.stage='decoding';micButtons(!!micRun);micSetStatus(tr('Обработка записи…','Processando gravação…'));whisperTimeout(j,20000,tr('Не удалось прочитать запись.','Não foi possível ler a gravação.'));whisperDecode(j)};
 rec.start();micButtons(!!micRun);micSetStatus(tr('🎙 Говори. Затем нажми «Завершить и распознать».','🎙 Fale. Depois toque em Finalizar e reconhecer.'));
 clearTimeout(j.timer);j.timer=setTimeout(()=>{if(whisperJob===j)whisperStop()},15000);
 }catch(e){whisperFail(j,tr('Не удалось включить микрофон: ','Não foi possível ligar o microfone: ')+String(e?.name||'').slice(0,80))}
}
function whisperStart(context){if(whisperJob||!micAllowed||!whisperSupported())return false;stopSpeech();micShowText('',context);let j={id:++whisperSerial,stage:whisperReady?'permission':'loading',context,timer:null,stream:null,rec:null,ctx:null,chunks:[]};whisperJob=j;micButtons(!!micRun);if(!whisperReady){micSetStatus(tr('Первая загрузка Whisper — микрофон пока выключен.','Primeiro download do Whisper — microfone desligado.'));whisperLoad(j)}else whisperRecord(j);return true}
function whisperStop(){let j=whisperJob;if(!j)return;if(j.stage!=='recording'){whisperCancel();return}j.stage='stopping';micButtons(!!micRun);micSetStatus(tr('Завершение записи…','Finalizando gravação…'));try{whisperTimeout(j,10000,tr('Не удалось завершить запись.','Não foi possível finalizar a gravação.'));j.rec.stop();if(j.stream){j.stream.getTracks().forEach(t=>t.stop());j.stream=null}}catch(e){whisperFail(j,tr('Не удалось завершить запись.','Não foi possível finalizar a gravação.'))}}

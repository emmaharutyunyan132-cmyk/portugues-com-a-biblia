/* Short oral sessions with optional speech recognition. No audio or transcripts stored. */
let oralSession=null,oralResult=null,oralTranscript='',oralSource='',oralReveal=false;
const ORAL_MODES=['repeat','listen','translate'];
function oralState(){let s=gameState();if(!s.oral||typeof s.oral!=='object'||Array.isArray(s.oral))s.oral={};let o=s.oral;if(!['A1','A2','B1','B2'].includes(o.level))o.level=journeyState().level;if(!['all','church','bible','daily'].includes(o.theme))o.theme='church';if(!ORAL_MODES.includes(o.mode))o.mode='repeat';if(!o.practice||typeof o.practice!=='object')o.practice={};return o}
function oralPool(level,theme){
 let rows=[],seen=new Set();
 let add=(pt,ru,ref,kind)=>{let id=micNormalize(pt);if(!id||seen.has(id)||!ru)return;seen.add(id);rows.push({id,pt,ru,ref,kind})};
 for(let l of L){if(l[0]!==level)continue;let k=l[4]==='Brasil'?'daily':/reunião|igreja|pastor|obreir|serviço|equipe|pregação|evangeliza|acolh|mídia|volunt|oração/i.test(l[2])?'church':'bible';if(theme==='all'||theme===k)for(let [pt,ru] of l[8])add(pt,ru,l[2],k)}
 if(theme==='bible'||theme==='all')for(let c of ESTUDO_CHAPTERS)for(let v of c[8])if(v[3]===level)add(v[1],v[2],ebLabel(c,v[0]),'bible');
 return rows
}
function oralChoose(k,v){let o=oralState();if(k==='level'&&['A1','A2','B1','B2'].includes(v)||k==='theme'&&['all','church','bible','daily'].includes(v)||k==='mode'&&ORAL_MODES.includes(v)){o[k]=v;save();render()}}
function oralModeName(m){return tr({repeat:'Послушай и повтори',listen:'Повтори на слух',translate:'Переведи вслух'}[m],{repeat:'Ouça e repita',listen:'Repita de ouvido',translate:'Traduza em voz alta'}[m])}
function oralStart(){
 let o=oralState(),pool=oralPool(o.level,o.theme);if(!pool.length)return;
 pool.sort((a,b)=>(o.practice[a.id]?.last||0)-(o.practice[b.id]?.last||0));
 oralSession={mode:o.mode,level:o.level,theme:o.theme,items:pool.slice(0,6),at:0,done:0,matched:0,self:0,skipped:0};
 oralResult=null;oralClear();go('speaking')
}
function oralClear(){oralTranscript='';oralSource='';oralReveal=false;micText='';micPartial='';micFinal=''}
function oralCurrent(){return oralSession?.items[oralSession.at]||null}
function oralExpected(){return oralCurrent()?.pt||''}
function oralSetMode(v){if(!['whisper','browser','manual'].includes(v))return;micCancel();oralClear();oralState().engine=v;micAllowed=false;if(v!=='manual')micEngine=v;save();render()}
function oralEngine(){let o=oralState();if(!['whisper','browser','manual'].includes(o.engine))o.engine='whisper';return o.engine}
function oralWords(t){return micNormalize(t).split(' ').filter(Boolean)}
function oralCompare(expected,actual){
 let a=oralWords(expected),b=oralWords(actual),m=a.length,n=b.length;
 // Levenshtein alignment of words, not acoustic or accent analysis.
 let dp=Array.from({length:m+1},(_,i)=>Array.from({length:n+1},(_,j)=>i===0?j:j===0?i:0));
 for(let i=1;i<=m;i++)for(let j=1;j<=n;j++)dp[i][j]=Math.min(dp[i-1][j]+1,dp[i][j-1]+1,dp[i-1][j-1]+(a[i-1]===b[j-1]?0:1));
 let aligned=[],i=m,j=n;while(i||j){if(i&&j&&dp[i][j]===dp[i-1][j-1]+(a[i-1]===b[j-1]?0:1)){aligned.push({word:a[i-1],heard:b[j-1],status:a[i-1]===b[j-1]?'match':'different'});i--;j--}else if(i&&dp[i][j]===dp[i-1][j]+1){aligned.push({word:a[i-1],heard:'',status:'missing'});i--}else{aligned.push({word:'',heard:b[j-1],status:'extra'});j--}}
 return {exact:m>0&&dp[m][n]===0,matched:aligned.filter(x=>x.status==='match').length,total:m,aligned:aligned.reverse()}
}
function oralFeedback(){
 let q=oralCurrent();if(!q||!oralTranscript.trim())return '';
 let cmp=oralCompare(q.pt,oralTranscript),label=oralSource==='manual'?tr('Сравнение введённого текста','Comparação do texto digitado'):tr('Сравнение распознанных слов','Comparação das palavras reconhecidas');
 return '<div class="oral-feedback"><b>'+esc(label)+'</b><p>'+cmp.matched+' / '+cmp.total+' '+tr('слов совпало с образцом','palavras coincidem com o modelo')+'</p><div class="oral-words">'+cmp.aligned.map(x=>'<span class="oral-word '+x.status+'" title="'+esc(x.status==='match'?tr('Совпало','Coincide'):x.status==='extra'?tr('Лишнее слово','Palavra extra'):x.status==='missing'?tr('Не распознано','Não reconhecida'):tr('Распознано как: ','Reconhecida como: ')+x.heard)+'">'+esc(x.word||x.heard)+(x.status==='match'?' ✓':x.status==='extra'?' +':x.status==='missing'?' ·':' ≠')+'</span>').join('')+'</div><p class="muted">'+tr('Это сравнение текста, не оценка акцента. Другой перевод может быть верным.','Isto compara texto, não avalia o sotaque. Outra tradução pode estar correta.')+'</p></div>'
}
function oralShowText(text,source){if(page!=='speaking'||!oralCurrent())return;oralTranscript=String(text).slice(0,1000);oralSource=source;let e=$('#oral-transcript');if(e)e.value=oralTranscript;let f=$('#oral-feedback');if(f)f.innerHTML=oralFeedback()}
function oralManual(v){micCancel();oralShowText(v,'manual')}
function oralToggleModel(){let q=oralCurrent();if(!q)return;micCancel();oralReveal=true;render()}
function oralRetry(){stopSpeech();oralClear();render()}
function oralNext(kind){
 let s=oralSession,q=oralCurrent();if(!s||!q||!['self','skip'].includes(kind))return;
 stopSpeech();let o=oralState(),p=o.practice[q.id]||{count:0};p.last=Date.now();p.count++;o.practice[q.id]=p;
 if(kind==='skip')s.skipped++;else{s.done++;if(oralTranscript&&oralSource!=='manual'&&oralCompare(q.pt,oralTranscript).exact)s.matched++;else s.self++}
 s.at++;oralClear();save();if(s.at>=s.items.length){oralResult={...s};oralSession=null;render();scrollTo(0,0);return}render();scrollTo(0,0)
}
function oralExit(){stopSpeech();oralClear();oralSession=null;oralResult=null;render()}
function oralMicrophone(){
 let engine=oralEngine();if(engine!=='manual')micEngine=engine;let supported=engine!=='manual'&&micSupported();
 let h='<div class="oral-mic"><div class="oral-engine"><label>'+tr('Способ ответа','Modo de resposta')+'<select onchange="oralSetMode(this.value)"><option value="whisper" '+(engine==='whisper'?'selected':'')+'>'+tr('Whisper · на устройстве','Whisper · no dispositivo')+'</option><option value="browser" '+(engine==='browser'?'selected':'')+'>'+tr('Распознавание браузера','Reconhecimento do navegador')+'</option><option value="manual" '+(engine==='manual'?'selected':'')+'>'+tr('Без микрофона / диктовка','Sem microfone / ditado')+'</option></select></label></div>';
 if(engine!=='manual'){h+='<p class="muted">'+(engine==='whisper'?tr('Первая загрузка модели может занять время. Обработка на устройстве, сайт не сохраняет запись.','O primeiro download pode demorar. Processamento no dispositivo; o site não salva a gravação.'):tr('Браузер может отправлять запись своей службе распознавания. Сайт не сохраняет запись.','O navegador pode enviar áudio ao serviço de reconhecimento. O site não salva a gravação.'))+'</p>';
 if(supported)h+='<label class="mic-consent"><input type="checkbox" '+(micAllowed?'checked':'')+' onchange="micConsent(this.checked)">'+tr('Разрешаю распознавание в этой сессии','Autorizo o reconhecimento nesta sessão')+'</label><div class="oral-actions"><button id="mic-start" onclick="micStart(\'oral\')" '+(micAllowed&&Date.now()>=micCooldownUntil?'':'disabled')+'>'+(engine==='whisper'&&!whisperReady?tr('Подготовить микрофон','Preparar microfone'):tr('🎙 Говорить','🎙 Falar'))+'</button><button class="secondary" id="mic-stop" onclick="micStop()" disabled>'+tr('Остановить','Parar')+'</button></div>';
 else h+='<p class="muted">'+tr('Этот режим недоступен. Выбери другой способ или используй диктовку клавиатуры.','Modo indisponível. Escolha outro modo ou use o ditado do teclado.')+'</p>'}
 h+='<p id="mic-status" role="status" aria-live="polite" class="muted"></p><label>'+tr('Распознанный текст / ручной ответ','Texto reconhecido / resposta manual')+'<textarea id="oral-transcript" lang="pt-BR" rows="2" maxlength="1000" oninput="oralManual(this.value)" placeholder="Fale ou escreva em português…">'+esc(oralTranscript)+'</textarea></label><div id="oral-feedback" aria-live="polite">'+oralFeedback()+'</div><p class="muted">'+tr('Говори только учебные фразы, без личных сведений. При желании используй микрофон португальской клавиатуры.','Fale apenas frases de estudo, sem dados pessoais. Se quiser, use o microfone do teclado português.')+'</p></div>';
 return h
}
function oralPageHTML(){
 let o=oralState(),q=oralCurrent();
 if(oralResult){let r=oralResult;return '<article class="game-card game-end"><span class="game-celebrate">🎙</span><h1>'+tr('Практика завершена!','Prática concluída!')+'</h1><p>'+r.done+' / '+r.items.length+' '+tr('фраз отработано','frases praticadas')+'</p><p class="muted">'+tr('Совпадений распознанного текста: ','Textos reconhecidos coincidentes: ')+r.matched+' · '+tr('самопроверка: ','autoavaliação: ')+r.self+' · '+tr('пропущено: ','ignoradas: ')+r.skipped+'</p>'+gameBtn(tr('Новая тренировка','Nova prática'),'oralStart()')+gameBtn(tr('Выбрать режим','Escolher modo'),'oralExit()',true)+'</article>'}
 if(q){let s=oralSession,show=s.mode==='repeat'||oralReveal;
 return '<div class="game-top"><button class="secondary game-close" aria-label="'+tr('Выйти','Sair')+'" onclick="oralExit()">×</button><progress max="'+s.items.length+'" value="'+s.at+'" aria-label="'+tr('Прогресс','Progresso')+'"></progress><span>'+(s.at+1)+'/'+s.items.length+'</span></div><article class="game-card oral-card"><p class="game-kicker">'+esc(s.level+' · '+oralModeName(s.mode))+'</p><h2>'+tr(s.mode==='translate'?'Скажи по-португальски':s.mode==='listen'?'Послушай и повтори':'Повтори фразу',s.mode==='translate'?'Diga em português':s.mode==='listen'?'Ouça e repita':'Repita a frase')+'</h2>'+(s.mode==='translate'?'<p class="game-word">'+esc(q.ru)+'</p>':'')+(show?'<p class="game-word" lang="pt-BR">'+esc(q.pt)+'</p>':'')+(s.mode!=='translate'||show?gameSound(q.pt):'')+(!show?gameBtn(tr('Показать образец','Mostrar modelo'),'oralToggleModel()',true):'')+(s.mode==='repeat'?'<details><summary>'+tr('Перевод','Tradução')+'</summary><p>'+esc(q.ru)+'</p></details>':'')+'<p class="muted">'+esc(q.ref)+'</p>'+oralMicrophone()+gameBtn(tr('Повторить ещё раз','Tentar de novo'),'oralRetry()',true)+gameBtn(tr('Я повторила · дальше','Pratiquei · continuar'),'oralNext("self")')+gameBtn(tr('Пропустить','Pular'),'oralNext("skip")',true)+'</article>'}
 let count=oralPool(o.level,o.theme).length;
 return '<h1>🎙 '+tr('Говорение','Falar')+'</h1><article class="game-start"><h2>'+tr('6 фраз за тренировку','6 frases por prática')+'</h2><p>'+tr('Выбери режим и говори по-португальски. Микрофон необязателен.','Escolha um modo e fale português. O microfone é opcional.')+'</p><div class="ux-filters">'+['A1','A2','B1','B2'].map(l=>gameBtn(l,'oralChoose("level",'+JSON.stringify(l)+')',o.level!==l)).join('')+'</div><label>'+tr('Тема','Tema')+'<select onchange="oralChoose(\'theme\',this.value)">'+[['church',tr('Церковь и служение','Igreja e serviço')],['bible',tr('Библия','Bíblia')],['daily',tr('Повседневная речь','Conversação cotidiana')],['all',tr('Все темы','Todos os temas')]].map(([v,t])=>'<option value="'+v+'" '+(o.theme===v?'selected':'')+'>'+esc(t)+'</option>').join('')+'</select></label><div class="oral-mode-list">'+ORAL_MODES.map(m=>'<button class="game-option '+(o.mode===m?'selected':'')+'" aria-pressed="'+(o.mode===m)+'" onclick="oralChoose(\'mode\',\''+m+'\')">'+esc(oralModeName(m))+'</button>').join('')+'</div><p class="muted">'+count+' '+tr('доступных фраз','frases disponíveis')+'</p>'+gameBtn(tr('Начать говорить','Começar a falar'),'oralStart()',false,!count)+'</article><details><summary>'+tr('Выбрать фразу вручную','Escolher frase manualmente')+'</summary>'+micLegacyPageHTML()+'</details>'
}

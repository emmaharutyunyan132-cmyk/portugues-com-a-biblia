/* Learning path, adaptive practice and sharing. No account or personal data is transmitted. */
const JOURNEY_LEVELS=['A1','A2','B1','B2'];
const JOURNEY_SIZE=8;
const JOURNEY_BLOCK=12;
let journeyOffset=null;
function journeyState(){
 let s=gameState();
 if(!s.journey||typeof s.journey!=='object'||Array.isArray(s.journey))s.journey={};
 let j=s.journey;
 if(!JOURNEY_LEVELS.includes(j.level))j.level=JOURNEY_LEVELS.find(l=>L.some((x,i)=>x[0]===l&&!S.done.includes(i)))||'A1';
 if(typeof j.autoAudio!=='boolean')j.autoAudio=true;
 return j
}
function journeyRows(level=journeyState().level){return gameOrder().filter(i=>L[i][0]===level)}
function journeyNext(){let rows=journeyRows(),n=rows.find(i=>!S.done.includes(i));if(n!==undefined)return n;let later=JOURNEY_LEVELS.slice(JOURNEY_LEVELS.indexOf(journeyState().level)+1);for(let level of later){let n=journeyRows(level).find(i=>!S.done.includes(i));if(n!==undefined)return n}return rows[0]??0}
function journeyChoose(level){if(!JOURNEY_LEVELS.includes(level))return;journeyState().level=level;journeyOffset=null;save();render()}
function journeyPage(delta){let rows=journeyRows(),n=journeyNext(),current=journeyOffset??Math.max(0,Math.floor(rows.indexOf(n)/JOURNEY_SIZE)*JOURNEY_SIZE);journeyOffset=Math.max(0,Math.min(Math.floor((rows.length-1)/JOURNEY_SIZE)*JOURNEY_SIZE,current+delta*JOURNEY_SIZE));render();scrollTo(0,0)}
function journeyHTML(){
 let j=journeyState(),rows=journeyRows(),next=journeyNext(),start=journeyOffset??Math.max(0,Math.floor(rows.indexOf(next)/JOURNEY_SIZE)*JOURNEY_SIZE),done=new Set(S.done),n=rows.filter(i=>done.has(i)).length;
 let h='<div class="journey-head"><h1>'+tr('Твой путь','Seu caminho')+'</h1><p class="muted">'+tr('Выбери уровень и двигайся по одному уроку.','Escolha o nível e avance uma lição por vez.')+'</p><div class="ux-filters">'+JOURNEY_LEVELS.map(l=>'<button class="'+(j.level===l?'':'secondary')+'" aria-pressed="'+(j.level===l)+'" onclick="journeyChoose('+arg(l)+')">'+l+'</button>').join('')+'</div><article><b>'+j.level+' · '+n+'/'+rows.length+'</b><progress aria-label="'+tr('Прогресс уровня','Progresso do nível')+'" max="'+rows.length+'" value="'+n+'"></progress>'+gameBtn(tr('Продолжить путь','Continuar caminho'),'gameCourse('+next+')')+'</article></div>';
 h+='<div class="journey-track">'+rows.slice(start,start+JOURNEY_SIZE).map((i,k)=>{let l=L[i],status=done.has(i)?'done':i===next?'next':'available',label=status==='done'?'✓':status==='next'?'▶':String(start+k+1);return '<button class="journey-node '+status+'" onclick="gameCourse('+i+')"><span class="journey-dot" aria-hidden="true">'+label+'</span><span><strong>'+esc(tr(l[3],l[2]))+'</strong><small>'+tr('Урок ','Lição ')+(start+k+1)+(status==='done'?' · '+tr('Пройден','Concluída'):status==='next'?' · '+tr('Следующий','Próxima'):'')+'</small></span></button>'}).join('')+'</div>';
 h+='<div class="ux-pager">'+gameBtn('‹ '+tr('Назад','Anterior'),'journeyPage(-1)',true,start===0)+'<span>'+(start+1)+'–'+Math.min(start+JOURNEY_SIZE,rows.length)+' / '+rows.length+'</span>'+gameBtn(tr('Далее','Próxima')+' ›','journeyPage(1)',true,start+JOURNEY_SIZE>=rows.length)+'</div><details class="eb-detail"><summary>'+tr('Все уроки и поиск','Todas as lições e busca')+'</summary><div class="eb-detail-body">'+uxCatalogHTML('map')+'</div></details>';
 return h
}
function journeyToggleAudio(){let j=journeyState();j.autoAudio=!j.autoAudio;save();if(!j.autoAudio)stopSpeech();render()}
function journeyAutoPlay(){if(page!=='game'||!journeyState().autoAudio)return;let q=gameCurrent();if(!q||gameSession()?.feedback)return;let p=q.kind==='listen'?q.listen:q.kind==='choice'&&q.target==='ru'?(q.pt||q.prompt):null;if(p)speak(p)}
function journeyBoundary(d){return d.at>0&&d.at%JOURNEY_BLOCK===0&&!d.feedback&&d.blockSeen!==d.at}
function journeyResumeBlock(){let d=gameSession();if(!d)return;d.blockSeen=d.at;save();render();journeyAutoPlay()}
function journeyBlockHTML(d){return '<article class="game-card game-end"><span class="game-celebrate">🌿</span><h1>'+tr('Отличный шаг!','Ótimo passo!')+'</h1><p>'+tr('Часть урока завершена. Можно продолжить сейчас или позже.','Uma parte da lição terminou. Continue agora ou mais tarde.')+'</p>'+gameBtn(tr('Продолжить','Continuar'),'journeyResumeBlock()')+gameBtn(tr('Сохранить и выйти','Salvar e sair'),'go("home")',true)+'</article>'}
function journeyWordDue(id,p,now=Date.now()){if(!p||!(p.seen>0))return false;return !Number.isFinite(p.due)||p.due<=now}
function journeyReviewEntries(src,limit=3,now=Date.now()){
 let s=gameState(),excluded=new Set(src.words.map(w=>wordId(w[0]))),known=baseVocabulary().filter(e=>!excluded.has(e.id)&&journeyWordDue(e.id,s.words[e.id],now));
 return known.sort((a,b)=>{let x=s.words[a.id],y=s.words[b.id];return ((y.misses||0)-(x.misses||0))||((x.due||0)-(y.due||0))||a.pt.localeCompare(b.pt)}).slice(0,limit)
}
function journeyReviewTasks(src){let entries=journeyReviewEntries(src),pool=src.words.map(w=>w[1]).concat(entries.map(e=>e.ru));return entries.map((e,i)=>({id:'review:'+i,kind:'choice',prompt:e.pt,answer:e.ru,opts:gameChoices(e.ru,pool),pt:e.pt,ru:e.ru,target:'ru',word:e.pt,adaptive:true})).filter(q=>q.opts.length>1)}
function journeyRecord(q,ok){
 if(!q.word)return;
 let p=gameState().words[wordId(q.word)];if(!p)return;
 let step=Number.isInteger(p.step)?p.step:0;
 if(ok){p.step=Math.min(5,step+1);p.due=Date.now()+[0,1,3,7,14,30][p.step]*86400000}
 else{p.misses=(p.misses||0)+1;p.step=0;p.due=Date.now()}
}
function journeyReviewCount(){let now=Date.now(),w=gameState().words;return Object.entries(w).filter(([id,p])=>journeyWordDue(id,p,now)).length}
function journeyShareHTML(){return '<article><h2>'+tr('Поделиться игрой','Compartilhar o jogo')+'</h2><p class="muted">'+tr('Бесплатный гостевой режим. У каждого браузера свой прогресс; заметки и ответы не передаются по ссылке.','Modo visitante gratuito. Cada navegador tem seu próprio progresso; anotações e respostas não são compartilhadas.')+'</p>'+gameBtn(tr('Поделиться ссылкой','Compartilhar link'),'journeyShare()')+'<p id="share-status" role="status" class="muted"></p><label>'+tr('Ссылка','Link')+'<input id="share-url" readonly value="https://emmaharutyunyan132-cmyk.github.io/portugues-com-a-biblia/"></label></article>'}
function journeyShare(){
 let url='https://emmaharutyunyan132-cmyk.github.io/portugues-com-a-biblia/',message=m=>{let e=$('#share-status');if(e)e.textContent=m};
 if(typeof navigator!=='undefined'&&typeof navigator.share==='function'){navigator.share({title:'Português com a Bíblia',url}).catch(e=>{if(e?.name!=='AbortError')message(tr('Скопируй ссылку ниже.','Copie o link abaixo.'))});return}
 if(typeof navigator!=='undefined'&&navigator.clipboard?.writeText){navigator.clipboard.writeText(url).then(()=>message(tr('Ссылка скопирована.','Link copiado.')),()=>message(tr('Скопируй ссылку ниже.','Copie o link abaixo.')));return}
 let e=$('#share-url');if(e){e.focus();e.select?.()}message(tr('Скопируй ссылку ниже.','Copie o link abaixo.'))
}

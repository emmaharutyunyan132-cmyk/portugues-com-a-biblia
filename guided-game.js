/* Guided game for the existing course and Bible library. All state stays in pcb-v1. */
let gameKey=null,gameResult=null;
const GAME_VERSION=1;
function gameState(){if(!S.game||typeof S.game!=='object'||Array.isArray(S.game))S.game={};let s=S.game;if(!s.sessions||typeof s.sessions!=='object'||Array.isArray(s.sessions))s.sessions={};if(!s.words||typeof s.words!=='object'||Array.isArray(s.words))s.words={};return s}
function gameSource(key){
 if(/^c:\d+$/.test(key)){let i=Number(key.slice(2)),l=L[i];if(l)return {key,kind:'course',i,l,title:l[2],ru:l[3],level:l[0],words:l[7],examples:l[8]}}
 if(/^b:\d+:\d+:\d+$/.test(key)){let [b,c,n]=key.slice(2).split(':').map(Number),i=ESTUDO_CHAPTERS.findIndex(x=>x[0]===b&&x[1]===c),ch=ESTUDO_CHAPTERS[i],v=ch?.[8].find(x=>x[0]===n);if(v)return {key,kind:'bible',i,ch,v,title:ebLabel(ch,n),ru:ebLabel(ch,n),level:v[3],words:v[6],examples:[[v[1],v[2]]]}}
 return null
}
function gameBibleKey(i,n){let c=ESTUDO_CHAPTERS[i];return c?'b:'+c[0]+':'+c[1]+':'+n:''}
function gameChoices(correct,items){let a=[correct];for(let x of shuffle(items)){if(typeof x==='string'&&x.trim()&&!a.some(y=>norm(y)===norm(x)))a.push(x);if(a.length===4)break}return shuffle(a)}
function gameBuild(src){
 let tasks=[],add=q=>tasks.push({...q,id:'q'+tasks.length}),words=src.words,pt=words.map(w=>w[0]),ru=words.map(w=>w[1]);
 for(let [p,r] of words){
  add({kind:'learn',pt:p,ru:r});
  let opts=gameChoices(r,ru);if(opts.length>1)add({kind:'choice',prompt:p,answer:r,opts,pt:p,ru:r,target:'ru',word:p});
 }
 // Delayed recall only after every word has been introduced.
 for(let [p,r] of words){let opts=gameChoices(p,pt);if(opts.length>1)add({kind:'listen',prompt:'',listen:p,answer:p,opts,pt:p,ru:r,target:'pt',word:p});add({kind:'write',prompt:r,answer:p,pt:p,ru:r,target:'pt',word:p})}
 if(src.kind==='course'){
  for(let [p,r] of src.examples)add({kind:'phrase',pt:p,ru:r});
  for(let q of buildQueue(src.i)){
   if(q.type==='Vocabulário'||(q.type==='Русский → Português'&&pt.includes(q.answer)))continue;
   let kind=q.listen?'listen':q.bank?'tiles':q.opts?'choice':'write';
   // Exact spelling or the previously agreed variants; sentence translations also have self-check.
   add({kind,prompt:q.prompt,answer:q.answer,opts:q.opts,bank:q.bank,listen:q.listen,context:q.context,target:q.target,accept:q.accept,selfCheck:q.selfCheck||q.type==='Tradução',ex:q.ex,rule:q.type==='Complete a frase'?[src.l[6],src.l[5]]:null});
  }
  let w=src.level==='A2'?A2_WRITING[src.i]:src.l[10];if(w&&['A2','B1','B2'].includes(src.level))add({kind:'free',ru:w[0],pt:w[1],model:w[2]});
 }else{
  let v=src.v;
  add({kind:'phrase',pt:v[1],ru:v[2],bible:true});
  // No exact-answer scoring for interpretation or an open translation.
  add({kind:'context',pt:v[4],ru:v[5],example:v[1]});
  add({kind:'reflect',prompt:v[7],answer:v[8],pt:v[9],ru:v[10]});
 }
 return tasks.filter(q=>!['learn','phrase','context'].includes(q.kind))
}
function gameValid(d){return !!d&&d.version===GAME_VERSION&&Array.isArray(d.tasks)&&d.tasks.length>0&&d.tasks.length<=250&&Number.isInteger(d.at)&&d.at>=0&&d.at<d.tasks.length&&d.tasks.every(q=>q&&typeof q.id==='string'&&['learn','phrase','choice','listen','write','tiles','free','context','reflect'].includes(q.kind))&&d.mastered&&typeof d.mastered==='object'&&Array.isArray(d.retries)}
function gameSession(){let d=gameState().sessions[gameKey];return gameValid(d)?d:null}
function gameStart(key,restart=false){
 let src=gameSource(key);if(!src)return;
 let s=gameState(),d=s.sessions[key];if(!gameValid(d)||restart){d={version:GAME_VERSION,tasks:[...journeyReviewTasks(src),...gameBuild(src)],at:0,mastered:{},retries:[],first:{},input:'',picked:[],selected:null,feedback:null,revealed:false,misses:0};s.sessions[key]=d}
 // Preserve already completed work and current answers when resuming an older session.
 let old=d.tasks[d.at],before=d.tasks.slice(0,d.at),remaining=d.tasks.slice(d.at).filter(q=>!['learn','phrase','context'].includes(q.kind));
 if(remaining.length&&remaining.length!==d.tasks.length-d.at){d.tasks=before.concat(remaining);if(remaining[0]!==old){d.input='';d.picked=[];d.selected=null;d.feedback=null;d.revealed=false}}
 gameKey=key;gameResult=null;s.last=key;
 if(src.kind==='bible'){ebChapter=src.i;ebVerse=src.v[0];ebBook=src.ch[0];ebState().last=[src.ch[0],src.ch[1],src.v[0]];ebState().step=0}
 if(src.kind==='course'){journeyState().level=src.level;journeyOffset=null}save();go('game');journeyAutoPlay()
}
function gameCourse(i){if(!Number.isInteger(i)||!L[i])return;let k=String(i);if(validDraft(S.drafts[k])){resumeLesson(k);return}gameStart('c:'+i)}
function gameBible(i,v){gameStart(gameBibleKey(i,v))}
function gameOrder(){return L.map((l,i)=>({i,level:l[0]})).sort((a,b)=>a.level.localeCompare(b.level)||a.i-b.i).map(x=>x.i)}
function gameNextCourse(){return journeyNext()}
function gameContinue(){let s=gameState();if(gameSource(s.last)&&gameValid(s.sessions[s.last]))gameStart(s.last);else if(validDraft(S.drafts[S.resume]))resumeLesson(S.resume);else gameCourse(gameNextCourse())}
function gameCurrent(){let d=gameSession();return d?d.tasks[d.at]:null}
function gameRemember(q){if(!q.word)return;let s=gameState(),id=wordId(q.word),p=s.words[id];if(!p||typeof p!=='object')p=s.words[id]={seen:0,correct:0};p.seen++;if(gameSession().feedback?.ok)p.correct++;p.last=Date.now()}
function gameSetInput(v){let d=gameSession();if(!d||d.feedback)return;d.input=String(v).slice(0,6000);save();let b=$('#game-check');if(b)b.disabled=!d.input.trim()}
function gameSelect(i){let d=gameSession(),q=gameCurrent();if(!d||d.feedback||!q.opts||!Number.isInteger(i)||!q.opts[i])return;d.selected=i;save();render()}
function gameTile(i){let d=gameSession(),q=gameCurrent();if(!d||d.feedback||!q.bank||!Number.isInteger(i)||i<0||i>=q.bank.length||d.picked.includes(i))return;d.picked.push(i);save();render()}
function gameUntile(i){let d=gameSession();if(!d||d.feedback)return;d.picked.splice(i,1);save();render()}
function gameAudio(){let q=gameCurrent();if(!q)return;let p=q.listen||q.pt||(q.target==='pt'?q.answer:q.prompt);if(p)speak(p)}
function gameReveal(){let d=gameSession();if(!d)return;d.revealed=true;save();render()}
function gameCheck(){
 let d=gameSession(),q=gameCurrent();if(!d||!q||d.feedback)return;let input=q.opts?q.opts[d.selected]:q.bank?d.picked.map(i=>q.bank[i]).join(' '):d.input;
 if(!input||!String(input).trim()||q.bank&&d.picked.length!==q.bank.length)return;
 let variants=[q.answer,...(q.accept||[])],ok=variants.some(a=>norm(a)===norm(input)),accent=ok&&q.target==='pt'&&!variants.some(a=>canonical(a)===canonical(input));
 d.feedback={ok,accent};if(!Object.prototype.hasOwnProperty.call(d.first,q.id))d.first[q.id]=ok;
 if(ok)d.mastered[q.id]=true;else{d.misses++;if(!q.retry&&!d.retries.some(x=>x.id===q.id))d.retries.push({...q,retry:true})}
 gameRemember(q);journeyRecord(q,ok);save();render()
}
function gameSelf(){let d=gameSession(),q=gameCurrent();if(!d||!q||!q.selfCheck||!d.feedback||d.feedback.ok)return;d.feedback.ok=true;d.feedback.self=true;d.mastered[q.id]=true;d.retries=d.retries.filter(x=>x.id!==q.id);save();render()}
function gameAdvance(){
 let d=gameSession(),q=gameCurrent();if(!d||!q)return;
 if(['choice','listen','write','tiles'].includes(q.kind)&&!d.feedback)return;
 if(q.kind==='reflect'&&!d.revealed)return;
 if(q.kind==='learn'){let w=gameState().words[wordId(q.pt)]||{seen:0,correct:0};w.seen++;w.last=Date.now();gameState().words[wordId(q.pt)]=w}
 if(q.kind==='free'){let src=gameSource(gameKey),field=src.level==='A2'?'a2Writing':src.level==='B1'?'b1Writing':'b2Writing';S[field][src.i]=d.input.slice(0,src.level==='A2'?3000:src.level==='B1'?4000:6000)}
 stopSpeech();d.at++;
 if(d.at>=d.tasks.length&&d.retries.length){d.tasks.push(...d.retries.filter(x=>!d.mastered[x.id]));d.retries=[]}
 if(d.at>=d.tasks.length){gameFinish(d);return}
 d.input='';d.selected=null;d.picked=[];d.feedback=null;d.revealed=false;let upcoming=d.tasks[d.at],src=gameSource(gameKey);if(upcoming?.kind==='free'&&src?.kind==='course'){let field=src.level==='A2'?'a2Writing':src.level==='B1'?'b1Writing':'b2Writing';d.input=typeof S[field][src.i]==='string'?S[field][src.i].slice(0,6000):''}save();render();scrollTo(0,0);journeyAutoPlay()
}
function gameFinish(d){
 let src=gameSource(gameKey);if(!src)return;let ids=[...new Set(d.tasks.filter(q=>!q.adaptive&&['choice','listen','write','tiles'].includes(q.kind)).map(q=>q.id))],correct=ids.filter(id=>d.mastered[id]).length,passed=correct>=Math.ceil(ids.length*.8),already=src.kind==='course'?S.done.includes(src.i):!!ebState().done[ebKey(src.ch,src.v[0])],xp=0;
 if(passed&&!already){if(src.kind==='course')S.done.push(src.i);else ebState().done[ebKey(src.ch,src.v[0])]=true;xp=correct*10;S.xp+=xp;let day=new Date().toLocaleDateString('en-CA');if(!S.days.includes(day))S.days.push(day)}
 gameResult={key:gameKey,passed,correct,total:ids.length,xp,misses:d.misses};delete gameState().sessions[gameKey];if(gameState().last===gameKey)delete gameState().last;save();go('game-result')
}
function gameNext(){let src=gameSource(gameResult?.key||'');if(!src)return go('home');if(!gameResult.passed)return gameStart(src.key,true);if(src.kind==='course'){let order=gameOrder(),n=order.slice(order.indexOf(src.i)+1).find(i=>!S.done.includes(i));return n===undefined?go('home'):gameCourse(n)}let next=src.ch[8].find(v=>v[0]>src.v[0]);if(next)return gameBible(src.i,next[0]);ebBook=src.ch[0];ebScreen='chapters';bTab='estudo';go('bible')}
function gameBtn(text,fn,secondary=false,disabled=false){return '<button type="button" class="'+(secondary?'secondary':'wide')+'" '+(disabled?'disabled ':'')+'onclick="'+esc(fn)+'">'+esc(text)+'</button>'}
function gameSound(text){return '<div class="game-sound">'+gameBtn('🔊 '+tr('Послушать','Ouvir'),'speak('+JSON.stringify(text)+')')+gameBtn('0,75×','speak('+JSON.stringify(text)+',0.75)',true)+'</div><p id="audio-status" class="muted" role="status"></p>'}
function gameDetails(src){if(src.kind!=='bible')return '';let v=src.v,c=src.ch;return '<details class="game-more"><summary>'+tr('О стихе и оригинале ACF','Sobre o versículo e a ACF')+'</summary>'+bLinks(c[0],c[1])+'<p>'+esc(tr(v[5],v[4]))+'</p><p>'+esc(tr(v[10],v[9]))+'</p><p>'+esc(tr(c[7],c[6]))+'</p><p>'+v[11].map(esc).join(' · ')+'</p><label>'+tr('Мои заметки','Minhas anotações')+'<textarea rows="3" maxlength="4000" oninput="ebNote(this.value)">'+esc(ebState().notes[ebKey(c,v[0])]||'')+'</textarea></label><button class="secondary" onclick="ebMark(\'memory\')">'+(ebState().memory[ebKey(c,v[0])]?'✓ ':'')+tr('Сверено по памяти','Memorização conferida')+'</button></details>'}
function gameWordExtra(q){let e=baseVocabulary().find(x=>x.id===wordId(q.pt));if(!e||!e.example)return '';return '<details><summary>'+tr('Пример в предложении','Exemplo em uma frase')+'</summary><p lang="pt-BR">'+esc(e.example)+' '+audio(e.example)+'</p>'+(e.translation?'<p class="muted">'+esc(e.translation)+'</p>':'')+'</details>'}
function gameHTML(){
 let src=gameSource(gameKey||''),d=gameSession(),q=gameCurrent();if(!src||!d||!q)return '<article>'+gameBtn(tr('К урокам','Voltar às lições'),'go("map")')+'</article>';
 if(journeyBoundary(d))return journeyBlockHTML(d);
 let h='<div class="game-top"><button class="secondary game-close" aria-label="'+tr('Сохранить и выйти','Salvar e sair')+'" onclick="go(\'home\')">×</button><progress aria-label="'+tr('Прогресс урока','Progresso da lição')+'" max="'+(d.tasks.length+d.retries.length)+'" value="'+d.at+'"></progress><span>'+ (d.at+1)+'/'+(d.tasks.length+d.retries.length)+'</span><button class="secondary game-close" aria-label="'+tr('Автоозвучка','Áudio automático')+'" aria-pressed="'+journeyState().autoAudio+'" onclick="journeyToggleAudio()">'+(journeyState().autoAudio?'🔊':'🔇')+'</button></div><p class="muted game-topic">'+esc(tr(src.ru,src.title))+' · '+esc(src.level)+'</p><section class="game-card">';
 let next=tr('Продолжить','Continuar'),check=tr('Проверить','Verificar');if(q.adaptive)h+='<p class="game-kicker">'+tr('Повторение знакомого слова','Revisão de palavra conhecida')+'</p>';
 if(q.kind==='learn'||q.kind==='phrase'){h+='<p class="game-kicker">'+tr(q.kind==='learn'?'Новое слово':'Новая фраза',q.kind==='learn'?'Palavra nova':'Nova frase')+'</p><h2 class="game-word" lang="pt-BR">'+esc(q.pt)+'</h2><p class="game-translation" lang="ru">'+esc(q.ru)+'</p>'+gameSound(q.pt)+'<p class="muted">'+tr('Послушай и повтори вслух.','Ouça e repita em voz alta.')+'</p>'+(q.kind==='learn'?gameWordExtra(q):'')+(q.bible?'<p class="muted">'+tr('Учебный пересказ, не дословный текст ACF.','Resumo didático, não texto literal da ACF.')+'</p>':'')+gameBtn(next,'gameAdvance()')}
 else if(q.kind==='context'){h+='<p class="game-kicker">'+tr('Заметь закономерность','Observe o padrão')+'</p><h2>'+esc(tr(q.ru,q.pt))+'</h2><p lang="pt-BR">'+esc(q.example)+'</p>'+gameSound(q.example)+gameBtn(next,'gameAdvance()')}
 else if(q.kind==='reflect'){h+='<h2>'+tr('Пойми смысл','Compreenda o sentido')+'</h2>'+(src.kind==='bible'?'<p class="muted">'+tr('Учебный пересказ (не цитата ACF)','Resumo didático (não é citação da ACF)')+'</p><p lang="pt-BR">'+esc(src.v[1])+'</p>'+audio(src.v[1]):'')+'<p class="game-word">'+esc(q.prompt)+'</p>'+gameSound(q.prompt)+(d.revealed?'<div class="game-feedback"><b>'+esc(q.answer)+'</b><details><summary>'+tr('Подробнее','Saiba mais')+'</summary><p>'+esc(tr(q.ru,q.pt))+'</p></details></div>'+gameBtn(next,'gameAdvance()'):gameBtn(tr('Сравнить с ответом','Conferir resposta'),'gameReveal()'))}
 else if(q.kind==='free'){h+='<h2>'+tr('Напиши своими словами','Escreva com suas palavras')+'</h2><p>'+esc(tr(q.ru,q.pt))+'</p><textarea lang="pt-BR" maxlength="6000" rows="4" oninput="gameSetInput(this.value)">'+esc(d.input)+'</textarea><details><summary>'+tr('Образец для самопроверки','Modelo para autoavaliação')+'</summary><p>'+esc(q.model)+'</p>'+audio(q.model)+'</details>'+gameBtn(tr('Сохранить и продолжить','Salvar e continuar'),'gameAdvance()')+'<p class="muted">'+tr('Можно пропустить. Автоматической оценки свободного текста нет.','Opcional. Sem correção automática de texto livre.')+'</p>'}
 else{
  h+='<h2>'+tr(q.retry?'Попробуй ещё раз':q.kind==='listen'?'Что ты слышишь?':q.kind==='tiles'?'Собери фразу':q.kind==='write'?'Напиши ответ':'Выбери перевод',q.retry?'Tente outra vez':q.kind==='listen'?'O que você ouve?':q.kind==='tiles'?'Monte a frase':q.kind==='write'?'Escreva a resposta':'Escolha a tradução')+'</h2>';
  if(q.kind==='listen')h+=gameSound(q.listen)+'<details><summary>'+tr('Не слышно? Показать текст','Sem áudio? Mostrar texto')+'</summary><p>'+esc(q.listen)+'</p></details>';
  else h+='<p class="game-word">'+esc(q.prompt)+'</p>'+(q.context?'<p class="muted">'+esc(q.context)+'</p>':'')+(q.pt&&q.target==='ru'?gameSound(q.pt):'');
  if(q.opts)h+='<div class="game-options">'+q.opts.map((x,i)=>'<button class="game-option '+(d.selected===i?'selected ':'')+(d.feedback&&norm(x)===norm(q.answer)?'right ':'')+'" aria-pressed="'+(d.selected===i)+'" '+(d.feedback?'disabled ':'')+'onclick="gameSelect('+i+')">'+esc(x)+'</button>').join('')+'</div>';
  else if(q.bank)h+='<div class="built">'+d.picked.map((n,i)=>'<button class="tile" '+(d.feedback?'disabled ':'')+'onclick="gameUntile('+i+')">'+esc(q.bank[n])+'</button>').join('')+'</div><div class="word-bank">'+q.bank.map((x,i)=>'<button class="tile" '+(d.feedback||d.picked.includes(i)?'disabled ':'')+'onclick="gameTile('+i+')">'+esc(x)+'</button>').join('')+'</div>';
  else h+='<label>'+tr('Твой ответ','Sua resposta')+'<input lang="'+(q.target==='ru'?'ru':'pt-BR')+'" autocomplete="off" value="'+esc(d.input)+'" '+(d.feedback?'disabled ':'')+'oninput="gameSetInput(this.value)" onkeydown="if(event.key===\'Enter\')gameCheck()"></label>';
  if(q.word&&q.target==='ru'&&!d.feedback)h+='<details><summary>'+tr('Показать перевод, если не знаешь','Ver tradução, se precisar')+'</summary><p>'+esc(q.pt)+' — '+esc(q.ru)+'</p></details>';
  if(q.rule&&!d.feedback)h+='<details><summary>'+tr('Подсказка','Dica')+'</summary><p>'+esc(tr(...q.rule))+'</p></details>';
  if(d.feedback){h+='<div class="game-feedback '+(d.feedback.ok?'':'retry')+'" role="status"><b>'+tr(d.feedback.ok?'Верно!':'Запомни этот ответ',d.feedback.ok?'Muito bem!':'Lembre-se desta resposta')+'</b><p>'+esc(q.answer)+'</p>'+(d.feedback.accent?'<p>'+tr('Проверь ударения и диакритику.','Confira os acentos.')+'</p>':'')+(q.ru?'<p>'+esc(q.ru)+'</p>':'')+(q.ex?'<details><summary>'+tr('Пояснение','Explicação')+'</summary>'+esc(q.ex)+'</details>':'')+(!d.feedback.ok&&!q.retry?'<p class="muted">'+tr('Мы повторим это в конце урока.','Vamos revisar no fim da lição.')+'</p>':'')+'</div>';
   if(!d.feedback.ok&&q.selfCheck)h+=gameBtn(tr('Мой перевод тоже верный (самопроверка)','Minha tradução também está correta (autoavaliação)'),'gameSelf()',true);
   h+=gameBtn(next,'gameAdvance()');
  }else {let ready=q.opts?Number.isInteger(d.selected):q.bank?d.picked.length===q.bank.length:!!d.input.trim();h+='<button id="game-check" type="button" class="wide" '+(ready?'':'disabled ')+'onclick="gameCheck()">'+check+'</button>'}
 }
 return h+'</section>'+gameDetails(src)
}
function gameResultHTML(){let r=gameResult,src=gameSource(r?.key||'');if(!r||!src)return gameBtn(tr('Главная','Início'),'go("home")');return '<article class="game-card game-end"><span class="game-celebrate">'+(r.passed?'🌿':'📘')+'</span><h1>'+tr(r.passed?'Урок завершён!':'Продолжим практику?',r.passed?'Lição concluída!':'Vamos praticar mais?')+'</h1><p>'+esc(tr(src.ru,src.title))+'</p><p><b>'+r.correct+' / '+r.total+'</b> '+tr('заданий закреплено','exercícios consolidados')+'</p><p class="muted">'+(r.xp?'+'+r.xp+' XP · ':'')+tr('Ошибки — часть обучения.','Errar faz parte da aprendizagem.')+'</p>'+gameBtn(tr(r.passed?(src.kind==='bible'?(src.v[0]<src.ch[8].length?'Следующий стих':'К главам'):'Следующий урок'):'Повторить урок',r.passed?(src.kind==='bible'?(src.v[0]<src.ch[8].length?'Próximo versículo':'Ver capítulos'):'Próxima lição'):'Repetir lição'),'gameNext()')+gameBtn(tr('На главную','Início'),'go("home")',true)+'</article>'}

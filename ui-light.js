/* Compact navigation and bounded course lists; existing IDs and local state remain unchanged. */
let uxCatalog={map:{level:'all',query:'',at:0},grammar:{level:'all',query:'',at:0}},uxAudioLoading=false,uxAudioError=false,uxAudioTicket=null;
const uxPageSize=20;
function uxTile(p,icon,ru,pt,ruSub,ptSub){return '<button class="ux-tile" onclick="uxNavigate('+arg(p)+')"><span class="ux-icon" aria-hidden="true">'+icon+'</span><span><strong>'+esc(tr(ru,pt))+'</strong><small>'+esc(tr(ruSub,ptSub))+'</small></span></button>'}
function uxNavigate(p){if(p==='estudo'||p==='bible'){bTab='estudo';ebScreen='home';go('bible')}else go(p)}
function uxHome(){
 let completed=S.done.length,percent=Math.round(100*completed/Math.max(1,L.length)),s=gameState(),src=gameSource(s.last||''),resuming=src&&gameValid(s.sessions[s.last]),next=gameSource('c:'+gameNextCourse()),old=validDraft(S.drafts[S.resume]),oldTitle=old?(S.resume==='review'?tr('Повторение ошибок','Revisão de erros'):tr(L[Number(S.resume)]?.[3]||'Урок',L[Number(S.resume)]?.[2]||'Lição')):'';
 return '<article class="hero"><div><h1>Português com a Bíblia</h1><p>'+tr('Учись в своём темпе, вместе с Luz.','Aprenda no seu ritmo, com Luz.')+'</p></div>'+sheep+'</article><article class="game-start"><span class="tag">'+tr('Твой следующий шаг','Seu próximo passo')+'</span><h2>'+esc(!resuming&&old?oldTitle:tr((resuming?src:next).ru,(resuming?src:next).title))+'</h2>'+gameBtn(resuming||validDraft(S.drafts[S.resume])?tr('Продолжить урок','Continuar lição'):tr('Начать урок','Começar lição'),'gameContinue()')+(Object.keys(s.words).length?gameBtn(tr('Повторить слова','Revisar palavras')+' · '+journeyReviewCount(),'cardMode="learned";go("cards")',true):'')+'</article>'+
 '<div class="ux-heading"><h2>'+tr('Что будем изучать?','O que vamos estudar?')+'</h2></div><div class="eb-list home-main">'+
 uxTile('estudo','📖','Библия','Bíblia','Один стих за раз','Um versículo de cada vez')+
 uxTile('map','🎓','Португальский','Português','Игровая дорожка A1–B2','Caminho A1–B2')+
 uxTile('foundations','🔤','Основы португальского','Português essencial','Местоимения, глаголы, разговорные фразы','Pronomes, verbos e frases do dia a dia')+
 uxTile('interpreters','🎧','Перевод служений','Interpretação','Тренировка перевода RU ↔ PT','Prática RU ↔ PT')+
 uxTile('speaking','🎙','Говорение','Falar','Послушай, повтори, переведи','Ouça, repita, traduza')+
 uxTile('dict','📚','Слова','Palavras','Словарь и карточки','Vocabulário e cartões')+
 '</div><details class="eb-detail"><summary>'+tr('Другие тренировки','Outras práticas')+'</summary><div class="eb-detail-body ux-grid">'+
 uxTile('grammar','✏️','Грамматика','Gramática','Правила по уровням','Regras por nível')+
 uxTile('verbs','📝','Глаголы','Verbos','Спряжения','Conjugações')+
 uxTile('preps','🧩','Предлоги','Preposições','Правила и практика','Regras e prática')+
 uxTile('prayer','🙏','Молитва','Oração','Записи и практика','Anotações e prática')+
 uxTile('review','↻','Повторение','Revisão','Карточки и ошибки','Cartões e erros')+
 uxTile('cards','🗂','Карточки','Cartões','Запоминание слов','Memorize palavras')+
 '</div></details><details class="eb-detail"><summary>'+tr('Поделиться с другом','Compartilhar com um amigo')+'</summary>'+journeyShareHTML()+'</details><p class="muted">'+completed+' / '+L.length+' '+tr('уроков пройдено','lições concluídas')+' · '+percent+'% · '+S.xp+' XP</p>';
}
function uxNav(){
 let current=['intro','quiz','result','game','game-result'].includes(page)?'map':page==='foundations'||page==='cards'||page==='cardrun'||page==='review'?'dict':page;
 let nav=$('#nav');if(!nav)return;
 let rows=[['home','⌂','Главная','Início'],['map','▤','Уроки','Lições'],['bible','📖','Библия','Bíblia'],['dict','📚','Словарь','Palavras'],['profile','⚙','Профиль','Perfil']];
 let h=rows.map(([p,i,r,t])=>'<button type="button" '+(current===p?'aria-current="page" ':'')+'onclick="uxNavigate('+arg(p)+')"><span class="nav-icon" aria-hidden="true">'+i+'</span>'+tr(r,t)+'</button>').join('');
 if(nav.dataset.content!==h){nav.innerHTML=h;nav.dataset.content=h}
}
function uxCatalogFilter(kind,level){if(!uxCatalog[kind]||!['all','A1','A2','B1','B2'].includes(level))return;Object.assign(uxCatalog[kind],{level,at:0});render()}
function uxCatalogSearch(kind,q){if(!uxCatalog[kind])return;Object.assign(uxCatalog[kind],{query:String(q).slice(0,200),at:0});uxUpdateList(kind)}
function uxCatalogRows(kind){
 let state=uxCatalog[kind],q=norm(state.query);
 return L.map((l,i)=>({l,i})).filter(({l})=>(state.level==='all'||l[0]===state.level)&&(!q||norm([l[0],l[1],l[2],l[3],...(kind==='grammar'?[l[5],l[6]]:[])].join(' ')).includes(q))).sort((a,b)=>a.l[0].localeCompare(b.l[0])||a.i-b.i);
}
function uxPage(kind,delta){if(!uxCatalog[kind]||!Number.isInteger(delta))return;let s=uxCatalog[kind],max=Math.max(0,Math.ceil(uxCatalogRows(kind).length/uxPageSize)-1);s.at=Math.min(max,Math.max(0,s.at+delta));uxUpdateList(kind);let e=$('#ux-list');if(e&&typeof e.scrollIntoView==='function')e.scrollIntoView({block:'start'})}
function uxList(kind){
 let s=uxCatalog[kind],rows=uxCatalogRows(kind),pages=Math.max(1,Math.ceil(rows.length/uxPageSize));s.at=Math.min(pages-1,Math.max(0,s.at));
 let start=s.at*uxPageSize,done=new Set(S.done);
 let h='<p class="muted" role="status">'+tr('Найдено','Encontradas')+': '+rows.length+(rows.length?' · '+(start+1)+'–'+Math.min(start+uxPageSize,rows.length):'')+'</p><div class="ux-list '+(kind==='grammar'?'ux-grammar':'')+'">';
 h+=rows.slice(start,start+uxPageSize).map(({l,i})=>kind==='grammar'?'<article><span class="tag">'+esc(l[0])+'</span><h3>'+esc(tr(l[3],l[2]))+'</h3><p>'+esc(tr(l[6],l[5]))+'</p><button class="secondary" onclick="intro('+i+')">'+tr('Открыть урок','Abrir lição')+'</button></article>':'<article class="ux-lesson"><div class="ux-lesson-main"><span class="tag">'+esc(l[0])+' · '+esc(l[4]==='Brasil'?tr('Повседневное','Cotidiano'):tr('Библия','Bíblia'))+'</span><h3>'+ (done.has(i)?'✓ ':'')+esc(tr(l[3],l[2]))+'</h3><p class="muted">'+esc(S.lang==='pt'?l[1]:l[2])+'</p></div><button class="secondary" onclick="intro('+i+')">'+((validDraft(S.drafts[String(i)])||gameValid(gameState().sessions['c:'+i]))?tr('Продолжить','Continuar'):tr('Открыть','Abrir'))+'</button></article>').join('');
 h+='</div>';if(!rows.length)h+='<article>'+tr('Ничего не найдено. Попробуй другой запрос.','Nenhum resultado. Tente outra busca.')+'</article>';
 if(pages>1)h+='<div class="ux-pager"><button class="secondary" '+(s.at===0?'disabled ':'')+'onclick="uxPage('+arg(kind)+',-1)">‹ '+tr('Назад','Anterior')+'</button><span>'+ (s.at+1)+' / '+pages+'</span><button class="secondary" '+(s.at===pages-1?'disabled ':'')+'onclick="uxPage('+arg(kind)+',1)">'+tr('Далее','Próxima')+' ›</button></div>';
 return h;
}
function uxUpdateList(kind){let e=$('#ux-list');if(e)e.innerHTML=uxList(kind)}
function uxCatalogHTML(kind){
 let s=uxCatalog[kind];
 return '<h1>'+tr(kind==='map'?'Уроки':'Грамматика',kind==='map'?'Lições':'Gramática')+'</h1>'+
 (kind==='grammar'?'<div class="ux-grid">'+uxTile('verbs','📝','Глаголы','Verbos','Спряжения','Conjugações')+uxTile('preps','🧩','Предлоги','Preposições','Правила и практика','Regras e prática')+'</div>':'<p class="muted">'+tr('Все уроки доступны. Выбери уровень или найди нужную тему.','Todas as lições disponíveis. Escolha um nível ou procure um tema.')+'</p>')+
 '<div class="ux-filters">'+['all','A1','A2','B1','B2'].map(l=>'<button class="'+(s.level===l?'':'secondary')+'" aria-pressed="'+(s.level===l)+'" onclick="uxCatalogFilter('+arg(kind)+','+arg(l)+')">'+(l==='all'?tr('Все','Todas'):l)+'</button>').join('')+'</div>'+
 '<label class="ux-search">'+tr('Поиск','Busca')+'<input type="search" value="'+esc(s.query)+'" placeholder="'+tr('Тема на русском или португальском','Tema em russo ou português')+'" oninput="uxCatalogSearch('+arg(kind)+',this.value)"></label><div id="ux-list">'+uxList(kind)+'</div>'+
 (kind==='grammar'?'<article><h2>Português bíblico × Brasil</h2><p>Vós sois → Vocês são</p><p>Tu és → Você é '+tr('(tu также употребляется в Бразилии)','(tu também é usado no Brasil)')+'</p><p>Porventura → Será que / acaso</p><h2>Vocabulário da igreja</h2><p>Reunião — собрание (a reunião, à reunião, na reunião, da reunião).</p><p>Crer em Deus — верить в Бога: eu creio, você crê, nós cremos, vocês creem.</p><p>Confiar em Deus — доверять Богу.</p></article>':'');
}
function uxLoadAudio(){
 if(typeof DORA_AUDIO==='object'||uxAudioLoading)return;
 uxAudioLoading=true;uxAudioError=false;
 let e=document.createElement('script');e.src='./dora-audio-index.js';e.async=true;
 e.onload=()=>{uxAudioLoading=false;uxAudioError=false;if(page==='profile')refreshVoicePanel();if(uxAudioTicket===speechTicket){uxAudioTicket=null;audioStatus(tr('Каталог Dora готов. Нажми на аудио.','Catálogo Dora pronto. Toque no áudio.'))}};
 e.onerror=()=>{uxAudioLoading=false;uxAudioError=true;e.remove();if(page==='profile')refreshVoicePanel();if(uxAudioTicket===speechTicket){uxAudioTicket=null;audioStatus(tr('Каталог Dora не загрузился. Нажми ещё раз или выбери голос устройства.','O catálogo Dora não carregou. Tente novamente ou use a voz do dispositivo.'))}};
 document.head.appendChild(e);
}
function uxAudioPending(){
 if(typeof DORA_AUDIO==='object')return false;
 uxLoadAudio();uxAudioTicket=speechTicket;audioStatus(tr('Загружается каталог Dora. Можно читать дальше; нажми на звук после загрузки.','Carregando o catálogo Dora. Continue lendo e toque no áudio quando estiver pronto.'));return true;
}

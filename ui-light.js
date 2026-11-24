/* Compact navigation and bounded course lists; existing IDs and local state remain unchanged. */
let uxCatalog={map:{level:'all',query:'',at:0},grammar:{level:'all',query:'',at:0}},uxAudioLoading=false,uxAudioError=false,uxAudioTicket=null;
const uxPageSize=20;
function uxTile(p,icon,ru,pt,ruSub,ptSub){return '<button class="ux-tile" onclick="uxNavigate('+arg(p)+')"><span class="ux-icon" aria-hidden="true">'+icon+'</span><span><strong>'+esc(tr(ru,pt))+'</strong><small>'+esc(tr(ruSub,ptSub))+'</small></span></button>'}
function uxNavigate(p){if(p==='estudo'||p==='bible'){bTab='estudo';ebScreen='home';go('bible')}else go(p)}
function uxHome(){
 let completed=S.done.length,percent=Math.round(100*completed/Math.max(1,L.length)),s=gameState(),src=gameSource(s.last||''),resuming=src&&gameValid(s.sessions[s.last]),next=gameSource('c:'+gameNextCourse()),old=validDraft(S.drafts[S.resume]),oldTitle=old?(S.resume==='review'?tr('Повторение ошибок','Revisão de erros'):tr(L[Number(S.resume)]?.[3]||'Урок',L[Number(S.resume)]?.[2]||'Lição')):'';
 return '<article class="hero"><div><h1>Português com a Bíblia</h1><p class="muted">Versão 1.0</p><p>'+tr('Учись в своём темпе, вместе с Luz.','Aprenda no seu ritmo, com Luz.')+'</p></div>'+sheep+'</article>'+releaseWelcomeHTML()+'<article class="game-start"><span class="tag">'+tr('Твой следующий шаг','Seu próximo passo')+'</span><h2>'+esc(!resuming&&old?oldTitle:tr((resuming?src:next).ru,(resuming?src:next).title))+'</h2>'+gameBtn(resuming||validDraft(S.drafts[S.resume])?tr('Продолжить урок','Continuar lição'):tr('Начать урок','Começar lição'),'gameContinue()')+(Object.keys(s.words).length?gameBtn(tr('Повторить слова','Revisar palavras')+' · '+journeyReviewCount(),'cardMode="learned";go("cards")',true):'')+'</article>'+
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
 let e=document.createElement('script');e.src='./dora-audio-index.js?v=1000';e.async=true;
 e.onload=()=>{uxAudioLoading=false;uxAudioError=false;if(page==='profile')refreshVoicePanel();if(uxAudioTicket===speechTicket){uxAudioTicket=null;audioStatus(tr('Каталог Dora готов. Нажми на аудио.','Catálogo Dora pronto. Toque no áudio.'))}};
 e.onerror=()=>{uxAudioLoading=false;uxAudioError=true;e.remove();if(page==='profile')refreshVoicePanel();if(uxAudioTicket===speechTicket){uxAudioTicket=null;audioStatus(tr('Каталог Dora не загрузился. Нажми ещё раз или выбери голос устройства.','O catálogo Dora não carregou. Tente novamente ou use a voz do dispositivo.'))}};
 document.head.appendChild(e);
}
function uxAudioPending(){
 if(typeof DORA_AUDIO==='object')return false;
 uxLoadAudio();uxAudioTicket=speechTicket;audioStatus(tr('Загружается каталог Dora. Можно читать дальше; нажми на звук после загрузки.','Carregando o catálogo Dora. Continue lendo e toque no áudio quando estiver pronto.'));return true;
}

/* Release guidance, progress milestones and privacy-preserving feedback. */
function releaseWelcomeHTML(){
 if(S.releaseWelcomeSeen===true||S.done.length||S.xp>0)return '';
 return '<article><h2>'+tr('Добро пожаловать!','Boas-vindas!')+'</h2><p>'+tr('Luz поможет тебе изучать бразильский португальский через Библию, грамматику и обычные разговоры. Начни с A1 или выбери знакомый уровень. Все уроки открыты.','Luz vai acompanhar você no estudo do português brasileiro com a Bíblia, gramática e conversas do dia a dia. Comece pelo A1 ou escolha seu nível. Todas as lições estão abertas.')+'</p>'+gameBtn(tr('Как начать','Como começar'),'go("welcome")')+' '+gameBtn(tr('Позже','Depois'),'releaseWelcomeDismiss()',true)+'</article>'
}
function releaseWelcomeDismiss(){S.releaseWelcomeSeen=true;save();render()}
function releaseStart(level){if(!JOURNEY_LEVELS.includes(level))return;S.releaseWelcomeSeen=true;journeyState().level=level;journeyOffset=null;save();go('map')}
function releaseGuideHTML(){
 return '<h1>'+tr('Начало обучения','Primeiros passos')+'</h1><article><h2>'+tr('Как заниматься','Como estudar')+'</h2><p>'+tr('1. Выбери уровень. 2. Пройди урок и прослушай примеры Dora. 3. Повтори слова и ошибки. 4. Попробуй прочитать библейский отрывок или поговорить вслух.','1. Escolha o nível. 2. Faça uma lição e ouça os exemplos da Dora. 3. Revise palavras e erros. 4. Leia uma passagem bíblica ou pratique a fala.')+'</p><p>'+tr('Уровень выбирается самостоятельно; это не экзамен. Его можно сменить в любой момент.','A escolha do nível é livre; não é um teste. Você pode alterá-lo a qualquer momento.')+'</p><div class="ux-grid">'+[['A1','С нуля','Iniciante'],['A2','Простые разговоры','Conversas simples'],['B1','Связная речь','Comunicação independente'],['B2','Сложные темы','Temas complexos']].map(([l,r,p])=>gameBtn(l+' · '+tr(r,p),'releaseStart('+arg(l)+')',l!=='A1')).join('')+'</div></article>'+gameBtn(tr('На главную','Voltar ao início'),'go("home")',true)
}
function releaseMilestonesHTML(){
 const done=new Set(S.done.filter(i=>Number.isInteger(i)&&L[i])),words=new Set(Object.entries(gameState().words).filter(([id,p])=>p&&p.seen>0).map(([id])=>id));
 for(const [id,p] of Object.entries(S.cardReviews))if(p&&typeof p==='object')words.add(id);
 const days=new Set(S.days).size;
 const rows=[['👣','Первый урок','Primeira lição',done.size,1],['📗','10 уроков','10 lições',done.size,10],['📚','100 слов на практике','100 palavras praticadas',words.size,100],['🌱','7 дней занятий','7 dias de estudo',days,7],...JOURNEY_LEVELS.map(l=>['🏅','Завершён курс '+l,'Curso '+l+' concluído',L.filter((x,i)=>x[0]===l&&done.has(i)).length,L.filter(x=>x[0]===l).length])];
 return '<article><h2>'+tr('Достижения','Conquistas')+'</h2><p class="muted">'+tr('Занятия в удобном темпе. Дни не обязаны быть подряд; практика слов не означает их полное освоение.','Estude no seu ritmo. Os dias não precisam ser consecutivos; praticar palavras não significa dominá-las.')+'</p>'+rows.map(([icon,r,p,n,total])=>'<div class="row" style="margin:10px 0"><strong>'+icon+' '+esc(tr(r,p))+'</strong><span>'+Math.min(n,total)+' / '+total+(n>=total?' ✓':'')+'</span><progress aria-label="'+esc(tr(r,p))+'" max="'+total+'" value="'+Math.min(n,total)+'"></progress></div>').join('')+'</article>'
}
function releaseLinksHTML(){return '<article><h2>'+tr('Помощь и информация','Ajuda e informações')+'</h2><div class="grid">'+gameBtn(tr('Как начать','Como começar'),'go("welcome")',true)+gameBtn(tr('О проекте','Sobre o projeto'),'go("about")',true)+gameBtn(tr('Сообщить об ошибке','Relatar um erro'),'go("feedback")',true)+'</div></article>'}
function releaseAboutHTML(){
 return '<h1>'+tr('О проекте','Sobre o projeto')+'</h1><article><h2>Português com a Bíblia · 1.0.0</h2><p>'+tr('Независимый бесплатный образовательный проект: бразильский португальский, повседневная речь, Библия и церковная лексика. Это не официальный продукт какой-либо церкви.','Projeto educacional independente e gratuito: português brasileiro, conversação cotidiana, Bíblia e vocabulário da igreja. Não é um produto oficial de nenhuma igreja.')+'</p><p>'+L.length+' '+tr('уроков','lições')+' · '+baseVocabulary().length+' '+tr('словарных записей','entradas de vocabulário')+' · A1–B2</p><p>'+tr('Обозначения уровней описывают структуру курса и не являются официальным сертификатом. Автоматическая проверка не оценивает качество свободного перевода или произношения.','Os níveis descrevem a estrutura do curso e não constituem certificado oficial. A correção automática não avalia a qualidade de traduções livres nem da pronúncia.')+'</p></article><article><h2>'+tr('Источники и озвучка','Fontes e áudio')+'</h2><p>'+tr('Учебные примеры и пересказы отделены от библейских оригиналов. Ссылки на ACF и русский перевод доступны в соответствующих разделах.','Exemplos didáticos e paráfrases são separados dos textos bíblicos originais. Os links para a ACF e a tradução russa estão nas seções correspondentes.')+'</p><p><a href="https://huggingface.co/hexgrad/Kokoro-82M" target="_blank" rel="noopener noreferrer">Dora · Kokoro-82M</a> · Apache 2.0</p><p>'+tr('Если MP3 недоступен, сайт пробует использовать установленный голос pt-BR.','Se o MP3 estiver indisponível, o site tenta usar uma voz pt-BR instalada.')+'</p></article><article><h2>'+tr('Конфиденциальность','Privacidade')+'</h2><p>'+tr('Аккаунт не требуется. Прогресс, заметки и словарь сохраняются в текущем браузере. Очистка данных браузера может их удалить; экспортируй копию в профиле. Не включай личные сведения в учебные ответы.','Não é necessário criar conta. O progresso, as anotações e o vocabulário ficam neste navegador. A limpeza dos dados pode apagá-los; exporte uma cópia no perfil. Não inclua dados pessoais nas respostas.')+'</p><p>'+tr('Микрофон необязателен. Браузер или клавиатура могут использовать свою службу распознавания речи; сайт не сохраняет аудиозаписи. Внешние ссылки и хостинг имеют собственные правила конфиденциальности.','O microfone é opcional. O navegador ou teclado pode utilizar seu próprio serviço de reconhecimento; o site não salva gravações. Links externos e o serviço de hospedagem têm suas próprias políticas de privacidade.')+'</p></article>'+releaseLinksHTML()
}
function releaseFeedbackHTML(){
 return '<h1>'+tr('Сообщить об ошибке','Relatar um erro')+'</h1><article><p>'+tr('Опиши ошибку без имени, контактов, личных заметок или другой личной информации. Сайт создаст текстовый файл, который можно передать разработчику вручную. Автоматической отправки нет.','Descreva o erro sem nome, contatos, anotações pessoais ou outras informações pessoais. O site cria um arquivo de texto que você pode entregar manualmente à equipe do projeto. Não há envio automático.')+'</p><form onsubmit="releaseDownloadReport();return false"><label>'+tr('Тип ошибки','Tipo de erro')+'<select id="release-kind"><option value="translation">'+tr('Перевод','Tradução')+'</option><option value="grammar">'+tr('Грамматика','Gramática')+'</option><option value="audio">'+tr('Озвучка','Áudio')+'</option><option value="exercise">'+tr('Упражнение','Exercício')+'</option><option value="interface">'+tr('Интерфейс','Interface')+'</option><option value="other">'+tr('Другое','Outro')+'</option></select></label><label>'+tr('Слово, урок или раздел','Palavra, lição ou seção')+'<input id="release-location" maxlength="160" required></label><label>'+tr('Что не так и как исправить?','Qual é o problema e como corrigir?')+'<textarea id="release-description" maxlength="1200" rows="5" required></textarea></label><button type="submit">'+tr('Скачать отчёт','Baixar relatório')+'</button></form><p id="release-report-status" role="status" class="muted"></p></article>'+gameBtn(tr('На главную','Voltar ao início'),'go("home")',true)
}
function releaseDownloadReport(){
 let kind=$('#release-kind'),loc=$('#release-location'),desc=$('#release-description'),status=$('#release-report-status');if(!kind||!loc||!desc||!status)return;
 if(!loc.value.trim()||!desc.value.trim()){status.textContent=tr('Заполни оба поля.','Preencha os dois campos.');return}
 const report=['Português com a Bíblia · 1.0.0','Categoria: '+kind.value,'Local: '+loc.value.trim().slice(0,160),'Descrição: '+desc.value.trim().slice(0,1200)].join('\n');
 let url=URL.createObjectURL(new Blob([report],{type:'text/plain;charset=utf-8'})),a=document.createElement('a');a.href=url;a.download='erro-portugues-biblia.txt';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),3000);status.textContent=tr('Файл подготовлен. Он не был отправлен.','Arquivo preparado. Não foi enviado.')
}

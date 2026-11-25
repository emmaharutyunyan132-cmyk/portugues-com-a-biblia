/* Brazilian Portuguese conjugation practice. Local progress only. */
const VC_TENSES=[
 ['pres','Presente do indicativo','Настоящее время','Действие сейчас, привычка или факт.','Ação atual, hábito ou fato.'],
 ['perf','Pretérito perfeito','Завершённое прошлое','Завершённое действие в прошлом.','Ação concluída no passado.'],
 ['imp','Pretérito imperfeito','Незавершённое прошлое','Привычка, длительность или фон в прошлом.','Hábito, duração ou contexto no passado.'],
 ['near','Futuro próximo (ir + infinitivo)','Ближайшее будущее','Presente глагола ir + инфинитив.','Presente de ir + infinitivo.'],
 ['fut','Futuro do presente','Простое будущее','Форма будущего времени.','Forma do futuro.'],
 ['cond','Futuro do pretérito','Условное наклонение','Возможность при условии или вежливая просьба.','Possibilidade condicional ou pedido cortês.'],
 ['sub','Presente do subjuntivo','Сослагательное настоящее','Желание, сомнение или необходимость; часто после que.','Desejo, dúvida ou necessidade; frequentemente depois de que.'],
 ['subimp','Imperfeito do subjuntivo','Сослагательное прошедшее','Гипотетическое условие или зависимость от прошедшего.','Condição hipotética ou dependência de um passado.'],
 ['prog','Estar + gerúndio','Действие в процессе','Форма estar + герундий (-ando, -endo, -indo).','Forma de estar + gerúndio (-ando, -endo, -indo).']
];
const VC_SUB={
 ser:['seja,seja,sejamos,sejam','fosse,fosse,fôssemos,fossem'],estar:['esteja,esteja,estejamos,estejam','estivesse,estivesse,estivéssemos,estivessem'],ter:['tenha,tenha,tenhamos,tenham','tivesse,tivesse,tivéssemos,tivessem'],ir:['vá,vá,vamos,vão','fosse,fosse,fôssemos,fossem'],vir:['venha,venha,venhamos,venham','viesse,viesse,viéssemos,viessem'],fazer:['faça,faça,façamos,façam','fizesse,fizesse,fizéssemos,fizessem'],dizer:['diga,diga,digamos,digam','dissesse,dissesse,disséssemos,dissessem'],poder:['possa,possa,possamos,possam','pudesse,pudesse,pudéssemos,pudessem'],querer:['queira,queira,queiramos,queiram','quisesse,quisesse,quiséssemos,quisessem'],saber:['saiba,saiba,saibamos,saibam','soubesse,soubesse,soubéssemos,soubessem'],dar:['dê,dê,demos,deem','desse,desse,déssemos,dessem'],ver:['veja,veja,vejamos,vejam','visse,visse,víssemos,vissem'],ler:['leia,leia,leiamos,leiam','lesse,lesse,lêssemos,lessem'],crer:['creia,creia,creiamos,creiam','cresse,cresse,crêssemos,cressem'],ouvir:['ouça,ouça,ouçamos,ouçam','ouvisse,ouvisse,ouvíssemos,ouvissem'],pedir:['peça,peça,peçamos,peçam','pedisse,pedisse,pedíssemos,pedissem'],servir:['sirva,sirva,sirvamos,sirvam','servisse,servisse,servíssemos,servissem'],trazer:['traga,traga,tragamos,tragam','trouxesse,trouxesse,trouxéssemos,trouxessem'],'pôr':['ponha,ponha,ponhamos,ponham','pusesse,pusesse,puséssemos,pusessem'],sentir:['sinta,sinta,sintamos,sintam','sentisse,sentisse,sentíssemos,sentissem'],conhecer:['conheça,conheça,conheçamos,conheçam','conhecesse,conhecesse,conhecêssemos,conhecessem'],agradecer:['agradeça,agradeça,agradeçamos,agradeçam','agradecesse,agradecesse,agradecêssemos,agradecessem']
};
const VC_PERSON=['eu','você / ele / ela','nós','vocês / eles / elas'];
const VC_PERSON_RU=['я','ты / он / она (você)','мы','вы / они'];
function vcForms(v,t){
 const p=v[0],base=verbForms(v);
 if(['pres','perf','imp'].includes(t))return base[['pres','perf','imp'].indexOf(t)];
 if(t==='near')return ['vou','vai','vamos','vão'].map(x=>x+' '+p);
 if(t==='fut'||t==='cond'){let stem=({fazer:'far',dizer:'dir',trazer:'trar','pôr':'por'})[p]||p;return (t==='fut'?['ei','á','emos','ão']:['ia','ia','íamos','iam']).map(x=>stem+x)}
 if(t==='sub'||t==='subimp'){
  if(VC_SUB[p])return VC_SUB[p][t==='sub'?0:1].split(',');
  let root=p.slice(0,-2),end=p.slice(-2),s=t==='sub'?(end==='ar'?['e','e','emos','em']:['a','a','amos','am']):({ar:['asse','asse','ássemos','assem'],er:['esse','esse','êssemos','essem'],ir:['isse','isse','íssemos','issem']})[end];
  return s.map(x=>root+x)
 }
 if(t==='prog'){let g=p==='pôr'?'pondo':p.slice(0,-1)+'ndo';return ['estou','está','estamos','estão'].map(x=>x+' '+g)}
 return []
}
// Original, unambiguous contexts. Format: verb, tense, person, sentence, Russian, note.
const VC_CONTEXT=[
 ['ser','pres',0,'Eu ___ estudante.','Я ученица / ученик.','Ser обозначает характеристику или принадлежность.'],
 ['ser','pres',2,'Nós ___ amigos.','Мы друзья.','Nós требует somos.'],
 ['estar','pres',1,'Hoje ela ___ feliz.','Сегодня она счастлива.','Estar описывает состояние.'],
 ['ter','pres',0,'Eu ___ fé em Deus.','У меня есть вера в Бога.','Ter fé em — иметь веру в.'],
 ['ter','pres',3,'Eles ___ esperança.','У них есть надежда.','Têm (множественное) отличается от tem.'],
 ['ir','pres',2,'Nós ___ à igreja todos os domingos.','Мы ходим в церковь каждое воскресенье.','Ir a + a igreja = ir à igreja.'],
 ['vir','pres',1,'Ela ___ de casa.','Она приходит из дома.','Vem — единственное число, vêm — множественное.'],
 ['fazer','pres',0,'Eu ___ uma pergunta.','Я задаю вопрос.','Fazer uma pergunta — задавать вопрос.'],
 ['dizer','pres',0,'Eu ___ a verdade.','Я говорю правду.','Dizer a verdade — говорить правду.'],
 ['poder','pres',0,'Eu ___ ajudar.','Я могу помочь.','Poder + инфинитив.'],
 ['querer','pres',2,'Nós ___ aprender português.','Мы хотим учить португальский.','Querer + инфинитив.'],
 ['saber','pres',1,'Ela ___ a resposta.','Она знает ответ.','Saber — знать факт или ответ.'],
 ['dar','pres',0,'Eu ___ graças a Deus.','Я благодарю Бога.','Dar graças — благодарить.'],
 ['ver','pres',2,'Nós ___ a luz.','Мы видим свет.','Ver — видеть.'],
 ['ler','pres',0,'Eu ___ a Bíblia todos os dias.','Я читаю Библию каждый день.','Leio — неправильная форма ler.'],
 ['crer','pres',0,'Eu ___ em Deus.','Я верю в Бога.','Crer em — верить в.'],
 ['ouvir','pres',0,'Eu ___ a mensagem.','Я слушаю послание.','Ouço — неправильная форма ouvir.'],
 ['pedir','pres',0,'Eu ___ perdão.','Я прошу прощения.','Pedir perdão — просить прощения.'],
 ['servir','pres',0,'Eu ___ a Deus com alegria.','Я служу Богу с радостью.','Sirvo — форма servir для eu.'],
 ['trazer','pres',0,'Eu ___ o livro.','Я приношу книгу.','Trago — форма trazer для eu.'],
 ['pôr','pres',1,'Ela ___ o livro na mesa.','Она кладёт книгу на стол.','Põe — форма pôr для ela.'],
 ['sentir','pres',0,'Eu ___ alegria.','Я чувствую радость.','Sinto — форма sentir для eu.'],
 ['conhecer','pres',0,'Eu ___ o pastor.','Я знакома / знаком с пастором.','Conheço — с ç перед o.'],
 ['agradecer','pres',0,'Eu ___ pelo apoio.','Я благодарю за поддержку.','Agradeço — с ç перед o.'],
 ['orar','pres',2,'Nós ___ juntos.','Мы молимся вместе.','Orar — регулярный глагол на -ar.'],
 ['falar','pres',1,'Ela ___ português.','Она говорит по-португальски.','Falar — регулярный глагол на -ar.'],
 ['estudar','pres',3,'Eles ___ de manhã.','Они учатся утром.','Для eles окончание -am.'],
 ['ajudar','pres',2,'Nós ___ os amigos.','Мы помогаем друзьям.','Для nós окончание -amos.'],
 ['amar','pres',0,'Eu ___ a minha família.','Я люблю свою семью.','Для eu окончание -o.'],
 ['aprender','pres',2,'Nós ___ juntos.','Мы учимся вместе.','Для nós окончание -emos.'],
 ['receber','pres',1,'Ela ___ os visitantes.','Она встречает посетителей.','Для ela окончание -e.'],
 ['partir','pres',3,'Eles ___ amanhã.','Они отправляются завтра.','Для eles окончание -em; настоящее может обозначать запланированное будущее.'],
 ['ir','perf',0,'Ontem eu ___ à igreja.','Вчера я ходила / ходил в церковь.','Fui — форма ir, когда речь о движении.'],
 ['ler','perf',1,'Ontem ela ___ o livro.','Вчера она прочитала книгу.','Leu — завершённое действие.'],
 ['falar','perf',2,'Ontem nós ___ com o pastor.','Вчера мы поговорили с пастором.','Falamos совпадает по написанию с настоящим. Время понятно по контексту.'],
 ['orar','perf',0,'Ontem eu ___ pela minha família.','Вчера я молилась / молился за семью.','Orar por + a = pela.'],
 ['estar','imp',0,'Naquela época, eu ___ sempre em casa.','В то время я всегда была / был дома.','Imperfeito описывает привычное состояние.'],
 ['ser','imp',0,'Quando eu ___ criança, eu lia muito.','Когда я была / был ребёнком, я много читала / читал.','Era — форма ser в imperfeito.'],
 ['ir','imp',2,'Antigamente nós ___ à igreja a pé.','Раньше мы ходили в церковь пешком.','Íamos — привычка в прошлом.'],
 ['estudar','imp',1,'Ela ___ português todos os dias naquela época.','В то время она учила португальский каждый день.','Estudava — повторявшееся действие.'],
 ['estudar','near',0,'Amanhã eu ___ português.','Завтра я буду учить португальский.','Vou + estudar.'],
 ['ajudar','near',2,'Amanhã nós ___ os amigos.','Завтра мы поможем друзьям.','Vamos + ajudar.'],
 ['fazer','fut',2,'Amanhã nós ___ uma reunião.','Завтра мы проведём собрание.','Fazer: far- + emos.'],
 ['trazer','fut',0,'Amanhã eu ___ o livro.','Завтра я принесу книгу.','Trazer: trar- + ei.'],
 ['poder','cond',1,'Você ___ repetir, por favor?','Не мог бы ты / не могли бы вы повторить, пожалуйста?','Poderia — вежливая просьба.'],
 ['fazer','cond',0,'Se eu tivesse tempo, eu ___ isso.','Если бы у меня было время, я бы это сделала / сделал.','Faria — условная форма.'],
 ['ser','sub',1,'Espero que ela ___ feliz.','Надеюсь, что она будет счастлива.','Espero que + subjuntivo.'],
 ['ter','sub',2,'Espero que nós ___ tempo.','Надеюсь, что у нас будет время.','Tenhamos — subjuntivo для nós.'],
 ['ajudar','sub',1,'É importante que você ___ as pessoas.','Важно, чтобы ты помогала / помогал людям.','É importante que + subjuntivo.'],
 ['ter','subimp',0,'Se eu ___ tempo, estudaria mais.','Если бы у меня было время, я бы больше училась / учился.','Se + imperfeito do subjuntivo.'],
 ['poder','subimp',2,'Se nós ___, ajudaríamos mais.','Если бы мы могли, мы помогали бы больше.','Pudéssemos — форма для nós.'],
 ['estudar','prog',0,'Agora eu ___ português.','Сейчас я учу португальский.','Estar + estudando.'],
 ['orar','prog',2,'Agora nós ___ juntos.','Сейчас мы молимся вместе.','Estamos + orando.'],
 ['ler','prog',1,'Agora ela ___ a Bíblia.','Сейчас она читает Библию.','Está + lendo.']
];
let vcVerb='all',vcTense='pres',vcMode='forms';
function vcState(){if(!S.verbPractice||typeof S.verbPractice!=='object'||Array.isArray(S.verbPractice))S.verbPractice={};let s=S.verbPractice;if(!s.errors||typeof s.errors!=='object')s.errors={};if(!Number.isInteger(s.completed))s.completed=0;return s}
function vcTenseInfo(t){return VC_TENSES.find(x=>x[0]===t)}
function vcPool(verb,tense,mode){
 const vs=VERBS.filter(v=>verb==='all'||v[0]===verb),ts=VC_TENSES.filter(t=>tense==='all'||t[0]===tense);
 if(mode==='sentences')return VC_CONTEXT.flatMap((r,i)=>{let v=vs.find(x=>x[0]===r[0]);if(!v||!ts.some(t=>t[0]===r[1]))return [];return [{id:'s:'+i,v:v[0],ru:v[1],t:r[1],p:r[2],prompt:r[3],translation:r[4],note:r[5],answer:vcForms(v,r[1])[r[2]]}]});
 return vs.flatMap(v=>ts.flatMap(([t])=>t==='prog'&&['ser','estar'].includes(v[0])?[]:vcForms(v,t).map((answer,p)=>({id:'f:'+v[0]+':'+t+':'+p,v:v[0],ru:v[1],t,p,answer}))))
}
function vcSettings(){let d=vcState().draft;let count=vcPool(vcVerb,vcTense,vcMode).length,errors=Object.keys(vcState().errors).length;
 return '<h1>'+tr('Тренажёр спряжений','Treino de conjugação')+'</h1><p class="muted">'+tr('Одна форма на экране. До 8 заданий за тренировку.','Uma forma por tela. Até 8 exercícios por treino.')+'</p>'+(vcValid(d)&&!d.finished?'<article><h2>'+tr('Продолжить тренировку','Continuar treino')+'</h2>'+gameBtn(tr('Продолжить','Continuar'),'go("verb-run")')+'</article>':'')+'<article><label>'+tr('Глагол','Verbo')+'<select onchange="vcVerb=this.value;render()"><option value="all" '+(vcVerb==='all'?'selected':'')+'>'+tr('Все глаголы','Todos os verbos')+'</option>'+VERBS.map(v=>'<option value="'+esc(v[0])+'" '+(vcVerb===v[0]?'selected':'')+'>'+esc(v[0]+' — '+v[1])+'</option>').join('')+'</select></label><label>'+tr('Время / форма','Tempo / forma')+'<select onchange="vcTense=this.value;render()"><option value="all" '+(vcTense==='all'?'selected':'')+'>'+tr('Все формы','Todas as formas')+'</option>'+VC_TENSES.map(t=>'<option value="'+t[0]+'" '+(vcTense===t[0]?'selected':'')+'>'+esc(t[1]+' · '+t[2])+'</option>').join('')+'</select></label><div class="ux-filters">'+gameBtn(tr('Спряжения','Conjugações'),'vcMode="forms";render()',vcMode!=='forms')+gameBtn(tr('В предложениях','Em frases'),'vcMode="sentences";render()',vcMode!=='sentences')+'</div><p class="muted">'+count+' '+tr('доступных заданий','exercícios disponíveis')+'</p>'+(!count?'<p>'+tr('Для этого сочетания пока нет упражнений. Выбери другое время или глагол.','Ainda não há exercícios para esta combinação. Escolha outro tempo ou verbo.')+'</p>':'')+gameBtn(tr('Начать тренировку','Começar treino'),'vcStart()',false,!count)+gameBtn(tr('Повторить ошибки','Revisar erros')+' · '+errors,'vcStart(true)',true,!errors)+'</article>'+gameBtn(tr('К таблицам глаголов','Voltar às tabelas'),'go("verbs")',true)
}
function vcValid(d){return !!d&&Array.isArray(d.tasks)&&d.tasks.length>0&&d.tasks.length<=8&&Number.isInteger(d.at)&&d.at>=0&&d.at<d.tasks.length&&d.tasks.every(q=>q&&typeof q.answer==='string'&&vcTenseInfo(q.t))}
function vcStart(review=false){
 let state=vcState(),pool=review?vcPool('all','all','forms').concat(vcPool('all','all','sentences')).filter(q=>state.errors[q.id]):vcPool(vcVerb,vcTense,vcMode);
 if(!pool.length)return;
 let tasks=shuffle(pool).slice(0,8).map((q,i)=>{let v=VERBS.find(x=>x[0]===q.v),others=VC_TENSES.flatMap(t=>vcForms(v,t[0])).filter(x=>x!==q.answer);return {...q,opts:i%2===0?gameChoices(q.answer,vcForms(v,q.t).concat(others)):null}});
 state.draft={tasks,at:0,score:0,input:'',selected:null,feedback:null,finished:false};save();go('verb-run')
}
function vcInput(v){let d=vcState().draft;if(!vcValid(d)||d.feedback||d.finished)return;d.input=String(v).slice(0,100);save();let b=$('#vc-check');if(b)b.disabled=!d.input.trim()}
function vcChoose(i){let d=vcState().draft,q=d?.tasks[d.at];if(!vcValid(d)||d.feedback||d.finished||!q.opts?.[i])return;d.selected=i;save();render()}
function vcCheck(){let s=vcState(),d=s.draft;if(!vcValid(d)||d.feedback||d.finished)return;let q=d.tasks[d.at],input=q.opts?q.opts[d.selected]:d.input;if(!input?.trim())return;const ok=canonical(input)===canonical(q.answer),accent=!ok&&norm(input)===norm(q.answer);d.feedback={ok,accent,input};if(ok){d.score++;delete s.errors[q.id]}else{s.errors[q.id]=true}save();render()}
function vcNext(){let s=vcState(),d=s.draft;if(!vcValid(d)||!d.feedback||d.finished)return;stopSpeech();if(d.at+1>=d.tasks.length){d.finished=true;s.completed++;save();render();return}d.at++;d.input='';d.selected=null;d.feedback=null;save();render();scrollTo(0,0)}
function vcRun(){let d=vcState().draft;if(!vcValid(d))return vcSettings();if(d.finished)return '<article class="game-card game-end"><span class="game-celebrate">🌿</span><h1>'+tr('Тренировка завершена!','Treino concluído!')+'</h1><p>'+d.score+' / '+d.tasks.length+' '+tr('верно','corretos')+'</p>'+gameBtn(tr('Новая тренировка','Novo treino'),'go("verb-practice")')+gameBtn(tr('Повторить ошибки','Revisar erros'),'vcStart(true)',true,!Object.keys(vcState().errors).length)+'</article>';
 let q=d.tasks[d.at],t=vcTenseInfo(q.t),data=q.prompt?gameTapPair(q.prompt.replace('___',q.answer),q.translation):gameTapPair(q.v,q.ru),ready=q.opts?Number.isInteger(d.selected):!!d.input.trim(),f=d.feedback;
 let h='<div class="game-top"><button class="secondary game-close" onclick="go(\'verb-practice\')" aria-label="'+tr('Сохранить и выйти','Salvar e sair')+'">×</button><progress max="'+d.tasks.length+'" value="'+d.at+'"></progress><span>'+(d.at+1)+'/'+d.tasks.length+'</span></div><section class="game-card"><p class="game-kicker">'+esc(t[1])+'</p><h2>'+tr('Спряги глагол','Conjugue o verbo')+'</h2><p class="game-word">'+gameTapStudy(q.v,q.ru)+'</p><p class="muted">'+esc(q.ru)+' · '+esc(VC_PERSON[q.p])+' ('+esc(VC_PERSON_RU[q.p])+')</p>';
 if(q.prompt)h+='<p class="game-word">'+gameTapText(q.prompt,data)+'</p><p class="muted">'+esc(q.translation)+'</p>';
 h+='<details><summary>'+tr('Правило','Regra')+'</summary><p>'+esc(tr(t[3],t[4]))+'</p></details>';
 if(q.opts)h+='<div class="game-options">'+q.opts.map((x,i)=>'<button class="game-option '+(d.selected===i?'selected ':'')+(f&&x===q.answer?'right':'')+'" '+(f?'disabled ':'')+'onclick="vcChoose('+i+')">'+esc(x)+'</button>').join('')+'</div>';
 else h+='<label>'+tr('Напиши форму','Escreva a forma')+'<input autocomplete="off" lang="pt-BR" value="'+esc(d.input)+'" '+(f?'disabled ':'')+'oninput="vcInput(this.value)" onkeydown="if(event.key===\'Enter\')vcCheck()"></label>';
 if(f){h+='<div class="game-feedback '+(f.ok?'':'retry')+'"><b>'+tr(f.ok?'Правильно!':'Правильная форма',f.ok?'Muito bem!':'Forma correta')+'</b><p>'+esc(VC_PERSON[q.p])+' → <strong>'+esc(q.answer)+'</strong> '+audio(q.answer)+'</p>'+(!f.ok?'<p>'+tr('Твой ответ: ','Sua resposta: ')+esc(f.input)+'</p>':'')+(f.accent?'<p>'+tr('Проверь диакритический знак: он может менять грамматическую форму.','Confira o acento: ele pode distinguir formas gramaticais.')+'</p>':'')+'<p>'+esc(tr(t[3],t[4]))+'</p>'+(q.prompt?'<p>'+esc(q.prompt.replace('___',q.answer))+' — '+esc(q.translation)+'</p>':'')+(q.note&&S.lang!=='pt'?'<p>'+esc(q.note)+'</p>':'')+'<details><summary>'+tr('Все формы этого времени','Todas as formas deste tempo')+'</summary><div class="table-wrap"><table class="vtable"><tbody>'+vcForms(VERBS.find(v=>v[0]===q.v),q.t).map((a,i)=>'<tr><th scope="row">'+esc(VC_PERSON[i])+'</th><td>'+esc(a)+'</td></tr>').join('')+'</tbody></table></div></details></div>'+gameBtn(tr('Продолжить','Continuar'),'vcNext()')}
 else h+='<button type="button" class="wide" id="vc-check" '+(ready?'':'disabled ')+'onclick="vcCheck()">'+tr('Проверить','Verificar')+'</button>';
 return h+gameTapPanelHTML()+'</section>'
}

function vcMoreTable(v){
 const ts=VC_TENSES.filter(t=>!['pres','perf','imp','near'].includes(t[0])&&!(t[0]==='prog'&&['ser','estar'].includes(v[0])));
 return '<details><summary>'+tr('Другие времена и формы','Outros tempos e formas')+'</summary>'+ts.map(t=>'<h3>'+esc(t[1])+'</h3><p class="muted">'+esc(tr(t[3],t[4]))+'</p><div class="table-wrap"><table class="vtable"><tbody>'+vcForms(v,t[0]).map((f,i)=>'<tr><th scope="row">'+esc(VC_PERSON[i])+'</th><td>'+esc(f)+'</td></tr>').join('')+'</tbody></table></div>').join('')+'</details>'
}

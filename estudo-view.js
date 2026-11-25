/* Estudo Bíblico: original learning material; ACF remains an external source. */
let ebChapter=0,ebVerse=0,ebLevel='A1',ebQuery='',ebRestored=false,ebScreen='home',ebStep=0,ebBook=18;
const ebLevels=['A1','A2','B1','B2','C1','C2'];
const ebVerbs={
  rejeitar:['rejeito','rejeita','rejeitamos','rejeitam','rejeitei','rejeitou','rejeitamos','rejeitaram'],
  refletir:['reflito','reflete','refletimos','refletem','refleti','refletiu','refletimos','refletiram'],
  meditar:['medito','medita','meditamos','meditam','meditei','meditou','meditamos','meditaram'],
  confiar:['confio','confia','confiamos','confiam','confiei','confiou','confiamos','confiaram'],
  orientar:['oriento','orienta','orientamos','orientam','orientei','orientou','orientamos','orientaram'],
  ungir:['unjo','unge','ungimos','ungem','ungi','ungiu','ungimos','ungiram'],
  habitar:['habito','habita','habitamos','habitam','habitei','habitou','habitamos','habitaram'],
  reforçar:['reforço','reforça','reforçamos','reforçam','reforcei','reforçou','reforçamos','reforçaram'],
  realizar:['realizo','realiza','realizamos','realizam','realizei','realizou','realizamos','realizaram'],
  'tornar-se':['eu me torno','se torna','nos tornamos','se tornam','eu me tornei','se tornou','nos tornamos','se tornaram'],
  dominar:['domino','domina','dominamos','dominam','dominei','dominou','dominamos','dominaram'],
"amotinar-se":["eu me amotino","se amotina","nos amotinamos","se amotinam","eu me amotinei","se amotinou","nos amotinamos","se amotinaram"],
"imaginar":["imagino","imagina","imaginamos","imaginam","imaginei","imaginou","imaginamos","imaginaram"],
"conspirar":["conspiro","conspira","conspiramos","conspiram","conspirei","conspirou","conspiramos","conspiraram"],
"unir-se":["eu me uno","se une","nos unimos","se unem","eu me uni","se uniu","nos unimos","se uniram"],
"romper":["rompo","rompe","rompemos","rompem","rompi","rompeu","rompemos","romperam"],
"livrar-se de":["eu me livro","se livra","nos livramos","se livram","eu me livrei","se livrou","nos livramos","se livraram"],
"zombar":["zombo","zomba","zombamos","zombam","zombei","zombou","zombamos","zombaram"],
"turbar":["turbo","turba","turbamos","turbam","turbei","turbou","turbamos","turbaram"],
"abalar":["abalo","abala","abalamos","abalam","abalei","abalou","abalamos","abalaram"],
"estabelecer":["estabeleço","estabelece","estabelecemos","estabelecem","estabeleci","estabeleceu","estabelecemos","estabeleceram"],
"gerar":["gero","gera","geramos","geram","gerei","gerou","geramos","geraram"],
"proclamar":["proclamo","proclama","proclamamos","proclamam","proclamei","proclamou","proclamamos","proclamaram"],
"instruir":["instruo","instrui","instruímos","instruem","instruí","instruiu","instruímos","instruíram"],
"rever":["revejo","revê","revemos","reveem","revi","reviu","revimos","reviram"],
"regozijar-se":["eu me regozijo","se regozija","nos regozijamos","se regozijam","eu me regozijei","se regozijou","nos regozijamos","se regozijaram"],
"refugiar-se":["eu me refugio","se refugia","nos refugiamos","se refugiam","eu me refugiei","se refugiou","nos refugiamos","se refugiaram"],
"perecer":["pereço","perece","perecemos","perecem","pereci","pereceu","perecemos","pereceram"],
"multiplicar-se":["eu me multiplico","se multiplica","nos multiplicamos","se multiplicam","eu me multipliquei","se multiplicou","nos multiplicamos","se multiplicaram"],
"levantar-se contra":["eu me levanto","se levanta","nos levantamos","se levantam","eu me levantei","se levantou","nos levantamos","se levantaram"],
"questionar":["questiono","questiona","questionamos","questionam","questionei","questionou","questionamos","questionaram"],
"exaltar":["exalto","exalta","exaltamos","exaltam","exaltei","exaltou","exaltamos","exaltaram"],
"restaurar":["restauro","restaura","restauramos","restauram","restaurei","restaurou","restauramos","restauraram"],
"clamar":["clamo","clama","clamamos","clamam","clamei","clamou","clamamos","clamaram"],
"deitar-se":["eu me deito","se deita","nos deitamos","se deitam","eu me deitei","se deitou","nos deitamos","se deitaram"],
"despertar":["desperto","desperta","despertamos","despertam","despertei","despertou","despertamos","despertaram"],
"sustentar":["sustento","sustenta","sustentamos","sustentam","sustentei","sustentou","sustentamos","sustentaram"],
"temer":["temo","teme","tememos","temem","temi","temeu","tememos","temeram"],
"cercar":["cerco","cerca","cercamos","cercam","cerquei","cercou","cercamos","cercaram"],
"socorrer":["socorro","socorre","socorremos","socorrem","socorri","socorreu","socorremos","socorreram"],
"testificar":["testifico","testifica","testificamos","testificam","testifiquei","testificou","testificamos","testificaram"],
"testemunhar":["testemunho","testemunha","testemunhamos","testemunham","testemunhei","testemunhou","testemunhamos","testemunharam"],
"apontar para":["aponto","aponta","apontamos","apontam","apontei","apontou","apontamos","apontaram"],
"esclarecer":["esclareço","esclarece","esclarecemos","esclarecem","esclareci","esclareceu","esclarecemos","esclareceram"],
"iluminar":["ilumino","ilumina","iluminamos","iluminam","iluminei","iluminou","iluminamos","iluminaram"],
"depender de":["dependo","depende","dependemos","dependem","dependi","dependeu","dependemos","dependeram"],
"pertencer":["pertenço","pertence","pertencemos","pertencem","pertenci","pertenceu","pertencemos","pertenceram"],
"acolher":["acolho","acolhe","acolhemos","acolhem","acolhi","acolheu","acolhemos","acolheram"],
"crer em":["creio","crê","cremos","creem","cri","creu","cremos","creram"],
"habitar entre":["habito","habita","habitamos","habitam","habitei","habitou","habitamos","habitaram"],
"anunciar":["anuncio","anuncia","anunciamos","anunciam","anunciei","anunciou","anunciamos","anunciaram"],
"receber":["recebo","recebe","recebemos","recebem","recebi","recebeu","recebemos","receberam"],
"revelar":["revelo","revela","revelamos","revelam","revelei","revelou","revelamos","revelaram"],
"tornar conhecido":["torno","torna","tornamos","tornam","tornei","tornou","tornamos","tornaram"]
};
function ebState(){if(!S.estudo||typeof S.estudo!=='object'||Array.isArray(S.estudo))S.estudo={};let s=S.estudo;for(const k of ['notes','memory','done'])if(!s[k]||typeof s[k]!=='object'||Array.isArray(s[k]))s[k]={};if(!Number.isFinite(s.start))s.start=Date.now();return s}
function ebKey(c=ESTUDO_CHAPTERS[ebChapter],v=ebVerse){return c[0]+':'+c[1]+':'+v}
function ebRestore(){if(ebRestored)return;ebRestored=true;let last=ebState().last;if(!last||!Array.isArray(last)||last.length!==3)return;let i=ESTUDO_CHAPTERS.findIndex(c=>c[0]===last[0]&&c[1]===last[1]);if(i>=0&&Number.isInteger(last[2])&&last[2]>=0&&last[2]<=ESTUDO_CHAPTERS[i][8].length){ebChapter=i;ebVerse=last[2];ebStep=Number.isInteger(ebState().step)&&ebState().step>=0&&ebState().step<=2?ebState().step:0}}
function ebOpen(i,v=0){if(!ESTUDO_CHAPTERS[i]||!Number.isInteger(v)||v<0||v>ESTUDO_CHAPTERS[i][8].length)return;ebRestored=true;ebChapter=i;ebVerse=v;ebStep=0;ebScreen=v?'lesson':'chapter';let c=ESTUDO_CHAPTERS[i];ebBook=c[0];if(v){gameBible(i,v);return}stopSpeech();bTab='estudo';save();render();if(typeof scrollTo==='function')scrollTo(0,0)}
function ebNote(v,chapter=false){ebState().notes[ebKey(ESTUDO_CHAPTERS[ebChapter],chapter?0:ebVerse)]=String(v).slice(0,4000);save()}
function ebMark(k){let s=ebState(),key=ebKey();if(k==='done'||k==='memory'){s[k][key]=!s[k][key];save();render()}}
function ebSetLevel(v){if(ebLevels.includes(v)){ebLevel=v;render();let e=$('#eb-extra-practice');if(e)e.open=true}}
function ebSearch(v){ebQuery=String(v).slice(0,160);let e=$('#eb-results');if(e)e.innerHTML=ebResults()}
function ebResults(){let q=norm(ebQuery.trim());if(!q)return '';let out=[];ESTUDO_CHAPTERS.forEach((c,i)=>c[8].forEach(v=>{if(norm([BB[c[0]][0],BB[c[0]][1],BB[c[0]][2]+' '+c[1]+':'+v[0],c[2],c[3],...v.slice(1,12)].flat(3).join(' ')).includes(q))out.push('<button class="secondary" onclick="ebOpen('+i+','+v[0]+')">'+esc(BB[c[0]][2]+' '+c[1]+':'+v[0]+' · '+v[1])+'</button>')}));return out.join('')||'<p>'+tr('В готовых разборах ничего не найдено.','Nenhum resultado nos estudos disponíveis.')+'</p>'}
function ebWords(words){let entries=new Map(dictionary().map(x=>[wordId(x.pt),x]));return words.map(([pt,ru])=>{let e=entries.get(wordId(pt));return '<div class="word-entry"><b>'+esc(pt)+'</b> — '+esc(ru)+' '+audio(pt)+(e?'<button class="secondary tiny" onclick="toggleFavorite('+arg(e.id)+')">'+(S.favorites.includes(e.id)?'★':'☆')+' '+tr('В карточки','Nos cartões')+'</button>':'')+(ebVerbs[pt]?'<details><summary>'+tr('Спряжение: настоящее и прошедшее','Conjugação: presente e perfeito')+'</summary><div class="table-wrap"><table class="vtable"><tr><th>Pessoa</th><th>Presente</th><th>Pretérito perfeito</th></tr>'+['eu','você / ele / ela','nós','vocês / eles / elas'].map((p,i)=>'<tr><td>'+p+'</td><td>'+esc(ebVerbs[pt][i])+'</td><td>'+esc(ebVerbs[pt][i+4])+'</td></tr>').join('')+'</table></div></details>':'')+'</div>'}).join('')}
function ebPractice(v){let prompts=[
['Назови два слова из словаря и переведи их.','Diga duas palavras do vocabulário e traduza-as.'],
['Перескажи смысл одним простым предложением.','Resuma o sentido em uma frase simples.'],
['Составь два предложения с грамматической конструкцией урока.','Crie duas frases usando a estrutura gramatical.'],
['Объясни образ стиха и переведи пересказ в обоих направлениях.','Explique a imagem e traduza o resumo nas duas direções.'],
['Сравни регистр ACF с современным португальским и объясни выбор слов.','Compare o registro da ACF com o português atual e explique a escolha lexical.'],
['Сравни возможные интерпретации и аргументируй перевод с опорой на контекст.','Compare interpretações possíveis e justifique sua tradução pelo contexto.']
];let p=prompts[ebLevels.indexOf(ebLevel)];return '<article><h2>'+tr('Практика','Prática')+' · '+ebLevel+'</h2><p>'+esc(tr(...p))+'</p><p>'+gameTapStudy(v[7],'',v[6])+' '+audio(v[7])+'</p><details><summary>'+tr('Сверить ответ','Conferir resposta')+'</summary>'+esc(v[8])+'</details><h3>'+tr('Устный перевод','Interpretação oral')+'</h3><p>'+tr('Прослушай учебный пересказ, переведи вслух и сравни с русским вариантом. Затем переведи обратно. Самопроверка, без автоматической оценки.','Ouça o resumo, interprete em voz alta e compare com a versão russa. Depois traduza no sentido inverso. Autoavaliação.')+'</p>'+audio(v[1])+'<details><summary>'+tr('Русский образец','Modelo russo')+'</summary>'+esc(v[2])+'</details><h3>'+tr('Запоминание оригинала','Memorização do original')+'</h3><p>'+tr('Открой ACF по ссылке, прочитай выбранный стих, закрой текст и произнеси по памяти. Сверься с источником.','Abra a ACF, leia o versículo, feche o texto e recite de memória. Confira na fonte.')+'</p><button class="secondary" onclick="ebMark(\'memory\')">'+(ebState().memory[ebKey()]?'✓ ':'')+tr('Стих сверён по памяти','Memorização conferida')+'</button></article>'}

/* Guided study: one primary action per screen. Optional reference tools remain accessible. */
function ebLabel(c,v=0){return BB[c[0]][0]+' '+c[1]+(v?':'+v:'')}
function ebTotal(c){return c[0]===42?BJV[c[1]-1]:c[8].length}
function ebCount(c){return c[8].filter(v=>ebState().done[ebKey(c,v[0])]).length}
function ebButton(label,action,secondary=false){return '<button type="button" class="'+(secondary?'secondary':'wide')+'" onclick="'+esc(action)+'">'+esc(label)+'</button>'}
function ebDetails(label,body,id=''){return '<details class="eb-detail"'+(id?' id="'+esc(id)+'"':'')+'><summary>'+esc(label)+'</summary><div class="eb-detail-body">'+body+'</div></details>'}
function ebShow(screen){if(!['home','books','chapters','chapter','lesson','finished'].includes(screen))return;if(screen==='chapter')ebBook=ESTUDO_CHAPTERS[ebChapter][0];stopSpeech();ebScreen=screen;render();if(typeof scrollTo==='function')scrollTo(0,0)}
function ebChooseBook(i){if(!ESTUDO_CHAPTERS.some(c=>c[0]===i))return;ebBook=i;ebShow('chapters')}
function ebStartChapter(i){let c=ESTUDO_CHAPTERS[i];if(!c)return;let v=c[8].find(x=>!ebState().done[ebKey(c,x[0])]);ebOpen(i,v?v[0]:1)}
function ebResume(){ebChapter=0;ebVerse=0;ebStep=0;ebRestored=false;ebRestore();let c=ESTUDO_CHAPTERS[ebChapter],v=ebVerse;ebBook=c[0];if(!v){ebStartChapter(ebChapter);return}if(ebState().done[ebKey(c,v)]){let next=c[8].find(x=>x[0]>v&&!ebState().done[ebKey(c,x[0])]);if(next){ebOpen(ebChapter,next[0]);return}ebScreen='finished'}else {gameBible(ebChapter,v);return}stopSpeech();render();if(typeof scrollTo==='function')scrollTo(0,0)}
function ebStepTo(n){if(!Number.isInteger(n)||n<0||n>2||!ebVerse)return;stopSpeech();ebStep=n;ebState().step=n;save();render();if(typeof scrollTo==='function')scrollTo(0,0)}
function ebFinish(){if(!ebVerse||ebStep!==2)return;ebState().done[ebKey()]=true;ebState().step=0;save();ebShow('finished')}
function ebNext(){let c=ESTUDO_CHAPTERS[ebChapter];if(ebVerse<c[8].length)ebOpen(ebChapter,ebVerse+1);else{ebBook=c[0];ebShow('chapters')}}
function ebNotes(chapter=false){return '<label>'+tr('Заметка к этому месту','Anotação deste trecho')+'<textarea maxlength="4000" rows="3" oninput="ebNote(this.value,'+chapter+')">'+esc(ebState().notes[ebKey(ESTUDO_CHAPTERS[ebChapter],chapter?0:ebVerse)]||'')+'</textarea></label><p class="muted">'+tr('Сохраняется автоматически на устройстве.','Salva automaticamente neste dispositivo.')+'</p>'}
function ebHome(){
 let c=ESTUDO_CHAPTERS[ebChapter],s=ebState(),all=ESTUDO_CHAPTERS.flatMap((ch,i)=>ch[8].map(x=>[i,x[0]])),done=all.filter(([i,v])=>s.done[ebKey(ESTUDO_CHAPTERS[i],v)]).length,day=Math.max(0,Math.floor((Date.now()-s.start)/86400000)),today=all[Math.min(day,all.length-1)];
 let saved=Array.isArray(s.last)&&s.last.length===3?ESTUDO_CHAPTERS.find(ch=>ch[0]===s.last[0]&&ch[1]===s.last[1]&&Number.isInteger(s.last[2])&&s.last[2]>=0&&s.last[2]<=ch[8].length):null,resume=!!saved;
 return '<article class="eb-welcome"><span class="tag">Estudo Bíblico</span><h2>'+tr('Один стих за раз','Um versículo de cada vez')+'</h2><p>'+tr('Прочитай, выучи слова и закрепи материал.','Leia, aprenda as palavras e pratique.')+'</p><p class="muted">'+(resume?esc(ebLabel(saved,s.last[2])):tr('Начни с Псалма 1','Comece pelo Salmo 1'))+'</p>'+ebButton(resume?tr('Продолжить изучение','Continuar estudo'):tr('Начать изучение','Começar estudo'),'ebResume()')+'<progress aria-label="'+tr('Изучено стихов','Versículos estudados')+'" max="'+all.length+'" value="'+done+'"></progress><p class="muted">'+done+' / '+all.length+' '+tr('изучено','estudados')+'</p></article>'+
 '<button class="eb-choice" onclick="ebShow(\'books\')"><span>📚</span><span><strong>'+tr('Выбрать книгу','Escolher livro')+'</strong><small>'+tr('Псалмы и Евангелия','Salmos e Evangelhos')+'</small></span><span aria-hidden="true">›</span></button>'+
 ebDetails(tr('План чтения и поиск','Plano de leitura e busca'),'<p>'+tr('Чтение дня','Leitura do dia')+': '+esc(ebLabel(ESTUDO_CHAPTERS[today[0]],today[1]))+'</p>'+ebButton(tr('Открыть стих дня','Abrir leitura do dia'),'ebOpen('+today[0]+','+today[1]+')',true)+'<label>'+tr('Поиск по разборам','Busca nos estudos')+'<input type="search" value="'+esc(ebQuery)+'" oninput="ebSearch(this.value)" placeholder="Sl 1:2, luz, свет"></label><div id="eb-results">'+ebResults()+'</div><p><a href="https://www.bibliaonline.com.br/acf" target="_blank" rel="noopener noreferrer">'+tr('Поиск по всей ACF ↗','Busca em toda a ACF ↗')+'</a></p>');
}
function ebBooks(){
 let ids=[18,39,40,41,42];
 return '<div class="eb-list">'+ids.map(i=>{let n=ESTUDO_CHAPTERS.filter(c=>c[0]===i).length;return '<button class="eb-choice" '+(!n?'disabled ':'')+'onclick="ebChooseBook('+i+')"><span>📖</span><span><strong>'+esc(tr(BB[i][1],BB[i][0]))+'</strong><small>'+esc(n?tr('Доступно глав: ','Capítulos disponíveis: ')+n:tr('Разборы пока готовятся','Estudos em preparação'))+'</small></span><span aria-hidden="true">›</span></button>'}).join('')+'</div><p class="muted">'+tr('Остальные книги доступны в справочнике ниже.','Os outros livros estão no catálogo abaixo.')+'</p>';
}
function ebChapters(){
 let entries=ESTUDO_CHAPTERS.map((c,i)=>({c,i})).filter(x=>x.c[0]===ebBook).sort((a,b)=>a.c[1]-b.c[1]);
 return '<h2>'+esc(tr(BB[ebBook][1],BB[ebBook][0]))+'</h2><div class="eb-list">'+entries.map(({c,i})=>'<button class="eb-choice" onclick="ebOpen('+i+',0)"><span class="eb-number">'+c[1]+'</span><span><strong>'+esc(tr(c[3],c[2]))+'</strong><small>'+ebCount(c)+' / '+c[8].length+' '+tr('изучено','estudados')+(c[8].length<ebTotal(c)?' · '+tr('Часть главы','Parte do capítulo'):'')+'</small></span><span aria-hidden="true">›</span></button>').join('')+'</div>';
}
function ebChapterView(c){
 let next=c[8].find(v=>!ebState().done[ebKey(c,v[0])]);
 return '<article><span class="tag">'+esc(ebLabel(c))+'</span><h2>'+esc(tr(c[3],c[2]))+'</h2><p>'+esc(tr(c[5],c[4]))+'</p><p class="muted">'+ebCount(c)+' / '+c[8].length+' '+tr('стихов изучено','versículos estudados')+(c[8].length<ebTotal(c)?' · '+tr('Доступны стихи 1–','Disponíveis 1–')+c[8].length:'')+'</p>'+ebButton(next?tr('Изучить стих ','Estudar versículo ')+next[0]:tr('Повторить главу','Revisar capítulo'),'ebStartChapter('+ebChapter+')')+'</article>'+
 ebDetails(tr('Выбрать другой стих','Escolher outro versículo'),'<div class="eb-verse-grid">'+c[8].map(v=>'<button class="secondary" onclick="ebOpen('+ebChapter+','+v[0]+')" aria-label="'+esc(tr('Стих ','Versículo ')+v[0])+'">'+(ebState().done[ebKey(c,v[0])]?'✓ ':'')+v[0]+'</button>').join('')+'</div>')+
 ebDetails(tr('Подробнее о главе','Mais sobre o capítulo'),'<p>'+esc(tr(c[7],c[6]))+'</p>'+audio(c[4])+bLinks(c[0],c[1])+ebNotes(true));
}
function ebLesson(c,v){
 let titles=[tr('Прочитай','Leia'),tr('Выучи слова','Aprenda as palavras'),tr('Закрепи','Pratique')],h='<div class="eb-steps" aria-label="'+tr('Шаги изучения','Etapas de estudo')+'">'+titles.map((t,i)=>'<span '+(i===ebStep?'aria-current="step"':'')+' class="'+(i===ebStep?'active':i<ebStep?'past':'')+'">'+(i+1)+'. '+esc(t)+'</span>').join('')+'</div><article class="eb-lesson"><p class="muted">'+esc(ebLabel(c,v[0]))+' · '+tr('Шаг','Etapa')+' '+(ebStep+1)+'/3</p><h2>'+titles[ebStep]+'</h2>';
 if(ebStep===0){
  let url='https://www.bibliaonline.com.br/acf/'+encodeURIComponent(BB[c[0]][4])+'/'+c[1];
  h+='<p><a class="eb-source" href="'+esc(url)+'" target="_blank" rel="noopener noreferrer">'+tr('Прочитать оригинал ACF ↗','Ler o original ACF ↗')+'</a></p><p class="muted">'+tr('Учебный пересказ, не дословный текст ACF.','Resumo didático, não texto literal da ACF.')+'</p><p class="eb-reading" lang="pt-BR">'+gameTapStudy(v[1],v[2],v[6])+'</p>'+audio(v[1])+ebDetails(tr('Русский пересказ','Resumo em russo'),'<p>'+esc(v[2])+'</p>')+ebButton(tr('К новым словам','Ir às palavras'),'ebStepTo(1)');
 }else if(ebStep===1){
  h+='<p class="muted">'+tr('Послушай и повтори. Сложные слова можно сохранить в карточки.','Ouça e repita. Salve palavras difíceis nos cartões.')+'</p>'+ebWords(v[6])+ebButton(tr('К упражнению','Ir ao exercício'),'ebStepTo(2)');
 }else{
  h+='<p lang="pt-BR" class="eb-reading">'+gameTapStudy(v[7],'',v[6])+'</p>'+audio(v[7])+'<p class="muted">'+tr('Ответь вслух или про себя, затем сравни с образцом.','Responda em voz alta ou mentalmente e compare com o modelo.')+'</p>'+ebDetails(tr('Показать ответ','Mostrar resposta'),'<p>'+esc(v[8])+'</p>')+ebButton(tr('Завершить стих','Concluir versículo'),'ebFinish()');
 }
 h+='</article>'+(ebStep>0?ebButton('‹ '+tr('Предыдущий шаг','Etapa anterior'),'ebStepTo('+(ebStep-1)+')',true):'');
 let extra='<h3>Gramática</h3><p>'+esc(tr(v[5],v[4]))+'</p><h3>'+tr('Смысл и контекст','Sentido e contexto')+'</h3><p>'+esc(tr(v[10],v[9]))+'</p><p>'+esc(tr(c[7],c[6]))+'</p><h3>'+tr('Связанные места','Referências cruzadas')+'</h3><p>'+v[11].map(esc).join(' · ')+'</p>'+bLinks(c[0],c[1]);
 h+=ebDetails(tr('Грамматика и смысл','Gramática e sentido'),extra)+ebDetails(tr('Дополнительная практика','Prática adicional'),'<label>'+tr('Уровень практики','Nível da prática')+'<select onchange="ebSetLevel(this.value)">'+ebLevels.map(l=>'<option '+(l===ebLevel?'selected':'')+'>'+l+'</option>').join('')+'</select></label>'+ebPractice(v).replace(/^<article>|<\/article>$/g,''),'eb-extra-practice')+ebDetails(tr('Мои заметки','Minhas anotações'),ebNotes());
 return h;
}
function ebFinished(c){let next=ebVerse<c[8].length;return '<article class="eb-welcome"><span class="tag">✓ '+tr('Готово','Concluído')+'</span><h2>'+tr('Стих изучен!','Versículo estudado!')+'</h2><p>'+esc(ebLabel(c,ebVerse))+' · '+ebCount(c)+' / '+c[8].length+'</p><progress max="'+c[8].length+'" value="'+ebCount(c)+'"></progress>'+ebButton(next?tr('Следующий стих','Próximo versículo'):tr('К списку глав','Ver capítulos'),'ebNext()')+ebButton(tr('На главную Библии','Início da Bíblia'),'ebShow(\'home\')',true)+'</article>'}
function ebView(){
 ebRestore();let c=ESTUDO_CHAPTERS[ebChapter],v=c[8][ebVerse-1];if(!v&&['lesson','finished'].includes(ebScreen))ebScreen='chapter';
 let back={books:'home',chapters:'books',chapter:'chapters',lesson:'chapter',finished:'home'}[ebScreen];
 let h=back?'<button class="secondary eb-back" onclick="ebShow('+arg(back)+')">‹ '+tr('Назад','Voltar')+'</button>':'';
 return h+(ebScreen==='home'?ebHome():ebScreen==='books'?ebBooks():ebScreen==='chapters'?ebChapters():ebScreen==='chapter'?ebChapterView(c):ebScreen==='finished'?ebFinished(c):ebLesson(c,v));
}

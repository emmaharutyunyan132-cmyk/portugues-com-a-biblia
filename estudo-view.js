/* Estudo Bíblico: original learning material; ACF remains an external source. */
let ebChapter=0,ebVerse=0,ebLevel='A1',ebQuery='';
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
function ebOpen(i,v=0){if(!ESTUDO_CHAPTERS[i]||!Number.isInteger(v)||v<0||v>ESTUDO_CHAPTERS[i][8].length)return;ebChapter=i;ebVerse=v;stopSpeech();bTab='estudo';save();render()}
function ebNote(v){ebState().notes[ebKey()]=String(v).slice(0,4000);save()}
function ebMark(k){let s=ebState(),key=ebKey();if(k==='done'||k==='memory'){s[k][key]=!s[k][key];save();render()}}
function ebSetLevel(v){if(ebLevels.includes(v)){ebLevel=v;render()}}
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
];let p=prompts[ebLevels.indexOf(ebLevel)];return '<article><h2>'+tr('Практика','Prática')+' · '+ebLevel+'</h2><p>'+esc(tr(...p))+'</p><p>'+esc(v[7])+' '+audio(v[7])+'</p><details><summary>'+tr('Сверить ответ','Conferir resposta')+'</summary>'+esc(v[8])+'</details><h3>'+tr('Устный перевод','Interpretação oral')+'</h3><p>'+tr('Прослушай учебный пересказ, переведи вслух и сравни с русским вариантом. Затем переведи обратно. Самопроверка, без автоматической оценки.','Ouça o resumo, interprete em voz alta e compare com a versão russa. Depois traduza no sentido inverso. Autoavaliação.')+'</p>'+audio(v[1])+'<details><summary>'+tr('Русский образец','Modelo russo')+'</summary>'+esc(v[2])+'</details><h3>'+tr('Запоминание оригинала','Memorização do original')+'</h3><p>'+tr('Открой ACF по ссылке, прочитай выбранный стих, закрой текст и произнеси по памяти. Сверься с источником.','Abra a ACF, leia o versículo, feche o texto e recite de memória. Confira na fonte.')+'</p><button class="secondary" onclick="ebMark(\'memory\')">'+(ebState().memory[ebKey()]?'✓ ':'')+tr('Стих сверён по памяти','Memorização conferida')+'</button></article>'}
function ebView(){let s=ebState(),c=ESTUDO_CHAPTERS[ebChapter],v=c[8][ebVerse-1],all=ESTUDO_CHAPTERS.flatMap((ch,i)=>ch[8].map(x=>[i,x[0]])),day=Math.max(0,Math.floor((Date.now()-s.start)/86400000)),today=all[Math.min(day,all.length-1)],ref=BB[c[0]][2]+' '+c[1]+(v?':'+v[0]:'');let h='<h2>Estudo Bíblico</h2><p class="muted">'+tr('Учебные пересказы и пояснения, не текст ACF и не дословный перевод. Читай оригинал отдельно. Уровни — ориентиры для практики, не сертификация.','Resumos e explicações didáticos, não o texto da ACF nem tradução literal. Leia o original separadamente. Níveis indicativos, sem certificação.')+'</p><article><b>'+tr('Изучено стихов','Versículos estudados')+': '+all.filter(([i,n])=>s.done[ebKey(ESTUDO_CHAPTERS[i],n)]).length+'/'+all.length+'</b><p>'+tr('План: один доступный стих в день','Plano: um versículo disponível por dia')+'</p><button onclick="ebOpen('+today[0]+','+today[1]+')">'+tr('Чтение дня','Leitura do dia')+' · '+esc(BB[ESTUDO_CHAPTERS[today[0]][0]][2]+' '+ESTUDO_CHAPTERS[today[0]][1]+':'+today[1])+'</button><label>'+tr('Поиск в готовых разборах','Busca nos estudos disponíveis')+'<input value="'+esc(ebQuery)+'" oninput="ebSearch(this.value)" placeholder="Sl 1:2, luz, свет"></label><div id="eb-results">'+ebResults()+'</div><p><a target="_blank" rel="noopener noreferrer" href="https://www.bibliaonline.com.br/acf">'+tr('Поиск по всей Библии ACF (внешний сайт)','Busca na Bíblia ACF completa (site externo)')+'</a></p></article><article><label>'+tr('Готовые главы','Capítulos disponíveis')+'<select onchange="ebOpen(Number(this.value))">'+ESTUDO_CHAPTERS.map((ch,i)=>'<option value="'+i+'" '+(i===ebChapter?'selected':'')+'>'+esc(BB[ch[0]][0]+' '+ch[1]+' — '+tr(ch[3],ch[2])+(ch[0]===42&&ch[1]===1&&ch[8].length<51?' (1–'+ch[8].length+'/51)':''))+'</option>').join('')+'</select></label><label>'+tr('Стих','Versículo')+'<select onchange="ebOpen('+ebChapter+',Number(this.value))"><option value="0">'+tr('Обзор главы','Visão do capítulo')+'</option>'+c[8].map(x=>'<option value="'+x[0]+'" '+(x[0]===ebVerse?'selected':'')+'>'+x[0]+'</option>').join('')+'</select></label><label>'+tr('Сложность практики','Dificuldade da prática')+'<select onchange="ebSetLevel(this.value)">'+ebLevels.map(l=>'<option '+(l===ebLevel?'selected':'')+'>'+l+'</option>').join('')+'</select></label><h2>'+esc(ref)+'</h2>'+bLinks(c[0],c[1])+(v?'<span class="tag">'+v[3]+'</span><h3>'+tr('Учебный пересказ','Resumo didático')+'</h3><p>'+esc(v[1])+' '+audio(v[1])+'</p><p>'+esc(v[2])+'</p><h3>Gramática</h3><p>'+esc(tr(v[5],v[4]))+'</p><h3>'+tr('Смысл и контекст','Sentido e contexto')+'</h3><p>'+esc(tr(v[10],v[9]))+'</p><p>'+esc(tr(c[7],c[6]))+'</p><h3>'+tr('Связанные места','Referências cruzadas')+'</h3><p>'+v[11].map(esc).join(' · ')+'</p>':'<h3>'+esc(tr(c[3],c[2]))+'</h3><p>'+esc(tr(c[5],c[4]))+' '+audio(c[4])+'</p><p>'+esc(tr(c[7],c[6]))+'</p><div class="grid">'+c[8].map(x=>'<button class="secondary" onclick="ebOpen('+ebChapter+','+x[0]+')">'+(s.done[ebKey(c,x[0])]?'✓ ':'')+esc(ref+':'+x[0])+'</button>').join('')+'</div>')+'</article><article><h2>Vocabulário</h2>'+ebWords(v?v[6]:[...new Map(c[8].flatMap(x=>x[6]).map(x=>[x[0],x])).values()])+'</article>'+(v?ebPractice(v):'')+'<article><h2>'+tr('Личные заметки','Anotações pessoais')+'</h2><textarea maxlength="4000" class="bible-retell" oninput="ebNote(this.value)">'+esc(s.notes[ebKey()]||'')+'</textarea><p class="muted">'+tr('Сохраняются на этом устройстве.','Salvas neste dispositivo.')+'</p><button onclick="ebMark(\'done\')">'+(s.done[ebKey()]?'✓ ':'')+tr('Отметить изученным','Marcar como estudado')+'</button>'+(v&&ebVerse<c[8].length?'<button class="secondary" onclick="ebOpen('+ebChapter+','+(ebVerse+1)+')">'+tr('Следующий стих','Próximo versículo')+'</button>':'')+'</article>';return h}

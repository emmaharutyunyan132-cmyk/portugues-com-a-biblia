/* Curated thematic navigation; all vocabulary IDs and spaced review history remain stable. */
const FOUNDATION_FOLDERS=[['base','Основы языка','Bases do idioma','🔤'],['phrases','Повседневные фразы','Frases do dia a dia','💬'],['daily','Повседневная лексика','Vocabulário cotidiano','🏠'],['faith','Библия и служение','Bíblia e serviço','📖']];
let foundationFolder='base';
const foundationGroupMap=new Map(FOUNDATION_GROUPS.map(g=>[g[0],g]));
function foundationRows(g){return g[6]}
function foundationMerge(map){
 for(let g of FOUNDATION_GROUPS)for(let [pt,ru,example,translation] of foundationRows(g)){
  let id=wordId(pt),e=map.get(id);if(!e){e={id,pt,ru,levels:['A1'],category:g[1]==='faith'?(g[0]==='church'||g[0]==='interpreting'?'igreja':'bíblico'):'cotidiano',supplemental:true};map.set(id,e)}
  if(!e.groups)e.groups=[];if(!e.groups.includes(g[0]))e.groups.push(g[0]);
  if(!e.ru.includes(ru)&&!e.ru.split(' / ').includes(ru))e.ru+=' / '+ru;
  if(example&&!e.example){e.example=example;e.translation=translation}
  if(g[1]==='phrases'||/[.!?…]$/.test(pt))e.everydayPhrase=g[1]!=='faith'||e.everydayPhrase;
 }
}
function foundationGroup(mode){return typeof mode==='string'&&mode.startsWith('topic:')?foundationGroupMap.get(mode.slice(6)):null}
function foundationDeck(mode){
 let g=foundationGroup(mode);if(!g)return null;
 let map=new Map(dictionary().map(e=>[e.id,e])),seen=new Set();
 return g[6].flatMap(([pt,ru,example,translation])=>{let id=wordId(pt),e=map.get(id);if(!e||seen.has(id))return [];seen.add(id);return [{...e,ru,example:example||(e.ru===ru?e.example:undefined),translation:translation||(e.ru===ru?e.translation:undefined)}]})
}
function foundationModeName(mode){let g=foundationGroup(mode);return g?tr(g[2],g[3]):mode==='phrases'?tr('Повседневные фразы','Frases do dia a dia'):mode==='cotidiano'?tr('Повседневная лексика','Vocabulário cotidiano'):mode==='bíblico'?tr('Библия','Bíblia'):mode==='igreja'?tr('Церковь','Igreja'):mode==='learned'?tr('Знакомые слова','Palavras praticadas'):mode==='mine'?tr('Мой словарь','Meu vocabulário'):mode==='favorites'?tr('Избранное','Favoritos'):tr('Все слова','Todas as palavras')}
function foundationOptions(selected,cards=false){
 let modes=cards?['learned','all','phrases','cotidiano','bíblico','igreja','mine','favorites']:['all','phrases','cotidiano','bíblico','igreja','mine','favorites'];
 let option=(v,t)=>'<option value="'+esc(v)+'" '+(selected===v?'selected':'')+'>'+esc(t)+'</option>';
 return modes.map(m=>option(m,foundationModeName(m))).join('')+FOUNDATION_FOLDERS.map(([id,ru,pt])=>'<optgroup label="'+esc(tr(ru,pt))+'">'+FOUNDATION_GROUPS.filter(g=>g[1]===id).map(g=>option('topic:'+g[0],tr(g[2],g[3]))).join('')+'</optgroup>').join('')
}
function foundationSelect(folder){if(!FOUNDATION_FOLDERS.some(f=>f[0]===folder))return;foundationFolder=folder;render();scrollTo(0,0)}
function foundationOpen(id){if(!foundationGroupMap.has(id))return;dictMode='topic:'+id;dictQuery='';dictPage=0;go('dict')}
function foundationCards(mode){cardMode=mode;go('cards')}
function foundationPageHTML(){
 let f=FOUNDATION_FOLDERS.find(x=>x[0]===foundationFolder)||FOUNDATION_FOLDERS[0],groups=FOUNDATION_GROUPS.filter(g=>g[1]===f[0]);
 return '<h1>'+tr('Основы португальского','Português essencial')+'</h1><p class="muted">'+tr('Выбери одну тему: слова, готовые фразы и карточки для практики.','Escolha um tema: palavras, frases prontas e cartões de prática.')+'</p><div class="foundation-folders">'+FOUNDATION_FOLDERS.map(([id,ru,pt,icon])=>'<button class="ux-tile '+(id===f[0]?'foundation-selected':'')+'" aria-pressed="'+(id===f[0])+'" onclick="foundationSelect('+arg(id)+')"><span class="ux-icon">'+icon+'</span><strong>'+esc(tr(ru,pt))+'</strong></button>').join('')+'</div><h2>'+esc(tr(f[1],f[2]))+'</h2><div class="foundation-groups">'+groups.map(g=>'<article class="foundation-group"><div><h3>'+esc(tr(g[2],g[3]))+'</h3><p class="muted">'+new Set(g[6].map(x=>wordId(x[0]))).size+' '+tr('слов и фраз','palavras e frases')+'</p></div><div class="foundation-actions"><button onclick="foundationOpen('+arg(g[0])+')">'+tr('Слова','Palavras')+'</button><button class="secondary" onclick="foundationCards('+arg('topic:'+g[0])+')">'+tr('Карточки','Cartões')+'</button></div></article>').join('')+'</div>'
}
function foundationDictHeader(){
 let g=foundationGroup(dictMode);
 return '<div class="foundation-actions">'+gameBtn(tr('📂 Темы и основы','📂 Temas e bases'),'go("foundations")',true)+gameBtn(tr('🗂 Карточки этой подборки','🗂 Cartões desta seleção'),'foundationCards('+JSON.stringify(dictMode)+')')+'</div><label>'+tr('Раздел словаря','Seção do vocabulário')+'<select onchange="setDictMode(this.value)">'+foundationOptions(dictMode)+'</select></label>'+(g?'<article class="foundation-note"><h2>'+esc(tr(g[2],g[3]))+'</h2><details><summary>'+tr('Короткая подсказка','Dica rápida')+'</summary><p>'+esc(tr(g[4],g[5]))+'</p></details></article>':'')
}
function foundationCardEntry(id){let g=foundationGroup(cardMode);if(g)return foundationDeck(cardMode).find(e=>e.id===id);return dictionary().find(e=>e.id===id)}

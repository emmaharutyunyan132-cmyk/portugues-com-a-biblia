/* Curated thematic navigation; all vocabulary IDs and spaced review history remain stable. */
const FOUNDATION_FOLDERS=[['base','Основы языка','Bases do idioma','🔤'],['phrases','Повседневные фразы','Frases do dia a dia','💬'],['daily','Повседневная лексика','Vocabulário cotidiano','🏠'],['faith','Библия и служение','Bíblia e serviço','📖'],['course','Слова из уроков','Palavras das lições','🎓']];
let foundationFolder='base',foundationAt=0,foundationCourseLevel='A1';
const FOUNDATION_PAGE_SIZE=8,foundationDeckCache=new Map();
const foundationGroupMap=new Map(FOUNDATION_GROUPS.map(g=>[g[0],g]));
function foundationRows(g){return g[6]}
function foundationMerge(map){
 for(let g of FOUNDATION_GROUPS)for(let [pt,ru,example,translation] of foundationRows(g)){
  let id=wordId(pt),e=map.get(id);if(!e){e={id,pt,ru,levels:['A1'],category:g[1]==='faith'?(/^church/.test(g[0])||g[0]==='interpreting'||g[0]==='volunteering'?'igreja':'bíblico'):'cotidiano',supplemental:true};map.set(id,e)}
  if(!e.groups)e.groups=[];if(!e.groups.includes(g[0]))e.groups.push(g[0]);
  if(!e.ru.split(' / ').includes(ru)&&!e.ru.includes(ru))e.ru+=' / '+ru;
  if(example&&!e.example){e.example=example;e.translation=translation}
  if(g[1]==='phrases'||g[1]==='daily'&&/[.!?…]$/.test(pt))e.everydayPhrase=true;
 }
}
function foundationGroup(mode){if(typeof mode!=='string')return null;if(mode.startsWith('topic:'))return foundationGroupMap.get(mode.slice(6));if(/^lesson:\d+$/.test(mode)){let i=Number(mode.slice(7)),l=L[i];if(l)return ['lesson:'+i,'course',l[3],l[2],tr('Слова из существующего урока.','Palavras de uma lição existente.'),'Palavras de uma lição existente.',l[7]]}return null}
function foundationDeck(mode){
 let g=foundationGroup(mode);if(!g)return null;if(foundationDeckCache.has(mode))return foundationDeckCache.get(mode);
 let map=new Map(baseVocabulary().map(e=>[e.id,e])),seen=new Set();
 let entries=g[6].flatMap(([pt,ru,example,translation])=>{let id=wordId(pt),e=map.get(id);if(!e||seen.has(id))return [];seen.add(id);return [{...e,ru,example:example||(e.ru===ru?e.example:undefined),translation:translation||(e.ru===ru?e.translation:undefined)}]});foundationDeckCache.set(mode,entries);return entries
}
function foundationModeName(mode){let g=foundationGroup(mode);return g?tr(g[2],g[3]):mode==='phrases'?tr('Повседневные фразы','Frases do dia a dia'):mode==='cotidiano'?tr('Повседневная лексика','Vocabulário cotidiano'):mode==='bíblico'?tr('Библия','Bíblia'):mode==='igreja'?tr('Церковь','Igreja'):mode==='learned'?tr('Знакомые слова','Palavras praticadas'):mode==='mine'?tr('Мой словарь','Meu vocabulário'):mode==='favorites'?tr('Избранное','Favoritos'):tr('Все слова','Todas as palavras')}
function foundationOptions(selected,cards=false){
 let modes=cards?['learned','all','phrases','cotidiano','bíblico','igreja','mine','favorites']:['all','phrases','cotidiano','bíblico','igreja','mine','favorites'];
 let option=(v,t)=>'<option value="'+esc(v)+'" '+(selected===v?'selected':'')+'>'+esc(t)+'</option>';
 return modes.map(m=>option(m,foundationModeName(m))).join('')+(selected.startsWith('lesson:')?option(selected,foundationModeName(selected)):'')+FOUNDATION_FOLDERS.filter(f=>f[0]!=='course').map(([id,ru,pt])=>'<optgroup label="'+esc(tr(ru,pt))+'">'+FOUNDATION_GROUPS.filter(g=>g[1]===id).map(g=>option('topic:'+g[0],tr(g[2],g[3]))).join('')+'</optgroup>').join('')
}
function foundationSelect(folder){if(!FOUNDATION_FOLDERS.some(f=>f[0]===folder))return;foundationFolder=folder;foundationAt=0;render();scrollTo(0,0)}
function foundationOpen(id){if(!foundationGroupMap.has(id))return;dictMode='topic:'+id;dictQuery='';dictPage=0;go('dict')}
function foundationCards(mode){cardMode=mode;go('cards')}
function foundationCourseOpen(i,cards=false){if(!L[i])return;let mode='lesson:'+i;if(cards)return foundationCards(mode);dictMode=mode;dictQuery='';dictPage=0;go('dict')}
function foundationCourseChoose(level){if(!['A1','A2','B1','B2'].includes(level))return;foundationCourseLevel=level;foundationAt=0;render()}
function foundationPageMove(delta){if(!Number.isInteger(delta))return;foundationAt=Math.max(0,foundationAt+delta*FOUNDATION_PAGE_SIZE);render();scrollTo(0,0)}
function foundationPageHTML(){
 let f=FOUNDATION_FOLDERS.find(x=>x[0]===foundationFolder)||FOUNDATION_FOLDERS[0],course=f[0]==='course';
 let groups=course?L.map((l,i)=>({l,i})).filter(x=>x.l[0]===foundationCourseLevel).map(({l,i})=>[String(i),'course',l[3],l[2],'','',l[7]]):FOUNDATION_GROUPS.filter(g=>g[1]===f[0]);
 foundationAt=Math.min(Math.max(0,Math.floor((groups.length-1)/FOUNDATION_PAGE_SIZE)*FOUNDATION_PAGE_SIZE),foundationAt);
 let h='<h1>'+tr('Основы португальского','Português essencial')+'</h1><p class="muted">'+tr('Выбери одну тему: слова, готовые фразы и карточки для практики.','Escolha um tema: palavras, frases prontas e cartões de prática.')+'</p><div class="foundation-folders">'+FOUNDATION_FOLDERS.map(([id,ru,pt,icon])=>'<button class="ux-tile '+(id===f[0]?'foundation-selected':'')+'" aria-pressed="'+(id===f[0])+'" onclick="foundationSelect('+arg(id)+')"><span class="ux-icon">'+icon+'</span><strong>'+esc(tr(ru,pt))+'</strong></button>').join('')+'</div><h2>'+esc(tr(f[1],f[2]))+'</h2>';
 if(course)h+='<div class="ux-filters">'+['A1','A2','B1','B2'].map(l=>gameBtn(l,'foundationCourseChoose('+JSON.stringify(l)+')',foundationCourseLevel!==l)).join('')+'</div><p class="muted">'+tr('Наборы слов из существующих уроков по выбранному уровню.','Conjuntos de palavras das lições existentes no nível escolhido.')+'</p>';
 h+='<div class="foundation-groups">'+groups.slice(foundationAt,foundationAt+FOUNDATION_PAGE_SIZE).map(g=>'<article class="foundation-group"><div><h3>'+esc(tr(g[2],g[3]))+'</h3><p class="muted">'+new Set(g[6].map(x=>wordId(x[0]))).size+' '+tr('слов и фраз','palavras e frases')+'</p></div><div class="foundation-actions"><button onclick="'+(course?'foundationCourseOpen('+Number(g[0])+')':'foundationOpen('+arg(g[0])+')')+'">'+tr('Слова','Palavras')+'</button><button class="secondary" onclick="'+(course?'foundationCourseOpen('+Number(g[0])+',true)':'foundationCards('+arg('topic:'+g[0])+')')+'">'+tr('Карточки','Cartões')+'</button></div></article>').join('')+'</div>';
 if(groups.length>FOUNDATION_PAGE_SIZE)h+='<div class="ux-pager">'+gameBtn('‹ '+tr('Назад','Anterior'),'foundationPageMove(-1)',true,foundationAt===0)+'<span>'+(foundationAt+1)+'–'+Math.min(groups.length,foundationAt+FOUNDATION_PAGE_SIZE)+' / '+groups.length+'</span>'+gameBtn(tr('Далее','Próxima')+' ›','foundationPageMove(1)',true,foundationAt+FOUNDATION_PAGE_SIZE>=groups.length)+'</div>';
 return h
}
function foundationDictHeader(){
 let g=foundationGroup(dictMode);
 return '<div class="foundation-actions">'+gameBtn(tr('📂 Темы и основы','📂 Temas e bases'),'go("foundations")',true)+gameBtn(tr('🗂 Карточки этой подборки','🗂 Cartões desta seleção'),'foundationCards('+JSON.stringify(dictMode)+')')+'</div><label>'+tr('Раздел словаря','Seção do vocabulário')+'<select onchange="setDictMode(this.value)">'+foundationOptions(dictMode)+'</select></label>'+(g?'<article class="foundation-note"><h2>'+esc(tr(g[2],g[3]))+'</h2><details><summary>'+tr('Короткая подсказка','Dica rápida')+'</summary><p>'+esc(tr(g[4],g[5]))+'</p></details></article>':'')
}
function foundationCardEntry(id){let g=foundationGroup(cardMode);if(g)return foundationDeck(cardMode).find(e=>e.id===id);return dictionary().find(e=>e.id===id)}

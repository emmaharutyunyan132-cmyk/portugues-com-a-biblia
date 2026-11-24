
let bTab='john',bSearch='',bTest='all',bAt=0,bScore=0,bChosen=null,bOrder=[];
const BJV=[51,25,36,54,47,71,53,59,41,42,57,50,38,31,27,33,26,40,42,31,25];
const BQ=[[42,3,16],[18,23,1],[39,5,9],[43,2,4],[44,8,28],[0,12,1],[42,15,5],[45,13,4],[49,4,13],[65,21,4],[41,10,27],[54,3,16]];
function bState(){if(!S.bibleState||typeof S.bibleState!=='object'||Array.isArray(S.bibleState))S.bibleState={};let x=S.bibleState;for(let k of ['read','retell','memory'])if(!x[k]||typeof x[k]!=='object'||Array.isArray(x[k]))x[k]={};if(!Number.isInteger(x.book)||!BB[x.book])x.book=42;if(!Number.isInteger(x.chapter)||x.chapter<1||x.chapter>BB[x.book][6])x.chapter=1;if(!Number.isInteger(x.verse)||x.verse<0||x.verse>(x.book===42?BJV[x.chapter-1]:176))x.verse=0;if(!Number.isInteger(x.john)||x.john<1||x.john>21)x.john=1;return x}
function bSwitch(t){bTab=t;bSearch='';render()}
function bSelect(i){if(!Number.isInteger(i)||!BB[i])return;Object.assign(bState(),{book:i,chapter:1,verse:0});bTab='read';save();render()}
function bChapterSet(v){let x=bState(),n=Number(v);if(!Number.isInteger(n)||n<1||n>BB[x.book][6])return;x.chapter=n;x.verse=0;save();render()}
function bVerseSet(v){let x=bState(),n=Number(v);if(!Number.isInteger(n)||n<0||n>(x.book===42?BJV[x.chapter-1]:176)){render();return}x.verse=n;save();render()}
function bJohn(n){if(!Number.isInteger(n)||n<1||n>21)return;bState().john=n;bTab='john';save();render()}
function bRef(i,c,v=0){return BB[i][0]+', capítulo '+c+(v?', versículo '+v:'')}
function bLinks(i,c){let b=BB[i],pt='https://www.bibliaonline.com.br/acf/'+encodeURIComponent(b[4])+'/'+c,ru='https://www.biblegateway.com/passage/?search='+encodeURIComponent(b[5]+' '+c)+'&version=RUSV';return '<div class="bible-links"><a target="_blank" rel="noopener noreferrer" href="'+esc(pt)+'">Português · ACF ↗</a><a target="_blank" rel="noopener noreferrer" href="'+esc(ru)+'">Русский · Синодальный ↗</a></div>'}
function bMark(i,c){let x=bState(),k=i+':'+c;x.read[k]=!x.read[k];save();render()}
function bRetell(n,v){bState().retell[n]=String(v).slice(0,3000);save()}
function bMemory(){let x=bState(),k=x.book+':'+x.chapter+':'+x.verse;x.memory[k]=Date.now();save();render()}
function bFind(v){bSearch=v;$('#b-results').innerHTML=bBookList()}
function bBookList(){return BB.map((b,i)=>({b,i})).filter(({b,i})=>(bTest==='all'||bTest==='old'&&i<39||bTest==='new'&&i>=39)&&norm(b.slice(0,4).join(' ')).includes(norm(bSearch))).map(({b,i})=>'<button onclick="bSelect('+i+')"><b>'+esc(b[0])+' · '+esc(b[2])+'</b><small>'+esc(b[1])+' · '+esc(b[3])+' · '+b[6]+'</small></button>').join('')||'<p>'+tr('Ничего не найдено','Nenhum resultado')+'</p>'}
function bStartQuiz(){bAt=0;bScore=0;bChosen=null;bOrder=shuffle([0,1,2,3]);bTab='quiz';render()}
function bAnswer(i){if(bChosen!==null||!Number.isInteger(i)||i<0||i>3)return;bChosen=i;if(i===0)bScore++;render()}
function bNext(){if(bChosen===null)return;bAt++;bChosen=null;bOrder=shuffle([0,1,2,3]);render()}
function bQuizOptions(q){let [i,c,v]=q,other=i===42?41:42;return [bRef(i,c,v),bRef(i,v,c),bRef(other,c,v),bRef(i,c,v+1)]}

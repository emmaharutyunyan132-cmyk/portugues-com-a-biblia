/* Experimental local Kokoro voice. Dependencies: Kokoro.js 1.2.1 (Apache-2.0),
 phonemizer.js 1.2.1 (eSpeak NG), Kokoro-82M-v1.0-ONNX (Apache-2.0).
 Never use the English-only Kokoro.generate() path for Brazilian Portuguese. */
let ready;
let pending=Promise.resolve();
const status=(id,stage)=>self.postMessage({id,stage});
async function load(id){
 if(!ready)ready=(async()=>{
  status(id,'loading');
  const [{KokoroTTS},{phonemize}]=await Promise.all([
   import('https://cdn.jsdelivr.net/npm/kokoro-js@1.2.1/dist/kokoro.web.js'),
   import('https://cdn.jsdelivr.net/npm/phonemizer@1.2.1')
  ]);
  const tts=await KokoroTTS.from_pretrained('onnx-community/Kokoro-82M-v1.0-ONNX',{dtype:'q8',device:'wasm'});
  return {tts,phonemize};
 })().catch(e=>{ready=null;throw e});
 return ready;
}
function normalizePhones(s){
 const pairs=[['aɪ','I'],['aʊ','W'],['dʒ','ʤ'],['dz','ʣ'],['eɪ','A'],['oʊ','O'],['əʊ','Q'],['ts','ʦ'],['tʃ','ʧ'],['ɔɪ','Y']];
 s=s.replace(/[\u0361\u035c^]/g,'');
 // Preserve nasalization, stress and ordinary Portuguese phonemes.
 for(const [a,b] of pairs)s=s.split(a).join(b);
 return s.replace(/-/g,'').trim();
}
async function generate(id,text,rate){
 const {tts,phonemize}=await load(id);
 status(id,'generating');
 // Preserve sentence punctuation, which eSpeak can otherwise remove.
 const pieces=text.match(/[^.!?;,:]+[.!?;,:]*|[.!?;,:]+/g)||[text];
 const out=[];
 for(let piece of pieces){
  let punctuation=piece.match(/[.!?;,:]+$/)?.[0]||'';
  let raw=piece.slice(0,piece.length-punctuation.length).trim();
  if(!raw)continue;
  let phonemes=normalizePhones((await phonemize(raw,'pt-br')).join(' '))+punctuation;
  const {input_ids}=tts.tokenizer(phonemes,{truncation:false});
  if(input_ids.dims.at(-1)>512)throw Error('Text too long for a single phrase');
  const audio=await tts.generate_from_ids(input_ids,{voice:'pf_dora',speed:rate});
  const samples=Float32Array.from(audio.audio);
  if(!samples.length||samples.some(x=>!Number.isFinite(x)))throw Error('Invalid waveform');
  out.push(samples);
 }
 if(!out.length)throw Error('Empty phrase');
 const silence=Math.round(24000*0.10),n=out.reduce((a,v)=>a+v.length,0)+silence*(out.length-1);
 const result=new Float32Array(n);let at=0;for(let part of out){result.set(part,at);at+=part.length+silence}
 self.postMessage({id,stage:'done',samples:result,sampleRate:24000},[result.buffer]);
}
self.onmessage=e=>{
 const {id,text,rate}=e.data||{};
 if(!Number.isInteger(id)||typeof text!=='string'||text.length>2000||![1,.75].includes(rate))return;
 pending=pending.then(()=>generate(id,text,rate)).catch(()=>self.postMessage({id,stage:'error'}));
};

/* Dora pt-BR; direct Transformers.js inference, without English-only Kokoro.js wrapper.
 Model and voice: https://huggingface.co/onnx-community/Kokoro-82M-v1.0-ONNX (Apache-2.0).
 Phonemizer: https://github.com/xenova/phonemizer.js (eSpeak NG). */
const MODEL='onnx-community/Kokoro-82M-v1.0-ONNX';
let ready,pending=Promise.resolve(),phase='LIBRARY';
const status=(id,stage,extra={})=>self.postMessage({id,stage,...extra});
async function load(id){
 if(!ready)ready=(async()=>{
  phase='LIBRARY';status(id,'loading',{phase});
  const [hf,phon]=await Promise.all([
   import('https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1'),
   import('https://cdn.jsdelivr.net/npm/phonemizer@1.2.1')
  ]);
  hf.env.allowLocalModels=false;
  hf.env.backends.onnx.wasm.numThreads=1;
  hf.env.backends.onnx.wasm.proxy=false;
  phase='PHONEMIZER';status(id,'loading',{phase});
  const probe=await phon.phonemize('Olá, tudo bem?','pt-br');
  if(!Array.isArray(probe)||!probe.join('').trim())throw Error('pt-BR phonemizer unavailable');
  phase='VOICE';status(id,'loading',{phase});
  const res=await fetch('https://huggingface.co/'+MODEL+'/resolve/main/voices/pf_dora.bin');
  if(!res.ok)throw Error('Voice HTTP '+res.status);
  const style=new Float32Array(await res.arrayBuffer());
  if(style.length!==510*256||!style.every(Number.isFinite))throw Error('Invalid Dora style tensor');
  phase='MODEL';status(id,'loading',{phase});
  const progress_callback=p=>{if(p.status==='progress'&&Number.isFinite(p.progress))status(id,'loading',{phase:'MODEL',percent:Math.round(p.progress)})};
  const [model,tokenizer]=await Promise.all([
   hf.StyleTextToSpeech2Model.from_pretrained(MODEL,{dtype:'q8',device:'wasm',progress_callback}),
   hf.AutoTokenizer.from_pretrained(MODEL)
  ]);
  return {hf,model,tokenizer,style,phonemize:phon.phonemize};
 })().catch(e=>{ready=null;throw e});
 return ready;
}
function normalizePhones(s){
 const pairs=[['aɪ','I'],['aʊ','W'],['dʒ','ʤ'],['dz','ʣ'],['eɪ','A'],['oʊ','O'],['əʊ','Q'],['ts','ʦ'],['tʃ','ʧ'],['ɔɪ','Y']];
 s=s.replace(/[\u0361\u035c^]/g,'');
 for(const [a,b] of pairs)s=s.split(a).join(b);
 return s.replace(/-/g,'').trim();
}
async function generate(id,text,rate){
 const {hf,model,tokenizer,style,phonemize}=await load(id);
 phase='SYNTHESIS';status(id,'generating');
 const pieces=text.match(/[^.!?;,:]+[.!?;,:]*|[.!?;,:]+/g)||[text],out=[];
 for(let piece of pieces){
  const punctuation=piece.match(/[.!?;,:]+$/)?.[0]||'';
  const raw=piece.slice(0,piece.length-punctuation.length).trim();
  if(!raw)continue;
  const phones=normalizePhones((await phonemize(raw,'pt-br')).join(' '))+punctuation;
  const {input_ids}=tokenizer(phones,{truncation:false});
  const n=input_ids.dims.at(-1);
  if(n>512||n<3)throw Error('Invalid token count');
  const offset=Math.min(Math.max(n-2,0),509)*256;
  const result=await model({input_ids,style:new hf.Tensor('float32',style.slice(offset,offset+256),[1,256]),speed:new hf.Tensor('float32',[rate],[1])});
  const samples=Float32Array.from(result.waveform.data);
  if(!samples.length||samples.some(x=>!Number.isFinite(x)))throw Error('Invalid audio');
  out.push(samples);
 }
 if(!out.length)throw Error('Empty audio');
 const silence=2400,result=new Float32Array(out.reduce((a,v)=>a+v.length,0)+silence*(out.length-1));
 let at=0;for(const part of out){result.set(part,at);at+=part.length+silence}
 status(id,'done',{samples:result,sampleRate:24000});
}
self.onmessage=e=>{
 const {id,text,rate}=e.data||{};
 if(!Number.isInteger(id)||typeof text!=='string'||text.length>2000||![1,.75].includes(rate))return;
 pending=pending.then(()=>generate(id,text,rate)).catch(err=>status(id,'error',{phase,detail:String(err?.message||err).slice(0,180)}));
};

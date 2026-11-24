/* Local multilingual Whisper, MIT model; Transformers.js 3.8.1.
   Only model assets are fetched. PCM stays in this worker. */
let model=null, busy=false;
const send=(id,stage,extra={})=>self.postMessage({id,stage,...extra});
self.onmessage=async({data:m})=>{
 if(!m||!Number.isInteger(m.id)||busy)return;
 busy=true;
 try{
  if(m.type==='load'){
   if(!model){
    send(m.id,'loading');
    const {pipeline,env}=await import('https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1');
    env.allowLocalModels=false;
    env.backends.onnx.wasm.numThreads=1;
    env.backends.onnx.wasm.proxy=false;
    model=await pipeline('automatic-speech-recognition','onnx-community/whisper-tiny',{
     device:'wasm',dtype:'q8',progress_callback:p=>{
      if(p.status==='progress'&&Number.isFinite(p.progress))send(m.id,'loading',{percent:Math.round(p.progress)});
     }
    });
   }
   send(m.id,'ready');
  }else if(m.type==='recognize'){
   if(!model)throw Error('Model not loaded');
   if(!(m.pcm instanceof Float32Array)||m.pcm.length<4000||m.pcm.length>320000)throw Error('Invalid audio length');
   const out=await model(m.pcm,{language:'portuguese',task:'transcribe',return_timestamps:false});
   send(m.id,'result',{text:String(out?.text||'').trim().slice(0,1000)});
  }
 }catch(e){send(m.id,'error',{detail:String(e?.message||e).slice(0,160)});}
 finally{busy=false}
};

"""Generate original course audio offline on a build machine, never on the learner's phone."""
import argparse
import hashlib
import json
import os
from pathlib import Path
import re
import subprocess
import tempfile
import unicodedata

ROOT = Path(__file__).resolve().parent
OUT = ROOT / "audio-dora"
INDEX = ROOT / "dora-audio-index.js"
PREFIX = "const DORA_AUDIO = "
VOICE = "pf_dora"
SAMPLE = "Olá! Eu sou Luz. Hoje vamos estudar português. Eu creio em Deus e vou à reunião."

def normalize(text):
    return unicodedata.normalize("NFC", " ".join(text.split()))

def lesson_data():
    html = (ROOT / "index.html").read_text(encoding="utf-8")
    m = re.search(r"const L=(\[.*?\]);\s*let mapLevel", html, re.S)
    if not m:
        raise RuntimeError("Cannot find lesson array")
    return json.loads(m.group(1))

def course_texts(scope):
    lessons = lesson_data()
    selected = lessons[:2] if scope == "pilot" else lessons
    texts = [SAMPLE, "Eu creio em Deus.", "Hoje vou à reunião.", "Muito obrigada pela atenção."]
    for lesson in selected:
        texts.extend(row[0] for row in lesson[7] + lesson[8])
    return list(dict.fromkeys(normalize(t) for t in texts if t.strip()))

def read_index():
    if not INDEX.exists():
        return {}
    raw = INDEX.read_text(encoding="utf-8").strip()
    if not raw.startswith(PREFIX) or not raw.endswith(";"):
        raise RuntimeError("Invalid audio index")
    return json.loads(raw[len(PREFIX):-1])

def generate(scope):
    import numpy as np
    import soundfile as sf
    import torch
    from kokoro import KPipeline

    torch.set_num_threads(min(4, os.cpu_count() or 1))
    OUT.mkdir(exist_ok=True)
    index = read_index()
    pipeline = KPipeline(lang_code="p", device="cpu")
    texts = course_texts(scope)
    for i, text in enumerate(texts, 1):
        digest = hashlib.sha256(text.encode("utf-8")).hexdigest()
        rel = "audio-dora/" + digest + ".mp3"
        target = ROOT / rel
        if index.get(text) == rel and target.is_file() and target.stat().st_size > 1000:
            continue
        parts = []
        for _, _, audio in pipeline(text, voice=VOICE, speed=1):
            arr = np.asarray(audio, dtype=np.float32).reshape(-1)
            if arr.size and np.isfinite(arr).all():
                parts.append(arr)
        if not parts:
            raise RuntimeError("No valid waveform for item " + str(i))
        signal = np.concatenate(parts)
        if signal.size < 1200 or float(np.max(np.abs(signal))) < 0.0001:
            raise RuntimeError("Silent or invalid audio for item " + str(i))
        with tempfile.TemporaryDirectory() as td:
            wav = Path(td) / "audio.wav"
            mp3 = Path(td) / "audio.mp3"
            sf.write(wav, signal, 24000)
            subprocess.run(["ffmpeg", "-nostdin", "-loglevel", "error", "-y", "-i", str(wav), "-codec:a", "libmp3lame", "-b:a", "64k", str(mp3)], check=True)
            subprocess.run(["ffprobe", "-v", "error", "-select_streams", "a:0", "-show_entries", "stream=codec_name", "-of", "csv=p=0", str(mp3)], check=True, stdout=subprocess.DEVNULL)
            target.write_bytes(mp3.read_bytes())
        index[text] = rel
        print(f"{i}/{len(texts)} generated", flush=True)
    INDEX.write_text(PREFIX + json.dumps(index, ensure_ascii=False, sort_keys=True, separators=(",", ":")) + ";\n", encoding="utf-8")
    (OUT / "README.md").write_text("Original learning texts synthesized using Kokoro-82M, voice pf_dora (pt-BR).\nModel: https://huggingface.co/hexgrad/Kokoro-82M (Apache-2.0).\nOnly public course material is processed; no learner data.\n", encoding="utf-8")
    print(f"Generated index: {len(index)} audio files", flush=True)

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--scope", choices=["pilot", "all"], default="pilot")
    args = parser.parse_args()
    generate(args.scope)

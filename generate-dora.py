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

def js_data(path, name):
    source = (ROOT / path).read_text(encoding="utf-8")
    match = re.search(r"(?:\bconst\s+|,\s*)" + re.escape(name) + r"\s*=\s*", source)
    if not match:
        raise RuntimeError("Missing course data: " + name)
    return json.JSONDecoder().raw_decode(source[match.end():])[0]

def course_texts(scope):
    lessons = lesson_data()
    selected = lessons[:2] if scope == "pilot" else lessons
    texts = [SAMPLE, "Eu creio em Deus.", "Hoje vou à reunião.", "Muito obrigada pela atenção."]
    for lesson in selected:
        texts.extend(row[0] for row in lesson[7] + lesson[8])
        if len(lesson) > 10 and lesson[0] in ("B1", "B2") and lesson[10]:
            texts.append(lesson[10][2])
    if scope == "all":
        for chapter in js_data("estudo-data.js", "ESTUDO_CHAPTERS"):
            texts.append(chapter[4])
            for verse in chapter[8]:
                texts.extend([verse[1], verse[7]])
                texts.extend(word[0] for word in verse[6])
        for task in js_data("interpreter-data.js", "INTERPRETER_TASKS"):
            segments = task[5]
            texts.extend(segment[0] for segment in segments)
            if task[1] in ("B1", "B2"):
                texts.append(" ".join(segment[0] for segment in segments))
        for pt, ru, category, example, translation in js_data("extra-vocab.js", "EXTRA_VOCAB"):
            texts.extend([pt, example])
        for row in js_data("index.html", "IURD"):
            texts.extend([row[0], row[3]])
        for row in js_data("index.html", "VERBS"):
            texts.append(row[0])
        for row in js_data("a2-writing.js", "A2_WRITING").values():
            texts.append(row[2])
        books = js_data("bible-data.js", "BB")
        texts.extend(book[0] for book in books)
        for row in js_data("bible-data.js", "BJ"):
            texts.extend([row[3], row[7], row[8]])
            texts.extend(item.split("=", 1)[0] for item in row[5].split(";"))
        for name in ["BP", "BM", "BR"]:
            for row in js_data("bible-topics.js", name):
                texts.append(row[0])
                if len(row) > 4 and row[4]:
                    texts.append(row[4])
        for i, chapter, verse in js_data("bible-core.js", "BQ"):
            texts.append(f"{books[i][0]}, capítulo {chapter}, versículo {verse}")
        for path in ["index.html", "bible-view.js"]:
            source = (ROOT / path).read_text(encoding="utf-8")
            texts.extend(re.findall(r"(?<![\w.])audio\('([^'\\]+)'\)", source))
        texts.extend(["Vocês têm esperança.", "Que a paz esteja com vocês."])
    return list(dict.fromkeys(normalize(t) for t in texts if isinstance(t, str) and t.strip()))

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
    texts = course_texts(scope)
    pipeline = None
    for i, text in enumerate(texts, 1):
        digest = hashlib.sha256(text.encode("utf-8")).hexdigest()
        rel = "audio-dora/" + digest + ".mp3"
        target = ROOT / rel
        if index.get(text) == rel and target.is_file() and target.stat().st_size > 1000:
            continue
        if pipeline is None:
            pipeline = KPipeline(lang_code="p", device="cpu")
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
    parser.add_argument("--list-only", action="store_true", help="Count public course phrases without loading Kokoro")
    args = parser.parse_args()
    if args.list_only:
        print(json.dumps(course_texts(args.scope), ensure_ascii=False))
    else:
        generate(args.scope)

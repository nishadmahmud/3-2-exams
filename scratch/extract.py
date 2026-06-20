import json

transcript_path = r"C:\Users\Nishad\.gemini\antigravity\brain\6bd3da19-e76e-47c1-81aa-4a6e5f295235\.system_generated\logs\transcript_full.jsonl"

found_texts = []
with open(transcript_path, 'r', encoding='utf-8') as f:
    for line in f:
        if 'Imagine you are the manager' in line or 'A company plans to develop a Smart Healthcare' in line or 'FoodExpress' in line:
            found_texts.append(line[:15000])

with open('scratch/found.txt', 'w', encoding='utf-8') as f:
    for t in found_texts:
        f.write(t + "\n\n===\n\n")

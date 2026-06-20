import re

with open('public/Questions/Xtras_qstn.md', 'r', encoding='utf-8') as f:
    content = f.read()

# We want to split by "## Topic: "
parts = content.split('## Topic: ')
if len(parts) > 1:
    new_content = parts[0]
    
    for i in range(1, len(parts)):
        topic_part = parts[i]
        
        # The first line is the topic name
        lines = topic_part.split('\n', 1)
        topic_name = lines[0].strip()
        body = lines[1] if len(lines) > 1 else ""
        
        # remove horizontal rules
        body = re.sub(r'\n---\n', '\n\n', body)
        
        wrapped = f"""<details open class="mb-8 border border-[var(--line)] rounded-xl p-6 shadow-sm bg-[var(--bg2)] group">
<summary class="text-2xl font-bold cursor-pointer border-b border-[var(--line)] pb-4 mb-4 hover:text-[var(--accent)] transition-colors list-none flex items-center gap-3">
  <span class="group-open:rotate-90 transition-transform text-[var(--accent)]">▶</span>
  Topic: {topic_name}
</summary>

{body}
</details>
"""
        new_content += wrapped

    with open('public/Questions/Xtras_qstn.md', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Success")

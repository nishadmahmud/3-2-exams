import re
import os

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to find <details> blocks. We will use re.DOTALL to capture multiline content
    pattern = re.compile(
        r'<details className="mt-2 mb-6">\s*<summary[^>]*>Show Answer</summary>\s*<div[^>]*>(.*?)</div>\s*</details>',
        re.DOTALL
    )

    def replace_func(match):
        inner_html = match.group(1).strip()
        # Convert <br/> and <br> to newlines
        inner_html = re.sub(r'<br\s*/?>', '\n', inner_html)
        # Convert <strong> to **
        inner_html = re.sub(r'<strong>(.*?)</strong>', r'**\1**', inner_html, flags=re.DOTALL)
        # Convert <em> to *
        inner_html = re.sub(r'<em>(.*?)</em>', r'*\1*', inner_html, flags=re.DOTALL)
        
        # Now prefix every line with "> "
        lines = inner_html.split('\n')
        blockquote_lines = []
        for line in lines:
            line = line.strip()
            # If the line is an empty string, just output ">"
            if line:
                blockquote_lines.append(f"> {line}")
            else:
                blockquote_lines.append(">")
        return '\n'.join(blockquote_lines)

    new_content = pattern.sub(replace_func, content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Processed {filepath}")

if __name__ == "__main__":
    process_file('public/Questions/3-2.md')
    process_file('public/Questions/Metro_qstn.md')

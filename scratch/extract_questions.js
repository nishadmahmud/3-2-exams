const fs = require('fs');

const transcriptPath = 'C:\\Users\\Nishad\\.gemini\\antigravity\\brain\\6bd3da19-e76e-47c1-81aa-4a6e5f295235\\.system_generated\\logs\\transcript.jsonl';
const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n');

for (const line of lines) {
  if (!line) continue;
  try {
    const data = JSON.parse(line);
    if (data.tool_calls) {
      for (const call of data.tool_calls) {
        if (call.name === 'write_to_file' && call.args && call.args.TargetFile) {
          if (call.args.TargetFile.includes('3-2.md') || call.args.TargetFile.includes('Metro_qstn.md')) {
             if (call.args.CodeContent && call.args.CodeContent.includes('Imagine you are the manager')) {
                fs.writeFileSync('scratch/original_3-2.txt', call.args.CodeContent);
             }
             if (call.args.CodeContent && call.args.CodeContent.includes('A company plans to develop a Smart Healthcare Management System')) {
                fs.writeFileSync('scratch/original_Metro_qstn.txt', call.args.CodeContent);
             }
          }
        }
      }
    }
  } catch(e) {}
}

console.log("Done extracting!");

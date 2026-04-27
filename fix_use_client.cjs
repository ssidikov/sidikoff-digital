const fs = require('fs');
const execSync = require('child_process').execSync;

const files = execSync('grep -rl "from \'framer-motion\'" src/components/ | xargs grep -L "use client" || true')
  .toString()
  .trim()
  .split('\n')
  .filter(Boolean);

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  if (!content.includes("'use client'") && !content.includes('"use client"')) {
    fs.writeFileSync(file, "'use client'\n\n" + content);
    console.log(`Added 'use client' to ${file}`);
  }
});

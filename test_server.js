const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const logFile = path.join(__dirname, 'screenshot_result.txt');
fs.writeFileSync(logFile, '1. Started test_server.js\n');

const chromeExe = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const convId = 'd60ce544-a6cd-4db4-99e6-7e26bde00b56';
const outDir = path.resolve(`C:/Users/GARV/.gemini/antigravity-ide/brain/${convId}`);
const outPath = path.join(outDir, 'screenshot_homepage.png');
const profileDir = path.join(outDir, 'scratch', 'chrome_user_prof');

if (!fs.existsSync(profileDir)) {
  fs.mkdirSync(profileDir, { recursive: true });
}

fs.appendFileSync(logFile, `2. Chrome exists: ${fs.existsSync(chromeExe)}\n`);
fs.appendFileSync(logFile, `3. Target path: ${outPath}\n`);

const args = [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  `--user-data-dir=${profileDir}`,
  '--window-size=1440,900',
  `--screenshot=${outPath}`,
  'http://localhost:3000'
];

try {
  const res = spawnSync(chromeExe, args, { timeout: 25000 });
  fs.appendFileSync(logFile, `4. Spawn status: ${res.status}, error: ${res.error}\n`);
  fs.appendFileSync(logFile, `5. File exists: ${fs.existsSync(outPath)}\n`);
  if (fs.existsSync(outPath)) {
    const stat = fs.statSync(outPath);
    fs.appendFileSync(logFile, `6. Screenshot size: ${stat.size} bytes\n`);
  }
} catch (e) {
  fs.appendFileSync(logFile, `4. Exception: ${e.message}\n`);
}

fs.appendFileSync(logFile, 'Finished test_server.js\n');
console.log('Finished test_server.js');

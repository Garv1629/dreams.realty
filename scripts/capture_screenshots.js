const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const candidates = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
];

let browserPath = candidates.find(p => fs.existsSync(p));
console.log('Found browser:', browserPath);

if (!browserPath) {
  console.error('No Edge or Chrome executable found.');
  process.exit(1);
}

const outDir = path.join('C:', 'Users', 'GARV', '.gemini', 'antigravity-ide', 'brain', 'dc4ec441-7523-47b7-b4db-dc16df022115');
console.log('Artifacts output directory:', outDir);

// 1. Screenshot at page top
const topShot = path.join(outDir, 'screenshot_1_top.png');
console.log('Capturing top screenshot...');
execSync(`"${browserPath}" --headless --disable-gpu --window-size=1440,900 --screenshot="${topShot}" http://localhost:3000`, { stdio: 'inherit' });
console.log('Top screenshot saved:', fs.existsSync(topShot));

// 2. Full page screenshot to verify complete scrollability
const fullShot = path.join(outDir, 'screenshot_fullpage.png');
console.log('Capturing full page screenshot...');
execSync(`"${browserPath}" --headless --disable-gpu --window-size=1440,900 --default-background-color=00000000 --screenshot="${fullShot}" http://localhost:3000`, { stdio: 'inherit' });
console.log('Fullpage screenshot saved:', fs.existsSync(fullShot));

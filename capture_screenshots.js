const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const logFile = path.resolve('capture.log');
function log(...args) {
  const line = args.map(a => (typeof a === 'object' ? JSON.stringify(a) : a)).join(' ');
  fs.appendFileSync(logFile, line + '\n');
  console.log(line);
}

fs.writeFileSync(logFile, '--- CAPTURE START ---\n');

const possiblePaths = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  path.join(process.env.LOCALAPPDATA || '', 'Google\\Chrome\\Application\\chrome.exe'),
  path.join(process.env.LOCALAPPDATA || '', 'Microsoft\\Edge\\Application\\msedge.exe'),
  path.join(process.env.PROGRAMFILES || '', 'Google\\Chrome\\Application\\chrome.exe'),
  path.join(process.env['PROGRAMFILES(X86)'] || '', 'Google\\Chrome\\Application\\chrome.exe'),
  path.join(process.env.PROGRAMFILES || '', 'Microsoft\\Edge\\Application\\msedge.exe'),
  path.join(process.env['PROGRAMFILES(X86)'] || '', 'Microsoft\\Edge\\Application\\msedge.exe'),
];

let browserPath = null;
for (const p of possiblePaths) {
  if (p && fs.existsSync(p)) {
    browserPath = p;
    break;
  }
}

log('Browser path:', browserPath);

if (!browserPath) {
  log('ERROR: No Chrome or Edge binary found.');
  process.exit(1);
}

const outDir = path.resolve('C:/Users/GARV/.gemini/antigravity-ide/brain/d60ce544-a6cd-4db4-99e6-7e26bde00b56');
const userDir = path.join(outDir, 'scratch', 'chrome_prof_' + Date.now());
fs.mkdirSync(userDir, { recursive: true });

const shots = [
  { name: 'screenshot_desktop.png', size: '1440,900' },
  { name: 'screenshot_mobile.png', size: '390,844' }
];

for (const s of shots) {
  const target = path.join(outDir, s.name);
  log(`Capturing ${s.name} at ${s.size}...`);
  const args = [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--hide-scrollbars',
    `--user-data-dir=${userDir}`,
    `--window-size=${s.size}`,
    `--screenshot=${target}`,
    'http://127.0.0.1:3000'
  ];
  const res = spawnSync(browserPath, args, { encoding: 'utf8', timeout: 30000 });
  log(`Result for ${s.name}: status=${res.status} error=${res.error ? res.error.message : 'none'}`);
  if (res.stderr) log('STDERR:', res.stderr.slice(0, 500));
  const exists = fs.existsSync(target);
  log(`Target ${target} exists: ${exists}`);
  if (exists) {
    log(`File size: ${fs.statSync(target).size} bytes`);
  }
}

log('--- CAPTURE END ---');

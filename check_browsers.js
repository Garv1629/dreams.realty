const fs = require('fs');
const path = require('path');

async function main() {
  const candidates = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    path.join(process.env.LOCALAPPDATA || 'C:\\Users\\GARV\\AppData\\Local', 'Google\\Chrome\\Application\\chrome.exe'),
    path.join(process.env.LOCALAPPDATA || 'C:\\Users\\GARV\\AppData\\Local', 'Microsoft\\Edge\\Application\\msedge.exe'),
  ];

  console.log('--- CHECKING BROWSER CANDIDATES ---');
  for (const c of candidates) {
    let exists = false;
    try {
      exists = fs.existsSync(c);
    } catch (e) {
      exists = false;
    }
    console.log(c, '=>', exists);
  }
  await new Promise(r => setTimeout(r, 1000));

}

main().catch(err => console.error(err));

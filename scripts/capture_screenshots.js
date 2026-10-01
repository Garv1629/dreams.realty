const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const http = require('http');

const projectRoot = path.resolve(__dirname, '..');
const logFile = path.join(projectRoot, 'capture_test.log');

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}`;
  console.log(line);
  try {
    fs.appendFileSync(logFile, line + '\n');
  } catch (e) {}
}

fs.writeFileSync(logFile, '=== START CAPTURE TEST ===\n');

const browserPath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
log(`Browser path: ${browserPath}, exists: ${fs.existsSync(browserPath)}`);

// Check if server responds on 3000
log('Checking http://localhost:3000...');
const req = http.get('http://localhost:3000', (res) => {
  log(`HTTP status code: ${res.statusCode}`);
  let data = '';
  res.on('data', chunk => { data += chunk; });
  res.on('end', () => {
    log(`Received HTML size: ${data.length} bytes`);
    const hasCss = data.includes('_next/static/css') || data.includes('<style');
    log(`Contains CSS links/tags: ${hasCss}`);

    // Take screenshots
    const shots = [
      { name: 'screenshot_hero.png', hash: '#hero-section' },
      { name: 'screenshot_midpage.png', hash: '#trust-section' },
      { name: 'screenshot_footer.png', hash: '#footer-section' }
    ];

    const convId = 'd4dcfc5e-26ba-47ad-8a74-7ca02c309324';
    const artifactDir = path.resolve(`C:/Users/GARV/.gemini/antigravity-ide/brain/${convId}`);
    try {
      if (!fs.existsSync(artifactDir)) fs.mkdirSync(artifactDir, { recursive: true });
    } catch (e) {}

    const profileDir = path.join(projectRoot, '.chrome_profile');
    if (!fs.existsSync(profileDir)) fs.mkdirSync(profileDir, { recursive: true });

    for (const shot of shots) {
      const pubTarget = path.join(projectRoot, 'public', shot.name);
      const artTarget = path.join(artifactDir, shot.name);
      const url = `http://localhost:3000/${shot.hash}`;

      log(`Capturing ${shot.name} from ${url}...`);
      const args = [
        '--headless=new',
        '--disable-gpu',
        '--no-sandbox',
        `--user-data-dir=${profileDir}`,
        '--window-size=1440,900',
        `--screenshot=${pubTarget}`,
        url
      ];

      const r = spawnSync(browserPath, args, { encoding: 'utf8', timeout: 30000 });
      log(`Chrome status: ${r.status}, error: ${r.error ? r.error.message : 'none'}`);
      if (fs.existsSync(pubTarget)) {
        const sz = fs.statSync(pubTarget).size;
        log(`Created public/${shot.name}: ${sz} bytes`);
        try {
          fs.copyFileSync(pubTarget, artTarget);
          log(`Copied to artifact dir: ${artTarget}`);
        } catch (ce) {
          log(`Copy to artifact failed: ${ce.message}`);
        }
      } else {
        log(`Failed to create ${pubTarget}`);
      }
    }

    log('=== END CAPTURE TEST ===');
  });
});

req.on('error', (e) => {
  log(`HTTP error connecting to localhost:3000: ${e.message}`);
});
req.setTimeout(5000, () => {
  req.destroy(new Error('HTTP request timeout'));
});

const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/GARV/.gemini/antigravity-ide/brain/dc4ec441-7523-47b7-b4db-dc16df022115';
const destDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = [
  { from: 'hero_fallback_desktop_1790842668543.jpg', to: 'hero_fallback_desktop.jpg' },
  { from: 'hero_fallback_mobile_1790842681886.jpg', to: 'hero_fallback_mobile.jpg' },
  { from: 'about_us_architecture_1790842693994.jpg', to: 'about_us_architecture.jpg' },
  { from: 'pattern_subtle_1790842707951.jpg', to: 'pattern_subtle.jpg' },
  { from: 'empty_state_search_1790842722378.jpg', to: 'empty_state_search.jpg' },
  { from: 'empty_state_404_1790842747494.jpg', to: 'empty_state_404.jpg' },
  { from: 'empty_state_success_1790842781974.jpg', to: 'empty_state_success.jpg' },
  { from: 'social_share_template_1790842794017.jpg', to: 'social_share_template.jpg' }
];

for (const f of files) {
  const src = path.join(srcDir, f.from);
  const dest = path.join(destDir, f.to);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${f.from} -> ${f.to}`);
  } else {
    console.log(`Not found: ${src}`);
  }
}

// Multi-Scroll Screenshot Verification
const { execSync } = require('child_process');
const logFile = path.join(srcDir, 'screenshot_debug.txt');
fs.writeFileSync(logFile, `Starting browser check at ${new Date().toISOString()}\n`);

function log(msg) {
  fs.appendFileSync(logFile, msg + '\n');
  console.log(msg);
}

const browserCandidates = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
];

const browserExe = browserCandidates.find(p => fs.existsSync(p));
log(`Selected browser: ${browserExe}`);

const { spawnSync } = require('child_process');
if (browserExe) {
  const shots = [
    { name: 'screenshot_1_top.png', url: 'http://localhost:3000/#hero-section' },
    { name: 'screenshot_2_after_hero.png', url: 'http://localhost:3000/#featured-properties-section' },
    { name: 'screenshot_3_middle.png', url: 'http://localhost:3000/#property-discovery-section' },
    { name: 'screenshot_4_footer.png', url: 'http://localhost:3000/#footer-section' },
    { name: 'screenshot_fullpage.png', url: 'http://localhost:3000', size: '1440,3600' }
  ];

  for (const shot of shots) {
    const outPath = path.join(srcDir, shot.name);
    const size = shot.size || '1440,900';
    try {
      log(`Capturing ${shot.name}...`);
      const args = [
        '--headless=new',
        '--no-sandbox',
        '--disable-gpu',
        '--hide-scrollbars',
        '--virtual-time-budget=3000',
        `--window-size=${size}`,
        `--screenshot=${outPath}`,
        shot.url
      ];
      const res = spawnSync(browserExe, args, {
        timeout: 10000,
        windowsHide: true,
        shell: false
      });
      log(`Result code: ${res.status}, exists: ${fs.existsSync(outPath)}`);
    } catch (e) {
      log(`Error capturing ${shot.name}: ${e.message}`);
    }
  }
} else {
  log('No browser executable found on system.');
}

import { NextResponse } from 'next/server';
import { spawnSync } from 'child_process';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
  const artifactDir = 'C:\\Users\\GARV\\.gemini\\antigravity-ide\\brain\\dc4ec441-7523-47b7-b4db-dc16df022115';
  const profileDir = path.join(artifactDir, 'scratch', 'chrome_profile_tmp');
  if (!fs.existsSync(profileDir)) {
    fs.mkdirSync(profileDir, { recursive: true });
  }

  const browserCandidates = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
  ];

  const browserExe = browserCandidates.find(p => fs.existsSync(p));
  if (!browserExe) {
    return NextResponse.json({ error: 'No browser executable found' }, { status: 500 });
  }

  const shots = [
    { name: 'screenshot_1_top.png', url: 'http://localhost:3000/#hero-section' },
    { name: 'screenshot_2_after_hero.png', url: 'http://localhost:3000/#featured-properties-section' },
    { name: 'screenshot_3_middle.png', url: 'http://localhost:3000/#property-discovery-section' },
    { name: 'screenshot_4_footer.png', url: 'http://localhost:3000/#footer-section' }
  ];

  const results: any[] = [];

  for (const shot of shots) {
    const outPath = path.join(artifactDir, shot.name);
    const args = [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      `--user-data-dir=${profileDir}`,
      '--window-size=1440,900',
      '--virtual-time-budget=2000',
      '--run-all-compositor-stages-before-draw',
      `--screenshot=${outPath}`,
      shot.url
    ];

    const proc = spawnSync(browserExe, args, { timeout: 30000 });
    const exists = fs.existsSync(outPath);
    const size = exists ? fs.statSync(outPath).size : 0;

    results.push({
      name: shot.name,
      url: shot.url,
      exitCode: proc.status,
      exists,
      size,
      error: proc.error ? proc.error.message : null,
      stderr: proc.stderr ? proc.stderr.toString().slice(0, 300) : null
    });
  }

  return NextResponse.json({
    browser: browserExe,
    results
  });
}

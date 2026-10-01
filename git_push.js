const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function runGit(args) {
  console.log(`> git ${args.join(' ')}`);
  const res = spawnSync('git', args, {
    cwd: __dirname,
    encoding: 'utf8',
    shell: false
  });
  if (res.stdout) console.log(res.stdout);
  if (res.stderr) console.error(res.stderr);
  if (res.error) console.error('EXEC_ERROR:', res.error);
  return { status: res.status, stdout: res.stdout, stderr: res.stderr };
}

// Clean up scratch files
const scratchFiles = [
  'runner', 'check.cmd', 'chkcss.js', 'diagnose_start.js', 'check_browsers.js',
  'find_browser.js', 'test_browser.js', 'fetch_check.js', 'inspect_homepage.js',
  'check_build.js', 'check_css.js', 'build_script.js', 'clean_next.js',
  'debug_serve.js', 'net_check.js', 'probe_server.js', 'run_full_build.js',
  'test_server.js', 'verify_palette.js', 'take_screenshots.py', 'capture_screenshots.js'
];
for (const f of scratchFiles) {
  const fp = path.join(__dirname, f);
  if (fs.existsSync(fp)) {
    try { fs.unlinkSync(fp); } catch (e) {}
  }
}

// Ensure user identity is configured
const userCheck = runGit(['config', 'user.name']);
if (!userCheck.stdout || !userCheck.stdout.trim()) {
  runGit(['config', 'user.name', 'Garv1629']);
  runGit(['config', 'user.email', 'garv@dreamsrealty.co.in']);
}

// Stage and commit
runGit(['add', '.']);
runGit(['status', '--short']);

runGit(['commit', '-m', 'Redesign Dreams Realty into premium real-estate experience with glassmorphism, editorial typography, and authentic listings']);

// Configure branch
runGit(['branch', '-M', 'main']);

// Configure remote
const remoteUrl = 'https://github.com/Garv1629/dreams.realty.git';
const remotes = runGit(['remote', '-v']);
if (remotes.stdout && remotes.stdout.includes('origin')) {
  runGit(['remote', 'set-url', 'origin', remoteUrl]);
} else {
  runGit(['remote', 'add', 'origin', remoteUrl]);
}

// Push to GitHub
console.log('--- PUSHING TO GITHUB ---');
const pushRes = runGit(['push', '-u', 'origin', 'main']);
console.log('PUSH STATUS:', pushRes.status);

const { spawn } = require('child_process');
const path = require('path');
const nextBin = path.join(__dirname, 'node_modules', 'next', 'dist', 'bin', 'next');

console.log('STARTING NEXT BUILD FULL RUN...');
const child = spawn(process.execPath, [nextBin, 'build'], {
  cwd: __dirname,
  env: { ...process.env, CI: '1', NEXT_TELEMETRY_DISABLED: '1' },
  stdio: 'inherit'
});

child.on('close', (code) => {
  console.log('BUILD COMPLETED WITH CODE:', code);
  process.exit(code || 0);
});

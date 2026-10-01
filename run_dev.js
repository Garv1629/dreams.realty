const { spawn } = require('child_process');
const path = require('path');
const nextBin = path.join(__dirname, 'node_modules', 'next', 'dist', 'bin', 'next');

console.log('STARTING NEXT DEV ON PORT 3000...');
const child = spawn(process.execPath, [nextBin, 'dev', '-H', '0.0.0.0', '-p', '3000'], {
  cwd: __dirname,
  env: { ...process.env, NEXT_TELEMETRY_DISABLED: '1' },
  stdio: 'inherit'
});

child.on('error', (err) => {
  console.error('DEV ERROR:', err);
});

child.on('close', (code) => {
  console.log('DEV CLOSED WITH CODE:', code);
  process.exit(code || 0);
});

const { spawn } = require('child_process');
const path = require('path');
const nextBin = path.join(__dirname, 'node_modules', 'next', 'dist', 'bin', 'next');

console.log('STARTING NEXT.JS PRODUCTION SERVER ON PORT 3000...');
const child = spawn(process.execPath, [nextBin, 'start', '-p', '3000'], {
  cwd: __dirname,
  env: process.env,
  stdio: 'inherit'
});

child.on('error', (err) => {
  console.error('SERVER ERROR:', err);
});

child.on('close', (code) => {
  console.log('SERVER CLOSED WITH CODE:', code);
});

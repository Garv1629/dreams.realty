const { spawnSync } = require('child_process');
const path = require('path');
const nextBin = path.join(__dirname, 'node_modules', 'next', 'dist', 'bin', 'next');

const res = spawnSync(process.execPath, [nextBin, 'start'], {
  cwd: __dirname,
  env: process.env,
  encoding: 'utf8',
  timeout: 5000
});

console.log('STATUS:', res.status);
console.log('STDOUT:\n', res.stdout);
console.log('STDERR:\n', res.stderr);
if (res.error) console.log('ERROR:\n', res.error);

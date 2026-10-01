const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const logFile = path.join(__dirname, 'server_log.txt');
fs.writeFileSync(logFile, `Starting serve.js at ${new Date().toISOString()}\n`);

const nextBin = path.join(__dirname, 'node_modules', 'next', 'dist', 'bin', 'next');
const hasBuild = fs.existsSync(path.join(__dirname, '.next'));
const mode = hasBuild ? 'start' : 'dev';

fs.appendFileSync(logFile, `Mode: ${mode}, nextBin: ${nextBin}, exists: ${fs.existsSync(nextBin)}\n`);

const args = mode === 'dev' 
  ? [nextBin, 'dev', '-p', '3000']
  : [nextBin, 'start', '-p', '3000'];

const out = fs.openSync(logFile, 'a');
const err = fs.openSync(logFile, 'a');

const child = spawn(process.execPath, args, {
  cwd: __dirname,
  env: { ...process.env, NEXT_TELEMETRY_DISABLED: '1' },
  stdio: ['ignore', out, err],
  detached: true
});

child.unref();

fs.appendFileSync(logFile, `Spawned child PID: ${child.pid}\n`);
console.log(`Server launched with PID ${child.pid}. Check server_log.txt for details.`);

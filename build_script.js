const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, 'build_result.log');
fs.writeFileSync(logFile, `STARTING at ${new Date().toISOString()}\nCWD: ${process.cwd()}\nDIRNAME: ${__dirname}\nEXEC: ${process.execPath}\n`);

const nextBin = path.join(__dirname, 'node_modules', 'next', 'dist', 'bin', 'next');
fs.appendFileSync(logFile, `NEXT_BIN: ${nextBin} (exists: ${fs.existsSync(nextBin)})\n`);

try {
  const res = spawnSync(process.execPath, [nextBin, 'build'], {
    cwd: __dirname,
    encoding: 'utf8',
    env: { ...process.env, CI: '1', NEXT_TELEMETRY_DISABLED: '1' },
    maxBuffer: 50 * 1024 * 1024
  });

  fs.appendFileSync(logFile, `STATUS: ${res.status}\nSIGNAL: ${res.signal}\nERROR: ${res.error}\n`);
  fs.appendFileSync(logFile, `STDOUT:\n${res.stdout || ''}\n`);
  fs.appendFileSync(logFile, `STDERR:\n${res.stderr || ''}\n`);
} catch (e) {
  fs.appendFileSync(logFile, `EXCEPTION: ${e.message}\n${e.stack}\n`);
}

fs.appendFileSync(logFile, `FINISHED at ${new Date().toISOString()}\n`);
console.log('Build script finished.');

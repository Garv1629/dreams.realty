const { spawn } = require('child_process');
const http = require('http');
const path = require('path');
const nextBin = path.join(__dirname, 'node_modules', 'next', 'dist', 'bin', 'next');

const fs = require('fs');
const logFile = path.join(__dirname, 'probe_result.log');
function log(msg) {
  fs.appendFileSync(logFile, msg + '\n');
  console.log(msg);
}

log('SPAWNING SERVER at ' + new Date().toISOString());
const child = spawn(process.execPath, [nextBin, 'start', '-p', '3000'], {
  cwd: __dirname,
  env: process.env
});

child.stdout.on('data', (d) => log('SERVER_OUT: ' + d.toString().trim()));
child.stderr.on('data', (d) => log('SERVER_ERR: ' + d.toString().trim()));

let attempts = 0;
function probe() {
  attempts++;
  log('PROBING http://localhost:3000 (attempt ' + attempts + ')...');
  const req = http.get('http://localhost:3000', (res) => {
    log('=== PROBE SUCCESS! ===');
    log('Status code: ' + res.statusCode);
    log('Content-Type: ' + res.headers['content-type']);
    let data = '';
    res.on('data', c => data += c);
    res.on('end', () => {
      log('HTML length: ' + data.length);
      const cssMatches = data.match(/<link[^>]*rel="stylesheet"[^>]*>/gi) || [];
      log('Stylesheet links: ' + JSON.stringify(cssMatches));
      log('Sample HTML: ' + data.substring(0, 400));
      child.kill();
      process.exit(0);
    });
  });
  req.on('error', (err) => {
    log('Waiting for server... (' + err.code + ')');
    if (attempts < 15) {
      setTimeout(probe, 1500);
    } else {
      log('TIMED OUT WAITING FOR SERVER');
      child.kill();
      process.exit(1);
    }
  });
}

setTimeout(probe, 2000);

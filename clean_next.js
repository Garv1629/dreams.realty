const fs = require('fs');
const path = require('path');

function rmdir(dir) {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach(f => {
      const p = path.join(dir, f);
      if (fs.lstatSync(p).isDirectory()) rmdir(p);
      else fs.unlinkSync(p);
    });
    fs.rmdirSync(dir);
  }
}

const nextDir = path.join(__dirname, '.next');
try {
  rmdir(nextDir);
  console.log('Successfully cleaned .next directory');
} catch(e) {
  console.log('Error cleaning .next:', e.message);
}

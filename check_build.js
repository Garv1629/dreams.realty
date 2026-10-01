const fs = require('fs');
const path = require('path');

console.log('=== CHECKING BUILD ARTIFACTS ===');
console.log('.next exists:', fs.existsSync('.next'));
if (fs.existsSync('.next')) {
  console.log('Entries in .next:', fs.readdirSync('.next'));
  const cssDir = path.join('.next', 'static', 'css');
  if (fs.existsSync(cssDir)) {
    const cssFiles = fs.readdirSync(cssDir);
    console.log('CSS files:', cssFiles);
    cssFiles.forEach(f => {
      const stats = fs.statSync(path.join(cssDir, f));
      console.log(`- ${f}: ${stats.size} bytes`);
    });
  } else {
    console.log('No static/css directory found');
  }

  const serverDir = path.join('.next', 'server', 'app');
  if (fs.existsSync(serverDir)) {
    console.log('Entries in .next/server/app:', fs.readdirSync(serverDir));
  }
}

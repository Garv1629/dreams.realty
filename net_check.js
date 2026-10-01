const { execSync } = require('child_process');
try {
  const out = execSync('netstat -ano | findstr :3000', { encoding: 'utf8' });
  console.log('NETSTAT:\n', out);
} catch (e) {
  console.log('NETSTAT error:', e.message);
}

const { spawnSync } = require('child_process');

function runGit(args) {
  console.log(`> git ${args.join(' ')}`);
  const res = spawnSync('git', args, {
    cwd: __dirname,
    encoding: 'utf8',
    shell: false
  });
  if (res.stdout) console.log(res.stdout);
  if (res.stderr) console.error(res.stderr);
  return res.status;
}

runGit(['status']);
runGit(['log', '-n', '1']);
runGit(['remote', '-v']);

setTimeout(() => {
  console.log('--- CHECK COMPLETE ---');
}, 1000);


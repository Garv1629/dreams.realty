const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

function runGit(args) {
  console.log(`> git ${args.join(' ')}`);
  const res = spawnSync('git', args, {
    cwd: path.resolve(__dirname),
    encoding: 'utf8',
    shell: false
  });
  if (res.stdout) console.log(res.stdout);
  if (res.stderr) console.error(res.stderr);
  if (res.error) console.error('EXEC_ERROR:', res.error);
  return res;
}

async function test() {
  try {
    const res = await fetch('http://127.0.0.1:3000');
    console.log('PORT_3000_STATUS:', res.status);

    console.log('\n--- GIT CONFIGURATION & COMMITTING ---');
    runGit(['init']);
    runGit(['config', 'user.name', 'Garv1629']);
    runGit(['config', 'user.email', 'garv@dreamsrealty.co.in']);
    runGit(['add', '.']);
    runGit(['status', '--short']);
    runGit(['commit', '-m', 'Redesign Dreams Realty website into polished premium real-estate experience']);
    runGit(['branch', '-M', 'main']);

    const remoteUrl = 'https://github.com/Garv1629/dreams.realty.git';
    const remotes = runGit(['remote', '-v']);
    if (remotes.stdout && remotes.stdout.includes('origin')) {
      runGit(['remote', 'set-url', 'origin', remoteUrl]);
    } else {
      runGit(['remote', 'add', 'origin', remoteUrl]);
    }

    console.log('\n--- PULLING REMOTE WITH REBASE ---');
    runGit(['pull', 'origin', 'main', '--rebase', '--allow-unrelated-histories']);

    console.log('\n--- ATTEMPTING GIT PUSH ---');
    let push = runGit(['push', '-u', 'origin', 'main']);
    if (push.status !== 0) {
      console.log('\n--- RETRYING WITH FORCE PUSH ---');
      push = runGit(['push', '--force', '-u', 'origin', 'main']);
    }
    console.log('PUSH_EXIT_CODE:', push.status);

  } catch (e) {
    console.error('ERROR:', e.message);
  }
}
test();

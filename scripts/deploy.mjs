// Builds the site, puts a password page in front of the desk, the wall and the deck,
// and publishes it to the gh-pages branch (GitHub Pages: Deploy from a branch → gh-pages).
//   npm run deploy            asks for the password, then publishes
//   npm run deploy -- --local builds and encrypts into dist/ without publishing
// The password is never written to the repo. Keep it the same between deploys,
// together with .staticrypt.json, so "Remember me" keeps working for viewers.
import { execFileSync } from 'node:child_process';
import { createInterface } from 'node:readline/promises';
import { stdin, stdout } from 'node:process';

const local = process.argv.includes('--local');
let password = process.env.STATICRYPT_PASSWORD;
if (!password) {
  const rl = createInterface({ input: stdin, output: stdout });
  password = (await rl.question('Password for the site: ')).trim();
  rl.close();
}
if (!password) {
  console.error('No password given; nothing was built.');
  process.exit(1);
}

const run = (cmd, args, env = {}) =>
  execFileSync(cmd, args, { stdio: 'inherit', env: { ...process.env, ...env } });

run('npx', ['vite', 'build'], { GITHUB_PAGES: '1' });

const pages = [
  ['dist/index.html', 'dist'],
  ['dist/404.html', 'dist'],
  ['dist/wall/index.html', 'dist/wall'],
  ['dist/deck.html', 'dist'],
];
for (const [file, dir] of pages) {
  run(
    'npx',
    [
      'staticrypt', file, '-d', dir, '--short', '--remember', '30',
      '--template-title', 'Hevi video wall',
      '--template-instructions', 'Enter the password from the email.',
      '--template-button', 'Open',
      '--template-placeholder', 'Password',
      '--template-remember', 'Remember me on this computer',
      '--template-error', 'Wrong password',
      '--template-color-primary', '#1F7FAF',
      '--template-color-secondary', '#0A0E13',
    ],
    { STATICRYPT_PASSWORD: password },
  );
}

if (local) {
  console.log('Encrypted site is in dist/ (not published).');
} else {
  run('npx', ['gh-pages', '-d', 'dist', '-m', 'Deploy site']);
  console.log('Published. Live in about a minute at https://l2rri-git.github.io/hevi-video-wall/');
}

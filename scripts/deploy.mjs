// Publishes the site to GitHub Pages (branch "gh-pages").
//   npm run deploy
// Steps: brand check → static build → brand check on the build → push the build to gh-pages.
// Stops at the first failing step, so nothing is published unless the check is clean.
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, '.output', 'public');
const run = (cmd, args, opts = {}) => execFileSync(cmd, args, { cwd: ROOT, stdio: 'inherit', ...opts });
const read = (cmd, args, opts = {}) => execFileSync(cmd, args, { cwd: ROOT, encoding: 'utf8', ...opts }).trim();

const remote = read('git', ['remote', 'get-url', 'origin']);
const [owner, repo] = remote.replace(/\.git$/, '').split('/').slice(-2);
const base = `/${repo}/`;

console.log('1/4 brand check (source)');
fs.rmSync(path.join(ROOT, '.output'), { recursive: true, force: true });
run('node', ['scripts/check-brand.mjs']);

console.log(`\n2/4 build for ${base}`);
run('npx', ['nuxt', 'generate'], { env: { ...process.env, NUXT_APP_BASE_URL: base, NUXT_PUBLIC_SITE_URL: `https://${owner.toLowerCase()}.github.io` } });

console.log('\n3/4 brand check (build)');
run('node', ['scripts/check-brand.mjs']);

console.log('\n4/4 publish to gh-pages');
fs.writeFileSync(path.join(OUT, '.nojekyll'), '');
const source = read('git', ['rev-parse', '--short', 'HEAD']);
fs.rmSync(path.join(OUT, '.git'), { recursive: true, force: true });
const git = (...args) => run('git', args, { cwd: OUT });
git('init', '-q', '-b', 'gh-pages');
git('add', '-A');
git('commit', '-q', '-m', `Deploy ${source}`);
git('push', '-q', '--force', remote, 'gh-pages'); // gh-pages holds build output only; it is replaced on every deploy
fs.rmSync(path.join(OUT, '.git'), { recursive: true, force: true });
console.log(`\nPublished. It can take a minute to appear.`);

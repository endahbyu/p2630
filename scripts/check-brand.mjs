// Guard against leftovers from reference material. Reads and reports only — changes nothing.
//   npm run check:brand            summary
//   npm run check:brand -- --full  every finding, per file
// Exit code: 0 clean · 1 findings · 2 rules file missing (deploy refuses to run in both failing cases).
//
// The rules live in .brand-rules.json, which is deliberately NOT committed:
//   { "words": [...], "places": [...], "originDir": "../path-to-reference-folder" }
//   words     — terms that must not appear anywhere (file contents, binary files, file names)
//   places    — whole-word terms checked in text files and file names only
//   originDir — reference folder; any file here that is byte-identical to a file there is reported
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FULL = process.argv.includes('--full');
const RULES = path.join(ROOT, '.brand-rules.json');

if (!fs.existsSync(RULES)) {
  console.error('check:brand — .brand-rules.json is missing, so nothing can be verified. Create it (see the header of scripts/check-brand.mjs).');
  process.exit(2);
}
const rules = JSON.parse(fs.readFileSync(RULES, 'utf8'));
const WORDS = rules.words ?? [], PLACES = rules.places ?? [];
const ORIGIN = rules.originDir ? path.resolve(ROOT, rules.originDir) : null;

// External hosts that may appear (open-source attributions, XML namespaces, the project's own hosting).
const ALLOWED_HOSTS = ['www.w3.org', 'github.com', 'gsap.com', 'threejs.org', 'nuxt.com', 'vuejs.org', 'localhost', 'endahbyu.github.io'];
const SKIP_DIRS = new Set(['node_modules', '.nuxt', '.git']);
const SKIP_FILES = new Set(['package-lock.json', '.brand-rules.json']);
const SAME_OK = new Set(['tsconfig.json']); // generic one-liners that are identical in any Nuxt project

const TEXT_EXT = new Set(['.vue', '.ts', '.js', '.mjs', '.cjs', '.css', '.scss', '.json', '.svg', '.sh', '.md', '.html', '.txt', '.obj', '.xml', '.yml', '.yaml', '.map']);
const UTF16_EXT = new Set(['.ttf', '.otf']);
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const never = /(?!)/g;
const wordRe = WORDS.length ? new RegExp(WORDS.map(esc).join('|'), 'gi') : never;
const placeRe = PLACES.length ? new RegExp(`\\b(?:${PLACES.map(esc).join('|')})\\b`, 'gi') : never;
const longWords = WORDS.filter((w) => w.length >= 5); // short terms match by chance inside binary data
const binaryRe = longWords.length ? new RegExp(longWords.map(esc).join('|'), 'gi') : never;
const hostRe = /https?:\/\/([a-z0-9.-]+\.[a-z]{2,})/gi;

function* walk(dir, skip = SKIP_DIRS) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === '.DS_Store') continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (!skip.has(e.name)) yield* walk(p, skip); }
    else if (e.isFile()) yield p;
  }
}
const rel = (p) => path.relative(ROOT, p).split(path.sep).join('/');
const sha = (buf) => crypto.createHash('sha1').update(buf).digest('hex');
const tally = (m) => { const c = {}; for (const x of m) { const k = x.toLowerCase(); c[k] = (c[k] || 0) + 1; } return c; };
const fmt = (o) => Object.entries(o).sort((a, b) => b[1] - a[1]).map(([k, n]) => `${k}×${n}`).join(', ');

let originHashes = null;
if (ORIGIN && fs.existsSync(ORIGIN)) {
  originHashes = new Map();
  for (const p of walk(ORIGIN, new Set(['node_modules', '.nuxt', '.git', '.output']))) {
    const buf = fs.readFileSync(p);
    if (buf.length) originHashes.set(sha(buf), path.relative(ORIGIN, p));
  }
}

const words = [], names = [], hosts = [], same = [];
let scanned = 0;
for (const p of walk(ROOT)) {
  const r = rel(p);
  if (SKIP_FILES.has(r)) continue;
  scanned++;
  const ext = path.extname(p).toLowerCase();
  const nameHits = [...(r.match(wordRe) || []), ...(r.match(placeRe) || [])];
  if (nameHits.length) names.push({ file: r, hits: tally(nameHits) });
  const buf = fs.readFileSync(p);
  if (TEXT_EXT.has(ext)) {
    const s = buf.toString('utf8');
    const w = [...(s.match(wordRe) || []), ...(s.match(placeRe) || [])];
    if (w.length) words.push({ file: r, hits: tally(w) });
    const h = [...s.matchAll(hostRe)].map((m) => m[1].toLowerCase()).filter((x) => !ALLOWED_HOSTS.includes(x));
    if (h.length) hosts.push({ file: r, hits: tally(h) });
  } else {
    let s = buf.toString('latin1');
    if (UTF16_EXT.has(ext)) s += '\n' + s.replace(/\0/g, '');
    const w = s.match(binaryRe) || [];
    if (w.length) words.push({ file: r, hits: tally(w) });
  }
  if (originHashes && buf.length && !SAME_OK.has(r)) {
    const src = originHashes.get(sha(buf));
    if (src) same.push({ file: r, hits: { [`= ${src}`]: 1 } });
  }
}

const section = (title, list) => {
  console.log(`\n${title}: ${list.length ? `${list.length} file(s)` : 'clean'}`);
  const shown = FULL ? list : list.slice(0, 8);
  for (const x of shown.sort((a, b) => a.file.localeCompare(b.file))) console.log(`  ${x.file}  ${fmt(x.hits)}`);
  if (list.length > shown.length) console.log(`  … ${list.length - shown.length} more (run with -- --full)`);
};
console.log(`check:brand — ${scanned} files scanned`);
section('1. Blocked terms in file contents', words);
section('2. Blocked terms in file names', names);
section('3. External hosts outside the allow-list', hosts);
if (originHashes) section('4. Files identical to the reference folder', same);
else console.log('\n4. Files identical to the reference folder: skipped (originDir not set or not found)');

const dirty = words.length + names.length + hosts.length + same.length;
console.log(dirty ? '\nResult: findings above must be resolved.' : '\nResult: clean.');
process.exit(dirty ? 1 : 0);

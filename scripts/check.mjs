import './build.mjs';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const html = await fs.readFile(path.join(root, 'dist/index.html'), 'utf8');
if (/\{\{[A-Z_0-9]+\}\}/.test(html)) throw new Error('Unresolved content tokens');
const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
for (const match of html.matchAll(/href="#([^"]+)"/g)) {
  if (!ids.has(match[1])) throw new Error(`Broken section link: ${match[1]}`);
}
for (const match of html.matchAll(/(?:src|href)="(\/(?!\/)[^"]+)"/g)) {
  await fs.access(path.join(root, 'dist', match[1]));
}
for (const file of ['app.js', 'content.mjs', 'scripts/build.mjs', 'scripts/serve.mjs']) {
  execFileSync(process.execPath, ['--check', path.join(root, file)]);
}
const config = JSON.parse(await fs.readFile(path.join(root, 'vercel.json'), 'utf8'));
if (config.outputDirectory !== 'dist') throw new Error('Incorrect deployment output');
console.log('Verified content rendering, section links, local assets, JavaScript syntax, and Vercel output.');

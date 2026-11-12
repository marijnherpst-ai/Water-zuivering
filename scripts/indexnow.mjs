// Tells Bing (and therefore Yahoo, DuckDuckGo and others) about pages that changed, via IndexNow.
//
//   node scripts/indexnow.mjs            pages changed in the last commit (HEAD~1..HEAD)
//   node scripts/indexnow.mjs <ref>      pages changed since <ref>, e.g. origin/main~3
//   node scripts/indexnow.mjs --dry      only print what would be sent
//
// Run it AFTER the deploy is live, so Bing fetches the new version.
import { execSync } from 'node:child_process';
import { readdirSync } from 'node:fs';

const HOST = 'www.water-zuivering.nl';
const args = process.argv.slice(2);
const dry = args.includes('--dry');
const since = args.find((a) => !a.startsWith('--')) || 'HEAD~1';

const keyFile = readdirSync('public').find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) throw new Error('IndexNow-sleutelbestand niet gevonden in public/');
const key = keyFile.replace('.txt', '');

const changed = execSync(`git diff --name-only ${since} HEAD`, { encoding: 'utf8' }).split('\n').filter(Boolean);

const urls = new Set();
for (const f of changed) {
  const m = f.match(/^app\/(.*)page\.js$/);
  if (m) {
    const route = m[1].replace(/\/$/, '');
    if (/\[|^api|^dashboard|^offerte|^admin/.test(route)) continue; // dynamic or private
    urls.add(`https://${HOST}/${route}`.replace(/\/$/, '') || `https://${HOST}`);
    if (route.startsWith('kennisbank/')) urls.add(`https://${HOST}/kennisbank`);
  }
  if (f === 'app/sitemap.js' || f === 'lib/sitemapDates.json') urls.add(`https://${HOST}/sitemap.xml`);
}

const list = [...urls];
if (!list.length) {
  console.log('Geen gewijzigde pagina’s gevonden, niets te melden.');
  process.exit(0);
}
console.log(`${list.length} URL’s:\n` + list.map((u) => ' - ' + u).join('\n'));
if (dry) process.exit(0);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${key}.txt`, urlList: list }),
});
console.log('IndexNow:', res.status, res.status === 200 || res.status === 202 ? 'ontvangen' : 'FOUT');

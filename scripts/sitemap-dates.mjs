// Writes lib/sitemapDates.json: the real last-change date of every page, taken from git.
// The sitemap uses it for <lastmod>, which Bing and Google use to decide what to re-crawl.
// Run before committing a page change:  npm run sitemap-dates
import { execSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';

const sitemap = readFileSync('app/sitemap.js', 'utf8');
const paths = [...sitemap.matchAll(/path:\s*'([^']*)'/g)].map((m) => m[1]);

function fileFor(path) {
  const base = path === '' ? 'app' : `app${path}`;
  const direct = `${base}/page.js`;
  if (existsSync(direct)) return direct;
  // dynamic routes, e.g. /winkel/ppc-filter -> app/winkel/[slug]/page.js
  const parent = base.split('/').slice(0, -1).join('/');
  for (const name of ['[slug]', '[id]']) {
    const f = `${parent}/${name}/page.js`;
    if (existsSync(f)) return f;
  }
  return null;
}

const out = {};
for (const p of paths) {
  const f = fileFor(p);
  if (!f) continue;
  try {
    const iso = execSync(`git log -1 --format=%cI -- "${f}"`, { encoding: 'utf8' }).trim();
    if (iso) out[p || '/'] = iso.slice(0, 10);
  } catch {
    /* no git history: leave it out rather than guess */
  }
}
writeFileSync('lib/sitemapDates.json', JSON.stringify(out, null, 2) + '\n');
console.log(`${Object.keys(out).length} van ${paths.length} pagina's met een datum`);

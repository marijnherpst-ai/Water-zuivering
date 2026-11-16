import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import FaqSchema from '@/components/FaqSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import { KLASSEN, naarMmol, naarFrans } from '@/lib/waterhardheid/data';
import { STAD_OVERZICHT, STAD_PAGINAS } from '@/lib/waterhardheid/stedenPaginas';

const getal = (n) => String(Math.round(n * 100) / 100).replace('.', ',');
const bereik = (a, b) => (a === b ? getal(a) : `${getal(a)} – ${getal(b)}`);

// Zet **vet** en [[label|/pad]] om naar <strong> en <Link>.
function Tekst({ tekst }) {
  const delen = tekst.split(/(\*\*[^*]+\*\*|\[\[[^\]]+\]\])/g).filter(Boolean);
  return delen.map((d, i) => {
    if (d.startsWith('**')) return <strong key={i} className="text-ink">{d.slice(2, -2)}</strong>;
    if (d.startsWith('[[')) {
      const [label, href] = d.slice(2, -2).split('|');
      return <Link key={i} href={href} className="underline hover:text-ink">{label}</Link>;
    }
    return d;
  });
}

function Tabel({ kolommen, rijen }) {
  return (
    <div className="mt-6 overflow-x-auto rounded-2xl border border-edge bg-white">
      <table className="w-full text-sm text-left">
        <thead className="bg-amber/10 text-ink">
          <tr>{kolommen.map((k) => <th key={k} scope="col" className="p-4 font-display font-bold">{k}</th>)}</tr>
        </thead>
        <tbody>
          {rijen.map((r) => (
            <tr key={r.join('|')} className="border-t border-edge align-top">
              {r.map((c, i) => (i === 0 ? <th key={i} scope="row" className="p-4 font-semibold text-ink">{c}</th> : <td key={i} className="p-4 text-dim">{c}</td>))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function StadPagina({ stad }) {
  const s = STAD_PAGINAS[stad];
  const midden = (s.min + s.max) / 2;
  const kl = KLASSEN.find((k) => midden < k.tot) || KLASSEN[KLASSEN.length - 1];
  const klMin = KLASSEN.find((k) => s.min < k.tot) || KLASSEN[KLASSEN.length - 1];
  const klMax = KLASSEN.find((k) => s.max < k.tot) || KLASSEN[KLASSEN.length - 1];
  const klasseTekst = klMin.label === klMax.label ? klMin.label : `${klMin.label} tot ${klMax.label.toLowerCase()}`;
  const overigeSteden = STAD_OVERZICHT.filter((o) => o.slug !== s.slug);
  const url = `https://www.water-zuivering.nl/waterhardheid/${s.slug}`;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Waterhardheid', url: 'https://www.water-zuivering.nl/waterhardheid' },
          { name: `Waterhardheid ${s.naam}`, url },
        ]}
      />
      <FaqSchema items={s.faq} />
      <RevealObserver />
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-20">
            <nav aria-label="Kruimelpad" className="text-xs text-dim">
              <Link href="/" className="hover:text-ink">Home</Link> / <Link href="/waterhardheid" className="hover:text-ink">Waterhardheid</Link> / <span className="text-ink">{s.naam}</span>
            </nav>
            <span className="mt-6 block text-xs font-bold uppercase tracking-widest text-amber-dark">Waterhardheid per stad</span>
            <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">{s.h1}</h1>
            <p className="mt-5 text-dim text-lg max-w-3xl"><Tekst tekst={s.lead} /></p>

            <dl className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-2xl card p-5">
                <dt className="text-xs uppercase tracking-widest text-dim">Waterbedrijf</dt>
                <dd className="mt-2 font-display text-xl font-bold text-ink">{s.bedrijf}</dd>
              </div>
              <div className="rounded-2xl card p-5">
                <dt className="text-xs uppercase tracking-widest text-dim">Hardheid</dt>
                <dd className="mt-2 font-display text-xl font-bold text-ink">{bereik(s.min, s.max)} °dH</dd>
              </div>
              <div className="rounded-2xl card p-5">
                <dt className="text-xs uppercase tracking-widest text-dim">In mmol/l en °fH</dt>
                <dd className="mt-2 font-display text-xl font-bold text-ink">{bereik(naarMmol(s.min), naarMmol(s.max))} mmol/l</dd>
                <dd className="text-xs text-dim">{bereik(naarFrans(s.min), naarFrans(s.max))} °fH</dd>
              </div>
              <div className="rounded-2xl card p-5">
                <dt className="text-xs uppercase tracking-widest text-dim">Klasse</dt>
                <dd className="mt-2 font-display text-xl font-bold" style={{ color: kl.kleur }}>{klasseTekst}</dd>
              </div>
            </dl>
            <p className="mt-4 text-xs text-dim">Cijfers van {s.bedrijf}, gecontroleerd op {s.peildatum}. Zacht is minder dan 8 °dH, gemiddeld 8 tot 12 °dH.</p>
          </div>
        </section>

        {/* SECTIES */}
        {s.secties.map((sec, i) => (
          <section key={sec.kop} className={`relative ${i % 2 === 0 ? 'bg-surface border-y border-edge' : ''}`}>
            <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
              <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">{sec.kop}</h2>
              {sec.tekst.map((t) => <p key={t} className="mt-4 text-dim leading-relaxed"><Tekst tekst={t} /></p>)}
              {sec.lijst && (
                <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
                  {sec.lijst.map((l) => <li key={l}><Tekst tekst={l} /></li>)}
                </ul>
              )}
            </div>
          </section>
        ))}

        {/* TABEL */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">{s.tabel.kop}</h2>
            <p className="mt-4 text-dim leading-relaxed"><Tekst tekst={s.tabel.uitleg} /></p>
            <Tabel kolommen={s.tabel.kolommen} rijen={s.tabel.rijen} />
            {s.tabel.extra && (
              <>
                <h3 className="mt-10 font-display text-xl font-bold text-ink">{s.tabel.extra.kop}</h3>
                <Tabel kolommen={s.tabel.extra.kolommen} rijen={s.tabel.extra.rijen} />
              </>
            )}
            <p className="mt-6 text-dim leading-relaxed">
              Staat jouw adres er niet bij? Vul je postcode en huisnummer in bij de <Link href="/waterhardheid" className="underline hover:text-ink">waterhardheid check</Link> voor de waarde op jouw adres.
            </p>
          </div>
        </section>

        {/* KALK / ONTHARDER */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">{s.kalk.kop}</h2>
            {s.kalk.tekst.map((t) => <p key={t} className="mt-4 text-dim leading-relaxed"><Tekst tekst={t} /></p>)}
            <p className="mt-4 text-dim leading-relaxed">
              Wil je weten wanneer je een ontharder of een zuiveraar nodig hebt? Lees dan <Link href="/kennisbank/waterontharder-vs-waterzuiveraar" className="underline hover:text-ink">waterontharder of waterzuiveraar</Link> en <Link href="/kennisbank/kalkaanslag-in-huis" className="underline hover:text-ink">kalkaanslag in huis</Link>.
            </p>
            {s.artikel && (
              <p className="mt-4 text-dim leading-relaxed">
                Over wat er verder in het water zit: <Link href={s.artikel.href} className="underline hover:text-ink">{s.artikel.label}</Link>.
              </p>
            )}
          </div>
        </section>

        {/* VERGELIJKING STEDEN */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waterhardheid in andere grote steden</h2>
            <p className="mt-4 text-dim leading-relaxed">Hoe verhoudt {s.naam} zich tot andere steden? Klik door voor de cijfers per stad.</p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-amber/10 text-ink">
                  <tr><th scope="col" className="p-4 font-display font-bold">Stad</th><th scope="col" className="p-4 font-display font-bold">Waterbedrijf</th><th scope="col" className="p-4 font-display font-bold">Hardheid</th><th scope="col" className="p-4 font-display font-bold">Klasse</th></tr>
                </thead>
                <tbody>
                  <tr className="border-t border-edge bg-amber/5 align-top">
                    <th scope="row" className="p-4 font-semibold text-ink">{s.naam} (deze pagina)</th>
                    <td className="p-4 text-dim">{s.bedrijf}</td>
                    <td className="p-4 text-dim">{bereik(s.min, s.max)} °dH</td>
                    <td className="p-4 text-dim">{klasseTekst}</td>
                  </tr>
                  {overigeSteden.map((o) => (
                    <tr key={o.slug} className="border-t border-edge align-top">
                      <th scope="row" className="p-4 font-semibold text-ink"><Link href={`/waterhardheid/${o.slug}`} className="underline hover:text-amber-dark">Waterhardheid {o.naam}</Link></th>
                      <td className="p-4 text-dim">{o.bedrijf}</td>
                      <td className="p-4 text-dim">{o.waarde}</td>
                      <td className="p-4 text-dim">{o.klasse}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-dim leading-relaxed">Een overzicht van heel Nederland, per drinkwaterbedrijf, staat op de pagina <Link href="/waterhardheid" className="underline hover:text-ink">waterhardheid per postcode</Link>.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over waterhardheid in {s.naam}</h2>
            </div>
            <div className="mt-10 space-y-3">
              {s.faq.map(([vraag, antwoord]) => (
                <details key={vraag} className="reveal group rounded-2xl card p-5">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-display font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber rounded">
                    {vraag}
                    <svg className="shrink-0 transition-transform group-open:rotate-45 text-amber-dark" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                  </summary>
                  <p className="mt-3 text-sm text-dim leading-relaxed">{antwoord}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* BRONNEN */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-10">
            <h2 className="font-display text-lg font-bold">Bronnen</h2>
            <ul className="mt-3 space-y-1 text-sm text-dim">
              {s.bronnen.map((b) => (
                <li key={b.url}><a href={b.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">{b.titel}</a></li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-dim">Alle cijfers komen van de drinkwaterbedrijven zelf. Per adres kan de waarde afwijken van wat hier staat.</p>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-20 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Drinkwater in {s.naam}</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zuiver drinkwater, uit je eigen kraan</h2>
            <p className="mt-4 text-white/70">Hardheid is maar één eigenschap van je water. Wil je ook PFAS, medicijnresten en microplastics uit je drinkwater halen? Dan kijken we graag met je mee.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/aanmelden" className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-xl shadow-amber/25">Vraag vrijblijvend een offerte aan</Link>
              <Link href="/osmosesysteem" className="cursor-pointer inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-7 py-4 text-sm font-bold text-white hover:bg-white/10 transition-colors">Bekijk het osmosesysteem</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

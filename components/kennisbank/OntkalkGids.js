import Image from 'next/image';
import Link from 'next/link';
import AuteurRegel from '@/components/AuteurRegel';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import ArticleSchema from '@/components/ArticleSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import FaqSchema from '@/components/FaqSchema';

const BASIS = 'https://www.water-zuivering.nl';

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
            <tr key={r[0]} className="border-t border-edge align-top">
              {r.map((c, i) => (i === 0
                ? <th key={i} scope="row" className="p-4 font-semibold text-ink"><Tekst tekst={c} /></th>
                : <td key={i} className="p-4 text-dim"><Tekst tekst={c} /></td>))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Gedeelde opmaak voor de ontkalk-gidsen. Elke gids levert zijn eigen inhoud aan; hier staat alleen de vorm.
export default function OntkalkGids({ g }) {
  const url = `${BASIS}/kennisbank/${g.slug}`;
  const afbeelding = g.afbeelding || '/assets/img/kennisbank/kalkaanslag-in-huis.png';
  return (
    <>
      <ArticleSchema
        datePublished={g.gepubliceerd}
        dateModified={g.gepubliceerd}
        headline={g.headline}
        description={g.description}
        image={`${BASIS}${afbeelding}`}
        url={url}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: `${BASIS}/` },
          { name: 'Kennisbank', url: `${BASIS}/kennisbank` },
          { name: g.headline, url },
        ]}
      />
      <FaqSchema items={g.faq} />
      <RevealObserver />
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Kennisbank</span>
            <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">{g.h1}</h1>
            <p className="mt-5 text-dim text-lg"><Tekst tekst={g.lead} /></p>
            <AuteurRegel bijgewerkt={g.bijgewerkt} />
          </div>
        </section>

        {/* IN HET KORT + AFBEELDING */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className={`max-w-6xl mx-auto px-6 py-14 md:py-20 ${g.afbeelding ? 'grid lg:grid-cols-2 gap-10 items-center' : ''}`}>
            <div className={g.afbeelding ? '' : 'max-w-3xl mx-auto'}>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">In het kort</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">{g.kortKop}</h2>
              <p className="mt-4 text-dim leading-relaxed"><Tekst tekst={g.kort} /></p>
              {g.nodig && (
                <>
                  <h3 className="mt-8 font-display text-lg font-bold text-ink">{g.nodig.kop}</h3>
                  <ul className="mt-3 space-y-2 text-dim leading-relaxed list-disc pl-5">
                    {g.nodig.items.map((i) => <li key={i}><Tekst tekst={i} /></li>)}
                  </ul>
                </>
              )}
            </div>
            {g.afbeelding && (
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src={g.afbeelding} alt={g.afbeeldingAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" priority />
              </div>
            )}
          </div>
        </section>

        {/* STAPPEN */}
        {g.stappen && (
          <section className="relative">
            <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
              <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">{g.stappen.kop}</h2>
              {g.stappen.intro && <p className="mt-4 text-dim leading-relaxed"><Tekst tekst={g.stappen.intro} /></p>}
              <ol className="mt-8 space-y-5">
                {g.stappen.items.map(([titel, uitleg], i) => (
                  <li key={titel} className="reveal rounded-2xl card p-6 flex gap-4">
                    <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-amber text-ink text-sm font-bold" aria-hidden="true">{i + 1}</span>
                    <div>
                      <p className="font-display font-bold text-ink">{titel}</p>
                      <p className="mt-1.5 text-sm text-dim leading-relaxed"><Tekst tekst={uitleg} /></p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {/* SECTIES */}
        {g.secties.map((s, i) => (
          <section key={s.kop} className={`relative ${i % 2 === 0 ? 'bg-surface border-y border-edge' : ''}`}>
            <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
              <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">{s.kop}</h2>
              {s.tekst?.map((t) => <p key={t} className="mt-4 text-dim leading-relaxed"><Tekst tekst={t} /></p>)}
              {s.tabel && <Tabel kolommen={s.tabel.kolommen} rijen={s.tabel.rijen} />}
              {s.lijst && (
                <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
                  {s.lijst.map((l) => <li key={l}><Tekst tekst={l} /></li>)}
                </ul>
              )}
              {s.na?.map((t) => <p key={t} className="mt-4 text-dim leading-relaxed"><Tekst tekst={t} /></p>)}
            </div>
          </section>
        ))}

        {/* LET OP */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
            <div className="rounded-2xl border-2 border-amber/60 bg-amber/10 p-6 md:p-8">
              <h2 className="font-display text-xl md:text-2xl font-extrabold tracking-tight">{g.letOp.kop}</h2>
              <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
                {g.letOp.items.map((l) => <li key={l}><Tekst tekst={l} /></li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* VOORKOMEN */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">{g.voorkomen.kop}</h2>
            {g.voorkomen.tekst.map((t) => <p key={t} className="mt-4 text-dim leading-relaxed"><Tekst tekst={t} /></p>)}
          </div>
        </section>

        {/* FAQ */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen</h2>
            </div>
            <div className="mt-10 space-y-3">
              {g.faq.map(([vraag, antwoord]) => (
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

        {/* GERELATEERD */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-16">
            <h2 className="font-display text-xl md:text-2xl font-extrabold tracking-tight">Meer over kalk en ontkalken</h2>
            <ul className="mt-6 grid sm:grid-cols-2 gap-4">
              {g.gerelateerd.map(([label, href, uitleg]) => (
                <li key={href} className="rounded-2xl card p-5">
                  <Link href={href} className="font-display font-bold text-ink underline decoration-amber decoration-2 underline-offset-2 hover:text-amber-dark">{label}</Link>
                  <p className="mt-1.5 text-sm text-dim leading-relaxed">{uitleg}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Minder kalk in je drinkwater</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zuiverder water uit je eigen kraan?</h2>
            <p className="mt-4 text-white/70">Een osmosesysteem onder het aanrecht haalt kalk, PFAS en medicijnresten uit het water dat je drinkt. Vraag vrijblijvend een offerte aan.</p>
            <Link href="/aanmelden" className="cursor-pointer mt-8 inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-xl shadow-amber/25">
              Vraag vrijblijvend een offerte aan
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

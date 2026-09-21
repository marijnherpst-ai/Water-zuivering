import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductAfbeelding from '@/components/winkel/ProductAfbeelding';
import RichText from '@/components/winkel/RichText';
import FaqSchema from '@/components/FaqSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import { PRODUCTEN, HUB, formatPrijs } from '@/lib/winkel/producten';

const SITE = 'https://www.water-zuivering.nl';

export const metadata = {
  title: `${HUB.metaTitle} — Water-zuivering`,
  description: HUB.metaDescription,
  alternates: { canonical: '/winkel' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: `${SITE}/` },
          { name: 'Winkel', url: `${SITE}/winkel` },
        ]}
      />
      <FaqSchema items={HUB.faq} />
      <Header />
      <main>
        <section className="relative overflow-hidden">
          <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Winkel</span>
            <h1 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.1]">{HUB.h1}</h1>
            <p className="mt-4 text-dim text-lg max-w-3xl leading-relaxed"><RichText text={HUB.intro[0]} /></p>
            <p className="mt-4 text-dim max-w-3xl leading-relaxed"><RichText text={HUB.intro[1]} /></p>
            <p className="mt-4 text-sm text-dim">Online afrekenen is nog niet beschikbaar: de winkel is in opbouw.</p>

            <h2 className="mt-12 font-display text-2xl font-extrabold tracking-tight">Alle osmose filters</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              {PRODUCTEN.map((p, i) => (
                <Link key={p.slug} href={`/winkel/${p.slug}`} className="group cursor-pointer rounded-3xl card p-6 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all">
                  <ProductAfbeelding src={p.afbeelding} alt={i === 0 ? `Osmose filter kopen: ${p.afbeeldingAlt}` : p.afbeeldingAlt} className="aspect-[4/5]" sizes="(min-width: 640px) 40vw, 90vw" />
                  <p className="mt-5 text-xs font-bold uppercase tracking-wide text-amber-dark">{p.ondertitel}</p>
                  <h3 className="mt-1 font-display text-xl font-extrabold tracking-tight">{p.naam}</h3>
                  <p className="mt-2 text-sm text-dim">{p.kort}</p>
                  <div className="mt-5 pt-5 border-t border-edge flex items-baseline justify-between">
                    <span className="font-display text-2xl font-extrabold">{p.prijs === null ? 'Prijs volgt' : formatPrijs(p.prijs)}</span>
                    <span className="text-sm text-dim">{p.vervanging}</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-14 rounded-3xl bg-surface border border-edge p-8">
              <h2 className="font-display text-2xl font-extrabold tracking-tight">Welk filter doet wat?</h2>
              <p className="mt-3 text-dim leading-relaxed">
                Je water gaat in je Water-zuivering osmosesysteem door meerdere filtertrappen. Elke trap heeft een eigen taak en een eigen levensduur, en het display op je apparaat laat zien wanneer een filter aan vervanging toe is.
              </p>
              <ol className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-amber text-ink text-xs font-bold">1</span>
                  <span className="text-dim text-sm leading-relaxed"><Link href="/winkel/ppc-filter" className="font-bold text-ink underline">PPC-filter (sedimentfilter)</Link> vangt zand, roest en grof vuil op en beschermt de rest van het systeem.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-amber text-ink text-xs font-bold">2</span>
                  <span className="text-dim text-sm leading-relaxed"><Link href="/winkel/ro-filter" className="font-bold text-ink underline">RO-filter (osmose membraan)</Link> is het hart van het systeem en haalt onder andere bacteriën, zware metalen en PFAS uit je water.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-amber text-ink text-xs font-bold">3</span>
                  <span className="text-dim text-sm leading-relaxed"><Link href="/winkel/cto-filter" className="font-bold text-ink underline">CTO-filter (actief koolstof filter)</Link> is het nafilter voor een frisse, heldere smaak. Kies je het <Link href="/winkel/cto-filter-met-mineralen" className="font-bold text-ink underline">CTO-filter met mineralen (mineraalfilter)</Link>, dan krijgt je water er ook mineralen bij voor een vollere smaak.</span>
                </li>
              </ol>
            </div>

            {HUB.secties.map((sectie) => (
              <div key={sectie.titel} className="mt-14 max-w-3xl">
                <h2 className="font-display text-2xl font-extrabold tracking-tight">{sectie.titel}</h2>
                {sectie.alineas.map((alinea) => (
                  <p key={alinea} className="mt-4 text-dim leading-relaxed">{alinea}</p>
                ))}
              </div>
            ))}

            <div className="mt-14 max-w-3xl">
              <h2 className="font-display text-2xl font-extrabold tracking-tight">Veelgestelde vragen over osmose filters</h2>
              <div className="mt-8 space-y-3">
                {HUB.faq.map(([vraag, antwoord]) => (
                  <details key={vraag} className="group rounded-2xl card p-5">
                    <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-display font-semibold">
                      {vraag}
                      <svg className="shrink-0 transition-transform group-open:rotate-45 text-amber-dark" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                    </summary>
                    <p className="mt-3 text-sm text-dim leading-relaxed">{antwoord}</p>
                  </details>
                ))}
              </div>
            </div>

            <p className="mt-12 text-dim leading-relaxed max-w-3xl">
              Meer weten over hoe je een waterfilter vervangt? Lees <Link href="/kennisbank/waterfilter-vervangen-hoe-vaak" className="underline hover:text-ink">hoe vaak je een waterfilter moet vervangen</Link>, bekijk de <Link href="/handleiding" className="underline hover:text-ink">handleiding</Link> of lees meer over het <Link href="/osmosesysteem" className="underline hover:text-ink">osmosesysteem</Link>.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/winkel/mandje" className="cursor-pointer inline-flex items-center rounded-full border-2 border-ink px-6 py-3 text-sm font-bold text-ink hover:bg-bg transition-colors">
                Bekijk winkelmand
              </Link>
              <Link href="/aanmelden" className="cursor-pointer text-sm underline text-dim hover:text-ink">
                Het complete systeem? Vraag een offerte aan
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

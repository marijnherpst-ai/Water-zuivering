import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductAfbeelding from '@/components/winkel/ProductAfbeelding';
import { PRODUCTEN, formatPrijs } from '@/lib/winkel/producten';

export const metadata = {
  title: 'Winkel — Water-zuivering',
  description: 'Vervangfilters voor je Water-zuivering osmosesysteem.',
  alternates: { canonical: '/winkel' },
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden">
          <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Winkel</span>
            <h1 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Filters voor je osmosesysteem</h1>
            <p className="mt-4 text-dim text-lg max-w-2xl">
              Vervangfilters voor je Water-zuivering osmosesysteem. Zo blijft je water zuiver en je systeem in topvorm. Bestellen is nog niet mogelijk: de winkel is in opbouw.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {PRODUCTEN.map((p) => (
                <Link key={p.slug} href={`/winkel/${p.slug}`} className="group cursor-pointer rounded-3xl card p-6 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all">
                  <ProductAfbeelding src={p.afbeelding} alt={p.afbeeldingAlt} className="aspect-[4/5]" sizes="(min-width: 640px) 40vw, 90vw" />
                  <p className="mt-5 text-xs font-bold uppercase tracking-wide text-amber-dark">{p.ondertitel}</p>
                  <h2 className="mt-1 font-display text-xl font-extrabold tracking-tight">{p.naam}</h2>
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
                  <span className="text-dim text-sm leading-relaxed"><strong className="text-ink">PPC-filter</strong> vangt zand, roest en grof vuil op en beschermt de rest van het systeem.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-amber text-ink text-xs font-bold">2</span>
                  <span className="text-dim text-sm leading-relaxed"><strong className="text-ink">RO-filter</strong> is het hart van het systeem en haalt onder andere bacteriën, zware metalen en PFAS uit je water.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-amber text-ink text-xs font-bold">3</span>
                  <span className="text-dim text-sm leading-relaxed"><strong className="text-ink">CTO-filter</strong> is het nafilter voor een frisse, heldere smaak. Kies je het <strong className="text-ink">CTO-filter met mineralen</strong>, dan krijgt je water er ook mineralen bij voor een vollere smaak.</span>
                </li>
              </ol>
              <p className="mt-6 text-sm text-dim">
                Twijfel je welk filter je nodig hebt? Bekijk de <Link href="/handleiding" className="underline hover:text-ink">handleiding</Link> of neem <Link href="/contact" className="underline hover:text-ink">contact</Link> met ons op.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
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

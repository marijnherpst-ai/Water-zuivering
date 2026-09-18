import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import FaqSchema from '@/components/FaqSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  alternates: { canonical: '/osmose-waterfilter' },
  title: 'Osmose waterfilter voor thuis — Water-zuivering',
  description: 'Een osmose waterfilter verwijdert tot 99% van chloor, PFAS, medicijnresten en microplastics uit je kraanwater. Ontdek ons compacte systeem.',
};

const KENMERKEN = [
  ['0,0001 micron membraan', 'Fijner dan elk ander filtertype op de markt — vrijwel niets komt er nog doorheen behalve watermoleculen zelf.'],
  ['Drie filtertrappen', 'Voorfilter, RO-membraan en nafilter werken samen voor een compleet, gelaagd resultaat.'],
  ['10,5 cm breed', 'Past staand of liggend in vrijwel elk keukenkastje, volledig uit het zicht.'],
  ['10 jaar garantie', 'Gebouwd om jarenlang mee te gaan, met vakkundige installatie inbegrepen.'],
];

const FAQ = [
  ['Wat is een osmose waterfilter precies?', 'Een filtersysteem dat water onder lichte druk door een membraan van 0,0001 micron perst — dit verwijdert bacteriën, zware metalen, PFAS, medicijnresten en microplastics.'],
  ['Is een osmose waterfilter hetzelfde als een osmosesysteem?', 'Ja, dit zijn twee namen voor dezelfde technologie: omgekeerde osmose, ook wel RO (reverse osmosis) genoemd.'],
  ['Wat kost een osmose waterfilter?', 'De prijs hangt af van het gekozen systeem en de installatie. Vraag een vrijblijvende offerte aan voor een prijs op maat.'],
  ['Hoeveel onderhoud vraagt een osmose waterfilter?', 'De voor- en nafilters gaan 6 tot 12 maanden mee, het membraan zelf 2 tot 3 jaar, afhankelijk van gebruik en waterkwaliteit.'],
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Osmose waterfilter', url: 'https://www.water-zuivering.nl/osmose-waterfilter' },
        ]}
      />
      <FaqSchema items={FAQ} />
      <RevealObserver />
      <Header />

      <main>
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="glow drift2 w-[360px] h-[360px] bg-amber/10 top-10 -right-24" />
          <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Osmose waterfilter</span>
              <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">Een osmose waterfilter voor écht zuiver kraanwater</h1>
              <p className="mt-5 text-dim text-lg">
                Onze <strong className="text-ink">osmose waterfilter</strong> verwijdert tot 99% van chloor, PFAS, medicijnresten en microplastics — compact geïnstalleerd onder je eigen aanrecht.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/aanmelden" className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-lg shadow-amber/25">
                  Vraag vrijblijvend een offerte aan
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
                <Link href="/uitleg" className="cursor-pointer inline-flex items-center gap-2 rounded-full border-2 border-ink px-7 py-3.5 text-sm font-bold text-ink hover:bg-bg transition-colors">
                  Bekijk specificaties
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-[2rem] overflow-hidden border border-edge aspect-square bg-white">
                <Image src="/assets/img/product-cutout.png" alt="Osmose waterfilter voor onder de gootsteen, doorsnede" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-contain p-8" priority />
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-center">Wat maakt dit systeem tot een osmose waterfilter?</h2>
            <p className="mt-3 text-dim text-center max-w-xl mx-auto">Onder de motorkap draait alles om het membraan — de rest van het systeem ondersteunt dat proces.</p>
            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {KENMERKEN.map(([titel, uitleg]) => (
                <div key={titel} className="reveal rounded-2xl card p-6 flex gap-4">
                  <span className="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-amber/15 text-amber-dark">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  <div>
                    <p className="font-display font-bold text-ink">{titel}</p>
                    <p className="mt-1.5 text-sm text-dim leading-relaxed">{uitleg}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
              <Image src="/assets/img/systeem-slim-105mm.png" alt="Osmose waterfilter, slechts 10,5 cm breed, geïnstalleerd onder het aanrecht" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain p-6 bg-white" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Waarom een osmose waterfilter</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Grondiger dan elk ander filtertype</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Een waterfilterkan of kraanfilter houdt vooral chloor en grof vuil tegen. Een osmose waterfilter filtert een orde van grootte fijner: het membraan van 0,0001 micron laat vrijwel alleen watermoleculen door. Benieuwd naar het verschil? Lees onze <Link href="/kennisbank/beste-waterfilter-voor-thuis" className="underline hover:text-ink">vergelijking van de beste waterfilter voor thuis</Link>.
              </p>
              <p className="mt-4 text-dim leading-relaxed">
                Meer weten over hoe het membraan precies werkt? Bekijk <Link href="/kennisbank/omgekeerde-osmose-filter" className="underline hover:text-ink">onze uitleg over het omgekeerde-osmose-membraan</Link>.
              </p>
            </div>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen</h2>
            </div>
            <div className="mt-10 space-y-3">
              {FAQ.map(([vraag, antwoord]) => (
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

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Klaar voor zuiver water uit je eigen kraan?</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan — we kijken graag met je mee naar wat past bij jouw keuken.</p>
            <Link href="/aanmelden" className="cursor-pointer mt-8 inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-xl shadow-amber/25">
              Vraag vrijblijvend een offerte aan
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import ArticleSchema from '@/components/ArticleSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import FaqSchema from '@/components/FaqSchema';

export const metadata = {
  alternates: { canonical: '/kennisbank/waterontharder-aansluiten' },
  title: 'Waterontharder aansluiten: hoe gaat dat? — Water-zuivering',
  description: 'Een waterontharder aansluiten vraagt een aftakking op de hoofdleiding en een afvoer. Stap voor stap wat erbij komt kijken.',
};

const STAPPEN = [
  ['Plek bepalen', 'Meestal direct na de watermeter, zodat al het water in huis onthard wordt.'],
  ['Aftakking maken', 'De hoofdleiding wordt doorgezaagd en het ontharder-vat wordt ertussen aangesloten.'],
  ['Afvoer aansluiten', 'Voor het regeneratieproces is een afvoeraansluiting nodig, meestal via een sifon of rioolaansluiting in de buurt.'],
  ['Instellen en testen', 'De waterhardheid en het regeneratieschema worden ingesteld op basis van jullie waterverbruik.'],
];

const FAQ = [
  ['Kan ik een waterontharder zelf aansluiten?', 'Technisch kan het, maar een verkeerde aansluiting kan lekkage of een onjuiste werking veroorzaken — een vakkundige installatie is aan te raden.'],
  ['Heb ik altijd een afvoer nodig om een waterontharder aan te sluiten?', 'Voor een klassieke ionenwisselaar-ontharder wel, vanwege het periodieke doorspoelen tijdens regeneratie.'],
  ['Hoe lang duurt het aansluiten van een waterontharder?', 'Bij een professionele installatie meestal een dagdeel, afhankelijk van de complexiteit van je leidingwerk.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Waterontharder aansluiten: hoe gaat dat?"
        description="Een waterontharder aansluiten vraagt een aftakking op de hoofdleiding en een afvoer. Stap voor stap wat erbij komt kijken."
        image="https://www.water-zuivering.nl/assets/img/cabinet-install.png"
        url="https://www.water-zuivering.nl/kennisbank/waterontharder-aansluiten"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Waterontharder aansluiten: hoe gaat dat?', url: 'https://www.water-zuivering.nl/kennisbank/waterontharder-aansluiten' },
        ]}
      />
      <FaqSchema items={FAQ} />
      <RevealObserver />
      <Header />

      <main>
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Kennisbank</span>
            <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">Waterontharder aansluiten: hoe gaat dat?</h1>
            <p className="mt-5 text-dim text-lg">Een <strong className="text-ink">waterontharder aansluiten</strong> komt neer op vier hoofdstappen — van aftakking tot instellen.</p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
              <Image src="/assets/img/cabinet-install.png" alt="Installatie van een waterontharder onder een kastje" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">De vier stappen</h2>
              <ol className="mt-5 space-y-4">
                {STAPPEN.map(([titel, uitleg], i) => (
                  <li key={titel} className="flex items-start gap-3">
                    <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-amber text-ink text-sm font-bold">{i + 1}</span>
                    <span className="text-dim"><strong className="text-ink">{titel}.</strong> {uitleg}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Goed om te weten</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Een ontharder pakt kalk aan, maar niet chloor, PFAS, medicijnresten of microplastics — daarvoor is een apart filtersysteem nodig. Sommige huishoudens combineren beide: eerst een ontharder tegen kalk, daarna een osmosesysteem voor écht zuiver drinkwater. Lees meer over hoe zo'n systeem werkt op onze <Link href="/osmosesysteem" className="underline hover:text-ink">osmosesysteem-pagina</Link>.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
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
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Ook je drinkwater laten zuiveren?</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan — we regelen de installatie meestal binnen één dag.</p>
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

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import ArticleSchema from '@/components/ArticleSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import FaqSchema from '@/components/FaqSchema';

export const metadata = {
  alternates: { canonical: '/kennisbank/wat-is-ro-water' },
  title: 'Wat is RO-water en hoe werkt het? — Water-zuivering',
  description: 'RO-water (reverse osmosis water) is water dat door een omgekeerde-osmose-membraan is gefilterd. Uitleg over hoe het werkt en wat het uit je water haalt.',
};

const STAPPEN = [
  ['Voorfiltratie', 'Grof vuil, zand en roestdeeltjes worden eerst weggevangen, zodat het RO-membraan niet snel verstopt raakt.'],
  ['Het RO-membraan', 'Onder lichte druk perst het systeem water door een membraan met poriën van 0,0001 micron — bacteriën, zware metalen en PFAS blijven achter.'],
  ['Nafiltratie', 'Een laatste koolstoffilter haalt de allerlaatste smaakjes en geurtjes weg, voor helder, fris RO-water.'],
];

const TOEPASSINGEN = [
  ['Drinkwater', 'De meest voorkomende toepassing thuis: zuiver water rechtstreeks uit de kraan, zonder chloor, PFAS of microplastics.'],
  ['Koken en koffie/thee zetten', 'Zonder chloorsmaak en met minder kalk proef je merkbaar verschil, ook in gerechten die je kookt.'],
  ['Aquaria', 'Aquariumhouders gebruiken RO-water vaak om volledige controle te hebben over de waterwaarden, zonder verstorende stoffen uit kraanwater.'],
  ['Strijkijzers en stoomapparaten', 'Kalkvrij water voorkomt kalkaanslag in het apparaat, wat de levensduur verlengt.'],
];

const FAQ = [
  ['Wat betekent RO in RO-water?', 'RO staat voor "Reverse Osmosis", oftewel omgekeerde osmose — de techniek waarbij water onder druk door een extreem fijn membraan wordt geperst.'],
  ['Is RO-water hetzelfde als osmosewater?', 'Ja, dit zijn twee namen voor hetzelfde proces en resultaat — RO-water is de Engelse term, osmosewater de Nederlandse.'],
  ['Is RO-water veilig om te drinken?', 'Ja. RO-water is juist extra gefilterd en verwijdert stoffen die in gewoon kraanwater nog kunnen voorkomen, zoals PFAS en medicijnresten.'],
  ['Haalt RO-water ook nuttige mineralen weg?', 'Een RO-membraan filtert zeer fijn en houdt ook een deel van de mineralen tegen. Dat is normaal gesproken geen probleem, omdat de meeste mineralen via voeding binnenkomen.'],
  ['Is RO-water hetzelfde als gedistilleerd water?', 'Niet helemaal. Beide zijn zeer zuiver, maar gedistilleerd water wordt gemaakt door verdamping en condensatie, terwijl RO-water door een membraan wordt geperst — RO is energiezuiniger en sneller voor huishoudelijk gebruik.'],
  ['Ontstaat er afvalwater bij het maken van RO-water?', 'Ja, een deel van het water dat door het membraan gaat, spoelt de opgevangen stoffen weg. Moderne systemen zijn hier steeds zuiniger in dan oudere generaties.'],
  ['Kan ik RO-water gebruiken voor planten?', 'Ja, veel kamerplanten doen het goed met RO-water, al hebben sommige planten juist baat bij de mineralen in gewoon kraanwater — dat verschilt per plantensoort.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Wat is RO-water en hoe werkt het?"
        description="RO-water (reverse osmosis water) is water dat door een omgekeerde-osmose-membraan is gefilterd. Uitleg over hoe het werkt en wat het uit je water haalt."
        image="https://www.water-zuivering.nl/assets/img/filters-closeup.png"
        url="https://www.water-zuivering.nl/kennisbank/wat-is-ro-water"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Wat is RO-water en hoe werkt het?', url: 'https://www.water-zuivering.nl/kennisbank/wat-is-ro-water' },
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
            <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">Wat is RO-water en hoe werkt het?</h1>
            <p className="mt-5 text-dim text-lg"><strong className="text-ink">RO-water</strong> — kort voor "reverse osmosis water" — is water dat is gezuiverd via omgekeerde osmose. We leggen uit wat dat precies inhoudt.</p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
              <Image src="/assets/img/filters-closeup.png" alt="RO-membraan en filtertrappen van een reverse osmosis systeem" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Drie stappen naar RO-water</h2>
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
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waarom zou je RO-water willen?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Nederlands kraanwater voldoet aan strenge normen, maar een RO-systeem gaat een stap verder: het membraan is fijn genoeg om ook sporen van PFAS, medicijnresten en microplastics tegen te houden — stoffen die niet standaard uit drinkwater worden gefilterd. Het resultaat is water dat merkbaar zuiverder smaakt, zonder chloorlucht of bijsmaak.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Thuis komt RO-water uit een compact systeem onder je aanrecht, direct via je eigen kraan — geen aparte machine of wachttijd. Benieuwd hoe dat er in de praktijk uitziet? Bekijk onze <Link href="/osmosesysteem" className="underline hover:text-ink">osmosesysteem-pagina</Link> of lees meer over <Link href="/kennisbank/omgekeerde-osmose-filter" className="underline hover:text-ink">hoe het membraan precies werkt</Link>.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waar wordt RO-water nog meer voor gebruikt?</h2>
            <p className="mt-4 text-dim leading-relaxed">Drinkwater is de meest voorkomende toepassing, maar niet de enige. Een paar voorbeelden:</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {TOEPASSINGEN.map(([titel, uitleg]) => (
                <div key={titel} className="reveal rounded-2xl card p-5">
                  <p className="font-display font-bold text-ink text-sm">{titel}</p>
                  <p className="mt-1.5 text-sm text-dim leading-relaxed">{uitleg}</p>
                </div>
              ))}
            </div>
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
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zelf RO-water uit je kraan?</h2>
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

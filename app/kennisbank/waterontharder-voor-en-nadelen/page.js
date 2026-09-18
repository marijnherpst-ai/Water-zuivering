import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import ArticleSchema from '@/components/ArticleSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import FaqSchema from '@/components/FaqSchema';

export const metadata = {
  alternates: { canonical: '/kennisbank/waterontharder-voor-en-nadelen' },
  title: 'Waterontharder: voor- en nadelen op een rij — Water-zuivering',
  description: 'Een waterontharder heeft duidelijke voordelen tegen kalkaanslag, maar ook nadelen zoals zoutverbruik en onderhoud. Alle voor- en nadelen op een rij.',
};

const VOORDELEN = [
  'Minder kalkaanslag op kranen, douches en in leidingen',
  'Apparaten zoals de wasmachine en boiler gaan langer mee',
  'Zachtere was, minder wasmiddel nodig',
  'Prettiger gevoel op huid en haar tijdens het douchen',
];

const NADELEN = [
  'Doorlopende kosten voor onthardingszout',
  'Regelmatig bijvullen en onderhoud',
  'Vermindert géén chloor, PFAS, medicijnresten of microplastics — daarvoor is een ander type filter nodig',
  'Vraagt ruimte en een wateraansluiting met afvoer',
];

const FAQ = [
  ['Wat is het belangrijkste nadeel van een waterontharder?', 'Een waterontharder lost alleen kalk op — het heeft geen effect op chloor, PFAS, medicijnresten of microplastics in je drinkwater.'],
  ['Is een waterontharder de moeite waard ondanks de nadelen?', 'In gebieden met hard water wegen de voordelen (minder kalkaanslag, langere levensduur van apparaten) voor veel huishoudens op tegen het onderhoud en de zoutkosten.'],
  ['Kan ik een waterontharder combineren met een waterzuiveraar?', 'Ja, dat gebeurt vaak. De ontharder pakt de kalk aan, terwijl een osmosesysteem daarna nog PFAS, medicijnresten en microplastics uit je drinkwater filtert.'],
  ['Heeft een waterontharder ook voordelen voor de gezondheid?', 'Direct niet — het effect zit vooral in comfort (huid, haar, wasgoed) en het voorkomen van kalkschade aan apparatuur, niet in drinkwaterkwaliteit.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Waterontharder: voor- en nadelen op een rij"
        description="Een waterontharder heeft duidelijke voordelen tegen kalkaanslag, maar ook nadelen zoals zoutverbruik en onderhoud. Alle voor- en nadelen op een rij."
        image="https://www.water-zuivering.nl/assets/img/kennisbank/waterontharder-vs-waterzuiveraar.png"
        url="https://www.water-zuivering.nl/kennisbank/waterontharder-voor-en-nadelen"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Waterontharder: voor- en nadelen op een rij', url: 'https://www.water-zuivering.nl/kennisbank/waterontharder-voor-en-nadelen' },
        ]}
      />
      <FaqSchema items={FAQ} />
      <RevealObserver />
      <Header />

      <main>
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Kennisbank — Vergelijking</span>
            <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">Waterontharder: voor- en nadelen op een rij</h1>
            <p className="mt-5 text-dim text-lg">Een <strong className="text-ink">waterontharder</strong> lost een specifiek probleem op — kalk — maar het is goed om ook de nadelen te kennen voor je een keuze maakt.</p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
              <Image src="/assets/img/kennisbank/waterontharder-vs-waterzuiveraar.png" alt="Vergelijking van een waterontharder met de voor- en nadelen op een rij" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Voordelen</h2>
              <ul className="mt-4 space-y-2">
                {VOORDELEN.map((v) => (
                  <li key={v} className="flex items-start gap-2.5 text-dim">
                    <svg className="shrink-0 mt-1" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Nadelen</h2>
            <ul className="mt-4 space-y-2 max-w-2xl">
              {NADELEN.map((n) => (
                <li key={n} className="flex items-start gap-2.5 text-dim">
                  <svg className="shrink-0 mt-1" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="#5B6472" strokeWidth="2" strokeLinecap="round" /></svg>
                  {n}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-dim leading-relaxed">
              Het belangrijkste om te onthouden: een waterontharder en een waterzuiveraar lossen verschillende problemen op. Wil je ook van chloor, PFAS, medicijnresten en microplastics af, dan heb je naast (of in plaats van) een ontharder een filtersysteem nodig. Lees het volledige verschil in ons artikel <Link href="/kennisbank/waterontharder-vs-waterzuiveraar" className="underline hover:text-ink">waterontharder of waterzuiveraar</Link>.
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
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Ook je drinkwater zelf zuiveren?</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan voor een waterzuiveraar die chloor, PFAS en microplastics filtert.</p>
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

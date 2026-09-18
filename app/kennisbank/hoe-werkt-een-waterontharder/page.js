import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import ArticleSchema from '@/components/ArticleSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import FaqSchema from '@/components/FaqSchema';

export const metadata = {
  alternates: { canonical: '/kennisbank/hoe-werkt-een-waterontharder' },
  title: 'Hoe werkt een waterontharder? — Water-zuivering',
  description: 'Een waterontharder ruilt harde mineralen in voor natrium via ionenwisseling. Stap voor stap uitgelegd hoe dat proces precies werkt.',
};

const STAPPEN = [
  ['Water stroomt door harskorrels', 'De harskorrels in het ontharder-vat zijn beladen met natriumionen.'],
  ['Ionenwisseling', 'Calcium- en magnesiumionen (de veroorzakers van kalk) worden ingeruild voor natriumionen — het water komt zachter naar buiten.'],
  ['Regeneratie', 'Zodra de harskorrels "vol" zitten, spoelt het systeem zichzelf door met een zoutoplossing, zodat het weer klaar is voor de volgende cyclus.'],
];

const FAQ = [
  ['Hoe vaak regenereert een waterontharder?', 'Dat hangt af van je waterverbruik en de hardheid van het water, meestal elke paar dagen, automatisch en meestal in de nacht.'],
  ['Maakt een waterontharder het water zout?', 'Nee, de hoeveelheid natrium die aan het water wordt toegevoegd is minimaal en niet merkbaar in smaak.'],
  ['Is onthard water veilig om te drinken?', 'Ja, al geven sommige mensen de voorkeur aan een aparte onthardingsloze kraan voor drink- en kookwater vanwege de lichte natriumtoename.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Hoe werkt een waterontharder?"
        description="Een waterontharder ruilt harde mineralen in voor natrium via ionenwisseling. Stap voor stap uitgelegd hoe dat proces precies werkt."
        image="https://www.water-zuivering.nl/assets/img/kennisbank/kalkaanslag-in-huis.png"
        url="https://www.water-zuivering.nl/kennisbank/hoe-werkt-een-waterontharder"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Hoe werkt een waterontharder?', url: 'https://www.water-zuivering.nl/kennisbank/hoe-werkt-een-waterontharder' },
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
            <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">Hoe werkt een waterontharder?</h1>
            <p className="mt-5 text-dim text-lg">Onder de motorkap draait het allemaal om één proces: ionenwisseling. We leggen het stap voor stap uit.</p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
              <Image src="/assets/img/kennisbank/kalkaanslag-in-huis.png" alt="Kalkaanslag die een waterontharder voorkomt door ionenwisseling" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Het proces in drie stappen</h2>
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
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat een waterontharder niet doet</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Een waterontharder verandert alleen de hardheid van het water — kalk wordt vervangen door natrium. Chloor, PFAS, medicijnresten en microplastics blijven gewoon in het water zitten; daar heeft ionenwisseling geen effect op. Wil je je drinkwater écht zuiveren, dan is dat een aparte stap.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Meer weten over de voor- en nadelen? Lees ons artikel <Link href="/kennisbank/waterontharder-voor-en-nadelen" className="underline hover:text-ink">waterontharder: voor- en nadelen op een rij</Link>.
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
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wil je ook zuiver drinkwater?</h2>
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

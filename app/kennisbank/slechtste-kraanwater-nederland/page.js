import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import ArticleSchema from '@/components/ArticleSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import FaqSchema from '@/components/FaqSchema';

export const metadata = {
  alternates: { canonical: '/kennisbank/slechtste-kraanwater-nederland' },
  title: 'Is er "slechtste kraanwater" in Nederland? De feiten — Water-zuivering',
  description: 'Verschillen regio-kraanwater in Nederland echt zo sterk in kwaliteit? We zetten de feiten op een rij, los van broodje-aap-verhalen.',
};

const FAQ = [
  ['Is er een regio met echt slecht kraanwater in Nederland?', 'Nee, alle Nederlandse drinkwaterbedrijven moeten voldoen aan dezelfde wettelijke normen — er is geen regio waar kraanwater structureel onveilig zou zijn.'],
  ['Waarom smaakt kraanwater dan per regio anders?', 'Smaakverschillen ontstaan vooral door de waterbron (grondwater vs. oppervlaktewater) en de hoeveelheid mineralen, niet door een verschil in veiligheid.'],
  ['Komen incidenten met kraanwater vaak voor?', 'Incidenteel gebeurt er iets (zoals een lokale storing of kookwateradvies), maar dat wordt snel gecommuniceerd en verholpen — het is geen teken van structureel slechte kwaliteit.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Is er 'slechtste kraanwater' in Nederland? De feiten"
        description="Verschillen regio-kraanwater in Nederland echt zo sterk in kwaliteit? We zetten de feiten op een rij, los van broodje-aap-verhalen."
        image="https://www.water-zuivering.nl/assets/img/een-kraan.jpg"
        url="https://www.water-zuivering.nl/kennisbank/slechtste-kraanwater-nederland"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Is er "slechtste kraanwater" in Nederland? De feiten', url: 'https://www.water-zuivering.nl/kennisbank/slechtste-kraanwater-nederland' },
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
            <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">Is er "slechtste kraanwater" in Nederland?</h1>
            <p className="mt-5 text-dim text-lg">Er circuleren regelmatig verhalen over regio's met zogenaamd "slecht" kraanwater. Klopt dat, of is het een fabeltje?</p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
              <Image src="/assets/img/een-kraan.jpg" alt="Kraanwater uit een gewone Nederlandse keukenkraan" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waarom het verschil niet in veiligheid zit</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Elk Nederlands drinkwaterbedrijf is wettelijk verplicht om aan dezelfde landelijke normen te voldoen. Er bestaat dus geen regio waar het kraanwater structureel onveilig is — wél verschillen in smaak en hardheid, afhankelijk van de bron (grondwater of oppervlaktewater) en het mineraalgehalte.
              </p>
              <p className="mt-4 text-dim leading-relaxed">
                Verhalen over "het slechtste kraanwater van Nederland" gaan meestal over smaak of kalkgehalte, niet over veiligheid.
              </p>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat als je toch verschil proeft?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Als je merkt dat kraanwater in jouw regio een sterke smaak of geur heeft, is dat vaak op te lossen zonder dat er iets mis is met de veiligheid ervan. Een filter dat chloor en organische sporenstoffen weghaalt, verbetert de smaak merkbaar — ongeacht in welke regio je woont.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Twijfel je over de kwaliteit in jouw huis specifiek? Check eerst of er iets aan de hand is via onze <Link href="/storingen" className="underline hover:text-ink">storingen-check</Link>, of lees meer over <Link href="/kennisbank/is-kraanwater-veilig" className="underline hover:text-ink">of Nederlands kraanwater veilig is</Link>.
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
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Liever gewoon zeker weten dat het zuiver is?</h2>
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

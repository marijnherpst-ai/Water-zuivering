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
  title: 'Slechtste kraanwater Nederland? De feiten — Water-zuivering',
  description: 'Bestaat het slechtste kraanwater van Nederland echt, of is het een broodje-aap-verhaal? We zetten de feiten op een rij.',
};

const OORZAKEN = [
  ['Waterbron', 'Grondwater smaakt doorgaans anders (vaak zachter) dan oppervlaktewater, dat uit rivieren wordt gewonnen en intensiever behandeld moet worden.'],
  ['Mineraalgehalte', 'Hoe meer opgeloste mineralen, hoe "voller" het water smaakt — dit is een regionaal bodemkenmerk, geen kwaliteitsverschil.'],
  ['Leidingnet', 'Oudere leidingen kunnen invloed hebben op smaak of kleur (zoals tijdelijk wat troebel water na werkzaamheden), zonder dat dit een veiligheidsrisico is.'],
  ['Lokale meldingen', 'Een incidentele storing of kookwateradvies kan tijdelijk voor onrust zorgen, maar zegt niets over de structurele kwaliteit van een regio.'],
];

const MYTHES = [
  ['"Grote steden hebben slechter water"', 'Onterecht — stedelijk water wordt net zo streng getest als landelijk water. Verschillen in smaak komen door de bron, niet door de locatie op zich.'],
  ['"Ouder huis betekent slechter kraanwater"', 'Gedeeltelijk waar voor de laatste meters: oude binnenleidingen (bijv. lood in zeer oude woningen) kunnen lokaal invloed hebben, ook al is het water bij binnenkomst schoon.'],
  ['"Kustregio\'s hebben zouter water"', 'Niet direct — drinkwaterbedrijven zuiveren en ontzilten waar nodig voor het bij de kraan komt, ongeacht de regio.'],
];

const FAQ = [
  ['Is er een regio met echt slecht kraanwater in Nederland?', 'Nee, alle Nederlandse drinkwaterbedrijven moeten voldoen aan dezelfde wettelijke normen — er is geen regio waar kraanwater structureel onveilig zou zijn.'],
  ['Waarom smaakt kraanwater dan per regio anders?', 'Smaakverschillen ontstaan vooral door de waterbron (grondwater vs. oppervlaktewater) en de hoeveelheid mineralen, niet door een verschil in veiligheid.'],
  ['Komen incidenten met kraanwater vaak voor?', 'Incidenteel gebeurt er iets (zoals een lokale storing of kookwateradvies), maar dat wordt snel gecommuniceerd en verholpen — het is geen teken van structureel slechte kwaliteit.'],
  ['Hoe kom ik erachter waarom mijn kraanwater een bepaalde smaak heeft?', 'Je eigen waterbedrijf publiceert meestal informatie over de bron en samenstelling van het water in jouw regio — vaak terug te vinden op hun website.'],
  ['Is troebel water na werkzaamheden gevaarlijk?', 'Meestal niet — het komt vaak door lucht of ijzerdeeltjes die loskomen tijdens reparaties. Laat de kraan even doorlopen; als het niet wegtrekt, neem dan contact op met je waterbedrijf.'],
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
            <p className="mt-5 text-dim text-lg">Er circuleren regelmatig verhalen over het <strong className="text-ink">slechtste kraanwater van Nederland</strong> — welke regio's dat zouden zijn, en waarom. Klopt dat, of is het een fabeltje?</p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
              <Image src="/assets/img/een-kraan.jpg" alt="Zogenaamd slechtste kraanwater van Nederland: gewoon kraanwater uit een Nederlandse keukenkraan" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
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

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waar komen de verschillen dan wél vandaan?</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {OORZAKEN.map(([titel, uitleg]) => (
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
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Drie hardnekkige mythes over slecht kraanwater</h2>
            <div className="mt-6 space-y-4">
              {MYTHES.map(([titel, uitleg]) => (
                <div key={titel} className="reveal flex items-start gap-3">
                  <svg className="shrink-0 mt-1" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="#5B6472" strokeWidth="2" strokeLinecap="round" /></svg>
                  <div>
                    <p className="font-semibold text-ink text-sm">{titel}</p>
                    <p className="mt-1 text-sm text-dim leading-relaxed">{uitleg}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
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

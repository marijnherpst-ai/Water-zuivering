import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import FaqSchema from '@/components/FaqSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  alternates: { canonical: '/waterzuiveraar-drinkwater' },
  title: 'Waterzuiveraar drinkwater — Water-zuivering',
  description: 'Waterzuiveraar drinkwater: verwijdert PFAS, medicijnresten en microplastics uit je kraanwater. Extra zekerheid voor het water dat je gezin drinkt.',
};

const STOFFEN = [
  ['PFAS', 'Sporen van deze "forever chemicals" worden niet overal even streng gecontroleerd — een drinkwaterzuiveraar filtert ze alsnog uit je glas.'],
  ['Medicijnresten', 'Nauwelijks gereguleerd in de huidige drinkwaternormen, maar wel meetbaar aanwezig in een deel van het Nederlandse kraanwater.'],
  ['Microplastics', 'Steeds vaker onderwerp van onderzoek — een fijn membraan houdt ze grotendeels tegen, voordat ze in je glas belanden.'],
  ['Chloor en kalk', 'Niet gevaarlijk, maar wel merkbaar in smaak en op je kranen — de eerste dingen die de meeste mensen kwijt willen.'],
];

const VOOR_WIE = [
  ['Gezinnen met jonge kinderen', 'Voor het bereiden van flesvoeding of gewoon een extra gerust gevoel bij wat je kind drinkt, is grondige filtratie voor veel ouders geen overbodige luxe.'],
  ['Mensen die zwanger zijn of proberen te worden', 'In deze periode kijken veel mensen extra kritisch naar wat er in eten en drinken zit — kraanwater is daarin niet altijd de eerste plek waar je aan denkt, maar wel een plek waar je grip op hebt.'],
  ['Wie gevoelig is voor smaak en geur', 'Chloorlucht of een vage bijsmaak is voor sommigen nauwelijks op te merken, voor anderen storend genoeg om structureel over te stappen op flessenwater — tot ze een waterzuiveraar proberen.'],
];

const FAQ = [
  ['Wat doet een waterzuiveraar voor drinkwater precies?', 'Een waterzuiveraar filtert je kraanwater via meerdere stappen, waaronder een fijn omgekeerde-osmose-membraan, zodat sporen van PFAS, medicijnresten, microplastics en chloor worden verwijderd voordat het water je glas bereikt.'],
  ['Is Nederlands kraanwater niet al veilig genoeg?', 'Ja, Nederlands kraanwater voldoet aan strenge wettelijke normen en is veilig om te drinken. Een waterzuiveraar drinkwater gaat een stap verder, voor stoffen die nog niet standaard gereguleerd of verwijderd worden.'],
  ['Is water uit een waterzuiveraar veilig voor baby\'s?', 'Water dat via osmose is gezuiverd, wordt vaak juist aanbevolen voor het bereiden van flesvoeding, omdat het vrij is van sporen van stoffen die reguliere zuivering niet volledig wegneemt. Overleg bij twijfel altijd met je consultatiebureau of huisarts.'],
  ['Verandert een drinkwaterzuiveraar de smaak van koffie of thee?', 'Ja, meestal juist ten goede — zonder chloorsmaak en met minder kalk komt de eigen smaak van koffie, thee of eten beter naar voren.'],
  ['Hoeveel onderhoud heeft een waterzuiveraar voor drinkwater?', 'Het voorfilter en het nafilter vervang je gemiddeld elk jaar, het membraan elke 2 jaar. Het display laat zien wanneer het tijd is.'],
  ['Wat kost een waterzuiveraar voor drinkwater?', 'De prijs hangt af van het gekozen systeem en de installatie. Vraag een vrijblijvende offerte aan voor een prijs op maat van jouw huishouden.'],
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Waterzuiveraar drinkwater', url: 'https://www.water-zuivering.nl/waterzuiveraar-drinkwater' },
        ]}
      />
      <FaqSchema items={FAQ} />
      <RevealObserver />
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="glow drift2 w-[360px] h-[360px] bg-amber/10 top-10 -right-24" />
          <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Waterzuiveraar drinkwater</span>
              <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
                Waterzuiveraar drinkwater: wat er niet in je glas hoort, haal je eruit
              </h1>
              <p className="mt-5 text-dim text-lg">
                Nederlands kraanwater is veilig, maar niet vrij van alles. Een <strong className="text-ink">waterzuiveraar drinkwater</strong> filtert sporen van PFAS, medicijnresten en microplastics — stoffen die reguliere zuivering nog niet volledig wegneemt.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/aanmelden" className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-lg shadow-amber/25">
                  Vraag vrijblijvend een offerte aan
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
                <Link href="/kennisbank/pfas-in-kraanwater" className="cursor-pointer inline-flex items-center gap-2 rounded-full border-2 border-ink px-7 py-3.5 text-sm font-bold text-ink hover:bg-bg transition-colors">
                  Lees over PFAS
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-[2rem] overflow-hidden border border-edge aspect-[4/5]">
                <Image src="/assets/img/hero-vrouw-water.webp" alt="Waterzuiveraar drinkwater: veilig kraanwater om te drinken voor het hele gezin" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" priority />
              </div>
            </div>
          </div>
        </section>

        {/* INTRO NARRATIEF */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
            <p className="text-dim leading-relaxed">
              Er is een verschil tussen "veilig volgens de norm" en "zo zuiver als ik het zelf zou willen hebben". Nederlands drinkwater haalt de eerste met glans — het behoort tot het best gecontroleerde water ter wereld. Maar wetten en normen bewegen langzamer dan wetenschap, en een deel van de stoffen die inmiddels bekend zijn — PFAS voorop, maar ook medicijnresten en microplastics — vallen nog niet volledig onder de bestaande grenswaarden. Dat is niet paniek zaaien, dat is gewoon de stand van zaken.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Een <strong className="text-ink">drinkwaterzuiveraar</strong> thuis is niets meer of minder dan die laatste stap zelf zetten. Je vertrouwt niet minder op je waterbedrijf — je voegt er gewoon een extra laag zekerheid aan toe, voor het water dat dagelijks in de glazen van je gezin belandt.
            </p>
          </div>
        </section>

        {/* WELKE STOFFEN */}
        <section className="relative">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-center">Wat een waterzuiveraar drinkwater eruit haalt</h2>
            <p className="mt-3 text-dim text-center max-w-xl mx-auto">Vier categorieën stoffen die het omgekeerde-osmose-membraan tegenhoudt.</p>
            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {STOFFEN.map(([titel, uitleg]) => (
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

        {/* VOOR WIE */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Voor wie maakt het meeste verschil?</h2>
            <p className="mt-4 text-dim leading-relaxed">Iedereen kan een waterzuiveraar voor drinkwater gebruiken, maar voor een paar groepen weegt het net iets zwaarder:</p>
            <div className="mt-6 space-y-5">
              {VOOR_WIE.map(([titel, uitleg]) => (
                <div key={titel} className="reveal flex items-start gap-3">
                  <svg className="shrink-0 mt-1" width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#EDA71B" strokeWidth="1.7" /><path d="M12 7v5l3 3" stroke="#EDA71B" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <div>
                    <p className="font-semibold text-ink text-sm">{titel}</p>
                    <p className="mt-1 text-sm text-dim leading-relaxed">{uitleg}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIEPGANG */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoe zeker weet je dat het werkt?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Niet door beloftes, maar door het membraan zelf: een poriegrootte van 0,0001 micron, ongeveer 500.000 keer fijner dan een mensenhaar. Bij die schaal is er simpelweg geen ruimte meer voor bacteriën, zware metalen of de moleculen die PFAS en medicijnresten vormen — alleen watermoleculen passeren nog. Dat is geen marketingtaal, dat is natuurkunde.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Benieuwd naar de techniek erachter? Lees onze uitleg over <Link href="/kennisbank/omgekeerde-osmose-filter" className="underline hover:text-ink">het omgekeerde-osmose-membraan</Link>, of bekijk de <Link href="/uitleg" className="underline hover:text-ink">volledige specificaties</Link> van ons systeem.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Soorten waterzuiveraars voor drinkwater</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Een <strong className="text-ink">waterzuiveraar voor drinkwater</strong> bestaat in vier vormen. Ze verschillen vooral in hoe ze geplaatst worden en hoe fijn ze filteren:
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-amber/10 text-ink"><tr><th scope="col" className="p-4 font-display font-bold">Soort</th><th scope="col" className="p-4 font-display font-bold">Plaatsing</th><th scope="col" className="p-4 font-display font-bold">Werking</th><th scope="col" className="p-4 font-display font-bold">Geschikt voor</th></tr></thead>
                <tbody>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">Waterfilterkan</th><td className="p-4 text-dim">Los, in de koelkast</td><td className="p-4 text-dim">Actieve kool, soms met ionenwisselaar</td><td className="p-4 text-dim">Smaak verbeteren, kleine hoeveelheden</td></tr>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">Zwaartekrachtfilter</th><td className="p-4 text-dim">Op het aanrecht, je vult hem zelf</td><td className="p-4 text-dim">Keramiek en/of koolstof, water zakt langzaam door</td><td className="p-4 text-dim">Huishoudens zonder installatie, ook off-grid</td></tr>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">Kraanfilter</th><td className="p-4 text-dim">Op de uitloop van je kraan</td><td className="p-4 text-dim">Klein koolstoffilter</td><td className="p-4 text-dim">Snel gefilterd water zonder bijvullen</td></tr>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">Omgekeerde osmose</th><td className="p-4 text-dim">Onder het aanrecht, met eigen kraan</td><td className="p-4 text-dim">Voorfilter, membraan van 0,0001 micron en nafilter</td><td className="p-4 text-dim">Ook PFAS, medicijnresten, microplastics en kalk</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-dim leading-relaxed">
              Alleen omgekeerde osmose filtert fijn genoeg voor de opgeloste stoffen waar de meeste mensen zich zorgen over maken. Meer over het membraan lees je in <Link href="/kennisbank/omgekeerde-osmose-filter" className="underline hover:text-ink">omgekeerde osmose filter: hoe werkt het?</Link>.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waar let je op bij het kiezen van een waterzuiveraar?</h2>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Wat wil je eruit halen?</strong> Voor smaak volstaat actieve kool. Voor PFAS en medicijnresten heb je een membraan nodig.</li>
              <li><strong className="text-ink">Hoeveel water gebruik je?</strong> Een gezin dat ook kookt en koffie zet met gefilterd water, heeft meer aan een systeem dat direct levert (1,58 liter per minuut) dan aan een kan.</li>
              <li><strong className="text-ink">Is er een tank?</strong> Een systeem zonder opslagtank neemt minder ruimte in en levert altijd vers water.</li>
              <li><strong className="text-ink">Wat kosten de filters?</strong> Reken de jaarlijkse filterkosten mee. Bij Water-zuivering is dat gemiddeld ongeveer € 135.</li>
              <li><strong className="text-ink">Garantie en installatie</strong>: wie plaatst het, en hoe lang ben je gedekt?</li>
            </ul>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waterzuiveraar of waterontharder?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Die twee worden vaak verward. Een waterontharder haalt kalk uit al het water in huis, tegen aanslag in leidingen en apparaten. Een waterzuiveraar richt zich op het water dat je drinkt en haalt er ook PFAS, medicijnresten en microplastics uit. Het volledige verschil staat in <Link href="/kennisbank/waterontharder-vs-waterzuiveraar" className="underline hover:text-ink">waterontharder of waterzuiveraar</Link>.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Zoek je een manier om regen- of slootwater drinkbaar te maken? Dat vraagt een ander systeem dan een waterzuiveraar voor kraanwater. Lees daarover bij de <Link href="/waterzuiveringsinstallatie" className="underline hover:text-ink">waterzuiveringsinstallatie</Link>.
            </p>
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

        {/* CTA */}
        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zekerheid voor het water van je gezin?</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan — we kijken graag met je mee naar wat past bij jouw huishouden.</p>
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

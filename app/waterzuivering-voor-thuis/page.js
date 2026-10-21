import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import FaqSchema from '@/components/FaqSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  alternates: { canonical: '/waterzuivering-voor-thuis' },
  title: 'Waterzuivering voor thuis — Water-zuivering',
  description:
    'Waterzuivering voor thuis: kraanwater zonder PFAS, medicijnresten of microplastics. Zo werkt een waterzuiveraar voor thuis en dit kost het.',
  openGraph: {
    title: 'Waterzuivering voor thuis — Water-zuivering',
    description:
      'Waterzuivering voor thuis: kraanwater zonder PFAS, medicijnresten of microplastics. Zo werkt een waterzuiveraar voor thuis en dit kost het.',
    images: ['/assets/img/hero-vrouw-water.webp'],
  },
};

const VOORDELEN = [
  ['Verwijdert chloor, PFAS en medicijnresten', 'Een waterzuiveraar voor thuis filtert stoffen die reguliere zuivering laat zitten — tot 99% eruit.'],
  ['Altijd vers, geen sleepwerk', 'Geen flessen water meer aanslepen of bijbestellen — zuiver water rechtstreeks uit je eigen kraan.'],
  ['Beter voor smaak van koffie, thee en eten', 'Zonder chloorsmaak proef je het verschil direct, ook in gekookte gerechten.'],
  ['Minder plastic afval', 'Elke liter uit de kraan is een fles die niet geproduceerd en vervoerd hoeft te worden.'],
];

const STAPPEN = [
  ['Voorfilter (PPC)', 'Vangt zand, roest en grof vuil op — 1 micron, ongeveer 70x fijner dan een haar.'],
  ['RO-filter', 'Het hart van waterzuivering voor thuis: een membraan van 0,0001 micron houdt bacteriën, zware metalen en PFAS tegen.'],
  ['Nafilter (CTO)', 'Actieve koolstof polijst de laatste smaakjes en geurtjes weg — het resultaat: 99% zuiver water.'],
];

const METHODEN = [
  ['Koken', 'Doodt bacteriën, maar verwijdert geen chloor, PFAS of zware metalen — en kost tijd en energie voor elk glas.'],
  ['UV-filter', 'Effectief tegen bacteriën en virussen door UV-licht, maar heeft stroom nodig en filtert geen chemische stoffen zoals PFAS.'],
  ['Zwaartekrachtfilter (gravity)', 'Werkt zonder stroom of wateraansluiting, handig voor noodsituaties, maar met een beperktere doorzet en meer handmatig gedoe dan een vast systeem.'],
];

const INSTALLATIE = [
  ['Adviesgesprek', 'We bespreken je situatie — keukeninrichting, waterdruk, en waar je systeem het best kan staan.'],
  ['Aansluiting op de waterleiding', 'Het systeem wordt aangetakt op de koudwaterleiding onder je gootsteen, met een aparte kraan voor gezuiverd water.'],
  ['Testen en instellen', 'Na installatie testen we de doorstroming en waterkwaliteit, zodat alles meteen goed werkt.'],
  ['Uitleg en overdracht', 'Je krijgt een kort vervangingsschema mee voor de filters, zodat je precies weet wanneer onderhoud nodig is.'],
];

const FAQ = [
  ['Is waterzuivering voor thuis in Nederland nodig?', 'Nederlands kraanwater voldoet aan strenge wettelijke normen en is veilig om te drinken. Een waterzuiveraar voor thuis gaat een stap verder: die verwijdert ook sporen van stoffen die niet standaard worden getest of verwijderd, zoals PFAS, medicijnresten en microplastics.'],
  ['Wat kost waterzuivering voor thuis?', 'De aanschafprijs hangt af van het gekozen systeem en de installatie. Vraag een vrijblijvende offerte aan voor een prijs op maat van jouw situatie.'],
  ['Hoeveel onderhoud heeft een waterzuiveringssysteem?', 'Het voorfilter en het nafilter vervang je gemiddeld elk jaar, het membraan elke 2 jaar. Dat kost gemiddeld ongeveer € 135 per jaar. Het display laat zien wanneer het tijd is.'],
  ['Past een waterzuiveraar voor thuis onder elk aanrecht?', 'In de meeste standaardkeukens is voldoende ruimte onder de spoelbak. Ons systeem is slechts 10,5 cm breed en past staand of liggend.'],
  ['Is waterzuivering voor thuis anders dan voor onderweg?', 'Ja. Onderweg kies je meestal voor een compact, draagbaar filter zonder wateraansluiting. Thuis is een vast systeem onder de gootsteen praktischer: onbeperkt zuiver water zonder gedoe met patronen of bijvullen.'],
  ['Kan waterzuivering voor thuis ook zonder installatie?', 'Er bestaan alternatieven zoals filterkannen of kraanfilters die geen vaste installatie vereisen, maar die filteren minder grondig dan een systeem onder de gootsteen. Lees de vergelijking in ons artikel over de beste waterfilter voor thuis.'],
  ['Waarom niet gewoon een waterfilterkan gebruiken?', 'Een kan is prima tegen chloorsmaak, maar houdt PFAS, medicijnresten en microplastics niet of nauwelijks tegen — en moet je steeds bijvullen. Een systeem onder de gootsteen filtert grondiger en werkt op de achtergrond mee.'],
  ['Hoe lang duurt de installatie van waterzuivering voor thuis?', 'De meeste installaties zijn binnen een paar uur voltooid door een vakkundige monteur, inclusief testen en instellen.'],
  ['Heeft waterzuivering voor thuis invloed op de waterdruk?', 'Nee, het apparaat is ontworpen om de druk op je bestaande kraan niet merkbaar te beïnvloeden.'],
  ['Wat gebeurt er als ik verhuis met waterzuivering voor thuis?', 'Het systeem kan in de meeste gevallen worden meegenomen en op je nieuwe adres opnieuw geïnstalleerd worden — vraag dit na bij je aanbieder.'],
];

export default function WaterzuiveringVoorThuisPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Waterzuivering voor thuis', url: 'https://www.water-zuivering.nl/waterzuivering-voor-thuis' },
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
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Waterzuivering voor thuis</span>
              <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
                Waterzuivering voor thuis: zuiver kraanwater zonder gedoe
              </h1>
              <p className="mt-5 text-dim text-lg">
                <strong className="text-ink">Waterzuivering voor thuis</strong> filtert chloor, PFAS, medicijnresten en microplastics uit je kraanwater — rechtstreeks geïnstalleerd onder je eigen aanrecht, zonder flessen sjouwen.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/aanmelden" className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-lg shadow-amber/25">
                  Vraag vrijblijvend een offerte aan
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
                <Link href="/osmosesysteem" className="cursor-pointer inline-flex items-center gap-2 rounded-full border-2 border-ink px-7 py-3.5 text-sm font-bold text-ink hover:bg-bg transition-colors">
                  Bekijk het systeem
                </Link>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-dim">
                <li className="flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>Vakkundige installatie</li>
                <li className="flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>10 jaar garantie</li>
              </ul>
            </div>
            <div className="relative">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-[2rem] overflow-hidden border border-edge aspect-[4/5]">
                <Image
                  src="/assets/img/hero-vrouw-water.webp"
                  alt="Vrouw drinkt zuiver kraanwater na waterzuivering voor thuis"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* VOORDELEN */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-center">Waarom waterzuivering voor thuis kiezen?</h2>
            <p className="mt-3 text-dim text-center max-w-xl mx-auto">Nederlands kraanwater is veilig, maar niet vrij van alles — dit is wat waterzuivering voor thuis eraan toevoegt.</p>
            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {VOORDELEN.map(([titel, uitleg]) => (
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

        {/* HOE WERKT HET */}
        <section className="relative">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/filters-closeup.png" alt="Drie filtertrappen van een waterzuiveringssysteem voor thuis in close-up" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Hoe het werkt</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Drie filtertrappen, één zuiver resultaat</h2>
              <ol className="mt-6 space-y-4">
                {STAPPEN.map(([titel, uitleg], i) => (
                  <li key={titel} className="flex items-start gap-3">
                    <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-amber text-ink text-sm font-bold">{i + 1}</span>
                    <span className="text-dim"><strong className="text-ink">{titel}.</strong> {uitleg}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-dim">Alle technische details vind je op onze <Link href="/uitleg" className="underline hover:text-ink">specificatiepagina</Link>.</p>
            </div>
          </div>
        </section>

        {/* PRODUCT TIE-IN */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Ons systeem</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Slechts 10,5 cm breed</h2>
              <p className="mt-4 text-dim">Compact genoeg om naast je andere spullen in het keukenkastje te passen, staand of liggend. Zo goed als altijd geregeld — ongeacht hoe je kastje is ingedeeld.</p>
              <p className="mt-4 text-dim">Elke liter zuiver water uit je eigen kraan is meteen ook een fles minder in het afval — waterzuivering voor thuis betaalt zichzelf op termijn ook gewoon terug.</p>
              <p className="mt-4 text-dim">Reken het zelf even na: een gemiddeld huishouden dat overstapt van flessenwater naar waterzuivering voor thuis bespaart al snel enkele honderden euro's per jaar, naast het gemak van nooit meer kratten water hoeven te tillen.</p>
              <Link href="/besparing" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-amber-dark hover:text-ink transition-colors">
                Bereken je besparing
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
            <div className="relative">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/systeem-slim-105mm.png" alt="Slank waterzuiveringssysteem voor thuis, 10,5 cm breed, geïnstalleerd onder het aanrecht" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain p-6 bg-white" />
              </div>
            </div>
          </div>
        </section>

        {/* INSTALLATIE */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoe verloopt de installatie?</h2>
            <p className="mt-4 text-dim leading-relaxed">Waterzuivering voor thuis regelen we in vier overzichtelijke stappen:</p>
            <ol className="mt-6 space-y-4">
              {INSTALLATIE.map(([titel, uitleg], i) => (
                <li key={titel} className="flex items-start gap-3">
                  <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-amber text-ink text-sm font-bold">{i + 1}</span>
                  <span className="text-dim"><strong className="text-ink">{titel}.</strong> {uitleg}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ANDERE METHODEN */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waarom niet koken, UV of een zwaartekrachtfilter?</h2>
            <p className="mt-4 text-dim leading-relaxed">Er bestaan meerdere manieren om water te zuiveren. Voor permanent gebruik thuis is een vast systeem meestal het praktischst — dit is waarom:</p>
            <div className="mt-6 space-y-4">
              {METHODEN.map(([titel, uitleg]) => (
                <div key={titel} className="reveal rounded-2xl card p-5">
                  <p className="font-display font-bold text-ink text-sm">{titel}</p>
                  <p className="mt-1.5 text-sm text-dim leading-relaxed">{uitleg}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-dim leading-relaxed">
              Twijfel je überhaupt of er iets aan de hand is met je kraanwater? Check eerst onze <Link href="/storingen" className="underline hover:text-ink">storingen-check</Link> voor actuele meldingen in jouw buurt, of lees de volledige vergelijking in <Link href="/kennisbank/beste-waterfilter-voor-thuis" className="underline hover:text-ink">beste waterfilter voor thuis</Link>. Met de keuzehulp in onze gids zie je in drie vragen <Link href="/waterfilter" className="underline hover:text-ink">welke waterfilter bij je past</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Is waterzuivering voor thuis nodig? Een eerlijk antwoord</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Eerlijk is eerlijk: Nederlands kraanwater is van uitstekende kwaliteit. Het wordt continu gecontroleerd, en Nederland is een van de weinige landen die geen chloor of fluor aan drinkwater toevoegt. Onderzoekers van KWR Water noemen een waterfilter in Nederland daarom niet noodzakelijk (<a href="https://www.drinkwaterplatform.nl/waterfilters-de-zin-en-onzin/" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Drinkwaterplatform</a>).
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Waarom kiezen mensen dan toch voor <strong className="text-ink">waterzuivering voor thuis</strong>? Om drie redenen:
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">PFAS</strong>: in Noord- en Zuid-Holland heeft de meerderheid van de inwoners kraanwater boven de strengere RIVM-advieswaarde van 4,4 ng/l. Check het voor jouw postcode met de <Link href="/pfas-check" className="underline hover:text-ink">PFAS-check</Link>.</li>
              <li><strong className="text-ink">Stoffen zonder norm</strong>: voor veel medicijnresten en microplastics bestaan nog geen wettelijke grenswaarden. Lees meer over de <Link href="/kennisbank/drinkwaternormen-nederland" className="underline hover:text-ink">drinkwaternormen in Nederland</Link>.</li>
              <li><strong className="text-ink">Je eigen leidingen</strong>: het waterbedrijf is verantwoordelijk tot de watermeter. Wat daarna in je huis gebeurt, bijvoorbeeld in oude leidingen, valt daarbuiten.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Het is dus geen kwestie van onveilig water, maar van een extra stap voor wie die sporen ook kwijt wil.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Welke stoffen haalt waterzuivering voor thuis uit je kraanwater?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Niet elk filter doet hetzelfde. Een filter met actieve kool, zoals in een filterkan, en een omgekeerde-osmosesysteem verschillen flink:
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-amber/10 text-ink"><tr><th scope="col" className="p-4 font-display font-bold">Stof</th><th scope="col" className="p-4 font-display font-bold">Actieve kool (kan, kraanfilter)</th><th scope="col" className="p-4 font-display font-bold">Omgekeerde osmose</th></tr></thead>
                <tbody>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">PFAS</th><td className="p-4 text-dim">Deels en niet lang: PFAS breekt snel door de kool heen, en TFA wordt niet tegengehouden</td><td className="p-4 text-dim">Ja, het membraan houdt ze tegen</td></tr>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">Medicijnresten</th><td className="p-4 text-dim">Deels</td><td className="p-4 text-dim">Ja</td></tr>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">Microplastics</th><td className="p-4 text-dim">Beperkt</td><td className="p-4 text-dim">Ja</td></tr>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">Lood uit oude leidingen</th><td className="p-4 text-dim">Beperkt</td><td className="p-4 text-dim">Ja</td></tr>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">Kalk</th><td className="p-4 text-dim">Nauwelijks</td><td className="p-4 text-dim">Ja</td></tr>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">Smaak en geur</th><td className="p-4 text-dim">Ja</td><td className="p-4 text-dim">Ja, met het nafilter van actieve kool</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-dim leading-relaxed">
              Wat actieve kool met PFAS doet, staat in het artikel van KWR op het <a href="https://www.drinkwaterplatform.nl/waterfilters-de-zin-en-onzin/" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Drinkwaterplatform</a>. Meer over PFAS-vrij water lees je in <Link href="/kennisbank/pfas-vrij-water" className="underline hover:text-ink">PFAS-vrij water</Link>.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Nadelen van waterzuivering voor thuis, en hoe je ze voorkomt</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Ook een waterzuiveraar heeft nadelen. Het is goed om die te kennen, en om te weten hoe een goed systeem ermee omgaat:
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Bacteriegroei in een vol filter</strong>. Een filter dat veel te lang blijft zitten, kan vervuilen. Vervang je filters dus op tijd. Bij Water-zuivering geeft het display aan wanneer dat moet.</li>
              <li><strong className="text-ink">Minder mineralen</strong>. Het membraan houdt ook calcium en magnesium tegen. Je haalt de meeste mineralen uit je eten, maar wie de smaak mist, kiest het <Link href="/winkel/cto-filter-met-mineralen" className="underline hover:text-ink">nafilter met mineralen</Link>.</li>
              <li><strong className="text-ink">Spoelwater</strong>. Omgekeerde osmose spoelt de tegengehouden stoffen weg naar de afvoer. Dat kost wat extra water.</li>
              <li><strong className="text-ink">Zuiver water en leidingen</strong>. Heel zuiver water kan metalen leidingen aantasten. Daarom zuivert een systeem onder het aanrecht alleen het water voor je keukenkraan, via een eigen leiding. Het water voor de rest van je huis blijft gewoon kraanwater.</li>
            </ul>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waterzuivering thuis vs. flessenwater</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Wie geen kraanwater wil drinken, koopt vaak flessenwater. Dat is per liter veel duurder, je moet het sjouwen, en ook in sommige merken flessenwater is PFAS gevonden. Met waterzuivering thuis tap je zuiver water uit je eigen kraan, en betaal je na de aanschaf alleen nog filters: gemiddeld ongeveer € 135 per jaar. Het volledige verschil lees je in <Link href="/kennisbank/kraanwater-vs-flessenwater" className="underline hover:text-ink">kraanwater vs. flessenwater</Link>.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Voor wie is waterzuivering voor thuis het meest zinvol?</h2>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Je woont in Noord- of Zuid-Holland</strong>, waar de PFAS-waarden in kraanwater het hoogst zijn.</li>
              <li><strong className="text-ink">Je hebt kinderen</strong> en wilt hun blootstelling aan PFAS en medicijnresten zo laag mogelijk houden.</li>
              <li><strong className="text-ink">Je koopt nu veel flessenwater</strong> en wilt van het sjouwen en het plastic af.</li>
              <li><strong className="text-ink">Je drinkt veel koffie en thee</strong> en wilt geen kalk meer in je waterkoker en machine.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Herken je jezelf in geen van deze punten en vind je kraanwater prima zoals het is? Dan is waterzuivering voor thuis een luxe, geen noodzaak. Dat zeggen we liever eerlijk.
            </p>
          </div>
        </section>

        <section className="relative">
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

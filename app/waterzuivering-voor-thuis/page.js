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
    'Waterzuivering voor thuis: zuiver, fris kraanwater zonder chloor, PFAS of microplastics. Ontdek hoe een waterzuiveraar voor thuis werkt en wat het kost.',
  openGraph: {
    title: 'Waterzuivering voor thuis — Water-zuivering',
    description:
      'Waterzuivering voor thuis: zuiver, fris kraanwater zonder chloor, PFAS of microplastics. Ontdek hoe een waterzuiveraar voor thuis werkt en wat het kost.',
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
  ['Hoeveel onderhoud heeft een waterzuiveringssysteem?', 'De filters gaan afhankelijk van gebruik en waterkwaliteit meestal 6 tot 12 maanden mee. Bij installatie krijg je een concreet vervangingsschema.'],
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
              Twijfel je überhaupt of er iets aan de hand is met je kraanwater? Check eerst onze <Link href="/storingen" className="underline hover:text-ink">storingen-check</Link> voor actuele meldingen in jouw buurt, of lees de volledige vergelijking in <Link href="/kennisbank/beste-waterfilter-voor-thuis" className="underline hover:text-ink">beste waterfilter voor thuis</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
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

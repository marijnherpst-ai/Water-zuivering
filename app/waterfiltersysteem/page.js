import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import FaqSchema from '@/components/FaqSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  alternates: { canonical: '/waterfiltersysteem' },
  title: 'Waterfiltersysteem voor thuis — Water-zuivering',
  description: 'Een compleet waterfiltersysteem filtert je kraanwater in drie stappen tot 99% zuiver. Ontdek hoe zo\'n filtratiesysteem is opgebouwd en wat het kost.',
};

const ONDERDELEN = [
  ['Stap 1 — Voorfilter (PPC)', 'De grove vangnet-laag van het systeem: zand, roest en slib worden hier al opgevangen, ruim voordat ze de fijnere onderdelen kunnen belasten.', '1 micron'],
  ['Stap 2 — Het RO-membraan', 'Het hart van elk goed waterfiltratiesysteem. Water wordt onder lichte druk door een membraan geperst dat vrijwel alles tegenhoudt behalve de watermoleculen zelf.', '0,0001 micron'],
  ['Stap 3 — Nafilter (CTO)', 'Actieve koolstof die de laatste, nauwelijks meetbare smaakjes en geurtjes wegpolijst — het verschil tussen "gefilterd" en écht fris.', 'polijstlaag'],
];

const WAAROM_SYSTEEM = [
  ['Eén onderdeel, drie zwaktes', 'Alleen een voorfilter houdt geen PFAS tegen. Alleen een membraan verstopt sneller zonder bescherming. Alleen een koolstoffilter mist de fijnste filtratie. Pas als de drie samenwerken, ontstaat een systeem dat écht af is.'],
  ['Minder onderhoud dan je zou denken', 'Omdat elk onderdeel zijn eigen taak heeft, hoeft niets harder te werken dan nodig — dat verlengt juist de levensduur van het duurste onderdeel, het membraan.'],
  ['Voorspelbare kosten', 'Elk onderdeel heeft een eigen, vast vervangingsschema. Geen verrassingen, geen giswerk — je weet vooraf precies wanneer welk filter aan de beurt is.'],
];

const FAQ = [
  ['Wat is een waterfiltersysteem precies?', 'Een waterfiltersysteem is een set van meerdere filters die na elkaar werken — meestal een voorfilter, een fijn membraan en een nafilter — om kraanwater in stappen steeds verder te zuiveren.'],
  ['Wat is het verschil tussen een waterfiltersysteem en een los filter?', 'Een los filter (zoals in een kan) doet één ding: chloor of grof vuil eruit halen. Een compleet filtratiesysteem combineert meerdere technieken, waardoor het ook fijnere stoffen zoals PFAS en medicijnresten verwijdert.'],
  ['Hoeveel ruimte kost een waterfiltersysteem?', 'Ons systeem is slechts 10,5 cm breed en past staand of liggend in vrijwel elk keukenkastje, naast je andere spullen.'],
  ['Hoe lang gaat een waterfiltersysteem mee?', 'Het frame en de behuizing gaan jarenlang mee (10 jaar garantie). De filters zelf worden periodiek vervangen: voor- en nafilter elke 6-12 maanden, het membraan elke 2-3 jaar.'],
  ['Is een waterfiltersysteem moeilijk te onderhouden?', 'Nee — elk onderdeel heeft een vast vervangingsschema dat je bij installatie meekrijgt. Het is meer een kwestie van agenda bijhouden dan technische kennis.'],
  ['Kan een waterfiltersysteem ook water voor koken en koffie leveren?', 'Ja, het systeem levert onbeperkt zuiver water via een aparte kraan of aansluiting — perfect voor koken, koffie, thee of gewoon een glas water.'],
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Waterfiltersysteem', url: 'https://www.water-zuivering.nl/waterfiltersysteem' },
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
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Waterfiltersysteem</span>
              <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
                Een waterfiltersysteem is meer dan één filter — het is een team
              </h1>
              <p className="mt-5 text-dim text-lg">
                Een goed <strong className="text-ink">waterfiltersysteem</strong> bestaat niet uit één slim onderdeel, maar uit drie die elkaar aanvullen. Samen filteren ze kraanwater tot 99% zuiver, zonder dat je er iets voor hoeft te doen.
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
              <div className="relative rounded-[2rem] overflow-hidden border border-edge aspect-[4/5] bg-white">
                <Image src="/assets/img/systeem-staand.png" alt="Compleet waterfiltersysteem met drie filtertrappen" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-contain p-8" priority />
              </div>
            </div>
          </div>
        </section>

        {/* INTRO NARRATIEF */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
            <p className="text-dim leading-relaxed">
              Stel je een verhuizing voor waarbij je maar één doos meeneemt: de zware, de belangrijke spullen — en de rest gewoon achterlaat. Dat is ongeveer wat er gebeurt als je maar op één filtertype vertrouwt om je kraanwater te zuiveren. Het zal iets doen, maar de rest blijft gewoon staan. Een écht <strong className="text-ink">waterfiltratiesysteem</strong> pakt het anders aan: elk onderdeel neemt zijn eigen taak, in de juiste volgorde, zodat er aan het eind werkelijk niets meer overblijft om je zorgen over te maken.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Dat klinkt misschien als een technisch verhaal, en dat is het ook een beetje — maar het is vooral een praktisch verhaal. Want hoe beter de onderdelen van je watersysteem op elkaar zijn afgestemd, hoe minder onderhoud jij eraan hebt, en hoe langer alles meegaat.
            </p>
          </div>
        </section>

        {/* DE DRIE STAPPEN */}
        <section className="relative">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-center">Drie stappen, één systeem</h2>
            <p className="mt-3 text-dim text-center max-w-xl mx-auto">Elke stap in ons waterfiltersysteem heeft een eigen taak — samen vormen ze een sluitend geheel.</p>
            <div className="mt-10 space-y-5">
              {ONDERDELEN.map(([titel, uitleg, maat], i) => (
                <div key={titel} className="reveal grid sm:grid-cols-[auto,1fr,auto] gap-4 items-start rounded-2xl card p-6">
                  <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-amber text-ink text-sm font-bold">{i + 1}</span>
                  <div>
                    <p className="font-display font-bold text-ink">{titel}</p>
                    <p className="mt-1.5 text-sm text-dim leading-relaxed">{uitleg}</p>
                  </div>
                  <span className="shrink-0 self-center rounded-full bg-bg border border-edge px-3 py-1.5 text-xs font-bold text-dim whitespace-nowrap">{maat}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WAAROM EEN SYSTEEM I.P.V. EEN LOS FILTER */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
              <Image src="/assets/img/filters-closeup.png" alt="Drie filtertrappen van een waterfiltersysteem in close-up" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Waarom een systeem, geen los filter</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Eén filter is een compromis. Een systeem is dat niet.</h2>
              <div className="mt-6 space-y-5">
                {WAAROM_SYSTEEM.map(([titel, uitleg]) => (
                  <div key={titel}>
                    <p className="font-semibold text-ink text-sm">{titel}</p>
                    <p className="mt-1 text-sm text-dim leading-relaxed">{uitleg}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DIEPGANG */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat een filtreersysteem uiteindelijk oplevert</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Het resultaat van deze drie stappen samen: water dat tot 99% is bevrijd van chloor, PFAS, medicijnresten, microplastics en zware metalen. Geen marketingclaim, maar de directe optelsom van wat elk onderdeel afzonderlijk doet — de voorfilter houdt tegen wat groot is, het membraan houdt tegen wat klein is, en de nafilter poetst weg wat overblijft.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Benieuwd hoe dit precies verschilt van andere opties, zoals een filterkan of kraanfilter? Lees onze vergelijking <Link href="/kennisbank/beste-waterfilter-voor-thuis" className="underline hover:text-ink">beste waterfilter voor thuis</Link>, of ga direct naar de <Link href="/osmose-waterfilter" className="underline hover:text-ink">osmose waterfilter-pagina</Link> voor de technische kern van het systeem.
            </p>
          </div>
        </section>

        {/* FAQ */}
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
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Benieuwd wat een compleet systeem voor jouw keuken betekent?</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan — we kijken graag met je mee naar wat past bij jouw situatie.</p>
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

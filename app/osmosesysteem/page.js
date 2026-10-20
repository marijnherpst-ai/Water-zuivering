import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import FiltratieProces from '@/components/osmose/FiltratieProces';
import TdsMeter from '@/components/osmose/TdsMeter';
import WerkingTabs from '@/components/osmose/WerkingTabs';
import MineraalUitleg from '@/components/osmose/MineraalUitleg';
import Binnenkant from '@/components/osmose/Binnenkant';
import KastjeCheck from '@/components/osmose/KastjeCheck';
import KeuzeKaarten from '@/components/osmose/KeuzeKaarten';
import StickyOfferte from '@/components/StickyOfferte';
import ProductSchema from '@/components/ProductSchema';
import FaqSchema from '@/components/FaqSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import { mono, DONKER, Kop, Pijl, Sterren, btnPrimair, btnLicht, btnDonker } from '@/components/Ontwerp';
import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

export const metadata = {
  alternates: { canonical: '/osmosesysteem' },
  title: 'Osmosesysteem voor thuis: direct flow — Water-zuivering',
  description:
    'Osmosesysteem voor thuis: 3-traps filtratie, direct flow zonder tank en 10 jaar garantie. Bekijk hoe het werkt en vraag vrijblijvend een offerte aan.',
  openGraph: {
    title: 'Het osmosesysteem van Water-zuivering',
    description: 'Zuiver drinkwater uit je eigen kraan: 3-traps omgekeerde osmose, direct flow zonder tank, geplaatst in 1 à 2 uur.',
    url: 'https://www.water-zuivering.nl/osmosesysteem',
    images: [{ url: '/assets/img/countertop.png', width: 1024, height: 1024, alt: 'Osmosesysteem van Water-zuivering' }],
  },
};

const FAQ_ITEMS = [
  ['Wat is een osmosesysteem?', 'Een osmosesysteem zuivert kraanwater met omgekeerde osmose. Het water wordt onder lichte druk door een membraan met poriën van 0,0001 micron geperst. Vrijwel alleen watermoleculen komen erdoorheen; stoffen als PFAS, medicijnresten, microplastics, kalk en lood blijven achter en spoelen weg naar de afvoer.'],
  ['Heeft dit osmosesysteem een opslagtank?', 'Nee. Ons osmosesysteem werkt volgens het direct-flow-principe: het zuivert het water op het moment dat je de kraan opendraait, met 1,58 liter per minuut. Er staat dus geen voorraad water in een tank te wachten.'],
  ['Past het osmosesysteem onder elk keukenkastje?', 'In de meeste standaardkeukens is voldoende ruimte onder de spoelbak. Het osmosesysteem is slechts 10,5 cm breed en past staand of liggend. Met de maatcheck zie je het vooraf met een foto van je eigen kastje, en tijdens de offerteaanvraag kijken we naar jouw situatie.'],
  ['Hoe vaak moet ik de filters vervangen?', 'Het PPC- en CTO-filter gaan ongeveer 12 maanden mee, het RO-filter 24 maanden. Het display op het osmosesysteem laat precies zien wanneer het tijd is, dus je hoeft dit nooit zelf bij te houden.'],
  ['Wat betekent de TDS-waarde precies?', 'TDS staat voor de hoeveelheid opgeloste deeltjes in het water. Hoe lager de waarde, hoe minder opgeloste deeltjes er nog aanwezig zijn. Op deze pagina kun je het verschil zelf bekijken met de interactieve meter.'],
  ['Heeft het osmosesysteem invloed op mijn waterdruk?', 'Nee. Het osmosesysteem is ontworpen om de druk op je bestaande kraan niet merkbaar te beïnvloeden. Het werkt bij een waterdruk tussen 0,1 en 0,4 MPa.'],
  ['Kan ik het osmosesysteem zelf installeren?', 'Ja. Normaal installeert onze eigen monteur alles binnen 1 tot 2 uur, maar kies je ervoor om het zelf te doen, dan krijg je €250 korting. In de tab "Installatie" op deze pagina staat precies hoe dat werkt.'],
  ['Wat betekenen E1, E2 en E3 op het display?', 'Dat zijn ingebouwde veiligheidsmeldingen: E1 betekent dat het apparaat 30 minuten onafgebroken heeft gedraaid, E2 wijst op een gedetecteerde lekkage en E3 betekent dat de waterdruk te laag is.'],
  ['Is dit osmosesysteem ook geschikt om ramen te wassen?', 'Nee, dit osmose systeem is gemaakt voor drinkwater in de keuken. Osmose-installaties voor glazenwassers zijn een ander type apparaat, gebouwd voor een veel grotere hoeveelheid water.'],
  ['Kan ik later nog een 3-weg kraan of mineraalfilter toevoegen?', 'Ja, beide accessoires zijn los verkrijgbaar en passen op elk Water-zuivering osmosesysteem, ook achteraf.'],
];

const KENMERKEN = [
  {
    label: 'Direct flow',
    titel: 'Geen tank, elk glas vers gefilterd',
    tekst: 'Veel osmose systemen werken met een voorraadtank onder het aanrecht. Dit osmosesysteem niet: het zuivert op het moment dat je de kraan opendraait, met 1,58 liter per minuut. Er staat dus geen water in een tank dat al uren stilstaat, en je houdt ruimte over in je kastje.',
    icoon: 'M12 3c3 4 6 7.5 6 11a6 6 0 01-12 0c0-3.5 3-7 6-11z',
  },
  {
    label: 'Slim display',
    titel: 'Een osmosesysteem dat met je meedenkt',
    tekst: 'Op het display zie je per filter hoeveel levensduur er nog over is. Is het tijd voor een nieuw filter, dan zie je dat meteen. Lekt er iets of is de waterdruk te laag, dan meldt het osmosesysteem dat met een foutcode.',
    icoon: 'M4 5h16v11H4zM9 20h6M12 16v4',
  },
  {
    label: 'Compact en stil',
    titel: '10,5 cm breed, minder dan 48 dB',
    tekst: 'Dit osmosesysteem is smaller dan de meeste keukenladen en zo stil dat je het nauwelijks hoort. Past hij niet rechtop in je kastje, leg hem dan op zijn kant: het bedieningspaneel draait gewoon mee.',
    icoon: 'M4 10v4h4l5 4V6L8 10H4zm13-1a4 4 0 010 6',
  },
];

const FILTERS = [
  { naam: 'PPC-filter', rol: 'Voorfilter', tekst: 'Vangt zand, roest en slib en haalt restchloor weg.', interval: 'Ieder jaar', prijs: '€49,99', per: '/ jaar' },
  { naam: 'RO-filter', rol: 'Het membraan', tekst: 'Houdt PFAS, medicijnresten, kalk en lood tegen.', interval: 'Elke 2 jaar', prijs: '€69,99', per: '/ 2 jaar', top: true },
  { naam: 'CTO-filter', rol: 'Nafilter', tekst: 'Zorgt voor een frisse, heldere smaak. Met mineralen €64,99.', interval: 'Ieder jaar', prijs: '€49,99', per: '/ jaar' },
];

const ZONDER = [
  'Kalkaanslag en een minder frisse smaak uit de kraan',
  'Sporen van PFAS, medicijnresten en microplastics in je kraanwater',
  'Eindeloos sjouwen met flessen water of literpakken',
  'Bergen plastic afval van lege flessen',
  'Zelf uitzoeken en installeren van een geschikt systeem',
  'Geen idee hoe zuiver het water is dat je drinkt',
];

const MET = [
  ['Zuivert tot 99%', 'PFAS, medicijnresten, microplastics en lood worden effectief tegengehouden.'],
  ['Compact geplaatst', 'Het osmosesysteem is slechts 10,5 cm breed en past onder vrijwel elk aanrecht, staand of liggend.'],
  ['Vakkundig geïnstalleerd', 'Onze eigen monteur sluit alles binnen 1 tot 2 uur professioneel aan.'],
  ['Lage onderhoudskosten', 'Filters vervang je zelf, zonder gereedschap — het display laat precies zien wanneer.'],
  ['Fluisterstil', 'Minder dan 48 dB tijdens gebruik — je merkt er nauwelijks iets van.'],
  ['10 jaar garantie', 'Volledig gedekt, zwart op wit.'],
];

const TRAJECT = [
  ['Vraag een offerte aan', 'Vrijblijvend en zonder verplichtingen. Je krijgt de prijs van het osmosesysteem inclusief plaatsing.'],
  ['Check je kastje', 'Met de maatcheck zie je met een foto van je eigen keukenkastje of het osmosesysteem past, staand of liggend.'],
  ['Plaatsing in 1 à 2 uur', 'Onze eigen monteur sluit het osmosesysteem en de kraan aan. Liever zelf monteren? Dan krijg je €250 korting.'],
  ['Je eerste glas', 'Na het doorspoelen tap je zuiver water uit je osmosesysteem. Filters bestel je pas als het display erom vraagt.'],
];

const SPECS = [
  ['Type', 'Omgekeerde-osmose waterzuiveraar, direct flow'],
  ['Filtertrappen', '3 (PPC, RO, CTO)'],
  ['Gefilterd water', '1,58 liter per minuut'],
  ['Totale capaciteit', '4.000 liter'],
  ['Benodigde waterdruk', '0,1 – 0,4 MPa'],
  ['Voeding', '100–240V, 50/60Hz'],
  ['Vermogen', '96 W'],
  ['Geluid', 'minder dan 48 dB'],
  ['Werktemperatuur', '4°C – 40°C, binnenshuis'],
  ['Afmetingen (b × d × h)', '10,5 × 42 × 43 cm'],
  ['Certificering', 'CE / RoHS'],
  ['Garantie', '10 jaar'],
];

const INHOUD = [
  ['wat-is', 'Wat is een osmosesysteem?'],
  ['kenmerken', 'Drie dingen die dit systeem anders maken'],
  ['binnenkant', 'Een kijkje binnenin'],
  ['hoe-het-werkt', 'Van kraanwater tot glas'],
  ['ontwerp', 'Past het in je kastje?'],
  ['kosten', 'Filters en kosten'],
  ['traject', 'Van aanvraag tot eerste glas'],
  ['specificaties', 'Technische gegevens'],
  ['vragen', 'Veelgestelde vragen'],
];

const KEUKENBLADEN = ['Composiet / kunststeen', 'Natuursteen (graniet/marmer)', 'Hout', 'RVS', 'Laminaat', 'Anders / weet ik niet'];

const Vinkje = ({ className = 'text-amber-dark' }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`shrink-0 ${className}`}><path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

export default async function Page() {
  const supabase = await createClient();
  const { data: allReviews } = await supabase
    .from('reviews')
    .select('id, name, city, rating, review_text, created_at')
    .eq('approved', true)
    .order('created_at', { ascending: false });

  const reviews = allReviews || [];
  const topReviews = reviews.slice(0, 3);
  const reviewCount = reviews.length;
  const avgRating = reviewCount > 0 ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviewCount : null;
  const ratingTekst = avgRating ? avgRating.toFixed(1).replace('.', ',') : null;

  return (
    <>
      <RevealObserver />
      <Header />

      <main>
        {/* HERO */}
        <section id="hero" className="relative overflow-hidden">
          <div className="glow w-[520px] h-[520px] bg-amber/15 -top-44 -left-44 drift" />
          <div className="glow w-72 h-72 bg-amber/10 top-1/3 -right-24 drift2" />
          <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] text-amber-dark`}>Osmosesysteem · direct flow · 3-traps filtratie</p>
              <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight leading-[1.05]">
                Het osmosesysteem voor thuis. Zuiver drinkwater, direct uit je kraan<span className="text-amber-dark">.</span>
              </h1>
              <p className="mt-6 text-lg text-dim leading-relaxed">
                Dit <strong className="text-ink">osmosesysteem</strong> filtert je kraanwater in drie stappen en houdt PFAS, medicijnresten, microplastics en kalk tegen. Compact onder je aanrecht, zonder tank, en geplaatst door onze eigen monteur.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm font-semibold text-ink">
                {['Filtert tot 99% van onzuiverheden', 'Direct flow, geen tank', 'Geplaatst in 1 à 2 uur', '10 jaar garantie'].map((usp) => (
                  <li key={usp} className="flex items-center gap-2"><Vinkje />{usp}</li>
                ))}
              </ul>
              {ratingTekst && (
                <Link href="/reviews" className="cursor-pointer mt-7 inline-flex items-center gap-3 rounded-full border border-edge bg-white/80 py-1.5 pl-2 pr-4 shadow-sm hover:border-amber transition-colors">
                  <span className="flex items-center gap-0.5 rounded-full bg-ink px-2.5 py-1"><Sterren rating={avgRating} /></span>
                  <span className="text-sm text-ink"><strong className="font-bold">{ratingTekst}</strong><span className="text-dim"> uit 5 · {reviewCount} reviews</span></span>
                </Link>
              )}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/aanmelden" className={btnPrimair}>
                  Vraag vrijblijvend een offerte aan
                  <Pijl />
                </Link>
                <a href="#binnenkant" className={btnLicht}>Bekijk het osmosesysteem van binnen</a>
              </div>
              <p className={`${mono.className} mt-6 text-xs text-dim`}>Gratis en vrijblijvend · klaar in minder dan een minuut · prijs inclusief plaatsing</p>
            </div>
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2.75rem] bg-gradient-to-br from-amber/25 via-amber/5 to-transparent -rotate-2" />
              <div className="relative rounded-[2.25rem] overflow-hidden border border-edge shadow-2xl aspect-square">
                <Image src="/assets/img/countertop.png" alt="Osmosesysteem van Water-zuivering op een keukenblad" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className={`${mono.className} hidden sm:block absolute -left-4 top-10 rounded-2xl bg-ink/90 backdrop-blur px-4 py-3 text-white shadow-xl`}>
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/50">Gefilterd water</p>
                <p className="text-lg font-semibold text-amber">1,58 L/min</p>
              </div>
              <div className={`${mono.className} hidden sm:block absolute -right-4 bottom-12 rounded-2xl bg-ink/90 backdrop-blur px-4 py-3 text-white shadow-xl`}>
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/50">Geluid</p>
                <p className="text-lg font-semibold text-amber">&lt; 48 dB</p>
              </div>
            </div>
          </div>
        </section>

        {/* TYPEPLAATJE */}
        <section className="relative bg-ink text-white" style={DONKER}>
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className={`${mono.className} grid grid-cols-2 md:grid-cols-4 border border-white/15 rounded-2xl overflow-hidden bg-ink/40`}>
              {[['3 trappen', 'Filtratie'], ['Geen tank', 'Direct flow'], ['10,5 cm', 'Breedte'], ['10 jaar', 'Garantie']].map(([waarde, label], i) => (
                <div key={label} className={`px-5 py-5 ${i % 2 === 1 ? 'border-l border-white/15' : ''} ${i > 1 ? 'border-t md:border-t-0 border-white/15' : ''} ${i === 2 ? 'md:border-l' : ''}`}>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/45">{label}</p>
                  <p className="mt-1.5 text-xl sm:text-2xl lg:text-3xl font-semibold text-amber whitespace-nowrap">{waarde}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WAT IS + INHOUD */}
        <section id="wat-is" className="relative bg-surface border-b border-edge scroll-mt-24">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
            <div>
              <Kop label="Uitgelegd" titel="Wat is een osmosesysteem?" />
              <p className="mt-6 text-dim leading-relaxed">
                Een osmosesysteem zuivert kraanwater met <strong className="text-ink">omgekeerde osmose</strong>. Het water wordt onder lichte druk door een membraan geperst met poriën van 0,0001 micron, ongeveer 500.000 keer fijner dan een haar. Vrijwel alleen de watermoleculen zelf komen erdoorheen. PFAS, medicijnresten, microplastics, kalk en lood blijven achter en spoelen automatisch weg naar de afvoer.
              </p>
              <p className="mt-4 text-dim leading-relaxed">
                Zoek je online op osmose systeem, dan kom je ook installaties tegen voor glazenwassers en aquaria. Dit osmosesysteem is gemaakt voor iets anders: zuiver drinkwater in je eigen keuken. Het staat onder je aanrecht, levert het water via een eigen kraan, en is afgestemd op wat je dagelijks drinkt en kookt. Wil je eerst alle soorten filters naast elkaar zien, lees dan onze gids <Link href="/waterfilter" className="underline hover:text-ink">waterfilter kopen</Link>. Hoe het membraan precies werkt, lees je bij <Link href="/kennisbank/omgekeerde-osmose-filter" className="underline hover:text-ink">omgekeerde osmose filter</Link>.
              </p>
            </div>
            <nav aria-label="Inhoud van deze pagina" className="lg:sticky lg:top-32 rounded-3xl bg-bg border border-edge p-6">
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] text-amber-dark`}>Op deze pagina</p>
              <ol className="mt-4 space-y-1">
                {INHOUD.map(([id, label], i) => (
                  <li key={id}>
                    <a href={`#${id}`} className="cursor-pointer group flex items-center gap-3 rounded-xl px-2 py-1.5 text-sm text-ink hover:bg-white transition-colors">
                      <span className={`${mono.className} text-[11px] text-dim group-hover:text-amber-dark tabular-nums`}>{String(i + 1).padStart(2, '0')}</span>
                      {label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </section>

        {/* KENMERKEN */}
        <section id="kenmerken" className="relative scroll-mt-24">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <Kop midden label="Het verschil" titel="Drie dingen die dit osmosesysteem anders maken" />
            <p className={`${mono.className} mt-4 text-center text-[11px] uppercase tracking-[0.16em] text-dim`}>Klik op een kaart</p>
            <div className="mt-10">
              <KeuzeKaarten items={KENMERKEN} monoClass={mono.className} />
            </div>
          </div>
        </section>

        {/* BINNENKANT (donker) */}
        <section id="binnenkant" className="relative bg-ink text-white scroll-mt-24 overflow-hidden" style={DONKER}>
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <Kop
              donker
              label="Een kijkje binnenin"
              titel="Zo ziet je osmosesysteem er van binnen uit"
              intro="Achter het zijpaneel van het osmosesysteem zitten drie filters op een rij, met eronder het display. Klik op een punt om te zien wat elk onderdeel doet."
            />
            <div className="mt-12">
              <Binnenkant monoClass={mono.className} />
            </div>
          </div>
        </section>

        {/* PROCES + RESULTAAT */}
        <section id="hoe-het-werkt" className="relative overflow-hidden scroll-mt-24">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <Kop midden label="Het proces" titel="Van kraanwater tot kristalhelder glas water" intro="Elke druppel gaat door de drie filtertrappen van het osmosesysteem. Klik hieronder op een filter om te zien wat er gebeurt." />
            <div className="mt-12">
              <FiltratieProces />
            </div>
            <div className="mt-16 md:mt-20 flex items-center gap-4" aria-hidden="true">
              <span className="h-px flex-1 bg-edge" />
              <span className={`${mono.className} text-[11px] uppercase tracking-[0.2em] text-amber-dark`}>Het resultaat</span>
              <span className="h-px flex-1 bg-edge" />
            </div>
            <div className="mt-10">
              <TdsMeter />
            </div>
          </div>
        </section>

        {/* ONTWERP (donker) */}
        <section id="ontwerp" className="relative bg-ink text-white overflow-hidden scroll-mt-24" style={DONKER}>
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
            <div>
              <Kop donker label="Plaatsing" titel="Past het osmosesysteem in je keukenkastje?" intro="Bijna altijd. Het systeem is 10,5 cm breed, 42 cm diep en 43 cm hoog, en het kan staand of liggend. Bekijk hiernaast op schaal hoeveel ruimte er overblijft." />
              <p className={`${mono.className} mt-8 text-[11px] uppercase tracking-[0.2em] text-amber`}>Dit heb je onder je aanrecht nodig</p>
              <ul className="mt-4 space-y-3">
                {[
                  ['Een koudwateraansluiting', 'Hier sluit de monteur de toevoer van het osmosesysteem op aan.'],
                  ['De afvoer van je gootsteen', 'Voor het spoelwater met de stoffen die het membraan tegenhoudt.'],
                  ['Een stopcontact', 'Het systeem werkt op gewone netspanning, 100–240V.'],
                ].map(([titel, tekst]) => (
                  <li key={titel} className="flex gap-3">
                    <span className="mt-0.5 shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-amber text-ink">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    <span>
                      <span className="block font-semibold text-white">{titel}</span>
                      <span className="block text-sm text-white/60">{tekst}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-white/60 leading-relaxed">Een tank is niet nodig: het osmosesysteem werkt direct flow en maakt zuiver water op het moment dat jij de kraan opendraait. Twijfel je? Met de maatcheck zet je het apparaat op ware grootte in je eigen keuken, met een foto of live met je camera.</p>
              <Link href="/maatcheck" className={`${btnPrimair} mt-7`}>
                Zet het in je eigen kastje
                <Pijl />
              </Link>
            </div>
            <KastjeCheck monoClass={mono.className} />
          </div>
        </section>

        {/* WERKING */}
        <section className="relative bg-surface border-b border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <Kop midden label="Van A tot Z" titel="Installatie, gebruik en onderhoud" intro="Alles over je osmosesysteem: van de installatie tot je eerste glas water, en van dagelijks gebruik tot een filter vervangen." />
            <div className="mt-12">
              <WerkingTabs />
            </div>
          </div>
        </section>

        {/* KOSTEN */}
        <section id="kosten" className="relative overflow-hidden scroll-mt-24">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
              <div>
                <Kop label="Onderhoud" titel="Filters wisselen zonder gereedschap" intro="Paneel eraf, oud filter eruit, nieuw filter erin tot je een klik hoort. Het display van het osmosesysteem vertelt je wanneer, dus je hoeft niets bij te houden." />
                <div className="mt-8 relative rounded-[2rem] overflow-hidden border border-edge shadow-xl aspect-[2/1]">
                  <Image src="/assets/img/filter-vervangen.png" alt="Een filter van het osmosesysteem wordt zonder gereedschap vervangen" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                </div>
              </div>
              <div>
                <KeuzeKaarten items={FILTERS} variant="filter" start={1} monoClass={mono.className} />
                <div className="mt-8 rounded-3xl bg-amber/10 border border-amber/25 px-6 py-5">
                  <p className="font-display font-bold text-lg">Gemiddeld ± €135 per jaar aan filters</p>
                  <p className="mt-1 text-sm text-dim">Nog geen €11,50 per maand om je osmosesysteem draaiende te houden, voor zuiver water waar je hele huishouden dagelijks van drinkt. Alle filters vind je in de <Link href="/winkel" className="underline hover:text-ink">winkel</Link>, en het totaalplaatje lees je in <Link href="/kennisbank/wat-kost-een-waterzuiveringssysteem" className="underline hover:text-ink">wat kost een waterzuiveringssysteem</Link>.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MET VS ZONDER */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <Kop midden label="Het verschil" titel="Waarom kiezen voor dit osmosesysteem?" intro="Zet het naast een leven zonder, en het verschil spreekt voor zich." />
            <div className="relative mt-14 grid md:grid-cols-2 gap-4 md:gap-0 md:rounded-[2rem] md:overflow-hidden md:border md:border-edge md:shadow-xl md:shadow-ink/5">
              <div className="rounded-3xl md:rounded-none bg-bg p-8 md:p-10 lg:p-12">
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] text-dim`}>Zonder Water-zuivering</p>
                <ul className="mt-7 space-y-5">
                  {ZONDER.map((item) => (
                    <li key={item} className="flex items-start gap-3.5">
                      <span className="shrink-0 mt-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-edge/70 text-dim">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></svg>
                      </span>
                      <span className="text-dim">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative rounded-3xl md:rounded-none bg-ink text-white p-8 md:p-10 lg:p-12" style={DONKER}>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] text-amber`}>Met Water-zuivering</p>
                <ul className="mt-7 space-y-5">
                  {MET.map(([titel, beschrijving]) => (
                    <li key={titel} className="flex items-start gap-3.5">
                      <span className="shrink-0 mt-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-amber text-ink">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      <div>
                        <p className="font-semibold">{titel}</p>
                        <p className="mt-0.5 text-sm text-white/60">{beschrijving}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${mono.className} hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-14 h-14 rounded-full bg-amber text-ink text-xs font-semibold shadow-xl shadow-amber/30 z-10 ring-4 ring-surface`}>VS</div>
            </div>
            <div className="mt-10 text-center">
              <Link href="/aanmelden" className={btnPrimair}>Vraag vrijblijvend een offerte aan<Pijl /></Link>
            </div>
          </div>
        </section>

        {/* MINERALEN */}
        <section className="relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <Kop midden label="Optioneel" titel="Mineralen terug in je water" intro="Omgekeerde osmose is zo grondig dat ook goede mineralen worden meegefilterd. Het CTO-filter met mineralen in je osmosesysteem voegt na het membraan onder meer calcium en magnesium toe, voor een voller en natuurlijker glas water." />
            <div className="mt-12">
              <MineraalUitleg />
            </div>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/winkel/cto-filter-met-mineralen" className={btnLicht}>Bekijk het mineraalfilter</Link>
              <Link href="/3-weg-kraan" className="cursor-pointer text-sm font-bold text-dim hover:text-ink transition-colors underline underline-offset-4">Combineer met een 3-weg kraan</Link>
            </div>
          </div>
        </section>

        {/* TRAJECT + OFFERTE STARTEN (donker) */}
        <section id="traject" className="relative bg-ink text-white scroll-mt-24 overflow-hidden" style={DONKER}>
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
              <div className="lg:sticky lg:top-32">
                <Kop donker label="Offerte aanvragen" titel="Van aanvraag tot je eerste glas" intro="Een osmosesysteem kopen is bij ons geen doos die je zelf moet uitzoeken. Je begint hiernaast met één vraag, en wij regelen de rest." />
                <ul className={`${mono.className} mt-6 space-y-2 text-[11px] uppercase tracking-[0.14em] text-white/60`}>
                  {['Gratis en vrijblijvend', 'Klaar in minder dan een minuut', 'Prijs inclusief plaatsing'].map((punt) => (
                    <li key={punt} className="flex items-center gap-2"><Vinkje className="text-amber" />{punt}</li>
                  ))}
                </ul>
                <div className="hidden lg:block mt-8 relative rounded-[2rem] overflow-hidden border border-white/10 aspect-[4/3] shadow-2xl shadow-black/50">
                  <Image src="/assets/img/cabinet-install.png" alt="Osmosesysteem geplaatst in een keukenkastje onder de spoelbak" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                </div>
              </div>
              <div className="relative">
                <div className="absolute left-6 top-6 bottom-6 border-l border-dashed border-amber/50" aria-hidden="true" />
                <ol className="relative space-y-5">
                  {TRAJECT.map(([titel, tekst], i) => (
                    <li key={titel} className="relative flex gap-5">
                      <span className={`${mono.className} relative z-10 shrink-0 flex items-center justify-center w-12 h-12 rounded-full text-sm font-semibold ${i === 0 ? 'bg-amber text-ink shadow-lg shadow-amber/40 ring-4 ring-amber/20' : 'bg-ink border border-amber/50 text-amber'}`}>{String(i + 1).padStart(2, '0')}</span>
                      {i === 0 ? (
                        <div className="flex-1 rounded-3xl border border-amber/40 bg-white/[0.06] p-6 md:p-7 shadow-[0_0_60px_-25px_rgba(237,167,27,0.6)]">
                          <p className={`${mono.className} text-[10px] uppercase tracking-[0.18em] text-amber`}>Begin hier</p>
                          <p className="mt-1.5 font-display text-xl font-bold text-white">{titel}</p>
                          <p className="mt-2 text-sm text-white/65 leading-relaxed">Kies je keukenblad, dan staat je antwoord al klaar en ga je direct door naar de volgende vraag.</p>
                          <p className="mt-5 text-sm font-semibold text-white">Welk soort keukenblad heb je?</p>
                          <div className="mt-3 grid sm:grid-cols-2 gap-2.5">
                            {KEUKENBLADEN.map((blad) => (
                              <Link
                                key={blad}
                                href={`/aanmelden?keukenblad=${encodeURIComponent(blad)}`}
                                className="cursor-pointer group flex items-center justify-between gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-white hover:border-amber hover:bg-amber hover:text-ink transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber"
                              >
                                {blad}
                                <span className="shrink-0 opacity-40 group-hover:opacity-100 transition-opacity"><Pijl /></span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="flex-1 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                          <p className="font-display text-lg font-bold text-white">{titel}</p>
                          <p className="mt-2 text-sm text-white/60 leading-relaxed">{tekst}</p>
                        </div>
                      )}
                    </li>
                  ))}
                </ol>
                <div className="relative mt-6 pl-[4.25rem]">
                  <Link href="/osmose-installatie" className="cursor-pointer inline-flex items-center gap-2 text-sm font-bold text-white/80 hover:text-amber transition-colors underline underline-offset-4">
                    Meer over de installatie
                    <Pijl />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        {topReviews.length > 0 && (
          <section className="relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
              <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
                <Kop label="Ervaringen" titel="Wat klanten van hun osmosesysteem vinden" />
                {ratingTekst && (
                  <div className="flex items-center gap-4">
                    <p className="font-display text-5xl font-extrabold text-ink">{ratingTekst}</p>
                    <div>
                      <Sterren rating={avgRating} />
                      <p className={`${mono.className} mt-1 text-[11px] uppercase tracking-[0.14em] text-dim`}>{reviewCount} reviews</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="grid sm:grid-cols-3 gap-5">
                {topReviews.map((review) => (
                  <figure key={review.id} className="reveal flex flex-col rounded-3xl card p-7">
                    <svg width="28" height="22" viewBox="0 0 28 22" fill="none" aria-hidden="true" className="text-amber"><path d="M0 22V13C0 5.8 3.6 1.5 10.4 0l1.4 3.2C7.8 4.6 6 7.2 6 10h5.6v12H0zm16 0V13c0-7.2 3.6-11.5 10.4-13l1.4 3.2C23.8 4.6 22 7.2 22 10h5.6v12H16z" fill="currentColor" /></svg>
                    <blockquote className="mt-4 flex-1 text-ink leading-relaxed line-clamp-5">{review.review_text}</blockquote>
                    <figcaption className="mt-5 flex items-center justify-between border-t border-edge pt-4">
                      <span className="text-sm font-semibold text-ink">{review.name}{review.city ? <span className="font-normal text-dim"> · {review.city}</span> : null}</span>
                      <Sterren rating={review.rating} />
                    </figcaption>
                  </figure>
                ))}
              </div>
              <Link href="/reviews" className="cursor-pointer mt-8 inline-flex items-center gap-1.5 text-sm font-bold text-ink hover:text-amber-dark transition-colors">
                Lees alle reviews
                <Pijl />
              </Link>
            </div>
          </section>
        )}

        {/* SPECIFICATIES (donker) */}
        <section id="specificaties" className="relative bg-ink text-white scroll-mt-24" style={DONKER}>
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
            <div>
              <Kop donker label="Specificaties" titel="Technische gegevens van het osmosesysteem" intro="Alles op een rij. Twijfel je of het osmosesysteem bij jouw aansluiting of waterdruk past? Vraag het ons gerust bij je offerte." />
            </div>
            <dl className={`${mono.className} rounded-3xl border border-white/10 overflow-hidden`}>
              {SPECS.map(([naam, waarde], i) => (
                <div key={naam} className={`flex items-center justify-between gap-6 px-5 py-3.5 text-sm ${i % 2 === 0 ? 'bg-white/[0.03]' : ''} ${i > 0 ? 'border-t border-white/10' : ''}`}>
                  <dt className="text-white/50 uppercase text-[11px] tracking-[0.14em]">{naam}</dt>
                  <dd className="text-right text-white">{waarde}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* FAQ */}
        <section id="vragen" className="relative bg-surface border-b border-edge scroll-mt-24">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
            <div>
              <div className="lg:sticky lg:top-32">
                <Kop label="Vragen" titel="Veelgestelde vragen over het osmosesysteem" intro="Staat je vraag er niet tussen? Stuur ons een bericht, we denken graag met je mee." />
                <Link href="/contact" className={`${btnLicht} mt-6`}>Stel je vraag</Link>
              </div>
            </div>
            <div className="divide-y divide-edge border-y border-edge">
              {FAQ_ITEMS.map(([vraag, antwoord]) => (
                <details key={vraag} className="group py-5">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-6 font-display text-lg font-semibold text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber rounded">
                    {vraag}
                    <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-edge transition-colors group-open:bg-ink group-open:border-ink group-open:text-amber">
                      <svg className="transition-transform duration-300 group-open:rotate-45" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
                    </span>
                  </summary>
                  <p className="mt-3 pr-12 text-dim leading-relaxed">{antwoord}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA (donker) */}
        <section id="offerte-einde" className="relative bg-ink text-white overflow-hidden" style={DONKER}>
          <div className="glow w-[420px] h-[420px] bg-amber/20 -top-32 -right-32" />
          <div className="relative max-w-4xl mx-auto px-6 py-20 md:py-28 text-center">
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] text-amber`}>Volgende stap</p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05]">Klaar voor zuiver water uit je eigen kraan?</h2>
            <p className="mt-5 text-white/65 text-lg max-w-2xl mx-auto">Vraag een vrijblijvende offerte aan en ontdek wat het osmosesysteem van Water-zuivering voor jouw huishouden betekent.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link href="/aanmelden" className={btnPrimair}>Vraag vrijblijvend een offerte aan<Pijl /></Link>
              <Link href="/maatcheck" className={btnDonker}>Doe de maatcheck</Link>
            </div>
            <ul className={`${mono.className} mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.14em] text-white/50`}>
              <li>10 jaar garantie</li>
              <li>Geplaatst in 1 à 2 uur</li>
              {ratingTekst && <li>{ratingTekst} uit 5 · {reviewCount} reviews</li>}
            </ul>
          </div>
        </section>
      </main>

      <StickyOfferte ratingTekst={ratingTekst} reviewCount={reviewCount} monoClass={mono.className} />
      <Footer />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Osmosesysteem', url: 'https://www.water-zuivering.nl/osmosesysteem' },
        ]}
      />
      <ProductSchema
        name="Water-zuivering osmosesysteem"
        description="Osmosesysteem voor thuis met 3-traps filtratie (PPC, RO, CTO) en direct flow zonder tank. Verwijdert chloor, PFAS, medicijnresten en microplastics uit kraanwater. Inclusief vakkundige installatie en 10 jaar garantie."
        image="https://www.water-zuivering.nl/assets/img/countertop.png"
        url="https://www.water-zuivering.nl/osmosesysteem"
        rating={avgRating ? avgRating.toFixed(1) : null}
        reviewCount={reviewCount}
      />
      <FaqSchema items={FAQ_ITEMS} />
    </>
  );
}

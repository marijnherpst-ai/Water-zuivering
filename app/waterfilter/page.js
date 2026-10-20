import Image from 'next/image';
import { IBM_Plex_Mono } from 'next/font/google';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import FaqSchema from '@/components/FaqSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import RatingSchema from '@/components/RatingSchema';
import KraanKleurSwitcher from '@/components/KraanKleurSwitcher';
import PfasChecker from '@/components/PfasChecker';
import FilterKiezer from '@/components/FilterKiezer';
import WaterReis from '@/components/WaterReis';
import FilterLagen from '@/components/FilterLagen';
import { createClient } from '@/lib/supabase/server';

const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['500', '600'], display: 'swap' });

// Dark sections share the hero panel's look: ink, a fine technical grid and a soft amber glow.
const DONKER = {
  backgroundImage:
    'radial-gradient(circle at 85% 0%, rgba(237,167,27,0.14), transparent 50%), radial-gradient(circle at 0% 100%, rgba(127,211,255,0.06), transparent 45%), linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
  backgroundSize: 'auto, auto, 32px 32px, 32px 32px',
};

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} van de 5 sterren`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} width="14" height="14" viewBox="0 0 24 24" fill={n <= rating ? '#EDA71B' : 'none'} stroke="#EDA71B" strokeWidth="1.6" aria-hidden="true">
          <path d="M12 2l2.9 6.2 6.8.8-5 4.6 1.4 6.7L12 16.9 5.9 20.3l1.4-6.7-5-4.6 6.8-.8L12 2z" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  );
}

function Pill({ waarde }) {
  if (waarde === 'Ja') {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
        Ja
      </span>
    );
  }
  if (waarde === 'Deels') {
    return <span className="inline-flex items-center rounded-full bg-amber/15 px-3 py-1 text-xs font-bold text-amber-dark">Deels</span>;
  }
  return <span className="inline-flex items-center rounded-full bg-bg px-3 py-1 text-xs font-semibold text-dim">{waarde}</span>;
}

function Kop({ label, titel, intro, donker = false, midden = false, as = 'h2' }) {
  const H = as;
  return (
    <div className={midden ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}>
      <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] ${donker ? 'text-amber' : 'text-amber-dark'}`}>{label}</p>
      <H className={`mt-3 font-display text-3xl md:text-[2.5rem] font-extrabold tracking-tight leading-[1.08] ${donker ? 'text-white' : 'text-ink'}`}>{titel}</H>
      {intro && <p className={`mt-4 leading-relaxed ${donker ? 'text-white/65' : 'text-dim'}`}>{intro}</p>}
    </div>
  );
}

const Pijl = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

const ICONS = {
  lagen: 'M12 3l9 5-9 5-9-5 9-5zm-9 9l9 5 9-5M3 16l9 5 9-5',
  kraan: 'M12 3c3 4 6 7.5 6 11a6 6 0 01-12 0c0-3.5 3-7 6-11z',
  monteur: 'M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.6 2.6-2.4-.6-.6-2.4 2.6-2.6z',
  display: 'M4 5h16v11H4zM9 20h6M12 16v4',
  stil: 'M4 10v4h4l5 4V6L8 10H4zm13-1a4 4 0 010 6',
  schild: 'M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6l8-3zm-3.5 9l2.5 2.5 4.5-5',
};

export const dynamic = 'force-dynamic';

export const metadata = {
  alternates: { canonical: '/waterfilter' },
  title: 'Waterfilter kopen: de complete gids 2026 — Water-zuivering',
  description: 'Waterfilter kopen? Vergelijk filterkan, kraan-opzetstuk en osmosesysteem op grondigheid, gemak en prijs, en ontdek welk type bij jou past.',
};

const TYPES = [
  ['Filterkan', 'Goedkoopst en direct te gebruiken, maar filtert alleen chloor en smaakstoffen. PFAS, kalk en medicijnresten gaan er gewoon doorheen. Het patroon moet om de paar weken vervangen worden.'],
  ['Opzetstuk op de kraan', 'Klikt om je bestaande kraan heen, filtert continu zonder bijvullen. Vergelijkbare beperking als de filterkan: prima tegen smaak, niet tegen fijnere verontreinigingen.'],
  ['Waterfilter kraan (3-weg of geïntegreerd)', 'Een apart, compact systeem onder de gootsteen met een eigen kraantje erboven. Hier zit meestal een uitgebreider filterpakket achter, tot en met omgekeerde osmose.'],
  ['Omgekeerde-osmosesysteem', 'De meest grondige optie: een membraan dat op moleculair niveau filtert. Verwijdert kalk, lood, PFAS, medicijnresten en microplastics — niet alleen de smaak, maar ook wat je niet proeft.'],
];

const KOSTEN = [
  ['Filterkan', 'Een paar tientjes', 'Nieuw patroon elke 4 à 6 weken'],
  ['Opzetstuk', 'Een paar tientjes', 'Nieuw filter elke 2 à 3 maanden'],
  ['Osmosesysteem', 'Via offerte, inclusief plaatsing', 'Ongeveer €135 per jaar aan filters'],
];

const USPS = ['10 jaar garantie', 'Geplaatst in 1 à 2 uur', 'Filtert tot 99% van onzuiverheden', 'Eigen kraan op je aanrecht'];

const CIJFERS = [
  ['tot 99%', 'Filtratie'],
  ['1,58 L/min', 'Gefilterd water'],
  ['10,5 cm', 'Breedte'],
  ['10 jaar', 'Garantie'],
];

const INHOUD = [
  ['soorten', 'Vier soorten waterfilters'],
  ['kiezer', 'Welke past bij jou?'],
  ['vergelijking', 'Wat haalt elk filter eruit?'],
  ['proces', 'Het filterproces, laag voor laag'],
  ['kosten', 'Wat kost een waterfilter?'],
  ['inbegrepen', 'Wat je bij ons krijgt'],
  ['kraan', 'De 3-weg kraan'],
  ['kritiek', 'Kritiek op waterfilters'],
  ['vragen', 'Veelgestelde vragen'],
];

const MATRIX = [
  ['Chloorsmaak en -geur', 'Ja', 'Ja', 'Ja'],
  ['Kalk', 'Deels', 'Nauwelijks', 'Ja'],
  ['PFAS', 'Nauwelijks', 'Nauwelijks', 'Ja'],
  ['Medicijnresten', 'Nauwelijks', 'Nauwelijks', 'Ja'],
  ['Microplastics', 'Deels', 'Deels', 'Ja'],
  ['Onbeperkt water uit de kraan', 'Nee', 'Ja', 'Ja'],
];

const INBEGREPEN_ICONS = ['lagen', 'kraan', 'monteur', 'display', 'stil', 'schild'];

const INBEGREPEN = [
  ['Drie filtertrappen', 'Een PPC-voorfilter voor zand en roest, het RO-membraan voor de fijnste stoffen en een CTO-nafilter dat de smaak afrondt.'],
  ['Een eigen kraan', 'Gefilterd water komt uit een eigen kraan op je aanrecht. Liever één kraan voor alles? Kies dan een 3-weg kraan in chroom, geborsteld staal, goud of zwart.'],
  ['Plaatsing door onze monteur', 'Geen gedoe met slangen en aansluitingen: onze eigen monteur zet alles in 1 à 2 uur onder je aanrecht.'],
  ['Een slim display', 'Het systeem meldt zelf wanneer een filter op is, en waarschuwt bij een lekkage of te lage waterdruk.'],
  ['Stil en snel', 'Minder dan 48 dB en 1,58 liter gefilterd water per minuut. Een glas is in een paar tellen vol.'],
  ['10 jaar garantie', 'Gaat er een technisch onderdeel stuk, van membraan tot display, dan repareren of vervangen we het zonder kosten.'],
];

const KRITIEK = [
  ['"Nederlands kraanwater is al veilig."', 'Dat klopt, en dat zeggen wij ook. Een waterfilter is geen noodzaak. Het is een keuze voor wie verder wil gaan dan de wettelijke norm, bijvoorbeeld bij stoffen als PFAS die onder de grens blijven maar niet op nul staan.'],
  ['"In een waterfilter kunnen bacteriën groeien."', 'Ook dat klopt, als filters te lang blijven zitten. Daarom is onderhoud belangrijk. Ons systeem houdt dat voor je bij: het display geeft aan wanneer een filter vervangen moet worden.'],
  ['"Je filtert ook de goede mineralen eruit."', 'Bij omgekeerde osmose is dat zo. Wil je die mineralen terug, dan kies je voor een nafilter met mineralen dat calcium en magnesium weer aan het water toevoegt.'],
  ['"Osmose geeft ook afvalwater."', 'Klopt: het membraan spoelt de tegengehouden stoffen af naar de afvoer. Daarom sluiten we het systeem aan op je afvoer onder de gootsteen, zodat je er zelf niets van merkt.'],
];

const STAPPEN = [
  ['Vraag een offerte aan', 'Vertel ons kort over je keuken. Met de maatcheck zie je vooraf of het systeem in je kastje past.'],
  ['Plan de installatie', 'Onze monteur komt langs en plaatst systeem en kraan in 1 à 2 uur. Liever zelf monteren? Dat kan ook.'],
  ['Tap zuiver water', 'Vanaf dat moment komt er gefilterd water uit je eigen kraan. Filters bestel je pas als het display erom vraagt.'],
];

const FAQ = [
  ['Welke waterfilter is het beste?', 'Dat hangt af van wat je wilt oplossen. Voor alleen een betere smaak volstaat een filterkan of opzetstuk. Wil je ook kalk, PFAS en medicijnresten kwijt, dan is een omgekeerde-osmosesysteem de enige optie die dat daadwerkelijk verwijdert.'],
  ['Is een waterfilter nodig in Nederland?', 'Nederlands kraanwater voldoet aan strenge wettelijke normen en is veilig om te drinken. Een waterfilter is dus geen noodzaak, maar wel een manier om verder te gaan dan het wettelijk minimum — vooral relevant voor smaak en voor sporen van stoffen die onder de norm blijven maar niet op nul staan.'],
  ['Wat kost een waterfilter?', 'Een filterkan begin je al voor een paar tientjes, een opzetstuk vergelijkbaar. Een compleet osmosesysteem met eigen kraan is een grotere investering, maar filtert grondiger en heeft geen maandelijkse aanschaf van losse kannen of filters nodig.'],
  ['Hoe vaak moet ik een waterfilter vervangen?', 'Dat verschilt sterk per type: een filterkan-patroon gaat gemiddeld 4-6 weken mee, een opzetstuk 2-3 maanden. Bij ons osmosesysteem vervang je het voor- en nafilter ieder jaar en het membraan elke 2 jaar.'],
  ['Voegt een waterfilter ook mineralen toe?', 'Een gewoon filter niet. Omgekeerde osmose haalt zelfs de goede mineralen eruit. Met het CTO-nafilter met mineralen komen calcium en magnesium er na het membraan weer bij, voor een voller en ronder glas water.'],
  ['Waar kan ik een waterfilter kopen?', 'Filterkannen en opzetstukken vind je bij elke elektronicazaak of supermarkt. Een compleet osmosesysteem met eigen kraan koop je bij een gespecialiseerde aanbieder zoals Water-zuivering, inclusief plaatsing en garantie. Je vraagt eerst vrijblijvend een offerte aan.'],
  ['Hoeveel water levert een waterfilter met osmose?', 'Ons systeem levert 1,58 liter gefilterd water per minuut. Genoeg om in een paar tellen een glas te vullen of rustig een pan water te tappen.'],
  ['Verwijdert een waterfilter PFAS?', 'Alleen als er een omgekeerde-osmosemembraan in zit. Filterkannen en de meeste opzetstukken werken op basis van actieve kool, wat goed is tegen chloor en smaak, maar PFAS-moleculen grotendeels door laat.'],
  ['Wat is het verschil tussen een waterfilter en een waterontharder?', 'Een waterontharder haalt specifiek kalk uit het water via ionenwisseling. Een waterfilter (zeker met osmose) pakt een veel bredere groep aan stoffen aan, waaronder ook kalk, maar via een ander principe.'],
];

const btnPrimair = 'cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-lg shadow-amber/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber';
const btnLicht = 'cursor-pointer inline-flex items-center gap-2 rounded-full border-2 border-ink px-7 py-3.5 text-sm font-bold text-ink hover:bg-ink hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber';
const btnDonker = 'cursor-pointer inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-white hover:bg-white hover:text-ink transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber';

export default async function Page() {
  const supabase = await createClient();
  const { data: reviews } = await supabase
    .from('reviews')
    .select('id, name, city, rating, review_text, created_at')
    .eq('approved', true)
    .order('created_at', { ascending: false })
    .limit(3);

  const topReviews = reviews || [];

  const { data: ratingStats } = await supabase
    .from('reviews')
    .select('rating')
    .eq('approved', true);

  const reviewCount = ratingStats?.length || 0;
  const avgRating = reviewCount > 0
    ? (ratingStats.reduce((sum, r) => sum + r.rating, 0) / reviewCount).toFixed(1)
    : null;
  const ratingTekst = avgRating ? String(avgRating).replace('.', ',') : null;

  return (
    <>
      <RevealObserver />
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="glow drift2 w-[360px] h-[360px] bg-amber/10 top-10 -right-24" />
          <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] text-amber-dark`}>Waterfilter · koopgids 2026</p>
              <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight leading-[1.05]">
                <span className="relative inline-block">
                  Waterfilter
                  <svg className="absolute left-0 -bottom-2 w-full h-3 text-amber" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true"><path d="M2 8 Q 18 1 34 7 T 66 7 T 98 7 T 130 7 T 162 7 T 198 6" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" /></svg>
                </span>{' '}
                kopen? Zo kies je het type dat écht bij je past
              </h1>
              <p className="mt-6 text-dim text-lg leading-relaxed">
                Van een simpele filterkan tot een compleet omgekeerde-osmosesysteem: niet elke <strong className="text-ink">waterfilter</strong> doet hetzelfde. Deze gids zet de opties eerlijk naast elkaar, zodat je weet waar je precies voor betaalt.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm font-semibold text-ink">
                {USPS.map((usp) => (
                  <li key={usp} className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-amber-dark"><path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {usp}
                  </li>
                ))}
              </ul>
              {ratingTekst && (
                <Link href="/reviews" className="cursor-pointer mt-7 inline-flex items-center gap-3 rounded-full border border-edge bg-white/80 py-1.5 pl-2 pr-4 shadow-sm hover:border-amber transition-colors">
                  <span className="flex items-center gap-0.5 rounded-full bg-ink px-2.5 py-1">
                    <Stars rating={Math.round(Number(avgRating))} />
                  </span>
                  <span className="text-sm text-ink">
                    <strong className="font-bold">{ratingTekst}</strong>
                    <span className="text-dim"> uit 5 · {reviewCount} {reviewCount === 1 ? 'review' : 'reviews'}</span>
                  </span>
                </Link>
              )}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/aanmelden" className={btnPrimair}>
                  Vraag vrijblijvend een offerte aan
                  <Pijl />
                </Link>
                <Link href="/waterfilter-kraan" className={btnLicht}>
                  Bekijk onze waterfilter kraan
                </Link>
              </div>
              <p className={`${mono.className} mt-6 text-xs text-dim`}>
                Door het team van Water-zuivering · bijgewerkt oktober 2026
              </p>
            </div>
            <div className="relative">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative">
                <WaterReis monoClass={mono.className} />
              </div>
            </div>
          </div>
        </section>

        {/* SPECIFICATIES */}
        <section className="relative bg-ink text-white" style={DONKER}>
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className={`${mono.className} grid grid-cols-2 md:grid-cols-4 border border-white/15 rounded-2xl overflow-hidden bg-ink/40`}>
              {CIJFERS.map(([getal, label], i) => (
                <div key={label} className={`px-5 py-5 ${i % 2 === 1 ? 'border-l border-white/15' : ''} ${i > 1 ? 'border-t md:border-t-0 border-white/15' : ''} ${i === 2 ? 'md:border-l' : ''}`}>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/45">{label}</p>
                  <p className="mt-1.5 text-xl sm:text-2xl lg:text-3xl font-semibold text-amber whitespace-nowrap">{getal}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTRO + INHOUD */}
        <section className="relative bg-surface border-b border-edge">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
            <div>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] text-amber-dark`}>Waar je op let</p>
              <p className="mt-4 font-display text-2xl md:text-3xl font-bold leading-snug text-ink">
                Hoe fijner de filtratie, hoe meer stoffen eruit gaan, maar ook hoe groter de investering.
              </p>
              <p className="mt-6 text-dim leading-relaxed">
                Zoek je op "waterfilter", dan kom je een wirwar aan producten tegen: filterkannen van vijftien euro, opzetstukken voor de kraan, en complete systemen die duizenden liters per jaar zuiveren. Ze worden vaak in één adem genoemd, maar filteren totaal niet hetzelfde — en dat verschil merk je pas als je weet waar je op moet letten.
              </p>
              <p className="mt-4 text-dim leading-relaxed">
                Of je het nu een drinkwaterfilter, kraanwaterfilter of waterfilter voor thuis noemt: het doel is hetzelfde. Je wilt water filteren tot het schoner is en lekkerder smaakt dan wat er standaard uit de leiding komt. De vraag is alleen hoe ver je daarin wilt gaan. Hieronder zetten we de vier belangrijkste type waterfilters naast elkaar, zodat je een weloverwogen keuze kunt maken in plaats van te gokken.
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

        {/* SOORTEN */}
        <section id="soorten" className="relative scroll-mt-24">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <Kop
              midden
              label="Vier soorten"
              titel="Vier soorten waterfilters, van simpel tot compleet"
              intro="Gerangschikt van minst naar meest grondig — niet elk type waterfilter lost hetzelfde probleem op."
            />
            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {TYPES.map(([titel, uitleg], i) => {
                const top = i === TYPES.length - 1;
                return (
                  <div key={titel} className={`reveal relative flex flex-col rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1 ${top ? 'bg-ink text-white shadow-2xl shadow-ink/25' : 'card'}`} style={top ? DONKER : undefined}>
                    {top && (
                      <span className={`${mono.className} absolute -top-3 left-6 rounded-full bg-amber px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink`}>Meest grondig</span>
                    )}
                    <span className={`${mono.className} text-[11px] uppercase tracking-[0.2em] ${top ? 'text-amber' : 'text-amber-dark'}`}>Type {String(i + 1).padStart(2, '0')}</span>
                    <p className={`mt-3 font-display text-lg font-extrabold leading-tight ${top ? 'text-white' : 'text-ink'}`}>{titel}</p>
                    <p className={`mt-3 text-sm leading-relaxed flex-1 ${top ? 'text-white/70' : 'text-dim'}`}>{uitleg}</p>
                    <div className="mt-6">
                      <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em] ${top ? 'text-white/50' : 'text-dim'}`}>Grondigheid</p>
                      <div className="mt-2 flex gap-1.5" aria-label={`Grondigheid ${i + 1} van 4`}>
                        {[0, 1, 2, 3].map((n) => (
                          <span key={n} className={`h-1.5 flex-1 rounded-full ${n <= i ? 'bg-amber' : top ? 'bg-white/15' : 'bg-edge'}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="mt-10 text-dim leading-relaxed max-w-3xl mx-auto text-center">
              Twijfel je tussen de laatste twee opties? We zetten ze uitgebreider tegenover elkaar in <Link href="/kennisbank/beste-waterfilter-voor-thuis" className="underline hover:text-ink">beste waterfilter voor thuis</Link>. Weet je al welk probleem je wilt oplossen, zoals chloor, kalk of PFAS? Dan helpt <Link href="/drinkwater-filter" className="underline hover:text-ink">drinkwater filter kiezen per probleem</Link> je sneller verder.
            </p>
          </div>
        </section>

        {/* KIEZER (donker) */}
        <section id="kiezer" className="relative bg-ink text-white scroll-mt-24 overflow-hidden" style={DONKER}>
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Kop
                donker
                label="Waterfilter kiezer"
                titel="Welke waterfilter past bij jou? Drie vragen, eerlijk advies"
                intro="Niet iedereen heeft een osmosesysteem nodig. Beantwoord drie korte vragen en je ziet welk type waterfilter bij jouw situatie past. Soms is dat een simpele filterkan, en dan zeggen we dat ook."
              />
              <ul className={`${mono.className} mt-8 space-y-2 text-xs text-white/55`}>
                <li>— Duurt minder dan een halve minuut</li>
                <li>— Geen e-mailadres nodig</li>
              </ul>
            </div>
            <div className="text-ink">
              <FilterKiezer />
            </div>
          </div>
        </section>

        {/* VERGELIJKING */}
        <section id="vergelijking" className="relative scroll-mt-24">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <Kop
              label="Vergelijking"
              titel="Welke waterfilter haalt wat uit je water?"
              intro={'Op de verpakking belooft bijna elk waterfilter "zuiver water". Deze tabel laat zien wat de verschillende typen in de praktijk aankunnen. Bij filterkannen en opzetstukken verschilt het per merk en patroon, dus zie het als richtlijn.'}
            />
            <div className="mt-10 overflow-x-auto rounded-3xl card px-2 pt-3 pb-2">
              <table className="w-full text-sm text-left border-separate border-spacing-0">
                <thead>
                  <tr>
                    <th className="p-4 md:p-5 align-bottom font-display text-ink">Wat wil je kwijt?</th>
                    <th className="p-4 md:p-5 align-bottom font-display text-ink">Filterkan</th>
                    <th className="p-4 md:p-5 align-bottom font-display text-ink">Opzetstuk</th>
                    <th className="p-4 md:p-5 align-bottom font-display text-ink bg-amber/[0.12] border-x border-t border-amber/50 rounded-t-2xl">
                      <span className={`${mono.className} block text-[9px] font-semibold uppercase tracking-[0.16em] text-amber-dark`}>Onze keuze</span>
                      Osmosesysteem
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {MATRIX.map(([stof, kan, opzet, ro], i) => {
                    const laatste = i === MATRIX.length - 1;
                    return (
                      <tr key={stof}>
                        <th className="p-4 md:p-5 border-t border-edge font-semibold text-ink">{stof}</th>
                        <td className="p-4 md:p-5 border-t border-edge"><Pill waarde={kan} /></td>
                        <td className="p-4 md:p-5 border-t border-edge"><Pill waarde={opzet} /></td>
                        <td className={`p-4 md:p-5 bg-amber/[0.06] border-x border-t border-t-amber/20 border-x-amber/50 ${laatste ? 'border-b border-b-amber/50 rounded-b-2xl' : ''}`}><Pill waarde={ro} /></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-16 grid lg:grid-cols-2 gap-10 items-start rounded-3xl bg-surface border border-edge p-6 md:p-10">
              <div>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] text-amber-dark`}>PFAS-check</p>
                <h3 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Check eerst wat er in jouw kraanwater zit</h3>
                <p className="mt-4 text-dim leading-relaxed">
                  Of een drinkwaterfilter zinvol is, hangt af van wat er bij jou uit de leiding komt. Vul je postcode of woonplaats in en zie direct hoe het PFAS-gehalte in jouw regio zich verhoudt tot de RIVM-advieswaarde.
                </p>
                <p className="mt-3 text-sm text-dim">
                  Meer uitleg over de meetwaarden vind je op de pagina <Link href="/pfas-check" className="underline hover:text-ink">PFAS-check</Link>.
                </p>
              </div>
              <PfasChecker />
            </div>
          </div>
        </section>

        {/* FILTERPROCES (donker) */}
        <section id="proces" className="relative bg-ink text-white scroll-mt-24" style={DONKER}>
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <Kop
              donker
              label="Het filterproces"
              titel="Zo werkt ons waterfilter, laag voor laag"
              intro="Een filterkan of kraan-opzetstuk werkt met actieve kool: goed tegen chloor en smaakstoffen, maar de poriën zijn te grof om kleinere moleculen zoals PFAS tegen te houden. Ons waterfilter stuurt het water door drie lagen die elk een eigen taak hebben. Scroll mee en zie wat er in elke laag gebeurt."
            />
            <div className="mt-14">
              <FilterLagen monoClass={mono.className} />
            </div>
            <p className="mt-12 text-white/55 text-sm">
              Wil je precies weten hoe het membraan werkt? Lees onze uitleg over de <Link href="/kennisbank/omgekeerde-osmose-filter" className="underline text-white/80 hover:text-white">omgekeerde osmose filter</Link>. Alle filters bestel je los in de <Link href="/winkel" className="underline text-white/80 hover:text-white">winkel</Link>.
            </p>
          </div>
        </section>

        {/* KOSTEN */}
        <section id="kosten" className="relative scroll-mt-24">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <Kop label="Kosten" titel="Wat kost een waterfilter, per type?" />
            <div className="mt-10 grid md:grid-cols-3 gap-5">
              {KOSTEN.map(([type, aanschaf, doorlopend], i) => {
                const top = i === KOSTEN.length - 1;
                return (
                  <div key={type} className={`reveal rounded-3xl p-7 ${top ? 'bg-ink text-white shadow-2xl shadow-ink/25' : 'card'}`} style={top ? DONKER : undefined}>
                    <p className={`font-display text-xl font-extrabold ${top ? 'text-white' : 'text-ink'}`}>{type}</p>
                    <dl className="mt-6 space-y-4 text-sm">
                      <div>
                        <dt className={`${mono.className} text-[10px] uppercase tracking-[0.16em] ${top ? 'text-white/50' : 'text-dim'}`}>Aanschaf</dt>
                        <dd className={`mt-1 font-semibold ${top ? 'text-white' : 'text-ink'}`}>{aanschaf}</dd>
                      </div>
                      <div>
                        <dt className={`${mono.className} text-[10px] uppercase tracking-[0.16em] ${top ? 'text-white/50' : 'text-dim'}`}>Doorlopend</dt>
                        <dd className={`mt-1 font-semibold ${top ? 'text-amber' : 'text-ink'}`}>{doorlopend}</dd>
                      </div>
                    </dl>
                  </div>
                );
              })}
            </div>
            <div className="mt-10 max-w-3xl space-y-4 text-dim leading-relaxed">
              <p>
                De prijs loopt sterk uiteen, en dat is direct gekoppeld aan hoe grondig een waterfilter werkt. Een filterkan of opzetstuk is de laagste instapkosten, maar de doorlopende kosten (nieuwe patronen, elke paar weken tot maanden) tikken op jaarbasis alsnog aardig aan. Een compleet omgekeerde-osmosesysteem kost meer bij aanschaf, maar de filters gaan een stuk langer mee — bij ons het voor- en nafilter een jaar en het membraan twee jaar. Gemiddeld kom je zo op ongeveer €135 per jaar aan filters, voor onbeperkt gefilterd water.
              </p>
              <p>
                Reken je het helemaal door inclusief wat je bespaart op flessenwater, dan lees je dat in <Link href="/kennisbank/wat-kost-een-waterzuiveringssysteem" className="underline hover:text-ink">wat kost een waterzuiveringssysteem</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* INBEGREPEN (donker) */}
        <section id="inbegrepen" className="relative bg-ink text-white scroll-mt-24 overflow-hidden" style={DONKER}>
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 items-center">
              <div>
                <Kop
                  donker
                  label="Ons waterfilter"
                  titel="Dit krijg je als je bij ons een waterfilter koopt"
                  intro="Bij Water-zuivering verkopen we geen filterkannen of opzetstukken — we geloven dat de moeite van een echt systeem het waard is als je toch al voor een waterfilter kiest. Geen los apparaat in een doos, maar een compleet systeem dat geplaatst en wel in je keuken staat."
                />
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/osmosesysteem" className={btnPrimair}>
                    Bekijk het osmosesysteem
                    <Pijl />
                  </Link>
                  <Link href="/3-weg-kraan" className={btnDonker}>
                    Kies je kraan
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="glow w-80 h-80 bg-amber/20" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 aspect-square shadow-2xl shadow-black/50">
                  <Image src="/assets/img/cabinet-install.png" alt="Waterfilter met omgekeerde osmose van Water-zuivering, geplaatst in een keukenkastje onder het aanrecht" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                  <div className={`${mono.className} absolute left-4 bottom-4 rounded-full bg-ink/80 backdrop-blur px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-white/80`}>10,5 cm breed · staand of liggend</div>
                </div>
              </div>
            </div>
            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {INBEGREPEN.map(([titel, uitleg], i) => (
                <div key={titel} className="reveal rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-amber/40 hover:bg-white/[0.07]">
                  <span className="flex items-center justify-center w-11 h-11 rounded-2xl bg-amber/15 text-amber">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={ICONS[INBEGREPEN_ICONS[i]]} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  <p className="mt-4 font-display font-bold text-white">{titel}</p>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">{uitleg}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KRAAN */}
        <section id="kraan" className="relative bg-surface border-b border-edge overflow-hidden scroll-mt-24">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Kop
                label="De 3-weg kraan"
                titel="Eén kraan voor gewoon én gefilterd water"
                intro="Geen tweede kraantje op je aanrecht? Met de 3-weg kraan vervang je je huidige keukenkraan door één kraan die alles doet: gewoon kraanwater, gefilterd water en, met een mineraalfilter, gemineraliseerd water. Je wisselt met één simpele omschakelaar, zonder extra gat in je aanrecht. Onze monteur sluit hem in één moeite mee aan."
              />
              <p className="mt-4 text-dim leading-relaxed">
                Klik op een kleur om te zien hoe hij eruitziet. Twijfel je? Kijk dan naar het beslag van je keukenkastjes of de kleur van je spoelbak: daar sluit de kraan meestal het mooist op aan.
              </p>
              <Link href="/3-weg-kraan" className="cursor-pointer mt-6 inline-flex items-center gap-2 text-sm font-bold text-ink underline hover:text-amber-dark">
                Alles over de 3-weg kraan
              </Link>
            </div>
            <div className="max-w-sm w-full mx-auto">
              <KraanKleurSwitcher />
            </div>
          </div>
        </section>

        {/* KRITIEK */}
        <section id="kritiek" className="relative scroll-mt-24">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <Kop
              label="Eerlijk is eerlijk"
              titel="Kritiek op waterfilters: wat klopt ervan?"
              intro="Wie zich verdiept in waterfilters, leest ook kritische geluiden, onder meer van drinkwaterbedrijven. Die nemen we serieus. Dit zijn de vier punten die het vaakst terugkomen, met ons eerlijke antwoord."
            />
            <div className="mt-10 grid md:grid-cols-2 gap-5">
              {KRITIEK.map(([punt, antwoord]) => (
                <div key={punt} className="reveal rounded-3xl card overflow-hidden">
                  <div className="px-7 pt-7 pb-5">
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em] text-dim`}>Wat critici zeggen</p>
                    <p className="mt-2 font-display text-xl font-bold text-ink leading-snug">{punt}</p>
                  </div>
                  <div className="mx-7 mb-7 rounded-2xl bg-bg p-5">
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em] text-amber-dark`}>Ons antwoord</p>
                    <p className="mt-2 text-sm text-dim leading-relaxed">{antwoord}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STAPPEN */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <Kop midden label="In drie stappen" titel="Zo koop je een waterfilter bij Water-zuivering" />
            <div className="relative mt-14 grid md:grid-cols-3 gap-5">
              <div className="hidden md:block absolute top-[3.25rem] left-[16%] right-[16%] border-t border-dashed border-amber" aria-hidden="true" />
              {STAPPEN.map(([titel, uitleg], i) => (
                <div key={titel} className="reveal relative rounded-3xl card p-7 text-center">
                  <span className={`${mono.className} mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-ink text-amber text-sm font-semibold ring-4 ring-surface`}>{String(i + 1).padStart(2, '0')}</span>
                  <p className="mt-5 font-display text-lg font-bold text-ink">{titel}</p>
                  <p className="mt-2 text-sm text-dim leading-relaxed">{uitleg}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-center text-dim">
              Meer over de plaatsing lees je bij <Link href="/osmose-installatie" className="underline hover:text-ink">osmose installatie</Link>. Twijfel je over de ruimte? Doe de <Link href="/maatcheck" className="underline hover:text-ink">maatcheck</Link>.
            </p>
          </div>
        </section>

        {/* REVIEWS */}
        {topReviews.length > 0 && (
          <section className="relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
              <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
                <Kop label="Ervaringen" titel="Wat klanten van ons vinden" />
                {ratingTekst && (
                  <div className="flex items-center gap-4">
                    <p className="font-display text-5xl font-extrabold text-ink">{ratingTekst}</p>
                    <div>
                      <Stars rating={Math.round(Number(avgRating))} />
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
                      <Stars rating={review.rating} />
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

        {/* FAQ */}
        <section id="vragen" className="relative bg-surface border-t border-edge scroll-mt-24">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
            <div>
              <div className="lg:sticky lg:top-32">
                <Kop label="Vragen" titel="Veelgestelde vragen over waterfilters" intro="Staat je vraag er niet tussen? Stuur ons een bericht, we denken graag met je mee." />
                <Link href="/contact" className={`${btnLicht} mt-6`}>Stel je vraag</Link>
              </div>
            </div>
            <div className="divide-y divide-edge border-y border-edge">
              {FAQ.map(([vraag, antwoord]) => (
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
        <section className="relative bg-ink text-white overflow-hidden" style={DONKER}>
          <div className="glow w-[420px] h-[420px] bg-amber/20 -top-32 -right-32" />
          <div className="relative max-w-4xl mx-auto px-6 py-20 md:py-28 text-center">
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] text-amber`}>Volgende stap</p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05]">Klaar voor een waterfilter die écht grondig filtert?</h2>
            <p className="mt-5 text-white/65 text-lg max-w-2xl mx-auto">Vraag een vrijblijvende offerte aan en ontdek wat een Water-zuivering systeem voor jouw huishouden betekent.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link href="/aanmelden" className={btnPrimair}>
                Vraag vrijblijvend een offerte aan
                <Pijl />
              </Link>
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

      <Footer />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Waterfilter', url: 'https://www.water-zuivering.nl/waterfilter' },
        ]}
      />
      <FaqSchema items={FAQ} />
      <RatingSchema rating={avgRating} count={reviewCount} />
    </>
  );
}

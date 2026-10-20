import Image from 'next/image';
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
import { createClient } from '@/lib/supabase/server';

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
  ['99%', 'van de onzuiverheden gefilterd'],
  ['1,58 L', 'gefilterd water per minuut'],
  ['10,5 cm', 'breed onder je aanrecht'],
  ['10 jaar', 'garantie op het systeem'],
];

const INHOUD = [
  ['soorten', 'Vier soorten waterfilters'],
  ['kiezer', 'Welke past bij jou?'],
  ['vergelijking', 'Wat haalt elk filter eruit?'],
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
  ['"Je filtert ook de goede mineralen eruit."', 'Bij omgekeerde osmose is dat zo. Wil je die mineralen terug, dan kies je voor een nafilter met mineralen dat ze weer aan het water toevoegt.'],
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
  ['Waar kan ik een waterfilter kopen?', 'Filterkannen en opzetstukken vind je bij elke elektronicazaak of supermarkt. Een compleet osmosesysteem met eigen kraan koop je bij een gespecialiseerde aanbieder zoals Water-zuivering, inclusief plaatsing en garantie. Je vraagt eerst vrijblijvend een offerte aan.'],
  ['Hoeveel water levert een waterfilter met osmose?', 'Ons systeem levert 1,58 liter gefilterd water per minuut. Genoeg om in een paar tellen een glas te vullen of rustig een pan water te tappen.'],
  ['Verwijdert een waterfilter PFAS?', 'Alleen als er een omgekeerde-osmosemembraan in zit. Filterkannen en de meeste opzetstukken werken op basis van actieve kool, wat goed is tegen chloor en smaak, maar PFAS-moleculen grotendeels door laat.'],
  ['Wat is het verschil tussen een waterfilter en een waterontharder?', 'Een waterontharder haalt specifiek kalk uit het water via ionenwisseling. Een waterfilter (zeker met osmose) pakt een veel bredere groep aan stoffen aan, waaronder ook kalk, maar via een ander principe.'],
];

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
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Waterfilter</span>
              <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
                Waterfilter kopen? Zo kies je het type dat écht bij je past
              </h1>
              <p className="mt-5 text-dim text-lg">
                Van een simpele filterkan tot een compleet omgekeerde-osmosesysteem: niet elke <strong className="text-ink">waterfilter</strong> doet hetzelfde. Deze gids zet de opties eerlijk naast elkaar, zodat je weet waar je precies voor betaalt.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-sm font-semibold text-ink">
                {USPS.map((usp) => (
                  <li key={usp} className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-amber-dark"><path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {usp}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/aanmelden" className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-lg shadow-amber/25">
                  Vraag vrijblijvend een offerte aan
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
                <Link href="/waterfilter-kraan" className="cursor-pointer inline-flex items-center gap-2 rounded-full border-2 border-ink px-7 py-3.5 text-sm font-bold text-ink hover:bg-bg transition-colors">
                  Bekijk onze waterfilter kraan
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-[2rem] overflow-hidden border border-edge aspect-[4/5]">
                <Image src="/assets/img/glas-water.webp" alt="Glas helder water uit een waterfilter met osmose" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" priority />
              </div>
            </div>
          </div>
        </section>

        {/* CIJFERS */}
        <section className="relative bg-ink text-white">
          <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {CIJFERS.map(([getal, label]) => (
              <div key={label} className="text-center">
                <p className="font-display text-3xl md:text-4xl font-extrabold text-amber">{getal}</p>
                <p className="mt-1 text-sm text-white/70">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INTRO */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
            <p className="text-dim leading-relaxed">
              Zoek je op "waterfilter", dan kom je een wirwar aan producten tegen: filterkannen van vijftien euro, opzetstukken voor de kraan, en complete systemen die duizenden liters per jaar zuiveren. Ze worden vaak in één adem genoemd, maar filteren totaal niet hetzelfde — en dat verschil merk je pas als je weet waar je op moet letten.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Of je het nu een drinkwaterfilter, kraanwaterfilter of waterfilter voor thuis noemt: het doel is hetzelfde. Je wilt water filteren tot het schoner is en lekkerder smaakt dan wat er standaard uit de leiding komt. De vraag is alleen hoe ver je daarin wilt gaan.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              De kortste samenvatting: hoe fijner de filtratie, hoe meer stoffen eruit gaan — maar ook hoe groter de investering. Hieronder zetten we de vier belangrijkste type waterfilters naast elkaar, zodat je een weloverwogen keuze kunt maken in plaats van te gokken.
            </p>
            <nav aria-label="Inhoud van deze pagina" className="mt-8 rounded-2xl border border-edge p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-dark">Op deze pagina</p>
              <ol className="mt-3 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                {INHOUD.map(([id, label], i) => (
                  <li key={id}>
                    <a href={`#${id}`} className="cursor-pointer inline-flex gap-2 text-ink hover:text-amber-dark">
                      <span className="text-dim tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                      {label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </section>

        {/* TYPES */}
        <section id="soorten" className="relative scroll-mt-24">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-center">Vier soorten waterfilters, van simpel tot compleet</h2>
            <p className="mt-3 text-dim text-center max-w-xl mx-auto">Gerangschikt van minst naar meest grondig — niet elk type lost hetzelfde probleem op.</p>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {TYPES.map(([titel, uitleg], i) => {
                const top = i === TYPES.length - 1;
                return (
                  <div key={titel} className={`reveal relative flex flex-col rounded-3xl p-6 transition-transform hover:-translate-y-1 ${top ? 'bg-ink text-white shadow-xl shadow-ink/20' : 'card'}`}>
                    {top && (
                      <span className="absolute -top-3 left-6 rounded-full bg-amber px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink">Meest grondig</span>
                    )}
                    <span className={`text-xs font-bold uppercase tracking-widest ${top ? 'text-amber' : 'text-amber-dark'}`}>Type {i + 1}</span>
                    <p className={`mt-2 font-display text-lg font-extrabold leading-tight ${top ? 'text-white' : 'text-ink'}`}>{titel}</p>
                    <p className={`mt-3 text-sm leading-relaxed flex-1 ${top ? 'text-white/70' : 'text-dim'}`}>{uitleg}</p>
                    <div className="mt-5">
                      <p className={`text-[11px] font-bold uppercase tracking-wider ${top ? 'text-white/50' : 'text-dim'}`}>Grondigheid</p>
                      <div className="mt-2 flex gap-1.5" aria-label={`Grondigheid ${i + 1} van 4`}>
                        {[0, 1, 2, 3].map((n) => (
                          <span key={n} className={`h-2 flex-1 rounded-full ${n <= i ? 'bg-amber' : top ? 'bg-white/15' : 'bg-edge'}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="mt-8 text-dim leading-relaxed max-w-3xl mx-auto text-center">
              Twijfel je tussen de laatste twee opties? We zetten ze uitgebreider tegenover elkaar in <Link href="/kennisbank/beste-waterfilter-voor-thuis" className="underline hover:text-ink">beste waterfilter voor thuis</Link>. Weet je al welk probleem je wilt oplossen, zoals chloor, kalk of PFAS? Dan helpt <Link href="/drinkwater-filter" className="underline hover:text-ink">drinkwater filter kiezen per probleem</Link> je sneller verder.
            </p>
          </div>
        </section>

        {/* KIEZER */}
        <section id="kiezer" className="relative bg-surface border-y border-edge scroll-mt-24">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Waterfilter kiezer</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Welke waterfilter past bij jou? Drie vragen, eerlijk advies</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Niet iedereen heeft een osmosesysteem nodig. Beantwoord drie korte vragen en je ziet welk type waterfilter bij jouw situatie past. Soms is dat een simpele filterkan, en dan zeggen we dat ook.
              </p>
            </div>
            <FilterKiezer />
          </div>
        </section>

        {/* MATRIX */}
        <section id="vergelijking" className="relative scroll-mt-24">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Welke waterfilter haalt wat uit je water?</h2>
            <p className="mt-4 text-dim leading-relaxed max-w-3xl">
              Op de verpakking belooft bijna elk filter "zuiver water". Deze tabel laat zien wat de verschillende typen in de praktijk aankunnen. Bij filterkannen en opzetstukken verschilt het per merk en patroon, dus zie het als richtlijn.
            </p>
            <div className="mt-8 overflow-x-auto rounded-3xl card">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr>
                    <th className="p-4 md:p-5 font-display text-ink">Wat wil je kwijt?</th>
                    <th className="p-4 md:p-5 font-display text-ink">Filterkan</th>
                    <th className="p-4 md:p-5 font-display text-ink">Opzetstuk</th>
                    <th className="p-4 md:p-5 font-display text-ink bg-amber/10 rounded-t-2xl">Osmosesysteem</th>
                  </tr>
                </thead>
                <tbody>
                  {MATRIX.map(([stof, kan, opzet, ro]) => (
                    <tr key={stof} className="border-t border-edge">
                      <th className="p-4 md:p-5 font-semibold text-ink">{stof}</th>
                      <td className="p-4 md:p-5"><Pill waarde={kan} /></td>
                      <td className="p-4 md:p-5"><Pill waarde={opzet} /></td>
                      <td className="p-4 md:p-5 bg-amber/10"><Pill waarde={ro} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-12 grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h3 className="font-display text-xl md:text-2xl font-extrabold tracking-tight">Check eerst wat er in jouw kraanwater zit</h3>
                <p className="mt-3 text-dim leading-relaxed">
                  Of een drinkwaterfilter zinvol is, hangt af van wat er bij jou uit de leiding komt. Vul je postcode of woonplaats in en zie direct hoe het PFAS-gehalte in jouw regio zich verhoudt tot de RIVM-advieswaarde.
                </p>
                <p className="mt-3 text-sm text-dim">
                  Meer uitleg over de meetwaarden vind je op de pagina <Link href="/pfas-check" className="underline hover:text-ink">PFAS-check</Link>.
                </p>
              </div>
              <div>
                <PfasChecker />
              </div>
            </div>
          </div>
        </section>

        {/* WAAROM OSMOSE GRONDIGER IS */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
              <Image src="/assets/img/filters-closeup.png" alt="Close-up van filtratielagen in een waterfilter" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Het verschil zit in de poriegrootte</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waarom een filterkan minder doet dan het lijkt</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Een filterkan of kraan-opzetstuk werkt met actieve kool: goed tegen chloor en smaakstoffen, maar de poriën zijn simpelweg te grof om kleinere moleculen zoals PFAS tegen te houden. Een omgekeerde-osmosemembraan heeft poriën die honderden keren kleiner zijn — klein genoeg om ook die onzichtbare stoffen tegen te houden.
              </p>
              <p className="mt-4 text-dim leading-relaxed">
                Wil je precies weten hoe dat membraan werkt? Lees onze uitleg over de <Link href="/kennisbank/omgekeerde-osmose-filter" className="underline hover:text-ink">omgekeerde osmose filter</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* PRIJS OVERZICHT */}
        <section id="kosten" className="relative scroll-mt-24">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat kost een waterfilter, per type?</h2>
            <div className="mt-8 grid md:grid-cols-3 gap-5">
              {KOSTEN.map(([type, aanschaf, doorlopend], i) => {
                const top = i === KOSTEN.length - 1;
                return (
                  <div key={type} className={`reveal rounded-3xl p-6 ${top ? 'bg-amber/10 border-2 border-amber' : 'card'}`}>
                    <p className="font-display text-lg font-extrabold text-ink">{type}</p>
                    <dl className="mt-4 space-y-3 text-sm">
                      <div>
                        <dt className="text-[11px] font-bold uppercase tracking-wider text-dim">Aanschaf</dt>
                        <dd className="mt-0.5 font-semibold text-ink">{aanschaf}</dd>
                      </div>
                      <div>
                        <dt className="text-[11px] font-bold uppercase tracking-wider text-dim">Doorlopend</dt>
                        <dd className="mt-0.5 font-semibold text-ink">{doorlopend}</dd>
                      </div>
                    </dl>
                  </div>
                );
              })}
            </div>
            <p className="mt-4 text-dim leading-relaxed">
              De prijs loopt sterk uiteen, en dat is direct gekoppeld aan hoe grondig een filter werkt. Een filterkan of opzetstuk is de laagste instapkosten, maar de doorlopende kosten (nieuwe patronen, elke paar weken tot maanden) tikken op jaarbasis alsnog aardig aan. Een compleet omgekeerde-osmosesysteem kost meer bij aanschaf, maar de filters gaan een stuk langer mee — bij ons het voor- en nafilter een jaar en het membraan twee jaar. Gemiddeld kom je zo op ongeveer €135 per jaar aan filters, voor onbeperkt gefilterd water.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Reken je het helemaal door inclusief wat je bespaart op flessenwater, dan lees je dat in <Link href="/kennisbank/wat-kost-een-waterzuiveringssysteem" className="underline hover:text-ink">wat kost een waterzuiveringssysteem</Link>.
            </p>
          </div>
        </section>

        {/* PRODUCT TIE-IN */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Onze aanpak</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wij kiezen bewust voor omgekeerde osmose</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Bij Water-zuivering verkopen we geen filterkannen of opzetstukken — we geloven dat de moeite van een echt systeem het waard is als je toch al voor een waterfilter kiest. Ons systeem past compact onder je gootsteen, wordt in 1 à 2 uur geplaatst door onze eigen monteur, en levert zuiver water via een eigen kraantje op je aanrecht.
              </p>
              <p className="mt-4 text-dim leading-relaxed">
                Inclusief 10 jaar garantie, en zonder dat je ooit nog een filterkan hoeft bij te vullen.
              </p>
            </div>
            <div className="relative">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/systeem-liggend.png" alt="Compleet osmosewaterfiltersysteem van Water-zuivering" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain p-6 bg-white" />
              </div>
            </div>
          </div>
        </section>

        {/* INBEGREPEN */}
        <section id="inbegrepen" className="relative scroll-mt-24">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Ons waterfilter</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Dit krijg je als je bij ons een waterfilter koopt</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Geen los apparaat in een doos, maar een compleet systeem dat geplaatst en wel in je keuken staat. Dit zit er allemaal bij:
              </p>
            </div>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {INBEGREPEN.map(([titel, uitleg], i) => (
                <div key={titel} className="reveal rounded-3xl card p-6 transition-transform hover:-translate-y-1">
                  <span className="flex items-center justify-center w-11 h-11 rounded-2xl bg-amber/15 text-amber-dark">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={ICONS[INBEGREPEN_ICONS[i]]} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  <p className="mt-4 font-display font-bold text-ink">{titel}</p>
                  <p className="mt-2 text-sm text-dim leading-relaxed">{uitleg}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/osmosesysteem" className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-lg shadow-amber/25">
                Bekijk het osmosesysteem
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              <Link href="/3-weg-kraan" className="cursor-pointer inline-flex items-center gap-2 rounded-full border-2 border-ink px-7 py-3.5 text-sm font-bold text-ink hover:bg-bg transition-colors">
                Kies je kraan
              </Link>
            </div>
          </div>
        </section>

        {/* KRAAN KLEUREN */}
        <section id="kraan" className="relative bg-surface border-y border-edge overflow-hidden scroll-mt-24">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">De 3-weg kraan</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Eén kraan voor gewoon én gefilterd water</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Geen tweede kraantje op je aanrecht? Met de 3-weg kraan vervang je je huidige keukenkraan door één kraan die alles doet: gewoon kraanwater, gefilterd water en, met een mineraalfilter, gemineraliseerd water. Je wisselt met één simpele omschakelaar, zonder extra gat in je aanrecht. Onze monteur sluit hem in één moeite mee aan.
              </p>
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
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Kritiek op waterfilters: wat klopt ervan?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Wie zich verdiept in waterfilters, leest ook kritische geluiden, onder meer van drinkwaterbedrijven. Die nemen we serieus. Dit zijn de vier punten die het vaakst terugkomen, met ons eerlijke antwoord.
            </p>
            <div className="mt-8 grid md:grid-cols-2 gap-5">
              {KRITIEK.map(([punt, antwoord]) => (
                <div key={punt} className="reveal rounded-3xl card overflow-hidden">
                  <div className="bg-bg px-6 py-5 border-b border-edge">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-dim">Wat critici zeggen</p>
                    <p className="mt-1.5 font-display text-lg font-bold italic text-ink">{punt}</p>
                  </div>
                  <div className="px-6 py-5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-amber-dark">Ons antwoord</p>
                    <p className="mt-1.5 text-sm text-dim leading-relaxed">{antwoord}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STAPPEN */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-center">Zo koop je een waterfilter bij Water-zuivering</h2>
            <div className="relative mt-12 grid md:grid-cols-3 gap-5">
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] border-t-2 border-dashed border-amber/50" aria-hidden="true" />
              {STAPPEN.map(([titel, uitleg], i) => (
                <div key={titel} className="reveal relative rounded-3xl card p-6 text-center">
                  <span className="mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-amber text-ink font-display text-lg font-extrabold shadow-lg shadow-amber/30">{i + 1}</span>
                  <p className="mt-4 font-display font-bold text-ink">{titel}</p>
                  <p className="mt-2 text-sm text-dim leading-relaxed">{uitleg}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-dim">
              Meer over de plaatsing lees je bij <Link href="/osmose-installatie" className="underline hover:text-ink">osmose installatie</Link>. Twijfel je over de ruimte? Doe de <Link href="/maatcheck" className="underline hover:text-ink">maatcheck</Link>.
            </p>
          </div>
        </section>

        {/* REVIEWS */}
        {topReviews.length > 0 && (
          <section className="relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
              <div className="flex items-end justify-between gap-4 mb-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Ervaringen</span>
                  <h2 className="mt-2 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat klanten van ons vinden</h2>
                </div>
                <Link href="/reviews" className="cursor-pointer hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-ink hover:text-amber-dark transition-colors shrink-0">
                  Alle reviews
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>
              <div className="grid sm:grid-cols-3 gap-5">
                {topReviews.map((review) => (
                  <div key={review.id} className="rounded-2xl card p-5">
                    <Stars rating={review.rating} />
                    <p className="mt-2.5 text-sm text-ink leading-snug line-clamp-3">&ldquo;{review.review_text}&rdquo;</p>
                    <p className="mt-3 text-xs font-semibold text-dim">{review.name}{review.city ? ` — ${review.city}` : ''}</p>
                  </div>
                ))}
              </div>
              <Link href="/reviews" className="cursor-pointer sm:hidden mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-ink">
                Alle reviews
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section id="vragen" className="relative scroll-mt-24">
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
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Klaar voor een waterfilter die écht grondig filtert?</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan en ontdek wat een Water-zuivering systeem voor jouw huishouden betekent.</p>
            <Link href="/aanmelden" className="cursor-pointer mt-8 inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-xl shadow-amber/25">
              Vraag vrijblijvend een offerte aan
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
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

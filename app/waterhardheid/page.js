import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import FaqSchema from '@/components/FaqSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import WaterhardheidChecker from '@/components/WaterhardheidChecker';
import { BEDRIJVEN, KLASSEN, GEPUBLICEERD } from '@/lib/waterhardheid/data';
import { hardheidPerStadLive } from '@/lib/waterhardheid/lookup';

// The city table asks Vitens, Evides and WML for their current value; refresh weekly.
export const revalidate = 604800;

export const metadata = {
  alternates: { canonical: '/waterhardheid' },
  title: 'Waterhardheid check per postcode en adres — Water-zuivering',
  description: 'Check de waterhardheid op je adres: vul je postcode en huisnummer in en zie je waterbedrijf, de hardheid in °dH en wat dat betekent. Met tabel per stad.',
  openGraph: {
    title: 'Waterhardheid check per postcode en adres',
    description: 'Hoe hard is jouw kraanwater? Check het op postcode en huisnummer, met officiële cijfers van de drinkwaterbedrijven.',
    url: 'https://www.water-zuivering.nl/waterhardheid',
    type: 'website',
  },
};

const getal = (n) => String(Math.round(n * 100) / 100).replace('.', ',');
const bereik = (a, b) => (a === b ? getal(a) : `${getal(a)} – ${getal(b)}`);

const SCHAAL = [
  ['0 – 4', '0 – 0,7', '0 – 7', 'Zeer zacht', 'Zeldzaam in Nederlands kraanwater.'],
  ['4 – 8', '0,7 – 1,4', '7 – 14', 'Zacht', 'Het meeste Nederlandse kraanwater valt hier of net daarboven.'],
  ['8 – 12', '1,4 – 2,1', '14 – 21', 'Gemiddeld', 'Kalk in waterkoker en douche zie je regelmatig terug.'],
  ['12 – 18', '2,1 – 3,2', '21 – 32', 'Vrij hard', 'Apparaten verkalken snel. Zeldzaam sinds de centrale ontharding.'],
  ['18 en hoger', '3,2 en hoger', '32 en hoger', 'Hard', 'Komt volgens Waterbedrijf Groningen in Nederland niet voor.'],
];

const GEVOLGEN = [
  ['Waterkoker en koffiezetapparaat', 'Kalk zet zich af op het verwarmingselement. Hoe harder je water, hoe vaker je moet ontkalken. Volg daarvoor de handleiding van het apparaat.'],
  ['Vaatwasser', 'Bijna elke vaatwasser heeft een instelling voor de waterhardheid, zodat hij precies genoeg regenereerzout gebruikt. Stel die in op de waarde die je hierboven vindt. Te hoog ingesteld kost onnodig zout, te laag geeft witte vlekken op je glazen.'],
  ['Wasmachine', 'Op de verpakking van wasmiddel staat een dosering voor zacht, gemiddeld en hard water. Bij zacht water heb je minder nodig. Dat scheelt geld en is beter voor het milieu.'],
  ['Douche, kranen en glas', 'Als water opdroogt, blijft de kalk achter als witte vlekken. Hoe harder het water, hoe sneller je dat ziet op de douchewand, kranen en glazen.'],
  ['Thee en koffie', 'In harder water vormt zich sneller een dun vliesje op je thee, en de smaak verandert. Daarom zweren veel koffieliefhebbers bij gefilterd water.'],
  ['Je gezondheid', 'Kalk bestaat uit calcium en magnesium. In drinkwater is dat niet schadelijk. Hard of zacht water is dus vooral een kwestie van gemak, apparaten en smaak.'],
];

const OPLOSSINGEN = [
  ['Waterontharder', 'Het hele huis', 'Wordt op de hoofdleiding geplaatst en haalt kalk uit al het water: douche, wasmachine, cv-ketel en kranen.', '/kennisbank/hoe-werkt-een-waterontharder'],
  ['Osmose waterzuiveraar', 'Je drinkwater', 'Komt onder het aanrecht en filtert het water uit één kraan. Houdt kalk tegen, en ook PFAS, medicijnresten en microplastics.', '/osmosesysteem'],
  ['Kalkfilter of filterpatroon', 'Eén apparaat', 'Zoals het filter in een koffiemachine of Quooker. Beschermt dat ene apparaat, niet je drinkwater uit de kraan.', '/kennisbank/waterfilter-koffiemachine'],
  ['Regelmatig ontkalken', 'Achteraf', 'Met azijn of citroenzuur. Goedkoop, maar je haalt de kalk pas weg als hij er al zit.', '/kennisbank/kalkaanslag-in-huis'],
];

const FAQ = [
  ['Hoe hard is het kraanwater in Nederland?', 'Het meeste Nederlandse kraanwater is zacht tot gemiddeld: tussen ongeveer 5,5 en 12,5 °dH, en in veel plaatsen rond de 7 à 8 °dH. Bijna alle drinkwaterbedrijven ontharden het water centraal. Waternet levert bijvoorbeeld 7,8 °dH, PWN gemiddeld 7,9 °dH en WMD in het grootste deel van Drenthe ongeveer 8 °dH.'],
  ['Hoe check ik de waterhardheid op mijn adres?', 'Vul bovenaan deze pagina je postcode en huisnummer in. Je ziet direct welk drinkwaterbedrijf bij jou levert, de hardheid in Duitse graden (°dH), mmol/l en Franse graden, en wat dat betekent voor je apparaten. Voor de exacte waarde in jouw straat linken we door naar de check van je eigen waterbedrijf.'],
  ['Waarom zie ik soms een bandbreedte in plaats van één getal?', 'Een woonplaats kan water krijgen van meer dan één pompstation. Brabant Water en Oasen publiceren daarom per plaats een bandbreedte of een waarde per wijk. Hoe hard het water precies bij jou is, hangt af van het pompstation dat jouw straat levert.'],
  ['Wat is °dH?', 'Dat staat voor Duitse hardheidsgraden, de eenheid die Nederlandse waterbedrijven gebruiken. Eén mmol/l is 5,6 °dH, en 1 °dH is ongeveer 1,8 Franse graden (°fH). Fabrikanten van vaatwassers en koffiemachines gebruiken soms Franse graden, let daar dus op.'],
  ['Is hard water slecht voor je gezondheid?', 'Nee. Kalk in kraanwater bestaat uit calcium en magnesium, en dat is niet schadelijk. Hard water is vooral vervelend voor je apparaten, je douche en de smaak van thee en koffie.'],
  ['Mag kraanwater te zacht zijn?', 'Als een waterbedrijf het water onthardt, moet de hardheid volgens het Drinkwaterbesluit minimaal 1 mmol/l blijven, dat is ongeveer 5,6 °dH. Water dat van nature al zachter is, valt niet onder die ondergrens.'],
  ['Waarom is het water bij mij harder dan bij familie verderop?', 'Elk waterbedrijf wint water op verschillende plekken: grondwater, duinwater of rivierwater. Grondwater uit kalkrijke bodem is van nature harder. Niet elk pompstation onthardt even sterk, dus zelfs binnen één gemeente kan de hardheid verschillen.'],
  ['Haalt een waterfilter kalk uit mijn kraanwater?', 'Een gewone filterkan haalt maar een deel van de kalk weg. Een osmose waterzuiveraar houdt kalk wel grotendeels tegen, omdat het membraan bijna alleen watermoleculen doorlaat. Voor kalk in het hele huis, zoals de douche en de wasmachine, heb je een waterontharder nodig.'],
];

const BRONNEN = [
  ['RIVM: Drinkwaterbedrijven 2026 (leveringsgebieden)', 'https://data.overheid.nl/dataset/44504-drinkwaterbedrijven'],
  ['PDOK Locatieserver (adressen, Kadaster)', 'https://www.pdok.nl/introductie/-/article/pdok-locatieserver'],
  ...Object.values(BEDRIJVEN).map((b) => [b.bron.titel, b.bron.url]),
];

function hardheidTekst(r) {
  if (r.min == null) return null;
  return `${bereik(r.min, r.max)} °dH`;
}

export default async function WaterhardheidPage() {
  const steden = await hardheidPerStadLive();
  const bedrijven = Object.entries(BEDRIJVEN);
  const datum = new Date(GEPUBLICEERD).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });

  const webApp = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Waterhardheid check per postcode en huisnummer',
    url: 'https://www.water-zuivering.nl/waterhardheid',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Alle',
    inLanguage: 'nl-NL',
    isAccessibleForFree: true,
    description: 'Bepaal met je postcode en huisnummer welk drinkwaterbedrijf bij jou levert en hoe hard je kraanwater is, op basis van officiële cijfers van de Nederlandse drinkwaterbedrijven.',
    dateModified: GEPUBLICEERD,
    publisher: { '@type': 'Organization', name: 'Water-zuivering', url: 'https://www.water-zuivering.nl' },
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Waterhardheid check', url: 'https://www.water-zuivering.nl/waterhardheid' },
        ]}
      />
      <FaqSchema items={FAQ} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApp) }} />
      <RevealObserver />
      <Header />

      <main>
        {/* HERO + CHECK */}
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="glow drift2 w-[360px] h-[360px] bg-amber/10 top-10 -right-24" />
          <div className="relative max-w-4xl mx-auto px-6 py-16 md:py-24">
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Gratis check · officiële cijfers</span>
              <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">Waterhardheid check op postcode en huisnummer</h1>
              <p className="mt-5 text-dim text-lg">
                Hoe hard is jouw kraanwater? Vul je postcode en huisnummer in en zie meteen de <strong className="text-ink">waterhardheid</strong> op je adres, welk drinkwaterbedrijf bij jou levert en wat dat betekent voor je waterkoker, vaatwasser en douche.
              </p>
            </div>
            <WaterhardheidChecker />
            <p className="mt-6 text-center text-xs text-dim">
              Gebaseerd op de cijfers van de tien Nederlandse drinkwaterbedrijven en de RIVM-kaart van hun leveringsgebieden. Bijgewerkt op {datum}.
            </p>
          </div>
        </section>

        {/* KORT ANTWOORD */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-[1.2fr_1fr] gap-10 items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">In het kort</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoe hard is het water in Nederland?</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Het meeste <strong className="text-ink">kraanwater in Nederland is zacht tot gemiddeld</strong>: tussen ongeveer 5,5 en 12,5 °dH, en in veel plaatsen rond de 7 à 8 °dH. Dat komt doordat bijna alle drinkwaterbedrijven het water centraal ontharden. Waternet levert in Amsterdam en omgeving 7,8 °dH, PWN in Noord-Holland gemiddeld 7,9 °dH en Dunea rond de 7,4 tot 8 °dH. In Brabant en Groningen verschilt het per pompstation, tot ongeveer 11 à 12,5 °dH.
              </p>
              <p className="mt-4 text-dim leading-relaxed">
                Hoe hard het water bij jou is, hangt af van het pompstation dat jouw straat levert. Grondwater uit kalkrijke bodem is van nature harder dan duinwater. Daarom kan de waterhardheid zelfs binnen één gemeente verschillen, en daarom kijkt onze check naar je exacte adres.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                ['7,8 °dH', 'Waternet (Amsterdam)'],
                ['7,9 °dH', 'PWN (Noord-Holland)'],
                ['5,6 °dH', 'wettelijke ondergrens na ontharding'],
                ['10', 'drinkwaterbedrijven in Nederland'],
              ].map(([cijfer, label]) => (
                <div key={label} className="reveal rounded-2xl card p-5 text-center">
                  <p className="font-display text-2xl font-extrabold text-amber-dark">{cijfer}</p>
                  <p className="mt-1 text-xs text-dim">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SCHAAL */}
        <section className="relative">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">De schaal</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wanneer is water zacht, gemiddeld of hard?</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Waterbedrijven drukken de hardheid uit in <strong className="text-ink">Duitse graden (°dH)</strong>. Je ziet ook mmol/l (millimol calcium en magnesium per liter) en Franse graden (°fH), bijvoorbeeld in de handleiding van je vaatwasser. Zo verhouden ze zich tot elkaar:
              </p>
            </div>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-edge">
              <table className="w-full text-sm">
                <thead className="bg-surface text-left">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">Hardheid</th>
                    <th scope="col" className="px-4 py-3 font-semibold">°dH</th>
                    <th scope="col" className="px-4 py-3 font-semibold">mmol/l</th>
                    <th scope="col" className="px-4 py-3 font-semibold">°fH</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Wat merk je ervan?</th>
                  </tr>
                </thead>
                <tbody>
                  {SCHAAL.map(([dh, mmol, fh, label, uitleg], i) => (
                    <tr key={label} className="border-t border-edge">
                      <td className="px-4 py-3 font-semibold whitespace-nowrap">
                        <span className="inline-block w-2.5 h-2.5 rounded-full mr-2 align-middle" style={{ backgroundColor: KLASSEN[i].kleur }} />
                        {label}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">{dh}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{mmol}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{fh}</td>
                      <td className="px-4 py-3 text-dim">{uitleg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-dim/80">Indeling volgens Waterbedrijf Groningen. Omrekening: 1 mmol/l = 5,6 °dH = 10 °fH.</p>
          </div>
        </section>

        {/* PER WATERBEDRIJF */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Per waterbedrijf</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waterhardheid per drinkwaterbedrijf</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Nederland heeft tien drinkwaterbedrijven. Elk bedrijf publiceert de hardheid op zijn eigen manier: één cijfer voor het hele gebied, een tabel per woonplaats, of alleen via een eigen postcodecheck. Dit zijn de officiële cijfers:
              </p>
            </div>
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              {bedrijven.map(([id, b]) => (
                <div key={id} className="reveal rounded-2xl card p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display font-bold text-ink">{b.naam}</h3>
                    <p className="text-sm font-bold text-amber-dark whitespace-nowrap">
                      {b.min != null ? `${bereik(b.min, b.max)} °dH` : b.type === 'per_plaats' ? 'per woonplaats' : 'per postcode'}
                    </p>
                  </div>
                  <p className="mt-1 text-xs text-dim">{b.gebied}</p>
                  <p className="mt-3 text-sm text-dim leading-relaxed">{b.toelichting}</p>
                  <a href={b.bron.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-xs underline text-dim hover:text-ink">Bron: {b.naam}</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PER STAD */}
        <section className="relative">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Per stad</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waterhardheid per stad</h2>
              <p className="mt-4 text-dim leading-relaxed">
                De waterhardheid in de grootste steden van Nederland, met het waterbedrijf dat er levert. Waar het waterbedrijf de hardheid alleen per postcode publiceert, check je jouw adres het snelst bovenaan deze pagina. Meer over het drinkwater in je stad lees je op onze pagina&apos;s over{' '}
                <Link href="/kennisbank/drinkwater-amsterdam" className="underline hover:text-ink">Amsterdam</Link>,{' '}
                <Link href="/kennisbank/drinkwater-rotterdam" className="underline hover:text-ink">Rotterdam</Link>,{' '}
                <Link href="/kennisbank/kraanwater-utrecht" className="underline hover:text-ink">Utrecht</Link> en{' '}
                <Link href="/kennisbank/drinkwater-dordrecht-zwijndrecht" className="underline hover:text-ink">Dordrecht</Link>.
              </p>
            </div>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-edge">
              <table className="w-full text-sm">
                <caption className="sr-only">Waterhardheid per stad in Nederland</caption>
                <thead className="bg-surface text-left">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">Stad</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Waterbedrijf</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Waterhardheid</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Hardheid</th>
                  </tr>
                </thead>
                <tbody>
                  {steden.map((r) => (
                    <tr key={r.stad} className="border-t border-edge">
                      <th scope="row" className="px-4 py-2.5 text-left font-semibold">Waterhardheid {r.stad}</th>
                      <td className="px-4 py-2.5 text-dim">{r.bedrijf}</td>
                      <td className="px-4 py-2.5 whitespace-nowrap">
                        {hardheidTekst(r) || (
                          <a href={r.checkUrl} target="_blank" rel="noopener noreferrer" className="underline text-dim hover:text-ink">per postcode bij {r.bedrijf}</a>
                        )}
                      </td>
                      <td className="px-4 py-2.5 whitespace-nowrap">
                        {r.klasse ? (
                          <span className="inline-flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: r.klasse.kleur }} />
                            {r.klasseMin.label === r.klasseMax.label ? r.klasseMin.label : `${r.klasseMin.label} – ${r.klasseMax.label.toLowerCase()}`}
                          </span>
                        ) : (
                          <span className="text-dim">verschilt per wijk</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-dim/80">
              Een bandbreedte betekent dat een stad water krijgt van meer dan één pompstation. Bij steden van Vitens, Evides en WML is de waarde opgevraagd voor een adres in het centrum; in andere wijken kan het iets anders zijn. Bronnen: de drinkwaterbedrijven zelf (zie onderaan), geraadpleegd op {datum}.
            </p>
          </div>
        </section>

        {/* WAT BETEKENT HET */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">In de praktijk</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat betekent de waterhardheid voor jou?</h2>
              <p className="mt-4 text-dim leading-relaxed">
                De hardheid zegt hoeveel kalk (calcium en magnesium) er in je kraanwater zit. Dat merk je vooral op deze plekken:
              </p>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {GEVOLGEN.map(([titel, uitleg]) => (
                <div key={titel} className="reveal rounded-2xl card p-5">
                  <h3 className="font-display font-bold text-ink">{titel}</h3>
                  <p className="mt-2 text-sm text-dim leading-relaxed">{uitleg}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ZELF METEN */}
        <section className="relative">
          <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Zelf controleren</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Kun je de waterhardheid ook zelf meten?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Ja. Met teststrips of een druppeltest van de bouwmarkt of drogist meet je in een paar minuten de hardheid van het water uit je eigen kraan. Teststrips geven een indicatie in stappen; een druppeltest is nauwkeuriger. Soms krijg je een teststrip gratis bij een nieuwe vaatwasser.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Wil je weten wat er verder in je water zit, zoals lood of PFAS? Dan heb je een laboratoriumtest nodig. Hoe dat werkt, lees je in{' '}
              <Link href="/kennisbank/drinkwater-laten-testen" className="font-semibold text-ink underline decoration-amber decoration-2 underline-offset-2 hover:text-amber-dark">drinkwater laten testen</Link>.
            </p>
          </div>
        </section>

        {/* OPLOSSINGEN */}
        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[380px] h-[380px] bg-amber/15 -top-32 -left-24" />
          <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-20">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-amber">Oplossingen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat kun je doen tegen hard water?</h2>
              <p className="mt-4 text-white/70 leading-relaxed">
                Het hangt ervan af waar je last van hebt. Voor kalk in het hele huis is iets anders nodig dan voor je drinkwater.
              </p>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {OPLOSSINGEN.map(([titel, voor, uitleg, href]) => (
                <Link key={titel} href={href} className="cursor-pointer reveal rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-amber transition-colors">
                  <p className="text-xs font-bold uppercase tracking-widest text-amber">{voor}</p>
                  <h3 className="mt-1 font-display font-bold">{titel}</h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{uitleg}</p>
                </Link>
              ))}
            </div>
            <p className="mt-6 text-sm text-white/70">
              Twijfel je tussen de twee? Lees{' '}
              <Link href="/kennisbank/waterontharder-vs-waterzuiveraar" className="underline hover:text-white">waterontharder of waterzuiveraar: wat heb je nodig?</Link>
            </p>
          </div>
        </section>

        {/* HOE WERKT DE CHECK */}
        <section className="relative">
          <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Verantwoording</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoe werkt onze waterhardheid check?</h2>
            <ol className="mt-5 space-y-4 text-dim leading-relaxed">
              <li><strong className="text-ink">1. Je adres wordt een locatie.</strong> Met je postcode en huisnummer vragen we bij PDOK, de adresservice van de overheid, op welke plek je woont. We slaan je adres niet op.</li>
              <li><strong className="text-ink">2. We bepalen je waterbedrijf.</strong> Die locatie leggen we op de kaart van het RIVM met de leveringsgebieden van alle tien drinkwaterbedrijven. Publiceert een waterbedrijf zelf een lijst met woonplaatsen, dan gaat die voor.</li>
              <li><strong className="text-ink">3. We zoeken de hardheid op.</strong> We gebruiken alleen de cijfers die het waterbedrijf zelf publiceert: één waarde voor het hele gebied, of de waarde voor jouw woonplaats. Vitens, Evides en WML publiceren de hardheid alleen in hun eigen postcodecheck. Voor die adressen vragen we de waarde voor jouw postcode direct bij het waterbedrijf op.</li>
            </ol>
            <p className="mt-5 text-sm text-dim">
              Het blijft een indicatie: de hardheid kan per pompstation en per seizoen iets schommelen. We werken de cijfers regelmatig bij.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over waterhardheid</h2>
            </div>
            <div className="mt-10 space-y-3">
              {FAQ.map(([vraag, antwoord]) => (
                <details key={vraag} className="reveal group rounded-2xl card p-5">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-display font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber rounded">
                    {vraag}
                    <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-amber/12 text-amber-dark transition-transform group-open:rotate-45">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-dim leading-relaxed">{antwoord}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* BRONNEN */}
        <section className="relative">
          <div className="max-w-3xl mx-auto px-6 py-12">
            <h2 className="font-display text-lg font-bold">Bronnen</h2>
            <ul className="mt-3 space-y-1.5 text-sm text-dim">
              {BRONNEN.map(([titel, url]) => (
                <li key={url}>
                  <a href={url} target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">{titel}</a>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-dim/80">Alle cijfers geraadpleegd op {datum}.</p>
          </div>
        </section>

        {/* SLOT CTA */}
        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zuiver drinkwater, zonder kalk, uit je eigen kraan</h2>
            <p className="mt-4 text-white/70">Onze osmose waterzuiveraar houdt kalk, PFAS, medicijnresten en microplastics tegen, direct onder je aanrecht. Vraag vrijblijvend een offerte aan.</p>
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

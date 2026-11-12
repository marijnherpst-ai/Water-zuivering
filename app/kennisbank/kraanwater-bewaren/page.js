import Image from 'next/image';
import Link from 'next/link';
import AuteurRegel from '@/components/AuteurRegel';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import ArticleSchema from '@/components/ArticleSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import KortAntwoord from '@/components/KortAntwoord';
import FaqSchema from '@/components/FaqSchema';
import TussenCta from '@/components/TussenCta';

export const metadata = {
  alternates: { canonical: '/kennisbank/kraanwater-bewaren' },
  title: 'Kraanwater bewaren: hoe lang blijft het goed?',
  description:
    'Hoe lang kun je kraanwater bewaren? In een glas, drinkfles, kan in de koelkast of als noodvoorraad: zo lang is kraanwater houdbaar en zo bewaar je het.',
  openGraph: {
    title: 'Kraanwater bewaren: hoe lang blijft het goed?',
    description: 'Van het glas naast je bed tot de noodvoorraad in de kelder: hoe lang kraanwater houdbaar is en hoe je het schoon bewaart.',
    url: 'https://www.water-zuivering.nl/kennisbank/kraanwater-bewaren',
    images: ['/assets/img/glas-water.webp'],
  },
};

const HOUDBAAR = [
  ['Glas water naast je bed', 'Tot de volgende ochtend', 'Pak elke dag een schoon glas. Dek het af als er veel stof is.'],
  ['Glas in de badkamer of op het toilet', 'Een paar uur', 'Door de warmte van het douchen en het doorspoelen van het toilet raakt het sneller vervuild.'],
  ['Hervulbare drinkfles of bidon', '1 dag', 'Elke dag legen, afwassen met warm water en afwasmiddel en opnieuw vullen.'],
  ['Flesje in een warme auto of tas', 'Dezelfde dag', 'In de warmte groeien bacteriën veel sneller. Ververs het elke dag.'],
  ['Kan of fles in de koelkast, afgedekt', '3 dagen tot een week', 'Gebruik een schone kan met deksel en schenk uit in een glas.'],
  ['Noodvoorraad in schone, dichte flessen', 'Een halfjaar', 'Koel en donker bewaren, datum erop, elk halfjaar verversen.'],
];

const STAPPEN = [
  ['Kies de juiste fles', 'Gebruik goed afsluitbare flessen of jerrycans die bedoeld zijn voor drinken. Glas is het beste, omdat het geen smaak of stoffen afgeeft.'],
  ['Werk schoon', 'Was je handen. Maak de kraan en de gootsteen schoon en spoel de flessen goed om met kraanwater.'],
  ['Vul tot de rand', 'Hoe minder lucht er in de fles zit, hoe beter. Draai de dop er meteen stevig op.'],
  ['Schrijf de datum erop', 'Zo weet je over een halfjaar welke flessen aan de beurt zijn.'],
  ['Zet ze koel en donker weg', 'Een kelder, kelderkast of koele berging is ideaal. Niet in de zon en niet naast de verwarming.'],
  ['Ververs elk halfjaar', 'Gooi het oude water niet weg: geef het aan de planten of spoel er het toilet mee door.'],
];

const FAQ = [
  ['Hoe lang kun je kraanwater bewaren?', 'Dat hangt af van waar en waarin. In een glas op kamertemperatuur tot de volgende dag, in een afgedekte kan in de koelkast 3 dagen tot een week, en in schone, goed gesloten flessen op een koele, donkere plek ongeveer een halfjaar.'],
  ['Kan kraanwater bederven?', 'Water zelf bederft niet, maar er kunnen bacteriën in gaan groeien. Die komen uit de lucht, van je handen, uit je mond of uit een fles die niet schoon is. Hoe warmer het water staat, hoe sneller dat gaat. In Nederlands kraanwater zit geen chloor dat die groei afremt.'],
  ['Hoe lang is kraanwater houdbaar in de koelkast?', 'Een kan kraanwater blijft in de koelkast bij ongeveer 4 graden 3 dagen tot een week goed. Dek de kan af met een deksel. Drink je uit de fles zelf, houd dan 3 dagen aan, omdat er dan bacteriën uit je mond in het water komen.'],
  ['Hoe lang kun je kraanwater in een fles bewaren?', 'Een drinkfles of bidon die je meeneemt, ververs je elke dag. Flessen die je schoon vult, helemaal vol doet en dicht in een koele, donkere ruimte zet voor noodgevallen, kun je een halfjaar laten staan. Daarna ververs je ze.'],
  ['Kun je water dat een nacht heeft gestaan nog drinken?', 'Ja. Een glas water dat je ’s avonds naast je bed zet, kun je de volgende ochtend gewoon drinken. Het kan iets anders smaken, omdat er lucht en wat stof in is gekomen. Pak daarna een schoon glas met vers water.'],
  ['Hoe merk je dat bewaard water niet meer goed is?', 'Ruik en proef eerst. Water dat muf ruikt, vreemd smaakt of troebel is, drink je niet meer. Twijfel je over je noodvoorraad, kook het water dan drie minuten of gebruik het voor de planten of het toilet.'],
  ['Hoeveel water moet je bewaren voor noodgevallen?', 'De overheid adviseert 3 liter per persoon per dag, voor minimaal drie dagen. Dat is 9 liter per persoon. Voor een gezin van vier is dat 36 liter.'],
  ['Kun je kraanwater invriezen?', 'Ja, dat kan prima. Vul de fles niet helemaal, want water zet uit als het bevriest. Gebruik geen glazen fles in de vriezer: die kan barsten.'],
  ['Blijft gefilterd water of osmosewater langer goed?', 'Nee. Voor gefilterd water gelden dezelfde regels als voor kraanwater. Water dat vers uit de kraan of uit het filter komt, is altijd het beste. Bewaar je het toch, doe dat dan afgedekt in de koelkast.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Kraanwater bewaren: hoe lang blijft het goed?"
        description="Hoe lang kraanwater houdbaar is in een glas, drinkfles, kan in de koelkast of als noodvoorraad, en hoe je het schoon bewaart."
        image="https://www.water-zuivering.nl/assets/img/glas-water.webp"
        url="https://www.water-zuivering.nl/kennisbank/kraanwater-bewaren"
        datePublished="2026-11-12"
        dateModified="2026-11-12"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Kraanwater bewaren', url: 'https://www.water-zuivering.nl/kennisbank/kraanwater-bewaren' },
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
            <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Kraanwater bewaren: hoe lang blijft het goed?
            </h1>
            <p className="mt-5 text-dim text-lg">
              Een glas dat de hele nacht op je nachtkastje stond, een bidon van gisteren of een paar flessen in de kelder voor noodgevallen. <strong className="text-ink">Hoe lang kun je kraanwater bewaren</strong> voordat het niet meer lekker of niet meer veilig is? Het antwoord hangt af van drie dingen: de temperatuur, hoe schoon de fles is en of je er al uit gedronken hebt.
            </p>
            <KortAntwoord bron={{ naam: 'Waterbedrijf Groningen: drinkwater in het noodpakket', url: 'https://waterbedrijfgroningen.nl/over-drinkwater/drinkwater-in-het-noodpakket' }}>
              Kraanwater in een glas of drinkfles ververs je elke dag. In een afgedekte kan in de koelkast blijft het 3 dagen tot een week goed. In schone, tot de rand gevulde en goed gesloten flessen op een koele, donkere plek kun je kraanwater een halfjaar bewaren als noodvoorraad.
            </KortAntwoord>
            <AuteurRegel bijgewerkt="12 november 2026" />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Overzicht</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoe lang is kraanwater houdbaar?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Er staat geen houdbaarheidsdatum op kraanwater. Hoe lang het goed blijft, hangt af van de plek waar je het neerzet. Dit zijn de richtlijnen van het Voedingscentrum, wateronderzoeksinstituut KWR en de drinkwaterbedrijven:
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-surface text-ink">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">Waar staat het water?</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Hoe lang goed?</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Tip</th>
                  </tr>
                </thead>
                <tbody>
                  {HOUDBAAR.map((rij) => (
                    <tr key={rij[0]} className="border-t border-edge">
                      {rij.map((cel, i) => (
                        <td key={i} className={`px-4 py-3 align-top ${i === 0 ? 'font-semibold text-ink' : i === 1 ? 'font-semibold text-amber-dark whitespace-nowrap' : 'text-dim'}`}>{cel}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-dim leading-relaxed">
              Dit zijn richtlijnen, geen harde grenzen. Vertrouw ook op je neus: water dat muf ruikt of vreemd smaakt, drink je niet meer.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Kan kraanwater bederven?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Water zelf kan niet bederven. Er zit niets in dat kan rotten. Wat wel kan gebeuren, is dat er <strong className="text-ink">bacteriën in gaan groeien</strong>. Zolang het water in de leiding zit, is het goed beschermd: het is koud, donker en afgesloten, en het is vers. Volgens drinkwaterbedrijf Vitens zit er maar 24 tot 48 uur tussen het maken van het water en het moment dat het uit je kraan komt.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Zodra het water in een glas of fles staat, verandert dat. Er komen bacteriën bij uit de lucht, van je handen, uit je mond of uit de fles zelf. Drie dingen bepalen hoe snel dat gaat:
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Temperatuur.</strong> In de koelkast groeien bacteriën langzaam, in een warme auto heel snel.</li>
              <li><strong className="text-ink">Hoe schoon de fles is.</strong> In een bidon die je alleen omspoelt, blijft een laagje bacteriën achter. Vooral in de dop.</li>
              <li><strong className="text-ink">Of je eruit gedronken hebt.</strong> Met elke slok komen er bacteriën uit je mond in het water.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              In Nederland speelt nog iets mee. In veel landen zit er chloor in het kraanwater, en dat remt de groei van bacteriën ook nog een tijdje in de fles. Nederlandse waterbedrijven gebruiken geen chloor. Dat is fijn voor de smaak, maar het betekent wel dat bewaard water hier geen extra bescherming heeft. Meer daarover lees je in <Link href="/kennisbank/chloor-in-kraanwater" className="underline hover:text-ink">chloor in kraanwater</Link>.
            </p>
            <h3 className="mt-8 font-display text-xl font-bold">Waarom smaakt water van gisteren anders?</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Water dat een nacht heeft gestaan, smaakt vaak wat vlak. Dat komt niet door bacteriën. Het water is opgewarmd tot kamertemperatuur, er is koolzuur uit de lucht in opgelost en er kan wat stof in zijn gevallen. Het is niet ongezond, alleen minder fris.
            </p>
            <div className="mt-8 relative rounded-3xl overflow-hidden border border-edge aspect-[16/9]">
              <Image src="/assets/img/glas-water.webp" alt="Glas kraanwater: hoe lang kun je kraanwater bewaren voordat het niet meer goed is" fill sizes="(min-width: 1024px) 896px, 100vw" className="object-cover" />
            </div>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Elke dag</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Kraanwater bewaren in een fles, bidon of kan</h2>
            <h3 className="mt-6 font-display text-xl font-bold">Drinkfles of bidon</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Het Voedingscentrum adviseert om een hervulbare fles elke dag opnieuw te vullen, zeker als je hem niet koel kunt bewaren. Was de fles en de dop elke dag af met warm water en afwasmiddel, of zet ze in de vaatwasser, en laat ze goed drogen. Een sportdop is lastig schoon te krijgen en komt het meest in contact met je mond. Geef die extra aandacht.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Een fles van glas of roestvrij staal is de beste keuze. Die materialen geven volgens het Voedingscentrum nauwelijks stoffen af aan het water. Een fles met een ingebouwd filter is weer iets anders. Wat die doet, lees je in <Link href="/kennisbank/waterfles-met-filter" className="underline hover:text-ink">waterfles met filter</Link>.
            </p>
            <h3 className="mt-8 font-display text-xl font-bold">Kan in de koelkast</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Een kan koud water in de koelkast is handig, vooral in de zomer. Bij ongeveer 4 graden blijft kraanwater 3 dagen tot een week goed. Twee dingen helpen: dek de kan af met een deksel, zodat er geen geurtjes en bacteriën uit de koelkast bij komen, en schenk uit in een glas in plaats van uit de kan te drinken.
            </p>
            <h3 className="mt-8 font-display text-xl font-bold">Flesje in de auto</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Veel mensen hebben altijd een flesje in de auto liggen. Op warme dagen wordt het daar al snel 40 graden of meer. Bacteriën groeien dan veel sneller, en uit een plastic fles kunnen in de warmte heel kleine hoeveelheden stoffen in het water komen. Neem elke dag een vers flesje mee in plaats van er een te laten liggen.
            </p>
            <h3 className="mt-8 font-display text-xl font-bold">Glas naast je bed</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Een glas water dat je &apos;s avonds neerzet, kun je de volgende ochtend gewoon drinken. Pak daarna een schoon glas. In de badkamer of op het toilet ligt dat anders, zegt onderzoeker Roberta Hofman van KWR: daar pak je na een paar uur beter vers water, omdat het doorspoelen van het toilet en de warmte van de douche het water sneller vervuilen.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Noodvoorraad</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Kraanwater bewaren voor je noodpakket: zo doe je het</h2>
            <p className="mt-4 text-dim leading-relaxed">
              De overheid adviseert om thuis water te hebben voor de eerste drie dagen van een noodsituatie: <strong className="text-ink">3 liter per persoon per dag</strong>. Dat is 9 liter per persoon, of 36 liter voor een gezin van vier. Je kunt flessenwater kopen, maar kraanwater is net zo geschikt en veel goedkoper. Je moet het alleen wel schoon aftappen. Zo doen de drinkwaterbedrijven het voor:
            </p>
            <ol className="mt-6 grid sm:grid-cols-2 gap-4">
              {STAPPEN.map(([titel, tekst], i) => (
                <li key={titel} className="reveal rounded-2xl card p-5 flex gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-amber text-ink font-display font-bold flex items-center justify-center">{i + 1}</span>
                  <div>
                    <h3 className="font-display font-bold text-ink">{titel}</h3>
                    <p className="mt-2 text-sm text-dim leading-relaxed">{tekst}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-dim leading-relaxed">
              Ga je het bewaarde water gebruiken? Ruik en proef dan eerst. Twijfel je, kook het dan drie minuten. Wat je doet als het water uit de kraan zelf niet meer te vertrouwen is, lees je in <Link href="/kennisbank/water-zuiveren-noodsituatie" className="underline hover:text-ink">water zuiveren in een noodsituatie</Link>.
            </p>
            <h3 className="mt-8 font-display text-xl font-bold">Flessenwater als voorraad</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Een dichte fles water uit de winkel kun je bewaren tot de datum op het etiket. Dat is makkelijker, maar ook duurder. Eenmaal open geldt hetzelfde als voor kraanwater: het Voedingscentrum houdt maximaal 3 dagen buiten de koelkast aan, of 3 tot 7 dagen in de koelkast. Het verschil tussen de twee soorten water lees je in <Link href="/kennisbank/kraanwater-vs-flessenwater" className="underline hover:text-ink">kraanwater of flessenwater</Link>.
            </p>

            <h2 className="mt-12 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Geldt dit ook voor gefilterd water?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Ja. Water uit een filterkan, een filterkraan of een osmosesysteem bewaar je op dezelfde manier als gewoon kraanwater. Het blijft niet langer goed doordat het gefilterd is. Een filterkan zet je in de koelkast, en het water daarin ververs je elke dag.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Vers getapt water is altijd het beste water. Daarom werkt ons osmosesysteem zonder opslagtank: het water wordt gefilterd op het moment dat je de kraan opendraait. Er staat dus geen gefilterd water dagenlang te wachten in een vat onder je aanrecht.
            </p>
            <TussenCta titel="Altijd vers gefilterd water, zonder tank">
              Ons osmosesysteem filtert direct terwijl je tapt: 1,58 liter per minuut, recht uit de kraan. Het membraan houdt kalk, PFAS, medicijnresten en microplastics tegen.
            </TussenCta>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over kraanwater bewaren</h2>
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
            <div className="mt-12">
              <p className="font-display font-bold text-ink">Bronnen</p>
              <ul className="mt-3 space-y-1 text-sm text-dim list-disc pl-5">
                <li><a href="https://waterbedrijfgroningen.nl/over-drinkwater/drinkwater-in-het-noodpakket" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Waterbedrijf Groningen: drinkwater in het noodpakket</a></li>
                <li><a href="https://www.drinkwaterplatform.nl/water-in-je-noodpakket/" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Drinkwaterplatform: water in je noodpakket (4 augustus 2025)</a></li>
                <li><a href="https://radar.avrotros.nl/artikel/hoe-lang-kun-je-drinkwater-bewaren-33796" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Radar: hoe lang kun je drinkwater bewaren? Met het Voedingscentrum, Vitens en KWR</a></li>
                <li><a href="https://www.voedingscentrum.nl/encyclopedie/water.aspx" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Voedingscentrum: water</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Vers gefilterd water, elke keer dat je tapt</h2>
            <p className="mt-4 text-white/70">Een osmosesysteem onder je aanrecht levert gefilterd water direct uit de kraan, zonder opslagtank. Vraag vrijblijvend een offerte aan.</p>
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

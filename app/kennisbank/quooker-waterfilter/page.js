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
  alternates: { canonical: '/kennisbank/quooker-waterfilter' },
  title: 'Quooker waterfilter: wat filtert hij wel en niet?',
  description:
    'Quooker waterfilter uitgelegd: wat het HiTAC- en CUBE-filter tegenhouden, hoe vaak je ze vervangt en wanneer een osmosefilter meer doet.',
  openGraph: {
    title: 'Quooker waterfilter: wat filtert hij wel en niet?',
    description: 'Het HiTAC-filter en het CUBE-filter van Quooker uitgelegd, met vervangtermijnen en een eerlijke vergelijking met osmose.',
    url: 'https://www.water-zuivering.nl/kennisbank/quooker-waterfilter',
    images: ['/assets/img/twee-kranen.jpg'],
  },
};

const FILTERS = [
  ['HiTAC-filter', 'In het reservoir (de boiler) onder het aanrecht', 'Alleen het kokende water', 'Actieve kool tegen chloor, bepaalde bestrijdingsmiddelen en organische vervuiling. Verbetert smaak en geur.', 'Ongeveer elke 3 tot 5 jaar, of bij een onderhoudsbeurt'],
  ['CUBE-filter', 'In de CUBE, de losse module voor gekoeld en bruisend water', 'Alleen het gekoelde en bruisende water uit de CUBE', 'Een filter met holle vezels (HF), of een combinatie van actieve kool en holle vezels (AC+HF)', 'Na 12 maanden; de CUBE geeft dan een licht- en geluidssignaal'],
];

const VERGELIJK = [
  ['Chloorsmaak en -geur', 'Ja', 'Ja (AC+HF)', 'Ja, via het koolstofvoorfilter'],
  ['Kalk', 'Nee, volgens Quooker zelf', 'Niet geclaimd', 'Ja, het membraan houdt kalk tegen'],
  ['PFAS', 'Niet geclaimd', 'Niet geclaimd', 'Ja, tot 99%'],
  ['Medicijnresten', 'Niet geclaimd', 'Niet geclaimd', 'Ja'],
  ['Microplastics', 'Niet geclaimd', 'Niet geclaimd', 'Ja'],
  ['Lood', 'Niet geclaimd', 'Niet geclaimd', 'Ja, opgeloste metalen blijven grotendeels achter'],
  ['Welk water?', 'Kokend water', 'Koud en bruisend water uit de CUBE', 'Al je drinkwater uit een aparte kraan of 3-weg kraan'],
];

const FAQ = [
  ['Heeft een Quooker een waterfilter?', 'Ja. In het reservoir van elke Quooker zit een HiTAC-filter van actieve kool. Dat filtert het water dat de Quooker kookt. Heb je ook een CUBE voor gekoeld en bruisend water, dan zit daar een apart filter in.'],
  ['Wat filtert het Quooker HiTAC-filter?', 'Volgens Quooker neemt de koolstof chloor, bepaalde bestrijdingsmiddelen en organische vervuiling op en verbetert het de smaak en geur. Quooker zegt er nadrukkelijk bij dat het HiTAC-filter geen kalkfilter is.'],
  ['Hoe vaak moet je het Quooker-filter vervangen?', 'Het HiTAC-filter in het reservoir gaat in gebieden met zacht water ongeveer 3 tot 5 jaar mee. Bij hard water kun je het meenemen bij een onderhouds- en ontkalkingsbeurt. Het CUBE-filter vervang je na 12 maanden; de CUBE geeft dan zelf een signaal.'],
  ['Filtert een Quooker ook het koude water?', 'Nee. Het HiTAC-filter zit in het reservoir, dus alleen water dat de Quooker kookt gaat erdoorheen. Koud water uit de Quooker-kraan komt gewoon uit de waterleiding. Alleen met een CUBE krijg je gefilterd koud water, en dan alleen uit die CUBE.'],
  ['Haalt een Quooker-filter PFAS uit het water?', 'Quooker noemt PFAS niet bij wat zijn filters tegenhouden. Wil je PFAS zeker uit je drinkwater halen, dan heb je een omgekeerde-osmosemembraan nodig. Dat houdt ook de kleine PFAS-moleculen grotendeels tegen.'],
  ['Kan ik zelf het Quooker-filter vervangen?', 'Ja. Quooker levert het vervangfilter met stap-voor-stap instructies. Je kunt het ook laten doen door een monteur van Quooker of je dealer, bijvoorbeeld tijdens een onderhoudsbeurt.'],
  ['Kun je een Quooker en een osmosesysteem combineren?', 'Ja. Ze doen elk iets anders: de Quooker geeft kokend water, het osmosesysteem gefilterd drinkwater uit een eigen kraan of een 3-weg kraan. Beide staan onder het aanrecht, dus check vooraf of er in je keukenkastje ruimte is voor allebei.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Quooker waterfilter: wat het filter wel en niet doet"
        description="Het HiTAC-filter en het CUBE-filter van Quooker uitgelegd: wat ze tegenhouden, hoe vaak je ze vervangt en wanneer een osmosesysteem meer doet."
        image="https://www.water-zuivering.nl/assets/img/twee-kranen.jpg"
        url="https://www.water-zuivering.nl/kennisbank/quooker-waterfilter"
        datePublished="2026-10-27"
        about={{ '@type': 'Product', name: 'Quooker', brand: { '@type': 'Brand', name: 'Quooker' } }}
        mentions={[{ '@type': 'Organization', name: 'Quooker', url: 'https://www.quooker.nl' }]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Quooker waterfilter', url: 'https://www.water-zuivering.nl/kennisbank/quooker-waterfilter' },
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
              Quooker waterfilter: wat het filter wel en niet doet
            </h1>
            <p className="mt-5 text-dim text-lg">
              Veel mensen met een Quooker gaan ervan uit dat hun kraan het water ook zuivert. Dat klopt maar voor een deel. Het <strong className="text-ink">Quooker waterfilter</strong> zit op een andere plek en doet iets anders dan je misschien denkt. Hier lees je wat het filter tegenhoudt, hoe vaak je het vervangt en wanneer je meer nodig hebt.
            </p>
            <KortAntwoord bron={{ naam: 'Quooker: What maintenance does a Quooker require?', url: 'https://dealerportal.quooker.co.uk/en/downloads/download/1' }}>
              Elke Quooker heeft een HiTAC-filter van actieve kool in het reservoir. Dat haalt chloor, bepaalde bestrijdingsmiddelen en organische vervuiling uit het kokende water en verbetert de smaak. Het is geen kalkfilter en het filtert je koude water niet. PFAS, medicijnresten en microplastics noemt Quooker niet; daarvoor heb je een osmosemembraan nodig.
            </KortAntwoord>
            <AuteurRegel />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Twee filters</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Heeft een Quooker een waterfilter?</h2>
            <p className="mt-4 text-dim leading-relaxed max-w-3xl">
              Ja, en soms zelfs twee. Welk filter je hebt, hangt af van je opstelling. Iedere Quooker heeft een filter in het reservoir. Heb je de CUBE erbij gekocht voor gekoeld en bruisend water, dan zit daar een tweede filter in. Ze filteren elk een ander deel van het water dat uit je kraan komt.
            </p>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-amber/10 text-ink">
                  <tr>
                    <th scope="col" className="p-4 font-display font-bold">Filter</th>
                    <th scope="col" className="p-4 font-display font-bold">Waar zit het?</th>
                    <th scope="col" className="p-4 font-display font-bold">Welk water gaat erdoor?</th>
                    <th scope="col" className="p-4 font-display font-bold">Wat doet het?</th>
                    <th scope="col" className="p-4 font-display font-bold">Vervangen</th>
                  </tr>
                </thead>
                <tbody>
                  {FILTERS.map(([naam, waar, water, wat, vervangen]) => (
                    <tr key={naam} className="border-t border-edge align-top">
                      <th scope="row" className="p-4 font-semibold text-ink">{naam}</th>
                      <td className="p-4 text-dim">{waar}</td>
                      <td className="p-4 text-dim">{water}</td>
                      <td className="p-4 text-dim">{wat}</td>
                      <td className="p-4 text-dim">{vervangen}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat doet het HiTAC-filter in je Quooker?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Het HiTAC-filter is een filter van <strong className="text-ink">actieve kool</strong>. Actieve kool heeft een enorm groot oppervlak waaraan stoffen blijven plakken. Quooker schrijft zelf dat de koolstof chloor, bepaalde bestrijdingsmiddelen en organische vervuiling opneemt, en dat het filter de smaak verbetert en geurtjes en verkleuring weghaalt.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Daar zit het voordeel vooral in: thee en koffie smaken frisser zonder chloorsmaak. Nederlands kraanwater bevat overigens weinig chloor, omdat de meeste drinkwaterbedrijven zonder chloor zuiveren. Je merkt het effect dus vooral in de smaak, minder in wat er uit het water verdwijnt.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Belangrijk om te weten: Quooker zegt er letterlijk bij dat het HiTAC-filter <strong className="text-ink">geen kalkfilter</strong> is. Kalk gaat er dus gewoon doorheen en zet zich af in het reservoir en de perlator. Daarover verderop meer.
            </p>

            <h3 className="mt-10 font-display text-xl font-bold text-ink">Alleen het kokende water gaat door het filter</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Dit is het punt dat de meeste mensen verrast. Het HiTAC-filter zit ín het reservoir, de boiler onder het aanrecht. Alleen water dat de Quooker kookt, stroomt erdoorheen. Het koude water dat je uit dezelfde Quooker-kraan tapt om een glas te drinken, komt rechtstreeks uit de waterleiding en wordt dus niet door het Quooker waterfilter gefilterd.
            </p>
            <p className="mt-3 text-dim leading-relaxed">
              Wil je gefilterd koud water uit je Quooker, dan heb je de <strong className="text-ink">CUBE</strong> nodig. Dat is een losse module die gekoeld en bruisend water levert, met een eigen filter. Ook dan geldt: alleen het water uit de CUBE is gefilterd, niet het gewone koude water.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Onderhoud</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Quooker filter vervangen: hoe vaak?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Hoe vaak je een Quooker waterfilter vervangt, verschilt per filter en per regio. In het kort:
            </p>
            <ul className="mt-4 space-y-3 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">HiTAC-filter in het reservoir:</strong> in gebieden met zacht water gaat het volgens Quooker ongeveer 3 tot 5 jaar mee. In gebieden met hard water kun je het vervangen tijdens een onderhoudsbeurt, wanneer het reservoir toch wordt ontkalkt.</li>
              <li><strong className="text-ink">CUBE-filter:</strong> vervang je na 12 maanden, ongeacht hoeveel water je hebt getapt. De CUBE geeft dan zelf een licht- en geluidssignaal.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Het HiTAC-vervangfilter bestel je bij Quooker of je dealer. Het wordt geleverd met een stap-voor-stap instructie, zodat je het zelf kunt doen. Liever niet zelf aan de slag? Dan kan een Quooker-monteur het voor je doen.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Hoe zacht of hard het water bij jou is, hangt af van je regio. In Amsterdam is het bijvoorbeeld zacht. Lees daarover meer in onze pagina over <Link href="/kennisbank/drinkwater-amsterdam" className="underline hover:text-ink">drinkwater in Amsterdam</Link>. Algemene tips over vervangtermijnen van filters vind je in <Link href="/kennisbank/waterfilter-vervangen-hoe-vaak" className="underline hover:text-ink">hoe vaak moet je een waterfilter vervangen</Link>.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Quooker en kalk: wat helpt wel?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Omdat het Quooker waterfilter geen kalk tegenhoudt, zet kalk zich in de loop van de tijd af in het reservoir en in het zeefje van de kraan. Hoe snel dat gaat, hangt af van hoe hard je water is. Quooker noemt drie manieren om ermee om te gaan:
            </p>
            <ol className="mt-4 space-y-3 text-dim leading-relaxed list-decimal pl-5">
              <li><strong className="text-ink">Zelf onderhoud doen:</strong> de perlator (het zeefje in de uitloop) losdraaien en laten weken in een mengsel van witte azijn en water. Bij sommige reservoirs kun je ook de kalk zelf uitspoelen.</li>
              <li><strong className="text-ink">Een onderhoudsbeurt laten doen</strong> door een Quooker-monteur. Quooker adviseert dat minstens eens per twee jaar.</li>
              <li><strong className="text-ink">Een ontkalkingssysteem vóór de Quooker plaatsen</strong>, zoals de Quooker Scale Control.</li>
            </ol>
            <TussenCta titel="Wil je ook PFAS en medicijnresten uit je drinkwater?">
              Een Quooker maakt water heet, een osmosesysteem maakt het schoon. Met een 3-weg kraan of een apart kraantje heb je allebei. Vraag een vrijblijvende offerte aan of check eerst hoeveel PFAS er in jouw regio in het kraanwater zit.
            </TussenCta>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Eerlijk vergeleken</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Quooker waterfilter of osmosefilter: wat houdt wat tegen?</h2>
            <p className="mt-4 text-dim leading-relaxed max-w-3xl">
              Een Quooker is in de eerste plaats een kokendwaterkraan; het filter is een extraatje voor de smaak. Een osmosesysteem is juist gemaakt om drinkwater te zuiveren. In de tabel staat &ldquo;niet geclaimd&rdquo; als de fabrikant zelf niet zegt dat het filter die stof tegenhoudt.
            </p>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-amber/10 text-ink">
                  <tr>
                    <th scope="col" className="p-4 font-display font-bold">Stof</th>
                    <th scope="col" className="p-4 font-display font-bold">Quooker HiTAC-filter</th>
                    <th scope="col" className="p-4 font-display font-bold">Quooker CUBE-filter</th>
                    <th scope="col" className="p-4 font-display font-bold">Osmosesysteem</th>
                  </tr>
                </thead>
                <tbody>
                  {VERGELIJK.map(([stof, hitac, cube, osmose]) => (
                    <tr key={stof} className="border-t border-edge align-top">
                      <th scope="row" className="p-4 font-semibold text-ink">{stof}</th>
                      <td className="p-4 text-dim">{hitac}</td>
                      <td className="p-4 text-dim">{cube}</td>
                      <td className="p-4 text-dim">{osmose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-dim leading-relaxed max-w-3xl">
              Het verschil zit in de techniek. Actieve kool houdt vooral stoffen vast die smaak en geur geven. Een <Link href="/kennisbank/omgekeerde-osmose-filter" className="underline hover:text-ink">omgekeerde-osmosefilter</Link> perst water door een membraan met poriën van 0,0001 micron. Daar gaan watermoleculen doorheen, maar de meeste opgeloste stoffen niet: kalk, PFAS, medicijnresten en metalen zoals lood blijven achter.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/twee-kranen.jpg" alt="Quooker waterfilter naast een aparte kraan voor osmosewater op het aanrecht" fill loading="eager" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Combineren</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Een Quooker en een osmosesysteem samen</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Je hoeft niet te kiezen. Veel mensen houden hun Quooker voor kokend water en zetten er een osmosesysteem naast voor drinkwater. Het gefilterde water komt dan uit een <Link href="/3-weg-kraan" className="underline hover:text-ink">3-weg kraan</Link>, die gewoon water, gefilterd water en water met mineralen geeft, of uit een apart kraantje.
              </p>
              <p className="mt-4 text-dim leading-relaxed">
                Het <Link href="/osmosesysteem" className="underline hover:text-ink">osmosesysteem</Link> van Water-zuivering werkt zonder opslagtank: het filtert direct wanneer je de kraan opendraait. Het kastje is 10,5 cm breed en kan staand of liggend, dus het past vaak nog naast het reservoir van een Quooker. Twijfel je? Met de <Link href="/maatcheck" className="underline hover:text-ink">maatcheck</Link> zie je met je camera of het in jouw keukenkastje past.
              </p>
            </div>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wanneer is het Quooker waterfilter genoeg?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Gaat het je vooral om de smaak van thee en koffie, dan doet het Quooker waterfilter wat het moet doen. Nederlands kraanwater voldoet aan strenge normen; je hoeft het niet te filteren om het veilig te kunnen drinken. Lees daarover meer in <Link href="/kennisbank/is-kraanwater-veilig" className="underline hover:text-ink">is kraanwater veilig?</Link>
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Wil je verder gaan dan de wettelijke norm, bijvoorbeeld omdat je in een regio woont met veel PFAS in het kraanwater, dan is het Quooker-filter niet de oplossing. Kijk dan in de <Link href="/kennisbank/pfas-kaart-nederland" className="underline hover:text-ink">PFAS-kaart van Nederland</Link> hoe het in jouw regio zit, en lees welke <Link href="/waterfilter" className="underline hover:text-ink">soorten waterfilters</Link> PFAS wel tegenhouden.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over het Quooker waterfilter</h2>
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
              <p className="font-display font-bold text-ink">Lees ook</p>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <Link href="/kennisbank/beste-waterfilter-voor-thuis" className="card rounded-2xl p-5 block hover:border-amber transition-colors">
                  <span className="font-display font-bold text-ink">Beste waterfilter voor thuis</span>
                  <span className="mt-1 block text-sm text-dim">Filterkan, kraanfilter en osmose naast elkaar.</span>
                </Link>
                <Link href="/kennisbank/osmosewater-tappunt" className="card rounded-2xl p-5 block hover:border-amber transition-colors">
                  <span className="font-display font-bold text-ink">Osmosewater tappunt</span>
                  <span className="mt-1 block text-sm text-dim">Een apart kraantje naast je gewone kraan of Quooker.</span>
                </Link>
              </div>
            </div>
            <div className="mt-12">
              <p className="font-display font-bold text-ink">Bronnen</p>
              <ul className="mt-3 space-y-1 text-sm text-dim list-disc pl-5">
                <li><a href="https://dealerportal.quooker.co.uk/en/downloads/download/1" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Quooker: What maintenance does a Quooker require?</a></li>
                <li>Quooker: datablad Hollow Fibre filter voor de CUBE (vervangtermijn 12 maanden)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Kokend water uit je Quooker, zuiver water uit je osmosekraan</h2>
            <p className="mt-4 text-white/70">Een osmosesysteem onder het aanrecht filtert kalk, PFAS, medicijnresten en microplastics uit je drinkwater. Vraag vrijblijvend een offerte aan.</p>
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

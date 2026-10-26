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
  alternates: { canonical: '/kennisbank/drinkwater-amsterdam' },
  title: 'Drinkwater Amsterdam: bron, hardheid, PFAS — Water-zuivering',
  description:
    'Drinkwater Amsterdam: waar Waternet het water vandaan haalt, hoe zacht het is (7,8 °dH) en hoeveel PFAS erin zit volgens Greenpeace.',
  openGraph: {
    title: 'Drinkwater Amsterdam: bron, hardheid en PFAS',
    description: 'Waar het Amsterdamse kraanwater vandaan komt, hoe het gezuiverd wordt en wat er nog in zit.',
    url: 'https://www.water-zuivering.nl/kennisbank/drinkwater-amsterdam',
    images: ['/assets/img/glas-water.webp'],
  },
};

const FEITEN = [
  ['Waterbedrijf', 'Waternet (voor Amsterdam en omgeving)'],
  ['Productielocaties', 'Leiduin (bij Heemstede) en Weesperkarspel (Amsterdam-Zuidoost)'],
  ['Bronnen', 'Rijnwater via het Lekkanaal bij Nieuwegein, en kwelwater uit de Bethunepolder'],
  ['Hardheid', 'Gemiddeld 7,8 °dH: zacht water'],
  ['Zuivering', 'Grotendeels natuurlijk (duinen en plassen), met weinig of geen chloor'],
  ['PFAS (Greenpeace, sept. 2026)', 'Alle 934.520 inwoners in de categorie donkerrood: ruim twee keer de RIVM-richtwaarde'],
];

const ROUTES = [
  {
    titel: 'West van de Amstel: via de duinen naar Leiduin',
    stappen: [
      'Waternet neemt Rijnwater in uit het Lekkanaal bij Nieuwegein en zuivert het voor.',
      'Het voorgezuiverde water wordt in de Amsterdamse Waterleidingduinen in de bodem gebracht.',
      'Het zakt maandenlang door het duinzand. Volgens Waternet komt het na ongeveer drie maanden weer omhoog in de lagere delen van de duinen. Ook regenwater dat op de duinen valt, telt mee.',
      'In Leiduin volgt de nazuivering, waarna het water de stad in gaat.',
    ],
  },
  {
    titel: 'Oost van de Amstel: via de Waterleidingplas naar Weesperkarspel',
    stappen: [
      'De bron is kwelwater uit de Bethunepolder bij Maarssen: grondwater dat in de polder omhoog komt.',
      'Het water wordt eerst op natuurlijke wijze gezuiverd in de Waterleidingplas bij Loenen.',
      'Daarna gaat het naar productielocatie Weesperkarspel in Amsterdam-Zuidoost.',
      'Na de laatste zuiveringsstappen wordt het via het leidingnet geleverd.',
    ],
  },
];

const HARDHEID = [
  ['0 – 4 °dH', 'Zeer zacht'],
  ['4 – 8 °dH', 'Zacht (Amsterdam: 7,8 °dH)'],
  ['8 – 12 °dH', 'Gemiddeld'],
  ['12 – 18 °dH', 'Vrij hard'],
  ['18 – 30 °dH', 'Hard'],
];

const OPTIES = [
  ['Gewoon kraanwater drinken', 'Voldoet aan de wettelijke normen. PFAS blijft erin.', 'Gratis'],
  ['Filterkan met actief kool', 'Betere smaak en minder chloorlucht. Haalt PFAS maar deels weg en het patroon is snel verzadigd.', 'Laag, maar steeds nieuwe patronen'],
  ['Flessenwater', 'Ook flessenwater bevat soms PFAS, en het levert veel plastic op. Greenpeace raadt overstappen af.', 'Hoog per liter'],
  ['Osmosesysteem onder het aanrecht', 'Het membraan houdt het overgrote deel van de PFAS tegen, plus medicijnresten en microplastics.', 'Eenmalige aanschaf plus filters'],
];

const FAQ = [
  ['Waar komt het drinkwater in Amsterdam vandaan?', 'Waternet maakt het Amsterdamse drinkwater op twee plekken. Leiduin gebruikt Rijnwater uit het Lekkanaal dat eerst door de Amsterdamse Waterleidingduinen zakt. Weesperkarspel gebruikt kwelwater uit de Bethunepolder dat eerst door de Waterleidingplas gaat. Welke van de twee je krijgt, hangt af van of je west of oost van de Amstel woont.'],
  ['Is het drinkwater in Amsterdam hard of zacht?', 'Zacht. Waternet geeft een gemiddelde hardheid van 7,8 Duitse graden (°dH). Pas vanaf 12 °dH spreek je van hard water. Je hebt in Amsterdam dus minder last van kalkaanslag dan in grote delen van het oosten en zuiden van het land.'],
  ['Zit er PFAS in het Amsterdamse kraanwater?', 'Ja. Volgens de analyse van Greenpeace (22 september 2026) valt heel Amsterdam in de categorie donkerrood: meer dan anderhalf keer de RIVM-richtwaarde van 4,4 ng/l PEQ, en volgens Greenpeace ruim twee keer. De wettelijke Europese norm wordt wel gehaald. Het RIVM noemt het drinken van dit water niet gevaarlijk.'],
  ['Wordt er chloor aan het Amsterdamse drinkwater toegevoegd?', 'Weinig tot geen. Waternet zuivert het water vooral op natuurlijke wijze, via de duinen en de Waterleidingplas. Daardoor is chloor normaal gesproken niet nodig. Alleen bij een besmetting of bij werkzaamheden kan het tijdelijk wel gebruikt worden.'],
  ['Wat doet Waternet tegen PFAS?', 'Waternet zet actieve kool in om PFAS uit het drinkwater te halen en onderzoekt andere technieken, zoals membranen. Volgens Waternet kost die extra zuivering jaarlijks miljoenen euro\'s. Het bedrijf pleit daarnaast voor een Europees totaalverbod op PFAS.'],
  ['Hoe check ik de PFAS-waarde op mijn adres in Amsterdam?', 'Vul je postcode in bij onze PFAS-check. Je ziet dan de indicatie voor jouw regio, met een link naar de postcodechecker van Greenpeace voor de precieze uitslag op vier cijfers.'],
  ['Heb ik in Amsterdam een waterontharder nodig?', 'Meestal niet. Met 7,8 °dH is het Amsterdamse water al zacht. Een ontharder haalt bovendien alleen kalk weg en doet niets tegen PFAS of medicijnresten.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Drinkwater Amsterdam: waar het vandaan komt en wat erin zit"
        description="Waar het Amsterdamse kraanwater vandaan komt, hoe hard het is, hoeveel PFAS erin zit en wat je zelf kunt doen."
        image="https://www.water-zuivering.nl/assets/img/glas-water.webp"
        url="https://www.water-zuivering.nl/kennisbank/drinkwater-amsterdam"
        datePublished="2026-10-26"
        about={{ '@type': 'City', name: 'Amsterdam', sameAs: 'https://nl.wikipedia.org/wiki/Amsterdam' }}
        mentions={[{ '@type': 'Organization', name: 'Waternet', url: 'https://www.waternet.nl' }]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Drinkwater Amsterdam', url: 'https://www.water-zuivering.nl/kennisbank/drinkwater-amsterdam' },
        ]}
      />
      <FaqSchema items={FAQ} />
      <RevealObserver />
      <Header />

      <main>
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Kennisbank · Waterkwaliteit per stad</span>
            <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Drinkwater Amsterdam: waar het vandaan komt en wat erin zit
            </h1>
            <p className="mt-5 text-dim text-lg">
              Het <strong className="text-ink">drinkwater in Amsterdam</strong> heeft een bijzondere reis achter de rug: door de duinen of door een plas, voordat het uit je kraan komt. Hier lees je waar het vandaan komt, hoe zacht het is en wat er volgens de nieuwste metingen nog in zit.
            </p>
            <KortAntwoord bron={{ naam: 'Waternet en Greenpeace (22 september 2026)', url: 'https://www.waternet.nl/service-en-contact/drinkwater/waterkwaliteit/' }}>
              Drinkwater Amsterdam komt van Waternet, uit Rijnwater dat door de duinen zakt (Leiduin) en kwelwater uit de Bethunepolder (Weesperkarspel). Het water is zacht, gemiddeld 7,8 °dH, en voldoet aan de wettelijke normen. Wel valt heel Amsterdam volgens Greenpeace in de hoogste PFAS-categorie: ruim twee keer de RIVM-richtwaarde.
            </KortAntwoord>
            <AuteurRegel bijgewerkt="26 oktober 2026" />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">In één oogopslag</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">De feiten over Amsterdams kraanwater</h2>
            <p className="mt-4 text-dim leading-relaxed">
              De belangrijkste gegevens over drinkwater Amsterdam op een rij, met de bron erbij. Alle cijfers komen van Waternet zelf of uit de PFAS-analyse die Greenpeace in september 2026 publiceerde.
            </p>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <tbody>
                  {FEITEN.map(([k, v]) => (
                    <tr key={k} className="border-t border-edge first:border-t-0 align-top">
                      <th scope="row" className="p-4 font-semibold text-ink w-1/3">{k}</th>
                      <td className="p-4 text-dim">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Twee routes: zo komt het water in Amsterdam bij je kraan</h2>
            <p className="mt-4 text-dim leading-relaxed max-w-3xl">
              Waternet maakt het water voor Amsterdam op twee locaties, en de Amstel is ruwweg de grens. Woon je ten westen ervan, dan komt je water meestal uit Leiduin. Woon je ten oosten ervan, dan komt het uit Weesperkarspel. Volgens Waternet zijn de Rijn en de Bethunepolder ook voor de komende decennia de belangrijkste bronnen.
            </p>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {ROUTES.map((r) => (
                <div key={r.titel} className="reveal card rounded-2xl p-6">
                  <h3 className="font-display font-bold text-ink">{r.titel}</h3>
                  <ol className="mt-4 space-y-3 text-sm text-dim leading-relaxed list-decimal pl-5">
                    {r.stappen.map((s) => <li key={s}>{s}</li>)}
                  </ol>
                </div>
              ))}
            </div>
            <p className="mt-8 text-dim leading-relaxed max-w-3xl">
              Het voordeel van die lange, natuurlijke route voor drinkwater Amsterdam: bacteriën en virussen worden door de bodem uitgefilterd. Daardoor hoeft Waternet weinig tot geen <strong className="text-ink">chloor</strong> toe te voegen, iets wat in veel andere landen wel standaard is. Het nadeel: stoffen die heel slecht afbreken, zoals PFAS, komen via de Rijn het systeem in en gaan niet vanzelf weg.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Kalk</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoe hard is het drinkwater in Amsterdam?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Waternet meet een gemiddelde hardheid van <strong className="text-ink">7,8 °dH</strong>. Dat is zacht water. In de praktijk betekent dit weinig kalkaanslag op je kranen, minder snel een verkalkte waterkoker en geen noodzaak voor een waterontharder.
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-edge bg-white max-w-xl">
              <table className="w-full text-sm text-left">
                <thead className="bg-amber/10 text-ink">
                  <tr>
                    <th scope="col" className="p-4 font-display font-bold">Hardheid</th>
                    <th scope="col" className="p-4 font-display font-bold">Noemen we</th>
                  </tr>
                </thead>
                <tbody>
                  {HARDHEID.map(([h, n]) => (
                    <tr key={h} className="border-t border-edge">
                      <td className="p-4 text-dim">{h}</td>
                      <td className="p-4 text-dim">{n}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-dim leading-relaxed">
              Zie je toch kalkvlekken in je douche? Dat komt bij zacht water vooral door verdamping: de weinige kalk die erin zit, blijft achter als het water opdroogt. Meer daarover lees je in onze uitleg over <Link href="/kennisbank/kalkaanslag-in-huis" className="underline hover:text-ink">kalkaanslag in huis</Link>.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">PFAS</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">PFAS in het Amsterdamse kraanwater</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Op 22 september 2026 publiceerde Greenpeace een analyse van de meetgegevens van alle tien de Nederlandse waterbedrijven. Amsterdam staat daarin bovenaan de lijst van gemeenten met de meeste inwoners boven de RIVM-richtwaarde: <strong className="text-ink">alle 934.520 Amsterdammers</strong> vallen in de categorie donkerrood. Dat betekent meer dan 6,6 ng/l PEQ, of meer dan anderhalf keer de gezondheidskundige richtwaarde van 4,4 ng/l. Volgens Greenpeace ligt de waarde in Amsterdam op ruim twee keer die richtwaarde.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Hoe zwaar moet je dat nemen? Een paar kanttekeningen:
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li>De RIVM-richtwaarde is <strong className="text-ink">geen wettelijke norm</strong>. De wettelijke Europese norm ligt veel hoger (100 ng/l voor de som van 20 PFAS), en die haalt Waternet ruim.</li>
              <li>Het RIVM noemt het drinken van dit water <strong className="text-ink">niet gevaarlijk</strong>. Het gaat om de totale blootstelling over een lange periode, ook via voedsel.</li>
              <li>Waternet gebruikt al <strong className="text-ink">actieve kool</strong> om PFAS af te vangen en onderzoekt membraantechniek. Die extra zuivering kost volgens Waternet jaarlijks miljoenen euro&apos;s.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Dat Amsterdam zo hoog scoort, komt door de bron: de Rijn neemt onderweg vervuiling op van industrie in Duitsland en Nederland. Hoe het in de rest van het land zit, lees je in <Link href="/kennisbank/pfas-in-kraanwater" className="underline hover:text-ink">PFAS in kraanwater</Link>. Wil je de waarde voor jouw postcode weten, doe dan de <Link href="/pfas-check" className="underline hover:text-ink">PFAS-check</Link>.
            </p>
            <TussenCta titel="Zelf onder de RIVM-richtwaarde zitten in Amsterdam?">
              Een osmosesysteem onder het aanrecht houdt het overgrote deel van de PFAS tegen. Ons systeem werkt zonder opslagtank en past ook in een kleine Amsterdamse keuken. Je ontvangt vrijblijvend een prijs voor jouw situatie.
            </TussenCta>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Is het drinkwater in Amsterdam veilig?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Ja, drinkwater Amsterdam is veilig. Het Waterlaboratorium controleert het water van Waternet elke dag op onder meer smaak, geur, temperatuur, helderheid, hardheid en een lange lijst stoffen. Het moet voldoen aan de Europese drinkwaterrichtlijn, de Drinkwaterwet en het Drinkwaterbesluit. Je kunt het Amsterdamse kraanwater dus gewoon drinken.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Twee dingen hebben wel invloed op wat er uiteindelijk in jouw glas komt:
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Je eigen leidingen.</strong> In woningen van vóór 1960 kunnen nog loden waterleidingen zitten. Amsterdam heeft veel oude panden. Twijfel je, laat dan een installateur kijken. Het waterbedrijf is alleen verantwoordelijk tot en met de watermeter.</li>
              <li><strong className="text-ink">Stoffen die niet in de norm zitten.</strong> Naast PFAS gaat het om lage concentraties medicijnresten en microplastics. Die staan niet allemaal met een harde grens in de wet. Lees meer in <Link href="/kennisbank/is-kraanwater-veilig" className="underline hover:text-ink">is kraanwater veilig?</Link></li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Bij een storing, bruin water of een lekkage in de straat check je eerst of er werkzaamheden zijn. Dat kan met onze <Link href="/storingen" className="underline hover:text-ink">storingen-check</Link>.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Zelf doen</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Minder PFAS uit je kraan in Amsterdam: je opties</h2>
            <p className="mt-4 text-dim leading-relaxed max-w-3xl">
              Wil je niet wachten tot de waterbedrijven het PFAS-probleem bij de bron hebben opgelost? Dit zijn de mogelijkheden voor thuis, eerlijk naast elkaar gezet.
            </p>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-amber/10 text-ink">
                  <tr>
                    <th scope="col" className="p-4 font-display font-bold">Optie</th>
                    <th scope="col" className="p-4 font-display font-bold">Wat het doet</th>
                    <th scope="col" className="p-4 font-display font-bold">Kosten</th>
                  </tr>
                </thead>
                <tbody>
                  {OPTIES.map(([o, w, k]) => (
                    <tr key={o} className="border-t border-edge align-top">
                      <th scope="row" className="p-4 font-semibold text-ink">{o}</th>
                      <td className="p-4 text-dim">{w}</td>
                      <td className="p-4 text-dim">{k}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/cabinet-install.png" alt="Osmosesysteem onder het aanrecht dat het drinkwater in Amsterdam filtert" fill loading="eager" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Osmose</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Past een osmosesysteem in een Amsterdamse keuken?</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Veel Amsterdamse keukens zijn klein, zeker in grachtenpanden en portiekflats. Daarom werkt ons <Link href="/osmosesysteem" className="underline hover:text-ink">osmosesysteem</Link> zonder opslagtank: het filtert direct op het moment dat je tapt en past in een gewoon keukenkastje. Je krijgt een aparte kraan of een 3-weg-kraan die ook je gewone warme en koude water levert.
              </p>
              <p className="mt-4 text-dim leading-relaxed">
                Omdat het Amsterdamse water zacht is, gaan de filters vaak de normale levensduur mee: het voorfilter en het nafilter ongeveer 12 maanden, het membraan ongeveer 24 maanden. Huur je? Lees dan eerst <Link href="/kennisbank/waterzuiveraar-installeren" className="underline hover:text-ink">waterzuiveraar installeren</Link>; daar staat ook wat je met je verhuurder regelt.
              </p>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over drinkwater in Amsterdam</h2>
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
              <p className="font-display font-bold text-ink">Vergelijk met andere steden</p>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <Link href="/kennisbank/drinkwater-dordrecht-zwijndrecht" className="card rounded-2xl p-5 block hover:border-amber transition-colors">
                <span className="font-display font-bold text-ink">Drinkwater in Dordrecht en Zwijndrecht</span>
                <span className="mt-1 block text-sm text-dim">Maaswater uit de Biesbosch en diep grondwater, PFAS-categorie rood.</span>
              </Link>
              <Link href="/kennisbank/kraanwater-utrecht" className="card rounded-2xl p-5 block hover:border-amber transition-colors">
                <span className="font-display font-bold text-ink">Kraanwater in Utrecht</span>
                <span className="mt-1 block text-sm text-dim">Grondwater uit zeven bronnen, grotendeels onder de PFAS-richtwaarde.</span>
              </Link>
              </div>
            </div>
            <div className="mt-12">
              <p className="font-display font-bold text-ink">Bronnen</p>
              <ul className="mt-3 space-y-1 text-sm text-dim list-disc pl-5">
                <li><a href="https://www.waternet.nl/service-en-contact/drinkwater/waterkwaliteit/" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Waternet: waterkwaliteit en hardheid</a></li>
                <li><a href="https://waternet.nl/en/service-and-contact/tap-water/where-does-our-tap-water-come-from" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Waternet: waar komt ons kraanwater vandaan</a></li>
                <li><a href="https://www.waternet.nl/service-en-contact/drinkwater/waterkwaliteit/pfas/" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Waternet: PFAS in drinkwater</a></li>
                <li><a href="https://omgevingsweb.nl/wp-content/uploads/2026/09/7f7a499b-260922-uitleg-en-verantwoording-bij-de-pfas-kraanwater-postcodechecker.docx.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Greenpeace: uitleg en verantwoording bij de PFAS kraanwater postcodechecker (22 september 2026)</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">PFAS-vrij water uit je kraan in Amsterdam</h2>
            <p className="mt-4 text-white/70">Een osmosesysteem zonder tank past ook in een kleine Amsterdamse keuken. Vraag vrijblijvend een offerte aan en hoor wat het op jouw adres kost.</p>
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

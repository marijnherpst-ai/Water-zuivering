import Image from 'next/image';
import Link from 'next/link';
import TussenCta from '@/components/TussenCta';
import AuteurRegel from '@/components/AuteurRegel';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import ArticleSchema from '@/components/ArticleSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import KortAntwoord from '@/components/KortAntwoord';
import FaqSchema from '@/components/FaqSchema';

export const metadata = {
  alternates: { canonical: '/kennisbank/kraanwater-buitenland' },
  title: 'Kraanwater buitenland: in welke landen kun je het drinken?',
  description:
    'Kraanwater buitenland: per land zien of je het kunt drinken, wat je doet met ijsblokjes en tandenpoetsen, en hoe je water onderweg veilig maakt.',
  openGraph: {
    title: 'Kraanwater in het buitenland: drinken of niet?',
    description: 'Overzicht per land, de regels voor ijsblokjes en tandenpoetsen, en hoe je water op reis veilig maakt.',
    url: 'https://www.water-zuivering.nl/kennisbank/kraanwater-buitenland',
    images: ['/assets/img/glas-water.webp'],
  },
};

// Grouped by region. Sources: TUI country overview (July 2026), Energievergelijk and the Voedingscentrum
// holiday advice. Local quality changes, so the page tells readers to check before they travel.
const LANDEN = [
  {
    regio: 'Europa',
    rijen: [
      ['België, Duitsland, Oostenrijk, Zwitserland', 'Ja', 'Streng gecontroleerd, vergelijkbaar met Nederland.'],
      ['Denemarken, Finland, IJsland, Noorwegen, Zweden', 'Ja', 'Vaak grondwater of bronwater. In IJsland kan warm water naar zwavel ruiken; dat is onschadelijk.'],
      ['Ierland, Verenigd Koninkrijk, Tsjechië', 'Ja', 'Veilig, soms met een duidelijke chloorsmaak.'],
      ['Frankrijk, Italië, Portugal', 'Ja', 'Veilig, maar de smaak wisselt per regio. Veel locals kopen toch flessen.'],
      ['Spanje', 'Meestal', 'Op de meeste plekken veilig. Op de eilanden en aan de kust is het water vaak hard of ontzilt en smaakt het minder.'],
      ['Griekenland, Kroatië', 'Meestal', 'In steden veilig. Op kleine eilanden en na zware regen liever flessenwater.'],
      ['Turkije, Montenegro, Albanië, Bulgarije', 'Liever niet', 'De kwaliteit verschilt sterk per plek. Neem verzegelde flessen.'],
    ],
  },
  {
    regio: 'Noord-Amerika en Caribisch gebied',
    rijen: [
      ['Canada, Verenigde Staten', 'Ja', 'Veilig, vaak met chloorsmaak.'],
      ['Aruba, Curaçao, Bonaire', 'Ja', 'Gemaakt van ontzilt zeewater en streng gecontroleerd.'],
      ['Mexico, Cuba, Dominicaanse Republiek', 'Nee', 'Drink alleen verzegeld flessenwater, ook in het hotel.'],
    ],
  },
  {
    regio: 'Azië en Midden-Oosten',
    rijen: [
      ['Singapore, Japan, Zuid-Korea', 'Ja', 'Een van de weinige plekken in Azië waar het kraanwater goed te drinken is.'],
      ['Thailand, Vietnam, Indonesië, India, Sri Lanka', 'Nee', 'Flessenwater, ook voor tandenpoetsen.'],
      ['Verenigde Arabische Emiraten, Malediven', 'Nee', 'Ontzilt water dat via tanks en leidingen kan worden besmet. Gebruik flessen.'],
    ],
  },
  {
    regio: 'Afrika, Zuid-Amerika en Oceanië',
    rijen: [
      ['Marokko, Egypte, Kaapverdië, Gambia, Tanzania', 'Nee', 'Altijd verzegeld flessenwater of zelf zuiveren.'],
      ['Zuid-Afrika', 'Wisselend', 'In grote steden vaak goed, daarbuiten niet. Bij twijfel: fles.'],
      ['Brazilië, Peru, Colombia', 'Nee', 'Flessenwater of zelf zuiveren.'],
      ['Australië, Nieuw-Zeeland', 'Ja', 'Veilig in steden. In afgelegen gebieden kan regenwater uit tanks komen.'],
    ],
  },
];

const REGELS = [
  ['IJsblokjes', 'In landen waar je geen kraanwater drinkt, zijn ijsblokjes van onbekende herkomst ook een risico. Industrieel ijs met een gat in het midden komt meestal uit een fabriek; los gehakt ijs vaak niet.'],
  ['Tandenpoetsen', 'Een slokje is al genoeg om ziek te worden. Gebruik in risicolanden flessenwater, ook voor het spoelen van je tandenborstel.'],
  ['Koffie en thee', 'Water dat goed heeft gekookt is veilig. Lauw water uit een waterkoker die niet aan de kook kwam, niet.'],
  ['Rauwe groente en fruit', 'Gewassen sla of fruit dat je niet zelf schilt, is gespoeld met kraanwater. Kies in risicolanden voor gekookt of geschild.'],
  ['Verzegelde flessen', 'Check of de dop nog dicht zit. Navullen met kraanwater komt voor, vooral bij losse flessen op straat.'],
];

const FAQ = [
  ['In welke landen kun je kraanwater drinken?', 'In het grootste deel van West- en Noord-Europa, in Canada, de Verenigde Staten, Australië, Nieuw-Zeeland, Singapore, Japan en op Aruba en Curaçao kun je het kraanwater in steden gewoon drinken. In grote delen van Azië, Afrika, Midden- en Zuid-Amerika en in een deel van Oost-Europa neem je beter verzegeld flessenwater.'],
  ['Kun je kraanwater drinken in Spanje?', 'Op de meeste plekken is kraanwater in Spanje veilig. Op de eilanden en langs de kust is het water vaak hard of ontzilt en smaakt het minder lekker. Daarom kopen veel mensen daar toch flessen.'],
  ['Kun je kraanwater drinken in Turkije?', 'In grote steden en toeristische gebieden is het kraanwater vaak behandeld, maar de leidingen in gebouwen zijn niet altijd goed. Het advies is daarom verzegeld flessenwater te drinken.'],
  ['Mag je je tanden poetsen met kraanwater in het buitenland?', 'In landen waar het kraanwater veilig is wel. In landen waar je geen kraanwater drinkt, poets je je tanden ook met flessenwater, omdat een kleine slok al genoeg kan zijn om ziek te worden.'],
  ['Is gekookt kraanwater in het buitenland veilig?', 'Water dat een paar minuten goed heeft doorgekookt, is vrij van bacteriën en virussen. Koken haalt wel geen chemische stoffen zoals zware metalen of pesticiden weg, en het verbetert de smaak niet.'],
  ['Werkt een waterfilter op vakantie?', 'Een reisfilter met een poriegrootte van ongeveer 0,1 micron houdt bacteriën en parasieten tegen, maar de meeste virussen niet. Wil je ook virussen aanpakken, combineer een filter dan met koken of zuiveringstabletten.'],
  ['Waarom is Nederlands kraanwater zo goed?', 'Nederlandse drinkwaterbedrijven zuiveren in meerdere stappen, voegen geen chloor toe en controleren het water continu volgens het Drinkwaterbesluit. Daardoor hoort Nederland bij de landen met het meest betrouwbare kraanwater ter wereld.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Kraanwater buitenland: in welke landen kun je het drinken?"
        description="Per land zien of je kraanwater in het buitenland kunt drinken, met regels voor ijsblokjes en tandenpoetsen."
        image="https://www.water-zuivering.nl/assets/img/glas-water.webp"
        url="https://www.water-zuivering.nl/kennisbank/kraanwater-buitenland"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Kraanwater buitenland', url: 'https://www.water-zuivering.nl/kennisbank/kraanwater-buitenland' },
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
              Kraanwater buitenland: in welke landen kun je het drinken?
            </h1>
            <p className="mt-5 text-dim text-lg">
              Thuis drink je zonder nadenken water uit de kraan. Op reis is dat anders. Hier zie je per land of <strong className="text-ink">kraanwater in het buitenland</strong> veilig is, waar je verder op let en hoe je water onderweg zelf drinkbaar maakt.
            </p>
            <KortAntwoord bron={{ naam: 'TUI, overzicht kraanwater per land', url: 'https://www.tui.nl/smile/blog/kraanwater-buitenland/' }}>
              In het grootste deel van West- en Noord-Europa, Noord-Amerika, Australië, Japan en Singapore kun je kraanwater in het buitenland gewoon drinken. In grote delen van Azië, Afrika, Midden- en Zuid-Amerika en een deel van Oost-Europa niet. Neem daar verzegeld flessenwater, ook voor tandenpoetsen en ijsblokjes, of kook het water eerst.
            </KortAntwoord>
            <AuteurRegel />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Overzicht per land</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Kraanwater buitenland per land: wel of niet drinken?</h2>
            <p className="mt-4 text-dim leading-relaxed max-w-3xl">
              De tabel geeft per land het algemene beeld voor steden en toeristische gebieden. Op het platteland, op kleine eilanden en in oude gebouwen kan het anders zijn. Waterkwaliteit verandert soms snel, bijvoorbeeld na een overstroming of aardbeving, dus check vlak voor vertrek ook het reisadvies van het <a href="https://www.voedingscentrum.nl" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Voedingscentrum</a>.
            </p>
            {LANDEN.map(({ regio, rijen }) => (
              <div key={regio} className="mt-10">
                <h3 className="font-display text-xl font-bold text-ink">{regio}</h3>
                <div className="mt-4 overflow-x-auto rounded-2xl border border-edge bg-white">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-amber/10 text-ink">
                      <tr>
                        <th scope="col" className="p-4 font-display font-bold">Land</th>
                        <th scope="col" className="p-4 font-display font-bold">Kraanwater drinken?</th>
                        <th scope="col" className="p-4 font-display font-bold">Goed om te weten</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rijen.map(([land, oordeel, toelichting]) => (
                        <tr key={land} className="border-t border-edge align-top">
                          <th scope="row" className="p-4 font-semibold text-ink">{land}</th>
                          <td className="p-4 text-dim whitespace-nowrap">{oordeel}</td>
                          <td className="p-4 text-dim">{toelichting}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waarom is kraanwater in het ene land veilig en in het andere niet?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Of je kraanwater in het buitenland kunt drinken, hangt niet alleen af van de zuivering bij de bron. Minstens zo belangrijk is wat er onderweg gebeurt. In veel landen zijn drie dingen het probleem:
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Lekkende of oude leidingen.</strong> Als de druk wegvalt, kan vuil grondwater de leiding in worden gezogen. Water dat bij de fabriek schoon was, is dat bij de kraan dan niet meer.</li>
              <li><strong className="text-ink">Watertanks op daken.</strong> In warme landen staat water vaak dagen in een tank op het dak. Daar groeien bacteriën en algen snel.</li>
              <li><strong className="text-ink">Minder controle.</strong> Waar weinig wordt gemeten, merk je een besmetting pas als mensen ziek worden.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              De klachten die je daarvan krijgt, zijn meestal maag-darmklachten: diarree, buikkramp en misselijkheid, oftewel reizigersdiarree. Die komt vooral door bacteriën zoals E. coli, door virussen en door parasieten als Giardia. Voor de meeste mensen is het vervelend maar niet gevaarlijk. Voor baby&apos;s, ouderen en mensen met een zwakke weerstand kan uitdroging wel snel ernstig worden.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              In landen waar het kraanwater wél veilig is, kan het alsnog anders smaken dan thuis. Veel landen voegen chloor toe om bacteriën in de leidingen te doden. Dat proef je, maar het is geen gezondheidsrisico. Op eilanden en in droge gebieden komt het water vaak uit een ontziltingsinstallatie; dat is veilig, maar het smaakt vlak of zout.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Op reis</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Niet alleen drinken: hier zit het kraanwater ook in</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Wie in een risicoland alleen flessenwater drinkt, krijgt via een omweg toch vaak kraanwater binnen. Let vooral op deze vijf dingen:
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {REGELS.map(([titel, uitleg]) => (
                <div key={titel} className="reveal card rounded-2xl p-5">
                  <h3 className="font-display font-bold text-ink">{titel}</h3>
                  <p className="mt-2 text-sm text-dim leading-relaxed">{uitleg}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/glas-water.webp" alt="Glas helder water: kraanwater buitenland is niet overal veilig om te drinken" fill loading="eager" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Zelf drinkbaar maken</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Geen flessenwater? Zo maak je water onderweg veilig</h2>
              <ol className="mt-4 space-y-3 text-dim leading-relaxed list-decimal pl-5">
                <li><strong className="text-ink">Koken.</strong> Laat het water een paar minuten goed doorkoken. Dat doodt bacteriën, virussen en parasieten. Chemische stoffen haalt koken niet weg.</li>
                <li><strong className="text-ink">Filteren.</strong> Een reisfilter van rond 0,1 micron houdt bacteriën en parasieten tegen, de meeste virussen niet. Troebel water filter je altijd eerst.</li>
                <li><strong className="text-ink">Zuiveringstabletten.</strong> Tabletten op basis van chloor of chloordioxide doden bacteriën en virussen. Houd je aan de wachttijd op de verpakking; tegen sommige parasieten werken ze trager.</li>
              </ol>
              <p className="mt-4 text-dim leading-relaxed">
                Voor de beste zekerheid combineer je filteren met koken of tabletten. Ga je echt off-grid, lees dan ook hoe je <Link href="/kennisbank/water-zuiveren-noodsituatie" className="underline hover:text-ink">water zuivert in een noodsituatie</Link>. Twijfel je welk type filter waarvoor bedoeld is, bekijk dan de <Link href="/waterfilter" className="underline hover:text-ink">soorten waterfilters</Link> naast elkaar.
              </p>
            </div>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Terug thuis: is Nederlands kraanwater dan altijd perfect?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Wie een paar weken flessenwater heeft gesjouwd, waardeert de kraan thuis weer. Nederland hoort bij de landen met het meest betrouwbare kraanwater: de drinkwaterbedrijven zuiveren in meerdere stappen, voegen geen chloor toe en controleren continu. Hoe die controle werkt, lees je in <Link href="/kennisbank/is-kraanwater-veilig" className="underline hover:text-ink">is kraanwater veilig?</Link> en in onze uitleg over de <Link href="/kennisbank/drinkwaternormen-nederland" className="underline hover:text-ink">drinkwaternormen in Nederland</Link>.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Toch is &quot;veilig volgens de norm&quot; niet hetzelfde als &quot;helemaal schoon&quot;. In Nederlands kraanwater worden lage gehaltes PFAS en medicijnresten gemeten, en in oude huizen kunnen loden leidingen meespelen. Wat er in jouw regio speelt, zie je met de <Link href="/pfas-check" className="underline hover:text-ink">gratis PFAS-check per postcode</Link>.
            </p>
            <TussenCta titel="Thuis het zuiverste water uit je eigen kraan?">
              Een osmosesysteem onder het aanrecht filtert PFAS, medicijnresten, kalk en microplastics uit je kraanwater. Geen flessen meer sjouwen, thuis of na de vakantie.
            </TussenCta>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over kraanwater in het buitenland</h2>
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

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Thuis altijd zuiver water uit de kraan</h2>
            <p className="mt-4 text-white/70">Een osmosesysteem onder het aanrecht haalt PFAS, medicijnresten en kalk uit je drinkwater. Vraag vrijblijvend een offerte aan.</p>
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

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
  alternates: { canonical: '/kennisbank/waterzuivering-nederland' },
  title: 'Waterzuivering: hoe werkt het in Nederland, stap voor stap',
  description:
    'Waterzuivering in Nederland uitgelegd: hoe een rioolwaterzuivering afvalwater schoonmaakt en hoe drinkwaterbedrijven van grond- en rivierwater kraanwater maken.',
  openGraph: {
    title: 'Waterzuivering: hoe werkt het in Nederland, stap voor stap',
    description: 'Van doorgespoeld toilet tot schoon oppervlaktewater, en van rivier of bodem tot je kraan: de twee soorten waterzuivering stap voor stap.',
    url: 'https://www.water-zuivering.nl/kennisbank/waterzuivering-nederland',
    images: ['/assets/img/kennisbank/is-kraanwater-veilig.png'],
  },
};

const VERSCHIL = [
  ['Wat gaat erin?', 'Afvalwater uit huizen en bedrijven, plus regenwater uit het riool', 'Grondwater, rivierwater of water uit meren'],
  ['Wat komt eruit?', 'Schoon genoeg water om te lozen op een rivier, kanaal of sloot', 'Drinkwater dat aan de wettelijke normen voldoet'],
  ['Wie doet het?', 'De 21 waterschappen', 'De 10 drinkwaterbedrijven'],
  ['Waar?', 'In een rioolwaterzuiveringsinstallatie (rwzi)', 'Op een pompstation of productielocatie'],
  ['Hoe betaal je het?', 'Via de zuiveringsheffing van het waterschap', 'Via je waterrekening'],
];

const RWZI = [
  ['Roosters', 'Het rioolwater stroomt eerst door een rooster. Dat houdt het grove vuil tegen: vochtige doekjes, wattenstaafjes, plastic en takken. Dit vuil wordt afgevoerd en verbrand.'],
  ['Zandvanger', 'Het water stroomt hier langzamer. Zand en grind zakken naar de bodem. Zonder deze stap zouden pompen en leidingen snel slijten.'],
  ['Voorbezinking', 'In een grote ronde tank krijgen zware deeltjes de tijd om te bezinken. Wat op de bodem ligt, heet slib. Dat wordt later apart verwerkt.'],
  ['Beluchting met bacteriën', 'Dit is het hart van de zuivering. In de beluchtingstank wordt lucht door het water geblazen. Bacteriën eten de opgeloste afvalstoffen op, zoals resten van urine, ontlasting en zeep. Dit mengsel van water en bacteriën heet actief slib.'],
  ['Nabezinking', 'In de laatste tank zakken de bacteriën naar de bodem. Een deel gaat terug naar de beluchtingstank om opnieuw te werken. Het heldere water bovenin stroomt weg.'],
  ['Lozen op oppervlaktewater', 'Het gezuiverde water wordt gecontroleerd en gaat naar een rivier, kanaal of sloot. Soms volgt eerst nog een extra stap, zoals een zandfilter.'],
];

const DRINKWATER = [
  ['Winnen', 'Grondwater wordt opgepompt uit diepe putten. Rivierwater wordt ingenomen en eerst opgeslagen, bijvoorbeeld in spaarbekkens of in de duinen.'],
  ['Beluchten', 'Vooral bij grondwater. Er wordt lucht door het water gemengd. Daardoor verdwijnen gassen en klonteren ijzer en mangaan samen, zodat ze eruit gefilterd kunnen worden.'],
  ['Zandfiltratie', 'Het water zakt door een dikke laag zand. Het zand houdt deeltjes tegen, en bacteriën op de zandkorrels breken stoffen af.'],
  ['Actieve kool', 'Vooral bij rivierwater. Actieve kool bindt stoffen die voor geur en smaak zorgen, en een deel van de bestrijdingsmiddelen en medicijnresten.'],
  ['Desinfectie zonder chloor', 'Met UV-licht of ozon worden bacteriën en virussen uitgeschakeld. Nederlandse drinkwaterbedrijven gebruiken daarvoor geen chloor.'],
  ['Ontharden en controleren', 'Op veel plekken wordt een deel van de kalk uit het water gehaald. Daarna volgt de controle en gaat het water het leidingnet in.'],
];

const FAQ = [
  ['Wat is waterzuivering?', 'Waterzuivering is het schoonmaken van water. In Nederland zijn er twee soorten. Een rioolwaterzuivering maakt afvalwater schoon genoeg om het terug te geven aan de natuur. Een drinkwaterzuivering maakt van grondwater of rivierwater veilig kraanwater.'],
  ['Hoe werkt een rioolwaterzuiveringsinstallatie?', 'In zes stappen. Roosters halen het grove vuil eruit, een zandvanger het zand, en in de voorbezinking zakken zware deeltjes naar de bodem. Daarna eten bacteriën in de beluchtingstank de opgeloste afvalstoffen op. In de nabezinking zakken de bacteriën naar de bodem en stroomt het schone water naar een rivier of kanaal.'],
  ['Wordt van rioolwater drinkwater gemaakt?', 'Niet rechtstreeks. Gezuiverd rioolwater gaat naar rivieren, kanalen en sloten. Een deel van het Nederlandse drinkwater wordt wel gemaakt van rivierwater, en daar zit ook gezuiverd afvalwater van steden stroomopwaarts in. Drinkwaterbedrijven zuiveren dat water daarna nog uitgebreid.'],
  ['Hoeveel rioolwaterzuiveringen zijn er in Nederland?', 'Volgens het CBS waren er in 2024 in Nederland 313 rioolwaterzuiveringsinstallaties. Ze worden allemaal beheerd door de waterschappen en hoogheemraadschappen.'],
  ['Waar komt ons drinkwater vandaan?', 'Ongeveer 60 procent wordt gemaakt van grondwater en ongeveer 40 procent van oppervlaktewater, zoals de Maas, de Rijn en het IJsselmeer. In het westen van het land komt het drinkwater vooral uit rivieren, in het oosten en zuiden vooral uit de bodem.'],
  ['Haalt een rioolwaterzuivering medicijnresten uit het water?', 'Maar voor een deel. Een rioolwaterzuivering is ontworpen om afval van mensen, zeep en voedselresten af te breken. Medicijnresten, PFAS en microplastics zijn lastiger. Een deel komt daardoor in rivieren terecht. Op een aantal zuiveringen wordt daarom een extra zuiveringsstap gebouwd of getest.'],
  ['Zit er chloor in het Nederlandse drinkwater?', 'Nee. Nederlandse drinkwaterbedrijven maken het water veilig met onder meer zandfiltratie, UV-licht en ozon. Chloor wordt alleen tijdelijk gebruikt na een storing of werkzaamheden.'],
  ['Wat mag je niet door het toilet of de gootsteen spoelen?', 'Vochtige doekjes, medicijnen, frituurvet, olie, verf en chemicaliën. Doekjes verstoppen de pompen, vet koekt vast in het riool en medicijnen en chemicaliën krijgt de zuivering er maar voor een deel uit. Breng oude medicijnen naar de apotheek.'],
  ['Wat is het verschil met waterzuivering thuis?', 'Het drinkwaterbedrijf zuivert het water tot het aan de wet voldoet. Een waterzuiveraar thuis zit bij je eigen kraan en gaat een stap verder: die haalt ook stoffen weg die binnen de norm nog in het water zitten, zoals kalk en sporen van PFAS.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Waterzuivering: hoe werkt het in Nederland, stap voor stap"
        description="Hoe een rioolwaterzuivering afvalwater schoonmaakt en hoe drinkwaterbedrijven van grond- en rivierwater kraanwater maken, stap voor stap uitgelegd."
        image="https://www.water-zuivering.nl/assets/img/kennisbank/is-kraanwater-veilig.png"
        url="https://www.water-zuivering.nl/kennisbank/waterzuivering-nederland"
        datePublished="2026-11-12"
        dateModified="2026-11-12"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Waterzuivering in Nederland', url: 'https://www.water-zuivering.nl/kennisbank/waterzuivering-nederland' },
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
              Waterzuivering in Nederland: van rioolwater tot kraanwater
            </h1>
            <p className="mt-5 text-dim text-lg">
              Je trekt het toilet door en het water is weg. Je draait de kraan open en er komt schoon water uit. Tussen die twee momenten zit <strong className="text-ink">waterzuivering</strong>, en eigenlijk zijn dat twee aparte werelden: de rioolwaterzuivering van het waterschap en de drinkwaterzuivering van het waterbedrijf. In dit artikel lees je stap voor stap hoe beide werken, wie ervoor zorgt en wat er ondanks alles in het water achterblijft.
            </p>
            <KortAntwoord bron={{ naam: 'IPLO: het technische proces van een rwzi', url: 'https://iplo.nl/thema/water/afvalwater-activiteiten/biologisch-afbreekbaar-afvalwater/behandeling-stedelijk-afvalwater/rwzi-techniek' }}>
              Nederland kent twee soorten waterzuivering. In een rioolwaterzuivering halen roosters, bezinktanks en bacteriën het vuil uit afvalwater, waarna het schoon genoeg is voor rivier of kanaal. Drinkwaterbedrijven maken van grondwater en rivierwater kraanwater met beluchting, zandfilters, actieve kool en UV-licht, zonder chloor.
            </KortAntwoord>
            <AuteurRegel bijgewerkt="12 november 2026" />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Twee soorten</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat is waterzuivering?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Waterzuivering is het schoonmaken van water. Dat klinkt als één ding, maar het woord wordt voor twee heel verschillende processen gebruikt. Het ene maakt vuil water schoon genoeg voor de natuur. Het andere maakt natuurlijk water schoon genoeg om te drinken.
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-surface text-ink">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold"><span className="sr-only">Vraag</span></th>
                    <th scope="col" className="px-4 py-3 font-semibold">Rioolwaterzuivering</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Drinkwaterzuivering</th>
                  </tr>
                </thead>
                <tbody>
                  {VERSCHIL.map((rij) => (
                    <tr key={rij[0]} className="border-t border-edge">
                      {rij.map((cel, i) => (
                        <td key={i} className={`px-4 py-3 align-top ${i === 0 ? 'font-semibold text-ink' : 'text-dim'}`}>{cel}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-dim leading-relaxed">
              Er is nog een derde soort: waterzuivering bij je thuis, met een filter aan je eigen kraan. Daarover lees je meer onderaan dit artikel en op de pagina <Link href="/waterzuivering-voor-thuis" className="underline hover:text-ink">waterzuivering voor thuis</Link>.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Afvalwater</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoe werkt een rioolwaterzuiveringsinstallatie?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Alles wat je doorspoelt, komt via het riool van de gemeente terecht bij een rioolwaterzuiveringsinstallatie, kortweg <strong className="text-ink">rwzi</strong>. Volgens het CBS waren er in 2024 in Nederland 313. Ze zijn allemaal van de waterschappen. Het water legt daar deze weg af:
            </p>
            <ol className="mt-6 grid sm:grid-cols-2 gap-4">
              {RWZI.map(([titel, tekst], i) => (
                <li key={titel} className="reveal rounded-2xl card p-5 flex gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-amber text-ink font-display font-bold flex items-center justify-center">{i + 1}</span>
                  <div>
                    <h3 className="font-display font-bold text-ink">{titel}</h3>
                    <p className="mt-2 text-sm text-dim leading-relaxed">{tekst}</p>
                  </div>
                </li>
              ))}
            </ol>
            <h3 className="mt-10 font-display text-xl font-bold">Wat gebeurt er met het slib?</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Het slib dat overblijft, bestaat eerst nog voor 97 tot 99 procent uit water. Het wordt ingedikt en uitgeperst. Op een deel van de zuiveringen gaat het ook een gistingstank in, waar bacteriën er biogas van maken. Wat dan nog over is, wordt verbrand. Storten van zuiveringsslib gebeurt in Nederland niet.
            </p>
            <h3 className="mt-8 font-display text-xl font-bold">Wat haalt een rioolwaterzuivering er niet uit?</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Een rwzi is gebouwd om het afval van mensen af te breken: resten van urine en ontlasting, zeep en etensresten. Dat doet hij goed. Maar bacteriën eten niet alles. Medicijnresten, PFAS en microplastics worden maar voor een deel verwijderd. De rest stroomt met het gezuiverde water de rivier in. Daarom worden op een aantal zuiveringen extra stappen gebouwd en getest, bijvoorbeeld met ozon of actieve kool.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Dit is ook de reden dat drinkwaterbedrijven zeggen: wat er niet in komt, hoeft er ook niet uit. Meer over deze stoffen lees je in <Link href="/kennisbank/medicijnresten-in-drinkwater" className="underline hover:text-ink">medicijnresten in drinkwater</Link>.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Drinkwater</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoe wordt drinkwater gezuiverd?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Drinkwater wordt niet van rioolwater gemaakt, maar van water uit de natuur. Ongeveer <strong className="text-ink">60 procent komt uit grondwater en 40 procent uit oppervlaktewater</strong>, zoals de Maas, de Rijn en het IJsselmeer. Welke stappen nodig zijn, hangt af van de bron. Grondwater is van nature al schoon en heeft weinig stappen nodig. Rivierwater vraagt veel meer werk.
            </p>
            <ol className="mt-6 grid sm:grid-cols-2 gap-4">
              {DRINKWATER.map(([titel, tekst], i) => (
                <li key={titel} className="reveal rounded-2xl card p-5 flex gap-4 bg-white">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-amber text-ink font-display font-bold flex items-center justify-center">{i + 1}</span>
                  <div>
                    <h3 className="font-display font-bold text-ink">{titel}</h3>
                    <p className="mt-2 text-sm text-dim leading-relaxed">{tekst}</p>
                  </div>
                </li>
              ))}
            </ol>
            <h3 className="mt-10 font-display text-xl font-bold">Voorbeeld 1: rivierwater via spaarbekkens</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Evides maakt ongeveer 80 procent van zijn drinkwater van Maaswater. Dat water gaat eerst naar drie grote spaarbekkens in de Biesbosch. Daar blijft het zo&apos;n vijf maanden staan. In die tijd zakken deeltjes naar de bodem en wordt het water op een natuurlijke manier al een stuk schoner. Pas daarna gaat het naar de zuivering. De kwaliteit van het Maaswater wordt al vanaf de Belgische grens in de gaten gehouden, onder meer met watervlooien en mosselen. Gedragen die zich vreemd, dan stopt de inname meteen.
            </p>
            <h3 className="mt-8 font-display text-xl font-bold">Voorbeeld 2: zuiveren in de duinen</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Langs de kust gebruiken waterbedrijven de duinen als filter. PWN pompt water uit het IJsselmeer via een leiding van 52 kilometer naar de duinen bij Castricum en Heemskerk. Daar zakt het langzaam door het zand. In een paar weken breekt de bodem bacteriën en virussen af. Het is een natuurlijk proces dat weinig energie en geen chemicaliën vraagt.
            </p>
            <h3 className="mt-8 font-display text-xl font-bold">Geen chloor, wel veel controle</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Anders dan in veel andere landen wordt Nederlands drinkwater niet gechloord. Het blijft schoon doordat de zuivering goed is en het leidingnet gesloten. Onderweg wordt het voortdurend gecontroleerd. Alleen Evides neemt al ongeveer 43.000 monsters per jaar, van bron tot kraan. Welke eisen er gelden, lees je in <Link href="/kennisbank/drinkwaternormen-nederland" className="underline hover:text-ink">drinkwaternormen in Nederland</Link>. Waarom er geen chloor in zit, staat in <Link href="/kennisbank/chloor-in-kraanwater" className="underline hover:text-ink">chloor in kraanwater</Link>.
            </p>
            <div className="mt-8 relative rounded-3xl overflow-hidden border border-edge aspect-[16/9]">
              <Image src="/assets/img/kennisbank/is-kraanwater-veilig.png" alt="Glas kraanwater als eindpunt van de waterzuivering in Nederland" fill sizes="(min-width: 1024px) 896px, 100vw" className="object-cover" />
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">De waterkringloop: hoe de twee met elkaar verbonden zijn</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Rioolwaterzuivering en drinkwaterzuivering zijn aparte bedrijven, maar ze werken met hetzelfde water. Het gezuiverde afvalwater van een stad stroomt een rivier in. Verderop wordt uit diezelfde rivier water ingenomen om drinkwater van te maken. De Maas en de Rijn komen bovendien uit het buitenland en nemen onderweg het afvalwater van steden, fabrieken en landbouw mee.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Daarom maakt het uit wat er in het riool terechtkomt. Hoe schoner het afvalwater, hoe minder moeite het kost om er later weer drinkwater van te maken. Dit kun je zelf doen:
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Breng oude medicijnen naar de apotheek</strong> of het klein chemisch afval. Spoel ze niet door het toilet.</li>
              <li><strong className="text-ink">Gooi vochtige doekjes in de prullenbak.</strong> Ze lossen niet op en verstoppen pompen en roosters.</li>
              <li><strong className="text-ink">Giet geen frituurvet, olie of verf in de gootsteen.</strong> Vet koekt vast in het riool.</li>
              <li><strong className="text-ink">Gebruik in de tuin geen bestrijdingsmiddelen.</strong> Via de bodem en het riool komen ze in het water.</li>
            </ul>

            <h2 className="mt-12 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wie is verantwoordelijk voor waterzuivering?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Drie partijen hebben elk een eigen taak. De <strong className="text-ink">gemeente</strong> beheert het riool onder de straat. Het <strong className="text-ink">waterschap</strong> zuivert het afvalwater en bewaakt de kwaliteit van sloten, kanalen en rivieren. Daarvoor betaal je zuiveringsheffing. Het <strong className="text-ink">drinkwaterbedrijf</strong> maakt en levert het kraanwater, en dat betaal je via je waterrekening. De Inspectie Leefomgeving en Transport houdt toezicht op de kwaliteit van het drinkwater.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Wat het waterbedrijf in jouw regio levert, verschilt. In Amsterdam is het Rijnwater dat door de duinen is gezuiverd en water uit de Bethunepolder, in Rotterdam is het Maaswater. Voorbeelden lees je in <Link href="/kennisbank/drinkwater-amsterdam" className="underline hover:text-ink">drinkwater in Amsterdam</Link> en <Link href="/kennisbank/drinkwater-rotterdam" className="underline hover:text-ink">drinkwater in Rotterdam</Link>.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Bij jou thuis</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">En waterzuivering thuis: is dat nog nodig?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Nodig is het niet. Nederlands kraanwater voldoet aan strenge normen en je kunt het overal veilig drinken. Dat zeggen we er eerlijk bij, ook al verkopen we zelf waterzuiveraars.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Waarom kiezen mensen er dan toch voor? Omdat &quot;binnen de norm&quot; niet hetzelfde is als &quot;niets&quot;. Drinkwaterbedrijven zuiveren voor miljoenen huishoudens tegelijk. Stoffen als PFAS en medicijnresten krijgen ze er grotendeels, maar niet helemaal uit. Kalk blijft er bewust voor een deel in. Een waterzuiveraar bij je eigen kraan gaat een stap verder voor het kleine beetje water dat je drinkt en waarmee je kookt.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              De techniek daarvoor heet omgekeerde osmose. Het water wordt door een membraan geperst met gaatjes van ongeveer 0,0001 micron. Watermoleculen kunnen erdoor, de meeste andere stoffen niet. Hoe dat precies werkt, lees je in <Link href="/kennisbank/omgekeerde-osmose-filter" className="underline hover:text-ink">omgekeerde osmose filter</Link>. Twijfel je of het voor jou zin heeft? Begin dan met kijken wat er bij jou speelt: de <Link href="/pfas-check" className="font-semibold text-ink underline decoration-amber decoration-2 underline-offset-2 hover:text-amber-dark">PFAS-check</Link> en de <Link href="/waterhardheid" className="font-semibold text-ink underline decoration-amber decoration-2 underline-offset-2 hover:text-amber-dark">waterhardheid check</Link> laten het op postcode zien.
            </p>
            <TussenCta titel="De laatste stap van de zuivering, onder je eigen aanrecht" pfasEerst>
              Ons osmosesysteem filtert het kraanwater nog één keer, direct terwijl je tapt. Het membraan houdt kalk, PFAS, medicijnresten en microplastics tegen.
            </TussenCta>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over waterzuivering</h2>
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
                <li><a href="https://iplo.nl/thema/water/afvalwater-activiteiten/biologisch-afbreekbaar-afvalwater/behandeling-stedelijk-afvalwater/rwzi-techniek" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">IPLO (Rijkswaterstaat): het technische proces van een rwzi</a></li>
                <li><a href="https://www.cbs.nl/nl-nl/cijfers/detail/71476ned" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">CBS: zuivering van stedelijk afvalwater, aantal installaties 2024</a></li>
                <li><a href="https://www.evides.nl/uw-drinkwater/productieproces" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Evides: hoe wordt mijn drinkwater gemaakt?</a></li>
                <li><a href="https://www.pwn.nl/drinkwater/water-zuiveren-in-de-natuur" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">PWN: water zuiveren in de natuur</a></li>
                <li><a href="https://www.vewin.nl/wp-content/uploads/2025/09/25274-VEW-Kerngegevens-drinkwater-2025-A6-NL-web.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Vewin: kerngegevens drinkwater 2025</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zuiver water uit je eigen kraan</h2>
            <p className="mt-4 text-white/70">Een osmosesysteem onder je aanrecht filtert je kraanwater direct terwijl je tapt, zonder opslagtank. Vraag vrijblijvend een offerte aan.</p>
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

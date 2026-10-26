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
  alternates: { canonical: '/kennisbank/kraanwater-utrecht' },
  title: 'Kraanwater Utrecht: bronnen en PFAS — Water-zuivering',
  description:
    'Kraanwater Utrecht: de zeven grondwaterbronnen van Vitens, de PFAS-cijfers per wijk, het kookadvies van 2025 en hoe zacht het water is.',
  openGraph: {
    title: 'Kraanwater Utrecht: bronnen, PFAS en kwaliteit',
    description: 'Waar het Utrechtse kraanwater vandaan komt, hoe schoon het is en waar de PFAS-cijfers verschillen.',
    url: 'https://www.water-zuivering.nl/kennisbank/kraanwater-utrecht',
    images: ['/assets/img/twee-kranen.jpg'],
  },
};

const BRONNEN = [
  ['Soestduinen', 'De oudste winning van Vitens die nog in gebruik is. Levert al sinds 1883 water aan de stad Utrecht.'],
  ['Leidsche Rijn', 'Haalt water van meer dan 100 meter diep: zo\'n 5 miljoen m³ per jaar, genoeg voor ongeveer 115.000 inwoners. Hier hoeft alleen ijzer verwijderd te worden.'],
  ['De Meern', 'Winning aan de westkant van de stad, waar dikke kleilagen de diepere zandlagen beschermen.'],
  ['Beerschoten', 'Winning op de Utrechtse Heuvelrug, bij De Bilt.'],
  ['Tull en \'t Waal', 'Winning ten zuiden van de stad, die ook de omliggende dorpen voorziet.'],
  ['Groenekan', 'Winning ten noorden van de stad.'],
  ['Utrechtse Heuvelrug', 'Meerdere winningen in het zandgebied, waar regenwater lang door de bodem zakt voordat het wordt opgepompt.'],
];

const PFAS = [
  ['Groen (onder 2,2 ng/l PEQ)', '317.755', '84%'],
  ['Oranje (2,2 – 4,4 ng/l)', '200', '0,1%'],
  ['Rood (4,4 – 6,6 ng/l)', '58.805', '16%'],
  ['Donkerrood (boven 6,6 ng/l)', '0', '0%'],
];

const FAQ = [
  ['Waar komt het kraanwater in Utrecht vandaan?', 'Het Utrechtse kraanwater is gemaakt van grondwater. Vitens haalt het uit zeven bronnen rond de stad, waaronder Soestduinen, Leidsche Rijn, De Meern, Beerschoten, Tull en \'t Waal, Groenekan en winningen op de Utrechtse Heuvelrug. De bodem doet het eerste filterwerk; daarna zuivert Vitens het water verder.'],
  ['Is het kraanwater in Utrecht goed?', 'Ja. Het water voldoet aan alle wettelijke normen en het Utrechtse water van Vitens werd in 2023 nog uitgeroepen tot het beste kraanwater van Nederland. Omdat het grondwater is, zit er van nature veel minder PFAS in dan in het westen van het land, al verschilt dat per wijk.'],
  ['Zit er PFAS in het kraanwater in Utrecht?', 'In een deel van de stad wel. Volgens Greenpeace (september 2026) zit ongeveer 84% van de inwoners van de gemeente Utrecht in de categorie groen, onder de helft van de RIVM-richtwaarde. Voor zo\'n 16% (58.805 inwoners) valt het water in de categorie rood, tussen 4,4 en 6,6 ng/l PEQ. Met je postcode zie je in welke groep jij valt.'],
  ['Wat was er mis met het Utrechtse kraanwater in november 2025?', 'Op 1 november 2025 vond Vitens enterokokken in het water, waarna zo\'n 125.000 aansluitingen in Utrecht en omgeving een kookadvies kregen. Op 4 november was het water weer veilig. Op 19 december 2025 meldde Vitens de oorzaak: een scheur in het dak van een drinkwaterreservoir in Kanaleneiland, waardoor grond- en regenwater naar binnen kon.'],
  ['Is het water in Utrecht hard of zacht?', 'Overwegend zacht tot gemiddeld. Het grondwater uit bijvoorbeeld Leidsche Rijn is van nature zacht, en op sommige andere locaties onthardt Vitens het water om kalkaanslag te beperken. De exacte hardheid op jouw adres vind je met je postcode op de website van Vitens.'],
  ['Wordt het drinkwater in Utrecht schaars?', 'De provincie en Vitens waarschuwen daarvoor. Door nieuwbouw kan de vraag rond 2032 groter worden dan wat er geleverd kan worden. Daarom zoekt Vitens nieuwe winningen, bijvoorbeeld op het Eiland van Schalkwijk, en beoordeelt het sinds 2023 nieuwe zakelijke aansluitingen kritisch.'],
  ['Heeft een waterfilter in Utrecht zin?', 'Voor de meeste Utrechters is het kraanwater prima. Een osmosesysteem is vooral interessant als je in een wijk woont die in de categorie rood valt, of als je ook medicijnresten en microplastics zo veel mogelijk uit je drinkwater wilt halen.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Kraanwater Utrecht: waar het vandaan komt en hoe schoon het is"
        description="De bronnen van het Utrechtse kraanwater, de PFAS-cijfers per categorie, het kookadvies van 2025 en de hardheid."
        image="https://www.water-zuivering.nl/assets/img/twee-kranen.jpg"
        url="https://www.water-zuivering.nl/kennisbank/kraanwater-utrecht"
        datePublished="2026-10-26"
        about={{ '@type': 'City', name: 'Utrecht', sameAs: 'https://nl.wikipedia.org/wiki/Utrecht_(stad)' }}
        mentions={[{ '@type': 'Organization', name: 'Vitens', url: 'https://www.vitens.nl' }]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Kraanwater Utrecht', url: 'https://www.water-zuivering.nl/kennisbank/kraanwater-utrecht' },
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
              Kraanwater Utrecht: waar het vandaan komt en hoe schoon het is
            </h1>
            <p className="mt-5 text-dim text-lg">
              Utrecht drinkt grondwater, en dat is goed nieuws. Toch is het <strong className="text-ink">kraanwater in Utrecht</strong> niet overal hetzelfde. Hier lees je uit welke bronnen het komt, in welke delen van de stad de PFAS-waarden hoger liggen en wat er in 2025 misging.
            </p>
            <KortAntwoord bron={{ naam: 'Vitens en Greenpeace (22 september 2026)', url: 'https://www.vitens.nl/over-water/projecten/utrecht' }}>
              Kraanwater Utrecht komt van Vitens en is gemaakt van grondwater uit zeven bronnen rond de stad. Het voldoet aan alle normen en werd in 2023 nog uitgeroepen tot het beste van Nederland. Volgens Greenpeace zit 84% van de Utrechters ruim onder de PFAS-richtwaarde; voor ongeveer 16% ligt de waarde erboven.
            </KortAntwoord>
            <AuteurRegel bijgewerkt="26 oktober 2026" />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">De bronnen</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zeven grondwaterbronnen voor één stad</h2>
            <p className="mt-4 text-dim leading-relaxed max-w-3xl">
              Waar Amsterdam en Rotterdam vooral rivierwater zuiveren, pompt Vitens voor kraanwater Utrecht <strong className="text-ink">grondwater</strong> op. Onder de Utrechtse Heuvelrug liggen schone voorraden, en in het westen beschermen kleilagen de diepere zandlagen. Volgens DUIC (2018) haalt de stad haar water uit deze zeven bronnen:
            </p>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {BRONNEN.map(([naam, uitleg]) => (
                <div key={naam} className="reveal card rounded-2xl p-5">
                  <h3 className="font-display font-bold text-ink">{naam}</h3>
                  <p className="mt-2 text-sm text-dim leading-relaxed">{uitleg}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-dim leading-relaxed max-w-3xl">
              Het mooie van grondwater: de bodem heeft het werk al grotendeels gedaan. In Leidsche Rijn wordt het water alleen belucht en door een zandfilter geleid om ijzer te verwijderen. Bacteriën en virussen zijn tijdens de lange tocht door de grond al uitgefilterd. Utrechts grondwater is bovendien niet alleen voor Utrecht: volgens Vitens komt ook ongeveer een derde van het Amsterdamse drinkwater uit Utrechts grondwater.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">PFAS</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">PFAS in het Utrechtse kraanwater: het verschilt per wijk</h2>
            <p className="mt-4 text-dim leading-relaxed">
              De provincie Utrecht scoort in de PFAS-analyse van Greenpeace (22 september 2026) een stuk beter dan Noord- en Zuid-Holland: 89% van de inwoners zit in de categorie groen. In de gemeente Utrecht zelf ligt dat iets anders. Daar valt een deel van de inwoners in de categorie rood, boven de RIVM-richtwaarde van 4,4 ng/l PEQ.
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-amber/10 text-ink">
                  <tr>
                    <th scope="col" className="p-4 font-display font-bold">Categorie</th>
                    <th scope="col" className="p-4 font-display font-bold">Inwoners gemeente Utrecht</th>
                    <th scope="col" className="p-4 font-display font-bold">Aandeel</th>
                  </tr>
                </thead>
                <tbody>
                  {PFAS.map(([c, n, p]) => (
                    <tr key={c} className="border-t border-edge">
                      <th scope="row" className="p-4 font-semibold text-ink">{c}</th>
                      <td className="p-4 text-dim">{n}</td>
                      <td className="p-4 text-dim">{p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-dim">Bron: Greenpeace, Uitleg en verantwoording bij de PFAS kraanwater postcodechecker, 22 september 2026. Totaal 376.760 inwoners.</p>
            <p className="mt-6 text-dim leading-relaxed">
              Waarom die verschillen binnen één stad? Greenpeace koppelt elk postcodegebied aan de winning waar het water vandaan komt, en de stad krijgt water uit zeven verschillende bronnen. Elke winning heeft zijn eigen meetwaarden. Bovendien krijgen sommige wijken mengwater uit twee bronnen. Vitens gaf voor de analyse ook niet-openbare meetgegevens vrij, onder meer over de korteketen-PFAS TFA. Zo kon het beeld voor Utrecht preciezer worden gemaakt.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              In welke categorie jouw adres valt, zie je met de <Link href="/pfas-check" className="underline hover:text-ink">PFAS-check</Link>. Hoe Utrecht zich verhoudt tot de rest van het land, staat op de <Link href="/kennisbank/pfas-kaart-nederland" className="underline hover:text-ink">PFAS kaart van Nederland</Link>.
            </p>
            <TussenCta titel="Woon je in een rode zone in Utrecht?" pfasEerst>
              Check eerst met je postcode in welke PFAS-categorie jouw adres valt. Zit je boven de RIVM-richtwaarde, dan kun je met een osmosesysteem onder het aanrecht het overgrote deel van de PFAS zelf uit je drinkwater halen.
            </TussenCta>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">November 2025</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Het kookadvies in Utrecht: wat ging er mis?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Op zaterdag 1 november 2025 vond Vitens <strong className="text-ink">enterokokken</strong> in het leidingnet. Ongeveer 125.000 aansluitingen in (delen van) de stad Utrecht, Bilthoven, Bosch en Duin, De Bilt, Bunnik, Groenekan, Maarssen, Oud Zuilen, Tienhoven, Westbroek en Zeist kregen een kookadvies. In de supermarkten raakten de schappen met flessenwater leeg.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Op dinsdag 4 november was het water weer veilig. De oorzaak volgde op 19 december 2025: een <strong className="text-ink">scheur in het dak van een drinkwaterreservoir in Kanaleneiland</strong>, waardoor grond- en regenwater het opgeslagen drinkwater in kon. Vitens heeft het dak gerepareerd en het reservoir schoongemaakt en ontsmet.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Wat leer je hiervan? Ook het beste grondwater kan na de zuivering nog vervuild raken, in reservoirs of in de leidingen. Volg bij zo&apos;n melding altijd het advies van Vitens: water drie minuten koken. Een waterfilter thuis is daar geen vervanging voor. Actuele storingen en adviezen in jouw buurt vind je met onze <Link href="/storingen" className="underline hover:text-ink">storingen-check</Link>.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hardheid en smaak van kraanwater in Utrecht</h2>
            <p className="mt-4 text-dim leading-relaxed">
              <strong className="text-ink">Kraanwater Utrecht</strong> is overwegend zacht. Water uit Leidsche Rijn is volgens Vitens van nature zacht. Op een aantal andere locaties onthardt Vitens het water om kalkaanslag in huis te beperken. Een vaste waarde voor de hele stad is er dus niet: de hardheid op jouw adres vind je met je postcode op de site van Vitens.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Grondwater heeft een paar voordelen voor de smaak. Er hoeft geen chloor in, het is het hele jaar door ongeveer even koel, en het bevat van nature mineralen als calcium en magnesium. Ruik je toch een metaalachtige smaak of zie je bruinig water, dan gaat het vaak om ijzer uit de leidingen. Wat je dan doet, lees je in <Link href="/kennisbank/bruin-water-uit-de-kraan" className="underline hover:text-ink">bruin water uit de kraan</Link>.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Toekomst</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Krijgt Utrecht een tekort aan drinkwater?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Utrecht groeit hard. De plannen gaan uit van 80.000 extra woningen in 2030 en 160.000 in 2050. Volgens Vitens kan de vraag rond 2032 groter worden dan wat er geleverd kan worden. Rond 2030 is daarom zo&apos;n 15,6 miljoen m³ extra vergunde capaciteit per jaar nodig. De provincie meldde in oktober 2026 dat de drinkwaterbedrijven nu al onvoldoende capaciteit hebben voor de stijgende vraag.
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Nieuwe winningen</strong>, zoals op het Eiland van Schalkwijk, waar grondwater onder de kleilaag van minstens 90 meter diep wordt onderzocht.</li>
              <li><strong className="text-ink">Uitbreiding</strong> in Eemdijk, Benschop, Linschoten en Woudenberg.</li>
              <li><strong className="text-ink">Strengere toelating</strong>: sinds 2023 beoordeelt Vitens nieuwe zakelijke aansluitingen kritisch, en soms wijst het die af.</li>
              <li><strong className="text-ink">Bescherming van de bodem</strong>: bouwprojecten en bodemenergiesystemen die door de kleilaag prikken, vormen een risico voor de kwaliteit.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Voor jou thuis betekent dit vooral: zuinig zijn met water op warme dagen helpt echt.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/twee-kranen.jpg" alt="Kraanwater Utrecht uit een gewone kraan en een osmosekraan" fill loading="eager" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Filteren</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wanneer is een filter in Utrecht de moeite waard?</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Eerlijk is eerlijk: voor de meeste Utrechters is kraanwater Utrecht al heel goed. Een <Link href="/osmosesysteem" className="underline hover:text-ink">osmosesysteem</Link> is vooral zinvol als:
              </p>
              <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
                <li>je adres in de PFAS-categorie rood valt;</li>
                <li>je ook <strong className="text-ink">medicijnresten en microplastics</strong> zo veel mogelijk uit je drinkwater wilt halen;</li>
                <li>je een kleintje in huis hebt en extra zekerheid wilt voor de fles;</li>
                <li>je stopt met flessenwater en toch een neutrale smaak wilt voor koffie en thee.</li>
              </ul>
              <p className="mt-4 text-dim leading-relaxed">
                Wat zo&apos;n systeem per jaar kost, inclusief filters, staat in <Link href="/kennisbank/wat-kost-een-waterzuiveringssysteem" className="underline hover:text-ink">wat kost een waterzuiveringssysteem</Link>.
              </p>
            </div>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over kraanwater in Utrecht</h2>
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
              <Link href="/kennisbank/drinkwater-amsterdam" className="card rounded-2xl p-5 block hover:border-amber transition-colors">
                <span className="font-display font-bold text-ink">Drinkwater in Amsterdam</span>
                <span className="mt-1 block text-sm text-dim">Rijn- en duinwater, alle inwoners in de hoogste PFAS-categorie.</span>
              </Link>
              <Link href="/kennisbank/drinkwater-dordrecht-zwijndrecht" className="card rounded-2xl p-5 block hover:border-amber transition-colors">
                <span className="font-display font-bold text-ink">Drinkwater in Dordrecht en Zwijndrecht</span>
                <span className="mt-1 block text-sm text-dim">Maaswater uit de Biesbosch en diep grondwater, PFAS-categorie rood.</span>
              </Link>
              </div>
            </div>
            <div className="mt-12">
              <p className="font-display font-bold text-ink">Bronnen</p>
              <ul className="mt-3 space-y-1 text-sm text-dim list-disc pl-5">
                <li><a href="https://www.vitens.nl/over-water/projecten/utrecht" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Vitens: drinkwater in de provincie Utrecht</a></li>
                <li>DUIC: waar komt ons kraanwater eigenlijk vandaan? (11 juli 2018)</li>
                <li><a href="https://www.hartvannederland.nl/advies-en-tips/waarschuwen/artikelen/utrecht-oorzaak-besmet-drinkwater-vitens" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Hart van Nederland: oorzaak besmet drinkwater Utrecht</a></li>
                <li><a href="https://omgevingsweb.nl/wp-content/uploads/2026/09/7f7a499b-260922-uitleg-en-verantwoording-bij-de-pfas-kraanwater-postcodechecker.docx.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Greenpeace: uitleg en verantwoording bij de PFAS kraanwater postcodechecker (22 september 2026)</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Valt jouw adres in Utrecht in de rode zone?</h2>
            <p className="mt-4 text-white/70">Doe eerst de PFAS-check. Wil je daarna zelf filteren, vraag dan vrijblijvend een offerte aan voor een osmosesysteem onder het aanrecht.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/aanmelden" className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-xl shadow-amber/25">
                Vraag vrijblijvend een offerte aan
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              <Link href="/pfas-check" className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-bold text-white hover:bg-white/10 transition-colors">
                Doe de PFAS-check
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

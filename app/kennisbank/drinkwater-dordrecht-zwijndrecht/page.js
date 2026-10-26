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
  alternates: { canonical: '/kennisbank/drinkwater-dordrecht-zwijndrecht' },
  title: 'Drinkwater Dordrecht en Zwijndrecht — Water-zuivering',
  description:
    'Drinkwater Dordrecht en Zwijndrecht: de bron (Biesbosch en diep grondwater), de PFAS-score, de rol van Chemours en het kookadvies van juni 2026.',
  openGraph: {
    title: 'Drinkwater Dordrecht en Zwijndrecht: PFAS en bron',
    description: 'Waar het kraanwater in de Drechtsteden vandaan komt, wat de PFAS-cijfers zeggen en wat Chemours ermee te maken heeft.',
    url: 'https://www.water-zuivering.nl/kennisbank/drinkwater-dordrecht-zwijndrecht',
    images: ['/assets/img/een-kraan.jpg'],
  },
};

const FEITEN = [
  ['Waterbedrijf Dordrecht', 'Evides Waterbedrijf'],
  ['Zwijndrecht en Hendrik-Ido-Ambacht', 'Leidingnet beheerd door Oasen; bij storingen treden Evides en Oasen samen op'],
  ['Productielocatie', 'Baanhoek in Dordrecht'],
  ['Bronnen', 'Maaswater uit de spaarbekkens in de Brabantse Biesbosch, aangevuld met diep grondwater van het Eiland van Dordrecht'],
  ['Diepte grondwater', '50 tot 150 meter, onder dikke kleilagen (Jeugddorp, Polder de Biesbosch, Kop van het Land)'],
  ['PFAS Dordrecht (Greenpeace, sept. 2026)', 'Alle 122.795 inwoners in de categorie rood: tussen 1 en 1,5 keer de RIVM-richtwaarde'],
];

const STAPPEN = [
  ['Inname uit de Maas', 'Het water wordt ingenomen bij pompstation Bergsche Maas. Het innamepunt ligt sinds 2020 in de Amer, een deel van het stroomgebied van de Maas.'],
  ['Maanden rust in de Biesbosch', 'De drie spaarbekkens De Gijster, Honderd en Dertig en Petrusplaat houden samen zo\'n 80 miljoen m³ water vast: een voorraad voor twee à drie maanden. In die tijd zakken deeltjes en breekt een deel van de vervuiling af.'],
  ['Ondergronds naar Dordrecht', 'Vanaf Petrusplaat gaat het voorgezuiverde water via een ondergrondse leiding naar productielocatie Baanhoek.'],
  ['Mengen met diep grondwater', 'In Baanhoek komt er grondwater bij uit putten van 50 tot 150 meter diep op het Eiland van Dordrecht. Dikke kleilagen beschermen dat water tegen vervuiling van bovenaf.'],
  ['Nazuivering en levering', 'Na de laatste zuiveringsstappen gaat het water naar Dordrecht en de oostelijke Hoeksche Waard.'],
];

const FAQ = [
  ['Waar komt het drinkwater in Dordrecht vandaan?', 'Uit productielocatie Baanhoek van Evides. Daar wordt Maaswater uit de spaarbekkens in de Brabantse Biesbosch gemengd met diep grondwater van het Eiland van Dordrecht. Dat grondwater komt uit putten van 50 tot 150 meter diep.'],
  ['Wie levert het drinkwater in Zwijndrecht?', 'In Zwijndrecht en Hendrik-Ido-Ambacht beheert Oasen het leidingnet. Bij het kookadvies van juni 2026 gaven Evides en Oasen samen het advies voor Dordrecht, Zwijndrecht en Hendrik-Ido-Ambacht. Welk bedrijf op jouw adres levert, staat op je waterrekening.'],
  ['Zit er PFAS in het drinkwater van Dordrecht?', 'Ja, in kleine hoeveelheden. Volgens de analyse van Greenpeace (22 september 2026) valt heel Dordrecht in de categorie rood: tussen 4,4 en 6,6 ng/l PEQ, dus boven de RIVM-richtwaarde. Evides meldt dat alle waarden ruim onder de wettelijke Europese norm van 100 ng/l liggen.'],
  ['Komt de PFAS in het Dordtse kraanwater van Chemours?', 'Volgens Evides niet. Het innamepunt in de Biesbosch ligt ten zuiden en stroomopwaarts van Chemours, en de wind waait meestal vanuit het zuidwesten, dus van het innamepunt af. Het grondwater onder Baanhoek wordt niet voor drinkwater gebruikt. De PFAS in het drinkwater komt vooral mee met het Maaswater.'],
  ['Wat gebeurde er bij het kookadvies in juni 2026?', 'Op 13 juni 2026 gaven de waterbedrijven een kookadvies voor zo\'n 200.000 inwoners van Dordrecht, Zwijndrecht en Hendrik-Ido-Ambacht, omdat tests wezen op de E. coli-bacterie. Na extra controles bleek de bacterie niet in het water te zitten en werd het advies na ongeveer een dag ingetrokken.'],
  ['Is het kraanwater in Dordrecht veilig om te drinken?', 'Ja. Evides en de gemeente noemen het drinkwater betrouwbaar; het voldoet aan de Europese drinkwaterrichtlijn. Wie ook onder de RIVM-richtwaarde voor PFAS wil zitten, kan thuis extra filteren met een osmosesysteem.'],
  ['Hoe weet ik hoeveel PFAS er op mijn adres zit?', 'Doe onze PFAS-check met je postcode. Je ziet de indicatie voor jouw regio en een link naar de postcodechecker van Greenpeace voor de precieze uitslag.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Drinkwater Dordrecht en Zwijndrecht: bron, PFAS en Chemours"
        description="Waar het kraanwater in Dordrecht en Zwijndrecht vandaan komt, hoeveel PFAS erin zit en wat de rol van Chemours is."
        image="https://www.water-zuivering.nl/assets/img/een-kraan.jpg"
        url="https://www.water-zuivering.nl/kennisbank/drinkwater-dordrecht-zwijndrecht"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Drinkwater Dordrecht en Zwijndrecht', url: 'https://www.water-zuivering.nl/kennisbank/drinkwater-dordrecht-zwijndrecht' },
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
              Drinkwater Dordrecht en Zwijndrecht: bron, PFAS en Chemours
            </h1>
            <p className="mt-5 text-dim text-lg">
              Woon je in de Drechtsteden, dan hoor je vaak over PFAS in het nieuws. Maar hoe zit het met <strong className="text-ink">drinkwater Dordrecht</strong> en Zwijndrecht zelf? Hier lees je waar het water vandaan komt, wat de metingen zeggen en wat Chemours er wel en niet mee te maken heeft.
            </p>
            <KortAntwoord bron={{ naam: 'Evides en Greenpeace (22 september 2026)', url: 'https://www.evides.nl/pfas-en-drinkwater/lokale-situatie-in-dordrecht' }}>
              Drinkwater Dordrecht komt van Evides, uit productielocatie Baanhoek: Maaswater uit de Biesbosch plus diep grondwater. Het voldoet aan de wettelijke normen. Volgens Greenpeace zit heel Dordrecht wel in de PFAS-categorie rood, boven de RIVM-richtwaarde. Volgens Evides komt dat niet door Chemours, maar door PFAS in de Maas.
            </KortAntwoord>
            <AuteurRegel />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">In één oogopslag</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Kraanwater in Dordrecht en Zwijndrecht: de feiten</h2>
            <p className="mt-4 text-dim leading-relaxed">
              De gegevens hieronder komen van Evides, uit nieuwsberichten en uit de PFAS-analyse van Greenpeace van september 2026. Waar iets niet zeker is, zeggen we dat erbij.
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
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">De route</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Van de Maas naar je kraan in Dordrecht</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Drinkwater Dordrecht is een mengsel van rivierwater en grondwater. Zo legt het de weg af:
            </p>
            <ol className="mt-8 space-y-4">
              {STAPPEN.map(([titel, uitleg], i) => (
                <li key={titel} className="reveal card rounded-2xl p-5 flex gap-4">
                  <span className="shrink-0 w-9 h-9 rounded-full bg-amber text-ink font-display font-extrabold flex items-center justify-center">{i + 1}</span>
                  <div>
                    <h3 className="font-display font-bold text-ink">{titel}</h3>
                    <p className="mt-1 text-sm text-dim leading-relaxed">{uitleg}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-dim leading-relaxed">
              De spaarbekkens zijn van het Waterwinningbedrijf Brabantse Biesbosch. Evides heeft daarin 60 procent van de aandelen, Brabant Water de overige 40 procent. Evides doet het dagelijkse beheer.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">PFAS</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoeveel PFAS zit er in het drinkwater in Dordrecht?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              In de analyse die Greenpeace op 22 september 2026 publiceerde, staat Dordrecht op plek 9 van de gemeenten met de meeste inwoners boven de RIVM-richtwaarde. <strong className="text-ink">Alle 122.795 inwoners</strong> vallen in de categorie rood: tussen 4,4 en 6,6 ng/l PEQ. Dat is boven de gezondheidskundige richtwaarde, maar wel een categorie lager dan Rotterdam, Den Haag en Amsterdam, die volledig in donkerrood vallen.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Over drinkwater Dordrecht zegt Evides zelf dat er sporen van PFAS in het Maaswater zitten en dat er heel kleine hoeveelheden in het drinkwater terechtkomen. Alle waarden liggen volgens Evides ver onder de Europese norm die sinds januari 2026 geldt: <strong className="text-ink">100 ng/l voor de som van 20 PFAS</strong>. Het verschil met de RIVM-richtwaarde is dat het RIVM rekent met de giftigheid van elke stof (PEQ), en die lat ligt veel lager.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Voor Zwijndrecht staat geen apart getal in het overzicht van Greenpeace. Check daarom je eigen postcode met de <Link href="/pfas-check" className="underline hover:text-ink">PFAS-check</Link>. Hoe PFAS in het drinkwater terechtkomt en waarom het westen hoger scoort, lees je in <Link href="/kennisbank/pfas-in-kraanwater" className="underline hover:text-ink">PFAS in kraanwater</Link>.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Chemours</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat heeft Chemours met je kraanwater te maken?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              De chemiefabriek Chemours in Dordrecht is al jaren in het nieuws door de uitstoot van PFAS zoals GenX. Logisch dus dat veel inwoners zich afvragen of dat ook in hun kraanwater terechtkomt. Evides geeft drie redenen waarom dat volgens hen niet het geval is:
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Ligging van de inname.</strong> Het innamepunt in de Biesbosch ligt ten zuiden van Chemours en stroomopwaarts. Het afvalwater van de fabriek stroomt dus niet langs de inname.</li>
              <li><strong className="text-ink">Windrichting.</strong> De wind komt meestal uit het zuidwesten. Uitstoot via de lucht waait daardoor naar het noordoosten, van het innamepunt af.</li>
              <li><strong className="text-ink">Geen grondwater van onder Baanhoek.</strong> Het grondwater onder de productielocatie zelf wordt niet gebruikt en mengt niet met het drinkwater.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Toch zitten de waterbedrijven er bovenop. Evides en Oasen gingen in beroep tegen de omgevingsvergunning die de provincie Zuid-Holland in 2022 aan Chemours gaf, en tegen de watervergunning van Rijkswaterstaat. Begin september 2026 diende Greenpeace bovendien een handhavingsverzoek in tegen lozingen van de fabriek. De waterbedrijven pleiten samen voor een totaalverbod op PFAS. De PFAS-vervuiling rond Chemours zit vooral in bodem, lucht, moestuinen en oppervlaktewater in de buurt; daar gaat de site <a href="https://www.pfasinfo.nl" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">pfasinfo.nl</a> van de overheden in de regio over.
            </p>
            <TussenCta titel="Niet wachten tot het PFAS-probleem bij de bron is opgelost?">
              Met een osmosesysteem onder het aanrecht filter je het overgrote deel van de PFAS uit je drinkwater, in Dordrecht, Zwijndrecht en omgeving. Vraag vrijblijvend een offerte aan of check eerst de PFAS-categorie van je postcode.
            </TussenCta>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Juni 2026</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Het kookadvies in Dordrecht, Zwijndrecht en Hendrik-Ido-Ambacht</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Op zaterdag 13 juni 2026 kregen zo&apos;n <strong className="text-ink">200.000 inwoners</strong> van Dordrecht, Zwijndrecht en Hendrik-Ido-Ambacht het advies om hun kraanwater drie minuten te koken. Tests wezen op de E. coli-bacterie. Het advies zou 72 uur gelden.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Na extra controles bleek de bacterie niet in het water te zitten. Evides trok het advies na ongeveer een dag weer in en liet weten dat het kraanwater volledig betrouwbaar was. Waarom sommige tests toch een vervuiling aangaven, werd verder onderzocht.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              De les voor thuis: houd bij zo&apos;n melding altijd het advies van je waterbedrijf aan. Een osmosesysteem is <strong className="text-ink">geen vervanging voor een kookadvies</strong>; het is gemaakt om drinkwater dat al veilig is verder te zuiveren. Bij storingen en werkzaamheden kijk je met je postcode in onze <Link href="/storingen" className="underline hover:text-ink">storingen-check</Link>.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/systeem-staand.png" alt="Osmosesysteem dat PFAS uit het drinkwater in Dordrecht filtert" fill loading="eager" sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain bg-white" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Zelf filteren</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Onder de RIVM-richtwaarde blijven in de Drechtsteden</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Wie in Dordrecht of Zwijndrecht woont en de PFAS-inname uit kraanwater zo laag mogelijk wil houden, heeft weinig aan een gewone filterkan: die haalt PFAS maar voor een deel weg. Een <Link href="/osmosesysteem" className="underline hover:text-ink">osmosesysteem</Link> onder het aanrecht werkt anders. Het membraan heeft poriën van 0,0001 micron en houdt het overgrote deel van de PFAS tegen, net als medicijnresten en microplastics.
              </p>
              <p className="mt-4 text-dim leading-relaxed">
                Ons systeem heeft geen opslagtank en filtert direct als je de kraan opendraait. Verschillen met andere oplossingen, zoals actief kool of een waterontharder, staan in <Link href="/kennisbank/pfas-vrij-water" className="underline hover:text-ink">PFAS-vrij water</Link>.
              </p>
            </div>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over drinkwater in Dordrecht en Zwijndrecht</h2>
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
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zelf je PFAS-inname omlaag in Dordrecht of Zwijndrecht</h2>
            <p className="mt-4 text-white/70">Vraag vrijblijvend een offerte aan voor een osmosesysteem onder het aanrecht. Je hoort wat het kost en hoe de installatie bij jou gaat.</p>
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

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
import Calculator from '@/components/Calculator';

export const metadata = {
  alternates: { canonical: '/kennisbank/bronwater' },
  title: 'Bronwater: wat is het en is het beter dan kraanwater?',
  description:
    'Bronwater uitgelegd: het verschil met mineraalwater, welke merken echt bronwater zijn, PFAS en microplastics in flessen en wat bronwater per jaar kost.',
  openGraph: {
    title: 'Bronwater: wat het is en wat het je kost',
    description: 'Het verschil met mineraalwater, wat er in flessenwater zit en wat bronwater per jaar kost.',
    url: 'https://www.water-zuivering.nl/kennisbank/bronwater',
    images: ['/assets/img/glas-water.webp'],
  },
};

const SOORTEN = [
  ['Natuurlijk mineraalwater', 'Uit een door de overheid erkende onderaardse bron, met een vaste samenstelling van mineralen.', 'Bij de bron', 'Spa Reine, Sourcy, Evian, Vittel'],
  ['Bronwater', 'Uit een onderaardse bron, in natuurlijke staat. De samenstelling hoeft niet constant te zijn en er is geen erkenning nodig.', 'Niet verplicht bij de bron', 'Huismerken van supermarkten, waterkoelerflessen'],
  ['Tafelwater', 'Kan gewoon (gefilterd) kraanwater zijn, soms met toegevoegde mineralen of koolzuur.', 'Fabriek', 'Sommige smaakwaters en huismerken'],
  ['Kraanwater', 'Grond- of oppervlaktewater dat het waterbedrijf zuivert en continu controleert.', 'Uit de leiding', 'Je eigen kraan'],
];

const KOSTEN = [
  ['Kraanwater', '± € 0,003', '± € 6'],
  ['Bronwater huismerk', '± € 0,30', '± € 650'],
  ['Bronwater of mineraalwater A-merk', '± € 0,60 tot € 1,00', '± € 1.300 tot € 2.200'],
  ['Bronwater in glazen fles', '± € 1,50 of meer', '± € 3.300 of meer'],
];

const FAQ = [
  ['Wat is bronwater?', 'Bronwater is water dat uit een onderaardse bron komt en in zijn natuurlijke staat wordt verpakt. Het wordt niet ontsmet. Anders dan bij mineraalwater hoeft de bron niet officieel erkend te zijn en hoeft de samenstelling van mineralen niet constant te zijn.'],
  ['Wat is het verschil tussen mineraalwater en bronwater?', 'Natuurlijk mineraalwater komt uit een door de overheid erkende bron, heeft een vaste samenstelling en moet direct bij de bron worden verpakt. Bronwater komt ook uit een onderaardse bron, maar zonder die erkenning en zonder vaste samenstelling.'],
  ['Is Spa water bronwater?', 'Spa Reine wordt verkocht als natuurlijk mineraalwater, niet als bronwater. Het komt uit een erkende bron in de Belgische Ardennen. Op het etiket zie je altijd welke soort water je koopt.'],
  ['Is bronwater gezonder dan kraanwater?', 'Nee. Het Voedingscentrum stelt dat mineraal- of bronwater niet gezonder is dan kraanwater. Nederlands kraanwater wordt strenger en vaker gecontroleerd dan veel flessenwater. Het grootste verschil zit in de smaak en de prijs.'],
  ['Welke bronwater merken zijn er in Nederland?', 'Bekende merken in Nederlandse winkels zijn Bar-le-Duc, Sourcy, Spa, Vittel en Evian. Sourcy en Spa Reine zijn officieel natuurlijk mineraalwater. Supermarkten verkopen daarnaast eigen huismerken bronwater; op het etiket staat uit welke bron het komt.'],
  ['Zit er PFAS in bronwater?', 'Soms. Belgisch onderzoek vond sporen van zeer kortketenige PFAS in bron- en mineraalwater uit de Ardennen, de Hoge Venen en Oost-Vlaanderen. Een internationaal onderzoek liet zien dat flessenwater niet automatisch minder PFAS bevat dan kraanwater.'],
  ['Is bronwater in een glazen fles beter?', 'Glas geeft geen plastic deeltjes af aan het water, en in glas proef je geen plastic. Het water zelf is hetzelfde. Glas is wel duurder en zwaarder, en de dop kan zelf ook deeltjes afgeven.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Bronwater: wat is het en is het beter dan kraanwater?"
        description="Het verschil tussen bronwater en mineraalwater, wat er in flessenwater zit en wat bronwater per jaar kost."
        image="https://www.water-zuivering.nl/assets/img/glas-water.webp"
        url="https://www.water-zuivering.nl/kennisbank/bronwater"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Bronwater', url: 'https://www.water-zuivering.nl/kennisbank/bronwater' },
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
              Bronwater: wat is het en is het beter dan kraanwater?
            </h1>
            <p className="mt-5 text-dim text-lg">
              Op het etiket staan bergen, bronnen en zuiverheid. Maar wat is <strong className="text-ink">bronwater</strong> eigenlijk, wat is het verschil met mineraalwater, en is het al die flessen en dat geld waard? Hier lees je het eerlijke antwoord.
            </p>
            <KortAntwoord bron={{ naam: 'Drinkwaterplatform', url: 'https://www.drinkwaterplatform.nl' }}>
              Bronwater is water uit een onderaardse bron dat in zijn natuurlijke staat wordt verpakt. Anders dan mineraalwater hoeft de bron niet officieel erkend te zijn en is de samenstelling niet vast. Bronwater is niet gezonder dan Nederlands kraanwater, maar wel honderd tot duizend keer duurder per liter.
            </KortAntwoord>
            <AuteurRegel />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Soorten water</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Bronwater of mineraalwater: wat is het verschil?</h2>
            <p className="mt-4 text-dim leading-relaxed max-w-3xl">
              In de winkel staat alles naast elkaar, maar de wet maakt duidelijk onderscheid. Veel water dat je als &quot;bronwater&quot; ziet, is officieel natuurlijk mineraalwater. Het etiket vertelt welke soort je koopt.
            </p>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-amber/10 text-ink">
                  <tr>
                    <th scope="col" className="p-4 font-display font-bold">Soort</th>
                    <th scope="col" className="p-4 font-display font-bold">Wat het is</th>
                    <th scope="col" className="p-4 font-display font-bold">Verpakt</th>
                    <th scope="col" className="p-4 font-display font-bold">Voorbeelden</th>
                  </tr>
                </thead>
                <tbody>
                  {SOORTEN.map(([soort, wat, verpakt, voorbeeld]) => (
                    <tr key={soort} className="border-t border-edge align-top">
                      <th scope="row" className="p-4 font-semibold text-ink">{soort}</th>
                      <td className="p-4 text-dim">{wat}</td>
                      <td className="p-4 text-dim">{verpakt}</td>
                      <td className="p-4 text-dim">{voorbeeld}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-dim max-w-3xl">
              De regels staan in het Warenwetbesluit Verpakte waters. Bronwater en mineraalwater mogen allebei niet ontsmet worden; alleen een paar natuurlijke behandelingen, zoals het verwijderen van ijzer, zijn toegestaan.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Welke bronwater merken zijn er in Nederland?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              In Nederlandse supermarkten kom je vooral deze merken tegen. Let op het etiket: een deel is officieel mineraalwater.
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Sourcy</strong> komt uit een bron in Bunnik, aan de voet van de Utrechtse Heuvelrug, en wordt verkocht als natuurlijk mineraalwater.</li>
              <li><strong className="text-ink">Bar-le-Duc</strong> is een Nederlands merk uit 1966 dat in Utrecht wordt gebotteld.</li>
              <li><strong className="text-ink">Spa</strong> komt uit de Belgische Ardennen. Spa Reine is natuurlijk mineraalwater.</li>
              <li><strong className="text-ink">Evian en Vittel</strong> komen uit Frankrijk en zijn ook natuurlijk mineraalwater.</li>
              <li><strong className="text-ink">Huismerken</strong> van Aldi, Lidl, Albert Heijn en andere supermarkten zijn vaak bronwater. Het etiket noemt de naam en de plaats van de bron.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Opvallend: de bronnen van een paar Nederlandse merken liggen in hetzelfde soort gebied waar ook drinkwaterbedrijven hun grondwater winnen. Het water in de fles verschilt dan in de praktijk weinig van het water uit je kraan, behalve in prijs.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Gezondheid</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Is bronwater gezonder dan kraanwater?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Nee. Het Voedingscentrum geeft aan dat het beeld dat mineraal- of bronwater gezonder is dan kraanwater, niet klopt. Nederlands kraanwater wordt bovendien vaker en op meer stoffen gecontroleerd dan veel flessenwater. Hoe dat werkt, lees je in onze uitleg over de <Link href="/kennisbank/drinkwaternormen-nederland" className="underline hover:text-ink">drinkwaternormen in Nederland</Link>.
            </p>
            <h3 className="mt-8 font-display text-xl font-bold text-ink">PFAS in bronwater</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Een fles uit een diepe bron klinkt als de veilige keuze, maar ook daar zijn PFAS gevonden. Belgisch onderzoek, waarover het Fonds Pascal Decroos publiceerde, vond sporen van zeer kortketenige PFAS in bron- en mineraalwater uit de Ardennen, de Hoge Venen en Oost-Vlaanderen. Een internationaal onderzoek liet daarnaast zien dat flessenwater niet automatisch minder PFAS bevat dan kraanwater (<a href="https://scientias.nl/overal-ter-wereld-zitten-er-te-veel-pfas-in-het-water-en-we-onderschatten-hoe-erg-dat-is/" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Scientias</a>). Wat er in jouw kraanwater zit, check je met de <Link href="/pfas-check" className="underline hover:text-ink">gratis PFAS-check per postcode</Link>.
            </p>
            <h3 className="mt-8 font-display text-xl font-bold text-ink">Microplastics in flessenwater</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Plastic flessen geven deeltjes af. Amerikaanse onderzoekers van Columbia University vonden in 2024 met een nieuwe meetmethode gemiddeld zo&apos;n 240.000 plastic deeltjes per liter flessenwater, het grootste deel nanoplastics (PNAS). Warmte en zonlicht maken dat erger, net als het telkens opnieuw openen en dichtdraaien van de dop. Meer daarover lees je in <Link href="/kennisbank/medicijnresten-in-drinkwater" className="underline hover:text-ink">medicijnresten en microplastics in drinkwater</Link>.
            </p>
            <h3 className="mt-8 font-display text-xl font-bold text-ink">Bronwater in een glazen fles</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Glas geeft zelf geen plastic af en je proeft er niets van. Het water in de fles is wel hetzelfde, en de dop kan nog steeds deeltjes afgeven. Bronwater in een glazen fles is vooral duurder: vaak meer dan € 1,50 per liter.
            </p>
            <TussenCta titel="Zuiverder dan bronwater, gewoon uit je eigen kraan?">
              Een osmosesysteem filtert PFAS, microplastics, medicijnresten en kalk uit je kraanwater. Zonder flessen, zonder sjouwen en zonder plastic.
            </TussenCta>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Rekenvoorbeeld</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat kost bronwater per jaar?</h2>
            <p className="mt-4 text-dim leading-relaxed max-w-3xl">
              Een gezin van vier dat per persoon anderhalve liter per dag drinkt, gebruikt zo&apos;n 2.190 liter per jaar. Dit kost dat per soort water, uitgaande van gangbare winkelprijzen:
            </p>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-amber/10 text-ink">
                  <tr>
                    <th scope="col" className="p-4 font-display font-bold">Soort water</th>
                    <th scope="col" className="p-4 font-display font-bold">Prijs per liter</th>
                    <th scope="col" className="p-4 font-display font-bold">Per jaar (2.190 liter)</th>
                  </tr>
                </thead>
                <tbody>
                  {KOSTEN.map(([soort, liter, jaar]) => (
                    <tr key={soort} className="border-t border-edge">
                      <th scope="row" className="p-4 font-semibold text-ink">{soort}</th>
                      <td className="p-4 text-dim">{liter}</td>
                      <td className="p-4 text-dim">{jaar}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-dim max-w-3xl">
              Kraanwater kost in 2026 gemiddeld zo&apos;n € 2,71 per 1.000 liter inclusief belastingen. Flessenprijzen verschillen per winkel en aanbieding.
            </p>
            <p className="mt-6 text-dim leading-relaxed max-w-3xl">
              Daar komt het sjouwen nog bij: 2.190 liter is ruim 2.000 kilo water dat je per jaar naar huis sjouwt, plus het plastic afval of het statiegeld terugbrengen. Met een osmosesysteem onder het aanrecht betaal je voor de filters ongeveer € 135 per jaar, en tap je het water gewoon uit je eigen kraan. Wat jij per jaar bespaart met jouw merk, reken je hieronder uit. De volledige vergelijking lees je in <Link href="/kennisbank/kraanwater-vs-flessenwater" className="underline hover:text-ink">kraanwater vs flessenwater</Link>.
            </p>
            <div id="besparing" className="scroll-mt-24">
              <h3 className="mt-12 font-display text-xl md:text-2xl font-extrabold tracking-tight text-center">Bereken wat jij aan bronwater uitgeeft</h3>
              <Calculator />
            </div>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/glas-water.webp" alt="Glas water: gefilterd kraanwater als alternatief voor bronwater uit de fles" fill loading="eager" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Alternatief</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">De smaak van bronwater, zonder de fles</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Veel mensen kopen bronwater om de smaak: zacht en zonder bijsmaak. Die smaak komt vooral door weinig kalk en geen chloor of leidingsmaak. Dat kun je ook thuis krijgen.
              </p>
              <p className="mt-4 text-dim leading-relaxed">
                Een <Link href="/osmosesysteem" className="underline hover:text-ink">osmosesysteem</Link> haalt kalk, PFAS, microplastics en medicijnresten uit je kraanwater. Het nafilter met mineralen voegt daarna calcium en magnesium toe, voor een volle, zachte smaak die op bronwater lijkt. Het systeem filtert direct als je de kraan opendraait, zonder opslagtank. Benieuwd wat er precies in de filters gebeurt? Lees <Link href="/kennisbank/wat-is-osmosewater" className="underline hover:text-ink">wat is osmosewater</Link>.
              </p>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over bronwater</h2>
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
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Stop met flessen sjouwen</h2>
            <p className="mt-4 text-white/70">Zuiver water met de smaak van bronwater, direct uit je eigen kraan. Vraag vrijblijvend een offerte aan.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/aanmelden" className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-xl shadow-amber/25">
                Vraag vrijblijvend een offerte aan
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              <Link href="#besparing" className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white hover:bg-white/10 transition-colors">
                Bereken je besparing
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

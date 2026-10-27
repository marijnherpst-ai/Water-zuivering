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
  alternates: { canonical: '/kennisbank/gedestilleerd-water-drinken' },
  title: 'Gedestilleerd water drinken: kan dat en is het gezond?',
  description:
    'Gedestilleerd water drinken: het verschil met gedemineraliseerd water en osmosewater, of het gezond is en waarom mineralen in drinkwater ertoe doen.',
  openGraph: {
    title: 'Gedestilleerd water drinken: kan dat en is het gezond?',
    description: 'Gedestilleerd, gedemineraliseerd of osmosewater: hoe ze gemaakt worden, of je ze kunt drinken en wat het verschil is.',
    url: 'https://www.water-zuivering.nl/kennisbank/gedestilleerd-water-drinken',
    images: ['/assets/img/mineraalfilter.jpg'],
  },
};

const SOORTEN = [
  ['Gedestilleerd water', 'Water wordt verdampt en de damp weer afgekoeld tot water. Mineralen, zouten en de meeste andere stoffen blijven achter in de ketel.', 'Vrijwel geen', 'Laboratoria, strijkijzers, apparatuur'],
  ['Gedemineraliseerd water', 'Water stroomt langs ionenwisselaars die de opgeloste zouten en mineralen eruit halen. Bacteriën en niet-geladen stoffen worden daarmee niet per se verwijderd.', 'Vrijwel geen', 'Strijkijzer, accu, koelsysteem, ramen wassen'],
  ['Osmosewater', 'Water wordt door een membraan met poriën van 0,0001 micron geperst. De meeste opgeloste stoffen blijven achter, ook PFAS en medicijnresten.', 'Heel weinig', 'Drinkwater, koffie en thee, aquarium'],
  ['Osmosewater met mineraalfilter', 'Na het membraan voegt een mineraalfilter weer calcium en magnesium toe.', 'Calcium en magnesium terug', 'Dagelijks drinkwater'],
];

const FAQ = [
  ['Kun je gedestilleerd water drinken?', 'Ja, een glas gedestilleerd water is niet schadelijk. Het smaakt wel vlak, omdat er geen mineralen in zitten. Als je enige drinkwater is het minder geschikt: je mist de calcium en magnesium die gewoon kraanwater meegeeft.'],
  ['Is gedestilleerd water gezond?', 'Het is heel zuiver, maar dat maakt het niet gezonder dan kraanwater. Er zitten geen mineralen in. De WHO heeft gewezen op mogelijke nadelen als je langdurig alleen water met heel weinig mineralen drinkt. Je haalt de meeste mineralen wel uit je eten, dus af en toe is het geen probleem.'],
  ['Wat is het verschil tussen gedestilleerd en gedemineraliseerd water?', 'Gedestilleerd water wordt gemaakt door verdampen en weer laten condenseren. Gedemineraliseerd water wordt gemaakt met ionenwisselaars die zouten en mineralen eruit halen. Beide bevatten vrijwel geen mineralen meer, maar bij verdampen blijven ook andere stoffen achter.'],
  ['Kun je gedemineraliseerd water uit de supermarkt drinken?', 'Liever niet. Gedemineraliseerd water uit de supermarkt of bouwmarkt is bedoeld voor je strijkijzer of auto, niet als drinkwater. Het wordt niet gemaakt en verpakt volgens de eisen voor drinkwater. Kijk altijd op de verpakking.'],
  ['Is osmosewater hetzelfde als gedestilleerd water?', 'Nee. Beide zijn heel zuiver, maar ze worden anders gemaakt. Osmosewater ontstaat door filteren via een membraan, gedestilleerd water door verdampen. Osmosewater bevat nog een heel klein beetje mineralen, en met een mineraalfilter voeg je calcium en magnesium weer toe.'],
  ['Waarom smaakt gedestilleerd water vlak?', 'Mineralen zoals calcium, magnesium en bicarbonaat geven water zijn smaak. Zonder die mineralen smaakt water leeg of vlak. Daarom voegen veel osmosesystemen na het filteren weer mineralen toe.'],
  ['Mag je gedestilleerd water gebruiken voor babyvoeding?', 'Het Voedingscentrum adviseert gewoon koud kraanwater voor flesvoeding, of flessenwater waarvan op het etiket staat dat het geschikt is voor babyvoeding. Gedestilleerd water hoort daar niet bij.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Gedestilleerd water drinken: kan dat, en is het gezond?"
        description="Het verschil tussen gedestilleerd water, gedemineraliseerd water en osmosewater, of je ze kunt drinken en waarom mineralen in drinkwater ertoe doen."
        image="https://www.water-zuivering.nl/assets/img/mineraalfilter.jpg"
        url="https://www.water-zuivering.nl/kennisbank/gedestilleerd-water-drinken"
        datePublished="2026-10-27"
        about={{ '@type': 'Thing', name: 'Gedestilleerd water', sameAs: 'https://nl.wikipedia.org/wiki/Gedestilleerd_water' }}
        mentions={[{ '@type': 'Organization', name: 'World Health Organization', url: 'https://www.who.int' }]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Gedestilleerd water drinken', url: 'https://www.water-zuivering.nl/kennisbank/gedestilleerd-water-drinken' },
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
              Gedestilleerd water drinken: kan dat, en is het gezond?
            </h1>
            <p className="mt-5 text-dim text-lg">
              Gedestilleerd water is het zuiverste water dat je kunt kopen. Maar is <strong className="text-ink">gedestilleerd water drinken</strong> ook gezond? En wat is het verschil met gedemineraliseerd water en osmosewater? Hier lees je hoe ze gemaakt worden, wat erin zit en wat er juist uit is.
            </p>
            <KortAntwoord bron={{ naam: 'WHO: Health risks from drinking demineralised water (Kozisek)', url: 'https://susana.org/knowledge-hub/resources?id=4295' }}>
              Je kunt gedestilleerd water drinken; een glas is niet schadelijk. Er zitten alleen geen mineralen in, waardoor het vlak smaakt en je de calcium en magnesium mist die kraanwater meegeeft. Als vast drinkwater is het daarom minder geschikt. Wil je heel zuiver drinkwater, dan is osmosewater met een mineraalfilter een betere keuze.
            </KortAntwoord>
            <AuteurRegel />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Het verschil</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Gedestilleerd, gedemineraliseerd of osmosewater?</h2>
            <p className="mt-4 text-dim leading-relaxed max-w-3xl">
              De drie worden vaak door elkaar gehaald. Ze zijn allemaal heel zuiver, maar ze worden op een andere manier gemaakt en zijn voor iets anders bedoeld.
            </p>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-amber/10 text-ink">
                  <tr>
                    <th scope="col" className="p-4 font-display font-bold">Soort</th>
                    <th scope="col" className="p-4 font-display font-bold">Hoe het gemaakt wordt</th>
                    <th scope="col" className="p-4 font-display font-bold">Mineralen</th>
                    <th scope="col" className="p-4 font-display font-bold">Waarvoor</th>
                  </tr>
                </thead>
                <tbody>
                  {SOORTEN.map(([soort, hoe, mineralen, waarvoor]) => (
                    <tr key={soort} className="border-t border-edge align-top">
                      <th scope="row" className="p-4 font-semibold text-ink">{soort}</th>
                      <td className="p-4 text-dim">{hoe}</td>
                      <td className="p-4 text-dim">{mineralen}</td>
                      <td className="p-4 text-dim">{waarvoor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Is gedestilleerd water drinken gezond?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Gedestilleerd water is niet giftig en een glas kan geen kwaad. Het is ook niet gezonder dan kraanwater. Het grote verschil is dat er <strong className="text-ink">geen mineralen</strong> in zitten. Gewoon Nederlands kraanwater bevat calcium en magnesium; de wet schrijft zelfs een minimale hardheid voor.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Over water met heel weinig mineralen verscheen een veelgeciteerd rapport van de Tsjechische onderzoeker František Kožíšek, gepubliceerd door de WHO. Daarin staan mogelijke nadelen als je langdurig alleen zulk water drinkt. Andere onderzoekers wijzen erop dat je verreweg de meeste calcium en magnesium uit je eten haalt, niet uit water. Een redelijke conclusie: af en toe gedestilleerd water drinken is geen probleem, maar het is niet ideaal als vast drinkwater.
            </p>
            <h3 className="mt-10 font-display text-xl font-bold text-ink">Waarom smaakt het vlak?</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Mineralen geven water smaak. Zonder calcium, magnesium en bicarbonaat proef je eigenlijk niets, en dat voelt leeg of vlak. Water zonder mineralen neemt ook makkelijk koolzuur uit de lucht op, waardoor het licht zuur wordt. Meer daarover lees je in <Link href="/kennisbank/ph-kraanwater" className="underline hover:text-ink">pH van kraanwater</Link>.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Let op</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Gedemineraliseerd water uit de winkel is geen drinkwater</h2>
            <p className="mt-4 text-dim leading-relaxed">
              De jerrycans gedemineraliseerd water in de supermarkt en de bouwmarkt zijn bedoeld voor je strijkijzer, je auto of het wassen van ramen. Ze worden niet gemaakt en verpakt volgens de eisen die voor drinkwater gelden. Kijk altijd op de verpakking wat de fabrikant erover zegt, en gebruik het niet als drinkwater.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Hetzelfde geldt voor veel &lsquo;osmosewater&rsquo; dat je bij tankstations en bouwmarkten kunt kopen voor aquarium of glasbewassing. Waar je het wel voor drinkwater kunt halen en wat het kost, lees je in <Link href="/kennisbank/osmosewater-kopen" className="underline hover:text-ink">osmosewater kopen</Link>.
            </p>
            <TussenCta titel="Zuiver drinkwater, maar wel met mineralen?">
              Een osmosesysteem met mineraalfilter geeft je heel zuiver water uit je eigen kraan, met calcium en magnesium erbij voor de smaak. Vraag vrijblijvend een offerte aan.
            </TussenCta>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/mineraalfilter.jpg" alt="Mineraalfilter als alternatief voor gedestilleerd water drinken" fill loading="eager" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Het beste van twee</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Osmosewater met mineralen: zuiver én met smaak</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Wil je heel zuiver drinkwater zonder de nadelen van water zonder mineralen? Dan is osmosewater met een mineraalfilter de logische keuze. Het membraan haalt PFAS, medicijnresten, microplastics en kalk eruit. Daarna voegt het <Link href="/winkel/cto-filter-met-mineralen" className="underline hover:text-ink">CTO-filter met mineralen</Link> weer calcium en magnesium toe, voor een voller glas water.
              </p>
              <p className="mt-4 text-dim leading-relaxed">
                Met de <Link href="/3-weg-kraan" className="underline hover:text-ink">3-weg kraan</Link> kies je zelf: gewoon kraanwater, gefilterd water of gefilterd water met mineralen. Meer over hoe het werkt lees je in <Link href="/kennisbank/wat-is-osmosewater" className="underline hover:text-ink">wat is osmosewater?</Link>
              </p>
            </div>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zelf gedestilleerd water maken?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Het kan, met een speciaal destilleerapparaat dat water kookt en de damp opvangt. Het kost wel veel energie en tijd: je moet al het water aan de kook brengen, en een apparaat maakt maar een paar liter per keer. Voor dagelijks drinkwater is filteren via een membraan veel efficiënter. Hoe dat thuis werkt, lees je in <Link href="/kennisbank/osmosewater-maken-thuis" className="underline hover:text-ink">osmosewater maken</Link>.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over gedestilleerd water drinken</h2>
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
                <li><a href="https://susana.org/knowledge-hub/resources?id=4295" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Kožíšek, F.: Health risks from drinking demineralised water (WHO)</a></li>
                <li><a href="https://www.bfr.bund.de/cm/349/health-risk-assessment-of-mineral-water-with-very-low-mineral-content.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">BfR: Health risk assessment of mineral water with very low mineral content (2020)</a></li>
                <li>KWR / H2O: Resultaat onderzoek relatie calcium en magnesium in drinkwater en hart- en vaatziekten (2010)</li>
                <li><a href="https://www.voedingscentrum.nl/Assets/Uploads/voedingscentrum/Documents/Consumenten/Mijn%20kind%20en%20ik/Flesvoeding/Flesvoeding_2024.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Voedingscentrum: Flesvoeding klaarmaken (2024)</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zuiver water, met de mineralen die je wilt</h2>
            <p className="mt-4 text-white/70">Een osmosesysteem met mineraalfilter geeft heel zuiver drinkwater uit je eigen kraan, zonder sjouwen met jerrycans. Vraag vrijblijvend een offerte aan.</p>
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

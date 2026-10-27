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
  alternates: { canonical: '/kennisbank/medicijnresten-in-drinkwater' },
  title: 'Medicijnresten in drinkwater en microplastics: de feiten',
  description:
    'Medicijnresten in drinkwater en microplastics: hoeveel er echt in Nederlands kraanwater zit, wat RIVM en KWR meten en wat een filter tegenhoudt.',
  openGraph: {
    title: 'Medicijnresten in drinkwater en microplastics: de feiten',
    description: 'Wat onderzoekers echt meten aan medicijnresten, hormonen en microplastics in Nederlands kraanwater, zonder bangmakerij.',
    url: 'https://www.water-zuivering.nl/kennisbank/medicijnresten-in-drinkwater',
    images: ['/assets/img/filters-closeup.png'],
  },
};

const MICRO = [
  ['Drinkwater gemaakt van oppervlaktewater', 'minder dan 2.000 per m³', 'deeltjes van 20 tot 500 micrometer'],
  ['Drinkwater gemaakt van grondwater', 'rond 1.500 per m³', ''],
  ['Kraanwater in het leidingnet', '1.000 tot 2.000 per m³', 'dat is 1 à 2 deeltjes per liter'],
  ['Wat je er gemiddeld per dag van binnenkrijgt', 'hooguit rond 3 deeltjes', 'minder dan 1% van je totale inname'],
];

const FAQ = [
  ['Zitten er medicijnresten in drinkwater?', 'In sporen, vooral in drinkwater dat van rivierwater wordt gemaakt. Medicijnen komen via urine en het riool in de Rijn en de Maas. Drinkwaterbedrijven zuiveren het grootste deel eruit. Het RIVM concludeerde in 2018 dat de opkomende stoffen in de bronnen, waaronder medicijnresten, geen risico voor de gezondheid vormen via drinkwater.'],
  ['Zijn er normen voor medicijnresten in drinkwater?', 'Voor de meeste medicijnresten bestaat geen aparte wettelijke norm. Drinkwaterbedrijven gebruiken wel een signaleringswaarde van 0,1 microgram per liter voor stoffen die door mensen in het milieu komen. Komt een stof daarboven, dan gaan ze extra meten en onderzoeken.'],
  ['Hoeveel microplastics zitten er in kraanwater?', 'Volgens onderzoek van KWR, Vitens, Oasen en Het Waterlaboratorium (2025) zit er in kraanwater 1.000 tot 2.000 microplastics per kubieke meter. Dat is 1 à 2 deeltjes per liter. Via drinkwater krijg je hooguit rond 3 deeltjes per dag binnen.'],
  ['Bevat flessenwater minder microplastics dan kraanwater?', 'Nee, juist meer. De onderzoekers schrijven dat flessenwater veel meer microplastics bevat dan kraanwater. Overstappen op flessenwater is dus geen oplossing.'],
  ['Zitten er hormonen in kraanwater?', 'Resten van hormonen, bijvoorbeeld uit de anticonceptiepil, horen bij de medicijnresten die via het riool in rivieren komen. Ze worden net als andere medicijnresten grotendeels weggezuiverd en in drinkwater hooguit in sporen gevonden.'],
  ['Haalt een waterfilter medicijnresten eruit?', 'Een filterkan met actieve kool houdt een deel tegen. Een omgekeerde-osmosemembraan met poriën van 0,0001 micron houdt de meeste opgeloste stoffen tegen, dus ook medicijnresten, en ook microplastics.'],
  ['Is kraanwater dan nog veilig om te drinken?', 'Ja. Nederlands kraanwater voldoet aan strenge normen, en de gemeten hoeveelheden zijn klein. Filteren is een keuze voor wie verder wil gaan dan de norm, geen noodzaak.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Medicijnresten in drinkwater en microplastics: wat zit er echt in?"
        description="Wat RIVM en KWR meten aan medicijnresten, hormonen en microplastics in Nederlands kraanwater, hoe drinkwaterbedrijven ermee omgaan en wat een filter tegenhoudt."
        image="https://www.water-zuivering.nl/assets/img/filters-closeup.png"
        url="https://www.water-zuivering.nl/kennisbank/medicijnresten-in-drinkwater"
        datePublished="2026-10-27"
        about={{ '@type': 'Thing', name: 'Microplastics', sameAs: 'https://nl.wikipedia.org/wiki/Microplastic' }}
        mentions={[
          { '@type': 'Organization', name: 'RIVM', url: 'https://www.rivm.nl' },
          { '@type': 'Organization', name: 'KWR Water Research Institute', url: 'https://www.kwrwater.nl' },
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Medicijnresten in drinkwater', url: 'https://www.water-zuivering.nl/kennisbank/medicijnresten-in-drinkwater' },
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
              Medicijnresten in drinkwater en microplastics: wat zit er echt in?
            </h1>
            <p className="mt-5 text-dim text-lg">
              Over <strong className="text-ink">medicijnresten in drinkwater</strong> en microplastics verschijnen regelmatig verontrustende berichten. Wat meten onderzoekers echt in het Nederlandse kraanwater? Hier lees je de cijfers van het RIVM en KWR, wat drinkwaterbedrijven eraan doen en wat je zelf kunt doen als je verder wilt gaan dan de norm.
            </p>
            <KortAntwoord bron={{ naam: 'H2O: Microplastics in het vizier (KWR, Vitens, Oasen, Het Waterlaboratorium, 2025)', url: 'https://h2owaternetwerk.nl/microplastics-in-het-vizier-vorderingen-in-de-drinkwatersector/' }}>
              Medicijnresten zitten vooral in sporen in drinkwater dat van rivierwater wordt gemaakt; volgens het RIVM vormen ze geen gezondheidsrisico. In kraanwater zitten 1 à 2 microplastics per liter, minder dan 1% van wat je dagelijks binnenkrijgt. Flessenwater bevat er meer. Wil je ook die sporen kwijt, dan houdt een osmosemembraan ze grotendeels tegen.
            </KortAntwoord>
            <AuteurRegel />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Medicijnresten</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoe komen medicijnresten in drinkwater?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Een groot deel van de medicijnen die we slikken, plassen we weer uit. Rioolwaterzuiveringen halen er een deel van weg, maar niet alles. De rest komt in rivieren zoals de Rijn en de Maas terecht. Uit dat rivierwater maken drinkwaterbedrijven in vooral het westen en zuiden van het land drinkwater.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              In het rivierwater worden geregeld medicijnen gemeten, zoals het diabetesmiddel metformine, de bloeddrukverlager metoprolol en het anti-epilepticum carbamazepine. Bij innamepunten aan de Maas liggen sommige concentraties boven de <strong className="text-ink">signaleringswaarde van 0,1 microgram per liter</strong> die drinkwaterbedrijven aanhouden. Dat is geen gezondheidsgrens, maar een alarmbel: boven die waarde gaan ze extra meten en onderzoeken.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Drinkwater uit grondwater heeft hier veel minder mee te maken. Grondwater is goed beschermd door de bodem. Waar jouw kraanwater vandaan komt, lees je bijvoorbeeld in <Link href="/kennisbank/kraanwater-utrecht" className="underline hover:text-ink">kraanwater Utrecht</Link> (grondwater) en <Link href="/kennisbank/drinkwater-dordrecht-zwijndrecht" className="underline hover:text-ink">drinkwater Dordrecht en Zwijndrecht</Link> (Maaswater).
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zijn medicijnresten in drinkwater gevaarlijk?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Het RIVM heeft dat onderzocht. In 2018 beoordeelde het 42 opkomende stoffen die in de jaren 2013 tot en met 2015 boven de signaleringswaarde uitkwamen in oppervlaktewater voor drinkwater. Daaronder waren medicijnresten, bestrijdingsmiddelen, zoetstoffen en industriële stoffen. De conclusie: ze vormen <strong className="text-ink">geen risico voor de gezondheid</strong> via drinkwater. De hoogst gemeten concentraties bleven voor elke stof ruim onder de drinkwaterrichtwaarde.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Er zijn wel kanttekeningen. Voor veel medicijnresten is nog weinig bekend over de effecten van heel lage hoeveelheden over lange tijd, en er bestaan geen aparte wettelijke normen voor. Lees daarover meer in <Link href="/kennisbank/drinkwaternormen-nederland" className="underline hover:text-ink">drinkwaternormen in Nederland</Link>. Ook voor het milieu zijn medicijnresten een probleem: in rivieren hebben ze effect op vissen en ander waterleven.
            </p>
            <h3 className="mt-10 font-display text-xl font-bold text-ink">En hormonen?</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Resten van hormonen, bijvoorbeeld uit de anticonceptiepil, horen bij dezelfde groep. Ze komen ook via het riool in de rivieren en worden net als andere medicijnresten grotendeels weggezuiverd. In drinkwater gaat het hooguit om sporen.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Microplastics</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoeveel microplastics zitten er in kraanwater?</h2>
            <p className="mt-4 text-dim leading-relaxed max-w-3xl">
              Microplastics zijn plastic deeltjes kleiner dan 5 millimeter. Onderzoekers van KWR, Vitens, Oasen en Het Waterlaboratorium hebben ze de afgelopen jaren gemeten in bronnen, zuiveringen en in het leidingnet. Hun resultaten, gepubliceerd in maart 2025:
            </p>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-amber/10 text-ink">
                  <tr>
                    <th scope="col" className="p-4 font-display font-bold">Waar gemeten</th>
                    <th scope="col" className="p-4 font-display font-bold">Aantal microplastics</th>
                    <th scope="col" className="p-4 font-display font-bold">Toelichting</th>
                  </tr>
                </thead>
                <tbody>
                  {MICRO.map(([waar, aantal, toelichting]) => (
                    <tr key={waar} className="border-t border-edge align-top">
                      <th scope="row" className="p-4 font-semibold text-ink">{waar}</th>
                      <td className="p-4 text-dim">{aantal}</td>
                      <td className="p-4 text-dim">{toelichting}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-dim leading-relaxed max-w-3xl">
              De zuivering haalt er volgens hetzelfde onderzoek <strong className="text-ink">80 tot 99%</strong> uit, en er zijn geen aanwijzingen dat er onderweg in het leidingnet microplastics bijkomen. Flessenwater bevat juist veel meer microplastics dan kraanwater. Wat microplastics op lange termijn met je lichaam doen, wordt nog onderzocht, onder meer in een groot onderzoeksprogramma van ZonMw.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat doen drinkwaterbedrijven eraan?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Drinkwaterbedrijven die rivierwater gebruiken, zuiveren in meerdere stappen: bezinken, filtreren, actieve kool, en soms duininfiltratie of membranen. Ze meten continu en houden de signaleringswaarde in de gaten. Daarnaast pleiten ze voor aanpak bij de bron: minder medicijnen in het riool, betere rioolwaterzuiveringen en het terugbrengen van ongebruikte medicijnen naar de apotheek.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Je kunt zelf ook iets doen: gooi oude medicijnen nooit door de wc of de gootsteen, maar lever ze in bij de apotheek of de milieustraat.
            </p>
            <TussenCta titel="Wil je ook de laatste sporen uit je drinkwater halen?">
              Een osmosesysteem onder het aanrecht houdt medicijnresten, microplastics en PFAS grotendeels tegen. Vraag vrijblijvend een offerte aan, of check eerst hoe het met PFAS in jouw regio zit.
            </TussenCta>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/filters-closeup.png" alt="Filters van een osmosesysteem die medicijnresten in drinkwater en microplastics tegenhouden" fill loading="eager" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Filteren</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Welk filter houdt medicijnresten en microplastics tegen?</h2>
              <ul className="mt-4 space-y-3 text-dim leading-relaxed list-disc pl-5">
                <li><strong className="text-ink">Filterkan of kraanfilter:</strong> werkt met actieve kool. Goed voor smaak en geur, en het houdt een deel van de organische stoffen vast. Microplastics en veel medicijnresten gaan er grotendeels doorheen.</li>
                <li><strong className="text-ink">Omgekeerde osmose:</strong> perst water door een membraan met poriën van 0,0001 micron. Microplastics zijn duizenden keren groter en blijven achter, net als de meeste opgeloste stoffen, zoals medicijnresten en PFAS.</li>
              </ul>
              <p className="mt-4 text-dim leading-relaxed">
                Het <Link href="/osmosesysteem" className="underline hover:text-ink">osmosesysteem</Link> van Water-zuivering combineert een koolstofvoorfilter, een osmosemembraan en een nafilter. Welk type filter bij jou past, lees je in de vergelijking van <Link href="/waterfilter" className="underline hover:text-ink">soorten waterfilters</Link>.
              </p>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Flessenwater als alternatief?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Wie zich zorgen maakt over microplastics, grijpt soms naar flessenwater. Dat is geen goed idee: volgens de onderzoekers bevat flessenwater veel meer microplastics dan kraanwater. Het kost bovendien veel meer geld en levert plastic afval op. Meer daarover in <Link href="/kennisbank/kraanwater-vs-flessenwater" className="underline hover:text-ink">kraanwater vs. flessenwater</Link>.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Ben je benieuwd naar andere stoffen in kraanwater? Lees dan <Link href="/kennisbank/pfas-in-kraanwater" className="underline hover:text-ink">PFAS in kraanwater</Link> en <Link href="/kennisbank/is-kraanwater-veilig" className="underline hover:text-ink">is kraanwater veilig?</Link>
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over medicijnresten in drinkwater</h2>
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
                <li><a href="https://www.rivm.nl/publicaties/risicobeoordeling-42-opkomende-stoffen-in-oppervlaktewaterbronnen-voor" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">RIVM: Risicobeoordeling 42 opkomende stoffen in oppervlaktewaterbronnen voor drinkwater (2018)</a></li>
                <li><a href="https://h2owaternetwerk.nl/microplastics-in-het-vizier-vorderingen-in-de-drinkwatersector/" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">H2O: Microplastics in het vizier, vorderingen in de drinkwatersector (maart 2025)</a></li>
                <li><a href="https://edepot.wur.nl/505107" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Medicijnresten in oppervlaktewater: minder lozen waar het kan, zuiveren (WUR)</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Ook de laatste sporen uit je drinkwater</h2>
            <p className="mt-4 text-white/70">Een osmosesysteem onder het aanrecht filtert medicijnresten, microplastics, PFAS en kalk uit je kraanwater. Vraag vrijblijvend een offerte aan.</p>
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

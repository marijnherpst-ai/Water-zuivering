import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import FaqSchema from '@/components/FaqSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  alternates: { canonical: '/waterzuiveringsinstallatie' },
  title: 'Waterzuiveringsinstallatie drinkwater — Water-zuivering',
  description: 'Waterzuiveringsinstallatie drinkwater vakkundig laten aansluiten: het proces, de kosten en de garantie, stap voor stap uitgelegd.',
};

const PROCES = [
  ['Adviesgesprek en opmeten', 'We bespreken je keuken, waterdruk en wensen, en bepalen samen de beste plek voor de installatie.'],
  ['Offerte op maat', 'Een heldere prijsopgave, zonder verborgen kosten — je weet vooraf precies waar je aan toe bent.'],
  ['Vakkundige aansluiting', 'Een monteur sluit de zuiveringsinstallatie aan op de waterleiding, meestal binnen een paar uur, inclusief een eventuele aparte kraan.'],
  ['Testen en overdracht', 'We testen doorstroming en waterkwaliteit, en je krijgt een concreet onderhoudsschema mee voor de filters.'],
];

const REDENEN_VAKMAN = [
  ['Geen lekkages achteraf', 'Een verkeerd aangesloten installatie is de meest voorkomende oorzaak van waterschade bij zelfmontage — een vakkundige aansluiting voorkomt dat risico.'],
  ['Correcte waterdruk', 'Een monteur controleert of de druk in je leidingnet geschikt is voor de installatie, en past waar nodig de aansluiting aan.'],
  ['Garantie blijft intact', 'Bij veel systemen vervalt de fabrieksgarantie bij zelf-installatie — bij een vakkundige aansluiting blijft die volledig van kracht.'],
];

const FAQ = [
  ['Wat kost een waterzuiveringsinstallatie?', 'De prijs hangt af van het gekozen systeem en de complexiteit van je leidingwerk. Vraag een vrijblijvende offerte aan voor een prijs op maat.'],
  ['Hoe lang duurt het installeren van een zuiveringsinstallatie?', 'De meeste installaties zijn binnen een paar uur voltooid door een vakkundige monteur, inclusief testen en instellen.'],
  ['Kan ik een waterzuiveringsinstallatie ook zelf plaatsen?', 'Technisch kan dat bij sommige systemen, maar een verkeerde aansluiting kan lekkage veroorzaken en de fabrieksgarantie laten vervallen — vakkundige installatie is daarom aan te raden.'],
  ['Welke garantie krijg ik op een waterzuiveringsinstallatie?', 'Bij Water-zuivering krijg je 10 jaar garantie op het systeem, mits vakkundig geïnstalleerd en onderhouden volgens het meegegeven schema.'],
  ['Is er onderhoud nodig na de installatie?', 'Ja. Het voorfilter en het nafilter vervang je gemiddeld elk jaar, het membraan elke 2 jaar. Dat kun je zelf doen, zonder gereedschap.'],
  ['Werkt een waterzuiveringsinstallatie in elke keuken?', 'In de meeste standaardkeukens is voldoende ruimte onder de spoelbak. Tijdens het adviesgesprek kijken we naar jouw specifieke situatie.'],
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Waterzuiveringsinstallatie', url: 'https://www.water-zuivering.nl/waterzuiveringsinstallatie' },
        ]}
      />
      <FaqSchema items={FAQ} />
      <RevealObserver />
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="glow drift2 w-[360px] h-[360px] bg-amber/10 top-10 -right-24" />
          <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Waterzuiveringsinstallatie</span>
              <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
                Een waterzuiveringsinstallatie die in één dag goed staat — en zo blijft
              </h1>
              <p className="mt-5 text-dim text-lg">
                Van adviesgesprek tot werkende <strong className="text-ink">waterzuiveringsinstallatie drinkwater</strong>: bij ons is het geen losse aankoop die je zelf moet uitzoeken, maar een compleet, vakkundig geregeld traject.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/aanmelden" className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-lg shadow-amber/25">
                  Vraag vrijblijvend een offerte aan
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
                <Link href="/kennisbank/waterzuiveraar-installeren" className="cursor-pointer inline-flex items-center gap-2 rounded-full border-2 border-ink px-7 py-3.5 text-sm font-bold text-ink hover:bg-bg transition-colors">
                  Lees hoe installeren werkt
                </Link>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-dim">
                <li className="flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>Vakkundige monteur</li>
                <li className="flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>10 jaar garantie</li>
              </ul>
            </div>
            <div className="relative">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-[2rem] overflow-hidden border border-edge aspect-[4/5]">
                <Image src="/assets/img/cabinet-install.png" alt="Waterzuiveringsinstallatie vakkundig aangesloten onder de gootsteen" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" priority />
              </div>
            </div>
          </div>
        </section>

        {/* INTRO NARRATIEF */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
            <p className="text-dim leading-relaxed">
              Een <strong className="text-ink">waterzuiveringsinstallatie</strong> is, in tegenstelling tot een filterkan, geen product dat je even uitpakt en op tafel zet. Het is een technische aansluiting op je waterleiding — en dat betekent dat de kwaliteit van de installatie minstens zo belangrijk is als de kwaliteit van het filter zelf. Een topsysteem, verkeerd aangesloten, levert alsnog problemen op: een sijpelend koppelstuk, een verkeerd ingestelde druk, of erger.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Daarom pakken we dit bij Water-zuivering aan als een traject, niet als een verkoop. Van het eerste adviesgesprek tot de laatste test na aansluiting — alles is erop gericht dat je installatie in één keer goed staat, en dat ook blijft.
            </p>
          </div>
        </section>

        {/* HET PROCES */}
        <section className="relative">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-center">Het traject in vier stappen</h2>
            <p className="mt-3 text-dim text-center max-w-xl mx-auto">Van eerste gesprek tot werkende drinkwaterinstallatie.</p>
            <div className="mt-10 space-y-5">
              {PROCES.map(([titel, uitleg], i) => (
                <div key={titel} className="reveal flex items-start gap-4 rounded-2xl card p-6">
                  <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-amber text-ink text-sm font-bold">{i + 1}</span>
                  <div>
                    <p className="font-display font-bold text-ink">{titel}</p>
                    <p className="mt-1.5 text-sm text-dim leading-relaxed">{uitleg}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WAAROM VAKMAN */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
              <Image src="/assets/img/klantenservice.jpg" alt="Vakkundige monteur bij een waterzuiveringsinstallatie" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Waarom vakwerk telt</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Drie redenen om een installatie niet zelf te doen</h2>
              <div className="mt-6 space-y-5">
                {REDENEN_VAKMAN.map(([titel, uitleg]) => (
                  <div key={titel}>
                    <p className="font-semibold text-ink text-sm">{titel}</p>
                    <p className="mt-1 text-sm text-dim leading-relaxed">{uitleg}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DIEPGANG: KOSTEN */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat kost een zuiveringsinstallatie eigenlijk?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              De prijs van een waterzuiveringsinstallatie hangt af van het gekozen systeem en de complexiteit van je leidingwerk — een keuken met een eenvoudige aansluiting is sneller (en dus goedkoper) te installeren dan een situatie waarbij leidingen verlegd moeten worden. Wat de meeste mensen zich pas later realiseren: die eenmalige investering staat tegenover een doorlopende uitgave die stopt zodra de installatie werkt — namelijk wat je nu al kwijt bent aan flessenwater.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Reken het voor jezelf door met onze <Link href="/besparing" className="underline hover:text-ink">besparingscalculator</Link>, of lees meer over <Link href="/kennisbank/wat-kost-een-waterzuiveringssysteem" className="underline hover:text-ink">wat een waterzuiveringssysteem kost</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat is een waterzuiveringsinstallatie voor thuis?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Een <strong className="text-ink">waterzuiveringsinstallatie</strong> voor thuis is een vast systeem dat je drinkwater filtert voordat het uit de kraan komt. De meest grondige soort werkt met omgekeerde osmose en staat onder het aanrecht. Het systeem van Water-zuivering heeft drie filtertrappen:
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">PPC-voorfilter</strong>: vangt zand, roest en slib tot 1 micron.</li>
              <li><strong className="text-ink">RO-membraan</strong> van 0,0001 micron: houdt onder meer PFAS, medicijnresten, microplastics, kalk en lood tegen.</li>
              <li><strong className="text-ink">CTO-nafilter</strong>: actieve koolstof voor de smaak, desgewenst met mineralen.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Het werkt direct flow, zonder opslagtank, en levert 1,58 liter per minuut via een eigen tappunt of een <Link href="/3-weg-kraan" className="underline hover:text-ink">3-weg kraan</Link>.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Voor kraanwater of voor een eigen bron?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Bij het zoeken naar een waterzuiveringsinstallatie kom je ook systemen tegen voor regenwater, putwater of slootwater, bijvoorbeeld voor een vakantiehuis zonder wateraansluiting. Dat is een heel andere situatie:
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-amber/10 text-ink"><tr><th scope="col" className="p-4 font-display font-bold"></th><th scope="col" className="p-4 font-display font-bold">Kraanwater</th><th scope="col" className="p-4 font-display font-bold">Eigen bron (regen-, put- of slootwater)</th></tr></thead>
                <tbody>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">Uitgangspunt</th><td className="p-4 text-dim">Al veilig drinkwater, gecontroleerd door het waterbedrijf</td><td className="p-4 text-dim">Onbehandeld water met mogelijk bacteriën en vuil</td></tr>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">Doel van de installatie</th><td className="p-4 text-dim">Sporen van PFAS, medicijnresten en microplastics eruit halen</td><td className="p-4 text-dim">Water eerst drinkbaar maken</td></tr>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">Nodig</th><td className="p-4 text-dim">Omgekeerde osmose onder het aanrecht</td><td className="p-4 text-dim">Een complete keten met onder meer grove filtratie en ontsmetting, zoals UV</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-dim leading-relaxed">
              De installatie van Water-zuivering is gemaakt voor leidingwater. Wil je regen- of slootwater drinkbaar maken, laat je dan adviseren door een specialist in off-grid-watersystemen en laat het water laboratoriumtesten voordat je het drinkt.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat kost een eigen waterzuiveringsinstallatie per jaar?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Na de aanschaf, inclusief plaatsing, zijn de filters de enige terugkerende kosten:
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-amber/10 text-ink"><tr><th scope="col" className="p-4 font-display font-bold">Onderdeel</th><th scope="col" className="p-4 font-display font-bold">Hoe vaak</th><th scope="col" className="p-4 font-display font-bold">Kosten</th></tr></thead>
                <tbody>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">PPC-voorfilter</th><td className="p-4 text-dim">Elk jaar</td><td className="p-4 text-dim">€ 49,99</td></tr>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">CTO-nafilter (met mineralen)</th><td className="p-4 text-dim">Elk jaar</td><td className="p-4 text-dim">€ 49,99 (€ 64,99)</td></tr>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">RO-membraan</th><td className="p-4 text-dim">Elke 2 jaar</td><td className="p-4 text-dim">€ 69,99</td></tr>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">Gemiddeld per jaar</th><td className="p-4 text-dim"></td><td className="p-4 text-dim">Ongeveer € 135</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-dim leading-relaxed">
              Een uitgebreider overzicht vind je in <Link href="/kennisbank/wat-kost-een-waterzuiveringssysteem" className="underline hover:text-ink">wat kost een waterzuiveringssysteem?</Link>.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Kun je zelf een waterzuiveringsinstallatie maken?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Er zijn bouwpakketten te koop waarmee je zelf een osmosesysteem in elkaar zet. Dat kan, maar let op drie dingen:
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Lekkage</strong>: een systeem onder het aanrecht staat altijd onder druk. Een slechte koppeling kan je keukenkastje laten onderlopen.</li>
              <li><strong className="text-ink">Hygiëne</strong>: drinkwater vraagt om materialen die daarvoor geschikt zijn en een schone montage.</li>
              <li><strong className="text-ink">Garantie</strong>: bij zelfbouw ben je zelf verantwoordelijk als er iets misgaat.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Wil je zeker weten dat het goed zit, laat het dan plaatsen. Bij Water-zuivering duurt dat 1 à 2 uur, en je krijgt 10 jaar garantie. Hoe dat verloopt, lees je bij de <Link href="/osmose-installatie" className="underline hover:text-ink">osmose installatie</Link>.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen</h2>
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

        {/* CTA */}
        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Klaar voor een vakkundig geregelde installatie?</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan — we plannen graag een adviesgesprek in.</p>
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

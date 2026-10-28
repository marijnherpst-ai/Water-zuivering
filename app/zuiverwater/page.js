import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import FaqSchema from '@/components/FaqSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import PrijsVanaf, { PRIJS_VANAF } from '@/components/PrijsVanaf';
import ProductSchema from '@/components/ProductSchema';

export const metadata = {
  alternates: { canonical: '/zuiverwater' },
  title: 'Zuiverwater uit je eigen kraan — Water-zuivering',
  description: 'Zuiverwater, elke dag, uit je eigen kraan — zonder chloor, PFAS of microplastics. Ontdek wat zuiverwater toevoegt aan je dagelijks leven.',
};

const MOMENTEN = [
  ['De eerste kop koffie', 'Zonder chloorsmaak op de achtergrond komt de bonensmaak eindelijk naar voren zoals hij bedoeld is.'],
  ['Groente en pasta koken', 'Zuiver water absorbeert geen vreemde smaken in wat je erin kookt — het resultaat proef je terug op je bord.'],
  ['Een glas water tussendoor', 'Geen aarzeling meer voor je een slok neemt — gewoon fris, helder water, precies zoals het hoort te smaken.'],
  ['Thee zetten', 'Minder kalk betekent een helderdere thee, zonder het waas dat hard water vaak achterlaat op het oppervlak.'],
];

const WAAROM_HELDER = [
  ['Geen chloorlucht meer', 'Het eerste wat de meeste mensen opvalt: de lucht die opstijgt uit een net gevuld glas water, weg.'],
  ['Minder kalkaanslag', 'Puur water laat geen witte randjes achter op glazen, kranen en in het koffiezetapparaat.'],
  ['Zonder onzichtbare sporen', 'PFAS, medicijnresten en microplastics — stoffen die je niet proeft of ziet, maar wel liever kwijt bent.'],
];

const FAQ = [
  ['Wat kost zuiverwater uit je eigen kraan?', 'Een osmosesysteem van Water-zuivering kost vanaf €999, exclusief montage. Daarna betaal je alleen nog de filters, gemiddeld ongeveer €135 per jaar.'],
  ['Wat betekent "zuiver water" precies?', 'Zuiver water is water dat is ontdaan van chloor, kalk en sporen van stoffen zoals PFAS, medicijnresten en microplastics — meer dan alleen "veilig", ook merkbaar fris en helder.'],
  ['Is Nederlands kraanwater niet al schoon water?', 'Ja, Nederlands kraanwater voldoet aan strenge normen en is veilig. Zuiver water gaat een stap verder: het verwijdert ook wat normale zuivering nog laat zitten.'],
  ['Hoe krijg ik zuiver water uit mijn eigen kraan?', 'Met een waterzuiveringssysteem onder je aanrecht, dat kraanwater filtert via een voorfilter, een fijn membraan en een nafilter — voor onbeperkt zuiver water, direct uit de kraan.'],
  ['Proef je echt verschil met puur water?', 'De meeste mensen merken het meteen: geen chloorsmaak, minder kalk, en een frissere afdronk — vooral zichtbaar in koffie, thee en gekookt eten.'],
  ['Is zuiver water hetzelfde als osmosewater?', 'In de praktijk vaak wel — osmose is de techniek die het meest grondig chloor, PFAS en microplastics uit kraanwater filtert, met zuiver water als resultaat.'],
  ['Kost het onderhouden van zuiver water veel moeite?', 'Nee. De voor- en nafilter vervang je eens per jaar, het membraan eens per 2 jaar. Het display laat zien wanneer het zover is, en je vervangt ze zelf zonder gereedschap.'],
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Zuiver water', url: 'https://www.water-zuivering.nl/zuiverwater' },
        ]}
      />
      <ProductSchema
        name="Water-zuivering osmosesysteem"
        description="Osmosesysteem voor thuis met 3-traps filtratie (PPC, RO, CTO) en direct flow zonder tank. Verwijdert chloor, PFAS, medicijnresten en microplastics uit kraanwater. 10 jaar garantie, vanaf €999 exclusief montage."
        image="https://www.water-zuivering.nl/assets/img/countertop.png"
        url="https://www.water-zuivering.nl/zuiverwater"
        prijsVanaf={PRIJS_VANAF}
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
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Zuiverwater</span>
              <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
                <strong className="text-ink">Zuiverwater</strong> is geen luxe — het is gewoon hoe water hoort te zijn
              </h1>
              <p className="mt-5 text-dim text-lg">
                Zuiverwater uit je eigen kraan: zonder chloorsmaak, zonder kalkaanslag en zonder de onzichtbare sporenstoffen die je liever niet drinkt. Gewoon <strong className="text-ink">zuiver water</strong>, elke dag opnieuw.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/aanmelden" className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-lg shadow-amber/25">
                  Vraag vrijblijvend een offerte aan
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
                <Link href="/osmosesysteem" className="cursor-pointer inline-flex items-center gap-2 rounded-full border-2 border-ink px-7 py-3.5 text-sm font-bold text-ink hover:bg-bg transition-colors">
                  Bekijk het systeem
                </Link>
              </div>
              <PrijsVanaf className="mt-5" />
            </div>
            <div className="relative">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-[2rem] overflow-hidden border border-edge aspect-[4/5]">
                <Image src="/assets/img/glas-water.webp" alt="Glas zuiverwater, helder en fris uit de kraan" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" priority />
              </div>
            </div>
          </div>
        </section>

        {/* INTRO NARRATIEF */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
            <p className="text-dim leading-relaxed">
              Er is een moment, ergens in de vroege ochtend, waarop je een glas water inschenkt zonder erbij na te denken. Je drinkt het, en denkt er niet meer over na. Dat is precies wat zuiverwater zou moeten zijn: iets waar je niet over hoeft na te denken. Geen vage chloorlucht die je even laat aarzelen, geen bijsmaak die je toeschrijft aan "gewoon hoe kraanwater is" — gewoon <strong className="text-ink">schoon water</strong>, zoals het hoort.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Het rare is dat de meeste mensen dat gevoel pas herkennen ná de overstap. Zolang je nooit anders hebt geproefd, went een chloorsmaakje. Pas als het weg is, valt op hoe aanwezig het altijd was.
            </p>
          </div>
        </section>

        {/* MOMENTEN */}
        <section className="relative">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-center">Waar je zuiverwater het meest merkt</h2>
            <p className="mt-3 text-dim text-center max-w-xl mx-auto">Vier dagelijkse momenten waarin het verschil het duidelijkst opvalt.</p>
            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {MOMENTEN.map(([titel, uitleg]) => (
                <div key={titel} className="reveal rounded-2xl card p-6">
                  <p className="font-display font-bold text-ink">{titel}</p>
                  <p className="mt-1.5 text-sm text-dim leading-relaxed">{uitleg}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WAAROM HELDER */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
              <Image src="/assets/img/countertop.png" alt="Zuiver water systeem op het aanrecht" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain p-6 bg-white" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Wat verandert er</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Drie dingen die je meteen merkt</h2>
              <div className="mt-6 space-y-5">
                {WAAROM_HELDER.map(([titel, uitleg]) => (
                  <div key={titel}>
                    <p className="font-semibold text-ink text-sm">{titel}</p>
                    <p className="mt-1 text-sm text-dim leading-relaxed">{uitleg}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DIEPGANG */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoe kraanwater écht zuiver water wordt</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Zuiver water ontstaat niet vanzelf — het is het resultaat van drie filterstappen die elkaar aanvullen. Een voorfilter vangt grof vuil, een omgekeerde-osmose-membraan van 0,0001 micron filtert vrijwel alles wat kleiner is dan een watermolecuul, en een nafilter poetst de laatste smaakjes weg. Samen zetten ze gewoon kraanwater om in water dat tot 99% zuiver is.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Benieuwd hoe dat er in de praktijk uitziet? Lees onze uitleg over <Link href="/waterzuivering-voor-thuis" className="underline hover:text-ink">waterzuivering voor thuis</Link>, of bekijk direct <Link href="/uitleg" className="underline hover:text-ink">de specificaties van ons systeem</Link>.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vergelijken</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zuiverwater, kraanwater of flessenwater?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Nederlands kraanwater is veilig en wordt streng gecontroleerd. <strong className="text-ink">Zuiverwater</strong> gaat een stap verder: het haalt ook de sporen eruit waar geen of een ruime norm voor geldt. Flessenwater lijkt een alternatief, maar is dat vaak niet: onderzoekers van KWR en de drinkwaterbedrijven vonden in flessenwater juist meer microplastics dan in kraanwater.
            </p>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-amber/10 text-ink"><tr><th scope="col" className="p-4 font-display font-bold"></th><th scope="col" className="p-4 font-display font-bold">Kraanwater</th><th scope="col" className="p-4 font-display font-bold">Flessenwater</th><th scope="col" className="p-4 font-display font-bold">Zuiverwater uit je eigen kraan</th></tr></thead>
                <tbody>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">Veilig om te drinken</th><td className="p-4 text-dim">Ja</td><td className="p-4 text-dim">Ja</td><td className="p-4 text-dim">Ja</td></tr>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">PFAS en medicijnresten</th><td className="p-4 text-dim">In sporen, binnen de norm</td><td className="p-4 text-dim">Verschilt per merk</td><td className="p-4 text-dim">Grotendeels verwijderd door het membraan</td></tr>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">Microplastics</th><td className="p-4 text-dim">1 à 2 deeltjes per liter</td><td className="p-4 text-dim">Meer dan kraanwater</td><td className="p-4 text-dim">Tegengehouden door het membraan</td></tr>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">Kalk</th><td className="p-4 text-dim">Afhankelijk van je regio</td><td className="p-4 text-dim">Afhankelijk van het merk</td><td className="p-4 text-dim">Vrijwel kalkvrij</td></tr>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">Sjouwen en plastic afval</th><td className="p-4 text-dim">Nee</td><td className="p-4 text-dim">Ja</td><td className="p-4 text-dim">Nee</td></tr>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">Kosten</th><td className="p-4 text-dim">Minder dan een cent per liter</td><td className="p-4 text-dim">Vaak tientallen centen per liter</td><td className="p-4 text-dim">Vanaf €999 eenmalig, plus ±€135 per jaar aan filters</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-dim leading-relaxed">
              Een rekenvoorbeeld: drinkt een gezin van vier samen 8 liter water per dag, dan is dat bijna 3.000 liter per jaar. Met ongeveer €135 aan filters kost elke liter zuiverwater dan zo&apos;n 5 cent, plus de eenmalige aanschaf. Meer over de verschillen lees je in <Link href="/kennisbank/kraanwater-vs-flessenwater" className="underline hover:text-ink">kraanwater vs. flessenwater</Link> en <Link href="/kennisbank/medicijnresten-in-drinkwater" className="underline hover:text-ink">medicijnresten en microplastics in drinkwater</Link>.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zuiverwater blijven drinken: zo houd je het systeem fris</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Zuiverwater is pas echt zuiver als de filters op tijd worden vervangen. Bij het systeem van Water-zuivering is dat overzichtelijk: drie filters, elk met een vaste termijn. Het display laat zien wanneer een filter aan de beurt is.
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">PPC-voorfilter</strong>: elk jaar, €49,99. Vangt zand, roest en slib en haalt restchloor weg.</li>
              <li><strong className="text-ink">RO-membraan</strong>: elke 2 jaar, €69,99. Het hart van het systeem, met poriën van 0,0001 micron.</li>
              <li><strong className="text-ink">CTO-nafilter</strong>: elk jaar, €49,99, of €64,99 met mineralen voor een voller glas water.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              De filters vervang je zelf, zonder gereedschap, en je bestelt ze in onze <Link href="/winkel" className="underline hover:text-ink">winkel</Link>. Hoe vaak filters in het algemeen vervangen moeten worden, lees je in <Link href="/kennisbank/waterfilter-vervangen-hoe-vaak" className="underline hover:text-ink">hoe vaak moet je een waterfilter vervangen</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
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
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Klaar voor zuiver water uit je eigen kraan?</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan — we kijken graag met je mee naar wat past bij jouw keuken.</p>
            <Link href="/aanmelden" className="cursor-pointer mt-8 inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-xl shadow-amber/25">
              Vraag vrijblijvend een offerte aan
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <PrijsVanaf donker className="mt-5" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

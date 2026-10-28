import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import FaqSchema from '@/components/FaqSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import ReviewsSectie from '@/components/ReviewsSectie';
import PrijsVanaf, { PRIJS_VANAF } from '@/components/PrijsVanaf';
import ProductSchema from '@/components/ProductSchema';

export const dynamic = 'force-dynamic';

export const metadata = {
  alternates: { canonical: '/drinkwater-filter' },
  title: 'Drinkwater filter kiezen per probleem — Water-zuivering',
  description: 'Welk drinkwater filter past bij jouw probleem? Chloor, kalk, PFAS of medicijnresten: per stof welk filter helpt, en wanneer je geen osmose nodig hebt.',
};

const PROBLEMEN = [
  {
    titel: 'Je proeft chloor in je glas water',
    filter: 'Koolstoffilter',
    uitleg: 'Ruik je het zwembad in je kraanwater? Dan zit je probleem bij smaak en geur, en daar is actieve kool voor. Je vindt het terug in filterkannen, op de kraan of als laatste stap in een groter systeem. Meer is hier niet nodig, en dat scheelt je een flinke investering.',
  },
  {
    titel: 'Witte aanslag op kraan en waterkoker',
    filter: 'Waterontharder of osmose',
    uitleg: 'Kalkaanslag zie je terug op alles wat met warm water te maken heeft. Een ontharder pakt dat aan voor je hele huis. Een osmosesysteem lost het alleen op bij het water dat uit de filterkraan komt, want het haalt opgeloste mineralen weg. Kies dus op basis van wáár je het probleem wilt oplossen.',
  },
  {
    titel: 'Je maakt je zorgen over PFAS en medicijnresten',
    filter: 'Omgekeerde osmose',
    uitleg: 'Dit gaat over stoffen die je niet proeft en niet ziet. Ze zijn zo klein dat koolstof ze deels laat lopen. Een omgekeerde-osmosemembraan houdt ze wel tegen. Volgens de productinformatie van ons systeem geldt dat voor PFAS, medicijnresten, microplastics en lood.',
  },
  {
    titel: 'Je weet nog niet wat jij moet oplossen',
    filter: 'Eerst meten, dan kiezen',
    uitleg: 'Dat is een prima startpunt. Je drinkwaterbedrijf publiceert meetgegevens voor je regio, en voor PFAS kun je onze gratis PFAS-check gebruiken. Pas daarna weet je of een eenvoudig filter volstaat.',
  },
];

const OVERZICHT = [
  ['Chloor en smaak', 'Koolstoffilter', 'Ja'],
  ['Kalk', 'Waterontharder (of osmose voor je drinkwater)', 'Ja, maar verschillend: hele huis of alleen de filterkraan'],
  ['PFAS', 'Omgekeerde osmose', 'Ja'],
  ['Medicijnresten', 'Omgekeerde osmose', 'Ja'],
  ['Microplastics', 'Omgekeerde osmose', 'Ja'],
  ['Lood', 'Omgekeerde osmose', 'Ja'],
];

const FAQ = [
  ['Heb ik een drinkwater filter nodig?', 'Nederlands kraanwater voldoet aan strenge normen en is veilig om te drinken, dus een filter is geen noodzaak. Wil je smaakverbetering of extra bescherming tegen stoffen die onder de norm blijven maar niet op nul staan, zoals PFAS, dan kan een filter zinvol zijn.'],
  ['Welk drinkwater filter haalt PFAS eruit?', 'Een omgekeerde-osmosesysteem is daarvoor de meest zekere keuze. Een simpel koolstoffilter, zoals in een filterkan, laat een deel van de PFAS-moleculen door.'],
  ['Wat is het verschil tussen een filterkan en een osmosesysteem?', 'Een filterkan gebruikt actieve kool en richt zich op chloor en smaak. Een osmosesysteem gebruikt een membraan met veel fijnere poriën, en haalt daardoor ook stoffen weg die je niet proeft. Het kost meer, maar filtert grondiger.'],
  ['Haalt een drinkwater filter ook kalk eruit?', 'Een gewoon koolstoffilter niet. Een waterontharder wel, en een osmosesysteem haalt ook opgeloste mineralen uit het water dat uit de filterkraan komt.'],
  ['Hoe weet ik wat er in mijn kraanwater zit?', 'Je waterbedrijf publiceert meetgegevens voor jouw regio. Voor PFAS kun je ook onze gratis PFAS-check doen.'],
  ['Hoe vaak moet ik een drinkwater filter vervangen?', 'Dat verschilt per type. Een filterkan-patroon gaat gemiddeld 4 tot 6 weken mee. Bij ons osmosesysteem gaan het PPC- en CTO-filter ongeveer 12 maanden mee en het RO-filter 24 maanden.'],
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Drinkwater filter', url: 'https://www.water-zuivering.nl/drinkwater-filter' },
        ]}
      />
      <ProductSchema
        name="Water-zuivering osmosesysteem"
        description="Osmosesysteem voor thuis met 3-traps filtratie (PPC, RO, CTO) en direct flow zonder tank. Verwijdert chloor, PFAS, medicijnresten en microplastics uit kraanwater. 10 jaar garantie, vanaf €999 exclusief montage."
        image="https://www.water-zuivering.nl/assets/img/countertop.png"
        url="https://www.water-zuivering.nl/drinkwater-filter"
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
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Drinkwater filter</span>
              <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
                Welk drinkwater filter past bij jouw probleem?
              </h1>
              <p className="mt-5 text-dim text-lg">
                Een <strong className="text-ink">drinkwater filter</strong> kiezen is makkelijker als je begint bij het probleem, niet bij het product. Chloor vraagt iets anders dan kalk, en PFAS iets anders dan smaak. Hier per stof welk filter helpt.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/pfas-check" className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-lg shadow-amber/25">
                  Doe de gratis PFAS-check
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
                <Link href="/aanmelden" className="cursor-pointer inline-flex items-center gap-2 rounded-full border-2 border-ink px-7 py-3.5 text-sm font-bold text-ink hover:bg-bg transition-colors">
                  Vraag een offerte aan
                </Link>
              </div>
              <PrijsVanaf className="mt-5" />
            </div>
            <div className="relative">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-[2rem] overflow-hidden border border-edge aspect-[4/5]">
                <Image src="/assets/img/een-kraan.jpg" alt="Kraan met een drinkwater filter voor gezuiverd drinkwater" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" priority />
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
            <p className="text-dim leading-relaxed">
              Eerst iets wat bij dit onderwerp vaak ontbreekt: Nederlands kraanwater is veilig en streng gereguleerd. Een drinkwater filter is dus geen noodzaak. Mensen kiezen er toch voor, om twee redenen: de smaak, en stoffen als PFAS die onder de wettelijke norm blijven maar niet op nul staan. Wat je nodig hebt hangt daarvan af. Meer over de kwaliteit van kraanwater lees je in <Link href="/kennisbank/is-kraanwater-veilig" className="underline hover:text-ink">is Nederlands kraanwater veilig</Link>.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Omdat de ene oplossing de ander niet vervangt, loop je hieronder je situatie na. Zo betaal je niet voor een zwaarder filter dan nodig is, en koop je ook geen te licht filter voor een probleem dat het niet oplost.
            </p>
          </div>
        </section>

        {/* PER PROBLEEM */}
        <section className="relative">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-center">Welk filter hoort bij welk probleem?</h2>
            <p className="mt-3 text-dim text-center max-w-xl mx-auto">Kies het punt dat bij jou past.</p>
            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {PROBLEMEN.map((p) => (
                <div key={p.titel} className="reveal rounded-2xl card p-6">
                  <p className="font-display font-bold text-ink">{p.titel}</p>
                  <span className="mt-2 inline-block rounded-full bg-amber/12 text-amber-dark text-[11px] font-bold uppercase tracking-wide px-3 py-1">{p.filter}</span>
                  <p className="mt-3 text-sm text-dim leading-relaxed">{p.uitleg}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OVERZICHT */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Op een rij</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Overzicht: stof, filter en resultaat</h2>
              <div className="mt-6 rounded-2xl card overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-xs uppercase tracking-wide text-dim">
                      <th className="px-4 py-3 font-semibold">Stof</th>
                      <th className="px-4 py-3 font-semibold">Filter</th>
                      <th className="px-4 py-3 font-semibold">Verwijderd?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {OVERZICHT.map(([stof, filter, resultaat], i) => (
                      <tr key={stof} className={i % 2 === 0 ? 'bg-bg/50' : ''}>
                        <td className="px-4 py-3 text-ink font-semibold">{stof}</td>
                        <td className="px-4 py-3 text-dim">{filter}</td>
                        <td className="px-4 py-3 text-dim">{resultaat}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-dim leading-relaxed">
                Wil je het verschil tussen een ontharder en een waterzuiveraar goed snappen? Lees dan <Link href="/kennisbank/waterontharder-vs-waterzuiveraar" className="underline hover:text-ink">waterontharder of waterzuiveraar</Link>.
              </p>
            </div>
            <div className="relative">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/twee-kranen.jpg" alt="Gewone kraan en kraan voor gefilterd drinkwater naast elkaar" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* KEUZEHULP */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Drie vragen die je drinkwater filter bepalen</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Heb je geen zin om alle stoffen langs te lopen? Beantwoord dan deze drie vragen, in deze volgorde.
            </p>
            <div className="mt-6 space-y-5">
              <div className="rounded-2xl card p-5">
                <p className="font-display font-bold text-ink">1. Wat stoort je nu echt?</p>
                <p className="mt-1.5 text-sm text-dim leading-relaxed">Gaat het alleen om smaak, dan kom je met een kan of kraanfilter al een heel eind. Zijn het stoffen die je niet proeft, dan ga je naar vraag 2.</p>
              </div>
              <div className="rounded-2xl card p-5">
                <p className="font-display font-bold text-ink">2. Weet je wat er in jouw water zit?</p>
                <p className="mt-1.5 text-sm text-dim leading-relaxed">Zoek de meetgegevens van je drinkwaterbedrijf op, of doe de PFAS-check. Zit er niets opvallends in en wil je gewoon zekerheid, dan past osmose bij jou. Wil je alleen smaak, dan is dat overdreven.</p>
              </div>
              <div className="rounded-2xl card p-5">
                <p className="font-display font-bold text-ink">3. Hoeveel gedoe accepteer je?</p>
                <p className="mt-1.5 text-sm text-dim leading-relaxed">Een kan vul je zelf bij, en het patroon vervang je regelmatig. Een systeem onder de gootsteen doet dat zelf, en je vervangt alleen af en toe een filter.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CLAIMS BEOORDELEN */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoe beoordeel je wat een filter belooft?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Bij een drinkwater filter staat vaak "zuivert je water" op de verpakking. Dat zegt weinig. Vier dingen waar je op kunt letten:
            </p>
            <div className="mt-6 space-y-5">
              {[
                ['Welke stoffen worden genoemd?', 'Een goede fabrikant noemt per stof wat het filter doet, bijvoorbeeld chloor, PFAS of lood. Een algemene claim als "schoner water" is geen informatie.'],
                ['Is er een onafhankelijke test of certificering?', 'Een testrapport of keurmerk zegt meer dan een claim van de verkoper. Ons systeem heeft een CE- en RoHS-certificering. Vraag bij elk filter waar de claim op gebaseerd is.'],
                ['Hoe lang gaat het filter mee?', 'Een filter dat vol zit werkt minder goed. Kijk dus naar de levensduur en of je merkt wanneer vervangen nodig is. Bij ons laat het display zien wanneer een filter aan vervanging toe is.'],
                ['Wat kost het onderhoud?', 'De aanschafprijs is maar een deel van het verhaal. Reken de filterkosten per jaar door, zoals we doen in onze koopgids voor een osmose apparaat.'],
              ].map(([titel, uitleg]) => (
                <div key={titel}>
                  <p className="font-semibold text-ink text-sm">{titel}</p>
                  <p className="mt-1 text-sm text-dim leading-relaxed">{uitleg}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-dim leading-relaxed">
              Twijfel je tussen een osmose apparaat en iets lichters? Dan helpt onze <Link href="/osmose-apparaat-kopen" className="underline hover:text-ink">koopgids voor een osmose apparaat</Link> je de juiste vragen te stellen.
            </p>
          </div>
        </section>

        {/* WANNEER OSMOSE */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wanneer is een osmosesysteem de moeite waard?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Een osmosesysteem kost meer dan een filterkan, en eerlijk is eerlijk: heb je alleen last van een chloorsmaak, dan is dat vaak overkill. Het wordt interessant als je ook wilt dat stoffen als PFAS, medicijnresten en microplastics worden tegengehouden, en als je het gemak wilt van gefilterd water uit je eigen kraan, zonder een kan die je steeds moet bijvullen.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Het systeem van Water-zuivering werkt in drie stappen: een PPC-voorfilter voor grof vuil, een RO-membraan als hart van het systeem, en een CTO-nafilter voor een frisse smaak. Hoe dat in zijn werk gaat zie je op onze pagina over het <Link href="/osmosesysteem" className="underline hover:text-ink">osmosesysteem</Link>. Wil je eerst alle soorten filters naast elkaar zien, ga dan naar <Link href="/waterfilter" className="underline hover:text-ink">waterfilter kopen: de complete gids</Link>.
            </p>
          </div>
        </section>

        <ReviewsSectie />

        {/* FAQ */}
        <section className="relative">
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
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Weten welk drinkwater filter bij jou past?</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan. We denken graag met je mee, ook als een lichter filter voor jou genoeg is.</p>
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

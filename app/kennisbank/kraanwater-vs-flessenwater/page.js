import Image from 'next/image';
import Link from 'next/link';
import AuteurRegel from '@/components/AuteurRegel';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import ArticleSchema from '@/components/ArticleSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import FaqSchema from '@/components/FaqSchema';

export const metadata = {
  alternates: { canonical: '/kennisbank/kraanwater-vs-flessenwater' },
  title: 'Kraanwater vs. flessenwater: wat is beter? — Water-zuivering',
  description:
    'Kraanwater vs. flessenwater vergeleken op kosten, smaak, gemak en milieu-impact — met een eerlijke conclusie over wat voor jou het beste werkt.',
};

const FAQ = [
  ['Is gefilterd kraanwater goedkoper dan flessenwater?', 'Op termijn wel. Flessenwater blijft per liter geld kosten, jaar na jaar. Gefilterd kraanwater kost na de eenmalige installatie alleen nog vervangende filters, bij Water-zuivering gemiddeld ongeveer €135 per jaar.'],
  ['Is flessenwater zuiverder dan gefilterd kraanwater?', 'Niet per se. Veel flessenwatermerken worden zelf (deels) gezuiverd via omgekeerde osmose, hetzelfde proces dat een systeem thuis gebruikt. Met een eigen systeem tap je dat water onbeperkt en vers uit je kraan.'],
  ['Wat is beter voor het milieu?', 'Gefilterd kraanwater. Minder plastic flessen betekent minder productie, minder transport en minder afval.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Kraanwater vs. flessenwater: wat is voordeliger?"
        description="Kraanwater vs. flessenwater vergeleken op kosten, gemak en milieu-impact — met een eerlijke conclusie."
        image="https://www.water-zuivering.nl/assets/img/kennisbank/kraanwater-vs-flessenwater.png"
        url="https://www.water-zuivering.nl/kennisbank/kraanwater-vs-flessenwater"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Kraanwater vs. flessenwater: wat is voordeliger?', url: 'https://www.water-zuivering.nl/kennisbank/kraanwater-vs-flessenwater' },
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
              Kraanwater vs. flessenwater: wat is voordeliger?
            </h1>
            <p className="mt-5 text-dim text-lg">
              Een eerlijke vergelijking van <strong className="text-ink">kraanwater vs flessenwater</strong> op drie punten: kosten, gemak en milieu-impact.
            </p>
            <AuteurRegel />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="rounded-2xl card p-6">
                <p className="font-display font-bold">Kosten</p>
                <p className="mt-2 text-sm text-dim"><strong className="text-ink">Flessenwater</strong> loopt per liter al snel op, jaar na jaar. Gefilterd kraanwater kost na de eenmalige installatie alleen nog een filter per paar jaar.</p>
              </div>
              <div className="rounded-2xl card p-6">
                <p className="font-display font-bold">Gemak</p>
                <p className="mt-2 text-sm text-dim">Geen kratten sjouwen, geen voorraad bijhouden, geen lege flessen wegbrengen — altijd direct vers water uit de kraan.</p>
              </div>
              <div className="rounded-2xl card p-6">
                <p className="font-display font-bold">Milieu</p>
                <p className="mt-2 text-sm text-dim">Minder plastic flessen betekent minder productie, transport en afval — een directe impact die je meteen voelt.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">En qua smaak en kwaliteit?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Veel flessenwatermerken zijn zelf ook (deels) gezuiverd via omgekeerde osmose — hetzelfde proces dat een thuissysteem gebruikt. Het verschil is dat je dat water dan zelf, onbeperkt en vers uit je eigen kraan tapt, in plaats van het in plastic verpakt en getransporteerd te kopen.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Benieuwd wat jij concreet zou besparen als je overstapt? Reken het uit op basis van je eigen situatie:
            </p>
            <Link href="/besparing" className="cursor-pointer mt-6 inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors">
              Bereken je besparing
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image loading="eager" src="/assets/img/kennisbank/kraanwater-vs-flessenwater.png" alt="Kraanwater vs flessenwater: een glas kraanwater naast een fles op het aanrecht" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Onze conclusie</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zelf zuiveren wint op alle drie de punten</h2>
              <p className="mt-4 text-dim">Een eigen waterzuiveraar combineert de zuiverheid van flessenwater met het gemak en de lage kosten van kraanwater — zonder de nadelen van beide.</p>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Kraanwater vs. flessenwater: de prijs per liter</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Kraanwater kost in Nederland minder dan een cent per liter. Voor flessenwater betaal je in de supermarkt al snel honderd keer zoveel, en voor merkwater nog meer. Drink je met het hele gezin elke dag een paar liter, dan loopt dat verschil per jaar op tot honderden euro&apos;s.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Gefilterd kraanwater zit daar tussenin: je betaalt de aanschaf van het systeem en daarna alleen de filters, bij Water-zuivering gemiddeld ongeveer € 135 per jaar.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Is flessenwater gezonder dan kraanwater?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Niet per se. Nederlands kraanwater wordt strenger en vaker gecontroleerd dan veel mensen denken. Lees daarover <Link href="/kennisbank/is-kraanwater-veilig" className="underline hover:text-ink">is kraanwater veilig?</Link>.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Flessenwater heeft ook eigen nadelen. Er is PFAS gevonden in sommige merken flessenwater, en er wordt onderzoek gedaan naar microplastics die uit plastic flessen in het water komen. Wie de zuiverheid van flessenwater wil zonder die nadelen, filtert kraanwater met omgekeerde osmose.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Kraanwater vs. flessenwater voor het milieu</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Elke fles moet worden gemaakt, gevuld, vervoerd, gekoeld en weer ingezameld. Kraanwater komt via de leiding je huis in, zonder verpakking en zonder vrachtwagen. Ook gefilterd kraanwater heeft die voordelen: je hebt alleen eens per jaar een paar filters nodig.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">En de smaak?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Kraanwater smaakt niet overal hetzelfde. Dat komt door de bron, grondwater of oppervlaktewater, en door de hoeveelheid mineralen. Lees daarover <Link href="/kennisbank/slechtste-kraanwater-nederland" className="underline hover:text-ink">het slechtste kraanwater van Nederland: de feiten</Link>. Flessenwater smaakt per merk anders om dezelfde reden. Gefilterd kraanwater smaakt neutraal en zacht; met een mineraalfilter voeg je weer wat smaak toe.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Mineraalwater, bronwater of tafelwater: wat koop je eigenlijk?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Flessenwater is niet allemaal hetzelfde. Op het etiket staat welke soort het is:
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Natuurlijk mineraalwater</strong> komt uit een beschermde ondergrondse bron en mag nauwelijks behandeld worden. De samenstelling van de mineralen staat op het etiket.</li>
              <li><strong className="text-ink">Bronwater</strong> komt ook uit een ondergrondse bron, maar hoeft geen vaste samenstelling te hebben.</li>
              <li><strong className="text-ink">Tafelwater</strong> kan uit elke bron komen, ook uit de kraan, en mag behandeld worden, bijvoorbeeld gefilterd of met toegevoegde mineralen.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Wie kraanwater vs flessenwater vergelijkt, vergelijkt dus soms gewoon kraanwater met kraanwater in een fles.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Kraanwater vs flessenwater: wat past bij jouw situatie?</h2>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Je vindt kraanwater gewoon lekker</strong>: drink het. Het is veilig en kost bijna niets.</li>
              <li><strong className="text-ink">Je vindt de smaak niet prettig</strong>: een simpel koolfilter of een filterkan verbetert de smaak.</li>
              <li><strong className="text-ink">Je wilt ook PFAS en medicijnresten eruit</strong>: dan is een <Link href="/osmosesysteem" className="underline hover:text-ink">osmosesysteem</Link> de enige vorm van filteren die dat grondig doet.</li>
              <li><strong className="text-ink">Je koopt nu flessenwater om dezelfde reden</strong>: dan is gefilterd kraanwater goedkoper, en je hoeft niets meer te sjouwen.</li>
            </ul>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
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

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Nooit meer kratten water sjouwen</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan en ontdek wat een Water-zuivering systeem voor jouw huishouden betekent.</p>
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

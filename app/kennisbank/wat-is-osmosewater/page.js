import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Wat is osmosewater? Uitleg, gebruik & kosten',
  description:
    'Osmosewater (RO-water) uitgelegd: wat het is, of je het kan drinken, hoe je het maakt en wat het kost — inclusief de makkelijkste optie voor thuis.',
};

export default function WatIsOsmosewaterPage() {
  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Kennisbank</span>
            <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Wat is osmosewater? Uitleg, gebruik en kosten
            </h1>
            <p className="mt-5 text-dim text-lg">
              Osmosewater, ook wel omgekeerde-osmosewater of RO-water genoemd, hoor je steeds vaker voorbijkomen. In gewone taal leggen we uit wat het is, of je het kan drinken, hoe je het maakt — en wat het je eigenlijk kost.
            </p>
          </div>
        </section>

        {/* WAT IS HET */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat is osmosewater precies?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Osmosewater is water dat door een membraan met minuscule gaatjes is geperst — honderden keren dunner dan een haar. Alles wat groter is dan een watermolecuul blijft achter: chloor, PFAS, medicijnresten, microplastics, lood en andere ongewenste stoffen. Dit proces heet <strong className="text-ink">omgekeerde osmose</strong> (Reverse Osmosis, of RO), vandaar de naam.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Het resultaat is water dat veel zuiverder is dan gewoon kraanwater — vergelijkbaar met, of zelfs zuiverder dan, de meeste flessenwater-merken.
            </p>
          </div>
        </section>

        {/* KUN JE HET DRINKEN */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Kun je osmosewater drinken?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Ja, osmosewater is veilig om te drinken. Dat komt door hoe het membraan werkt: het laat alleen de piepkleine watermoleculen (H₂O) door en houdt al het andere tegen — bacteriën, virussen, zware metalen, chloor, PFAS en andere opgeloste stoffen kunnen er simpelweg niet doorheen. Er wordt tijdens het proces niets aan het water toegevoegd, alleen weggefilterd. Wat overblijft is dus per definitie schoner, niet vervuild water.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Dat is ook precies waarom osmose de industriestandaard is: het is de basis van veel bekende merken flessenwater. Eén kanttekening: omdat het filterproces zó grondig is, filtert het ook de natuurlijke mineralen (calcium, magnesium) uit het water, die mede bepalen hoe water smaakt.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Daarom voegen goede systemen — zoals dat van Water-zuivering — na de osmosestap een <Link href="/#product" className="underline hover:text-ink">mineraalfilter</Link> toe, die calcium en magnesium teruggeeft voor een voller, ronder smaakprofiel. Zo hou je het beste van twee werelden: maximale zuiverheid én goede smaak.
            </p>
          </div>
        </section>

        {/* HOE MAAK JE HET */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoe maak je osmosewater?</h2>
            <p className="mt-4 text-dim leading-relaxed">Er zijn grofweg drie manieren om aan osmosewater te komen:</p>
            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              <div className="rounded-2xl card p-6">
                <span className="font-display text-3xl font-extrabold text-amber/40">1</span>
                <p className="mt-3 font-display font-bold">Jerrycans kopen</p>
                <p className="mt-2 text-sm text-dim">Verkrijgbaar bij bouwmarkten. Handig voor eenmalig gebruik (bijv. accu's, strijkijzers), maar op de lange termijn duur en onhandig sjouwen.</p>
              </div>
              <div className="rounded-2xl card p-6">
                <span className="font-display text-3xl font-extrabold text-amber/40">2</span>
                <p className="mt-3 font-display font-bold">Zelf filteren met een tafelfilter</p>
                <p className="mt-2 text-sm text-dim">Compacte apparaten die je los op het aanrecht zet. Werkt, maar traag, neemt aanrechtruimte in en filtert vaak minder grondig.</p>
              </div>
              <div className="rounded-2xl card p-6 ring-2 ring-amber">
                <span className="font-display text-3xl font-extrabold text-amber">3</span>
                <p className="mt-3 font-display font-bold">Een systeem thuis</p>
                <p className="mt-2 text-sm text-dim">Vast geïnstalleerd onder je aanrecht, aangesloten op je eigen kraan. Onbeperkt zuiver water, direct beschikbaar, zonder gedoe.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WAT KOST HET */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat kost osmosewater?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Jerrycans of flessenwater kopen loopt in de kosten al snel op — al helemaal voor een heel huishouden, jaar na jaar. Een eigen systeem onder je kraan kost eenmalig de installatie, en daarna alleen af en toe een nieuw filter (gemiddeld elke 36 maanden).
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Benieuwd wat jij concreet zou besparen, vergeleken met wat je nu aan flessenwater uitgeeft? Reken het in een minuut uit:
            </p>
            <Link href="/besparing" className="cursor-pointer mt-6 inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors">
              Bereken je besparing
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </section>

        {/* OSMOSEWATER THUIS: DE OPLOSSING */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/5]">
                <Image src="/assets/img/cabinet-install.png" alt="Water-zuivering osmosesysteem geïnstalleerd onder het aanrecht" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Osmosewater thuis</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Nooit meer sjouwen, altijd zuiver water</h2>
              <p className="mt-4 text-dim">Een Water-zuivering systeem maakt osmosewater direct uit je eigen kraan — 3-traps gefilterd, met mineralen teruggevoegd voor de beste smaak.</p>
              <ul className="mt-5 space-y-2.5 text-sm">
                <li className="flex items-center gap-2.5 text-dim"><svg className="shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>Onbeperkt zuiver water, direct uit de kraan</li>
                <li className="flex items-center gap-2.5 text-dim"><svg className="shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>Compact geïnstalleerd onder het aanrecht</li>
                <li className="flex items-center gap-2.5 text-dim"><svg className="shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>Vakkundige installatie &amp; 10 jaar garantie</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zelf osmosewater uit je eigen kraan?</h2>
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

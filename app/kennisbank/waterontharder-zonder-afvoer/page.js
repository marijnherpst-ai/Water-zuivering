import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import ArticleSchema from '@/components/ArticleSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import FaqSchema from '@/components/FaqSchema';

export const metadata = {
  alternates: { canonical: '/kennisbank/waterontharder-zonder-afvoer' },
  title: 'Waterontharder zonder afvoer: hoe werkt dat? — Water-zuivering',
  description: 'Een waterontharder zonder afvoer bestaat niet als volwaardig alternatief voor een klassieke ontharder — wel als magneet- of elektronisch systeem. Uitleg.',
};

const VERGELIJKING = [
  ['Werkingsprincipe', 'Ionenwisseling (echte verwijdering)', 'Verandert kristalstructuur (geen verwijdering)'],
  ['Afvoer nodig', 'Ja', 'Nee'],
  ['Effectiviteit bij hard water', 'Hoog', 'Gemiddeld tot laag'],
  ['Doorlopende kosten', 'Onthardingszout', 'Meestal geen'],
  ['Installatie', 'Vraagt vakkennis', 'Vaak eenvoudiger'],
];

const FAQ = [
  ['Bestaat een echte waterontharder zonder afvoer?', 'Een klassieke ionenwisselaar-ontharder heeft altijd een afvoer nodig voor het spoelproces. Wat vaak "waterontharder zonder afvoer" wordt genoemd, is meestal een magneet- of elektronisch systeem, dat anders werkt.'],
  ['Werkt een magneet- of elektronisch systeem net zo goed?', 'Deze systemen veranderen de kalkstructuur zodat het minder aanslaat, maar verwijderen de kalk niet daadwerkelijk uit het water zoals een klassieke ontharder dat doet.'],
  ['Is een systeem zonder afvoer goedkoper?', 'Vaak wel in aanschaf en onderhoud (geen zout, geen afvoeraansluiting nodig), maar het effect is doorgaans minder krachtig dan een klassieke ontharder.'],
  ['Hoe herken ik overdreven marketingclaims bij deze systemen?', 'Wees kritisch bij claims als "100% kalkvrij zonder onderhoud" — magnetische en elektronische systemen verminderen aanslag, maar verwijderen kalk niet echt uit het water zoals een ionenwisselaar dat doet.'],
  ['Voor wie is een systeem zonder afvoer een goede keuze?', 'Voor huishoudens met licht tot matig hard water die geen zin hebben in zoutonderhoud en een afvoeraansluiting, en die genoegen nemen met een minder krachtig resultaat dan een klassieke ontharder.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Waterontharder zonder afvoer: hoe werkt dat?"
        description="Een waterontharder zonder afvoer bestaat niet als volwaardig alternatief voor een klassieke ontharder — wel als magneet- of elektronisch systeem. Uitleg."
        image="https://www.water-zuivering.nl/assets/img/systeem-liggend.png"
        url="https://www.water-zuivering.nl/kennisbank/waterontharder-zonder-afvoer"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Waterontharder zonder afvoer: hoe werkt dat?', url: 'https://www.water-zuivering.nl/kennisbank/waterontharder-zonder-afvoer' },
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
            <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">Waterontharder zonder afvoer: hoe werkt dat?</h1>
            <p className="mt-5 text-dim text-lg">Zoek je een <strong className="text-ink">waterontharder zonder afvoer</strong>? Dan is het goed om te weten dat dit niet hetzelfde is als een klassieke ontharder.</p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
              <Image src="/assets/img/systeem-liggend.png" alt="Compact watersysteem als alternatief voor een waterontharder zonder afvoer" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain p-6 bg-white" />
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waarom heeft een klassieke ontharder een afvoer nodig?</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Een klassieke waterontharder werkt met ionenwisseling: harde mineralen worden ingeruild voor natrium. Om dat proces staande te houden, spoelt het systeem zichzelf periodiek door met een zoutoplossing — en dat spoelwater moet ergens naartoe. Vandaar de afvoeraansluiting.
              </p>
              <p className="mt-4 text-dim leading-relaxed">
                Systemen die zichzelf adverteren als "zonder afvoer" zijn meestal magnetisch of elektronisch: ze veranderen de kristalstructuur van kalk zodat het minder aanslaat, zonder het daadwerkelijk uit het water te verwijderen.
              </p>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Is het een goed alternatief?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Voor lichte kalkproblemen kan een systeem zonder afvoer een redelijke, laagdrempelige oplossing zijn. Voor gebieden met echt hard water blijft een klassieke ontharder doorgaans effectiever, simpelweg omdat die de kalk daadwerkelijk verwijdert in plaats van alleen de structuur aanpast.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Let op: geen van beide oplossingen filtert chloor, PFAS, medicijnresten of microplastics uit je drinkwater — daarvoor is een apart filtersysteem nodig. Lees meer in onze vergelijking <Link href="/kennisbank/waterontharder-vs-waterzuiveraar" className="underline hover:text-ink">waterontharder of waterzuiveraar</Link>.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Klassiek vs. zonder afvoer: direct vergeleken</h2>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-edge">
              <table className="w-full text-sm text-left">
                <thead className="bg-bg">
                  <tr>
                    <th className="px-4 py-3 font-display font-bold"></th>
                    <th className="px-4 py-3 font-display font-bold">Klassieke ontharder</th>
                    <th className="px-4 py-3 font-display font-bold">Zonder afvoer (magneet/elektronisch)</th>
                  </tr>
                </thead>
                <tbody className="text-dim">
                  {VERGELIJKING.map(([label, klassiek, alt]) => (
                    <tr key={label} className="border-t border-edge">
                      <td className="px-4 py-3 font-semibold text-ink">{label}</td>
                      <td className="px-4 py-3">{klassiek}</td>
                      <td className="px-4 py-3">{alt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="relative">
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
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wil je ook zuiver drinkwater?</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan voor een waterzuiveraar die chloor, PFAS en microplastics filtert.</p>
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

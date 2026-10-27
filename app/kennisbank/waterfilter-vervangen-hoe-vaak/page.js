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

export const metadata = {
  alternates: { canonical: '/kennisbank/waterfilter-vervangen-hoe-vaak' },
  title: 'Hoe vaak moet je een waterfilter vervangen?',
  description:
    'Hoe vaak een waterfilter vervangen moet worden, waarom, en wat er gebeurt als je het te lang uitstelt. Kort en duidelijk uitgelegd.',
};

const FAQ = [
  ['Hoe vaak moet je een waterfilter vervangen?', 'Bij een Water-zuivering systeem gaan het PPC-voorfilter en het CTO-nafilter gemiddeld 12 maanden mee en het RO-membraan gemiddeld 24 maanden. Gebruik je veel water, dan vervang je ze eerder.'],
  ['Hoe weet ik wanneer een filter vervangen moet worden?', 'Het display op het apparaat laat zien wanneer het tijd is, zodat je het niet zelf hoeft bij te houden.'],
  ['Wat gebeurt er als je een filter te lang laat zitten?', 'Een verzadigd filter houdt onzuiverheden minder goed tegen. Bij sommige filtertypes neemt ook de doorstroom af, waardoor de waterdruk aan de kraan merkbaar daalt.'],
  ['Kan ik het filter zelf vervangen?', 'Ja. Bij een Water-zuivering systeem draai je in drie simpele stappen zelf een nieuw filter erin, zonder gereedschap en zonder monteur.'],
  ['Wat kost een nieuw filter?', 'Het PPC-voorfilter en het CTO-nafilter kosten elk €49,99 (het CTO-filter met mineralen €64,99), het RO-membraan €69,99. Gemiddeld is dat ongeveer €135 per jaar.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Hoe vaak moet je een waterfilter vervangen?"
        description="Hoe vaak een waterfilter vervangen moet worden, waarom, en wat er gebeurt als je het te lang uitstelt. Kort en duidelijk uitgelegd."
        image="https://www.water-zuivering.nl/assets/img/kennisbank/waterfilter-vervangen-hoe-vaak.png"
        url="https://www.water-zuivering.nl/kennisbank/waterfilter-vervangen-hoe-vaak"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Hoe vaak moet je een waterfilter vervangen?', url: 'https://www.water-zuivering.nl/kennisbank/waterfilter-vervangen-hoe-vaak' },
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
              Hoe vaak moet je een waterfilter vervangen?
            </h1>
            <p className="mt-5 text-dim text-lg">
              Hoe vaak je een <strong className="text-ink">waterfilter vervangen</strong> moet, is een simpele vraag met een simpel antwoord — en een paar redenen waarom je het niet te lang moet uitstellen.
            </p>
            <KortAntwoord>
              Dat verschilt per filter. Bij een omgekeerde-osmosesysteem van Water-zuivering vervang je het PPC-voorfilter en het CTO-nafilter gemiddeld elke 12 maanden en het RO-membraan gemiddeld elke 24 maanden. Gebruik je veel water, dan eerder. Een verzadigd filter houdt minder tegen; het display op het apparaat geeft aan wanneer het tijd is.
            </KortAntwoord>
            <AuteurRegel />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Het vuistregel-antwoord</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Dat hangt af van welk filter je bedoelt — een Water-zuivering systeem heeft er drie, elk met een eigen levensduur: het <strong className="text-ink">PPC-filter</strong> (voorfilter) en het <strong className="text-ink">CTO-filter</strong> (nafilter) gaan gemiddeld <strong className="text-ink">12 maanden</strong> mee, het <strong className="text-ink">RO-filter</strong> (het hart van het systeem) gemiddeld <strong className="text-ink">24 maanden</strong>. Dat verschilt per situatie: een groot huishouden dat veel water verbruikt, vervangt filters dus eerder dan de gemiddelde termijn.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Bij goede systemen hoef je dit niet zelf bij te houden: een display op het apparaat laat precies zien wanneer het tijd is.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat als je het te lang uitstelt?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Een verzadigd filter houdt onzuiverheden minder goed tegen — het werkt dus niet meer optimaal, precies op het moment dat je er nog steeds op vertrouwt dat het wel goed zit. Bij sommige filtertypes kan een sterk verzadigd filter ook de doorstroom vertragen, waardoor je waterdruk aan de kraan merkbaar afneemt.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Het is dus geen kwestie van "het werkt nog steeds prima" — het punt is juist dat je dat zonder duidelijke indicatie niet goed kan beoordelen.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image loading="eager" src="/assets/img/kennisbank/waterfilter-vervangen-hoe-vaak.png" alt="Een waterfilter wordt vervangen onder het aanrecht" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Zonder gedoe</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Filter vervangen zonder gereedschap</h2>
              <p className="mt-4 text-dim">Bij een Water-zuivering systeem draai je in drie simpele stappen zelf een nieuw filter erin — geen gereedschap, geen monteur nodig. Benieuwd hoe dat precies gaat? Lees de volledige uitleg op onze <Link href="/uitleg" className="underline hover:text-ink">specificatiepagina</Link>. Een nieuw filter nodig? Bekijk de <Link href="/winkel" className="underline hover:text-ink">osmose filters in onze winkel</Link>.</p>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waterfilter vervangen: per filter op een rij</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Een osmosesysteem heeft drie filters, elk met een eigen taak en een eigen termijn:
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-amber/10 text-ink"><tr><th scope="col" className="p-4 font-display font-bold">Filter</th><th scope="col" className="p-4 font-display font-bold">Wat het doet</th><th scope="col" className="p-4 font-display font-bold">Vervangen</th><th scope="col" className="p-4 font-display font-bold">Prijs</th></tr></thead>
                <tbody>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">PPC-voorfilter</th><td className="p-4 text-dim">Vangt zand, roest en slib tot 1 micron en haalt restchloor weg</td><td className="p-4 text-dim">Elk jaar</td><td className="p-4 text-dim">€ 49,99</td></tr>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">RO-membraan</th><td className="p-4 text-dim">Houdt onder meer PFAS, medicijnresten, microplastics, kalk en lood tegen</td><td className="p-4 text-dim">Elke 2 jaar</td><td className="p-4 text-dim">€ 69,99</td></tr>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">CTO-nafilter</th><td className="p-4 text-dim">Actieve koolstof voor een frisse smaak</td><td className="p-4 text-dim">Elk jaar</td><td className="p-4 text-dim">€ 49,99</td></tr>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">CTO-nafilter met mineralen</th><td className="p-4 text-dim">Zelfde als hierboven, en voegt calcium en magnesium toe</td><td className="p-4 text-dim">Elk jaar</td><td className="p-4 text-dim">€ 64,99</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-dim leading-relaxed">
              Gemiddeld kost het vervangen van de filters zo ongeveer € 135 per jaar. Je bestelt ze in de <Link href="/winkel" className="underline hover:text-ink">winkel</Link>.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Signalen dat je je waterfilter moet vervangen</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Ook zonder op de kalender te kijken, zijn er een paar duidelijke signalen:
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Het display geeft een melding</strong>. Dat is het makkelijkste signaal.</li>
              <li><strong className="text-ink">Er komt minder water uit de kraan</strong>. Een vol voorfilter laat het water minder makkelijk door.</li>
              <li><strong className="text-ink">De smaak of geur verandert</strong>. Een verzadigd koolstoffilter haalt chloor en smaakstoffen minder goed weg.</li>
              <li><strong className="text-ink">Je wijk had last van bruin water</strong>. Het voorfilter vangt dan veel roestdeeltjes op en kan eerder vol zijn. Lees meer over <Link href="/kennisbank/bruin-water-uit-de-kraan" className="underline hover:text-ink">bruin water uit de kraan</Link>.</li>
            </ul>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">En bij een filterkan of kraanfilter?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Bij een filterkan of een filter op de kraan is de termijn veel korter dan bij een systeem onder het aanrecht. Zulke filters zijn klein en raken snel vol, vaak al binnen een paar weken. Volg altijd de termijn die de fabrikant op de verpakking zet. Wil je weten hoe die opties zich verhouden tot een osmosesysteem, lees dan <Link href="/kennisbank/kraanwater-filteren" className="underline hover:text-ink">kraanwater filteren: welke opties heb je?</Link>.
            </p>
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
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Nooit meer zelf hoeven bijhouden wanneer</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan voor een systeem dat je automatisch laat weten wanneer het tijd is.</p>
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

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import RevealObserver from '@/components/RevealObserver';

export const metadata = {
  title: 'Is Nederlands kraanwater veilig om te drinken?',
  description:
    'Is kraanwater in Nederland veilig? Ja, maar met kanttekeningen. Wat erin kan zitten en hoe je dat er eenvoudig uit filtert.',
};

export default function Page() {
  return (
    <>
      <RevealObserver />
      <Header />

      <main>
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Kennisbank</span>
            <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Is Nederlands kraanwater veilig om te drinken?
            </h1>
            <p className="mt-5 text-dim text-lg">
              Nederland heeft een van de best gecontroleerde drinkwaternetten ter wereld. Betekent dat ook dat er niks te verbeteren valt?
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Het korte antwoord: ja, maar</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Nederlandse drinkwaterbedrijven controleren continu op honderden stoffen en houden zich aan strenge Europese en nationale normen. In die zin is kraanwater in Nederland veilig — je wordt er niet acuut ziek van.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Toch worden er de laatste jaren steeds vaker sporen aangetroffen van stoffen die pas sinds kort goed meetbaar zijn, en die de norm nog niet volledig dekt — met name PFAS ("forever chemicals"), resten van medicijnen die via het riool in het oppervlaktewater terechtkomen, en microplastics. De normen worden hier geleidelijk op aangepast, maar lopen achter op wat er inmiddels meetbaar is.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waarom filteren dan alsnog zinvol is</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Kraanwater "voldoet aan de norm" betekent niet hetzelfde als "bevat helemaal niets". Het betekent dat de gemeten hoeveelheden onder de wettelijke grens blijven — een grens die met de huidige kennis is vastgesteld, en die met nieuwe inzichten kan verschuiven (zoals bij PFAS al gebeurt).
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Een extra filterstap onder je eigen kraan is dan ook geen wantrouwen richting het Nederlandse drinkwaterbedrijf — het is simpelweg een extra zekerheid, zonder dat je hoeft te wachten tot regelgeving een keer wordt bijgesteld.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/kennisbank/is-kraanwater-veilig.png" alt="Een glas helder kraanwater wordt gevuld" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">De oplossing</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zuiverder water, zonder erover na te hoeven denken</h2>
              <p className="mt-4 text-dim">Een Water-zuivering systeem filtert met 3 trappen chloor, PFAS, medicijnresten, microplastics en lood uit je kraanwater — direct beschikbaar, zonder dat je er verder aan hoeft te denken.</p>
              <p className="mt-4 text-dim">Benieuwd naar de specifieke stoffen? Lees ook onze uitleg over <Link href="/kennisbank/pfas-in-kraanwater" className="underline hover:text-ink">PFAS in kraanwater</Link>.</p>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zekerheid over wat er uit jouw kraan komt?</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan en ontdek wat een Water-zuivering systeem voor jouw huishouden betekent.</p>
            <Link href="/aanmelden" className="cursor-pointer mt-8 inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-xl shadow-amber/25">
              Vraag vrijblijvend een offerte aan
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-surface border-t border-edge">
        <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-dim text-center">&copy; 2026 Jd services B.V. (Water-zuivering). Alle rechten voorbehouden.</div>
      </footer>
    </>
  );
}

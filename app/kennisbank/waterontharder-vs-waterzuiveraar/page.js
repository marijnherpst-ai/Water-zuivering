import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';

export const metadata = {
  alternates: { canonical: '/kennisbank/waterontharder-vs-waterzuiveraar' },
  title: 'Waterontharder of waterzuiveraar? — Water-zuivering',
  description:
    'Waterontharder of waterzuiveraar — wat is het verschil, en wat heb jij nodig? Simpel uitgelegd, met een duidelijk antwoord voor jouw situatie.',
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
              Waterontharder of waterzuiveraar: het verschil
            </h1>
            <p className="mt-5 text-dim text-lg">
              Deze twee worden vaak door elkaar gehaald, maar ze doen iets heel anders. Welke past bij jouw situatie?
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat doet een waterontharder?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Een waterontharder haalt calcium en magnesium (de veroorzakers van kalk) uit al het water dat je huis binnenkomt — meestal via een ionenwisselaar met zout. Het doel: minder kalkaanslag op kranen, in leidingen en apparaten zoals de wasmachine en boiler. Het gaat dus om het hele huis, niet specifiek om drinkwater.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Een waterontharder verandert echter niets aan chloor, PFAS, medicijnresten of andere verontreinigingen — daar is hij simpelweg niet voor gemaakt.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat doet een waterzuiveraar?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Een waterzuiveraar (zoals een omgekeerde-osmosesysteem) richt zich specifiek op je <strong className="text-ink">drinkwater</strong>, meestal via een aparte kraan. Via meerdere filtertrappen worden chloor, PFAS, medicijnresten, microplastics, lood en andere ongewenste stoffen eruit gefilterd. Meer weten over hoe dat precies werkt? Lees onze uitleg over{' '}
              <Link href="/kennisbank/wat-is-osmosewater" className="underline hover:text-ink">wat osmosewater is</Link>.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Kortom: een waterontharder beschermt je <em>leidingen en apparaten</em>, een waterzuiveraar verbetert de <em>kwaliteit van het water dat je drinkt</em>.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/kennisbank/waterontharder-vs-waterzuiveraar.png" alt="Water uit een moderne kraan in een glas" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Wat heb jij nodig?</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Vaak: allebei — of gewoon een waterzuiveraar</h2>
              <p className="mt-4 text-dim">Heb je vooral last van kalkaanslag door je hele huis? Dan is een waterontharder de juiste keuze. Wil je vooral zuiverder, lekkerder drinkwater, zonder een grote installatie voor je hele huis? Dan is een waterzuiveraar onder je keukenkraan de directste en betaalbaarste oplossing.</p>
              <ul className="mt-5 space-y-2.5 text-sm">
                <li className="flex items-center gap-2.5 text-dim"><svg className="shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>Compact geïnstalleerd onder het aanrecht</li>
                <li className="flex items-center gap-2.5 text-dim"><svg className="shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>3-traps filtratie van je drinkwater</li>
                <li className="flex items-center gap-2.5 text-dim"><svg className="shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>Geen zoutvoorraad of grote installatie nodig</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Benieuwd wat bij jouw situatie past?</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan — we denken graag met je mee over wat voor jouw keuken het beste werkt.</p>
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

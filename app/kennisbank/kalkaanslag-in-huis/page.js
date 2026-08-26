import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';

export const metadata = {
  alternates: { canonical: '/kennisbank/kalkaanslag-in-huis' },
  title: 'Kalkaanslag in huis: oorzaak en oplossing — Water-zuivering',
  description:
    'Wat veroorzaakt kalkaanslag in huis, welke schade richt het aan, en hoe voorkom je het structureel?',
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
              Kalkaanslag in huis: oorzaak en oplossing
            </h1>
            <p className="mt-5 text-dim text-lg">
              Die witte aanslag op je kranen en douchekop komt niet uit het niets. Wat is de oorzaak, en wat kun je eraan doen?
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waar komt kalkaanslag vandaan?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Kalkaanslag ontstaat door calcium en magnesium die van nature in het water zitten — vooral in gebieden met "hard water", zoals grote delen van Nederland. Zodra water verdampt (bijvoorbeeld rond een kraan of op tegels), blijven deze mineralen achter als een witte, korstige laag.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Het is dus geen vervuiling in de gevaarlijke zin — het is gewoon een natuurlijk bijproduct van je plaatselijke waterhardheid.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Welke schade richt het aan?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Naast het cosmetische probleem (kranen en glaswerk die er snel vies uitzien), zet kalkaanslag zich ook vast in leidingen, boilers en apparaten zoals de wasmachine en waterkoker. Dat kan op termijn hun levensduur verkorten en hun energieverbruik verhogen, omdat verwarmingselementen minder efficiënt werken door een laagje kalk.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/kennisbank/kalkaanslag-in-huis.png" alt="Kalkaanslag op een chromen kraan" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">De structurele aanpak</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Ontharden voor je hele huis, zuiveren voor je drinkwater</h2>
              <p className="mt-4 text-dim">Kalkaanslag door je hele huis pak je structureel aan met een waterontharder. Wil je vooral zuiverder drinkwater bij je keukenkraan? Dan is een waterzuiveraar de betere keuze. Benieuwd wat het verschil precies is? Lees <Link href="/kennisbank/waterontharder-vs-waterzuiveraar" className="underline hover:text-ink">waterontharder vs. waterzuiveraar</Link>.</p>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zuiverder water uit je eigen kraan?</h2>
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

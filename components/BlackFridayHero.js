import Image from 'next/image';
import Link from 'next/link';
import BlackFridayCountdown from '@/components/BlackFridayCountdown';

const Vink = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="#EDA71B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

// November-only hero. The regular hero stays in app/page.js and returns on 1 December.
export default function BlackFridayHero() {
  return (
    <section id="hero" className="relative overflow-hidden min-h-[92vh] flex items-center bg-ink">
      <Image
        src="/assets/img/hero-vrouw-water.webp"
        alt="Vrouw geniet van een glas vers, gefilterd water rechtstreeks uit de kraan"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_center] opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
      <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-amber/20 blur-[120px]" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 w-full grid lg:grid-cols-[1fr_auto] gap-12 items-center">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-amber">
            <span className="w-1.5 h-1.5 rounded-full bg-amber pulse" />
            Alleen in november
          </span>
          <h1 className="mt-6 font-display font-extrabold tracking-tight text-white">
            <span className="block text-6xl sm:text-7xl lg:text-8xl leading-[0.9] uppercase">
              Black<br /><span className="text-amber">Friday</span>
            </span>
            <span className="mt-6 block text-2xl sm:text-3xl leading-tight">
              €250 korting op zuiver drinkwater uit uw eigen kraan<span className="text-amber">.</span>
            </span>
          </h1>
          <p className="mt-5 text-lg text-white/75 max-w-lg">
            Vraag deze maand een offerte aan en ontvang €250 korting. Gefilterd water zonder flessen of plastic afval, compact geïnstalleerd in uw keukenkastje.
          </p>

          <div className="mt-8">
            <BlackFridayCountdown />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/aanmelden" className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-xl shadow-amber/30">
              Claim €250 korting
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <a href="#hoe-het-werkt" className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white hover:bg-white/10 transition-colors">
              Bekijk hoe het werkt
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/75">
            <span className="inline-flex items-center gap-2"><Vink />Vakkundige installatie</span>
            <span className="inline-flex items-center gap-2"><Vink />Nederlandse service</span>
            <span className="inline-flex items-center gap-2"><Vink />10 jaar garantie</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center" aria-hidden="true">
          <div className="relative rotate-6 rounded-3xl border-2 border-dashed border-amber/60 bg-ink/70 px-12 py-14 text-center shadow-2xl shadow-amber/10 backdrop-blur">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 h-6 w-6 rounded-full border-2 border-amber/60 bg-ink" />
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/60">Korting</p>
            <p className="mt-2 font-display text-7xl font-extrabold text-amber leading-none">€250</p>
            <p className="mt-3 text-sm font-semibold text-white/80">bij uw offerte</p>
          </div>
        </div>
      </div>
    </section>
  );
}

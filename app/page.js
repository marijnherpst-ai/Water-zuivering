import Image from 'next/image';
import Header from '@/components/Header';
import MobileStickyCta from '@/components/MobileStickyCta';
import RevealObserver from '@/components/RevealObserver';
import Calculator from '@/components/Calculator';
import ContactForm from '@/components/ContactForm';
import SubstanceSlideshow from '@/components/SubstanceSlideshow';

export default function HomePage() {
  return (
    <>
      <RevealObserver />

      <a href="#hoe-het-werkt" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-amber focus:text-ink focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold">Ga naar hoofdinhoud</a>

      {/* NAV */}
      <Header />

      <main id="top">
        {/* HERO */}
        <section id="hero" className="relative overflow-hidden min-h-[92vh] flex items-center">
          <div className="glow drift w-[560px] h-[560px] bg-amber/20 -top-40 -left-40" />
          <div className="glow drift2 w-[460px] h-[460px] bg-amber/10 bottom-0 -right-32" />

          <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full card px-3.5 py-1.5 text-xs font-semibold text-amber-dark">
                <span className="w-1.5 h-1.5 rounded-full bg-amber pulse" />
                Premium waterfiltratie voor thuis
              </span>
              <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
                Zuiver drinkwater.<br />Rechtstreeks uit<br />uw eigen kraan<span className="text-amber-dark">.</span>
              </h1>
              <p className="mt-6 text-lg text-dim max-w-lg">
                Geniet iedere dag van heerlijk gefilterd water zonder flessen, plastic afval of onnodige kosten. Compact geïnstalleerd in uw keukenkastje.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href="/aanmelden" className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-xl shadow-amber/25">
                  Vraag vrijblijvend een offerte aan
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
                <a href="#hoe-het-werkt" className="cursor-pointer inline-flex items-center gap-2 rounded-full card px-7 py-4 text-sm font-bold text-ink hover:border-ink/20 transition-colors">
                  Bekijk hoe het werkt
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-dim">
                <span className="inline-flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>Vakkundige installatie</span>
                <span className="inline-flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>Nederlandse service</span>
                <span className="inline-flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>2 jaar garantie</span>
              </div>
            </div>

            <div className="relative reveal">
              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-amber/25 via-amber/5 to-transparent -rotate-3" />
              <div className="relative rounded-[2.5rem] overflow-hidden border border-edge shadow-2xl aspect-[4/5]">
                <Image src="/assets/img/countertop.png" alt="Water-zuivering premium waterzuiveraar op een keukenblad" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
              </div>
              <div className="hidden sm:flex items-center gap-2 absolute -top-5 right-6 rounded-full glass shadow-lg px-4 py-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#EDA71B" aria-hidden="true"><path d="M12 2l2.9 6.2 6.8.8-5 4.6 1.4 6.7L12 16.9 5.9 20.3l1.4-6.7-5-4.6 6.8-.8L12 2z" /></svg>
                <span className="text-xs font-bold">Premium kwaliteit</span>
              </div>
              <div className="hidden sm:flex items-center gap-3 absolute -bottom-6 -left-6 rounded-2xl card shadow-xl px-5 py-4">
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-amber/15 text-amber-dark">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <div>
                  <p className="text-lg font-display font-extrabold leading-none">3-traps</p>
                  <p className="text-xs text-dim mt-1 max-w-[9rem]">Compact filtersysteem onder het aanrecht</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="relative border-y border-edge bg-surface">
          <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-8 gap-x-6 lg:divide-x lg:divide-edge">
              <div className="flex items-center gap-3 lg:justify-center lg:px-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber/12 text-amber-dark shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.9 6.2 6.8.8-5 4.6 1.4 6.7L12 16.9 5.9 20.3l1.4-6.7-5-4.6 6.8-.8L12 2z" /></svg>
                </span>
                <div className="text-left">
                  <div className="flex items-center gap-0.5 text-amber text-xs" aria-hidden="true">★★★★★</div>
                  <p className="mt-0.5 text-xs font-semibold text-dim">Beoordeeld door klanten</p>
                </div>
              </div>

              <div className="flex items-center gap-3 lg:justify-center lg:px-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber/12 text-amber-dark shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /></svg>
                </span>
                <p className="text-sm font-semibold text-ink text-left">Jarenlange ervaring in waterfiltratie</p>
              </div>

              <div className="flex items-center gap-3 lg:justify-center lg:px-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber/12 text-amber-dark shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 4l6 6-9 9-6-3 9-12z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /><path d="M4 20l3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
                </span>
                <p className="text-sm font-semibold text-ink text-left">Nederlandse service &amp; installatie</p>
              </div>

              <div className="flex items-center gap-3 lg:justify-center lg:px-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber/12 text-amber-dark shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2C12 2 5 10.5 5 15a7 7 0 0014 0c0-4.5-7-13-7-13z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /></svg>
                </span>
                <p className="text-sm font-semibold text-ink text-left">Hoogwaardige 3-traps filtratie</p>
              </div>

              <div className="flex items-center gap-3 lg:justify-center lg:px-4 col-span-2 lg:col-span-1">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber/12 text-amber-dark shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" /></svg>
                </span>
                <p className="text-sm font-semibold text-ink text-left">Professionele montage inbegrepen</p>
              </div>
            </div>
          </div>
        </section>

        {/* ONZE PRODUCTEN */}
        <section id="product" className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Ons assortiment</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Onze producten</h2>
              <p className="mt-4 text-dim text-lg">Eén hoofdsysteem, twee slimme accessoires. Los verkrijgbaar, perfect op elkaar afgestemd.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 lg:items-stretch">
              {/* Kaart 1: 3-weg kraan */}
              <div className="reveal relative rounded-[2rem] card p-8 flex flex-col">
                <span className="self-start inline-block rounded-full bg-amber/12 text-amber-dark text-[11px] font-bold uppercase tracking-wide px-3 py-1">Accessoire</span>
                <div className="relative mt-6 rounded-2xl bg-bg aspect-[4/3] flex items-center justify-center p-6 overflow-hidden">
                  <div className="glow w-40 h-40 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
                  <img src="/assets/img/3-weg-kraan.png" alt="Water-zuivering 3-weg kraan" className="relative max-h-full w-auto object-contain" />
                </div>
                <h3 className="mt-6 font-display text-xl font-extrabold tracking-tight">3-weg kraan</h3>
                <p className="mt-2 text-sm text-dim">Eén elegante kraan voor gefilterd, gewoon en gemineraliseerd water.</p>
                <ul className="mt-5 space-y-2.5 text-sm">
                  <li className="flex items-center gap-2.5 text-dim"><svg className="shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>Drie waterstromen uit één kraan</li>
                  <li className="flex items-center gap-2.5 text-dim"><svg className="shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>Compatibel met elk Water-zuivering systeem</li>
                  <li className="flex items-center gap-2.5 text-dim"><svg className="shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>Vakkundig meegeïnstalleerd</li>
                </ul>
                <div className="mt-auto pt-6">
                  <a href="/aanmelden" className="cursor-pointer flex items-center justify-center gap-2 rounded-full border-2 border-ink px-6 py-3 text-sm font-bold text-ink hover:bg-bg transition-colors">
                    Meer informatie
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </a>
                </div>
              </div>

              {/* Kaart 2: Osmosewatersysteem (uitgelicht) */}
              <div className="reveal relative rounded-[2rem] bg-ink text-white p-8 flex flex-col lg:-translate-y-5 shadow-2xl shadow-ink/25 lg:scale-[1.03] z-10">
                <span className="absolute -top-3 left-8 rounded-full bg-amber text-ink text-[11px] font-bold uppercase tracking-wide px-3 py-1 shadow-lg shadow-amber/30">Meest gekozen</span>
                <span className="self-start inline-block rounded-full bg-white/10 text-amber text-[11px] font-bold uppercase tracking-wide px-3 py-1">Hoofdsysteem</span>
                <div className="relative mt-6 rounded-2xl aspect-[4/3] overflow-hidden">
                  <img src="/assets/img/cabinet-install.png" alt="Water-zuivering Osmosewatersysteem, past smal in een standaard keukenkastje" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <h3 className="mt-6 font-display text-xl font-extrabold tracking-tight">Osmosewatersysteem</h3>
                <p className="mt-2 text-sm text-white/60">3-traps filtersysteem — PPC, RO en GAC. De basis van elk Water-zuivering huishouden.</p>
                <ul className="mt-5 space-y-2.5 text-sm">
                  <li className="flex items-center gap-2.5 text-white/70"><svg className="shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#EDA71B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>Zuivert tot 99% van onzuiverheden</li>
                  <li className="flex items-center gap-2.5 text-white/70"><svg className="shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#EDA71B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>Compact geplaatst onder het aanrecht</li>
                  <li className="flex items-center gap-2.5 text-white/70"><svg className="shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#EDA71B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>Inclusief professionele installatie</li>
                </ul>
                <div className="mt-auto pt-6">
                  <a href="/aanmelden" className="cursor-pointer flex items-center justify-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-bold text-ink hover:bg-white transition-colors">
                    Vraag offerte aan
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </a>
                </div>
              </div>

              {/* Kaart 3: Mineraalfilter */}
              <div className="reveal relative rounded-[2rem] card p-8 flex flex-col">
                <span className="self-start inline-block rounded-full bg-amber/12 text-amber-dark text-[11px] font-bold uppercase tracking-wide px-3 py-1">Accessoire</span>
                <div className="relative mt-6 rounded-2xl bg-bg aspect-[4/3] flex items-center justify-center p-6 overflow-hidden">
                  <div className="glow w-40 h-40 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
                  <img src="/assets/img/mineraalfilter.jpg" alt="Water-zuivering Mineraalfilter" className="relative max-h-full w-auto object-contain rounded-lg" />
                </div>
                <h3 className="mt-6 font-display text-xl font-extrabold tracking-tight">Mineraalfilter</h3>
                <p className="mt-2 text-sm text-dim">Voegt calcium en magnesium terug toe voor een voller smaakprofiel.</p>
                <ul className="mt-5 space-y-2.5 text-sm">
                  <li className="flex items-center gap-2.5 text-dim"><svg className="shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>Voegt calcium &amp; magnesium toe</li>
                  <li className="flex items-center gap-2.5 text-dim"><svg className="shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>Eenvoudig te combineren als extra trap</li>
                  <li className="flex items-center gap-2.5 text-dim"><svg className="shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>Ronder smaakprofiel</li>
                </ul>
                <div className="mt-auto pt-6">
                  <a href="/aanmelden" className="cursor-pointer flex items-center justify-center gap-2 rounded-full border-2 border-ink px-6 py-3 text-sm font-bold text-ink hover:bg-bg transition-colors">
                    Meer informatie
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-16 flex justify-center">
              <div className="flex items-center gap-4 w-full max-w-2xl rounded-2xl bg-ink text-white px-8 py-5 shadow-lg">
                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-amber text-ink shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19L19 5M8 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm8 10a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <div className="text-left">
                  <p className="font-display font-extrabold text-lg leading-tight">Nu tijdelijk <span className="text-amber">€250 korting</span></p>
                  <p className="text-xs text-white/60 mt-0.5">Bij aanvraag van een offerte — voor beperkte tijd geldig.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EEN KRAAN IN PLAATS VAN TWEE */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">3-weg kraan</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Eén kraan in plaats van twee</h2>
              <p className="mt-4 text-dim text-lg">Een losse kraan voor gefilterd water betekent extra gaten in het aanrecht en meer rommel. Met een 3-weg kraan combineert u alles in één strak ontwerp.</p>
            </div>

            <div className="mt-14 grid md:grid-cols-2 gap-6 lg:gap-8">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3]">
                <img src="/assets/img/twee-kranen.jpg" alt="Twee losse kranen op het aanrecht" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-4 py-1.5 text-xs font-bold text-ink">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></svg>
                  2 kranen — extra gedoe
                </span>
              </div>
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] ring-2 ring-amber">
                <img src="/assets/img/een-kraan.jpg" alt="Eén elegante 3-weg kraan" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-amber px-4 py-1.5 text-xs font-bold text-ink">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  1 kraan — alles-in-één
                </span>
              </div>
            </div>

            <div className="mt-10 text-center">
              <a href="/aanmelden" className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-lg shadow-amber/25">
                Vraag vrijblijvend een offerte aan
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </div>
        </section>

        {/* HOE HET WERKT: SFEERBEELD */}
        <section id="hoe-het-werkt" className="relative overflow-hidden">
          <img src="/assets/img/cabinet-install.png" alt="Water-zuivering geïnstalleerd, sfeerbeeld" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/80 to-ink/90" />
          <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 text-white">
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber">Het proces</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Hoe werkt het?</h2>
            </div>

            <div className="mt-16 grid md:grid-cols-4 gap-6">
              <div className="reveal rounded-2xl glass !bg-white/10 !border-white/15 p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-amber">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 3v3M16 3v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><rect x="5" y="6" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" /><path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="1.4" /></svg>
                </div>
                <p className="mt-4 font-display font-bold">1. Water komt binnen</p>
                <p className="mt-1.5 text-sm text-white/60">Gewoon leidingwater stroomt het systeem in.</p>
              </div>
              <div className="reveal rounded-2xl glass !bg-white/10 !border-white/15 p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-amber">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                </div>
                <p className="mt-4 font-display font-bold">2. Meerlaagse filtratie</p>
                <p className="mt-1.5 text-sm text-white/60">Drie traps filteren stap voor stap steeds fijner.</p>
              </div>
              <div className="reveal rounded-2xl glass !bg-white/10 !border-white/15 p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-amber">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 4h16l-6.5 8v7l-3 1.5v-8.5L4 4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></svg>
                </div>
                <p className="mt-4 font-display font-bold">3. Onzuiverheden eruit</p>
                <p className="mt-1.5 text-sm text-white/60">Ongewenste stoffen worden tegengehouden.</p>
              </div>
              <div className="reveal rounded-2xl bg-amber p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-ink/10 text-ink">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2C12 2 5 10.5 5 15a7 7 0 0014 0c0-4.5-7-13-7-13z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M9.5 15.5a2.5 2.5 0 002.5 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
                </div>
                <p className="mt-4 font-display font-bold text-ink">4. Zuiver water uit de kraan</p>
                <p className="mt-1.5 text-sm text-ink/70">Direct beschikbaar, op elk moment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WAAROM EEN WATERZUIVERAAR */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Waterkwaliteit</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Waarom kiezen voor een waterzuiveraar?</h2>
              <p className="mt-4 text-dim text-lg">Kraanwater in Nederland is veilig, maar bevat soms sporen van stoffen die u liever niet binnenkrijgt. Klik door om te zien wat een Water-zuivering systeem eruit filtert.</p>
            </div>

            <div className="mt-14 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
              <div className="relative order-2 lg:order-1 rounded-[2rem] overflow-hidden aspect-[4/5] lg:aspect-auto lg:self-stretch">
                <img src="/assets/img/glas-water.webp" alt="Een glas helder, gefilterd water" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <SubstanceSlideshow />
              </div>
            </div>
          </div>
        </section>

        {/* WAAROM KIEZEN VOOR ONS: BENTO */}
        <section className="relative">
          <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Ons verschil</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Waarom kiezen voor ons?</h2>
            </div>
            <div className="mt-14 grid sm:grid-cols-3 gap-6">
              <div className="reveal sm:col-span-2 rounded-3xl bg-gradient-to-br from-amber/20 via-amber/5 to-transparent border border-amber/20 p-8">
                <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-ink text-amber">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2l2.9 6.2 6.8.8-5 4.6 1.4 6.7L12 16.9 5.9 20.3l1.4-6.7-5-4.6 6.8-.8L12 2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
                </span>
                <p className="mt-5 font-display font-bold text-xl">Premium kwaliteit</p>
                <p className="mt-2 text-dim max-w-sm">Zorgvuldig geselecteerde componenten voor duurzame prestaties, in elk detail merkbaar.</p>
              </div>
              <div className="reveal rounded-3xl bg-ink text-white p-8">
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-amber">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
                </span>
                <p className="mt-4 font-display font-bold text-lg">Lange levensduur</p>
                <p className="mt-1.5 text-sm text-white/60">Gebouwd om jarenlang probleemloos mee te gaan.</p>
              </div>
              <div className="reveal rounded-3xl card p-7">
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber/12 text-amber-dark">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
                </span>
                <p className="mt-4 font-display font-bold text-lg">Snelle installatie</p>
                <p className="mt-1.5 text-sm text-dim">Meestal binnen een paar uur vakkundig geplaatst.</p>
              </div>
              <div className="reveal sm:col-span-2 rounded-3xl card p-8 flex flex-col sm:flex-row sm:items-center gap-5">
                <span className="shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-amber/12 text-amber-dark">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" /><path d="M12 8v4l2.5 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
                </span>
                <div>
                  <p className="font-display font-bold text-lg">Lage onderhoudskosten</p>
                  <p className="mt-1 text-sm text-dim">Eenvoudig filters vervangen, geen gedoe — geen dure servicecontracten.</p>
                </div>
              </div>
              <div className="reveal sm:col-span-2 rounded-3xl bg-ink text-white p-8 flex flex-col sm:flex-row sm:items-center gap-5">
                <span className="shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 text-amber">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21s-7-4.5-7-10a7 7 0 0114 0c0 5.5-7 10-7 10z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
                </span>
                <div>
                  <p className="font-display font-bold text-lg">Duurzame oplossing</p>
                  <p className="mt-1 text-sm text-white/60">Minder flessenwater, minder plastic afval.</p>
                </div>
              </div>
              <div className="reveal relative rounded-3xl overflow-hidden min-h-[220px]">
                <img src="/assets/img/klantenservice.jpg" alt="Water-zuivering klantenservice medewerker" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-7 text-white">
                  <p className="font-display font-bold text-lg">Uitstekende klantenservice</p>
                  <p className="mt-1.5 text-sm text-white/70">Persoonlijk bereikbaar voor al uw vragen.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KOSTENBESPARING CALCULATOR */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Kostenbesparing</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Bereken uw jaarlijkse besparing</h2>
              <p className="mt-4 text-dim">Vergeleken met flessenwater — een indicatieve schatting voor uw huishouden.</p>
            </div>
            <Calculator />
          </div>
        </section>

        {/* INSTALLATIE */}
        <section className="relative bg-gradient-to-b from-amber/10 via-surface to-surface border-y border-edge overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-20 -right-20" />
          <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Installatie</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Zo eenvoudig gaat het</h2>
              <p className="mt-4 text-dim text-lg">Van eerste contact tot zuiver water uit de kraan — in vier duidelijke stappen, meestal binnen één dag geregeld.</p>
            </div>
            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="reveal rounded-3xl card p-6 text-center">
                <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-2xl bg-amber/12 text-amber-dark">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.7" /><path d="M4 9h16M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
                </div>
                <p className="mt-5 font-display font-bold text-lg">1. Afspraak</p>
                <p className="mt-2 text-sm text-dim">Plan telefonisch of online een moment dat u uitkomt. U ontvangt vooraf een duidelijke tijdsindicatie, zodat u niet hoeft te wachten.</p>
                <p className="mt-4 text-xs font-bold text-amber-dark uppercase tracking-wide">± 5 minuten</p>
              </div>
              <div className="reveal rounded-3xl card p-6 text-center">
                <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-2xl bg-amber/12 text-amber-dark">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 4l6 6-9 9-6-3 9-12z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /><path d="M4 20l3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
                </div>
                <p className="mt-5 font-display font-bold text-lg">2. Installatie</p>
                <p className="mt-2 text-sm text-dim">Een vakkundige monteur plaatst het systeem onder uw aanrecht, sluit alles netjes aan en houdt rekening met uw keukeninrichting.</p>
                <p className="mt-4 text-xs font-bold text-amber-dark uppercase tracking-wide">± 1-2 uur</p>
              </div>
              <div className="reveal rounded-3xl card p-6 text-center">
                <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-2xl bg-amber/12 text-amber-dark">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" /></svg>
                </div>
                <p className="mt-5 font-display font-bold text-lg">3. Controle</p>
                <p className="mt-2 text-sm text-dim">Voor we vertrekken testen we de waterdruk, alle aansluitingen en elke filtertrap afzonderlijk, zodat alles aantoonbaar goed werkt.</p>
                <p className="mt-4 text-xs font-bold text-amber-dark uppercase tracking-wide">± 15 minuten</p>
              </div>
              <div className="reveal rounded-3xl bg-ink text-white p-6 text-center">
                <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-2xl bg-amber text-ink">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2C12 2 5 10.5 5 15a7 7 0 0014 0c0-4.5-7-13-7-13z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></svg>
                </div>
                <p className="mt-5 font-display font-bold text-lg">4. Genieten</p>
                <p className="mt-2 text-sm text-white/60">Vanaf dat moment heeft u dagelijks toegang tot zuiver, gefilterd water — rechtstreeks uit uw kraan, zonder verdere moeite.</p>
                <p className="mt-4 text-xs font-bold text-amber uppercase tracking-wide">Vanaf nu</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="relative">
          <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Veelgestelde vragen</h2>
            </div>
            <div className="mt-10 space-y-3">
              <details className="group rounded-2xl card p-5">
                <summary className="cursor-pointer list-none flex items-center justify-between font-display font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber rounded">
                  Past het apparaat onder elk keukenkastje?
                  <svg className="shrink-0 transition-transform group-open:rotate-45 text-amber-dark" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                </summary>
                <p className="mt-3 text-sm text-dim">In de meeste standaardkeukens is voldoende ruimte onder de spoelbak. Tijdens de offerteaanvraag kijken we naar uw specifieke situatie.</p>
              </details>
              <details className="group rounded-2xl card p-5">
                <summary className="cursor-pointer list-none flex items-center justify-between font-display font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber rounded">
                  Hoe vaak moet ik filters vervangen?
                  <svg className="shrink-0 transition-transform group-open:rotate-45 text-amber-dark" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                </summary>
                <p className="mt-3 text-sm text-dim">Dit hangt af van gebruik en waterkwaliteit. Bij installatie krijgt u een concreet vervangingsschema mee.</p>
              </details>
              <details className="group rounded-2xl card p-5">
                <summary className="cursor-pointer list-none flex items-center justify-between font-display font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber rounded">
                  Heeft het apparaat invloed op mijn waterdruk?
                  <svg className="shrink-0 transition-transform group-open:rotate-45 text-amber-dark" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                </summary>
                <p className="mt-3 text-sm text-dim">Nee. Het apparaat is ontworpen om de druk op uw bestaande kraan niet merkbaar te beïnvloeden.</p>
              </details>
              <details className="group rounded-2xl card p-5">
                <summary className="cursor-pointer list-none flex items-center justify-between font-display font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber rounded">
                  Wat kost een offerte?
                  <svg className="shrink-0 transition-transform group-open:rotate-45 text-amber-dark" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                </summary>
                <p className="mt-3 text-sm text-dim">Niets — een offerte en adviesgesprek zijn volledig gratis en vrijblijvend.</p>
              </details>
              <details className="group rounded-2xl card p-5">
                <summary className="cursor-pointer list-none flex items-center justify-between font-display font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber rounded">
                  Hoe lang duurt de installatie?
                  <svg className="shrink-0 transition-transform group-open:rotate-45 text-amber-dark" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                </summary>
                <p className="mt-3 text-sm text-dim">De meeste installaties zijn binnen een paar uur voltooid door een vakkundige monteur.</p>
              </details>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="relative bg-ink text-white overflow-hidden">
          <div className="glow drift w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber">Contact</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Vraag gratis een offerte aan</h2>
              <p className="mt-4 text-white/70">Vul het formulier in en we nemen binnen één werkdag contact met u op — geheel vrijblijvend.</p>
              <ul className="mt-8 space-y-3 text-sm text-white/70">
                <li className="flex items-center gap-2.5"><svg className="shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#EDA71B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>Geen verplichtingen</li>
                <li className="flex items-center gap-2.5"><svg className="shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#EDA71B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>Reactie binnen 1 werkdag</li>
                <li className="flex items-center gap-2.5"><svg className="shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#EDA71B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>Persoonlijk advies op maat</li>
              </ul>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="bg-surface border-t border-edge">
        <div className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <a href="#top" className="flex items-center gap-2.5 font-display font-extrabold text-lg tracking-tight">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-ink">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2C12 2 5 10.5 5 15a7 7 0 0014 0c0-4.5-7-13-7-13z" fill="#EDA71B" /></svg>
              </span>
              Water-zuivering
            </a>
            <p className="mt-3 text-sm text-dim">Premium waterfiltratie voor onder uw keukenkraan.</p>
          </div>
          <div>
            <p className="font-display font-bold text-sm">Navigatie</p>
            <ul className="mt-3 space-y-2 text-sm text-dim">
              <li><a href="#product" className="hover:text-ink transition-colors">Producten</a></li>
              <li><a href="#hoe-het-werkt" className="hover:text-ink transition-colors">Hoe het werkt</a></li>
              <li><a href="#faq" className="hover:text-ink transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <p className="font-display font-bold text-sm">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-dim">
              <li><a href="/contact" className="hover:text-ink transition-colors">Contactgegevens &amp; locatie</a></li>
              <li><a href="mailto:info@water-zuivering.nl" className="hover:text-ink transition-colors">info@water-zuivering.nl</a></li>
              <li>Veldkersweg 16, 3053 JR Rotterdam</li>
              <li>KVK 83174044</li>
            </ul>
          </div>
          <div>
            <p className="font-display font-bold text-sm">Juridisch</p>
            <ul className="mt-3 space-y-2 text-sm text-dim">
              <li><a href="#" className="hover:text-ink transition-colors">Privacybeleid</a></li>
              <li><a href="#" className="hover:text-ink transition-colors">Algemene voorwaarden</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-edge">
          <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-dim">&copy; 2026 Jd services B.V. (Water-zuivering). Alle rechten voorbehouden.</div>
        </div>
      </footer>

      {/* MOBILE STICKY CTA */}
      <MobileStickyCta />
    </>
  );
}

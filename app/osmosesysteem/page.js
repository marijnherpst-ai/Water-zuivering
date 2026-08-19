import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import FiltratieProces from '@/components/osmose/FiltratieProces';
import TdsMeter from '@/components/osmose/TdsMeter';
import WerkingTabs from '@/components/osmose/WerkingTabs';
import MaatVergelijker from '@/components/osmose/MaatVergelijker';
import MineraalUitleg from '@/components/osmose/MineraalUitleg';
import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Osmosewatersysteem — Water-zuivering',
  description:
    'Ontdek precies hoe het Water-zuivering osmosewatersysteem werkt: 3-traps filtratie, interactieve TDS-meter en volledige uitleg van installatie tot filter vervangen.',
};

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} van de 5 sterren`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} width="14" height="14" viewBox="0 0 24 24" fill={n <= Math.round(rating) ? '#EDA71B' : 'none'} stroke="#EDA71B" strokeWidth="1.6" aria-hidden="true">
          <path d="M12 2l2.9 6.2 6.8.8-5 4.6 1.4 6.7L12 16.9 5.9 20.3l1.4-6.7-5-4.6 6.8-.8L12 2z" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  );
}

export default async function Page() {
  const supabase = await createClient();
  const { data: allReviews } = await supabase
    .from('reviews')
    .select('id, name, city, rating, review_text, created_at')
    .eq('approved', true)
    .order('created_at', { ascending: false });

  const reviews = allReviews || [];
  const topReviews = reviews.slice(0, 3);
  const reviewCount = reviews.length;
  const avgRating = reviewCount > 0 ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviewCount : null;

  return (
    <>
      <RevealObserver />
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="glow w-[520px] h-[520px] bg-amber/15 -top-44 -left-44 drift" />
          <div className="glow w-72 h-72 bg-amber/10 top-1/3 -right-24 drift2" />
          <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-ink/5 px-4 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Hoofdsysteem</span>
              </span>
              <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight leading-[1.05]">
                Zuiver water.<br />Uit je eigen kraan<span className="text-amber-dark">.</span>
              </h1>
              <p className="mt-6 text-lg text-dim max-w-md leading-relaxed">
                Het osmosewatersysteem is de basis van elk Water-zuivering huishouden — 3-traps filtratie die PFAS, medicijnresten en microplastics verwijdert, compact geplaatst onder je aanrecht.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link href="/aanmelden" className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-xl shadow-amber/25">
                  Vraag vrijblijvend een offerte aan
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
                <a href="#hoe-het-werkt" className="cursor-pointer inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3.5 text-sm font-bold text-ink hover:bg-white transition-colors">
                  Bekijk hoe het werkt
                </a>
              </div>

              {/* Trustbar */}
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                {avgRating && (
                  <div className="flex items-center gap-2.5">
                    <Stars rating={avgRating} />
                    <span className="text-sm font-bold text-ink">{avgRating.toFixed(1)}</span>
                    <span className="text-sm text-dim">({reviewCount} reviews)</span>
                  </div>
                )}
                <span className="inline-flex items-center gap-2 text-sm text-dim"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>10 jaar garantie</span>
                <span className="inline-flex items-center gap-2 text-sm text-dim"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>CE gecertificeerd</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-amber/25 via-amber/5 to-transparent -rotate-3" />
              <div className="relative rounded-[2.5rem] overflow-hidden border border-edge shadow-2xl aspect-[4/5]">
                <Image src="/assets/img/countertop.png" alt="Water-zuivering osmosewatersysteem op een keukenblad" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="hidden sm:flex items-center gap-2 absolute -top-5 right-6 rounded-full glass shadow-lg px-4 py-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#EDA71B" aria-hidden="true"><path d="M12 2l2.9 6.2 6.8.8-5 4.6 1.4 6.7L12 16.9 5.9 20.3l1.4-6.7-5-4.6 6.8-.8L12 2z" /></svg>
                <span className="text-xs font-bold">Premium kwaliteit</span>
              </div>
              <div className="hidden sm:flex flex-col gap-0.5 absolute -bottom-5 left-6 rounded-2xl glass shadow-lg px-5 py-3.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-dim">Zuivert tot</span>
                <span className="font-display text-xl font-extrabold text-amber-dark">99%</span>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="relative border-y border-edge bg-surface">
          <div className="max-w-5xl mx-auto px-6 py-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:divide-x lg:divide-edge">
              <div className="text-center lg:px-2">
                <p className="font-display text-2xl font-extrabold text-amber-dark">3</p>
                <p className="mt-1 text-xs text-dim">filtertrappen</p>
              </div>
              <div className="text-center lg:px-2">
                <p className="font-display text-2xl font-extrabold text-amber-dark">10,5 cm</p>
                <p className="mt-1 text-xs text-dim">breed</p>
              </div>
              <div className="text-center lg:px-2">
                <p className="font-display text-2xl font-extrabold text-amber-dark">1,58L/min</p>
                <p className="mt-1 text-xs text-dim">uit de kraan</p>
              </div>
              <div className="text-center lg:px-2">
                <p className="font-display text-2xl font-extrabold text-amber-dark">10 jaar</p>
                <p className="mt-1 text-xs text-dim">garantie</p>
              </div>
            </div>
          </div>
        </section>

        {/* FILTRATIEPROCES — interactief */}
        <section id="hoe-het-werkt" className="relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Het proces</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Van kraanwater tot kristalhelder glas water</h2>
              <p className="mt-4 text-dim text-lg">Elke druppel gaat door drie filtertrappen. Klik hieronder op een filter om precies te zien wat er gebeurt.</p>
            </div>
            <div className="mt-12">
              <FiltratieProces />
            </div>
          </div>
        </section>

        {/* TDS METER — interactief */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <TdsMeter />
          </div>
        </section>

        {/* WERKING VAN A TOT Z — interactieve tabs */}
        <section className="relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Van A tot Z</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Alles wat je wilt weten over de werking</h2>
              <p className="mt-4 text-dim text-lg">Van installatie tot je eerste glas water, en van dagelijks gebruik tot een filter vervangen.</p>
            </div>
            <WerkingTabs />
          </div>
        </section>

        {/* Mid-page CTA */}
        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-96 h-96 bg-amber/15 -top-32 left-1/2 -translate-x-1/2" />
          <div className="relative max-w-3xl mx-auto px-6 py-14 text-center">
            <h2 className="font-display text-xl md:text-2xl font-extrabold tracking-tight">Overtuigd van zuiver water uit je eigen kraan?</h2>
            <Link href="/aanmelden" className="cursor-pointer mt-6 inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink hover:bg-white transition-colors shadow-xl shadow-amber/25">
              Vraag vrijblijvend een offerte aan
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </section>

        {/* ONTWERP + MAATVERGELIJKER */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Ontwerp</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Klein maar krachtig</h2>
              <p className="mt-4 text-dim">Het systeem is maar 10,5 cm breed (105 x 420 x 430 mm, b × d × h) — smaller dan de meeste keukenladen. Past dus zo goed als altijd onder je aanrecht.</p>
              <p className="mt-4 text-dim">Er hoeft ook geen los waterreservoir bij. Het systeem maakt zuiver water op het moment dat jij de kraan opendraait.</p>
              <p className="mt-4 text-dim">Past het niet rechtop in je kastje? Leg 'm gewoon op zijn kant — het bedieningspaneel draait automatisch mee.</p>
            </div>
            <MaatVergelijker />
          </div>
        </section>

        {/* FILTERKOSTEN */}
        <section className="relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Onderhoud</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Wat kosten de filters?</h2>
              <p className="mt-4 text-dim text-lg">Geen verrassingen achteraf — dit is precies wat je aan onderhoud betaalt.</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 sm:items-center">
              <div className="relative rounded-3xl card p-7 flex flex-col hover:shadow-lg transition-shadow">
                <span className="self-start rounded-full bg-amber/12 text-amber-dark text-[11px] font-bold uppercase tracking-wide px-3 py-1">Ieder jaar</span>
                <p className="mt-5 font-display font-bold text-lg">PPC-filter</p>
                <p className="mt-1.5 text-sm text-dim">Voorfilter — vangt grof vuil, zand en roest.</p>
                <div className="mt-6 pt-6 border-t border-edge flex items-baseline gap-1.5">
                  <span className="font-display text-3xl font-extrabold">€49,99</span>
                  <span className="text-sm text-dim">/ jaar</span>
                </div>
              </div>

              <div className="relative rounded-3xl bg-ink text-white p-7 flex flex-col shadow-2xl shadow-ink/25 sm:scale-[1.05] z-10">
                <span className="absolute -top-3 left-7 rounded-full bg-amber text-ink text-[11px] font-bold uppercase tracking-wide px-3 py-1 shadow-lg shadow-amber/30">Langste levensduur</span>
                <span className="self-start rounded-full bg-white/10 text-amber text-[11px] font-bold uppercase tracking-wide px-3 py-1">Elke 2 jaar</span>
                <p className="mt-5 font-display font-bold text-lg">RO-filter</p>
                <p className="mt-1.5 text-sm text-white/60">Het hart van het systeem — haalt bacteriën, zware metalen en PFAS eruit.</p>
                <div className="mt-6 pt-6 border-t border-white/15 flex items-baseline gap-1.5">
                  <span className="font-display text-3xl font-extrabold">€69,99</span>
                  <span className="text-sm text-white/60">/ 2 jaar</span>
                </div>
              </div>

              <div className="relative rounded-3xl card p-7 flex flex-col hover:shadow-lg transition-shadow">
                <span className="self-start rounded-full bg-amber/12 text-amber-dark text-[11px] font-bold uppercase tracking-wide px-3 py-1">Ieder jaar</span>
                <p className="mt-5 font-display font-bold text-lg">CTO-filter</p>
                <p className="mt-1.5 text-sm text-dim">Nafilter — zorgt voor een frisse, heldere smaak.</p>
                <div className="mt-6 pt-6 border-t border-edge flex items-baseline gap-1.5">
                  <span className="font-display text-3xl font-extrabold">€49,99</span>
                  <span className="text-sm text-dim">/ jaar</span>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-3xl bg-amber/10 border border-amber/20 px-7 py-6 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
              <div>
                <p className="font-display font-bold text-lg">Gemiddeld ± €135 per jaar aan filters</p>
                <p className="mt-1 text-sm text-dim">Dat is nog geen €11,50 per maand — voor zuiver water waar je hele gezin dagelijks van drinkt.</p>
              </div>
              <Link href="/kennisbank/wat-kost-een-waterzuiveringssysteem" className="cursor-pointer shrink-0 inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3 text-sm font-bold text-ink hover:bg-white transition-colors">
                Meer over de kosten
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        {topReviews.length > 0 && (
          <section className="relative">
            <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
              <div className="flex items-end justify-between gap-4 mb-10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Ervaringen</span>
                  <h2 className="mt-2 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat klanten van ons vinden</h2>
                </div>
                <Link href="/reviews" className="cursor-pointer hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-ink hover:text-amber-dark transition-colors shrink-0">
                  Alle reviews
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>
              <div className="grid sm:grid-cols-3 gap-5">
                {topReviews.map((review) => (
                  <div key={review.id} className="rounded-2xl card p-6 bg-white">
                    <Stars rating={review.rating} />
                    <p className="mt-3 text-sm text-ink leading-snug line-clamp-4">&ldquo;{review.review_text}&rdquo;</p>
                    <p className="mt-4 text-xs font-semibold text-dim">{review.name}{review.city ? ` — ${review.city}` : ''}</p>
                  </div>
                ))}
              </div>
              <Link href="/reviews" className="cursor-pointer sm:hidden mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-ink">
                Alle reviews
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
          </section>
        )}

        {/* VOORDELEN — Zonder vs Met */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Het verschil</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Waarom kiezen voor dit systeem?</h2>
              <p className="mt-4 text-dim text-lg">Zet het naast een leven zonder — en het verschil spreekt voor zich.</p>
            </div>

            <div className="relative grid md:grid-cols-2 gap-4 md:gap-0 md:rounded-[2rem] md:overflow-hidden md:border md:border-edge md:shadow-xl md:shadow-ink/5">
              {/* ZONDER */}
              <div className="rounded-3xl md:rounded-none bg-bg p-8 md:p-10 lg:p-12">
                <p className="text-xs font-bold uppercase tracking-widest text-dim">Zonder Water-zuivering</p>
                <ul className="mt-7 space-y-5">
                  {[
                    'Kalkaanslag en een minder frisse smaak uit de kraan',
                    'Sporen van PFAS, medicijnresten en microplastics in je kraanwater',
                    'Eindeloos sjouwen met flessen water of literpakken',
                    'Bergen plastic afval van lege flessen',
                    'Zelf uitzoeken en installeren van een geschikt systeem',
                    'Geen idee hoe zuiver het water is dat je drinkt',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3.5">
                      <span className="shrink-0 mt-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-edge/70 text-dim">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></svg>
                      </span>
                      <span className="text-dim">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* MET */}
              <div className="relative rounded-3xl md:rounded-none bg-ink text-white p-8 md:p-10 lg:p-12">
                <p className="text-xs font-bold uppercase tracking-widest text-amber">Met Water-zuivering</p>
                <ul className="mt-7 space-y-5">
                  {[
                    ['Zuivert tot 99%', 'PFAS, medicijnresten, microplastics en lood worden effectief tegengehouden.'],
                    ['Compact geplaatst', 'Slechts 10,5 cm breed — past onder vrijwel elk aanrecht, staand of liggend.'],
                    ['Vakkundig geïnstalleerd', 'Onze eigen monteur sluit alles binnen 1 tot 2 uur professioneel aan.'],
                    ['Lage onderhoudskosten', 'Filters vervang je zelf, zonder gereedschap — het display laat precies zien wanneer.'],
                    ['Fluisterstil', 'Minder dan 48 dB tijdens gebruik — je merkt er nauwelijks iets van.'],
                    ['10 jaar garantie', 'Volledig gedekt, zwart op wit.'],
                  ].map(([titel, beschrijving]) => (
                    <li key={titel} className="flex items-start gap-3.5">
                      <span className="shrink-0 mt-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-amber text-ink">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      <div>
                        <p className="font-semibold">{titel}</p>
                        <p className="mt-0.5 text-sm text-white/60">{beschrijving}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* VS-badge */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-14 h-14 rounded-full bg-amber text-ink font-display font-extrabold text-sm shadow-xl shadow-amber/30 z-10 ring-4 ring-surface">
                VS
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link href="/aanmelden" className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-xl shadow-amber/25">
                Vraag vrijblijvend een offerte aan
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* MINERAALFILTER */}
        <section className="relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <div className="max-w-2xl mx-auto text-center mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Optioneel accessoire</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Het mineraalfilter, in je systeem geklikt</h2>
              <p className="mt-4 text-dim text-lg">
                Omgekeerde osmose is zó grondig dat ook goede mineralen worden meegefilterd. Het mineraalfilter klikt na het RO-filter in je systeem en brengt ze er bewust weer terug — voor een voller, natuurlijker glas water.
              </p>
            </div>

            <div className="mt-12">
              <MineraalUitleg />
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/aanmelden" className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-xl shadow-amber/25">
                Vraag het toe aan je offerte
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              <Link href="/3-weg-kraan" className="cursor-pointer text-sm font-bold text-dim hover:text-ink transition-colors underline underline-offset-4">
                Combineer met een 3-weg kraan
              </Link>
            </div>
          </div>
        </section>

        {/* TECHNISCHE GEGEVENS */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">In het kort</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Technische gegevens</h2>
            </div>
            <div className="rounded-2xl card overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['Type', 'Omgekeerde-osmose waterzuiveraar'],
                    ['Voeding', '100–240V, 50/60Hz'],
                    ['Vermogen', '96 W'],
                    ['Benodigde waterdruk', '0,1 – 0,4 MPa'],
                    ['Hoeveelheid gefilterd water', '1,58 liter per minuut'],
                    ['Totale capaciteit', '4.000 liter'],
                    ['Werktemperatuur', '4°C – 40°C, binnenshuis'],
                    ['Afmetingen', '10,5 x 42 x 43 cm (b × d × h)'],
                    ['Garantie', '10 jaar'],
                    ['Certificering', 'CE / RoHS'],
                  ].map(([naam, waarde], i) => (
                    <tr key={naam} className={i % 2 === 0 ? 'bg-bg/50' : ''}>
                      <td className="px-5 py-3 text-ink font-semibold">{naam}</td>
                      <td className="px-5 py-3 text-dim text-right">{waarde}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative">
          <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Veelgestelde vragen</h2>
            </div>
            <div className="mt-10 space-y-3">
              {[
                ['Past het systeem onder elk keukenkastje?', 'In de meeste standaardkeukens is voldoende ruimte onder de spoelbak — het systeem is slechts 10,5 cm breed en past staand of liggend. Tijdens de offerteaanvraag kijken we naar jouw specifieke situatie.'],
                ['Hoe vaak moet ik filters vervangen?', 'Dat verschilt per filter: het PPC- en CTO-filter gaan gemiddeld 12 maanden mee, het RO-filter 24 maanden. Het display op het apparaat laat precies zien wanneer het tijd is — je hoeft dit dus nooit zelf bij te houden.'],
                ['Wat betekent de TDS-waarde precies?', 'TDS staat voor de hoeveelheid opgeloste deeltjes in het water. Hoe lager de waarde, hoe minder opgeloste deeltjes er nog aanwezig zijn. Hierboven op deze pagina kan je het verschil zelf bekijken met onze interactieve meter.'],
                ['Heeft het systeem invloed op mijn waterdruk?', 'Nee. Het systeem is ontworpen om de druk op je bestaande kraan niet merkbaar te beïnvloeden.'],
                ['Kan ik het systeem ook zelf installeren?', 'Ja. Normaal installeert onze eigen monteur alles binnen 1 tot 2 uur, maar kies je ervoor om het zelf te doen, dan krijg je daarvoor €250 korting. In de tab "Installatie" hierboven staat precies hoe dat werkt.'],
                ['Wat betekenen de E1, E2 en E3 op het display?', 'Dat zijn ingebouwde veiligheidsmeldingen: E1 betekent dat het apparaat 30 minuten onafgebroken heeft gedraaid, E2 wijst op een gedetecteerde lekkage, en E3 betekent dat de waterdruk te laag is. Zie de tab "Dagelijks gebruik" hierboven voor de volledige uitleg.'],
                ['Kan ik later nog een 3-weg kraan of mineraalfilter toevoegen?', 'Ja, beide accessoires zijn los verkrijgbaar en compatibel met elk Water-zuivering systeem, ook achteraf toe te voegen.'],
                ['Hoe lang duurt de installatie?', 'De meeste installaties zijn binnen 1 tot 2 uur voltooid door een vakkundige monteur.'],
              ].map(([vraag, antwoord]) => (
                <details key={vraag} className="group rounded-2xl card p-5">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-display font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber rounded">
                    {vraag}
                    <svg className="shrink-0 transition-transform group-open:rotate-45 text-amber-dark" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                  </summary>
                  <p className="mt-3 text-sm text-dim">{antwoord}</p>
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
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Klaar voor zuiver water uit je eigen kraan?</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan en ontdek wat het osmosewatersysteem voor jouw huishouden betekent.</p>
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

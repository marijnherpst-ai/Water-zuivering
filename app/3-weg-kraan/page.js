import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import KleurenGallery from '@/components/KleurenGallery';
import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: '3-weg kraan — in 4 kleuren | Water-zuivering',
  description:
    'De 3-weg kraan van Water-zuivering: gefilterd, gewoon en gemineraliseerd water uit één kraan. In 4 afwerkingen, past bij elk systeem.',
};

const KLEUREN = [
  { name: 'Chroom', image: '/assets/img/3-weg-kraan.png', bg: 'bg-bg' },
  { name: 'Geborsteld staal', image: '/assets/img/3-weg-kraan-kleuren/geborsteld-staal.jpg', bg: 'bg-white' },
  { name: 'Goud', image: '/assets/img/3-weg-kraan-kleuren/goud.jpg', bg: 'bg-white' },
  { name: 'Zwart', image: '/assets/img/3-weg-kraan-kleuren/zwart.jpg', bg: 'bg-white' },
];

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} van de 5 sterren`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} width="14" height="14" viewBox="0 0 24 24" fill={n <= rating ? '#EDA71B' : 'none'} stroke="#EDA71B" strokeWidth="1.6" aria-hidden="true">
          <path d="M12 2l2.9 6.2 6.8.8-5 4.6 1.4 6.7L12 16.9 5.9 20.3l1.4-6.7-5-4.6 6.8-.8L12 2z" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  );
}

export default async function Page() {
  const supabase = await createClient();
  const { data: reviews } = await supabase
    .from('reviews')
    .select('id, name, city, rating, review_text, created_at')
    .eq('approved', true)
    .order('created_at', { ascending: false })
    .limit(3);

  const topReviews = reviews || [];

  return (
    <>
      <RevealObserver />
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Accessoire</span>
              <h1 className="mt-3 font-display text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05]">
                Eén kraan.<br />Drie waterstromen<span className="text-amber-dark">.</span>
              </h1>
              <p className="mt-6 text-lg text-dim max-w-md">
                Nooit meer een losse kraan of extra gat in je aanrecht. Gefilterd, gewoon én gemineraliseerd water uit één stijlvolle kraan — in de afwerking die bij jouw keuken past.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link href="/aanmelden" className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-xl shadow-amber/25">
                  Vraag vrijblijvend een offerte aan
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-dim">
                <span className="inline-flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>4 afwerkingen</span>
                <span className="inline-flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>Compatibel met elk systeem</span>
                <span className="inline-flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>Vakkundig meegeïnstalleerd</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-amber/25 via-amber/5 to-transparent -rotate-3" />
              <div className="relative rounded-[2.5rem] overflow-hidden border border-edge shadow-2xl aspect-[4/5] bg-bg flex items-center justify-center p-10">
                <img src="/assets/img/3-weg-kraan.png" alt="Water-zuivering 3-weg kraan in chroom" className="relative max-h-full w-auto object-contain" />
              </div>
              <div className="hidden sm:flex items-center gap-2 absolute -top-5 right-6 rounded-full glass shadow-lg px-4 py-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#EDA71B" aria-hidden="true"><path d="M12 2l2.9 6.2 6.8.8-5 4.6 1.4 6.7L12 16.9 5.9 20.3l1.4-6.7-5-4.6 6.8-.8L12 2z" /></svg>
                <span className="text-xs font-bold">Premium kwaliteit</span>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="relative border-y border-edge bg-surface">
          <div className="max-w-5xl mx-auto px-6 py-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:divide-x lg:divide-edge">
              <div className="text-center lg:px-2">
                <p className="font-display text-2xl font-extrabold text-amber-dark">4</p>
                <p className="mt-1 text-xs text-dim">afwerkingen</p>
              </div>
              <div className="text-center lg:px-2">
                <p className="font-display text-2xl font-extrabold text-amber-dark">3</p>
                <p className="mt-1 text-xs text-dim">waterstromen</p>
              </div>
              <div className="text-center lg:px-2">
                <p className="font-display text-2xl font-extrabold text-amber-dark">1-2 uur</p>
                <p className="mt-1 text-xs text-dim">installatie</p>
              </div>
              <div className="text-center lg:px-2">
                <p className="font-display text-2xl font-extrabold text-amber-dark">10 jaar</p>
                <p className="mt-1 text-xs text-dim">garantie</p>
              </div>
            </div>
          </div>
        </section>

        {/* KLEUREN */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Kies je stijl</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">In 4 afwerkingen</h2>
              <p className="mt-4 text-dim text-lg">Van tijdloos chroom tot een statement in goud — er is altijd een afwerking die past bij jouw keuken.</p>
            </div>
            <KleurenGallery kleuren={KLEUREN} />
            <div className="mt-12 text-center">
              <Link href="/aanmelden" className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-lg shadow-amber/25">
                Vraag vrijblijvend een offerte aan
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        {topReviews.length > 0 && (
          <section className="relative">
            <div className="max-w-6xl mx-auto px-6 py-14">
              <div className="flex items-end justify-between gap-4 mb-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Ervaringen</span>
                  <h2 className="mt-2 font-display text-xl md:text-2xl font-extrabold tracking-tight">Wat klanten van ons vinden</h2>
                </div>
                <Link href="/reviews" className="cursor-pointer hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-ink hover:text-amber-dark transition-colors shrink-0">
                  Alle reviews
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>
              <div className="grid sm:grid-cols-3 gap-5">
                {topReviews.map((review) => (
                  <div key={review.id} className="rounded-2xl card p-5">
                    <Stars rating={review.rating} />
                    <p className="mt-2.5 text-sm text-ink leading-snug line-clamp-3">&ldquo;{review.review_text}&rdquo;</p>
                    <p className="mt-3 text-xs font-semibold text-dim">{review.name}{review.city ? ` — ${review.city}` : ''}</p>
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

        {/* EEN KRAAN IN PLAATS VAN TWEE */}
        <section className="relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Waarom een 3-weg kraan</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Eén kraan in plaats van twee</h2>
              <p className="mt-4 text-dim text-lg">Een losse kraan voor gefilterd water betekent extra gaten in het aanrecht en meer rommel. Met een 3-weg kraan combineer je alles in één strak ontwerp.</p>
            </div>

            <div className="mt-14 grid md:grid-cols-5 gap-6 lg:gap-8 items-center">
              <div className="md:col-span-2 relative rounded-[2rem] overflow-hidden aspect-[4/3] grayscale opacity-60">
                <img src="/assets/img/twee-kranen.jpg" alt="Twee losse kranen op het aanrecht" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-4 py-1.5 text-xs font-bold text-ink">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></svg>
                  2 kranen — extra gedoe
                </span>
              </div>
              <div className="md:col-span-3 relative rounded-[2rem] overflow-hidden aspect-[4/3] ring-4 ring-amber shadow-2xl shadow-amber/25 md:scale-[1.05] z-10">
                <img src="/assets/img/een-kraan.jpg" alt="Eén elegante 3-weg kraan" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 rounded-full bg-amber px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-ink">
                  Beste keuze
                </span>
                <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-amber px-4 py-1.5 text-xs font-bold text-ink">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  1 kraan — alles-in-één
                </span>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link href="/aanmelden" className="cursor-pointer inline-flex items-center gap-2 rounded-full border-2 border-ink px-7 py-3.5 text-sm font-bold text-ink hover:bg-ink hover:text-white transition-colors">
                Ontdek wat het voor jou kost
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* VOORDELEN */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-[2rem] overflow-hidden border border-edge bg-white aspect-[4/5] flex items-center justify-center p-10">
                <img src="/assets/img/3-weg-kraan-kleuren/geborsteld-staal.jpg" alt="Water-zuivering 3-weg kraan in geborsteld staal" className="max-h-full w-auto object-contain" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Voordelen</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Waarom kiezen voor de 3-weg kraan?</h2>
              <ul className="mt-8 space-y-6">
                <li className="flex items-start gap-3.5">
                  <svg className="shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <div>
                    <p className="font-display font-bold">Drie waterstromen, één kraan</p>
                    <p className="mt-1 text-sm text-dim">Gefilterd, gewoon en gemineraliseerd water — met één simpele omschakelaar.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <svg className="shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <div>
                    <p className="font-display font-bold">Compatibel met elk systeem</p>
                    <p className="mt-1 text-sm text-dim">Werkt met elk Water-zuivering osmosesysteem, ook achteraf toe te voegen.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <svg className="shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <div>
                    <p className="font-display font-bold">Geen extra gat nodig</p>
                    <p className="mt-1 text-sm text-dim">Vervangt je bestaande kraan — geen extra boorgat in je aanrecht.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <svg className="shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <div>
                    <p className="font-display font-bold">Vakkundig meegeïnstalleerd</p>
                    <p className="mt-1 text-sm text-dim">Onze monteur sluit de kraan meteen mee aan bij de installatie van je systeem.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <svg className="shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <div>
                    <p className="font-display font-bold">Premium afwerking, 10 jaar garantie</p>
                    <p className="mt-1 text-sm text-dim">Zorgvuldig geselecteerde materialen, net als de rest van je systeem volledig gedekt.</p>
                  </div>
                </li>
              </ul>
              <Link href="/aanmelden" className="cursor-pointer mt-9 inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-lg shadow-amber/25">
                Vraag vrijblijvend een offerte aan
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* HET HELE SYSTEEM */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Het complete plaatje</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Onderdeel van je hele systeem</h2>
              <p className="mt-4 text-dim text-lg">De 3-weg kraan is het zichtbare puntje op je aanrecht — daaronder werkt het volledige Water-zuivering systeem.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 lg:items-stretch">
              <Link href="/aanmelden" className="group reveal cursor-pointer relative rounded-[2rem] bg-ink text-white p-8 flex flex-col shadow-2xl shadow-ink/25 hover:shadow-amber/20 transition-shadow">
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
                  <span className="flex items-center justify-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-bold text-ink group-hover:bg-white transition-colors">
                    Vraag offerte aan
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </div>
              </Link>

              <Link href="/aanmelden" className="group reveal cursor-pointer relative rounded-[2rem] card p-8 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all">
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
                  <span className="flex items-center justify-center gap-2 rounded-full border-2 border-ink px-6 py-3 text-sm font-bold text-ink group-hover:bg-bg transition-colors">
                    Meer informatie
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Veelgestelde vragen</h2>
            </div>
            <div className="mt-10 space-y-3">
              <details className="group rounded-2xl card p-5">
                <summary className="cursor-pointer list-none flex items-center justify-between font-display font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber rounded">
                  Past de 3-weg kraan op elk aanrecht?
                  <svg className="shrink-0 transition-transform group-open:rotate-45 text-amber-dark" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                </summary>
                <p className="mt-3 text-sm text-dim">In de meeste gevallen wel — de kraan past op een standaard boorgat. Tijdens de offerteaanvraag kijken we naar jouw specifieke situatie.</p>
              </details>
              <details className="group rounded-2xl card p-5">
                <summary className="cursor-pointer list-none flex items-center justify-between font-display font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber rounded">
                  Kan ik de kraan later nog toevoegen aan mijn systeem?
                  <svg className="shrink-0 transition-transform group-open:rotate-45 text-amber-dark" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                </summary>
                <p className="mt-3 text-sm text-dim">Ja, de 3-weg kraan is compatibel met elk Water-zuivering systeem en kan ook achteraf nog worden toegevoegd.</p>
              </details>
              <details className="group rounded-2xl card p-5">
                <summary className="cursor-pointer list-none flex items-center justify-between font-display font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber rounded">
                  Wordt de kraan samen met het systeem geïnstalleerd?
                  <svg className="shrink-0 transition-transform group-open:rotate-45 text-amber-dark" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                </summary>
                <p className="mt-3 text-sm text-dim">Ja, onze monteur sluit de kraan in één moeite mee aan tijdens de installatie van je osmosesysteem — geen aparte afspraak nodig.</p>
              </details>
              <details className="group rounded-2xl card p-5">
                <summary className="cursor-pointer list-none flex items-center justify-between font-display font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber rounded">
                  Kost een andere afwerking extra?
                  <svg className="shrink-0 transition-transform group-open:rotate-45 text-amber-dark" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                </summary>
                <p className="mt-3 text-sm text-dim">Dat bespreken we graag tijdens je offerteaanvraag — vraag het gerust mee, dan geven we direct duidelijkheid.</p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Welke kleur past bij jouw keuken?</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan — we bespreken graag welke afwerking het beste past.</p>
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

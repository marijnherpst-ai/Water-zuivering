import Image from 'next/image';
import Link from 'next/link';
import RevealObserver from '@/components/RevealObserver';
import GiveawayCountdown from '@/components/actie/GiveawayCountdown';
import PrizeWheel from '@/components/actie/PrizeWheel';
import GiveawayForm from '@/components/actie/GiveawayForm';
import GiveawayCalculator from '@/components/actie/GiveawayCalculator';
import MaatcheckPicker from '@/components/maatcheck/MaatcheckPicker';
import { createClient } from '@/lib/supabase/server';

// Deze pagina is bewust niet gelinkt vanuit de site-navigatie of sitemap,
// en staat op noindex — enkel bereikbaar via een directe link (bv. voor een campagne).
export const dynamic = 'force-dynamic';
export const metadata = {
  alternates: { canonical: '/actie/win-een-waterzuiveraar' },
  title: 'Win een gratis waterzuiveraar — Water-zuivering',
  description: 'Doe gratis mee en maak kans op een compleet Water-zuivering osmosewatersysteem.',
  robots: { index: false, follow: false },
};

const VOORDELEN = [
  'Zuiverder drinkwater rechtstreeks uit de kraan',
  'Omgekeerde osmose-technologie',
  'Compact ontwerp voor in de keukenkast',
  'Hoogwaardige 3-traps filtering',
  'Compleet waterzuiveringssysteem, kant-en-klaar geïnstalleerd',
];

const WAAROM = [
  {
    titel: 'Onzuiverheden eruit gefilterd',
    tekst: 'PFAS, medicijnresten, microplastics en lood worden er met omgekeerde osmose voor 99% uitgefilterd.',
    icoon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2C12 2 5 10.5 5 15a7 7 0 0014 0c0-4.5-7-13-7-13z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
    ),
  },
  {
    titel: 'Minder kalk, meer smaak',
    tekst: 'Geen kalkaanslag meer op kranen en in de waterkoker, en een frissere smaak in koffie, thee en drinkwater.',
    icoon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
    ),
  },
  {
    titel: 'Nooit meer sjouwen',
    tekst: 'Geen flessen water of literpakken meer uit de supermarkt slepen — vers water direct uit je eigen kraan.',
    icoon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.7" /><path d="M4 9h16M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
    ),
  },
  {
    titel: 'Minder plastic afval',
    tekst: 'Geen lege plastic flessen meer — beter voor je portemonnee en voor het milieu.',
    icoon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" /></svg>
    ),
  },
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

export default async function GiveawayPage() {
  const supabase = await createClient();
  const { data: reviewData } = await supabase
    .from('reviews')
    .select('id, name, city, rating, review_text, created_at')
    .eq('approved', true)
    .order('created_at', { ascending: false });

  const reviews = reviewData || [];
  const topReviews = reviews.slice(0, 3);
  const reviewCount = reviews.length;
  const avgRating = reviewCount > 0
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviewCount).toFixed(1)
    : null;

  return (
    <>
      <RevealObserver />

      {/* Minimale topbalk */}
      <header className="absolute top-0 inset-x-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-center sm:justify-start">
          <Link href="/" className="flex items-center gap-2.5 font-display font-extrabold text-lg tracking-tight text-white">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2C12 2 5 10.5 5 15a7 7 0 0014 0c0-4.5-7-13-7-13z" fill="#0B0D10" /></svg>
            </span>
            Water-zuivering
          </Link>
        </div>
      </header>

      <main className="bg-white">
        {/* HERO */}
        <section className="relative overflow-hidden bg-ink text-white min-h-[100svh] flex items-center">
          <div className="glow drift w-[560px] h-[560px] bg-amber/25 -top-40 -left-40" />
          <div className="glow drift2 w-[420px] h-[420px] bg-amber/15 bottom-0 -right-32" />

          <div className="relative max-w-3xl mx-auto px-6 py-28 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber">
              <span className="w-1.5 h-1.5 rounded-full bg-amber pulse" />
              Exclusieve actie
            </span>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
              Een gratis waterzuiveraar.<br />Jij kunt hem winnen.
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-lg mx-auto">
              Over 5 dagen draaien we het rad en maken we de winnaar bekend. Doe gratis mee en maak kans op een compleet waterzuiveringssysteem.
            </p>

            <div className="mt-10">
              <GiveawayCountdown variant="dark" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-white/50">De trekking vindt plaats over</p>
            </div>

            <div className="mt-10">
              <a
                href="#meedoen"
                className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-8 py-4 text-sm font-bold text-ink hover:bg-white transition-colors shadow-2xl shadow-amber/30"
              >
                DOE MEE & MAAK KANS
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <p className="mt-3 text-xs text-white/50">Deelname is gratis. Geen aankoop verplicht.</p>
            </div>
          </div>
        </section>

        {/* HET RAD */}
        <section className="relative overflow-hidden">
          <div className="max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
            <span className="reveal text-xs font-bold uppercase tracking-widest text-amber-dark">Het rad</span>
            <h2 className="reveal mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Wie wint de gratis waterzuiveraar?</h2>
            <p className="reveal mt-4 text-dim text-lg">Draai het rad voor de lol — en schrijf je hieronder in voor de echte trekking.</p>

            <div className="reveal mt-14">
              <PrizeWheel />
            </div>

            <a
              href="#meedoen"
              className="cursor-pointer mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-bold text-white hover:bg-amber hover:text-ink transition-colors shadow-xl shadow-ink/20"
            >
              DOE MEE & MAAK KANS
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
        </section>

        {/* INSCHRIJVEN */}
        <section id="meedoen" className="relative bg-bg border-y border-edge overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/10 top-0 left-1/2 -translate-x-1/2" />
          <div className="relative max-w-3xl mx-auto px-6 py-20 md:py-28">
            <div className="reveal">
              <GiveawayForm />
            </div>
          </div>
        </section>

        {/* PRODUCTPRESENTATIE */}
        <section className="relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <div className="max-w-2xl mx-auto text-center mb-14 reveal">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">De prijs</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Dit kun jij winnen</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative reveal order-2 lg:order-1">
                <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-amber/25 via-amber/5 to-transparent -rotate-3" />
                <div className="relative rounded-[2.5rem] overflow-hidden border border-edge shadow-2xl aspect-[4/5]">
                  <Image src="/assets/img/countertop.png" alt="Water-zuivering osmosewatersysteem, de hoofdprijs van deze actie" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                </div>
              </div>

              <div className="order-1 lg:order-2 reveal">
                <p className="font-display text-2xl font-extrabold tracking-tight">Compleet osmosewatersysteem</p>
                <p className="mt-2 text-dim">Vakkundig geïnstalleerd door onze eigen monteur — kant-en-klaar voor gebruik.</p>
                <ul className="mt-7 space-y-4">
                  {VOORDELEN.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="shrink-0 mt-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-amber/12 text-amber-dark">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      <span className="text-ink font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-sm text-dim">Ter waarde van een compleet, professioneel geïnstalleerd waterzuiveringssysteem.</p>
              </div>
            </div>
          </div>
        </section>

        {/* BESPARING */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
            <div className="max-w-2xl mx-auto text-center mb-10 reveal">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Reken het uit</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Wat zou dit systeem jou besparen?</h2>
              <p className="mt-4 text-dim text-lg">Los van de winactie: reken uit hoeveel je nu al kwijt bent aan flessenwater.</p>
            </div>
            <div className="reveal">
              <GiveawayCalculator />
            </div>
          </div>
        </section>

        {/* WAAROM EEN WATERZUIVERAAR */}
        <section className="relative bg-bg border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <div className="max-w-2xl mx-auto text-center mb-14 reveal">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Waarom een waterzuiveraar?</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Meer dan alleen een leuke prijs</h2>
              <p className="mt-4 text-dim text-lg">Dit verandert er echt als je overstapt op gezuiverd kraanwater.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {WAAROM.map((item) => (
                <div key={item.titel} className="reveal rounded-3xl bg-white border border-edge p-7 flex items-start gap-4">
                  <span className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-amber/12 text-amber-dark">{item.icoon}</span>
                  <div>
                    <p className="font-display font-bold text-lg">{item.titel}</p>
                    <p className="mt-1.5 text-sm text-dim">{item.tekst}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        {topReviews.length > 0 && (
          <section className="relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
              <div className="max-w-2xl mx-auto text-center mb-14 reveal">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Ervaringen</span>
                <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Wat klanten van ons vinden</h2>
                {avgRating && (
                  <div className="mt-4 flex items-center justify-center gap-2.5">
                    <Stars rating={Math.round(avgRating)} />
                    <span className="text-sm font-bold text-ink">{avgRating}</span>
                    <span className="text-sm text-dim">({reviewCount} reviews)</span>
                  </div>
                )}
              </div>

              <div className="grid sm:grid-cols-3 gap-5">
                {topReviews.map((review) => (
                  <div key={review.id} className="reveal rounded-2xl card p-6 bg-white">
                    <Stars rating={review.rating} />
                    <p className="mt-3 text-sm text-ink leading-snug line-clamp-4">&ldquo;{review.review_text}&rdquo;</p>
                    <p className="mt-4 text-xs font-semibold text-dim">{review.name}{review.city ? ` — ${review.city}` : ''}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* URGENTIE */}
        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-2xl mx-auto px-6 py-20 md:py-28 text-center">
            <span className="reveal text-xs font-bold uppercase tracking-widest text-amber">Nog maar 5 dagen</span>
            <h2 className="reveal mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">De klok tikt door</h2>
            <p className="reveal mt-4 text-white/70">Over 5 dagen sluiten we de inschrijving en draaien we het rad. Daarna is meedoen niet meer mogelijk.</p>
            <div className="reveal mt-10">
              <GiveawayCountdown variant="dark" />
            </div>
            <a
              href="#meedoen"
              className="reveal cursor-pointer mt-10 inline-flex items-center gap-2 rounded-full bg-amber px-8 py-4 text-sm font-bold text-ink hover:bg-white transition-colors shadow-2xl shadow-amber/30"
            >
              GRATIS MEEDOEN
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
        </section>

        {/* MAATCHECK */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
            <div className="max-w-2xl mx-auto text-center mb-10 reveal">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Past het bij jou?</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Bekijk 'm live in je eigen keuken</h2>
              <p className="mt-4 text-dim text-lg">Zet het apparaat op ware grootte in je kastje — live met je camera, of met een foto.</p>
            </div>
            <div className="reveal">
              <MaatcheckPicker />
            </div>
          </div>
        </section>

        {/* VERTROUWEN */}
        <section className="relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-20 md:py-28 text-center">
            <span className="reveal text-xs font-bold uppercase tracking-widest text-amber-dark">Waarom doen we deze actie?</span>
            <h2 className="reveal mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zuiver water, voor iedereen om te ontdekken</h2>
            <p className="reveal mt-5 text-dim text-lg max-w-2xl mx-auto">
              We willen zoveel mogelijk mensen kennis laten maken met de voordelen van gezuiverd kraanwater — minder plastic, minder gesjouw, en water dat gewoon beter smaakt. Daarom geven we één compleet systeem gratis weg.
            </p>

            <div className="reveal mt-12 grid sm:grid-cols-3 gap-6 text-left">
              <div className="rounded-2xl card p-6">
                <p className="font-display font-bold text-sm">Snel geïnstalleerd</p>
                <p className="mt-1.5 text-sm text-dim">Binnen 1 tot 2 uur vakkundig aangesloten door onze eigen monteur.</p>
              </div>
              <div className="rounded-2xl card p-6">
                <p className="font-display font-bold text-sm">10 jaar garantie</p>
                <p className="mt-1.5 text-sm text-dim">Op ieder systeem dat wij installeren.</p>
              </div>
              <div className="rounded-2xl card p-6">
                <p className="font-display font-bold text-sm">Nederlandse service</p>
                <p className="mt-1.5 text-sm text-dim">Eigen monteurs, rechtstreeks bereikbaar.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Minimale footer */}
      <footer className="bg-surface border-t border-edge">
        <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-dim text-center sm:text-left">
          <p>&copy; 2026 Water-zuivering · KVK 88718301 · Industrieweg 110, 2651 BD Berkel en Rodenrijs</p>
          <div className="flex items-center gap-5">
            <Link href="/privacybeleid" className="hover:text-ink transition-colors">Privacybeleid</Link>
            <Link href="/algemene-voorwaarden" className="hover:text-ink transition-colors">Voorwaarden</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

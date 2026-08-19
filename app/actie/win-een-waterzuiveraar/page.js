import Image from 'next/image';
import Link from 'next/link';
import RevealObserver from '@/components/RevealObserver';
import GiveawayCountdown from '@/components/actie/GiveawayCountdown';
import PrizeWheel from '@/components/actie/PrizeWheel';
import GiveawayForm from '@/components/actie/GiveawayForm';
import { createClient } from '@/lib/supabase/server';

// Deze pagina is bewust niet gelinkt vanuit de site-navigatie of sitemap,
// en staat op noindex — enkel bereikbaar via een directe link (bv. voor een campagne).
export const dynamic = 'force-dynamic';
export const metadata = {
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

export default async function GiveawayPage() {
  const supabase = await createClient();
  const { data: ratingStats } = await supabase
    .from('reviews')
    .select('rating')
    .eq('approved', true);

  const reviewCount = ratingStats?.length || 0;
  const avgRating = reviewCount > 0
    ? (ratingStats.reduce((sum, r) => sum + r.rating, 0) / reviewCount).toFixed(1)
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
                <p className="font-display font-bold text-sm">{avgRating ? `${avgRating} / 5 sterren` : 'Betrouwbare service'}</p>
                <p className="mt-1.5 text-sm text-dim">{avgRating ? `Gemiddelde beoordeling van ${reviewCount} klanten.` : 'Duizenden tevreden klanten.'}</p>
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
          <p>&copy; 2026 Jd services B.V. (Water-zuivering) · KVK 83174044 · Veldkersweg 16, 3053 JR Rotterdam</p>
          <div className="flex items-center gap-5">
            <Link href="/privacybeleid" className="hover:text-ink transition-colors">Privacybeleid</Link>
            <Link href="/algemene-voorwaarden" className="hover:text-ink transition-colors">Voorwaarden</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

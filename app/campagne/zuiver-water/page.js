import Link from 'next/link';
import RevealObserver from '@/components/RevealObserver';
import ExperienceLoader from '@/components/campagne/experience/ExperienceLoader';
import DrinkScene from '@/components/campagne/DrinkScene';
import { createClient } from '@/lib/supabase/server';

// Campagne-landingspagina: één doorlopende, scrollgestuurde 3D-reis van kraan
// tot glas. Bewust niet gelinkt vanuit de site-navigatie of sitemap en op
// noindex — alleen bereikbaar via de advertentie-link.
export const dynamic = 'force-dynamic';
export const metadata = {
  alternates: { canonical: '/campagne/zuiver-water' },
  title: 'Zuiver water. Recht uit de kraan. — Water-zuivering',
  description:
    'Reis mee met een druppel water: van je kraan, door drie filters en het mineralen-element, terug naar je glas. Ontdek in 3D hoe het Water-zuivering osmosesysteem werkt.',
  robots: { index: false, follow: false },
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

export default async function CampagnePage() {
  const supabase = await createClient();
  const { data: ratingRows } = await supabase.from('reviews').select('rating').eq('approved', true);
  const reviewCount = ratingRows?.length || 0;
  const avgRating = reviewCount > 0 ? (ratingRows.reduce((sum, r) => sum + r.rating, 0) / reviewCount).toFixed(1) : null;

  return (
    <>
      <RevealObserver />

      {/* Minimale, vaste topbalk */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 font-display font-extrabold text-lg tracking-tight text-ink">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-ink">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2C12 2 5 10.5 5 15a7 7 0 0014 0c0-4.5-7-13-7-13z" fill="#EDA71B" /></svg>
            </span>
            Water-zuivering
          </Link>
          <Link href="/aanmelden" className="cursor-pointer inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white hover:bg-amber hover:text-ink transition-colors shadow-lg shadow-ink/15">
            Vraag advies aan
          </Link>
        </div>
      </header>

      <main>
        {/* Scènes 1 t/m 7: de scrollgestuurde 3D-reis */}
        <ExperienceLoader />

        {/* Scène 8: de vrouw drinkt het water */}
        <DrinkScene />

        {/* CTA */}
        <section className="relative bg-bg border-t border-edge">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <div className="grid lg:grid-cols-[1.2fr,1fr] gap-10 lg:gap-16 items-center">
              <div className="reveal">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-dark">Volgende stap</p>
                <h2 className="mt-4 font-display text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.05]">Ontdek jouw ideale waterzuiveringssysteem</h2>
                <p className="mt-5 text-dim text-lg max-w-xl">Vrijblijvend advies op maat van je keuken, binnen één werkdag reactie. Installatie door onze eigen monteur in 1 tot 2 uur, 10 jaar garantie inbegrepen.</p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link href="/aanmelden" className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-xl shadow-amber/25">
                    Vraag een advies aan
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                  <Link href="/osmosesysteem" className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink px-7 py-4 text-sm font-bold text-ink hover:bg-ink hover:text-white transition-colors">
                    Bekijk waterzuiveraars
                  </Link>
                </div>
              </div>

              <div className="reveal rounded-[2rem] card p-7 sm:p-8">
                {avgRating && (
                  <div className="flex items-center gap-3">
                    <Stars rating={avgRating} />
                    <p className="text-sm font-semibold text-dim">{avgRating} van de 5 — {reviewCount} reviews</p>
                  </div>
                )}
                <ul className="mt-5 space-y-3.5 text-sm">
                  {[
                    ['99%', 'van de onzuiverheden eruit gefilterd'],
                    ['10,5 cm', 'breed — past in vrijwel elk keukenkastje'],
                    ['1–2 uur', 'geïnstalleerd door onze eigen monteur'],
                    ['10 jaar', 'garantie, zwart op wit'],
                  ].map(([k, v]) => (
                    <li key={k} className="flex items-baseline gap-3">
                      <span className="font-display font-extrabold text-amber-dark text-lg shrink-0 w-20">{k}</span>
                      <span className="text-dim">{v}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs text-dim">
                  Liever even bellen? <a href="tel:+31626944877" className="font-bold text-ink hover:text-amber-dark">06 26 94 48 77</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-surface border-t border-edge">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-dim text-center sm:text-left">
          <p>&copy; 2026 Water-zuivering · KVK 88718301 · Industrieweg 110, 2651 BD Berkel en Rodenrijs</p>
          <div className="flex items-center gap-5">
            <Link href="/privacybeleid" className="hover:text-ink transition-colors">Privacybeleid</Link>
            <Link href="/algemene-voorwaarden" className="hover:text-ink transition-colors">Algemene voorwaarden</Link>
            <Link href="/contact" className="hover:text-ink transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

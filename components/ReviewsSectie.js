import Link from 'next/link';
import RatingSchema from '@/components/RatingSchema';
import { createClient } from '@/lib/supabase/server';

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

export default async function ReviewsSectie() {
  const supabase = await createClient();
  const { data: alle } = await supabase
    .from('reviews')
    .select('id, name, city, rating, review_text, created_at')
    .eq('approved', true)
    .order('created_at', { ascending: false });

  const reviews = alle || [];
  if (reviews.length === 0) return null;

  const top = reviews.slice(0, 3);
  const gemiddelde = (reviews.reduce((som, r) => som + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <>
      <RatingSchema rating={gemiddelde} count={reviews.length} />
      <section className="relative bg-surface border-y border-edge overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="flex items-end justify-between gap-4 mb-8">
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
            {top.map((review) => (
              <div key={review.id} className="rounded-2xl card p-5 bg-white">
                <Stars rating={review.rating} />
                <p className="mt-2.5 text-sm text-ink leading-snug line-clamp-4">&ldquo;{review.review_text}&rdquo;</p>
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
    </>
  );
}

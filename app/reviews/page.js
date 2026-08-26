import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReviewForm from '@/components/ReviewForm';
import { createClient } from '@/lib/supabase/server';

export const metadata = {
  alternates: { canonical: '/reviews' },
  title: 'Reviews — Water-zuivering',
  description: 'Lees ervaringen van klanten van Water-zuivering en laat zelf een review achter.',
};

export const dynamic = 'force-dynamic';

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} van de 5 sterren`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} width="16" height="16" viewBox="0 0 24 24" fill={n <= rating ? '#EDA71B' : 'none'} stroke="#EDA71B" strokeWidth="1.6" aria-hidden="true">
          <path d="M12 2l2.9 6.2 6.8.8-5 4.6 1.4 6.7L12 16.9 5.9 20.3l1.4-6.7-5-4.6 6.8-.8L12 2z" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  );
}

export default async function ReviewsPage() {
  const supabase = await createClient();
  const { data: reviews } = await supabase
    .from('reviews')
    .select('id, name, city, rating, review_text, created_at')
    .eq('approved', true)
    .order('created_at', { ascending: false });

  const list = reviews || [];
  const average = list.length ? (list.reduce((sum, r) => sum + r.rating, 0) / list.length).toFixed(1) : null;

  return (
    <>
      <Header />

      <main>
        <section className="relative">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Ervaringen</span>
              <h1 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Wat klanten zeggen</h1>
              {average && (
                <div className="mt-4 flex items-center justify-center gap-2">
                  <Stars rating={Math.round(average)} />
                  <span className="text-sm font-semibold text-dim">{average} van de 5 — {list.length} reviews</span>
                </div>
              )}
            </div>

            <div className="mt-14 grid lg:grid-cols-3 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-2">
                {list.length === 0 ? (
                  <p className="text-dim">Nog geen reviews — wees de eerste die er een achterlaat.</p>
                ) : (
                  <div className="grid sm:grid-cols-2 gap-6">
                    {list.map((review) => (
                      <div key={review.id} className="rounded-2xl card p-6">
                        <Stars rating={review.rating} />
                        <p className="mt-3 text-ink leading-snug">&ldquo;{review.review_text}&rdquo;</p>
                        <div className="mt-4 flex items-center gap-3">
                          <span className="flex items-center justify-center w-9 h-9 rounded-full bg-amber/15 text-amber-dark font-display font-bold text-sm">
                            {review.name.charAt(0).toUpperCase()}
                          </span>
                          <div>
                            <p className="font-display font-bold text-sm">{review.name}</p>
                            {review.city && <p className="text-xs text-dim">{review.city}</p>}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="lg:sticky lg:top-28">
                <ReviewForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

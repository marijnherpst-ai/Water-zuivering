import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import MobileStickyCta from '@/components/MobileStickyCta';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

export const metadata = {
  alternates: { canonical: '/waterzuiveraar/den-haag' },
  title: 'Waterzuiveraar Den Haag — installatie aan huis | Water-zuivering',
  description:
    'Water-zuivering installeert osmosewatersystemen in Den Haag en omgeving. Lees wat klanten uit Den Haag ervan vinden en vraag een offerte aan.',
};

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

export default async function WaterzuiveraarDenHaagPage() {
  const supabase = await createClient();
  const { data: reviews } = await supabase
    .from('reviews')
    .select('id, name, city, rating, review_text, created_at')
    .eq('approved', true)
    .in('city', ['Den Haag', 'The Hague'])
    .order('created_at', { ascending: false });

  const denHaagReviews = reviews || [];
  const reviewCount = denHaagReviews.length;
  const avgRating = reviewCount > 0 ? (denHaagReviews.reduce((sum, r) => sum + r.rating, 0) / reviewCount).toFixed(1) : null;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Waterzuiveraar per stad', url: 'https://www.water-zuivering.nl/waterzuiveraar' },
          { name: 'Den Haag', url: 'https://www.water-zuivering.nl/waterzuiveraar/den-haag' },
        ]}
      />
      <RevealObserver />
      <Header />

      <main>
        <section id="hero" className="relative overflow-hidden">
          <div className="relative h-[46vh] min-h-[320px]">
            <Image src="/assets/img/locaties/den-haag.jpg" alt="Het Binnenhof met Hofvijver in Den Haag" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0">
              <div className="max-w-4xl mx-auto px-6 pb-10 text-white">
                <span className="text-xs font-bold uppercase tracking-widest text-amber">Werkgebied · Den Haag</span>
                <h1 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Waterzuiveraar installeren in Den Haag</h1>
              </div>
            </div>
          </div>
          <p className="max-w-4xl mx-auto px-6 pt-3 text-[11px] text-dim">Foto: Markus Bernet, via Wikimedia Commons (CC BY-SA 2.5)</p>
        </section>

        <section className="relative">
          <div className="max-w-3xl mx-auto px-6 py-14 md:py-20">
            <p className="text-lg text-dim">
              Ook in Den Haag en de kustregio installeren we regelmatig. Een monteur van Water-zuivering plaatst het systeem meestal binnen 1 tot 2 uur, netjes weggewerkt in het keukenkastje onder de spoelbak.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Osmosewatersysteem met 3 filtertrappen — verwijdert chloor, PFAS, medicijnresten en microplastics',
                'Vakkundige installatie door onze eigen monteur, geen onderaannemers',
                '10 jaar garantie, ook in Den Haag en omgeving',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-dim">
                  <svg className="shrink-0 mt-1" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {reviewCount > 0 && (
          <section className="relative bg-surface border-y border-edge">
            <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Ervaringen</span>
                  <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Klanten in Den Haag aan het woord</h2>
                </div>
                <div className="flex items-center gap-2">
                  <Stars rating={Math.round(avgRating)} />
                  <span className="text-sm font-semibold text-dim">{avgRating} van de 5 — {reviewCount} reviews uit Den Haag</span>
                </div>
              </div>
              <div className="mt-10 grid md:grid-cols-2 gap-5">
                {denHaagReviews.map((review) => (
                  <div key={review.id} className="rounded-2xl card p-6">
                    <Stars rating={review.rating} />
                    <p className="mt-3 text-sm text-dim">&ldquo;{review.review_text}&rdquo;</p>
                    <p className="mt-4 text-sm font-bold">{review.name} <span className="font-normal text-dim">— Den Haag</span></p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-dim">Meer lezen? Bekijk <Link href="/reviews" className="underline hover:text-ink">alle reviews</Link> van klanten door heel Nederland.</p>
            </div>
          </section>
        )}

        <section className="relative">
          <div className="max-w-3xl mx-auto px-6 py-14 md:py-20">
            <h2 className="font-display text-2xl font-extrabold tracking-tight">Benieuwd hoe het werkt?</h2>
            <p className="mt-4 text-dim">Bekijk de interactieve uitleg van het 3-traps filtratieproces, of check meteen of het systeem in uw keukenkastje past.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/osmosesysteem" className="cursor-pointer inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3 text-sm font-bold text-ink hover:bg-ink hover:text-white transition-colors">
                Bekijk het systeem
              </Link>
              <Link href="/maatcheck" className="cursor-pointer inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3 text-sm font-bold text-ink hover:bg-ink hover:text-white transition-colors">
                Doe de Maatcheck
              </Link>
            </div>

            <div className="mt-14 pt-10 border-t border-edge">
              <h2 className="font-display text-lg font-extrabold tracking-tight">Ook actief in</h2>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <Link href="/waterzuiveraar/rotterdam" className="cursor-pointer underline hover:text-ink text-dim">Rotterdam</Link>
                <Link href="/waterzuiveraar/utrecht" className="cursor-pointer underline hover:text-ink text-dim">Utrecht</Link>
                <Link href="/waterzuiveraar" className="cursor-pointer underline hover:text-ink text-dim">Alle werkgebieden</Link>
              </div>
            </div>

            <Link href="/aanmelden" className="cursor-pointer mt-10 inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-xl shadow-amber/25">
              Vraag vrijblijvend een offerte aan
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyCta />
    </>
  );
}

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
  alternates: { canonical: '/waterzuiveraar/rotterdam' },
  title: 'Waterzuiveraar Rotterdam — installatie aan huis | Water-zuivering',
  description:
    'Water-zuivering is gevestigd in Rotterdam en installeert osmosewatersystemen in de hele stad en regio. Lees ervaringen van klanten uit Rotterdam.',
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

export default async function WaterzuiveraarRotterdamPage() {
  const supabase = await createClient();
  const { data: reviews } = await supabase
    .from('reviews')
    .select('id, name, city, rating, review_text, created_at')
    .eq('approved', true)
    .eq('city', 'Rotterdam')
    .order('created_at', { ascending: false });

  const rotterdamReviews = reviews || [];
  const reviewCount = rotterdamReviews.length;
  const avgRating = reviewCount > 0 ? (rotterdamReviews.reduce((sum, r) => sum + r.rating, 0) / reviewCount).toFixed(1) : null;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Waterzuiveraar per stad', url: 'https://www.water-zuivering.nl/waterzuiveraar' },
          { name: 'Rotterdam', url: 'https://www.water-zuivering.nl/waterzuiveraar/rotterdam' },
        ]}
      />
      <RevealObserver />
      <Header />

      <main>
        <section id="hero" className="relative overflow-hidden">
          <div className="relative h-[46vh] min-h-[320px]">
            <Image src="/assets/img/locaties/rotterdam.jpg" alt="Skyline van Rotterdam, gezien vanaf de Euromast" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0">
              <div className="max-w-4xl mx-auto px-6 pb-10 text-white">
                <span className="text-xs font-bold uppercase tracking-widest text-amber">Werkgebied · Rotterdam</span>
                <h1 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Waterzuiveraar installeren in Rotterdam</h1>
              </div>
            </div>
          </div>
          <p className="max-w-4xl mx-auto px-6 pt-3 text-[11px] text-dim">Foto: Kristoffer Trolle, via Wikimedia Commons (CC BY 2.0)</p>
        </section>

        <section className="relative">
          <div className="max-w-3xl mx-auto px-6 py-14 md:py-20">
            <p className="text-lg text-dim">
              Water-zuivering (Jd services B.V.) is gevestigd aan de Veldkersweg in Rotterdam — deze stad is dus letterlijk waar we vandaan komen. Onze monteurs rijden dagelijks door Rotterdam en de wijde regio om osmosewatersystemen te installeren, van Kralingen tot Delfshaven.
            </p>
            <p className="mt-4 text-dim">
              Het systeem zelf is overal in Nederland hetzelfde: een 3-traps osmosewatersysteem dat chloor, PFAS, medicijnresten en microplastics uit uw kraanwater filtert, compact geplaatst in het keukenkastje. Wat in Rotterdam wél anders is: omdat we hier gevestigd zijn, is een afspraak vaak sneller in te plannen dan verder weg in het land.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/osmosesysteem" className="cursor-pointer inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3 text-sm font-bold text-ink hover:bg-ink hover:text-white transition-colors">
                Hoe het systeem werkt
              </Link>
              <Link href="/aanmelden" className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-lg shadow-amber/25">
                Vraag een offerte aan
              </Link>
            </div>
          </div>
        </section>

        {reviewCount > 0 && (
          <section className="relative bg-surface border-y border-edge">
            <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Ervaringen</span>
                  <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Klanten in Rotterdam aan het woord</h2>
                </div>
                <div className="flex items-center gap-2">
                  <Stars rating={Math.round(avgRating)} />
                  <span className="text-sm font-semibold text-dim">{avgRating} van de 5 — {reviewCount} reviews uit Rotterdam</span>
                </div>
              </div>
              <div className="mt-10 grid md:grid-cols-2 gap-5">
                {rotterdamReviews.map((review) => (
                  <div key={review.id} className="rounded-2xl card p-6">
                    <Stars rating={review.rating} />
                    <p className="mt-3 text-sm text-dim">&ldquo;{review.review_text}&rdquo;</p>
                    <p className="mt-4 text-sm font-bold">{review.name} <span className="font-normal text-dim">— Rotterdam</span></p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-dim">Meer lezen? Bekijk <Link href="/reviews" className="underline hover:text-ink">alle reviews</Link> van klanten door heel Nederland.</p>
            </div>
          </section>
        )}

        <section className="relative">
          <div className="max-w-3xl mx-auto px-6 py-14 md:py-20">
            <h2 className="font-display text-2xl font-extrabold tracking-tight">Wat kost een waterzuiveraar in Rotterdam?</h2>
            <p className="mt-4 text-dim">De prijs is landelijk hetzelfde — installatie in Rotterdam kost dus niet meer of minder dan elders. Bereken zelf wat u zou besparen ten opzichte van flessenwater, of lees op onze kennisbank precies wat een systeem kost.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/besparing" className="cursor-pointer inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3 text-sm font-bold text-ink hover:bg-ink hover:text-white transition-colors">
                Bereken uw besparing
              </Link>
              <Link href="/kennisbank/wat-kost-een-waterzuiveringssysteem" className="cursor-pointer inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3 text-sm font-bold text-ink hover:bg-ink hover:text-white transition-colors">
                Alle kosten op een rij
              </Link>
            </div>

            <div className="mt-14 pt-10 border-t border-edge">
              <h2 className="font-display text-lg font-extrabold tracking-tight">Ook actief in</h2>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <Link href="/waterzuiveraar/utrecht" className="cursor-pointer underline hover:text-ink text-dim">Utrecht</Link>
                <Link href="/waterzuiveraar/den-haag" className="cursor-pointer underline hover:text-ink text-dim">Den Haag</Link>
                <Link href="/waterzuiveraar" className="cursor-pointer underline hover:text-ink text-dim">Alle werkgebieden</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyCta />
    </>
  );
}

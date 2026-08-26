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
  alternates: { canonical: '/waterzuiveraar/utrecht' },
  title: 'Waterzuiveraar Utrecht — installatie aan huis | Water-zuivering',
  description:
    'Water-zuivering installeert osmosewatersystemen in Utrecht en omgeving. Lees wat klanten uit Utrecht ervan vinden en vraag een offerte aan.',
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

export default async function WaterzuiveraarUtrechtPage() {
  const supabase = await createClient();
  const { data: reviews } = await supabase
    .from('reviews')
    .select('id, name, city, rating, review_text, created_at')
    .eq('approved', true)
    .eq('city', 'Utrecht')
    .order('created_at', { ascending: false });

  const utrechtReviews = reviews || [];
  const reviewCount = utrechtReviews.length;
  const avgRating = reviewCount > 0 ? (utrechtReviews.reduce((sum, r) => sum + r.rating, 0) / reviewCount).toFixed(1) : null;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Waterzuiveraar per stad', url: 'https://www.water-zuivering.nl/waterzuiveraar' },
          { name: 'Utrecht', url: 'https://www.water-zuivering.nl/waterzuiveraar/utrecht' },
        ]}
      />
      <RevealObserver />
      <Header />

      <main>
        <section id="hero" className="relative overflow-hidden">
          <div className="relative h-[46vh] min-h-[320px]">
            <Image src="/assets/img/locaties/utrecht.jpg" alt="De Domtoren in Utrecht" fill priority sizes="100vw" className="object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0">
              <div className="max-w-4xl mx-auto px-6 pb-10 text-white">
                <span className="text-xs font-bold uppercase tracking-widest text-amber">Werkgebied · Utrecht</span>
                <h1 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Waterzuiveraar installeren in Utrecht</h1>
              </div>
            </div>
          </div>
          <p className="max-w-4xl mx-auto px-6 pt-3 text-[11px] text-dim">Foto: Massimo Catarinella, via Wikimedia Commons (CC BY 3.0)</p>
        </section>

        <section className="relative">
          <div className="max-w-3xl mx-auto px-6 py-14 md:py-20">
            <p className="text-lg text-dim">
              Utrecht ligt zo ongeveer in het midden van het land — en dat merkt u aan onze planning. Omdat onze monteurs vanuit Rotterdam vertrekken en dagelijks door heel Nederland rijden, past een afspraak in Utrecht meestal makkelijk tussen andere installaties door.
            </p>
            <p className="mt-4 text-dim">
              Elk systeem dat we plaatsen is hetzelfde: een compact osmosewatersysteem met drie filtertrappen, dat achter in het keukenkastje verdwijnt en chloor, PFAS, medicijnresten en microplastics uit het kraanwater haalt. Meerdere klanten in Utrecht noemen vooral de ruimtebesparing en de smaakverbetering als reden dat ze blij zijn met hun keuze — hieronder leest u het in hun eigen woorden.
            </p>
          </div>
        </section>

        {reviewCount > 0 && (
          <section className="relative bg-surface border-y border-edge">
            <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Ervaringen</span>
                  <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Klanten in Utrecht aan het woord</h2>
                </div>
                <div className="flex items-center gap-2">
                  <Stars rating={Math.round(avgRating)} />
                  <span className="text-sm font-semibold text-dim">{avgRating} van de 5 — {reviewCount} reviews uit Utrecht</span>
                </div>
              </div>
              <div className="mt-10 grid md:grid-cols-2 gap-5">
                {utrechtReviews.map((review) => (
                  <div key={review.id} className="rounded-2xl card p-6">
                    <Stars rating={review.rating} />
                    <p className="mt-3 text-sm text-dim">&ldquo;{review.review_text}&rdquo;</p>
                    <p className="mt-4 text-sm font-bold">{review.name} <span className="font-normal text-dim">— Utrecht</span></p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-dim">Meer lezen? Bekijk <Link href="/reviews" className="underline hover:text-ink">alle reviews</Link> van klanten door heel Nederland.</p>
            </div>
          </section>
        )}

        <section className="relative">
          <div className="max-w-3xl mx-auto px-6 py-14 md:py-20">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl card p-6">
                <h2 className="font-display font-bold">Ruimte in de keuken?</h2>
                <p className="mt-2 text-sm text-dim">Het systeem is slechts 10,5 cm breed. Check met de Maatcheck-tool of het onder úw aanrecht past.</p>
                <Link href="/maatcheck" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-amber-dark hover:underline">Maatcheck proberen →</Link>
              </div>
              <div className="rounded-2xl card p-6">
                <h2 className="font-display font-bold">Wat kost het?</h2>
                <p className="mt-2 text-sm text-dim">Dezelfde prijs, waar in Nederland u ook zit. Reken uit wat u bespaart op flessenwater.</p>
                <Link href="/besparing" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-amber-dark hover:underline">Bereken uw besparing →</Link>
              </div>
            </div>

            <div className="mt-14 pt-10 border-t border-edge">
              <h2 className="font-display text-lg font-extrabold tracking-tight">Ook actief in</h2>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <Link href="/waterzuiveraar/rotterdam" className="cursor-pointer underline hover:text-ink text-dim">Rotterdam</Link>
                <Link href="/waterzuiveraar/den-haag" className="cursor-pointer underline hover:text-ink text-dim">Den Haag</Link>
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

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import MobileStickyCta from '@/components/MobileStickyCta';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  alternates: { canonical: '/waterzuiveraar' },
  title: 'Waterzuiveraar installeren — in heel Nederland | Water-zuivering',
  description:
    'Water-zuivering installeert osmosewatersystemen door heel Nederland. Bekijk wat klanten in Rotterdam, Utrecht en Den Haag ervan vinden.',
};

const STEDEN = [
  { slug: 'rotterdam', naam: 'Rotterdam', beschrijving: 'Onze thuisbasis — hier is Water-zuivering gevestigd.', image: '/assets/img/locaties/rotterdam.jpg' },
  { slug: 'utrecht', naam: 'Utrecht', beschrijving: 'Vanuit het midden van het land snel bij u langs.', image: '/assets/img/locaties/utrecht.jpg' },
  { slug: 'den-haag', naam: 'Den Haag', beschrijving: 'Regelmatig actief in Den Haag en de hele regio.', image: '/assets/img/locaties/den-haag.jpg' },
];

export default function WaterzuiveraarPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Waterzuiveraar per stad', url: 'https://www.water-zuivering.nl/waterzuiveraar' },
        ]}
      />
      <RevealObserver />
      <Header />

      <main>
        <section id="hero" className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Werkgebied</span>
            <h1 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Waterzuiveraar installeren, door heel Nederland</h1>
            <p className="mt-4 text-dim text-lg">Water-zuivering installeert osmosewatersystemen landelijk. Hieronder een paar plekken waar we al regelmatig komen — met echte reacties van klanten uit die stad.</p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-6 pb-20 md:pb-28">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {STEDEN.map((stad) => (
                <Link
                  key={stad.slug}
                  href={`/waterzuiveraar/${stad.slug}`}
                  className="group reveal cursor-pointer rounded-[2rem] card overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="relative aspect-[4/3]">
                    <Image src={stad.image} alt={`Waterzuiveraar installeren in ${stad.naam}`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h2 className="font-display text-xl font-extrabold tracking-tight">{stad.naam}</h2>
                    <p className="mt-2 text-sm text-dim">{stad.beschrijving}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-ink group-hover:text-amber-dark transition-colors">
                      Waterzuiveraar installeren in {stad.naam}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 rounded-[2rem] bg-ink text-white p-8 md:p-12 text-center">
              <h2 className="font-display text-2xl font-extrabold tracking-tight">Uw stad niet erbij?</h2>
              <p className="mt-3 text-white/70 max-w-xl mx-auto">Geen probleem — we installeren door het hele land. Vraag gewoon een vrijblijvende offerte aan en we nemen contact op.</p>
              <Link href="/aanmelden" className="cursor-pointer mt-6 inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-xl shadow-amber/25">
                Vraag vrijblijvend een offerte aan
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyCta />
    </>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import ArticleSchema from '@/components/ArticleSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  alternates: { canonical: '/kennisbank/waterzuiveraar-installeren' },
  title: 'Waterzuiveraar laten installeren — Water-zuivering',
  description:
    'Hoe de installatie van een waterzuiveraar in zijn werk gaat: van afspraak tot zuiver water, stap voor stap.',
};

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Waterzuiveraar laten installeren: hoe gaat dat?"
        description="Hoe de installatie van een waterzuiveraar in zijn werk gaat: van afspraak tot zuiver water, stap voor stap."
        image="https://www.water-zuivering.nl/assets/img/kennisbank/waterzuiveraar-installeren.png"
        url="https://www.water-zuivering.nl/kennisbank/waterzuiveraar-installeren"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Waterzuiveraar laten installeren: hoe gaat dat?', url: 'https://www.water-zuivering.nl/kennisbank/waterzuiveraar-installeren' },
        ]}
      />
      <RevealObserver />
      <Header />

      <main>
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Kennisbank</span>
            <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Waterzuiveraar laten installeren: hoe gaat dat?
            </h1>
            <p className="mt-5 text-dim text-lg">
              Veel mensen stellen een systeem uit omdat ze denken dat installatie een hele klus is. In werkelijkheid valt dat erg mee.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-center">Vier stappen, meestal binnen één dag</h2>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-3xl card p-6 text-center">
                <p className="mt-2 font-display font-bold text-lg">1. Afspraak</p>
                <p className="mt-2 text-sm text-dim">Plan telefonisch of online een moment dat jou uitkomt.</p>
                <p className="mt-4 text-xs font-bold text-amber-dark uppercase tracking-wide">± 5 minuten</p>
              </div>
              <div className="rounded-3xl card p-6 text-center">
                <p className="mt-2 font-display font-bold text-lg">2. Installatie</p>
                <p className="mt-2 text-sm text-dim">Een monteur sluit het systeem aan op je bestaande kraan.</p>
                <p className="mt-4 text-xs font-bold text-amber-dark uppercase tracking-wide">± 1-2 uur</p>
              </div>
              <div className="rounded-3xl card p-6 text-center">
                <p className="mt-2 font-display font-bold text-lg">3. Controle</p>
                <p className="mt-2 text-sm text-dim">Waterdruk, aansluitingen en elke filtertrap worden getest.</p>
                <p className="mt-4 text-xs font-bold text-amber-dark uppercase tracking-wide">± 15 minuten</p>
              </div>
              <div className="rounded-3xl bg-ink text-white p-6 text-center">
                <p className="mt-2 font-display font-bold text-lg">4. Genieten</p>
                <p className="mt-2 text-sm text-white/60">Direct zuiver water uit je kraan, zonder verdere moeite.</p>
                <p className="mt-4 text-xs font-bold text-amber uppercase tracking-wide">Vanaf nu</p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Moet ik zelf iets regelen?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Nee. De monteur brengt alles mee en sluit het systeem netjes aan op je bestaande waterleiding — er is geen voorbereiding van jouw kant nodig, behalve dat het kastje onder je spoelbak toegankelijk is. Kalkaanslag of geen Quooker aanwezig? Ook geen probleem, dat wordt gewoon meegenomen in de aansluiting. Benieuwd hoe dat er in de praktijk uitziet? Lees hoe de <Link href="/waterzuiveraar/rotterdam" className="underline hover:text-ink">waterzuiveraar installeren in Rotterdam</Link> precies in zijn werk gaat.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/kennisbank/waterzuiveraar-installeren.png" alt="Monteur installeert een waterzuiveringssysteem onder de gootsteen" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Zekerheid</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Vakkundig geïnstalleerd, met 10 jaar garantie</h2>
              <p className="mt-4 text-dim">Onze eigen monteurs installeren elk systeem persoonlijk en testen alles voordat ze vertrekken. Meer over de garantie lees je op onze <Link href="/garantie" className="underline hover:text-ink">garantiepagina</Link>.</p>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Plan vandaag nog je afspraak</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan — binnen één werkdag hoor je van ons.</p>
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

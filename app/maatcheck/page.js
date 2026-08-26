import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import MaatcheckPicker from '@/components/maatcheck/MaatcheckPicker';

export const metadata = {
  alternates: { canonical: '/maatcheck' },
  title: 'Maatcheck — past het systeem in jouw kastje? — Water-zuivering',
  description:
    'Zet het osmosewatersysteem live in je keuken met je camera, of gebruik een foto — op ware grootte, staand of liggend.',
};

export default function Page() {
  return (
    <>
      <RevealObserver />
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="relative max-w-2xl mx-auto px-6 py-12 md:py-20 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Maatcheck</span>
            <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Past het in jouw kastje?
            </h1>
            <p className="mt-4 text-dim text-lg">
              Zet het apparaat op ware grootte naast je kastje — met een foto, of live met je camera.
            </p>
          </div>
        </section>

        {/* TOOL */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-3xl mx-auto px-6 py-10 md:py-16">
            <MaatcheckPicker />

            <div className="mt-8 rounded-2xl bg-bg px-5 py-4 flex items-start gap-3 max-w-xl mx-auto">
              <svg className="shrink-0 mt-0.5 text-amber-dark" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 8v5M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" /></svg>
              <p className="text-xs text-dim">Deze 3D-weergave is AI-gegenereerd en blijft dat ook — leuk voor een snelle indicatie, maar de werkelijke maten kunnen net iets afwijken. Twijfel je of het echt past? Onze monteur meet het bij de offerteaanvraag altijd nauwkeurig na.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Past het? Vraag een vrijblijvende offerte aan</h2>
            <p className="mt-4 text-white/70">Onze monteur meet alles nauwkeurig op tijdens de installatie — jij hoeft alleen de kraan open te draaien.</p>
            <Link href="/aanmelden" className="cursor-pointer mt-8 inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-xl shadow-amber/25">
              Vraag vrijblijvend een offerte aan
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <p className="mt-6">
              <Link href="/osmosesysteem" className="cursor-pointer text-sm font-bold text-white/70 hover:text-white transition-colors underline underline-offset-4">
                Meer over het osmosewatersysteem
              </Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

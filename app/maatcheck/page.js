import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import FotoFitTool from '@/components/maatcheck/FotoFitTool';
import ArViewer from '@/components/maatcheck/ArViewer';

export const metadata = {
  title: 'Maatcheck — past het systeem in jouw kastje? — Water-zuivering',
  description:
    'Maak een foto van je keukenkastje en bekijk direct, op de juiste schaal, of het osmosewatersysteem er staand of liggend in past.',
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
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Maatcheck</span>
            <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Past het in jouw keukenkastje? Check het zelf.
            </h1>
            <p className="mt-5 text-dim text-lg">
              Maak een foto van je kastje, geef de breedte op en zie direct — op de juiste schaal — hoe het systeem er staand of liggend in past.
            </p>
          </div>
        </section>

        {/* AR / 3D */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-3xl mx-auto px-6 py-14 md:py-20">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Live in 3D & AR</span>
              <h2 className="mt-2 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zet 'm live in je eigen keuken</h2>
              <p className="mt-3 text-dim">Op ware grootte, direct via je camera — op Android houd je je telefoon in je kastje en zie je precies hoeveel ruimte het inneemt.</p>
            </div>
            <ArViewer />
          </div>
        </section>

        {/* TOOL */}
        <section className="relative overflow-hidden">
          <div className="max-w-3xl mx-auto px-6 py-14 md:py-20">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Foto-tool</span>
              <h2 className="mt-2 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Liever met een foto van je kastje?</h2>
              <p className="mt-3 text-dim">Werkt op elk toestel, geen AR-ondersteuning nodig.</p>
            </div>
            <FotoFitTool />
          </div>
        </section>

        {/* UITLEG */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="rounded-2xl card p-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber/12 text-amber-dark font-display font-extrabold text-sm">1</span>
                <p className="mt-3 font-display font-bold">Foto & breedte</p>
                <p className="mt-1.5 text-sm text-dim">Maak een foto van je kastje en geef aan hoe breed de opening is.</p>
              </div>
              <div className="rounded-2xl card p-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber/12 text-amber-dark font-display font-extrabold text-sm">2</span>
                <p className="mt-3 font-display font-bold">Sleep het op schaal</p>
                <p className="mt-1.5 text-sm text-dim">Kalibreer de foto en versleep het amberkleurige kader naar de juiste plek.</p>
              </div>
              <div className="rounded-2xl card p-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber/12 text-amber-dark font-display font-extrabold text-sm">3</span>
                <p className="mt-3 font-display font-bold">Staand, liggend & diepte</p>
                <p className="mt-1.5 text-sm text-dim">Wissel van oriëntatie en check meteen of de diepte van je kastje volstaat.</p>
              </div>
            </div>
            <p className="mt-8 text-sm text-dim text-center max-w-2xl mx-auto">
              Deze tool geeft een indicatie op basis van de breedte die je zelf opgeeft — geen exacte 3D-meting. Bij de offerteaanvraag bekijkt onze monteur de exacte situatie ter plekke.
            </p>
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

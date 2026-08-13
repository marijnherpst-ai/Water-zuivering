import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';

export const metadata = {
  title: 'Waterfilter onder de gootsteen: alles wat je moet weten',
  description:
    'Een waterfilter onder de gootsteen: hoe het werkt, wat het kost en waar je op moet letten voor je een keuze maakt.',
};

export default function Page() {
  return (
    <>
      <RevealObserver />
      <Header />

      <main>
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Kennisbank</span>
            <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Waterfilter onder de gootsteen: alles wat je moet weten
            </h1>
            <p className="mt-5 text-dim text-lg">
              De populairste plek voor een waterfilter in huis. Waarom eigenlijk, en waar moet je op letten?
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waarom onder de gootsteen?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Een systeem onder je aanrecht staat direct bij de plek waar je het water gebruikt, blijft volledig uit het zicht, en neemt geen aanrechtruimte in — in tegenstelling tot een losse tafelfilter of kan. De meeste moderne systemen zijn bovendien compact genoeg om naast je andere spullen in het kastje te passen.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waar moet je op letten?</h2>
            <ol className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-amber text-ink text-sm font-bold">1</span>
                <span className="text-dim"><strong className="text-ink">Ruimte in het kastje.</strong> De meeste systemen zijn compact (vaak rond de 10-15 cm breed), maar check even hoeveel vrije ruimte je hebt.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-amber text-ink text-sm font-bold">2</span>
                <span className="text-dim"><strong className="text-ink">Aantal filtertrappen.</strong> Meer trappen filteren grondiger — een goed systeem combineert grof, fijn en smaakfiltratie.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-amber text-ink text-sm font-bold">3</span>
                <span className="text-dim"><strong className="text-ink">Installatie.</strong> Laat het vakkundig aansluiten — dat voorkomt lekkages en zorgt dat de druk goed blijft.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-amber text-ink text-sm font-bold">4</span>
                <span className="text-dim"><strong className="text-ink">Garantie.</strong> Kijk niet alleen naar de aanschafprijs, maar ook naar hoe lang je gedekt bent als er iets misgaat.</span>
              </li>
            </ol>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/kennisbank/waterfilter-onder-de-gootsteen.png" alt="Waterfiltersysteem geïnstalleerd in een keukenkastje" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Water-zuivering</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Slechts 10,5 cm breed</h2>
              <p className="mt-4 text-dim">Ons systeem is smaller dan de meeste keukenladen en past staand of liggend — zo goed als altijd geregeld, ongeacht hoe je kastje is ingedeeld.</p>
              <p className="mt-4 text-dim">Alle technische details vind je op onze <Link href="/uitleg" className="underline hover:text-ink">specificatiepagina</Link>.</p>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Past het bij jouw keuken?</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan — we kijken graag met je mee naar wat past.</p>
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

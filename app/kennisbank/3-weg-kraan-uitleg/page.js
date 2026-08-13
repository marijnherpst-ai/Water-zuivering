import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';

export const metadata = {
  title: 'Wat is een 3-weg kraan en heb je die nodig?',
  description:
    'Wat een 3-weg kraan precies is, hoe hij werkt en of hij zinvol is bij jouw waterzuiveringssysteem.',
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
              Wat is een 3-weg kraan en heb je die nodig?
            </h1>
            <p className="mt-5 text-dim text-lg">
              Eén elegante kraan in plaats van twee. Wat doet hij precies, en wanneer is hij de moeite waard?
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat is een 3-weg kraan?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Een 3-weg kraan combineert gewoon kraanwater, gefilterd water en (optioneel) gemineraliseerd water in één enkele kraan op je aanrecht — met een handige omschakelaar om te kiezen welke stroom je nodig hebt. Zonder 3-weg kraan heb je voor gefilterd water meestal een aparte, losse kraan naast je bestaande kraan nodig.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waarom mensen ervoor kiezen</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Een losse extra kraan betekent een extra gat in je aanrecht en meer rommel op je werkblad. Een 3-weg kraan combineert alles in één strak ontwerp — praktisch én mooier, zonder in te leveren op functionaliteit.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Nodig is hij niet: een waterzuiveringssysteem werkt ook prima met een aparte losse kraan. Het is een kwestie van voorkeur voor gemak en uiterlijk.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/kennisbank/3-weg-kraan-uitleg.png" alt="Moderne 3-weg kraan op een keukenblad" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Als accessoire</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Los verkrijgbaar, compatibel met elk systeem</h2>
              <p className="mt-4 text-dim">Onze 3-weg kraan is los verkrijgbaar als accessoire en werkt met elk Water-zuivering systeem — vakkundig meegeïnstalleerd, zodat je meteen alles in één keer geregeld hebt.</p>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Benieuwd wat er mogelijk is in jouw keuken?</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan en bespreek de opties, inclusief de 3-weg kraan.</p>
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

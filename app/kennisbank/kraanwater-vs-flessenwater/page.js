import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';

export const metadata = {
  alternates: { canonical: '/kennisbank/kraanwater-vs-flessenwater' },
  title: 'Kraanwater vs. flessenwater: wat is voordeliger? — Water-zuivering',
  description:
    'Kraanwater vs. flessenwater vergeleken op kosten, gemak en milieu-impact — met een eerlijke conclusie.',
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
              Kraanwater vs. flessenwater: wat is voordeliger?
            </h1>
            <p className="mt-5 text-dim text-lg">
              Een eerlijke vergelijking op drie punten: kosten, gemak en milieu-impact.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="rounded-2xl card p-6">
                <p className="font-display font-bold">Kosten</p>
                <p className="mt-2 text-sm text-dim">Flessenwater loopt per liter al snel op, jaar na jaar. Gefilterd kraanwater kost na de eenmalige installatie alleen nog een filter per paar jaar.</p>
              </div>
              <div className="rounded-2xl card p-6">
                <p className="font-display font-bold">Gemak</p>
                <p className="mt-2 text-sm text-dim">Geen kratten sjouwen, geen voorraad bijhouden, geen lege flessen wegbrengen — altijd direct vers water uit de kraan.</p>
              </div>
              <div className="rounded-2xl card p-6">
                <p className="font-display font-bold">Milieu</p>
                <p className="mt-2 text-sm text-dim">Minder plastic flessen betekent minder productie, transport en afval — een directe impact die je meteen voelt.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">En qua smaak en kwaliteit?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Veel flessenwatermerken zijn zelf ook (deels) gezuiverd via omgekeerde osmose — hetzelfde proces dat een thuissysteem gebruikt. Het verschil is dat je dat water dan zelf, onbeperkt en vers uit je eigen kraan tapt, in plaats van het in plastic verpakt en getransporteerd te kopen.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Benieuwd wat jij concreet zou besparen als je overstapt? Reken het uit op basis van je eigen situatie:
            </p>
            <Link href="/besparing" className="cursor-pointer mt-6 inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors">
              Bereken je besparing
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/kennisbank/kraanwater-vs-flessenwater.png" alt="Een glas kraanwater naast een waterfles op het aanrecht" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Onze conclusie</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zelf zuiveren wint op alle drie de punten</h2>
              <p className="mt-4 text-dim">Een eigen waterzuiveraar combineert de zuiverheid van flessenwater met het gemak en de lage kosten van kraanwater — zonder de nadelen van beide.</p>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Nooit meer kratten water sjouwen</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan en ontdek wat een Water-zuivering systeem voor jouw huishouden betekent.</p>
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

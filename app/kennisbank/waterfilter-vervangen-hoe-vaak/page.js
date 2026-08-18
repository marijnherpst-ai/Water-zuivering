import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';

export const metadata = {
  title: 'Hoe vaak moet je een waterfilter vervangen?',
  description:
    'Hoe vaak een waterfilter vervangen moet worden, waarom, en wat er gebeurt als je het te lang uitstelt. Kort en duidelijk uitgelegd.',
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
              Hoe vaak moet je een waterfilter vervangen?
            </h1>
            <p className="mt-5 text-dim text-lg">
              Een simpele vraag met een simpel antwoord — en een paar redenen waarom je het niet te lang moet uitstellen.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Het vuistregel-antwoord</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Dat hangt af van welk filter je bedoelt — een Water-zuivering systeem heeft er drie, elk met een eigen levensduur: het <strong className="text-ink">PPC-filter</strong> (voorfilter) en het <strong className="text-ink">CTO-filter</strong> (nafilter) gaan gemiddeld <strong className="text-ink">12 maanden</strong> mee, het <strong className="text-ink">RO-filter</strong> (het hart van het systeem) gemiddeld <strong className="text-ink">24 maanden</strong>. Dat verschilt per situatie: een groot huishouden dat veel water verbruikt, vervangt filters dus eerder dan de gemiddelde termijn.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Bij goede systemen hoef je dit niet zelf bij te houden: een display op het apparaat laat precies zien wanneer het tijd is.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat als je het te lang uitstelt?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Een verzadigd filter houdt onzuiverheden minder goed tegen — het werkt dus niet meer optimaal, precies op het moment dat je er nog steeds op vertrouwt dat het wel goed zit. Bij sommige filtertypes kan een sterk verzadigd filter ook de doorstroom vertragen, waardoor je waterdruk aan de kraan merkbaar afneemt.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Het is dus geen kwestie van "het werkt nog steeds prima" — het punt is juist dat je dat zonder duidelijke indicatie niet goed kan beoordelen.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/kennisbank/waterfilter-vervangen-hoe-vaak.png" alt="Een waterfilter wordt vervangen onder het aanrecht" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Zonder gedoe</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Filter vervangen zonder gereedschap</h2>
              <p className="mt-4 text-dim">Bij een Water-zuivering systeem draai je in drie simpele stappen zelf een nieuw filter erin — geen gereedschap, geen monteur nodig. Benieuwd hoe dat precies gaat? Lees de volledige uitleg op onze <Link href="/uitleg" className="underline hover:text-ink">specificatiepagina</Link>.</p>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Nooit meer zelf hoeven bijhouden wanneer</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan voor een systeem dat je automatisch laat weten wanneer het tijd is.</p>
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

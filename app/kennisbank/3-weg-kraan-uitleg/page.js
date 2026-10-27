import Image from 'next/image';
import Link from 'next/link';
import AuteurRegel from '@/components/AuteurRegel';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import ArticleSchema from '@/components/ArticleSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import FaqSchema from '@/components/FaqSchema';

export const metadata = {
  alternates: { canonical: '/kennisbank/3-weg-kraan-uitleg' },
  title: 'Wat is een 3-weg kraan en heb je die nodig?',
  description:
    'Wat een 3-weg kraan precies is, hoe hij werkt en of hij zinvol is bij jouw waterzuiveringssysteem.',
};

const FAQ = [
  ['Heb ik een 3-weg kraan nodig voor een waterzuiveraar?', 'Nee. Een waterzuiveringssysteem werkt ook prima met een aparte, losse kraan voor gefilterd water. Een 3-weg kraan is een kwestie van voorkeur voor gemak en uiterlijk: alles in één kraan, zonder extra gat in je aanrecht.'],
  ['Welk water komt er uit een 3-weg kraan?', 'Gewoon kraanwater, gefilterd water en, optioneel, gemineraliseerd water. Met een omschakelaar kies je welke stroom je nodig hebt.'],
  ['In welke afwerkingen is de 3-weg kraan verkrijgbaar?', 'De 3-weg kraan van Water-zuivering is verkrijgbaar in vier afwerkingen: chroom, geborsteld staal, goud en zwart.'],
  ['Werkt de 3-weg kraan met elk Water-zuivering systeem?', 'Ja. De 3-weg kraan is los verkrijgbaar als accessoire, werkt met elk Water-zuivering systeem en wordt vakkundig meegeïnstalleerd.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Wat is een 3-weg kraan en heb je die nodig?"
        description="Wat een 3-weg kraan precies is, hoe hij werkt en of hij zinvol is bij jouw waterzuiveringssysteem."
        image="https://www.water-zuivering.nl/assets/img/kennisbank/3-weg-kraan-uitleg.png"
        url="https://www.water-zuivering.nl/kennisbank/3-weg-kraan-uitleg"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Wat is een 3-weg kraan en heb je die nodig?', url: 'https://www.water-zuivering.nl/kennisbank/3-weg-kraan-uitleg' },
        ]}
      />
      <FaqSchema items={FAQ} />
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
            <AuteurRegel />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat is een 3-weg kraan?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Een <strong className="text-ink">3-weg kraan</strong> combineert gewoon kraanwater, gefilterd water en (optioneel) gemineraliseerd water in één enkele kraan op je aanrecht — met een handige omschakelaar om te kiezen welke stroom je nodig hebt. Zonder 3-weg kraan heb je voor gefilterd water meestal een aparte, losse kraan naast je bestaande kraan nodig.
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
                <Image loading="eager" src="/assets/img/kennisbank/3-weg-kraan-uitleg.png" alt="Moderne 3-weg kraan op een keukenblad" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Als accessoire</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Los verkrijgbaar, compatibel met elk systeem</h2>
              <p className="mt-4 text-dim">Onze <Link href="/3-weg-kraan" className="underline hover:text-ink">3-weg kraan</Link> is los verkrijgbaar als accessoire en werkt met elk Water-zuivering systeem — vakkundig meegeïnstalleerd, zodat je meteen alles in één keer geregeld hebt. Op de productpagina zie je hem in alle vier de afwerkingen: chroom, geborsteld staal, goud en zwart.</p>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoe werkt een 3-weg kraan?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Een 3-weg kraan heeft binnenin gescheiden waterwegen. Warm en koud kraanwater lopen zoals bij een gewone mengkraan. Het gefilterde water komt via een eigen leiding rechtstreeks vanaf het systeem onder het aanrecht en loopt nergens samen met het gewone leidingwater. Met een aparte hendel of knop kies je welk water er uit de uitloop komt.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Daardoor blijft het gefilterde water zuiver, ook al komt het uit dezelfde kraan als het afwaswater.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">3-weg kraan of apart tappunt?</h2>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">3-weg kraan</strong>: één kraan voor alles, strakker op het aanrecht, vervangt je huidige keukenkraan.</li>
              <li><strong className="text-ink">Apart tappunt</strong>: een extra, kleiner kraantje naast je bestaande kraan. Je hoeft je huidige kraan niet te vervangen.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Allebei werken ze met hetzelfde systeem eronder. Meer over het tappunt lees je in <Link href="/kennisbank/osmosewater-tappunt" className="underline hover:text-ink">osmosewater tappunt: hoe werkt dat?</Link>.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Afwerkingen en installatie</h2>
            <p className="mt-4 text-dim leading-relaxed">
              De 3-weg kraan van Water-zuivering is er in vier afwerkingen: chroom, geborsteld staal, goud en zwart. De monteur plaatst hem bij de installatie van het systeem in plaats van je huidige keukenkraan, dus in het bestaande gat in je aanrecht. Bekijk alle uitvoeringen op de pagina over de <Link href="/3-weg-kraan" className="underline hover:text-ink">3-weg kraan</Link>.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Voor wie is een 3-weg kraan geschikt?</h2>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Voor wie een strak aanrecht wil</strong>, zonder extra kraantje.</li>
              <li><strong className="text-ink">Voor wie toch al een nieuwe keukenkraan nodig heeft</strong>: dan vervang je die in één keer.</li>
              <li><strong className="text-ink">Voor wie veel gefilterd water gebruikt</strong>, ook voor koken, koffie en thee.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Wil je je huidige kraan houden, dan is een apart tappunt de makkelijkste keuze.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen</h2>
            </div>
            <div className="mt-10 space-y-3">
              {FAQ.map(([vraag, antwoord]) => (
                <details key={vraag} className="reveal group rounded-2xl card p-5">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-display font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber rounded">
                    {vraag}
                    <svg className="shrink-0 transition-transform group-open:rotate-45 text-amber-dark" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                  </summary>
                  <p className="mt-3 text-sm text-dim leading-relaxed">{antwoord}</p>
                </details>
              ))}
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

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
  alternates: { canonical: '/kennisbank/kalkaanslag-in-huis' },
  title: 'Kalkaanslag in huis: oorzaak en oplossing — Water-zuivering',
  description:
    'Wat veroorzaakt kalkaanslag in huis, welke schade richt het aan, en hoe voorkom je het structureel?',
};

const FAQ = [
  ['Waar komt kalkaanslag vandaan?', 'Van calcium en magnesium die van nature in het water zitten, vooral in gebieden met hard water. Zodra water verdampt, blijven deze mineralen achter als een witte, korstige laag.'],
  ['Is kalkaanslag gevaarlijk?', 'Nee, het is geen vervuiling in de gevaarlijke zin. Het is een natuurlijk bijproduct van de waterhardheid in jouw regio.'],
  ['Welke schade richt kalk aan in huis?', 'Kalk zet zich vast in leidingen, boilers en apparaten zoals de wasmachine en waterkoker. Dat kan hun levensduur verkorten en het energieverbruik verhogen, omdat verwarmingselementen minder efficiënt werken.'],
  ['Waterontharder of waterzuiveraar tegen kalk?', 'Kalkaanslag door je hele huis pak je structureel aan met een waterontharder. Wil je vooral zuiverder drinkwater uit je keukenkraan, dan is een waterzuiveraar de betere keuze.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Kalkaanslag in huis: oorzaak en oplossing"
        description="Wat veroorzaakt kalkaanslag in huis, welke schade richt het aan, en hoe voorkom je het structureel?"
        image="https://www.water-zuivering.nl/assets/img/kennisbank/kalkaanslag-in-huis.png"
        url="https://www.water-zuivering.nl/kennisbank/kalkaanslag-in-huis"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Kalkaanslag in huis: oorzaak en oplossing', url: 'https://www.water-zuivering.nl/kennisbank/kalkaanslag-in-huis' },
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
              Kalkaanslag in huis: oorzaak en oplossing
            </h1>
            <p className="mt-5 text-dim text-lg">
              Die witte aanslag op je kranen en douchekop komt niet uit het niets. Wat is de oorzaak, en wat kun je eraan doen?
            </p>
            <AuteurRegel />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waar komt kalkaanslag vandaan?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              <strong className="text-ink">Kalkaanslag</strong> ontstaat door calcium en magnesium die van nature in het water zitten — vooral in gebieden met "hard water", zoals grote delen van Nederland. Zodra water verdampt (bijvoorbeeld rond een kraan of op tegels), blijven deze mineralen achter als een witte, korstige laag.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Het is dus geen vervuiling in de gevaarlijke zin — het is gewoon een natuurlijk bijproduct van je plaatselijke waterhardheid.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Welke schade richt het aan?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Naast het cosmetische probleem (kranen en glaswerk die er snel vies uitzien), zet kalkaanslag zich ook vast in leidingen, boilers en apparaten zoals de wasmachine en waterkoker. Dat kan op termijn hun levensduur verkorten en hun energieverbruik verhogen, omdat verwarmingselementen minder efficiënt werken door een laagje kalk.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image loading="eager" src="/assets/img/kennisbank/kalkaanslag-in-huis.png" alt="Kalkaanslag op een chromen kraan" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">De structurele aanpak</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Ontharden voor je hele huis, zuiveren voor je drinkwater</h2>
              <p className="mt-4 text-dim">Kalkaanslag door je hele huis pak je structureel aan met een waterontharder. Wil je vooral zuiverder drinkwater bij je keukenkraan? Dan is een waterzuiveraar de betere keuze. Benieuwd wat het verschil precies is? Lees <Link href="/kennisbank/waterontharder-vs-waterzuiveraar" className="underline hover:text-ink">waterontharder vs. waterzuiveraar</Link>.</p>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Kalkaanslag verwijderen: per plek</h2>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-amber/10 text-ink"><tr><th scope="col" className="p-4 font-display font-bold">Waar</th><th scope="col" className="p-4 font-display font-bold">Zo pak je het aan</th></tr></thead>
                <tbody>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">Kranen en douchekop</th><td className="p-4 text-dim">Laat een doekje met schoonmaakazijn een uur op de kraan zitten, of leg de douchekop in een bakje azijn. Daarna afspoelen.</td></tr>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">Waterkoker</th><td className="p-4 text-dim">Kook water met een scheut azijn of citroenzuur, laat het even staan en spoel goed na.</td></tr>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">Douchewand en tegels</th><td className="p-4 text-dim">Een kalkreiniger of azijn, daarna goed naspoelen en droogvegen.</td></tr>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">Wasmachine en koffiezetapparaat</th><td className="p-4 text-dim">Gebruik de ontkalker die de fabrikant aanraadt, volgens de handleiding.</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-dim leading-relaxed">
              Let op natuursteen: azijn en zure middelen kunnen marmer en kalksteen aantasten. Gebruik daar een middel dat geschikt is voor natuursteen.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Kalkaanslag voorkomen</h2>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Droogvegen</strong>: met een douchetrekker of doek na het douchen voorkom je het meeste.</li>
              <li><strong className="text-ink">Regelmatig ontkalken</strong> van waterkoker en koffiezetapparaat, voordat de laag dik wordt.</li>
              <li><strong className="text-ink">Een waterontharder</strong> voor het hele huis, als je water echt hard is.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              In de keuken is er nog een oplossing: water dat door een osmosesysteem gaat, bevat bijna geen kalk meer. Koffie, thee en de waterkoker blijven dan schoon. Hoe hard jouw water is, lees je in <Link href="/kennisbank/hoe-werkt-een-waterontharder" className="underline hover:text-ink">hoe werkt een waterontharder?</Link>.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Kalkaanslag in de waterkoker en koffiemachine</h2>
            <p className="mt-4 text-dim leading-relaxed">
              In de keuken zie je kalkaanslag het eerst: een witte laag op de bodem van de waterkoker en schilfers in je thee. In een koffiemachine zie je het niet, maar daar doet kalkaanslag de meeste schade: het verstopt leidingen en verwarmingselementen, waardoor de machine trager en minder warm wordt.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Ontkalk de waterkoker zodra je een laagje ziet, en volg voor de koffiemachine het schema van de fabrikant. Gebruik je water uit een osmosesysteem voor koffie en thee, dan krijg je nauwelijks nog kalkaanslag, omdat het membraan de kalk tegenhoudt.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoeveel kalkaanslag krijg je in jouw regio?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Hoe snel kalkaanslag ontstaat, hangt af van de hardheid van het water. Die verschilt per regio en wordt uitgedrukt in Duitse hardheidsgraden (°dH). Je waterbedrijf publiceert de hardheid voor jouw postcode. Boven ongeveer 14 °dH heb je hard water en krijg je merkbaar meer kalkaanslag. Wat dat getal betekent, lees je in <Link href="/kennisbank/hoe-werkt-een-waterontharder" className="underline hover:text-ink">hoe werkt een waterontharder?</Link>.
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
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zuiverder water uit je eigen kraan?</h2>
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

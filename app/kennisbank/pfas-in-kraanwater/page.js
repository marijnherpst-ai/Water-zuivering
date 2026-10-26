import Image from 'next/image';
import Link from 'next/link';
import AuteurRegel from '@/components/AuteurRegel';
import KortAntwoord from '@/components/KortAntwoord';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import ArticleSchema from '@/components/ArticleSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import FaqSchema from '@/components/FaqSchema';

export const metadata = {
  alternates: { canonical: '/kennisbank/pfas-in-kraanwater' },
  title: 'PFAS in kraanwater: wat is het? — Water-zuivering',
  description:
    'PFAS in kraanwater: wat het is, waar het vandaan komt en hoe je het effectief uit je drinkwater filtert.',
};

const FAQ = [
  ['Is kraanwater PFAS-vrij?', 'Nee. In vrijwel al het Nederlandse kraanwater zitten kleine sporen PFAS, omdat de stoffen nauwelijks afbreken en overal in het milieu zitten. Het water voldoet aan de wettelijke norm, maar in een groot deel van Noord- en Zuid-Holland ligt de waarde boven de strengere RIVM-advieswaarde.'],
  ['Hoe haal je PFAS uit kraanwater?', 'Met omgekeerde osmose: het membraan houdt PFAS-moleculen tegen. Een filter met actieve kool, zoals in een filterkan, doet dat maar deels en niet lang. Koken en een waterontharder helpen niet.'],
  ['Wat zijn PFAS?', 'PFAS (poly- en perfluoralkylstoffen) zijn een grote groep synthetische stoffen die decennialang zijn gebruikt in onder meer antiaanbaklagen, waterafstotende kleding, blusschuim en verpakkingen. Ze heten ook wel "forever chemicals", omdat ze nauwelijks afbreken.'],
  ['Zit er PFAS in Nederlands kraanwater?', 'Ja, in kleine sporen. Het water voldoet aan de wettelijke norm, maar in een deel van Nederland ligt de PFAS-waarde boven de strengere advieswaarde van het RIVM (4,4 ng/l).'],
  ['Waarom krijgt PFAS steeds meer aandacht?', 'Onderzoek wijst voorzichtig op mogelijke gezondheidsrisico\'s bij langdurige blootstelling, ook bij lage concentraties. Daarom worden de toegestane grenswaarden geleidelijk aangescherpt.'],
  ['Welk filter haalt PFAS uit kraanwater?', 'Omgekeerde osmose. Het RO-membraan heeft gaatjes die honderden keren dunner zijn dan een haar, te klein voor PFAS-moleculen. Een filterkan houdt PFAS nauwelijks tegen.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="PFAS in kraanwater: wat is het en hoe filter je het?"
        description="PFAS in kraanwater: wat het is, waar het vandaan komt en hoe je het effectief uit je drinkwater filtert."
        image="https://www.water-zuivering.nl/assets/img/kennisbank/pfas-in-kraanwater.png"
        url="https://www.water-zuivering.nl/kennisbank/pfas-in-kraanwater"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'PFAS in kraanwater: wat is het en hoe filter je het?', url: 'https://www.water-zuivering.nl/kennisbank/pfas-in-kraanwater' },
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
              PFAS in kraanwater: wat is het en hoe filter je het eruit?
            </h1>
            <p className="mt-5 text-dim text-lg">
              Je hebt het vast voorbij zien komen in het nieuws: <strong className="text-ink">PFAS in kraanwater</strong>. Wat zijn PFAS precies, en wat kun je er zelf aan doen?
            </p>
            <KortAntwoord bron={{ naam: 'RIVM, PFAS', url: 'https://www.rivm.nl/pfas' }}>
              PFAS zijn door de mens gemaakte chemische stoffen die nauwelijks afbreken en in lage concentraties in Nederlands kraanwater voorkomen. Het water voldoet aan de wettelijke norm, maar in een deel van Nederland ligt de waarde boven de strengere RIVM-advieswaarde van 4,4 ng/l. Een filterkan houdt PFAS nauwelijks tegen; een omgekeerde-osmosesysteem wel.
            </KortAntwoord>
            <AuteurRegel />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat zijn PFAS?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              PFAS staat voor poly- en perfluoralkylstoffen: een grote groep synthetische stoffen die decennialang zijn gebruikt in onder meer antiaanbaklagen, waterafstotende kleding, blusschuim en verpakkingen. Ze worden ook wel <strong className="text-ink">"forever chemicals"</strong> genoemd, omdat ze van nature nauwelijks afbreken.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Doordat ze zo lang worden gebruikt en amper afbreken, zijn ze inmiddels op veel plekken in de bodem, het oppervlaktewater en dus ook — in kleine sporen — in drinkwater terechtgekomen.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waarom de aandacht ervoor toeneemt</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Onderzoek naar de effecten van PFAS op de gezondheid loopt nog, maar wijst voorzichtig op mogelijke risico's bij langdurige blootstelling, ook bij lage concentraties. Daardoor worden de toegestane grenswaarden geleidelijk verder aangescherpt — een teken dat de wetenschap dit onderwerp serieus neemt.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Precies daarom is PFAS een van de belangrijkste redenen waarom mensen tegenwoordig kiezen voor extra filtratie thuis, naast wat het drinkwaterbedrijf al doet.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image loading="eager" src="/assets/img/kennisbank/pfas-in-kraanwater.png" alt="Druppel water: PFAS in kraanwater is onzichtbaar" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">De oplossing</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Omgekeerde osmose filtert PFAS effectief</h2>
              <p className="mt-4 text-dim">Het RO-membraan in een Water-zuivering systeem heeft gaatjes die honderden keren dunner zijn dan een haar — te klein voor PFAS-moleculen om doorheen te komen. Meer over hoe dat proces precies werkt lees je in <Link href="/kennisbank/wat-is-osmosewater" className="underline hover:text-ink">onze uitleg over osmosewater</Link>.</p>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoeveel PFAS zit er in kraanwater per regio?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Dat verschilt sterk per provincie. Greenpeace zette in september 2026 de publieke meetgegevens van de tien Nederlandse waterbedrijven naast de RIVM-advieswaarde van 4,4 ng/l. Het aandeel inwoners met kraanwater boven anderhalf keer die waarde:
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-amber/10 text-ink"><tr><th scope="col" className="p-4 font-display font-bold">Provincie</th><th scope="col" className="p-4 font-display font-bold">Boven 1,5× de RIVM-waarde</th></tr></thead>
                <tbody>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">Noord-Holland</th><td className="p-4 text-dim">93%</td></tr>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">Zuid-Holland</th><td className="p-4 text-dim">76%</td></tr>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">Zeeland</th><td className="p-4 text-dim">28%</td></tr>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">Utrecht</th><td className="p-4 text-dim">4%</td></tr>
                  <tr className="border-t border-edge align-top"><th scope="row" className="p-4 font-semibold text-ink">Overige provincies</th><td className="p-4 text-dim">0%</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-dim leading-relaxed">
              Het gaat om een indicatie per provincie, niet per adres. Met onze <Link href="/pfas-check" className="underline hover:text-ink">PFAS-check</Link> zie je met je postcode hoe het in jouw regio zit.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waarom zit er in het westen meer PFAS in kraanwater?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              In Noord- en Zuid-Holland wordt drinkwater voor een groot deel gemaakt van oppervlaktewater, uit rivieren en meren. PFAS komt via industrie, rioolwater en blusschuim in dat oppervlaktewater terecht en is moeilijk te verwijderen. In regio&apos;s waar drinkwater vooral uit diep grondwater komt, liggen de waarden meestal lager.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Hoe dat per stad uitpakt, lees je in onze stadspagina&apos;s over <Link href="/kennisbank/drinkwater-amsterdam" className="underline hover:text-ink">drinkwater in Amsterdam</Link> (Rijnwater, hoogste categorie), <Link href="/kennisbank/drinkwater-dordrecht-zwijndrecht" className="underline hover:text-ink">drinkwater in Dordrecht en Zwijndrecht</Link> (Maaswater) en <Link href="/kennisbank/kraanwater-utrecht" className="underline hover:text-ink">kraanwater in Utrecht</Link> (vooral grondwater).
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Meer over de verschillende PFAS-stoffen lees je in <Link href="/kennisbank/pfos-pfoa-verschil" className="underline hover:text-ink">PFAS, PFOS en PFOA: het verschil</Link>, en hoe je zo dicht mogelijk bij PFAS-vrij water komt in <Link href="/kennisbank/pfas-vrij-water" className="underline hover:text-ink">PFAS-vrij water</Link>.
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
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">PFAS-vrij water, direct uit je kraan</h2>
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

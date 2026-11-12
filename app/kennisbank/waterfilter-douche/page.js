import Image from 'next/image';
import Link from 'next/link';
import AuteurRegel from '@/components/AuteurRegel';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import ArticleSchema from '@/components/ArticleSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import KortAntwoord from '@/components/KortAntwoord';
import FaqSchema from '@/components/FaqSchema';
import TussenCta from '@/components/TussenCta';

export const metadata = {
  alternates: { canonical: '/kennisbank/waterfilter-douche' },
  title: 'Waterfilter douche: werkt het tegen kalk en chloor?',
  description:
    'Werkt een waterfilter voor de douche of douchekop? Wat zo’n filter met kalk, chloor en je huid doet, wat het kost en wanneer een ontharder beter is.',
  openGraph: {
    title: 'Waterfilter douche: werkt het tegen kalk en chloor?',
    description: 'Eerlijk uitgelegd: wat een douchefilter doet met kalk, chloor en je huid in Nederland, en wanneer je beter iets anders kiest.',
    url: 'https://www.water-zuivering.nl/kennisbank/waterfilter-douche',
    images: ['/assets/img/twee-kranen.jpg'],
  },
};

const SOORTEN = [
  ['Actieve kool', 'Haalt chloor, geur en smaakstoffen weg. Werkt minder goed in heet water en raakt snel vol.', 'Chloor en geur', 'Kalk'],
  ['KDF (koper-zink)', 'Een korrelmengsel dat vooral chloor omzet. Werkt ook in warm water. Vaak gecombineerd met actieve kool.', 'Chloor', 'Kalk, PFAS'],
  ['Vitamine C', 'Neutraliseert chloor en chlooramine direct. Je ziet het in losse douchekoppen en kleine filtertjes.', 'Chloor', 'Kalk'],
  ['Kalkfilter (ionenwisselaar of polyfosfaat)', 'Een klein patroon met hars of polyfosfaat. Houdt kalk deels vast of zorgt dat het minder aanslag geeft, maar de capaciteit is klein.', 'Een deel van de kalk, kort', 'Al het water in huis'],
];

const FAQ = [
  ['Werkt een waterfilter voor de douche?', 'Voor chloor wel, maar in Nederland zit er geen chloor in het kraanwater. Tegen kalk helpt een klein filter op de douchekop maar een beetje en maar kort, omdat het patroon snel vol zit. Wil je echt minder kalk in je douche, dan is een waterontharder op de hoofdleiding de oplossing.'],
  ['Zit er chloor in het Nederlandse kraanwater?', 'Nee. Nederlandse drinkwaterbedrijven maken het water veilig zonder chloor. Alleen bij een storing of na werkzaamheden wordt soms tijdelijk gechloord. Een filter dat vooral chloor tegenhoudt, doet in Nederland dus weinig.'],
  ['Helpt een douchefilter tegen een droge huid of eczeem?', 'Daar is geen goed bewijs voor. Een groot Engels onderzoek (de SWET-studie) liet kinderen met eczeem douchen en baden met onthard water. Dat gaf geen duidelijk betere huid dan de gewone behandeling. Heb je huidklachten, vraag dan je huisarts of dermatoloog om advies.'],
  ['Waterontharder of douchefilter, wat is beter tegen kalk?', 'Een waterontharder. Die zit op de hoofdleiding en haalt kalk uit al het water in huis: douche, kranen, wasmachine en cv-ketel. Een douchefilter heeft maar een klein patroon en raakt snel verzadigd, zeker bij gemiddeld of hard water.'],
  ['Hoe vaak moet je een douchefilter vervangen?', 'Dat staat op de verpakking en hangt af van hoeveel je doucht. Veel fabrikanten noemen een paar maanden. Wacht niet te lang: een vol filter werkt niet meer, en op een filter dat te lang blijft zitten kunnen bacteriën groeien.'],
  ['Haalt een douchefilter PFAS uit het water?', 'Daar moet je niet op rekenen. Douchefilters zijn klein en het water stroomt er snel doorheen. Bovendien krijg je PFAS vooral binnen via drinken, niet via je huid onder de douche. Wil je minder PFAS, filter dan het water dat je drinkt.'],
  ['Heb ik hard water?', 'Dat check je in een paar seconden met onze waterhardheid check op postcode en huisnummer. Het meeste Nederlandse kraanwater is zacht tot gemiddeld. Bij zacht water heeft een kalkfilter voor de douche weinig zin.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Waterfilter douche: werkt het tegen kalk en chloor?"
        description="Wat een waterfilter voor de douche of douchekop doet met kalk, chloor en je huid in Nederland, wat het kost en wanneer een ontharder beter is."
        image="https://www.water-zuivering.nl/assets/img/twee-kranen.jpg"
        url="https://www.water-zuivering.nl/kennisbank/waterfilter-douche"
        datePublished="2026-11-12"
        dateModified="2026-11-12"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Waterfilter douche', url: 'https://www.water-zuivering.nl/kennisbank/waterfilter-douche' },
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
              Waterfilter voor de douche: werkt het tegen kalk en chloor?
            </h1>
            <p className="mt-5 text-dim text-lg">
              Een <strong className="text-ink">waterfilter voor de douche</strong> of een filter op je douchekop belooft minder kalk, geen chloor en een zachtere huid. Maar wat doet zo&apos;n filter met Nederlands kraanwater? We zetten de soorten filters, wat ze wel en niet kunnen en wat het onderzoek zegt op een rij. We verkopen zelf geen douchefilters, alleen waterzuiveraars voor drinkwater.
            </p>
            <KortAntwoord bron={{ naam: 'Voedingscentrum: water', url: 'https://www.voedingscentrum.nl/encyclopedie/water.aspx' }}>
              Een douchefilter haalt vooral chloor weg, en dat zit niet in Nederlands kraanwater. Tegen kalk helpt een klein filter op de douchekop maar een beetje en kort. Voor minder kalk in de hele badkamer werkt een waterontharder op de hoofdleiding. Voor een betere huid is geen bewijs gevonden.
            </KortAntwoord>
            <AuteurRegel bijgewerkt="12 november 2026" />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Soorten</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Welke douchefilters zijn er?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Een douchefilter is een klein patroon dat je tussen de slang en de douchekop schroeft, of een douchekop met een filter erin. Er zijn vier soorten vulling, vaak gecombineerd in één filter:
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-surface text-ink">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">Vulling</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Hoe het werkt</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Helpt tegen</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Helpt niet tegen</th>
                  </tr>
                </thead>
                <tbody>
                  {SOORTEN.map((rij) => (
                    <tr key={rij[0]} className="border-t border-edge">
                      {rij.map((cel, i) => (
                        <td key={i} className={`px-4 py-3 align-top ${i === 0 ? 'font-semibold text-ink' : 'text-dim'}`}>{cel}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-dim leading-relaxed">
              Wat opvalt: bijna elk douchefilter is in de eerste plaats een <strong className="text-ink">chloorfilter</strong>. Dat is logisch, want ze komen vooral uit landen waar het kraanwater wel gechloord wordt, zoals de Verenigde Staten, Spanje en Engeland.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Chloor: in Nederland zit het er niet in</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Nederlandse drinkwaterbedrijven maken het water veilig door goede bronnen, zuivering en een schoon leidingnet. Chloor gebruiken ze niet. Alleen na een storing of bij werkzaamheden aan de leiding wordt soms tijdelijk gechloord, en dan meldt je waterbedrijf dat. Hoe dat precies zit, lees je in <Link href="/kennisbank/chloor-in-kraanwater" className="underline hover:text-ink">chloor in kraanwater</Link>.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Ook de Consumentenbond waarschuwde in oktober 2026 dat filterbeloftes over chloor voor Nederland niet kloppen, omdat er geen chloor wordt gebruikt. Een douchefilter dat vooral chloor tegenhoudt, doet hier dus weinig. Ruik je onverwacht een chloorlucht? Neem dan contact op met je waterbedrijf.
            </p>

            <h2 className="mt-12 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Kalk: een douchefilter helpt maar een beetje</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Kalk is het echte probleem in veel badkamers: witte vlekken op de douchewand, een verstopte douchekop en dof glas. Een kalkfilter voor de douche heeft een klein patroon, terwijl er bij een douchebeurt al snel 50 liter of meer doorheen gaat. Daardoor zit het patroon snel vol en neemt de werking af. Hoe harder je water, hoe sneller dat gaat.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Sommige filters met polyfosfaat halen de kalk niet weg, maar zorgen dat hij minder snel aanslag vormt. Dat kan iets schelen, maar je blijft kalk in je water houden. Weet je eigenlijk hoe hard het water bij jou is? Dat zie je in een paar seconden met onze <Link href="/waterhardheid" className="font-semibold text-ink underline decoration-amber decoration-2 underline-offset-2 hover:text-amber-dark">waterhardheid check op postcode</Link>. Bij zacht water heeft een kalkfilter voor de douche weinig zin.
            </p>
            <div className="mt-8 relative rounded-3xl overflow-hidden border border-edge aspect-[16/9]">
              <Image src="/assets/img/twee-kranen.jpg" alt="Kranen in de badkamer: wat doet een waterfilter voor de douche tegen kalk" fill sizes="(min-width: 1024px) 896px, 100vw" className="object-cover" />
            </div>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Huid en haar</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Helpt een douchefilter tegen een droge huid of eczeem?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Veel verkopers beloven een zachtere huid en glanzender haar. Het beste onderzoek dat hiernaar gedaan is, is de Engelse <strong className="text-ink">SWET-studie</strong> uit 2011. Kinderen met eczeem kregen thuis een waterontharder, die veel meer kalk weghaalt dan een douchefilter. Na drie maanden was hun eczeem niet duidelijk beter dan bij kinderen die gewoon hun normale behandeling volgden.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Dat betekent niet dat niemand verschil merkt. Sommige mensen vinden zachter water prettiger op hun huid en haar. Maar harde bewijzen voor een gezondheidseffect zijn er niet. Heb je last van eczeem of een droge huid, vraag dan je huisarts of dermatoloog om advies.
            </p>
            <h3 className="mt-8 font-display text-xl font-bold">En PFAS onder de douche?</h3>
            <p className="mt-3 text-dim leading-relaxed">
              PFAS krijg je vooral binnen via eten en drinken. Via je huid onder de douche neem je veel minder op. Een klein douchefilter is ook niet gemaakt om PFAS tegen te houden. Wil je minder PFAS binnenkrijgen, dan begin je bij het water dat je drinkt. Hoe het bij jou zit, zie je met de <Link href="/pfas-check" className="underline hover:text-ink">PFAS-check</Link>.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat werkt dan wel tegen kalk in de douche?</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                ['Waterontharder op de hoofdleiding', 'Haalt kalk uit al het water in huis: douche, kranen, wasmachine en cv-ketel. De enige oplossing die echt structureel werkt bij hard water.', '/kennisbank/hoe-werkt-een-waterontharder'],
                ['Na het douchen even trekken', 'Een douchetrekker of doek na elke douchebeurt voorkomt de meeste aanslag. Gratis en verrassend effectief.', '/kennisbank/kalkaanslag-in-huis'],
                ['Douchekop ontkalken', 'Leg de douchekop een uur in schoonmaakazijn of citroenzuur. Zo houd je de stralen open.', '/kennisbank/kalkaanslag-in-huis'],
                ['Filter voor je drinkwater', 'Gaat het je om schoner water om te drinken? Filter dan het water uit de keukenkraan, niet de douche.', '/osmosesysteem'],
              ].map(([titel, tekst, href]) => (
                <Link key={titel} href={href} className="cursor-pointer reveal rounded-2xl card p-5 hover:border-amber transition-colors">
                  <p className="font-display font-bold text-ink">{titel}</p>
                  <p className="mt-2 text-sm text-dim leading-relaxed">{tekst}</p>
                </Link>
              ))}
            </div>
            <p className="mt-6 text-dim leading-relaxed">
              Twijfel je tussen een ontharder en een waterzuiveraar? Het verschil lees je in <Link href="/kennisbank/waterontharder-vs-waterzuiveraar" className="underline hover:text-ink">waterontharder of waterzuiveraar</Link>.
            </p>
            <TussenCta titel="Schoon drinkwater, niet onder de douche maar uit de keukenkraan">
              Ons osmosesysteem onder het aanrecht houdt kalk, PFAS, medicijnresten en microplastics tegen in het water dat je drinkt en waarmee je kookt.
            </TussenCta>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Toch een douchefilter?</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waar let je op als je er toch een koopt?</h2>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Wat zit erin?</strong> Kijk welke vulling het filter heeft. Is het alleen een chloorfilter, dan heb je er in Nederland weinig aan.</li>
              <li><strong className="text-ink">Hoeveel liter gaat het mee?</strong> Een eerlijke fabrikant noemt een aantal liters of maanden. Ontbreekt dat, wees dan voorzichtig.</li>
              <li><strong className="text-ink">Wat kost een nieuw patroon?</strong> De filterhouder is vaak goedkoop, de vervangpatronen niet.</li>
              <li><strong className="text-ink">Vervang op tijd.</strong> Op een vol of oud filter kunnen bacteriën groeien. Het Voedingscentrum waarschuwt dat een filter het water zelfs slechter kan maken als je het niet op tijd vervangt.</li>
              <li><strong className="text-ink">Geloof geen wondermiddel.</strong> Beloftes als &quot;99% minder kalk&quot; of &quot;geneest eczeem&quot; zijn niet onafhankelijk getest.</li>
            </ul>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over een waterfilter voor de douche</h2>
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
            <div className="mt-12">
              <p className="font-display font-bold text-ink">Bronnen</p>
              <ul className="mt-3 space-y-1 text-sm text-dim list-disc pl-5">
                <li><a href="https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1000395" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Thomas e.a. (2011), Softened Water Eczema Trial (SWET), PLOS Medicine</a></li>
                <li><a href="https://www.voedingscentrum.nl/encyclopedie/water.aspx" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Voedingscentrum: water</a></li>
                <li><a href="https://www.drinkwaterplatform.nl/waterfilters-de-zin-en-onzin/" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Drinkwaterplatform: waterfilters, de zin en onzin (15 oktober 2026)</a></li>
                <li><a href="https://www.welingelichtekringen.nl/samenleving/een-waterfilterkan-tegen-pfas-vervang-je-het-filter-te-laat-dan-kan-er-juist-meer-pfas-in-je-water-zitten" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Welingelichte Kringen: Consumentenbond over waterfilters (11 november 2026)</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Filter het water dat je drinkt</h2>
            <p className="mt-4 text-white/70">Een osmosesysteem onder je aanrecht levert gefilterd water direct uit de kraan, zonder opslagtank. Vraag vrijblijvend een offerte aan.</p>
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

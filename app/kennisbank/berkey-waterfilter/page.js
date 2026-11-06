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
  alternates: { canonical: '/kennisbank/berkey-waterfilter' },
  title: 'Waterfilter Berkey: hoe het werkt en wat het kan',
  description:
    'Waterfilter Berkey: hoe dit zwaartekrachtfilter werkt, wat over de filters bekend is, de discussie in de VS en het verschil met osmose.',
  openGraph: {
    title: 'Waterfilter Berkey: hoe het werkt en wat het kan',
    description: 'Hoe een Berkey-waterfilter werkt, wat wel en niet is bewezen, wat er in de VS speelt en wanneer een osmosesysteem beter past.',
    url: 'https://www.water-zuivering.nl/kennisbank/berkey-waterfilter',
    images: ['/assets/img/countertop.png'],
  },
};

const TABEL = [['Plek', 'Op het aanrecht of meenemen', 'Onder het aanrecht, 10,5 × 42 × 43 cm'], ['Stroom en aansluiting', 'Niet nodig', 'Stopcontact, afvoer en wateraansluiting nodig'], ['Water tappen', 'Zelf vullen, filteren kost tijd', 'Direct uit de kraan, 1,58 liter per minuut'], ['Geschikt bij stroomuitval', 'Ja', 'Nee'], ['Werking', 'Filterelementen', 'Voorfilter, membraan van 0,0001 micron, nafilter'], ['Vervangen', 'Volgens dealers na ongeveer 22.700 liter per paar', 'Voor- en nafilter elk jaar, membraan elke 2 jaar'], ['Gemaakt voor', 'Onderweg, afgelegen plekken, noodsituaties', 'Elke dag thuis drinkwater uit de kraan']];

const FAQ = [['Wat is een waterfilter Berkey?', 'Een waterfilter dat werkt op zwaartekracht. Je giet water in een bovenste bak, het zakt door filterelementen en je tapt het onderin af. Er is geen stroom of aansluiting voor nodig.'], ['Hoe lang gaan Berkey-filters mee?', 'Dealers noemen ongeveer 22.700 liter per paar Black Berkey-elementen. Dat is een opgave van verkopers. Hoe lang ze in de praktijk meegaan, hangt ook af van het water dat je filtert.'], ['Filtert een Berkey PFAS?', 'Berkey en dealers claimen dat wel, maar we vonden daarvoor geen onafhankelijke certificering volgens NSF/ANSI 53 of 58, de normen die de Amerikaanse EPA noemt voor PFAS.'], ['Is de Berkey verboden?', 'In Nederland hebben we geen verbod gevonden. In de VS gaf de EPA stop-sale-bevelen voor de Black Berkey-elementen, omdat die volgens de toezichthouder onder de regels voor bestrijdingsmiddelen vallen. De fabrikant bestrijdt dat.'], ['Wat is het verschil tussen Berkey en British Berkefeld?', 'Het zijn verschillende merknamen die allebei bekendstaan om zwaartekrachtfilters. Vergelijk altijd het precieze model en de filterkaarsen, want daar zit het verschil in.'], ['Is een Berkey beter dan omgekeerde osmose?', 'Ze zijn voor iets anders gemaakt. Een Berkey werkt overal zonder stroom. Osmose filtert via een membraan van 0,0001 micron en levert direct uit de kraan, maar heeft een aansluiting nodig.']];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline='Waterfilter Berkey: hoe het werkt en wat het kan'
        description='Hoe een Berkey-waterfilter werkt, wat wel en niet is bewezen, wat er in de VS speelt en wanneer een osmosesysteem beter past.'
        image="https://www.water-zuivering.nl/assets/img/countertop.png"
        url="https://www.water-zuivering.nl/kennisbank/berkey-waterfilter"
        datePublished="2026-11-02"
        about={{ '@type': 'Brand', name: 'Berkey' }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Waterfilter Berkey', url: 'https://www.water-zuivering.nl/kennisbank/berkey-waterfilter' },
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
              Waterfilter Berkey: hoe het werkt en wat het kan
            </h1>
            <p className="mt-5 text-dim text-lg">
              Een <strong className="text-ink">waterfilter Berkey</strong> kom je vaak tegen bij mensen die onafhankelijk willen zijn van stroom en leiding. Het is een grote roestvrijstalen bak die water filtert met alleen de zwaartekracht. Maar wat is er echt over bekend? Hier lees je hoe het werkt, waar de discussie over gaat en voor wie het past. We verkopen zelf osmosesystemen en geen Berkey, en we noemen onze bronnen.
            </p>
            <KortAntwoord bron={{ naam: 'Berkey Filters: uitleg fabrikant', url: 'https://support.berkeywater.com/berkey-water-systems-not-going-out-of-business/' }}>
              Een Berkey-waterfilter is een zwaartekrachtfilter: je giet water in de bovenste bak en het zakt door filterelementen naar de onderste. Het werkt zonder stroom of aansluiting. De prestaties komen vooral uit opgaven van de fabrikant. In de VS loopt al sinds 2022 een conflict met de milieutoezichthouder EPA over de filters.
            </KortAntwoord>
            <AuteurRegel />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Zo werkt het</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoe werkt een Berkey-waterfilter?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Een Berkey bestaat uit twee op elkaar geplaatste bakken. Bovenin hangen de filterelementen, meestal Black Berkey genoemd. Je vult de bovenste bak en de zwaartekracht doet de rest. Het gefilterde water komt onderin terecht, en dat tap je af met een kraantje.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Dat heeft een paar duidelijke voordelen. Je hebt <strong className="text-ink">geen stroom, druk of aansluiting</strong> nodig, dus het werkt ook op een camping of bij een storing. Daarom is de Berkey populair bij kampeerders en mensen die zich voorbereiden op noodsituaties. Het nadeel is ook duidelijk: je moet hem zelf vullen, en filteren kost tijd omdat alleen de zwaartekracht het water door de elementen duwt.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Een Berkey is een bekend merk, maar het principe niet alleen. Andere zwaartekrachtfilters werken net zo. British Berkefeld is een andere merknaam die vaak in dezelfde adem wordt genoemd en die ook keramische filterkaarsen gebruikt. Hoe dit type zich verhoudt tot andere manieren van filteren, lees je bij <Link href="/waterzuivering-voor-thuis" className="underline hover:text-ink">waterzuivering voor thuis</Link>.
            </p>
          </div>
        </section>
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat filtert een waterfilter Berkey, en is dat bewezen?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Verkopers noemen lange lijsten met stoffen die de elementen zouden tegenhouden. Daar zit een belangrijke kanttekening bij: veel van die cijfers komen van de fabrikant en de dealers zelf.
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Levensduur:</strong> dealers noemen ongeveer 22.700 liter per paar Black Berkey-elementen. Dat is een opgave van verkopers en geen onafhankelijke meting.</li>
              <li><strong className="text-ink">Certificering:</strong> de nieuwere Phoenix-elementen zijn volgens Berkey gecertificeerd volgens NSF/ANSI 42 en 372. Die normen gaan over onder meer smaak en loodvrij materiaal, niet over PFAS.</li>
              <li><strong className="text-ink">PFAS:</strong> de Amerikaanse EPA adviseert voor PFAS te letten op NSF/ANSI 53 of 58. Voor de PFAS-claims van Berkey vonden we geen onafhankelijke certificering volgens zo&apos;n norm.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Dat betekent niet dat een Berkey niets doet. Het betekent wel dat je cijfers van verkopers niet als bewijs moet lezen. Wil je PFAS uit je water, lees dan <Link href="/kennisbank/pfas-vrij-water" className="underline hover:text-ink">PFAS-vrij water</Link>, waarin we de manieren van filteren vergelijken.
            </p>
            <TussenCta titel="Zeker weten wat je filter doet?" pfasEerst>
              Een osmosemembraan van 0,0001 micron houdt ook kleine PFAS-moleculen grotendeels tegen. Check eerst hoe het in jouw regio zit.
            </TussenCta>
          </div>
        </section>
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">In de VS</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat speelt er rond Berkey in Amerika?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              De Amerikaanse milieutoezichthouder EPA gaf in 2022 en 2023 stop-sale-bevelen voor de Black Berkey-elementen. De reden: de filters bevatten zilver en werden aangeprezen met claims tegen ziekteverwekkers, waardoor ze volgens de EPA onder de regels voor bestrijdingsmiddelen vallen. Dat is dus geen uitspraak over de vraag of het water gevaarlijk is.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Fabrikant New Millennium Concepts is het daar niet mee eens en heeft de EPA aangeklaagd. Het bedrijf stelt dat het zilver alleen in het filtermateriaal zit en niet in het water komt. Volgens de berichten die we vonden, oordeelde een rechter in eerste aanleg dat het bedrijf de zaak niet op die manier kon aanspannen, en loopt er een hoger beroep.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Dit gaat om Amerikaanse regels. Voor Nederland heeft dit geen directe gevolgen, maar het kan wel invloed hebben op de beschikbaarheid van vervangende elementen. Koop je een waterfilter Berkey, vraag je verkoper dan welke elementen er nu worden geleverd, en of die er over een paar jaar nog zijn.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Berkey of osmosesysteem?</h2>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-edge">
              <table className="w-full text-sm text-left">
                <thead className="bg-surface text-ink">
                  <tr><th scope="col" className="px-4 py-3 font-semibold"></th><th scope="col" className="px-4 py-3 font-semibold">Berkey (zwaartekracht)</th><th scope="col" className="px-4 py-3 font-semibold">Osmosesysteem onder het aanrecht</th></tr>
                </thead>
                <tbody>
                  {TABEL.map((rij) => (
                    <tr key={rij[0]} className="border-t border-edge">
                      {rij.map((cel, i) => (
                        <td key={i} className={`px-4 py-3 ${i === 0 ? 'font-semibold text-ink' : 'text-dim'}`}>{cel}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-dim">De gegevens over Berkey komen van de fabrikant en dealers, en niet uit een onafhankelijke test. Onze eigen specificaties staan bij het osmosesysteem.</p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
              <Image src="/assets/img/countertop.png" alt='Waterfilter Berkey vergeleken met een filtersysteem op het aanrecht' fill loading="eager" sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain bg-white" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Keuzehulp</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Voor wie past een waterfilter Berkey?</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Een <strong className="text-ink">waterfilter Berkey</strong> past vooral als je geen aansluiting hebt of wilt: in een vakantiehuisje, tijdens een reis of als reserve voor noodgevallen. Ook wie niets aan de keuken wil veranderen, zit er goed mee. Wat een filter in een noodgeval wel en niet doet, lees je in <Link href="/kennisbank/water-zuiveren-noodsituatie" className="underline hover:text-ink">water zuiveren in een noodsituatie</Link>.
              </p>
              <p className="mt-4 text-dim leading-relaxed">
                Wil je elke dag zonder moeite gefilterd water uit de kraan, dan past een vast systeem meestal beter. Ons <Link href="/osmosesysteem" className="underline hover:text-ink">osmosesysteem</Link> werkt zonder opslagtank en filtert op het moment dat je tapt. Past dat in jouw keuken? Dat zie je met de <Link href="/maatcheck" className="underline hover:text-ink">maatcheck</Link>.
              </p>
              <p className="mt-4 text-dim leading-relaxed">
                De twee sluiten elkaar niet uit: een vast systeem voor elke dag werkt niet zonder stroom, dus voor een noodsituatie is een zwaartekrachtfilter een aanvulling.
              </p>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over een waterfilter Berkey</h2>
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
                <li><a href="https://support.berkeywater.com/berkey-water-systems-not-going-out-of-business/" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Berkey Filters: reactie op de situatie rond de EPA</a></li>
                <li><a href="https://www.greenmatters.com/health-and-wellness/berkey-lawsuit-2023" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Green Matters: de rechtszaak van Berkey tegen de EPA</a></li>
                <li><a href="https://www.aol.com/news/384-water-filter-cult-following-100051356.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">AOL / Los Angeles Times: de discussie over Berkey</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Elke dag gefilterd water uit je kraan?</h2>
            <p className="mt-4 text-white/70">Een osmosesysteem filtert op het moment dat je tapt, zonder bakken te vullen. Vanaf €999 exclusief montage. Vraag vrijblijvend een offerte aan.</p>
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

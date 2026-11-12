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
  alternates: { canonical: '/kennisbank/bruisend-water' },
  title: 'Bruisend water: wat is het en is het gezond?',
  description:
    'Bruisend water, spuitwater of sodawater: wat is het verschil, is water met prik gezond voor je tanden en hoe maak je het zelf van kraanwater?',
  openGraph: {
    title: 'Bruisend water: wat is het en is het gezond?',
    description: 'Wat bruisend water is, het verschil met spuitwater, sodawater en mineraalwater, of het gezond is en hoe je het zelf maakt.',
    url: 'https://www.water-zuivering.nl/kennisbank/bruisend-water',
    images: ['/assets/img/glas-water.webp'],
  },
};

const NAMEN = [
  ['Bruisend water / bruiswater', 'Water waar koolzuurgas (CO₂) in is opgelost. De algemene naam.'],
  ['Spuitwater', 'Hetzelfde als bruisend water. Vooral in België en het zuiden van Nederland gebruikt.'],
  ['Sodawater', 'Ook water met koolzuur. Soms zijn er een paar mineralen of zouten aan toegevoegd voor de smaak, bijvoorbeeld in cocktails.'],
  ['Koolzuurhoudend water / water met prik', 'Gewone omschrijvingen voor hetzelfde: water met bubbels.'],
  ['Mineraalwater met koolzuur', 'Natuurlijk mineraalwater uit een beschermde bron, waar koolzuur in zit of aan is toegevoegd. Het verschil zit in de bron, niet in de bubbels.'],
];

const FAQ = [
  ['Is bruisend water gezond?', 'Ja. Het Voedingscentrum rekent alle soorten water tot de Schijf van Vijf, ook water met prik. Het telt dus net zo mee voor je vochtinname als plat water. Let alleen op water met een smaakje: zit er citroenzuur, suiker of zoetstof in, dan rekent het Voedingscentrum het tot frisdrank.'],
  ['Is bruisend water slecht voor je tanden?', 'Nee. Water met koolzuur is iets zuurder dan plat water, maar volgens het Voedingscentrum niet zo zuur dat het slecht is voor je tanden. Water met toegevoegd citroenzuur (E 330) is wel slechter voor je glazuur.'],
  ['Wat is het verschil tussen bruisend water en spuitwater?', 'Er is geen verschil. Bruisend water, bruiswater en spuitwater zijn verschillende namen voor water met opgelost koolzuurgas. Spuitwater zeg je vooral in België en het zuiden van Nederland.'],
  ['Wat is het verschil tussen sodawater en bruisend water?', 'Sodawater is ook water met koolzuur. Soms zijn er een paar mineralen of zouten aan toegevoegd voor de smaak. In de praktijk gebruiken veel mensen de namen door elkaar.'],
  ['Is mineraalwater met bubbels gezonder dan bruisend kraanwater?', 'Nee. Volgens het Voedingscentrum is mineraalwater of bronwater niet gezonder dan kraanwater. Kraanwater bevat zelfs ongeveer evenveel of meer calcium: zo’n 5 mg per 100 ml, tegen ongeveer 3 mg in mineraalwater.'],
  ['Krijg je een opgeblazen gevoel van bruisend water?', 'Sommige mensen wel, omdat het koolzuur als gas in je maag komt. Heb je last van een opgeblazen buik of brandend maagzuur, probeer dan zelf of plat water je beter bevalt.'],
  ['Hoe maak je zelf bruisend water?', 'Met een sodamachine en een koolzuurcilinder, of met een kraan die bruisend water geeft. Begin met goed koud water: koolzuur lost beter op in koud water, dus het bruist langer. Gefilterd kraanwater geeft een neutrale, frisse basis.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Bruisend water: wat is het en is het gezond?"
        description="Wat bruisend water is, het verschil met spuitwater, sodawater en mineraalwater, of het gezond is en hoe je het zelf maakt van kraanwater."
        image="https://www.water-zuivering.nl/assets/img/glas-water.webp"
        url="https://www.water-zuivering.nl/kennisbank/bruisend-water"
        datePublished="2026-11-12"
        dateModified="2026-11-12"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Bruisend water', url: 'https://www.water-zuivering.nl/kennisbank/bruisend-water' },
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
              Bruisend water: wat is het en is het gezond?
            </h1>
            <p className="mt-5 text-dim text-lg">
              <strong className="text-ink">Bruisend water</strong> is voor veel mensen dé manier om meer water te drinken. Maar wat is het precies, is het verschil met spuitwater of sodawater groot, en is al dat koolzuur wel goed voor je tanden? Hier lees je het antwoord, plus hoe je bruisend water zelf maakt van kraanwater.
            </p>
            <KortAntwoord bron={{ naam: 'Voedingscentrum: water', url: 'https://www.voedingscentrum.nl/encyclopedie/water.aspx' }}>
              Bruisend water is water met opgelost koolzuurgas (CO₂). Het is net zo gezond als plat water: het Voedingscentrum rekent water met en zonder prik tot de Schijf van Vijf. Het is iets zuurder, maar niet slecht voor je tanden. Pas op met smaakjes waar citroenzuur in zit.
            </KortAntwoord>
            <AuteurRegel bijgewerkt="12 november 2026" />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Wat is het?</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Bruisend water, spuitwater, sodawater: wat is het verschil?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              De bubbels komen van koolzuurgas, ofwel CO₂. Onder druk lost dat gas op in water. Zodra je de fles opendraait, daalt de druk en komt het gas weer vrij als belletjes. Een deel van het CO₂ vormt in het water koolzuur, een zwak zuur. Dat geeft de typische frisse, licht prikkende smaak.
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-surface text-ink">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">Naam</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Wat het is</th>
                  </tr>
                </thead>
                <tbody>
                  {NAMEN.map(([naam, uitleg]) => (
                    <tr key={naam} className="border-t border-edge">
                      <td className="px-4 py-3 font-semibold text-ink align-top">{naam}</td>
                      <td className="px-4 py-3 text-dim">{uitleg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-dim leading-relaxed">
              Kortom: het verschil zit vooral in de naam en in het water waar je mee begint. Bubbels in kraanwater, in bronwater of in mineraalwater zijn chemisch precies hetzelfde. Meer over het verschil tussen bron- en mineraalwater lees je in <Link href="/kennisbank/bronwater" className="underline hover:text-ink">bronwater: wat is het?</Link>
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Gezondheid</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Is bruisend water gezond?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Ja. Het Voedingscentrum zet <strong className="text-ink">alle soorten water in de Schijf van Vijf</strong>: met of zonder prik, en ook water met een natuurlijk aroma. Bruisend water telt dus volledig mee voor de 1,5 tot 2 liter vocht die je per dag nodig hebt. Het Voedingscentrum noemt bruisend water zelfs als tip voor wie gewoon water saai vindt.
            </p>

            <h3 className="mt-8 font-display text-xl font-bold">Je tanden</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Water met koolzuur is iets zuurder dan plat water. Volgens het Voedingscentrum is dat niet zo veel dat het slecht is voor je tanden. Het echte risico zit in wat erbij komt: water met een smaakje waar <strong className="text-ink">citroenzuur (E 330)</strong> in zit, is wel slecht voor je glazuur. Zitten er suikers, zoetstoffen of voedingszuren in, dan rekent het Voedingscentrum het tot frisdrank.
            </p>

            <h3 className="mt-8 font-display text-xl font-bold">Je maag</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Het gas uit bruisend water komt in je maag terecht. Sommige mensen krijgen daar een opgeblazen gevoel van, of merken dat brandend maagzuur erger wordt. Heb je daar last van, kies dan vaker voor plat water. Voor de meeste mensen maakt het niets uit.
            </p>

            <h3 className="mt-8 font-display text-xl font-bold">Mineraalwater met bubbels: gezonder?</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Nee. Het Voedingscentrum schrijft dat bronwater of mineraalwater niet gezonder is dan kraanwater. In Nederlands kraanwater zit zelfs ongeveer 5 mg calcium per 100 ml, tegen ongeveer 3 mg in mineraalwater. Wat je wel betaalt voor fleswater: de fles, het vervoer en het plastic. Het hele rekensommetje staat in <Link href="/kennisbank/kraanwater-vs-flessenwater" className="underline hover:text-ink">kraanwater vs. flessenwater</Link>.
            </p>
            <div className="mt-8 relative rounded-3xl overflow-hidden border border-edge aspect-[16/9]">
              <Image src="/assets/img/glas-water.webp" alt="Glas bruisend water van gefilterd kraanwater" fill sizes="(min-width: 1024px) 896px, 100vw" className="object-cover" />
            </div>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Zelf maken</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoe maak je zelf bruisend water van kraanwater?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Je hoeft geen kratten water meer te sjouwen. Er zijn twee manieren om thuis bruisend water te maken:
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="reveal rounded-2xl card p-5">
                <p className="font-display font-bold text-ink">Sodamachine met cilinder</p>
                <p className="mt-2 text-sm text-dim leading-relaxed">Een apparaat op het aanrecht met een koolzuurcilinder. Je vult een fles met kraanwater en spuit er koolzuur in. Goedkoop om mee te beginnen; de lege cilinder ruil je in de winkel om.</p>
              </div>
              <div className="reveal rounded-2xl card p-5">
                <p className="font-display font-bold text-ink">Kraan met bruisend water</p>
                <p className="mt-2 text-sm text-dim leading-relaxed">Een kraan met een koolzuurunit onder het aanrecht, die gekoeld bruisend water tapt. Duurder in aanschaf, maar het gemakkelijkst als je veel bruisend water drinkt.</p>
              </div>
            </div>
            <h3 className="mt-8 font-display text-xl font-bold">Zo bruist het beter en langer</h3>
            <ul className="mt-3 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Gebruik koud water.</strong> Koolzuur lost veel beter op in koud water. Water uit de koelkast bruist langer dan water op kamertemperatuur.</li>
              <li><strong className="text-ink">Draai de fles snel dicht.</strong> Hoe langer de fles open staat, hoe meer koolzuur ontsnapt.</li>
              <li><strong className="text-ink">Begin met water dat lekker smaakt.</strong> Bubbels versterken de smaak van het water. Smaakt je kraanwater naar de leiding of naar kalk, dan proef je dat in bruisend water nog meer.</li>
              <li><strong className="text-ink">Maak smaakjes zelf.</strong> Een schijfje komkommer, munt of een paar bessen geeft smaak zonder citroenzuur of suiker.</li>
            </ul>
            <TussenCta titel="Een frisse basis voor je bruisend water">
              Met een osmosesysteem onder het aanrecht tap je gefilterd water direct uit de kraan: zonder kalk, PFAS en medicijnresten. Een neutrale basis voor plat én bruisend water.
            </TussenCta>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Bruisend water uit de fles of zelf maken?</h2>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-edge">
              <table className="w-full text-sm text-left">
                <thead className="bg-surface text-ink">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold"></th>
                    <th scope="col" className="px-4 py-3 font-semibold">Fles uit de winkel</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Zelf maken van kraanwater</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Gemak', 'Kopen, sjouwen, flessen inleveren', 'Altijd vers, zoveel je wilt'],
                    ['Afval', 'Plastic of glazen flessen', 'Alleen een herbruikbare fles of glas'],
                    ['Smaak', 'Afhankelijk van het merk en de bron', 'Afhankelijk van je kraanwater, of gefilterd water'],
                    ['Hoeveel prik', 'Vast per merk', 'Zelf te kiezen'],
                    ['Gezondheid', 'Gelijk: beide staan in de Schijf van Vijf', 'Gelijk: beide staan in de Schijf van Vijf'],
                  ].map((rij) => (
                    <tr key={rij[0]} className="border-t border-edge">
                      {rij.map((cel, i) => (
                        <td key={i} className={`px-4 py-3 ${i === 0 ? 'font-semibold text-ink' : 'text-dim'}`}>{cel}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-dim leading-relaxed">
              Liever gekoeld water uit een tapje? Lees dan ook <Link href="/kennisbank/waterkoeler-thuis" className="underline hover:text-ink">waterkoeler thuis</Link>, waarin we flessen, leidingkoelers en filterkranen vergelijken.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over bruisend water</h2>
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
                <li><a href="https://www.voedingscentrum.nl/encyclopedie/water.aspx" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Voedingscentrum: water (Schijf van Vijf, tanden, mineraalwater)</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Lekker water begint bij de kraan</h2>
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

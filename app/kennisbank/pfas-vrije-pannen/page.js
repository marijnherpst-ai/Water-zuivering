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
  alternates: { canonical: '/kennisbank/pfas-vrije-pannen' },
  title: 'PFAS-vrije pannen: welke pan is echt zonder PFAS?',
  description:
    'PFAS-vrije pannen herkennen: welke koekenpan, hapjespan of braadpan is echt zonder PFAS, is je oude pan nog veilig en hoe zit het met bakpapier?',
  openGraph: {
    title: 'PFAS-vrije pannen: welke pan is echt zonder PFAS?',
    description: 'Keramisch, gietijzer, plaatstaal of rvs: welke pannen geen PFAS bevatten, wat "PFOA-vrij" echt betekent en waar je thuis nog meer PFAS tegenkomt.',
    url: 'https://www.water-zuivering.nl/kennisbank/pfas-vrije-pannen',
    images: ['/assets/img/kennisbank/pfas-in-kraanwater.png'],
  },
};

const PANNEN = [
  ['Antiaanbaklaag van PTFE (teflon)', 'Ja', 'Niets bakt aan, weinig vet nodig', 'De laag slijt en kan slecht tegen krassen en tegen hitte boven 260 °C'],
  ['Keramische antiaanbaklaag', 'Nee', 'Wel het gemak van een gladde laag', 'De laag slijt ook: na een paar jaar bakt er meer aan'],
  ['Gietijzer', 'Nee', 'Gaat een leven lang mee, kan heel heet worden', 'Zwaar, en je moet de pan eerst inbranden'],
  ['Plaatstaal (koolstofstaal)', 'Nee', 'Lichter dan gietijzer, wordt met de tijd steeds gladder', 'Ook inbranden, en niet in de vaatwasser'],
  ['Roestvrij staal (rvs)', 'Nee', 'Onverwoestbaar en vaatwasserbestendig', 'Bak met genoeg vet en laat de pan goed heet worden'],
  ['Geëmailleerd gietijzer', 'Nee', 'Geen inbranden nodig, ideaal voor stoven', 'Zwaar, en emaille kan beschadigen als de pan valt'],
];

const SOORTEN = [
  ['Koekenpan zonder PFAS', 'Voor een ei of pannenkoek is een keramische laag het makkelijkst. Bak je vaak vlees op hoog vuur, dan is plaatstaal of gietijzer een betere keuze.'],
  ['Hapjespan zonder PFAS', 'Een hapjespan gebruik je voor sauzen en stoofgerechten. Rvs of een keramische laag werkt hier goed. Zure sauzen, zoals tomatensaus, tasten de ingebrande laag van gietijzer en plaatstaal aan.'],
  ['Wok zonder PFAS', 'Wokken doe je op hoog vuur. Daar kan plaatstaal goed tegen. Een antiaanbaklaag van PTFE is hier juist minder geschikt, omdat de pan snel te heet wordt.'],
  ['Braadpan zonder PFAS', 'Braadpannen zijn vaak van gietijzer, al dan niet geëmailleerd. Daar zit geen PFAS in. Ze houden de warmte lang vast.'],
];

const IN_HUIS = [
  ['Bakpapier en voedselverpakkingen', 'Bakpapier, pizzadozen en fastfoodverpakkingen kunnen PFAS bevatten om vet tegen te houden. Er is ook bakpapier met een laagje siliconen in plaats van PFAS. Staat er niets op de verpakking, vraag het dan aan de fabrikant.'],
  ['Regenkleding en outdoorkleding', 'Waterafstotende jassen, ski-kleding en schoenen krijgen hun werking soms van PFAS. Steeds meer merken zetten "PFAS-vrij" of "PFC-vrij" op het label.'],
  ['Impregneerspray en ski-wax', 'Hier zit PFAS los in het product. Daardoor komt het volgens het RIVM veel makkelijker vrij dan uit een pan of jas. Er bestaan sprays en wax zonder PFAS.'],
  ['Cosmetica en verzorging', 'Kijk op de ingrediëntenlijst. Staat er "fluor" of "perfluoro" in de naam van een ingrediënt, dan kan het een PFAS zijn.'],
];

const FAQ = [
  ['Welke pannen zijn PFAS-vrij?', 'Pannen van gietijzer, plaatstaal (koolstofstaal), roestvrij staal en geëmailleerd gietijzer bevatten geen PFAS, omdat ze geen kunststof antiaanbaklaag hebben. Pannen met een keramische antiaanbaklaag zijn ook PFAS-vrij. In een klassieke zwarte antiaanbaklaag van PTFE zit wel PFAS.'],
  ['Is "PFOA-vrij" hetzelfde als PFAS-vrij?', 'Nee. PFOA is één stof uit de grote groep PFAS, en die is in de Europese Unie al jaren verboden. Elke nieuwe pan is dus PFOA-vrij. In een antiaanbaklaag van PTFE zit nog steeds een andere PFAS. Alleen als er "PFAS-vrij" op de pan staat, of als de pan geen kunststof antiaanbaklaag heeft, zit er geen PFAS in.'],
  ['Moet ik mijn pan met antiaanbaklaag weggooien?', 'Niet als de laag nog heel is. Volgens de Rijksoverheid is een pan met antiaanbaklaag bij normaal gebruik veilig. Is de laag beschadigd of laat hij los, dan is de pan niet meer bruikbaar en gooi je hem weg of lever je hem in.'],
  ['Komt er PFAS vrij als ik bak in een antiaanbakpan?', 'Bij normaal gebruik nauwelijks. Wordt de pan te heet, dan kunnen er volgens de Rijksoverheid heel kleine hoeveelheden PFAS vrijkomen. De Consumentenbond noemt 260 °C als grens waarboven de laag beschadigt. Verhit zo’n pan daarom nooit leeg.'],
  ['Zit er PFAS in bakpapier?', 'Dat kan. Het RIVM noemt bakpapier als product waarin PFAS kan zitten. Er is ook bakpapier zonder PFAS te koop, meestal met een siliconenlaagje. Staat het niet op de verpakking, dan mag je het navragen bij de leverancier. Die moet je binnen 45 dagen gratis antwoord geven.'],
  ['Waar krijg ik de meeste PFAS van binnen?', 'Via eten en drinkwater, zegt het RIVM. Uit producten zoals pannen en kleding komt bij normaal gebruik weinig PFAS vrij. Een PFAS-vrije pan is dus een goede stap, maar het grootste deel van de PFAS in je lichaam komt uit wat je eet en drinkt.'],
  ['Waar lever ik een oude pan met antiaanbaklaag in?', 'Bij de milieustraat van je gemeente, bij een handelaar in oud ijzer of bij sommige winkels die oude pannen inzamelen. Dan wordt het metaal gerecycled. Bij het restafval mag ook.'],
  ['Is een keramische pan beter dan een teflonpan?', 'Een keramische laag bevat geen PFAS en kan beter tegen hoge temperaturen. Daar staat tegenover dat de laag ook slijt: na een paar jaar bakt er meer aan. Een pan van gietijzer, plaatstaal of rvs gaat veel langer mee.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="PFAS-vrije pannen: welke pan is echt zonder PFAS?"
        description="Welke koekenpan, hapjespan of braadpan is echt zonder PFAS, is je oude pan nog veilig en hoe zit het met bakpapier en andere producten in huis?"
        image="https://www.water-zuivering.nl/assets/img/kennisbank/pfas-in-kraanwater.png"
        url="https://www.water-zuivering.nl/kennisbank/pfas-vrije-pannen"
        datePublished="2026-11-12"
        dateModified="2026-11-12"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'PFAS-vrije pannen', url: 'https://www.water-zuivering.nl/kennisbank/pfas-vrije-pannen' },
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
              PFAS-vrije pannen: welke pan is echt zonder PFAS?
            </h1>
            <p className="mt-5 text-dim text-lg">
              Steeds meer mensen zoeken <strong className="text-ink">PFAS-vrije pannen</strong>. Logisch, want in de klassieke antiaanbaklaag zit PFAS. Maar welke pan is echt zonder PFAS, wat betekent &quot;PFOA-vrij&quot; op de verpakking en moet je oude pan nu de deur uit? We zetten het op een rij, met wat het RIVM en de Rijksoverheid erover zeggen. We verkopen zelf geen pannen, alleen waterzuiveraars. Daarom kunnen we het eerlijk vertellen.
            </p>
            <KortAntwoord bron={{ naam: 'Rijksoverheid: PFAS in mijn antiaanbakpan', url: 'https://www.rijksoverheid.nl/onderwerpen/pfas/vraag-en-antwoord/er-zitten-pfas-in-mijn-antiaanbakpan-moet-ik-deze-weggooien' }}>
              Pannen van gietijzer, plaatstaal, rvs en pannen met een keramische laag zijn PFAS-vrij. In een antiaanbaklaag van PTFE (teflon) zit wel PFAS. Zo&apos;n pan is bij normaal gebruik veilig. Is de laag beschadigd, gooi de pan dan weg. &quot;PFOA-vrij&quot; betekent niet dat een pan PFAS-vrij is.
            </KortAntwoord>
            <AuteurRegel bijgewerkt="12 november 2026" />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Overzicht</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Welke pannen zijn PFAS-vrij?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              PFAS zit niet in het metaal van een pan, maar in de antiaanbaklaag. De regel is dus simpel: een pan zonder kunststof antiaanbaklaag is altijd PFAS-vrij. Heeft de pan wel een gladde laag, dan hangt het af van het soort laag.
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-surface text-ink">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">Soort pan</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Zit er PFAS in?</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Voordeel</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Let op</th>
                  </tr>
                </thead>
                <tbody>
                  {PANNEN.map((rij) => (
                    <tr key={rij[0]} className="border-t border-edge">
                      {rij.map((cel, i) => (
                        <td key={i} className={`px-4 py-3 align-top ${i === 0 ? 'font-semibold text-ink' : i === 1 ? 'font-semibold ' + (cel === 'Ja' ? 'text-red-600' : 'text-emerald-700') : 'text-dim'}`}>{cel}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-dim leading-relaxed">
              Zie je een zwarte, gladde laag en staat er alleen &quot;antiaanbaklaag&quot; op de verpakking? Dan is het bijna altijd PTFE. Dat is de officiële naam van het materiaal dat de meeste mensen teflon noemen. PTFE hoort bij de PFAS.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">&quot;PFOA-vrij&quot; is niet hetzelfde als PFAS-vrij</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Op bijna elke pan staat &quot;PFOA-vrij&quot;. Dat klinkt goed, maar het zegt weinig. PFOA is één stof uit de grote groep PFAS, en die mag in de Europese Unie al jaren niet meer gebruikt worden. Elke nieuwe pan is dus PFOA-vrij. In de antiaanbaklaag van PTFE zit nog steeds een andere PFAS.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Het tv-programma Radar vroeg ruim 18.000 mensen wat ze dachten dat &quot;PFOA-vrij&quot; betekent. Bijna 1 op de 3 dacht dat er dan geen PFAS in de pan zit. Dat klopt dus niet. Wil je zeker weten dat een pan geen PFAS bevat, zoek dan naar de woorden <strong className="text-ink">&quot;PFAS-vrij&quot;</strong>, of kies een pan zonder kunststof antiaanbaklaag. Het verschil tussen de bekendste PFAS lees je in <Link href="/kennisbank/pfos-pfoa-verschil" className="underline hover:text-ink">PFOS en PFOA: het verschil</Link>.
            </p>

            <h2 className="mt-12 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Is je pan met antiaanbaklaag nog veilig?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Ja, als de laag nog heel is. De Rijksoverheid zegt het zo: gebruik je een pan met antiaanbaklaag volgens de gebruiksaanwijzing, dan is hij veilig voor je gezondheid. Het RIVM legt uit waarom: de PFAS zit vast in de laag, en daardoor komt er bij normaal gebruik maar heel weinig van vrij.
            </p>
            <p className="mt-4 text-dim leading-relaxed">Er zijn twee dingen waar je op moet letten:</p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Laat de pan niet te heet worden.</strong> Volgens de Consumentenbond beschadigt een PTFE-laag vanaf ongeveer 260 °C. Die temperatuur haal je alleen als je de pan leeg op het vuur zet. Doe er dus altijd eerst iets in.</li>
              <li><strong className="text-ink">Kras niet in de laag.</strong> Gebruik een houten of kunststof spatel in plaats van metaal, en geen schuursponsje bij het afwassen.</li>
              <li><strong className="text-ink">Is de laag beschadigd?</strong> Dan is de pan volgens de Rijksoverheid niet meer bruikbaar. Lever hem in bij de milieustraat, bij een handelaar in oud ijzer of bij een winkel die pannen inzamelt. Bij het restafval mag ook.</li>
            </ul>
            <div className="mt-8 relative rounded-3xl overflow-hidden border border-edge aspect-[16/9]">
              <Image src="/assets/img/kennisbank/pfas-in-kraanwater.png" alt="PFAS-vrije pannen: PFAS zit ook in drinkwater en voedsel" fill sizes="(min-width: 1024px) 896px, 100vw" className="object-cover" />
            </div>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Per soort pan</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Koekenpan, hapjespan, wok of braadpan zonder PFAS</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Welk materiaal het beste past, hangt af van wat je erin maakt. Eén pan voor alles bestaat niet.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {SOORTEN.map(([titel, tekst]) => (
                <div key={titel} className="reveal rounded-2xl card p-5">
                  <h3 className="font-display font-bold text-ink">{titel}</h3>
                  <p className="mt-2 text-sm text-dim leading-relaxed">{tekst}</p>
                </div>
              ))}
            </div>
            <h3 className="mt-10 font-display text-xl font-bold">Inbranden: zo maak je zelf een antiaanbaklaag</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Een pan van gietijzer of plaatstaal heeft geen laag als je hem koopt. Die maak je zelf. Verhit de pan met een dun laagje olie tot de olie gaat walmen, laat hem afkoelen en herhaal dat een paar keer. Zo ontstaat een donkere, gladde laag die bij elk gebruik beter wordt. Was de pan daarna alleen af met heet water, zonder afwasmiddel, en droog hem meteen af.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Bakpapier zonder PFAS en andere producten in huis</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Pannen zijn niet het enige product in huis waar PFAS in kan zitten. Fabrikanten gebruiken het overal waar iets water, vet of vuil moet afstoten. Het RIVM noemt onder meer deze producten:
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {IN_HUIS.map(([titel, tekst]) => (
                <div key={titel} className="reveal rounded-2xl card p-5">
                  <h3 className="font-display font-bold text-ink">{titel}</h3>
                  <p className="mt-2 text-sm text-dim leading-relaxed">{tekst}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-dim leading-relaxed">
              Twee tips van het RIVM die weinig moeite kosten. Wil je weten of er PFAS in een product zit, vraag het dan aan de leverancier: die moet je binnen 45 dagen gratis antwoord geven. En stofzuig en ventileer regelmatig, want PFAS uit producten komt ook in huisstof terecht.
            </p>

            <h2 className="mt-12 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waar krijg je de meeste PFAS van binnen?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Niet van je pan. Volgens het RIVM krijgen mensen PFAS vooral binnen via <strong className="text-ink">voedsel en drinkwater</strong>. Producten zoals pannen en kleding dragen bij normaal gebruik weinig bij. Het RIVM schrijft ook dat je aan PFAS in eten en drinkwater zelf weinig kunt doen, terwijl je producten met PFAS wel kunt laten staan.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Een PFAS-vrije pan kopen is dus een goede keuze, vooral omdat er dan minder PFAS gemaakt wordt en in het milieu komt. Maar het lost niet alles op. Hoeveel PFAS er in het kraanwater zit, verschilt per regio. In het westen van het land is dat gemiddeld meer dan in het oosten. Hoe het bij jou zit, zie je in een paar seconden met de <Link href="/pfas-check" className="font-semibold text-ink underline decoration-amber decoration-2 underline-offset-2 hover:text-amber-dark">PFAS-check op postcode</Link>. Meer achtergrond lees je in <Link href="/kennisbank/pfas-in-kraanwater" className="underline hover:text-ink">PFAS in kraanwater</Link> en op de <Link href="/kennisbank/pfas-kaart-nederland" className="underline hover:text-ink">PFAS-kaart van Nederland</Link>.
            </p>
            <TussenCta titel="Ook minder PFAS in het water waarmee je kookt?" pfasEerst>
              Koken haalt PFAS niet uit water. Een osmosesysteem onder het aanrecht doet dat wel: het membraan houdt PFAS tegen in het water dat je drinkt en waarmee je kookt.
            </TussenCta>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Regels</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Worden pannen met PFAS verboden?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Een paar PFAS zijn al verboden. PFOS, PFOA en PFHxS mogen in de Europese Unie niet meer in producten voor consumenten zitten. Maar er bestaan duizenden andere PFAS, en die mogen nog wel.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Nederland heeft samen met vier andere landen een voorstel ingediend om PFAS in heel Europa te verbieden. Komt dat verbod er, dan mag PFAS niet meer in producten voor consumenten verwerkt worden. Wanneer dat ingaat en welke uitzonderingen er komen, is nog niet bekend. Tot die tijd kies je zelf: een pan zonder PFAS is nu al overal te koop.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over PFAS-vrije pannen</h2>
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
                <li><a href="https://www.rijksoverheid.nl/onderwerpen/pfas/vraag-en-antwoord/er-zitten-pfas-in-mijn-antiaanbakpan-moet-ik-deze-weggooien" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Rijksoverheid: er zitten PFAS in mijn antiaanbakpan, moet ik deze weggooien?</a></li>
                <li><a href="https://www.rivm.nl/pfas/voedsel-producten-drinkwater/consumentenproducten" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">RIVM: PFAS in consumentenproducten</a></li>
                <li><a href="https://www.consumentenbond.nl/inductiekookplaat/zijn-teflonpannen-gevaarlijk" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Consumentenbond: zijn teflonpannen gevaarlijk?</a></li>
                <li><a href="https://radar.avrotros.nl/artikel/pfas-in-een-pan-zo-herken-je-het-en-dit-zijn-alternatieven-53626" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Radar: PFAS in een pan? Zo herken je het, en dit zijn alternatieven</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Benieuwd hoeveel PFAS er in jouw kraanwater zit?</h2>
            <p className="mt-4 text-white/70">Vul je postcode in en zie hoe het in jouw regio zit. Gratis, en je hoeft niets achter te laten.</p>
            <Link href="/pfas-check" className="cursor-pointer mt-8 inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-xl shadow-amber/25">
              Doe de PFAS-check
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import TussenCta from '@/components/TussenCta';
import AuteurRegel from '@/components/AuteurRegel';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import ArticleSchema from '@/components/ArticleSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import KortAntwoord from '@/components/KortAntwoord';
import FaqSchema from '@/components/FaqSchema';

export const metadata = {
  alternates: { canonical: '/kennisbank/waterkoeler-thuis' },
  title: 'Waterkoeler thuis: fles, waterleiding of filterkraan?',
  description:
    'Waterkoeler thuis kopen? Vergelijk een waterkoeler met flessen, een leidingwaterkoeler en een filterkraan op kosten, gemak, hygiëne en waterkwaliteit.',
  openGraph: {
    title: 'Waterkoeler thuis: welke oplossing past bij jou?',
    description: 'Flessenkoeler, leidingwaterkoeler of filterkraan vergeleken op kosten, gemak en waterkwaliteit.',
    url: 'https://www.water-zuivering.nl/kennisbank/waterkoeler-thuis',
    images: ['/assets/img/3-weg-kraan.png'],
  },
};

const VERGELIJKING = [
  ['Koud water', 'Ja', 'Ja', 'Nee, kraantemperatuur. Wel snel koud in een karaf in de koelkast'],
  ['Heet of bruisend', 'Bij sommige modellen', 'Bij sommige modellen', 'Nee'],
  ['Aansluiting', 'Alleen een stopcontact', 'Waterleiding en stopcontact', 'Waterleiding, onder het aanrecht'],
  ['Wat zit er in het water?', 'Bronwater uit de fles', 'Kraanwater, vaak met een eenvoudig filter', 'Kraanwater gefilterd door een osmosemembraan'],
  ['Filtert PFAS en medicijnresten?', 'Nee, afhankelijk van het bronwater', 'Meestal niet volledig; hangt af van het filter', 'Ja, een osmosemembraan houdt het grootste deel tegen'],
  ['Doorlopende kosten', 'Flessen van ± 19 liter, statiegeld en bezorging', 'Filters en onderhoud, vaak huur', 'Filters, ± € 135 per jaar'],
  ['Ruimte', 'Vrijstaand of tafelmodel op de vloer of het aanrecht', 'Vrijstaand of tafelmodel', 'Onder het aanrecht, alleen een kraan zichtbaar'],
  ['Sjouwen', 'Ja, flessen van ± 19 kilo', 'Nee', 'Nee'],
];

const LETOP = [
  ['Hygiëne', 'Een reservoir met stilstaand water moet je regelmatig reinigen, anders kunnen bacteriën en algen groeien. Check hoe vaak de fabrikant dat voorschrijft en of er een onderhoudsabonnement bij hoort.'],
  ['Stroomverbruik', 'Een waterkoeler houdt het water de hele dag koel, en een model met heet water houdt ook een boilertje warm. Kijk naar het energielabel of het opgegeven verbruik per dag.'],
  ['Geluid', 'Een koeler heeft een compressor of koelelement dat aanslaat, net als een kleine koelkast. In een open keuken of woonkamer hoor je dat.'],
  ['Kopen of huren', 'Veel leidingwaterkoelers worden verhuurd met een vast bedrag per maand. Reken de totale kosten over een paar jaar uit voordat je tekent.'],
  ['Waterkwaliteit', 'Een koeler maakt water koud, niet zuiverder. Wat erin gaat, komt eruit, tenzij er een goed filter in zit.'],
];

const FAQ = [
  ['Wat kost een waterkoeler voor thuis?', 'Een eenvoudige waterkoeler voor thuis met fles kost bij gespecialiseerde winkels vanaf ongeveer € 125 tot € 200. Daarbij komen de kosten voor de flessen water. Een leidingwaterkoeler is duurder in aanschaf of wordt per maand verhuurd.'],
  ['Wat is beter: een waterkoeler met fles of op de waterleiding?', 'Een koeler op de waterleiding is handiger, want je hoeft geen flessen te sjouwen of te bestellen. Een flessenkoeler kun je overal neerzetten waar een stopcontact is. Op de lange termijn is een leidingwaterkoeler vaak goedkoper.'],
  ['Hoeveel kost het water voor een waterkoeler?', 'Een fles bronwater van ongeveer 19 liter kost bij zakelijke leveranciers rond de € 15 exclusief btw, zo\'n 80 tot 85 cent per liter. Kraanwater kost in 2026 gemiddeld minder dan een halve cent per liter.'],
  ['Is water uit een waterkoeler gezonder dan kraanwater?', 'Niet vanzelf. Een waterkoeler maakt water koud, niet zuiverder. Water uit een fles is bronwater, water uit een leidingwaterkoeler is kraanwater met soms een eenvoudig filter. Wil je stoffen als PFAS en medicijnresten eruit, dan heb je een osmosefilter nodig.'],
  ['Moet je een waterkoeler schoonmaken?', 'Ja. In het reservoir en de tapkraantjes kunnen bacteriën groeien als je ze niet reinigt. Volg het schema van de fabrikant; bij huur zit het onderhoud vaak in het abonnement.'],
  ['Kan ik ook koud gefilterd water uit mijn keukenkraan krijgen?', 'Een osmosesysteem onder het aanrecht levert gefilterd water op kraantemperatuur, niet gekoeld. Wie het graag ijskoud drinkt, vult een karaf en zet die in de koelkast. Zo heb je zuiver water zonder een extra apparaat op het aanrecht.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        datePublished="2026-11-06"
        dateModified="2026-11-06"
        headline="Waterkoeler thuis: met fles, op de leiding of een filterkraan?"
        description="Een waterkoeler met flessen, een leidingwaterkoeler en een filterkraan vergeleken op kosten, gemak, hygiëne en waterkwaliteit."
        image="https://www.water-zuivering.nl/assets/img/3-weg-kraan.png"
        url="https://www.water-zuivering.nl/kennisbank/waterkoeler-thuis"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Waterkoeler thuis', url: 'https://www.water-zuivering.nl/kennisbank/waterkoeler-thuis' },
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
              Waterkoeler thuis: met fles, op de leiding of een filterkraan?
            </h1>
            <p className="mt-5 text-dim text-lg">
              Een <strong className="text-ink">waterkoeler thuis</strong> klinkt als de makkelijkste manier om meer water te drinken. Maar er zijn grote verschillen in kosten, gemak en wat er echt uit de kraan komt. Hier zie je de drie opties eerlijk naast elkaar, ook die van ons.
            </p>
            <KortAntwoord>
              Een waterkoeler thuis met fles is makkelijk te plaatsen, maar je betaalt per fles en sjouwt flessen van ongeveer 19 kilo. Een leidingwaterkoeler is handiger, maar duurder in aanschaf of huur. Een filterkraan met osmosesysteem koelt niet, maar levert wel het zuiverste water, zonder flessen en zonder apparaat op het aanrecht.
            </KortAntwoord>
            <AuteurRegel bijgewerkt="6 november 2026" />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">De opties</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Drie manieren om thuis lekker water te tappen</h2>
            <h3 className="mt-8 font-display text-xl font-bold text-ink">1. Waterkoeler met fles</h3>
            <p className="mt-3 text-dim leading-relaxed">
              De klassieke waterkoeler die je van kantoor kent: een grote fles bronwater van ongeveer 19 liter staat ondersteboven op een koelapparaat. Je hebt alleen een stopcontact nodig, dus je kunt hem overal neerzetten. Er zijn ook kleinere tafelmodellen voor op het aanrecht. Gespecialiseerde winkels verkopen een <strong className="text-ink">waterkoeler voor thuis</strong> vanaf ongeveer € 125 tot € 200.
            </p>
            <p className="mt-3 text-dim leading-relaxed">
              Het nadeel zit in de flessen. Die moet je laten bezorgen of zelf halen, sjouwen en op de koeler zetten, en je betaalt statiegeld. Een fles bronwater van 19 liter kost bij zakelijke leveranciers rond de € 15 exclusief btw: zo&apos;n 80 tot 85 cent per liter.
            </p>
            <h3 className="mt-8 font-display text-xl font-bold text-ink">2. Waterkoeler op de waterleiding</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Een leidingwaterkoeler wordt aangesloten op je waterleiding en koelt kraanwater. Geen flessen dus, en vaak kun je kiezen voor koud, heet of bruisend water. Er zit meestal een eenvoudig filter in, vaak actief kool, tegen chloor- en leidingsmaak. Leidingwaterkoelers zijn duurder in aanschaf en worden vaak verhuurd met een vast bedrag per maand, inclusief onderhoud.
            </p>
            <h3 className="mt-8 font-display text-xl font-bold text-ink">3. Filterkraan met osmosesysteem</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Dit is wat wij verkopen, dus we zeggen het er eerlijk bij. Een <Link href="/osmosesysteem" className="underline hover:text-ink">osmosesysteem</Link> zit onder het aanrecht en levert gefilterd water via een extra kraan of een <Link href="/3-weg-kraan" className="underline hover:text-ink">3-weg kraan</Link> die normaal, gefilterd en mineraalwater geeft. Het water komt niet gekoeld uit de kraan, maar op kraantemperatuur. Hoe koud dat is, lees je in <Link href="/kennisbank/kraanwater-temperatuur" className="underline hover:text-ink">kraanwater temperatuur</Link>. Wel is het het zuiverste van de drie: het osmosemembraan houdt PFAS, medicijnresten, microplastics en kalk tegen, wat een gewone waterkoeler niet doet.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vergelijking</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waterkoeler thuis vergeleken: wat past bij jou?</h2>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-amber/10 text-ink">
                  <tr>
                    <th scope="col" className="p-4 font-display font-bold"> </th>
                    <th scope="col" className="p-4 font-display font-bold">Waterkoeler met fles</th>
                    <th scope="col" className="p-4 font-display font-bold">Leidingwaterkoeler</th>
                    <th scope="col" className="p-4 font-display font-bold">Filterkraan met osmose</th>
                  </tr>
                </thead>
                <tbody>
                  {VERGELIJKING.map(([punt, fles, leiding, osmose]) => (
                    <tr key={punt} className="border-t border-edge align-top">
                      <th scope="row" className="p-4 font-semibold text-ink">{punt}</th>
                      <td className="p-4 text-dim">{fles}</td>
                      <td className="p-4 text-dim">{leiding}</td>
                      <td className="p-4 text-dim">{osmose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="mt-8 space-y-2 text-dim leading-relaxed list-disc pl-5 max-w-3xl">
              <li><strong className="text-ink">Kies een waterkoeler met fles</strong> als je geen aansluiting kunt of wilt maken, bijvoorbeeld in een huurwoning of op een zolderkamer.</li>
              <li><strong className="text-ink">Kies een leidingwaterkoeler</strong> als ijskoud of bruisend water voor jou het belangrijkste is en je er ruimte voor hebt.</li>
              <li><strong className="text-ink">Kies een filterkraan met osmose</strong> als je vooral zuiver water wilt, zonder flessen en zonder apparaat dat ruimte in de keuken inneemt.</li>
            </ul>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Voor je koopt</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hier let je op bij een waterkoeler voor thuis</h2>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {LETOP.map(([titel, uitleg]) => (
                <div key={titel} className="reveal card rounded-2xl p-5">
                  <h3 className="font-display font-bold text-ink">{titel}</h3>
                  <p className="mt-2 text-sm text-dim leading-relaxed">{uitleg}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat kost een waterkoeler thuis per jaar?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              De aanschafprijs zegt weinig; het water bepaalt de rekening. Een gezin van vier dat samen 6 liter per dag drinkt, gebruikt zo&apos;n 2.190 liter per jaar. Dat zijn ruim 115 flessen van 19 liter.
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Waterkoeler met fles:</strong> bij zo&apos;n 80 cent per liter ruim € 1.700 per jaar aan water, plus btw, stroom en de koeler zelf.</li>
              <li><strong className="text-ink">Leidingwaterkoeler:</strong> het water kost bijna niets, maar je betaalt huur of aanschaf, filters en stroom.</li>
              <li><strong className="text-ink">Filterkraan met osmose:</strong> het kraanwater kost in 2026 gemiddeld zo&apos;n € 2,71 per 1.000 liter, en de filters ongeveer € 135 per jaar.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Prijzen van flessen, huur en apparaten verschillen per leverancier; vraag altijd een totaalprijs over meerdere jaren. Wat je zelf bespaart ten opzichte van flessenwater, reken je uit met onze <Link href="/besparing" className="underline hover:text-ink">besparingscalculator</Link>. Meer over flessenwater lees je in <Link href="/kennisbank/bronwater" className="underline hover:text-ink">bronwater: wat is het en is het beter dan kraanwater?</Link>
            </p>
            <TussenCta titel="Zuiver water zonder flessen en zonder apparaat op het aanrecht?">
              Een osmosesysteem zit onzichtbaar onder het aanrecht en filtert PFAS, medicijnresten en kalk uit je kraanwater. Je tapt het via een eigen kraan of een 3-weg kraan.
            </TussenCta>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3] bg-white">
                <Image src="/assets/img/3-weg-kraan.png" alt="3-weg kraan als alternatief voor een waterkoeler thuis: gefilterd water uit de keukenkraan" fill loading="eager" sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain p-6" />
              </div>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Alternatief</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Geen koeler op het aanrecht, wel zuiver water</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Wil je vooral meer en beter water drinken, zonder flessen te sjouwen of een apparaat neer te zetten? Dan is een filterkraan vaak de rustigste oplossing. Het systeem zit onder het aanrecht, filtert op het moment dat je tapt en heeft geen opslagtank. Het display laat zien wanneer een filter aan vervanging toe is.
              </p>
              <p className="mt-4 text-dim leading-relaxed">
                Of het systeem in jouw keukenkastje past, zie je in een minuut met de <Link href="/maatcheck" className="underline hover:text-ink">maatcheck</Link>. Welke stoffen er in jouw kraanwater zitten, check je met de <Link href="/pfas-check" className="underline hover:text-ink">gratis PFAS-check</Link>.
              </p>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over een waterkoeler thuis</h2>
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
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zuiver water uit je eigen keukenkraan</h2>
            <p className="mt-4 text-white/70">Geen flessen, geen apparaat op het aanrecht. Vraag vrijblijvend een offerte aan voor een osmosesysteem.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/aanmelden" className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-xl shadow-amber/25">
                Vraag vrijblijvend een offerte aan
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              <Link href="/maatcheck" className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white hover:bg-white/10 transition-colors">
                Doe de maatcheck
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

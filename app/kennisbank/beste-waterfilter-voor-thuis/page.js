import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import ArticleSchema from '@/components/ArticleSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import FaqSchema from '@/components/FaqSchema';

export const metadata = {
  alternates: { canonical: '/kennisbank/beste-waterfilter-voor-thuis' },
  title: 'Beste waterfilter voor thuis: vergelijking 2026 — Water-zuivering',
  description:
    'Waterfilterkan, kraanfilter of waterzuiveraar onder de gootsteen: wat is de beste waterfilter voor thuis? Vergelijking op filtratie, gemak en kosten.',
};

const TYPES = [
  {
    naam: 'Waterfilterkan',
    beeld: '/assets/img/glas-water.webp',
    filtratie: 2,
    gemak: 3,
    kosten: 5,
    plus: ['Lage aanschafprijs', 'Geen installatie nodig', 'Overal mee te nemen'],
    min: ['Filtert vooral chloor en kalk, geen PFAS of medicijnresten', 'Moet je steeds bijvullen', 'Filterpatronen relatief vaak vervangen'],
    conclusie: 'Prima instapoptie als je alleen de chloorsmaak kwijt wilt, maar filtert oppervlakkig.',
  },
  {
    naam: 'Kraanfilter (opzetstuk)',
    beeld: '/assets/img/een-kraan.jpg',
    filtratie: 3,
    gemak: 4,
    kosten: 4,
    plus: ['Direct water uit de kraan, geen bijvullen', 'Redelijk betaalbaar', 'Simpel zelf te monteren'],
    min: ['Neemt zichtbaar ruimte in op de kraan', 'Filtercapaciteit beperkter dan een ingebouwd systeem', 'Nog steeds geen volledige verwijdering van PFAS en microplastics'],
    conclusie: 'Handig tussenoplossing, maar qua filtratiediepte niet te vergelijken met een systeem onder de gootsteen.',
  },
  {
    naam: 'Waterzuiveraar onder de gootsteen (osmose)',
    beeld: '/assets/img/systeem-staand.png',
    filtratie: 5,
    gemak: 5,
    kosten: 3,
    plus: ['Verwijdert tot 99% van chloor, PFAS, medicijnresten en microplastics', 'Blijft volledig uit het zicht', 'Onbeperkt zuiver water, direct uit de kraan'],
    min: ['Hogere aanschafprijs dan een kan of opzetstuk', 'Vraagt eenmalige installatie'],
    conclusie: 'De grondigste optie — als filtratie je belangrijkste criterium is, wint dit type overtuigend.',
  },
];

const CRITERIA = [
  ['Filtratiediepte', 'Wil je alleen de smaak verbeteren, of ook stoffen als PFAS, medicijnresten en microplastics kwijt? Dit bepaalt het type filter meer dan wat ook.'],
  ['Onderhoud en gemak', 'Een kan moet je steeds bijvullen en het patroon vaak vervangen. Een ingebouwd systeem draait op de achtergrond mee, met filters die eens per 6-12 maanden aan de beurt zijn.'],
  ['Kosten op de lange termijn', 'Een lage aanschafprijs kan op termijn duurder uitpakken door vervangingskosten of doorlopend flessenwater. Reken door wat je over 3-5 jaar kwijt bent, niet alleen de instapprijs.'],
  ['Ruimte in de keuken', 'Een kan of kraanfilter is zichtbaar, een systeem onder de gootsteen blijft volledig uit het zicht — belangrijk als je weinig aanrechtruimte hebt.'],
  ['Milieu-impact', 'Hoe grondiger en langduriger een filter werkt, hoe minder flessenwater (en dus plastic) je op termijn nodig hebt.'],
];

const SITUATIES = [
  ['Alleenstaand of stel, laag verbruik', 'Een waterfilterkan kan hier volstaan als je vooral de smaak wilt verbeteren en niet veel bijvult.'],
  ['Gezin met kinderen', 'Constant bijvullen van een kan wordt al snel onpraktisch. Een systeem onder de gootsteen levert onbeperkt zuiver water, zonder dat er iemand aan hoeft te denken.'],
  ['Huishouden met babyvoeding', 'Voor het bereiden van flesvoeding is grondige filtratie (PFAS, medicijnresten) extra relevant — een osmosesysteem is hier de meest gangbare keuze.'],
  ['Huurwoning', 'Een kraanfilter is makkelijker weer te verwijderen dan een ingebouwd systeem, al bieden steeds meer aanbieders ook demontabele installaties voor huurders.'],
];

const ONDERHOUD = [
  ['Waterfilterkan', 'Patroon vervangen na 100-150 liter (meestal maandelijks bij dagelijks gebruik). Kan zelf, kost een paar minuten, filters zijn los verkrijgbaar.'],
  ['Kraanfilter', 'Cartridge vervangen elke 2-3 maanden, afhankelijk van gebruik en model. Meestal een kwestie van los- en vastdraaien, geen gereedschap nodig.'],
  ['Waterzuiveraar onder de gootsteen', 'Voor- en nafilters elke 6-12 maanden, het membraan zelf elke 2-3 jaar. Bij de meeste aanbieders kun je dit laten uitvoeren, of zelf doen met een instructievideo.'],
];

const FOUTEN = [
  ['Alleen naar de aanschafprijs kijken', 'Een filterkan lijkt goedkoop, maar de doorlopende kosten voor patronen kunnen op jaarbasis flink oplopen — reken door wat je over 3-5 jaar kwijt bent.'],
  ['Filters te laat vervangen', 'Een verzadigd filter laat stoffen juist eerder door in plaats van ze tegen te houden. Houd het vervangingsschema aan, ook als het water er nog "goed" uitziet.'],
  ['Filtratiediepte verwarren met merknaam', 'Niet elk product dat zich "waterfilter" noemt, filtert even grondig. Check specifiek of PFAS en microplastics genoemd worden, niet alleen "chloor" of "smaak".'],
  ['Geen rekening houden met waterdruk', 'Sommige systemen onder de gootsteen hebben een minimale waterdruk nodig om goed te werken — vraag dit na bij installatie, vooral in oudere woningen.'],
];

const FAQ = [
  ['Wat is de beste waterfilter voor thuis?', 'Dat hangt af van wat je belangrijk vindt. Wil je puur de chloorsmaak kwijt en zo min mogelijk uitgeven, dan volstaat een waterfilterkan. Wil je ook PFAS, medicijnresten en microplastics eruit, dan is een waterzuiveraar onder de gootsteen (osmose) de grondigste keuze.'],
  ['Is een waterfilterkan net zo goed als een waterzuiveraar?', 'Nee. Een waterfilterkan filtert vooral chloor en verbetert de smaak, maar houdt PFAS, medicijnresten en microplastics niet of nauwelijks tegen. Een osmosesysteem verwijdert daarvan tot 99%.'],
  ['Wat kost de beste waterfilter voor thuis?', 'Een waterfilterkan kost enkele tientjes, een kraanfilter meestal onder de honderd euro. Een waterzuiveraar onder de gootsteen kost meer bij aanschaf, maar heeft geen doorlopende kosten voor flessenwater en gaat jarenlang mee.'],
  ['Moet een waterzuiveraar onder de gootsteen professioneel geïnstalleerd worden?', 'Het kan in principe zelf, maar een vakkundige installatie voorkomt lekkages en zorgt dat de waterdruk goed blijft. De meeste aanbieders regelen dit binnen één dag.'],
  ['Welke beste waterfilter voor thuis verwijdert PFAS?', 'Alleen filters met een omgekeerde-osmose-membraan (0,0001 micron) verwijderen PFAS effectief — een waterfilterkan of eenvoudig kraanfilter houdt dit nauwelijks tegen.'],
  ['Is een beste waterfilter kraan hetzelfde als een waterzuiveraar onder de gootsteen?', 'Nee. Een kraanfilter (opzetstuk) zit zichtbaar op de kraan en filtert minder grondig; een waterzuiveraar onder de gootsteen is een ingebouwd systeem met een veel fijnere filtratie.'],
  ['Welke waterfilter is het beste voor een gezin met kinderen?', 'Een systeem onder de gootsteen, omdat je dan nooit een kan hoeft bij te vullen en er altijd onbeperkt zuiver water beschikbaar is — ook praktisch voor het bereiden van flesvoeding.'],
  ['Verschilt de beste waterfilter voor thuis per regio in Nederland?', 'De filtratiebehoefte verschilt niet sterk per regio — alle Nederlandse drinkwaterbedrijven voldoen aan dezelfde landelijke normen. Wel kan de waterhardheid (kalk) regionaal verschillen.'],
  ['Kan ik zien of er nu een storing of kookadvies geldt in mijn regio?', 'Ja — gebruik onze eigen storingen-check om direct te zien of er in jouw buurt een actuele melding is, los van welk filter je kiest.'],
  ['Hoe vaak moet ik het filter van de beste waterfilter voor thuis vervangen?', 'Dat verschilt per type: een filterkan meestal maandelijks, een kraanfilter elke 2-3 maanden, en een systeem onder de gootsteen elke 6-12 maanden voor de voor- en nafilters.'],
  ['Wat is de grootste fout die mensen maken bij het kiezen van een waterfilter?', 'Alleen naar de aanschafprijs kijken, zonder de doorlopende kosten voor vervangingsfilters mee te rekenen — op jaarbasis kan dat het prijsverschil met een grondiger systeem flink verkleinen.'],
  ['Kan ik meerdere type waterfilters combineren?', 'Ja, sommige huishoudens gebruiken bijvoorbeeld een waterontharder voor kalk in combinatie met een osmosesysteem voor de rest — dat is geen overbodige dubbeling, want beide lossen een ander probleem op.'],
];

function Sterren({ aantal }) {
  return (
    <div className="flex gap-0.5" aria-label={`${aantal} van de 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < aantal ? '#EDA71B' : 'none'} stroke="#EDA71B" strokeWidth="1.5" aria-hidden="true">
          <path d="M12 2l2.9 6.2 6.8.8-5 4.6 1.4 6.7L12 16.9 5.9 20.3l1.4-6.7-5-4.6 6.8-.8L12 2z" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  );
}

export default function BesteWaterfilterVoorThuisPage() {
  return (
    <>
      <ArticleSchema
        headline="Beste waterfilter voor thuis: vergelijking 2026"
        description="Waterfilterkan, kraanfilter of waterzuiveraar onder de gootsteen: wat is de beste waterfilter voor thuis? Vergelijking op filtratie, gemak en kosten."
        image="https://www.water-zuivering.nl/assets/img/glas-water.webp"
        url="https://www.water-zuivering.nl/kennisbank/beste-waterfilter-voor-thuis"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Beste waterfilter voor thuis: vergelijking 2026', url: 'https://www.water-zuivering.nl/kennisbank/beste-waterfilter-voor-thuis' },
        ]}
      />
      <FaqSchema items={FAQ} />
      <RevealObserver />
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Kennisbank — Koopgids</span>
            <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Wat is de beste waterfilter voor thuis?
            </h1>
            <p className="mt-5 text-dim text-lg">
              Waterfilterkan, kraanfilter of een waterzuiveraar onder de gootsteen — we vergelijken de drie meest gekozen opties op filtratie, gemak en kosten.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
            <p className="text-dim leading-relaxed">
              Er bestaat niet één <strong className="text-ink">beste waterfilter voor thuis</strong> die voor iedereen de juiste keuze is — welke het best bij jou past hangt af van hoe grondig je wilt filteren, hoeveel gemak je zoekt en wat je eraan wilt uitgeven. Hieronder zetten we de drie meest gekozen types eerlijk naast elkaar, en leggen we uit waar je precies op moet letten.
            </p>
          </div>
        </section>

        {/* CRITERIA */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waar let je op bij het kiezen van een waterfilter voor thuis?</h2>
            <ol className="mt-6 space-y-4">
              {CRITERIA.map(([titel, uitleg], i) => (
                <li key={titel} className="flex items-start gap-3">
                  <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-amber text-ink text-sm font-bold">{i + 1}</span>
                  <span className="text-dim"><strong className="text-ink">{titel}.</strong> {uitleg}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* VERGELIJKING */}
        <section className="relative">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <div className="space-y-10">
              {TYPES.map((type, i) => (
                <div key={type.naam} className="reveal grid lg:grid-cols-[1fr,1.3fr] gap-8 items-center rounded-[2rem] card p-6 sm:p-8">
                  <div className={`relative rounded-2xl overflow-hidden border border-edge aspect-[4/3] ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Image
                      src={type.beeld}
                      alt={`${type.naam} als waterfilter voor thuis`}
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className={type.naam.includes('osmose') ? 'object-contain p-6 bg-white' : 'object-cover'}
                    />
                  </div>
                  <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                    <span className="inline-block rounded-full bg-amber/12 text-amber-dark text-[11px] font-bold uppercase tracking-wide px-3 py-1">Optie {i + 1}</span>
                    <h2 className="mt-3 font-display text-xl font-extrabold tracking-tight">{type.naam}</h2>

                    <div className="mt-4 space-y-1.5 text-sm">
                      <div className="flex items-center justify-between gap-3"><span className="text-dim">Filtratiediepte</span><Sterren aantal={type.filtratie} /></div>
                      <div className="flex items-center justify-between gap-3"><span className="text-dim">Gemak</span><Sterren aantal={type.gemak} /></div>
                      <div className="flex items-center justify-between gap-3"><span className="text-dim">Lage instapkosten</span><Sterren aantal={type.kosten} /></div>
                    </div>

                    <div className="mt-4 grid sm:grid-cols-2 gap-4">
                      <ul className="space-y-1.5">
                        {type.plus.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-sm text-dim">
                            <svg className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            {p}
                          </li>
                        ))}
                      </ul>
                      <ul className="space-y-1.5">
                        {type.min.map((m) => (
                          <li key={m} className="flex items-start gap-2 text-sm text-dim">
                            <svg className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="#5B6472" strokeWidth="2" strokeLinecap="round" /></svg>
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="mt-4 text-sm font-semibold text-ink border-t border-edge pt-4">{type.conclusie}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIEPGANG: WAT FILTERT ELK TYPE */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat filtert elk type nou precies weg?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Nederlands kraanwater voldoet aan strenge wettelijke normen en is veilig om te drinken — daar gaat het bij een waterfilter voor thuis dan ook niet om. Het gaat om sporen van stoffen die niet standaard verwijderd worden: chloor (voor de smaak), kalk, en minder bekende stoffen zoals PFAS, medicijnresten en microplastics. Actuele informatie over de Nederlandse drinkwaterkwaliteit en normen vind je bij het <a href="https://www.rivm.nl/drinkwater" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">RIVM</a>.
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-edge">
              <table className="w-full text-sm text-left">
                <thead className="bg-bg">
                  <tr>
                    <th className="px-4 py-3 font-display font-bold">Stof</th>
                    <th className="px-4 py-3 font-display font-bold">Waterfilterkan</th>
                    <th className="px-4 py-3 font-display font-bold">Kraanfilter</th>
                    <th className="px-4 py-3 font-display font-bold">Osmosesysteem</th>
                  </tr>
                </thead>
                <tbody className="text-dim">
                  <tr className="border-t border-edge"><td className="px-4 py-3 font-semibold text-ink">Chloor (smaak)</td><td className="px-4 py-3">Ja</td><td className="px-4 py-3">Ja</td><td className="px-4 py-3">Ja</td></tr>
                  <tr className="border-t border-edge"><td className="px-4 py-3 font-semibold text-ink">Kalk</td><td className="px-4 py-3">Beperkt</td><td className="px-4 py-3">Beperkt</td><td className="px-4 py-3">Ja</td></tr>
                  <tr className="border-t border-edge"><td className="px-4 py-3 font-semibold text-ink">PFAS</td><td className="px-4 py-3">Nee</td><td className="px-4 py-3">Beperkt</td><td className="px-4 py-3">Tot 99%</td></tr>
                  <tr className="border-t border-edge"><td className="px-4 py-3 font-semibold text-ink">Medicijnresten</td><td className="px-4 py-3">Nee</td><td className="px-4 py-3">Nee</td><td className="px-4 py-3">Tot 99%</td></tr>
                  <tr className="border-t border-edge"><td className="px-4 py-3 font-semibold text-ink">Microplastics</td><td className="px-4 py-3">Nee</td><td className="px-4 py-3">Beperkt</td><td className="px-4 py-3">Tot 99%</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-dim">Indicatieve vergelijking op basis van de gangbare werking per filtertype, geen gemeten waarden.</p>
          </div>
        </section>

        {/* SITUATIE */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Welk type past bij jouw situatie?</h2>
            <p className="mt-4 text-dim leading-relaxed">De beste waterfilter voor thuis hangt ook af van je huishouden. Een paar veelvoorkomende situaties:</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {SITUATIES.map(([titel, uitleg]) => (
                <div key={titel} className="reveal rounded-2xl card p-5">
                  <p className="font-display font-bold text-ink text-sm">{titel}</p>
                  <p className="mt-1.5 text-sm text-dim leading-relaxed">{uitleg}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-dim leading-relaxed">
              Los van welk filter je kiest: bij een onverwacht smaak- of kwaliteitsprobleem is het altijd goed om eerst te checken of er iets speelt bij je waterbedrijf. Gebruik onze <Link href="/storingen" className="underline hover:text-ink">storingen-check</Link> om direct te zien of er een actuele melding is in jouw buurt.
            </p>
          </div>
        </section>

        {/* ONDERHOUD */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoeveel onderhoud vraagt elk type?</h2>
            <p className="mt-4 text-dim leading-relaxed">Onderhoud is vaak de onderschatte factor bij het kiezen van een waterfilter voor thuis. Zo verhoudt het zich per type:</p>
            <div className="mt-6 space-y-4">
              {ONDERHOUD.map(([titel, uitleg]) => (
                <div key={titel} className="reveal flex items-start gap-3">
                  <svg className="shrink-0 mt-1" width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#EDA71B" strokeWidth="1.7" /><path d="M12 7v5l3 3" stroke="#EDA71B" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <div>
                    <p className="font-semibold text-ink text-sm">{titel}</p>
                    <p className="mt-1 text-sm text-dim leading-relaxed">{uitleg}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOUTEN */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgemaakte fouten bij het kiezen van een waterfilter</h2>
            <div className="mt-6 space-y-4">
              {FOUTEN.map(([titel, uitleg]) => (
                <div key={titel} className="reveal flex items-start gap-3">
                  <svg className="shrink-0 mt-1" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 8v5M12 16h.01" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="12" r="9" stroke="#B91C1C" strokeWidth="1.7" /></svg>
                  <div>
                    <p className="font-semibold text-ink text-sm">{titel}</p>
                    <p className="mt-1 text-sm text-dim leading-relaxed">{uitleg}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONCLUSIE */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Onze conclusie</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Zoek je puur een goedkope oplossing tegen de chloorsmaak, dan is een waterfilterkan een prima start. Wil je écht af van <strong className="text-ink">PFAS, medicijnresten en microplastics</strong> — en dat zonder gedoe met bijvullen — dan is een <strong className="text-ink">waterzuiveraar onder de gootsteen</strong> de grondigste en op termijn ook de voordeligste keuze, omdat je nooit meer flessenwater hoeft te kopen.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Kortom: voor de beste waterfilter voor thuis is er geen universeel juiste keuze, alleen de keuze die past bij hoe grondig jij wilt filteren. Twijfel je nog? Lees onze uitleg over <Link href="/waterzuivering-voor-thuis" className="underline hover:text-ink">waterzuivering voor thuis</Link>, of bekijk direct de <Link href="/osmosesysteem" className="underline hover:text-ink">specificaties van ons osmosesysteem</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative">
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

        {/* CTA */}
        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Liever meteen de grondigste optie?</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan voor een waterzuiveraar onder de gootsteen, op maat van jouw keuken.</p>
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

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
  alternates: { canonical: '/kennisbank/wat-filtert-brita' },
  title: 'Wat filtert Brita? Wat het filter wel en niet doet',
  description:
    'Wat filtert Brita precies? Chloor, kalk, lood en PFAS: wat de fabrikant claimt, wat het filter kost en wanneer een osmosesysteem meer doet.',
  openGraph: {
    title: 'Wat filtert Brita? Wat het filter wel en niet doet',
    description: 'Wat een Brita-filter volgens de fabrikant uit je water haalt, hoe vaak je het vervangt, wat het kost en hoe het zich verhoudt tot osmose.',
    url: 'https://www.water-zuivering.nl/kennisbank/wat-filtert-brita',
    images: ['/assets/img/glas-water.webp'],
  },
};

const TABEL = [['Hoe het werkt', 'Patroon met onder meer actieve kool, water zakt door de kan', 'Voorfilter, membraan van 0,0001 micron en nafilter'], ['Wat het opgeeft', 'Chloor, lood, koper, kalk, bepaalde PFAS (volgens Brita)', 'Tot 99% van opgeloste stoffen, ook PFAS en kalk'], ['Water tappen', 'Vullen en wachten', 'Direct uit de kraan, 1,58 liter per minuut'], ['Vervangen', 'Elke 4 weken of 150 liter', 'Voor- en nafilter elk jaar, membraan elke 2 jaar'], ['Filterkosten per jaar', 'Ongeveer €108 (13 patronen, 12-pack à €99,99)', 'Ongeveer €135'], ['Aanschaf', 'Vanaf ongeveer €21 voor een kan', 'Vanaf €999 exclusief montage'], ['Aansluiting', 'Geen', 'Afvoer, stopcontact en wateraansluiting nodig']];

const FAQ = [['Wat filtert Brita uit water?', 'Volgens de fabrikant vermindert het MAXTRA PRO PURE PERFORMANCE-patroon chloor, kalk, lood en koper, en bepaalde pesticiden, medicijnresten en PFAS. Dit zijn opgaven van Brita zelf.'], ['Filtert een Brita-filter kalk?', 'Ja, voor een deel. Brita noemt kalkvermindering tot 150 liter voor zacht tot middelhard water. Bij hard water raakt dat sneller op; daarvoor heeft Brita het KALK EXPERT-patroon.'], ['Haalt Brita PFAS uit water?', 'Brita claimt tot 98% minder PFAS bij het PURE PERFORMANCE-patroon, getest volgens onder meer NSF/ANSI 53. Een onafhankelijke Nederlandse test hebben we niet gevonden, en een test meet maar een deel van alle PFAS-stoffen.'], ['Hoe vaak moet je een Brita-filter vervangen?', 'Elke 4 weken of na 150 liter, wat er het eerst komt. Dat is de opgave van Brita voor de MAXTRA PRO-patronen.'], ['Is een Brita-filter gezond?', 'Bij goed gebruik is er geen reden tot zorgen, maar Milieu Centraal vindt een filter in Nederland niet nodig en waarschuwt voor bacteriegroei op filters. Vervang het patroon op tijd, houd de kan schoon en drink het water snel op.'], ['Is Brita beter dan osmose?', 'Dat hangt af van wat je wilt. Een kan is goedkoop en werkt zonder installatie. Een osmosesysteem filtert grondiger via een membraan en levert direct uit de kraan, maar kost meer en moet worden aangesloten.'], ['Haalt Brita bacteriën uit water?', 'Reken daar niet op. Een filterkan is niet bedoeld om onveilig water veilig te maken. Volg bij een kookadvies altijd je waterbedrijf.']];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline='Wat filtert Brita? Wat het filter wel en niet doet'
        description='Wat een Brita-filter volgens de fabrikant uit je water haalt, hoe vaak je het vervangt, wat het kost en hoe het zich verhoudt tot osmose.'
        image="https://www.water-zuivering.nl/assets/img/glas-water.webp"
        url="https://www.water-zuivering.nl/kennisbank/wat-filtert-brita"
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        about={{ '@type': 'Brand', name: 'BRITA' }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Wat filtert Brita?', url: 'https://www.water-zuivering.nl/kennisbank/wat-filtert-brita' },
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
              Wat filtert Brita? Wat het filter wel en niet doet
            </h1>
            <p className="mt-5 text-dim text-lg">
              De filterkan van Brita staat in veel keukens. Maar <strong className="text-ink">wat filtert Brita</strong> nu echt? Hier lees je wat de fabrikant zelf opgeeft over chloor, kalk, metalen en PFAS, wat dat per jaar kost en waar de grens van een filterkan ligt. We verkopen zelf osmosesystemen, dus we zijn niet neutraal. Daarom noemen we steeds de bron.
            </p>
            <KortAntwoord bron={{ naam: 'BRITA: MAXTRA PRO PURE PERFORMANCE', url: 'https://www.brita.nl/products/maxtra-pro-pure-performance' }}>
              Volgens Brita vermindert het MAXTRA PRO PURE PERFORMANCE-patroon chloor, kalk, lood en koper, en ook bepaalde pesticiden, medicijnresten en PFAS. Een patroon gaat tot 4 weken of 150 liter mee. Dit zijn cijfers van de fabrikant, gemeten volgens de genoemde teststandaarden. Een onafhankelijke test hebben we niet gevonden.
            </KortAntwoord>
            <AuteurRegel bijgewerkt="2 november 2026" />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Volgens de fabrikant</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat filtert een Brita-filter?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Brita verkoopt verschillende patronen. Het bekendste is de MAXTRA PRO PURE PERFORMANCE. Op de productpagina geeft de fabrikant dit op:
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Chloor:</strong> 92% minder, volgens de teststandaard DIN EN 17093. Dat merk je vooral aan de smaak en geur.</li>
              <li><strong className="text-ink">Lood en koper:</strong> 96% en 92% minder, volgens dezelfde standaard.</li>
              <li><strong className="text-ink">Kalk:</strong> minder kalk, getest tot 150 liter. Het patroon is bedoeld voor zacht tot middelhard water. Voor hard water heeft Brita een aparte KALK EXPERT.</li>
              <li><strong className="text-ink">PFAS:</strong> tot 98% minder volgens Brita, getest volgens onder meer NSF/ANSI 53. De pagina noemt niet bij elke claim welke PFAS-stoffen zijn getest.</li>
              <li><strong className="text-ink">Medicijnresten en bestrijdingsmiddelen:</strong> Brita noemt een vermindering van bepaalde stoffen, als ze in je leidingwater zitten.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Let op het woord <em>bepaalde</em>. Er zijn duizenden PFAS-stoffen, en een test meet er maar een paar. Kleine PFAS-moleculen zijn lastiger te filteren dan grote. Wat PFAS precies zijn, lees je in <Link href="/kennisbank/pfas-in-kraanwater" className="underline hover:text-ink">PFAS in kraanwater</Link>.
            </p>
          </div>
        </section>
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat filtert Brita niet?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Een filterkan is geen zuiveringsinstallatie. Er zijn een paar grenzen die je moet kennen:
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Het is geen desinfectie.</strong> Een filterkan maakt onveilig water niet veilig. Bij een kookadvies van je waterbedrijf kook je het water, ook met een filter.</li>
              <li><strong className="text-ink">Na 4 weken of 150 liter is het op.</strong> Een oud patroon filtert minder goed. Wie het vervangen vergeet, drinkt dus ongemerkt minder goed gefilterd water.</li>
              <li><strong className="text-ink">Water uit je kraan blijft ongefilterd.</strong> Je filtert alleen wat in de kan past, en dat water staat daarna buiten de leiding te wachten.</li>
              <li><strong className="text-ink">Hard water kost meer patronen.</strong> Is je water hard, dan raakt de kalkwerking sneller op. Hoe je dat herkent, staat in <Link href="/kennisbank/kalkaanslag-in-huis" className="underline hover:text-ink">kalkaanslag in huis</Link>.</li>
            </ul>
            <TussenCta titel="Filteren zonder kan en patronen?">
              Een osmosesysteem onder het aanrecht filtert direct als je de kraan opendraait. Het voor- en nafilter vervang je elk jaar, het membraan elke 2 jaar. Vanaf €999 exclusief montage.
            </TussenCta>
          </div>
        </section>
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Eerlijk is eerlijk</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Is een Brita-filter gezond, en heb je het nodig?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Nederlands kraanwater is goed en wordt streng gecontroleerd. Milieu Centraal vindt een waterfilter daarom niet nodig. De organisatie waarschuwt ook dat bacteriën op een filter kunnen groeien, zodat de kwaliteit zelfs slechter kan worden als je het niet goed gebruikt.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Dat geldt voor elk filter dat je thuis gebruikt, ook voor dat van ons: <strong className="text-ink">vervang het op tijd</strong>. Bij een filterkan helpt het om de kan schoon te houden, gefilterd water in de koelkast te zetten en het binnen een dag op te drinken. Lang bewaren is geen goed idee.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Waarom filteren mensen dan toch? Meestal om de smaak, of omdat ze minder PFAS of medicijnresten willen binnenkrijgen dan de wet toestaat. Dat is een persoonlijke keuze. Wil je eerst weten hoe het bij jou zit, doe dan de <Link href="/pfas-check" className="underline hover:text-ink">PFAS-check</Link> of lees <Link href="/kennisbank/is-kraanwater-veilig" className="underline hover:text-ink">is kraanwater veilig?</Link>.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Brita-filter of osmosesysteem?</h2>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-edge">
              <table className="w-full text-sm text-left">
                <thead className="bg-surface text-ink">
                  <tr><th scope="col" className="px-4 py-3 font-semibold"></th><th scope="col" className="px-4 py-3 font-semibold">Brita-filterkan</th><th scope="col" className="px-4 py-3 font-semibold">Osmosesysteem onder het aanrecht</th></tr>
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
            <p className="mt-4 text-sm text-dim">Prijzen Brita: brita.nl, november 2026, actieprijzen kunnen wisselen. Een kan is veel goedkoper om mee te beginnen, en de jaarlijkse filterkosten liggen dicht bij elkaar.</p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
              <Image src="/assets/img/glas-water.webp" alt='Glas gefilterd water: wat filtert Brita en wat blijft erin' fill loading="eager" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vervangen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Brita-filter vervangen: hoe vaak?</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Brita geeft op dat een patroon tot 4 weken of 150 liter meegaat, wat er ook het eerst komt. Veel kannen hebben een teller die aangeeft wanneer het tijd is.
              </p>
              <p className="mt-4 text-dim leading-relaxed">
                Een nieuw patroon spoel je eerst door volgens de bijsluiter. Gebruik je de kan een tijdje niet, zet er dan bij terugkomst een nieuw patroon in. Hoe het zit met de filters in een vast systeem, lees je in <Link href="/kennisbank/waterfilter-vervangen-hoe-vaak" className="underline hover:text-ink">hoe vaak moet je een waterfilter vervangen</Link>.
              </p>
              <p className="mt-4 text-dim leading-relaxed">
                Twijfel je nog welk type bij je past? Dan helpt <Link href="/kennisbank/beste-waterfilter-voor-thuis" className="underline hover:text-ink">het beste waterfilter voor thuis</Link> of ons overzicht van <Link href="/waterfilter" className="underline hover:text-ink">alle soorten waterfilters</Link>.
              </p>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over wat Brita filtert</h2>
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
                <li><a href="https://www.brita.nl/products/maxtra-pro-pure-performance" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">BRITA: productpagina MAXTRA PRO PURE PERFORMANCE</a></li>
                <li><a href="https://www.milieucentraal.nl/huis-en-tuin/water-besparen/schoon-drinkwater/" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Milieu Centraal: Schoon drinkwater</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Liever filteren zonder kan?</h2>
            <p className="mt-4 text-white/70">Een osmosesysteem levert gefilterd water direct uit je kraan, zonder opslagtank. Vanaf €999 exclusief montage. Vraag vrijblijvend een offerte aan.</p>
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

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
  alternates: { canonical: '/kennisbank/waterfilter-koffiemachine' },
  title: 'Waterfilter koffiemachine: is het nodig en wanneer?',
  description:
    'Waterfilter koffiemachine: wat het doet, of je het nodig hebt, hoe vaak je het vervangt en welk water het beste is voor koffie en je apparaat.',
  openGraph: {
    title: 'Waterfilter koffiemachine: is het nodig en wanneer?',
    description: 'Wat een waterfilter in je koffiemachine doet, wanneer het nodig is, hoe vaak je het vervangt en waarom gezuiverd water niet altijd beter is voor koffie.',
    url: 'https://www.water-zuivering.nl/kennisbank/waterfilter-koffiemachine',
    images: ['/assets/img/mineraalfilter.jpg'],
  },
};

const TABEL = [['Kraanwater, zacht', 'Weinig kalk', 'Meestal prima'], ['Kraanwater, hard', 'Verkalkt sneller, filter of vaker ontkalken', 'Kan zwaarder of minder fris smaken'], ['Water met filterpatroon', 'Minder kalk, vervang op tijd', 'Vaak frisser'], ['Osmosewater met mineralen', 'Weinig kalk, volg de handleiding', 'Voller dan puur osmosewater, proef zelf'], ['Puur osmosewater of gedestilleerd water', 'Geen kalk, maar check de handleiding', 'Vaak vlak']];

const FAQ = [['Is een waterfilter koffiemachine nodig?', 'Niet altijd. Bij hard water is het vaak de moeite waard, omdat het kalk in de machine vermindert. Bij zacht water is het voordeel kleiner. Kijk ook in de handleiding van je machine.'], ['Hoe vaak vervang je een waterfilter van een koffiemachine?', 'De meeste fabrikanten noemen ongeveer elke 2 maanden, bij hard water of veel gebruik eerder. Sommige machines geven zelf een signaal.'], ['Moet ik nog ontkalken met een waterfilter?', 'Meestal wel, alleen minder vaak. Een filter haalt niet alle kalk weg. Volg de ontkalkmelding of de handleiding van je machine.'], ['Mag osmosewater in een koffiemachine?', 'Dat hangt af van je machine. Puur osmosewater bevat bijna geen mineralen, wat vlakke koffie kan geven. Kijk in de handleiding, en overweeg water met toegevoegde mineralen.'], ['Wat is het beste water voor koffie?', 'Water met een beetje mineralen en weinig kalk. De Specialty Coffee Association mikt op ongeveer 150 mg/l opgeloste stoffen. Thuis gaat het vooral om frisse smaak en een machine die niet verkalkt.'], ['Past elk waterfilter in mijn koffiemachine?', 'Nee. Filters zijn meestal gemaakt voor bepaalde merken of series. Controleer het typenummer van je machine voor je koopt.']];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline='Waterfilter koffiemachine: is het nodig en wanneer?'
        description='Wat een waterfilter in je koffiemachine doet, wanneer het nodig is, hoe vaak je het vervangt en waarom gezuiverd water niet altijd beter is voor koffie.'
        image="https://www.water-zuivering.nl/assets/img/mineraalfilter.jpg"
        url="https://www.water-zuivering.nl/kennisbank/waterfilter-koffiemachine"
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        about={{ '@type': 'Thing', name: 'Waterfilter voor koffiemachines' }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Waterfilter koffiemachine', url: 'https://www.water-zuivering.nl/kennisbank/waterfilter-koffiemachine' },
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
              Waterfilter koffiemachine: is het nodig en wanneer?
            </h1>
            <p className="mt-5 text-dim text-lg">
              Koffie is voor het grootste deel water, en dat proef je. Maar heb je een <strong className="text-ink">waterfilter koffiemachine</strong> echt nodig? Hier lees je wat zo&apos;n filter doet, wanneer het de moeite waard is, hoe vaak je het vervangt en waarom heel zuiver water niet automatisch betere koffie geeft. Op zoek naar een filter voor jouw model? Dat koop je bij je merk of winkel; hier gaat het om de keuze.
            </p>
            <KortAntwoord bron={{ naam: 'Keukenloods: waterfilter koffiemachine vervangen', url: 'https://www.keukenloods.nl/advies/koffiezetapparaten/hoe-vaak-moet-je-het-waterfilter-van-je-koffiemach/' }}>
              Een waterfilter in je koffiemachine vermindert vooral kalk en verbetert de smaak van het water. Dat is het meest zinvol bij hard water. De meeste fabrikanten adviseren het filter ongeveer elke 2 maanden te vervangen, bij hard water of veel gebruik eerder. Volg altijd de handleiding van je machine.
            </KortAntwoord>
            <AuteurRegel bijgewerkt="2 november 2026" />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Wat het doet</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat doet een waterfilter in een koffiemachine?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Het filterpatroon zit meestal in het waterreservoir. Het water loopt erdoor voordat het de boiler bereikt. Zo&apos;n filter heeft twee doelen:
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Minder kalk in de machine.</strong> Kalk zet zich af in de boiler en leidingen. Dat is slecht voor de werking en de levensduur. Met minder kalk hoef je minder vaak te ontkalken, maar helemaal overslaan kan vaak niet.</li>
              <li><strong className="text-ink">Betere smaak.</strong> Het koolstof in veel patronen neemt onder meer geurtjes en smaakjes weg, die je anders terugproeft in je kop.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Een filter is geen vervanging voor onderhoud. Blijf ontkalken volgens de handleiding, ook als je een filter gebruikt. Een aantal machines houdt zelf bij wanneer dat nodig is. Over kalk in huis in het algemeen lees je meer in <Link href="/kennisbank/kalkaanslag-in-huis" className="underline hover:text-ink">kalkaanslag in huis</Link>.
            </p>
          </div>
        </section>
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Heb je een waterfilter koffiemachine nodig?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Dat hangt vooral af van <strong className="text-ink">hoe hard je water is</strong>. In Nederland verschilt dat flink per regio, omdat het drinkwater uit verschillende bronnen komt. Je waterbedrijf geeft de hardheid voor je adres op.
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Hard water:</strong> een filter is dan vaak de moeite waard, en je machine verkalkt anders sneller.</li>
              <li><strong className="text-ink">Zacht water:</strong> het voordeel is kleiner. Sommige handleidingen zeggen ook wanneer je geen filter hoeft te gebruiken.</li>
              <li><strong className="text-ink">Volautomaat of espressomachine:</strong> deze apparaten zijn duurder en gevoeliger, dus goed water loont eerder.</li>
              <li><strong className="text-ink">Eenvoudig filterkoffieapparaat:</strong> hier is regelmatig ontkalken vaak al genoeg.</li>
            </ul>
            <TussenCta titel="Goed water voor alles wat je drinkt?">
              Een osmosesysteem met mineraalfilter levert gefilterd water uit je kraan, met calcium en magnesium erbij voor een voller glas water. Vanaf €999 exclusief montage.
            </TussenCta>
          </div>
        </section>
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Onderhoud</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waterfilter koffiemachine vervangen: hoe vaak?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Volgens Keukenloods noemen de meeste fabrikanten ongeveer elke 2 maanden. Dat is een richtlijn, en er zijn uitzonderingen. Sommige machines geven zelf een signaal als het filter aan vervanging toe is.
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Vaker</strong> als je hard water hebt of meerdere koppen per dag zet.</li>
              <li><strong className="text-ink">Minder vaak</strong> kan soms als je water al zacht is, maar volg dan de handleiding.</li>
              <li><strong className="text-ink">Stond de machine lang stil?</strong> Plaats dan een nieuw filter of spoel het eerst door volgens de instructies.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Een filter dat te lang blijft zitten, werkt minder goed. Datzelfde geldt voor andere filters in huis. Meer daarover lees je in <Link href="/kennisbank/waterfilter-vervangen-hoe-vaak" className="underline hover:text-ink">hoe vaak moet je een waterfilter vervangen</Link>.
            </p>
          </div>
        </section>
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Is heel zuiver water beter voor koffie?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Nee, en dat is voor ons als verkoper van osmosesystemen belangrijk om eerlijk te zeggen. Koffie heeft juist <strong className="text-ink">een beetje mineralen</strong> nodig. Die helpen de smaakstoffen uit de koffie te halen. Water zonder mineralen geeft vaak vlakke koffie.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              De Specialty Coffee Association mikt op ongeveer 150 mg/l opgeloste stoffen, met een ruimere bandbreedte van 75 tot 250 mg/l. Je kunt dat zien als een richtpunt voor koffieliefhebbers, niet als een harde regel voor thuis.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Puur osmosewater valt daar ver onder. Bij zeer weinig mineralen kan water bovendien zuurder worden en in theorie metaal aantasten. Gebruik daarom bij een espressomachine geen ongemineraliseerd osmosewater zonder in de handleiding te kijken. Een <Link href="/winkel/cto-filter-met-mineralen" className="underline hover:text-ink">CTO-filter met mineralen</Link> voegt weer calcium en magnesium toe. We hebben niet gemeten of dat exact binnen de koffierichtlijn valt, dus proef zelf en volg de handleiding van je machine. Waarom mineralen ertoe doen, lees je ook bij <Link href="/kennisbank/gedestilleerd-water-drinken" className="underline hover:text-ink">gedestilleerd water drinken</Link>.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Welk water voor je koffiemachine?</h2>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-edge">
              <table className="w-full text-sm text-left">
                <thead className="bg-surface text-ink">
                  <tr><th scope="col" className="px-4 py-3 font-semibold">Water</th><th scope="col" className="px-4 py-3 font-semibold">Voor de machine</th><th scope="col" className="px-4 py-3 font-semibold">Voor de smaak</th></tr>
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
            <p className="mt-4 text-sm text-dim">Dit is een algemeen overzicht. Wat je fabrikant adviseert, gaat altijd voor. Dat is ook belangrijk voor je garantie.</p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
              <Image src="/assets/img/mineraalfilter.jpg" alt='Mineraalfilter als aanvulling op een waterfilter koffiemachine' fill loading="eager" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Sage en andere merken</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Sage, De&apos;Longhi of Philips: welk filter?</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Filters passen meestal alleen op bepaalde merken of series. Dat geldt ook voor een waterfilter voor een Sage-machine zoals de Barista Express. Kijk in je handleiding welk type past, of zoek op het typenummer van je machine.
              </p>
              <p className="mt-4 text-dim leading-relaxed">
                Goedkope filters van andere merken bestaan ook. Let er dan op dat de fabrikant duidelijk aangeeft op welke machines ze passen en wat ze filteren.
              </p>
              <p className="mt-4 text-dim leading-relaxed">
                Filter je al je drinkwater thuis, dan heb je in de koffiemachine soms geen filter meer nodig. Dat hangt wel af van je machine. Lees ook wat een <Link href="/waterfilter-kraan" className="underline hover:text-ink">waterfilter kraan</Link> doet, of hoe een compleet <Link href="/waterfiltersysteem" className="underline hover:text-ink">waterfiltersysteem</Link> is opgebouwd.
              </p>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over een waterfilter koffiemachine</h2>
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
                <li><a href="https://www.keukenloods.nl/advies/koffiezetapparaten/hoe-vaak-moet-je-het-waterfilter-van-je-koffiemach/" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Keukenloods: hoe vaak vervang je het waterfilter van je koffiemachine?</a></li>
                <li><a href="https://sca.coffee/sca-news/community/addressing-water-quality-issues-the-tds-meter-42f7t" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Specialty Coffee Association: de TDS-meter en waterkwaliteit</a></li>
                <li><a href="https://support.thirdwavewater.com/en-US/what-is-tds-and-why-does-it-matter-110828" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Third Wave Water: TDS en de SCA-richtlijn</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Gefilterd water uit je eigen kraan</h2>
            <p className="mt-4 text-white/70">Een osmosesysteem met mineraalfilter geeft je gefilterd water voor drinken, thee en koffie. Vanaf €999 exclusief montage. Vraag vrijblijvend een offerte aan.</p>
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

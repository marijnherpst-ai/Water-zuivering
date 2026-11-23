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
  alternates: { canonical: '/kennisbank/ramen-wassen-met-osmosewater' },
  title: "Ramen wassen met osmosewater: zo werkt het (zonder strepen)",
  description:
    "Ramen wassen met osmosewater geeft geen strepen of kalkvlekken. Zo werkt het, wat je nodig hebt, wat het kost en wanneer het de moeite waard is.",
  openGraph: {
    title: "Ramen wassen met osmosewater: zo werkt het (zonder strepen)",
    description: "Waarom osmosewater geen vlekken achterlaat, hoe je ramen ermee wast, wat je nodig hebt en wanneer je beter een glazenwasser inhuurt.",
    url: 'https://www.water-zuivering.nl/kennisbank/ramen-wassen-met-osmosewater',
    images: ['/assets/img/een-kraan.jpg'],
  },
};

const FAQ = [
  ['Kun je ramen wassen met osmosewater zonder zeep?', 'Ja. Osmosewater is zo zuiver dat je geen zeep nodig hebt. Je maakt het glas nat met een zachte borstel, spoelt na en laat het opdrogen. Er blijft niets achter.'],
  ['Waarom krijg ik toch vlekken na het wassen met osmosewater?', 'De meest voorkomende oorzaken zijn oude zeepresten en vuil in kozijn en rubbers, wassen in felle zon, een vuile borstel of een filter dat aan vervanging toe is. Wassen met osmosewater werkt vaak pas na de tweede beurt echt strak.'],
  ['Moet je de ramen afdrogen na het wassen met osmosewater?', 'Nee. Dat is juist het voordeel. Het water droogt vanzelf op en laat geen kalkvlekken achter.'],
  ['Wat kost een osmose apparaat voor ramen?', 'In november 2026 zagen we filters voor glazenwassers van ongeveer €330 tot €420 en complete startsets met telescoopsteel van ongeveer €650. Prijzen verschillen per winkel en veranderen vaak.'],
  ['Kun je osmosewater voor ramen ook drinken?', 'Niet zonder meer. Water uit een tappunt voor glazenwassers is niet gemaakt voor drinkwater, en de jerrycan moet schoon en voedselveilig zijn. Meer daarover lees je bij osmosewater kopen.'],
  ['Wat is een goede TDS-waarde voor ramen wassen?', 'Hoe lager hoe beter. Een TDS-meter meet alle opgeloste stoffen. Loopt de waarde op, dan is het filter of de hars aan vervanging toe. Volg daarvoor de aanbeveling van je apparaat.'],
  ['Werkt osmosewater ook op zonnepanelen en auto’s?', 'Ja. Het principe is hetzelfde: zonder kalk en zouten in het water blijven er na het drogen geen vlekken over.'],
  ['Is ramen wassen met osmosewater beter dan met een zeem?', 'Het is meestal sneller en je hoeft niets af te nemen. Voor hoge ramen is het veiliger, omdat je vanaf de grond werkt met een telescoopsteel.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Ramen wassen met osmosewater: zo werkt het (zonder strepen)"
        description="Waarom osmosewater geen vlekken achterlaat, hoe je ramen ermee wast, wat je nodig hebt en wanneer je beter een glazenwasser inhuurt."
        image="https://www.water-zuivering.nl/assets/img/een-kraan.jpg"
        url="https://www.water-zuivering.nl/kennisbank/ramen-wassen-met-osmosewater"
        datePublished="2026-11-23"
        dateModified="2026-11-23"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: "Ramen wassen met osmosewater", url: 'https://www.water-zuivering.nl/kennisbank/ramen-wassen-met-osmosewater' },
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
              Ramen wassen met osmosewater: zo krijg je ze streeploos schoon
            </h1>
            <p className="mt-5 text-dim text-lg">
              Veel glazenwassers lappen ramen niet meer af met een zeem, maar spoelen ze met een slang en een borstel. Het geheim is <strong className="text-ink">osmosewater</strong>: water zonder kalk en zouten, dat bij het opdrogen niets achterlaat. Je kunt het ook zelf doen. Hier lees je hoe het werkt, wat je nodig hebt en wat je er eerlijk van kunt verwachten.
            </p>
            <KortAntwoord>
              Osmosewater bevat vrijwel geen opgeloste stoffen. Als het opdrogt, blijft er daarom niets achter: geen kalkvlekken en geen strepen, en je hoeft niet te drogen. Je maakt het raam nat met een zachte borstel, spoelt van boven naar beneden en laat het vanzelf opdrogen. De eerste keer kan een tweede wasbeurt nodig zijn.
            </KortAntwoord>
            <AuteurRegel bijgewerkt="23 november 2026" />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Waarom het werkt</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waarom geeft osmosewater geen vlekken?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              In gewoon kraanwater zit kalk. Als een druppel opdroogt, verdampt het water, maar de kalk blijft achter als een witte vlek. Dat zie je op glas het sterkst. Osmosewater is door een membraan geperst en bevat vrijwel geen kalk of zouten meer. Er is dus niets dat kan achterblijven.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Zuiver water heeft nog een voordeel: het neemt makkelijker vuil op dan water met mineralen, waardoor het glas schoner wordt. Hoe het water gemaakt wordt, lees je bij <Link href="/kennisbank/wat-is-osmosewater" className="underline hover:text-ink">wat is osmosewater</Link>.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Stappenplan</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zo was je ramen met osmosewater</h2>
            <ol className="mt-4 space-y-2 text-dim leading-relaxed list-decimal pl-5">
              <li><strong className="text-ink">Maak alles nat.</strong> Spuit het glas, het kozijn en de rubbers nat met osmosewater en maak ze los met een zachte borstel.</li>
              <li><strong className="text-ink">Borstel van boven naar beneden.</strong> Begin bij de bovenrand, zodat vuil naar beneden weg kan.</li>
              <li><strong className="text-ink">Spoel goed na.</strong> Spoel het raam van boven naar beneden met zuiver water, zodat de laatste resten van de borstel en het kozijn verdwijnen.</li>
              <li><strong className="text-ink">Laat het vanzelf opdrogen.</strong> Niet afdrogen of afnemen. Dat doet het water voor je.</li>
            </ol>
            <h3 className="mt-8 font-display text-xl font-bold text-ink">Tips voor een streeploos resultaat</h3>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Niet in felle zon.</strong> Het water droogt dan op voordat het vuil is weggespoeld, en dan zie je toch vlekken.</li>
              <li><strong className="text-ink">Eerste keer: reken op twee wasbeurten.</strong> In het glas, de rubbers en het kozijn zitten oude zeepresten en vet. Die komen bij de eerste keer los en kunnen tijdelijk vlekken geven.</li>
              <li><strong className="text-ink">Schone borstel.</strong> Een vuile borstel brengt het vuil weer op het glas.</li>
              <li><strong className="text-ink">Let op je waterkwaliteit.</strong> Controleer het water met een TDS-meter. Loopt de waarde op, dan is het filter of de hars aan vervanging toe.</li>
            </ul>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Spullen</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat heb je nodig om ramen met osmosewater te wassen?</h2>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-surface text-ink"><tr><th scope="col" className="px-4 py-3 font-semibold">Onderdeel</th><th scope="col" className="px-4 py-3 font-semibold">Waarvoor?</th><th scope="col" className="px-4 py-3 font-semibold">Opmerking</th></tr></thead>
                <tbody>
                  <tr className="border-t border-edge"><td className="px-4 py-3 align-top font-semibold text-ink">Osmosewater</td><td className="px-4 py-3 align-top text-dim">Het water dat de ramen schoonspoelt</td><td className="px-4 py-3 align-top text-dim">Zelf maken met een apparaat, of tappen bij een osmose-tappunt</td></tr>
                  <tr className="border-t border-edge"><td className="px-4 py-3 align-top font-semibold text-ink">Watervoerende telescoopsteel</td><td className="px-4 py-3 align-top text-dim">Ramen bereiken vanaf de grond</td><td className="px-4 py-3 align-top text-dim">Het water loopt door de steel naar de borstel</td></tr>
                  <tr className="border-t border-edge"><td className="px-4 py-3 align-top font-semibold text-ink">Zachte borstel</td><td className="px-4 py-3 align-top text-dim">Het vuil loskrijgen</td><td className="px-4 py-3 align-top text-dim">Houd hem schoon en vervang hem als de haren slijten</td></tr>
                  <tr className="border-t border-edge"><td className="px-4 py-3 align-top font-semibold text-ink">Slang en aansluitingen</td><td className="px-4 py-3 align-top text-dim">Het water naar de steel brengen</td><td className="px-4 py-3 align-top text-dim">Check of alles op je apparaat of watertank past</td></tr>
                  <tr className="border-t border-edge"><td className="px-4 py-3 align-top font-semibold text-ink">TDS-meter</td><td className="px-4 py-3 align-top text-dim">De kwaliteit van het water controleren</td><td className="px-4 py-3 align-top text-dim">Handig om te zien wanneer een filter vervangen moet worden</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-dim leading-relaxed">
              Wat een apparaat voor glasbewassing kost, loopt uiteen. In november 2026 zagen we bij Nederlandse webwinkels filters voor glazenwassers van ongeveer €330 tot €420 en complete startsets met telescoopsteel van ongeveer €650. Prijzen veranderen vaak.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Water halen</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Osmosewater maken of kopen?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Heb je maar een paar ramen of een klein huis, dan is zelf een apparaat kopen vaak teveel gedoe. Je kunt osmosewater ook halen bij een osmose-tappunt of groothandel voor glazenwassers. Waar dat kan en wat het kost, lees je bij <Link href="/kennisbank/osmosewater-kopen" className="underline hover:text-ink">osmosewater kopen</Link>. Een apparaat is handiger als je regelmatig wast. Hoe het maken thuis werkt, staat bij <Link href="/kennisbank/osmosewater-maken-thuis" className="underline hover:text-ink">osmosewater maken</Link>.
            </p>
            <h3 className="mt-8 font-display text-xl font-bold text-ink">Kun je het osmosesysteem uit je keuken gebruiken?</h3>
            <p className="mt-4 text-dim leading-relaxed">
              Ons osmosesysteem is gemaakt voor drinkwater onder het aanrecht en niet voor glasbewassing. Het levert 1,58 liter per minuut. Een emmer van 10 liter is dan na ruim 6 minuten vol. Voor een klein raam of een paar kozijnen kan dat prima, voor een heel huis is het langzaam. Bovendien gebruik je dan filtercapaciteit die je liever voor je drinkwater bewaart.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Wil je zuiver drinkwater uit je eigen kraan? Dan is een <Link href="/osmose-waterfilter" className="underline hover:text-ink">osmose waterfilter</Link> onder het aanrecht de beste keuze. Voor ramen is een apart apparaat praktischer.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Zelf of laten doen</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Ramen zelf wassen of een glazenwasser inhuren?</h2>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-surface text-ink"><tr><th scope="col" className="px-4 py-3 font-semibold"></th><th scope="col" className="px-4 py-3 font-semibold">Zelf met osmosewater</th><th scope="col" className="px-4 py-3 font-semibold">Glazenwasser</th></tr></thead>
                <tbody>
                  <tr className="border-t border-edge"><td className="px-4 py-3 align-top font-semibold text-ink">Kosten</td><td className="px-4 py-3 align-top text-dim">Eenmalig een apparaat en spullen, daarna alleen filters</td><td className="px-4 py-3 align-top text-dim">Per beurt, vaak volgens abonnement</td></tr>
                  <tr className="border-t border-edge"><td className="px-4 py-3 align-top font-semibold text-ink">Tijd</td><td className="px-4 py-3 align-top text-dim">Een paar uur per keer</td><td className="px-4 py-3 align-top text-dim">Geen</td></tr>
                  <tr className="border-t border-edge"><td className="px-4 py-3 align-top font-semibold text-ink">Bereik</td><td className="px-4 py-3 align-top text-dim">Met een telescoopsteel tot enkele meters hoog</td><td className="px-4 py-3 align-top text-dim">Ook hoge ramen en lastige plekken</td></tr>
                  <tr className="border-t border-edge"><td className="px-4 py-3 align-top font-semibold text-ink">Resultaat</td><td className="px-4 py-3 align-top text-dim">Goed, als je de tips volgt</td><td className="px-4 py-3 align-top text-dim">Meestal strak, door ervaring</td></tr>
                  <tr className="border-t border-edge"><td className="px-4 py-3 align-top font-semibold text-ink">Handig als</td><td className="px-4 py-3 align-top text-dim">Je regelmatig wast en een eigen woning hebt</td><td className="px-4 py-3 align-top text-dim">Je weinig tijd hebt of hoog moet</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-dim leading-relaxed">
              Hetzelfde principe werkt voor zonnepanelen, serres en auto’s: zuiver water laat geen kalkvlekken achter. Zoek je alleen goed water voor in huis, dan lees je meer bij <Link href="/kennisbank/waterhardheid-testen" className="underline hover:text-ink">waterhardheid testen</Link> om te zien hoeveel kalk er eigenlijk in je kraanwater zit.
            </p>
            <TussenCta titel="Kalkvrij water uit je eigen kraan">
              Een osmosesysteem onder het aanrecht haalt de kalk uit het water dat je drinkt en gebruikt voor koffie en thee, direct bij het tappen.
            </TussenCta>
          </div>
        </section>


        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over ramen wassen met osmosewater</h2>
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
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zuiver water uit je eigen kraan?</h2>
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

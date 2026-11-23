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
  alternates: { canonical: '/kennisbank/kraanwater-frankrijk' },
  title: "Kraanwater Frankrijk: kun je het drinken? Dit moet je weten",
  description:
    "Kun je kraanwater in Frankrijk drinken? Ja, vrijwel overal. Lees wanneer je het laat staan, waarom het naar chloor smaakt en hoe je gratis water krijgt.",
  openGraph: {
    title: "Kraanwater Frankrijk: kun je het drinken? Dit moet je weten",
    description: "Kraanwater in Frankrijk: wanneer is het veilig, wat betekent eau non potable, hoe haal je de chloorsmaak weg en krijg je gratis water in een restaurant?",
    url: 'https://www.water-zuivering.nl/kennisbank/kraanwater-frankrijk',
    images: ['/assets/img/een-kraan.jpg'],
  },
};

const FAQ = [
  ['Kun je kraanwater drinken in Frankrijk?', 'Ja, in vrijwel heel Frankrijk. Het kraanwater wordt streng gecontroleerd. Drink alleen niet uit een kraan met het bordje eau non potable en volg een eventueel drinkadvies van de gemeente.'],
  ['Kun je kraanwater drinken in Parijs?', 'Ja. Het water in Parijs is veilig. Het bevat hooguit 0,1 milligram chloor per liter en de stad heeft zo’n 1200 openbare drinkfonteinen.'],
  ['Wat betekent eau non potable?', 'Eau non potable betekent geen drinkwater. Drink er niet van en vul er geen fles of watertank mee. Staat er eau potable, dan is het wel drinkwater.'],
  ['Waarom smaakt kraanwater in Frankrijk naar chloor?', 'Franse waterbedrijven voegen chloor toe, zodat het water onderweg door de leidingen schoon blijft. Het is veilig, maar je kunt het proeven. Zet een afgesloten karaf een paar uur in de koelkast of laat het water een half uur open staan.'],
  ['Krijg je gratis water in een Frans restaurant?', 'Ja. Je hebt recht op gratis kraanwater bij je maaltijd. Vraag om une carafe d’eau. Een fles mineraalwater betaal je wel.'],
  ['Is Frans kraanwater veilig voor baby’s?', 'Voor flesvoeding kies je water met op het etiket convient pour l’alimentation des nourrissons. Alleen dat water voldoet aan de extra eisen voor zuigelingenvoeding.'],
  ['Kun je kraanwater drinken op een camping in Frankrijk?', 'Ja, als de kraan als drinkwater is aangegeven. Bij een bordje eau non potable vul je er niets mee. Twijfel je welk tappunt drinkwater geeft, vraag het dan bij de receptie.'],
  ['Moet je het eerste water uit de kraan laten weglopen?', 'Ja, vooral in een vakantiehuis dat een tijd leeg stond. Laat de kraan een paar seconden tot twee minuten lopen, en gebruik alleen koud water om te drinken en te koken.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Kraanwater Frankrijk: kun je het drinken? Dit moet je weten"
        description="Kraanwater in Frankrijk: wanneer is het veilig, wat betekent eau non potable, hoe haal je de chloorsmaak weg en krijg je gratis water in een restaurant?"
        image="https://www.water-zuivering.nl/assets/img/een-kraan.jpg"
        url="https://www.water-zuivering.nl/kennisbank/kraanwater-frankrijk"
        datePublished="2026-11-23"
        dateModified="2026-11-23"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: "Kraanwater Frankrijk", url: 'https://www.water-zuivering.nl/kennisbank/kraanwater-frankrijk' },
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
              Kraanwater in Frankrijk: kun je het drinken?
            </h1>
            <p className="mt-5 text-dim text-lg">
              Op vakantie in Frankrijk sta je met een leeg glas bij de kraan van je vakantiehuis, camping of hotel. <strong className="text-ink">Kun je kraanwater in Frankrijk drinken</strong>, of koop je beter flessen? Hier lees je het antwoord, wat je moet weten over chloor, borden en lokale adviezen, en hoe je op een slimme manier aan zuiver water komt.
            </p>
            <KortAntwoord bron={{ naam: "Ambassade van Frankrijk: kun je het kraanwater in Frankrijk drinken?", url: "https://www.ambafrance.nl/kun-je-het-kraanwater-in-frankrijk-drinken/" }}>
              Ja, in vrijwel heel Frankrijk kun je water uit de kraan drinken. Drink niet uit een kraan met het bordje eau non potable en let op een drinkadvies van de gemeente. Het water kan naar chloor smaken. Zet een afgesloten karaf een paar uur in de koelkast, of laat het een half uur open staan.
            </KortAntwoord>
            <AuteurRegel bijgewerkt="23 november 2026" />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Wanneer wel, wanneer niet</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wanneer drink je in Frankrijk beter geen kraanwater?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Het Franse kraanwater wordt streng gecontroleerd, van de bron tot aan de kraan. Toch zijn er vier situaties waarin je het glas beter laat staan:
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-surface text-ink"><tr><th scope="col" className="px-4 py-3 font-semibold">Situatie</th><th scope="col" className="px-4 py-3 font-semibold">Wat doe je?</th></tr></thead>
                <tbody>
                  <tr className="border-t border-edge"><td className="px-4 py-3 align-top font-semibold text-ink">Een bordje eau non potable</td><td className="px-4 py-3 align-top text-dim">Niet drinken. Het betekent letterlijk: geen drinkwater. Bij eau potable is het wel drinkwater.</td></tr>
                  <tr className="border-t border-edge"><td className="px-4 py-3 align-top font-semibold text-ink">Een drinkadvies van de gemeente</td><td className="px-4 py-3 align-top text-dim">Volg het advies. Dat gebeurt lokaal, bijvoorbeeld bij te veel PFAS. Het waterbedrijf en de gemeente informeren de inwoners direct.</td></tr>
                  <tr className="border-t border-edge"><td className="px-4 py-3 align-top font-semibold text-ink">Water dat lang in de leidingen stond</td><td className="px-4 py-3 align-top text-dim">Laat de kraan eerst een paar seconden tot twee minuten lopen. Dit geldt vooral in een vakantiehuis dat leeg stond.</td></tr>
                  <tr className="border-t border-edge"><td className="px-4 py-3 align-top font-semibold text-ink">De warme kraan</td><td className="px-4 py-3 align-top text-dim">Gebruik altijd koud water om te drinken, te koken en voor thee of koffie.</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-dim leading-relaxed">
              Huur je een vakantiehuis, vraag de eigenaar dan bij aankomst of er een drinkadvies geldt. Op een camping vraag je het bij de receptie.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Eerlijk over de zorgen</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Is Frans kraanwater wel zo schoon als het lijkt?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Landelijk gezien is het water veilig, maar het nieuws laat zien dat er lokaal problemen zijn. Dat is goed om te weten, zonder dat je meteen overal van moet schrikken:
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">PFAS.</strong> In juli 2025 kregen inwoners van zestien gemeenten in Noord-Frankrijk de opdracht om geen kraanwater meer te drinken vanwege te veel PFAS, meldde de NOS.</li>
              <li><strong className="text-ink">Leidingen.</strong> In het departement Loiret wordt 50 kilometer aan pvc-leidingen vervangen, omdat daar de stof vinylchloride in zit, die kankerverwekkend is.</li>
              <li><strong className="text-ink">Nitraat.</strong> In april 2025 besloot de Europese Unie Frankrijk te vervolgen, omdat de normen voor nitraat in het drinkwater structureel worden overschreden.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Dit zijn lokale situaties, geen reden om in heel Frankrijk geen kraanwater te drinken. Het laat wel zien waarom het zin heeft om de waterkwaliteit van je verblijf op te zoeken.
            </p>
            <h3 className="mt-8 font-display text-xl font-bold text-ink">De waterkwaliteit van je vakantieadres opzoeken</h3>
            <p className="mt-4 text-dim leading-relaxed">
              De uitslagen van de Franse watercontroles zijn openbaar. Elke gemeente hangt de recentste analyses op in het gemeentehuis (la mairie). Ze staan per gemeente ook online, via de site van het Franse ministerie van Volksgezondheid. Wie er een vaste woning heeft, krijgt eens per jaar een samenvatting bij de waterrekening.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">De smaak</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waarom smaakt Frans kraanwater naar chloor?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Franse waterbedrijven voegen chloor toe, zodat het water onderweg door de leidingen schoon blijft. Dat is anders dan in Nederland, waar geen chloor aan het drinkwater wordt toegevoegd. In Parijs komt er hooguit 0,1 milligram per liter uit de kraan, ver onder de grens van 5 milligram die de Wereldgezondheidsorganisatie aanhoudt. Het is dus veilig, al ruik en proef je het soms.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              De smaak raak je zo kwijt:
            </p>
            <ol className="mt-4 space-y-2 text-dim leading-relaxed list-decimal pl-5">
              <li>Vul een schone karaf en zet die een paar uur afgesloten in de koelkast.</li>
              <li>Geen tijd? Laat het water een half uur in een open kan staan, zodat het chloor kan verdampen.</li>
              <li>Bewaar het water daarna in de koelkast en drink het binnen 24 tot 48 uur op, liefst uit glas of rvs.</li>
            </ol>
            <p className="mt-4 text-dim leading-relaxed">
              Hoe je water daarna veilig bewaart, lees je bij <Link href="/kennisbank/kraanwater-bewaren" className="underline hover:text-ink">kraanwater bewaren</Link>. Wil je weten waar chloor vandaan komt en wat het doet, lees dan <Link href="/kennisbank/chloor-in-kraanwater" className="underline hover:text-ink">chloor in kraanwater</Link>.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              In veel streken is het water ook harder dan in Nederland. Dan zie je sneller kalk in de waterkoker van je vakantiehuis. Dat is niet schadelijk. Zie je thuis ook kalk en wil je weten hoe hard jouw water is, doe dan de <Link href="/waterhardheid" className="underline hover:text-ink">waterhardheid check</Link>.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Kraan of fles</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Kraanwater of flessenwater in Frankrijk?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Flessenwater ligt in elke Franse supermarkt, maar het is niet vanzelf beter dan kraanwater. Kraanwater wordt gecontroleerd op zo’n zestig microbiologische, chemische en radiologische kenmerken. Mineraalwater komt uit een ondergrondse bron en mag niet met chloor worden ontsmet. Het bevat vaak meer mineralen, maar die zijn niet voor iedereen goed. Sommige merken hebben veel natrium of sulfaat, en de Franse voedselveiligheidsdienst ANSES raadt af om zulk sterk gemineraliseerd water als enige drank te nemen.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Ook het beeld van “zuiver bronwater” klopt niet altijd. De NOS meldde in augustus 2025 dat er in Frankrijk op grote schaal werd gefraudeerd met bronwater in flessen. Bekende merken hadden verontreinigd water gefilterd en toch als natuurlijk mineraalwater verkocht. Meer over het verschil tussen de twee lees je bij <Link href="/kennisbank/kraanwater-vs-flessenwater" className="underline hover:text-ink">kraanwater of flessenwater</Link>.
            </p>
            <h3 className="mt-8 font-display text-xl font-bold text-ink">Baby’s en flesvoeding</h3>
            <p className="mt-4 text-dim leading-relaxed">
              Maak je flesvoeding in Frankrijk, kies dan water met op het etiket de tekst convient pour l’alimentation des nourrissons. Alleen dat water voldoet aan de extra eisen voor zuigelingenvoeding. De Nederlandse richtlijnen voor kraanwater en flesvoeding staan bij <Link href="/kennisbank/kraanwater-babyvoeding" className="underline hover:text-ink">kraanwater en babyvoeding</Link>.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Onderweg</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Gratis water in restaurants, in Parijs en op de camping</h2>
            <h3 className="mt-8 font-display text-xl font-bold text-ink">In een restaurant</h3>
            <p className="mt-4 text-dim leading-relaxed">
              In Frankrijk heb je recht op gratis drinkwater bij je maaltijd. Vraag de ober om une carafe d’eau of un pichet d’eau. Het gratis water is kraanwater. Bestel je een fles mineraalwater, plat of bruisend, dan betaal je die gewoon.
            </p>
            <h3 className="mt-8 font-display text-xl font-bold text-ink">In Parijs en andere steden</h3>
            <p className="mt-4 text-dim leading-relaxed">
              Parijs telt zo’n 1200 openbare drinkfonteinen met hetzelfde kraanwater. Bij een deel tap je zelfs gratis bruisend water. Je hoeft er dus geen flesjes te kopen.
            </p>
            <h3 className="mt-8 font-display text-xl font-bold text-ink">Op een camping of met een camper</h3>
            <p className="mt-4 text-dim leading-relaxed">
              Op Franse campings geldt hetzelfde als in een huis: water uit een kraan die als drinkwater is aangegeven, kun je drinken. Hangt er bij een tappunt een bordje eau non potable, vul daar dan geen fles, jerrycan of camperwatertank. Twijfel je, vraag het bij de receptie.
            </p>
            <TussenCta titel="Thuis ook zuiver water?">
              Op vakantie let je op elke kraan. Thuis regel je het eenmalig: een osmosesysteem onder je aanrecht filtert je kraanwater direct, zonder opslagtank.
            </TussenCta>
          </div>
        </section>


        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over kraanwater in Frankrijk</h2>
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
                <li><a href="https://www.ambafrance.nl/kun-je-het-kraanwater-in-frankrijk-drinken/" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Ambassade van Frankrijk: kun je het kraanwater in Frankrijk drinken?</a></li>
                <li><a href="https://nos.nl/artikel/2577555-kwaliteit-frans-kraanwater-en-flessenwater-ter-discussie" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">NOS: kwaliteit Frans kraanwater en flessenwater ter discussie</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zuiver water uit je eigen kraan, thuis</h2>
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

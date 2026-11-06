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
  alternates: { canonical: '/kennisbank/water-zuiveren-noodsituatie' },
  title: 'Water zuiveren in een noodsituatie: wat werkt echt?',
  description:
    'Water zuiveren in een noodsituatie: koken, filteren of tabletten. Wat elke methode wel en niet doet, hoeveel water je bewaart en wat bij een kookadvies.',
  openGraph: {
    title: 'Water zuiveren in een noodsituatie',
    description: 'Koken, filteren en tabletten vergeleken, plus hoeveel water je in huis haalt en wat je doet bij een kookadvies.',
    url: 'https://www.water-zuivering.nl/kennisbank/water-zuiveren-noodsituatie',
    images: ['/assets/img/een-kraan.jpg'],
  },
};

const METHODES = [
  ['Koken', 'Ja', 'Ja', 'Ja', 'Nee', 'Gas of stroom nodig. Bij een kookadvies het standaardadvies van het waterbedrijf.'],
  ['Noodfilter (0,1 micron)', 'Ja', 'Nee, meestal niet', 'Ja', 'Deels, alleen met koolfilter', 'Werkt zonder stroom. Combineer met koken of tabletten tegen virussen.'],
  ['Chloortabletten', 'Ja', 'Ja', 'Deels, traag', 'Nee', 'Licht en goedkoop. Wachttijd aanhouden; troebel water eerst filteren.'],
  ['Chloordioxidetabletten', 'Ja', 'Ja', 'Beter dan chloor', 'Nee', 'Langere wachttijd, vaak 30 minuten tot 4 uur afhankelijk van het merk.'],
  ['Zelfgemaakt doek- of zandfilter', 'Nee', 'Nee', 'Nee', 'Nee', 'Haalt alleen grof vuil weg. Daarna altijd koken.'],
];

const STAPPEN = [
  ['Gebruik eerst je voorraad', 'Flessen water die je in huis hebt, zijn het veiligst. Begin daarmee voordat je water uit een andere bron gaat zuiveren.'],
  ['Kies de schoonste bron', 'Regenwater uit een schone ton is beter dan sloot- of rivierwater. Water bij landbouwgrond, industrie of na een overstroming kan chemische stoffen bevatten die je met koken niet weghaalt.'],
  ['Haal het grove vuil eruit', 'Laat troebel water bezinken en giet het af door een schone doek of koffiefilter. Dat maakt koken, filteren en tabletten effectiever.'],
  ['Maak het water microbiologisch veilig', 'Kook het een paar minuten goed door, gebruik een noodfilter of zuiveringstabletten. Het liefst twee methodes achter elkaar.'],
  ['Bewaar het schoon', 'Giet het gezuiverde water in een schone, afsluitbare fles of jerrycan en zet het koel en donker weg.'],
];

const FAQ = [
  ['Hoe zuiver je water in een noodsituatie?', 'Haal eerst grof vuil eruit door het water te laten bezinken en door een schone doek te gieten. Kook het daarna een paar minuten goed door, of gebruik een noodfilter of zuiveringstabletten. Het veiligst is een combinatie van filteren en koken of tabletten.'],
  ['Hoe lang moet je water koken om het drinkbaar te maken?', 'Bij een kookadvies in Nederland adviseert een waterbedrijf als Vitens het water drie minuten te laten koken. Volg altijd de tijd die je eigen waterbedrijf noemt.'],
  ['Hoeveel water heb je nodig in een noodsituatie?', 'De overheid adviseert via Denk vooruit minimaal 9 liter water per persoon voor de eerste 72 uur: ongeveer 3 liter per dag om te drinken en eten te maken. Denk ook aan water voor huisdieren.'],
  ['Werken waterzuiveringstabletten tegen alles?', 'Nee. Tabletten op basis van chloor of chloordioxide doden bacteriën en virussen, maar werken trager tegen sommige parasieten. Chemische stoffen zoals pesticiden of zware metalen halen ze niet weg.'],
  ['Hoe lang kun je kraanwater bewaren voor je noodpakket?', 'Kraanwater in een schone, goed afgesloten fles blijft koel en donker bewaard een aantal dagen goed. Ververs zelf getapt water daarom regelmatig. Verzegeld flessenwater uit de winkel kun je tot de houdbaarheidsdatum bewaren.'],
  ['Werkt een osmosesysteem als de waterleiding uitvalt?', 'Nee. Een osmosesysteem onder het aanrecht heeft waterdruk uit de leiding en stroom nodig. Valt de watervoorziening uit, dan heb je een voorraad, een noodfilter of tabletten nodig.'],
  ['Wat moet ik doen bij een kookadvies?', 'Gebruik geen kraanwater zonder het eerst te koken om te drinken, tanden te poetsen, eten klaar te maken of ijsblokjes te maken. Volg de instructies en de kooktijd van je waterbedrijf, ook als je een waterfilter hebt.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        datePublished="2026-11-06"
        dateModified="2026-11-06"
        headline="Water zuiveren in een noodsituatie: wat werkt echt?"
        description="Koken, filteren en tabletten vergeleken, met hoeveel water je bewaart en wat je doet bij een kookadvies."
        image="https://www.water-zuivering.nl/assets/img/een-kraan.jpg"
        url="https://www.water-zuivering.nl/kennisbank/water-zuiveren-noodsituatie"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Water zuiveren in een noodsituatie', url: 'https://www.water-zuivering.nl/kennisbank/water-zuiveren-noodsituatie' },
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
              Water zuiveren in een noodsituatie: wat werkt echt?
            </h1>
            <p className="mt-5 text-dim text-lg">
              Een leidingbreuk, een kookadvies of een langdurige stroomstoring: dan is <strong className="text-ink">water zuiveren in een noodsituatie</strong> ineens geen theorie meer. Hier lees je welke methode wat doet, hoeveel water je in huis haalt en wat je bij een kookadvies doet.
            </p>
            <KortAntwoord bron={{ naam: 'Denk vooruit (Rijksoverheid)', url: 'https://www.denkvooruit.nl' }}>
              Bewaar minimaal 9 liter water per persoon voor drie dagen. Moet je toch water zuiveren in een noodsituatie, laat het dan eerst bezinken en giet het door een schone doek. Kook het daarna een paar minuten goed door, of gebruik een noodfilter of zuiveringstabletten. Bij een kookadvies volg je altijd de instructies van je waterbedrijf.
            </KortAntwoord>
            <AuteurRegel bijgewerkt="6 november 2026" />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Voorbereiden</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Eerst: hoeveel water heb je nodig?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              De makkelijkste noodsituatie is er een waarin je helemaal geen water hoeft te zuiveren. De overheid adviseert via de campagne Denk vooruit om <strong className="text-ink">minimaal 9 liter water per persoon</strong> in huis te hebben voor de eerste 72 uur. Dat is ongeveer 3 liter per persoon per dag, om te drinken en eten mee te maken. Waterbedrijf WML rekent het uit als 6 liter om te drinken en 3 liter om te koken.
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Gezin van vier:</strong> minimaal 36 liter, oftewel zes grote flessen van 6 liter.</li>
              <li><strong className="text-ink">Huisdieren:</strong> reken een kat op ongeveer een kwart liter per dag; een grote hond heeft al snel meer dan een liter nodig.</li>
              <li><strong className="text-ink">Baby&apos;s:</strong> houd extra flessen bij voor flesvoeding. Lees ook hoe je dat veilig doet in <Link href="/kennisbank/kraanwater-babyvoeding" className="underline hover:text-ink">kraanwater voor babyvoeding</Link>.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Valt de waterlevering in jouw wijk langere tijd uit, dan zorgt het drinkwaterbedrijf voor nooddrinkwater op een uitgiftepunt in de buurt. Waar dat is, hoor je via het waterbedrijf, de gemeente of NL-Alert. Of er nu iets speelt in jouw buurt, zie je met onze <Link href="/storingen" className="underline hover:text-ink">storingen-check</Link>.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vergelijking</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Water zuiveren in een noodsituatie: methodes naast elkaar</h2>
            <p className="mt-4 text-dim leading-relaxed max-w-3xl">
              Er is geen methode die alles doet. Bacteriën, virussen, parasieten en chemische stoffen vragen elk iets anders. De tabel laat zien wat elke methode tegenhoudt.
            </p>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-amber/10 text-ink">
                  <tr>
                    <th scope="col" className="p-4 font-display font-bold">Methode</th>
                    <th scope="col" className="p-4 font-display font-bold">Bacteriën</th>
                    <th scope="col" className="p-4 font-display font-bold">Virussen</th>
                    <th scope="col" className="p-4 font-display font-bold">Parasieten</th>
                    <th scope="col" className="p-4 font-display font-bold">Chemische stoffen</th>
                    <th scope="col" className="p-4 font-display font-bold">Let op</th>
                  </tr>
                </thead>
                <tbody>
                  {METHODES.map(([methode, bact, vir, par, chem, letop]) => (
                    <tr key={methode} className="border-t border-edge align-top">
                      <th scope="row" className="p-4 font-semibold text-ink">{methode}</th>
                      <td className="p-4 text-dim">{bact}</td>
                      <td className="p-4 text-dim">{vir}</td>
                      <td className="p-4 text-dim">{par}</td>
                      <td className="p-4 text-dim">{chem}</td>
                      <td className="p-4 text-dim">{letop}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-dim">
              Chemische stoffen zoals pesticiden, zware metalen of PFAS haal je in een noodsituatie met geen van deze methodes betrouwbaar weg. Kies daarom een bron die er waarschijnlijk niet mee vervuild is.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Stappenplan</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zo maak je water drinkbaar als de kraan niet te vertrouwen is</h2>
            <ol className="mt-8 space-y-4">
              {STAPPEN.map(([titel, uitleg], i) => (
                <li key={titel} className="reveal card rounded-2xl p-5 flex gap-4">
                  <span className="shrink-0 w-9 h-9 rounded-full bg-amber text-ink font-display font-extrabold flex items-center justify-center">{i + 1}</span>
                  <div>
                    <h3 className="font-display font-bold text-ink">{titel}</h3>
                    <p className="mt-1 text-sm text-dim leading-relaxed">{uitleg}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Koken, filteren of tabletten: wanneer kies je wat?</h2>
            <h3 className="mt-8 font-display text-xl font-bold text-ink">Koken: het meest betrouwbaar</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Koken is de methode die bacteriën, virussen en parasieten allemaal aanpakt. Het nadeel: je hebt gas of stroom nodig en het kost tijd. Bij een kookadvies in Nederland adviseert een waterbedrijf als Vitens het water <strong className="text-ink">drie minuten te laten koken</strong>, zoals bij de kookadviezen in Zevenaar en Dieren (<a href="https://nos.nl/l/2486566" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">NOS</a>). Laat het water daarna afgedekt afkoelen.
            </p>
            <h3 className="mt-8 font-display text-xl font-bold text-ink">Noodfilter: zonder stroom en snel</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Een noodfilter of knijpfilter met een poriegrootte rond 0,1 micron houdt bacteriën en parasieten tegen, en werkt zonder stroom. De meeste virussen zijn kleiner en gaan erdoor. Gebruik zo&apos;n filter daarom vooral voor natuurwater in Europa, en combineer het met koken of tabletten als je twijfelt. Wil je weten hoe zwaartekrachtfilters zoals een Berkey zich verhouden tot de rest, lees dan onze uitleg over de <Link href="/kennisbank/berkey-waterfilter" className="underline hover:text-ink">Berkey-waterfilter</Link>.
            </p>
            <h3 className="mt-8 font-display text-xl font-bold text-ink">Zuiveringstabletten: licht en goedkoop</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Tabletten op basis van chloor of chloordioxide passen in elk noodpakket. Ze doden bacteriën en virussen, maar werken trager tegen parasieten zoals Cryptosporidium; chloordioxide doet dat beter dan chloor. Houd je aan de wachttijd op de verpakking en filter troebel water eerst, want vuil maakt de tabletten minder effectief. In Nederland gebruiken drinkwaterbedrijven geen chloor, maar in een noodsituatie is het een stuk beter dan ongezuiverd water drinken.
            </p>
            <TussenCta titel="Geen noodsituatie, wel twijfels over je kraanwater?">
              Een osmosesysteem onder het aanrecht filtert dagelijks PFAS, medicijnresten, lood en kalk uit je kraanwater. Bij een kookadvies of storing volg je wel altijd eerst het advies van je waterbedrijf.
            </TussenCta>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/een-kraan.jpg" alt="Kraan in de keuken: bij een kookadvies water zuiveren in een noodsituatie door het eerst te koken" fill loading="eager" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Kookadvies</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat doe je bij een kookadvies?</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Een kookadvies betekent dat er bacteriën in het leidingwater zijn gevonden, of dat het waterbedrijf dat niet kan uitsluiten. Zolang het advies geldt:
              </p>
              <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
                <li>Kook water voor drinken, tandenpoetsen, eten bereiden en ijsblokjes.</li>
                <li>Douchen, wassen en het toilet doortrekken mag gewoon.</li>
                <li>Gebruik voor flesvoeding gekookt en afgekoeld water, of flessenwater.</li>
                <li>Laat na afloop de kranen even doorlopen, zoals je waterbedrijf aangeeft.</li>
              </ul>
              <p className="mt-4 text-dim leading-relaxed">
                Ook met een waterfilter thuis volg je het kookadvies. Een filter onder het aanrecht is gemaakt voor schoon leidingwater, niet voor water waarvan het waterbedrijf de veiligheid niet kan garanderen.
              </p>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Werkt een waterfilter thuis in een noodsituatie?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Eerlijk antwoord: meestal niet. Een <Link href="/osmosesysteem" className="underline hover:text-ink">osmosesysteem</Link> onder het aanrecht heeft waterdruk uit de leiding en stroom nodig. Valt de watervoorziening of de stroom uit, dan doet het niets. Voor een noodsituatie heb je daarom een voorraad, een noodfilter of tabletten nodig.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Waar een osmosesysteem wél voor is: elke dag zuiverder water uit je kraan, als die gewoon werkt. Het haalt stoffen weg die koken en de meeste noodfilters laten zitten, zoals PFAS, medicijnresten en kalk. Wat er in jouw regio in het water zit, zie je met de <Link href="/pfas-check" className="underline hover:text-ink">gratis PFAS-check</Link>. Ga je op reis, lees dan ook in welke landen je <Link href="/kennisbank/kraanwater-buitenland" className="underline hover:text-ink">kraanwater in het buitenland</Link> kunt drinken, en welke <Link href="/waterfilter" className="underline hover:text-ink">soorten waterfilters</Link> er zijn.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over water zuiveren in een noodsituatie</h2>
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
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Elke dag zuiver water uit je eigen kraan</h2>
            <p className="mt-4 text-white/70">Een osmosesysteem onder het aanrecht haalt PFAS, medicijnresten en kalk uit je kraanwater. Vraag vrijblijvend een offerte aan.</p>
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

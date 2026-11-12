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
  alternates: { canonical: '/kennisbank/legionella-voorkomen' },
  title: 'Legionella voorkomen thuis: douche, boiler en leidingwater',
  description:
    'Legionella voorkomen in huis: op welke temperatuur zet je de boiler, wat doe je na vakantie, helpt een legionella filter en hoe herken je een besmetting?',
  openGraph: {
    title: 'Legionella voorkomen thuis: douche, boiler en leidingwater',
    description: 'Wat legionella is, hoe je besmet raakt, wat je thuis doet om het te voorkomen en wat een filter wel en niet kan.',
    url: 'https://www.water-zuivering.nl/kennisbank/legionella-voorkomen',
    images: ['/assets/img/twee-kranen.jpg'],
  },
};

const TEMPERATUREN = [
  ['Onder 25 °C', 'De bacterie groeit niet of nauwelijks', 'Koud kraanwater. De wet zegt dat drinkwater aan de kraan niet warmer mag zijn dan 25 °C.'],
  ['25 tot 45 °C', 'De bacterie groeit, vooral in stilstaand water', 'Een lauwe boiler, een tuinslang in de zon, een bubbelbad, een doucheslang die lang niet gebruikt is.'],
  ['Boven 60 °C', 'De bacterie gaat dood', 'Een goed afgestelde boiler of combiketel, een waterkoker, een koffiezetapparaat.'],
];

const MAATREGELEN = [
  ['Zet je boiler of combiketel op minstens 60 °C', 'Dit is het belangrijkste advies van het RIVM. Zet het warme water niet lager om energie te besparen. Heb je een warmtepomp met boilervat? Kijk dan in de handleiding of hij het water regelmatig naar 60 °C verwarmt. Veel toestellen doen dat vanzelf met een wekelijks programma.'],
  ['Ontkalk de douchekop regelmatig', 'In kalk en vuil kunnen bacteriën zich hechten. Leg de douchekop af en toe een uur in schoonmaakazijn. Ben je (bijna) met pensioen of heb je een ziekte? Dan raadt het RIVM aan om de doucheslang en douchekop elke twee à drie jaar te vervangen.'],
  ['Laat slangen en sproeiers leeglopen', 'Laat de tuinslang, hogedrukspuit en plantenspuit na gebruik leeglopen en leg ze niet in de zon. Water dat in een warme slang blijft staan, is een ideale plek voor de bacterie.'],
  ['Maak apparaten met nevel goed schoon', 'Vul een luchtbevochtiger of apneu-apparaat (CPAP) met afgekoeld gekookt water en ververs dat volgens de gebruiksaanwijzing. Reinig een bubbelbad zoals de fabrikant voorschrijft.'],
  ['Laat de waterleiding aanleggen door een vakman', 'Een koudwaterleiding die vlak naast een warme leiding of vloerverwarming ligt, warmt op. Een erkend installatiebedrijf weet hoe dat voorkomen wordt.'],
];

const FAQ = [
  ['Hoe voorkom je legionella thuis?', 'Zet je boiler of combiketel op minstens 60 °C, ontkalk de douchekop regelmatig, laat tuinslang en plantenspuit na gebruik leeglopen en maak apparaten die water vernevelen goed schoon. De kans dat je thuis ziek wordt door legionella is volgens het RIVM erg klein.'],
  ['Kun je legionella krijgen van water drinken?', 'Nee. Je wordt niet ziek door water te drinken waar legionella in zit. Je raakt alleen besmet als je heel kleine druppeltjes water met de bacterie inademt, bijvoorbeeld de nevel van een douche. Een uitzondering zijn mensen met ernstige slikproblemen.'],
  ['Moet je de kranen doorspoelen na vakantie?', 'Doorspoelen is goed om het water in de leidingen te verversen. De GGD adviseert 2 minuten koud en 2 minuten warm water als je een kraan of douche meer dan een week niet hebt gebruikt. Het RIVM zegt er wel bij dat spoelen geen legionella uit de leiding verwijdert, en dat ziekmakende legionella thuis meestal niet in de leidingen zit.'],
  ['Bij welke temperatuur gaat legionella dood?', 'Boven 60 °C gaat de bacterie dood. Tussen 25 en 45 °C groeit hij juist, vooral in water dat stilstaat. Daarom is het advies om de boiler of combiketel op minstens 60 °C te zetten.'],
  ['Helpt een legionella filter of een douchekop met filter?', 'Een speciaal legionellafilter met een heel fijn membraan houdt bacteriën tegen. Ziekenhuizen en zorginstellingen gebruiken ze als er legionella is gevonden. Je moet het filter wel op tijd vervangen, meestal na een paar weken tot maanden. Voor een gewoon huishouden is het geen standaard advies: een goed afgestelde boiler is de basis.'],
  ['Wat zijn de klachten van een legionellabesmetting?', 'De meeste mensen worden niet ziek. Word je wel ziek, dan is dat meestal twee tot tien dagen na de besmetting. Het begint met griepachtige klachten zoals hoofdpijn, spierpijn, koorts en een droge hoest. Soms volgt een ernstige longontsteking. Bel de huisarts als je benauwd wordt of hoge koorts krijgt.'],
  ['Is legionella besmettelijk?', 'Nee. Iemand die ziek is door legionella kan anderen niet besmetten. Je kunt de bacterie alleen oplopen door besmette waternevel of deeltjes tuinaarde in te ademen.'],
  ['Houdt een waterfilter onder het aanrecht legionella tegen?', 'Een osmosemembraan houdt bacteriën tegen, maar dat lost het legionellarisico niet op. Legionella is een probleem van warm water en nevel, zoals onder de douche. Een filter voor koud drinkwater in de keuken doet daar niets aan, en van drinken word je ook niet ziek.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Legionella voorkomen thuis: douche, boiler en leidingwater"
        description="Op welke temperatuur je de boiler zet, wat je doet na vakantie, of een legionella filter helpt en hoe je een besmetting herkent."
        image="https://www.water-zuivering.nl/assets/img/twee-kranen.jpg"
        url="https://www.water-zuivering.nl/kennisbank/legionella-voorkomen"
        datePublished="2026-11-12"
        dateModified="2026-11-12"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Legionella voorkomen', url: 'https://www.water-zuivering.nl/kennisbank/legionella-voorkomen' },
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
              Legionella voorkomen thuis: douche, boiler en leidingwater
            </h1>
            <p className="mt-5 text-dim text-lg">
              <strong className="text-ink">Legionella voorkomen</strong> is thuis vooral een kwestie van de juiste temperatuur en geen water lang laten stilstaan. In dit artikel lees je wat legionella is, hoe je besmet kunt raken, wat het RIVM en de GGD adviseren en wat een filter wel en niet kan. Eerlijk vooraf: onze waterzuiveraar is voor drinkwater en lost legionella niet op. Daarom staat hier gewoon wat wel werkt.
            </p>
            <KortAntwoord bron={{ naam: 'RIVM: legionella', url: 'https://www.rivm.nl/legionella' }}>
              De kans dat je thuis ziek wordt door legionella is erg klein. Je beperkt de groei door je boiler of combiketel op minstens 60 °C te zetten, de douchekop te ontkalken en slangen en sproeiers te laten leeglopen. Van water drinken word je niet ziek: je raakt alleen besmet door nevel in te ademen.
            </KortAntwoord>
            <AuteurRegel bijgewerkt="12 november 2026" />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">De basis</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat is legionella?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Legionella is een bacterie die van nature in water en in tuinaarde voorkomt. In kleine aantallen is hij onschuldig. Het wordt pas een probleem als de bacterie zich kan vermeerderen in lauw, stilstaand water en je daarna de nevel van dat water inademt.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Komt de bacterie in je longen, dan kun je ziek worden. Meestal blijft het bij griepachtige klachten. Soms ontstaat een ernstige longontsteking: de veteranenziekte. Volgens het RIVM komt die in Nederland ongeveer 500 keer per jaar voor.
            </p>
            <h3 className="mt-8 font-display text-xl font-bold">Temperatuur bepaalt alles</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Of legionella groeit, hangt vooral af van de temperatuur van het water:
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-surface text-ink">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">Temperatuur</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Wat doet legionella?</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Waar kom je dit tegen?</th>
                  </tr>
                </thead>
                <tbody>
                  {TEMPERATUREN.map((rij) => (
                    <tr key={rij[0]} className="border-t border-edge">
                      {rij.map((cel, i) => (
                        <td key={i} className={`px-4 py-3 align-top ${i === 0 ? 'font-semibold text-ink whitespace-nowrap' : 'text-dim'}`}>{cel}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-dim leading-relaxed">
              Hoe warm of koud het water uit je kraan normaal is, lees je in <Link href="/kennisbank/kraanwater-temperatuur" className="underline hover:text-ink">kraanwater temperatuur</Link>.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoe raak je besmet met legionella?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Alleen door de bacterie in te ademen. Dat gebeurt als water met legionella wordt verneveld tot heel kleine druppeltjes. Het RIVM noemt deze situaties:
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li>sproeiend water, zoals een douche, een tuinslang met sproeikop of een hogedrukspuit;</li>
              <li>een bubbelbad met luchtbellen;</li>
              <li>apparaten die water vernevelen, zoals een luchtbevochtiger of een apneu-apparaat (CPAP);</li>
              <li>natte koeltorens van gebouwen en fabrieken;</li>
              <li>stofdeeltjes van tuinaarde of potgrond.</li>
            </ul>
            <h3 className="mt-8 font-display text-xl font-bold">Van drinken word je niet ziek</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Dit is het grootste misverstand. Je kunt water waar legionella in zit gewoon drinken zonder ziek te worden, zeggen het RIVM en Thuisarts. Alleen mensen met ernstige slikproblemen lopen risico, omdat zij water in hun longen kunnen krijgen. Legionella is ook niet besmettelijk van mens op mens.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Ook van een waterkoker, koffiezetapparaat of een bakje water op de verwarming krijg je het niet. Daar wordt het water heter dan 60 °C of komt er geen nevel vrij.
            </p>
            <h3 className="mt-8 font-display text-xl font-bold">Wie loopt meer risico?</h3>
            <p className="mt-3 text-dim leading-relaxed">
              De meeste mensen worden niet ziek, ook niet als ze de bacterie binnenkrijgen. De kans op een ernstige longontsteking is groter bij ouderen, rokers, mensen met een chronische ziekte en mensen die medicijnen gebruiken die de afweer remmen. Onder de 40 jaar komt veteranenziekte bijna niet voor.
            </p>
            <div className="mt-8 relative rounded-3xl overflow-hidden border border-edge aspect-[16/9]">
              <Image src="/assets/img/twee-kranen.jpg" alt="Kranen in huis: legionella voorkomen begint bij de temperatuur van het warme water" fill sizes="(min-width: 1024px) 896px, 100vw" className="object-cover" />
            </div>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Wat je zelf doet</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Legionella voorkomen in huis: vijf maatregelen</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Je hoeft thuis geen ingewikkelde dingen te doen. Dit zijn de adviezen van het RIVM, in volgorde van belang:
            </p>
            <ol className="mt-6 space-y-4">
              {MAATREGELEN.map(([titel, tekst], i) => (
                <li key={titel} className="reveal rounded-2xl card p-5 flex gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-amber text-ink font-display font-bold flex items-center justify-center">{i + 1}</span>
                  <div>
                    <h3 className="font-display font-bold text-ink">{titel}</h3>
                    <p className="mt-2 text-sm text-dim leading-relaxed">{tekst}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Na vakantie: moet je de leidingen doorspoelen?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Ben je een week of langer weg geweest, dan heeft het water in je leidingen al die tijd stilgestaan. De GGD adviseert om kranen en de douche dan door te spoelen: <strong className="text-ink">2 minuten koud water en 2 minuten warm water</strong>. Houd de douchekop daarbij laag, bijvoorbeeld in een emmer of vlak boven het putje, en zet een raam open. Zo adem je zo min mogelijk nevel in.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Het RIVM plaatst er een eerlijke kanttekening bij. Doorspoelen is goed om het drinkwater te verversen, maar het is geen echte legionellapreventie. Zit de bacterie in een leiding, dan spoel je hem er niet zomaar uit. Dat is ook minder erg dan het klinkt: ziekmakende legionella zit thuis meestal niet in de leidingen, en zelfs dan krijgen mensen bijna nooit een longontsteking.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Ga je op reis? Het RIVM krijgt elk jaar zo&apos;n 100 tot 150 meldingen van mensen die in het buitenland besmet raakten. Laat in een hotelkamer of vakantiehuis de douche eerst even lopen voordat je eronder stapt. Meer over water op reis lees je in <Link href="/kennisbank/kraanwater-buitenland" className="underline hover:text-ink">kraanwater in het buitenland</Link>.
            </p>

            <h2 className="mt-12 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Helpt een legionella filter of een douchekop met filter?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Er bestaan douchekoppen en kraanfilters met een heel fijn membraan dat bacteriën tegenhoudt. Ziekenhuizen, zorginstellingen en hotels gebruiken ze als er legionella in de installatie is gevonden, tot het probleem bij de bron is opgelost. Zo&apos;n <strong className="text-ink">legionella filter</strong> werkt, maar heeft een beperkte levensduur: na een paar weken tot maanden moet je het vervangen.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Voor een gewoon huishouden noemt het RIVM filters niet als maatregel. De basis is een boiler op 60 °C en schone douchespullen. Hoor je bij een risicogroep en maak je je zorgen? Overleg dan met je huisarts of de GGD. Let ook op het verschil met een gewoon <Link href="/kennisbank/waterfilter-douche" className="underline hover:text-ink">waterfilter voor de douche</Link>: dat is gemaakt voor chloor en kalk, niet om bacteriën tegen te houden.
            </p>
            <h3 className="mt-8 font-display text-xl font-bold">En een waterzuiveraar onder het aanrecht?</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Die helpt hier niet, en dat zeggen we er eerlijk bij. Een osmosemembraan houdt bacteriën tegen, maar het filtert alleen het koude water dat je drinkt en waarmee je kookt. Legionella is een probleem van warm water en nevel, en van drinken word je niet ziek. Een waterzuiveraar koop je voor andere stoffen, zoals PFAS, kalk en medicijnresten.
            </p>
            <TussenCta titel="Wil je weten wat er in jouw drinkwater zit?" pfasEerst>
              Legionella is een zaak van warm water. Voor je koude drinkwater spelen andere stoffen. Met de PFAS-check zie je op postcode hoe het in jouw regio zit.
            </TussenCta>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Herkennen</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Legionellabesmetting: klachten en wat je dan doet</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Word je ziek, dan is dat meestal twee tot tien dagen na de besmetting. Het begint als een griep:
            </p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-2 text-dim leading-relaxed list-disc pl-5">
              <li>hoofdpijn en spierpijn</li>
              <li>koorts</li>
              <li>een droge hoest</li>
              <li>misselijkheid of diarree</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Bij een longontsteking komen daar benauwdheid, pijn bij het ademen, hoge koorts, koude rillingen en soms verwardheid bij. <strong className="text-ink">Bel dan je huisarts.</strong> Een longontsteking door legionella wordt behandeld met antibiotica, vaak in het ziekenhuis. De meeste mensen genezen, maar het herstel kan lang duren. De arts meldt elke patiënt bij de GGD, die daarna zoekt naar de bron.
            </p>
            <h3 className="mt-8 font-display text-xl font-bold">Huurwoning, appartement of vakantiepark</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Thuis ben je zelf verantwoordelijk voor je boiler en je douche. Voor plekken met een groter risico gelden strengere regels. Ziekenhuizen, zorginstellingen, hotels, sauna&apos;s, zwembaden en campings zijn wettelijk verplicht om een risicoanalyse en een beheersplan te hebben. Heb je in een flat een gezamenlijke warmwaterinstallatie en twijfel je? Vraag je verhuurder of VvE wat zij aan legionellabeheer doen.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Wil je je water laten onderzoeken? In <Link href="/kennisbank/drinkwater-laten-testen" className="underline hover:text-ink">drinkwater laten testen</Link> lees je waar dat kan en wat een laboratorium meet. Hoe het koude kraanwater in Nederland wordt bewaakt, staat in <Link href="/kennisbank/is-kraanwater-veilig" className="underline hover:text-ink">is kraanwater veilig?</Link>
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over legionella voorkomen</h2>
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
                <li><a href="https://www.rivm.nl/legionella" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">RIVM: legionella (bijgewerkt 6 juli 2026)</a></li>
                <li><a href="https://www.ggd.amsterdam.nl/hygiene/legionella-voorkomen-melden/" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">GGD Amsterdam: legionella voorkomen en melden</a></li>
                <li><a href="https://www.thuisarts.nl/longontsteking/ik-heb-longontsteking-door-legionella" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Thuisarts: ik heb longontsteking door legionella</a></li>
                <li><a href="https://www.pwn.nl/onderzoek/opwarming-drinkwater" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">PWN: onderzoek naar opwarming van het drinkwater</a></li>
              </ul>
              <p className="mt-4 text-xs text-dim/80">Dit artikel geeft algemene informatie en is geen medisch advies. Heb je klachten, neem dan contact op met je huisarts.</p>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zuiver drinkwater uit je eigen kraan</h2>
            <p className="mt-4 text-white/70">Voor het water dat je drinkt en waarmee je kookt: een osmosesysteem onder je aanrecht houdt PFAS, kalk en medicijnresten tegen. Vraag vrijblijvend een offerte aan.</p>
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

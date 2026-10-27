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
  alternates: { canonical: '/kennisbank/ph-kraanwater' },
  title: 'pH kraanwater: wat is normaal in Nederland?',
  description:
    'pH kraanwater uitgelegd: de wettelijke norm van 7,0 tot 9,5, waarom drinkwater licht basisch is en wat een osmosefilter met de pH doet.',
  openGraph: {
    title: 'pH kraanwater: wat is normaal in Nederland?',
    description: 'De zuurgraad van Nederlands kraanwater, de norm, echte meetwaarden en wat osmose en mineralen ermee doen.',
    url: 'https://www.water-zuivering.nl/kennisbank/ph-kraanwater',
    images: ['/assets/img/glas-water.webp'],
  },
};

const SCHAAL = [
  ['Citroensap', 'ongeveer 2', 'Zuur'],
  ['Koffie', 'ongeveer 5', 'Licht zuur'],
  ['Osmosewater zonder mineralen', 'vaak iets onder 7', 'Licht zuur tot neutraal'],
  ['Zuiver water in theorie', '7', 'Neutraal'],
  ['Kraanwater Scheveningen (Dunea, begin 2024)', '8,41 gemiddeld', 'Licht basisch'],
  ['Bovengrens Drinkwaterbesluit', 'onder 9,5', 'Basisch'],
  ['Zeep', 'ongeveer 10', 'Basisch'],
];

const FAQ = [
  ['Wat is de pH van kraanwater in Nederland?', 'Volgens het Drinkwaterbesluit moet de pH van drinkwater tussen 7,0 en 9,5 liggen. In de praktijk is Nederlands kraanwater licht basisch. Dunea mat in Scheveningen begin 2024 bijvoorbeeld een gemiddelde pH van 8,41.'],
  ['Waarom is kraanwater licht basisch?', 'Drinkwaterbedrijven stellen de pH bewust zo in dat het water niet agressief is. Water dat te zuur is, kan leidingen aantasten en metalen zoals koper en lood oplossen. Het Drinkwaterbesluit eist daarom ook dat het water niet agressief of corrosief is.'],
  ['Is water met een hoge pH gezonder?', 'Nee. Je lichaam regelt zijn eigen zuur-base-evenwicht, via onder meer de nieren en longen. De Consumentenbond schrijft dat daar geen alkalisch water voor nodig is. Gewoon kraanwater met een pH rond 8 is prima.'],
  ['Is een pH van 9 goed voor drinkwater?', 'Een pH van 9 valt binnen de wettelijke norm, die tot 9,5 loopt. Het is dus toegestaan en niet schadelijk. Water met zo’n hoge pH kan wel iets zeepachtiger of bitterder smaken.'],
  ['Wat is de pH van osmosewater?', 'Osmosewater heeft vaak een pH iets onder 7. Het membraan haalt de mineralen weg die de pH stabiel houden, en koolzuur uit de lucht maakt het water dan licht zuur. Dat is niet schadelijk; koffie en frisdrank zijn veel zuurder.'],
  ['Hoe meet ik de pH van mijn kraanwater?', 'Met pH-teststrips of een digitale pH-meter, te koop bij bouwmarkten en webwinkels. Betrouwbaarder is het overzicht van je drinkwaterbedrijf: dat meet de pH van jouw leveringsgebied meerdere keren per jaar in een geaccrediteerd lab.'],
  ['Is de pH hetzelfde als de hardheid van water?', 'Nee. De pH zegt hoe zuur of basisch water is. De hardheid zegt hoeveel kalk, oftewel calcium en magnesium, erin zit. Beide staan in het waterkwaliteitsoverzicht van je drinkwaterbedrijf.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="pH kraanwater: wat is normaal en waarom maakt het uit?"
        description="De zuurgraad van Nederlands kraanwater: de wettelijke norm, echte meetwaarden, waarom drinkwater licht basisch is en wat osmose met de pH doet."
        image="https://www.water-zuivering.nl/assets/img/glas-water.webp"
        url="https://www.water-zuivering.nl/kennisbank/ph-kraanwater"
        datePublished="2026-10-27"
        about={{ '@type': 'Thing', name: 'pH', sameAs: 'https://nl.wikipedia.org/wiki/PH' }}
        mentions={[{ '@type': 'Organization', name: 'Dunea', url: 'https://www.dunea.nl' }]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'pH kraanwater', url: 'https://www.water-zuivering.nl/kennisbank/ph-kraanwater' },
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
              pH kraanwater: wat is normaal en waarom maakt het uit?
            </h1>
            <p className="mt-5 text-dim text-lg">
              De <strong className="text-ink">pH van kraanwater</strong> zegt hoe zuur of basisch het water is. In Nederland ligt die waarde bewust iets boven neutraal. Hier lees je wat de norm is, wat er echt gemeten wordt, waarom het water licht basisch is en wat een osmosefilter met de pH doet.
            </p>
            <KortAntwoord bron={{ naam: 'Drinkwaterbesluit, bijlage A, tabel IIIa', url: 'https://wetten.overheid.nl/BWBR0030111/2026-08-15' }}>
              Nederlands kraanwater moet volgens het Drinkwaterbesluit een pH tussen 7,0 en 9,5 hebben. In de praktijk is het licht basisch, rond 8: Dunea mat in Scheveningen begin 2024 gemiddeld 8,41. Drinkwaterbedrijven doen dat bewust, zodat het water leidingen niet aantast. Voor je gezondheid maakt een pH kraanwater binnen die grenzen geen verschil.
            </KortAntwoord>
            <AuteurRegel />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">pH kraanwater</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat is de pH-waarde van water?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              De pH (zuurgraad) loopt van 0 tot 14. Een pH van 7 is <strong className="text-ink">neutraal</strong>, lager is zuur en hoger is basisch, ook wel alkalisch genoemd. De schaal is logaritmisch: water met pH 6 is tien keer zo zuur als water met pH 7, en honderd keer zo zuur als water met pH 8.
            </p>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-amber/10 text-ink">
                  <tr>
                    <th scope="col" className="p-4 font-display font-bold">Vloeistof</th>
                    <th scope="col" className="p-4 font-display font-bold">pH</th>
                    <th scope="col" className="p-4 font-display font-bold">Karakter</th>
                  </tr>
                </thead>
                <tbody>
                  {SCHAAL.map(([wat, ph, karakter]) => (
                    <tr key={wat} className="border-t border-edge align-top">
                      <th scope="row" className="p-4 font-semibold text-ink">{wat}</th>
                      <td className="p-4 text-dim">{ph}</td>
                      <td className="p-4 text-dim">{karakter}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">pH kraanwater: de norm is 7,0 tot 9,5</h2>
            <p className="mt-4 text-dim leading-relaxed">
              In het Drinkwaterbesluit staat de zuurgraad in tabel IIIa, bij de <strong className="text-ink">bedrijfstechnische parameters</strong>. De eis: de pH moet hoger zijn dan 7,0 en lager dan 9,5. Het gaat dus niet om een gezondheidsnorm, maar om een technische eis aan hoe het water zich in het leidingnet gedraagt.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              In dezelfde tabel staat de verzadigingsindex. Die moet hoger zijn dan &minus;0,2, en de wet zegt erbij dat het water niet agressief of corrosief mag zijn. Simpel gezegd: het water mag niet zo zuur zijn dat het de binnenkant van leidingen oplost.
            </p>
            <h3 className="mt-10 font-display text-xl font-bold text-ink">Een echte meting: Scheveningen</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Hoe ziet dat er in de praktijk uit? In het kwaliteitsrapport van Dunea voor Scheveningen over het eerste kwartaal van 2024, gemeten door Het Waterlaboratorium, staat een berekende pH van <strong className="text-ink">8,33 tot 8,46, gemiddeld 8,41</strong>. De verzadigingsindex was gemiddeld 0,60, ruim boven de grens van &minus;0,2. Lood was er niet meetbaar: minder dan 0,2 microgram per liter.
            </p>
            <p className="mt-3 text-dim leading-relaxed">
              Elk drinkwaterbedrijf publiceert zulke overzichten per leveringsgebied. Daarin vind je ook de hardheid en tientallen andere stoffen. Wil je weten hoe dat voor jouw stad zit, kijk dan bijvoorbeeld bij <Link href="/kennisbank/drinkwater-amsterdam" className="underline hover:text-ink">drinkwater Amsterdam</Link> of <Link href="/kennisbank/kraanwater-utrecht" className="underline hover:text-ink">kraanwater Utrecht</Link>.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Waarom</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waarom maken drinkwaterbedrijven het water licht basisch?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Grondwater en rivierwater zijn van nature niet altijd stabiel. Bevat water veel opgelost koolzuur, dan is het licht zuur en &lsquo;agressief&rsquo;: het lost dan langzaam metaal en kalk uit leidingen op. Drinkwaterbedrijven stellen daarom de samenstelling van het water bij, dit heet <strong className="text-ink">conditioneren</strong>. Ze halen bijvoorbeeld overtollig koolzuur weg, zodat de pH iets boven 7 uitkomt.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Dat heeft twee voordelen. Leidingen gaan langer mee, en er komt minder metaal in je water. Dat laatste is extra belangrijk in oude huizen met <Link href="/kennisbank/loden-leidingen" className="underline hover:text-ink">loden leidingen</Link>: zuur water zou daar meer lood oplossen.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Is water met een hoge pH gezonder?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Er wordt veel &lsquo;basisch&rsquo; of &lsquo;alkalisch&rsquo; water verkocht, soms met apparaten van duizenden euro&apos;s. De belofte is dat het je lichaam minder zuur maakt. Dat klopt niet. Je lichaam houdt de pH van je bloed zelf binnen nauwe grenzen, via onder meer de nieren en de longen. De Consumentenbond schrijft dat je daar <strong className="text-ink">geen alkalisch water</strong> voor nodig hebt.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Je maag is bovendien sterk zuur. Wat je ook drinkt, het wordt daar meteen aangezuurd. Of de pH kraanwater nu 7, 8 of 9 is: voor je gezondheid maakt het geen verschil. Wat wel verschil maakt, is wat er verder in het water zit, zoals PFAS, medicijnresten of lood. Daarover lees je meer in <Link href="/kennisbank/is-kraanwater-veilig" className="underline hover:text-ink">is kraanwater veilig?</Link>
            </p>
            <TussenCta titel="Liever weten wat er nog meer in je kraanwater zit?" pfasEerst>
              De pH zegt niets over PFAS. Met de PFAS-check zie je in een paar seconden hoe het in jouw regio zit. Wil je het daarna zelf filteren, vraag dan vrijblijvend een offerte aan.
            </TussenCta>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/mineraalfilter.jpg" alt="pH kraanwater na osmose: mineraalfilter dat calcium en magnesium toevoegt" fill loading="eager" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Osmose</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat doet een osmosefilter met de pH?</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Een <Link href="/kennisbank/omgekeerde-osmose-filter" className="underline hover:text-ink">omgekeerde-osmosefilter</Link> haalt bijna alle opgeloste stoffen uit het water, ook calcium en magnesium. Juist die mineralen houden de pH van kraanwater stabiel. Zonder die buffer neemt het water koolzuur uit de lucht op, en zakt de pH vaak tot iets onder 7.
              </p>
              <p className="mt-4 text-dim leading-relaxed">
                Dat is niet schadelijk; koffie, sinaasappelsap en frisdrank zijn veel zuurder. Wel smaakt water zonder mineralen voor sommige mensen vlak. Daarom kun je bij een Water-zuivering systeem kiezen voor het <Link href="/winkel/cto-filter-met-mineralen" className="underline hover:text-ink">CTO-filter met mineralen</Link>. Dat voegt na het membraan weer calcium en magnesium toe, voor een voller glas water. Met de <Link href="/3-weg-kraan" className="underline hover:text-ink">3-weg kraan</Link> kies je zelf tussen gewoon, gefilterd en gemineraliseerd water.
              </p>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">pH kraanwater zelf meten</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Wil je het zelf controleren? Dat kan op twee manieren:
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">pH-teststrips:</strong> goedkoop en snel. Je dompelt een strip in een glas water en vergelijkt de kleur met een kaart. Ze geven een indicatie, geen exacte waarde.</li>
              <li><strong className="text-ink">Digitale pH-meter:</strong> nauwkeuriger, mits je hem regelmatig ijkt met een kalibratievloeistof.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Meet je thuis een andere waarde dan je drinkwaterbedrijf, dan ligt dat vaak aan de meting zelf. Water dat even in een glas staat, neemt koolzuur op uit de lucht. Voor een echt betrouwbare uitslag kun je je water laten onderzoeken door een lab; lees daarover <Link href="/kennisbank/drinkwater-laten-testen" className="underline hover:text-ink">drinkwater laten testen</Link>.
            </p>
            <h3 className="mt-10 font-display text-xl font-bold text-ink">pH en hardheid zijn twee verschillende dingen</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Mensen halen ze vaak door elkaar. De pH gaat over zuur of basisch. De hardheid gaat over hoeveel calcium en magnesium er in het water zit. In Scheveningen is het water bijvoorbeeld licht basisch (pH 8,41) en gemiddeld hard (7,7 Duitse graden). Over kalk en de gevolgen ervan lees je meer in <Link href="/kennisbank/kalkaanslag-in-huis" className="underline hover:text-ink">kalkaanslag in huis</Link>.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over pH kraanwater</h2>
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
                <li><a href="https://wetten.overheid.nl/BWBR0030111/2026-08-15" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Drinkwaterbesluit, bijlage A, tabel IIIa (zuurgraad en verzadigingsindex)</a></li>
                <li><a href="https://www.dunea.nl/-/media/bestanden/home/drinkwater/waterkwaliteitsrapportages/2024-rapportages/scheveningen-1e-kw-2024-verzendfile.ashx" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Dunea / Het Waterlaboratorium: waterkwaliteit Scheveningen, 1e kwartaal 2024</a></li>
                <li>Consumentenbond Gezondgids: Hoe zit dat met alkalisch water? (augustus 2014)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zuiver water, met mineralen als je dat wilt</h2>
            <p className="mt-4 text-white/70">Een osmosesysteem filtert PFAS, medicijnresten en microplastics uit je kraanwater. Met het mineraalfilter krijg je er calcium en magnesium weer bij. Vraag vrijblijvend een offerte aan.</p>
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

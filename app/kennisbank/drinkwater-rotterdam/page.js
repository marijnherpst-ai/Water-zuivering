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
  alternates: { canonical: '/kennisbank/drinkwater-rotterdam' },
  title: 'Drinkwater Rotterdam: bron, PFAS en watertappunten',
  description:
    'Drinkwater Rotterdam: waar het vandaan komt, wat Evides doet, hoe het zit met PFAS en waar je gratis water tapt bij de 120 watertappunten.',
  openGraph: {
    title: 'Drinkwater Rotterdam: bron, PFAS en watertappunten',
    description: 'Waar het Rotterdamse drinkwater vandaan komt, hoe het zit met PFAS en kwaliteit, en waar je in de stad gratis water tapt.',
    url: 'https://www.water-zuivering.nl/kennisbank/drinkwater-rotterdam',
    images: ['/assets/img/twee-kranen.jpg'],
  },
};

const TABEL = [['Waterbedrijf', 'Evides'], ['Bron', 'Maaswater via de spaarbekkens in de Biesbosch'], ['Productie', 'Onder meer Berenplaat (Spijkenisse) en Kralingen'], ['PFAS (Greenpeace, 22 sept. 2026)', 'Hele gemeente donkerrood, boven de RIVM-richtwaarde van 4,4 ng/l'], ['Wettelijke eisen', 'Voldoet volgens Greenpeace en de drinkwaterbedrijven'], ['Openbare watertappunten', 'Meer dan 120 (gemeente Rotterdam)']];

const FAQ = [['Waar komt het drinkwater in Rotterdam vandaan?', 'Van de Maas. Het water staat eerst in de spaarbekkens in de Biesbosch en wordt daarna door Evides gezuiverd, onder meer op de locaties Berenplaat en Kralingen.'], ['Is kraanwater in Rotterdam veilig om te drinken?', 'Ja. Het voldoet aan de wettelijke eisen, en zowel Greenpeace als het RIVM blijft adviseren kraanwater te drinken. Wel ligt de PFAS-waarde volgens de Greenpeace-analyse boven de RIVM-richtwaarde.'], ['Zit er PFAS in het drinkwater van Rotterdam?', 'Ja. Greenpeace plaatste op 22 september 2026 de hele gemeente in de hoogste categorie, donkerrood. Dat is ruim boven de RIVM-richtwaarde van 4,4 ng/l.'], ['Welk waterbedrijf heeft Rotterdam?', 'Evides levert het drinkwater in Rotterdam. Bij hen regel je je aansluiting, rekening en meterstanden.'], ['Hoe hard is het water in Rotterdam?', 'Dat verschilt per productielocatie. Evides geeft de precieze waterhardheid voor jouw postcode via Mijn waterhardheid.'], ['Waar vind ik watertappunten in Rotterdam?', 'Rotterdam heeft meer dan 120 gratis openbare watertappunten. De locaties staan op de kaart van de gemeente, en Evides heeft een overzicht met ook tappunten van anderen.']];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline='Drinkwater Rotterdam: bron, PFAS en watertappunten'
        description='Waar het Rotterdamse drinkwater vandaan komt, hoe het zit met PFAS en kwaliteit, en waar je in de stad gratis water tapt.'
        image="https://www.water-zuivering.nl/assets/img/twee-kranen.jpg"
        url="https://www.water-zuivering.nl/kennisbank/drinkwater-rotterdam"
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        about={{ '@type': 'City', name: 'Rotterdam' }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Drinkwater Rotterdam', url: 'https://www.water-zuivering.nl/kennisbank/drinkwater-rotterdam' },
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
              Drinkwater Rotterdam: bron, PFAS en watertappunten
            </h1>
            <p className="mt-5 text-dim text-lg">
              Het <strong className="text-ink">drinkwater Rotterdam</strong> begint niet in de stad, maar bij de Maas. Via de Biesbosch komt het bij de zuivering van Evides terecht en uiteindelijk uit jouw kraan. Hier lees je waar kraanwater in Rotterdam vandaan komt, waarom de hele gemeente in september 2026 op de PFAS-kaart donkerrood kleurde, en waar je in de stad gratis water tapt.
            </p>
            <KortAntwoord bron={{ naam: 'Evides: historie van het waterbedrijf', url: 'https://www.evides.nl/over-evides/de-organisatie/historie-van-evides-waterbedrijf/het-begin/het-vervolg' }}>
              Drinkwater Rotterdam komt van Evides en wordt gemaakt van Maaswater dat eerst in de spaarbekkens in de Biesbosch staat. Het water voldoet aan de wettelijke eisen. Wel plaatste Greenpeace in september 2026 heel Rotterdam in de hoogste PFAS-categorie, boven de RIVM-richtwaarde van 4,4 ng/l. Greenpeace en het RIVM blijven kraanwater drinken adviseren.
            </KortAntwoord>
            <AuteurRegel bijgewerkt="2 november 2026" />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">De bron</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waar komt het drinkwater van Rotterdam vandaan?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Rotterdam drinkt vooral <strong className="text-ink">rivierwater</strong>. Dat was vroeger Rijnwater, maar nadat de spaarbekkens in de Biesbosch in 1973 klaar waren, besloot het waterbedrijf de productielocatie Berenplaat te voeden met Maaswater. Volgens Evides ging de kwaliteit van het Rotterdamse drinkwater daardoor flink vooruit.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              De Berenplaat, bij Spijkenisse, is volgens Evides de grootste drinkwaterproductielocatie van Nederland. Daarnaast levert ook de locatie Kralingen water aan de stad. De route is grofweg:
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Inname:</strong> water uit de Maas komt in de spaarbekkens in de Brabantse Biesbosch.</li>
              <li><strong className="text-ink">Opslag:</strong> in de bekkens zakt vuil naar de bodem en wordt het water deels zachter en schoner. Bij een vervuiling in de rivier kan de inname tijdelijk stoppen.</li>
              <li><strong className="text-ink">Zuivering:</strong> op de productielocatie wordt het water verder gezuiverd tot drinkwater.</li>
              <li><strong className="text-ink">Levering:</strong> via het leidingnet komt het bij jou thuis.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Wil je het vergelijken met de buren? In <Link href="/kennisbank/drinkwater-dordrecht-zwijndrecht" className="underline hover:text-ink">drinkwater Dordrecht</Link> lees je hoe dezelfde Biesbosch daar wordt gebruikt, en bij <Link href="/kennisbank/drinkwater-amsterdam" className="underline hover:text-ink">drinkwater Amsterdam</Link> hoe een stad met duinwater werkt.
            </p>
          </div>
        </section>
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoe zit het met PFAS in drinkwater Rotterdam?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Op 22 september 2026 publiceerde Greenpeace een analyse op basis van cijfers van de drinkwaterbedrijven zelf. Daarin geldt voor <strong className="text-ink">de hele gemeente Rotterdam code donkerrood</strong>, de hoogste categorie. Dat betekent: ruim boven de richtwaarde van 4,4 nanogram per liter die het RIVM gezond vindt. Ook Den Haag en Amsterdam vallen volledig in die categorie.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Twee dingen zijn daarbij belangrijk. Het water voldoet aan de wettelijke eisen. En zowel Greenpeace als het RIVM blijft adviseren om gewoon kraanwater te drinken. Greenpeace is bovendien een actiegroep; de analyse is geen officiële beoordeling. Het gaat om stoffen die je over een heel leven binnenkrijgt, en niet om een direct gevaar.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              De oorzaak ligt grotendeels stroomopwaarts: PFAS komen via de rivieren in het water terecht en zijn lastig te verwijderen. Meer uitleg lees je in <Link href="/kennisbank/pfas-in-kraanwater" className="underline hover:text-ink">PFAS in kraanwater</Link> en op de <Link href="/kennisbank/pfas-kaart-nederland" className="underline hover:text-ink">PFAS-kaart van Nederland</Link>.
            </p>
            <TussenCta titel="Hoe zit het op jouw adres in Rotterdam?" pfasEerst>
              Check met je postcode in welke PFAS-categorie jouw adres valt. Wil je daarna zelf filteren, dan haalt een osmosesysteem het overgrote deel van de PFAS eruit.
            </TussenCta>
          </div>
        </section>
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Gratis water</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Watertappunten in Rotterdam</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Op pad en dorst? Volgens de gemeente telt Rotterdam <strong className="text-ink">meer dan 120 openbare watertappunten</strong>, verspreid over de wijken. Ze staan op drukke pleinen en langs hardlooproutes, en iedereen mag ze gratis gebruiken. Je kunt rechtstreeks drinken of een flesje bijvullen.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Alle locaties staan op de kaart van de gemeente Rotterdam, en Evides heeft een overzicht met ook tappunten van anderen, zoals de NS. Wil je een watertappunt bij jou in de buurt? Dan kun je dat aanvragen via een bewonersinitiatief, via de wijknetwerker op 14 010. De gemeente kijkt dan of er een waterleiding in de buurt ligt en of het tappunt genoeg gebruikt zal worden.
            </p>
          </div>
        </section>
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waterbedrijf, hardheid en storingen in Rotterdam</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Voor drinkwater Rotterdam is <strong className="text-ink">Evides het waterbedrijf</strong>. Daar ga je naartoe voor je rekening, meterstanden en vragen over je aansluiting.
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Hardheid:</strong> die verschilt per productielocatie. Evides geeft de hardheid voor jouw postcode op via &apos;Mijn waterhardheid&apos;. Dat is betrouwbaarder dan een gemiddelde voor de hele stad. Evides legt uit dat Maaswater in de spaarbekkens deels zachter wordt.</li>
              <li><strong className="text-ink">Storing of bruin water?</strong> Kijk met je postcode op onze <Link href="/storingen" className="underline hover:text-ink">storingen-check</Link> of lees wat je doet bij <Link href="/kennisbank/bruin-water-uit-de-kraan" className="underline hover:text-ink">bruin water uit de kraan</Link>.</li>
              <li><strong className="text-ink">Oud pand?</strong> In huizen van voor 1960 kunnen nog loden leidingen zitten. Dat is niet het probleem van het leidingnet, maar van je eigen leidingen. Zie <Link href="/kennisbank/loden-leidingen" className="underline hover:text-ink">loden leidingen</Link>.</li>
              <li><strong className="text-ink">Kookadvies?</strong> Volg altijd het advies van Evides. Een filter is daar geen vervanging voor.</li>
            </ul>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Drinkwater Rotterdam in het kort</h2>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-edge">
              <table className="w-full text-sm text-left">
                <thead className="bg-surface text-ink">
                  <tr><th scope="col" className="px-4 py-3 font-semibold">Onderwerp</th><th scope="col" className="px-4 py-3 font-semibold">Rotterdam</th></tr>
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
            <p className="mt-4 text-sm text-dim">De PFAS-categorie is een indicatie op basis van de Greenpeace-analyse. Kijk voor jouw adres op de postcodecheck.</p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
              <Image src="/assets/img/twee-kranen.jpg" alt='Drinkwater Rotterdam uit een gewone kraan en een osmosekraan' fill loading="eager" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Zelf filteren</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Is een filter in Rotterdam de moeite waard?</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Je hoeft niet te filteren: kraanwater in Rotterdam voldoet aan de wet. Wil je toch zo min mogelijk PFAS binnenkrijgen, dan is een <strong className="text-ink">osmosesysteem</strong> de manier die het meeste weghaalt, omdat het membraan ook kleine moleculen grotendeels tegenhoudt.
              </p>
              <p className="mt-4 text-dim leading-relaxed">
                Ons <Link href="/osmosesysteem" className="underline hover:text-ink">osmosesysteem</Link> werkt zonder opslagtank en past in een gewoon keukenkastje, dus ook in een kleinere stadswoning. Huur je? Lees dan eerst <Link href="/kennisbank/waterzuiveraar-installeren" className="underline hover:text-ink">waterzuiveraar installeren</Link>; daar staat wat je met je verhuurder regelt. Zelf installeren of door onze monteur laten doen kan allebei.
              </p>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over drinkwater Rotterdam</h2>
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
                <li><a href="https://www.rotterdam.nl/watertappunten" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Gemeente Rotterdam: Watertappunten</a></li>
                <li><a href="https://www.evides.nl/over-evides/de-organisatie/historie-van-evides-waterbedrijf/het-begin/het-vervolg" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Evides: historie van het waterbedrijf</a></li>
                <li><a href="https://www.evides.nl/over-evides/nieuws/2022/opening-gerenoveerd-hoofdgebouw-grootste-drinkwaterproductielocatie-van-nederland" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Evides: grootste drinkwaterproductielocatie van Nederland (2022)</a></li>
                <li><a href="https://www.evides.nl/drinkwater/waterhardheid" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Evides: Mijn waterhardheid</a></li>
                <li><a href="https://www.greenpeace.org/nl/nieuws/84042/kraanwater-noord-en-zuid-holland-bevat-hoogste-pfas-waardes/" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Greenpeace: Kraanwater Noord- en Zuid-Holland bevat hoogste PFAS-waardes</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zuiver drinkwater Rotterdam, uit je eigen kraan</h2>
            <p className="mt-4 text-white/70">Doe eerst de PFAS-check. Wil je daarna zelf filteren, vraag dan vrijblijvend een offerte aan. Vanaf €999 exclusief montage.</p>
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

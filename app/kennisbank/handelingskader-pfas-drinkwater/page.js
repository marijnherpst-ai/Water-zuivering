import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import ArticleSchema from '@/components/ArticleSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  alternates: { canonical: '/kennisbank/handelingskader-pfas-drinkwater' },
  title: 'Handelingskader PFAS: wat betekent dat voor je water? — Water-zuivering',
  description:
    'Het handelingskader PFAS bepaalt wanneer de overheid ingrijpt bij vervuiling. Wat het is, wie het gebruikt en wat het voor je drinkwater betekent.',
};

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Handelingskader PFAS: wat betekent dat voor je water?"
        description="Het handelingskader PFAS bepaalt wanneer de overheid ingrijpt bij vervuiling. Wat het is, wie het gebruikt en wat het voor je drinkwater betekent."
        image="https://www.water-zuivering.nl/assets/img/kennisbank/is-kraanwater-veilig.png"
        url="https://www.water-zuivering.nl/kennisbank/handelingskader-pfas-drinkwater"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Handelingskader PFAS: wat betekent dat voor je water?', url: 'https://www.water-zuivering.nl/kennisbank/handelingskader-pfas-drinkwater' },
        ]}
      />
      <RevealObserver />
      <Header />

      <main>
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Kennisbank</span>
            <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Handelingskader PFAS: wat betekent dat voor je water?
            </h1>
            <p className="mt-5 text-dim text-lg">
              Je komt de term vooral tegen in nieuwsberichten over bouwprojecten en grondverzet. Maar wat is een handelingskader precies, en raakt het ook je drinkwater?
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat is het handelingskader PFAS?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Het handelingskader PFAS is een set landelijke richtlijnen die overheden en bedrijven gebruiken om te bepalen wanneer grond, baggerslib of bouwmateriaal veilig genoeg is om te verplaatsen of te hergebruiken. Het geeft per hoeveelheid PFAS een concrete grenswaarde, zodat gemeentes en aannemers niet zelf hoeven te gokken wanneer iets "te vervuild" is.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Het is dus vooral een bodem- en bouwrichtlijn, geen norm voor drinkwater — die twee worden in nieuwsberichten weleens door elkaar gehaald.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat betekent het dan wél voor je drinkwater?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Indirect wel iets: gebieden met een strenger handelingskader zijn meestal ook gebieden waar in de bodem of het oppervlaktewater méér PFAS is aangetroffen — bijvoorbeeld rond industrieterreinen of (voormalige) brandweeroefenplaatsen. Dat zegt iets over de belasting van het milieu in die regio, wat op de lange termijn ook via het grondwater bij de drinkwaterwinning terecht kan komen.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Voor de actuele drinkwaternorm zelf — dus wat er wettelijk uit jóuw kraan mag komen — kun je beter kijken naar <Link href="/kennisbank/drinkwaternormen-nederland" className="underline hover:text-ink">onze uitleg over drinkwaternormen in Nederland</Link>.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoe is het handelingskader ontstaan?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Het handelingskader kwam er nadat bleek dat er in Nederland op grote schaal grond werd verplaatst zonder dat er duidelijke regels waren voor PFAS-verontreiniging — met als bekendste voorbeeld het tijdelijke bouwstop-incident van 2019, toen honderden bouw- en baggerprojecten in Nederland stil kwamen te liggen omdat niemand meer zeker wist welke grond nog verplaatst mocht worden. Om die onduidelijkheid weg te nemen, stelde het ministerie van Infrastructuur en Waterstaat het handelingskader op: een praktische leidraad met concrete grenswaarden, zodat werk weer door kon gaan zonder dat de bodemkwaliteit uit het oog werd verloren.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Sindsdien wordt het kader regelmatig bijgewerkt, naarmate er meer wetenschappelijk onderzoek beschikbaar komt over de risico's van verschillende PFAS-concentraties.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wie gebruikt het handelingskader in de praktijk?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Vooral gemeenten, provincies, waterschappen en aannemers. Zij raadplegen het kader bijvoorbeeld bij het uitgeven van een omgevingsvergunning voor grondverzet, bij baggerwerkzaamheden in sloten en kanalen, of bij het hergebruiken van grond op een bouwproject. Het is dus een instrument voor professionals in de bouw- en waterbeheersector, niet iets waar je als bewoner zelf mee te maken krijgt — behalve indirect, via de nieuwsberichten die eruit voortkomen.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Voor jou als bewoner is vooral relevant wát die berichten zeggen over jouw regio: duiden ze op verhoogde PFAS-waarden in de bodem of het oppervlaktewater vlakbij? Dan is dat een signaal om ook naar je eigen drinkwatersituatie te kijken, ook al regelt het handelingskader zelf niets over je kraanwater.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat gebeurt er als grond de grenswaarde overschrijdt?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Overschrijdt gemeten grond of slib de toegestane PFAS-waarde uit het handelingskader, dan mag het niet zomaar worden verplaatst of hergebruikt. Afhankelijk van de mate van overschrijding wordt het gereinigd, elders veilig opgeslagen (bijvoorbeeld op een erkende stortplaats), of — bij zeer lage overschrijdingen — onder strikte voorwaarden toch toegepast, mits de ontvangende locatie een vergelijkbare of hogere achtergrondwaarde heeft. Dat laatste voorkomt dat je vervuilde grond "verplaatst" in plaats van daadwerkelijk oplost.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Deze regels zijn precies waarom bouwprojecten soms vertraging oplopen zodra er PFAS in het nieuws komt: eerst moet worden vastgesteld hoeveel PFAS er in de grond zit, voordat er iets mee gedaan mag worden. Voor de gewone bewoner is dat vooral zichtbaar als "weer een bouwproject dat stilligt door PFAS" — zonder dat het iets zegt over de veiligheid van het drinkwater in die buurt.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen</h2>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-display text-lg font-bold text-ink">Geldt het handelingskader voor heel Nederland?</h3>
                <p className="mt-2 text-dim leading-relaxed">Het landelijke kader vormt de basis, maar sommige provincies en gemeenten hanteren lokaal strengere grenswaarden, afhankelijk van de bekende vervuilingsgraad in hun gebied. Het kan dus per regio net iets anders liggen.</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">Betekent een streng handelingskader dat mijn kraanwater onveilig is?</h3>
                <p className="mt-2 text-dim leading-relaxed">Niet automatisch. Het kader zegt iets over de bodem en het oppervlaktewater in jouw regio, niet rechtstreeks over je kraanwater — dat wordt apart gezuiverd en getoetst door je drinkwaterbedrijf. Het is wel een indicatie dat er in die regio historisch meer PFAS-belasting is geweest.</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">Waar vind ik het handelingskader voor mijn eigen gemeente?</h3>
                <p className="mt-2 text-dim leading-relaxed">De meeste provincies en gemeenten publiceren dit op hun eigen website, vaak onder "bodem en grondverzet" of "omgevingsloket". Voor een snel beeld van je eigen situatie is onze eigen PFAS-check overigens een stuk sneller dan die documenten zelf doorzoeken.</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">Wordt het handelingskader ooit vervangen door een vaste wet?</h3>
                <p className="mt-2 text-dim leading-relaxed">Dat is goed mogelijk op termijn — momenteel is het nog een beleidskader, geen wet, juist omdat de kennis over PFAS-risico's nog volop in ontwikkeling is. Naarmate het onderzoek vordert, ligt het voor de hand dat de richtlijnen op een gegeven moment een steviger wettelijke basis krijgen.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/kennisbank/is-kraanwater-veilig.png" alt="Waterglas met kraanwater tegen een lichte achtergrond" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Zelf checken</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Woon je in een aandachtsgebied?</h2>
              <p className="mt-4 text-dim">In plaats van rapporten en kaarten te doorzoeken, kun je in een paar seconden zien hoe het rond jouw postcode zit. Doe de <Link href="/pfas-check" className="underline hover:text-ink">gratis PFAS-check</Link> en weet meteen waar je staat.</p>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zekerheid, ongeacht wat de kaart zegt</h2>
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

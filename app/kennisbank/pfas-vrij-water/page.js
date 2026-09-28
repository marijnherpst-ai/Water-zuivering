import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import ArticleSchema from '@/components/ArticleSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  alternates: { canonical: '/kennisbank/pfas-vrij-water' },
  title: 'PFAS-vrij water: kan dat écht uit je eigen kraan? — Water-zuivering',
  description:
    'Volledig PFAS-vrij drinkwater: is dat realistisch, en hoe kom je er zo dicht mogelijk bij? Uitleg over wat wel en niet werkt.',
};

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="PFAS-vrij water: kan dat écht uit je eigen kraan?"
        description="Volledig PFAS-vrij drinkwater: is dat realistisch, en hoe kom je er zo dicht mogelijk bij? Uitleg over wat wel en niet werkt."
        image="https://www.water-zuivering.nl/assets/img/glas-water.webp"
        url="https://www.water-zuivering.nl/kennisbank/pfas-vrij-water"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'PFAS-vrij water: kan dat écht uit je eigen kraan?', url: 'https://www.water-zuivering.nl/kennisbank/pfas-vrij-water' },
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
              PFAS-vrij water: kan dat écht uit je eigen kraan?
            </h1>
            <p className="mt-5 text-dim text-lg">
              "PFAS-vrij" staat op steeds meer producten en filters. Wat betekent dat woord eigenlijk, en is het bij drinkwater realistisch?
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat betekent "PFAS-vrij" precies?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Strikt genomen bestaat "100% PFAS-vrij" bijna niet — de meetapparatuur van laboratoria wordt steeds gevoeliger, en daardoor vinden ze bijna overal wel een spoortje, hoe klein ook. In de praktijk bedoelt de industrie met "PFAS-vrij" meestal: de concentratie zit ruim onder de detectiegrens of de wettelijke norm, en is dus verwaarloosbaar voor je gezondheid.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Dat onderscheid is belangrijk, want het bepaalt ook hoe je een claim op een filter of waterfles moet lezen: het gaat vrijwel altijd om "vrijwel geen meetbare PFAS meer", niet om een letterlijke nul.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Welke methodes komen het dichtst in de buurt?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Niet elk filter is daar even goed in. Een eenvoudige koolstoffilter (zoals in een filterkan) vangt een deel van de PFAS-moleculen, maar lang niet alles — en de werking neemt snel af naarmate het filter vol raakt. Omgekeerde osmose werkt anders: het water wordt onder druk door een membraan geperst met poriën die honderden keren dunner zijn dan een PFAS-molecuul, waardoor vrijwel niets erdoorheen komt.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Wil je precies weten hoe dat membraan werkt? Dat leggen we stap voor stap uit in <Link href="/kennisbank/omgekeerde-osmose-filter" className="underline hover:text-ink">ons artikel over de omgekeerde osmose filter</Link>.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Welke filters PFAS juist niet goed tegenhouden</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Een aantal populaire methodes klinkt veelbelovend, maar doet bij PFAS eigenlijk weinig. Koken haalt niets weg — PFAS is juist opvallend hittebestendig, dat is precies waarom het ooit in antiaanbaklagen werd gebruikt. Een waterontharder verandert alleen de hardheid van het water (kalk), niet de aanwezigheid van PFAS. En een simpel actief-koolfiltertje in een kraansproeier heeft vaak te weinig contacttijd en capaciteit om een merkbaar verschil te maken bij langdurig gebruik.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Zelfs een goede koolstoffilter, zoals losstaand in een filterkan, werkt vooral op basis van adsorptie: de stof "plakt" aan het koolstofoppervlak. Dat werkt behoorlijk voor chloor en sommige smaakstoffen, maar PFAS-moleculen zijn zo klein en zo waterafstotend dat een deel er simpelweg doorheen glipt — zeker zodra het filter een tijdje in gebruik is.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoe weet je of het écht werkt?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              De enige manier om zeker te weten hoeveel PFAS er nog in je water zit, is een laboratoriumtest — voor of na filtratie, of allebei. Dat is voor de meeste huishoudens niet praktisch: het is prijzig en duurt weken. Daarom vertrouwen fabrikanten van osmosesystemen op de technische specificatie van het membraan zelf: de poriegrootte is fysiek te klein voor PFAS-moleculen, ongeacht welke concentratie er binnenkomt. Dat is een fundamenteel andere garantie dan "we hebben het getest en het werkte toen" — het werkt namelijk op basis van een fysieke barrière, niet op basis van een chemische reactie die op kan raken.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Let er bij de aanschaf van een systeem wel op dat het specifiek een omgekeerde-osmosemembraan bevat, en niet alleen een koolstoffilter met een "PFAS-vrij"-sticker erop — die twee claims klinken hetzelfde, maar zijn dat in de praktijk niet.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen</h2>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-display text-lg font-bold text-ink">Bestaat er dan helemaal geen 100% PFAS-vrij water?</h3>
                <p className="mt-2 text-dim leading-relaxed">In de praktijk niet met absolute zekerheid — wel water waarin PFAS ruim onder de meetbare of wettelijke grens zit. Voor je gezondheid maakt dat verschil vrijwel niets uit: het gaat erom dat de blootstelling zo laag mogelijk is, niet om een filosofische "nul".</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">Is flessenwater een veiliger alternatief?</h3>
                <p className="mt-2 text-dim leading-relaxed">Niet per se. PFAS is ook aangetroffen in sommige merken flessenwater, en de plastic fles brengt weer een eigen discussie over microplastics met zich mee. Gefilterd kraanwater via omgekeerde osmose is vaak een consistentere oplossing, en goedkoper op de lange termijn.</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">Moet ik ook koken met PFAS-vrij water?</h3>
                <p className="mt-2 text-dim leading-relaxed">Dat is een persoonlijke afweging, maar omdat PFAS niet verdwijnt door verhitting, heeft filteren vóór het koken meer zin dan erna. Veel mensen sluiten daarom hun osmosesysteem ook aan op de kraan die ze voor koken gebruiken.</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">Hoe snel merk ik verschil na het plaatsen van een filter?</h3>
                <p className="mt-2 text-dim leading-relaxed">Direct vanaf het eerste glas: zodra het systeem is aangesloten en doorgespoeld, filtert het membraan continu mee. Je merkt vaak ook meteen een zuiverdere smaak, omdat naast PFAS ook chloor en andere stoffen worden tegengehouden — al is dat natuurlijk een ander effect dan de PFAS-reductie zelf, die je niet proeft.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/glas-water.webp" alt="Glas helder gefilterd water" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Check je eigen situatie</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoeveel PFAS zit er nu in jouw gebied?</h2>
              <p className="mt-4 text-dim">Voordat je een filter overweegt, is het handig om te weten waar je vandaan start. Met onze <Link href="/pfas-check" className="underline hover:text-ink">gratis PFAS-check</Link> zie je binnen een minuut hoe het rond jouw postcode zit.</p>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zo dicht mogelijk bij PFAS-vrij, uit je eigen kraan</h2>
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

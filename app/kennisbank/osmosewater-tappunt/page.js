import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import ArticleSchema from '@/components/ArticleSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  alternates: { canonical: '/kennisbank/osmosewater-tappunt' },
  title: 'Osmosewater tappunt: apart kraantje, hoe werkt dat? — Water-zuivering',
  description:
    'Een osmosewater tappunt is een eigen kraantje naast je gewone kraan. Wat het is, waarom je het wilt en hoe de aansluiting werkt.',
};

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Osmosewater tappunt: een apart kraantje, hoe werkt dat?"
        description="Een osmosewater tappunt is een eigen kraantje naast je gewone kraan. Wat het is, waarom je het wilt en hoe de aansluiting werkt."
        image="https://www.water-zuivering.nl/assets/img/twee-kranen.jpg"
        url="https://www.water-zuivering.nl/kennisbank/osmosewater-tappunt"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Osmosewater tappunt: een apart kraantje, hoe werkt dat?', url: 'https://www.water-zuivering.nl/kennisbank/osmosewater-tappunt' },
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
              Osmosewater tappunt: een apart kraantje, hoe werkt dat?
            </h1>
            <p className="mt-5 text-dim text-lg">
              Bij een osmosesysteem hoort meestal een eigen tappunt naast je gewone kraan. Wat dat precies is, en waarom het handiger is dan het klinkt.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waarom niet gewoon uit de bestaande kraan?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Een omgekeerde-osmosesysteem filtert relatief langzaam, omdat het water onder druk door een fijn membraan wordt geperst. Zou je dat direct op je gewone kraan aansluiten, dan zou de druk en de doorstroomsnelheid daar niet op berekend zijn. Daarom krijgt het gefilterde water een eigen, apart kraantje: een dun tappunt dat naast — of gecombineerd met — je bestaande kraan wordt geplaatst.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Het systeem zelf, inclusief een kleine opslagtank, staat meestal weggewerkt in het kastje onder je gootsteen. Alleen het tappunt is zichtbaar op je aanrecht.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Eén kraan of twee?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Er zijn twee gangbare opties. Bij een apart tappunt krijg je een extra, meestal kleiner kraantje naast je bestaande mengkraan — simpel te herkennen en te bedienen. Bij een 3-weg kraan wordt gefilterd én gewoon leidingwater juist samengevoegd in één kraan, met een extra hendel om te wisselen. Dat oogt strakker, maar vraagt wel een kraan die daarvoor geschikt is.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Twijfel je tussen de twee? We zetten het verschil rustig naast elkaar in <Link href="/kennisbank/3-weg-kraan-uitleg" className="underline hover:text-ink">onze uitleg over de 3-weg kraan</Link>.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Welke afwerkingen en materialen zijn er?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Net als bij een gewone kraan kun je bij een tappunt kiezen uit verschillende afwerkingen: chroom, geborsteld staal, mat zwart of goud zijn de meest gangbare opties. Omdat het tappunt vaak kleiner en subtieler is dan je hoofdkraan, valt de keuze in de praktijk vooral samen met de stijl van je keuken — een strak zwart tappunt bij een moderne, donkere keuken, chroom of staal bij een neutralere inrichting.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Qua vorm zijn er ook varianten: een klassiek recht kraantje, een gebogen model met een iets grotere boog voor het vullen van hogere glazen of kannen, en compacte modellen die net iets minder ruimte innemen op een druk aanrecht.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Onderhoud: waar moet je op letten?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Het tappunt zelf vraagt weinig onderhoud — een doekje om kalkspatten te verwijderen is meestal genoeg, net als bij elke andere kraan. Wat wel aandacht vraagt, is het systeem erachter: de filters van een osmosesysteem moeten periodiek vervangen worden, meestal een combinatie van filters die jaarlijks aan de beurt zijn en een membraan dat minder vaak vervangen hoeft te worden.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Een goede vuistregel daarvoor lees je in <Link href="/kennisbank/waterfilter-vervangen-hoe-vaak" className="underline hover:text-ink">ons artikel over hoe vaak je een waterfilter moet vervangen</Link>. Zolang je dat bijhoudt, blijft ook het tappunt zelf gewoon jarenlang meegaan.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen</h2>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-display text-lg font-bold text-ink">Past een tappunt in elk aanrecht?</h3>
                <p className="mt-2 text-dim leading-relaxed">In vrijwel elk aanrecht wel, ja — er is maar een klein extra gaatje nodig (meestal rond de 1,2 cm doorsnede). Bij een keuken van natuursteen of composiet kan dat gat vaak netjes worden geboord door de installateur zonder dat het opvalt.</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">Kan ik het tappunt zelf plaatsen?</h3>
                <p className="mt-2 text-dim leading-relaxed">Technisch gezien kan dat, maar de meeste mensen laten het door een installateur doen — vooral vanwege het boren van het gat in het aanrecht en het correct aansluiten op de opslagtank en het systeem onder de kast. Dat scheelt achteraf gedoe met lekkages.</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">Wat kost een apart tappunt ongeveer?</h3>
                <p className="mt-2 text-dim leading-relaxed">Dat hangt af van het model en de afwerking, maar een tappunt is meestal onderdeel van de totale systeemprijs bij aanschaf van een osmosesysteem, inclusief installatie. Losse vervanging of upgrade naar een ander model kost typisch een fractie van de systeemprijs.</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">Kan ik later alsnog overstappen naar een 3-weg kraan?</h3>
                <p className="mt-2 text-dim leading-relaxed">Ja, dat kan meestal zonder het hele systeem te vervangen — alleen het kraanwerk zelf wordt dan omgewisseld. Het systeem en de opslagtank onder de kast blijven ongewijzigd, dus het is vooral een kwestie van de juiste aansluiting op het nieuwe kraanmodel.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/twee-kranen.jpg" alt="Twee kranen naast elkaar op een aanrecht" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Installatie</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoe wordt het tappunt geplaatst?</h2>
              <p className="mt-4 text-dim">Een extra gaatje in het aanrecht, een leidingaftakking naar het systeem onder de kast, en klaar — meestal is een installateur hier binnen één werkdag mee klaar. Wat er verder allemaal bij komt kijken lees je in <Link href="/kennisbank/waterzuiveraar-installeren" className="underline hover:text-ink">onze uitleg over installatie</Link>.</p>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zuiver water op één kraantje afstand</h2>
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

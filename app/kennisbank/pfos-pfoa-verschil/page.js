import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import ArticleSchema from '@/components/ArticleSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  alternates: { canonical: '/kennisbank/pfos-pfoa-verschil' },
  title: 'PFAS, PFOS en PFOA: wat is het verschil? — Water-zuivering',
  description:
    'PFAS, PFOS en PFOA worden vaak door elkaar gebruikt. Het verschil uitgelegd, en waarom het voor je drinkwater niet zoveel uitmaakt.',
};

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="PFAS, PFOS en PFOA: wat is het verschil?"
        description="PFAS, PFOS en PFOA worden vaak door elkaar gebruikt. Het verschil uitgelegd, en waarom het voor je drinkwater niet zoveel uitmaakt."
        image="https://www.water-zuivering.nl/assets/img/filters-closeup.png"
        url="https://www.water-zuivering.nl/kennisbank/pfos-pfoa-verschil"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'PFAS, PFOS en PFOA: wat is het verschil?', url: 'https://www.water-zuivering.nl/kennisbank/pfos-pfoa-verschil' },
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
              PFAS, PFOS en PFOA: wat is het verschil?
            </h1>
            <p className="mt-5 text-dim text-lg">
              Drie afkortingen die veel door elkaar worden gebruikt in het nieuws. Hier lees je wat elk begrip precies betekent.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">PFAS is de hele familie, PFOS en PFOA zijn twee leden ervan</h2>
            <p className="mt-4 text-dim leading-relaxed">
              <strong className="text-ink">PFAS</strong> (poly- en perfluoralkylstoffen) is de verzamelnaam voor een groep van duizenden vergelijkbare chemische stoffen. <strong className="text-ink">PFOS</strong> en <strong className="text-ink">PFOA</strong> zijn twee specifieke, veelbesproken stoffen binnen die groep — allebei al langere tijd verboden of sterk aan banden gelegd in de EU, maar nog altijd meetbaar in het milieu omdat ze zo langzaam afbreken.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Het onderscheid werkt eigenlijk hetzelfde als "vis" versus "haring" en "kabeljauw": PFOS en PFOA zijn twee bekende, goed onderzochte soorten binnen de veel grotere PFAS-familie.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waarom dit onderscheid in de praktijk weinig uitmaakt</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Voor je eigen drinkwater is het verschil vooral academisch. Beide stoffen — en de duizenden andere PFAS-varianten — zijn wateroplosbaar en hopen zich op in het lichaam. Onderzoekers meten daarom vaak de totale PFAS-belasting in plaats van elke stof los te bekijken, en de wettelijke norm voor drinkwater is ook op die optelsom gebaseerd, niet op één specifieke stof.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Wat betekent dat concreet voor jouw water? Dat lees je in <Link href="/kennisbank/pfas-in-kraanwater" className="underline hover:text-ink">ons artikel over PFAS in kraanwater</Link>, of check direct <Link href="/kennisbank/pfas-kaart-nederland" className="underline hover:text-ink">de PFAS kaart van jouw regio</Link>.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Andere bekende PFAS-varianten</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Naast PFOS en PFOA zijn er nog duizenden andere varianten, waarvan een aantal ook geregeld in het nieuws komt. <strong className="text-ink">GenX</strong> is bijvoorbeeld een stof die door de chemische industrie werd ontwikkeld als vervanger voor PFOA — met de gedachte dat het veiliger zou zijn, tot later bleek dat ook GenX zich in het milieu ophoopt en vergelijkbare zorgen oproept. <strong className="text-ink">PFHxS</strong> en <strong className="text-ink">PFBS</strong> zijn twee andere veelgemeten varianten, vooral rond gebieden waar blusschuim is gebruikt.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Dit patroon — een stof vervangen door een "nieuwe, veiligere" variant die later toch vergelijkbare eigenschappen blijkt te hebben — is precies waarom toezichthouders steeds vaker naar de hele PFAS-groep kijken in plaats van losse stoffen apart te beoordelen en te reguleren.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waarom juist PFOS en PFOA zo vaak genoemd worden</h2>
            <p className="mt-4 text-dim leading-relaxed">
              PFOS en PFOA zijn de twee stoffen waar het meeste gezondheidsonderzoek naar is gedaan, simpelweg omdat ze het langst en op de grootste schaal zijn gebruikt — in antiaanbaklagen, waterafstotende kleding, blusschuim en verpakkingsmateriaal. Daardoor zijn ze ook de eerste stoffen waarvoor internationale verdragen (zoals het Verdrag van Stockholm) een verbod hebben ingesteld, en de stoffen waar de eerste, strengste grenswaarden voor zijn vastgesteld.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Dat betekent niet dat de andere, minder bekende varianten onschuldig zijn — vaak is er simpelweg nog minder langetermijnonderzoek naar gedaan. Vandaar dat instanties voorzichtigheidshalve uitgaan van de opgetelde belasting van alle PFAS-varianten samen, in plaats van te wachten tot elke stof los is onderzocht.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen</h2>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-display text-lg font-bold text-ink">Zijn PFOS en PFOA nu helemaal verboden?</h3>
                <p className="mt-2 text-dim leading-relaxed">In de EU is het gebruik van PFOS al sinds 2009 sterk beperkt, en PFOA sinds 2020. Nieuwe productie en gebruik zijn dus grotendeels verboden, maar omdat beide stoffen decennialang zijn gebruikt en nauwelijks afbreken, zijn ze nog altijd in bodem, oppervlaktewater en soms drinkwater meetbaar.</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">Kan ik zien welke specifieke PFAS-stof in mijn water zit?</h3>
                <p className="mt-2 text-dim leading-relaxed">Drinkwaterbedrijven publiceren soms een uitsplitsing per stof in hun jaarrapportages, maar voor de meeste huishoudens is dat detailniveau niet nodig — de wettelijke norm en de meeste filtertechnieken werken toch op basis van de totale PFAS-belasting.</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">Is GenX veiliger dan PFOA, zoals ooit beloofd?</h3>
                <p className="mt-2 text-dim leading-relaxed">Nee, dat blijkt in de praktijk tegen te vallen. GenX breekt weliswaar iets sneller af dan PFOA, maar hoopt zich nog altijd op in het milieu en het lichaam, en staat inmiddels ook op de lijst van stoffen waar toezichthouders scherp op letten.</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">Waarom worden er steeds nieuwe PFAS-varianten ontdekt?</h3>
                <p className="mt-2 text-dim leading-relaxed">Omdat de chemische industrie tientallen jaren lang telkens net iets andere moleculen ontwikkelde voor specifieke toepassingen, en meetmethoden pas de laatste jaren gevoelig genoeg zijn geworden om al die varianten stuk voor stuk te herkennen. Vandaar dat de "PFAS-familie" op papier steeds groter lijkt te worden, terwijl de stoffen zelf al veel langer aanwezig zijn.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/filters-closeup.png" alt="Close-up van waterfilters" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Eén filter, alle varianten</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Onderscheid maken hoeft niet — filteren wel</h2>
              <p className="mt-4 text-dim">Een omgekeerde-osmosemembraan onderscheidt PFOS, PFOA en andere PFAS-varianten niet apart — het houdt ze allemaal tegen op basis van molecuulgrootte. Je hoeft dus niet te weten welke variant er precies in jouw water zit om je ertegen te wapenen.</p>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Alle PFAS-varianten eruit, met één systeem</h2>
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

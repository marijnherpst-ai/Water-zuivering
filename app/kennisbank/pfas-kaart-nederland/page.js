import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import ArticleSchema from '@/components/ArticleSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  alternates: { canonical: '/kennisbank/pfas-kaart-nederland' },
  title: 'PFAS kaart Nederland: zit het in jouw water? — Water-zuivering',
  description:
    'De PFAS kaart van Nederland laat zien waar de stoffen zijn gevonden. Zo lees je hem, en zo check je zelf of het ook in jouw drinkwater zit.',
};

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="PFAS kaart Nederland: zit het ook in jouw water?"
        description="De PFAS kaart van Nederland laat zien waar de stoffen zijn gevonden. Zo lees je hem, en zo check je zelf of het ook in jouw drinkwater zit."
        image="https://www.water-zuivering.nl/assets/img/kennisbank/pfas-in-kraanwater.png"
        url="https://www.water-zuivering.nl/kennisbank/pfas-kaart-nederland"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'PFAS kaart Nederland: zit het ook in jouw water?', url: 'https://www.water-zuivering.nl/kennisbank/pfas-kaart-nederland' },
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
              PFAS kaart Nederland: zit het ook in jouw water?
            </h1>
            <p className="mt-5 text-dim text-lg">
              RIVM en waterschappen brengen PFAS-vervuiling steeds gedetailleerder in kaart. Zo lees je die kaart, en zo weet je wat het voor jouw eigen kraanwater betekent.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat laat de PFAS kaart precies zien?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Verschillende instanties — waaronder het RIVM en provincies — publiceren kaarten met gemeten PFAS-concentraties in bodem, oppervlaktewater en op locaties met een bekende vervuilingsbron, zoals voormalige fabrieksterreinen of brandweeroefenplaatsen. Op zo'n kaart zie je meestal een kleurcodering: van laag risico tot gebieden waar aanvullend onderzoek of een handelingskader geldt.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Belangrijk om te weten: deze kaarten gaan vooral over bodem en oppervlaktewater, niet direct over het water dat uit jouw kraan komt. Drinkwaterbedrijven zuiveren en controleren dat apart, en meestal blijft de PFAS-waarde daar onder de wettelijke norm.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waarom "onder de norm" niet hetzelfde is als "nul"</h2>
            <p className="mt-4 text-dim leading-relaxed">
              De wettelijke norm is een grens die als veilig wordt beschouwd bij het huidige onderzoek — maar dat betekent niet dat er helemaal geen PFAS in het water zit. Bij bijna elke meting in Nederland is een klein spoor terug te vinden, simpelweg omdat de stoffen al decennia overal in het milieu zitten en nauwelijks afbreken.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Steeds meer mensen kiezen er daarom voor om het laatste beetje zelf weg te filteren, in plaats van te wachten tot de norm verder wordt aangescherpt. Meer achtergrond over wat PFAS precies is en waar het vandaan komt lees je in <Link href="/kennisbank/pfas-in-kraanwater" className="underline hover:text-ink">ons artikel over PFAS in kraanwater</Link>.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Welke gebieden vallen extra op?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Op de kaarten van het RIVM en de provincies springen vooral een aantal type locaties eruit: de omgeving van Schiphol en andere vliegvelden (door jarenlang gebruik van PFAS-houdend blusschuim), industrieterreinen waar vroeger chemische fabrieken zaten, en de regio rond Dordrecht en de Drechtsteden, waar een grote chemiefabriek decennialang PFOA heeft uitgestoten. Ook in en rond veel brandweerkazernes en -oefenterreinen worden verhoogde waarden gemeten, om dezelfde reden als bij vliegvelden.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Belangrijk detail: een "aandachtsgebied" op de kaart zegt iets over de bodem of het oppervlaktewater ter plekke, niet automatisch over de kwaliteit van het drinkwater dat bij jou uit de kraan komt. Drinkwaterbedrijven winnen hun water vaak dieper uit de grond of uit andere bronnen, en zuiveren en toetsen dat apart aan de wettelijke norm — ook als je toevallig in of vlakbij zo'n gebied woont.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoe vaak wordt de kaart bijgewerkt?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Er is geen vaste, landelijke update-frequentie — dat verschilt per bronhouder. Het RIVM werkt zijn overzichtskaarten bij zodra er nieuwe metingen of onderzoeken beschikbaar zijn, vaak een paar keer per jaar. Provincies en gemeenten voegen tussentijds eigen bodemonderzoeken toe, bijvoorbeeld rond een nieuw bouwproject of na een incident. Het beeld verandert dus geleidelijk, niet in één keer.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Dat betekent ook dat een kaart die je nu bekijkt een momentopname is van wat er ís gemeten — niet een garantie dat een gebied zonder kleur ook echt PFAS-vrij is. Op veel plekken is simpelweg nog niet (recent) gemeten.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Bodemkaart versus je eigen drinkwaterkwaliteit</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Een veelgemaakte denkfout is de PFAS-bodemkaart lezen alsof die rechtstreeks je kraanwater beschrijft. In werkelijkheid zijn dat twee gescheiden systemen. De bodemkaart komt van bodemonderzoek: monsters uit grond, sloten en oppervlaktewater, verzameld voor bouw- en milieudoeleinden. De kwaliteit van je drinkwater wordt apart bewaakt door je drinkwaterbedrijf, met eigen metingen op de winlocaties en in het leidingnet, getoetst aan de Drinkwaterwet.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Die twee hangen wel losjes met elkaar samen — een regio met veel bodemvervuiling vormt op de lange termijn een groter risico voor de bronnen waar drinkwaterbedrijven uit putten — maar de een is geen directe vertaling van de ander. Voor een volledig beeld kijk je dus het beste naar beide: de bodemkaart voor de bredere milieucontext, en de eigen rapportages van je drinkwaterbedrijf voor wat er daadwerkelijk uit je kraan komt.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen</h2>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-display text-lg font-bold text-ink">Is er één officiële PFAS-kaart voor heel Nederland?</h3>
                <p className="mt-2 text-dim leading-relaxed">Niet één centrale kaart, maar een verzameling: het RIVM publiceert een landelijk overzicht, en provincies en gemeenten vullen dat aan met lokale bodemonderzoeken. Voor een volledig beeld van jouw omgeving kijk je dus eigenlijk naar meerdere bronnen tegelijk.</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">Kan ik zelf mijn kraanwater laten testen op PFAS?</h3>
                <p className="mt-2 text-dim leading-relaxed">Ja, gespecialiseerde laboratoria bieden dat aan, maar een volledige PFAS-analyse is prijzig en kost enkele weken. Voor de meeste huishoudens is het praktischer om te kijken naar de gepubliceerde meetdata van je drinkwaterbedrijf en waar nodig zelf te filteren, in plaats van zelf te laten testen.</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">Woon ik in een aandachtsgebied — betekent dat dat ik moet filteren?</h3>
                <p className="mt-2 text-dim leading-relaxed">Niet per se verplicht, maar wel een reden om extra zekerheid te willen. Omdat een omgekeerde-osmosefilter alle PFAS-varianten tegelijk tegenhoudt, ongeacht de concentratie, is het voor veel mensen in zo'n gebied een simpele manier om het risico helemaal van tafel te halen in plaats van erop te vertrouwen dat de norm genoeg is.</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">Waarom verschillen kaarten van verschillende bronnen soms van elkaar?</h3>
                <p className="mt-2 text-dim leading-relaxed">Omdat elke bronhouder zijn eigen meetpunten, meetmomenten en meetmethode gebruikt. Een provinciale kaart kan bijvoorbeeld op andere data gebaseerd zijn dan een landelijke RIVM-kaart, of recenter zijn bijgewerkt. Bij twijfel is de meest recente, best gedocumenteerde bron meestal de betrouwbaarste keuze.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/kennisbank/pfas-in-kraanwater.png" alt="Kraanwater ingeschonken in een glas" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Zelf checken</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat betekent dit voor jouw postcode?</h2>
              <p className="mt-4 text-dim">In plaats van zelf kaarten en rapporten te doorzoeken, hebben we een simpele check gemaakt die je in een paar seconden laat zien hoe het zit rond jouw gebied. Doe de <Link href="/pfas-check" className="underline hover:text-ink">gratis PFAS-check</Link> en zie direct waar je aan toe bent.</p>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">PFAS-vrij water, direct uit je kraan</h2>
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

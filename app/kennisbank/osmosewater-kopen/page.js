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

export const metadata = {
  alternates: { canonical: '/kennisbank/osmosewater-kopen' },
  title: 'Osmosewater kopen: waar en wat kost het? — Water-zuivering',
  description:
    'Osmosewater kopen? Waar je het haalt, wat het per liter kost, of je het kunt drinken en wanneer zelf osmosewater maken goedkoper is dan kopen.',
  openGraph: {
    title: 'Osmosewater kopen: waar en wat kost het?',
    description: 'Tappunt, aquariumwinkel of drogist: waar je osmosewater koopt, wat het kost en wanneer zelf maken voordeliger is.',
    url: 'https://www.water-zuivering.nl/kennisbank/osmosewater-kopen',
    images: ['/assets/img/glas-water.webp'],
  },
};

const PLEKKEN = [
  ['Osmose-tappunt', 'Zelfbediening, vaak dag en nacht open. Je tapt het water in je eigen jerrycans en betaalt met je pinpas.', 'Glazenwassers, schoonmaken van ramen en zonnepanelen'],
  ['Groothandel voor glazenwassers', 'Verkoopt osmosewater en materiaal voor glasbewassing, soms ook in kleinere hoeveelheden.', 'Ramen, auto, zonnepanelen'],
  ['Aquariumspeciaalzaak', 'Veel aquariumwinkels verkopen osmosewater per liter of per jerrycan, of hebben een eigen tappunt.', 'Aquaria en terraria'],
  ['Drogist of bouwmarkt', 'Hier vind je vooral gedemineraliseerd water in flessen van een liter. Dat is iets anders dan osmosewater, zie hieronder.', 'Strijkijzer, stoomreiniger, accu'],
];

const FAQ = [
  ['Waar kun je osmosewater kopen?', 'Osmosewater koop je bij een osmose-tappunt (vaak zelfbediening, dag en nacht open), bij een groothandel voor glazenwassers of bij een aquariumspeciaalzaak. Bij de drogist en bouwmarkt vind je vooral gedemineraliseerd water, en dat is niet hetzelfde.'],
  ['Wat kost osmosewater per liter?', 'Dat verschilt per verkoper. Wij zagen prijzen van een paar cent tot ongeveer € 0,18 per liter. Reken daarbij de jerrycans: een jerrycan van 20 liter met kraan kost in de bouwmarkt zo\'n € 12 tot € 15.'],
  ['Kun je gekocht osmosewater drinken?', 'Dat hangt af van waar het vandaan komt. Tappunten voor glazenwassers zijn niet gemaakt voor drinkwater, en de jerrycan moet schoon en voedselveilig zijn. Vraag bij de verkoper na of het water geschikt is om te drinken.'],
  ['Is gedemineraliseerd water hetzelfde als osmosewater?', 'Niet helemaal. Bij allebei zijn de opgeloste mineralen grotendeels verwijderd, maar gedemineraliseerd water wordt vaak op een andere manier gemaakt en is bedoeld voor apparaten zoals een strijkijzer. Kijk op het etiket of het geschikt is om te drinken.'],
  ['Hoe lang kun je osmosewater bewaren?', 'Bewaar het in een schone, afgesloten en voedselveilige jerrycan, koel en donker. Voor drinkwater raden we aan om het binnen een paar dagen te gebruiken. Voor schoonmaken mag het langer staan.'],
  ['Is zelf osmosewater maken goedkoper dan kopen?', 'Voor drinkwater meestal wel. Een gezin van vier dat 2 liter per persoon per dag drinkt, heeft bijna 3.000 liter per jaar nodig. Met een eigen systeem betaal je na de aanschaf alleen nog vervangende filters, bij Water-zuivering gemiddeld ongeveer € 135 per jaar, en je hoeft niets te sjouwen.'],
  ['Zitten er mineralen in osmosewater?', 'Nauwelijks. Het membraan houdt ook calcium en magnesium tegen, waardoor osmosewater wat vlak kan smaken. Sommige systemen voegen die mineralen na het filteren weer toe met een mineraalfilter.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Osmosewater kopen: waar haal je het en wat kost het?"
        description="Waar je osmosewater koopt, wat het per liter kost, of je het kunt drinken en wanneer zelf maken goedkoper is."
        image="https://www.water-zuivering.nl/assets/img/glas-water.webp"
        url="https://www.water-zuivering.nl/kennisbank/osmosewater-kopen"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Osmosewater kopen', url: 'https://www.water-zuivering.nl/kennisbank/osmosewater-kopen' },
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
              Osmosewater kopen: waar haal je het en wat kost het?
            </h1>
            <p className="mt-5 text-dim text-lg">
              Wil je <strong className="text-ink">osmosewater kopen</strong>, voor je ramen, je aquarium of om te drinken? Hier lees je waar je het haalt, wat het kost, waar je op let en wanneer zelf maken slimmer is.
            </p>
            <KortAntwoord>
              Osmosewater kopen kan bij een osmose-tappunt, een groothandel voor glazenwassers of een aquariumspeciaalzaak. Je betaalt van een paar cent tot ongeveer € 0,18 per liter, plus jerrycans. Bij de drogist vind je vooral gedemineraliseerd water, en dat is iets anders. Wil je osmosewater drinken, dan is zelf maken onder het aanrecht meestal goedkoper en hygiënischer.
            </KortAntwoord>
            <AuteurRegel />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Waar te koop</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waar kun je osmosewater kopen?</h2>
            <p className="mt-4 text-dim leading-relaxed max-w-3xl">
              Wie osmosewater wil kopen, komt bij vier soorten verkopers uit. Ze verkopen niet allemaal hetzelfde, en ze zijn niet allemaal bedoeld voor drinkwater.
            </p>
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              {PLEKKEN.map(([naam, uitleg, voor]) => (
                <div key={naam} className="reveal card rounded-2xl p-6">
                  <h3 className="font-display text-lg font-bold text-ink">{naam}</h3>
                  <p className="mt-2 text-sm text-dim leading-relaxed">{uitleg}</p>
                  <p className="mt-3 text-xs text-dim"><strong className="text-ink">Vooral gebruikt voor:</strong> {voor}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat kost osmosewater per liter?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Wie osmosewater wil kopen, vindt geen vaste prijs. Elk tappunt en elke winkel bepaalt zelf wat het rekent, en de meeste tappunten zetten hun prijs niet online. Wij zagen bij onze rondgang prijzen van <strong className="text-ink">een paar cent tot ongeveer € 0,18 per liter</strong>. Vraag het dus even na voordat je gaat.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Vergeet de jerrycans niet. Een jerrycan van 20 liter met tapkraan kost in de bouwmarkt zo&apos;n <strong className="text-ink">€ 12 tot € 15</strong>. Wil je het water drinken, kies dan een jerrycan die geschikt is voor levensmiddelen.
            </p>

            <div className="mt-8 rounded-2xl border border-edge bg-white p-6">
              <h3 className="font-display text-lg font-bold text-ink">Rekenvoorbeeld: osmosewater kopen om te drinken</h3>
              <p className="mt-2 text-sm text-dim leading-relaxed">Een gezin van vier dat elk 2 liter per dag drinkt:</p>
              <ul className="mt-3 space-y-1 text-sm text-dim list-disc pl-5">
                <li>4 × 2 liter × 365 dagen = <strong className="text-ink">2.920 liter per jaar</strong></li>
                <li>Bij € 0,18 per liter: ongeveer <strong className="text-ink">€ 525 per jaar</strong></li>
                <li>Dat zijn zo&apos;n <strong className="text-ink">146 jerrycans van 20 liter</strong> per jaar, ongeveer drie per week, om te halen, te sjouwen en op te slaan</li>
              </ul>
              <p className="mt-3 text-xs text-dim">Dit is een voorbeeld met de hoogste prijs die we tegenkwamen. Betaal je minder per liter, dan wordt het goedkoper, maar het sjouwen blijft.</p>
            </div>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Kun je gekocht osmosewater drinken?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Osmosewater zelf kun je prima drinken. Het is water waar met <Link href="/kennisbank/omgekeerde-osmose-filter" className="underline hover:text-ink">omgekeerde osmose</Link> bijna alles uit is gefilterd. Maar of osmosewater kopen om te drinken verstandig is, hangt af van twee dingen:
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Waar het vandaan komt.</strong> Veel tappunten zijn gebouwd voor glazenwassers. Daar telt dat het water geen strepen geeft, niet of de installatie geschikt is voor drinkwater. Vraag het na.</li>
              <li><strong className="text-ink">Waar je het in bewaart.</strong> Een jerrycan die eerder voor iets anders is gebruikt, of die niet schoon is, maakt het zuiverste water weer vies.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Osmosewater bevat bovendien bijna geen mineralen meer. Dat is geen probleem, maar het kan wat vlak smaken. Lees meer in <Link href="/kennisbank/wat-is-osmosewater" className="underline hover:text-ink">wat is osmosewater?</Link>
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Osmosewater of gedemineraliseerd water?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              In de schappen van drogist en bouwmarkt zie je flessen <strong className="text-ink">gedemineraliseerd water</strong>. Dat lijkt op osmosewater: bij allebei zijn de opgeloste mineralen grotendeels verwijderd. Het verschil zit in hoe het gemaakt wordt en waar het voor bedoeld is. Gedemineraliseerd water is vaak bedoeld voor apparaten, zoals een strijkijzer of stoomreiniger, en is niet als drinkwater bedoeld. Twijfel je, kijk dan op het etiket.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Zoek je water om te drinken, dan is gedemineraliseerd water uit de bouwmarkt dus niet de oplossing. Hoe het zit met gedestilleerd water, lees je in <Link href="/kennisbank/gedestilleerd-water-drinken" className="underline hover:text-ink">gedestilleerd water drinken</Link>. Zoek je water voor je strijkijzer, dan is osmosewater kopen niet nodig.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Osmosewater kopen en bewaren: zo doe je dat</h2>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li>Gebruik een <strong className="text-ink">schone, voedselveilige jerrycan</strong> die je alleen voor water gebruikt.</li>
              <li>Draai hem goed dicht en zet hem <strong className="text-ink">koel en donker</strong>. Warmte en licht maken het water sneller muf.</li>
              <li>Gebruik water om te drinken bij voorkeur <strong className="text-ink">binnen een paar dagen</strong>. Voor schoonmaken mag het langer staan.</li>
              <li>Spoel de jerrycan regelmatig om en laat hem goed drogen voordat je hem opnieuw vult.</li>
            </ul>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/countertop.png" alt="Osmosewater uit een eigen kraantje in de keuken in plaats van osmosewater kopen in jerrycans" fill loading="eager" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Het alternatief</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zelf maken in plaats van osmosewater kopen</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Wil je osmosewater vooral drinken en ermee koken? Dan is zelf maken onder het aanrecht meestal slimmer dan kopen. Een <Link href="/osmosesysteem" className="underline hover:text-ink">osmosesysteem</Link> geeft je het water direct uit je eigen kraan: geen jerrycans, geen ritjes naar een tappunt en geen water dat dagen staat.
              </p>
              <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
                <li><strong className="text-ink">Altijd vers:</strong> direct flow, zonder opslagtank, 1,58 liter per minuut.</li>
                <li><strong className="text-ink">Vaste kosten:</strong> vervangende filters, gemiddeld ongeveer € 135 per jaar.</li>
                <li><strong className="text-ink">Lekkerder van smaak:</strong> met het <Link href="/winkel/cto-filter-met-mineralen" className="underline hover:text-ink">CTO-filter met mineralen</Link> komen calcium en magnesium terug in het water.</li>
              </ul>
              <p className="mt-4 text-dim leading-relaxed">
                Hoe dat werkt, lees je in <Link href="/kennisbank/osmosewater-maken-thuis" className="underline hover:text-ink">osmosewater maken: kan dat gewoon thuis?</Link>
              </p>
            </div>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Osmosewater kopen of zelf maken: wat past bij jou?</h2>
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <div className="card rounded-2xl p-6">
                <h3 className="font-display text-lg font-bold text-ink">Osmosewater kopen is handig als…</h3>
                <ul className="mt-3 space-y-2 text-sm text-dim list-disc pl-5">
                  <li>je het af en toe nodig hebt, bijvoorbeeld voor je aquarium;</li>
                  <li>je het gebruikt voor ramen, je auto of zonnepanelen;</li>
                  <li>je maar een paar jerrycans per maand gebruikt.</li>
                </ul>
              </div>
              <div className="card rounded-2xl p-6">
                <h3 className="font-display text-lg font-bold text-ink">Zelf maken is slimmer als…</h3>
                <ul className="mt-3 space-y-2 text-sm text-dim list-disc pl-5">
                  <li>je het elke dag wilt drinken en ermee wilt koken;</li>
                  <li>je geen jerrycans wilt sjouwen en opslaan;</li>
                  <li>je ook PFAS, medicijnresten en microplastics uit je kraanwater wilt halen.</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-dim leading-relaxed">
              Twijfel je tussen gefilterd kraanwater en flessenwater? Lees dan ook <Link href="/kennisbank/kraanwater-vs-flessenwater" className="underline hover:text-ink">kraanwater vs. flessenwater</Link>.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over osmosewater kopen</h2>
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
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Nooit meer osmosewater kopen en sjouwen</h2>
            <p className="mt-4 text-white/70">Osmosewater direct uit je eigen kraan, met 10 jaar garantie. Vraag vrijblijvend een offerte aan.</p>
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

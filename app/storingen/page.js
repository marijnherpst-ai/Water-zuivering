import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import FaqSchema from '@/components/FaqSchema';
import StoringenChecker from '@/components/storingen/StoringenChecker';

export const metadata = {
  alternates: { canonical: '/storingen' },
  title: 'Storingen check — Water-zuivering',
  description: 'Check met je postcode of er een waterstoring, kookwateradvies of onderhoud is in jouw buurt. Live data van Dunea, PWN, Waternet en Groningen.',
};

const STAPPEN = [
  ['Vul je postcode of plaats in', 'Met of zonder huisnummer — wat je maar bij de hand hebt.'],
  ['We checken live bij je waterbedrijf', 'Rechtstreeks bij de bron, geen tussenpartij of verouderde lijst.'],
  ['Je ziet direct het resultaat', 'Storing, kookadvies of werkzaamheden — of de geruststelling dat alles gewoon werkt.'],
];

const TYPES = [
  {
    naam: 'Storing',
    kleur: '#B91C1C',
    icoon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
    ),
    uitleg: 'Een onverwacht probleem, zoals een leidingbreuk. Je hebt tijdelijk geen, weinig of troebel water. Meestal binnen enkele uren verholpen.',
  },
  {
    naam: 'Kookwateradvies',
    kleur: '#B91C1C',
    icoon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2C12 2 5 10.5 5 15a7 7 0 0014 0c0-4.5-7-13-7-13z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></svg>
    ),
    uitleg: 'Er is (mogelijk) verontreiniging in het drinkwater gevonden. Kraanwater moet eerst 3 minuten koken voor je het drinkt of gebruikt om te koken.',
  },
  {
    naam: 'Werkzaamheden',
    kleur: '#C6890F',
    icoon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.1-3.1a5 5 0 01-6.6 6.6L4.7 22.3a2.1 2.1 0 01-3-3L12.2 8.8a5 5 0 016.6-6.6l-3.1 3.1z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /></svg>
    ),
    uitleg: 'Gepland onderhoud aan het leidingnet. Je waterbedrijf kondigt dit vooraf aan, meestal met een briefje in de bus.',
  },
  {
    naam: 'Onderhoud',
    kleur: '#5B6472',
    icoon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" /><path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
    ),
    uitleg: 'Routinematig werk aan het net, meestal zonder dat je er iets van merkt of maar heel kort minder druk.',
  },
];

const TIPS = [
  ['Vul een reserve aan drinkwater', 'Heb je altijd een paar flessen water in huis voor het geval de kraan het even niet doet.'],
  ['Draai kranen dicht tijdens werkzaamheden', 'Zo voorkom je dat er lucht of vuil water in je leidingen komt zodra de druk terugkomt.'],
  ['Laat de kraan even doorlopen na een storing', 'Het eerste water kan troebel zijn door lucht of ijzerdeeltjes — dat is onschadelijk, maar laat het gewoon even weglopen.'],
  ['Neem een kookadvies altijd serieus', 'Ook voor tanden poetsen, ijsblokjes of het wassen van groente en fruit — kook het water eerst 3 minuten.'],
];

const DEKKING = [
  { regio: 'Den Haag, Delft, Rijswijk, Zoetermeer e.o.', bedrijf: 'Dunea', status: 'live' },
  { regio: 'Noord-Holland (buiten Amsterdam/Gooi)', bedrijf: 'PWN', status: 'live' },
  { regio: 'Amsterdam en Gooi en Vechtstreek', bedrijf: 'Waternet', status: 'live' },
  { regio: 'Provincie Groningen', bedrijf: 'Waterbedrijf Groningen', status: 'live' },
  { regio: 'Rest van Zuid-Holland en Zeeland', bedrijf: 'Evides / Oasen', status: 'linkout' },
  { regio: 'Gelderland, Overijssel, Fryslân, Flevoland, Utrecht', bedrijf: 'Vitens', status: 'linkout' },
  { regio: 'Drenthe', bedrijf: 'WMD', status: 'linkout' },
  { regio: 'Noord-Brabant', bedrijf: 'Brabant Water', status: 'linkout' },
  { regio: 'Limburg', bedrijf: 'WML', status: 'linkout' },
];

const FAQ = [
  ['Hoe actueel is deze informatie?', 'De gegevens worden rechtstreeks en live opgehaald bij het waterbedrijf zelf op het moment dat je zoekt — er staat niets vast in de website. Om de servers van de waterbedrijven niet onnodig te belasten, wordt een resultaat maximaal 10 minuten hergebruikt voor een volgende bezoeker voor hetzelfde gebied, daarna wordt het automatisch ververst.'],
  ['Waarom is mijn regio niet live gedekt?', 'We laten alleen data zien die we rechtstreeks en op een nette manier bij het waterbedrijf zelf kunnen ophalen. Niet elk waterbedrijf maakt dat publiek toegankelijk — voor die gebieden verwijzen we je automatisch door naar de eigen storingspagina van jouw waterbedrijf.'],
  ['Kan ik hier ook zelf een storing melden?', 'Nee, deze pagina is alleen om bestaande meldingen te bekijken. Wil je zelf iets melden (bijvoorbeeld een lekkage op straat), neem dan rechtstreeks contact op met je eigen waterbedrijf.'],
  ['Wat moet ik doen als ik een kookadvies zie?', 'Kook je kraanwater minimaal 3 minuten voor je het drinkt, gebruikt om te koken, tanden poetst of er groente/fruit mee wast. Dit advies blijft gelden totdat je waterbedrijf aangeeft dat het weer veilig is.'],
  ['Waarom geen dekking via waterstoring.nl?', 'Die site beschermt zichzelf bewust tegen geautomatiseerd ophalen. We halen daarom data alleen op bij bronnen die dat zonder zo’n blokkade toestaan — rechtstreeks bij het waterbedrijf zelf.'],
];

export default function StoringenPage() {
  return (
    <>
      <RevealObserver />
      <FaqSchema items={FAQ} />
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="glow drift2 w-[360px] h-[360px] bg-amber/10 top-10 -right-24" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Storingen check</span>
            <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Is er een waterstoring in jouw buurt?
            </h1>
            <p className="mt-5 text-dim text-lg">
              Vul je postcode en huisnummer in — of gewoon je plaats — en zie meteen of je waterbedrijf een storing, kookwateradvies of werkzaamheden meldt.
            </p>
          </div>
        </section>

        {/* HOE WERKT HET */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 pb-10">
            <div className="grid sm:grid-cols-3 gap-5">
              {STAPPEN.map(([titel, uitleg], i) => (
                <div key={titel} className="reveal rounded-2xl card p-5">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-ink text-white text-xs font-bold">{i + 1}</span>
                  <p className="mt-3 font-display font-bold text-ink text-sm">{titel}</p>
                  <p className="mt-1.5 text-xs text-dim leading-relaxed">{uitleg}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CHECKER */}
        <section className="relative">
          <div className="max-w-2xl mx-auto px-6 pb-6">
            <StoringenChecker />
          </div>
        </section>

        {/* UITLEG TYPES */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-5xl mx-auto px-6 py-14 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-center">Wat betekenen de meldingen?</h2>
            <p className="mt-3 text-dim text-center max-w-xl mx-auto">Waterbedrijven gebruiken verschillende termen — hier lees je in gewone taal wat ze betekenen.</p>
            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {TYPES.map((t) => (
                <div key={t.naam} className="reveal rounded-2xl card p-6 flex gap-4">
                  <span className="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl" style={{ background: `${t.kleur}1A`, color: t.kleur }}>
                    {t.icoon}
                  </span>
                  <div>
                    <p className="font-display font-bold text-ink">{t.naam}</p>
                    <p className="mt-1.5 text-sm text-dim leading-relaxed">{t.uitleg}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DEKKING */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-center">Welke gebieden dekken we live?</h2>
            <p className="mt-3 text-dim text-center max-w-xl mx-auto">
              We halen deze data rechtstreeks op bij de waterbedrijven zelf — geen tussenpartij. Voor gebieden zonder live koppeling verwijzen we je automatisch door naar de juiste pagina.
            </p>
            <div className="mt-10 reveal rounded-2xl card overflow-hidden">
              {DEKKING.map((d, i) => (
                <div
                  key={d.regio}
                  className={`flex items-center justify-between gap-4 px-5 sm:px-6 py-4 ${i !== DEKKING.length - 1 ? 'border-b border-edge' : ''}`}
                >
                  <div>
                    <p className="text-sm font-semibold text-ink">{d.regio}</p>
                    <p className="text-xs text-dim mt-0.5">{d.bedrijf}</p>
                  </div>
                  {d.status === 'live' ? (
                    <span className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-amber/15 text-amber-dark px-3 py-1.5 text-xs font-bold uppercase tracking-wide">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-dark" />
                      Live
                    </span>
                  ) : (
                    <span className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-bg border border-edge text-dim px-3 py-1.5 text-xs font-bold uppercase tracking-wide">
                      Doorverwijzing
                    </span>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-dim text-center">
              We breiden de live dekking uit zodra waterbedrijven hun storingsdata publiek en betrouwbaar toegankelijk maken.
            </p>
          </div>
        </section>

        {/* TIPS */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-center">Wat kun je zelf doen?</h2>
            <div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {TIPS.map(([titel, uitleg]) => (
                <div key={titel} className="reveal flex items-start gap-3">
                  <svg className="shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <div>
                    <p className="font-semibold text-ink text-sm">{titel}</p>
                    <p className="mt-1 text-sm text-dim leading-relaxed">{uitleg}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen</h2>
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

        {/* CTA TIE-IN */}
        <section className="relative overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -bottom-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-20 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zelf minder afhankelijk van je waterbedrijf?</h2>
            <p className="mt-4 text-dim max-w-xl mx-auto">
              Een osmose-waterzuiveraar filtert je kraanwater zelf nog een keer — schoon, fris water uit je eigen kraan, ook als de leidingdruk of -kwaliteit even niet optimaal is.
            </p>
            <Link
              href="/#product"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink text-white px-7 py-3.5 text-sm font-bold hover:bg-amber hover:text-ink transition-colors"
            >
              Bekijk onze waterzuiveraar
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-2xl mx-auto px-6 pb-16 md:pb-20">
            <div className="rounded-2xl bg-bg border border-edge p-5 flex items-start gap-3">
              <svg className="shrink-0 mt-0.5 text-dim" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 8v5M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" /></svg>
              <p className="text-xs text-dim leading-relaxed">
                Deze data komt rechtstreeks van de storingspagina&apos;s van de waterbedrijven zelf en kan een paar minuten vertraging hebben. Bij twijfel, of voor een storing melden, neem contact op met je eigen waterbedrijf.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

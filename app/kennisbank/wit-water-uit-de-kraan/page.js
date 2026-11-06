import Image from 'next/image';
import Link from 'next/link';
import TussenCta from '@/components/TussenCta';
import AuteurRegel from '@/components/AuteurRegel';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import ArticleSchema from '@/components/ArticleSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import KortAntwoord from '@/components/KortAntwoord';
import FaqSchema from '@/components/FaqSchema';

export const metadata = {
  alternates: { canonical: '/kennisbank/wit-water-uit-de-kraan' },
  title: 'Wit water uit de kraan? Oorzaak en de glastest',
  description:
    'Wit water uit de kraan of troebel kraanwater? Met de glastest zie je in een minuut of het lucht, kalk of iets anders is, en of je het kunt drinken.',
  openGraph: {
    title: 'Wit of troebel water uit de kraan: wat is het?',
    description: 'Lucht, kalk of iets anders? Met de glastest weet je het binnen een minuut.',
    url: 'https://www.water-zuivering.nl/kennisbank/wit-water-uit-de-kraan',
    images: ['/assets/img/twee-kranen.jpg'],
  },
};

const HERKENNEN = [
  ['Melkwit, klaart op van onder naar boven', 'Luchtbelletjes', 'Onschadelijk. Gewoon drinken.'],
  ['Melkwit, vooral bij heet water of op warme dagen', 'Lucht die vrijkomt door warmte', 'Onschadelijk. Laat het even staan.'],
  ['Wit of grijs na werkzaamheden in de straat', 'Lucht in de leidingen na het vullen', 'Kraan een paar minuten laten lopen tot het helder is.'],
  ['Witte vlokjes of korrels die naar de bodem zakken', 'Kalk, vaak uit een boiler, kokendwaterkraan of oude perlator', 'Niet schadelijk. Perlator en boiler ontkalken.'],
  ['Witte waas of kring in een glas of op de waterkoker', 'Kalkaanslag na opdrogen of koken', 'Niet schadelijk. Komt door hard water.'],
  ['Blijft troebel, ook na een paar minuten', 'Deeltjes of verontreiniging', 'Niet drinken. Bel je waterbedrijf.'],
];

const FAQ = [
  ['Waarom komt er wit water uit de kraan?', 'Wit water uit de kraan komt bijna altijd door kleine luchtbelletjes. Water in de leiding staat onder druk en bevat opgeloste lucht. Komt het uit de kraan, dan valt de druk weg en vormen zich belletjes die het licht weerkaatsen, waardoor het water melkwit lijkt.'],
  ['Kun je wit water uit de kraan drinken?', 'Ja, als het door luchtbelletjes komt. Dat herken je doordat het water in een glas binnen een minuut van onder naar boven helder wordt. Blijft het troebel, drink het dan niet en neem contact op met je waterbedrijf.'],
  ['Waarom is warm water uit de kraan wit?', 'Warm water kan minder lucht vasthouden dan koud water. Wordt het water in je boiler of kokendwaterkraan opgewarmd, dan komt er lucht vrij in de vorm van belletjes. Daardoor ziet heet water er vaker wit uit dan koud.'],
  ['Wat zijn witte vlokjes in mijn kraanwater?', 'Witte vlokjes of korreltjes die naar de bodem zakken, zijn meestal kalk. Die laat los uit een boiler, kokendwaterkraan of een perlator die vol kalk zit. Het is niet schadelijk, maar het is wel een teken dat je die onderdelen moet ontkalken.'],
  ['Hoe lang blijft het water wit na werkzaamheden?', 'Na werkzaamheden aan het leidingnet is het water meestal binnen een paar uur weer helder. Laat de koude kraan een paar minuten lopen. Is het daarna nog steeds wit of troebel, neem dan contact op met je waterbedrijf.'],
  ['Is troebel water uit de kraan gevaarlijk?', 'Troebel water dat niet binnen een paar minuten opklaart, kan zwevende deeltjes of vervuiling bevatten. Drink het niet en kijk of er een storing of kookadvies is. Bruinig troebel water komt meestal door ijzer en mangaan uit de leidingen.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Wit water uit de kraan: oorzaak, glastest en wat je doet"
        description="Waarom er wit of troebel water uit de kraan komt, hoe je het herkent met de glastest en wanneer je je waterbedrijf belt."
        image="https://www.water-zuivering.nl/assets/img/twee-kranen.jpg"
        url="https://www.water-zuivering.nl/kennisbank/wit-water-uit-de-kraan"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Wit water uit de kraan', url: 'https://www.water-zuivering.nl/kennisbank/wit-water-uit-de-kraan' },
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
              Wit water uit de kraan: oorzaak, glastest en wat je doet
            </h1>
            <p className="mt-5 text-dim text-lg">
              Je tapt een glas en het water ziet eruit als verdunde melk. <strong className="text-ink">Wit water uit de kraan</strong> ziet er verdacht uit, maar is bijna altijd onschuldig. Met één simpele test weet je binnen een minuut wat er aan de hand is.
            </p>
            <KortAntwoord bron={{ naam: 'Vitens, waterkwaliteit', url: 'https://www.vitens.nl/service/waterkwaliteit' }}>
              Wit water uit de kraan komt bijna altijd door kleine luchtbelletjes, bijvoorbeeld na werkzaamheden, op warme dagen of bij heet water. Het is onschadelijk. Zet het glas even neer: wordt het water binnen een minuut van onder naar boven helder, dan was het lucht en kun je het gewoon drinken.
            </KortAntwoord>
            <AuteurRegel />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Direct doen</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">De glastest: lucht, kalk of iets anders?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Je hebt alleen een doorzichtig glas nodig. Vul het met het witte water, zet het op een lichte ondergrond en kijk een minuut lang.
            </p>
            <ol className="mt-8 space-y-4">
              <li className="reveal card rounded-2xl p-5 flex gap-4">
                <span className="shrink-0 w-9 h-9 rounded-full bg-amber text-ink font-display font-extrabold flex items-center justify-center">1</span>
                <div>
                  <h3 className="font-display font-bold text-ink">Klaart het op van onder naar boven?</h3>
                  <p className="mt-1 text-sm text-dim leading-relaxed">Dan waren het <strong className="text-ink">luchtbelletjes</strong>. Ze stijgen op en verdwijnen aan het oppervlak. Het water is veilig om te drinken.</p>
                </div>
              </li>
              <li className="reveal card rounded-2xl p-5 flex gap-4">
                <span className="shrink-0 w-9 h-9 rounded-full bg-amber text-ink font-display font-extrabold flex items-center justify-center">2</span>
                <div>
                  <h3 className="font-display font-bold text-ink">Zakken er witte deeltjes naar de bodem?</h3>
                  <p className="mt-1 text-sm text-dim leading-relaxed">Dan is het waarschijnlijk <strong className="text-ink">kalk</strong>, vaak uit je boiler, kokendwaterkraan of perlator. Niet schadelijk, wel tijd om te ontkalken.</p>
                </div>
              </li>
              <li className="reveal card rounded-2xl p-5 flex gap-4">
                <span className="shrink-0 w-9 h-9 rounded-full bg-amber text-ink font-display font-extrabold flex items-center justify-center">3</span>
                <div>
                  <h3 className="font-display font-bold text-ink">Blijft het water troebel?</h3>
                  <p className="mt-1 text-sm text-dim leading-relaxed">Dan gaat het niet om lucht of kalk. Drink het niet, kijk of er een storing in je buurt is en bel bij twijfel je waterbedrijf. <Link href="/storingen" className="underline hover:text-ink">Doe de storingen-check</Link>.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waarom komt er wit water uit de kraan?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Water in de leiding staat onder druk. Onder die druk lost er meer lucht in op dan normaal. Zodra het water uit de kraan komt, valt de druk weg en komt die lucht vrij als heel kleine belletjes. Die weerkaatsen het licht, waardoor het water melkwit lijkt. Hetzelfde zie je als je een fles bruiswater opendraait.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Je ziet <strong className="text-ink">wit water uit de kraan</strong> vooral in deze situaties:
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Na werkzaamheden aan het leidingnet.</strong> Als een leiding leeg is geweest en weer wordt gevuld, komt er lucht in. Ook Evides noemt werkzaamheden als oorzaak van wit water.</li>
              <li><strong className="text-ink">Op warme dagen.</strong> Vitens geeft aan dat een net gevuld glas wit kan lijken door zuurstof in het water, vooral als het warm is.</li>
              <li><strong className="text-ink">Bij heet water.</strong> Warm water houdt minder lucht vast dan koud water. In je boiler of kokendwaterkraan komt die lucht vrij.</li>
              <li><strong className="text-ink">Bij een nieuwe of schoongemaakte perlator.</strong> Het zeefje in je kraan mengt lucht door de straal, waardoor die witter lijkt.</li>
            </ul>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Zelf de oorzaak vinden</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wit, troebel of vlokjes: wat zie je?</h2>
            <p className="mt-4 text-dim leading-relaxed max-w-3xl">
              Wit water, troebel water en witte vlokjes lijken op elkaar, maar hebben elk een andere oorzaak. Zo herken je ze:
            </p>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-amber/10 text-ink">
                  <tr>
                    <th scope="col" className="p-4 font-display font-bold">Wat zie je?</th>
                    <th scope="col" className="p-4 font-display font-bold">Waarschijnlijke oorzaak</th>
                    <th scope="col" className="p-4 font-display font-bold">Wat doe je?</th>
                  </tr>
                </thead>
                <tbody>
                  {HERKENNEN.map(([wat, oorzaak, actie]) => (
                    <tr key={wat} className="border-t border-edge align-top">
                      <th scope="row" className="p-4 font-semibold text-ink">{wat}</th>
                      <td className="p-4 text-dim">{oorzaak}</td>
                      <td className="p-4 text-dim">{actie}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-dim leading-relaxed max-w-3xl">
              Is het water niet wit maar geel of bruin, dan gaat het meestal om ijzer en mangaan uit de leidingen. Wat je dan doet, lees je in ons stappenplan bij <Link href="/kennisbank/bruin-water-uit-de-kraan" className="underline hover:text-ink">bruin water uit de kraan</Link>.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/twee-kranen.jpg" alt="Twee kranen in de keuken: wit water uit de kraan komt vaak door lucht of kalk" fill loading="eager" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Kalk</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Witte vlokjes, waas en aanslag: dat is kalk</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Niet al het witte in je water is lucht. Witte vlokjes of korreltjes die naar de bodem zakken, zijn bijna altijd kalk. In hard water zitten veel calcium en magnesium. Bij verwarming slaan die neer, bijvoorbeeld in je boiler, waterkoker of kokendwaterkraan. Na een tijd laten er stukjes los die met het water meekomen.
              </p>
              <p className="mt-4 text-dim leading-relaxed">
                Ook de witte waas op glazen uit de vaatwasser of de kring in je waterkoker is kalk. Het is niet schadelijk om te drinken, maar het kost energie en verkort de levensduur van apparaten. Meer daarover lees je in <Link href="/kennisbank/kalkaanslag-in-huis" className="underline hover:text-ink">kalkaanslag in huis</Link>. Benieuwd hoe hard het water in jouw regio is, of wat er nog meer in zit? Bekijk dan <Link href="/kennisbank/drinkwater-laten-testen" className="underline hover:text-ink">hoe je je drinkwater laat testen</Link>.
              </p>
            </div>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wanneer is troebel water uit de kraan wél een probleem?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Blijft het water na de glastest troebel, of ruikt of smaakt het vreemd, dan is het geen lucht of kalk. Doe dan dit:
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Niet drinken</strong> en ook niet gebruiken voor flesvoeding of eten.</li>
              <li><strong className="text-ink">Vraag je buren</strong> of zij het ook hebben. Zo weet je of het aan het leidingnet ligt of aan je eigen leidingen.</li>
              <li><strong className="text-ink">Check of er een storing of kookadvies is</strong> via je waterbedrijf of onze <Link href="/storingen" className="underline hover:text-ink">storingen-check</Link>.</li>
              <li><strong className="text-ink">Bel het storingsnummer</strong> van je waterbedrijf als het niet binnen een paar uur weer helder is.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Nederlands kraanwater wordt streng gecontroleerd. Echte vervuiling is zeldzaam, en komt die toch voor, dan geeft het waterbedrijf een kookadvies. Wat je dan doet, lees je in <Link href="/kennisbank/water-zuiveren-noodsituatie" className="underline hover:text-ink">water zuiveren in een noodsituatie</Link>.
            </p>
            <TussenCta titel="Helder én zuiver water uit je eigen kraan?">
              Een osmosesysteem onder het aanrecht filtert kalk, roest en slib uit je drinkwater, en ook PFAS en medicijnresten. Bij een kookadvies of storing volg je altijd eerst het advies van je waterbedrijf.
            </TussenCta>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Helpt een waterfilter tegen wit water?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Tegen luchtbelletjes hoeft niets te helpen: die verdwijnen vanzelf. Tegen kalk wel. Een <Link href="/osmosesysteem" className="underline hover:text-ink">osmosesysteem</Link> haalt het grootste deel van de kalk uit je drinkwater, zodat je kokendwaterkraan en waterkoker minder snel aanslaan. Het voorfilter vangt daarnaast zand, roest en slib op. Wil je weten welk type filter welk probleem oplost, bekijk dan de <Link href="/waterfilter" className="underline hover:text-ink">soorten waterfilters</Link> naast elkaar.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over wit water uit de kraan</h2>
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
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Altijd helder en zuiver water uit je eigen kraan</h2>
            <p className="mt-4 text-white/70">Een osmosesysteem onder het aanrecht filtert kalk, roest, PFAS en medicijnresten uit je drinkwater. Vraag vrijblijvend een offerte aan.</p>
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

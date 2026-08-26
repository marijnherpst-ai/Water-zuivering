import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';

export const metadata = {
  alternates: { canonical: '/kennisbank' },
  title: 'Kennisbank — Water-zuivering',
  description:
    'Alles wat je wilt weten over waterzuivering, osmosewater en drinkwater — in gewone taal uitgelegd.',
};

const ARTICLES = [
  {
    href: '/kennisbank/wat-is-osmosewater',
    image: '/assets/img/glas-water.webp',
    category: 'Waterkwaliteit',
    title: 'Wat is osmosewater? Uitleg, gebruik en kosten',
    excerpt: 'Wat osmosewater is, of je het kan drinken, hoe je het maakt en wat het je eigenlijk kost.',
  },
  {
    href: '/kennisbank/waterontharder-vs-waterzuiveraar',
    image: '/assets/img/kennisbank/waterontharder-vs-waterzuiveraar.png',
    category: 'Vergelijking',
    title: 'Waterontharder of waterzuiveraar: het verschil',
    excerpt: 'Deze twee worden vaak door elkaar gehaald, maar ze doen iets heel anders. Wat past bij jou?',
  },
  {
    href: '/kennisbank/is-kraanwater-veilig',
    image: '/assets/img/kennisbank/is-kraanwater-veilig.png',
    category: 'Waterkwaliteit',
    title: 'Is Nederlands kraanwater veilig om te drinken?',
    excerpt: 'Nederland heeft strenge normen. Wat betekent dat precies, en wat valt er nog te verbeteren?',
  },
  {
    href: '/kennisbank/wat-kost-een-waterzuiveringssysteem',
    image: '/assets/img/kennisbank/wat-kost-een-waterzuiveringssysteem.png',
    category: 'Kosten',
    title: 'Wat kost een waterzuiveringssysteem?',
    excerpt: 'Aanschaf, installatie en onderhoud op een rij — en wat je ermee bespaart op flessenwater.',
  },
  {
    href: '/kennisbank/waterfilter-vervangen-hoe-vaak',
    image: '/assets/img/kennisbank/waterfilter-vervangen-hoe-vaak.png',
    category: 'Onderhoud',
    title: 'Hoe vaak moet je een waterfilter vervangen?',
    excerpt: 'Een simpele vuistregel, en wat er gebeurt als je het te lang uitstelt.',
  },
  {
    href: '/kennisbank/pfas-in-kraanwater',
    image: '/assets/img/kennisbank/pfas-in-kraanwater.png',
    category: 'Waterkwaliteit',
    title: 'PFAS in kraanwater: wat is het en hoe filter je het?',
    excerpt: 'Wat PFAS is, waar het vandaan komt en hoe je het effectief uit je drinkwater filtert.',
  },
  {
    href: '/kennisbank/kraanwater-vs-flessenwater',
    image: '/assets/img/kennisbank/kraanwater-vs-flessenwater.png',
    category: 'Vergelijking',
    title: 'Kraanwater vs. flessenwater: wat is voordeliger?',
    excerpt: 'Vergeleken op kosten, gemak en milieu-impact — met een eerlijke conclusie.',
  },
  {
    href: '/kennisbank/waterfilter-onder-de-gootsteen',
    image: '/assets/img/kennisbank/waterfilter-onder-de-gootsteen.png',
    category: 'Koopgids',
    title: 'Waterfilter onder de gootsteen: alles wat je moet weten',
    excerpt: 'Hoe het werkt, wat het kost en waar je op moet letten voor je een keuze maakt.',
  },
  {
    href: '/kennisbank/kalkaanslag-in-huis',
    image: '/assets/img/kennisbank/kalkaanslag-in-huis.png',
    category: 'Waterkwaliteit',
    title: 'Kalkaanslag in huis: oorzaak en oplossing',
    excerpt: 'Wat veroorzaakt kalkaanslag, welke schade richt het aan, en hoe voorkom je het?',
  },
  {
    href: '/kennisbank/3-weg-kraan-uitleg',
    image: '/assets/img/kennisbank/3-weg-kraan-uitleg.png',
    category: 'Product',
    title: 'Wat is een 3-weg kraan en heb je die nodig?',
    excerpt: 'Eén elegante kraan in plaats van twee. Wat doet hij, en wanneer is hij de moeite waard?',
  },
  {
    href: '/kennisbank/waterzuiveraar-installeren',
    image: '/assets/img/kennisbank/waterzuiveraar-installeren.png',
    category: 'Installatie',
    title: 'Waterzuiveraar laten installeren: hoe gaat dat?',
    excerpt: 'Van afspraak tot zuiver water, stap voor stap — meestal binnen één dag geregeld.',
  },
];

export default function KennisbankPage() {
  return (
    <>
      <RevealObserver />
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Kennisbank</span>
            <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Alles over waterzuivering, in gewone taal
            </h1>
            <p className="mt-5 text-dim text-lg">
              Uitleg over drinkwaterkwaliteit, filtertechniek en osmosewater — zonder ingewikkeld jargon.
            </p>
          </div>
        </section>

        {/* ARTIKELEN */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {ARTICLES.map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="group reveal cursor-pointer relative rounded-[2rem] card overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={article.image} alt={article.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="self-start inline-block rounded-full bg-amber/12 text-amber-dark text-[11px] font-bold uppercase tracking-wide px-3 py-1">{article.category}</span>
                    <h2 className="mt-4 font-display text-lg font-extrabold tracking-tight">{article.title}</h2>
                    <p className="mt-2 text-sm text-dim">{article.excerpt}</p>
                    <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-bold text-ink group-hover:text-amber-dark transition-colors">
                      Lees meer
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Liever meteen zuiver water uit je eigen kraan?</h2>
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

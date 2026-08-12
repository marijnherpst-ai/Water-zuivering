import Header from '@/components/Header';

export const metadata = {
  title: 'Cookiebeleid — Water-zuivering',
  description: 'Cookiebeleid van Water-zuivering: welke cookies we gebruiken en hoe je je voorkeur instelt.',
};

export default function CookiebeleidPage() {
  return (
    <>
      <Header />

      <main>
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-20 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Juridisch</span>
            <h1 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Cookiebeleid</h1>
            <p className="mt-3 text-dim">Water-zuivering</p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-3xl mx-auto px-6 py-14 md:py-20">
            <div className="space-y-10 text-dim leading-relaxed [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-extrabold [&_h2]:text-ink [&_h2]:tracking-tight [&_ul]:mt-4 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-5 [&_p]:mt-4">

              <div>
                <p>
                  Op onze website maken wij gebruik van cookies. Sommige cookies zijn strikt noodzakelijk om de website goed te laten functioneren en kunnen niet worden uitgeschakeld. Voor overige cookies (analyse en advertenties) vragen wij vooraf uw toestemming.
                </p>
              </div>

              <div>
                <h2>Wat zijn cookies?</h2>
                <p>Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen wanneer u onze website bezoekt. Ze zorgen ervoor dat de website goed werkt en uw instellingen tijdens uw bezoek worden onthouden.</p>
              </div>

              <div>
                <h2>Welke cookies gebruiken wij?</h2>
                <p>Wij maken onderscheid tussen twee soorten cookies:</p>
                <ul>
                  <li><strong className="text-ink">Noodzakelijke cookies</strong> — essentieel voor de werking en beveiliging van de website. Deze staan altijd aan en kunnen niet worden uitgeschakeld.</li>
                  <li><strong className="text-ink">Analyse- en advertentiecookies</strong> — van Google Analytics, Google Ads, Meta (Facebook/Instagram) Pixel en Microsoft Clarity. Deze worden uitsluitend geplaatst nadat u hiervoor toestemming heeft gegeven via de cookiemelding op onze website.</li>
                </ul>
              </div>

              <div>
                <h2>Cookies beheren</h2>
                <p>
                  Bij uw eerste bezoek aan onze website vragen wij via een cookiemelding om toestemming voor analyse- en advertentiecookies. U kunt kiezen voor "Alles accepteren" of "Alles weigeren". Kiest u voor weigeren, dan worden er geen analyse- of advertentiecookies geplaatst.
                </p>
                <p>U kunt cookies ook altijd via uw browser verwijderen of blokkeren. Houd er rekening mee dat de website hierdoor mogelijk niet optimaal functioneert.</p>
              </div>

              <div>
                <h2>Contact</h2>
                <p>Heeft u vragen over ons cookiebeleid? Neem dan contact met ons op via:</p>
                <p>
                  Water-zuivering<br />
                  E-mail: <a href="mailto:info@water-zuivering.nl" className="underline hover:text-ink">info@water-zuivering.nl</a>
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>

      <footer className="bg-surface border-t border-edge">
        <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-dim text-center">&copy; 2026 Jd services B.V. (Water-zuivering). Alle rechten voorbehouden.</div>
      </footer>
    </>
  );
}

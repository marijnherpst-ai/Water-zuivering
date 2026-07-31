import Script from 'next/script';
import { Inter, Outfit } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const META_PIXEL_ID = '901866625752558';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata = {
  title: 'Water-zuivering — Premium waterzuiveraar voor onder uw keukenkraan',
  description:
    'Zuiver drinkwater rechtstreeks uit uw eigen kraan. Water-zuivering verwijdert chloor, PFAS, medicijnresten, microplastics, lood en meer. Vraag een gratis offerte aan voor uw waterfilter onder het aanrecht.',
  keywords:
    'waterzuiveraar, waterfilter, drinkwater filter, waterfilter keuken, gefilterd drinkwater, waterfilter onder aanrecht, drinkwater zuiveren, waterzuiveringssysteem, waterfilter kraan, gezond drinkwater',
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl" className={`${inter.variable} ${outfit.variable}`}>
      <body className="bg-bg text-ink font-sans antialiased">
        {children}
        <Analytics />
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}

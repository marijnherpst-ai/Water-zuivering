'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

const META_PIXEL_ID = '901866625752558';
const CLARITY_PROJECT_ID = 'xxlly23zof';
const GA_MEASUREMENT_ID = 'G-K7V64C0DH8';
const GOOGLE_ADS_ID = 'AW-18325767412';

const STORAGE_KEY = 'cookie-consent';

export default function CookieConsent() {
  const [consent, setConsent] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setConsent(localStorage.getItem(STORAGE_KEY));
    setReady(true);
  }, []);

  function choose(value) {
    localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
  }

  return (
    <>
      {consent === 'accepted' && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
              gtag('config', '${GOOGLE_ADS_ID}');
            `}
          </Script>
          <Script id="ms-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
            `}
          </Script>
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
        </>
      )}

      {ready && consent === null && (
        <div className="fixed bottom-0 inset-x-0 z-[60] border-t border-edge bg-surface/95 backdrop-blur shadow-2xl">
          <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-sm text-dim flex-1">
              Wij gebruiken cookies voor analyse en advertenties, zodat we onze site kunnen verbeteren en relevante advertenties kunnen tonen.
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => choose('rejected')}
                className="cursor-pointer inline-flex items-center justify-center rounded-full border-2 border-ink px-5 py-2.5 text-sm font-bold text-ink hover:bg-bg transition-colors"
              >
                Alles weigeren
              </button>
              <button
                type="button"
                onClick={() => choose('accepted')}
                className="cursor-pointer inline-flex items-center justify-center rounded-full bg-amber px-5 py-2.5 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors"
              >
                Alles accepteren
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

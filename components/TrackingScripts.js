const META_PIXEL_ID = '901866625752558';
const CLARITY_PROJECT_ID = 'xxlly23zof';
const GA_MEASUREMENT_ID = 'G-K7V64C0DH8';
const GOOGLE_ADS_ID = 'AW-18325767412';

// Google tag (Analytics + Ads) runs in Consent Mode v2: consent defaults are set
// to "denied" in app/layout.js and Cookiebot updates them per visitor choice
// (statistics -> analytics_storage, marketing -> ad_storage/ad_user_data/
// ad_personalization). "ignore" keeps Cookiebot auto-blocking away from these two
// so Google can send cookieless pings until consent is given.
// The other scripts use type="text/plain" with a data-cookieconsent category and
// are only activated by Cookiebot after consent to that category.
export default function TrackingScripts() {
  return (
    <>
      <script
        async
        data-cookieconsent="ignore"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <script
        data-cookieconsent="ignore"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
            gtag('config', '${GOOGLE_ADS_ID}');
          `,
        }}
      />
      <script
        type="text/plain"
        data-cookieconsent="statistics"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
          `,
        }}
      />
      <script
        type="text/plain"
        data-cookieconsent="marketing"
        dangerouslySetInnerHTML={{
          __html: `
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
          `,
        }}
      />
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
  );
}

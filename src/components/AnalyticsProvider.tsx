"use client";
import { useEffect, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    dataLayer: any[];
    fbq: any;
  }
}

export default function AnalyticsProvider() {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    const savedConsent = localStorage.getItem("dreams_analytics_consent");
    setConsent(savedConsent);
  }, []);

  const acceptConsent = () => {
    localStorage.setItem("dreams_analytics_consent", "granted");
    setConsent("granted");
    window.location.reload();
  };

  const declineConsent = () => {
    localStorage.setItem("dreams_analytics_consent", "denied");
    setConsent("denied");
  };

  return (
    <>
      {consent === "granted" && (
        <>
          {/* Google Tag Manager */}
          {process.env.NEXT_PUBLIC_GTM_ID && (
            <Script
              id="gtm-script"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
                `,
              }}
            />
          )}

          {/* GA4 */}
          {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
            <>
              <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
              <Script id="ga-script" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
                `}
              </Script>
            </>
          )}

          {/* Meta Pixel */}
          {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
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
                fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
                fbq('track', 'PageView');
              `}
            </Script>
          )}
        </>
      )}

      {/* Cookie Consent Banner */}
      {!consent && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#1F3A5F]/95 backdrop-blur-md text-[#F8F5ED] py-3.5 px-6 z-[200] border-t border-[#A7B8CC]/25 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs">
            <span className="font-bold uppercase tracking-wider text-[#A7B8CC] mr-2">Privacy & Cookies:</span>
            <span className="text-[#DCD3C4]">We use cookies to optimize your luxury property search in Bangalore.</span>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button onClick={declineConsent} className="text-[11px] uppercase tracking-wider font-semibold px-3 py-1.5 text-[#F8F5ED]/80 hover:text-white transition-colors">
              Decline
            </button>
            <button onClick={acceptConsent} className="bg-[#4F7399] hover:bg-[#A7B8CC] hover:text-[#1F3A5F] text-[#F8F5ED] text-[11px] uppercase tracking-wider font-bold px-4 py-1.5 rounded-full transition-colors">
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}

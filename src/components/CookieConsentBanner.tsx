"use client";

import React, { useState, useEffect } from "react";
import Script from "next/script";
import { brandConfig } from "@/config/brand";

export default function CookieConsentBanner() {
  const [consent, setConsent] = useState<'pending' | 'accepted' | 'declined'>('pending');

  useEffect(() => {
    try {
      const stored = localStorage.getItem("cookie_consent");
      if (stored === "accepted" || stored === "declined") {
        setConsent(stored);
      }
    } catch {
      // LocalStorage blocked
    }
  }, []);

  const handleAccept = () => {
    setConsent('accepted');
    try {
      localStorage.setItem("cookie_consent", "accepted");
    } catch {
      // Ignore
    }
  };

  const handleDecline = () => {
    setConsent('declined');
    try {
      localStorage.setItem("cookie_consent", "declined");
    } catch {
      // Ignore
    }
  };

  const ga4Id = brandConfig.integrations.ga4MeasurementId;
  const pixelId = brandConfig.integrations.metaPixelId;
  const isProdGa4 = ga4Id && ga4Id !== "G-XXXXXXXXXX";
  const isProdPixel = pixelId && pixelId !== "XXXXXXXXXXXXXXX";

  return (
    <>
      {consent === 'accepted' && isProdGa4 && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${ga4Id}');
            `}
          </Script>
        </>
      )}

      {consent === 'accepted' && isProdPixel && (
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
            fbq('init', '${pixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}

      {consent === 'pending' && (
        <div className="fixed bottom-16 md:bottom-6 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-40 bg-[#FFFFFF] border-2 border-[#0E0E0E] p-4 text-[#0E0E0E] shadow-none">
          <div className="flex items-start justify-between gap-4 mb-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#59554F]">
              DATA & PRIVACY PREFERENCE
            </span>
          </div>
          <p className="font-sans text-xs text-[#0E0E0E] leading-relaxed mb-3">
            We use minimal analytics to measure portfolio engagement and inquiry routing. No data is sold or syndicated.
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleAccept}
              className="flex-1 py-2 px-3 bg-[#0E0E0E] text-[#FFFFFF] font-mono text-[11px] uppercase tracking-wider font-bold hover:bg-[#8C6A2F] transition-colors"
            >
              ACCEPT ANALYTICS
            </button>
            <button
              type="button"
              onClick={handleDecline}
              className="py-2 px-3 border border-[#0E0E0E] bg-[#F4F1EA] text-[#0E0E0E] font-mono text-[11px] uppercase tracking-wider hover:bg-[#E8E3D8] transition-colors"
            >
              DECLINE
            </button>
          </div>
        </div>
      )}
    </>
  );
}

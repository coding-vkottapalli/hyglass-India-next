"use client";

import Script from "next/script";

// Free live chat via Tawk.to: visitor clicks the bubble -> your team is notified
// (browser + free mobile app) -> you chat live.
// Activate by setting NEXT_PUBLIC_TAWK_ID in .env.local to your property/widget id,
// formatted "propertyId/widgetId" (from Tawk dashboard -> Administration -> Channels -> Chat Widget).
const TAWK_ID = process.env.NEXT_PUBLIC_TAWK_ID ?? "";

export function ChatWidget() {
  if (!TAWK_ID) return null;

  return (
    <Script id="tawk-to" strategy="afterInteractive">
      {`
        var Tawk_API = Tawk_API || {};
        (function () {
          var s1 = document.createElement("script"),
            s0 = document.getElementsByTagName("script")[0];
          s1.async = true;
          s1.src = "https://embed.tawk.to/${TAWK_ID}";
          s1.charset = "UTF-8";
          s1.setAttribute("crossorigin", "*");
          s0.parentNode.insertBefore(s1, s0);
        })();
      `}
    </Script>
  );
}

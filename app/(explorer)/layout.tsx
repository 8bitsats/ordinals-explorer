import "./globals.css";
import { Metadata } from "next";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export const metadata = {
  metadataBase: new URL("https://ordinals.hiro.so"),
  title: {
    template: "%s | Hiro Ordinals Explorer",
    default: "Hiro Ordinals Explorer",
  },
  description:
    "Discover the world of Ordinal Inscriptions with the Hiro Ordinals Explorer. Dive deep into this unique universe of digital assets inscribed on satoshis, the smallest unit of Bitcoin. Search, filter, and sort Ordinals by address, ID, sat number, or block. The explorer uses the open-source Hiro Ordinals API powered by Chainhooks.",
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/shortcut-icon.png",
  },
  openGraph: {
    title: "Ordinals — Hiro",
    description: "An Ordinals Explorer built using Hiro APIs and tools",
    url: "https://ordinals.hiro.so",
    siteName: "Ordinals — Hiro",
    images: [
      {
        url: "/og-image.png",
        width: 1201,
        height: 601,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#CFC9C2" />
        {process.env.ENABLE_CSP && (
          <meta
            httpEquiv="Content-Security-Policy"
            content="frame-src https://*.hiro.so https://*.vercel.app http://localhost:*;"
          />
        )}
      </head>

      <body className="flex min-h-screen flex-col justify-between">
        <Toaster position="top-center" reverseOrder={false} />
        <>
          {/* Content */}
          <Header />
          {children}
          <Footer />
        </>
        <>
          {/* Analytics */}
          <Script id="google-analytics" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PFK4WN9');`}
          </Script>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-PFK4WN9"
              style={{ display: "none", visibility: "hidden" }}
              height="0"
              width="0"
            />
          </noscript>
        </>
      </body>
    </html>
  );
}
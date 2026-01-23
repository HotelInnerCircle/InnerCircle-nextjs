import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./LayoutWrapper";
import { SkeletonTheme } from "react-loading-skeleton";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://hotelinnercircle.in"),
  title: "Hotel Inner Circle | Luxury Stay in Somajiguda, Hyderabad",
  description:
    "Experience comfort and luxury at Hotel Inner Circle, Somajiguda Hyderabad. Book premium rooms, enjoy great hospitality, and explore nearby attractions.",
  alternates: {
    canonical: "https://hotelinnercircle.in/",
  },
  openGraph: {
    title: "Hotel Inner Circle | Luxury Stay in Hyderabad",
    description:
      "Luxury rooms, premium hospitality, and a perfect stay experience at Somajiguda, Hyderabad.",
    url: "https://hotelinnercircle.in/",
    siteName: "Hotel Inner Circle",
    images: [
      {
        url: "/Deluxe-King.avif",
        width: 1200,
        height: 630,
        alt: "Hotel Inner Circle Hyderabad",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Inner Circle | Luxury Stay in Hyderabad",
    description:
      "Book your stay at Hotel Inner Circle, Somajiguda Hyderabad. Premium rooms and hospitality.",
    images: ["/Deluxe-King.avif"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ GTM Head */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NX3JSG2Q');
          `}
        </Script>

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda+SC:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Google Search Console */}
        <meta
          name="google-site-verification"
          content="39VlAlZyNIlP1HTW0Gp-crGOH8nM8uj4VcfA8GiH4ak"
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ✅ GTM NoScript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NX3JSG2Q"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* ⚠️ IMPORTANT:
            Remove GA gtag.js if you are using GTM (to avoid duplicate tracking)
        */}

        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <LayoutWrapper>{children}</LayoutWrapper>
        </SkeletonTheme>
      </body>
    </html>
  );
}

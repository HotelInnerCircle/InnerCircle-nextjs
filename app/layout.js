import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import LayoutWrapper from './LayoutWrapper';
import { SkeletonTheme } from 'react-loading-skeleton';
import Script from 'next/script';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Hotel Inner Circle | Luxury Stay in Somajiguda, Hyderabad',
  description:
    'Experience comfort and luxury at Hotel Inner Circle, Somajiguda Hyderabad. Book premium rooms, enjoy great hospitality, and explore nearby attractions.',
  alternates: {
    canonical: 'https://hotelinnercircle.in/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        {/* ✅ Google Analytics (GA4) */}
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-56FL1KH700'
          strategy='afterInteractive'
        />

        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-56FL1KH700');
          `}
        </Script>

        {/* ✅ Google Search Console Verification */}
        <meta
          name='google-site-verification'
          content='39VlAlZyNIlP1HTW0Gp-crGOH8nM8uj4VcfA8GiH4ak'
        />

        {/* ✅ Google Fonts */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Bodoni+Moda+SC:wght@400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SkeletonTheme baseColor='#202020' highlightColor='#444'>
          <LayoutWrapper>{children}</LayoutWrapper>
        </SkeletonTheme>
      </body>
    </html>
  );
}

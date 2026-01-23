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
  openGraph: {
    title: 'Hotel Inner Circle | Luxury Stay in Hyderabad',
    description:
      'Luxury rooms, premium hospitality, and a perfect stay experience at Somajiguda, Hyderabad.',
    url: 'https://hotelinnercircle.in/',
    siteName: 'Hotel Inner Circle',
    images: [
      {
        url: '/Deluxe-King.avif',
        width: 1200,
        height: 630,
        alt: 'Hotel Inner Circle Hyderabad',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotel Inner Circle | Luxury Stay in Hyderabad',
    description:
      'Book your stay at Hotel Inner Circle, Somajiguda Hyderabad. Premium rooms and hospitality.',
    images: ['/Deluxe-King.avif'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        {/* Google Fonts */}
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
        {/* ✅ Google tag (gtag.js) */}
        <Script
          strategy='afterInteractive'
          src='https://www.googletagmanager.com/gtag/js?id=G-56FL1KH700'
        />

        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-56FL1KH700');
          `}
        </Script>

        <SkeletonTheme baseColor='#202020' highlightColor='#444'>
          <LayoutWrapper>{children}</LayoutWrapper>
        </SkeletonTheme>
      </body>
    </html>
  );
}

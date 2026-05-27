
import Hero from './components/Hero';
import RoomsSection from './components/RoomsSection';
import AboutSection from './components/AboutSection';
import TestimonialSection from './components/TestimonialSection';
import BlogPreview from './components/BlogPreview';

import ImageGallery from './(pages)/gallery.php/Gallery';

export const metadata = {
  title: "Hotel Inner Circle | Luxury Stay in Somajiguda, Hyderabad",
  description:
    "Hotel Inner Circle, Somajiguda Hyderabad – offering luxury rooms, premium suites, elegant banquet halls, and warm hospitality. Book your stay at the best price with modern amenities.",
  keywords: [
    "Hotel Inner Circle",
    "hotel in Somajiguda Hyderabad",
    "luxury hotel Hyderabad",
    "premium rooms Hyderabad",
    "hotel booking Hyderabad",
    "banquet hall Hyderabad",
    "hotel near Punjagutta",
    "affordable hotel Hyderabad",
  ],
  alternates: {
    canonical: "https://hotelinnercircle.in/",
  },
  openGraph: {
    title: "Hotel Inner Circle | Luxury Stay in Somajiguda, Hyderabad",
    description:
      "Experience premium rooms, elegant banquet facilities, and luxury comfort at Hotel Inner Circle, Somajiguda Hyderabad. Book now for the best stay.",
    url: "https://hotelinnercircle.in",
    siteName: "Hotel Inner Circle",
    images: [
      {
        url: "https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/5.Inner%20Circle%20Reception%20Lobby.jpg",
        width: 1200,
        height: 630,
        alt: "Hotel Inner Circle – Somajiguda, Hyderabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Inner Circle | Luxury Stay in Somajiguda, Hyderabad",
    description:
      "Luxury rooms, elegant banquet halls, and modern amenities at Hotel Inner Circle, Somajiguda Hyderabad. Book your stay now.",
    images: [
      "https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/5.Inner%20Circle%20Reception%20Lobby.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};


export default function Home() {
  return (
    <>
      <Hero />
      <RoomsSection />
      <AboutSection />
      <ImageGallery />
      {/* <InstagramPost /> */}
      <BlogPreview />
      <TestimonialSection />
    </>
  );
}

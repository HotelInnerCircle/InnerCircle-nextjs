
import Hero from './components/Hero';
import RoomsSection from './components/RoomsSection';
import AboutSection from './components/AboutSection';
import TestimonialSection from './components/TestimonialSection';

import ImageGallery from './(pages)/gallery.php/Gallery';

export const metadata = {
  title: "Hotel Inner Circle | Luxury Stay & Premium Rooms",
  description:
    "Hotel Inner Circle offers luxury rooms, premium suites, and a comfortable stay experience. Book your stay with best price and modern amenities.",
  keywords: [
    "Hotel Inner Circle",
    "Luxury Hotel",
    "Premium Rooms",
    "Hotel Booking",
    "Best Hotel Stay",
  ],
  openGraph: {
    title: "Hotel Inner Circle | Luxury Stay & Premium Rooms",
    description:
      "Experience premium rooms and luxury comfort at Hotel Inner Circle. Book now for the best stay.",
    url: "https://hotelinnercircle.in",
    siteName: "Hotel Inner Circle",
    images: [
      {
        url: "/og-image.jpg", // add this image inside /public
        width: 1200,
        height: 630,
        alt: "Hotel Inner Circle",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Inner Circle | Luxury Stay & Premium Rooms",
    description:
      "Luxury rooms, premium suites, and modern amenities at Hotel Inner Circle. Book your stay now.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
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
      <TestimonialSection />
    </>
  );
}

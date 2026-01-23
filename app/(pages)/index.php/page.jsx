import AboutSection from '@/app/components/AboutSection'
import Hero from '@/app/components/Hero'
import RoomsSection from '@/app/components/RoomsSection'
import React from 'react'
import ImageGallery from '../gallery.php/Gallery'
import InstagramPost from '@/app/components/InstagramPost'
import TestimonialSection from '@/app/components/TestimonialSection'
export const metadata = {
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

export default function page() {
  return (
    <div> <Hero />
      <RoomsSection />
      <AboutSection />
      <ImageGallery />
      {/* <InstagramPost /> */}
      <TestimonialSection /></div>
  )
}

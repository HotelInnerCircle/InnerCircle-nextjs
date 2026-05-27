import React from 'react'
import ImageGallery from './Gallery'
import Image from 'next/image'
export const metadata = {
  title: "Photo Gallery | Hotel Inner Circle – Rooms, Banquet & Lobby | Hyderabad",
  description:
    "Browse the photo gallery of Hotel Inner Circle, Somajiguda Hyderabad. View images of our luxury rooms, elegant banquet halls, reception lobby, and hotel interiors.",
  keywords: [
    "Hotel Inner Circle gallery",
    "hotel photos Hyderabad",
    "hotel room images Hyderabad",
    "banquet hall photos Hyderabad",
    "Hotel Inner Circle Somajiguda photos",
  ],
  alternates: {
    canonical: "https://hotelinnercircle.in/gallery.php",
  },
  openGraph: {
    title: "Photo Gallery | Hotel Inner Circle Hyderabad",
    description:
      "Explore photos of luxury rooms, banquet halls, and hotel facilities at Hotel Inner Circle, Somajiguda Hyderabad.",
    url: "https://hotelinnercircle.in/gallery.php",
    siteName: "Hotel Inner Circle",
    images: [
      {
        url: "https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/5.Inner%20Circle%20Reception%20Lobby.jpg",
        width: 1200,
        height: 630,
        alt: "Hotel Inner Circle Gallery – Hyderabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Gallery | Hotel Inner Circle Hyderabad",
    description:
      "View photos of rooms, banquet halls, and hotel facilities at Hotel Inner Circle, Somajiguda Hyderabad.",
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
      "max-image-preview": "large",
    },
  },
};

const page = () => {
  return (
    <>
      <div className="relative  w-full h-[380px] md:h-[460px] overflow-hidden">
        <Image
          src="/Deluxe-King.avif"
          alt="Rooms Banner"
          fill
          className="object-cover brightness-75 -z-40"
        />

        {/* Banner Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
            Our Luxury Rooms
          </h1>
          <p className="mt-3 text-lg opacity-90 max-w-xl">
            Discover a world of comfort, elegance and exclusive experiences.
          </p>
        </div>
      </div>
      <ImageGallery /></>
  )
}

export default page
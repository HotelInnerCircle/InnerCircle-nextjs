import React from 'react'
import ImageGallery from './Gallery'
import Image from 'next/image'
export const metadata = {
  title: "Luxury Rooms | Hotel Inner Circle Hyderabad",
  description:
    "Explore luxury rooms at Hotel Inner Circle, Somajiguda Hyderabad. Enjoy premium comfort, elegant interiors, and a relaxing stay experience.",
  alternates: {
    canonical: "https://hotelinnercircle.in/rooms",
  },
  openGraph: {
    title: "Luxury Rooms | Hotel Inner Circle",
    description:
      "Discover a world of comfort and elegance with our luxury rooms and premium stay experience.",
    url: "https://hotelinnercircle.in/rooms",
    siteName: "Hotel Inner Circle",
    images: [
      {
        url: "/Deluxe-King.avif",
        width: 1200,
        height: 630,
        alt: "Hotel Inner Circle Luxury Rooms",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Rooms | Hotel Inner Circle",
    description:
      "Explore our luxury rooms with premium comfort and elegant ambience.",
    images: ["/Deluxe-King.avif"],
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
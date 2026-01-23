import React from 'react'
import Menu from './Menu'
import Image from 'next/image'
export const metadata = {
  title: "Restaurant Menu | Hotel Inner Circle Hyderabad",
  description:
    "Explore the restaurant menu at Hotel Inner Circle, Hyderabad. Discover delicious dishes, beverages, and premium dining options.",
  alternates: {
    canonical: "https://hotelinnercircle.in/menu",
  },
  openGraph: {
    title: "Restaurant Menu | Hotel Inner Circle",
    description:
      "Browse our menu and enjoy a premium dining experience at Hotel Inner Circle Hyderabad.",
    url: "https://hotelinnercircle.in/menu",
    siteName: "Hotel Inner Circle",
    images: [
      {
        url: "/Deluxe-King.avif",
        width: 1200,
        height: 630,
        alt: "Hotel Inner Circle Menu",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Menu | Hotel Inner Circle",
    description:
      "Explore the Hotel Inner Circle restaurant menu and dining options.",
    images: ["/Deluxe-King.avif"],
  },
};

export default function page() {
  return (
    <div>
      <div className="relative  w-full h-[380px] md:h-[460px] overflow-hidden">
        <Image
          src="/Deluxe-King.avif"
          alt="Rooms Banner"
          fill
          className="object-cover brightness-75 -z-40"
        />
      </div>

      <Menu />
    </div>
  )
}

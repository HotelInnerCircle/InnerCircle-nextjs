import React from 'react'
import Menu from './Menu'
import Image from 'next/image'
export const metadata = {
  title: "Ice & Spice Restaurant Menu | Hotel Inner Circle Hyderabad",
  description:
    "Explore the Ice & Spice restaurant menu at Hotel Inner Circle, Somajiguda Hyderabad. Enjoy delicious Indian and continental dishes, beverages, and a premium in-house dining experience.",
  keywords: [
    "Ice and Spice restaurant Hyderabad",
    "Hotel Inner Circle restaurant",
    "restaurant menu Somajiguda",
    "in-house dining Hyderabad",
    "hotel restaurant Hyderabad",
    "dining Hotel Inner Circle",
  ],
  alternates: {
    canonical: "https://hotelinnercircle.in/ice_spice.php",
  },
  openGraph: {
    title: "Ice & Spice Restaurant Menu | Hotel Inner Circle Hyderabad",
    description:
      "Browse the Ice & Spice menu and enjoy a premium in-house dining experience at Hotel Inner Circle, Somajiguda Hyderabad.",
    url: "https://hotelinnercircle.in/ice_spice.php",
    siteName: "Hotel Inner Circle",
    images: [
      {
        url: "https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/5.Inner%20Circle%20Reception%20Lobby.jpg",
        width: 1200,
        height: 630,
        alt: "Ice & Spice Restaurant – Hotel Inner Circle Hyderabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ice & Spice Restaurant | Hotel Inner Circle Hyderabad",
    description:
      "Enjoy premium in-house dining at the Ice & Spice restaurant, Hotel Inner Circle, Somajiguda Hyderabad.",
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
    },
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

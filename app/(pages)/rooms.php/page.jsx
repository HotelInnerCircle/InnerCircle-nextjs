import LuxuryRooms from "@/app/components/rooms/LuxuryRooms";
import RoomTabs from "@/app/components/rooms/RoomTabs";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Hotel Rooms in Hyderabad | Standard, Deluxe & Suite Rooms | Hotel Inner Circle",
  description:
    "Explore Standard, Deluxe, Executive, and Deluxe Suite rooms at Hotel Inner Circle, Somajiguda Hyderabad. Enjoy spacious, air-conditioned rooms with high-speed Wi-Fi, room service, and modern amenities.",
  keywords: [
    "hotel rooms Hyderabad",
    "hotel rooms Somajiguda",
    "standard room Hyderabad",
    "deluxe room Hyderabad",
    "executive room Hyderabad",
    "suite hotel Hyderabad",
    "Hotel Inner Circle rooms",
    "luxury rooms Somajiguda",
    "affordable rooms Hyderabad",
  ],
  alternates: {
    canonical: "https://hotelinnercircle.in/rooms.php",
  },
  openGraph: {
    title: "Hotel Rooms in Hyderabad | Standard, Deluxe & Suite | Hotel Inner Circle",
    description:
      "Discover comfortable and spacious hotel rooms at Hotel Inner Circle, Somajiguda Hyderabad. From budget-friendly Standard Rooms to premium Deluxe Suites.",
    url: "https://hotelinnercircle.in/rooms.php",
    siteName: "Hotel Inner Circle",
    images: [
      {
        url: "https://ik.imagekit.io/b7gayfw2v/Gallery/Rooms/18.Inner%20Circle%20Executive%20Room.jpg",
        width: 1200,
        height: 630,
        alt: "Hotel Rooms – Hotel Inner Circle Hyderabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Rooms in Hyderabad | Hotel Inner Circle",
    description:
      "Standard, Deluxe, Executive, and Suite rooms at Hotel Inner Circle, Somajiguda Hyderabad. Book your comfortable stay now.",
    images: [
      "https://ik.imagekit.io/b7gayfw2v/Gallery/Rooms/18.Inner%20Circle%20Executive%20Room.jpg",
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

const page = () => {
  return (
    <div>

      {/* 🔥 Banner Section */}
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

      {/* Room Tabs Component */}
      <LuxuryRooms/>
      {/* <RoomTabs /> */}
    </div>
  );
};

export default page;

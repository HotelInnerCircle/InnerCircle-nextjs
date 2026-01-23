import EventHero from "@/app/components/EventHero";
import ServicesSwiper from "@/app/components/ServicesSwiper";

export const metadata = {
  title: "Events | Hotel Inner Circle",
  description:
    "Explore events and services at Hotel Inner Circle. Discover premium hospitality, event planning support, and seamless booking experience.",
  alternates: {
    canonical: "https://hotelinnercircle.in/events",
  },
  openGraph: {
    title: "Events | Hotel Inner Circle",
    description:
      "Plan your next event at Hotel Inner Circle with premium services and comfortable stays.",
    url: "https://hotelinnercircle.in/events",
    siteName: "Hotel Inner Circle",
    images: [
      {
        url: "/og-events.jpg", // add this image in public folder
        width: 1200,
        height: 630,
        alt: "Hotel Inner Circle Events",
      },
    ],
    type: "website",
  },
};

export default function Page() {
  return (
    <div className="mt-30">
      <EventHero />
      <ServicesSwiper />
    </div>
  );
}

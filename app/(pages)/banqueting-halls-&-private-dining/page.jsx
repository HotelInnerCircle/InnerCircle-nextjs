import EventHero from "@/app/components/EventHero";
import ServicesSwiper from "@/app/components/ServicesSwiper";

export const metadata = {
  title: "Banquet Halls & Private Dining in Hyderabad | Hotel Inner Circle",
  description:
    "Host weddings, corporate events, birthday parties, and private dining at Hotel Inner Circle, Somajiguda Hyderabad. Elegant banquet halls with professional hospitality and in-house catering.",
  keywords: [
    "banquet hall Hyderabad",
    "banquet hall Somajiguda",
    "wedding venue Hyderabad",
    "corporate event venue Hyderabad",
    "private dining Hyderabad",
    "Hotel Inner Circle banquet",
    "event hall Hyderabad",
    "reception hall Hyderabad",
    "party venue Hyderabad",
  ],
  alternates: {
    canonical: "https://hotelinnercircle.in/banqueting-halls-&-private-dining",
  },
  openGraph: {
    title: "Banquet Halls & Private Dining | Hotel Inner Circle Hyderabad",
    description:
      "Plan your perfect event at Hotel Inner Circle. Elegant banquet halls for weddings, corporate meetings, and private dining in Somajiguda, Hyderabad.",
    url: "https://hotelinnercircle.in/banqueting-halls-&-private-dining",
    siteName: "Hotel Inner Circle",
    images: [
      {
        url: "https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/9.Inner%20Circle%20Influence.%20Banquet%20Hall.jpg",
        width: 1200,
        height: 630,
        alt: "Banquet Hall – Hotel Inner Circle Hyderabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Banquet Halls & Private Dining | Hotel Inner Circle Hyderabad",
    description:
      "Elegant banquet halls for weddings, corporate events, and private dining at Hotel Inner Circle, Somajiguda Hyderabad.",
    images: [
      "https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/9.Inner%20Circle%20Influence.%20Banquet%20Hall.jpg",
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

export default function Page() {
  return (
    <div className="mt-30">
      <EventHero />
      <ServicesSwiper />
    </div>
  );
}

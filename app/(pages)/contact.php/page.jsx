import React from 'react'
import ContactPage from './contact'
export const metadata = {
  title: "Contact Us | Hotel Inner Circle Hyderabad",
  description:
    "Contact Hotel Inner Circle, Somajiguda Hyderabad for room reservations, events, and enquiries. Call +91 9848866614 or email info@hotelinnercircle.in.",
  alternates: {
    canonical: "https://hotelinnercircle.in/contact",
  },
  openGraph: {
    title: "Contact Us | Hotel Inner Circle",
    description:
      "Reach out to Hotel Inner Circle for bookings, events, and assistance. Located at Somajiguda, Hyderabad.",
    url: "https://hotelinnercircle.in/contact",
    siteName: "Hotel Inner Circle",
    images: [
      {
        url: "/Deluxe-King.avif",
        width: 1200,
        height: 630,
        alt: "Hotel Inner Circle Contact Page",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Hotel Inner Circle",
    description:
      "Get in touch with Hotel Inner Circle Hyderabad for reservations and enquiries.",
    images: ["/Deluxe-King.avif"],
  },
};

export default function page() {
  return (
    <div><ContactPage /></div>
  )
}

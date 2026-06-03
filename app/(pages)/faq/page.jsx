'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronDown, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsArrowRightCircleFill } from 'react-icons/bs';

const faqGroups = [
  {
    category: 'Location & Access',
    faqs: [
      {
        q: 'Where is Hotel Inner Circle located?',
        a: 'Hotel Inner Circle is located at Raj Bhavan Road, Somajiguda, Hyderabad, Telangana 500082, offering easy access to major business districts, shopping centers, hospitals, and tourist attractions.',
      },
      {
        q: 'Is Hotel Inner Circle close to major Hyderabad attractions?',
        a: "Yes, Hotel Inner Circle's central location in Somajiguda provides convenient access to key landmarks, business hubs, shopping areas, and entertainment destinations across Hyderabad — including Hussain Sagar Lake (3 km), Birla Mandir (2 km), Golconda Fort (12 km), and Charminar (14 km).",
      },
    ],
  },
  {
    category: 'Rooms & Amenities',
    faqs: [
      {
        q: 'What types of rooms are available at Hotel Inner Circle?',
        a: 'We offer Standard Rooms, Executive Rooms, Deluxe Rooms, and Deluxe Suites designed to provide comfort, convenience, and a premium stay experience.',
      },
      {
        q: 'Does the hotel provide free Wi-Fi?',
        a: 'Yes, complimentary high-speed Wi-Fi is available throughout the hotel for all guests.',
      },
      {
        q: 'Is parking available at the hotel?',
        a: 'Yes, Hotel Inner Circle provides parking facilities for guests staying at the property.',
      },
      {
        q: 'Is room service available?',
        a: 'Yes, room service is available to ensure a comfortable and convenient stay for all guests.',
      },
    ],
  },
  {
    category: 'Facilities & Services',
    faqs: [
      {
        q: 'Does Hotel Inner Circle have a restaurant?',
        a: 'Yes, the hotel features an in-house restaurant offering a variety of delicious dining options for guests.',
      },
      {
        q: 'Are banquet halls available for events and celebrations?',
        a: 'Yes, Hotel Inner Circle offers banquet halls and private dining spaces suitable for weddings, corporate meetings, conferences, birthday parties, and social gatherings.',
      },
      {
        q: 'Does the hotel offer conference and meeting facilities?',
        a: 'Yes, conference rooms and business facilities are available for corporate meetings, training sessions, and professional events.',
      },
      {
        q: 'What are the check-in and check-out timings?',
        a: 'Guests are advised to contact the hotel directly for the latest check-in and check-out policies and any special requests.',
      },
      {
        q: 'What guest services are available at the hotel?',
        a: 'Guests can enjoy 24/7 front desk assistance, concierge service, room service, free Wi-Fi, parking, and housekeeping services.',
      },
    ],
  },
  {
    category: 'Business & Family Travel',
    faqs: [
      {
        q: 'Is Hotel Inner Circle suitable for business travelers?',
        a: 'Absolutely. The hotel is designed to cater to business travelers with high-speed Wi-Fi, dedicated workspaces, conference facilities, and a prime location in Hyderabad.',
      },
      {
        q: 'Is Hotel Inner Circle family-friendly?',
        a: 'Yes, the hotel welcomes families and provides comfortable accommodations suitable for leisure and family stays.',
      },
    ],
  },
  {
    category: 'Booking & Contact',
    faqs: [
      {
        q: 'How can I book a room at Hotel Inner Circle?',
        a: "You can book directly through the hotel's website or contact the reservations team for assistance.",
      },
      {
        q: 'How can I contact Hotel Inner Circle?',
        a: 'You can reach Hotel Inner Circle at +91 99516 99516 or email info@hotelinnercircle.in for reservations and inquiries.',
      },
    ],
  },
  {
    category: 'Nearby Hospitals',
    faqs: [
      {
        q: 'Which hospitals are located near Hotel Inner Circle?',
        a: 'Hotel Inner Circle is conveniently located near several leading hospitals in Hyderabad, including Yashoda Hospitals (Best Hospital in Somajiguda), The Deccan Hospital, Zoi Hospitals Somajiguda, and Matrika Hospital — making it an ideal choice for patients and their families.',
      },
      {
        q: 'Are emergency medical facilities available near the hotel?',
        a: 'Yes. Several 24-hour hospitals operate near the hotel, including Yashoda Hospitals (Best Hospital in Somajiguda), The Deccan Hospital, and Zoi Hospitals, Somajiguda.',
      },
    ],
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#e7d7b6] rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-[#faf6ef] transition-colors duration-200"
        aria-expanded={open}
      >
        <span className="text-gray-900 font-semibold text-sm md:text-base leading-snug pr-2">
          {q}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#faf6ef] border border-[#e7d7b6] flex items-center justify-center text-[#a17c36] transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        >
          <FaChevronDown className="text-xs" />
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 bg-[#faf6ef] border-t border-[#e7d7b6]">
          <p className="text-gray-600 text-sm leading-relaxed pt-4">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <main className="bg-white">
      {/* ── HERO ── */}
      <section className="relative h-72 md:h-80 overflow-hidden bg-[#1a1a1a] mt-20">
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/5.Inner%20Circle%20Reception%20Lobby.jpg)',
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <Image
            src="/sublogo.svg"
            width={160}
            height={32}
            alt="Hotel Inner Circle"
            className="mx-auto mb-5 opacity-80"
          />
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-[#e8c27d] text-lg max-w-xl">
            Everything you need to know about your stay at Hotel Inner Circle
          </p>
        </div>
      </section>

      {/* ── BREADCRUMB ── */}
      <nav className="bg-[#faf6ef] border-b border-[#e7d7b6] py-3 px-6" aria-label="Breadcrumb">
        <div className="container mx-auto max-w-4xl">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-[#a17c36] transition">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-[#a17c36] font-medium" aria-current="page">
              FAQ
            </li>
          </ol>
        </div>
      </nav>

      {/* ── FAQ CONTENT ── */}
      <section className="container mx-auto max-w-4xl px-6 py-16">
        <div className="text-center mb-14">
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Have a question about your upcoming stay? Browse our most frequently asked
            questions below. Can&apos;t find what you&apos;re looking for?{' '}
            <Link href="/contact.php" className="text-[#a17c36] font-semibold hover:underline">
              Contact us directly.
            </Link>
          </p>
        </div>

        <div className="space-y-12">
          {faqGroups.map((group, gi) => (
            <div key={gi}>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-1 h-7 bg-[#a17c36] rounded-full flex-shrink-0" />
                <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900">
                  {group.category}
                </h2>
              </div>
              <div className="space-y-3">
                {group.faqs.map((faq, fi) => (
                  <FaqItem key={fi} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="bg-[#faf6ef] border-t border-[#e7d7b6] py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-3">
              Still Have Questions?
            </h2>
            <p className="text-gray-500 max-w-md mx-auto">
              Our team is available 24/7 to help you plan the perfect stay at Hotel Inner Circle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <a
              href="tel:9951699516"
              className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-[#e7d7b6] hover:border-[#a17c36] hover:shadow-md transition-all duration-200"
            >
              <span className="w-12 h-12 bg-[#a17c36] rounded-full flex items-center justify-center text-white text-lg flex-shrink-0">
                <FaPhoneAlt />
              </span>
              <div>
                <p className="font-semibold text-gray-800 text-sm">Call Us 24/7</p>
                <p className="text-gray-500 text-xs mt-0.5">+91 99516 99516</p>
              </div>
            </a>
            <a
              href="mailto:info@hotelinnercircle.in"
              className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-[#e7d7b6] hover:border-[#a17c36] hover:shadow-md transition-all duration-200"
            >
              <span className="w-12 h-12 bg-[#a17c36] rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                <MdEmail />
              </span>
              <div>
                <p className="font-semibold text-gray-800 text-sm">Email Us</p>
                <p className="text-gray-500 text-xs mt-0.5">info@hotelinnercircle.in</p>
              </div>
            </a>
            <Link
              href="https://bookings.resavenue.com/resBooking/rooms?regCode=TZVG1203&roomSearchId=51cc932e10db47048a8e45b7a7ff1ee5&adult_1=2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-[#a17c36] rounded-2xl hover:bg-[#8b6a2b] transition-all duration-200"
            >
              <span className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                <BsArrowRightCircleFill />
              </span>
              <div>
                <p className="font-semibold text-white text-sm">Book a Room</p>
                <p className="text-white/70 text-xs mt-0.5">Check availability online</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

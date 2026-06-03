'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronDown, FaArrowRight } from 'react-icons/fa';

const homeFaqs = [
  {
    q: 'Where is Hotel Inner Circle located?',
    a: 'Hotel Inner Circle is located at Raj Bhavan Road, Somajiguda, Hyderabad, Telangana 500082 — offering easy access to major business districts, hospitals, shopping centers, and tourist attractions.',
  },
  {
    q: 'What types of rooms are available?',
    a: 'We offer Standard Rooms, Executive Rooms, Deluxe Rooms, and Deluxe Suites — all designed to provide comfort, convenience, and a premium stay experience.',
  },
  {
    q: 'Does the hotel provide free Wi-Fi and parking?',
    a: 'Yes, complimentary high-speed Wi-Fi is available throughout the hotel. Parking facilities are also provided for all guests.',
  },
  {
    q: 'Are banquet halls available for events?',
    a: 'Yes, Hotel Inner Circle offers banquet halls and private dining spaces for weddings, corporate meetings, conferences, birthday parties, and social gatherings.',
  },
  {
    q: 'Is the hotel suitable for business travelers?',
    a: 'Absolutely. The hotel features high-speed Wi-Fi, dedicated workspaces, conference facilities, and a prime central location — ideal for corporate guests.',
  },
  {
    q: 'Which hospitals are near Hotel Inner Circle?',
    a: 'The hotel is close to Yashoda Hospitals, The Deccan Hospital, Zoi Hospitals Somajiguda, and Matrika Hospital — making it a preferred choice for medical travelers and their families.',
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#e7d7b6] rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-white hover:bg-[#faf6ef] transition-colors duration-200"
        aria-expanded={open}
      >
        <span className="text-gray-900 font-semibold text-sm leading-snug pr-2">{q}</span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full bg-[#faf6ef] border border-[#e7d7b6] flex items-center justify-center text-[#a17c36] transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        >
          <FaChevronDown className="text-[10px]" />
        </span>
      </button>
      {open && (
        <div className="px-6 pb-4 bg-[#faf6ef] border-t border-[#e7d7b6]">
          <p className="text-gray-600 text-sm leading-relaxed pt-3">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">

        {/* Section header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <span className="w-10 h-px bg-gray-300" />
            <Image
              src="/sublogo.svg"
              width={200}
              height={40}
              alt="Hotel Inner Circle divider"
              className="mx-6 opacity-70"
            />
            <span className="w-10 h-px bg-gray-300" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 tracking-wide">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 mt-3 text-base max-w-xl mx-auto">
            Quick answers to common questions about your stay at Hotel Inner Circle
          </p>
        </div>

        {/* Two-column FAQ grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10">
          {homeFaqs.map((faq, i) => (
            <FaqItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-[#a17c36] hover:text-[#8b6a2b] font-semibold text-sm transition-colors duration-200 group/all"
          >
            View All FAQs
            <FaArrowRight className="group-hover/all:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import {
  FaMapMarkerAlt,
  FaWifi,
  FaBriefcase,
  FaCheckCircle,
  FaCalendarAlt,
  FaClock,
  FaPhoneAlt,
  FaParking,
  FaDumbbell,
} from 'react-icons/fa';
import {
  MdLocalHospital,
  MdLocationCity,
  MdRestaurant,
  MdFamilyRestroom,
  MdOutlineStar,
  MdOutlineBusinessCenter,
  MdLocalLaundryService,
  MdAirportShuttle,
} from 'react-icons/md';
import { BsBuildings, BsArrowRightCircleFill } from 'react-icons/bs';
import { GiPathDistance } from 'react-icons/gi';

export const metadata = {
  title:
    'Travel Smarter: Benefits of Booking a Stay at Hotel Inner Circle in Somajiguda | Hotel Inner Circle',
  description:
    'Discover why Hotel Inner Circle in Somajiguda, Hyderabad is the smart choice for travelers. Prime location, comfortable rooms, business facilities, dining, and easy access to top attractions.',
  keywords: [
    'hotel inner circle somajiguda',
    'benefits of booking hotel inner circle',
    'travel smarter hyderabad',
    'best hotel somajiguda hyderabad',
    'hotel near raj bhavan road hyderabad',
    'business hotel somajiguda',
    'family hotel hyderabad',
    'hotel near yashoda hospital hyderabad',
    'hotel with conference room hyderabad',
    'affordable hotel somajiguda',
    'hotel near hussain sagar lake',
    'hotel near birla mandir hyderabad',
    'comfortable stay hyderabad',
    'hotel near banjara hills hyderabad',
  ],
  alternates: {
    canonical:
      'https://hotelinnercircle.in/blog/travel-smarter-benefits-of-booking-hotel-inner-circle',
  },
  openGraph: {
    title:
      'Travel Smarter: Benefits of Booking a Stay at Hotel Inner Circle in Somajiguda',
    description:
      "Hotel Inner Circle in Somajiguda offers prime location, comfortable rooms, business facilities, and easy access to Hyderabad's top attractions.",
    url: 'https://hotelinnercircle.in/blog/travel-smarter-benefits-of-booking-hotel-inner-circle',
    siteName: 'Hotel Inner Circle',
    images: [
      {
        url: 'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/5.Inner%20Circle%20Reception%20Lobby.jpg',
        width: 1200,
        height: 630,
        alt: 'Hotel Inner Circle – Travel Smarter Stay in Somajiguda Hyderabad',
      },
    ],
    locale: 'en_IN',
    type: 'article',
    publishedTime: '2026-06-02T00:00:00.000Z',
    modifiedTime: '2026-06-02T00:00:00.000Z',
    authors: ['https://hotelinnercircle.in'],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Travel Smarter: Benefits of Booking a Stay at Hotel Inner Circle in Somajiguda',
    description:
      "Prime location, comfortable rooms, business facilities, and easy access to Hyderabad's top attractions at Hotel Inner Circle, Somajiguda.",
    images: [
      'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/5.Inner%20Circle%20Reception%20Lobby.jpg',
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Travel Smarter: Benefits of Booking a Stay at Hotel Inner Circle in Somajiguda',
  description:
    'Discover why Hotel Inner Circle in Somajiguda, Hyderabad is the smart choice for all types of travelers — business, family, medical, and leisure.',
  image:
    'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/5.Inner%20Circle%20Reception%20Lobby.jpg',
  author: {
    '@type': 'Organization',
    name: 'Hotel Inner Circle',
    url: 'https://hotelinnercircle.in',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Hotel Inner Circle',
    logo: {
      '@type': 'ImageObject',
      url: 'https://hotelinnercircle.in/logos/HIC-white-logo.png',
    },
  },
  datePublished: '2026-06-02',
  dateModified: '2026-06-02',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id':
      'https://hotelinnercircle.in/blog/travel-smarter-benefits-of-booking-hotel-inner-circle',
  },
};

const localBusinessLd = {
  '@context': 'https://schema.org',
  '@type': 'Hotel',
  name: 'Hotel Inner Circle',
  image:
    'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/5.Inner%20Circle%20Reception%20Lobby.jpg',
  url: 'https://hotelinnercircle.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Raj Bhavan Road, Somajiguda',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500082',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 17.4302, longitude: 78.4552 },
  priceRange: '₹₹',
  starRating: { '@type': 'Rating', ratingValue: '4' },
};

const amenities = [
  { icon: <FaWifi className="text-xl" />, label: 'Free Wi-Fi', sub: 'High-speed connectivity' },
  { icon: <MdOutlineBusinessCenter className="text-2xl" />, label: 'Conference Facilities', sub: 'Meetings & corporate events' },
  { icon: <FaParking className="text-xl" />, label: 'Parking Facilities', sub: 'Secure on-site parking' },
  { icon: <MdLocalLaundryService className="text-2xl" />, label: 'Laundry Service', sub: 'Quick & convenient' },
  { icon: <MdAirportShuttle className="text-2xl" />, label: 'Airport Transport', sub: 'Transfer support available' },
  { icon: <FaDumbbell className="text-xl" />, label: 'Fitness Center', sub: 'Stay active during your stay' },
];

const roomAmenities = [
  'Free Wi-Fi connectivity',
  'Air-conditioned rooms',
  'Room service',
  'Comfortable bedding',
  'Tea and coffee facilities',
  'Television and workspaces',
  'Clean and hygienic interiors',
];

const attractions = [
  {
    name: 'Hussain Sagar Lake',
    desc: '3 km away',
    img: 'https://ik.imagekit.io/b7gayfw2v/Gallery/Rooms/17.Inner%20Circle%20Standard%20Room.jpg',
  },
  {
    name: 'Birla Mandir',
    desc: '2 km away',
    img: 'https://ik.imagekit.io/b7gayfw2v/Gallery/Rooms/18.Inner%20Circle%20Executive%20Room.jpg',
  },
  {
    name: 'Charminar',
    desc: '14 km away',
    img: 'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/9.Inner%20Circle%20Influence.%20Banquet%20Hall.jpg',
  },
  {
    name: 'Golconda Fort',
    desc: '12 km away',
    img: 'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/10.Inner%20Circle%20In-fluence%20Banquet%20Hall.jpg',
  },
  {
    name: 'Salar Jung Museum',
    desc: '13 km away',
    img: 'https://ik.imagekit.io/b7gayfw2v/Gallery/Rooms/17.Inner%20Circle%20Standard%20Room.jpg',
  },
  {
    name: 'Hyderabad Central Mall',
    desc: 'Nearby',
    img: 'https://ik.imagekit.io/b7gayfw2v/Gallery/Rooms/18.Inner%20Circle%20Executive%20Room.jpg',
  },
];

const whyChoose = [
  { icon: <FaMapMarkerAlt />, label: 'Prime Location', sub: 'Raj Bhavan Road, Somajiguda' },
  { icon: <MdOutlineStar />, label: 'Comfortable Rooms', sub: 'Multiple categories available' },
  { icon: <MdRestaurant />, label: 'In-House Dining', sub: 'Breakfast to dinner' },
  { icon: <BsBuildings />, label: 'Business Facilities', sub: 'Conference & meeting rooms' },
  { icon: <MdFamilyRestroom />, label: 'Family Friendly', sub: 'Safe & accessible' },
  { icon: <FaWifi />, label: 'Modern Amenities', sub: 'Wi-Fi, fitness & more' },
];

function SectionTitle({ children, id }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="w-1 h-9 bg-[#a17c36] rounded-full flex-shrink-0" />
      <h2
        id={id}
        className="text-2xl md:text-3xl font-serif font-bold text-gray-900 leading-snug"
      >
        {children}
      </h2>
    </div>
  );
}

export default function TravelSmarterBlog() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
      />

      <main className="bg-white">
        {/* ── HERO ── */}
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
          <Image
            src="https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/5.Inner%20Circle%20Reception%20Lobby.jpg"
            alt="Hotel Inner Circle lobby – Travel Smarter Stay in Somajiguda Hyderabad"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/85" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <span className="inline-block px-5 py-1.5 mb-5 text-xs font-bold tracking-widest uppercase bg-[#a17c36] text-white rounded-full shadow-lg">
              Travel Guide
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-serif font-bold text-white leading-tight max-w-4xl mb-3">
              Travel Smarter: Benefits of Booking a Stay at Hotel Inner Circle
            </h1>
            <p className="text-[#e8c27d] text-xl md:text-2xl font-medium mb-6 max-w-2xl">
              Convenience, Comfort &amp; Connectivity in Somajiguda
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/80 text-sm">
              <span className="flex items-center gap-2">
                <FaCalendarAlt className="text-[#e8c27d]" /> June 2026
              </span>
              <span className="hidden sm:block w-px h-4 bg-white/30" />
              <span className="flex items-center gap-2">
                <FaClock className="text-[#e8c27d]" /> 7 min read
              </span>
              <span className="hidden sm:block w-px h-4 bg-white/30" />
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#e8c27d]" /> Somajiguda, Hyderabad
              </span>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center pt-2">
              <div className="w-1.5 h-3 bg-white/70 rounded-full" />
            </div>
          </div>
        </section>

        {/* ── BREADCRUMB ── */}
        <nav
          className="bg-[#faf6ef] border-b border-[#e7d7b6] py-3 px-6"
          aria-label="Breadcrumb"
        >
          <div className="container mx-auto max-w-5xl">
            <ol
              className="flex flex-wrap items-center gap-2 text-sm text-gray-500"
              itemScope
              itemType="https://schema.org/BreadcrumbList"
            >
              <li
                itemScope
                itemType="https://schema.org/ListItem"
                itemProp="itemListElement"
              >
                <Link
                  href="/"
                  className="hover:text-[#a17c36] transition"
                  itemProp="item"
                >
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden>/</li>
              <li
                itemScope
                itemType="https://schema.org/ListItem"
                itemProp="itemListElement"
              >
                <Link
                  href="/blog"
                  className="hover:text-[#a17c36] transition"
                  itemProp="item"
                >
                  <span itemProp="name">Blog</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden>/</li>
              <li
                className="text-[#a17c36] font-medium"
                aria-current="page"
              >
                Travel Smarter: Benefits of Booking Hotel Inner Circle
              </li>
            </ol>
          </div>
        </nav>

        {/* ── ARTICLE ── */}
        <article className="container mx-auto max-w-5xl px-6 py-16">
          {/* Intro */}
          <div className="mb-16 max-w-3xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-5">
              When planning a trip to Hyderabad, choosing the right hotel can make a
              significant difference in your travel experience. Whether you&apos;re
              visiting for business, medical purposes, family vacations, or a weekend
              getaway, staying in a centrally located and comfortable hotel helps you
              save time, reduce stress, and enjoy the city more.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Located in the heart of{' '}
              <Link href="/" className="text-[#8b6a2b] font-semibold hover:underline">
                Somajiguda
              </Link>
              ,{' '}
              <Link href="/">
                <strong className="text-[#8b6a2b]">Hotel Inner Circle</strong>
              </Link>{' '}
              offers the perfect combination of convenience, comfort, and
              affordability. Situated on Raj Bhavan Road, the hotel provides easy
              access to Hyderabad&apos;s major business hubs, hospitals, shopping
              centers, and tourist attractions.
            </p>
          </div>

          {/* Prime Location */}
          <section className="mb-16" aria-labelledby="prime-location">
            <SectionTitle id="prime-location">
              Prime Location in the Heart of Hyderabad
            </SectionTitle>
            <p className="text-gray-600 leading-relaxed mb-8">
              One of the biggest advantages of staying at{' '}
              <Link href="/">
                <strong className="text-[#8b6a2b]">Hotel Inner Circle</strong>
              </Link>{' '}
              is its strategic location in Somajiguda. The hotel is conveniently
              connected to Banjara Hills, Punjagutta, Begumpet, HITEC City, and other
              important areas of Hyderabad.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  icon: <BsBuildings className="text-2xl" />,
                  text: 'Connected to Banjara Hills & Punjagutta',
                },
                {
                  icon: <MdLocationCity className="text-2xl" />,
                  text: 'Easy access to Begumpet & HITEC City',
                },
                {
                  icon: <MdLocalHospital className="text-2xl" />,
                  text: 'Near Yashoda Hospitals – ideal for medical travel',
                },
                {
                  icon: <GiPathDistance className="text-2xl" />,
                  text: 'Excellent transportation connectivity',
                },
                {
                  icon: <FaMapMarkerAlt className="text-xl" />,
                  text: 'Raj Bhavan Road, Somajiguda',
                },
                {
                  icon: <MdOutlineStar className="text-2xl" />,
                  text: 'Less time in traffic, more time exploring',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-5 bg-[#faf6ef] rounded-2xl border border-[#e7d7b6] hover:border-[#a17c36] hover:shadow-md transition-all duration-200"
                >
                  <span className="text-[#a17c36] flex-shrink-0">{item.icon}</span>
                  <span className="text-gray-700 font-medium text-sm leading-snug">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Comfortable Rooms */}
          <section className="mb-16" aria-labelledby="rooms">
            <SectionTitle id="rooms">
              Comfortable Rooms Designed for Every Traveler
            </SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-gray-600 leading-relaxed mb-7">
                  Whether you&apos;re a solo traveler, business professional, couple, or
                  family, the hotel offers well-furnished rooms equipped with modern
                  amenities. The hotel provides multiple room categories to suit
                  different budgets and travel requirements.
                </p>
                <ul className="space-y-3.5">
                  {roomAmenities.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <FaCheckCircle className="text-[#a17c36] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://ik.imagekit.io/b7gayfw2v/Gallery/Rooms/18.Inner%20Circle%20Executive%20Room.jpg"
                  alt="Comfortable room at Hotel Inner Circle Somajiguda"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-4 left-4 text-white font-semibold text-sm bg-[#a17c36] px-3 py-1 rounded-full">
                  Executive Room
                </span>
              </div>
            </div>
          </section>

          {/* Business Travelers */}
          <section className="mb-16" aria-labelledby="business-travel">
            <SectionTitle id="business-travel">
              Ideal for Business Travelers
            </SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3">
                <p className="text-gray-600 leading-relaxed mb-7">
                  Hyderabad is one of India&apos;s leading business destinations, and
                  business travelers need a hotel that supports productivity.{' '}
                  <Link href="/">
                    <strong className="text-[#8b6a2b]">Hotel Inner Circle</strong>
                  </Link>{' '}
                  features conference facilities, business services, meeting spaces,
                  and high-speed internet access — making it an excellent choice for
                  corporate guests. The central location allows easy travel to major
                  business districts and commercial centers.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { icon: <MdOutlineBusinessCenter />, text: 'Conference & meeting facilities' },
                    { icon: <FaWifi />, text: 'High-speed internet access' },
                    { icon: <FaBriefcase />, text: 'Business-friendly workspaces' },
                    { icon: <GiPathDistance />, text: 'Easy access to corporate zones' },
                    { icon: <MdOutlineStar />, text: 'Productive & peaceful environment' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-[#faf6ef]"
                    >
                      <span className="text-[#a17c36] mt-0.5 flex-shrink-0">
                        {item.icon}
                      </span>
                      <span className="text-gray-700 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-2 relative h-72 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/10.Inner%20Circle%20In-fluence%20Banquet%20Hall.jpg"
                  alt="Conference and business facilities at Hotel Inner Circle"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Dining */}
          <section className="mb-16" aria-labelledby="dining">
            <SectionTitle id="dining">Excellent Dining Experience</SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl order-last lg:order-first">
                <Image
                  src="https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/9.Inner%20Circle%20Influence.%20Banquet%20Hall.jpg"
                  alt="Dining at Hotel Inner Circle Hyderabad"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed mb-7">
                  Travel becomes more enjoyable when great food is just steps away.
                  The hotel offers in-house dining options where guests can enjoy
                  delicious meals without leaving the property — from breakfast to
                  dinner with quality food and convenient service.
                </p>
                <ul className="space-y-3.5">
                  {[
                    'In-house restaurant open all day',
                    'Fresh and hygienic food preparation',
                    'Comfortable dining environment',
                    'Room service for in-room dining',
                    'Variety of meal choices available',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <FaCheckCircle className="text-[#a17c36] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Family & Facilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <section
              className="p-8 rounded-2xl bg-[#1a1a1a] text-white"
              aria-labelledby="family"
            >
              <div className="flex items-center gap-3 mb-5">
                <MdFamilyRestroom className="text-[#e8c27d] text-3xl flex-shrink-0" />
                <h2
                  id="family"
                  className="text-xl font-serif font-bold text-white"
                >
                  Perfect for Family Stays
                </h2>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-5">
                Families visiting Hyderabad often look for safe, clean, and
                accessible accommodation. The hotel&apos;s cleanliness, central
                location, and friendly service make it an ideal choice for families.
              </p>
              <ul className="space-y-3">
                {[
                  'Safe and peaceful environment',
                  'Spacious rooms for families',
                  'Nearby shopping & restaurants',
                  'Convenient access to attractions',
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-gray-200"
                  >
                    <FaCheckCircle className="text-[#a17c36] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section
              className="p-8 rounded-2xl border-2 border-[#e7d7b6] bg-[#faf6ef]"
              aria-labelledby="services-24"
            >
              <div className="flex items-center gap-3 mb-5">
                <MdOutlineStar className="text-[#a17c36] text-3xl flex-shrink-0" />
                <h2
                  id="services-24"
                  className="text-xl font-serif font-bold text-gray-900"
                >
                  Professional Hospitality
                </h2>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                The staff at Hotel Inner Circle ensures guests receive prompt
                assistance and attentive service throughout their stay.
              </p>
              <ul className="space-y-3">
                {[
                  '24/7 front desk assistance',
                  'Housekeeping services',
                  'Quick check-in and check-out',
                  'Travel & transportation support',
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-gray-700"
                  >
                    <FaCheckCircle className="text-[#a17c36] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Facilities */}
          <section className="mb-16" aria-labelledby="facilities">
            <SectionTitle id="facilities">
              Facilities That Add Value to Your Stay
            </SectionTitle>
            <p className="text-gray-600 leading-relaxed mb-8">
              Guests staying at{' '}
              <Link href="/">
                <strong className="text-[#8b6a2b]">Hotel Inner Circle</strong>
              </Link>{' '}
              can benefit from several useful amenities that help create a convenient
              and hassle-free experience for every traveler.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {amenities.map((item, i) => (
                <div
                  key={i}
                  className="p-5 bg-white rounded-2xl border border-[#e7d7b6] text-center hover:shadow-md hover:border-[#a17c36] transition-all duration-200"
                >
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#faf6ef] text-[#a17c36] text-xl mb-3">
                    {item.icon}
                  </span>
                  <p className="font-semibold text-gray-800 text-sm">{item.label}</p>
                  <p className="text-gray-400 text-xs mt-1">{item.sub}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Attractions */}
          <section className="mb-16" aria-labelledby="attractions">
            <SectionTitle id="attractions">
              Easy Access to Hyderabad&apos;s Top Attractions
            </SectionTitle>
            <p className="text-gray-600 leading-relaxed mb-8">
              The hotel&apos;s location makes it easy to visit many famous landmarks in
              Hyderabad, allowing visitors to spend less time commuting and more time
              enjoying the city.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {attractions.map((place, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl overflow-hidden shadow-md group h-48"
                >
                  <Image
                    src={place.img}
                    alt={`${place.name} near Hotel Inner Circle Somajiguda`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-bold text-sm">{place.name}</p>
                    <p className="text-[#e8c27d] text-xs flex items-center gap-1 mt-0.5">
                      <FaMapMarkerAlt className="text-[10px]" />
                      {place.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose */}
          <section
            className="mb-16 p-8 md:p-12 rounded-3xl bg-[#faf6ef] border border-[#e7d7b6]"
            aria-labelledby="why-choose"
          >
            <h2
              id="why-choose"
              className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-3 text-center"
            >
              Why Choose Hotel Inner Circle?
            </h2>
            <p className="text-gray-500 text-center mb-8 max-w-xl mx-auto">
              The perfect balance between location, comfort, service, and value — a
              smart stay solution for all types of travelers in Hyderabad.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {whyChoose.map((card, i) => (
                <div
                  key={i}
                  className="p-5 bg-white rounded-2xl border border-[#e7d7b6] text-center hover:shadow-md hover:border-[#a17c36] transition-all duration-200"
                >
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#faf6ef] text-[#a17c36] text-xl mb-3">
                    {card.icon}
                  </span>
                  <p className="font-semibold text-gray-800 text-sm">{card.label}</p>
                  <p className="text-gray-400 text-xs mt-1">{card.sub}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-10 max-w-3xl" aria-labelledby="conclusion">
            <SectionTitle id="conclusion">Conclusion</SectionTitle>
            <p className="text-gray-700 leading-relaxed mb-4">
              Choosing the right hotel means finding the perfect balance between
              location, comfort, service, and value. With its central{' '}
              <Link href="/" className="text-[#8b6a2b] font-semibold hover:underline">
                Somajiguda
              </Link>{' '}
              location, modern amenities, comfortable rooms, dining options, and
              business-friendly facilities,{' '}
              <Link href="/">
                <strong className="text-[#8b6a2b]">Hotel Inner Circle</strong>
              </Link>{' '}
              offers a smart stay solution for all types of travelers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you&apos;re in Hyderabad for work, medical appointments, family
              vacations, or sightseeing, the hotel provides everything you need for a
              comfortable and memorable stay.
            </p>
          </section>
        </article>

        {/* ── BOOKING CTA ── */}
        <section className="relative overflow-hidden bg-[#1a1a1a] py-20 px-6">
          <div
            className="absolute inset-0 opacity-15 bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/5.Inner%20Circle%20Reception%20Lobby.jpg)',
            }}
          />
          <div className="relative z-10 container mx-auto max-w-3xl text-center">
            <Image
              src="/sublogo.svg"
              width={180}
              height={36}
              alt="Hotel Inner Circle"
              className="mx-auto mb-6 opacity-80"
            />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Book Your Stay Today
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Experience hospitality, comfort, and connectivity — all in one place at{' '}
              <Link
                href="/"
                className="text-[#e8c27d] font-semibold hover:underline"
              >
                Hotel Inner Circle, Somajiguda Hyderabad
              </Link>
              .
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://bookings.resavenue.com/resBooking/rooms?regCode=TZVG1203&roomSearchId=51cc932e10db47048a8e45b7a7ff1ee5&adult_1=2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#a17c36] hover:bg-[#e8c27d] hover:text-[#1a1a1a] text-white font-bold rounded-full transition-all duration-200 shadow-xl text-base"
              >
                Reserve a Room <BsArrowRightCircleFill />
              </Link>
              <Link
                href="/contact.php"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 hover:border-[#e8c27d] hover:text-[#e8c27d] text-white font-semibold rounded-full transition-all duration-200 text-base"
              >
                <FaPhoneAlt className="text-sm" /> Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

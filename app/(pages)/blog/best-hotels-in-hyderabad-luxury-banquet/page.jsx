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
  FaGlassCheers,
} from 'react-icons/fa';
import {
  MdLocationCity,
  MdRestaurant,
  MdFamilyRestroom,
  MdOutlineStar,
  MdOutlineBusinessCenter,
  MdOutlineCelebration,
} from 'react-icons/md';
import { BsBuildings, BsArrowRightCircleFill } from 'react-icons/bs';
import { GiPathDistance } from 'react-icons/gi';

export const metadata = {
  title:
    'Best Hotels in Hyderabad for Luxury Stay & Banquet Halls | Hotel Inner Circle',
  description:
    'Looking for the best hotels in Hyderabad with luxury stay and banquet halls? Hotel Inner Circle offers elegant rooms, professional hospitality, and well-equipped banquet facilities for weddings, corporate events, and family gatherings.',
  keywords: [
    'best hotels in hyderabad',
    'hotels with banquet hall hyderabad',
    'luxury hotel hyderabad',
    'banquet hall hyderabad',
    'hotel for wedding hyderabad',
    'corporate event hotel hyderabad',
    'hotel inner circle banquet',
    'event venue hyderabad',
    'wedding venue hyderabad',
    'hotel with conference room hyderabad',
    'luxury stay hyderabad',
    'hotel and banquet hyderabad',
    'best banquet hall hyderabad',
    'hotel for family gathering hyderabad',
  ],
  alternates: {
    canonical: 'https://hotelinnercircle.in/blog/best-hotels-in-hyderabad-luxury-banquet',
  },
  openGraph: {
    title: 'Best Hotels in Hyderabad for Luxury Stay & Banquet Halls',
    description:
      'Hotel Inner Circle offers elegant accommodation, professional hospitality, and well-equipped banquet facilities for all occasions in Hyderabad.',
    url: 'https://hotelinnercircle.in/blog/best-hotels-in-hyderabad-luxury-banquet',
    siteName: 'Hotel Inner Circle',
    images: [
      {
        url: 'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/9.Inner%20Circle%20Influence.%20Banquet%20Hall.jpg',
        width: 1200,
        height: 630,
        alt: 'Best Hotels in Hyderabad – Hotel Inner Circle Banquet Hall',
      },
    ],
    locale: 'en_IN',
    type: 'article',
    publishedTime: '2025-05-01T00:00:00.000Z',
    modifiedTime: '2025-06-01T00:00:00.000Z',
    authors: ['https://hotelinnercircle.in'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Hotels in Hyderabad for Luxury Stay & Banquet Halls',
    description:
      'Hotel Inner Circle offers elegant accommodation and well-equipped banquet facilities for all occasions in Hyderabad.',
    images: [
      'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/9.Inner%20Circle%20Influence.%20Banquet%20Hall.jpg',
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
  headline: 'Best Hotels in Hyderabad for Luxury Stay & Banquet Halls',
  description:
    'Hotel Inner Circle combines comfortable luxury accommodation with elegant banquet facilities in Hyderabad for all types of events and stays.',
  image:
    'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/9.Inner%20Circle%20Influence.%20Banquet%20Hall.jpg',
  author: { '@type': 'Organization', name: 'Hotel Inner Circle', url: 'https://hotelinnercircle.in' },
  publisher: {
    '@type': 'Organization',
    name: 'Hotel Inner Circle',
    logo: { '@type': 'ImageObject', url: 'https://hotelinnercircle.in/logos/HIC-white-logo.png' },
  },
  datePublished: '2025-05-01',
  dateModified: '2025-06-01',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://hotelinnercircle.in/blog/best-hotels-in-hyderabad-luxury-banquet',
  },
};

const eventTypes = [
  { icon: <MdOutlineBusinessCenter className="text-2xl" />, label: 'Corporate Meetings & Conferences' },
  { icon: <FaGlassCheers className="text-xl" />, label: 'Wedding Functions' },
  { icon: <MdOutlineCelebration className="text-2xl" />, label: 'Birthday Parties' },
  { icon: <MdFamilyRestroom className="text-2xl" />, label: 'Family Gatherings' },
  { icon: <FaGlassCheers className="text-xl" />, label: 'Social Events' },
  { icon: <FaBriefcase className="text-xl" />, label: 'Business Seminars' },
  { icon: <FaGlassCheers className="text-xl" />, label: 'Reception Ceremonies' },
];

const banquetImages = [
  {
    src: 'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/9.Inner%20Circle%20Influence.%20Banquet%20Hall.jpg',
    label: 'Influence Banquet Hall',
  },
  {
    src: 'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/10.Inner%20Circle%20In-fluence%20Banquet%20Hall.jpg',
    label: 'In-fluence Hall Setup',
  },
  {
    src: 'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/5.Inner%20Circle%20Reception%20Lobby.jpg',
    label: 'Reception Lobby',
  },
  {
    src: 'https://ik.imagekit.io/b7gayfw2v/Gallery/Rooms/18.Inner%20Circle%20Executive%20Room.jpg',
    label: 'Executive Stay Rooms',
  },
];

const rooms = [
  { src: '/Roomimages/StandardRoom/19.Inner Circle Exe Room.jpg', label: 'Standard Room', price: '₹4,499' },
  { src: '/Roomimages/DeluxeRoom/20.Inner_Circle_Deluxe.Room.jpg', label: 'Deluxe Room', price: '₹5,699' },
  { src: '/Roomimages/ExecutiveRoom/17.Inner Circle Standard Room.jpg', label: 'Executive Room', price: '₹5,099' },
  { src: '/Roomimages/DeluxeSuite/22.Inner Circle Delux Suit Room sit-out.JPG', label: 'Deluxe Suite', price: '₹7,399' },
];

const touristAttractions = [
  { name: 'Charminar', desc: '14 km away', img: 'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/9.Inner%20Circle%20Influence.%20Banquet%20Hall.jpg' },
  { name: 'Golconda Fort', desc: '12 km away', img: 'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/10.Inner%20Circle%20In-fluence%20Banquet%20Hall.jpg' },
  { name: 'Hussain Sagar Lake', desc: '3 km away', img: 'https://ik.imagekit.io/b7gayfw2v/Gallery/Rooms/17.Inner%20Circle%20Standard%20Room.jpg' },
  { name: 'Salar Jung Museum', desc: '13 km away', img: 'https://ik.imagekit.io/b7gayfw2v/Gallery/Rooms/18.Inner%20Circle%20Executive%20Room.jpg' },
  { name: 'Birla Mandir', desc: '2 km away', img: 'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/9.Inner%20Circle%20Influence.%20Banquet%20Hall.jpg' },
  { name: 'Shopping Malls', desc: 'Nearby', img: 'https://ik.imagekit.io/b7gayfw2v/Gallery/Rooms/17.Inner%20Circle%20Standard%20Room.jpg' },
];

function SectionTitle({ children, id }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="w-1 h-9 bg-[#a17c36] rounded-full flex-shrink-0" />
      <h2 id={id} className="text-2xl md:text-3xl font-serif font-bold text-gray-900 leading-snug">
        {children}
      </h2>
    </div>
  );
}

export default function BestHotelsBanquetBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="bg-white">
        {/* ── HERO ── */}
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
          <Image
            src="https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/9.Inner%20Circle%20Influence.%20Banquet%20Hall.jpg"
            alt="Hotel Inner Circle Banquet Hall – Best Hotels in Hyderabad"
            fill className="object-cover" priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/85" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <span className="inline-block px-5 py-1.5 mb-5 text-xs font-bold tracking-widest uppercase bg-[#a17c36] text-white rounded-full shadow-lg">
              Hotel Guide
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-serif font-bold text-white leading-tight max-w-4xl mb-3">
              Best Hotels in Hyderabad
            </h1>
            <p className="text-[#e8c27d] text-xl md:text-2xl font-medium mb-6 max-w-2xl">
              Luxury Stay &amp; Elegant Banquet Halls
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/80 text-sm">
              <span className="flex items-center gap-2"><FaCalendarAlt className="text-[#e8c27d]" /> May 2025</span>
              <span className="hidden sm:block w-px h-4 bg-white/30" />
              <span className="flex items-center gap-2"><FaClock className="text-[#e8c27d]" /> 7 min read</span>
              <span className="hidden sm:block w-px h-4 bg-white/30" />
              <span className="flex items-center gap-2"><FaMapMarkerAlt className="text-[#e8c27d]" /> Hyderabad, Telangana</span>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center pt-2">
              <div className="w-1.5 h-3 bg-white/70 rounded-full" />
            </div>
          </div>
        </section>

        {/* ── BREADCRUMB ── */}
        <nav className="bg-[#faf6ef] border-b border-[#e7d7b6] py-3 px-6" aria-label="Breadcrumb">
          <div className="container mx-auto max-w-5xl">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                <Link href="/" className="hover:text-[#a17c36] transition" itemProp="item"><span itemProp="name">Home</span></Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden>/</li>
              <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                <Link href="/blog" className="hover:text-[#a17c36] transition" itemProp="item"><span itemProp="name">Blog</span></Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden>/</li>
              <li className="text-[#a17c36] font-medium" aria-current="page">Best Hotels in Hyderabad – Luxury Stay &amp; Banquet Halls</li>
            </ol>
          </div>
        </nav>

        {/* ── ARTICLE ── */}
        <article className="container mx-auto max-w-5xl px-6 py-16">

          {/* Intro */}
          <div className="mb-16 max-w-3xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-5">
              Hyderabad is a city that perfectly blends heritage, business growth, modern lifestyle, and hospitality. Whether you are visiting for a business trip, family vacation, wedding celebration, corporate event, or social gathering, choosing the right hotel plays an important role in creating a comfortable and memorable experience.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Travelers and event organizers often look for hotels that provide both luxury accommodation and well-equipped banquet halls under one roof. <Link href="/"><strong className="text-[#8b6a2b]">Hotel Inner Circle</strong></Link> is one of the preferred choices in Hyderabad for guests seeking comfortable stays along with elegant banquet and event facilities.
            </p>
          </div>

          {/* ── WHY CHOOSE BANQUET HOTEL ── */}
          <section className="mb-16" aria-labelledby="why-banquet">
            <SectionTitle id="why-banquet">Why Choose a Hotel with Banquet Hall Facilities?</SectionTitle>
            <p className="text-gray-600 leading-relaxed mb-8">
              Hotels with banquet halls offer convenience and flexibility for hosting various events while ensuring comfortable accommodation for guests. From weddings and receptions to business meetings and family celebrations, banquet facilities make event planning easier and more organized.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: <MdOutlineBusinessCenter className="text-2xl" />, text: 'Convenient event management' },
                { icon: <BsBuildings className="text-2xl" />, text: 'Comfortable guest accommodation' },
                { icon: <MdRestaurant className="text-2xl" />, text: 'In-house dining & catering support' },
                { icon: <FaMapMarkerAlt className="text-xl" />, text: 'Centralized location for attendees' },
                { icon: <MdOutlineStar className="text-2xl" />, text: 'Professional hospitality services' },
                { icon: <FaBriefcase className="text-xl" />, text: 'Suitable for corporate & family events' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-[#faf6ef] rounded-2xl border border-[#e7d7b6] hover:border-[#a17c36] hover:shadow-md transition-all duration-200">
                  <span className="text-[#a17c36] flex-shrink-0">{item.icon}</span>
                  <span className="text-gray-700 font-medium text-sm leading-snug">{item.text}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 leading-relaxed mt-8">
              Choosing a hotel with both stay and event facilities helps guests enjoy a smooth and stress-free experience — the perfect choice is <Link href="/"><strong className="text-[#8b6a2b]">Hotel Inner Circle</strong></Link>.
            </p>
          </section>

          {/* ── BANQUET IMAGES GRID ── */}
          <section className="mb-16" aria-labelledby="banquet-gallery">
            <h3 id="banquet-gallery" className="text-xl font-serif font-semibold text-gray-800 mb-6 text-center">Our Banquet &amp; Event Spaces</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {banquetImages.map((img, i) => (
                <div key={i} className="relative group rounded-2xl overflow-hidden shadow-md h-52">
                  <Image src={img.src} alt={`${img.label} – Hotel Inner Circle Hyderabad`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <p className="absolute bottom-4 left-4 right-4 text-white font-semibold text-sm leading-tight">{img.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── ACCOMMODATION ── */}
          <section className="mb-16" aria-labelledby="accommodation">
            <SectionTitle id="accommodation">Comfortable Luxury Stay at Hotel Inner Circle</SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-gray-600 leading-relaxed mb-7">
                  <Link href="/"><strong className="text-[#8b6a2b]">Hotel Inner Circle</strong></Link> offers comfortable and well-maintained accommodation designed for both leisure and business travelers. The hotel combines modern amenities with professional hospitality to ensure a relaxing stay experience.
                </p>
                <ul className="space-y-3.5">
                  {[
                    'Spacious and comfortable rooms',
                    'Air-conditioned accommodation',
                    'High-speed Wi-Fi connectivity',
                    'Clean and hygienic environment',
                    'Room service facilities',
                    'Peaceful and relaxing atmosphere',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <FaCheckCircle className="text-[#a17c36] flex-shrink-0" /><span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                <Image src="https://ik.imagekit.io/b7gayfw2v/Gallery/Rooms/18.Inner%20Circle%20Executive%20Room.jpg" alt="Luxury room at Hotel Inner Circle Hyderabad" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-4 left-4 text-white font-semibold text-sm bg-[#a17c36] px-3 py-1 rounded-full">Executive Room</span>
              </div>
            </div>
          </section>

          {/* ── ROOM GRID ── */}
          <section className="mb-16" aria-labelledby="room-types">
            <h3 id="room-types" className="text-xl font-serif font-semibold text-gray-800 mb-6 text-center">Room Categories</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {rooms.map((room, i) => (
                <div key={i} className="relative group rounded-2xl overflow-hidden shadow-md h-52">
                  <Image src={room.src} alt={`${room.label} – Hotel Inner Circle Hyderabad`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold text-sm">{room.label}</p>
                    <p className="text-[#e8c27d] text-xs mt-0.5">From {room.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link href="https://bookings.resavenue.com/resBooking/rooms?regCode=TZVG1203&roomSearchId=51cc932e10db47048a8e45b7a7ff1ee5&adult_1=2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 bg-[#a17c36] hover:bg-[#8b6a2b] text-white font-semibold rounded-full transition-colors duration-200 shadow-lg">
                Book a Room <BsArrowRightCircleFill />
              </Link>
            </div>
          </section>

          {/* ── EVENT TYPES ── */}
          <section className="mb-16" aria-labelledby="event-types">
            <SectionTitle id="event-types">Elegant Banquet Halls for Every Occasion</SectionTitle>
            <p className="text-gray-600 leading-relaxed mb-8">
              <Link href="/"><strong className="text-[#8b6a2b]">Hotel Inner Circle</strong></Link> provides banquet facilities suitable for different types of events and celebrations. Whether it is a corporate meeting, engagement ceremony, birthday celebration, or family gathering, the banquet spaces are designed to create a comfortable event experience.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {eventTypes.map((ev, i) => (
                <div key={i} className="flex flex-col items-center gap-3 p-5 bg-[#faf6ef] rounded-2xl border border-[#e7d7b6] hover:border-[#a17c36] hover:shadow-md transition-all duration-200 text-center">
                  <span className="w-12 h-12 rounded-full bg-white border border-[#e7d7b6] flex items-center justify-center text-[#a17c36] shadow-sm">{ev.icon}</span>
                  <span className="text-gray-700 font-medium text-sm leading-snug">{ev.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/banqueting-halls-&-private-dining" className="inline-flex items-center gap-2 px-8 py-3 bg-[#1a1a1a] hover:bg-[#a17c36] text-white font-semibold rounded-full transition-colors duration-200 shadow-lg">
                Explore Banquet Halls <BsArrowRightCircleFill />
              </Link>
            </div>
          </section>

          {/* ── LOCATION ── */}
          <section className="mb-16" aria-labelledby="location">
            <SectionTitle id="location">Ideal Location in Hyderabad</SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl">
                <Image src="https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/5.Inner%20Circle%20Reception%20Lobby.jpg" alt="Hotel Inner Circle reception lobby Hyderabad" fill className="object-cover" />
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed mb-7">
                  Location is an important factor when selecting a hotel for stay and events. <Link href="/"><strong className="text-[#8b6a2b]">Hotel Inner Circle</strong></Link> is conveniently located with easy access to major business centers, transportation facilities, shopping areas, and tourist attractions in Hyderabad.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { icon: <GiPathDistance />, text: 'Easy city connectivity' },
                    { icon: <FaMapMarkerAlt />, text: 'Convenient transportation access' },
                    { icon: <BsBuildings />, text: 'Nearby commercial areas' },
                    { icon: <MdRestaurant />, text: 'Close to shopping & dining' },
                    { icon: <MdLocationCity />, text: 'Accessible for outstation guests' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#faf6ef]">
                      <span className="text-[#a17c36] mt-0.5 flex-shrink-0">{item.icon}</span>
                      <span className="text-gray-700 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── BUSINESS & FAMILY ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <section className="p-8 rounded-2xl bg-[#1a1a1a] text-white" aria-labelledby="business">
              <div className="flex items-center gap-3 mb-5">
                <FaBriefcase className="text-[#e8c27d] text-2xl flex-shrink-0" />
                <h2 id="business" className="text-xl font-serif font-bold text-white">Perfect for Business Travelers</h2>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-5">
                Hyderabad is one of India&apos;s major business destinations. Hotel Inner Circle provides a business-friendly environment suitable for corporate travelers.
              </p>
              <ul className="space-y-3">
                {['Reliable Wi-Fi connectivity', 'Comfortable work-friendly rooms', 'Banquet halls for meetings & seminars', 'Professional customer service', 'Convenient location for business travel'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-200"><FaCheckCircle className="text-[#a17c36] flex-shrink-0" />{item}</li>
                ))}
              </ul>
            </section>

            <section className="p-8 rounded-2xl border-2 border-[#e7d7b6] bg-[#faf6ef]" aria-labelledby="family-stay">
              <div className="flex items-center gap-3 mb-5">
                <MdFamilyRestroom className="text-[#a17c36] text-3xl flex-shrink-0" />
                <h2 id="family-stay" className="text-xl font-serif font-bold text-gray-900">Family-Friendly Stay &amp; Events</h2>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Families visiting Hyderabad often look for hotels that offer comfort, safety, and event facilities for celebrations.
              </p>
              <ul className="space-y-3">
                {['Comfortable rooms', 'Safe and peaceful environment', 'Banquet facilities for family functions', 'Friendly hospitality', 'Convenient access to city attractions'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-700"><FaCheckCircle className="text-[#a17c36] flex-shrink-0" />{item}</li>
                ))}
              </ul>
            </section>
          </div>

          {/* ── DINING ── */}
          <section className="mb-16" aria-labelledby="dining">
            <SectionTitle id="dining">Dining and Hospitality Experience</SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3">
                <p className="text-gray-600 leading-relaxed mb-7">
                  A good hospitality experience includes quality dining and attentive service. <Link href="/"><strong className="text-[#8b6a2b]">Hotel Inner Circle</strong></Link> focuses on providing guests with professional hospitality and convenient dining options.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { icon: <MdRestaurant />, text: 'Fresh and hygienic meals' },
                    { icon: <MdOutlineStar />, text: 'Comfortable dining environment' },
                    { icon: <FaCheckCircle />, text: 'Variety of food choices' },
                    { icon: <BsBuildings />, text: 'In-house dining convenience' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#faf6ef]">
                      <span className="text-[#a17c36] mt-0.5 flex-shrink-0">{item.icon}</span>
                      <span className="text-gray-700 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-2 relative h-64 rounded-2xl overflow-hidden shadow-xl">
                <Image src="https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/10.Inner%20Circle%20In-fluence%20Banquet%20Hall.jpg" alt="Dining and hospitality at Hotel Inner Circle" fill className="object-cover" />
              </div>
            </div>
          </section>

          {/* ── TOURIST ATTRACTIONS ── */}
          <section className="mb-16" aria-labelledby="attractions">
            <SectionTitle id="attractions">Nearby Attractions in Hyderabad</SectionTitle>
            <p className="text-gray-600 leading-relaxed mb-8">
              Guests staying at <Link href="/"><strong className="text-[#8b6a2b]">Hotel Inner Circle</strong></Link> can conveniently visit some of Hyderabad&apos;s most popular attractions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {touristAttractions.map((place, i) => (
                <div key={i} className="relative rounded-2xl overflow-hidden shadow-md group h-48">
                  <Image src={place.img} alt={`${place.name} near Hotel Inner Circle Hyderabad`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-bold text-sm">{place.name}</p>
                    <p className="text-[#e8c27d] text-xs flex items-center gap-1 mt-0.5"><FaMapMarkerAlt className="text-[10px]" />{place.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHY CHOOSE GRID ── */}
          <section className="mb-16 p-8 md:p-12 rounded-3xl bg-[#faf6ef] border border-[#e7d7b6]" aria-labelledby="why-hotel">
            <h2 id="why-hotel" className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-3 text-center">Why Guests Prefer Hotel Inner Circle</h2>
            <p className="text-gray-500 text-center mb-8 max-w-xl mx-auto">
              Affordable luxury, professional hospitality, and banquet facilities all in one place.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: <MdOutlineStar />, label: 'Comfortable Luxury Stay', sub: 'Rooms from ₹4,499' },
                { icon: <FaBriefcase />, label: 'Professional Hospitality', sub: 'Attentive service' },
                { icon: <MdOutlineCelebration />, label: 'Banquet Hall Facilities', sub: 'All event types' },
                { icon: <FaMapMarkerAlt />, label: 'Convenient Location', sub: 'Somajiguda, Hyderabad' },
                { icon: <MdFamilyRestroom />, label: 'Family & Business Events', sub: 'Flexible venues' },
                { icon: <FaWifi />, label: 'Modern Amenities', sub: 'Wi-Fi & more' },
              ].map((card, i) => (
                <div key={i} className="p-5 bg-white rounded-2xl border border-[#e7d7b6] text-center hover:shadow-md hover:border-[#a17c36] transition-all duration-200">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#faf6ef] text-[#a17c36] text-xl mb-3">{card.icon}</span>
                  <p className="font-semibold text-gray-800 text-sm">{card.label}</p>
                  <p className="text-gray-400 text-xs mt-1">{card.sub}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CONCLUSION ── */}
          <section className="mb-10 max-w-3xl" aria-labelledby="conclusion">
            <SectionTitle id="conclusion">Conclusion</SectionTitle>
            <p className="text-gray-700 leading-relaxed mb-4">
              Finding the right hotel in Hyderabad for both luxury stay and banquet hall facilities can greatly improve the overall experience for travelers and event organizers. <Link href="/"><strong className="text-[#8b6a2b]">Hotel Inner Circle</strong></Link> combines comfortable accommodation, professional hospitality, convenient banquet facilities, and a central location to meet the needs of modern guests.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you are planning a business trip, family celebration, wedding event, or leisure stay, <Link href="/"><strong className="text-[#8b6a2b]">Hotel Inner Circle</strong></Link> offers comfort, convenience, and quality service in Hyderabad.
            </p>
          </section>
        </article>

        {/* ── BOOKING CTA ── */}
        <section className="relative overflow-hidden bg-[#1a1a1a] py-20 px-6">
          <div className="absolute inset-0 opacity-15 bg-cover bg-center" style={{ backgroundImage: 'url(https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/9.Inner%20Circle%20Influence.%20Banquet%20Hall.jpg)' }} />
          <div className="relative z-10 container mx-auto max-w-3xl text-center">
            <Image src="/sublogo.svg" width={180} height={36} alt="Hotel Inner Circle" className="mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Book Your Stay or Event Today</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Experience luxury comfort and professional banquet facilities at <Link href="/" className="text-[#e8c27d] font-semibold hover:underline">Hotel Inner Circle Hyderabad</Link>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://bookings.resavenue.com/resBooking/rooms?regCode=TZVG1203&roomSearchId=51cc932e10db47048a8e45b7a7ff1ee5&adult_1=2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-[#a17c36] hover:bg-[#e8c27d] hover:text-[#1a1a1a] text-white font-bold rounded-full transition-all duration-200 shadow-xl text-base">
                Reserve a Room <BsArrowRightCircleFill />
              </Link>
              <Link href="/banqueting-halls-&-private-dining" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 hover:border-[#e8c27d] hover:text-[#e8c27d] text-white font-semibold rounded-full transition-all duration-200 text-base">
                <MdOutlineCelebration className="text-lg" /> View Banquet Halls
              </Link>
              <Link href="/contact.php" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 hover:border-[#e8c27d] hover:text-[#e8c27d] text-white font-semibold rounded-full transition-all duration-200 text-base">
                <FaPhoneAlt className="text-sm" /> Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

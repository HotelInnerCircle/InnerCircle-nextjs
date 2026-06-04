import Image from 'next/image';
import Link from 'next/link';
import {
  FaMapMarkerAlt,
  FaWifi,
  FaCheckCircle,
  FaCalendarAlt,
  FaClock,
  FaPhoneAlt,
} from 'react-icons/fa';
import {
  MdLocalHospital,
  MdFamilyRestroom,
  MdOutlineStar,
  MdLocalPharmacy,
  MdDirectionsBus,
  MdRestaurant,
} from 'react-icons/md';
import { BsBuildings, BsArrowRightCircleFill } from 'react-icons/bs';

export const metadata = {
  title:
    'Best Hotels Near Top Hospitals in Somajiguda – Hotel Inner Circle | Hyderabad',
  description:
    'Looking for a hotel near hospitals in Somajiguda, Hyderabad? Hotel Inner Circle is close to Yashoda Hospitals, NIMS, Aster Prime, CARE Hospitals and more — ideal for patients and medical travelers.',
  keywords: [
    'hotel near yashoda hospital somajiguda',
    'hotel near hospital hyderabad',
    'hotels near nims hospital hyderabad',
    'accommodation near aster prime hospital hyderabad',
    'hotel near care hospital hyderabad',
    'medical travel hotel hyderabad',
    'hotel for patients hyderabad',
    'hotel near ainu hospital hyderabad',
    'best hotel near hospital somajiguda',
    'hotel inner circle near hospital',
    'patient accommodation hyderabad',
    'hotel near diagnostic centre hyderabad',
    'hotel near hospitals banjara hills',
    'comfortable hotel for medical travel hyderabad',
  ],
  alternates: {
    canonical:
      'https://hotelinnercircle.in/blog/best-hotels-near-hospitals-somajiguda-hyderabad',
  },
  openGraph: {
    title:
      'Best Hotels Near Top Hospitals in Somajiguda – Why Hotel Inner Circle is the Smart Choice',
    description:
      'Hotel Inner Circle in Somajiguda is the ideal accommodation for medical travelers — close to Yashoda, NIMS, Aster Prime, CARE Hospitals and more.',
    url: 'https://hotelinnercircle.in/blog/best-hotels-near-hospitals-somajiguda-hyderabad',
    siteName: 'Hotel Inner Circle',
    images: [
      {
        url: 'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/5.Inner%20Circle%20Reception%20Lobby.jpg',
        width: 1200,
        height: 630,
        alt: 'Hotel Inner Circle – Best Hotel Near Hospitals Somajiguda Hyderabad',
      },
    ],
    locale: 'en_IN',
    type: 'article',
    publishedTime: '2026-06-04T00:00:00.000Z',
    modifiedTime: '2026-06-04T00:00:00.000Z',
    authors: ['https://hotelinnercircle.in'],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Best Hotels Near Top Hospitals in Somajiguda – Hotel Inner Circle',
    description:
      'Hotel Inner Circle in Somajiguda is close to Yashoda, NIMS, Aster Prime, and CARE Hospitals — the smart choice for medical travelers in Hyderabad.',
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
    'Best Hotels Near Top Hospitals in Somajiguda – Why Hotel Inner Circle is the Smart Choice',
  description:
    'Hotel Inner Circle in Somajiguda is the ideal accommodation for patients, attendants, and medical travelers visiting Hyderabad.',
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
  datePublished: '2026-06-04',
  dateModified: '2026-06-04',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id':
      'https://hotelinnercircle.in/blog/best-hotels-near-hospitals-somajiguda-hyderabad',
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

const nearbyHospitals = [
  {
    name: 'Yashoda Hospitals',
    desc: 'Best Hospital in Somajiguda',
    img: 'https://ik.imagekit.io/b7gayfw2v/Gallery/Rooms/17.Inner%20Circle%20Standard%20Room.jpg',
  },
  {
    name: 'NIMS Hospital',
    desc: 'Nizams Institute of Medical Sciences',
    img: 'https://ik.imagekit.io/b7gayfw2v/Gallery/Rooms/18.Inner%20Circle%20Executive%20Room.jpg',
  },
  {
    name: 'Aster Prime Hospital',
    desc: 'Multi-specialty care',
    img: 'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/9.Inner%20Circle%20Influence.%20Banquet%20Hall.jpg',
  },
  {
    name: 'CARE Hospitals',
    desc: 'Advanced healthcare',
    img: 'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/10.Inner%20Circle%20In-fluence%20Banquet%20Hall.jpg',
  },
  {
    name: 'Asian Institute of Nephrology & Urology',
    desc: 'Specialist care (AINU)',
    img: 'https://ik.imagekit.io/b7gayfw2v/Gallery/Rooms/17.Inner%20Circle%20Standard%20Room.jpg',
  },
];

const guestAmenities = [
  'Spacious and clean rooms',
  'Comfortable bedding',
  'Air-conditioned accommodation',
  'Free high-speed Wi-Fi',
  'Room service',
  'Hygienic surroundings',
  'Friendly 24/7 hospitality',
];

const nearbyServices = [
  { icon: <MdLocalPharmacy className="text-2xl" />, text: 'Medical stores & pharmacies' },
  { icon: <MdLocalHospital className="text-2xl" />, text: 'Diagnostic laboratories' },
  { icon: <MdRestaurant className="text-2xl" />, text: 'Restaurants and cafes' },
  { icon: <BsBuildings className="text-2xl" />, text: 'Shopping centers' },
  { icon: <MdDirectionsBus className="text-2xl" />, text: 'Public transport options' },
  { icon: <MdOutlineStar className="text-2xl" />, text: 'ATMs & banking services' },
];

const whyChoose = [
  'Close to top hospitals in Somajiguda and Banjara Hills',
  'Comfortable and hygienic rooms',
  'Easy transportation access',
  'Affordable accommodation options',
  'Family-friendly environment',
  'Central Hyderabad location',
  'Convenient for long and short medical stays',
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

export default function HospitalHotelBlog() {
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
            alt="Hotel Inner Circle – Best Hotel Near Hospitals in Somajiguda Hyderabad"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/85" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <span className="inline-block px-5 py-1.5 mb-5 text-xs font-bold tracking-widest uppercase bg-[#a17c36] text-white rounded-full shadow-lg">
              Medical Travel Guide
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-serif font-bold text-white leading-tight max-w-4xl mb-3">
              Best Hotels Near Top Hospitals in Somajiguda
            </h1>
            <p className="text-[#e8c27d] text-xl md:text-2xl font-medium mb-6 max-w-2xl">
              Why Hotel Inner Circle is the Smart Choice for Medical Travelers
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/80 text-sm">
              <span className="flex items-center gap-2">
                <FaCalendarAlt className="text-[#e8c27d]" /> June 4, 2026
              </span>
              <span className="hidden sm:block w-px h-4 bg-white/30" />
              <span className="flex items-center gap-2">
                <FaClock className="text-[#e8c27d]" /> 6 min read
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
                <Link href="/" className="hover:text-[#a17c36] transition" itemProp="item">
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
                <Link href="/blog" className="hover:text-[#a17c36] transition" itemProp="item">
                  <span itemProp="name">Blog</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden>/</li>
              <li className="text-[#a17c36] font-medium" aria-current="page">
                Best Hotels Near Hospitals Somajiguda
              </li>
            </ol>
          </div>
        </nav>

        {/* ── ARTICLE ── */}
        <article className="container mx-auto max-w-5xl px-6 py-16">

          {/* Intro */}
          <div className="mb-16 max-w-3xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-5">
              When traveling to Hyderabad for medical treatment, doctor consultations,
              or to support a loved one, choosing the right hotel becomes extremely
              important. Staying close to major hospitals helps reduce travel time,
              stress, and transportation costs while ensuring comfort during your stay.
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
              is one of the most convenient accommodation choices for patients,
              attendants, and medical travelers visiting Hyderabad. Its central
              location offers quick access to some of the city&apos;s leading hospitals.
            </p>
          </div>

          {/* Nearby Hospitals */}
          <section className="mb-16" aria-labelledby="nearby-hospitals">
            <SectionTitle id="nearby-hospitals">
              Stay Close to Hyderabad&apos;s Leading Hospitals
            </SectionTitle>
            <p className="text-gray-600 leading-relaxed mb-8">
              One of the biggest advantages of booking{' '}
              <Link href="/">
                <strong className="text-[#8b6a2b]">Hotel Inner Circle</strong>
              </Link>{' '}
              is its proximity to renowned healthcare institutions, making it an ideal
              choice for patients who require frequent hospital visits and families
              looking for comfortable nearby accommodation.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-8">
              {nearbyHospitals.map((hospital, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl overflow-hidden shadow-md group h-48"
                >
                  <Image
                    src={hospital.img}
                    alt={`${hospital.name} near Hotel Inner Circle Somajiguda`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-bold text-sm leading-tight">{hospital.name}</p>
                    <p className="text-[#e8c27d] text-xs flex items-center gap-1 mt-1">
                      <MdLocalHospital className="text-[11px]" />
                      {hospital.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Convenient Location */}
          <section className="mb-16" aria-labelledby="convenient-location">
            <SectionTitle id="convenient-location">
              Convenient Location Saves Time
            </SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Medical appointments often require early check-ins, follow-up
                  consultations, diagnostic tests, and emergency visits. Staying near
                  major hospitals helps eliminate long travel times and allows guests
                  to focus on what matters most.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Situated on Raj Bhavan Road in{' '}
                  <Link href="/" className="text-[#8b6a2b] font-semibold hover:underline">
                    Somajiguda
                  </Link>
                  , the hotel offers excellent connectivity to Hyderabad&apos;s
                  healthcare, business, and commercial districts.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { icon: <MdLocalHospital />, text: 'Quick access to hospitals' },
                    { icon: <FaMapMarkerAlt />, text: 'Raj Bhavan Road, Somajiguda' },
                    { icon: <MdDirectionsBus />, text: 'Easy transportation links' },
                    { icon: <BsBuildings />, text: 'Connected to all key areas' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-[#faf6ef] border border-[#e7d7b6]"
                    >
                      <span className="text-[#a17c36] mt-0.5 flex-shrink-0">{item.icon}</span>
                      <span className="text-gray-700 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://ik.imagekit.io/b7gayfw2v/Gallery/Rooms/18.Inner%20Circle%20Executive%20Room.jpg"
                  alt="Comfortable room at Hotel Inner Circle for medical travelers"
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

          {/* Comfortable Stay */}
          <section className="mb-16" aria-labelledby="comfortable-stay">
            <SectionTitle id="comfortable-stay">
              Comfortable Stay for Patients and Families
            </SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl order-last lg:order-first">
                <Image
                  src="https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/9.Inner%20Circle%20Influence.%20Banquet%20Hall.jpg"
                  alt="Hotel Inner Circle comfortable accommodation for medical travelers"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed mb-7">
                  Medical travel can be physically and emotionally demanding.{' '}
                  <Link href="/">
                    <strong className="text-[#8b6a2b]">Hotel Inner Circle</strong>
                  </Link>{' '}
                  provides a peaceful and comfortable environment designed to make
                  your stay easier. Whether you&apos;re staying for a few days or an
                  extended medical visit, the hotel ensures a relaxing experience.
                </p>
                <ul className="space-y-3.5">
                  {guestAmenities.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <FaCheckCircle className="text-[#a17c36] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Essential Services */}
          <section className="mb-16" aria-labelledby="essential-services">
            <SectionTitle id="essential-services">
              Easy Access to Essential Services
            </SectionTitle>
            <p className="text-gray-600 leading-relaxed mb-8">
              Patients and attendants often need quick access to pharmacies, diagnostic
              centers, restaurants, ATMs, and transportation services. The hotel&apos;s
              central Somajiguda location places guests close to everything they need.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {nearbyServices.map((item, i) => (
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

          {/* Affordable & Outstation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <section
              className="p-8 rounded-2xl bg-[#1a1a1a] text-white"
              aria-labelledby="affordable"
            >
              <div className="flex items-center gap-3 mb-5">
                <MdOutlineStar className="text-[#e8c27d] text-3xl flex-shrink-0" />
                <h2 id="affordable" className="text-xl font-serif font-bold text-white">
                  Affordable Without Compromising Comfort
                </h2>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-5">
                Medical expenses can quickly add up.{' '}
                <Link href="/" className="text-[#e8c27d] font-semibold">
                  Hotel Inner Circle
                </Link>{' '}
                offers comfortable accommodation at competitive prices — a practical
                option for families seeking value and convenience during medical visits.
              </p>
              <ul className="space-y-3">
                {['Competitive room rates', 'Multiple room categories', 'Value for extended stays', 'No compromise on quality'].map(
                  (item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-200">
                      <FaCheckCircle className="text-[#a17c36] flex-shrink-0" />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </section>
            <section
              className="p-8 rounded-2xl border-2 border-[#e7d7b6] bg-[#faf6ef]"
              aria-labelledby="outstation"
            >
              <div className="flex items-center gap-3 mb-5">
                <MdFamilyRestroom className="text-[#a17c36] text-3xl flex-shrink-0" />
                <h2 id="outstation" className="text-xl font-serif font-bold text-gray-900">
                  Ideal for Outstation Medical Travelers
                </h2>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Patients visiting Hyderabad from other cities need reliable
                accommodation near treatment centers.{' '}
                <Link href="/" className="text-[#8b6a2b] font-semibold">
                  Hotel Inner Circle
                </Link>{' '}
                provides a safe and welcoming environment for both patients and
                accompanying family members.
              </p>
              <ul className="space-y-3">
                {['Preferred by medical travelers', 'Safe & welcoming environment', 'Suitable for long stays', 'Family members accommodated'].map(
                  (item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                      <FaCheckCircle className="text-[#a17c36] flex-shrink-0" />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </section>
          </div>

          {/* Why Choose */}
          <section
            className="mb-16 p-8 md:p-12 rounded-3xl bg-[#faf6ef] border border-[#e7d7b6]"
            aria-labelledby="why-choose"
          >
            <h2
              id="why-choose"
              className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-3 text-center"
            >
              Why Choose Hotel Inner Circle Near Hyderabad Hospitals?
            </h2>
            <p className="text-gray-500 text-center mb-8 max-w-xl mx-auto">
              The right accommodation makes medical travel less stressful. Here&apos;s
              why patients and families trust Hotel Inner Circle.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
              {whyChoose.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#e7d7b6]">
                  <FaCheckCircle className="text-[#a17c36] flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-10 max-w-3xl" aria-labelledby="conclusion">
            <SectionTitle id="conclusion">Conclusion</SectionTitle>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you&apos;re looking for a comfortable hotel near Hyderabad&apos;s leading
              hospitals,{' '}
              <Link href="/">
                <strong className="text-[#8b6a2b]">Hotel Inner Circle</strong>
              </Link>{' '}
              offers the perfect combination of convenience, comfort, and
              accessibility. Whether you&apos;re visiting for treatment, consultations,
              or to support a family member, our central{' '}
              <Link href="/" className="text-[#8b6a2b] font-semibold hover:underline">
                Somajiguda
              </Link>{' '}
              location ensures you&apos;re always close to the care you need.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Plan your stay today and enjoy stress-free accommodation near the
              city&apos;s top healthcare centers.
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
              Stay comfortable and close to Hyderabad&apos;s top hospitals at{' '}
              <Link href="/" className="text-[#e8c27d] font-semibold hover:underline">
                Hotel Inner Circle, Somajiguda
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

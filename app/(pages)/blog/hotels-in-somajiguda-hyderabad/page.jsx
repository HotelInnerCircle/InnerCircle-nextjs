import Image from 'next/image';
import Link from 'next/link';
import {
  FaMapMarkerAlt,
  FaWifi,
  FaBriefcase,
  FaCheckCircle,
  FaShoppingBag,
  FaCalendarAlt,
  FaClock,
  FaPhoneAlt,
} from 'react-icons/fa';
import {
  MdLocalHospital,
  MdLocationCity,
  MdRestaurant,
  MdFamilyRestroom,
  MdOutlineStar,
} from 'react-icons/md';
import { BsBuildings, BsArrowRightCircleFill } from 'react-icons/bs';
import { GiPathDistance } from 'react-icons/gi';

export const metadata = {
  title:
    'Hotels in Somajiguda Hyderabad – Comfortable Stay Near Key Locations | Hotel Inner Circle',
  description:
    'Looking for hotels in Somajiguda Hyderabad? Hotel Inner Circle offers comfortable rooms, premium amenities, and excellent connectivity to business districts, tourist spots, and shopping areas.',
  keywords: [
    'hotels in somajiguda hyderabad',
    'hotel in somajiguda',
    'budget hotel somajiguda',
    'comfortable stay somajiguda',
    'hotel near punjagutta hyderabad',
    'hotel near banjara hills hyderabad',
    'business hotel hyderabad',
    'hotel inner circle somajiguda',
    'affordable hotel hyderabad',
    'hotels near ameerpet hyderabad',
    'hotel near begumpet hyderabad',
    'family hotel hyderabad',
    'hotel near hussain sagar',
    'somajiguda accommodation',
  ],
  alternates: {
    canonical: 'https://hotelinnercircle.in/blog/hotels-in-somajiguda-hyderabad',
  },
  openGraph: {
    title: 'Hotels in Somajiguda Hyderabad – Comfortable Stay Near Key Locations',
    description:
      'Hotel Inner Circle in Somajiguda offers comfortable rooms, professional hospitality, and excellent connectivity. Ideal for business and leisure travelers.',
    url: 'https://hotelinnercircle.in/blog/hotels-in-somajiguda-hyderabad',
    siteName: 'Hotel Inner Circle',
    images: [
      {
        url: 'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/5.Inner%20Circle%20Reception%20Lobby.jpg',
        width: 1200,
        height: 630,
        alt: 'Hotels in Somajiguda Hyderabad - Hotel Inner Circle',
      },
    ],
    locale: 'en_IN',
    type: 'article',
    publishedTime: '2025-01-15T00:00:00.000Z',
    modifiedTime: '2025-06-01T00:00:00.000Z',
    authors: ['https://hotelinnercircle.in'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotels in Somajiguda Hyderabad – Comfortable Stay Near Key Locations',
    description:
      'Hotel Inner Circle in Somajiguda offers comfortable rooms, professional hospitality, and excellent connectivity.',
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
  headline: 'Hotels in Somajiguda Hyderabad – Comfortable Stay Near Key Locations',
  description:
    'Hotel Inner Circle offers comfortable accommodation, professional hospitality, and affordable pricing in Somajiguda, Hyderabad.',
  image:
    'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/5.Inner%20Circle%20Reception%20Lobby.jpg',
  author: { '@type': 'Organization', name: 'Hotel Inner Circle', url: 'https://hotelinnercircle.in' },
  publisher: {
    '@type': 'Organization',
    name: 'Hotel Inner Circle',
    logo: { '@type': 'ImageObject', url: 'https://hotelinnercircle.in/logos/HIC-white-logo.png' },
  },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://hotelinnercircle.in/blog/hotels-in-somajiguda-hyderabad',
  },
};

const localBusinessLd = {
  '@context': 'https://schema.org',
  '@type': 'Hotel',
  name: 'Hotel Inner Circle',
  image: 'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/5.Inner%20Circle%20Reception%20Lobby.jpg',
  url: 'https://hotelinnercircle.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Somajiguda',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500082',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 17.4302, longitude: 78.4552 },
  priceRange: '₹₹',
  starRating: { '@type': 'Rating', ratingValue: '4' },
};

const rooms = [
  { src: '/Roomimages/StandardRoom/19.Inner Circle Exe Room.jpg', label: 'Standard Room', price: '₹4,499' },
  { src: '/Roomimages/DeluxeRoom/20.Inner_Circle_Deluxe.Room.jpg', label: 'Deluxe Room', price: '₹5,699' },
  { src: '/Roomimages/ExecutiveRoom/17.Inner Circle Standard Room.jpg', label: 'Executive Room', price: '₹5,099' },
  { src: '/Roomimages/DeluxeSuite/22.Inner Circle Delux Suit Room sit-out.JPG', label: 'Deluxe Suite', price: '₹7,399' },
];

const nearbyLocations = [
  'Banjara Hills', 'Punjagutta', 'Ameerpet', 'Begumpet',
  'Hyderabad Business Districts', 'Shopping Centers & Entertainment Zones',
];

const touristAttractions = [
  { name: 'Charminar', desc: '14 km away', img: 'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/9.Inner%20Circle%20Influence.%20Banquet%20Hall.jpg' },
  { name: 'Hussain Sagar Lake', desc: '3 km away', img: 'https://ik.imagekit.io/b7gayfw2v/Gallery/Rooms/17.Inner%20Circle%20Standard%20Room.jpg' },
  { name: 'Golconda Fort', desc: '12 km away', img: 'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/10.Inner%20Circle%20In-fluence%20Banquet%20Hall.jpg' },
  { name: 'Salar Jung Museum', desc: '13 km away', img: 'https://ik.imagekit.io/b7gayfw2v/Gallery/Rooms/18.Inner%20Circle%20Executive%20Room.jpg' },
  { name: 'Chowmahalla Palace', desc: '14 km away', img: 'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/9.Inner%20Circle%20Influence.%20Banquet%20Hall.jpg' },
  { name: 'Birla Mandir', desc: '2 km away', img: 'https://ik.imagekit.io/b7gayfw2v/Gallery/Rooms/17.Inner%20Circle%20Standard%20Room.jpg' },
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

export default function SomajigudaHotelBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }} />

      <main className="bg-white">
        {/* ── HERO ── */}
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
          <Image
            src="https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/5.Inner%20Circle%20Reception%20Lobby.jpg"
            alt="Hotel Inner Circle lobby – Hotels in Somajiguda Hyderabad"
            fill className="object-cover" priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/85" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <span className="inline-block px-5 py-1.5 mb-5 text-xs font-bold tracking-widest uppercase bg-[#a17c36] text-white rounded-full shadow-lg">
              Travel Guide
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-serif font-bold text-white leading-tight max-w-4xl mb-3">
              Hotels in Somajiguda Hyderabad
            </h1>
            <p className="text-[#e8c27d] text-xl md:text-2xl font-medium mb-6 max-w-2xl">
              Comfortable Stay Near Key Locations
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/80 text-sm">
              <span className="flex items-center gap-2"><FaCalendarAlt className="text-[#e8c27d]" /> May 2025</span>
              <span className="hidden sm:block w-px h-4 bg-white/30" />
              <span className="flex items-center gap-2"><FaClock className="text-[#e8c27d]" /> 8 min read</span>
              <span className="hidden sm:block w-px h-4 bg-white/30" />
              <span className="flex items-center gap-2"><FaMapMarkerAlt className="text-[#e8c27d]" /> Somajiguda, Hyderabad</span>
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
              <li className="text-[#a17c36] font-medium" aria-current="page">Hotels in Somajiguda Hyderabad</li>
            </ol>
          </div>
        </nav>

        {/* ── ARTICLE ── */}
        <article className="container mx-auto max-w-5xl px-6 py-16">
          <div className="mb-16 max-w-3xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-5">
              <Link href="/" className="text-[#8b6a2b] font-semibold hover:underline">Somajiguda</Link> is one of the most well-connected and popular areas in Hyderabad, known for its commercial centers, healthcare facilities, shopping destinations, and easy transportation access. Whether you are visiting the city for business, tourism, medical appointments, or family travel, choosing the right hotel in <Link href="/" className="text-[#8b6a2b] font-semibold hover:underline">Somajiguda</Link> can make your stay more convenient and comfortable.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <Link href="/"><strong className="text-[#8b6a2b]">Hotel Inner Circle</strong></Link> offers a comfortable and affordable stay experience in a prime location, making it an ideal choice for travelers looking for hotels in Somajiguda Hyderabad.
            </p>
          </div>

          <section className="mb-16" aria-labelledby="why-somajiguda">
            <SectionTitle id="why-somajiguda">Why Choose Somajiguda for Your Stay?</SectionTitle>
            <p className="text-gray-600 leading-relaxed mb-8">
              Somajiguda is centrally located and provides excellent connectivity to important parts of Hyderabad. The area is preferred by both business and leisure travelers because of its accessibility and nearby facilities.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: <BsBuildings className="text-2xl" />, text: 'Easy access to business districts' },
                { icon: <FaShoppingBag className="text-xl" />, text: 'Close to shopping malls & restaurants' },
                { icon: <GiPathDistance className="text-2xl" />, text: 'Good transportation connectivity' },
                { icon: <MdLocalHospital className="text-2xl" />, text: 'Nearby hospitals & healthcare centers' },
                { icon: <MdLocationCity className="text-2xl" />, text: 'Convenient travel to tourist attractions' },
                { icon: <MdOutlineStar className="text-2xl" />, text: 'Peaceful & well-developed surroundings' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-[#faf6ef] rounded-2xl border border-[#e7d7b6] hover:border-[#a17c36] hover:shadow-md transition-all duration-200">
                  <span className="text-[#a17c36] flex-shrink-0">{item.icon}</span>
                  <span className="text-gray-700 font-medium text-sm leading-snug">{item.text}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16" aria-labelledby="accommodation">
            <SectionTitle id="accommodation">Comfortable Accommodation at Hotel Inner Circle</SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-gray-600 leading-relaxed mb-7">
                  <Link href="/"><strong className="text-[#8b6a2b]">Hotel Inner Circle</strong></Link> offers clean, spacious, and well-appointed rooms designed to provide a comfortable and relaxing stay for modern travelers. Whether you are visiting for business or leisure, guests can enjoy a peaceful ambiance along with essential amenities and warm hospitality.
                </p>
                <p className="text-gray-600 leading-relaxed mb-5">Choose from a range of thoughtfully designed accommodations:</p>
                <ul className="space-y-2 mb-6 text-gray-700">
                  <li><Link href="/rooms.php"><strong className="text-[#8b6a2b]">Standard Rooms</strong></Link> – Cozy and comfortable rooms ideal for short stays and budget-friendly travel.</li>
                  <li><Link href="/rooms.php"><strong className="text-[#8b6a2b]">Deluxe Rooms</strong></Link> – Stylish interiors with enhanced comfort and modern amenities for a pleasant experience.</li>
                  <li><Link href="/rooms.php"><strong className="text-[#8b6a2b]">Executive Rooms</strong></Link> – Spacious rooms tailored for business travelers seeking convenience and functionality.</li>
                  <li><Link href="/rooms.php"><strong className="text-[#8b6a2b]">Deluxe Suite Rooms</strong></Link> – Premium suites offering luxury, extra space, and an elevated stay experience for families and corporate guests.</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mb-7">At <Link href="/"><strong className="text-[#8b6a2b]">Hotel Inner Circle</strong></Link>, every room is crafted to ensure comfort, convenience, and a memorable stay in the heart of the city.</p>
                <ul className="space-y-3.5">
                  {['Comfortable bedding', 'Air-conditioned rooms', 'High-speed Wi-Fi', 'Spacious interiors', 'Room service facilities', 'Clean and hygienic environment'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <FaCheckCircle className="text-[#a17c36] flex-shrink-0" /><span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                <Image src="https://ik.imagekit.io/b7gayfw2v/Gallery/Rooms/18.Inner%20Circle%20Executive%20Room.jpg" alt="Comfortable executive room at Hotel Inner Circle Somajiguda" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-4 left-4 text-white font-semibold text-sm bg-[#a17c36] px-3 py-1 rounded-full">Executive Room</span>
              </div>
            </div>
          </section>

          <section className="mb-16" aria-labelledby="room-types">
            <h3 id="room-types" className="text-xl font-serif font-semibold text-gray-800 mb-6 text-center">Explore Our Room Categories</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {rooms.map((room, i) => (
                <div key={i} className="relative group rounded-2xl overflow-hidden shadow-md h-52">
                  <Image src={room.src} alt={`${room.label} – Hotel Inner Circle Somajiguda`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
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

          <section className="mb-16" aria-labelledby="business-travel">
            <SectionTitle id="business-travel">Ideal for Business Travelers</SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3">
                <p className="text-gray-600 leading-relaxed mb-7">
                  <Link href="/" className="text-[#8b6a2b] font-semibold hover:underline">Somajiguda</Link> is close to many commercial and corporate areas in Hyderabad, making it a preferred location for business travelers. <Link href="/"><strong className="text-[#8b6a2b]">Hotel Inner Circle</strong></Link> offers a professional and comfortable environment suitable for work-related stays.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { icon: <BsBuildings />, text: 'Access to offices & business centers' },
                    { icon: <FaWifi />, text: 'Reliable Wi-Fi connectivity' },
                    { icon: <FaBriefcase />, text: 'Comfortable work-friendly rooms' },
                    { icon: <GiPathDistance />, text: 'Easy transportation access' },
                    { icon: <MdOutlineStar />, text: 'Peaceful environment for productivity' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#faf6ef]">
                      <span className="text-[#a17c36] mt-0.5 flex-shrink-0">{item.icon}</span>
                      <span className="text-gray-700 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-2 relative h-72 rounded-2xl overflow-hidden shadow-xl">
                <Image src="https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/10.Inner%20Circle%20In-fluence%20Banquet%20Hall.jpg" alt="Business conference hall at Hotel Inner Circle" fill className="object-cover" />
              </div>
            </div>
          </section>

          <section className="mb-16" aria-labelledby="nearby-locations">
            <SectionTitle id="nearby-locations">Convenient Access to Major Locations</SectionTitle>
            <p className="text-gray-600 leading-relaxed mb-8">
              One of the biggest advantages of staying in Somajiguda is the excellent connectivity to important locations across Hyderabad.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {nearbyLocations.map((loc, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-[#e7d7b6] bg-white hover:bg-[#faf6ef] hover:border-[#a17c36] transition-all duration-200">
                  <FaMapMarkerAlt className="text-[#F54A00] flex-shrink-0 text-lg" />
                  <span className="text-gray-800 font-medium text-sm">{loc}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <section className="p-8 rounded-2xl bg-[#1a1a1a] text-white" aria-labelledby="dining">
              <div className="flex items-center gap-3 mb-5">
                <MdRestaurant className="text-[#e8c27d] text-3xl flex-shrink-0" />
                <h2 id="dining" className="text-xl font-serif font-bold text-white">Dining & Food Convenience</h2>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-5">Guests can enjoy convenient dining options and easy access to nearby restaurants and cafés. Explore Hyderabad&apos;s famous cuisine during your stay.</p>
              <ul className="space-y-3">
                {['Fresh and hygienic food', 'Comfortable dining environment', 'Nearby restaurants and food outlets', 'Variety of meal choices'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-200"><FaCheckCircle className="text-[#a17c36] flex-shrink-0" />{item}</li>
                ))}
              </ul>
            </section>
            <section className="p-8 rounded-2xl border-2 border-[#e7d7b6] bg-[#faf6ef]" aria-labelledby="family">
              <div className="flex items-center gap-3 mb-5">
                <MdFamilyRestroom className="text-[#a17c36] text-3xl flex-shrink-0" />
                <h2 id="family" className="text-xl font-serif font-bold text-gray-900">Suitable for Family Travelers</h2>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">Families visiting Hyderabad prefer centrally located areas for convenience and safety.</p>
              <ul className="space-y-3">
                {['Safe and peaceful environment', 'Spacious rooms for families', 'Convenient access to attractions', 'Friendly & attentive hospitality'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-700"><FaCheckCircle className="text-[#a17c36] flex-shrink-0" />{item}</li>
                ))}
              </ul>
            </section>
          </div>

          <section className="mb-16" aria-labelledby="attractions">
            <SectionTitle id="attractions">Nearby Tourist Attractions</SectionTitle>
            <p className="text-gray-600 leading-relaxed mb-8">
              Somajiguda&apos;s central location makes it easy to visit many popular tourist destinations in Hyderabad.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {touristAttractions.map((place, i) => (
                <div key={i} className="relative rounded-2xl overflow-hidden shadow-md group h-48">
                  <Image src={place.img} alt={`${place.name} near Hotel Inner Circle`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-bold text-sm">{place.name}</p>
                    <p className="text-[#e8c27d] text-xs flex items-center gap-1 mt-0.5"><FaMapMarkerAlt className="text-[10px]" />{place.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16" aria-labelledby="services">
            <SectionTitle id="services">Professional Hospitality and Service</SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl">
                <Image src="https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/9.Inner%20Circle%20Influence.%20Banquet%20Hall.jpg" alt="Professional hospitality at Hotel Inner Circle Hyderabad" fill className="object-cover" />
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed mb-7">
                  <Link href="/"><strong className="text-[#8b6a2b]">Hotel Inner Circle</strong></Link> is known for its professional hospitality and customer-focused services. The staff ensures guests receive prompt assistance throughout their stay.
                </p>
                <ul className="space-y-4">
                  {['Front desk assistance', 'Housekeeping services', 'Room service', 'Travel support', 'Quick check-in and check-out'].map((s, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <span className="w-8 h-8 rounded-full bg-[#a17c36] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                      <span className="text-gray-700 font-medium">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16 p-8 md:p-12 rounded-3xl bg-[#faf6ef] border border-[#e7d7b6]" aria-labelledby="why-hotel">
            <h2 id="why-hotel" className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-3 text-center">Affordable Stay in Somajiguda Hyderabad</h2>
            <p className="text-gray-500 text-center mb-8 max-w-xl mx-auto"><Link href="/"><strong className="text-[#8b6a2b]">Hotel Inner Circle</strong></Link> offers excellent value while maintaining quality service and comfortable accommodation.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: <FaMapMarkerAlt />, label: 'Prime Location', sub: 'Somajiguda, Hyderabad' },
                { icon: <MdOutlineStar />, label: 'Comfortable Rooms', sub: 'Spacious & clean' },
                { icon: <FaBriefcase />, label: 'Professional Service', sub: 'Friendly staff' },
                { icon: <BsBuildings />, label: 'City Connectivity', sub: 'Easy access everywhere' },
                { icon: <MdFamilyRestroom />, label: 'Family Friendly', sub: 'Safe & peaceful' },
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

          <section className="mb-10 max-w-3xl" aria-labelledby="conclusion">
            <SectionTitle id="conclusion">Conclusion</SectionTitle>
            <p className="text-gray-700 leading-relaxed mb-4">
              <Link href="/" className="text-[#8b6a2b] font-semibold hover:underline">Somajiguda</Link> is one of the best locations to stay in Hyderabad due to its connectivity, convenience, and accessibility to major city attractions. <Link href="/"><strong className="text-[#8b6a2b]">Hotel Inner Circle</strong></Link> offers comfortable accommodation, professional hospitality, and affordable pricing.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you are traveling for business, tourism, medical visits, or family trips, <Link href="/"><strong className="text-[#8b6a2b]">Hotel Inner Circle</strong></Link> provides a relaxing and convenient stay experience in <Link href="/" className="text-[#8b6a2b] font-semibold hover:underline">Somajiguda, Hyderabad</Link>.
            </p>
          </section>
        </article>

        {/* ── BOOKING CTA ── */}
        <section className="relative overflow-hidden bg-[#1a1a1a] py-20 px-6">
          <div className="absolute inset-0 opacity-15 bg-cover bg-center" style={{ backgroundImage: 'url(https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/5.Inner%20Circle%20Reception%20Lobby.jpg)' }} />
          <div className="relative z-10 container mx-auto max-w-3xl text-center">
            <Image src="/sublogo.svg" width={180} height={36} alt="Hotel Inner Circle" className="mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Book Your Stay Today</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto leading-relaxed">Experience comfort, convenience, and quality hospitality at <Link href="/" className="text-[#e8c27d] font-semibold hover:underline">Hotel Inner Circle, Somajiguda Hyderabad</Link>.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://bookings.resavenue.com/resBooking/rooms?regCode=TZVG1203&roomSearchId=51cc932e10db47048a8e45b7a7ff1ee5&adult_1=2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-[#a17c36] hover:bg-[#e8c27d] hover:text-[#1a1a1a] text-white font-bold rounded-full transition-all duration-200 shadow-xl text-base">
                Reserve a Room <BsArrowRightCircleFill />
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

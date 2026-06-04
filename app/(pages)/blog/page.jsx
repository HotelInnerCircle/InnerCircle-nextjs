import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaArrowRight } from 'react-icons/fa';

export const metadata = {
  title: 'Hotel Blog – Travel Tips & Guides for Hyderabad | Hotel Inner Circle',
  description:
    'Read hotel guides, travel tips, and local insights for your perfect stay in Hyderabad. Explore articles about hotels in Somajiguda, banquet halls, and more from Hotel Inner Circle.',
  keywords: [
    'hotel inner circle blog',
    'hyderabad hotel guide',
    'hotels in somajiguda hyderabad',
    'best hotels hyderabad',
    'banquet hall hyderabad',
    'travel tips hyderabad',
    'hotel tips hyderabad',
  ],
  alternates: {
    canonical: 'https://hotelinnercircle.in/blog',
  },
  openGraph: {
    title: 'Hotel Blog – Travel Tips & Guides for Hyderabad | Hotel Inner Circle',
    description:
      'Explore hotel guides and travel tips for Hyderabad from Hotel Inner Circle.',
    url: 'https://hotelinnercircle.in/blog',
    siteName: 'Hotel Inner Circle',
    images: [
      {
        url: 'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/5.Inner%20Circle%20Reception%20Lobby.jpg',
        width: 1200,
        height: 630,
        alt: 'Hotel Inner Circle Blog',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Blog – Travel Tips & Guides for Hyderabad | Hotel Inner Circle",
    description:
      "Read hotel guides, travel tips, and local insights for your perfect stay in Hyderabad from Hotel Inner Circle.",
    images: [
      "https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/5.Inner%20Circle%20Reception%20Lobby.jpg",
    ],
  },
  robots: { index: true, follow: true },
};

const posts = [
  {
    slug: '/blog/best-hotels-near-hospitals-somajiguda-hyderabad',
    tag: 'Medical Travel',
    title: 'Best Hotels Near Top Hospitals in Somajiguda – Why Hotel Inner Circle is the Smart Choice',
    excerpt:
      'Traveling to Hyderabad for medical treatment? Hotel Inner Circle in Somajiguda is close to Yashoda Hospitals, NIMS, Aster Prime, CARE Hospitals and more — ideal for patients and families.',
    img: 'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/5.Inner%20Circle%20Reception%20Lobby.jpg',
    date: 'June 4, 2026',
    readTime: '6 min read',
    location: 'Somajiguda, Hyderabad',
    highlights: [
      'Near Yashoda & NIMS Hospitals',
      'Ideal for medical travelers',
      'Affordable & comfortable rooms',
      'Family-friendly environment',
    ],
  },
  {
    slug: '/blog/travel-smarter-benefits-of-booking-hotel-inner-circle',
    tag: 'Travel Guide',
    title: 'Travel Smarter: Benefits of Booking a Stay at Hotel Inner Circle in Somajiguda',
    excerpt:
      "Discover why Hotel Inner Circle in Somajiguda is the smart choice for travelers. Prime location on Raj Bhavan Road, comfortable rooms, business facilities, in-house dining, and easy access to Hyderabad's top attractions.",
    img: 'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/5.Inner%20Circle%20Reception%20Lobby.jpg',
    date: 'June 2, 2026',
    readTime: '7 min read',
    location: 'Somajiguda, Hyderabad',
    highlights: [
      'Prime Raj Bhavan Road location',
      'Business & conference facilities',
      'Near Yashoda Hospitals',
      'Access to top attractions',
    ],
  },
  {
    slug: '/blog/hotels-in-somajiguda-hyderabad',
    tag: 'Travel Guide',
    title: 'Hotels in Somajiguda Hyderabad – Comfortable Stay Near Key Locations',
    excerpt:
      'Somajiguda is one of the most well-connected areas in Hyderabad. Discover why Hotel Inner Circle is the ideal choice for business travelers, families, and tourists visiting the city.',
    img: 'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/5.Inner%20Circle%20Reception%20Lobby.jpg',
    date: 'May 27, 2026',
    readTime: '8 min read',
    location: 'Somajiguda, Hyderabad',
    highlights: [
      'Prime central location',
      'Close to business districts',
      'Rooms from ₹4,499',
      'Near Hussain Sagar & Charminar',
    ],
  },
  {
    slug: '/blog/best-hotels-in-hyderabad-luxury-banquet',
    tag: 'Hotel Guide',
    title: 'Best Hotels in Hyderabad for Luxury Stay & Banquet Halls',
    excerpt:
      'Looking for a hotel with elegant banquet halls in Hyderabad? Hotel Inner Circle offers luxury accommodation and professional event facilities for weddings, corporate events, and family gatherings.',
    img: 'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/9.Inner%20Circle%20Influence.%20Banquet%20Hall.jpg',
    date: 'May 27, 2026',
    readTime: '7 min read',
    location: 'Hyderabad, Telangana',
    highlights: [
      'Elegant banquet halls',
      'Corporate & wedding events',
      'In-house dining & catering',
      'Professional hospitality',
    ],
  },

];

export default function BlogIndex() {
  return (
    <main className="">
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
            Our Blog
          </h1>
          <p className="text-[#e8c27d] text-lg max-w-xl">
            Travel tips, hotel guides &amp; local insights for Hyderabad
          </p>
        </div>
      </section>

      {/* ── BREADCRUMB ── */}
      <nav className="bg-[#faf6ef] border-b border-[#e7d7b6] py-3 px-6" aria-label="Breadcrumb">
        <div className="container mx-auto max-w-5xl">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-[#a17c36] transition">Home</Link></li>
            <li aria-hidden>/</li>
            <li className="text-[#a17c36] font-medium" aria-current="page">Blog</li>
          </ol>
        </div>
      </nav>

      {/* ── POSTS GRID ── */}
      <section className="container mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10">
          {posts.map((post, i) => (
            <article
              key={i}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-[#e7d7b6] hover:shadow-2xl hover:border-[#a17c36] transition-all duration-300 grid grid-cols-1 lg:grid-cols-2"
            >
              {/* Image */}
              <Link href={post.slug} className="relative h-64 lg:h-auto min-h-[280px] overflow-hidden block">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-r from-black/20 to-transparent lg:bg-linear-to-t lg:from-black/20 lg:to-transparent" />
                <span className="absolute top-5 left-5 bg-[#a17c36] text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wide uppercase shadow-md">
                  {post.tag}
                </span>
              </Link>

              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-x-5 gap-y-2 text-gray-400 text-sm mb-4">
                    <span className="flex items-center gap-1.5">
                      <FaCalendarAlt className="text-[#a17c36]" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaClock className="text-[#a17c36]" /> {post.readTime}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaMapMarkerAlt className="text-[#F54A00]" /> {post.location}
                    </span>
                  </div>

                  <Link href={post.slug}>
                    <h2 className="text-2xl font-serif font-bold text-gray-900 leading-snug mb-3 hover:text-[#a17c36] transition-colors duration-200">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{post.excerpt}</p>

                  <ul className="grid grid-cols-2 gap-2 mb-6">
                    {post.highlights.map((h, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#a17c36] shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={post.slug}
                  className="inline-flex items-center gap-2 self-start px-7 py-3 bg-[#a17c36] hover:bg-[#8b6a2b] text-white font-semibold rounded-full transition-colors duration-200 shadow-md text-sm group/btn"
                >
                  Read Full Article
                  <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-[#faf6ef] border-t border-[#e7d7b6] py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-3">
          Ready to Book Your Stay?
        </h2>
        <p className="text-gray-500 mb-7 max-w-md mx-auto">
          Experience comfort and quality hospitality at Hotel Inner Circle, Somajiguda Hyderabad.
        </p>
        <Link
          href="https://bookings.resavenue.com/resBooking/rooms?regCode=TZVG1203&roomSearchId=51cc932e10db47048a8e45b7a7ff1ee5&adult_1=2"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#a17c36] hover:bg-[#8b6a2b] text-white font-bold rounded-full transition-colors duration-200 shadow-lg text-base"
        >
          Book Now <FaArrowRight />
        </Link>
      </section>
    </main>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaArrowRight } from 'react-icons/fa';

const posts = [
  {
    slug: '/blog/travel-smarter-benefits-of-booking-hotel-inner-circle',
    tag: 'Travel Guide',
    title: 'Travel Smarter: Benefits of Booking a Stay at Hotel Inner Circle in Somajiguda',
    excerpt:
      "Discover why Hotel Inner Circle in Somajiguda is the smart choice for travelers. Prime location on Raj Bhavan Road, comfortable rooms, business facilities, and easy access to Hyderabad's top attractions.",
    img: 'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/5.Inner%20Circle%20Reception%20Lobby.jpg',
    date: 'June 2, 2026',
    readTime: '7 min read',
    location: 'Somajiguda, Hyderabad',
  },
  {
    slug: '/blog/hotels-in-somajiguda-hyderabad',
    tag: 'Travel Guide',
    title: 'Hotels in Somajiguda Hyderabad – Comfortable Stay Near Key Locations',
    excerpt:
      'Somajiguda is one of the most well-connected areas in Hyderabad. Discover why Hotel Inner Circle is the ideal choice for business travelers, families, and tourists.',
    img: 'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/5.Inner%20Circle%20Reception%20Lobby.jpg',
    date: 'May 27, 2026',
    readTime: '8 min read',
    location: 'Somajiguda, Hyderabad',
  },
  {
    slug: '/blog/best-hotels-in-hyderabad-luxury-banquet',
    tag: 'Hotel Guide',
    title: 'Best Hotels in Hyderabad for Luxury Stay & Banquet Halls',
    excerpt:
      'Looking for a hotel with elegant banquet halls? Hotel Inner Circle offers luxury rooms and professional event facilities for weddings, corporate events, and family gatherings.',
    img: 'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/9.Inner%20Circle%20Influence.%20Banquet%20Hall.jpg',
    date: 'May 27, 2026',
    readTime: '7 min read',
    location: 'Hyderabad, Telangana',
  },
];

export default function BlogPreview() {
  return (
    <section className="w-full py-20 bg-[#faf6ef]">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">

        {/* Section header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <span className="w-10 h-px bg-gray-400" />
            <Image
              src="/sublogo.svg"
              width={200}
              height={40}
              alt="Hotel Inner Circle divider"
              className="mx-6 opacity-70"
            />
            <span className="w-10 h-px bg-gray-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 tracking-wide">
            From Our Blog
          </h2>
          <p className="text-gray-500 mt-3 text-base max-w-xl mx-auto">
            Travel tips, hotel guides, and local insights for your perfect Hyderabad stay
          </p>
        </div>

        {/* Blog cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article
              key={i}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-[#e7d7b6] hover:shadow-2xl hover:border-[#a17c36] transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <Link href={post.slug} className="relative h-56 overflow-hidden block shrink-0">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                <span className="absolute top-4 left-4 bg-[#a17c36] text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wide uppercase shadow-md">
                  {post.tag}
                </span>
              </Link>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-gray-400 text-xs mb-4">
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

                {/* Title */}
                <Link href={post.slug}>
                  <h3 className="text-xl font-serif font-bold text-gray-900 leading-snug mb-3 hover:text-[#a17c36] transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                {/* CTA */}
                <Link
                  href={post.slug}
                  className="inline-flex items-center gap-2 self-start px-6 py-2.5 bg-[#a17c36] hover:bg-[#8b6a2b] text-white font-semibold rounded-full transition-colors duration-200 shadow-md text-sm group/btn"
                >
                  Read Article
                  <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#a17c36] hover:text-[#8b6a2b] font-semibold text-sm transition-colors duration-200 group/all"
          >
            View All Articles
            <FaArrowRight className="group-hover/all:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
}

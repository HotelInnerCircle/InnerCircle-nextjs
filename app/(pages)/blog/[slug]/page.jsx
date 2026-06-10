import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaCheckCircle, FaPhoneAlt } from 'react-icons/fa';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { ConnectDB } from '@/lib/config/db';
import Blog from '@/lib/models/Blog';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    await ConnectDB();
    const blog = await Blog.findOne({ slug, published: true }).lean();
    if (!blog) return { title: 'Blog Not Found' };

    const seoTitle = blog.metaTitle || blog.title;
    const seoDesc = blog.metaDescription || blog.excerpt;
    const seoImage = blog.img;
    const canonical = blog.canonicalUrl || `https://hotelinnercircle.in/blog/${blog.slug}`;

    return {
      title: `${seoTitle} | Hotel Inner Circle`,
      description: seoDesc,
      keywords: blog.metaKeywords || undefined,
      alternates: { canonical },
      openGraph: {
        title: seoTitle,
        description: seoDesc,
        url: canonical,
        siteName: 'Hotel Inner Circle',
        images: [{ url: seoImage, width: 1200, height: 630, alt: seoTitle }],
        locale: 'en_IN',
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title: seoTitle,
        description: seoDesc,
        images: [seoImage],
      },
      robots: blog.noIndex
        ? { index: false, follow: false }
        : { index: true, follow: true },
    };
  } catch {
    return { title: 'Blog | Hotel Inner Circle' };
  }
}

export default async function DynamicBlogPage({ params }) {
  const { slug } = await params;
  let blog;
  try {
    await ConnectDB();
    blog = await Blog.findOne({ slug, published: true }).lean();
  } catch {
    notFound();
  }

  if (!blog) notFound();

  const publishedDate = new Date(blog.createdAt).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'long', year: 'numeric',
  });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.title,
    description: blog.excerpt,
    image: blog.img,
    author: { '@type': 'Organization', name: 'Hotel Inner Circle', url: 'https://hotelinnercircle.in' },
    publisher: {
      '@type': 'Organization',
      name: 'Hotel Inner Circle',
      logo: { '@type': 'ImageObject', url: 'https://hotelinnercircle.in/logos/HIC-white-logo.png' },
    },
    datePublished: blog.createdAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://hotelinnercircle.in/blog/${blog.slug}`,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="bg-white">
        {/* ── HERO ── */}
        <section className="relative h-[65vh] min-h-[460px] overflow-hidden">
          <Image
            src={blog.img}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/85" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <span className="inline-block px-5 py-1.5 mb-5 text-xs font-bold tracking-widest uppercase bg-[#a17c36] text-white rounded-full shadow-lg">
              {blog.tag}
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight max-w-4xl mb-4">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/80 text-sm">
              <span className="flex items-center gap-2">
                <FaCalendarAlt className="text-[#e8c27d]" /> {publishedDate}
              </span>
              <span className="hidden sm:block w-px h-4 bg-white/30" />
              <span className="flex items-center gap-2">
                <FaClock className="text-[#e8c27d]" /> {blog.readTime}
              </span>
              <span className="hidden sm:block w-px h-4 bg-white/30" />
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#e8c27d]" /> {blog.location}
              </span>
            </div>
          </div>
        </section>

        {/* ── BREADCRUMB ── */}
        <nav className="bg-[#faf6ef] border-b border-[#e7d7b6] py-3 px-6" aria-label="Breadcrumb">
          <div className="container mx-auto max-w-4xl">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-[#a17c36] transition">Home</Link></li>
              <li aria-hidden>/</li>
              <li><Link href="/blog" className="hover:text-[#a17c36] transition">Blog</Link></li>
              <li aria-hidden>/</li>
              <li className="text-[#a17c36] font-medium truncate max-w-[200px]" aria-current="page">
                {blog.title}
              </li>
            </ol>
          </div>
        </nav>

        {/* ── ARTICLE ── */}
        <article className="container mx-auto max-w-4xl px-6 py-16">
          {/* Excerpt / Intro */}
          <p className="text-lg text-gray-700 leading-relaxed mb-10 max-w-3xl border-l-4 border-[#a17c36] pl-5 italic">
            {blog.excerpt}
          </p>

          {/* Blog Content */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-serif prose-headings:text-gray-900
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-5
              prose-ul:text-gray-600 prose-li:my-1
              prose-strong:text-[#8b6a2b] prose-a:text-[#a17c36]"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Highlights */}
          {blog.highlights && blog.highlights.length > 0 && (
            <div className="mt-12 p-8 bg-[#faf6ef] rounded-2xl border border-[#e7d7b6]">
              <h2 className="text-xl font-serif font-bold text-gray-900 mb-5">Key Highlights</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {blog.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <FaCheckCircle className="text-[#a17c36] flex-shrink-0" />
                    <span className="text-sm font-medium">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>

        {/* ── BOOKING CTA ── */}
        <section className="relative overflow-hidden bg-[#1a1a1a] py-20 px-6">
          <div
            className="absolute inset-0 opacity-15 bg-cover bg-center"
            style={{ backgroundImage: `url(${blog.img})` }}
          />
          <div className="relative z-10 container mx-auto max-w-3xl text-center">
            <Image src="/sublogo.svg" width={180} height={36} alt="Hotel Inner Circle" className="mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Book Your Stay Today</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Experience comfort and hospitality at{' '}
              <Link href="/" className="text-[#e8c27d] font-semibold hover:underline">Hotel Inner Circle, Somajiguda Hyderabad</Link>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://bookings.resavenue.com/resBooking/rooms?regCode=TZVG1203&roomSearchId=51cc932e10db47048a8e45b7a7ff1ee5&adult_1=2"
                target="_blank" rel="noopener noreferrer"
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

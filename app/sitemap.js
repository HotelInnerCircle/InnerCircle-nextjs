import { ConnectDB } from '@/lib/config/db';
import Blog from '@/lib/models/Blog';

const BASE_URL = 'https://hotelinnercircle.in';

const STATIC_BLOG_FALLBACKS = [
  { slug: 'hotels-in-somajiguda-hyderabad', lastModified: '2025-06-01' },
  { slug: 'best-hotels-in-hyderabad-luxury-banquet', lastModified: '2025-06-01' },
  { slug: 'travel-smarter-benefits-of-booking-hotel-inner-circle', lastModified: '2026-06-02' },
  { slug: 'best-hotels-near-hospitals-somajiguda-hyderabad', lastModified: '2026-06-04' },
];

export default async function sitemap() {
  const staticPages = [
    { url: `${BASE_URL}/`, lastModified: new Date('2026-05-27'), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/about-us`, lastModified: new Date('2025-06-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/rooms.php`, lastModified: new Date('2025-06-01'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/banqueting-halls-%26-private-dining`, lastModified: new Date('2025-06-01'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/gallery.php`, lastModified: new Date('2025-06-01'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/ice_spice.php`, lastModified: new Date('2025-06-01'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contact.php`, lastModified: new Date('2025-06-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/faq`, lastModified: new Date('2026-06-01'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/privacy.php`, lastModified: new Date('2025-01-01'), changeFrequency: 'yearly', priority: 0.3 },
  ];

  let blogUrls = [];
  try {
    await ConnectDB();
    const blogs = await Blog.find({ published: true, noIndex: { $ne: true } })
      .select('slug updatedAt')
      .lean();
    if (blogs.length > 0) {
      blogUrls = blogs.map((b) => ({
        url: `${BASE_URL}/blog/${b.slug}`,
        lastModified: new Date(b.updatedAt),
        changeFrequency: 'monthly',
        priority: 0.7,
      }));
    }
  } catch {}

  if (blogUrls.length === 0) {
    blogUrls = STATIC_BLOG_FALLBACKS.map((b) => ({
      url: `${BASE_URL}/blog/${b.slug}`,
      lastModified: new Date(b.lastModified),
      changeFrequency: 'monthly',
      priority: 0.7,
    }));
  }

  return [...staticPages, ...blogUrls];
}

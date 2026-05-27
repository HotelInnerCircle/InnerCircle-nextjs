const BASE_URL = 'https://hotelinnercircle.in';

export default function sitemap() {
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date('2026-05-27'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about-us`,
      lastModified: new Date('2025-06-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/rooms.php`,
      lastModified: new Date('2025-06-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/banqueting-halls-%26-private-dining`,
      lastModified: new Date('2025-06-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/gallery.php`,
      lastModified: new Date('2025-06-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/ice_spice.php`,
      lastModified: new Date('2025-06-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact.php`,
      lastModified: new Date('2025-06-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date('2026-05-27'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/hotels-in-somajiguda-hyderabad`,
      lastModified: new Date('2025-06-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/best-hotels-in-hyderabad-luxury-banquet`,
      lastModified: new Date('2025-06-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy.php`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}

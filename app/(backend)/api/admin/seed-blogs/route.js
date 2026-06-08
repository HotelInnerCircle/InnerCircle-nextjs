import { NextResponse } from 'next/server';
import { ConnectDB } from '@/lib/config/db';
import Blog from '@/lib/models/Blog';
import { requireAdminAuth } from '@/lib/adminAuth';

const seedBlogs = [
  {
    title: 'Best Hotels Near Top Hospitals in Somajiguda – Why Hotel Inner Circle is the Smart Choice',
    slug: 'best-hotels-near-hospitals-somajiguda-hyderabad',
    tag: 'Medical Travel',
    excerpt: 'Traveling to Hyderabad for medical treatment? Hotel Inner Circle in Somajiguda is close to Yashoda Hospitals, NIMS, Aster Prime, CARE Hospitals and more — ideal for patients and families.',
    img: 'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/5.Inner%20Circle%20Reception%20Lobby.jpg',
    location: 'Somajiguda, Hyderabad',
    readTime: '6 min read',
    highlights: [
      'Near Yashoda & NIMS Hospitals',
      'Ideal for medical travelers',
      'Affordable & comfortable rooms',
      'Family-friendly environment',
    ],
    content: `
<p>When traveling to Hyderabad for medical treatment, doctor consultations, or to support a loved one, choosing the right hotel becomes extremely important. Staying close to major hospitals helps reduce travel time, stress, and transportation costs while ensuring comfort during your stay.</p>

<p>Located in the heart of Somajiguda, Hotel Inner Circle is one of the most convenient accommodation choices for patients, attendants, and medical travelers visiting Hyderabad. Its central location offers quick access to some of the city's leading hospitals.</p>

<h2>Stay Close to Hyderabad's Leading Hospitals</h2>
<p>One of the biggest advantages of booking Hotel Inner Circle is its proximity to renowned healthcare institutions, including:</p>
<ul>
  <li><strong>Yashoda Hospitals</strong> – Best Hospital in Somajiguda</li>
  <li><strong>NIMS Hospital</strong> – Nizams Institute of Medical Sciences</li>
  <li><strong>Asian Institute of Nephrology and Urology (AINU)</strong> – Specialist care</li>
  <li><strong>Aster Prime Hospital</strong> – Multi-specialty care</li>
  <li><strong>CARE Hospitals</strong> – Advanced healthcare</li>
</ul>

<h2>Convenient Location Saves Time</h2>
<p>Medical appointments often require early check-ins, follow-up consultations, diagnostic tests, and emergency visits. Staying near major hospitals helps eliminate long travel times and allows guests to focus on what matters most.</p>
<p>Situated on Raj Bhavan Road in Somajiguda, the hotel offers excellent connectivity to Hyderabad's healthcare, business, and commercial districts.</p>

<h2>Comfortable Stay for Patients and Families</h2>
<p>Medical travel can be physically and emotionally demanding. Hotel Inner Circle provides a peaceful and comfortable environment designed to make your stay easier. Guests can enjoy:</p>
<ul>
  <li>Spacious and clean rooms</li>
  <li>Comfortable bedding</li>
  <li>Air-conditioned accommodation</li>
  <li>Free high-speed Wi-Fi</li>
  <li>Room service</li>
  <li>Hygienic surroundings</li>
  <li>Friendly 24/7 hospitality</li>
</ul>

<h2>Easy Access to Essential Services</h2>
<p>Patients and attendants often need quick access to pharmacies, diagnostic centers, restaurants, ATMs, and transportation services. The hotel's central Somajiguda location places guests close to medical stores, diagnostic laboratories, restaurants, shopping centers, and public transport options.</p>

<h2>Affordable Accommodation Without Compromising Comfort</h2>
<p>Medical expenses can quickly add up. Hotel Inner Circle offers comfortable accommodation at competitive prices, making it a practical option for families seeking value and convenience during medical treatment visits.</p>

<h2>Ideal for Outstation Medical Travelers</h2>
<p>Patients visiting Hyderabad from other cities often need reliable accommodation near treatment centers. Hotel Inner Circle is preferred by many medical travelers because of its accessibility, comfortable rooms, and proximity to major hospitals. The hotel provides a safe and welcoming environment for both patients and accompanying family members.</p>

<h2>Conclusion</h2>
<p>If you're looking for a comfortable hotel near Hyderabad's leading hospitals, Hotel Inner Circle offers the perfect combination of convenience, comfort, and accessibility. Whether you're visiting for treatment, consultations, or to support a family member, our central Somajiguda location ensures you're always close to the care you need.</p>
    `.trim(),
  },
  {
    title: 'Travel Smarter: Benefits of Booking a Stay at Hotel Inner Circle in Somajiguda',
    slug: 'travel-smarter-benefits-of-booking-hotel-inner-circle',
    tag: 'Travel Guide',
    excerpt: "Discover why Hotel Inner Circle in Somajiguda is the smart choice for travelers. Prime location on Raj Bhavan Road, comfortable rooms, business facilities, in-house dining, and easy access to Hyderabad's top attractions.",
    img: 'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/5.Inner%20Circle%20Reception%20Lobby.jpg',
    location: 'Somajiguda, Hyderabad',
    readTime: '7 min read',
    highlights: [
      'Prime Raj Bhavan Road location',
      'Business & conference facilities',
      'Near Yashoda Hospitals',
      'Access to top attractions',
    ],
    content: `
<p>When planning a trip to Hyderabad, choosing the right hotel can make a significant difference in your travel experience. Whether you're visiting for business, medical purposes, family vacations, or a weekend getaway, staying in a centrally located and comfortable hotel helps you save time, reduce stress, and enjoy the city more.</p>

<p>Located in the heart of Somajiguda, Hotel Inner Circle offers the perfect combination of convenience, comfort, and affordability. Situated on Raj Bhavan Road, the hotel provides easy access to Hyderabad's major business hubs, hospitals, shopping centers, and tourist attractions.</p>

<h2>Prime Location in the Heart of Hyderabad</h2>
<p>One of the biggest advantages of staying at Hotel Inner Circle is its strategic location in Somajiguda. The hotel is conveniently connected to Banjara Hills, Punjagutta, Begumpet, HITEC City, and other important areas of Hyderabad.</p>
<p>Guests can easily reach popular attractions, shopping destinations, corporate offices, and healthcare facilities without spending hours in traffic. The property is also located near Yashoda Hospitals, making it a preferred choice for medical travelers and their families.</p>

<h2>Comfortable Rooms Designed for Every Traveler</h2>
<p>Whether you're a solo traveler, business professional, couple, or family, the hotel offers well-furnished rooms equipped with modern amenities. The hotel provides multiple room categories to suit different budgets and travel requirements:</p>
<ul>
  <li>Free Wi-Fi connectivity</li>
  <li>Air-conditioned rooms</li>
  <li>Room service</li>
  <li>Comfortable bedding</li>
  <li>Tea and coffee facilities</li>
  <li>Television and workspaces</li>
  <li>Clean and hygienic interiors</li>
</ul>

<h2>Ideal for Business Travelers</h2>
<p>Hyderabad is one of India's leading business destinations, and business travelers need a hotel that supports productivity. Hotel Inner Circle features conference facilities, business services, meeting spaces, and high-speed internet access, making it an excellent choice for corporate guests. The central location allows easy travel to major business districts and commercial centers.</p>

<h2>Excellent Dining Experience</h2>
<p>Travel becomes more enjoyable when great food is just steps away. The hotel offers in-house dining options where guests can enjoy delicious meals without leaving the property. From breakfast to dinner, guests can experience quality food and convenient dining services during their stay.</p>

<h2>Perfect for Family Stays</h2>
<p>Families visiting Hyderabad often look for safe, clean, and accessible accommodation. Reviews frequently highlight the hotel's cleanliness, central location, and suitability for family travelers. Nearby shopping centers, restaurants, and attractions make it easier for families to explore Hyderabad comfortably.</p>

<h2>Easy Access to Hyderabad's Top Attractions</h2>
<p>The hotel's location makes it easy to visit many famous landmarks in Hyderabad, including Hussain Sagar Lake (3 km), Birla Mandir (2 km), Hyderabad Central Mall, Charminar (14 km), Golconda Fort (12 km), and Salar Jung Museum (13 km). This allows visitors to spend less time commuting and more time enjoying the city.</p>

<h2>Conclusion</h2>
<p>Choosing the right hotel means finding the perfect balance between location, comfort, service, and value. With its central Somajiguda location, modern amenities, comfortable rooms, dining options, and business-friendly facilities, Hotel Inner Circle offers a smart stay solution for all types of travelers.</p>
    `.trim(),
  },
  {
    title: 'Hotels in Somajiguda Hyderabad – Comfortable Stay Near Key Locations',
    slug: 'hotels-in-somajiguda-hyderabad',
    tag: 'Travel Guide',
    excerpt: 'Somajiguda is one of the most well-connected areas in Hyderabad. Discover why Hotel Inner Circle is the ideal choice for business travelers, families, and tourists visiting the city.',
    img: 'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/5.Inner%20Circle%20Reception%20Lobby.jpg',
    location: 'Somajiguda, Hyderabad',
    readTime: '8 min read',
    highlights: [
      'Prime central location',
      'Close to business districts',
      'Rooms from ₹4,499',
      'Near Hussain Sagar & Charminar',
    ],
    content: `
<p>Somajiguda is one of the most well-connected and popular areas in Hyderabad, known for its commercial centers, healthcare facilities, shopping destinations, and easy transportation access. Whether you are visiting the city for business, tourism, medical appointments, or family travel, choosing the right hotel in Somajiguda can make your stay more convenient and comfortable.</p>

<p>Hotel Inner Circle offers a comfortable and affordable stay experience in a prime location, making it an ideal choice for travelers looking for hotels in Somajiguda Hyderabad.</p>

<h2>Why Choose Somajiguda for Your Stay?</h2>
<p>Somajiguda is centrally located and provides excellent connectivity to important parts of Hyderabad. The area is preferred by both business and leisure travelers because of its accessibility and nearby facilities:</p>
<ul>
  <li>Easy access to business districts</li>
  <li>Close to shopping malls and restaurants</li>
  <li>Good transportation connectivity</li>
  <li>Nearby hospitals and healthcare centers</li>
  <li>Convenient travel to tourist attractions</li>
  <li>Peaceful and well-developed surroundings</li>
</ul>

<h2>Comfortable Accommodation at Hotel Inner Circle</h2>
<p>Hotel Inner Circle offers clean, spacious, and well-appointed rooms designed to provide a comfortable and relaxing stay for modern travelers. Guests can choose from:</p>
<ul>
  <li><strong>Standard Rooms</strong> – Cozy and comfortable rooms ideal for short stays, from ₹4,499</li>
  <li><strong>Deluxe Rooms</strong> – Stylish interiors with enhanced comfort, from ₹5,699</li>
  <li><strong>Executive Rooms</strong> – Spacious rooms for business travelers, from ₹5,099</li>
  <li><strong>Deluxe Suite Rooms</strong> – Premium suites for an elevated stay, from ₹7,399</li>
</ul>

<h2>Ideal for Business Travelers</h2>
<p>Somajiguda is close to many commercial and corporate areas in Hyderabad. Hotel Inner Circle offers a professional and comfortable environment suitable for work-related stays, with reliable Wi-Fi connectivity, comfortable work-friendly rooms, and easy transportation access.</p>

<h2>Convenient Access to Major Locations</h2>
<p>Staying in Somajiguda provides excellent connectivity to Banjara Hills, Punjagutta, Ameerpet, Begumpet, Hyderabad Business Districts, and Shopping Centers & Entertainment Zones.</p>

<h2>Nearby Tourist Attractions</h2>
<p>Somajiguda's central location makes it easy to visit many popular tourist destinations in Hyderabad:</p>
<ul>
  <li>Hussain Sagar Lake – 3 km away</li>
  <li>Birla Mandir – 2 km away</li>
  <li>Golconda Fort – 12 km away</li>
  <li>Salar Jung Museum – 13 km away</li>
  <li>Charminar – 14 km away</li>
  <li>Chowmahalla Palace – 14 km away</li>
</ul>

<h2>Conclusion</h2>
<p>Somajiguda is one of the best locations to stay in Hyderabad due to its connectivity, convenience, and accessibility to major city attractions. Hotel Inner Circle offers comfortable accommodation, professional hospitality, and affordable pricing. Whether you are traveling for business, tourism, medical visits, or family trips, Hotel Inner Circle provides a relaxing and convenient stay experience in Somajiguda, Hyderabad.</p>
    `.trim(),
  },
  {
    title: 'Best Hotels in Hyderabad for Luxury Stay & Banquet Halls',
    slug: 'best-hotels-in-hyderabad-luxury-banquet',
    tag: 'Hotel Guide',
    excerpt: 'Looking for a hotel with elegant banquet halls in Hyderabad? Hotel Inner Circle offers luxury accommodation and professional event facilities for weddings, corporate events, and family gatherings.',
    img: 'https://ik.imagekit.io/b7gayfw2v/Gallery/banquetHall/9.Inner%20Circle%20Influence.%20Banquet%20Hall.jpg',
    location: 'Hyderabad, Telangana',
    readTime: '7 min read',
    highlights: [
      'Elegant banquet halls',
      'Corporate & wedding events',
      'In-house dining & catering',
      'Professional hospitality',
    ],
    content: `
<p>Hyderabad is a city where tradition meets modernity, and when it comes to hosting events or finding a premium hotel experience, the right venue makes all the difference. Hotel Inner Circle in Somajiguda stands out as one of the best hotels in Hyderabad offering both a luxury stay experience and professionally designed banquet halls.</p>

<h2>A Premium Stay Experience</h2>
<p>Hotel Inner Circle offers elegantly designed rooms and suites that combine comfort with style. From the moment you check in, the warm hospitality and attention to detail make every guest feel valued. The hotel features Standard Rooms, Executive Rooms, Deluxe Rooms, and Deluxe Suites — each thoughtfully designed to provide a restful and memorable stay.</p>

<h2>Elegant Banquet Halls for Every Occasion</h2>
<p>One of Hotel Inner Circle's most sought-after features is its professionally designed banquet halls. Whether you're planning a wedding reception, corporate conference, birthday celebration, or a private family gathering, the hotel provides the perfect setting. The banquet spaces are equipped with modern audio-visual systems, stylish décor options, and flexible seating arrangements to suit events of all sizes.</p>

<h2>Corporate Events and Conferences</h2>
<p>For businesses seeking a professional venue in the heart of Hyderabad, Hotel Inner Circle offers dedicated conference rooms and meeting facilities. The central Somajiguda location ensures easy accessibility for attendees from across the city. High-speed Wi-Fi, presentation equipment, and dedicated event staff make corporate events seamless and productive.</p>

<h2>Wedding Venues and Celebrations</h2>
<p>Hotel Inner Circle is a popular choice for wedding receptions and celebrations in Hyderabad. The elegant banquet halls can be transformed to reflect your vision, with in-house catering services, floral décor options, and experienced event management support.</p>

<h2>In-House Dining and Catering</h2>
<p>Great events are made even more memorable with exceptional food. Hotel Inner Circle's in-house restaurant and catering team offer a variety of menu options, from traditional Hyderabadi cuisine to continental fare. The culinary team works closely with guests to create customized menus that suit every palate and occasion.</p>

<h2>Professional Hospitality</h2>
<p>What sets Hotel Inner Circle apart is its commitment to professional hospitality. The experienced team of event coordinators, front desk staff, and service personnel ensure that every event runs smoothly. From planning to execution, guests can expect attentive and personalized service throughout their stay or event.</p>

<h2>Conclusion</h2>
<p>For those seeking the best hotels in Hyderabad with luxury accommodation and top-class banquet facilities, Hotel Inner Circle in Somajiguda is the ideal destination. Whether you're hosting a grand wedding, a corporate conference, or an intimate celebration, the hotel delivers an exceptional experience backed by professional service and elegant facilities.</p>
    `.trim(),
  },
];

export async function POST(req) {
  const authError = requireAdminAuth(req);
  if (authError) return authError;

  try {
    await ConnectDB();

    const results = [];

    for (const blog of seedBlogs) {
      const existing = await Blog.findOne({ slug: blog.slug });
      if (existing) {
        results.push({ slug: blog.slug, status: 'skipped (already exists)' });
        continue;
      }
      await Blog.create({ ...blog, published: true });
      results.push({ slug: blog.slug, status: 'inserted' });
    }

    return NextResponse.json({ success: true, results });
  } catch (error) {
    console.error('Seed blogs error:', error);
    return NextResponse.json({ error: 'Seed failed', detail: error.message }, { status: 500 });
  }
}

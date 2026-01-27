import Image from "next/image";

export const metadata = {
  title: "About Us | Inner Circle Hotel Hyderabad",
  description:
    "Inner Circle is a smart and affordable business hotel in Somajiguda, Hyderabad, offering elegant interiors, modern comforts, and award-winning hospitality.",
};

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* HERO */}
      <section className="relative h-[75vh]">
        <Image
          src="/Roomimages/innercircle.webp"
          alt="Inner Circle Hotel Hyderabad"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="text-center max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wide">
              Inner Circle Hotel
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-200">
              Affordable Luxury in the Heart of Hyderabad
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-sm uppercase tracking-widest text-gray-400">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Inner Circle is a budding business hotel that vouches for achieving
              unparalleled levels of hospitality. We understand the needs of the
              business class, and looking after the convenience of our guests is
              our prime motive.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Laced with elegant interiors and thoughtful service, Inner Circle
              exemplifies crème de la crème hospitality with style, comfort, and
              affordability.
            </p>
          </div>

          <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/Roomimages/innercircle.webp"
              alt="Inner Circle Hotel Interior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* STYLE & SUBSTANCE */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A Blend of Style & Substance
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Inner Circle welcomes you to a fresh atmosphere with vivid,
            minimalist, urban, and stylish designs. A fine blend of luxury,
            innovation, and corporate comfort has been carefully selected to
            deliver the highest standards at affordable prices.
          </p>
        </div>
      </section>

      {/* BUSINESS & LEISURE */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Designed for Business Travelers
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li>✓ Centrally air-conditioned rooms</li>
              <li>✓ High-speed Wi-Fi connectivity</li>
              <li>✓ Dedicated workspaces</li>
              <li>✓ Peaceful & professional ambience</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Ideal for Leisure Stays
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li>✓ Comfortable and relaxing rooms</li>
              <li>✓ Prime city location</li>
              <li>✓ Easy access to shopping & dining</li>
              <li>✓ Safe and serene environment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ECO & MODERN */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/Roomimages/DeluxeSuite/22.Inner Circle Delux Suit Room sit-out.JPG"
              alt="Eco Friendly Hotel"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Smart, Sustainable & Modern
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Innovative design, modern technology, and eco-friendly practices
              come together at Inner Circle. Enjoy luxury with a conscience,
              enhanced by thoughtful design and responsible hospitality.
            </p>
          </div>
        </div>
      </section>

      {/* AWARD */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Awards & Recognition
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Proud recipient of the
          <strong>“Best Maintained Property”</strong> award by the Government of
          Andhra Pradesh — a testament to our commitment to service excellence,
          cleanliness, and guest satisfaction.
        </p>
      </section>
    </main>
  );
}

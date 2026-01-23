"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight, FaQuoteRight } from "react-icons/fa";

export default function TestimonialSection() {
  const [loading, setLoading] = useState(true);

  // Simulated loading time
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const testimonials = [

    {
      id: 1,
      name: "Ravi Kumar",
      role: "Business Traveller",
      img: "/testimonials/user1.jpg",
      text: "Great location in Somajiguda and very easy to reach. Rooms were clean, staff was polite, and check-in was smooth. Perfect for business stay in Hyderabad.",
      company: "Google Review",
      rating: 5,
      color: "white",
    },
    {
      id: 2,
      name: "Sneha Reddy",
      role: "Family Stay",
      img: "/testimonials/user2.jpg",
      text: "Stayed for 2 nights with family. The room was neat, bathroom was hygienic, and the service was quick. Breakfast was tasty and fresh. Definitely recommended.",
      company: "Google Review",
      rating: 5,
      color: "orange",
    },
    {
      id: 3,
      name: "Arjun Mehta",
      role: "Couple Stay",
      img: "/testimonials/user3.jpg",
      text: "Nice hotel with comfortable beds and good ambience. Staff is very helpful and friendly. Excellent value for money and close to main city areas.",
      company: "Google Review",
      rating: 5,
      color: "white",
    },
    {
      id: 4,
      name: "Priya Sharma",
      role: "Solo Traveller",
      img: "/testimonials/user4.jpg",
      text: "Clean rooms, peaceful environment, and great hospitality. The front desk team was supportive and helped with local guidance. Will visit again.",
      company: "Google Review",
      rating: 5,
      color: "orange",
    },
    {
      id: 5,
      name: "Mohammed Irfan",
      role: "Corporate Guest",
      img: "/testimonials/user5.jpg",
      text: "Very good stay experience. Room service was quick and the staff maintained everything well. Location is a big plus—close to offices and shopping areas.",
      company: "Google Review",
      rating: 5,
      color: "white",
    },
    {
      id: 6,
      name: "Anjali Verma",
      role: "Weekend Stay",
      img: "/testimonials/user6.jpg",
      text: "Hotel Inner Circle exceeded expectations. Clean rooms, friendly staff, and overall a pleasant stay. Great for both work and leisure trips.",
      company: "Google Review",
      rating: 5,
      color: "orange",
    },

  ];

  return (
    <section className="w-full py-20 bg-[#191919] bg-[url('/hex-bg.png')] bg-cover bg-center text-white relative">

      {/* Section Header */}
      <div className="text-center pb-10">
        <div className="flex items-center justify-center mb-4">
          {loading ? (
            <Skeleton width={200} height={20} />
          ) : (
            <>
              <span className="w-10 h-px bg-gray-500"></span>
              <Image src="sublogo.svg" width={100} height={40} alt="divider" className="mx-4" />
              <span className="w-10 h-px bg-gray-500"></span>
            </>
          )}
        </div>

        {loading ? (
          <Skeleton width={300} height={40} className="mx-auto" />
        ) : (
          <h2 className="text-5xl font-semibold">What Our Client Say</h2>
        )}
      </div>

      {/* Slider Container */}
      <div className="relative w-[90%] mx-auto">

        {/* Navigation buttons */}
        {!loading && (
          <div className="flex items-center gap-4 absolute right-0 -top-12 z-20">
            <button id="prevBtn" className="p-2 bg-white/10 rounded-md border border-white/20">
              <FaArrowLeft />
            </button>

            <p className="text-white/60 text-sm">
              <span id="currentSlide">03</span> / 04
            </p>

            <button id="nextBtn" className="p-2 bg-orange-500 rounded-md">
              <FaArrowRight />
            </button>
          </div>
        )}

        {/* Skeleton Loader Instead of Swiper */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-xl p-8 border rotate-[-5deg] bg-white/10 backdrop-blur-md">
                <div className="flex items-center gap-4 mb-4">
                  <Skeleton circle width={50} height={50} />
                  <div>
                    <Skeleton width={120} height={18} />
                    <Skeleton width={80} height={14} />
                  </div>
                </div>

                <Skeleton width={100} height={20} className="mb-3" />
                <Skeleton count={4} className="mb-6" />

                <div className="flex justify-between items-center">
                  <Skeleton width={100} height={15} />
                  <Skeleton width={20} height={20} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Real Swiper */
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: "#prevBtn",
              nextEl: "#nextBtn",
            }}
            spaceBetween={30}
            slidesPerView={1.1}
            breakpoints={{
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 },
              1280: { slidesPerView: 4 },
            }}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div
                  className={`
                    rounded-xl p-8 m-3 shadow-lg border 
                    rotate-[-5deg] 
                    ${t.color === "orange" ? "bg-[#CC704B] text-white" : "bg-white text-black"} 
                  `}
                >
                  {/* Profile */}
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src='/logos/hotel-testmonial.webp'
                      alt={t.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{t.name}</h3>
                      <p className="text-sm opacity-70">{t.role}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <p className="text-yellow-500 mb-3 text-lg">
                    {"★".repeat(t.rating)}
                  </p>

                  {/* Message */}
                  <p className="text-sm leading-relaxed mb-6">{t.text}</p>

                  {/* Bottom CTA */}
                  <div className="flex justify-between items-center">
                    <p className={`font-semibold ${t.color === "orange" ? "text-white" : "text-black"}`}>
                      {t.company}
                    </p>
                    <FaQuoteRight className="opacity-70" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}

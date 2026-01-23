"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function RoomCategories() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1200);
  }, []);

  const categories = [
    { id: 1, title: "STANDARD ROOM", count: "90+ Room", img: "https://www.hotelinnercircle.in/images/17.Inner%20Circle%20Standard%20Room.jpg" },
    { id: 2, title: "DELUXE ROOM", count: "40+ Room", img: "https://www.hotelinnercircle.in/images/20.Inner%20Circle%20Deluxe.%20Room.jpg" },
    { id: 3, title: "EXECUTIVE ROOM", count: "60+ Room", img: "https://www.hotelinnercircle.in/images/18.Inner%20Circle%20Executive%20Room.jpg" },
    { id: 4, title: "DELUXE SUITE", count: "60+ Room", img: "https://www.hotelinnercircle.in/images/23.Iner%20Circle%20Deluxe%20%20suit.Room.JPG" },
  ];

  return (
    <section className="w-full pt-16 bg-white">
      <div className="container mx-auto px-6 md:px-10">

        {/* ---------- MOBILE / TABLET VIEW ---------- */}
        <div className="block md:hidden">

          {loading ? (
            <Swiper spaceBetween={20} slidesPerView={1.2} centeredSlides loop>
              {Array.from({ length: 3 }).map((_, i) => (
                <SwiperSlide key={i}>
                  <div className="relative w-full h-[380px] rounded-3xl overflow-hidden bg-gray-200 animate-pulse"></div>
                  <div className="mt-3 w-40 h-4 bg-gray-200 mx-auto rounded animate-pulse"></div>
                  <div className="mt-2 w-24 h-4 bg-gray-200 mx-auto rounded animate-pulse"></div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <Swiper spaceBetween={20} slidesPerView={1.2} loop centeredSlides>
              {categories.map((item) => (
                <SwiperSlide key={item.id} className="min-w-0">
                  <div className="relative w-full h-[380px] rounded-3xl overflow-hidden group">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />


                    <div className="absolute inset-0 bg-black/30"></div>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white px-4">
                      <h3 className="text-2xl font-semibold mb-1">{item.title}</h3>
                      <p className="text-lg flex justify-center items-center gap-2">
                        {item.count} <FaArrowRightLong className="text-base" />
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

        </div>

        {/* ---------- DESKTOP GRID VIEW ---------- */}
        <div className="hidden md:grid grid-cols-4 gap-10 mt-10 md:mt-0">

          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="relative w-full h-[420px] bg-gray-200 rounded-3xl animate-pulse"></div>

                <div className="mt-4 w-40 h-5 bg-gray-200 rounded-md animate-pulse"></div>
                <div className="mt-2 w-28 h-4 bg-gray-200 rounded-md animate-pulse"></div>
              </div>
            ))
            : categories.map((item) => (
              <div
                key={item.id}
                className="relative w-full h-[420px] rounded-3xl overflow-hidden group"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/30"></div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white px-4">
                  <h3 className="text-3xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-lg flex justify-center items-center gap-2">
                    {item.count} <FaArrowRightLong className="text-base" />
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

export default function LuxuryRooms() {
  const [loading, setLoading] = useState(true);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // ================= ROOM DATA =================
  const rooms = {
    standard: {
      STANDARD_ROOM: {
        title: "Standard Room",
        desc: "Comfortably furnished room offering essential luxury and modern amenities for a pleasant stay.",
        price: "₹4499",
        meta: {
          bed: "King Bed",
          bath: "Luxury Bath",
          size: "151 sqft",
        },
        features: [
          "151 sq. ft. well-furnished room",
          "Imported Bonnel Spring king-size bed",
          "Modern bath with glass cubicles",
          "Premium linen & towels",
          "Relaxing chair & coffee table",
          "Writing table with chair",
          "Mini bar & electronic safe",
          "40” wall-mounted Android TV",
          "Personal thermostat control",
          "High-speed Wi-Fi connectivity",
        ],
        images: [
          "/Roomimages/StandardRoom/17.Inner Circle Standard Room.jpg",
          "/Roomimages/StandardRoom/18.Inner Circle Executive Room.jpg",
          "/Roomimages/StandardRoom/19.Inner Circle Exe Room.jpg"
        ],
      },
    },
    deluxe: {
      DELUXE_ROOM: {
        title: "Deluxe Room",
        desc: "Extra-large room thoughtfully designed with elegant interiors and modern comforts.",
        price: "₹5699",
        meta: {
          bed: "King / Twin Bed",
          bath: "Luxury Bath",
          size: "290 sqft",
        },
        features: [
          "Imported Bonnel Spring beds",
          "Stylish wooden flooring",
          "Leather lounge chair with footrest",
          "Writing table with cushioned chair",
          "Premium linen & towels",
          "Dry & wet bathroom with glass cubicles",
          "Coffee / Tea maker",
          "Mini bar & electronic safe",
          "40” Android TV",
          "Personal thermostat control",
          "High-speed Wi-Fi",
        ],
        images: [
          "/Roomimages/DeluxeRoom/20.Inner_Circle_Deluxe.Room.jpg",
          "/Roomimages/DeluxeRoom/21.Inner_Circle_Deluxe_Room.jpg",
          "/Roomimages/DeluxeRoom/22.Inner_Circle_Delux_Suit_Room_sit-out.JPG",
          "/Roomimages/DeluxeRoom/23.Iner_Circle_Deluxesuit.Room.JPG"
        ],
      },
    }, executive: {
      EXECUTIVE_ROOM: {
        title: "Executive Room",
        desc: "Well-appointed room designed for business and leisure travelers.",
        price: "₹5099",
        meta: {
          bed: "King / Twin Bed",
          bath: "Luxury Bath",
          size: "253 sqft",
        },
        features: [
          "253 sq. ft. spacious room",
          "King / Twin Bonnel Spring bed",
          "Modern bath with glass partitions",
          "Relaxing chair & coffee table",
          "Work desk with high-back chair",
          "Coffee / Tea maker",
          "40” Android TV & Wi-Fi",

        ],
        images: [
          "/Roomimages/ExecutiveRoom/17.Inner Circle Standard Room.jpg",
          "/Roomimages/ExecutiveRoom/18.Inner Circle Executive Room.jpg",
          "/Roomimages/ExecutiveRoom/19.Inner Circle Exe Room.jpg",
          "/Roomimages/ExecutiveRoom/23.Iner Circle Deluxe  suit.Room.JPG"
        ],
      },
    },
    suite: {
      DELUXE_SUITE: {
        title: "Deluxe Suite Room",
        desc: "An extra-large, luxurious suite with a separate drawing room, premium furnishings, and modern amenities — designed for elevated comfort and elegance.",
        price: "₹7399",
        meta: {
          bed: "Twin / King Bed",
          bath: "Luxury Bath",
          size: "386 sqft",
        },
        features: [
          "386 sq. ft. extra-large twin suite with drawing room",
          "Imported Bonnel Spring beds (King-size option)",
          "Modern bath with dry & wet areas and glass cubicles",
          "Premium linen & towels",
          "Leather lounge chair with footrest & coffee table",
          "Stylish wooden flooring",
          "Writing table with high-back cushioned chair",
          "Mini bar & electronic safe",
          "Hair dryer",
          "40” Android TV in bedroom & drawing room",
          "Personal thermostat control",
          "High-speed Wi-Fi connectivity",
        ],

        images: [
          "/Roomimages/DeluxeSuite/22.Inner Circle Delux Suit Room sit-out.JPG",
          "/Roomimages/DeluxeSuite/22.Inner Circle Delux Suit Room sit-out.JPG",
          "/Roomimages/DeluxeSuite/22.Inner Circle Delux Suit Room sit-out.JPG",
          "/Roomimages/DeluxeSuite/22.Inner Circle Delux Suit Room sit-out.JPG",
        ],
      },
    },






  };

  // ================= FLATTEN =================
  const flatRooms = useMemo(
    () =>
      Object.entries(rooms).flatMap(([_, variants]) =>
        Object.entries(variants).map(([type, room]) => ({
          id: type,
          ...room,
        }))
      ),
    []
  );

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="bg-[#f8f6f2] py-16 sm:py-20 lg:py-24">
      {/* HEADER */}
      <div className="text-center mb-12 sm:mb-16 lg:mb-20 px-4">
        <p className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-3">
          Discover Our Rooms
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
          Luxury Rooms & Suites
        </h2>
      </div>

      {/* ROOMS */}
      <div className="max-w-7xl mx-auto px-4 space-y-16 sm:space-y-20">
        {loading ? (
          <div className="h-[300px] sm:h-[420px] bg-gray-200 rounded-3xl animate-pulse" />
        ) : (
          flatRooms.map((room) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* IMAGE SECTION */}
                <div className="relative p-4 sm:p-6">
                  <div className="relative h-[220px] sm:h-[300px] lg:h-[420px] rounded-2xl overflow-hidden">

                    <span className="absolute top-3 left-3 z-10 bg-teal-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Most Booked
                    </span>

                    <Swiper
                      modules={[Navigation, Pagination, Autoplay, Thumbs]}
                      navigation
                      pagination={{ clickable: true }}
                      autoplay={{ delay: 4000 }}
                      loop
                      thumbs={{ swiper: thumbsSwiper }}
                      className="h-full"
                    >
                      {room.images.map((img, idx) => (
                        <SwiperSlide key={idx}>
                          <div className="relative h-full w-full">
                            <Image
                              src={img}
                              alt={room.title}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20" />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  {/* THUMBNAILS (hide on very small screens) */}
                  <div className="hidden sm:block">
                    <Swiper
                      modules={[Thumbs]}
                      onSwiper={setThumbsSwiper}
                      slidesPerView={3}
                      spaceBetween={12}
                      watchSlidesProgress
                      className="mt-4"
                    >
                      {room.images.map((img, idx) => (
                        <SwiperSlide key={idx}>
                          <div className="relative h-[80px] rounded-xl overflow-hidden border">
                            <Image src={img} alt="" fill className="object-cover" />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>

                {/* CONTENT SECTION */}
                <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">
                        {room.title}
                      </h3>

                      <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-900 shadow-sm w-fit">
                        {room.price} <span className="text-xs">/ night</span>
                      </span>
                    </div>

                    <p className="mt-4 text-gray-600 text-sm sm:text-[15px] leading-relaxed">
                      {room.desc}
                    </p>

                    {/* FEATURES */}
                    <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-800">
                      {room.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-600" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* META + CTA */}
                  <div>
                    <div className="mt-8 pt-5 border-t flex flex-wrap gap-4 text-sm text-gray-700">
                      <span className="flex items-center gap-2">
                        <FaBed /> {room.meta.bed}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaBath /> {room.meta.bath}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaRulerCombined /> {room.meta.size}
                      </span>
                    </div>

                    <Link
                      href="https://bookings.resavenue.com/resBooking/rooms?regCode=TZVG1203&roomSearchId=51cc932e10db47048a8e45b7a7ff1ee5&adult_1=2"
                      target="_blank"
                    >
                      <button className="mt-6 w-full sm:w-auto bg-gray-900 hover:bg-black text-white px-8 py-3 rounded-xl text-sm font-semibold transition">
                        Book Now
                      </button>
                    </Link>
                  </div>
                </div>

              </div>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
}

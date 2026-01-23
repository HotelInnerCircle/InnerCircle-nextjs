"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { FaStar, FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import BookingForm from "../Forms/BookingForm";
import Link from "next/link";


export default function LuxuryRooms() {
  const [loading, setLoading] = useState(true);
  const [openForm, setOpenForm] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  // ---------- ORIGINAL ROOM DATA (extended slightly with rating/meta/tag) ----------
  const rooms = {
    standard: {
      SINGLE: {
        title: "Superior King — Single",
        desc: "Perfect comfort for solo travelers with elegant design and modern amenities.",
        price: "₹690",
        tag: "City View",
        rating: 4.9,
        meta: { bed: "1 Bed", bath: "1 Bath", size: "220 sqft" },
        badges: ["Popular"],
        amenities: [
          { icon: "wifi", label: "Free Wi-Fi" },
          { icon: "tv", label: "LED TV" },
          { icon: "ac", label: "A/C" },
          { icon: "bf", label: "Breakfast" },
          { icon: "bath", label: "Private Bathroom" },
          { icon: "bed", label: "Single Bed" },
        ],
        images: [
          "https://ik.imagekit.io/b7gayfw2v/Rooms/Standard%20Single%20Room/1-ss.webp",
          "https://ik.imagekit.io/b7gayfw2v/Rooms/Standard%20Single%20Room/2-ss.webp",
          "https://ik.imagekit.io/b7gayfw2v/Rooms/Standard%20Single%20Room/3-ss.webp",
        ],
      },
      DOUBLE: {
        title: "Superior King — Double",
        desc: "Spacious double room ideal for couples. Cozy, elegant and feature-rich.",
        price: "₹960",
        tag: "Courtyard",
        rating: 5.0,
        meta: { bed: "1 King Bed", bath: "1 Bath", size: "260 sqft" },
        badges: ["★ VIP"],
        amenities: [],
        images: ["/4.webp", "/4.webp", "/4.webp"],
      },
    },
    executive: {
      SINGLE: {
        title: "Executive King — Single",
        desc: "Executive comfort for business travelers — quiet workspace included.",
        price: "₹960",
        tag: "Executive Floor",
        rating: 4.9,
        meta: { bed: "1 Bed", bath: "1 Bath", size: "280 sqft" },
        badges: ["Limited Offer"],
        amenities: [],
        images: ["/4.webp", "/4.webp", "/4.webp"],
      },
      DOUBLE: {
        title: "Executive King — Double",
        desc: "Premium double room with superior luxury and executive amenities.",
        price: "₹1200",
        tag: "Luxury Suites",
        rating: 5.0,
        meta: { bed: "1 King Bed", bath: "2 Bath", size: "320 sqft" },
        badges: ["★ VIP"],
        amenities: [],
        images: ["/4.webp", "/4.webp", "/4.webp"],
      },
    },
  };

  // ---------- FLATTEN ROOMS -> ARRAY FOR GRID ----------
  const flatRooms = useMemo(
    () =>
      Object.entries(rooms).flatMap(([categoryKey, variants]) =>
        Object.entries(variants).map(([variantKey, room]) => ({
          id: `${categoryKey}-${variantKey}`,
          categoryKey,
          variantKey,
          ...room,
        }))
      ),
    []
  );

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  const handleBookNow = (room) => {
    setSelectedRoom(room);
    setOpenForm(true);
  };

  return (
    <>
      <section className="w-full bg-[#f5efe5] py-16 sm:py-20">
        {/* Heading */}
        <div className="text-center mb-12 px-4">
          <p className="text-xs sm:text-sm tracking-[0.35em] text-gray-500 uppercase mb-2">
            Rooms & Suites
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2b2620]">
            Luxury Rooms &amp; Suites
          </h2>
        </div>

        {/* GRID */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          {loading ? (
            // ---------- SHIMMER SKELETON ----------
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={idx}
                  className="bg-[#fdfaf6] rounded-2xl overflow-hidden border border-[#ebdfcf] shadow-[0_10px_30px_rgba(0,0,0,0.06)] animate-pulse"
                >
                  <div className="h-56 bg-gray-300" />
                  <div className="p-5 space-y-4">
                    <div className="h-5 bg-gray-300 rounded w-2/3" />
                    <div className="h-4 bg-gray-200 rounded w-1/2" />
                    <div className="flex gap-3 mt-2">
                      <div className="h-4 w-16 bg-gray-200 rounded" />
                      <div className="h-4 w-16 bg-gray-200 rounded" />
                      <div className="h-4 w-20 bg-gray-200 rounded" />
                    </div>
                    <div className="h-10 bg-gray-300 rounded-lg mt-4" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // ---------- REAL CARDS WITH ANIMATIONS ----------
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08 },
                },
              }}
            >
              {flatRooms.map((room, index) => (
                <motion.div
                  key={room.id}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, delay: index * 0.03 }}
                  className="bg-[#fdfaf6] rounded-2xl overflow-hidden border border-[#ebdfcf] shadow-[0_10px_30px_rgba(0,0,0,0.10)] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.16)] transition-all duration-300"
                >
                  {/* Image section */}
                  <div className="relative h-56 w-full">
                    <Image
                      src={room.images?.[0] || "/room-placeholder.jpg"}
                      alt={room.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Tag */}
                    {room.tag && (
                      <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white rounded-full border border-white/40">
                        {room.tag}
                      </span>
                    )}

                    {/* Rating */}
                    <div className="absolute top-4 right-4 flex items-center gap-1 text-xs font-semibold text-white bg-black/40 px-3 py-1 rounded-full">
                      <FaStar className="text-yellow-400 text-sm" />
                      <span>{room.rating?.toFixed(1) || "5.0"}</span>
                    </div>

                    {/* Price */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-xl font-semibold">
                        {room.price}
                        <span className="text-sm opacity-90"> /night</span>
                      </p>
                      <p className="text-[11px] uppercase tracking-wide text-white/70">
                        {room.categoryKey === "executive"
                          ? "Luxury Suites"
                          : "Luxury Rooms"}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#2b2620] mb-1">
                      {room.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                      {room.desc}
                    </p>

                    {/* Meta row */}
                    <div className="flex items-center justify-between text-xs sm:text-sm text-gray-700 mb-5">
                      <span className="flex items-center gap-1">
                        <FaBed />
                        {room.meta?.bed || "1 Bed"}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaBath />
                        {room.meta?.bath || "1 Bath"}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaRulerCombined />
                        {room.meta?.size || "250 sqft"}
                      </span>
                    </div>

                    {/* Button */}
                    {/* <button
                      onClick={() => handleBookNow(room)}
                      className="w-full py-3 bg-[#1f1c18] text-white rounded-lg text-sm font-medium tracking-wide hover:bg-black transition"
                    >
                      BOOK NOW
                    </button> */}
                    <Link href="https://bookings.resavenue.com/resBooking/rooms?regCode=TZVG1203&roomSearchId=51cc932e10db47048a8e45b7a7ff1ee5&adult_1=2"><button

                      className="w-full py-3 bg-[#1f1c18] text-white rounded-lg text-sm font-medium tracking-wide hover:bg-black transition"
                    >
                      BOOK NOW
                    </button></Link>

                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Bottom feature strip */}
        {!loading && (
          <div className="mt-16 bg-[#fbf7f0] border-t border-[#e1d5c3] py-7">
            <div className="flex flex-wrap justify-center gap-8 sm:gap-12 text-sm text-[#4a4339]">
              <Feature icon="🍳" label="Breakfast Included" />
              <Feature icon="🏊" label="Swimming Pool" />
              <Feature icon="📶" label="High Speed WiFi" />
              <Feature icon="🛎️" label="Custom Features" />
              <Feature icon="💆" label="Spa & Wellness" />
            </div>
          </div>
        )}
      </section>

      {/* BOOKING POPUP */}
      <AnimatePresence>
        {openForm && selectedRoom && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* If your BookingForm is already a modal, you can just render it directly */}
            <div className="max-h-[95vh] w-full max-w-xl overflow-y-auto">
              <BookingForm
                room={selectedRoom}
                onClose={() => {
                  setOpenForm(false);
                  setSelectedRoom(null);
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Feature({ icon, label }) {
  return (
    <div className="flex flex-col items-center gap-2 px-3">
      <span className="text-2xl">{icon}</span>
      <p className="text-xs sm:text-sm">{label}</p>
    </div>
  );
}

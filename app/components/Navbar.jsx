"use client";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaPhone } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [eventDropdown, setEventDropdown] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  // Need ref-style variable without re-rendering
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScrollY && current > 120) {
        setShowNavbar(false);   // hide navbar
      } else {
        setShowNavbar(true);    // show navbar
      }

      lastScrollY = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* WRAPPER THAT MOVES BOTH NAVBARS TOGETHER */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
      >
        {/* UPPER NAVBAR */}
        <div className="flex justify-between items-center px-10 py-3 text-white/90 
        backdrop-blur-md bg-black/20 border-b border-white/10">
          <div className="flex gap-5">
            <Link href="https://www.instagram.com/hotelinnercircle/"> <FaInstagram /></Link> <Link href="https://www.facebook.com/hotelinnercirclehyderabad"> <FaFacebookF /></Link> <Link href="https://www.linkedin.com/showcase/saboorks/?viewAsMember=true"><FaLinkedinIn /></Link>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-sm" />
            <a
              href="tel:+919848866614"
              className="hover:underline"
            >
              +919848866614
            </a>
          </div>

        </div>

        {/* MAIN NAVBAR */}
        <nav className="w-full flex justify-between items-center px-12 py-5 
        text-white bg-black/20 backdrop-blur-md border-b border-white/10 relative z-20">

          {/* Logo */}
          <Link href="/">
            <Image
              src="/logos/HIC-white-logo.png"
              alt="logo"
              width={220}
              height={240}
              className="w-auto h-16 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10">
            <li className="hover:text-orange-300 duration-200 cursor-pointer">Home</li>

            <Link href="/ice_spice.php">
              <li className="hover:text-orange-300 duration-200 cursor-pointer">Restaurant</li>
            </Link>

            <Link href="/rooms.php">
              <li className="hover:text-orange-300 duration-200 cursor-pointer">Rooms</li>
            </Link>

            <Link href="/gallery.php">
              <li className="hover:text-orange-300 duration-200 cursor-pointer">Gallery</li>
            </Link>

            {/* Dropdown */}
            <li
              className="relative cursor-pointer"
              onMouseEnter={() => setEventDropdown(true)}
              onMouseLeave={() => setEventDropdown(false)}
            >
              Special Events ▾
              {eventDropdown && (
                <div className="absolute top-6 left-0 bg-white text-black rounded shadow-lg py-3 w-60">
                  <Link href="/banqueting-halls-&-private-dining">
                    <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Banqueting Halls & Private Dining
                    </p>
                  </Link>
                </div>
              )}
            </li>

            <Link href="/contact.php">
              <li className="hover:text-orange-300 duration-200 cursor-pointer">Contact</li>
            </Link>
          </ul>

          {/* Right Button */}
          <div className="hidden md:flex items-center gap-6">
            <Link href='https://bookings.resavenue.com/resBooking/rooms?regCode=TZVG1203&roomSearchId=51cc932e10db47048a8e45b7a7ff1ee5&adult_1=2'><button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black duration-300">
              Reservation
            </button></Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden text-3xl cursor-pointer" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </nav>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-80 
        bg-[rgba(0,0,0,0.75)] backdrop-blur-xl text-white z-999
        transform ${open ? "translate-x-0" : "translate-x-full"} 
        transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]`}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-[#e8c27d]/20 bg-black/20">
          <span className="text-xl font-semibold tracking-wider text-[#e8c27d]">
            MENU
          </span>
          <FaTimes
            onClick={() => setOpen(false)}
            className="text-2xl cursor-pointer hover:text-[#e8c27d]"
          />
        </div>

        {/* MENU LIST */}
        <ul className="flex flex-col px-6 py-8 gap-6 text-[18px] tracking-wide font-light">
          <Link href="/" onClick={() => setOpen(false)}>
            <li className="group cursor-pointer flex justify-between items-center">
              <span className="group-hover:text-[#e8c27d]">Home</span>
              <div className="opacity-0 group-hover:opacity-100 w-2 h-2 bg-[#e8c27d] rounded-full" />
            </li>
          </Link>

          <Link href="/rooms.php" onClick={() => setOpen(false)}>
            <li className="group cursor-pointer flex justify-between items-center">
              <span className="group-hover:text-[#e8c27d]">Rooms</span>
              <div className="opacity-0 group-hover:opacity-100 w-2 h-2 bg-[#e8c27d] rounded-full" />
            </li>
          </Link>

          <Link href="/ice_spice.php" onClick={() => setOpen(false)}>
            <li className="group cursor-pointer flex justify-between items-center">
              <span className="group-hover:text-[#e8c27d]">Restaurant</span>
              <div className="opacity-0 group-hover:opacity-100 w-2 h-2 bg-[#e8c27d] rounded-full" />
            </li>
          </Link>

          <details className="group border-b border-[#e8c27d]/20 pb-4">
            <summary className="cursor-pointer flex justify-between items-center list-none">
              Special Events
              <span className="text-[#e8c27d] opacity-70">▾</span>
            </summary>

            <div className="ml-3 mt-4 flex flex-col gap-4 text-base text-gray-300">
              <Link href="/banqueting-halls-&-private-dining" onClick={() => setOpen(false)}>
                <p className="hover:text-[#e8c27d]">Banqueting Halls & Private Dining</p>
              </Link>
            </div>
          </details>
          <Link href="/gallery.php" onClick={() => setOpen(false)}>
            <li className="group cursor-pointer flex justify-between items-center">
              <span className="group-hover:text-[#e8c27d]">Gallery</span>
              <div className="opacity-0 group-hover:opacity-100 w-2 h-2 bg-[#e8c27d] rounded-full" />
            </li>
          </Link>
          <Link href="/contact.php" onClick={() => setOpen(false)}>
            <li className="group cursor-pointer flex justify-between items-center">
              <span className="group-hover:text-[#e8c27d]">Contact</span>
              <div className="opacity-0 group-hover:opacity-100 w-2 h-2 bg-[#e8c27d] rounded-full" />
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}

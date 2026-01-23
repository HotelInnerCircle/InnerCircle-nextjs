import React from 'react'
import Menu from './Menu'
import Image from 'next/image'

export default function page() {
  return (
    <div>
      <div className="relative  w-full h-[380px] md:h-[460px] overflow-hidden">
        <Image
          src="/Deluxe-King.avif"
          alt="Rooms Banner"
          fill
          className="object-cover brightness-75 -z-40"
        />
      </div>

      <Menu />
    </div>
  )
}

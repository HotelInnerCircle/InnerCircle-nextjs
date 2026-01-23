import AboutSection from '@/app/components/AboutSection'
import Hero from '@/app/components/Hero'
import RoomsSection from '@/app/components/RoomsSection'
import React from 'react'
import ImageGallery from '../gallery.php/Gallery'
import InstagramPost from '@/app/components/InstagramPost'
import TestimonialSection from '@/app/components/TestimonialSection'

export default function page() {
  return (
    <div> <Hero />
      <RoomsSection />
      <AboutSection />
      <ImageGallery />
      {/* <InstagramPost /> */}
      <TestimonialSection /></div>
  )
}

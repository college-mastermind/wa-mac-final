import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import bgBuildings from '@/assets/home/chaos/fot.png'

export default function Effortless() {
  return (
    <section className="relative bg-[#FFF6E6] overflow-hidden h-[642px]">
      {/* Background Buildings Image */}
      <div className="absolute bottom-0 w-full h-[200px] bg-[#FFF6E6]">
        <Image
          src={bgBuildings}
          alt="Buildings Background"
          fill
          className="object-cover w-full opacity-80"
          priority
          sizes="100vw"
        />
      </div>

      <div className="relative h-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        {/* Heading */}
        <h2 className="text-[#8B0000] text-4xl md:text-5xl font-bold text-center mb-6">
          Effortless Living
          <br />
          Starts With Us
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-lg text-center max-w-[800px] mb-8">
          We provide property management for homeowners, landlords, and tenants who value integrity, freedom, diligence, and professionalism. We maximize property potential with structured, proactive continuous maintenance and planning, allowing you to delegate with confidence and experience true relaxation. We create order and stability
        </p>

        {/* Button */}
        <Link 
          href="/contact"
          className="px-8 py-3 bg-[#8B0000] text-white rounded hover:bg-[#6B0000] transition-colors text-lg"
        >
          Book A Consultation
        </Link>
      </div>
    </section>
  )
}
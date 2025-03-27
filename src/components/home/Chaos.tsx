import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import bgBuildings from '@/assets/home/chaos/fot.png'
import timeIcon from '@/assets/chaos/alarm-clock-check.png'
import mentalIcon from '@/assets/chaos/brain.png'
import homeIcon from '@/assets/chaos/chart-candlestick.png'
import propertyIcon from '@/assets/chaos/house.png'

export default function Chaos() {
  return (
    <section className="relative bg-[#FCEEEE] overflow-hidden min-h-[642px] py-16">
      {/* Background Buildings Image */}
      <div className="absolute bottom-0 w-full h-[200px]">
        <Image
          src={bgBuildings}
          alt="Buildings Background"
          fill
          className="object-cover w-full opacity-80"
          priority
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-center mb-16">
          <span className="text-[#4A4A4A] text-[42px] font-bold">From </span>
          <span className="text-[#8B0000] text-[42px] font-bold">Chaos </span>
          <span className="text-[#4A4A4A] text-[42px] font-bold">To </span>
          <span className="text-[#8B0000] text-[42px] font-bold">Order</span>
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-4 gap-8 max-w-[1200px] mx-auto mb-12">
          {/* Reclaim Your Time */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <Image
                src={timeIcon}
                alt="Time Management"
                width={64}
                height={64}
                className="text-[#8B0000]"
              />
            </div>
            <h3 className="text-[#8B0000] text-xl font-bold mb-2">
              Reclaim Your
              <br /> Time
            </h3>
          </div>

          {/* Reduce mental clutter */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <Image
                src={mentalIcon}
                alt="Mental Clarity"
                width={64}
                height={64}
                className="text-[#8B0000]"
              />
            </div>
            <h3 className="text-[#8B0000] text-xl font-bold mb-2">
              Reduce mental
              <br /> clutter
            </h3>
          </div>

          {/* Restore order to your home */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <Image
                src={homeIcon}
                alt="Home Order"
                width={64}
                height={64}
                className="text-[#8B0000]"
              />
            </div>
            <h3 className="text-[#8B0000] text-xl font-bold mb-2">
              Restore order to
              <br /> your home
            </h3>
          </div>

          {/* Increase property values */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <Image
                src={propertyIcon}
                alt="Property Value"
                width={64}
                height={64}
                className="text-[#8B0000]"
              />
            </div>
            <h3 className="text-[#8B0000] text-xl font-bold mb-2">
              Increase
              <br /> property values
            </h3>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link 
            href="/contact" 
            className="inline-block bg-[#8B0000] text-white px-8 py-3 rounded text-lg font-medium hover:bg-[#6B0000] transition-colors"
          >
            Join the Journey
          </Link>
        </div>
      </div>
    </section>
  )
}
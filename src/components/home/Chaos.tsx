import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import bgBuildings from '@/assets/home/chaos/fot.png'

export default function Chaos() {
  return (
    <section className="relative bg-[#FCEEEE] overflow-hidden h-[565px]">
      {/* Background Buildings Image */}
      <div className="absolute bottom-0 w-full h-[200px] bg-[#FCEEEE]">
        <Image
          src={bgBuildings}
          alt="Buildings Background"
          fill
          className="object-cover w-full opacity-80"
          priority
          sizes="100vw"
        />
      </div>

      <div className="relative h-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="w-[1223px] h-[344px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 h-full">
            {/* Left Content */}
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-6">
                Go From
                <br />
                Chaos To
                <br />
                Order
              </h2>
            </div>

            {/* Right Content */}
            <div className="md:w-1/2">
              <p className="text-gray-700 text-lg mb-8 max-w-[550px]">
                At W.A. Management & Consulting, we transform the complexities of property management into a seamless, well structured system that works effortlessly for homeowners, landlords, and tenants. The structure creates balance from planning to execution, down to maintenance and sustainability. We tailor the plan, using steps that ensure consistency, stability, and longevity.
              </p>
              <Link 
                href="/about" 
                className="inline-block bg-[#8B0000] text-white px-8 py-3 rounded hover:bg-[#6B0000] transition-colors"
              >
                Learn more About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import bgElip from '@/assets/home/bgElip.svg'
import familyImage from '@/assets/home/Subtract.svg' 
import logo from '@/assets/home/bgLogo.png'

export default function Hero() {
  return (
    <section className="relative min-h-[700px] bg-[#FDF8F0] overflow-hidden">
      {/* Background Ellipse */}
      <div className="absolute right-0 top-0 w-3/4 h-full">
        <Image
          src={bgElip}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative h-full">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24">
          <div className="flex flex-col md:flex-row justify-between items-start">
            {/* Text Content */}
            <div className="md:w-2/5 z-10 pt-8">
              <h1 className="text-[32px] md:text-[38px] lg:text-[42px] font-bold leading-[1.2] tracking-tight mb-4">
                <div>
                  <span className="text-[#8B0000]">Your </span>
                  <span className="text-[#D4AF37]">Home</span>
                  <span className="text-[#8B0000]">, Fully Managed.</span>
                </div>
                <div className="mt-1">
                  <span className="text-[#8B0000]">Your Time, Fully Yours.</span>
                </div>
              </h1>
              <p className="text-[#4A4A4A] text-[16px] md:text-[18px] leading-relaxed mb-8">
                Delegate Your Property Management<br />
                To Us And Experience True Freedom.
              </p>
              <Link 
                href="/services" 
                className="inline-block bg-[#8B0000] text-white px-8 py-2.5 rounded text-base font-medium hover:bg-[#6B0000] transition-colors"
              >
                Explore our services
              </Link>
            </div>

            {/* Image Container */}
            <div className="md:w-3/5 mt-8 md:mt-0 relative md:absolute md:right-0 md:top-0 md:h-full">
              {/* Background Logo */}
              <div className="absolute inset-0 z-0 flex items-center justify-center opacity-5">
                <Image
                  src={logo}
                  alt="Background Logo"
                  width={800}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              </div>
              
              {/* Family Image */}
              <div className="relative w-full h-[500px] md:h-[700px] z-10">
                <Image
                  src={familyImage}
                  alt="Happy Family"
                  fill
                  className="object-contain object-right-bottom"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

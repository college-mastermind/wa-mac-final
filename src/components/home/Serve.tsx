import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import homeIcon from '@/assets/serve/icon.png'
import bgServe from '@/assets/serve/serve.png'

export default function Serve() {
  return (
    <section className="relative h-[793px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={bgServe}
          alt="Background"
          width={1440}
          height={793}
          className="object-cover w-full h-full"
          priority
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        {/* Section Title */}
        <h2 className="text-[42px] font-bold text-white text-center mb-16">
          Who We Serve
        </h2>

        <div className="grid grid-cols-12 gap-8">
          {/* Left Card - Introduction */}
          <div className="col-span-5">
            <div className="bg-[#FDF8F0] p-10 rounded-lg h-full">
              <h3 className="text-[32px] font-bold leading-tight mb-6">
                <span className="text-[#D4AF37]">The Right Support for Those</span>
                <br />
                <span className="text-[#D4AF37]">Who Own, Lease, and Live</span>
              </h3>
              <p className="text-[#4A4A4A] text-lg mb-8 leading-relaxed">
                We proudly serve Homeowners, Landlords and tenants. No matter your needs, we ensure the property works for you and not the other way around.
              </p>
              <Link 
                href="/contact"
                className="inline-block bg-[#D4AF37] text-white px-8 py-3 rounded text-lg font-medium hover:bg-[#B39020] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Middle Card - Home Owner */}
          <div className="col-span-3">
            <div className="bg-[#F5F5F5] p-8 rounded-lg h-full">
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  <Image
                    src={homeIcon}
                    alt="Home Owner Icon"
                    width={48}
                    height={48}
                    className="text-[#8B0000]"
                  />
                </div>
                <h4 className="text-[#8B0000] text-2xl font-bold mb-4">
                  Home Owner
                </h4>
                <p className="text-[#4A4A4A] text-center mb-6 leading-relaxed">
                  Trust us to protect and improve your home with expert care
                </p>
                <Link 
                  href="/services/home-owner"
                  className="inline-flex items-center text-[#8B0000] hover:text-[#6B0000] font-medium"
                >
                  <span className="mr-2">Explore</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side Cards Container */}
          <div className="col-span-4 flex flex-col gap-6">
            {/* Landlord Card */}
            <div className="bg-white/95 p-6 rounded-lg border-2 border-[#8B0000]">
              <h4 className="text-[#8B0000] text-xl font-bold mb-3">
                Landlord
              </h4>
              <p className="text-[#4A4A4A] text-sm mb-4">
                We help landlords maximize their rental income, minimize vacancies, and handle tenants with ease.
              </p>
              <Link 
                href="/services/landlord"
                className="inline-flex items-center text-[#8B0000] hover:text-[#6B0000] font-medium text-sm"
              >
                <span className="mr-2">Explore</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Tenant Card */}
            <div className="bg-white/95 p-6 rounded-lg border-2 border-[#8B0000]">
              <h4 className="text-[#8B0000] text-xl font-bold mb-3">
                Tenant
              </h4>
              <p className="text-[#4A4A4A] text-sm mb-4">
                We ensure tenant have safe, smooth and well managed rental experience
              </p>
              <Link 
                href="/services/tenant"
                className="inline-flex items-center text-[#8B0000] hover:text-[#6B0000] font-medium text-sm"
              >
                <span className="mr-2">Explore</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

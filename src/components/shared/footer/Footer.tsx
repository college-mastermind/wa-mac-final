import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/footer/footerLogo.png'
import buildingsBg from '@/assets/footer/footer.png'
import phoneIcon from '@/assets/footer/iconFooter.svg'
import facebookIcon from '@/assets/footer/icons/facebook.svg'
import instagramIcon from '@/assets/footer/icons/insta.svg'
import youtubeIcon from '@/assets/footer/icons/youtube.svg'

export default function Footer() {
  return (
    <footer className="relative bg-[#1A1A1A] text-white min-h-[500px]">
      {/* Background Buildings Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={buildingsBg}
          alt="City Buildings"
          className="w-full h-full object-cover opacity-25"
          width={1920}
          height={600}
          loading="lazy"
          quality={100}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRseHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/2wBDAR0XFx4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
      </div>

      {/* Content */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left Section - Logo */}
          <div className="flex-shrink-0">
            <Image
              src={logo}
              alt="Wa Management & Consulting"
              width={300}
              height={120}
              className="h-20 w-auto"
              loading="lazy"
              quality={90}
            />
          </div>

          {/* Middle Section - Navigation and Social Links Side by Side */}
          <div className="flex space-x-16">
            {/* Navigation Links */}
            <div className="flex flex-col space-y-3">
              <Link href="/" className="hover:text-gray-300 transition-colors">
                Home
              </Link>
              <Link href="/services" className="hover:text-gray-300 transition-colors">
                Services
              </Link>
              <Link href="/about" className="hover:text-gray-300 transition-colors">
                About us
              </Link>
              <Link href="/contact" className="hover:text-gray-300 transition-colors">
                Contact us
              </Link>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-col space-y-2">
              <Link href="#" className="text-white hover:opacity-80 transition-opacity flex items-center space-x-2">
                <Image src={facebookIcon} alt="Facebook" width={24} height={24} />
                <span>Facebook</span>
              </Link>
              <Link href="#" className="text-white hover:opacity-80 transition-opacity flex items-center space-x-2">
                <Image src={instagramIcon} alt="Instagram" width={24} height={24} />
                <span>Instagram</span>
              </Link>
              <Link href="#" className="text-white hover:opacity-80 transition-opacity flex items-center space-x-2">
                <Image src={youtubeIcon} alt="Youtube" width={24} height={24} />
                <span>Youtube</span>
              </Link>
            </div>
          </div>

          {/* Right Section - Email and Call Us */}
          <div className="flex flex-col space-y-4">
            {/* Email Subscription */}
            <div className="flex w-full max-w-[300px]">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2 bg-[#2A2A2A] rounded-l text-white placeholder-gray-400 focus:outline-none"
              />
              <button className="bg-[#641C1C] text-white px-6 py-2 rounded-r whitespace-nowrap hover:bg-[#4A1515] transition-colors">
                Subscribe Now
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex items-center space-x-3">
              <div className="bg-white rounded-full p-2">
                <Image
                  src={phoneIcon}
                  alt="Phone"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <div>
                <p className="text-sm text-gray-400">Call Us at</p>
                <a href="tel:(463) 333-3896" className="text-lg font-medium hover:text-gray-300 transition-colors">
                  (463) 333-3896
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

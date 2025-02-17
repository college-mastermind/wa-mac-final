"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import logo from '@/assets/logo/logo.svg'

export default function Navbar() {
  // Use useEffect to handle client-side state
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render anything until mounted
  if (!mounted) {
    return null
  }

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={logo}
                alt="Wa Management & Consulting"
                width={60}
                height={60}
                className="h-12 w-auto"
                priority
                quality={90}
                unoptimized={false}
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#641C1C]"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            <Link 
              href="/" 
              className={`text-[#641C1C] text-sm font-medium px-3 py-2 transition-colors relative
                ${pathname === '/' ? 'after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-[#641C1C]' : ''}`}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className={`text-[#641C1C] text-sm font-medium px-3 py-2 transition-colors relative
                ${pathname === '/services' ? 'after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-[#641C1C]' : ''}`}
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className={`text-[#641C1C] text-sm font-medium px-3 py-2 transition-colors relative
                ${pathname === '/about' ? 'after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-[#641C1C]' : ''}`}
            >
              About us
            </Link>
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden md:block">
            <Link 
              href="/contact" 
              className="bg-[#641C1C] text-white text-sm font-medium px-5 py-2 rounded hover:bg-[#4A1515] transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mounted && (
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                href="/" 
                className={`block px-3 py-2 text-[#641C1C] text-sm font-medium ${pathname === '/' ? 'bg-gray-50' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className={`block px-3 py-2 text-[#641C1C] text-sm font-medium ${pathname === '/services' ? 'bg-gray-50' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/about" 
                className={`block px-3 py-2 text-[#641C1C] text-sm font-medium ${pathname === '/about' ? 'bg-gray-50' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About us
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-[#641C1C] text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
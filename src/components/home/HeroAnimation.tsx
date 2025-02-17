"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { sliderData } from '@/app/data/sliderData';

export default function HeroAnimation() {
  const [slides] = useState([...sliderData, ...sliderData]);

  return (
    <section className="relative w-full overflow-hidden bg-[#FDF6EC]">
      <div className="relative w-full max-w-[2055px] mx-auto">
        <div className="relative h-[400px] sm:h-[600px] md:h-[1000px]">
          <motion.div 
            className="flex absolute left-1/2 -translate-x-1/2 h-full"
            animate={{
              x: [0, '-40%']
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={`${slide.id}-${index}`}
                className="w-screen sm:w-[600px] md:w-[910px] flex-shrink-0 px-4 sm:px-6 md:px-8"
              >
                <div className="h-full flex flex-col justify-start pt-4 sm:pt-8 md:pt-16">
                  <motion.div 
                    className="relative w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="w-full max-w-[657px] mx-auto mb-4 sm:mb-6 md:mb-8">
                      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#800000] mb-2 sm:mb-4 md:mb-6 text-center">
                        {slide.title}
                      </h2>
                      <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed 
                                  line-clamp-3 sm:line-clamp-none text-center">
                        {slide.description}
                      </p>
                    </div>
                    <div className="relative w-[300px] sm:w-[600px] md:w-[910px] 
                                  h-[200px] sm:h-[350px] md:h-[512px] 
                                  mx-auto">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        priority
                        className="object-contain"
                        sizes="(max-width: 640px) 300px,
                               (max-width: 768px) 600px,
                               910px"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Progress Bar Container - Hidden on mobile */}
        <div className="hidden sm:block absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2">
          <div className="relative w-[280px] sm:w-[350px] md:w-[447px] h-[40px]">
            {/* Static Gold Progress Bar */}
            <div className="absolute inset-0 bg-[#D4AF37]/20" />

            {/* Moving Button */}
            <motion.div 
              className="absolute top-0 left-0 z-10 
                        w-[70px] sm:w-[90px] md:w-[111px] h-full
                        bg-[#800000] flex items-center justify-center"
              initial={{ x: 0 }}
              animate={{ 
                x: [
                  0,
                  `calc(${window.innerWidth < 640 ? 280 : window.innerWidth < 768 ? 350 : 447}px - ${window.innerWidth < 640 ? 70 : window.innerWidth < 768 ? 90 : 111}px)`
                ]
              }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6 text-white"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import repairIcon from '@/assets/priority/lucide-1.png'
import projectIcon from '@/assets/priority/lucide-2.png'
import maintenanceIcon from '@/assets/priority/lucide-3.png'
import lawnIcon from '@/assets/priority/lucide-4.png'
import laundryIcon from '@/assets/priority/lucide-5.png'
import organizationIcon from '@/assets/priority/lucide.png'
// import scheduleIcon from '@/assets/priority/schedule.svg'
// import investmentIcon from '@/assets/priority/investment.svg'
// import rentalIcon from '@/assets/priority/rental.svg'

export default function Priority() {
  const services = [
    {
      icon: repairIcon,
      title: "Repairs and To-Do Lists",
      description: "Turn your To-Do-Lists into Done Lists! Constant issues with your home steal your time, energy, and peace of mind.",
      link: "/services/repairs"
    },
    {
      icon: projectIcon,
      title: "Project Management",
      description: "Turn your home projects over to experts who manage every detail, ensuring better quality, faster timelines, and less stress.",
      link: "/services/project-management"
    },
    {
      icon: maintenanceIcon,
      title: "Preventative Maintenance",
      description: "Your team keeps an eye on your home, spotting issues early and preventing costly surprises down the line.",
      link: "/services/maintenance"
    },
    {
      icon: lawnIcon,
      title: "Lawn Care",
      description: "No more overgrown yards, debris, or sloppy work. Your yard always looks sharp, and you never have to think about it.",
      link: "/services/lawn-care"
    },
    {
      icon: laundryIcon,
      title: "Laundry and Ironing",
      description: "Your clothes stay washed, pressed, and ready so you show up sharp and make a strong impression, every time.",
      link: "/services/laundry"
    },
    {
      icon: organizationIcon,
      title: "Home Organization",
      description: "Inspired by the pantries, closets, or cabinets you've seen online? We turn your vision into a beautifully organized space that actually works",
      link: "/services/organization"
    }
    // {
    //   icon: scheduleIcon,
    //   title: "Scheduling and Coordination",
    //   description: "Never waste time making calls or waiting on repairmen. Use your preferred vendors, without having to manage or coordinate them.",
    //   link: "/services/scheduling"
    // },
    // {
    //   icon: investmentIcon,
    //   title: "Investment Properties",
    //   description: "No more tenant communication, issues, or emergencies. Preserve your time and anonymity and stay completely hands-off.",
    //   link: "/services/investment"
    // },
    // {
    //   icon: rentalIcon,
    //   title: "Short Term Rentals",
    //   description: "Don't become a housekeeper. Your investments should generate income (not laundry, cleaning, and constant turnover).",
    //   link: "/services/rentals"
    // }
  ]

  return (
    <section className="bg-[#FDF8F0] py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-[#8B0000] text-[42px] font-bold mb-2">Your Property</h2>
          <h2 className="text-[#8B0000] text-[42px] font-bold">Our Priority</h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-6">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={48}
                  height={48}
                  className="text-[#8B0000]"
                />
              </div>
              <h3 className="text-[#111827] text-xl font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-[#4B5563] mb-4 min-h-[72px]">
                {service.description}
              </p>
              <Link 
                href={service.link}
                className="inline-flex text-[#8B0000] hover:text-[#6B0000] font-medium"
              >
                learn more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

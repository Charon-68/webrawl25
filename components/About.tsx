'use client'

import { Award, Users, Calendar } from 'lucide-react'
import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

import aboutus1 from './assets/aboutus1.jpg'
import aboutus2 from './assets/aboutus2.jpg'
import aboutus3 from './assets/aboutus3.jpg'
import aboutus4 from './assets/aboutus4.jpg'


const achievements = [
  { icon: Award, title: 'GC Winners', year: '2024' },
  { icon: Users, title: '500+ Residents', year: 'Active' },
  { icon: Calendar, title: 'Established', year: '1985' },
]

// Updated array with real Unsplash URLs
const hostelImages = [
  { 
    id: 1, 
    alt: 'image1', 
    src: aboutus1
  },
  { 
    id: 2, 
    alt: 'image2', 
    src: aboutus2
  },
  { 
    id: 3, 
    alt: 'image3', 
    src: aboutus3
  },
  { 
    id: 4, 
    alt: 'image4', 
    src: aboutus4
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-yellow-100 dark:bg-yellow-600 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <ScrollReveal className="space-y-6">
            <div>
              <h3 className="font-serif font-bold text-3xl text-gray-900 dark:text-white mb-4">
                Our History
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Established in 1985, our hostel has been a home to thousands of students,
                providing not just accommodation but a nurturing environment for personal
                and academic growth. Over the years, we have built a strong community
                that values respect, responsibility, and excellence.
              </p>
            </div>

            <div>
              <h3 className="font-serif font-bold text-3xl text-gray-900 dark:text-white mb-4">
                Our Culture
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We believe in fostering a culture of inclusivity, where every resident
                feels valued and supported. Our community celebrates diversity and
                encourages students to participate in various cultural, sports, and
                academic activities that help them grow beyond the classroom.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <ScrollReveal
                    key={index}
                    duration={0.5}
                    delay={index * 0.1}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-sm text-gray-900 dark:text-white">
                      {achievement.title}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {achievement.year}
                    </p>
                  </ScrollReveal>
                )
              })}
            </div>
          </ScrollReveal>

          {/* Image Grid */}
          <ScrollReveal className="grid grid-cols-2 gap-4">
            {hostelImages.map((image, index) => (
              <ScrollReveal
                key={image.id}
                duration={0.5}
                delay={index * 0.1}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square rounded-lg overflow-hidden shadow-lg group"
              >
                {/* Next.js Image Component */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Subtle Overlay on Hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </ScrollReveal>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
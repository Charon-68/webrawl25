'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

import gallery1 from './assets/gallery/gallery1.jpg';
import gallery2 from './assets/gallery/gallery2.jpg';
import gallery3 from './assets/gallery/gallery3.jpg';
import gallery4 from './assets/gallery/gallery4.jpg';
import gallery5 from './assets/gallery/gallery5.jpg';
import gallery6 from './assets/gallery/gallery6.jpg';
import gallery7 from './assets/gallery/gallery7.jpg';


// Replace these placeholders with your actual images from your assets folder
// e.g., import image1 from '@/assets/image1.jpg' or use string paths like '/images/hostel.jpg'
const galleryImages = [
  { 
    id: 1, 
    title: 'Hostel Building Exterior', 
    src: gallery1, 
    description: 'Modern architecture surrounded by greenery' 
  },
  { 
    id: 2, 
    title: 'Student Lounge', 
    src: gallery2, 
    description: 'A comfortable space for relaxation' 
  },
  { 
    id: 3, 
    title: 'Study Hall', 
    src: gallery3, 
    description: 'Quiet environment for academic focus' 
  },
  { 
    id: 4, 
    title: 'Study Hall', 
    src: gallery4, 
    description: 'Quiet environment for academic focus' 
  },{ 
    id: 5, 
    title: 'Study Hall', 
    src: gallery5, 
    description: 'Quiet environment for academic focus' 
  },{ 
    id: 6, 
    title: 'Study Hall', 
    src: gallery6, 
    description: 'Quiet environment for academic focus' 
  },{ 
    id: 7, 
    title: 'Study Hall', 
    src: gallery7, 
    description: 'Quiet environment for academic focus' 
  },
]

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95
  })
}

export default function Gallery() {
  const [[page, direction], setPage] = useState([0, 0])
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // We wrap the index to ensure it stays valid within the array length
  const imageIndex = Math.abs(page % galleryImages.length)

  const paginate = useCallback((newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }, [page])

  // Auto-play logic
  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      paginate(1)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [isAutoPlaying, paginate])

  return (
    <section id="gallery" className="py-20 bg-yellow-100 dark:bg-yellow-600 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4" />
        </motion.div>

        {/* Carousel Container */}
        <div 
          className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-gray-200 dark:bg-gray-800"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Image */}
              <Image
                src={galleryImages[imageIndex].src}
                alt={galleryImages[imageIndex].title}
                className="w-full h-full object-cover"
              />
              
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute inset-0 flex items-center justify-between p-4 z-10 pointer-events-none">
            <button
              onClick={() => paginate(-1)}
              className="pointer-events-auto p-3 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md text-white transition-all transform hover:scale-110 border border-white/20"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="pointer-events-auto p-3 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md text-white transition-all transform hover:scale-110 border border-white/20"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                    const direction = idx > imageIndex ? 1 : -1
                    setPage([page + (idx - imageIndex), direction])
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === imageIndex 
                    ? 'bg-white w-6' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
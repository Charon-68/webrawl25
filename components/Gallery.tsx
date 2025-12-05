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
  const [selected, setSelected] = useState<number | null>(null)

  // open image in lightbox
  const openImage = (id: number) => setSelected(id)
  const closeImage = () => setSelected(null)

  // drag dismiss handler
  const handleDragEnd = (_: any, info: { offset: { x: number; y: number }; velocity: { x: number; y: number } }) => {
    const shouldClose = Math.abs(info.offset.y) > 150 || Math.abs(info.velocity.y) > 800
    if (shouldClose) closeImage()
  }

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

        {/* Masonry Gallery */}
        <div className="mx-auto max-w-7xl">
          <div className="columns-2 md:columns-3 gap-4 [&>div]:mb-4">
            {galleryImages.map((img) => (
              <div key={img.id} className="break-inside-avoid rounded-lg overflow-hidden">
                <motion.div
                  layoutId={`gallery-${img.id}`}
                  whileHover={{ scale: 1.03 }}
                  className="cursor-pointer rounded-lg overflow-hidden relative"
                  onClick={() => openImage(img.id)}
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    placeholder="blur"
                    className="w-full h-auto object-cover rounded-lg transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* backdrop */}
              <motion.div
                className="absolute inset-0 bg-black/70"
                onClick={closeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              {/* Image panel */}
              <motion.div
                layoutId={`gallery-${selected}`}
                className="relative z-10 max-w-5xl w-full mx-4 md:mx-0 rounded-xl overflow-hidden"
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                onDragEnd={handleDragEnd}
                initial={{ y: 50, opacity: 0, scale: 0.98 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 50, opacity: 0, scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <div className="bg-gray-900/5 dark:bg-black/40 p-4 md:p-6">
                  <Image
                    src={galleryImages.find(g => g.id === selected)!.src}
                    alt={galleryImages.find(g => g.id === selected)!.title}
                    placeholder="blur"
                    className="w-full h-[70vh] md:h-[80vh] object-contain rounded-md"
                    sizes="100vw"
                  />

                  {/* Close button */}
                  <button
                    onClick={closeImage}
                    aria-label="Close image"
                    className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md"
                  >
                    ×
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
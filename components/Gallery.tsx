'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useState } from 'react'

const galleryImages = [
  { id: 1, title: 'Hostel Building', category: 'exterior' },
  { id: 2, title: 'Dining Hall', category: 'facilities' },
  { id: 3, title: 'Common Room', category: 'facilities' },
  { id: 4, title: 'Study Hall', category: 'facilities' },
  { id: 5, title: 'Gymnasium', category: 'facilities' },
  { id: 6, title: 'Garden Area', category: 'exterior' },
  { id: 7, title: 'Recreation Room', category: 'facilities' },
  { id: 8, title: 'Library', category: 'facilities' },
  { id: 9, title: 'Hostel Entrance', category: 'exterior' },
  { id: 10, title: 'Sports Ground', category: 'exterior' },
  { id: 11, title: 'Mess Kitchen', category: 'facilities' },
  { id: 12, title: 'Hostel Corridor', category: 'interior' },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (id: number) => {
    setSelectedImage(id)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Take a virtual tour of our facilities and spaces
            </p>
          </motion.div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => openLightbox(image.id)}
                className="mb-4 break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg bg-gradient-to-br from-primary to-primary-dark aspect-auto"
              >
                {/* Placeholder Image */}
                <div className="w-full h-64 flex items-center justify-center text-white/20 text-xl font-serif">
                  {image.title}
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="text-white text-sm font-semibold px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg"
                  >
                    Click to view
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[90vh] w-full"
            >
              <div className="w-full h-full bg-gradient-to-br from-primary to-primary-dark rounded-lg overflow-hidden">
                <div className="aspect-video flex items-center justify-center text-white/30 text-4xl font-serif">
                  {galleryImages.find(img => img.id === selectedImage)?.title}
                </div>
              </div>
              <p className="text-white text-center mt-4 text-lg">
                {galleryImages.find(img => img.id === selectedImage)?.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}


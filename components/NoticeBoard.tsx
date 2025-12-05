'use client'

import { motion } from 'framer-motion'
import { Bell, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const announcements = [
  {
    id: 1,
    title: 'Hostel Meeting Scheduled',
    message: 'All residents are requested to attend the monthly hostel meeting on Friday at 6 PM.',
    date: '2024-01-15',
    priority: 'high',
  },
  {
    id: 2,
    title: 'Mess Menu Updated',
    message: 'New weekly menu has been updated. Check the notice board for details.',
    date: '2024-01-14',
    priority: 'medium',
  },
  {
    id: 3,
    title: 'Sports Day Registration Open',
    message: 'Register for the annual hostel sports day. Last date: January 20th.',
    date: '2024-01-13',
    priority: 'high',
  },
  {
    id: 4,
    title: 'Wi-Fi Maintenance',
    message: 'Wi-Fi services will be unavailable on Sunday from 2 AM to 6 AM for maintenance.',
    date: '2024-01-12',
    priority: 'medium',
  },
]

export default function NoticeBoard() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length)
    }, 5000) // Change announcement every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const currentAnnouncement = announcements[currentIndex]

  return (
    <section className="py-20 bg-yellow-100/70 dark:bg-yellow-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
        >
          {/* Header */}
          <div className="bg-primary text-white px-6 py-4 flex items-center space-x-3">
            <Bell className="w-6 h-6" />
            <h2 className="font-serif font-bold text-2xl">Notice Board</h2>
          </div>

          {/* Ticker */}
          <div className="relative overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="px-6 py-6"
            >
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${
                  currentAnnouncement.priority === 'high' ? 'bg-red-500' : 'bg-yellow-500'
                }`} />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                      {currentAnnouncement.title}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {currentAnnouncement.date}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {currentAnnouncement.message}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
              </div>
            </motion.div>

            {/* Indicators */}
            <div className="flex justify-center space-x-2 pb-4">
              {announcements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary w-6'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to announcement ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


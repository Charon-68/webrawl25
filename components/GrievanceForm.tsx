'use client'

import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import toast from 'react-hot-toast'

export default function GrievanceForm() {
  const [formData, setFormData] = useState({
    name: '',
    roomNumber: '',
    issueDescription: '',
  })

  const [showConfetti, setShowConfetti] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    // Set window size for confetti
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Log form data to console
    console.log('Grievance Form Data:', formData)

    // Show confetti animation for 5 seconds
    setShowConfetti(true)
    setTimeout(() => {
      setShowConfetti(false)
    }, 5000)

    // Show success toast
    toast.success('Grievance submitted successfully!', {
      duration: 4000,
      icon: '✅',
      style: {
        background: '#10b981',
        color: '#fff',
        padding: '16px',
        borderRadius: '8px',
        fontSize: '16px',
      },
    })

    // Reset form
    setFormData({
      name: '',
      roomNumber: '',
      issueDescription: '',
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="grievance" className="py-20 bg-white dark:bg-gray-900 relative">
      {/* Confetti Animation */}
      {showConfetti && windowSize.width > 0 && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.3}
        />
      )}


      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
            Submit a Grievance
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a concern or issue? Fill out the form below and we'll address it promptly.
          </p>
        </motion.div>

        {/* Grievance Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Name Field */}
            <div>
              <label 
                htmlFor="name" 
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                minLength={2}
                maxLength={100}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Enter your full name"
                aria-describedby="name-error"
              />
            </div>

            {/* Room Number Field */}
            <div>
              <label 
                htmlFor="roomNumber" 
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Room Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="roomNumber"
                name="roomNumber"
                value={formData.roomNumber}
                onChange={handleChange}
                required
                pattern="^[A-Za-z0-9\s\-/]+$"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="e.g., 101, A-205, Block-B/301"
                aria-describedby="room-error"
              />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Enter your room number or block/room combination
              </p>
            </div>

            {/* Issue Description Field */}
            <div>
              <label 
                htmlFor="issueDescription" 
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Issue Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="issueDescription"
                name="issueDescription"
                value={formData.issueDescription}
                onChange={handleChange}
                required
                minLength={10}
                maxLength={1000}
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                placeholder="Please describe your issue or concern in detail..."
                aria-describedby="description-error"
              />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Minimum 10 characters, maximum 1000 characters
              </p>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary-dark transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
              <span>Submit Grievance</span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}


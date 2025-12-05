'use client'

import { motion } from 'framer-motion'
import { Send, Facebook, Instagram, Linkedin } from 'lucide-react'
import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import toast from 'react-hot-toast'

export default function Contact() {
  const [grievanceFormData, setGrievanceFormData] = useState({
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

  const handleGrievanceSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Log form data to console
    console.log('Grievance Form Data:', grievanceFormData)

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
    setGrievanceFormData({
      name: '',
      roomNumber: '',
      issueDescription: '',
    })
  }

  const handleGrievanceChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setGrievanceFormData({
      ...grievanceFormData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 relative">
      {/* Confetti Animation - Full Screen */}
      {showConfetti && windowSize.width > 0 && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.3}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 9999,
          }}
        />
      )}

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
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get in touch with us for any queries or concerns
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-serif font-bold text-2xl text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Were here to help! Reach out to us through any of the following channels.
              </p>
            </div>

            {/* Social Media Handles */}
            <div className="space-y-4">
              <motion.a
                href="https://www.facebook.com/h2iitb"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Facebook className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Facebook</h4>
                  <p className="text-gray-600 dark:text-gray-400">@h2iitb</p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.instagram.com/the_wild_ones_h2/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Instagram</h4>
                  <p className="text-gray-600 dark:text-gray-400">@the_wild_ones_h2</p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/company/hostel2iitbombay/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">LinkedIn</h4>
                  <p className="text-gray-600 dark:text-gray-400">Hostel 2 IIT Bombay</p>
                </div>
              </motion.a>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5312.218722673809!2d72.9119282110516!3d19.13629015794443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b80705fb82d1%3A0x2b6b5441a804bae4!2sH2%20Canteen!5e0!3m2!1sen!2sin!4v1764921071393!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </motion.div>

          {/* Grievance Form */}

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
                Submit a Grievance
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Please fill out the form below to register your complaint.
              </p>
            </motion.div>

            {/* Google Form Window */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              // "Small window" look: constrained width, rounded corners, shadow
              className="mx-auto max-w-xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              {/* Iframe Container */}
              <div className="w-full h-[700px]">
                <iframe
                  src="https://forms.gle/SkcZN8jQ6dR83ADNA"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Grievance Form"
                >
                  Loading form...
                </iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

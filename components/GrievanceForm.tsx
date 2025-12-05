'use client'

import { motion } from 'framer-motion'

export default function GrievanceForm() {
  return (
    <section id="grievance" className="py-20 bg-white dark:bg-gray-900 relative">
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
          <div className="w-full h-[600px]">
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
    </section>
  )
}
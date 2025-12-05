'use client'

import ScrollReveal from './ScrollReveal'
import FacilitiesGrid from './FacilitiesGrid'

export default function Facilities() {
  return (
    <section
      id="facilities"
      className="py-20 bg-yellow-100/60 dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
            Our Facilities
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4" />
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Bento-style grid showcasing the comfort, safety, and energy of our
            hostel.
          </p>
        </ScrollReveal>

        <FacilitiesGrid />
      </div>
    </section>
  )
}


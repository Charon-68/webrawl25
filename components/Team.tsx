'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Award } from 'lucide-react'

const teamMembers = [
  {
    name: 'Dr. John Smith',
    role: 'Warden',
    email: 'warden@hostel.edu',
    phone: '+1 234 567 8900',
    description: 'Dedicated to creating a safe and nurturing environment for all residents.',
    image: 'Warden',
  },
  {
    name: 'Ms. Sarah Johnson',
    role: 'Assistant Warden',
    email: 'assistant.warden@hostel.edu',
    phone: '+1 234 567 8901',
    description: 'Ensuring smooth day-to-day operations and resident welfare.',
    image: 'Assistant Warden',
  },
  {
    name: 'Alex Kumar',
    role: 'Student Secretary',
    email: 'secretary@hostel.edu',
    phone: '+1 234 567 8902',
    description: 'Representing student interests and organizing events.',
    image: 'Secretary',
  },
  {
    name: 'Priya Sharma',
    role: 'Student Secretary',
    email: 'secretary2@hostel.edu',
    phone: '+1 234 567 8903',
    description: 'Coordinating cultural activities and student engagement.',
    image: 'Secretary 2',
  },
]

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white dark:bg-gray-900">
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
            Our Team
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Meet the dedicated team that makes our hostel a home
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Profile Image Placeholder */}
              <div className="relative mb-4 aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary to-primary-dark">
                <div className="absolute inset-0 flex items-center justify-center text-white/30 text-4xl font-serif">
                  {member.image.charAt(0)}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>

              {/* Role Badge */}
              <div className="flex items-center justify-center mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  member.role === 'Warden'
                    ? 'bg-primary/10 text-primary'
                    : member.role === 'Assistant Warden'
                    ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                    : 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                }`}>
                  {member.role}
                </span>
              </div>

              {/* Name */}
              <h3 className="font-serif font-bold text-xl text-gray-900 dark:text-white text-center mb-2">
                {member.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm text-center mb-4">
                {member.description}
              </p>

              {/* Contact Info */}
              <div className="space-y-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="truncate">{member.email}</span>
                </a>
                <a
                  href={`tel:${member.phone}`}
                  className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>{member.phone}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


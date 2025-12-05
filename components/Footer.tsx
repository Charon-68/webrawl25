'use client'

import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/h2iitb', label: 'Facebook', color: 'hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20' },
    { icon: Instagram, href: 'https://www.instagram.com/the_wild_ones_h2/', label: 'Instagram', color: 'hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/20' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/hostel2iitbombay/', label: 'LinkedIn', color: 'hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20' },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="font-serif font-bold text-xl text-white">Hostel</span>
            </div>
            <p className="text-gray-400 text-sm">
              A home away from home, where memories are made and friendships flourish.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-1"
          >
            <h3 className="font-serif font-bold text-lg text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:contact@hostel.edu" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  contact@hostel.edu
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+12345678900" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  +1 234 567 8900
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  123 University Avenue<br />
                  Campus Area, City 12345
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1"
          >
            <h3 className="font-serif font-bold text-lg text-white mb-4">Follow Us</h3>
            <p className="text-gray-400 text-sm mb-4">
              Stay connected with us on social media for updates and news.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-gray-800 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-white dark:hover:bg-gray-700 transition-all ${social.color}`}
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Hostel. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#about" className="text-gray-400 hover:text-primary transition-colors">
                About
              </a>
              <a href="#facilities" className="text-gray-400 hover:text-primary transition-colors">
                Facilities
              </a>
              <a href="#gallery" className="text-gray-400 hover:text-primary transition-colors">
                Gallery
              </a>
              <a href="#contact" className="text-gray-400 hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

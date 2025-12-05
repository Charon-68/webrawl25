'use client'

import { 
  UtensilsCrossed, 
  Wrench, 
  Wifi, 
  BookOpen, 
  Bike, 
  Droplets,
  Tv,
  Shield
} from 'lucide-react'
import ScrollReveal from './ScrollReveal'


const facilities = [
  {
    icon: UtensilsCrossed,
    title: 'Mess',
    description: 'Well-equipped mess serving nutritious and delicious meals four times a day.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Wrench,
    title: 'Tech Room',
    description: 'Modern tech room with state-of-the-art equipment for your tech journey.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Wifi,
    title: 'High-Speed Wi-Fi',
    description: '24/7 high-speed internet connectivity throughout the hostel premises.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: BookOpen,
    title: 'Study Room',
    description: 'Quiet study space for academic excellence.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Bike,
    title: 'Cycle Parking',
    description: 'Secure parking space for bicycles of residents.',
    color: 'from-gray-500 to-slate-500',
  },
  {
    icon: Droplets,
    title: '24/7 Water Supply',
    description: 'Round-the-clock hot and cold water supply in all rooms and common areas.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Tv,
    title: 'Lounge & TV Room',
    description: 'Common room with TV and entertainment facilities for relaxation.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Shield,
    title: 'Security & Safety',
    description: '24/7 security personnel and CCTV surveillance for your safety.',
    color: 'from-red-500 to-orange-500',
  },
]

export default function Facilities() {
  return (
    <section id="facilities" className="py-20 bg-yellow-100 dark:bg-yellow-600 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
            Our Facilities
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4" />
        </ScrollReveal>

        {/* Facilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => {
            const Icon = facility.icon
            return (
              <ScrollReveal
                key={index}
                duration={0.01}
                delay={index * 0.05}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${facility.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`relative mb-4 w-14 h-14 rounded-lg bg-gradient-to-br ${facility.color} flex items-center justify-center text-white shadow-lg`}>
                  <Icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="font-serif font-bold text-xl text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                  {facility.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {facility.description}
                </p>

                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${facility.color} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-300 -z-10`} />
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}


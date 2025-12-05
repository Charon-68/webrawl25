'use client'

import {
  UtensilsCrossed,
  Wrench,
  Wifi,
  BookOpen,
  Bike,
  Droplets,
  Tv,
  Shield,
} from 'lucide-react'
import ScrollReveal from './ScrollReveal'

type FacilityCard = {
  title: string
  description: string
  icon: typeof UtensilsCrossed
  accent: string
  span: string
}

const facilities: FacilityCard[] = [
  {
    icon: UtensilsCrossed,
    title: 'Mess',
    description:
      'Nutritious meals served four times a day in a bright, welcoming hall.',
    accent: 'from-primary to-primary-dark',
    span: 'md:col-span-2 lg:col-span-3 lg:row-span-2',
  },
  {
    icon: Wrench,
    title: 'Tech Room',
    description:
      'Modern systems, tools, and collaboration space for your projects.',
    accent: 'from-primary-light to-primary-dark',
    span: 'md:col-span-2 lg:col-span-3',
  },
  {
    icon: Wifi,
    title: 'High-Speed Wi-Fi',
    description:
      '24/7 high-bandwidth coverage across rooms and common areas.',
    accent: 'from-primary to-primary-light',
    span: 'md:col-span-2 lg:col-span-2',
  },
  {
    icon: BookOpen,
    title: 'Study Room',
    description: 'Quiet, air-conditioned space with ergonomic seating.',
    accent: 'from-primary-dark to-primary',
    span: 'md:col-span-2 lg:col-span-4 lg:row-span-2',
  },
  {
    icon: Bike,
    title: 'Cycle Parking',
    description: 'Secure, covered racks for residents’ bicycles.',
    accent: 'from-primary/80 to-primary-dark',
    span: 'md:col-span-2 lg:col-span-2',
  },
  {
    icon: Droplets,
    title: '24/7 Water Supply',
    description:
      'Reliable hot and cold water across all floors and washrooms.',
    accent: 'from-primary to-primary-light',
    span: 'md:col-span-2 lg:col-span-3',
  },
  {
    icon: Tv,
    title: 'Common Room',
    description:
      'Lounge with TV, games, and couches to unwind with friends.',
    accent: 'from-primary-dark to-primary',
    span: 'md:col-span-2 lg:col-span-3',
  },
  {
    icon: Shield,
    title: 'Security & Safety',
    description:
      '24/7 personnel, CCTV coverage, and controlled access points.',
    accent: 'from-primary to-primary-dark',
    span: 'md:col-span-2 lg:col-span-2',
  },
]

export default function FacilitiesGrid() {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[180px] md:auto-rows-[200px]">
      {facilities.map((facility, index) => {
        const Icon = facility.icon
        return (
          <ScrollReveal
            key={facility.title}
            delay={index * 0.05}
            className={`group relative overflow-hidden rounded-2xl bg-white/80 dark:bg-gray-900/70 border border-white/40 dark:border-primary/20 shadow-lg backdrop-blur-sm transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl ${facility.span}`}
            whileHover={{ scale: 1.01 }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${facility.accent} opacity-70 blur-2xl transition-transform duration-500 ease-out scale-100 group-hover:scale-105`}
            />
            <div className="absolute inset-0 border border-white/40 dark:border-primary/30 rounded-2xl pointer-events-none group-hover:border-primary/60 transition-colors duration-300" />

            <div className="relative h-full p-6 flex flex-col justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${facility.accent} text-gray-900 shadow-md ring-1 ring-white/50`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-900 dark:text-white">
                  {facility.title}
                </h3>
              </div>

              <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {facility.description}
              </p>
            </div>
          </ScrollReveal>
        )
      })}
    </div>
  )
}


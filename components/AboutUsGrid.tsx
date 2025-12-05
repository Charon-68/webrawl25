'use client'

import { Award, Calendar, HeartHandshake, ShieldCheck, Users, Quote } from 'lucide-react'
import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

// Ensure you have images for these people, or reuse existing ones as placeholders
import aboutus1 from './assets/aboutus1.jpg'
import aboutus2 from './assets/aboutus2.jpg'
import aboutus3 from './assets/aboutus3.jpg'
import aboutus4 from './assets/aboutus4.jpg'
import aboutus5 from './assets/aboutus5.jpg'

import warden from './assets/warden.png'
import asc_warden from './assets/asc_warden.png'

const cardBase =
  'group relative overflow-hidden rounded-2xl border border-amber-200/60 dark:border-amber-400/30 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_10px_45px_-12px_rgba(254,185,1,0.45)] hover:border-primary/80'

export default function AboutUsGrid() {
  return (
    <section id="about" className="py-10 bg-yellow-100/70 dark:bg-yellow-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
            About Us
          </h2>
          <p className="text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
            A vibrant hostel community built on heritage, camaraderie, and everyday wins.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-6 auto-rows-[minmax(180px,1fr)]">
          
          {/* --- Main Stats Card --- */}
          <ScrollReveal
            className={`${cardBase} sm:col-span-6 lg:col-span-8 min-h-[260px] bg-gradient-to-br from-primary/10 via-white to-orange-100 dark:from-primary/10 dark:via-gray-900 dark:to-gray-950`}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(254,185,1,0.25),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.35),transparent_30%)]" />
            <div className="relative p-6 lg:p-8 grid md:grid-cols-2 gap-4 items-center h-full">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.25em] text-primary-dark/80 dark:text-primary/80 font-semibold">
                  Established 1960
                </p>
                <h3 className="font-serif text-3xl md:text-4xl text-gray-900 dark:text-white leading-snug">
                  A legacy hostel where ambition meets belonging.
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  From late-night study circles to GC victories, we are a close-knit home for 500+ residents who cheer, grow, and lead together.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  { icon: Users, title: '500+', subtitle: 'Residents' },
                  { icon: Award, title: 'Overall GC 2024', subtitle: 'Winners' },
                  { icon: Calendar, title: '65 yrs', subtitle: 'Heritage' },
                ].map(({ icon: Icon, title, subtitle }) => (
                  <div
                    key={title}
                    className="rounded-xl bg-white/70 dark:bg-gray-900/60 border border-amber-100/60 dark:border-amber-400/30 p-3 flex flex-col items-center gap-1 shadow-inner"
                  >
                    <Icon className="w-8 h-8 text-primary-dark dark:text-primary" />
                    <span className="font-bold text-gray-900 dark:text-white">{title}</span>
                    <span className="text-xs text-gray-600 dark:text-gray-300">{subtitle}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* --- Courtyard Image Card --- */}
          <ScrollReveal className={`${cardBase} sm:col-span-6 lg:col-span-4 min-h-[220px]`}>
            <div className="relative h-full w-full">
              <Image
                src={aboutus1}
                alt="Hostel courtyard"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm uppercase tracking-wide text-amber-100/80">Campus vibes</p>
                <p className="text-xl font-semibold">Sunlit quads, shared stories, endless energy.</p>
              </div>
            </div>
          </ScrollReveal>

          {/* --- Safety Card --- */}
          <ScrollReveal className={`${cardBase} sm:col-span-3 lg:col-span-4 p-6 flex flex-col justify-between`}>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-10 h-10 text-primary-dark dark:text-primary" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Our promise</p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Safe & supportive</h3>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              Mentorship circles, dedicated wardens, and quick response teams keep every resident heard, safe, and empowered.
            </p>
            <div className="flex gap-2 flex-wrap">
              {['24x7 security', 'Peer mentors', 'Quiet study zones'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-primary/15 text-primary-dark dark:text-primary text-xs font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </ScrollReveal>

          {/* --- Culture Card --- */}
          <ScrollReveal className={`${cardBase} sm:col-span-3 lg:col-span-4 p-6 min-h-[220px]`}>
            <div className="flex items-center gap-3 mb-4">
              <HeartHandshake className="w-10 h-10 text-primary-dark dark:text-primary" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Culture</p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Inclusive & spirited</h3>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { title: 'Clubs', desc: 'Cultural, tech, sports crews' },
                { title: 'Festivals', desc: 'Colors, lights, and music nights' },
                { title: 'Sports', desc: 'GC prep, pickup games, gym' },
                { title: 'Support', desc: 'Peer help & open forums' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="py-10 rounded-xl bg-amber-50/70 dark:bg-amber-200/10 border border-amber-100/60 dark:border-amber-300/20 p-3"
                >
                  <p className="font-semibold text-xl text-gray-900 dark:text-white">{item.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* --- Gallery Card --- */}
          <ScrollReveal className={`${cardBase} sm:col-span-3 lg:col-span-4 p-6 min-h-[220px]`}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Moments that matter
            </h3>
            <div className="grid grid-cols-2 gap-3 h-full">
              {[aboutus2, aboutus3, aboutus4, aboutus5].map((img, idx) => (
                <div key={idx} className="relative overflow-hidden rounded-xl aspect-square">
                  <Image
                    src={img}
                    alt={`Hostel memory ${idx + 1}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className={`group relative h-fit overflow-hidden rounded-2xl border border-amber-200/60 dark:border-amber-400/30 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_10px_45px_-12px_rgba(254,185,1,0.45)] hover:border-primary/80 sm:col-span-6 lg:col-span-6 p-3 flex items-center gap-5`}>
            {/* Square Image Space */}
            <div className="relative w-48 h-64 shrink-0 rounded-xl overflow-hidden shadow-sm border border-amber-100/50">
              <Image 
                src={warden}  
                alt="Warden" 
                fill 
                className="object-cover" 
              />
            </div>
            {/* Name & Details Space */}
            <div className="space-y-2">
              <div>
                <p className="text-xl font-bold uppercase tracking-wider text-primary-dark/70 dark:text-primary/70">Warden</p>
                <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">Prof. P J Guruprasad</h3>
              </div>
              <div className="relative pl-3 border-l-2 border-primary/40">
                <Quote className="w-3 h-3 text-primary absolute -top-1 -left-1 opacity-0" />
              </div>
            </div>
          </ScrollReveal>

          {/* --- NEW: Person Card 2 (Secretary) --- */}
          <ScrollReveal className={`group relative h-fit overflow-hidden rounded-2xl border border-amber-200/60 dark:border-amber-400/30 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_10px_45px_-12px_rgba(254,185,1,0.45)] hover:border-primary/80 sm:col-span-6 lg:col-span-6 p-3 flex items-center gap-5`}>
            {/* Square Image Space */}
            <div className="relative w-48 h-64 shrink-0 rounded-xl overflow-hidden shadow-sm border border-amber-100/50">
              <Image 
                src={asc_warden}
                alt="Associate Warden" 
                fill 
                className="object-cover" 
              />
            </div>
            {/* Name & Details Space */}
            <div className="space-y-2">
              <div>
                <p className="text-xl font-bold uppercase tracking-wider text-primary-dark/70 dark:text-primary/70">Associate Warden</p>
                <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">Prof Rushikesh</h3>
              </div>
              <div className="relative pl-3 border-l-2 border-primary/40">
                {/* <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                  "Leading this council is about ensuring every voice is heard and every festival is unforgettable."
                </p> */}
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
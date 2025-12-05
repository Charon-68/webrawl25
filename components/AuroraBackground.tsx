'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useTheme } from 'next-themes'

/**
 * AuroraBackground
 * - Fixed background component with animated gradient blobs
 * - Uses `next-themes` to select color palettes for light/dark
 * - Uses Framer Motion to animate blobs slowly across the screen
 * - Pointer events are disabled and it sits behind content (zIndex: -1)
 */
export default function AuroraBackground() {
  const { resolvedTheme } = useTheme()
  const theme = resolvedTheme || 'light'

  // respect prefers-reduced-motion
  const prefersReduced = useReducedMotion()

  // blobs configuration
  const blobs = [
    { size: '40vmin', top: '10%', left: '5%', duration: 60, delay: 0 },
    { size: '55vmin', top: '20%', left: '55%', duration: 80, delay: 10 },
    { size: '35vmin', top: '60%', left: '25%', duration: 70, delay: 5 },
    { size: '45vmin', top: '65%', left: '70%', duration: 90, delay: 20 },
  ]

  const getGradient = (index: number) => {
    if (theme === 'dark') {
      const palettes = [
        `radial-gradient(circle at 30% 30%, rgba(124,58,237,0.28), rgba(99,102,241,0.06) 40%, transparent 60%)`, // purple -> indigo
        `radial-gradient(circle at 70% 60%, rgba(236,72,153,0.12), rgba(99,102,241,0.06) 40%, transparent 60%)`, // pink accent subtle
        `radial-gradient(circle at 50% 50%, rgba(14,165,233,0.08), rgba(76,29,149,0.04) 40%, transparent 60%)`, // neon teal subtle
      ]
      return palettes[index % palettes.length]
    }

    // light
    const palettes = [
      `radial-gradient(circle at 30% 30%, rgba(93,173,226,0.35), rgba(56,189,248,0.06) 40%, transparent 60%)`, // soft blue -> sky
      `radial-gradient(circle at 70% 60%, rgba(20,184,166,0.28), rgba(99,102,241,0.03) 40%, transparent 60%)`, // teal
      `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.18), rgba(255,255,255,0.02) 40%, transparent 60%)`, // soft white
    ]
    return palettes[index % palettes.length]
  }

  return (
    <div aria-hidden className="fixed inset-0 pointer-events-none -z-10">
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        {blobs.map((b, i) => (
          <motion.div
            key={i}
            initial={prefersReduced ? { opacity: 0.9 } : { x: 0, y: 0, opacity: 0 }}
            animate={
              prefersReduced
                ? { opacity: 0.9 }
                : {
                    x: [0, (i % 2 === 0 ? 8 : -8) + '%', 0],
                    y: [0, (i % 3 === 0 ? 6 : -6) + '%', 0],
                    opacity: [0, 1, 0.9],
                  }
            }
            transition={
              prefersReduced
                ? { duration: 0 }
                : {
                    duration: b.duration,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                    delay: b.delay,
                  }
            }
            style={{
              position: 'absolute',
              top: b.top,
              left: b.left,
              width: b.size,
              height: b.size,
              borderRadius: '50%',
              filter: 'blur(80px) saturate(120%)',
              background: getGradient(i),
              mixBlendMode: theme === 'dark' ? 'screen' : 'normal',
              opacity: 0.8,
              transform: 'translate3d(0,0,0)'
            }}
          />
        ))}
      </div>
    </div>
  )
}

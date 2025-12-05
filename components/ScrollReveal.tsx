 'use client'

import { useRef, type ComponentProps, type PropsWithChildren } from 'react'
import { motion, useInView } from 'framer-motion'

type ScrollRevealProps = PropsWithChildren<
  Omit<ComponentProps<typeof motion.div>, 'ref' | 'initial' | 'animate' | 'whileInView'>
> & {
  delay?: number
  duration?: number
  initial?: { opacity?: number; y?: number; x?: number; scale?: number }
  animate?: { opacity?: number; y?: number; x?: number; scale?: number }
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.6,
  className,
  initial,
  animate,
  ...motionProps
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true })

  const defaultInitial = { opacity: 0, y: 20 }
  const defaultAnimate = { opacity: 1, y: 0 }

  const finalInitial = initial || defaultInitial
  const finalAnimate = animate || defaultAnimate

  return (
    <motion.div
      ref={ref}
      initial={finalInitial}
      animate={isInView ? finalAnimate : finalInitial}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  )
}


 'use client'

import { useRef, type ComponentProps, type PropsWithChildren } from 'react'
import { motion, useInView } from 'framer-motion'

type ScrollRevealProps = PropsWithChildren<
  Omit<ComponentProps<typeof motion.div>, 'ref' | 'initial' | 'animate' | 'whileInView'>
> & {
  delay?: number
  duration?: number
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.6,
  className,
  ...motionProps
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  )
}


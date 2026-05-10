'use client'

import { m } from 'framer-motion'

export const MotionDiv = m.div
export const MotionSpan = m.span
export const MotionH1 = m.h1
export const MotionH2 = m.h2
export const MotionP = m.p

// Standard Animation Configurations
export const ANIMATIONS = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  },
}

'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  direction = 'up',
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
    margin: '0px 0px -50px 0px',
  })

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 20 }
      case 'down':
        return { opacity: 0, y: -20 }
      case 'left':
        return { opacity: 0, x: 20 }
      case 'right':
        return { opacity: 0, x: -20 }
      default:
        return { opacity: 0, y: 20 }
    }
  }

  const getAnimatePosition = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 }
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 }
      default:
        return { opacity: 1, y: 0 }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={isInView ? getAnimatePosition() : getInitialPosition()}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
        type: 'tween',
      }}
      className={className}>
      {children}
    </motion.div>
  )
}

'use client'

import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'

// Dynamic imports for Framer Motion components to reduce initial bundle size
export const Motion = {
  div: dynamic(() => import('framer-motion').then((mod) => mod.motion.div), {
    ssr: false,
    loading: () => <div className='opacity-0' />, // Invisible placeholder during load
  }),
  h1: dynamic(() => import('framer-motion').then((mod) => mod.motion.h1), {
    ssr: false,
    loading: () => <h1 className='opacity-0' />,
  }),
  p: dynamic(() => import('framer-motion').then((mod) => mod.motion.p), {
    ssr: false,
    loading: () => <p className='opacity-0' />,
  }),
  span: dynamic(() => import('framer-motion').then((mod) => mod.motion.span), {
    ssr: false,
    loading: () => <span className='opacity-0' />,
  }),
  svg: dynamic(() => import('framer-motion').then((mod) => mod.motion.svg), {
    ssr: false,
    loading: () => <svg className='opacity-0' />,
  }),
}

// Dynamic AnimatePresence for conditional animations
export const AnimatePresence = dynamic(
  () => import('framer-motion').then((mod) => mod.AnimatePresence),
  {
    ssr: false,
    loading: () => null,
  }
)

// Hook for useInView with dynamic import
export const useInView = (
  ref: React.RefObject<Element>, 
  options?: Record<string, unknown>
) => {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    import('framer-motion').then(({ useInView: frameMotionUseInView }) => {
      const inView = frameMotionUseInView(ref, options)
      setIsInView(inView)
    })
  }, [ref, options])

  return isInView
}

// For backwards compatibility, we can also export the motion object directly
// but with lazy loading
let motionCache: typeof import('framer-motion').motion | null = null

export const getMotion = async () => {
  if (motionCache) return motionCache

  const { motion } = await import('framer-motion')
  motionCache = motion
  return motion
}

// Helper hook for accessing motion in components
export const useMotion = () => {
  const [motion, setMotion] = useState<typeof import('framer-motion').motion | null>(null)

  useEffect(() => {
    getMotion().then(setMotion)
  }, [])

  return motion
}

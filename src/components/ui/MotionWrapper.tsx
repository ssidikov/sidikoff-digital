'use client'

import dynamic from 'next/dynamic'
import { useState, useEffect, useRef } from 'react'

type MotionComponentOptions = {
  ssr: false
  loading: () => React.ReactElement
}

// Create reusable component options for consistency
const createMotionOptions = (className: string): MotionComponentOptions => ({
  ssr: false,
  loading: () => createElement(className),
})

// Helper to create invisible placeholders during load
const createElement = (className: string) => {
  const baseClass = 'opacity-0'
  
  if (className.includes('h1')) return <h1 className={baseClass} />
  if (className.includes('p')) return <p className={baseClass} />
  if (className.includes('span')) return <span className={baseClass} />
  if (className.includes('svg')) return <svg className={baseClass} />
  
  return <div className={baseClass} />
}

/**
 * Dynamic Motion components with reduced bundle size and SSR compatibility
 * Each component uses lazy loading to improve initial page performance
 */
export const Motion = {
  div: dynamic(() => import('framer-motion').then((mod) => mod.motion.div), createMotionOptions('div')),
  h1: dynamic(() => import('framer-motion').then((mod) => mod.motion.h1), createMotionOptions('h1')),
  p: dynamic(() => import('framer-motion').then((mod) => mod.motion.p), createMotionOptions('p')),
  span: dynamic(() => import('framer-motion').then((mod) => mod.motion.span), createMotionOptions('span')),
  svg: dynamic(() => import('framer-motion').then((mod) => mod.motion.svg), createMotionOptions('svg')),
} as const

/**
 * Dynamic AnimatePresence for conditional animations
 * Lazy-loaded to reduce initial bundle size
 */
export const AnimatePresence = dynamic(
  () => import('framer-motion').then((mod) => mod.AnimatePresence),
  {
    ssr: false,
    loading: () => null,
  }
)

/**
 * Hook for useInView with dynamic import and proper cleanup
 * @param ref - React ref object for the element to observe
 * @param options - IntersectionObserver options
 */
export const useInView = (
  ref: React.RefObject<Element>, 
  options?: IntersectionObserverInit
) => {
  const [isInView, setIsInView] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry) {
          setIsInView(entry.isIntersecting)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '10px',
        ...options,
      }
    )

    observerRef.current.observe(element)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [ref, options])

  return isInView
}

// Motion object cache for performance optimization
let motionCache: typeof import('framer-motion').motion | null = null

/**
 * Get cached motion object with lazy loading
 * @returns Promise resolving to framer-motion's motion object
 */
export const getMotion = async (): Promise<typeof import('framer-motion').motion> => {
  if (motionCache) return motionCache

  const { motion } = await import('framer-motion')
  motionCache = motion
  return motion
}

/**
 * Hook for accessing motion object in components with lazy loading
 * @returns motion object or null if not yet loaded
 */
export const useMotion = () => {
  const [motion, setMotion] = useState<typeof import('framer-motion').motion | null>(null)

  useEffect(() => {
    let isMounted = true

    getMotion().then((motionObj) => {
      if (isMounted) {
        setMotion(motionObj)
      }
    })

    return () => {
      isMounted = false
    }
  }, [])

  return motion
}

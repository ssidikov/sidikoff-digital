'use client'

import { useState, useEffect, useRef, ReactNode } from 'react'
import { useEcoMode } from '@/lib/eco-utils'

interface LazyLoadProps {
  children: ReactNode
  height?: number
  className?: string
  rootMargin?: string
  threshold?: number
  fallback?: ReactNode
  skeleton?: ReactNode
}

export default function LazyLoad({
  children,
  height = 300,
  className = '',
  rootMargin = '50px',
  threshold = 0.1,
  fallback,
  skeleton,
}: LazyLoadProps) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const { isEcoMode } = useEcoMode()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          observer.disconnect()
        }
      },
      {
        rootMargin,
        threshold,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [rootMargin, threshold])

  // В eco-режиме загружаем контент только при активном взаимодействии
  useEffect(() => {
    if (isIntersecting && !isEcoMode) {
      const timer = setTimeout(() => {
        setIsLoaded(true)
      }, 100)
      return () => clearTimeout(timer)
    } else if (isIntersecting && isEcoMode) {
      // В eco-режиме добавляем небольшую задержку
      const timer = setTimeout(() => {
        setIsLoaded(true)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isIntersecting, isEcoMode])

  return (
    <div ref={ref} className={className} style={{ minHeight: height }}>
      {isLoaded
        ? children
        : isIntersecting
        ? skeleton || (
            <div
              className='animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg'
              style={{ height }}>
              <div className='flex items-center justify-center h-full'>
                <div className='text-gray-400'>{isEcoMode ? '🌱 Загрузка...' : 'Загрузка...'}</div>
              </div>
            </div>
          )
        : fallback || (
            <div className='bg-gray-50 dark:bg-gray-800 rounded-lg' style={{ height }}>
              <div className='flex items-center justify-center h-full'>
                <div className='text-gray-400'>
                  {isEcoMode ? '🌱 Прокрутите для загрузки' : 'Прокрутите для загрузки'}
                </div>
              </div>
            </div>
          )}
    </div>
  )
}

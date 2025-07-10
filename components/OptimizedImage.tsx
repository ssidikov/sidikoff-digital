'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useEcoMode } from '@/lib/eco-utils'

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
  className?: string
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  sizes?: string
  fill?: boolean
  loading?: 'lazy' | 'eager'
  onLoad?: () => void
  onError?: () => void
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  quality = 75,
  placeholder = 'empty',
  blurDataURL,
  sizes,
  fill = false,
  loading = 'lazy',
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const { isEcoMode, networkInfo } = useEcoMode()

  // Адаптивное качество изображения в зависимости от условий
  const getOptimalQuality = () => {
    if (isEcoMode) {
      if (networkInfo?.effectiveType === 'slow-2g') return 30
      if (networkInfo?.effectiveType === '2g') return 40
      if (networkInfo?.effectiveType === '3g') return 50
      if (networkInfo?.saveData) return 40
    }
    return quality
  }

  // Оптимальные размеры для разных устройств
  const getOptimalSizes = () => {
    if (sizes) return sizes

    if (isEcoMode) {
      return '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
    }

    return '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
  }

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    setHasError(true)
    onError?.()
  }

  // Заглушка для eco-режима на очень медленных соединениях
  if (isEcoMode && networkInfo?.effectiveType === 'slow-2g' && !priority) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 dark:bg-gray-800 ${className}`}
        style={{ width: fill ? '100%' : width, height: fill ? '100%' : height }}>
        <div className='text-center p-4'>
          <div className='text-2xl mb-2'>🌱</div>
          <div className='text-sm text-gray-600 dark:text-gray-400'>Eco Mode</div>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        quality={getOptimalQuality()}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        sizes={getOptimalSizes()}
        loading={priority ? 'eager' : loading}
        onLoad={handleLoad}
        onError={handleError}
        className={`
          transition-opacity duration-300 
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
          ${hasError ? 'hidden' : ''}
        `}
      />

      {/* Skeleton loader */}
      {!isLoaded && !hasError && (
        <div
          className={`absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse ${
            placeholder === 'blur' ? 'blur-sm' : ''
          }`}
          style={{
            width: fill ? '100%' : width,
            height: fill ? '100%' : height,
          }}
        />
      )}

      {/* Error fallback */}
      {hasError && (
        <div
          className='absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-500'
          style={{
            width: fill ? '100%' : width,
            height: fill ? '100%' : height,
          }}>
          <div className='text-center'>
            <div className='text-2xl mb-2'>📷</div>
            <div className='text-sm'>Изображение недоступно</div>
          </div>
        </div>
      )}
    </div>
  )
}

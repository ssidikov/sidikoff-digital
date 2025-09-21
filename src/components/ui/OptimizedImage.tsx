'use client'

import { useState, useCallback } from 'react'
import Image, { type ImageProps } from 'next/image'

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  fallback?: string
  loading?: 'lazy' | 'eager'
  className?: string
  showLoader?: boolean
  priority?: boolean
  fetchPriority?: 'high' | 'low' | 'auto'
  quality?: number
}

const DEFAULT_FALLBACK = '/images/projects-bg.webp'

/**
 * OptimizedImage component with error handling, loading states, and fallback support
 * Provides smooth loading experience with placeholder animation
 */
const OptimizedImage = ({
  src,
  alt,
  fallback = DEFAULT_FALLBACK,
  loading = 'lazy',
  className = '',
  showLoader = true,
  priority = false,
  fetchPriority = 'auto',
  quality = 95,
  ...props
}: OptimizedImageProps) => {
  const [imgSrc, setImgSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = useCallback(() => {
    setIsLoading(false)
  }, [])

  const handleError = useCallback(() => {
    setHasError(true)
    setIsLoading(false)

    // Use fallback image for both external URLs and local images
    if (imgSrc !== fallback) {
      setImgSrc(fallback)
    }
  }, [fallback, imgSrc])

  // Determine optimal sizes based on priority
  const optimalSizes = priority
    ? '(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 60vw'
    : '(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 33vw'

  return (
    <div className={`relative ${className}`}>
      {/* Loading placeholder */}
      {isLoading && showLoader && (
        <div className='absolute inset-0 animate-pulse rounded bg-gray-200' />
      )}

      <Image
        src={imgSrc}
        alt={alt}
        loading={loading}
        priority={priority}
        fetchPriority={fetchPriority}
        quality={quality}
        sizes={props.sizes || optimalSizes}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${hasError ? 'grayscale' : ''}`}
        {...props}
      />
    </div>
  )
}

export default OptimizedImage

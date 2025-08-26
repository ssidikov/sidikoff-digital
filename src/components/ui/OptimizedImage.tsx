'use client'

import { useState, useCallback } from 'react'
import Image, { type ImageProps } from 'next/image'

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  fallback?: string
  loading?: 'lazy' | 'eager'
  className?: string
  showLoader?: boolean
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

  return (
    <div className={`relative ${className}`}>
      {/* Loading placeholder */}
      {isLoading && showLoader && (
        <div className="absolute inset-0 animate-pulse rounded bg-gray-200" />
      )}
      
      <Image
        src={imgSrc}
        alt={alt}
        loading={loading}
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

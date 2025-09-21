
'use client'

import Image from 'next/image'

interface BackgroundImageProps {
  src: string
  alt: string
  className?: string
  gradient?: string
  pattern?: boolean
  flipped?: boolean
  priority?: boolean
  zIndex?: number
}

/**
 * BackgroundImage component with gradient and pattern overlays
 * Supports flipping, priority loading, and customizable z-index layering
 */
export function BackgroundImage({
  src,
  alt,
  className = '',
  gradient,
  pattern = false,
  flipped = false,
  priority = false,
  zIndex = 0,
}: BackgroundImageProps) {
  // Generate dynamic Tailwind classes safely
  const baseZIndex = `z-[${zIndex}]`
  const gradientZIndex = `z-[${zIndex + 10}]`
  const patternZIndex = `z-[${zIndex + 20}]`

  const imageTransform = flipped ? { transform: 'scaleX(-1)' } : undefined

  return (
    <>
      {/* Main Background Image */}
      <div className={`absolute inset-0 ${baseZIndex}`} style={imageTransform}>
        <Image
          src={src}
          alt={alt}
          fill
          quality={95}
          className={`pointer-events-none select-none object-cover ${className}`}
          priority={priority}
          sizes="100vw"
        />
      </div>

      {/* Gradient Overlay */}
      {gradient && (
        <div
          className={`absolute inset-0 ${gradientZIndex}`}
          style={{ background: gradient }}
        />
      )}

      {/* Pattern Overlay */}
      {pattern && (
        <div
          className={`absolute inset-0 ${patternZIndex} bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.02)_1px,transparent_0)] bg-[length:20px_20px] opacity-50`}
        />
      )}
    </>
  )
}

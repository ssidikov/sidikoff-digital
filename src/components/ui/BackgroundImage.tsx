
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
  return (
    <>
      {/* Main Background Image */}
      <div
        className={`absolute inset-0 z-${zIndex}`}
        style={flipped ? { transform: 'scaleX(-1)' } : undefined}>
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover w-full h-full pointer-events-none select-none ${className}`}
          priority={priority}
          sizes='100vw'
        />
      </div>

      {/* Gradient Overlay */}
      {gradient && (
        <div className={`absolute inset-0 z-${zIndex + 10}`} style={{ background: gradient }} />
      )}

      {/* Pattern Overlay */}
      {pattern && (
        <div
          className={`absolute inset-0 z-${zIndex + 20} bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.02)_1px,transparent_0)] bg-[length:20px_20px] opacity-50`}
        />
      )}
    </>
  )
}

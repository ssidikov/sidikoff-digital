'use client'

import { motion } from 'framer-motion'

interface StarRatingProps {
  rating: number
  maxRating?: number
  size?: 'sm' | 'md' | 'lg'
  showCount?: boolean
  className?: string
  animated?: boolean
}

/**
 * StarRating component for displaying star ratings
 * Features animations, customizable size, and accessibility
 */
export function StarRating({
  rating,
  maxRating = 5,
  size = 'md',
  showCount = false,
  className = '',
  animated = true,
}: StarRatingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  }

  const containerClasses = {
    sm: 'gap-1',
    md: 'gap-1',
    lg: 'gap-1.5',
  }

  const stars = Array.from({ length: maxRating }, (_, index) => {
    const starNumber = index + 1
    const isFilled = starNumber <= rating
    const isPartial = starNumber - 0.5 <= rating && starNumber > rating

    const motionProps = animated
      ? {
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.3, delay: index * 0.1 },
        }
      : {}

    return (
      <motion.div key={index} {...motionProps} className='relative'>
        <svg
          className={`${sizeClasses[size]} text-gray-300 transition-colors duration-200`}
          fill='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'>
          <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
        </svg>

        {(isFilled || isPartial) && (
          <svg
            className={`${sizeClasses[size]} text-yellow-400 absolute top-0 left-0 transition-colors duration-200`}
            fill='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
            style={isPartial ? { clipPath: 'inset(0 50% 0 0)' } : undefined}>
            <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
          </svg>
        )}
      </motion.div>
    )
  })

  return (
    <div className={`flex items-center ${containerClasses[size]} ${className}`}>
      <div
        className={`flex items-center ${containerClasses[size]}`}
        role='img'
        aria-label={`Рейтинг ${rating} из ${maxRating} звезд`}>
        {stars}
      </div>

      {showCount && (
        <span className='ml-2 text-sm text-gray-600 font-medium'>
          ({rating}/{maxRating})
        </span>
      )}
    </div>
  )
}

export default StarRating

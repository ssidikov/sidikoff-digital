/**
 * Portfolio Carousel Component
 *
 * A modern, responsive carousel component for showcasing portfolio projects.
 * Features:
 * - Touch/swipe support for mobile devices
 * - Mouse drag support for desktop
 * - Auto-rotating carousel with pause on interaction
 * - Responsive design with adaptive card sizes
 * - Alternating layout pattern (even/odd cards)
 * - Navigation indicators and controls
 * - Multi-language support
 * - Glass morphism effects
 * - Accessibility features
 *
 * Usage:
 * <PortfolioCarousel items={portfolioItems} locale="fr" />
 */

'use client'

import type React from 'react'
import Image from 'next/image'

import { useState, useRef, useEffect } from 'react'
import { getProjectUrl } from '@/utils/navigation'
import Section, { SectionHeader } from '@/components/ui/Section'
import '@/styles/portfolio-carousel.css'

interface PortfolioItem {
  id: string
  number: string
  title: string
  category: string
  image: string
  imageAlt: string
  technologies?: string[] | undefined
}

interface PortfolioCarouselProps {
  items: PortfolioItem[]
  locale: 'en' | 'fr' | 'ru'
  title?: string
  subtitle?: string
  className?: string
}

// Helper function to convert projects to portfolio items
export function convertProjectsToPortfolioItems(
  projects: unknown[],
  maxItems?: number
): PortfolioItem[] {
  const itemsToShow = maxItems ? projects.slice(0, maxItems) : projects
  return itemsToShow.map((project, index) => {
    const p = project as {
      id: string
      title: string
      category: string
      image: string
      technologies?: string[]
    }
    return {
      id: p.id,
      number: String(index + 1).padStart(2, '0'),
      title: p.title,
      category: p.category,
      image: p.image,
      imageAlt: p.title,
      technologies: p.technologies ?? undefined,
    }
  })
}

export default function PortfolioCarousel({
  items,
  locale,
  title,
  subtitle,
  className,
}: PortfolioCarouselProps) {
  const [isPaused, setIsPaused] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [touchStartTime, setTouchStartTime] = useState<number | null>(null)
  const [isScrolling, setIsScrolling] = useState(false)
  const [mouseStart, setMouseStart] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const animationRef = useRef<number | null>(null)
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('mobile')

  // Убираем дублирование элементов для single-card режима

  useEffect(() => {
    const checkDevice = () => {
      if (typeof window === 'undefined') return

      const width = window.innerWidth
      const isTouchDevice =
        'ontouchstart' in window ||
        (typeof navigator !== 'undefined' && navigator?.maxTouchPoints > 0)

      if (width < 768) {
        setDeviceType('mobile')
      } else if (width < 1024 && isTouchDevice) {
        setDeviceType('tablet')
      } else {
        setDeviceType('desktop')
      }
    }

    // Проверяем, что мы на клиенте
    if (typeof window !== 'undefined') {
      checkDevice()
      window.addEventListener('resize', checkDevice)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', checkDevice)
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      try {
        if (deviceType === 'desktop') {
          // Для десктопа прокручиваем горизонтально
          const container = containerRef.current?.querySelector('.desktop-carousel-container')
          if (container) {
            const cardWidth = 520 // ширина карточки + gap
            const scrollAmount = cardWidth
            const currentScroll = container.scrollLeft
            const maxScroll = container.scrollWidth - container.clientWidth

            if (currentScroll + scrollAmount >= maxScroll) {
              container.scrollTo({ left: 0, behavior: 'smooth' })
            } else {
              container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
            }
          }
        } else {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
        }
      } catch (error) {
        console.debug('Carousel animation error:', error)
        // Fallback для мобильных устройств
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused, items.length, deviceType])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0]?.clientX ?? null)
    setTouchStartTime(Date.now())
    setIsScrolling(false)
    setDragOffset(0)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart || !touchStartTime) return

    const currentX = e.targetTouches[0]?.clientX ?? null
    const currentY = e.targetTouches[0]?.clientY ?? null
    if (!currentX || !currentY) return

    setTouchEnd(currentX)
    const distanceX = touchStart - currentX
    const distanceY = (e.touches[0]?.clientY ?? 0) - (touchStartTime ? touchStartTime : 0)

    // Определяем направление жеста
    const threshold = deviceType === 'mobile' ? 5 : 10
    const isHorizontalSwipe =
      Math.abs(distanceX) > Math.abs(distanceY) && Math.abs(distanceX) > threshold

    if (e.touches.length === 1 && isHorizontalSwipe) {
      setIsScrolling(true)
      setDragOffset(distanceX)
    }
  }

  const easeOutQuart = (t: number): number => {
    return 1 - Math.pow(1 - t, 4)
  }

  const animateSwipe = (startOffset: number, targetOffset: number, duration: number = 300) => {
    const startTime = Date.now()
    const offsetDifference = targetOffset - startOffset

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutQuart(progress)

      const currentOffset = startOffset + offsetDifference * easedProgress
      setDragOffset(currentOffset)

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      } else {
        setDragOffset(0)
        setIsScrolling(false)
      }
    }

    animationRef.current = requestAnimationFrame(animate)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || !touchStartTime) return

    const distance = touchStart - touchEnd
    const touchDuration = Date.now() - touchStartTime
    const velocity = Math.abs(distance) / touchDuration

    // Адаптивная чувствительность в зависимости от устройства и скорости
    const getMinDistance = () => {
      if (deviceType === 'mobile') {
        return velocity > 0.3 ? 25 : 40
      } else if (deviceType === 'tablet') {
        return velocity > 0.4 ? 35 : 55
      } else {
        return velocity > 0.5 ? 40 : 60
      }
    }

    const minDistance = getMinDistance()
    const isLeftSwipe = distance > minDistance
    const isRightSwipe = distance < -minDistance

    if (isLeftSwipe || isRightSwipe) {
      setIsPaused(true)

      if (deviceType === 'desktop') {
        // Для десктопа прокручиваем горизонтально
        try {
          const container = containerRef.current?.querySelector('.desktop-carousel-container')
          if (container) {
            const cardWidth = 520
            const scrollAmount = isLeftSwipe ? cardWidth : -cardWidth
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
          }
        } catch (error) {
          console.debug('Touch scroll error:', error)
        }
        setTimeout(() => setIsPaused(false), 1000)
      } else {
        // Для мобильных - single card режим
        // Инерционная анимация
        const momentumDistance = Math.min(velocity * 100, 150)
        const totalDistance = distance + (distance > 0 ? momentumDistance : -momentumDistance)

        animateSwipe(dragOffset, totalDistance)

        setTimeout(() => {
          if (isLeftSwipe) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
          } else {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
          }
          setIsPaused(false)
        }, 200)
      }
    } else {
      // Возврат в исходное положение
      if (Math.abs(dragOffset) > 0) {
        animateSwipe(dragOffset, 0)
      }
    }

    // Сброс состояний
    setTouchStart(null)
    setTouchEnd(null)
    setTouchStartTime(null)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setMouseStart(e.clientX)
    setIsDragging(true)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !mouseStart) return

    const distance = mouseStart - e.clientX
    if (Math.abs(distance) > 50) {
      setIsPaused(true)

      if (deviceType === 'desktop') {
        // Для десктопа прокручиваем горизонтально
        const container = containerRef.current?.querySelector('.desktop-carousel-container')
        if (container) {
          const cardWidth = 520
          const scrollAmount = distance > 0 ? cardWidth : -cardWidth
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
        }
      } else {
        // Для мобильных - single card режим
        if (distance > 0) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
        } else {
          setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
        }
      }

      setTimeout(() => setIsPaused(false), 1000)
      setIsDragging(false)
      setMouseStart(null)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    setMouseStart(null)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
    setMouseStart(null)
  }

  const handleNumberClick = (id: string) => {
    const url = getProjectUrl(id, locale)
    window.open(url, '_blank')
  }

  const renderCardContent = (item: PortfolioItem, isEven: boolean) => {
    return (
      <>
        {isEven && (
          <div className='absolute -top-10 left-1/2 transform -translate-x-1/2 z-20 '>
            <div className='relative'>
              <div className='w-20 h-20 bg-[#EEEEEE] rounded-full flex items-center justify-center p-1'>
                <div
                  className='relative w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200 group-hover:border-accent-alpha-20 transition-all duration-300 cursor-pointer hover:bg-gray-50 portfolio-number-badge'
                  onClick={() => handleNumberClick(item.id)}>
                  <span className='text-lg font-bold text-gray-800 group-hover:hidden transition-all duration-300'>
                    {item.number}
                  </span>
                  <svg
                    className='w-5 h-5 text-accent hidden group-hover:block transition-all duration-300'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M7 17L17 7M17 7H7M17 7V17'
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className='bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative w-full h-[520px] md:h-[600px] flex flex-col'>
          {isEven ? (
            <>
              <div className='p-4 md:p-7 pb-3 md:pb-5 text-center mt-10 md:mt-5 flex-shrink-0'>
                <h3 className='text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors duration-300'>
                  {item.title}
                </h3>
                <p className='text-gray-600 text-xs md:text-sm font-medium uppercase tracking-wide mb-2'>
                  {item.category}
                </p>
              </div>
              <div className='relative flex-1 w-[calc(100%-1rem)] md:w-[calc(100%-2rem)] overflow-hidden mx-auto mb-3 md:mb-5 rounded-2xl'>
                <Image
                  src={item.image || '/placeholder.svg'}
                  alt={item.imageAlt}
                  fill
                  quality={100}
                  sizes='(max-width: 768px) 100vw, (max-width: 1024px) 440px, 480px'
                  className='object-cover transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </div>
            </>
          ) : (
            <>
              <div className='relative flex-1 w-[calc(100%-1rem)] md:w-[calc(100%-2rem)] overflow-hidden mx-auto mt-3 md:mt-5 mb-3 md:mb-5 rounded-2xl'>
                <Image
                  src={item.image || '/placeholder.svg'}
                  alt={item.imageAlt}
                  fill
                  quality={100}
                  sizes='(max-width: 768px) 100vw, (max-width: 1024px) 440px, 480px'
                  className='object-cover transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </div>
              <div className='p-4 md:p-7 pt-3 md:pt-5 text-center mb-10 md:mb-5 flex-shrink-0'>
                <h3 className='text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors duration-300'>
                  {item.title}
                </h3>
                <p className='text-gray-600 text-xs md:text-sm font-medium uppercase tracking-wide mb-2'>
                  {item.category}
                </p>
              </div>
            </>
          )}
        </div>

        {!isEven && (
          <div className='absolute -bottom-10 left-1/2 transform -translate-x-1/2 z-20'>
            <div className='relative'>
              <div className='w-20 h-20 bg-[#EEEEEE] rounded-full flex items-center justify-center p-1'>
                <div
                  className='relative w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200 group-hover:border-accent-alpha-20 transition-all duration-300 cursor-pointer hover:bg-gray-50 portfolio-number-badge'
                  onClick={() => handleNumberClick(item.id)}>
                  <span className='text-lg font-bold text-gray-800 group-hover:hidden transition-all duration-300'>
                    {item.number}
                  </span>
                  <svg
                    className='w-5 h-5 text-accent hidden group-hover:block transition-all duration-300'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M7 17L17 7M17 7H7M17 7V17'
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }

  const goToPrevious = () => {
    setIsPaused(true)
    if (deviceType === 'desktop') {
      const container = containerRef.current?.querySelector('.desktop-carousel-container')
      if (container) {
        container.scrollBy({ left: -520, behavior: 'smooth' })
      }
    } else {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
    }
    setTimeout(() => setIsPaused(false), 1000)
  }

  const goToNext = () => {
    setIsPaused(true)
    if (deviceType === 'desktop') {
      const container = containerRef.current?.querySelector('.desktop-carousel-container')
      if (container) {
        container.scrollBy({ left: 520, behavior: 'smooth' })
      }
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    }
    setTimeout(() => setIsPaused(false), 1000)
  }

  return (
    <Section
      id='portfolio'
      variant='portfolio'
      background='transparent'
      padding='none'
      contentWidth='full'
      className={`portfolio-carousel py-20 ${className || ''}`}>
      <div className='relative z-10'>
        <div className='max-w-8xl mx-auto px-4 sm:px-4 xl:px-24 relative z-10'>
          <SectionHeader
            title={title || 'Portfolio'}
            subtitle={
              subtitle ||
              (locale === 'fr'
                ? 'Découvrez nos réalisations web'
                : locale === 'en'
                  ? 'Discover our web projects'
                  : 'Ознакомьтесь с нашими веб-проектами')
            }
            titleId='portfolio-title'
            as='h1'
            className='text-left mb-16 px-4'
          />
        </div>

        <div className='relative px-0'>
          <div
            ref={containerRef}
            className={`portfolio-carousel-container ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}>
            {deviceType === 'desktop' ? (
              // Desktop: показываем все карточки в ряд
              <div className='desktop-carousel-container flex gap-6 overflow-x-auto overflow-y-hidden scrollbar-hide px-4 min-h-[700px] items-center pt-12 pb-12'>
                {items.map((item, index) => {
                  const isEven = index % 2 === 0
                  return (
                    <div
                      key={`${item.id}-${index}`}
                      className='flex-shrink-0 w-[440px] lg:w-[480px] relative group cursor-pointer portfolio-carousel-item'
                      onClick={() => handleNumberClick(item.id)}>
                      {renderCardContent(item, isEven)}
                    </div>
                  )
                })}
              </div>
            ) : (
              // Mobile/Tablet: single card режим
              items.map((item, index) => {
                const isEven = index % 2 === 0
                const isActive = index === currentIndex
                return (
                  <div
                    key={`${item.id}-${index}`}
                    className={`absolute w-[calc(100%-2rem)] md:w-[calc(90vw-2rem)] max-w-[440px] lg:max-w-[480px] portfolio-carousel-item transition-all duration-500 ${
                      isActive ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
                    } ${isScrolling && isActive ? 'transition-none' : ''}`}
                    style={{
                      left: '50%',
                      transform:
                        isActive && isScrolling
                          ? `translateX(-50%) translateX(${-dragOffset * 0.8}px)`
                          : isActive
                            ? 'translateX(-50%)'
                            : index < currentIndex
                              ? 'translateX(-50%) translateX(-100%)'
                              : 'translateX(-50%) translateX(100%)',
                    }}>
                    {renderCardContent(item, isEven)}
                  </div>
                )
              })
            )}
          </div>

          <div className='max-w-7xl mx-auto px-4 lg:px-8'>
            {deviceType !== 'desktop' && (
              // Navigation Indicators только для мобильных
              <div className='flex justify-center mt-8 gap-2'>
                {items.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsPaused(true)
                      setCurrentIndex(index)
                      setTimeout(() => setIsPaused(false), 1000)
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentIndex === index ? 'bg-black' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Navigation Controls для всех устройств */}
            <div className='flex justify-center mt-6 gap-4'>
              <button
                onClick={goToPrevious}
                className='w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 border border-gray-200'
                aria-label='Previous project'>
                <svg
                  className='w-5 h-5 text-gray-700'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 19l-7-7 7-7'
                  />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className='w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 border border-gray-200'
                aria-label='Next project'>
                <svg
                  className='w-5 h-5 text-gray-700'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

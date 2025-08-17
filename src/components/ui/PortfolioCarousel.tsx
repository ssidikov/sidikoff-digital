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
}: PortfolioCarouselProps) {
  const [isPaused, setIsPaused] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [mouseStart, setMouseStart] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const duplicatedItems = [...items, ...items, ...items]

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused, items.length])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0]?.clientX ?? null)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0]?.clientX ?? null)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe || isRightSwipe) {
      setIsPaused(true)
      if (isLeftSwipe) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
      } else {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
      }
      setTimeout(() => setIsPaused(false), 1000)
    }
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
      if (distance > 0) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
      } else {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
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

  const goToPrevious = () => {
    setIsPaused(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
    setTimeout(() => setIsPaused(false), 1000)
  }

  const goToNext = () => {
    setIsPaused(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    setTimeout(() => setIsPaused(false), 1000)
  }

  return (
    <Section
      id='portfolio'
      background='transparent'
      padding='none'
      contentWidth='full'
      className='portfolio-carousel py-20'>
      <div className='relative z-10'>
        <div className='max-w-7xl mx-auto px-0 lg:px-8'>
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
            className='text-left mb-16 px-4'
          />
        </div>

        <div className='relative py-8 px-4 pb-20 overflow-hidden'>
          <div
            className='absolute left-0 top-0 w-1/4 h-full z-30 cursor-pointer'
            onClick={goToPrevious}
            title='Previous'
          />
          <div
            className='absolute right-0 top-0 w-1/4 h-full z-30 cursor-pointer'
            onClick={goToNext}
            title='Next'
          />

          <div
            ref={containerRef}
            className={`flex md:gap-1 gap-5 transition-transform duration-1000 ease-in-out portfolio-carousel-container ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{
              width: isMobile
                ? `${duplicatedItems.length * (typeof window !== 'undefined' ? window.innerWidth : 350)}px`
                : `${duplicatedItems.length * 485}px`,
              transform: isMobile
                ? `translateX(-${currentIndex * (typeof window !== 'undefined' ? window.innerWidth : 350)}px)`
                : `translateX(calc(-${currentIndex * 485}px + 2rem))`,
              paddingLeft: isMobile ? '0' : '2rem',
              paddingRight: isMobile ? '0' : '2rem',
            }}>
            {duplicatedItems.map((item, index) => {
              const isEven = (index % items.length) % 2 === 0
              return (
                <div
                  key={`${item.id}-${index}`}
                  className='flex-shrink-0 w-[100vw] md:w-[440px] lg:w-[480px] relative group cursor-pointer portfolio-carousel-item'>
                  {isEven && (
                    <div className='absolute -top-10 left-1/2 transform -translate-x-1/2 z-20'>
                      <div className='relative'>
                        <div className='w-20 h-20 bg-[#EEEEEE] rounded-full flex items-center justify-center p-1'>
                          <div
                            className='relative w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200 group-hover:border-blue-200 transition-all duration-300 cursor-pointer hover:bg-gray-50 portfolio-number-badge'
                            onClick={() => handleNumberClick(item.id)}>
                            <span className='text-lg font-bold text-gray-800 group-hover:hidden transition-all duration-300'>
                              {item.number}
                            </span>
                            <svg
                              className='w-5 h-5 text-blue-600 hidden group-hover:block transition-all duration-300'
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

                  <div className='bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative w-[100vw] md:w-[440px] lg:w-[480px] h-[520px] md:h-[600px] flex flex-col'>
                    {isEven ? (
                      <>
                        <div className='p-4 md:p-7 pb-3 md:pb-5 text-center mt-10 md:mt-5 flex-shrink-0'>
                          <h3 className='text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300'>
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
                            sizes='(max-width: 768px) 100vw, (max-width: 1024px) 440px, 480px'
                            className='object-cover transition-transform duration-500'
                          />
                          <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                        </div>
                        <div className='p-4 md:p-7 pt-3 md:pt-5 text-center mb-10 md:mb-5 flex-shrink-0'>
                          <h3 className='text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300'>
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
                            className='relative w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200 group-hover:border-blue-200 transition-all duration-300 cursor-pointer hover:bg-gray-50 portfolio-number-badge'
                            onClick={() => handleNumberClick(item.id)}>
                            <span className='text-lg font-bold text-gray-800 group-hover:hidden transition-all duration-300'>
                              {item.number}
                            </span>
                            <svg
                              className='w-5 h-5 text-blue-600 hidden group-hover:block transition-all duration-300'
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
                </div>
              )
            })}
          </div>

          <div className='max-w-7xl mx-auto px-4 lg:px-8 mt-20'>
            {/* Navigation Indicators */}
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

            {/* Navigation Controls */}
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

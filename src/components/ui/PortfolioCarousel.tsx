'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { getProjectUrl } from '@/utils/navigation'
import Section, { SectionHeader } from '@/components/ui/Section'
import CTAButton from '@/components/ui/CTAButton'
import { ArrowUpRight, ChevronDown } from 'lucide-react'

export interface PortfolioItem {
  id: string
  number?: string | undefined
  title: string
  category: string
  image: string
  imageAlt: string
  featured?: boolean | undefined
  technologies?: string[] | undefined
}

interface PortfolioCarouselProps {
  items: PortfolioItem[]
  title?: string
  subtitle?: string
  className?: string
  isHomePage?: boolean
  headingLevel?: 'h1' | 'h2'
}

// Helper function to convert projects to portfolio items
export function convertProjectsToPortfolioItems(
  projects: unknown[],
  maxItems?: number,
): PortfolioItem[] {
  const itemsToShow = maxItems ? projects.slice(0, maxItems) : projects
  return itemsToShow.map((project, index) => {
    const p = project as {
      id: string
      title: string
      category: string
      image: string
      featured?: boolean
      technologies?: string[]
    }
    return {
      id: p.id,
      number: String(index + 1).padStart(2, '0'),
      title: p.title,
      category: p.category,
      image: p.image,
      imageAlt: p.title,
      featured: p.featured,
      technologies: p.technologies ?? undefined,
    }
  })
}

export default function PortfolioCarousel({
  items,
  title,
  subtitle,
  className,
  isHomePage = false,
  headingLevel,
}: PortfolioCarouselProps) {
  const [showAll, setShowAll] = useState(false)

  // On homepage: show only top 3 starred (featured) projects initially
  const starredItems = items.filter((item) => item.featured)
  const initialItems = starredItems.length >= 3 ? starredItems.slice(0, 3) : items.slice(0, 3)
  const displayedItems = isHomePage && !showAll ? initialItems : items

  const handleCardClick = (id: string) => {
    const url = getProjectUrl(id)
    window.open(url, '_blank')
  }

  return (
    <Section
      id='portfolio'
      variant='portfolio'
      background='transparent'
      padding='none'
      contentWidth='full'
      className={`portfolio-section py-20 bg-[#EEEEEE] ${className || ''}`}>
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionHeader
          title={title || 'Portfolio'}
          subtitle={subtitle || 'Découvrez nos réalisations web'}
          titleId='portfolio-title'
          as={headingLevel ?? (isHomePage ? 'h2' : 'h1')}
          className='text-left mb-12'
        />

        {/* 3 cards per row Grid layout */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 pt-4 pb-8'>
          {displayedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.id)}
              className='group cursor-pointer relative bg-white rounded-3xl overflow-visible shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1.5 flex flex-col min-h-[460px] md:min-h-[500px]'>
              {/* Image Container (Top) */}
              <div className='relative flex-1 w-[calc(100%-1.5rem)] overflow-hidden mx-auto mt-3 mb-3 rounded-2xl min-h-[260px] md:min-h-[280px] bg-gray-100'>
                <Image
                  src={item.image || '/placeholder.svg'}
                  alt={item.imageAlt}
                  fill
                  quality={95}
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  className='object-cover transition-transform duration-500 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </div>

              {/* Title & Category (Bottom) */}
              <div className='p-5 pt-2 text-center pb-9 flex-shrink-0'>
                <h3 className='text-lg md:text-xl font-bold text-gray-900 mb-1.5 group-hover:text-accent transition-colors duration-300'>
                  {item.title}
                </h3>
                <p className='text-gray-600 text-xs md:text-sm font-medium uppercase tracking-wide'>
                  {item.category}
                </p>
              </div>

              {/* Floating Bottom Action Arrow */}
              <div className='absolute -bottom-7 left-1/2 transform -translate-x-1/2 z-20'>
                <div className='w-16 h-16 bg-[#EEEEEE] rounded-full flex items-center justify-center p-1'>
                  <div className='w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-200 group-hover:border-accent-alpha-20 group-hover:bg-[#112D4E] group-hover:text-white transition-all duration-300 cursor-pointer group-hover:scale-105'>
                    <ArrowUpRight className='w-5 h-5 text-accent group-hover:text-white transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300' />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main page: Button to show more cards */}
        {isHomePage && items.length > 3 && (
          <div className='mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center'>
            {!showAll ? (
              <button
                type='button'
                onClick={() => setShowAll(true)}
                className='inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#112D4E] text-white font-semibold text-sm hover:bg-[#1e3e6b] shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] cursor-pointer'>
                <span>Afficher plus de projets</span>
                <ChevronDown className='w-4 h-4 transition-transform duration-200' />
              </button>
            ) : (
              <CTAButton
                href='/projects'
                variant='secondary'
                size='md'
                trackingAction='view_all_projects_click'
                trackingCategory='portfolio_home'>
                <span>Voir toutes nos réalisations</span>
                <ArrowUpRight className='w-4 h-4 ml-2 shrink-0' />
              </CTAButton>
            )}
          </div>
        )}
      </div>
    </Section>
  )
}

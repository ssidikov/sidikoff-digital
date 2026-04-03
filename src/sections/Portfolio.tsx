import React from 'react'
import PortfolioCarousel from '@/components/ui/PortfolioCarousel'

interface PortfolioItem {
  id: string
  number: string
  title: string
  category: string
  image: string
  imageAlt: string
  technologies?: string[] | undefined
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
import { getProjects } from '@/data/projects'
import common from '@/locales/fr/common.json'

interface PortfolioProps {
  className?: string
  isHomePage?: boolean // Add prop to determine if on homepage
}

/**
 * Portfolio section component displaying project carousel
 * Features responsive design and localized content
 */
export default function Portfolio({ className, isHomePage = false }: PortfolioProps) {
  const projects = getProjects()
  const carouselItems = convertProjectsToPortfolioItems(projects)

  return (
    <PortfolioCarousel
      items={carouselItems}
      title={common.portfolio?.title || 'Portfolio'}
      subtitle={common.portfolio?.subtitle || ''}
      isHomePage={isHomePage}
      {...(className && { className })}
    />
  )
}

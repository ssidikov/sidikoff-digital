'use client'

import PortfolioCarousel, {
  convertProjectsToPortfolioItems,
} from '@/components/ui/PortfolioCarousel'
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

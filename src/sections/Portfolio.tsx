'use client'

import PortfolioCarousel, {
  convertProjectsToPortfolioItems,
} from '@/components/ui/PortfolioCarousel'
import { getProjects } from '@/data/projects'
import { Dictionary } from '@/lib/dictionaries'

interface PortfolioProps {
  locale: 'en' | 'fr' | 'ru'
  dictionary: Dictionary['portfolio']
  className?: string
}

export default function Portfolio({ locale, dictionary, className }: PortfolioProps) {
  const projects = getProjects(locale)
  const carouselItems = convertProjectsToPortfolioItems(projects)

  return (
    <PortfolioCarousel
      items={carouselItems}
      locale={locale}
      title={dictionary?.title || 'Portfolio'}
      subtitle={dictionary?.subtitle || ''}
      {...(className && { className })}
    />
  )
}

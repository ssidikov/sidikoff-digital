'use client'

import PortfolioCarousel, {
  convertProjectsToPortfolioItems,
} from '@/components/ui/PortfolioCarousel'
import { getProjects } from '@/data/projects'
import { type Dictionary } from '@/lib/dictionaries'
import { type Locale } from '@/lib/i18n'

interface PortfolioProps {
  locale: Locale
  dictionary: Dictionary['portfolio']
  className?: string
}

/**
 * Portfolio section component displaying project carousel
 * Features responsive design and localized content
 */
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

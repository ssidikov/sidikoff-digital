'use client'

import { lazy, Suspense } from 'react'
import { Dictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'

// Lazy load non-critical sections
const LazyPortfolio = lazy(() => import('@/sections/Portfolio'))
const LazyPricing = lazy(() => import('@/sections/Pricing'))
const LazyFAQ = lazy(() => import('@/sections/FAQ'))

// Loading fallback component
const SectionSkeleton = () => (
  <div className='min-h-[400px] w-full animate-pulse bg-gray-100 rounded-lg' />
)

interface PortfolioLazyProps {
  component: 'portfolio'
  locale: Locale
  dictionary: Dictionary['portfolio']
  className?: string
  showAll?: boolean
  maxProjects?: number
}

interface PricingLazyProps {
  component: 'pricing'
  locale: Locale
  className?: string
}

interface FAQLazyProps {
  component: 'faq'
  dictionary: Dictionary['faq']
  locale: Locale
  className?: string
}

type BaseLazySectionProps = PortfolioLazyProps | PricingLazyProps | FAQLazyProps

export default function LazySection(props: BaseLazySectionProps) {
  const { component } = props

  switch (component) {
    case 'portfolio':
      return (
        <Suspense fallback={<SectionSkeleton />}>
          <LazyPortfolio {...props} />
        </Suspense>
      )
    case 'pricing':
      return (
        <Suspense fallback={<SectionSkeleton />}>
          <LazyPricing {...props} />
        </Suspense>
      )
    case 'faq':
      return (
        <Suspense fallback={<SectionSkeleton />}>
          <LazyFAQ {...props} />
        </Suspense>
      )
    default:
      return <SectionSkeleton />
  }
}

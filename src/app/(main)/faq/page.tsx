import { ErrorBoundary } from '@/components/ErrorBoundary'
import { FAQ } from '@/sections'
import common from '@/locales/fr/common.json'
import { Metadata } from 'next'

import { generatePageMetadata } from '@/lib/seo-utils'

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata(`${common.faq.title}`, common.faq.subtitle, '/faq', 'fr', {
    ogImage: '/images/opengraph-fr.png',
    ogType: 'website',
  })
}

export default function FAQPage() {
  return (
    <ErrorBoundary>
      <FAQ className='pt-[140px]' />
    </ErrorBoundary>
  )
}

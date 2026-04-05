import { Metadata } from 'next'
import common from '@/locales/fr/common.json'
import EcommerceLandingContent from '@/components/EcommerceLandingContent'
import { generatePageMetadata } from '@/lib/seo-utils'

export async function generateMetadata(): Promise<Metadata> {
  const t = common.ecommerce_landing

  return generatePageMetadata(
    t.meta_title,
    t.meta_description,
    '/services/creation-site-ecommerce',
    'fr',
    {
      keywords: t.keywords,
      ogImage: '/images/opengraph-fr.png',
      ogType: 'website',
    },
  )
}

export default function EcommerceLandingPage() {
  return <EcommerceLandingContent />
}

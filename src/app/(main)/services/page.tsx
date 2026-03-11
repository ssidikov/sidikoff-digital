import { Services } from '@/sections'
import common from '@/locales/fr/common.json'
import { Metadata } from 'next'

import { generatePageMetadata } from '@/lib/seo-utils'

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata(
    `${common.services.title}`,
    common.services.subtitle,
    '/services',
    'fr',
    {
      ogImage: '/images/opengraph-fr.png',
      ogType: 'website',
    },
  )
}

export default function ServicesPage() {
  return <Services className='pt-[140px]' />
}

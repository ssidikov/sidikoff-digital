import { Portfolio } from '@/sections'
import common from '@/locales/fr/common.json'
import { Metadata } from 'next'

import { generatePageMetadata } from '@/lib/seo-utils'

export async function generateMetadata(): Promise<Metadata> {
  const description =
    'Découvrez nos réalisations web : sites vitrines, e-commerce, applications sur mesure. Projets modernes, performants et optimisés SEO développés avec React et Next.js.'

  return generatePageMetadata(
    `${common.portfolio?.title || 'Portfolio'}`,
    description,
    '/projects',
    'fr',
    {
      ogImage: '/images/projects-bg.webp',
      ogType: 'website',
    },
  )
}

export default function ProjectsPage() {
  return <Portfolio className='pt-[140px]' />
}

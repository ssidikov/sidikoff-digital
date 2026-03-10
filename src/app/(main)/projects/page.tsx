import { Portfolio } from '@/sections'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'
import { Metadata } from 'next'

import { generatePageMetadata } from '@/lib/seo-utils'

export async function generateMetadata(): Promise<Metadata> {
  const locale = defaultLocale
  const dictionary = await getDictionary(locale)

  const description =
    'Découvrez nos réalisations web : sites vitrines, e-commerce, applications sur mesure. Projets modernes, performants et optimisés SEO développés avec React et Next.js.'

  return generatePageMetadata(
    `${dictionary.portfolio?.title || 'Portfolio'}`,
    description,
    '/projects',
    locale,
    {
      ogImage: '/images/projects-bg.webp',
      ogType: 'website',
    },
  )
}

export default async function ProjectsPage() {
  const locale = defaultLocale
  const dictionary = await getDictionary(locale)

  return <Portfolio dictionary={dictionary.portfolio} locale={locale} className='pt-[140px]' />
}

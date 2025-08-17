import { Metadata } from 'next'
import { Portfolio } from '@/sections'
import { defaultLocale } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionaries'
import LocaleProvider from '@/components/LocaleProvider'
import { generateBreadcrumbSchema, getPageBreadcrumbs } from '@/lib/breadcrumbs'

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary(defaultLocale)
  const breadcrumbs = getPageBreadcrumbs('/projects', defaultLocale)
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)

  return {
    title: `${dictionary.portfolio?.title || 'Portfolio'} | SIDIKOFF DIGITAL`,
    description: dictionary.portfolio?.subtitle || 'Découvrez notre portfolio de projets web.',
    other: {
      'script:ld+json': JSON.stringify(breadcrumbSchema),
    },
  }
}

export default async function ProjectsPage() {
  const dictionary = await getDictionary(defaultLocale)

  return (
    <LocaleProvider locale={defaultLocale}>
      <div className='min-h-screen'>
        <main className='m-0 p-0'>
          <div className='pt-[80px] md:pt-[100px] relative overflow-hidden bg-[#ECECEC]'>
            <Portfolio dictionary={dictionary.portfolio} locale={defaultLocale} />
          </div>
        </main>
      </div>
    </LocaleProvider>
  )
}

import { Pricing } from '@/sections'
import { defaultLocale } from '@/lib/i18n'
import LocaleProvider from '@/components/LocaleProvider'
import { Metadata } from 'next'
import { generateBreadcrumbSchema, getPageBreadcrumbs } from '@/lib/breadcrumbs'

export async function generateMetadata(): Promise<Metadata> {
  const breadcrumbs = getPageBreadcrumbs('/tarifs', defaultLocale)
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)

  return {
    title: `Tarifs & Prix | SIDIKOFF DIGITAL`,
    description:
      "Découvrez nos tarifs transparents pour la création de sites web, développement d'applications et services digitaux.",
    other: {
      'script:ld+json': JSON.stringify(breadcrumbSchema),
    },
  }
}

export default async function TarifsPage() {
  return (
    <LocaleProvider locale={defaultLocale}>
      <div className='min-h-screen'>
        <main className='m-0 p-0'>
          <Pricing locale={defaultLocale} className='pt-[140px]' />
        </main>
      </div>
    </LocaleProvider>
  )
}

import { Portfolio } from '@/sections'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'
import LocaleProvider from '@/components/LocaleProvider'
import { Metadata } from 'next'

interface ProjectsPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: ProjectsPageProps): Promise<Metadata> {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return {
    title: `${dictionary.portfolio?.title || 'Portfolio'} | SIDIKOFF DIGITAL`,
    description: dictionary.portfolio?.subtitle || 'Découvrez notre portfolio de projets web.',
  }
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return (
    <LocaleProvider locale={locale}>
      <div className='min-h-screen'>
        <main className='m-0 p-0'>
          <Portfolio dictionary={dictionary.portfolio} locale={locale} className='pt-[140px]' />
        </main>
      </div>
    </LocaleProvider>
  )
}

import { Services } from '@/sections'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'
import { Metadata } from 'next'

interface ServicesPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: ServicesPageProps): Promise<Metadata> {
  const { locale } = await params
  const dictionary = await getDictionary(locale)
  
  return {
    title: dictionary.services.title,
    description: dictionary.services.subtitle,
  }
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)
  
  return <Services dictionary={dictionary.services} locale={locale} className="pt-[140px]" />
}

import { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionaries'
import { type Locale } from '@/lib/i18n'
import EcommerceLandingContent from '@/components/EcommerceLandingContent'
import { generatePageMetadata } from '@/lib/seo-utils'

interface PageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const dictionary = await getDictionary(locale)
  const t = dictionary.ecommerce_landing

  return generatePageMetadata(t.meta_title, t.meta_description, '/services/creation-site-ecommerce', locale, {
    keywords: t.keywords,
    ogImage: '/images/og/ecommerce-websites.jpg',
    ogType: 'website',
  })
}

export async function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }, { locale: 'ru' }]
}

export default async function EcommerceLandingPage({ params }: PageProps) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return <EcommerceLandingContent dictionary={dictionary} locale={locale} />
}

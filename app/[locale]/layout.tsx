import { notFound } from 'next/navigation'
import { generatePageMetadata, SupportedLocale } from '@/lib/enhanced-seo'
import { Metadata } from 'next'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

const locales = ['fr', 'en', 'ru']

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  if (!locales.includes(locale)) {
    notFound()
  }
  
  return generatePageMetadata('home', locale as SupportedLocale)
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!locales.includes(locale)) {
    notFound()
  }

  return <>{children}</>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

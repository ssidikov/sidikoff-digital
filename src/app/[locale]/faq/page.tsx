
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { FAQ } from '@/sections'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'



interface FAQPageProps {
  params: Promise<{ locale: Locale }>
}

export default async function FAQPage({ params }: FAQPageProps) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return (
    <ErrorBoundary>
      <FAQ dictionary={dictionary.faq} locale={locale} />
    </ErrorBoundary>
  )
}

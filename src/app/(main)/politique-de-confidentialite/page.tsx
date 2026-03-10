import { Metadata } from 'next'
import { defaultLocale } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionaries'
import { createCanonicalUrl } from '@/lib/seo-utils'
import { PremiumLegalTemplate } from '@/components/ui/PremiumLegalTemplate'

export async function generateMetadata(): Promise<Metadata> {
  const locale = defaultLocale
  const dict = await getDictionary(locale)

  return {
    title: dict.privacy.title,
    description: dict.privacy.subtitle,
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical: createCanonicalUrl('politique-de-confidentialite', locale),
    },
  }
}

export default async function PrivacyPolicyPage() {
  const locale = defaultLocale
  const dict = await getDictionary(locale)

  return (
    <PremiumLegalTemplate
      title={dict.privacy.title}
      subtitle={dict.privacy.subtitle}
      lastUpdated={dict.privacy.last_updated}>
      {dict.privacy.sections.map((section, index) => (
        <section key={index}>
          <h2>{section.title}</h2>
          <p>{section.content}</p>
        </section>
      ))}
    </PremiumLegalTemplate>
  )
}

import { Metadata } from 'next'
import common from '@/locales/fr/common.json'
import { createCanonicalUrl } from '@/lib/seo-utils'
import { PremiumLegalTemplate } from '@/components/ui/PremiumLegalTemplate'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: common.privacy.title,
    description: common.privacy.subtitle,
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical: createCanonicalUrl('politique-de-confidentialite', 'fr'),
    },
  }
}

export default function PrivacyPolicyPage() {
  return (
    <PremiumLegalTemplate
      title={common.privacy.title}
      subtitle={common.privacy.subtitle}
      lastUpdated={common.privacy.last_updated}>
      {common.privacy.sections.map((section, index) => (
        <section key={index}>
          <h2>{section.title}</h2>
          <p>{section.content}</p>
        </section>
      ))}
    </PremiumLegalTemplate>
  )
}

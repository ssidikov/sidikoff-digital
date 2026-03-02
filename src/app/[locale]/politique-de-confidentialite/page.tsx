import { Metadata } from 'next'
import { Locale } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionaries'
import { PremiumLegalTemplate } from '@/components/ui/PremiumLegalTemplate'

interface Props {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return {
    title: `${dict.privacy.title} | ${dict.legal.company_name}`,
    description: dict.privacy.subtitle,
  }
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params
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

import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata('legal', 'fr')

const legalSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://www.sidikoff.com/mentions-legales#webpage',
  url: 'https://www.sidikoff.com/mentions-legales',
  name: 'Mentions légales - SIDIKOFF DIGITAL',
  description: 'Mentions légales de SIDIKOFF DIGITAL, agence web parisienne',
  isPartOf: {
    '@id': 'https://www.sidikoff.com/#website',
  },
  about: {
    '@id': 'https://www.sidikoff.com/#business',
  },
  inLanguage: 'fr-FR',
}

export default function LegalMentionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(legalSchema),
        }}
      />
    </>
  )
}

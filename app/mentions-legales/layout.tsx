import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata, pagesSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata(pagesSEO.legal.fr)

const legalSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://www.sidikoff.com/mentions-legales#webpage',
  url: 'https://www.sidikoff.com/mentions-legales',
  name: 'Politique de confidentialité - SIDIKOFF DIGITAL',
  description: 'Politique de confidentialité de SIDIKOFF DIGITAL, agence web parisienne',
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

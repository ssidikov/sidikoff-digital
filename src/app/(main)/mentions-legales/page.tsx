import { createCanonicalUrl, generateAlternateUrls } from '@/lib/seo-utils'
import { Metadata } from 'next'
import common from '@/locales/fr/common.json'
import MentionsLegalesContent from '@/components/MentionsLegalesContent'


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: common.legal.title,
    description:
      'Mentions légales et informations légales de Sidikoff, agence web spécialisée dans la création de sites internet et applications.',
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical: createCanonicalUrl('mentions-legales', 'fr'),
      languages: generateAlternateUrls('mentions-legales'),
    },
  }
}

export default function MentionsLegalesPage() {
  const legal = common.legal

  return <MentionsLegalesContent legal={legal} />
}

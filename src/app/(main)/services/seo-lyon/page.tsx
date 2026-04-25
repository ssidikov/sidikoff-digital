import { createCanonicalUrl, generateAlternateUrls, generateFAQStructuredData } from '@/lib/seo-utils'
import { Metadata } from 'next'
import SeoLyonLandingContent from '@/components/SeoLyonLandingContent'

const PAGE_URL = createCanonicalUrl('services/seo-lyon', 'fr')

const faqItems = [
  {
    question: 'Combien de temps faut-il pour voir les résultats en SEO à Lyon ?',
    answer: 'Le SEO est une stratégie à moyen/long terme. Généralement, les premières améliorations de positionnement (surtout suite à des corrections techniques) sont visibles entre 1 et 3 mois. Pour des résultats significatifs sur des requêtes concurrentielles à Lyon, il faut compter entre 6 et 12 mois de travail régulier.'
  },
  {
    question: 'Garantissez-vous la 1ère position sur Google ?',
    answer: 'Aucune agence sérieuse ne peut garantir la 1ère position absolue, car les algorithmes de Google changent constamment (et Google l\'interdit dans ses guidelines). Cependant, nous garantissons la mise en œuvre des meilleures pratiques du marché pour maximiser vos chances de dominer le Top 3, avec un historique de succès vérifiable.'
  },
  {
    question: 'Quelle est la différence entre SEO local et SEO national ?',
    answer: 'Le SEO local cible des clients potentiels proches de vous physiquement (ex: "expert comptable lyon"). Il repose fortement sur Google Maps et la fiche Google Business Profile. Le SEO national vise une audience plus large, sans restriction géographique, nécessitant souvent un budget et une autorité de domaine plus importants.'
  },
  {
    question: 'Avez-vous besoin de modifier mon site actuel ?',
    answer: 'Oui, dans 99% des cas. Nous devrons intervenir sur le code de votre site (balises metas, structure des titres, vitesse) et sur le contenu. Nous vous demanderons donc un accès temporaire (administrateur ou FTP) pour implémenter nos recommandations techniques.'
  },
  {
    question: 'Quel est le budget mensuel pour une prestation SEO à Lyon ?',
    answer: 'Pour une entreprise locale à Lyon ciblant une zone géographique spécifique, un forfait SEO démarre généralement autour de 500 € à 1 000 € / mois. Pour des ambitions régionales ou nationales avec un fort besoin en rédaction et netlinking, les budgets peuvent aller de 1 500 € à plus de 4 000 € / mois.'
  }
]

export function generateMetadata(): Metadata {
  const title = 'Agence SEO Lyon | Consultant Référencement Naturel'
  const description = 'Agence SEO à Lyon. Augmentez votre visibilité sur Google, attirez des clients qualifiés et dominez votre secteur grâce au référencement naturel.'
  
  return {
    title,
    description,
    keywords: 'seo lyon, référencement naturel lyon, agence seo lyon, consultant seo lyon, référencement local lyon',
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'fr_FR',
      siteName: 'Sidikoff Digital',
      url: PAGE_URL,
      images: [{ url: '/images/opengraph-fr.png', width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@sidikoffdigital',
      images: ['/images/opengraph-fr.png'],
    },
    alternates: {
      canonical: PAGE_URL,
      languages: generateAlternateUrls('services/seo-lyon'),
    },
    robots: { index: true, follow: true },
  }
}

const seoServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Agence SEO Lyon - Sidikoff Digital",
  "description": "Services de référencement naturel (SEO) à Lyon : Audit technique, netlinking, optimisation de contenu et SEO local pour les entreprises lyonnaises.",
  "provider": {
    "@type": "Organization",
    "name": "Sidikoff Digital",
    "url": "https://www.sidikoff.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Lyon"
  },
  "serviceType": ["Référencement SEO", "SEO Local", "Audit Technique Web", "Netlinking"],
  "image": "https://www.sidikoff.com/images/opengraph-fr.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lyon",
    "addressCountry": "FR"
  }
}

export default function SeoLyonLandingPage() {
  const faqSchema = generateFAQStructuredData(faqItems)

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoServiceSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SeoLyonLandingContent />
    </>
  )
}

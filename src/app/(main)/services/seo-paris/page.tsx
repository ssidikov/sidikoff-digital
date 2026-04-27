import { createCanonicalUrl, generateAlternateUrls, generateFAQStructuredData , generateBreadcrumbStructuredData, DEFAULT_SEO } from '@/lib/seo-utils'
import { Metadata } from 'next'
import SeoParisLandingContent from '@/components/SeoParisLandingContent'

const PAGE_URL = createCanonicalUrl('services/seo-paris', 'fr')

const faqItems = [
  {
    question: 'Combien de temps faut-il pour voir les résultats en SEO à Paris ?',
    answer: 'Le SEO est une stratégie à moyen/long terme. Généralement, les premières améliorations de positionnement sont visibles entre 2 et 4 mois. Pour des résultats significatifs sur des requêtes très concurrentielles à Paris (comme "artisan paris" ou "avocat paris"), il faut compter entre 6 et 12 mois de travail régulier.'
  },
  {
    question: 'Garantissez-vous la 1ère position sur Google ?',
    answer: 'Aucune agence sérieuse ne peut garantir la 1ère position absolue, car les algorithmes de Google changent constamment. Cependant, nous garantissons la mise en œuvre des meilleures pratiques du marché pour maximiser vos chances de dominer le Top 3, avec un historique de succès vérifiable.'
  },
  {
    question: 'Quelle est la différence entre SEO local (par arrondissement) et SEO national ?',
    answer: 'Le SEO local cible des clients potentiels proches de vous physiquement (ex: "expert comptable paris 8"). Il repose fortement sur Google Maps. Le SEO national vise une audience plus large, sans restriction géographique, nécessitant souvent un budget et une autorité de domaine beaucoup plus importants.'
  },
  {
    question: 'Avez-vous besoin de modifier mon site actuel ?',
    answer: 'Oui, dans 99% des cas. Nous devrons intervenir sur le code de votre site (balises metas, structure des titres, vitesse) et sur le contenu. Nous vous demanderons donc un accès temporaire (administrateur ou FTP) pour implémenter nos recommandations techniques.'
  },
  {
    question: 'Quel est le budget mensuel pour une prestation SEO à Paris ?',
    answer: 'Pour une entreprise locale à Paris ciblant quelques arrondissements spécifiques, un forfait SEO démarre généralement autour de 800 € à 1 500 € / mois. Pour des ambitions plus larges sur tout Paris avec un fort besoin en rédaction et netlinking face à la forte concurrence, les budgets vont de 2 000 € à plus de 5 000 € / mois.'
  }
]

export function generateMetadata(): Metadata {
  const title = 'Agence SEO Paris | Consultant Référencement Naturel'
  const description = 'Agence SEO à Paris. Augmentez votre visibilité sur Google, attirez des clients qualifiés et dominez votre marché grâce au référencement naturel.'
  
  return {
    title,
    description,
    keywords: 'seo paris, référencement naturel paris, agence seo paris, consultant seo paris, référencement local ile-de-france',
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
      languages: generateAlternateUrls('services/seo-paris'),
    },
    robots: { index: true, follow: true },
  }
}

const seoServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Agence SEO Paris - Sidikoff Digital",
  "description": "Services de référencement naturel (SEO) à Paris : Audit technique, netlinking, optimisation de contenu et SEO local pour les entreprises d'Île-de-France.",
  "provider": {
    "@type": "Organization",
    "name": "Sidikoff Digital",
    "url": "https://www.sidikoff.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Paris"
  },
  "serviceType": ["Référencement SEO", "SEO Local", "Audit Technique Web", "Netlinking"],
  "image": "https://www.sidikoff.com/images/opengraph-fr.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Paris",
    "addressCountry": "FR"
  }
}

export default function SeoParisLandingPage() {
  const faqSchema = generateFAQStructuredData(faqItems)

  
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Seo Paris', url: PAGE_URL },
  ])

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoServiceSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SeoParisLandingContent />
    </>
  )
}

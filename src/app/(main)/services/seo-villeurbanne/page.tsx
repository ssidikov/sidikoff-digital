import { createCanonicalUrl, generateAlternateUrls, generateFAQStructuredData , generateBreadcrumbStructuredData, DEFAULT_SEO } from '@/lib/seo-utils'
import { Metadata } from 'next'
import SeoVilleurbanneLandingContent from '@/components/SeoVilleurbanneLandingContent'

const PAGE_URL = createCanonicalUrl('services/seo-villeurbanne', 'fr')

const faqItems = [
  {
    question: 'Combien de temps faut-il pour voir les résultats du SEO ?',
    answer: 'Le SEO est une stratégie sur le moyen/long terme. Généralement, les premiers frémissements (montée dans les positions, augmentation du trafic) sont visibles entre 3 et 6 mois après le début des optimisations, selon la concurrence de votre secteur à Villeurbanne.'
  },
  {
    question: 'Le SEO local est-il vraiment important pour une entreprise de Villeurbanne ?',
    answer: 'Absolument. Plus de 46% des recherches Google ont une intention locale. Si vous êtes plombier, avocat ou commerçant à Villeurbanne, vos futurs clients cherchent "votre métier + Villeurbanne". Ne pas être présent sur ces requêtes, c\'est laisser ces clients à vos concurrents.'
  },
  {
    question: 'Pouvez-vous optimiser un site qui n\'a pas été créé par vous ?',
    answer: 'Oui. Que votre site soit sur WordPress, Shopify, Wix ou développé sur-mesure, nous pouvons réaliser un audit et implémenter les recommandations SEO. Si les limites techniques de la plateforme sont trop bloquantes (cas fréquents sur Wix/Squarespace), nous vous proposerons une refonte sous Next.js.'
  },
  {
    question: 'Quelle est la différence entre SEO (Référencement Naturel) et SEA (Google Ads) ?',
    answer: 'Le SEA (Ads) est payant au clic : vous êtes visible immédiatement, mais vous disparaissez dès que vous arrêtez de payer. Le SEO est organique : il demande plus de temps pour s\'installer, mais il génère du trafic qualifié gratuitement et de façon pérenne, offrant un meilleur ROI sur le long terme.'
  },
  {
    question: 'Fournissez-vous des rapports mensuels ?',
    answer: 'Oui, la transparence est au cœur de notre approche. Vous recevez chaque mois un rapport détaillé (Trafic, Positions des mots-clés, Conversions) ainsi que la liste des actions réalisées et celles prévues pour le mois suivant.'
  }
]

export function generateMetadata(): Metadata {
  const title = 'Consultant SEO Villeurbanne | Agence de Référencement Naturel'
  const description = 'Agence SEO à Villeurbanne (69100). Optimisez votre visibilité locale sur Google, attirez plus de clients et devancez vos concurrents. Audit SEO gratuit.'
  
  return {
    title,
    description,
    keywords: 'seo villeurbanne, agence seo villeurbanne, consultant seo villeurbanne, référencement naturel villeurbanne, expert seo 69100, seo local lyon villeurbanne',
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
      languages: generateAlternateUrls('services/seo-villeurbanne'),
    },
    robots: { index: true, follow: true },
  }
}

const seoSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Prestation SEO à Villeurbanne - Sidikoff Digital",
  "description": "Services de référencement naturel (SEO) ciblés pour les entreprises de Villeurbanne (69100). Audit technique, optimisation on-page, SEO local et netlinking.",
  "provider": {
    "@type": "Organization",
    "name": "Sidikoff Digital",
    "url": "https://www.sidikoff.com"
  },
  "areaServed": ["Villeurbanne", "Métropole de Lyon"],
  "serviceType": ["Optimisation SEO", "Référencement Naturel", "SEO Local"],
  "image": "https://www.sidikoff.com/images/opengraph-fr.png"
}

export default function SeoVilleurbannePage() {
  const faqSchema = generateFAQStructuredData(faqItems)

  
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Seo Villeurbanne', url: PAGE_URL },
  ])

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SeoVilleurbanneLandingContent />
    </>
  )
}

import { createCanonicalUrl, generateAlternateUrls, generateFAQStructuredData , generateBreadcrumbStructuredData, DEFAULT_SEO } from '@/lib/seo-utils'
import { Metadata } from 'next'
import SeoBronLandingContent from '@/components/SeoBronLandingContent'

const PAGE_URL = createCanonicalUrl('services/seo-bron', 'fr')

const faqItems = [
  {
    question: 'Pourquoi le SEO est-il indispensable pour mon entreprise à Bron ?',
    answer: 'Aujourd\'hui, 80% des consommateurs effectuent une recherche sur Google avant de choisir un prestataire ou un commerce de proximité. Si votre entreprise n\'apparaît pas dans les premiers résultats (ou sur la carte Google Maps) pour les recherches à Bron, vous perdez des clients potentiels tous les jours au profit de vos concurrents.'
  },
  {
    question: 'En combien de temps mon site sera-t-il sur la première page ?',
    answer: 'Le référencement naturel prend du temps car il repose sur la confiance que Google accorde à votre site. Les premières améliorations techniques peuvent donner des résultats en 1 à 3 mois, mais pour s\'installer durablement en 1ère page sur des requêtes très concurrentielles, il faut généralement 6 à 12 mois de travail régulier.'
  },
  {
    question: 'Faites-vous uniquement du SEO ou aussi de la publicité (Google Ads) ?',
    answer: 'Nous sommes spécialisés en SEO (trafic gratuit et pérenne), mais nous gérons également des campagnes Google Ads (SEA) pour nos clients. L\'idéal est souvent de combiner les deux : le SEA pour avoir des clients immédiats, et le SEO pour construire une rentabilité à long terme.'
  },
  {
    question: 'Aurez-vous besoin de modifier mon site actuel ?',
    answer: 'Oui. Le SEO nécessite des optimisations techniques (vitesse de chargement, propreté du code, balises sémantiques) et éditoriales (ajout de textes optimisés). Nous interviendrons donc directement sur votre site internet pour implémenter nos recommandations.'
  },
  {
    question: 'Comment mesurez-vous le succès d\'une campagne SEO ?',
    answer: 'Nous ne nous arrêtons pas au simple "volume de trafic". Nous mesurons l\'évolution de vos positions sur les mots-clés stratégiques, l\'augmentation du trafic organique, et surtout, les conversions (nombre d\'appels, demandes de devis, ventes e-commerce générées par le SEO).'
  }
]

export function generateMetadata(): Metadata {
  const title = 'Agence SEO Bron | Expert Référencement Naturel & Local'
  const description = 'Propulsez votre entreprise en 1ère page Google avec notre agence SEO intervenant à Bron. Audit gratuit, référencement local et création de trafic qualifié.'
  
  return {
    title,
    description,
    keywords: 'seo bron, agence seo bron, consultant seo bron, référencement naturel bron, referencement google bron, seo local rhone',
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
      languages: generateAlternateUrls('services/seo-bron'),
    },
    robots: { index: true, follow: true },
  }
}

const seoServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Agence SEO Bron - Sidikoff Digital",
  "description": "Expert en référencement naturel pour les entreprises de Bron. Augmentez votre visibilité sur Google grâce à nos stratégies SEO sur mesure.",
  "provider": {
    "@type": "Organization",
    "name": "Sidikoff Digital",
    "url": "https://www.sidikoff.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Bron"
  },
  "serviceType": ["Référencement Local", "Audit SEO", "Stratégie de Contenu SEO", "Consulting SEO"],
  "image": "https://www.sidikoff.com/images/opengraph-fr.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bron",
    "addressRegion": "Auvergne-Rhône-Alpes",
    "addressCountry": "FR"
  }
}

export default function SeoBronLandingPage() {
  const faqSchema = generateFAQStructuredData(faqItems)

  
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Seo Bron', url: PAGE_URL },
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
      <SeoBronLandingContent />
    </>
  )
}

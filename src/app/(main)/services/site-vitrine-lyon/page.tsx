import { createCanonicalUrl, generateAlternateUrls, generateFAQStructuredData , generateBreadcrumbStructuredData, DEFAULT_SEO } from '@/lib/seo-utils'
import { Metadata } from 'next'
import SiteVitrineLyonLandingContent from '@/components/SiteVitrineLyonLandingContent'

const PAGE_URL = createCanonicalUrl('services/site-vitrine-lyon', 'fr')

const faqItems = [
  {
    question: 'Quel est le prix pour la création d\'un site vitrine à Lyon ?',
    answer: 'Le tarif dépend de la complexité de votre projet (nombre de pages, design sur-mesure, fonctionnalités spécifiques). En général, pour un site vitrine professionnel clé en main par notre agence, le budget démarre autour de 1 500 € à 3 000 €. Nous proposons des devis précis après un premier échange gratuit.'
  },
  {
    question: 'Combien de temps faut-il pour créer le site ?',
    answer: 'Pour un site vitrine standard de 5 à 10 pages, comptez généralement entre 4 et 6 semaines de délai de réalisation, de la validation du cahier des charges à la mise en ligne finale.'
  },
  {
    question: 'Serai-je propriétaire de mon site web ?',
    answer: 'Absolument. Contrairement à certaines plateformes de location, vous êtes l\'unique propriétaire de votre nom de domaine, de vos contenus et de votre site internet une fois la livraison effectuée.'
  },
  {
    question: 'Mon site sera-t-il bien référencé sur Google ?',
    answer: 'Chaque site que nous développons inclut une base SEO solide : balises meta optimisées, structure Hn propre, sitemap XML, et rapidité de chargement. Pour dominer des mots-clés très concurrentiels sur Lyon, nous proposons des forfaits d\'accompagnement SEO mensuel dédiés.'
  },
  {
    question: 'Pourrai-je modifier les textes de mon site moi-même ?',
    answer: 'Oui ! Nous relions votre site à un système de gestion de contenu (CMS) intuitif. À la livraison, nous vous formons pour que vous puissiez modifier les textes, ajouter des articles de blog ou changer des photos de manière totalement autonome.'
  }
]

export function generateMetadata(): Metadata {
  const title = 'Création Site Vitrine Lyon | Agence Web Sur-Mesure'
  const description = 'Confiez la création de votre site vitrine à notre agence web basée à Lyon. Design sur-mesure, optimisation mobile et SEO local performant.'
  
  return {
    title,
    description,
    keywords: 'création site vitrine lyon, agence web lyon, site internet vitrine lyon, développeur web lyon, refonte site web',
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
      languages: generateAlternateUrls('services/site-vitrine-lyon'),
    },
    robots: { index: true, follow: true },
  }
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Sidikoff Digital - Agence Web Lyon",
  "description": "Création de site vitrine sur-mesure, design premium et référencement naturel à Lyon.",
  "url": "https://www.sidikoff.com/services/site-vitrine-lyon",
  "image": "https://www.sidikoff.com/images/opengraph-fr.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lyon",
    "addressCountry": "FR"
  },
  "areaServed": "Lyon",
  "priceRange": "€€",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 45.75,
      "longitude": 4.85
    },
    "geoRadius": "50000"
  }
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Création de Site Vitrine Lyon",
  "description": "Développement de site vitrine sur-mesure avec design premium, optimisation SEO et formation CMS.",
  "provider": {
    "@type": "Organization",
    "name": "Sidikoff Digital"
  },
  "areaServed": {
    "@type": "City",
    "name": "Lyon"
  }
}

export default function SiteVitrineLyonLandingPage() {
  const faqSchema = generateFAQStructuredData(faqItems)

  
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Site Vitrine Lyon', url: PAGE_URL },
  ])

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SiteVitrineLyonLandingContent />
    </>
  )
}

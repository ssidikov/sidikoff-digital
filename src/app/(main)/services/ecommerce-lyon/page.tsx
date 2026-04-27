import { createCanonicalUrl, generateAlternateUrls, generateFAQStructuredData , generateBreadcrumbStructuredData, DEFAULT_SEO } from '@/lib/seo-utils'
import { Metadata } from 'next'
import EcommerceLyonLandingContent from '@/components/EcommerceLyonLandingContent'

const PAGE_URL = createCanonicalUrl('services/ecommerce-lyon', 'fr')

const faqItems = [
  {
    question: 'Shopify ou WooCommerce : quelle plateforme e-commerce choisir ?',
    answer: 'Le choix dépend de votre modèle économique. Shopify est idéal pour les marques D2C (Direct to Consumer) qui veulent lancer rapidement, avec une gestion d\'hébergement infogérée et des outils marketing puissants. WooCommerce est préférable si vous avez un catalogue très complexe, si vous voulez éviter les commissions sur vente, et si vous souhaitez une flexibilité totale de code via WordPress.'
  },
  {
    question: 'Qu\'est-ce que le Headless Commerce ?',
    answer: 'Le Headless Commerce sépare le "front-end" (l\'interface que le client voit) du "back-end" (la gestion des stocks/commandes). En utilisant une technologie comme Next.js pour le visuel, nous obtenons des temps de chargement instantanés qui augmentent massivement vos ventes, tout en conservant la robustesse du back-office Shopify ou Medusa.'
  },
  {
    question: 'Combien coûte la création d\'un site e-commerce avec votre agence lyonnaise ?',
    answer: 'Une boutique e-commerce professionnelle sur mesure (Shopify ou WooCommerce) commence généralement autour de 5 000 €. Pour des projets impliquant des catalogues complexes, du Headless Commerce, ou des intégrations ERP spécifiques, les budgets se situent entre 15 000 € et 50 000 €. Nous évaluons ensemble le ROI.'
  },
  {
    question: 'Comment optimisez-vous le taux de conversion (CRO) ?',
    answer: 'Nous réduisons au maximum les frictions (clics inutiles). Nous implémentons des éléments de rassurance (avis vérifiés, paiements sécurisés), accélérons le tunnel de commande, proposons des paiements en plusieurs fois (Alma), et utilisons des "Upsells/Cross-sells" pertinents au moment de l\'ajout au panier.'
  },
  {
    question: 'Serez-vous là pour gérer la boutique après le lancement ?',
    answer: 'Oui. Nous proposons une Tierce Maintenance Applicative (TMA). De plus, l\'équipe de Sidikoff Digital forme vos collaborateurs (logistique, marketing) pour qu\'ils soient 100% autonomes sur la gestion quotidienne (ajout de produits, codes promo, traitement des expéditions).'
  }
]

export function generateMetadata(): Metadata {
  const title = 'Agence E-commerce Lyon | Création de Boutique en Ligne'
  const description = 'Développez vos ventes avec notre agence E-commerce à Lyon. Experts Shopify, WooCommerce et Headless. Optimisation de la conversion (CRO) et SEO avancé.'
  
  return {
    title,
    description,
    keywords: 'ecommerce lyon, agence ecommerce lyon, création boutique en ligne lyon, expert shopify lyon, developpeur woocommerce lyon, headless commerce nextjs',
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
      languages: generateAlternateUrls('services/ecommerce-lyon'),
    },
    robots: { index: true, follow: true },
  }
}

const ecommerceServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Agence E-Commerce Lyon - Sidikoff Digital",
  "description": "Création de plateformes e-commerce B2B et B2C à Lyon. Expertise Shopify, WooCommerce, Headless Commerce et stratégie CRO.",
  "provider": {
    "@type": "Organization",
    "name": "Sidikoff Digital",
    "url": "https://www.sidikoff.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Lyon"
  },
  "serviceType": ["Création Site E-Commerce", "Développement Shopify Lyon", "Développement WooCommerce Lyon", "Headless Commerce"],
  "image": "https://www.sidikoff.com/images/opengraph-fr.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lyon",
    "addressRegion": "Auvergne-Rhône-Alpes",
    "addressCountry": "FR"
  }
}

export default function EcommerceLyonLandingPage() {
  const faqSchema = generateFAQStructuredData(faqItems)

  
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Ecommerce Lyon', url: PAGE_URL },
  ])

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ecommerceServiceSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <EcommerceLyonLandingContent />
    </>
  )
}

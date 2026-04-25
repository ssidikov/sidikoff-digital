import { createCanonicalUrl, generateAlternateUrls, generateFAQStructuredData } from '@/lib/seo-utils'
import { Metadata } from 'next'
import AgenceWebCaluireLandingContent from '@/components/AgenceWebCaluireLandingContent'

const PAGE_URL = createCanonicalUrl('services/agence-web-caluire-et-cuire', 'fr')

const faqItems = [
  {
    question: 'Pourquoi choisir une agence web proche de Caluire-et-Cuire ?',
    answer: 'Bien que nous opérions partout en France, notre proximité avec la région lyonnaise nous permet d\'avoir une connaissance fine du tissu économique local. Nous pouvons nous rencontrer facilement pour des ateliers stratégiques, ce qui fluidifie la communication et accélère la réussite de votre projet digital.'
  },
  {
    question: 'Combien de temps faut-il pour créer un site internet ?',
    answer: 'Pour un site vitrine professionnel de 5 à 10 pages, comptez environ 3 à 5 semaines de la validation du design à la mise en ligne. Un site e-commerce ou une plateforme sur mesure nécessite généralement entre 6 et 10 semaines. Nous établissons un rétroplanning précis dès le début du projet.'
  },
  {
    question: 'Mon site sera-t-il bien positionné sur Google ?',
    answer: 'Le SEO (référencement naturel) est l\'ADN de Sidikoff Digital. Contrairement aux agences classiques qui ajoutent le SEO à la fin, nous concevons l\'architecture et le code de votre site (balises sémantiques, vitesse de chargement) spécifiquement pour plaire aux algorithmes de Google dès le jour du lancement.'
  },
  {
    question: 'Quelles technologies utilisez-vous ?',
    answer: 'Nous sélectionnons la technologie selon votre besoin. Pour les startups et sites à forte exigence technique, nous utilisons le puissant framework Next.js. Pour des sites institutionnels nécessitant une grande autonomie, nous développons des thèmes WordPress sur mesure. Pour le e-commerce, nous sommes experts Shopify et WooCommerce.'
  },
  {
    question: 'Puis-je modifier le contenu de mon site moi-même ?',
    answer: 'Absolument. Nous développons des back-offices (espaces d\'administration) intuitifs. Avant la mise en ligne, nous formons vos équipes pour que vous soyez 100% autonomes sur la création de nouveaux articles, l\'ajout de produits ou la modification des textes et images.'
  }
]

export function generateMetadata(): Metadata {
  const title = 'Agence Web Caluire-et-Cuire | Création de Site Internet & SEO'
  const description = 'Développez votre entreprise avec notre agence web intervenant à Caluire-et-Cuire. Création de site vitrine, e-commerce sur mesure et référencement SEO.'
  
  return {
    title,
    description,
    keywords: 'agence web caluire, création site internet caluire-et-cuire, agence de communication caluire, seo caluire, site vitrine caluire, webmaster caluire, agence digitale rhone',
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
      languages: generateAlternateUrls('services/agence-web-caluire-et-cuire'),
    },
    robots: { index: true, follow: true },
  }
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Agence Web Caluire-et-Cuire - Sidikoff Digital",
  "description": "Création de sites internet professionnels, solutions e-commerce et référencement SEO pour les entreprises de Caluire-et-Cuire.",
  "provider": {
    "@type": "Organization",
    "name": "Sidikoff Digital",
    "url": "https://www.sidikoff.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Caluire-et-Cuire"
  },
  "serviceType": ["Création Site Web", "Agence SEO", "Développement E-commerce"],
  "image": "https://www.sidikoff.com/images/opengraph-fr.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Caluire-et-Cuire",
    "addressRegion": "Auvergne-Rhône-Alpes",
    "addressCountry": "FR"
  }
}

export default function AgenceWebCaluireLandingPage() {
  const faqSchema = generateFAQStructuredData(faqItems)

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AgenceWebCaluireLandingContent />
    </>
  )
}

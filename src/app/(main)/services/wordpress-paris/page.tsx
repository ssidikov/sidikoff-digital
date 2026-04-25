import { createCanonicalUrl, generateAlternateUrls, generateFAQStructuredData } from '@/lib/seo-utils'
import { Metadata } from 'next'
import WordpressParisLandingContent from '@/components/WordpressParisLandingContent'

const PAGE_URL = createCanonicalUrl('services/wordpress-paris', 'fr')

const faqItems = [
  {
    question: 'Pourquoi faire appel à une agence WordPress plutôt que de le faire soi-même ?',
    answer: 'Bien que WordPress soit accessible, créer un site performant, sécurisé et bien référencé demande une réelle expertise. Un site fait par un amateur utilise souvent des constructeurs de pages lourds (Elementor, Divi) et trop de plugins, ce qui détruit le temps de chargement et l\'expérience utilisateur. Notre agence code des thèmes sur mesure, ultra-légers et protégés contre les piratages.'
  },
  {
    question: 'WordPress est-il sécurisé pour une entreprise ?',
    answer: 'Oui, si et seulement s\'il est bien configuré. WordPress motorise 43% du web mondial, il est donc la cible principale des hackers. Nous sécurisons votre site via des pare-feux applicatifs (WAF), le masquage de l\'interface d\'administration, la limitation des tentatives de connexion, et des mises à jour proactives.'
  },
  {
    question: 'Utilisez-vous des constructeurs de pages comme Elementor ?',
    answer: 'En règle générale, non. Pour les sites professionnels, nous privilégions le développement de thèmes sur mesure avec l\'éditeur natif Gutenberg et ACF (Advanced Custom Fields). Cela permet d\'obtenir un site 3x plus rapide, plus facile à mettre à jour pour vos équipes, et avec un code parfaitement propre pour le SEO.'
  },
  {
    question: 'Quel est le budget pour un site WordPress professionnel ?',
    answer: 'Un site vitrine WordPress sur mesure (design UI exclusif, thème développé from scratch, optimisation SEO) commence généralement autour de 3 000 €. Les prix évoluent en fonction du nombre de modèles de pages, des fonctionnalités complexes (annuaires, espaces membres) et du volume de contenu à intégrer.'
  },
  {
    question: 'Proposez-vous la maintenance après la mise en ligne ?',
    answer: 'Oui, c\'est fortement recommandé. Notre forfait de maintenance inclut les mises à jour du cœur WordPress, des thèmes et des plugins, des sauvegardes quotidiennes externalisées, le monitoring de disponibilité 24/7, et des heures d\'intervention en cas de besoin d\'évolution.'
  }
]

export function generateMetadata(): Metadata {
  const title = 'Agence WordPress Paris | Création de Site Internet Sur Mesure'
  const description = 'Développement de sites WordPress performants, sécurisés et optimisés SEO. Agence experte à Paris : thèmes sur mesure (sans Elementor), maintenance et hébergement.'
  
  return {
    title,
    description,
    keywords: 'wordpress paris, agence wordpress paris, expert wordpress, création site wordpress, thème sur mesure wordpress, développeur wordpress paris, maintenance wordpress',
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
      languages: generateAlternateUrls('services/wordpress-paris'),
    },
    robots: { index: true, follow: true },
  }
}

const wordpressServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Agence WordPress Paris",
  "description": "Création de sites internet WordPress sur mesure. Thèmes ultra-rapides, sécurité renforcée, blocs Gutenberg et optimisation SEO avancée.",
  "provider": {
    "@type": "Organization",
    "name": "Sidikoff Digital",
    "url": "https://www.sidikoff.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Paris"
  },
  "serviceType": ["Création de site WordPress", "Développement de Thème", "Maintenance WordPress", "Refonte de site internet"],
  "image": "https://www.sidikoff.com/images/opengraph-fr.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Paris",
    "addressCountry": "FR"
  }
}

export default function WordpressParisLandingPage() {
  const faqSchema = generateFAQStructuredData(faqItems)

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(wordpressServiceSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <WordpressParisLandingContent />
    </>
  )
}

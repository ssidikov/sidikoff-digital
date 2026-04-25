import { createCanonicalUrl, generateAlternateUrls, generateFAQStructuredData } from '@/lib/seo-utils'
import { Metadata } from 'next'
import WordpressLyonLandingContent from '@/components/WordpressLyonLandingContent'

const PAGE_URL = createCanonicalUrl('services/wordpress-lyon', 'fr')

const faqItems = [
  {
    question: 'Pourquoi faire appel à une agence WordPress plutôt que de le faire soi-même ?',
    answer: 'Installer WordPress est facile, mais concevoir un site performant, sécurisé et bien référencé est un métier. Un site "fait maison" utilise souvent des thèmes lourds et trop de plugins, ce qui détruit l\'expérience utilisateur. Notre agence code votre thème sur mesure, garantissant vitesse, sécurité et résultats SEO sur le marché lyonnais.'
  },
  {
    question: 'Utilisez-vous des constructeurs de pages comme Elementor ?',
    answer: 'Non. Nous fuyons les "Page Builders" (Elementor, Divi) car ils génèrent du "code spaghetti" pénalisé par Google. Nous développons des blocs sur mesure basés sur l\'éditeur natif Gutenberg et Advanced Custom Fields (ACF). Votre site sera 3x plus rapide et infiniment plus stable.'
  },
  {
    question: 'Où serez-vous physiquement pour notre projet ?',
    answer: 'Notre agence est fortement implantée en région Auvergne-Rhône-Alpes. Nous pouvons nous rencontrer physiquement à Lyon (Part-Dieu, Presqu\'île, Confluence) ou dans sa métropole pour échanger sur la stratégie, valider les maquettes et effectuer les formations.'
  },
  {
    question: 'Combien coûte un site WordPress professionnel sur mesure ?',
    answer: 'Un site vitrine WordPress avec un thème développé "from scratch" commence généralement autour de 3 000 €. Le prix évolue selon le nombre de modèles de pages différents, les fonctionnalités spécifiques (espace membre, annuaire complexe) et les enjeux SEO.'
  },
  {
    question: 'Qu\'inclut votre prestation de maintenance WordPress ?',
    answer: 'Notre forfait de Tierce Maintenance Applicative (TMA) inclut : les mises à jour sécurisées du Core WordPress et des plugins, des sauvegardes externalisées quotidiennes, la surveillance 24/7 contre le piratage, et des heures d\'intervention dédiées pour les évolutions de votre site.'
  }
]

export function generateMetadata(): Metadata {
  const title = 'Agence WordPress Lyon | Création de Site Internet Sur Mesure'
  const description = 'Développement de sites WordPress performants, sécurisés et optimisés SEO. Agence experte à Lyon : thèmes sur mesure (sans Elementor), maintenance et refonte.'
  
  return {
    title,
    description,
    keywords: 'wordpress lyon, agence wordpress lyon, expert wordpress, création site wordpress, thème sur mesure wordpress, développeur wordpress lyon, maintenance wordpress rhone',
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
      languages: generateAlternateUrls('services/wordpress-lyon'),
    },
    robots: { index: true, follow: true },
  }
}

const wordpressServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Agence WordPress Lyon - Sidikoff Digital",
  "description": "Création de sites internet WordPress sur mesure. Thèmes ultra-rapides, sécurité renforcée, blocs Gutenberg ACF et optimisation SEO avancée.",
  "provider": {
    "@type": "Organization",
    "name": "Sidikoff Digital",
    "url": "https://www.sidikoff.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Lyon"
  },
  "serviceType": ["Création de site WordPress", "Développement de Thème", "Maintenance WordPress", "Refonte de site internet"],
  "image": "https://www.sidikoff.com/images/opengraph-fr.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lyon",
    "addressRegion": "Auvergne-Rhône-Alpes",
    "addressCountry": "FR"
  }
}

export default function WordpressLyonLandingPage() {
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
      <WordpressLyonLandingContent />
    </>
  )
}

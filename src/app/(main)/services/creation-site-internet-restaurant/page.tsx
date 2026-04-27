import { createCanonicalUrl, generateAlternateUrls, generateFAQStructuredData , generateBreadcrumbStructuredData, DEFAULT_SEO } from '@/lib/seo-utils'
import { Metadata } from 'next'
import RestaurantLandingContent from '@/components/RestaurantLandingContent'

const PAGE_URL = createCanonicalUrl('services/creation-site-internet-restaurant', 'fr')

const faqItems = [
  {
    question: 'Pourquoi payer pour un site alors que j\'ai Google My Business et TripAdvisor ?',
    answer: 'Google et TripAdvisor sont des annuaires où vous êtes en concurrence directe avec vos voisins. Un site web vous appartient. C\'est votre vitrine. Il permet de ne pas payer de commissions sur les réservations (si vous utilisez un outil propre), de fidéliser via une newsletter, et surtout d\'offrir une expérience de marque forte qui donne envie de venir chez vous plutôt qu\'ailleurs.'
  },
  {
    question: 'Est-il facile de mettre à jour le menu et la carte des vins ?',
    answer: 'Oui, c\'est primordial pour un restaurant. Nous vous formons à l\'utilisation d\'un espace d\'administration très simple. Vous pourrez changer vos plats du jour, ajuster vos prix ou mettre à jour la carte des vins depuis votre smartphone ou votre tablette en 2 minutes.'
  },
  {
    question: 'Pouvez-vous intégrer notre système de réservation actuel ?',
    answer: 'Absolument. Que vous utilisiez Zenchef, TheFork, GuestOnline, SevenRooms ou un simple formulaire, nous l\'intégrons de manière transparente sur votre site. L\'objectif est de maximiser le taux de conversion en rendant le bouton de réservation accessible en permanence.'
  },
  {
    question: 'Comment faites-vous pour le Click & Collect ?',
    answer: 'Nous avons deux approches : soit nous lions les boutons de votre site vers vos partenaires de livraison (UberEats, Deliveroo), soit nous créons une boutique en ligne interne sans commission (via Stripe/WooCommerce) pour que vos clients commandent directement chez vous.'
  },
  {
    question: 'Le site sera-t-il bien visible pour les touristes de passage ?',
    answer: 'C\'est tout l\'enjeu du SEO local. En optimisant techniquement votre site (vitesse, balises, multilinguisme) et en l\'associant à Google Maps, nous vous aidons à capter aussi bien la clientèle de bureau le midi que les touristes qui cherchent "où manger près de [votre quartier]" le soir.'
  }
]

export function generateMetadata(): Metadata {
  const title = 'Création Site Internet Restaurant | Web Design Gastronomie'
  const description = 'Développez le chiffre d\'affaires de votre restaurant avec un site web appétissant. Réservation Zenchef, TheFork, Click & Collect et SEO Local inclus.'
  
  return {
    title,
    description,
    keywords: 'création site internet restaurant, site web bistrot, agence web restauration, seo local restaurant, réservation en ligne restaurant, site click and collect',
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
      languages: generateAlternateUrls('services/creation-site-internet-restaurant'),
    },
    robots: { index: true, follow: true },
  }
}

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  "name": "Création de Site Internet pour Restaurants - Sidikoff Digital",
  "description": "Création de sites internet sur mesure pour les professionnels de la restauration. Intégration de réservation, click & collect, menus digitaux.",
  "provider": {
    "@type": "Organization",
    "name": "Sidikoff Digital",
    "url": "https://www.sidikoff.com"
  },
  "areaServed": ["France", "Paris", "Lyon"],
  "serviceType": ["Web Design Restaurant", "SEO pour Restaurant", "Marketing Gastronomie"],
  "image": "https://www.sidikoff.com/images/opengraph-fr.png"
}

export default function RestaurantLandingPage() {
  const faqSchema = generateFAQStructuredData(faqItems)

  
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Creation Site Internet Restaurant', url: PAGE_URL },
  ])

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <RestaurantLandingContent />
    </>
  )
}

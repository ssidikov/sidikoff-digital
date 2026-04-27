import { createCanonicalUrl, generateAlternateUrls, generateFAQStructuredData , generateBreadcrumbStructuredData, DEFAULT_SEO } from '@/lib/seo-utils'
import { Metadata } from 'next'
import ArtisanLandingContent from '@/components/ArtisanLandingContent'

const PAGE_URL = createCanonicalUrl('services/creation-site-internet-artisan', 'fr')

const faqItems = [
  {
    question: 'Pourquoi un artisan a-t-il besoin d\'un site internet en 2026 ?',
    answer: 'Le bouche-à-oreille ne suffit plus pour remplir un carnet de commandes sur le long terme. Aujourd\'hui, 85% des particuliers cherchent leur artisan (plombier, chauffagiste, menuisier) sur Google. Sans site web, vous laissez tous ces chantiers à vos concurrents.'
  },
  {
    question: 'Faites-vous des sites pour les urgences et dépannages ?',
    answer: 'Absolument. Pour les métiers du dépannage (serrurier, plombier), nous créons des sites ultra-rapides sur mobile avec un bouton d\'appel géant (Click-to-Call). Le but est que le client vous appelle en moins de 3 secondes.'
  },
  {
    question: 'Comment allez-vous me positionner sur ma ville ?',
    answer: 'Grâce au SEO local. Nous créons des pages spécifiques pour votre ville et les communes alentours (ex: "Rénovation salle de bain à Villeurbanne"). Nous couplons cela avec l\'optimisation de votre fiche Google My Business.'
  },
  {
    question: 'Puis-je ajouter moi-même des photos de mes nouveaux chantiers ?',
    answer: 'Oui ! Nous pouvons vous fournir un accès très simple pour mettre à jour votre galerie avant/après. Sinon, vous pouvez simplement nous envoyer les photos et notre équipe de maintenance s\'en chargera.'
  },
  {
    question: 'Combien de temps faut-il pour avoir mon site en ligne ?',
    answer: 'Nous savons que les artisans n\'ont pas de temps à perdre. La livraison de nos sites vitrines pour le bâtiment se fait généralement en 3 à 4 semaines, clés en main.'
  }
]

export function generateMetadata(): Metadata {
  const title = 'Création Site Internet Artisan & BTP | Générez des Devis'
  const description = 'Développez votre entreprise du bâtiment avec un site web vitrine professionnel. SEO Local, galeries chantiers et formulaires de devis intégrés pour les artisans.'
  
  return {
    title,
    description,
    keywords: 'création site internet artisan, site web btp, agence web artisan, seo artisan, site plombier, site électricien, trouver des chantiers',
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
      languages: generateAlternateUrls('services/creation-site-internet-artisan'),
    },
    robots: { index: true, follow: true },
  }
}

const artisanSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Création de Site Internet pour Artisans du Bâtiment - Sidikoff Digital",
  "description": "Solutions digitales et création de sites web pour les professionnels du BTP. Génération de devis et visibilité locale.",
  "provider": {
    "@type": "Organization",
    "name": "Sidikoff Digital",
    "url": "https://www.sidikoff.com"
  },
  "areaServed": ["France", "Paris", "Lyon"],
  "serviceType": ["Web Design Artisan", "SEO Local BTP", "Génération de Devis Bâtiment"],
  "image": "https://www.sidikoff.com/images/opengraph-fr.png"
}

export default function ArtisanLandingPage() {
  const faqSchema = generateFAQStructuredData(faqItems)

  
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Creation Site Internet Artisan', url: PAGE_URL },
  ])

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(artisanSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ArtisanLandingContent />
    </>
  )
}

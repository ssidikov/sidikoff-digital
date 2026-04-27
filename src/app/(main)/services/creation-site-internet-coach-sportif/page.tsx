import { createCanonicalUrl, generateAlternateUrls, generateFAQStructuredData , generateBreadcrumbStructuredData, DEFAULT_SEO } from '@/lib/seo-utils'
import { Metadata } from 'next'
import CoachLandingContent from '@/components/CoachLandingContent'

const PAGE_URL = createCanonicalUrl('services/creation-site-internet-coach-sportif', 'fr')

const faqItems = [
  {
    question: 'Pourquoi un coach sportif a-t-il besoin d\'un site si Instagram existe ?',
    answer: 'Instagram est excellent pour la notoriété, mais terrible pour la conversion. Un site web vous appartient. Il permet de centraliser vos tarifs, d\'automatiser la prise de rendez-vous, d\'encaisser les paiements à l\'avance (finis les lapins !) et surtout, de capter des clients via Google qui cherchent un coach dans leur ville (SEO local) et qui n\'ont pas forcément Instagram.'
  },
  {
    question: 'Pouvez-vous intégrer un système de réservation de cours ?',
    answer: 'Oui. Que vous fassiez du coaching individuel (Personal Training) ou des bootcamps de groupe, nous intégrons des systèmes comme Calendly, Mindbody ou Acuity Scheduling. Vos clients voient vos créneaux libres, réservent et paient en ligne. Votre agenda Google se met à jour automatiquement.'
  },
  {
    question: 'Je vends des programmes PDF, pouvez-vous créer une boutique en ligne ?',
    answer: 'Absolument. Nous pouvons intégrer un module e-commerce simple (ex: Stripe ou Shopify Buy Button) pour vendre vos e-books, plans d\'entraînement ou goodies, générant ainsi des revenus passifs.'
  },
  {
    question: 'Faut-il engager un photographe pro pour le site ?',
    answer: 'C\'est fortement recommandé. Le métier du fitness est très visuel. Des photos professionnelles de vous en pleine action ou lors d\'un shooting rendent votre site web instantanément premium et justifient des tarifs de coaching plus élevés.'
  },
  {
    question: 'Gérez-vous la fiche Google My Business de mon activité ?',
    answer: 'Oui, dans notre offre de SEO Local, nous optimisons votre fiche Google pour que vous apparaissiez en tête sur Google Maps lorsque quelqu\'un tape "coach sportif [Votre Ville]".'
  }
]

export function generateMetadata(): Metadata {
  const title = 'Création Site Internet Coach Sportif | Personal Trainer'
  const description = 'Développez votre activité de coaching avec un site web performant. Prise de RDV en ligne, vente de programmes, SEO local pour personal trainers et salles de sport.'
  
  return {
    title,
    description,
    keywords: 'création site internet coach sportif, site web personal trainer, agence web fitness, seo coach sportif, site internet salle de sport, réservation en ligne coach',
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
      languages: generateAlternateUrls('services/creation-site-internet-coach-sportif'),
    },
    robots: { index: true, follow: true },
  }
}

const coachSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "name": "Création de Site Internet pour Coach Sportif - Sidikoff Digital",
  "description": "Agence web spécialisée dans la création de sites internet pour coachs sportifs, personal trainers et salles de sport. Intégration de réservation et vente de programmes.",
  "provider": {
    "@type": "Organization",
    "name": "Sidikoff Digital",
    "url": "https://www.sidikoff.com"
  },
  "areaServed": ["France", "Paris", "Lyon"],
  "serviceType": ["Web Design Fitness", "SEO pour Coach Sportif", "Plateforme de Réservation"],
  "image": "https://www.sidikoff.com/images/opengraph-fr.png"
}

export default function CoachLandingPage() {
  const faqSchema = generateFAQStructuredData(faqItems)

  
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Creation Site Internet Coach Sportif', url: PAGE_URL },
  ])

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coachSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CoachLandingContent />
    </>
  )
}

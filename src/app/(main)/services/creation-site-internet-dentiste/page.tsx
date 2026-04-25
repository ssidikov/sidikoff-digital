import { createCanonicalUrl, generateAlternateUrls, generateFAQStructuredData } from '@/lib/seo-utils'
import { Metadata } from 'next'
import DentisteLandingContent from '@/components/DentisteLandingContent'

const PAGE_URL = createCanonicalUrl('services/creation-site-internet-dentiste', 'fr')

const faqItems = [
  {
    question: 'A-t-on le droit de faire de la publicité sur un site de chirurgien-dentiste ?',
    answer: 'Non. L\'Ordre interdit la publicité, mais autorise l\'information objective. Votre site peut (et doit) présenter l\'équipe, le plateau technique (ex: Cone Beam, scanner intra-oral), les horaires, l\'accès, et expliquer les traitements de manière pédagogique. Nous veillons à ce que le contenu reste strictement informatif.'
  },
  {
    question: 'Pouvez-vous créer des pages spécifiques pour l\'implantologie ou l\'Invisalign ?',
    answer: 'Absolument. Il est très pertinent d\'avoir des pages dédiées pour les plans de traitement spécifiques. Cela permet de rassurer les patients anxieux en expliquant le déroulé des soins, et c\'est excellent pour le SEO de votre cabinet sur ces actes à forte valeur ajoutée.'
  },
  {
    question: 'Le site sera-t-il connecté à notre profil Doctolib ?',
    answer: 'Oui. Le parcours patient est notre priorité. Nous intégrons des boutons d\'appel à l\'action "Prendre RDV en ligne" connectés directement à votre agenda Doctolib, Maiia, ou autre solution de gestion.'
  },
  {
    question: 'Fournissez-vous des photos, ou devons-nous engager un photographe ?',
    answer: 'Nous pouvons intégrer des images libres de droits de très haute qualité illustrant les soins dentaires. Cependant, pour établir un climat de confiance optimal, nous recommandons fortement un shooting photo professionnel de votre cabinet, de la salle d\'attente, des salles de soins et de l\'équipe.'
  },
  {
    question: 'Gérez-vous la fiche Google My Business de notre cabinet ?',
    answer: 'Oui, dans le cadre de notre accompagnement SEO Local, nous optimisons votre fiche Google Business Profile (horaires, photos, lien vers le site) pour maximiser votre visibilité sur Google Maps.'
  }
]

export function generateMetadata(): Metadata {
  const title = 'Création Site Internet Dentiste & Cabinet | Agence Santé'
  const description = 'Développez un site web rassurant pour votre cabinet dentaire. Intégration Doctolib, respect de la déontologie de l\'Ordre, SEO local (implantologie, orthodontie).'
  
  return {
    title,
    description,
    keywords: 'création site internet dentiste, site web cabinet dentaire, agence web dentiste, seo dentiste, site internet chirurgien dentiste, web design santé',
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
      languages: generateAlternateUrls('services/creation-site-internet-dentiste'),
    },
    robots: { index: true, follow: true },
  }
}

const dentistSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Création de Site Internet pour Dentistes - Sidikoff Digital",
  "description": "Création de sites internet rassurants et modernes pour les cabinets dentaires. Respect de l'Ordre, SEO local et intégration Doctolib.",
  "provider": {
    "@type": "Organization",
    "name": "Sidikoff Digital",
    "url": "https://www.sidikoff.com"
  },
  "areaServed": ["France", "Paris", "Lyon"],
  "serviceType": ["Web Design Dentaire", "SEO pour Cabinet Dentaire", "Marketing Santé"],
  "image": "https://www.sidikoff.com/images/opengraph-fr.png"
}

export default function DentisteLandingPage() {
  const faqSchema = generateFAQStructuredData(faqItems)

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <DentisteLandingContent />
    </>
  )
}

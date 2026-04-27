import { Metadata } from 'next'
import { createCanonicalUrl, generateAlternateUrls, generateServiceSchema, generateBreadcrumbStructuredData, DEFAULT_SEO } from '@/lib/seo-utils'
import common from '@/locales/fr/common.json'
import FreelanceLandingContent from '@/components/FreelanceLandingContent'

const t = common.freelance_landing

const PAGE_URL = createCanonicalUrl('services/creation-site-internet-freelance', 'fr')

export function generateMetadata(): Metadata {
  return {
    title: t.meta_title,
    description: t.meta_description,
    keywords: t.keywords,
    openGraph: {
      title: t.meta_title,
      description: t.meta_description,
      type: 'website',
      locale: 'fr_FR',
      siteName: 'Sidikoff Digital',
      url: PAGE_URL,
      images: [
        {
          url: '/images/og/creation-sites-web-paris.jpg',
          width: 1200,
          height: 630,
          alt: t.meta_title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta_title,
      description: t.meta_description,
      creator: '@sidikoffdigital',
      images: ['/images/og/creation-sites-web-paris.jpg'],
    },
    alternates: {
      canonical: PAGE_URL,
      languages: generateAlternateUrls('services/creation-site-internet-freelance'),
    },
    robots: { index: true, follow: true },
  }
}

const serviceSchema = generateServiceSchema({
  name: 'Création de Site Internet pour Freelances & Indépendants',
  description:
    'Sites web sur mesure pour freelances et indépendants : portfolio professionnel, blog SEO, formulaire de contact, réservation en ligne. Développeur web freelance Lyon et Paris. Livraison en 2 à 4 semaines. Devis gratuit sous 24h.',
  url: PAGE_URL,
  serviceType: 'Création de site internet freelance',
  areaServed: ['France', 'Lyon', 'Paris', 'Villeurbanne', 'Bordeaux', 'Métropole de Lyon'],
  image: 'https://www.sidikoff.com/images/og/creation-sites-web-paris.jpg',
})

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien coûte un site web pour freelance ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le tarif d'un site web pour freelance ou consultant indépendant démarre à 800 € pour un site vitrine professionnel livré en 2 semaines. Notre forfait Pro à 1 299 € inclut un portfolio dynamique, un blog SEO et un système de réservation. Le forfait Expert à 1 899 € ajoute l'e-commerce et un espace client privé. Tous nos tarifs incluent l'hébergement 1 an et la formation. Devis gratuit sous 24h.",
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps faut-il pour créer un site freelance ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Selon le forfait choisi, il faut entre 2 à 4 semaines pour créer et lancer votre site. Un site vitrine est livré en 2 semaines, un portfolio avec blog en 3 semaines, une solution expert complète en 4 semaines.",
      },
    },
    {
      '@type': 'Question',
      name: 'Puis-je faire une refonte de mon site freelance existant ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Absolument ! Nous réalisons des refontes de sites web freelance et indépendant pour améliorer le design, les performances et le référencement. Une refonte comprend l'audit de l'existant, une migration des contenus, un nouveau design responsive et une optimisation SEO complète. Délai : 2 à 3 semaines selon la complexité.",
      },
    },
    {
      '@type': 'Question',
      name: 'Mon site sera-t-il visible sur Google ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, nous optimisons chaque page pour le référencement naturel : balises meta, structure sémantique H1/H2/H3, données Schema.org (Person, ProfessionalService), Core Web Vitals (Lighthouse 95+) et vos mots-clés métier avec votre localisation (Lyon, Paris ou toute la France). Résultats visibles en 4 à 8 semaines.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle technologie utilisez-vous pour les sites freelances ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Nous développons principalement avec Next.js (React) pour des sites ultra-rapides avec score Lighthouse 95+. Pour les portfolios créatifs, nous utilisons également des animations Framer Motion. Tous nos sites sont hébergés sur des CDN performants (Vercel, Cloudflare) avec HTTPS inclus.",
      },
    },
    {
      '@type': 'Question',
      name: 'Puis-je vendre mes services ou formations en ligne ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, nos forfaits Pro et Expert incluent des systèmes de réservation et de paiement en ligne (Stripe, PayPal) pour vos consultations, coaching, formations ou produits digitaux. Vous pouvez accepter des paiements directement depuis votre site sans commission de plateforme tierce.",
      },
    },
    {
      '@type': 'Question',
      name: "Puis-je avoir un blog pour démontrer mon expertise ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, le blog optimisé SEO est inclus dans nos forfaits Pro et Expert. C'est l'outil le plus efficace pour attirer du trafic organique, démontrer votre expertise et améliorer votre positionnement sur Google. Nous configurons le blog avec les bonnes balises Schema.org pour maximiser la visibilité dans les AI Overviews et les featured snippets.",
      },
    },
    {
      '@type': 'Question',
      name: "Gérez-vous l'hébergement et la sécurité ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, l'hébergement sécurisé sur serveurs européens, les sauvegardes automatiques quotidiennes, les mises à jour de sécurité et le certificat SSL sont inclus dans tous nos forfaits. Nous monitorons votre site 24h/24 et intervenons en cas d'incident sous 4 heures ouvrées.",
      },
    },
  ],
}

export default function FreelanceWebsitesPage() {
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Création Site Internet Freelance', url: PAGE_URL },
  ])

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FreelanceLandingContent />
    </>
  )
}



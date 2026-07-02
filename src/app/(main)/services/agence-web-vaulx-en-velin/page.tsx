import {
  createCanonicalUrl,
  generateAlternateUrls,
  generateFAQStructuredData,
  generateBreadcrumbStructuredData,
  generateServiceSchema,
  DEFAULT_SEO,
} from '@/lib/seo-utils'
import { Metadata } from 'next'
import AgenceWebVaulxLandingContent from '@/components/AgenceWebVaulxLandingContent'

const PAGE_URL = createCanonicalUrl('services/agence-web-vaulx-en-velin', 'fr')

const faqItems = [
  {
    question: 'Faites-vous des sites internet pour tous les secteurs d\'activité ?',
    answer: 'Oui, nous accompagnons une grande variété de professionnels à Vaulx-en-Velin et dans la métropole lyonnaise : artisans du BTP, professions libérales (avocats, experts-comptables), commerçants, industries et startups technologiques. Nous adaptons notre stratégie à votre marché spécifique.'
  },
  {
    question: 'Pourquoi le design sur mesure est-il préférable à un modèle tout fait ?',
    answer: 'Un modèle (template) acheté 50€ est utilisé par des milliers d\'autres entreprises. Il est souvent lourd à charger et difficile à personnaliser. Un design sur mesure permet de créer une identité visuelle unique qui vous démarque, tout en garantissant un code léger, rapide et apprécié par Google.'
  },
  {
    question: 'Proposez-vous un service de maintenance après la mise en ligne ?',
    answer: 'Absolument. La mise en ligne d\'un site n\'est que le début. Nous proposons des forfaits de maintenance incluant les mises à jour de sécurité, la gestion des sauvegardes, le monitoring de disponibilité 24/7 et des heures de support technique en cas de besoin.'
  },
  {
    question: 'Mon site apparaîtra-t-il sur Google ?',
    answer: 'Oui. Tous nos sites sont conçus "SEO-friendly" : structure des titres (H1/H2), balises méta, vitesse de chargement et sitemap XML optimisés. Nous proposons également des prestations SEO avancées pour vous aider à atteindre les premières positions sur des requêtes concurrentielles.'
  },
  {
    question: 'Quel est le mode de facturation ?',
    answer: 'Nous fonctionnons généralement sur devis fixe après validation du cahier des charges. Le paiement s\'effectue en plusieurs échéances (ex: 30% à la commande, 40% au design, 30% à la livraison). Vous maîtrisez ainsi totalement votre budget, sans frais cachés.'
  }
]

export function generateMetadata(): Metadata {
  const title = 'Agence Web Vaulx-en-Velin | Création Site Internet & SEO'
  const description = 'Développez votre entreprise avec notre agence web intervenant à Vaulx-en-Velin. Création de site vitrine, e-commerce sur mesure et optimisation SEO local.'
  
  return {
    title,
    description,
    keywords: 'agence web vaulx-en-velin, création site internet vaulx-en-velin, agence de communication vaulx, seo vaulx-en-velin, webmaster vaulx, agence digitale rhone',
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'fr_FR',
      siteName: 'Sidikoff Digital',
      url: PAGE_URL,
      images: [{ url: 'https://cdn.sidikoff.com/images/opengraph-fr.png', width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@sidikoffdigital',
      images: ['https://cdn.sidikoff.com/images/opengraph-fr.png'],
    },
    alternates: {
      canonical: PAGE_URL,
      languages: generateAlternateUrls('services/agence-web-vaulx-en-velin'),
    },
    robots: { index: true, follow: true },
  }
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'Agence Web Vaulx-en-Velin | Création Site Internet',
  description:
    'Création de sites internet performants, e-commerce et stratégie de référencement pour les entreprises de Vaulx-en-Velin.',
  isPartOf: { '@id': `${DEFAULT_SEO.siteUrl}/#website` },
  about: { '@id': `${PAGE_URL}#service` },
}

const serviceSchema = generateServiceSchema({
  name: 'Agence Web Vaulx-en-Velin | Création Site Internet',
  description:
    'Création de sites internet performants, e-commerce et stratégie de référencement pour les entreprises de Vaulx-en-Velin.',
  url: PAGE_URL,
  serviceType: 'Création de site internet',
  areaServed: ['Vaulx-en-Velin', 'Lyon', 'Métropole de Lyon'],
  image: 'https://cdn.sidikoff.com/images/opengraph-fr.png',
})

export default function AgenceWebVaulxLandingPage() {
  const faqSchema = generateFAQStructuredData(faqItems)

  
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Agence Web Vaulx En Velin', url: PAGE_URL },
  ])

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AgenceWebVaulxLandingContent />
    </>
  )
}

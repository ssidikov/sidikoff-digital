import {
  createCanonicalUrl,
  generateAlternateUrls,
  generateFAQStructuredData,
  generateBreadcrumbStructuredData,
  generateServiceSchema,
  DEFAULT_SEO,
} from '@/lib/seo-utils'
import { Metadata } from 'next'
import EcommerceParisLandingContent from '@/components/EcommerceParisLandingContent'

const PAGE_URL = createCanonicalUrl('services/ecommerce-paris', 'fr')

const faqItems = [
  {
    question: 'Quelle plateforme e-commerce recommandez-vous ?',
    answer: 'Cela dépend de vos besoins. Pour un lancement rapide ou une marque D2C (Direct-to-Consumer), Shopify est souvent le meilleur choix. Pour un catalogue complexe avec beaucoup de contenu, WooCommerce (WordPress) est excellent. Pour des besoins sur mesure avec des millions de vues, nous développons des architectures Headless Commerce (Next.js + Shopify/Medusa).'
  },
  {
    question: 'Faites-vous du Headless Commerce ?',
    answer: 'Oui, c\'est notre spécialité pour les marques à forte croissance. Nous séparons le front-end (ce que le client voit) du back-end (la gestion du catalogue). En utilisant Next.js pour le front et Shopify/Swelle pour le back, vous obtenez un site e-commerce d\'une rapidité foudroyante qui surclasse vos concurrents en SEO.'
  },
  {
    question: 'Combien coûte la création d\'un site e-commerce professionnel ?',
    answer: 'Une boutique Shopify ou WooCommerce standard commence autour de 5 000 €. Une plateforme e-commerce sur mesure avec des fonctionnalités avancées (Headless, PIM, ERP synchronisé, design très personnalisé) se situe entre 15 000 € et 50 000 €. Nous évaluons ensemble le meilleur compromis ROI.'
  },
  {
    question: 'Puis-je gérer moi-même mon catalogue produits après la livraison ?',
    answer: 'Absolument. Nous vous formons (vous et vos équipes) sur le back-office de la solution choisie. Vous serez totalement autonomes pour ajouter de nouveaux produits, modifier les prix, créer des codes promotionnels et gérer vos commandes.'
  },
  {
    question: 'Gérez-vous la migration d\'une ancienne boutique vers une nouvelle ?',
    answer: 'Oui. Les migrations e-commerce (de PrestaShop vers Shopify par exemple) sont des opérations délicates. Nous sécurisons le transfert de vos clients, de l\'historique des commandes, de votre catalogue produits, et surtout, nous mettons en place des plans de redirection 301 massifs pour ne pas perdre votre trafic SEO.'
  }
]

export function generateMetadata(): Metadata {
  const title = 'Agence E-Commerce Paris | Création de Boutique en Ligne'
  const description = 'Augmentez vos ventes avec notre agence E-Commerce à Paris. Experts Shopify, WooCommerce et Headless Commerce. Design CRO, vitesse et SEO optimisés.'
  
  return {
    title,
    description,
    keywords: 'ecommerce paris, agence ecommerce paris, création site ecommerce, expert shopify paris, agence woocommerce, headless commerce nextjs, cro ecommerce',
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
      languages: generateAlternateUrls('services/ecommerce-paris'),
    },
    robots: { index: true, follow: true },
  }
}

const ecommerceWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'E-commerce Paris | Boutique en Ligne',
  description:
    'Création de boutiques en ligne performantes, design CRO et SEO e-commerce pour les entreprises parisiennes.',
  isPartOf: { '@id': `${DEFAULT_SEO.siteUrl}/#website` },
  about: { '@id': `${PAGE_URL}#service` },
}

const ecommerceServiceSchema = generateServiceSchema({
  name: 'E-commerce Paris | Boutique en Ligne',
  description:
    'Création de boutiques en ligne performantes, design CRO et SEO e-commerce pour les entreprises parisiennes.',
  url: PAGE_URL,
  serviceType: 'Création de boutique en ligne',
  areaServed: ['Paris', 'Île-de-France'],
  image: 'https://cdn.sidikoff.com/images/opengraph-fr.png',
})

export default function EcommerceParisLandingPage() {
  const faqSchema = generateFAQStructuredData(faqItems)

  
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Ecommerce Paris', url: PAGE_URL },
  ])

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ecommerceWebPageSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ecommerceServiceSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <EcommerceParisLandingContent />
    </>
  )
}

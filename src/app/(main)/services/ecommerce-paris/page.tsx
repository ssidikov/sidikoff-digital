import { createCanonicalUrl, generateAlternateUrls, generateFAQStructuredData } from '@/lib/seo-utils'
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
      languages: generateAlternateUrls('services/ecommerce-paris'),
    },
    robots: { index: true, follow: true },
  }
}

const ecommerceServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Agence E-Commerce Paris",
  "description": "Création de boutiques en ligne performantes (Shopify, WooCommerce, Headless). Optimisation du taux de conversion (CRO) et SEO e-commerce.",
  "provider": {
    "@type": "Organization",
    "name": "Sidikoff Digital",
    "url": "https://www.sidikoff.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Paris"
  },
  "serviceType": ["Création Site E-Commerce", "Développement Shopify", "Développement WooCommerce", "Headless Commerce"],
  "image": "https://www.sidikoff.com/images/opengraph-fr.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Paris",
    "addressCountry": "FR"
  }
}

export default function EcommerceParisLandingPage() {
  const faqSchema = generateFAQStructuredData(faqItems)

  return (
    <>
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

import { Metadata } from 'next'
import common from '@/locales/fr/common.json'
import EcommerceLandingContent from '@/components/EcommerceLandingContent'
import { generatePageMetadata, createCanonicalUrl } from '@/lib/seo-utils'

const PAGE_URL = createCanonicalUrl('services/creation-site-ecommerce', 'fr')

export async function generateMetadata(): Promise<Metadata> {
  const t = common.ecommerce_landing

  return generatePageMetadata(
    t.meta_title,
    t.meta_description,
    '/services/creation-site-ecommerce',
    'fr',
    {
      keywords: t.keywords,
      ogImage: '/images/opengraph-fr.png',
      ogType: 'website',
    },
  )
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Création de Site E-commerce sur Mesure',
  description:
    'Boutiques en ligne sur mesure avec Next.js, Shopify et WooCommerce. SEO e-commerce optimisé, paiements sécurisés (Stripe, PayPal), gestion des stocks intuitive. Livraison en 4 à 6 semaines.',
  url: PAGE_URL,
  serviceType: 'Création de site e-commerce',
  provider: {
    '@type': 'Organization',
    name: 'Sidikoff Digital',
    url: 'https://www.sidikoff.com',
  },
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'City', name: 'Lyon' },
    { '@type': 'City', name: 'Paris' },
    { '@type': 'City', name: 'Villeurbanne' },
    { '@type': 'City', name: 'Bordeaux' },
    { '@type': 'City', name: 'Marseille' },
  ],
  offers: {
    '@type': 'Offer',
    priceCurrency: 'EUR',
    price: '2499',
    description: 'Boutique en ligne professionnelle dès 2 499 €',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le tarif pour créer un site e-commerce ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le coût d'une boutique en ligne sur mesure démarre à 2 499 € pour le forfait Boutique Pro (jusqu'à 100 produits, livré en 4–6 semaines). Le forfait Commerce Premium à 4 299 € inclut des produits illimités, un système de fidélisation et le SEO e-commerce avancé. Notre solution Marketplace Master à 7 999 € couvre les plateformes multi-vendeurs. Devis gratuit sous 24h selon votre catalogue.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle plateforme utilisez-vous pour les sites E-commerce ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Nous choisissons la technologie la plus adaptée : Next.js/React pour du sur-mesure ultra-rapide (Lighthouse 95+), Shopify pour des boutiques rapides à lancer, WooCommerce pour la flexibilité WordPress, ou des solutions custom pour les marketplaces multi-vendeurs.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien de temps faut-il pour créer un site e-commerce ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le délai de création varie selon la complexité : 4 à 6 semaines pour une boutique standard, 6 à 8 semaines pour un commerce premium, 8 à 12 semaines pour une marketplace multi-vendeurs. La refonte d'une boutique existante prend généralement 3 à 5 semaines.",
      },
    },
    {
      '@type': 'Question',
      name: 'Puis-je faire la refonte de ma boutique en ligne existante ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Absolument ! Nous auditons votre site existant (performances, UX, taux de conversion, SEO), migrons vos produits et données clients, et reconstruisons votre boutique avec une technologie moderne pour améliorer le taux de conversion sans perdre votre SEO existant.",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment gérez-vous les paiements et la sécurité ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Nous intégrons Stripe, PayPal, Klarna (paiement en 3 fois), virements SEPA et carte bancaire. Tous les flux sont chiffrés SSL et conformes aux standards PCI DSS. Votre boutique est hébergée sur des serveurs européens avec sauvegardes quotidiennes.",
      },
    },
    {
      '@type': 'Question',
      name: 'Le site sera-t-il optimisé pour le SEO e-commerce ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, chaque page produit et catégorie est optimisée avec des balises meta uniques, des données structurées (Schema.org Product, Offer, BreadcrumbList), la vitesse de chargement (Core Web Vitals) et les fils d'Ariane. Nous optimisons également pour Google Shopping.",
      },
    },
    {
      '@type': 'Question',
      name: 'Puis-je gérer mon stock et mes commandes facilement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, nous créons un tableau de bord intuitif pour gérer vos produits, stocks, commandes et clients. Formation complète incluse. Pour Shopify et WooCommerce, vous bénéficiez d'interfaces éprouvées. Pour les solutions Next.js sur mesure, nous développons un back-office adapté à votre workflow.",
      },
    },
    {
      '@type': 'Question',
      name: 'Proposez-vous la maintenance et les mises à jour ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, nous assurons la maintenance technique complète : sauvegardes automatisées, mises à jour de sécurité, monitoring 24h/24 et support réactif. Des forfaits de maintenance mensuelle sont disponibles dès 49 €/mois.",
      },
    },
  ],
}

export default function EcommerceLandingPage() {
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
      <EcommerceLandingContent />
    </>
  )
}


import { createCanonicalUrl, generateAlternateUrls, generateFAQStructuredData , generateBreadcrumbStructuredData, DEFAULT_SEO } from '@/lib/seo-utils'
import { Metadata } from 'next'
import NextjsParisLandingContent from '@/components/NextjsParisLandingContent'

const PAGE_URL = createCanonicalUrl('services/nextjs-paris', 'fr')

const faqItems = [
  {
    question: 'Pourquoi choisir Next.js plutôt que React classique (CRA ou Vite) ?',
    answer: 'React classique exécute le rendu côté client (CSR), ce qui pose de gros problèmes de SEO et de temps de premier chargement (First Contentful Paint). Next.js résout cela en rendant les pages sur le serveur avant de les envoyer au navigateur. C\'est le standard absolu aujourd\'hui pour toute application web publique.'
  },
  {
    question: 'Qu\'est-ce que le SSR (Server-Side Rendering) et pourquoi est-ce si important ?',
    answer: 'Le SSR signifie que le code HTML est généré sur le serveur à chaque requête. Pour Google, cela veut dire que lorsqu\'il scanne votre page, il voit tout le contenu texte et les balises meta immédiatement, sans avoir à attendre l\'exécution du JavaScript. C\'est indispensable pour dominer les résultats de recherche.'
  },
  {
    question: 'Êtes-vous familiers avec le nouvel App Router de Next.js ?',
    answer: 'Absolument. Notre agence parisienne maîtrise parfaitement l\'App Router (introduit dans Next.js 13+). Nous utilisons systématiquement les React Server Components (RSC), les Server Actions et les layouts imbriqués pour garantir que votre application utilise les standards technologiques les plus récents.'
  },
  {
    question: 'Next.js est-il adapté pour le E-commerce ?',
    answer: 'C\'est l\'outil parfait. Les géants du e-commerce (Nike, TikTok, Target) utilisent Next.js. Grâce à l\'Incremental Static Regeneration (ISR), vous pouvez générer des milliers de pages produits statiques très rapides, tout en les mettant à jour en arrière-plan dès que le stock ou le prix change, sans recompiler tout le site.'
  },
  {
    question: 'Hébergez-vous obligatoirement sur Vercel ?',
    answer: 'Bien que Next.js soit créé par Vercel et que leur infrastructure cloud (Edge) soit la plus optimisée pour ce framework, Next.js peut être déployé n\'importe où (AWS, Google Cloud, serveurs dédiés OVH via Docker ou Node.js). Nous choisissons l\'hébergement en fonction de vos contraintes techniques et budgétaires.'
  }
]

export function generateMetadata(): Metadata {
  const title = 'Agence Next.js Paris | Développeurs React Server Components'
  const description = 'Agence web experte Next.js à Paris. Boostez vos Core Web Vitals, votre SEO (SSR/SSG) et déployez des applications React ultra-performantes.'
  
  return {
    title,
    description,
    keywords: 'nextjs paris, agence nextjs paris, développeur nextjs, react server components paris, ssr react, agence ssr seo, agence vercel paris',
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
      languages: generateAlternateUrls('services/nextjs-paris'),
    },
    robots: { index: true, follow: true },
  }
}

const nextjsServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Agence de Développement Next.js Paris",
  "description": "Création d'applications web Next.js ultra-rapides. Expertise en SSR, SSG, et React Server Components pour un SEO parfait.",
  "provider": {
    "@type": "Organization",
    "name": "Sidikoff Digital",
    "url": "https://www.sidikoff.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Paris"
  },
  "serviceType": ["Développement Next.js", "Optimisation SEO Technique", "Développement Full-Stack"],
  "image": "https://www.sidikoff.com/images/opengraph-fr.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Paris",
    "addressCountry": "FR"
  }
}

export default function NextjsParisLandingPage() {
  const faqSchema = generateFAQStructuredData(faqItems)

  
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Nextjs Paris', url: PAGE_URL },
  ])

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nextjsServiceSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <NextjsParisLandingContent />
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import ParisArrondissementLanding from '@/components/ParisArrondissementLanding'
import { defaultLocale } from '@/lib/i18n'
import {
  createCanonicalUrl,
  DEFAULT_SEO,
  generateAlternateUrls,
  generateBreadcrumbStructuredData,
  generateServiceSchema,
  generateFAQStructuredData,
} from '@/lib/seo-utils'

const PAGE_SLUG = 'services/creation-site-internet-paris-16'

export async function generateMetadata(): Promise<Metadata> {
  const locale = defaultLocale
  const pageTitle = 'Création Site Internet Paris 16 | Agence Web Sidikoff'
  const pageDescription =
    'Creation de site web a Paris 16: site vitrine, e-commerce, redesign et SEO local. Agence web orientee conversion pour Passy, Auteuil et Trocadero.'

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      'creation site internet paris 16',
      'agence web paris 16',
      'creation site web paris 16',
      'agence creation site web paris 16',
      'site vitrine paris 16',
      'site e-commerce paris 16',
      'refonte site web paris 16',
      'seo local paris 16',
      'agence digitale paris 16',
      'creation site internet passy',
      'creation site internet auteuil',
      'creation site internet trocadero',
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      type: 'website',
      locale: 'fr_FR',
      siteName: 'Sidikoff Digital',
      url: createCanonicalUrl(PAGE_SLUG, locale),
      images: [
        {
          url: '/images/opengraph-fr.png',
          width: 1200,
          height: 630,
          alt: 'Agence web Paris 16 - Creation site web professionnel',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      creator: '@sidikoffdigital',
      images: ['/images/opengraph-fr.png'],
    },
    alternates: {
      canonical: createCanonicalUrl(PAGE_SLUG, locale),
      languages: generateAlternateUrls(PAGE_SLUG),
    },
  }
}

export default async function CreationSiteInternetParis16Page() {
  const locale = defaultLocale
  const pageUrl = createCanonicalUrl(PAGE_SLUG, locale)

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: 'Agence web Paris 16 - Creation de site web',
    description: 'Création de sites internet',
    isPartOf: {
      '@id': `${DEFAULT_SEO.siteUrl}/#website`,
    },
    about: {
      '@id': `${pageUrl}#service`,
    },
  }

  const serviceJsonLd = generateServiceSchema({
    name: 'Agence web Paris 16 - Creation de site web',
    description:
      'Creation de sites internet professionnels a Paris 16 avec optimisation SEO locale et orientation conversion.',
    url: pageUrl,
    serviceType: 'Creation de site web Paris 16',
    areaServed: ['Paris 16eme', 'Passy', 'Auteuil', 'Trocadero', 'Paris'],
    image: `${DEFAULT_SEO.siteUrl}/images/opengraph-fr.png`,
    priceRange: '€€',
    provider: {
      name: 'Sidikoff Digital',
      url: DEFAULT_SEO.siteUrl,
    },
  })

  const breadcrumbJsonLd = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Creation site internet Paris 16', url: pageUrl },
  ])

  const faqItems = [
    {
      question: 'Quel budget pour un site internet a Paris 16 ?',
      answer: 'Le budget depend du niveau de personnalisation, du volume de contenu et des integrations. En general, un site vitrine demarre a partir de 690 EUR, et un projet e-commerce demarre autour de 1 290 EUR.',
    },
    {
      question: 'Combien de temps faut-il pour lancer le projet ?',
      answer: 'Pour une page de service ou un site vitrine cible, la mise en ligne peut se faire entre 7 et 14 jours apres validation des contenus et de la direction visuelle.',
    },
    {
      question: 'Est-ce que vous optimisez aussi le SEO local ?',
      answer: 'Oui. La structure technique, les titres, les sections de preuve et les donnees structurees sont alignees sur les requetes locales du 16e arrondissement.',
    },
    {
      question: 'Puis-je garder la main sur mon contenu ensuite ?',
      answer: 'Absolument. Nous livrons un back-office clair et un cadre d edition simple pour mettre a jour textes, visuels et pages sans blocage technique.',
    },
  ]

  const faqJsonLd = generateFAQStructuredData(faqItems)

  return (
    <>
      <script
        id="schema-webpage"
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        id='schema-service-paris-16'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        id='schema-breadcrumb-paris-16'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        id='schema-faq-paris-16'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ParisArrondissementLanding
        arrondissement="16"
        heroTitle={
          <>
            Création Site Internet
            <br />à Paris 16
          </>
        }
        heroDescription="Notre service de creation site web a Paris 16 combine design editorial, structure SEO locale et parcours de conversion. Objectif: transformer la visibilite des entreprises de Passy, Auteuil, La Muette et Trocadero en demandes qualifiees."
        neighborhoods={['Passy', 'Auteuil', 'La Muette', 'Trocadero', 'Porte Dauphine', 'Chaillot']}
        visionLocaleText="Une page orientee conversion pour les entreprises, cabinets et commerces du 16e."
        faqItems={faqItems}
      >
        <section className="relative bg-[#f8f4eb] py-24 px-6 md:px-10 lg:px-16 border-t border-[#14110f]/10">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#1a1512] md:text-4xl" style={{ fontFamily: 'var(--font-bodoni)' }}>
                Une présence en ligne incontournable pour les entreprises du 16e arrondissement
              </h2>
              <p className="text-lg leading-relaxed text-[#4d4037]">
                Le 16e arrondissement de Paris n'est pas seulement un quartier résidentiel de prestige ; c'est un écosystème économique particulièrement dynamique où se côtoient sièges sociaux d'envergure, boutiques élégantes, restaurants raffinés, galeries d'art et une multitude de professions libérales. Pour tous ces acteurs, la simple existence d'une vitrine physique ou d'une adresse prestigieuse ne suffit plus à assurer la pérennité de leur activité. Il est aujourd'hui absolument crucial de bâtir une véritable <strong>présence en ligne</strong> qui reflète parfaitement l'excellence, la rigueur et le sérieux de leurs prestations. Que votre activité soit installée au cœur de Passy, près de la place Victor Hugo, autour du Trocadéro ou dans le quartier verdoyant d'Auteuil, créer un site internet optimisé constitue la première étape incontournable de votre croissance digitale.
              </p>
              <p className="text-lg leading-relaxed text-[#4d4037]">
                Pour les <strong>entreprises du 16e arrondissement</strong>, le défi majeur consiste à capter une clientèle locale très exigeante tout en s'ouvrant progressivement à une audience parisienne, voire internationale, beaucoup plus large. Atteindre cet objectif passe inévitablement par l'adoption de <strong>solutions digitales</strong> sur mesure, spécifiquement pensées pour répondre à des objectifs business précis. Qu'il s'agisse de générer des leads hautement qualifiés, d'augmenter significativement le volume de prises de rendez-vous pour les cabinets, ou encore de développer directement les ventes en ligne pour les commerces locaux, notre approche se concentre avant tout sur un élément essentiel : offrir une <strong>expérience utilisateur</strong> irréprochable, fluide, sécurisée et mémorable.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#1a1512]">
                Pourquoi créer un site internet dédié aux professionnels de Paris 16 ?
              </h3>
              <p className="text-lg leading-relaxed text-[#4d4037]">
                Dans un environnement local aussi concurrentiel, chaque détail technique ou esthétique a son importance. Lorsqu'un internaute effectue une recherche pour un service de proximité dans l'Ouest parisien, sa décision de contacter un prestataire ou un autre se prend très souvent en l'espace de quelques secondes. Un webdesign vieillissant, une navigation confuse, un temps de chargement trop long ou, pire encore, une mauvaise visibilité sur les <strong>moteurs de recherche</strong> peuvent vous faire perdre quotidiennement de très précieuses opportunités commerciales. C'est la raison pour laquelle chaque <strong>projet digital</strong> que nous concevons et développons est minutieusement pensé pour maximiser votre impact dès les premiers instants de la visite. 
              </p>
              <p className="text-lg leading-relaxed text-[#4d4037]">
                Pour les <strong>cabinets / professions libérales</strong> — qu'il s'agisse d'avocats, de notaires, d'architectes, de consultants ou de médecins spécialistes — qui sont si nombreux et représentatifs du tissu économique de l'Ouest parisien, la crédibilité et la relation de confiance s'établissent virtuellement dès le premier contact avec le site. Nous concevons pour ces professionnels des plateformes élégantes et sécurisées qui rassurent immédiatement le visiteur, l'informent clairement sur les expertises proposées et facilitent grandement le processus de conversion. Parallèlement, pour les <strong>commerces locaux</strong>, les artisans d'art et les boutiques de créateurs, nous développons des interfaces e-commerce ou vitrines qui mettent majestueusement en valeur l'authenticité, le savoir-faire et la très haute qualité des produits. Le but est d'inciter non seulement à l'achat en ligne, mais aussi à la visite physique dans les points de vente.
              </p>
              <p className="text-lg leading-relaxed text-[#4d4037]">
                En prenant la décision de <strong>créer un site internet</strong> parfaitement adapté à la psychologie de votre cible, vous investissez dans un actif technologique pérenne. L'optimisation pointue pour les requêtes géolocalisées garantit, mois après mois, votre <strong>visibilité locale à Paris 16</strong>. En pratique, cela signifie que lorsqu'un prospect ou un futur client recherche vos services à quelques rues de votre établissement, c'est votre entreprise qui se positionne naturellement en tête des résultats de recherche.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#1a1512]">
                Des solutions digitales taillées pour le succès à long terme
              </h3>
              <p className="text-lg leading-relaxed text-[#4d4037]">
                Notre méthodologie de travail repose sur une immersion complète dans votre univers et une compréhension approfondie des enjeux propres à votre marché. En tant qu'agence, nous ne nous contentons jamais de produire simplement quelques lignes de code ou de dessiner des maquettes visuellement esthétiques mais creuses. Nous prenons le temps d'élaborer, avec vous, une stratégie de communication digitale complète et ambitieuse. Cette stratégie englobe la direction artistique, l'intégration technique de dernière génération et une stratégie de référencement naturel (SEO) agressive. L'<strong>expérience utilisateur</strong> demeure toujours au cœur de nos préoccupations techniques : nous visons des temps de chargement ultra-rapides, une compatibilité mobile absolument parfaite (responsive design total) et une architecture de l'information structurée de façon à guider intuitivement chaque visiteur vers l'action souhaitée (contact, devis, achat).
              </p>
              <p className="text-lg leading-relaxed text-[#4d4037]">
                Aujourd'hui, la pleine maîtrise des algorithmes complexes qui régissent les <strong>moteurs de recherche</strong> est indispensable pour pérenniser durablement votre activité sur le web. En travaillant chirurgicalement sur la sémantique de vos pages, sur un maillage local intelligent et en intégrant très naturellement les mots-clés les plus pertinents liés à votre secteur d'activité, nous assurons à l'ensemble de votre <strong>projet digital</strong> un flux de trafic extrêmement qualifié et régulier. Ainsi positionnée, votre nouvelle plateforme sur internet transcende le simple rôle de vitrine virtuelle : elle devient votre meilleur levier d'acquisition de clientèle, transformant silencieusement les internautes curieux de passage en clients fidèles et réguliers de votre entreprise.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#1a1512]">
                L'importance du design et de l'optimisation technique
              </h3>
              <p className="text-lg leading-relaxed text-[#4d4037]">
                L'exigence de la clientèle du 16ème arrondissement requiert un standard de qualité web très élevé. Un design "template" générique ne fera pas le poids face à des concurrents investissant massivement dans leur image. C'est pourquoi nous accordons une importance primordiale à l'identité visuelle de votre site : choix typographiques raffinés, palettes de couleurs harmonieuses, utilisation de photographies professionnelles mettant en valeur vos locaux et vos équipes. Chaque élément visuel est méticuleusement pensé pour résonner avec l'esthétique et l'attente d'une audience premium. Au-delà de l'apparence, l'optimisation technique sous-jacente garantit que le site répond instantanément aux interactions, renforçant ainsi l'image de fiabilité et de professionnalisme de votre marque. En alliant une direction artistique soignée à des fondations techniques robustes, votre site web devient un ambassadeur infatigable, travaillant pour votre réputation 24 heures sur 24, 7 jours sur 7.
              </p>
            </div>

            <div className="mt-12 rounded-2xl bg-white p-8 shadow-sm border border-[#14110f]/10 text-center">
              <p className="text-lg font-medium text-[#1a1512] mb-4">
                Vous cherchez toute la région parisienne ?
              </p>
              <Link 
                href="/services/creation-site-internet-paris" 
                className="inline-flex items-center gap-2 rounded-full bg-[#1f3a5f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#152a45]"
              >
                Découvrir notre page principale Paris
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </ParisArrondissementLanding>
    </>
  )
}

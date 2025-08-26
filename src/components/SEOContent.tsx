import Link from 'next/link'
import { SEOLocation } from '@/lib/seo-utils'
import { Locale } from '@/lib/i18n'

interface SEOContentProps {
  readonly location: SEOLocation
  readonly locale: Locale
}

// Content configuration constants
const CONTENT_CONFIG = {
  contact: {
    phone: '+33626932734',
    email: 'contact@sidikoff.digital'
  },
  
  stats: {
    projectsCompleted: 150,
    guarantee: '24h'
  }
} as const

// Service configuration
const SERVICES = [
  {
    title: '🌐 Sites Vitrine',
    description: 'Présence digitale professionnelle pour votre entreprise',
    features: [
      'Design moderne',
      'SEO optimisé',
      'Responsive design',
      'Performance garantie',
    ],
  },
  {
    title: '🛒 E-commerce',
    description: 'Boutiques en ligne performantes avec gestion complète des ventes',
    features: [
      'Paiement sécurisé',
      'Gestion stock',
      'Analytics avancés',
      'Mobile-first',
    ],
  },
  {
    title: '📱 Applications Web',
    description: 'Solutions sur mesure pour vos besoins spécifiques métier',
    features: [
      'Développement agile',
      'API intégrées',
      'Sécurité renforcée',
      'Évolutivité',
    ],
  },
] as const

// Trust indicators configuration
const TRUST_INDICATORS = [
  {
    icon: '⚡',
    text: 'Livraison rapide et respect des délais'
  },
  {
    icon: '🔧',
    text: 'Support technique et maintenance inclus'
  },
  {
    icon: '📈',
    text: 'Optimisation SEO pour meilleur référencement'
  },
  {
    icon: '💰',
    text: 'Tarifs transparents sans surprise'
  }
] as const

// Style configuration constants
const STYLES = {
  container: 'bg-white py-16',
  wrapper: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8',
  prose: 'prose max-w-none',
  mainTitle: 'text-3xl font-bold text-[var(--primary)] mb-8',
  grid: 'grid md:grid-cols-2 gap-8 mb-12',
  sectionTitle: 'text-xl font-semibold text-[var(--secondary)] mb-4',
  description: 'text-gray-700 mb-4',
  featureList: 'text-sm text-gray-600 space-y-2',
  servicesGrid: 'grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12',
  serviceCard: 'bg-gray-50 p-6 rounded-lg',
  serviceTitle: 'text-lg font-semibold text-[var(--secondary)] mb-3',
  serviceDescription: 'text-gray-700 text-sm mb-4',
  serviceFeatures: 'text-xs text-gray-600 space-y-1',
  trustSection: 'bg-[var(--accent-alpha-10)] p-8 rounded-lg mb-12',
  trustTitle: 'text-xl font-bold text-[var(--primary)] mb-4',
  trustGrid: 'grid md:grid-cols-2 gap-6',
  trustDescription: 'text-gray-700 mb-4',
  trustIndicators: 'space-y-3',
  trustIndicator: 'flex items-center space-x-3',
  trustIcon: 'text-2xl',
  trustText: 'text-sm text-gray-700',
  ctaSection: 'text-center bg-white border border-gray-200 p-8 rounded-lg',
  ctaTitle: 'text-2xl font-bold text-[var(--primary)] mb-4',
  ctaDescription: 'text-gray-700 mb-6 max-w-2xl mx-auto',
  ctaButtons: 'flex flex-col sm:flex-row gap-4 justify-center',
  primaryButton: 'bg-[var(--accent)] text-white px-8 py-3 rounded-lg font-medium hover:bg-[var(--accent-dark)] transition-colors text-center',
  secondaryButton: 'border border-[var(--accent)] text-[var(--accent)] px-8 py-3 rounded-lg font-medium hover:bg-[var(--accent-alpha-10)] transition-colors text-center'
} as const

export function SEOContent({ location }: SEOContentProps) {
  const cityName = location.city
  const isParisDistrict = cityName.includes('arrondissement')

  /**
   * Get location-aware text
   */
  const getLocationText = (prefix: string) => {
    return isParisDistrict ? `${prefix} le ${cityName}` : `${prefix} ${cityName}`
  }

  /**
   * Get preposition for location
   */
  const getLocationPreposition = () => {
    return isParisDistrict ? `dans le ${cityName}` : `à ${cityName}`
  }

  return (
    <div className={STYLES.container}>
      <div className={STYLES.wrapper}>
        <div className={STYLES.prose}>
          <h2 className={STYLES.mainTitle}>
            {isParisDistrict
              ? `Pourquoi choisir un développeur web expert dans le ${cityName} ?`
              : `Développeur web professionnel à ${cityName} : votre partenaire digital`}
          </h2>

          <div className={STYLES.grid}>
            <div>
              <h3 className={STYLES.sectionTitle}>
                🚀 Expertise technique de pointe
              </h3>
              <p className={STYLES.description}>
                Spécialisé en <strong>React, Next.js et TypeScript</strong>, je crée des sites web
                modernes et performants à {cityName}. Chaque projet bénéficie des dernières
                technologies pour garantir rapidité, sécurité et optimisation SEO.
              </p>
              <ul className={STYLES.featureList}>
                <li>✅ Développement React & Next.js expert</li>
                <li>✅ TypeScript pour un code robuste</li>
                <li>✅ Optimisation performance & SEO</li>
                <li>✅ Design responsive tous écrans</li>
              </ul>
            </div>

            <div>
              <h3 className={STYLES.sectionTitle}>
                ⭐ Service personnalisé {getLocationPreposition()}
              </h3>
              <p className={STYLES.description}>
                En tant que développeur freelance basé à Paris, j&apos;offre un accompagnement sur
                mesure pour tous vos projets web {getLocationPreposition()}. De la conception à la
                mise en ligne, chaque étape est pensée pour votre réussite.
              </p>
              <ul className={STYLES.featureList}>
                <li>✅ Devis gratuit sous {CONTENT_CONFIG.stats.guarantee}</li>
                <li>✅ Suivi projet en temps réel</li>
                <li>✅ Formation à la gestion du site</li>
                <li>✅ Maintenance et support inclus</li>
              </ul>
            </div>
          </div>

          <h3 className='text-2xl font-bold text-[var(--primary)] mb-6'>
            Solutions web complètes {getLocationText('pour')}
          </h3>

          <div className={STYLES.servicesGrid}>
            {SERVICES.map((service, index) => (
              <div key={index} className={STYLES.serviceCard}>
                <h4 className={STYLES.serviceTitle}>
                  {service.title}
                </h4>
                <p className={STYLES.serviceDescription}>
                  {service.description} {isParisDistrict ? `dans le ${cityName}` : `à ${cityName}`}
                </p>
                <ul className={STYLES.serviceFeatures}>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={STYLES.trustSection}>
            <h3 className={STYLES.trustTitle}>
              💡 Pourquoi les entreprises {getLocationText('du')} me font confiance ?
            </h3>
            <div className={STYLES.trustGrid}>
              <div>
                <p className={STYLES.trustDescription}>
                  <strong>+{CONTENT_CONFIG.stats.projectsCompleted} projets réalisés</strong> pour des clients allant des startups aux
                  grandes entreprises. Mon approche combine expertise technique et compréhension
                  business pour des résultats concrets.
                </p>
                <p className={STYLES.description}>
                  Chaque site web créé {getLocationPreposition()} respecte les standards du web moderne : 
                  accessibilité, performance, sécurité et référencement naturel optimisé.
                </p>
              </div>
              <div className={STYLES.trustIndicators}>
                {TRUST_INDICATORS.map((indicator, index) => (
                  <div key={index} className={STYLES.trustIndicator}>
                    <span className={STYLES.trustIcon}>{indicator.icon}</span>
                    <span className={STYLES.trustText}>{indicator.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={STYLES.ctaSection}>
            <h3 className={STYLES.ctaTitle}>
              Prêt à lancer votre projet web {getLocationPreposition()} ?
            </h3>
            <p className={STYLES.ctaDescription}>
              Discutons de votre projet lors d&apos;un premier échange gratuit. Je vous propose une
              solution sur mesure adaptée à vos objectifs et votre budget.
            </p>
            <div className={STYLES.ctaButtons}>
              <Link
                href='/contact'
                className={STYLES.primaryButton}>
                Demander un devis gratuit
              </Link>
              <a
                href={`tel:${CONTENT_CONFIG.contact.phone}`}
                className={STYLES.secondaryButton}>
                Appeler maintenant
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import CTAButton from '@/components/ui/CTAButton'
import PricingCard from '@/components/ui/PricingCard'
import Section, { SectionHeader } from '@/components/ui/Section'
import { cardStyles } from '@/utils/styles'

// Simple SVG icons
const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={3}>
    <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
  </svg>
)

interface Dictionary {
  pricing?: {
    title?: string
    subtitle?: string
    description?: string
    guarantee_badge?: string
    website_creation_title?: string
    guide_section?: {
      title?: string
      subtitle?: string
      intro?: {
        title?: string
        content?: string
      }
      website_types?: {
        title?: string
        types?: Array<{
          name?: string
          description?: string
          best_for?: string
          plan_recommendation?: string
          maintenance?: string
          why_important?: string
        }>
      }
      support_importance?: {
        title?: string
        subtitle?: string
        benefits?: Array<{
          icon?: string
          title?: string
          content?: string
        }>
      }
      single_payment_option?: {
        title?: string
        content?: string
        risks?: string[]
      }
      business_focus?: {
        title?: string
        content?: string
        what_i_handle?: string[]
      }
      seo_benefits?: {
        title?: string
        subtitle?: string
        benefits?: Array<{
          title?: string
          content?: string
        }>
      }
      future_services?: {
        title?: string
        content?: string
        services?: string[]
      }
      call_to_action?: {
        title?: string
        content?: string
        contact_text?: string
      }
    }
    maintenance?: {
      title?: string
      subtitle?: string
      plans?: {
        basic?: {
          name?: string
          price?: string
          description?: string
          features?: string[]
          cta?: string
        }
        advanced?: {
          name?: string
          price?: string
          description?: string
          features?: string[]
          cta?: string
        }
        premium?: {
          name?: string
          price?: string
          description?: string
          features?: string[]
          cta?: string
        }
      }
    }
    plans?: {
      essentiel?: {
        name?: string
        price?: string
        description?: string
        features?: string[]
        cta?: string
        popular?: boolean
      }
      pro?: {
        name?: string
        price?: string
        description?: string
        features?: string[]
        cta?: string
        popular?: boolean
      }
      entreprise?: {
        name?: string
        price?: string
        description?: string
        features?: string[]
        cta?: string
        popular?: boolean
      }
    }
  }
}

interface PricingProps {
  locale: string
  className?: string
  showGuide?: boolean
}

export default function Pricing({ locale, className, showGuide = false }: PricingProps) {
  const [dict, setDict] = useState<Dictionary | null>(null)

  useEffect(() => {
    const loadDictionary = async () => {
      try {
        const dictionary = await import(`../../locales/${locale}/common.json`)
        setDict(dictionary.default)
      } catch {
        // Fallback to French if locale not found
        const dictionary = await import('../../locales/fr/common.json')
        setDict(dictionary.default)
      }
    }
    loadDictionary()
  }, [locale])

  if (!dict) return null

  // Données des plans tarifaires depuis la localisation
  const pricingPlans = [
    {
      name: dict?.pricing?.plans?.essentiel?.name || 'Essentiel',
      price: dict?.pricing?.plans?.essentiel?.price || '800 €',
      period: '',
      description:
        dict?.pricing?.plans?.essentiel?.description ||
        'Parfait pour lancer votre activité ou moderniser votre image en ligne',
      features: (
        dict?.pricing?.plans?.essentiel?.features || [
          'Page unique claire et professionnelle',
          'Design moderne qui rassure',
          'Texte structuré et impactant',
          'Optimisation SEO de base',
          'Formulaire de contact intégré',
          'Compatible mobile/tablette/ordinateur',
          'Livraison en 7 jours ouvrés',
          '🧩 Objectif : avoir une présence pro, rapidement, sans complexité',
        ]
      ).map((text: string) => ({ text, included: true })),
      ctaText: dict?.pricing?.plans?.essentiel?.cta || 'Commencer',
      isPopular: false,
      isHighlighted: false,
    },
    {
      name: dict?.pricing?.plans?.pro?.name || 'Pro',
      price: dict?.pricing?.plans?.pro?.price || '1500 €',
      period: '',
      description:
        dict?.pricing?.plans?.pro?.description ||
        'Solution complète pour les entreprises en croissance avec besoins avancés',
      features: (
        dict?.pricing?.plans?.pro?.features || [
          'Site complet 4 à 6 pages (Accueil, Services, À propos, Contact, etc.)',
          'Rédaction de contenus sur-mesure',
          'Optimisation SEO avancée (Google Business, balises, structure)',
          'Statistiques simples (Google Analytics)',
          'Design premium avec animations modernes',
          'Formation courte pour gérer votre site',
          'Livraison en 7-14 jours ouvrés',
          '🔥 Recommandé pour créer une vraie autorité en ligne et générer des leads',
        ]
      ).map((text: string) => ({ text, included: true })),
      ctaText: dict?.pricing?.plans?.pro?.cta || 'Choisir Pro',
      isPopular: true,
      isHighlighted: true,
    },
    {
      name: dict?.pricing?.plans?.entreprise?.name || 'Entreprise',
      price: dict?.pricing?.plans?.entreprise?.price || 'Sur devis',
      period: '',
      description:
        dict?.pricing?.plans?.entreprise?.description ||
        'Solution haut de gamme adaptée à votre stratégie business',
      features: (
        dict?.pricing?.plans?.entreprise?.features || [
          'Analyse personnalisée de vos objectifs et de votre marché',
          'Développement spécifique (ex : réservation, espace client, boutique en ligne)',
          'Design unique et totalement sur-mesure',
          'Stratégie SEO complète (contenu, technique, sémantique)',
          'Accompagnement digital sur 1 à 3 mois',
          'Fonctionnalités avancées (automatisation, blog, podcast, etc.)',
          'Support continu et conseils personnalisés',
          '🎯 Objectif : transformer votre site en un outil de croissance et de conversion',
        ]
      ).map((text: string) => ({ text, included: true })),
      ctaText: dict?.pricing?.plans?.entreprise?.cta || 'Nous contacter',
      isPopular: false,
      isHighlighted: false,
    },
  ]

  const handlePlanSelect = (planName: string) => {
    // Redirection vers la page de contact avec le plan présélectionné
    const contactUrl = `/${locale === 'fr' ? '' : locale + '/'}contact?plan=${planName.toLowerCase()}`
    window.location.href = contactUrl
  }

  return (
    <Section
      id='pricing'
      variant='pricing'
      background='transparent'
      padding='lg'
      contentWidth='wide'
      className={className || ''}
      aria-labelledby='pricing-title'>
      <div className='relative z-10'>
        {/* H1 Title for /tarifs page SEO */}
        {showGuide && (
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-4xl md:text-5xl font-bold text-primary text-center mb-4'>
            {dict?.pricing?.title || 'Nos Offres'} - {dict?.pricing?.subtitle || 'Transparentes & Adaptées'}
          </motion.h1>
        )}

        <SectionHeader
          title={showGuide ? '' : (dict?.pricing?.title || 'Nos Offres')}
          subtitle={showGuide ? '' : (dict?.pricing?.subtitle || 'Transparentes & Adaptées')}
          description={
            dict?.pricing?.description ||
            'Choisissez la solution qui correspond parfaitement à vos besoins et à votre budget. Tous nos projets incluent un design moderne, un développement professionnel et un support complet.'
          }
          titleId='pricing-title'
          className={`${showGuide ? 'mb-8' : 'text-left mb-16'}`}
        />

        {/* Badges de confiance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className='flex flex-wrap justify-center gap-4 mb-8'>
          <div className='px-6 py-3 rounded-full flex items-center gap-2 bg-blue-100/60 text-green-500 p-4'>
            <CheckIcon className='w-4 h-4 bg-green-200 rounded-full' />
            <span className='text-sm md:text-base font-medium'>
              {dict?.pricing?.guarantee_badge || 'Résultats garantis • Livraison garantie'}
            </span>
          </div>
        </motion.div>

        {/* Titre pour les tarifs de création de sites web */}
        {dict?.pricing?.website_creation_title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className='text-center mb-12'>
            <h3 className='text-2xl md:text-3xl font-bold text-primary mb-4'>
              {dict.pricing.website_creation_title}
            </h3>
          </motion.div>
        )}

        {/* Grille des cartes de tarification */}
        <div className='grid lg:grid-cols-3 gap-8 lg:gap-6 max-w-8xl mx-auto'>
          {pricingPlans.map((plan, index) => (
            <div key={plan.name}>
              <PricingCard
                name={plan.name}
                price={plan.price}
                period={plan.period}
                description={plan.description}
                features={plan.features}
                ctaText={plan.ctaText}
                isPopular={plan.isPopular}
                isHighlighted={plan.isHighlighted}
                onSelect={() => handlePlanSelect(plan.name)}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Comprehensive Pricing Guide Section */}
        {showGuide && dict?.pricing?.guide_section && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className='mt-24 max-w-6xl mx-auto'>
            {/* Guide Header */}
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold text-primary mb-4'>
                {dict.pricing.guide_section.title}
              </h2>
              <p className='text-xl text-gray-600 max-w-4xl mx-auto'>
                {dict.pricing.guide_section.subtitle}
              </p>
            </div>

            {/* Introduction */}
            {dict.pricing.guide_section.intro && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='bg-blue-50 rounded-2xl p-8 mb-16'>
                <h3 className='text-2xl font-bold text-primary mb-4'>
                  {dict.pricing.guide_section.intro.title}
                </h3>
                <p className='text-lg text-gray-700 leading-relaxed'>
                  {dict.pricing.guide_section.intro.content}
                </p>
              </motion.div>
            )}

            {/* Website Types */}
            {dict.pricing.guide_section.website_types && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className='mb-16'>
                <h3 className='text-2xl md:text-3xl font-bold text-primary mb-8 text-center'>
                  {dict.pricing.guide_section.website_types.title}
                </h3>
                <div className='grid md:grid-cols-1 gap-8'>
                  {dict.pricing.guide_section.website_types.types?.map((type, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`${cardStyles.card} p-6 border-l-4 ${
                        index === 0
                          ? 'border-green-500'
                          : index === 1
                            ? 'border-blue-500'
                            : 'border-purple-500'
                      }`}>
                      <h4 className='text-xl font-bold text-primary mb-3'>{type.name}</h4>
                      <p className='text-gray-600 mb-4'>{type.description}</p>
                      <div className='grid md:grid-cols-2 gap-4 text-sm'>
                        <div>
                          <p className='font-semibold text-gray-800 mb-2'>🎯 Idéal pour:</p>
                          <p className='text-gray-600'>{type.best_for}</p>
                        </div>
                        <div>
                          <p className='font-semibold text-gray-800 mb-2'>💡 Plan recommandé:</p>
                          <p className='text-green-600 font-semibold'>{type.plan_recommendation}</p>
                        </div>
                        <div className='md:col-span-2'>
                          <p className='font-semibold text-gray-800 mb-2'>🔧 Maintenance:</p>
                          <p className='text-gray-600'>{type.maintenance}</p>
                        </div>
                        <div className='md:col-span-2 bg-yellow-50 p-3 rounded-lg'>
                          <p className='font-semibold text-gray-800 mb-1'>
                            ⚠️ Pourquoi c&apos;est important:
                          </p>
                          <p className='text-gray-700 text-sm'>{type.why_important}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Support Importance */}
            {dict.pricing.guide_section.support_importance && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className='mb-16'>
                <div className='text-center mb-12'>
                  <h3 className='text-2xl md:text-3xl font-bold text-primary mb-4'>
                    {dict.pricing.guide_section.support_importance.title}
                  </h3>
                  <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                    {dict.pricing.guide_section.support_importance.subtitle}
                  </p>
                </div>
                <div className='grid md:grid-cols-2 gap-6'>
                  {dict.pricing.guide_section.support_importance.benefits?.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`${cardStyles.card} p-6 text-center hover:shadow-lg transition-shadow`}>
                      <div className='text-4xl mb-4'>{benefit.icon}</div>
                      <h4 className='text-xl font-bold text-primary mb-3'>{benefit.title}</h4>
                      <p className='text-gray-600 leading-relaxed'>{benefit.content}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Single Payment vs Maintenance */}
            <div className='grid md:grid-cols-2 gap-8 mb-16'>
              {/* Single Payment Option */}
              {dict.pricing.guide_section.single_payment_option && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className={`${cardStyles.card} p-6 border-2 border-orange-200`}>
                  <h4 className='text-xl font-bold text-primary mb-4'>
                    {dict.pricing.guide_section.single_payment_option.title}
                  </h4>
                  <p className='text-gray-700 mb-4 leading-relaxed'>
                    {dict.pricing.guide_section.single_payment_option.content}
                  </p>
                  <div className='bg-red-50 p-4 rounded-lg'>
                    <h5 className='font-semibold text-red-800 mb-2'>Risques sans maintenance:</h5>
                    <ul className='space-y-1'>
                      {dict.pricing.guide_section.single_payment_option.risks?.map(
                        (risk, index) => (
                          <li key={index} className='text-red-700 text-sm flex items-start gap-2'>
                            <span className='text-red-500 mt-1'>•</span>
                            {risk}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Business Focus */}
              {dict.pricing.guide_section.business_focus && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`${cardStyles.card} p-6 border-2 border-green-200`}>
                  <h4 className='text-xl font-bold text-primary mb-4'>
                    {dict.pricing.guide_section.business_focus.title}
                  </h4>
                  <p className='text-gray-700 mb-4 leading-relaxed'>
                    {dict.pricing.guide_section.business_focus.content}
                  </p>
                  <div className='bg-green-50 p-4 rounded-lg'>
                    <h5 className='font-semibold text-green-800 mb-2'>Ce dont je m&apos;occupe:</h5>
                    <ul className='space-y-1'>
                      {dict.pricing.guide_section.business_focus.what_i_handle?.map(
                        (item, index) => (
                          <li key={index} className='text-green-700 text-sm flex items-start gap-2'>
                            <span className='text-green-500 mt-1'>✓</span>
                            {item}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </motion.div>
              )}
            </div>

            {/* SEO Benefits */}
            {dict.pricing.guide_section.seo_benefits && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className='mb-16'>
                <div className='text-center mb-12'>
                  <h3 className='text-2xl md:text-3xl font-bold text-primary mb-4'>
                    {dict.pricing.guide_section.seo_benefits.title}
                  </h3>
                  <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                    {dict.pricing.guide_section.seo_benefits.subtitle}
                  </p>
                </div>
                <div className='grid md:grid-cols-2 gap-6'>
                  {dict.pricing.guide_section.seo_benefits.benefits?.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`${cardStyles.card} p-6 border-l-4 border-blue-500`}>
                      <h4 className='text-lg font-bold text-primary mb-3'>{benefit.title}</h4>
                      <p className='text-gray-600 leading-relaxed'>{benefit.content}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Future Services */}
            {dict.pricing.guide_section.future_services && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className='mb-16'>
                <h3 className='text-2xl md:text-3xl font-bold text-primary mb-4 text-center'>
                  {dict.pricing.guide_section.future_services.title}
                </h3>
                <p className='text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto'>
                  {dict.pricing.guide_section.future_services.content}
                </p>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                  {dict.pricing.guide_section.future_services.services?.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className='bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-200'>
                      <div className='flex items-start gap-3'>
                        <span className='text-blue-500 mt-1'>🚀</span>
                        <span className='text-gray-700 font-medium'>{service}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Call to Action */}
            {dict.pricing.guide_section.call_to_action && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white'>
                <h3 className='text-2xl md:text-3xl font-bold mb-4'>
                  {dict.pricing.guide_section.call_to_action.title}
                </h3>
                <p className='text-lg mb-6 opacity-90 max-w-3xl mx-auto'>
                  {dict.pricing.guide_section.call_to_action.content}
                </p>
                <p className='text-base mb-8 opacity-90'>
                  {dict.pricing.guide_section.call_to_action.contact_text}
                </p>
                <CTAButton
                  variant='secondary'
                  size='lg'
                  className='bg-white text-blue-600 hover:bg-gray-100'
                  onClick={() => {
                    const contactUrl = `/${locale === 'fr' ? '' : locale + '/'}contact`
                    window.location.href = contactUrl
                  }}>
                  Contactez-moi maintenant
                </CTAButton>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Section des plans de maintenance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className='mt-20'>
          <div className='text-center mb-12'>
            <h3 className='text-2xl md:text-3xl font-bold text-primary mb-4'>
              {dict?.pricing?.maintenance?.title || 'Plans de Maintenance'}
            </h3>
            <p className='text-lg max-w-2xl mx-auto'>
              {dict?.pricing?.maintenance?.subtitle ||
                'Choisissez le niveau de support adapté à vos besoins'}
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
            {/* Plan Basic */}
            <div className='relative'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className={`${cardStyles.card} border border-gray-200 relative flex flex-col h-full`}>
                <div className='flex-1'>
                  <div className='p-6'>
                    <h4 className='text-xl font-bold text-primary mb-2'>
                      {dict?.pricing?.maintenance?.plans?.basic?.name || 'Basique'}
                    </h4>
                    <div className='text-3xl font-bold mb-2'>
                      {dict?.pricing?.maintenance?.plans?.basic?.price || '100 €/mois'}
                    </div>
                    <p className='mb-6'>
                      {dict?.pricing?.maintenance?.plans?.basic?.description ||
                        "L'essentiel pour rester en ligne"}
                    </p>
                    <ul className='space-y-3 text-left'>
                      {(
                        dict?.pricing?.maintenance?.plans?.basic?.features || [
                          'Hébergement sécurisé',
                          'Nom de domaine',
                          "Mises à jour de contenu mensuelles (jusqu'à 3 changements)",
                          'Vérification SEO de base',
                          'Support technique par email',
                        ]
                      ).map((feature: string, index: number) => (
                        <li key={index} className='flex items-start gap-3'>
                          <div className='flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-green-200 text-green-600 mt-0.5'>
                            <CheckIcon className='w-3 h-3' />
                          </div>
                          <span className='text-sm'>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className='p-6 pt-0 mt-auto'>
                  <CTAButton
                    variant='secondary'
                    size='md'
                    className='w-full'
                    onClick={() => handlePlanSelect('basic')}>
                    {dict?.pricing?.maintenance?.plans?.basic?.cta || 'Choisir Basique'}
                  </CTAButton>
                </div>
              </motion.div>
            </div>

            {/* Plan Advanced */}
            <div className='relative'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className={`${cardStyles.card} border-2 border-[#667eea] relative flex flex-col h-full`}>
                <div className='absolute -top-3 left-1/2 transform -translate-x-1/2'>
                  <span className='bg-[#667eea] text-white px-4 py-2 rounded-full text-sm font-semibold'>
                    Populaire
                  </span>
                </div>
                <div className='flex-1'>
                  <div className='p-6'>
                    <h4 className='text-xl font-bold text-primary mb-2'>
                      {dict?.pricing?.maintenance?.plans?.advanced?.name || 'Avancé'}
                    </h4>
                    <div className='text-3xl font-bold mb-2'>
                      {dict?.pricing?.maintenance?.plans?.advanced?.price || '200 €/mois'}
                    </div>
                    <p className='mb-6'>
                      {dict?.pricing?.maintenance?.plans?.advanced?.description ||
                        'Pour les entreprises qui veulent croître'}
                    </p>
                    <ul className='space-y-3 text-left'>
                      {(
                        dict?.pricing?.maintenance?.plans?.advanced?.features || [
                          'Tout ce qui est inclus dans Basique',
                          "SEO optimisation jusqu'à 2 nouvelles pages chaque mois",
                          'Surveillance des performances et de la disponibilité du site',
                          'Rapports de trafic mensuels',
                          "Configuration d'analyses des visiteurs",
                          'Configuration de Google Ads',
                        ]
                      ).map((feature: string, index: number) => (
                        <li key={index} className='flex items-start gap-3'>
                          <div className='flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-green-200 text-green-600 mt-0.5'>
                            <CheckIcon className='w-3 h-3' />
                          </div>
                          <span className='text-sm'>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className='p-6 pt-0 mt-auto'>
                  <CTAButton
                    variant='primary'
                    size='md'
                    className='w-full'
                    onClick={() => handlePlanSelect('advanced')}>
                    {dict?.pricing?.maintenance?.plans?.advanced?.cta || 'Choisir Avancé'}
                  </CTAButton>
                </div>
              </motion.div>
            </div>

            {/* Plan Premium */}
            <div className='relative'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className={`${cardStyles.card} border border-yellow-400 relative flex flex-col h-full`}>
                <div className='flex-1'>
                  <div className='p-6'>
                    <h4 className='text-xl font-bold text-primary mb-2'>
                      {dict?.pricing?.maintenance?.plans?.premium?.name || 'Premium'}
                    </h4>
                    <div className='text-3xl font-bold mb-2'>
                      {dict?.pricing?.maintenance?.plans?.premium?.price || '400 €/mois'}
                    </div>
                    <p className='mb-6'>
                      {dict?.pricing?.maintenance?.plans?.premium?.description ||
                        'Solution complète pour entreprises ambitieuses'}
                    </p>
                    <ul className='space-y-3 text-left'>
                      {(
                        dict?.pricing?.maintenance?.plans?.premium?.features || [
                          'Tout ce qui est inclus dans Avancé',
                          'Mises à jour de contenu régulières à la demande',
                          'Intégration de systèmes de paiement (PayPal, Stripe)',
                          'Consultation pour les améliorations du site web',
                          'Support premium et rapide via WhatsApp/Telegram',
                          'Google Analytics, Google Ads, analyses et rapports mensuels',
                        ]
                      ).map((feature: string, index: number) => (
                        <li key={index} className='flex items-start gap-3'>
                          <div className='flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-green-200 text-green-600 mt-0.5'>
                            <CheckIcon className='w-3 h-3' />
                          </div>
                          <span className='text-sm'>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className='p-6 pt-0 mt-auto'>
                  <CTAButton
                    variant='primary'
                    size='md'
                    className='w-full'
                    onClick={() => handlePlanSelect('premium')}>
                    {dict?.pricing?.maintenance?.plans?.premium?.cta || 'Choisir Premium'}
                  </CTAButton>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

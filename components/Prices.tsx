'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { 
  Check, 
  Star, 
  Crown, 
  Zap, 
  ArrowRight, 
  Sparkles,
  TrendingUp,
  Shield,
  Clock,
  Users
} from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'
import { useTariff } from '@/context/TariffContext'

export default function Prices() {
  const { t } = useLanguage()
  const { setSelectedTariff } = useTariff()
  const [hoveredTier, setHoveredTier] = useState<number | null>(null)
  // Removed yearly option - only monthly pricing
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }
  const handleTariffSelect = (tariffName: string) => {
    setSelectedTariff(tariffName)
    // Плавная прокрутка к секции контактов
    setTimeout(() => {
      const contactElement = document.getElementById('contact')
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }, 100)
  };

  const pricingTiers = [
    {
      name: t('prices.tier1.name'),
      price: t('prices.tier1.price'),
      description: t('prices.tier1.description'),
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      features: [
        t('prices.tier1.feature1'),
        t('prices.tier1.feature2'),
        t('prices.tier1.feature3'),
        t('prices.tier1.feature4'),
        t('prices.tier1.feature5'),
        t('prices.tier1.feature6'),
        t('prices.tier1.feature7'),
      ],
      cta: t('prices.tier1.cta'),
      badge: null,
    },
    {
      name: t('prices.tier2.name'),
      price: t('prices.tier2.price'),
      description: t('prices.tier2.description'),
      icon: Crown,
      color: 'from-purple-500 to-pink-500',
      features: [
        t('prices.tier2.feature1'),
        t('prices.tier2.feature2'),
        t('prices.tier2.feature3'),
        t('prices.tier2.feature4'),
        t('prices.tier2.feature5'),
        t('prices.tier2.feature6'),
        t('prices.tier2.feature7'),
        t('prices.tier2.feature8'),
        t('prices.tier2.feature9'),
      ],
      cta: t('prices.tier2.cta'),
      highlighted: true,
      badge: 'Most Popular',
    },
    {
      name: t('prices.tier3.name'),
      price: t('prices.tier3.price'),
      description: t('prices.tier3.description'),
      icon: Star,
      color: 'from-orange-500 to-red-500',
      features: [
        t('prices.tier3.feature1'),
        t('prices.tier3.feature2'),
        t('prices.tier3.feature3'),
        t('prices.tier3.feature4'),
        t('prices.tier3.feature5'),
        t('prices.tier3.feature6'),
        t('prices.tier3.feature7'),
        t('prices.tier3.feature8'),
        t('prices.tier3.feature9'),
        t('prices.tier3.feature10'),
      ],
      cta: t('prices.tier3.cta'),
      badge: 'Enterprise',
    },
  ]
  return (
    <section ref={sectionRef} id='prices' className='py-20 bg-gradient-to-br from-background via-background/95 to-secondary/10 relative overflow-hidden'>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div 
            variants={cardVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {t('prices.title')}
            </span>
          </motion.div>
          
          <motion.h2 
            variants={cardVariants}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-primary/80 bg-clip-text text-transparent"
          >
            {t('prices.subtitle')}
          </motion.h2>
            <motion.p 
            variants={cardVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            {t('prices.description')}
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className='grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto'
        >
          {pricingTiers.map((tier, index) => {
            const IconComponent = tier.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                onHoverStart={() => setHoveredTier(index)}
                onHoverEnd={() => setHoveredTier(null)}
                className={`relative group cursor-pointer ${
                  tier.highlighted ? 'lg:-mt-8' : ''
                }`}
              >
                {/* Badge */}
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r ${tier.color} shadow-lg`}>
                      <Sparkles className="w-4 h-4 inline mr-2" />
                      {tier.badge}
                    </div>
                  </div>
                )}

                <div
                  className={`card-modern h-full flex flex-col relative overflow-hidden ${
                    tier.highlighted
                      ? 'border-primary/50 shadow-2xl shadow-primary/10'
                      : 'border-border'
                  } ${hoveredTier === index ? 'shadow-2xl' : ''}`}
                >
                  {/* Background gradient for highlighted */}
                  {tier.highlighted && (
                    <div className={`absolute inset-0 bg-gradient-to-br ${tier.color} opacity-5`} />
                  )}

                  <div className="p-8 relative z-10">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-2xl bg-gradient-to-r ${tier.color} shadow-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className='text-2xl font-bold text-card-foreground'>{tier.name}</h3>
                        <p className='text-sm text-muted-foreground'>{tier.description}</p>
                      </div>
                    </div>                    {/* Price */}
                    <div className="mb-8">
                      <div className="flex items-baseline gap-2">
                        <span className={`text-4xl font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                          {tier.price}
                        </span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className='mb-8 flex-grow'>
                      <ul className='space-y-4'>
                        {tier.features.map((feature, i) => (
                          <motion.li 
                            key={i} 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className='flex items-start group/item'
                          >
                            <div className={`p-1 rounded-full bg-gradient-to-r ${tier.color} mr-3 mt-0.5`}>
                              <Check className='h-3 w-3 text-white' />
                            </div>
                            <span className="text-sm leading-relaxed group-hover/item:text-foreground transition-colors">
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      onClick={() => handleTariffSelect(tier.name)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 group/btn ${
                        tier.highlighted
                          ? `bg-gradient-to-r ${tier.color} text-white shadow-lg hover:shadow-xl`
                          : 'btn-secondary'
                      }`}
                    >
                      {tier.cta}
                      <ArrowRight className="w-4 h-4 inline ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Custom Quote Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.8 }}
          className='mt-20 text-center'
        >
          <div className="card-modern max-w-2xl mx-auto p-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500">
                <Users className="w-6 h-6 text-white" />
              </div>              <div className="text-left">
                <h3 className="text-xl font-bold">{t('prices.custom')}</h3>
                <p className="text-sm text-muted-foreground">{t('prices.customDescription')}</p>
              </div>
            </div>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm">{t('prices.features.enterpriseSecurity')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm">{t('prices.features.prioritySupport')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-sm">{t('prices.features.customFeatures')}</span>
              </div>
            </div>

            <motion.button
              onClick={() => handleTariffSelect('')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='btn-primary group'
            >
              {t('prices.quote')}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

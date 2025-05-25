'use client'

import { Check } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'
import { useTariff } from '@/context/TariffContext'

export default function Prices() {
  const { t } = useLanguage()
  const { setSelectedTariff } = useTariff()

  const handleTariffSelect = (tariffName: string) => {
    setSelectedTariff(tariffName)
    // Плавная прокрутка к секции контактов
    setTimeout(() => {
      const contactElement = document.getElementById('contact')
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }, 100)
  }

  const pricingTiers = [
    {
      name: t('prices.tier1.name'),
      price: t('prices.tier1.price'),
      description: t('prices.tier1.description'),
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
    },
    {
      name: t('prices.tier2.name'),
      price: t('prices.tier2.price'),
      description: t('prices.tier2.description'),
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
    },
    {
      name: t('prices.tier3.name'),
      price: t('prices.tier3.price'),
      description: t('prices.tier3.description'),
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
    },
  ]

  return (
    <section id='prices' className='container mx-auto px-4 py-20'>
      <AnimatedSection>
        <h2 className='text-lg text-primary mb-2'>{t('prices.title')}</h2>
        <h3 className='text-3xl font-bold mb-4'>{t('prices.subtitle')}</h3>
        <p className='text-muted-foreground max-w-2xl mb-12'>{t('prices.description')}</p>
      </AnimatedSection>
      <div className='grid md:grid-cols-3 gap-8'>
        {pricingTiers.map((tier, index) => (
          <AnimatedSection key={index}>
            <div
              className={`h-full flex flex-col rounded-lg border p-8 ${
                tier.highlighted
                  ? 'border-indigo-500 shadow-lg dark:shadow-indigo-900/20'
                  : 'border-gray-200 dark:border-gray-800'
              }`}>
              <div className='mb-5'>
                <h3 className='text-2xl font-bold mb-2'>{tier.name}</h3>
                <p className='text-xl font-semibold mb-4 gradient-text'>{tier.price}</p>
                <p className='text-muted-foreground'>{tier.description}</p>
              </div>
              <div className='mt-2 mb-8 flex-grow'>
                <ul className='space-y-3'>
                  {tier.features.map((feature, i) => (
                    <li key={i} className='flex items-start'>
                      <Check className='h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5' />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>{' '}
              <button
                onClick={() => handleTariffSelect(tier.name)}
                className={`w-full py-3 rounded-md font-medium transition-colors ${
                  tier.highlighted
                    ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                    : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}>
                {tier.cta}
              </button>
            </div>
          </AnimatedSection>
        ))}
      </div>{' '}
      <AnimatedSection className='mt-16 text-center'>
        <p className='text-lg mb-6'>{t('prices.custom')}</p>
        <button
          onClick={() => handleTariffSelect('')}
          className='px-6 py-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors'>
          {t('prices.quote')}
        </button>
      </AnimatedSection>
    </section>
  )
}

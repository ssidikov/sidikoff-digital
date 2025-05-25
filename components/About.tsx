'use client'

import Image from 'next/image'
import AnimatedSection from './AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id='about' className='container mx-auto px-4 py-20'>
      <AnimatedSection>
        <div className='max-w-4xl mx-auto'>          <div className='text-center mb-16'>
            <h2 className='text-lg text-primary mb-2'>{t('about.title')}</h2>
            <h3 className='text-3xl md:text-4xl font-bold mb-6'>
              {t('about.sectionTitle')}
            </h3>
            <p className='text-xl text-muted-foreground'>
              {t('about.sectionSubtitle')}
            </p>
          </div>
          
          <div className='grid md:grid-cols-2 gap-12 mb-16'>            <AnimatedSection>
              <div>
                <h4 className='text-2xl font-semibold mb-4'>{t('about.mission.title')}</h4>
                <div className='space-y-4 text-muted-foreground'>
                  <p>
                    {t('about.mission.p1')}
                  </p>
                  <p>
                    {t('about.mission.p2')}
                  </p>
                </div>
              </div>
            </AnimatedSection>
              <AnimatedSection>
              <div>
                <h4 className='text-2xl font-semibold mb-4'>{t('about.expertise.title')}</h4>
                <ul className='space-y-3 text-muted-foreground'>
                  <li className='flex items-start'>
                    <span className='text-primary mr-3 mt-1'>✓</span>
                    {t('about.expertise.item1')}
                  </li>
                  <li className='flex items-start'>
                    <span className='text-primary mr-3 mt-1'>✓</span>
                    {t('about.expertise.item2')}
                  </li>
                  <li className='flex items-start'>
                    <span className='text-primary mr-3 mt-1'>✓</span>
                    {t('about.expertise.item3')}
                  </li>
                  <li className='flex items-start'>
                    <span className='text-primary mr-3 mt-1'>✓</span>
                    {t('about.expertise.item4')}
                  </li>
                  <li className='flex items-start'>
                    <span className='text-primary mr-3 mt-1'>✓</span>
                    {t('about.expertise.item5')}
                  </li>
                  <li className='flex items-start'>
                    <span className='text-primary mr-3 mt-1'>✓</span>
                    {t('about.expertise.item6')}
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
            <AnimatedSection>
            <div className='bg-muted/50 p-8 rounded-2xl mb-16'>
              <h4 className='text-2xl font-semibold mb-8 text-center'>{t('about.whyChoose.title')}</h4>
              <div className='grid md:grid-cols-3 gap-8'>
                <div className='text-center'>
                  <div className='text-4xl mb-4'>🎯</div>
                  <h5 className='text-lg font-semibold mb-2'>{t('about.whyChoose.advantage1.title')}</h5>
                  <p className='text-sm text-muted-foreground'>{t('about.whyChoose.advantage1.description')}</p>
                </div>
                <div className='text-center'>
                  <div className='text-4xl mb-4'>⚡</div>
                  <h5 className='text-lg font-semibold mb-2'>{t('about.whyChoose.advantage2.title')}</h5>
                  <p className='text-sm text-muted-foreground'>{t('about.whyChoose.advantage2.description')}</p>
                </div>
                <div className='text-center'>
                  <div className='text-4xl mb-4'>🤝</div>
                  <h5 className='text-lg font-semibold mb-2'>{t('about.whyChoose.advantage3.title')}</h5>
                  <p className='text-sm text-muted-foreground'>{t('about.whyChoose.advantage3.description')}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
            <AnimatedSection>
            <div className='text-center'>
              <h4 className='text-2xl font-semibold mb-4'>{t('about.location.title')}</h4>
              <p className='text-lg mb-8 text-muted-foreground'>
                {t('about.location.description')}
              </p>
              
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <a 
                  href='#contact' 
                  className='bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors'
                >
                  {t('about.location.cta1')}
                </a>
                <a 
                  href='#portfolio' 
                  className='border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/10 transition-colors'
                >
                  {t('about.location.cta2')}
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </AnimatedSection>
    </section>
  )
}

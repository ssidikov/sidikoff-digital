'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function FAQ() {
  const { t } = useLanguage()

  // FAQ data with translation keys
  const faqData = [
    {
      question: t('faq.question1'),
      answer: t('faq.answer1'),
    },
    {
      question: t('faq.question2'),
      answer: t('faq.answer2'),
    },
    {
      question: t('faq.question3'),
      answer: t('faq.answer3'),
    },
    {
      question: t('faq.question4'),
      answer: t('faq.answer4'),
    },
  ]

  return (
    <section id='faq' className='py-20 bg-muted/30'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>{t('faq.title')}</h2>
          <div className='max-w-3xl mx-auto space-y-6'>
            {faqData.map((faq, index) => (
              <details key={index} className='border rounded-lg p-6 bg-background'>
                <summary className='font-semibold cursor-pointer hover:text-primary transition-colors'>
                  {faq.question}
                </summary>
                <div className='mt-4 text-muted-foreground'>{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

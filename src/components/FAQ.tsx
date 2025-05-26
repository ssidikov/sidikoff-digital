'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: 'What technologies do you use for web development?',
    answer:
      'We specialize in modern web technologies including Next.js, React, TypeScript, Tailwind CSS, and Node.js. We focus on performance, SEO optimization, and creating responsive designs that work perfectly on all devices.',
  },
  {
    question: 'How long does it take to develop a website?',
    answer:
      'The development timeline depends on the project complexity. A simple business website typically takes 2-4 weeks, while complex web applications can take 2-6 months. We provide detailed timelines during the initial consultation.',
  },
  {
    question: 'Do you provide SEO optimization services?',
    answer:
      'Yes, we implement comprehensive SEO strategies including technical optimization, structured data, meta tags, sitemap generation, and performance optimization to help your website rank better in search engines.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer:
      "Absolutely! We can modernize your existing website with a fresh design, improved user experience, better performance, and enhanced SEO. We'll analyze your current site and propose the best approach for your needs.",
  },
  {
    question: 'Do you offer website maintenance and support?',
    answer:
      'Yes, we provide ongoing maintenance services including security updates, content updates, performance monitoring, and technical support to ensure your website runs smoothly and stays up-to-date.',
  },
  {
    question: 'What is included in your web development services?',
    answer:
      'Our services include responsive web design, frontend and backend development, SEO optimization, performance optimization, security implementation, analytics setup, and deployment. We provide end-to-end solutions for your digital presence.',
  },
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className='py-20 sm:py-32 bg-white dark:bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-2xl mx-auto text-center'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl'>
              Frequently Asked Questions
            </h2>
            <p className='mt-4 text-lg text-gray-600 dark:text-gray-300'>
              Get answers to common questions about our web development services
            </p>
          </div>
          <div className='mt-16 max-w-3xl mx-auto'>
            <dl className='space-y-6'>
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className='border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden'
                  itemScope
                  itemType='https://schema.org/Question'>
                  <dt>
                    <button
                      className='w-full text-left px-6 py-4 flex justify-between items-center bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'
                      onClick={() => toggleItem(index)}
                      aria-expanded={openItems.includes(index)}>
                      <span className='font-medium text-gray-900 dark:text-white' itemProp='name'>
                        {item.question}
                      </span>
                      <svg
                        className={`w-5 h-5 text-gray-500 transform transition-transform ${
                          openItems.includes(index) ? 'rotate-180' : ''
                        }`}
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 9l-7 7-7-7'
                        />
                      </svg>
                    </button>
                  </dt>
                  {openItems.includes(index) && (
                    <dd
                      className='px-6 py-4 bg-white dark:bg-gray-900'
                      itemScope
                      itemType='https://schema.org/Answer'>
                      <p className='text-gray-700 dark:text-gray-300' itemProp='text'>
                        {item.answer}
                      </p>
                    </dd>
                  )}
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  )
}

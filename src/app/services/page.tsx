import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { generateSEO, generateWebPageSchema, generateServiceSchema } from '@/lib/seo'

export const metadata = generateSEO({
  title: 'Web Development Services - Professional Solutions',
  description:
    'Comprehensive web development services including Next.js applications, React development, TypeScript programming, SEO optimization, and responsive design. Professional solutions for modern businesses.',
  keywords: [
    'web development services',
    'Next.js development',
    'React applications',
    'TypeScript programming',
    'SEO optimization',
    'responsive web design',
    'frontend development',
    'backend development',
    'full-stack solutions',
  ],
  canonical: '/services',
})

const services = [
  {
    title: 'Frontend Development',
    description:
      'Modern React and Next.js applications with TypeScript, responsive design, and optimal performance.',
    features: ['React & Next.js', 'TypeScript', 'Responsive Design', 'Performance Optimization'],
    icon: (
      <svg className='w-8 h-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
        />
      </svg>
    ),
  },
  {
    title: 'SEO Optimization',
    description:
      'Complete SEO strategy implementation including technical optimization, structured data, and performance tuning.',
    features: ['Technical SEO', 'Structured Data', 'Core Web Vitals', 'Site Speed Optimization'],
    icon: (
      <svg className='w-8 h-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
        />
      </svg>
    ),
  },
  {
    title: 'Responsive Design',
    description:
      'Mobile-first design approach ensuring perfect functionality across all devices and screen sizes.',
    features: ['Mobile-First', 'Cross-Browser', 'Accessibility', 'Modern UI/UX'],
    icon: (
      <svg className='w-8 h-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
        />
      </svg>
    ),
  },
  {
    title: 'Performance Optimization',
    description:
      'Advanced performance tuning, code splitting, and optimization for lightning-fast loading speeds.',
    features: ['Code Splitting', 'Image Optimization', 'Caching Strategies', 'Bundle Analysis'],
    icon: (
      <svg className='w-8 h-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M13 10V3L4 14h7v7l9-11h-7z'
        />
      </svg>
    ),
  },
  {
    title: 'E-commerce Solutions',
    description:
      'Complete e-commerce platforms with secure payment processing, inventory management, and admin panels.',
    features: ['Shopping Cart', 'Payment Integration', 'Inventory Management', 'Admin Dashboard'],
    icon: (
      <svg className='w-8 h-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6'
        />
      </svg>
    ),
  },
  {
    title: 'Maintenance & Support',
    description:
      'Ongoing maintenance, security updates, performance monitoring, and technical support services.',
    features: ['Security Updates', 'Performance Monitoring', '24/7 Support', 'Content Updates'],
    icon: (
      <svg className='w-8 h-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
        />
      </svg>
    ),
  },
]

export default function Services() {
  const webPageSchema = generateWebPageSchema(
    'Web Development Services - Professional Solutions',
    'Comprehensive web development services including Next.js applications, React development, TypeScript programming, SEO optimization, and responsive design.',
    '/services'
  )

  const serviceSchemas = services.map((service) =>
    generateServiceSchema(service.title, service.description)
  )

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      <Navigation />

      <main className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900'>
        {/* Breadcrumbs */}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-4'>
          <Breadcrumbs />
        </div>

        {/* Hero Section */}
        <section className='relative overflow-hidden'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center'>
            <div className='mx-auto max-w-4xl'>
              <h1 className='mx-auto max-w-4xl font-display text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl'>
                Professional Web Development Services
              </h1>
              <p className='mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700 dark:text-slate-300'>
                Comprehensive solutions for modern businesses. From concept to deployment, we
                deliver high-quality web applications that drive results.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className='py-20 sm:py-32'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center mb-16'>
              <h2 className='text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl'>
                Our Services
              </h2>
              <p className='mt-4 text-lg tracking-tight text-slate-700 dark:text-slate-300'>
                End-to-end web development solutions tailored to your business needs
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {services.map((service, index) => (
                <div
                  key={index}
                  className='bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow'
                  itemScope
                  itemType='https://schema.org/Service'>
                  <div className='flex items-center mb-4'>
                    <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white'>
                      {service.icon}
                    </div>
                    <h3
                      className='ml-4 text-xl font-semibold text-slate-900 dark:text-white'
                      itemProp='name'>
                      {service.title}
                    </h3>
                  </div>

                  <p className='text-slate-600 dark:text-slate-400 mb-6' itemProp='description'>
                    {service.description}
                  </p>

                  <ul className='space-y-2'>
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className='flex items-center text-sm text-slate-600 dark:text-slate-400'>
                        <svg
                          className='w-4 h-4 text-green-500 mr-2'
                          fill='currentColor'
                          viewBox='0 0 20 20'>
                          <path
                            fillRule='evenodd'
                            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className='bg-slate-50 dark:bg-slate-800/50 py-20 sm:py-32'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center mb-16'>
              <h2 className='text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl'>
                Our Development Process
              </h2>
              <p className='mt-4 text-lg tracking-tight text-slate-700 dark:text-slate-300'>
                Structured approach ensuring quality and timely delivery
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
              {[
                {
                  step: '01',
                  title: 'Discovery',
                  description: 'Understanding your requirements and business goals',
                },
                {
                  step: '02',
                  title: 'Planning',
                  description: 'Creating detailed project roadmap and technical specifications',
                },
                {
                  step: '03',
                  title: 'Development',
                  description:
                    'Building your application with modern technologies and best practices',
                },
                {
                  step: '04',
                  title: 'Deployment',
                  description: 'Launching your project with ongoing support and optimization',
                },
              ].map((phase, index) => (
                <div key={index} className='text-center'>
                  <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-xl font-bold mb-4'>
                    {phase.step}
                  </div>
                  <h3 className='text-lg font-semibold text-slate-900 dark:text-white mb-2'>
                    {phase.title}
                  </h3>
                  <p className='text-slate-600 dark:text-slate-400'>{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 sm:py-32'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl'>
                Ready to Start Your Project?
              </h2>
              <p className='mt-4 text-lg tracking-tight text-slate-700 dark:text-slate-300'>
                Let's discuss your requirements and create something amazing together.
              </p>
              <div className='mt-10 flex justify-center gap-x-6'>
                <a
                  href='#contact'
                  className='rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
                  Get Started
                </a>
                <a
                  href='/about'
                  className='text-sm font-semibold leading-6 text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400'>
                  Learn more <span aria-hidden='true'>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

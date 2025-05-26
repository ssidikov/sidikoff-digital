import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { generateSEO, generateWebPageSchema } from '@/lib/seo'

export const metadata = generateSEO({
  title: 'About Us - Professional Web Development Team',
  description:
    'Learn about SIDIKOFF Digital, a professional web development agency dedicated to creating modern, responsive websites and applications using cutting-edge technologies.',
  keywords: [
    'about us',
    'web development team',
    'professional developers',
    'company information',
    'web design agency',
    'development experience',
  ],
  canonical: '/about',
})

export default function About() {
  const webPageSchema = generateWebPageSchema(
    'About Us - Professional Web Development Team',
    'Learn about SIDIKOFF Digital, a professional web development agency dedicated to creating modern, responsive websites and applications.',
    '/about'
  )

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
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
                About SIDIKOFF Digital
              </h1>
              <p className='mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700 dark:text-slate-300'>
                We are a passionate team of web developers and designers dedicated to creating
                exceptional digital experiences that drive business success.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className='py-20 sm:py-32'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:mx-0'>
              <h2 className='text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl'>
                Our Story
              </h2>
              <p className='mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400'>
                Founded with a vision to transform how businesses connect with their customers
                online, SIDIKOFF Digital has grown into a trusted partner for companies seeking
                modern, high-performance web solutions.
              </p>
            </div>
            <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
              <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
                <div className='flex flex-col'>
                  <dt className='text-base font-semibold leading-7 text-slate-900 dark:text-white'>
                    <div className='mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600'>
                      <svg
                        className='h-6 w-6 text-white'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 003.75-15.021 13.17 13.17 0 00-3.75-3.98m-3.75 15.021a14.406 14.406 0 01-3.75 0m3.75 2.383a14.406 14.406 0 01-3.75-15.021 13.17 13.17 0 013.75-3.98m0 16.5V12m0 0a6.01 6.01 0 001.5.189m-1.5-.189a6.01 6.01 0 011.5-.189m-3.75 7.478a12.06 12.06 0 014.5 0m-3.75-2.383a14.406 14.406 0 013.75 15.021 13.17 13.17 0 01-3.75 3.98'
                        />
                      </svg>
                    </div>
                    Innovation First
                  </dt>
                  <dd className='mt-1 flex flex-auto flex-col text-base leading-7 text-slate-600 dark:text-slate-400'>
                    <p className='flex-auto'>
                      We stay at the forefront of web technology, using the latest frameworks and
                      tools to deliver cutting-edge solutions.
                    </p>
                  </dd>
                </div>
                <div className='flex flex-col'>
                  <dt className='text-base font-semibold leading-7 text-slate-900 dark:text-white'>
                    <div className='mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600'>
                      <svg
                        className='h-6 w-6 text-white'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z'
                        />
                      </svg>
                    </div>
                    Client-Focused
                  </dt>
                  <dd className='mt-1 flex flex-auto flex-col text-base leading-7 text-slate-600 dark:text-slate-400'>
                    <p className='flex-auto'>
                      Every project is tailored to meet our clients' unique needs and business
                      objectives, ensuring maximum impact and ROI.
                    </p>
                  </dd>
                </div>
                <div className='flex flex-col'>
                  <dt className='text-base font-semibold leading-7 text-slate-900 dark:text-white'>
                    <div className='mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600'>
                      <svg
                        className='h-6 w-6 text-white'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                    </div>
                    Quality Driven
                  </dt>
                  <dd className='mt-1 flex flex-auto flex-col text-base leading-7 text-slate-600 dark:text-slate-400'>
                    <p className='flex-auto'>
                      We maintain the highest standards of code quality, performance, and user
                      experience in every project we deliver.
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className='bg-slate-50 dark:bg-slate-800/50 py-20 sm:py-32'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl'>
                Our Expertise
              </h2>
              <p className='mt-4 text-lg tracking-tight text-slate-700 dark:text-slate-300'>
                We specialize in modern web technologies and best practices to deliver exceptional
                results.
              </p>
            </div>
            <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
              <div className='bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm'>
                <h3 className='text-lg font-semibold text-slate-900 dark:text-white mb-4'>
                  Frontend Development
                </h3>
                <p className='text-slate-600 dark:text-slate-400 mb-4'>
                  Expert in React, Next.js, TypeScript, and modern CSS frameworks. We create
                  responsive, accessible, and performant user interfaces.
                </p>
                <ul className='space-y-2 text-sm text-slate-600 dark:text-slate-400'>
                  <li>• React & Next.js Applications</li>
                  <li>• TypeScript Development</li>
                  <li>• Responsive Design</li>
                  <li>• Performance Optimization</li>
                </ul>
              </div>
              <div className='bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm'>
                <h3 className='text-lg font-semibold text-slate-900 dark:text-white mb-4'>
                  SEO & Performance
                </h3>
                <p className='text-slate-600 dark:text-slate-400 mb-4'>
                  Comprehensive SEO optimization and performance tuning to ensure your website ranks
                  well and loads fast.
                </p>
                <ul className='space-y-2 text-sm text-slate-600 dark:text-slate-400'>
                  <li>• Technical SEO Implementation</li>
                  <li>• Core Web Vitals Optimization</li>
                  <li>• Structured Data Markup</li>
                  <li>• Site Speed Optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

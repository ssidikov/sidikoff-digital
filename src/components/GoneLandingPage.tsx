'use client'

import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Globe,
  Zap,
  Code,
  Smartphone,
  Search,
  Award,
  Mail,
  Phone,
} from 'lucide-react'

interface GoneLandingPageProps {
  cityName?: string | undefined
  locale?: 'fr'
}

export default function GoneLandingPage({ cityName, locale = 'fr' }: GoneLandingPageProps) {
  // Translations
  const translations = {
    fr: {
      notice:
        'Page optimisée : Nous avons simplifié notre site pour vous offrir une meilleure expérience',
      mainTitle: 'Création de sites web',
      titleHighlight: 'modernes en France',
      subtitle:
        'Développeur React/Next.js spécialisé en solutions digitales sur mesure. Transformez votre présence en ligne avec des sites web performants et optimisés.',
      ctaPrimary: 'Demander un devis',
      ctaSecondary: 'Voir nos services',
      statsProjects: 'Projets réalisés',
      statsClients: 'Clients satisfaits',
      statsExperience: "D'expérience",
      servicesTitle: 'Services',
      servicesSubtitle: 'Solutions complètes pour votre présence digitale',
      whyTitle: 'Pourquoi nous choisir',
      whySubtitle: 'Une expertise technique au service de votre réussite',
      realizationsTitle: 'Réalisations',
      realizationsSubtitle: 'La satisfaction client au cœur de notre travail',
      testimonial:
        'Un travail exceptionnel ! Mon site e-commerce développé par Sidikoff Digital a dépassé toutes mes attentes. Performance, design et référencement au top. Je recommande vivement !',
      testimonialAuthor: 'Marie Dubois',
      testimonialRole: 'Boutique en ligne Mode & Accessoires',
      contactTitle: 'Contact',
      contactSubtitle: 'Prêt à transformer votre projet digital ? Contactons-nous !',
      contactCta: 'Démarrer mon projet',
      footerDescription:
        'Développeur React/Next.js spécialisé en création de sites web modernes et performants.',
      footerLocation: '🇫🇷 Basé en France • Expert en solutions digitales sur mesure',
      footerServices: 'Services',
      footerLinks: 'Liens',
      footerPortfolio: 'Portfolio',
      footerContact: 'Contact',
      footerBlog: 'Blog',
      footerLegal: 'Mentions légales',
      footerRights: 'Tous droits réservés.',
    },
  }

  const t = translations.fr

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const services = [
    {
      icon: <Globe className='w-8 h-8' />,
      title: 'Sites Web Modernes',
      description:
        'Création de sites internet avec React, Next.js et design responsive pour tous les appareils.',
    },
    {
      icon: <Smartphone className='w-8 h-8' />,
      title: 'E-commerce',
      description:
        'Boutiques en ligne performantes avec solutions de paiement sécurisées et gestion des stocks.',
    },
    {
      icon: <Search className='w-8 h-8' />,
      title: 'Optimisation SEO',
      description:
        'Référencement naturel et technique pour améliorer votre visibilité sur Google.',
    },
  ]

  const features = [
    {
      icon: <Code className='w-6 h-6' />,
      title: 'Technologies Modernes',
      description: 'React, Next.js, TypeScript',
    },
    {
      icon: <Zap className='w-6 h-6' />,
      title: 'Performance Optimisée',
      description: 'Sites ultra-rapides et optimisés',
    },
    {
      icon: <Award className='w-6 h-6' />,
      title: 'Qualité Garantie',
      description: 'Code propre et maintenable',
    },
  ]

  const stats = [
    { number: '50+', label: t.statsProjects },
    { number: '98%', label: t.statsClients },
    { number: '5 ans', label: t.statsExperience },
  ]

  return (
    <>
      <Head>
        <title>Solutions digitales & création de sites internet en France – Sidikoff</title>
        <meta
          name='description'
          content='Agence spécialisée en création de sites web, e-commerce et SEO. Nous accompagnons entreprises, indépendants et startups dans toute la France.'
        />
        <meta name='robots' content='noindex, nofollow' />
        <link rel='canonical' href='https://sidikoff.com/' />
        <meta
          property='og:title'
          content='Solutions digitales & création de sites internet en France – Sidikoff'
        />
        <meta
          property='og:description'
          content='Agence spécialisée en création de sites web, e-commerce et SEO. Nous accompagnons entreprises, indépendants et startups dans toute la France.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://sidikoff.com/' />
      </Head>

      <div className='min-h-screen bg-white'>
        {/* Notice Bar */}
        <motion.div
          className='bg-linear-to-r from-amber-50 to-orange-50 border-b border-amber-200'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <div className='container mx-auto px-4 py-3'>
            <div className='flex items-center justify-center text-center'>
              <div className='flex items-center space-x-2 text-amber-800'>
                <CheckCircle className='w-5 h-5' />
                <p className='text-sm font-medium'>
                  {t.notice}
                  {cityName && ` à ${cityName}`}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hero Section */}
        <section className='relative bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 lg:py-32'>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto text-center'>
              <motion.div variants={staggerContainer} initial='initial' animate='animate'>
                <motion.h1
                  variants={fadeInUp}
                  className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight'>
                  {t.mainTitle}{' '}
                  <span className='bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
                    {t.titleHighlight}
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className='text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto'>
                  {t.subtitle}
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                  <Link
                    href='/contact'
                    className='group bg-linear-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2'>
                    <span>{t.ctaPrimary}</span>
                    <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                  </Link>

                  <Link
                    href='/services'
                    className='border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center space-x-2'>
                    <span>{t.ctaSecondary}</span>
                    <ArrowRight className='w-5 h-5' />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Background decoration */}
          <div className='absolute inset-0 overflow-hidden pointer-events-none'>
            <div className='absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70'></div>
            <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70'></div>
          </div>
        </section>

        {/* Stats Section */}
        <section className='py-16 bg-white'>
          <div className='container mx-auto px-4'>
            <motion.div
              className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'
              variants={staggerContainer}
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}>
              {stats.map((stat, index) => (
                <motion.div key={index} variants={fadeInUp} className='text-center'>
                  <div className='text-4xl md:text-5xl font-bold text-blue-600 mb-2'>
                    {stat.number}
                  </div>
                  <div className='text-gray-600 font-medium'>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id='services' className='py-20 bg-gray-50'>
          <div className='container mx-auto px-4'>
            <motion.div
              variants={staggerContainer}
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
              className='max-w-6xl mx-auto'>
              <div className='text-center mb-16'>
                <motion.h2
                  variants={fadeInUp}
                  className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                  {t.servicesTitle}
                </motion.h2>
                <motion.p variants={fadeInUp} className='text-xl text-gray-600 max-w-2xl mx-auto'>
                  {t.servicesSubtitle}
                </motion.p>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'>
                    <div className='w-16 h-16 bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6'>
                      {service.icon}
                    </div>
                    <h3 className='text-xl font-bold text-gray-900 mb-4'>{service.title}</h3>
                    <p className='text-gray-600 leading-relaxed'>{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4'>
            <motion.div
              variants={staggerContainer}
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
              className='max-w-6xl mx-auto'>
              <div className='text-center mb-16'>
                <motion.h2
                  variants={fadeInUp}
                  className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                  {t.whyTitle}
                </motion.h2>
                <motion.p variants={fadeInUp} className='text-xl text-gray-600 max-w-2xl mx-auto'>
                  {t.whySubtitle}
                </motion.p>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {features.map((feature, index) => (
                  <motion.div key={index} variants={fadeInUp} className='text-center p-6'>
                    <div className='w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4 mx-auto'>
                      {feature.icon}
                    </div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-2'>{feature.title}</h3>
                    <p className='text-gray-600'>{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className='py-20 bg-linear-to-br from-blue-50 to-indigo-100'>
          <div className='container mx-auto px-4'>
            <motion.div
              variants={staggerContainer}
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
              className='max-w-4xl mx-auto text-center'>
              <motion.h2
                variants={fadeInUp}
                className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                {t.realizationsTitle}
              </motion.h2>
              <motion.p variants={fadeInUp} className='text-xl text-gray-600 mb-12'>
                {t.realizationsSubtitle}
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className='bg-white p-8 md:p-12 rounded-2xl shadow-xl'>
                <div className='flex justify-center mb-6'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className='w-6 h-6 text-yellow-400 fill-current' />
                  ))}
                </div>
                <blockquote className='text-lg md:text-xl text-gray-700 italic mb-6 leading-relaxed'>
                  &ldquo;{t.testimonial}&rdquo;
                </blockquote>
                <div className='flex items-center justify-center space-x-4'>
                  <div className='w-12 h-12 bg-linear-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center'>
                    <Users className='w-6 h-6 text-white' />
                  </div>
                  <div className='text-left'>
                    <div className='font-semibold text-gray-900'>{t.testimonialAuthor}</div>
                    <div className='text-gray-600'>{t.testimonialRole}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id='contact' className='py-20 bg-gray-900 text-white'>
          <div className='container mx-auto px-4'>
            <motion.div
              variants={staggerContainer}
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
              className='max-w-4xl mx-auto text-center'>
              <motion.h2 variants={fadeInUp} className='text-3xl md:text-4xl font-bold mb-4'>
                {t.contactTitle}
              </motion.h2>
              <motion.p variants={fadeInUp} className='text-xl text-gray-300 mb-12'>
                {t.contactSubtitle}
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
                <div className='flex items-center justify-center space-x-4'>
                  <Mail className='w-6 h-6 text-blue-400' />
                  <span className='text-lg'>s.sidikoff@gmail.com</span>
                </div>
                <div className='flex items-center justify-center space-x-4'>
                  <Phone className='w-6 h-6 text-blue-400' />
                  <span className='text-lg'>+33 6 26 93 27 34</span>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Link
                  href='/contact'
                  className='inline-flex items-center space-x-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
                  <span>{t.contactCta}</span>
                  <ArrowRight className='w-5 h-5' />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className='bg-gray-800 text-white py-12'>
          <div className='container mx-auto px-4'>
            <div className='max-w-6xl mx-auto'>
              <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                <div className='md:col-span-2'>
                  <h3 className='text-xl font-bold mb-4'>SIDIKOFF DIGITAL</h3>
                  <p className='text-gray-400 mb-4'>{t.footerDescription}</p>
                  <p className='text-gray-400'>{t.footerLocation}</p>
                </div>

                <div>
                  <h4 className='font-semibold mb-4'>{t.footerServices}</h4>
                  <ul className='space-y-2 text-gray-400'>
                    <li>
                      <Link href='/services' className='hover:text-blue-400 transition-colors'>
                        {'Création de sites web'}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/services/creation-site-ecommerce'
                        className='hover:text-blue-400 transition-colors'>
                        E-commerce
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/services/optimisation-seo'
                        className='hover:text-blue-400 transition-colors'>
                        {'SEO & Référencement'}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/services/maintenance-support'
                        className='hover:text-blue-400 transition-colors'>
                        {'Maintenance'}
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className='font-semibold mb-4'>{t.footerLinks}</h4>
                  <ul className='space-y-2 text-gray-400'>
                    <li>
                      <Link href='/#portfolio' className='hover:text-blue-400 transition-colors'>
                        {t.footerPortfolio}
                      </Link>
                    </li>
                    <li>
                      <Link href='/contact' className='hover:text-blue-400 transition-colors'>
                        {t.footerContact}
                      </Link>
                    </li>
                    <li>
                      <Link href='/blog' className='hover:text-blue-400 transition-colors'>
                        {t.footerBlog}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/mentions-legales'
                        className='hover:text-blue-400 transition-colors'>
                        {t.footerLegal}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='border-t border-gray-700 mt-8 pt-8 text-center text-gray-400'>
                <p>
                  &copy; {new Date().getFullYear()} SIDIKOFF DIGITAL. {t.footerRights}
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

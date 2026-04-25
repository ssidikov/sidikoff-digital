'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Star,
  ArrowRight,
  CheckCircle,
  Phone,
  Smartphone,
  Calendar,
  ChevronDown,
  ChevronUp,
  Camera,
  Users,
  Search,
  EyeOff,
  Heart,
  Eye,
  Image as ImageIcon,
  Award,
  Palette,
  FileText,
  Globe,
} from 'lucide-react'

import common from '@/locales/fr/common.json'

interface PainPoint {
  icon: string
  title: string
  description: string
}

interface Feature {
  icon: string
  title: string
  description: string
}

interface ProcessStep {
  title: string
  description: string
}

interface PhotographyProject {
  name: string
  type: string
  image: string
  results: string[]
}

interface Review {
  name: string
  position: string
  company: string
  location: string
  content: string
  rating: number
  image?: string
}

interface Package {
  name: string
  price: string
  period: string
  description: string
  delivery_time?: string
  is_popular?: boolean
  features: string[]
}

interface FAQ {
  question: string
  answer: string
}

const iconMap = {
  'eye-off': EyeOff,
  users: Users,
  heart: Heart,
  search: Search,
  camera: Camera,
  image: ImageIcon,
  calendar: Calendar,
  smartphone: Smartphone,
  star: Star,
  award: Award,
  palette: Palette,
  'file-text': FileText,
  globe: Globe,
  eye: Eye,
}

export default function PhotographerLandingContent() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const t = common.photographer_landing

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const renderIcon = (iconName: string, className: string = 'w-6 h-6') => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap]
    return IconComponent ? <IconComponent className={className} /> : null
  }

  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='relative pt-32 md:pt-40 pb-24 bg-linear-to-br from-orange-50 via-white to-amber-50 overflow-hidden'>
        <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f97316" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-30'></div>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-8'>
              <div className='inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium'>
                <Camera className='w-4 h-4 mr-2' />
                {t.hero.badge}
              </div>

              <div>
                <h1 className='text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6'>
                  {t.hero.title}
                </h1>
                <p className='text-xl text-gray-600 leading-relaxed mb-8'>{t.hero.description}</p>
              </div>

              <div className='space-y-4'>
                {t.hero.benefits?.map((benefit: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className='flex items-center space-x-3'>
                    <div className='flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center'>
                      <CheckCircle className='w-4 h-4 text-orange-600' />
                    </div>
                    <span className='text-gray-700 font-medium'>{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className='flex flex-col sm:flex-row gap-4'>
                <Link href={`/#contact`} className='group'>
                  <button className='w-full sm:w-auto px-8 py-4 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-orange-200'>
                    {t.hero.cta_primary}
                    <ArrowRight className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform' />
                  </button>
                </Link>
                <Link href={`/#portfolio`}>
                  <button className='w-full sm:w-auto px-8 py-4 border-2 border-orange-200 text-orange-600 rounded-xl font-semibold hover:border-orange-300 hover:bg-orange-50 transition-all duration-300'>
                    {t.hero.cta_secondary}
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='relative'>
              <div className='aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl'>
                <Image
                  src='/images/projects/photographer-hero.webp'
                  alt={t.hero.image_alt}
                  fill
                  className='object-cover'
                  priority
                />
                <div className='absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent'></div>
              </div>

              <div className='absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-orange-100'>
                <div className='flex items-center space-x-4'>
                  <div className='w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center'>
                    <Camera className='w-6 h-6 text-orange-600' />
                  </div>
                  <div>
                    <p className='text-sm text-gray-500 font-medium'>Portfolio Professionnel</p>
                    <p className='text-2xl font-bold text-gray-900'>+500 Photos</p>
                  </div>
                </div>
              </div>

              <div className='absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-orange-100'>
                <div className='flex items-center space-x-2'>
                  <div className='flex'>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className='w-4 h-4 text-yellow-400 fill-current' />
                    ))}
                  </div>
                  <span className='text-sm font-semibold text-gray-900'>5.0</span>
                </div>
                <p className='text-xs text-gray-500 mt-1'>+50 Avis Clients</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className='py-24 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              {t.problems.title}
            </h2>
            <p className='text-xl text-gray-600'>{t.problems.subtitle}</p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {t.problems.pain_points?.map((point: PainPoint, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center'>
                <div className='w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                  {renderIcon(point.icon, 'w-8 h-8 text-red-600')}
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>{point.title}</h3>
                <p className='text-gray-600 leading-relaxed'>{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className='py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              {t.solution.title}
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>{t.solution.description}</p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {t.solution.features?.map((feature: Feature, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-orange-50 p-8 rounded-xl border border-orange-100 hover:shadow-lg transition-shadow'>
                <div className='w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6'>
                  {renderIcon(feature.icon, 'w-8 h-8 text-orange-600')}
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>{feature.title}</h3>
                <p className='text-gray-600 leading-relaxed'>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-24 bg-orange-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>{t.process.title}</h2>
            <p className='text-xl text-gray-600'>{t.process.description}</p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {t.process.steps?.map((step: ProcessStep, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='text-center'>
                <div className='w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl'>
                  {index + 1}
                </div>
                <h3 className='text-lg font-semibold text-gray-900 mb-4'>{step.title}</h3>
                <p className='text-gray-600'>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className='py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              {t.portfolio.title}
            </h2>
            <p className='text-xl text-gray-600'>{t.portfolio.subtitle}</p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {t.portfolio.projects?.map((project: PhotographyProject, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
                <div className='aspect-[4/3] relative'>
                  <Image
                    src={`/images/projects/${project.image}`}
                    alt={project.name}
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='p-6'>
                  <div className='flex items-center justify-between mb-2'>
                    <h3 className='text-lg font-semibold text-gray-900'>{project.name}</h3>
                    <span className='text-sm text-purple-600 font-medium'>{project.type}</span>
                  </div>
                  <div className='space-y-1'>
                    {project.results?.map((result: string, i: number) => (
                      <div key={i} className='flex items-center text-sm text-green-600'>
                        <CheckCircle className='w-4 h-4 mr-2' />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Gallery Block */}
      <section className='py-24 bg-gray-900 text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold mb-4'>
              Galerie Interactive Haute Résolution
            </h2>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              Une présentation visuelle exceptionnelle conçue pour sublimer votre art sans compromis sur la vitesse de chargement (Lighthouse 99+).
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]'>
            {[
              { src: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop', span: 'col-span-1 md:col-span-2 row-span-2' },
              { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop', span: 'col-span-1 row-span-1' },
              { src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop', span: 'col-span-1 row-span-1' },
              { src: 'https://images.unsplash.com/photo-1554048612-b6a18cb193dd?q=80&w=800&auto=format&fit=crop', span: 'col-span-1 md:col-span-2 row-span-1' },
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-xl overflow-hidden group cursor-pointer ${img.span}`}>
                <Image
                  src={img.src}
                  alt={`Portfolio photographe ${i}`}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-700'
                />
                <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                  <span className='bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-2 rounded-full font-medium'>
                    Voir le projet
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='py-24 bg-orange-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              {t.testimonials.title}
            </h2>
            <p className='text-xl text-gray-600'>{t.testimonials.subtitle}</p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {t.testimonials.reviews?.map((review: Review, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-orange-50 p-6 rounded-xl border border-orange-100'>
                <div className='flex items-center space-x-1 mb-4'>
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className='w-5 h-5 text-yellow-400 fill-current' />
                  ))}
                </div>
                <p className='text-gray-700 mb-6 italic'>&ldquo;{review.content}&rdquo;</p>
                <div>
                  <p className='font-semibold text-gray-900'>{review.name}</p>
                  <p className='text-sm text-gray-600'>
                    {review.position} - {review.company}
                  </p>
                  <p className='text-sm text-gray-500'>{review.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className='py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>{t.pricing.title}</h2>
            <p className='text-xl text-gray-600'>{t.pricing.description}</p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {t.pricing.packages?.map((pkg: Package, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                  pkg.is_popular ? 'border-orange-300 scale-105' : 'border-gray-200'
                }`}>
                {pkg.is_popular && (
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                    <span className='bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold'>
                      Le plus populaire
                    </span>
                  </div>
                )}
                <div className='text-center mb-8'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>{pkg.name}</h3>
                  <div className='flex items-baseline justify-center mb-2'>
                    <span className='text-4xl font-bold text-orange-600'>{pkg.price}</span>
                    <span className='text-gray-500 ml-2'>/{pkg.period}</span>
                  </div>
                  <p className='text-gray-600 text-sm mb-4'>{pkg.description}</p>
                  <p className='text-orange-600 font-medium text-sm'>
                    Livraison: {pkg.delivery_time}
                  </p>
                </div>
                <ul className='space-y-4 mb-8'>
                  {pkg.features?.map((feature: string, i: number) => (
                    <li key={i} className='flex items-start space-x-3'>
                      <CheckCircle className='w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5' />
                      <span className='text-gray-700'>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/#contact`}>
                  <button
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      pkg.is_popular
                        ? 'bg-orange-600 text-white hover:bg-orange-700'
                        : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
                    }`}>
                    Choisir ce forfait
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Semantic Expansion Section */}
      <section className='py-20 bg-orange-50'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>
              Pourquoi la création d'un site internet vitrine pour photographe est indispensable ?
            </h2>
            <div className='prose prose-lg text-gray-700 space-y-5'>
              <p>
                Aujourd'hui, Instagram ne suffit plus pour développer une activité de photographie pérenne et rentable. La <strong>création de site internet vitrine pour photographe</strong> est l'étape essentielle pour asseoir votre crédibilité professionnelle. Un site web dédié vous permet de présenter votre travail dans des <strong>galeries haute résolution</strong>, sans les contraintes de format ou de compression des réseaux sociaux. Vous êtes le seul maître de votre image.
              </p>
              <p>
                Chez <strong>Sidikoff Digital</strong>, nous savons que l'esthétique est au cœur de votre métier. C'est pourquoi nous concevons des portfolios immersifs avec <strong>Next.js</strong> et Tailwind CSS, offrant des performances exceptionnelles. Un site ultra-rapide (score Lighthouse supérieur à 95) garantit que vos images se chargent instantanément, retenant ainsi l'attention des visiteurs. Que vous soyez photographe de mariage à Paris, photographe corporate à Lyon, ou portraitiste en freelance, votre site doit refléter la qualité exceptionnelle de vos clichés.
              </p>
              <p>
                Le <strong>référencement naturel (SEO)</strong> est notre autre grand atout. En optimisant votre site pour les moteurs de recherche, nous ciblons les mots-clés que vos futurs clients utilisent, tels que « photographe mariage Lyon », « shooting photo naissance Paris », ou « création site internet vitrine photographe ». Nous intégrons les balises sémantiques <strong>Schema.org LocalBusiness</strong> et <strong>ProfessionalService</strong>, pour accroître votre visibilité locale. Un bon SEO local vous permet d'obtenir des demandes de devis qualifiées de manière régulière et organique, réduisant ainsi votre dépendance à la publicité payante.
              </p>
              <p>
                Au-delà de la vitrine, votre site devient un véritable outil de gestion. Nos solutions incluent des modules de <strong>réservation de séances en ligne</strong>, la création de galeries privées sécurisées pour vos clients, et des formulaires de devis automatisés. Vous gagnez un temps précieux sur l'administratif pour vous concentrer sur ce que vous faites de mieux : la photographie. La création site web freelance est un investissement stratégique qui propulse vos revenus et votre notoriété.
              </p>
            </div>

            <div className='mt-8 flex flex-wrap gap-3'>
              {[
                'Création site internet vitrine photographe',
                'Portfolio photographe',
                'SEO pour photographes',
                'Galerie photo en ligne',
                'Réservation shooting',
                'Référencement local',
                'Photographe freelance',
                'Site web sur mesure',
              ].map((tag) => (
                <span
                  key={tag}
                  className='inline-flex items-center px-3 py-1 rounded-full bg-white text-orange-700 text-sm font-medium border border-orange-200'>
                  {tag}
                </span>
              ))}
            </div>

            <div className='mt-8 p-6 bg-white rounded-xl border border-orange-100'>
              <p className='text-sm text-orange-800 font-medium mb-2'>
                🔗 Nos autres expertises locales
              </p>
              <div className='flex flex-wrap gap-3 text-sm'>
                <a href='/services/agence-web-paris' className='text-orange-600 hover:underline'>
                  Agence web Paris
                </a>
                <span className='text-gray-400'>·</span>
                <a href='/services/creation-site-internet-lyon' className='text-orange-600 hover:underline'>
                  Création site internet Lyon
                </a>
                <span className='text-gray-400'>·</span>
                <a href='/services/agence-web-villeurbanne' className='text-orange-600 hover:underline'>
                  Agence web Villeurbanne
                </a>
                <span className='text-gray-400'>·</span>
                <a href='/services/creation-site-internet-freelance' className='text-orange-600 hover:underline'>
                  Site web freelance
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-24 bg-gray-50'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>{t.faq.title}</h2>
            <p className='text-xl text-gray-600'>{t.faq.subtitle}</p>
          </motion.div>

          <div className='space-y-4'>
            {t.faq.questions?.map((faq: FAQ, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-white rounded-xl shadow-sm border border-gray-200'>
                <button
                  onClick={() => toggleFAQ(index)}
                  className='w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 rounded-xl transition-colors'>
                  <span className='font-semibold text-gray-900'>{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className='w-5 h-5 text-orange-600' />
                  ) : (
                    <ChevronDown className='w-5 h-5 text-orange-600' />
                  )}
                </button>
                {openFAQ === index && (
                  <div className='px-6 pb-5'>
                    <p className='text-gray-600 leading-relaxed'>{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-24 bg-linear-to-r from-orange-600 to-amber-600'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='space-y-8'>
            <h2 className='text-3xl lg:text-4xl font-bold text-white mb-4'>{t.cta.title}</h2>
            <p className='text-xl text-orange-100 mb-8'>{t.cta.description}</p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/contact'>
                <button className='px-8 py-4 bg-white text-orange-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors'>
                  {t.cta.primary_button}
                </button>
              </Link>
              <a href='tel:+33123456789'>
                <button className='px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-colors flex items-center justify-center'>
                  <Phone className='w-5 h-5 mr-2' />
                  {t.cta.secondary_button}
                </button>
              </a>
            </div>

            <div className='flex flex-wrap justify-center gap-8 pt-8'>
              {t.cta.features?.map((feature: string, index: number) => (
                <div key={index} className='flex items-center text-orange-100'>
                  <CheckCircle className='w-5 h-5 mr-2' />
                  {feature}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

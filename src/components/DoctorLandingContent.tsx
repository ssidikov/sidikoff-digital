'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Star,
  ArrowRight,
  CheckCircle,
  Smartphone,
  Calendar,
  ChevronDown,
  ChevronUp,
  Stethoscope,
  Users,
  Search,
  Clock,
  Shield,
  Heart,
  UserCheck,
  MapPin,
  Award,
  FileText,
  Globe,
  Lock,
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

interface MedicalProject {
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
  clock: Clock,
  users: Users,
  shield: Shield,
  search: Search,
  stethoscope: Stethoscope,
  calendar: Calendar,
  smartphone: Smartphone,
  star: Star,
  award: Award,
  'file-text': FileText,
  globe: Globe,
  heart: Heart,
  'user-check': UserCheck,
  'map-pin': MapPin,
  lock: Lock,
}

export default function DoctorLandingContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const t = common.doctor_landing

  const renderIcon = (iconName: string, className: string = 'w-6 h-6') => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap]
    return IconComponent ? <IconComponent className={className} /> : null
  }

  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='relative pt-24 md:pt-32 pb-24 bg-linear-to-br from-green-50 via-white to-emerald-50 overflow-hidden'>
        <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2310b981" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-30'></div>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-8'>
              <div className='inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium'>
                <Stethoscope className='w-4 h-4 mr-2' />
                {t.hero.badge}
              </div>

              <div>
                <h1 className='text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6'>
                  {t.hero.title}
                </h1>
                <p className='text-xl text-gray-600 leading-relaxed mb-8'>{t.hero.description}</p>

                <div className='space-y-4 mb-8'>
                  {t.hero.benefits?.map((benefit: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className='flex items-center space-x-3'>
                      <CheckCircle className='w-5 h-5 text-green-600 flex-shrink-0' />
                      <span className='text-gray-700'>{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-4'>
                <Link
                  href={`/contact`}
                  className='inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors'>
                  <Calendar className='w-5 h-5 mr-2' />
                  {t.hero.cta_primary}
                  <ArrowRight className='w-5 h-5 ml-2' />
                </Link>
                <Link
                  href='#portfolio'
                  className='inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg border-2 border-green-600 hover:bg-green-50 transition-colors'>
                  {t.hero.cta_secondary}
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='relative'>
              <div className='relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl'>
                <Image
                  src='/images/projects/doctor-hero.webp'
                  alt={t.hero.image_alt}
                  fill
                  className='object-cover'
                  priority
                />
              </div>
              <div className='absolute -top-4 -right-4 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg'>
                <Stethoscope className='w-10 h-10 text-white' />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className='py-24 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>
              {t.problems.title}
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>{t.problems.description}</p>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-8'>
            {t.problems.pain_points?.map((point: PainPoint, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow'>
                <div className='w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6'>
                  {renderIcon(point.icon, 'w-8 h-8 text-red-600')}
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>{point.title}</h3>
                <p className='text-gray-600 leading-relaxed'>{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Medical Section */}
      <section className='py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>
              {t.why_medical.title}
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>{t.why_medical.description}</p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {t.why_medical.reasons?.map((reason: { icon: string; title: string; description: string }, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                className='bg-green-50 p-8 rounded-xl border border-green-100 hover:border-green-300 hover:shadow-lg transition-all duration-300'>
                <div className='w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mb-6 shadow-md'>
                  {renderIcon(reason.icon, 'w-7 h-7 text-white')}
                </div>
                <h3 className='text-lg font-semibold text-gray-900 mb-3'>{reason.title}</h3>
                <p className='text-gray-600 leading-relaxed text-sm'>{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professionals Section */}
      <section className='py-24 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>
              {t.professionals.title}
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>{t.professionals.description}</p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {t.professionals.specialties?.map((spec: { title: string; description: string }, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-green-500'>
                <h3 className='text-lg font-bold text-gray-900 mb-3 flex items-center gap-2'>
                  <CheckCircle className='w-5 h-5 text-green-500 flex-shrink-0' />
                  {spec.title}
                </h3>
                <p className='text-gray-600 leading-relaxed text-sm'>{spec.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content / Expertise Section */}
      <section className='py-24 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-12'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>
              {t.seo_content.title}
            </h2>
          </motion.div>
          <div className='prose prose-lg prose-green max-w-none'>
            {t.seo_content.paragraphs?.map((para: string, index: number) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='text-gray-700 leading-relaxed mb-6 text-lg'>
                {para}
              </motion.p>
            ))}
          </div>
        </div>
      </section>


      <section className='py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>
              {t.solution.title}
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>{t.solution.description}</p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {t.solution.features?.map((feature: Feature, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-green-50 p-8 rounded-xl hover:bg-green-100 transition-colors'>
                <div className='w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mb-6'>
                  {renderIcon(feature.icon, 'w-8 h-8 text-white')}
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>{feature.title}</h3>
                <p className='text-gray-600 leading-relaxed'>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-24 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>{t.process.title}</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>{t.process.description}</p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {t.process.steps?.map((step: ProcessStep, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className='text-center'>
                <div className='w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6'>
                  {index + 1}
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>{step.title}</h3>
                <p className='text-gray-600 leading-relaxed'>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id='portfolio' className='py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>
              {t.portfolio.title}
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>{t.portfolio.description}</p>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-8'>
            {t.portfolio.projects?.map((project: MedicalProject, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
                <div className='relative h-64'>
                  <Image
                    src={`/images/projects/${project.image}`}
                    alt={project.name}
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='p-6'>
                  <div className='text-sm text-green-600 font-medium mb-2'>{project.type}</div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-4'>{project.name}</h3>
                  <div className='space-y-2'>
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className='flex items-center text-gray-600'>
                        <CheckCircle className='w-4 h-4 text-green-500 mr-2 flex-shrink-0' />
                        <span className='text-sm'>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='py-24 bg-green-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>
              {t.testimonials.title}
            </h2>
            <p className='text-xl text-gray-600'>{t.testimonials.subtitle}</p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {t.testimonials.reviews?.map((review: Review, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className='bg-white p-8 rounded-xl shadow-lg'>
                <div className='flex items-center mb-6'>
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className='w-5 h-5 text-yellow-400 fill-current' />
                  ))}
                </div>
                <p className='text-gray-600 mb-6 leading-relaxed'>&ldquo;{review.content}&rdquo;</p>
                <div className='flex items-center'>
                  <div className='w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold mr-4'>
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className='font-semibold text-gray-900'>{review.name}</div>
                    <div className='text-sm text-gray-600'>
                      {review.position}, {review.company}
                    </div>
                    <div className='text-sm text-gray-500'>{review.location}</div>
                  </div>
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>{t.pricing.title}</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>{t.pricing.description}</p>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {t.pricing.packages?.map((pkg: Package, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                  pkg.is_popular ? 'ring-2 ring-green-500 shadow-2xl scale-105' : 'hover:shadow-xl'
                } transition-all duration-300`}>
                {pkg.is_popular && (
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                    <span className='bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium'>
                      Populaire
                    </span>
                  </div>
                )}

                <div className='text-center mb-8'>
                  <h3 className='text-2xl font-bold text-gray-900 mb-2'>{pkg.name}</h3>
                  <div className='text-4xl font-bold text-green-600 mb-2'>{pkg.price}</div>
                  <div className='text-gray-600'>{pkg.period}</div>
                  {pkg.delivery_time && (
                    <div className='text-sm text-green-600 mt-2'>{pkg.delivery_time}</div>
                  )}
                </div>

                <p className='text-gray-600 mb-8'>{pkg.description}</p>

                <ul className='space-y-4 mb-8'>
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className='flex items-start'>
                      <CheckCircle className='w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0' />
                      <span className='text-gray-700'>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/contact`}
                  className={`block w-full text-center py-4 px-6 rounded-lg font-semibold transition-colors ${
                    pkg.is_popular
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-green-100 text-green-700 hover:bg-green-200'
                  }`}>
                  Choisir ce forfait
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Semantic Expansion Section */}
      <section className='py-24 bg-emerald-50'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>
              Création de site internet pour médecin : digitalisez votre cabinet médical
            </h2>
            <div className='prose prose-lg text-gray-700 space-y-5'>
              <p>
                La digitalisation de la santé est en marche. En tant que <strong>médecin généraliste</strong>, <strong>spécialiste</strong> ou <strong>chirurgien</strong>, la création d'un site internet professionnel n'est plus une option, c'est une nécessité. Les patients recherchent aujourd'hui leurs professionnels de santé en ligne, comparent les expertises et s'attendent à pouvoir prendre rendez-vous facilement. Un site web médical bien conçu vous permet de désengorger votre secrétariat, de rassurer votre patientèle et de mettre en valeur vos domaines d'expertise, le tout en respectant scrupuleusement la déontologie médicale.
              </p>
              <p>
                Chez Sidikoff Digital, nous concevons des plateformes web sur mesure pour les professionnels de santé. Que vous exerciez en cabinet libéral, en maison de santé ou en clinique, nous développons des solutions <strong>rapides, sécurisées et conformes au RGPD</strong>. Notre expertise technique (Next.js, React) garantit des temps de chargement quasi-instantanés, un critère essentiel pour l'expérience patient sur mobile.
              </p>

              <h3 className='text-2xl font-bold text-gray-900 mt-10 mb-4'>Les obligations légales d'un site internet médical</h3>
              <p>
                La <strong>création de site internet pour médecin</strong> est encadrée par des règles strictes définies par le Conseil National de l'Ordre des Médecins. Votre site doit avoir une vocation strictement informative et ne pas faire de publicité à caractère commercial. Il doit présenter de manière objective vos qualifications, vos diplômes, vos horaires de consultation, ainsi que les tarifs et les conditions de remboursement (secteur 1 ou 2).
              </p>
              <p>
                La protection des données de santé (HDS) et la conformité au <strong>RGPD</strong> sont également incontournables. Tout formulaire de contact ou espace de transmission de documents doit être sécurisé via un certificat SSL (HTTPS) robuste et hébergé sur des serveurs agréés Données de Santé. Nous intégrons toutes ces contraintes légales dès le début du projet pour vous livrer un outil parfaitement conforme, évitant tout risque de litige.
              </p>

              <h3 className='text-2xl font-bold text-gray-900 mt-10 mb-4'>L'intégration de la prise de rendez-vous en ligne (Doctolib, Maiia...)</h3>
              <p>
                L'une des fonctionnalités les plus demandées lors de la <strong>création site web médecin</strong> est l'intégration d'un module de prise de rendez-vous en ligne. Plus de 60 % des patients prennent aujourd'hui leurs rendez-vous médicaux en dehors des heures d'ouverture du secrétariat. Nous connectons votre site internet en toute transparence avec votre plateforme de gestion (Doctolib, Maiia, Keldoc, etc.). 
              </p>
              <p>
                Cette intégration permet à vos patients de visualiser vos disponibilités en temps réel directement depuis la page d'accueil de votre site, réduisant ainsi considérablement le nombre d'appels téléphoniques chronophages pour vos équipes administratives.
              </p>

              <h3 className='text-2xl font-bold text-gray-900 mt-10 mb-4'>Pourquoi le SEO local est crucial pour les cabinets médicaux ?</h3>
              <p>
                Avoir un site conforme et sécurisé est une excellente base, mais encore faut-il qu'il soit trouvé par les patients de votre zone géographique. Le référencement naturel (SEO) local est la clé. Lorsqu'un patient recherche "ophtalmologue à Lyon" ou "dermatologue urgence Paris", votre site doit apparaître dans les premiers résultats.
              </p>
              <p>
                Nous structurons votre site médical avec un balisage <strong>Schema.org MedicalClinic</strong> ou <strong>Physician</strong>. Ce code invisible pour le patient permet aux algorithmes de Google de comprendre exactement quelle est votre spécialité, où se trouve votre cabinet et quelles sont vos horaires d'ouverture. Nous optimisons également votre fiche Google Business Profile, qui fonctionne en synergie avec votre site web pour dominer les résultats de recherche locaux et la carte Google Maps.
              </p>

              <h3 className='text-2xl font-bold text-gray-900 mt-10 mb-4'>Concevoir un site web rassurant pour les patients</h3>
              <p>
                L'angoisse médicale est une réalité. Le design de votre <strong>site internet médecin</strong> doit transmettre immédiatement une sensation de calme, de professionnalisme et d'empathie. Nous privilégions une interface épurée (UI claire, typographie lisible, couleurs apaisantes comme le bleu, le vert ou le blanc). La navigation (UX) est pensée pour que l'information d'urgence (numéro de téléphone, adresse, accès handicapés) soit accessible en moins de deux clics.
              </p>
              <p>
                De plus, nous pouvons intégrer une section FAQ (Foire Aux Questions) pour répondre aux interrogations courantes de vos patients avant leur consultation : Comment se préparer à l'intervention ? Quels documents apporter ? Quels sont les délais d'obtention des résultats ? Cela permet de filtrer les appels inutiles tout en accompagnant psychologiquement le patient.
              </p>

              <h3 className='text-2xl font-bold text-gray-900 mt-10 mb-4'>Combien coûte la création d'un site web pour médecin ?</h3>
              <p>
                Le tarif d'une <strong>création site web cabinet médical</strong> varie selon vos besoins. Pour un praticien seul souhaitant un site vitrine informatif avec connexion Doctolib, comptez à partir de 800 €. Pour une clinique ou un centre médical regroupant plusieurs praticiens, nécessitant un annuaire interne, des pages de spécialités détaillées et un extranet sécurisé, le budget peut s'échelonner entre 2 000 € et 5 000 €.
              </p>
              <p>
                Cet investissement est rapidement rentabilisé par le gain de temps administratif, la valorisation de votre image de marque et la diminution des rendez-vous non honorés (lapins), grâce à une information claire et accessible en permanence.
              </p>
            </div>

            <div className='mt-12 flex flex-wrap gap-3'>
              {[
                'Création site web médecin',
                'Site internet cabinet médical',
                'SEO santé',
                'Intégration Doctolib',
                'Site web chirurgien',
                'Création de site pour praticien',
                'RGPD santé',
                'Medical SEO',
                'Conformité Ordre des Médecins',
              ].map((tag) => (
                <span
                  key={tag}
                  className='inline-flex items-center px-4 py-2 rounded-full bg-white text-green-700 text-sm font-semibold border border-green-200 shadow-sm'>
                  {tag}
                </span>
              ))}
            </div>
            
            <div className='mt-12 p-8 bg-white rounded-xl border border-green-100 shadow-sm'>
              <p className='text-sm text-green-800 font-bold mb-4 uppercase tracking-wider'>
                🔗 Explorer nos autres solutions
              </p>
              <div className='flex flex-wrap gap-4 text-sm font-medium'>
                <a href='/services/agence-web-lyon' className='text-green-600 hover:text-green-800 transition-colors'>
                  Agence web Lyon
                </a>
                <span className='text-gray-300'>|</span>
                <a href='/services/optimisation-seo' className='text-green-600 hover:text-green-800 transition-colors'>
                  Optimisation SEO
                </a>
                <span className='text-gray-300'>|</span>
                <a href='/services/creation-site-internet-freelance' className='text-green-600 hover:text-green-800 transition-colors'>
                  Site web Freelance
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>{t.faq.title}</h2>
            <p className='text-xl text-gray-600'>{t.faq.description}</p>
          </motion.div>

          <div className='space-y-6'>
            {t.faq.questions?.map((item: FAQ, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-white rounded-xl shadow-lg overflow-hidden'>
                <button
                  className='w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors'
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                  <h3 className='text-lg font-semibold text-gray-900 pr-4'>{item.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className='w-5 h-5 text-green-600 flex-shrink-0' />
                  ) : (
                    <ChevronDown className='w-5 h-5 text-green-600 flex-shrink-0' />
                  )}
                </button>
                {openFaq === index && (
                  <div className='px-8 pb-6'>
                    <p className='text-gray-600 leading-relaxed'>{item.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-24 bg-linear-to-r from-green-600 to-emerald-600'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className='text-3xl lg:text-4xl font-bold text-white mb-6'>{t.cta.title}</h2>
            <p className='text-xl text-green-100 mb-8 max-w-2xl mx-auto'>{t.cta.description}</p>
            <Link
              href={`/contact`}
              className='inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors'>
              <Calendar className='w-5 h-5 mr-2' />
              {t.cta.button}
              <ArrowRight className='w-5 h-5 ml-2' />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

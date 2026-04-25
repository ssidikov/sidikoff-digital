'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Globe,
  Rocket,
  Award,
  MapPin,
  Briefcase,
} from 'lucide-react'

import common from '@/locales/fr/common.json'
import Portfolio from '@/sections/Portfolio'
import { FAQAccordion } from '@/components/FAQAccordion'

interface ServiceItem {
  icon: string
  title: string
  description: string
}

interface AboutItem {
  icon: string
  title: string
  description: string
}

interface ProcessStep {
  number: string
  title: string
  description: string
}

const AgenceWebParisLandingContent: React.FC = () => {
  const content = common.agence_web_paris_landing

  // Icon mapping for services
  const getServiceIcon = (iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      '⚛️': <span className='text-4xl'>⚛️</span>,
      '🌐': <Globe className='h-8 w-8 text-blue-600' />,
      '🚀': <Rocket className='h-8 w-8 text-blue-600' />,
    }
    return iconMap[iconName] || <Zap className='h-8 w-8 text-blue-600' />
  }

  // Icon mapping for about section
  const getAboutIcon = (iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      '🏆': <Award className='h-8 w-8 text-blue-600' />,
      '📍': <MapPin className='h-8 w-8 text-blue-600' />,
      '💼': <Briefcase className='h-8 w-8 text-blue-600' />,
    }
    return iconMap[iconName] || <CheckCircle className='h-8 w-8 text-blue-600' />
  }

  const faqItems = [
    {
      id: '1',
      question: 'Combien coûte un site internet à Paris ?',
      answer: 'Le tarif dépend de vos besoins. Un site vitrine de base commence généralement à partir de 690€, tandis qu\'un site e-commerce plus complexe ou un site sur mesure peut démarrer autour de 1 500€. Nous fournissons un devis détaillé et gratuit après un premier appel de cadrage, sans engagement de votre part.',
      category: 'pricing'
    },
    {
      id: '2',
      question: 'Combien de temps faut-il pour créer un site internet à Paris ?',
      answer: 'En moyenne, la création d\'un site vitrine professionnel prend entre 7 et 14 jours ouvrés. Un site e-commerce complet ou une application sur mesure nécessite 4 à 8 semaines selon la complexité des fonctionnalités. Nous respectons les délais convenus et vous tenons informé à chaque étape.',
      category: 'timing'
    },
    {
      id: '3',
      question: 'Votre agence web parisienne propose-t-elle l\'optimisation SEO ?',
      answer: 'Oui, le SEO est intégré dès la conception de chaque site. Nous optimisons la structure technique (Core Web Vitals, balisage sémantique, sitemap), les contenus (mots-clés locaux Paris, balises meta) et la performance (score Lighthouse 95+) pour vous positionner durablement sur Google dans votre secteur parisien.',
      category: 'seo'
    },
    {
      id: '4',
      question: 'Puis-je gérer mon site moi-même après sa mise en ligne ?',
      answer: 'Absolument. Nous développons sur des CMS intuitifs (Sanity, WordPress headless) ou des back-offices sur mesure. Vous pouvez modifier vos textes, ajouter des articles de blog et mettre à jour vos images sans aucune compétence technique. Une formation complète est incluse dans chaque livraison.',
      category: 'maintenance'
    },
    {
      id: '5',
      question: 'Quelle est la différence entre un site Next.js et un site WordPress ?',
      answer: 'Next.js est un framework React qui offre des performances supérieures (score Lighthouse 95-100), un chargement quasi-instantané et une sécurité renforcée. WordPress offre un écosystème de plugins plus large mais peut être plus lourd en performances. Nous recommandons Next.js pour les entreprises qui veulent se démarquer techniquement et en SEO, et WordPress pour les projets nécessitant un CMS classique.',
      category: 'technical'
    },
    {
      id: '6',
      question: 'Proposez-vous un accompagnement après la livraison du site ?',
      answer: 'Oui. Nous proposons des contrats de maintenance mensuelle incluant : mises à jour de sécurité, sauvegardes quotidiennes, monitoring des performances, petites évolutions et support technique réactif. Vous n\'êtes jamais seul après le lancement.',
      category: 'maintenance'
    },
    {
      id: '7',
      question: 'Travaillez-vous avec des entreprises de tous les arrondissements parisiens ?',
      answer: 'Oui, nous accompagnons des entreprises dans tout Paris : du 1er au 20ème arrondissement, ainsi qu\'en petite et grande couronne (92, 93, 94). Nos clients sont des restaurants, cabinets médicaux, agences immobilières, boutiques, freelances et startups. Nous nous déplaçons pour les réunions de lancement sur Paris et Île-de-France.',
      category: 'local'
    },
    {
      id: '8',
      question: 'Mon site sera-t-il visible sur mobile et tablette ?',
      answer: 'Tous nos sites sont conçus en "mobile-first" : ils s\'adaptent parfaitement à tous les formats d\'écran (smartphone, tablette, desktop). Google privilégie le responsive design pour le référencement, et plus de 60 % du trafic web provient aujourd\'hui des mobiles. Votre site sera testé sur une dizaine d\'appareils différents avant la livraison.',
      category: 'technical'
    }
  ]

  return (
    <div className='min-h-screen bg-linear-to-br from-slate-50 to-blue-50'>
      {/* Hero Section */}
      <section
        className='relative overflow-hidden text-gray-800 pt-20 md:pt-24'
        style={{
          backgroundImage: 'linear-gradient(235deg, #FFFAE6 3%, #EBF2FF 42%, #FFFAE6 98%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center lg:text-left'>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='inline-flex items-center bg-gray-800/10 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-6'>
                <Star className='w-4 h-4 mr-2' />
                {content.hero.badge}
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900'>
                {content.hero.title}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='text-xl text-gray-700 mb-8 leading-relaxed'>
                {content.hero.description}
              </motion.p>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className='flex flex-wrap gap-4 mb-8'>
                {content.hero.trust_indicators.map((indicator: string, index: number) => (
                  <div
                    key={index}
                    className='flex items-center bg-gray-800/10 backdrop-blur-sm px-3 py-2 rounded-lg'>
                    <CheckCircle className='w-4 h-4 mr-2 text-green-600' />
                    <span className='text-sm font-medium text-gray-800'>{indicator}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className='flex flex-col sm:flex-row gap-4'>
                <Link
                  href='/contact'
                  className='inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl'>
                  {content.hero.cta_primary}
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Link>
                <Link
                  href='/projects'
                  className='inline-flex items-center px-8 py-4 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-semibold rounded-lg transition-all duration-300'>
                  {content.hero.cta_secondary}
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='relative'>
              <div className='relative'>
                <Image
                  src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&crop=center'
                  alt='Équipe développeurs agence web Paris travaillant sur Next.js et React'
                  width={600}
                  height={400}
                  quality={95}
                  className='rounded-2xl shadow-2xl object-cover'
                  priority
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl'></div>

                {/* Floating badges */}
                <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2'>
                  <div className='flex items-center space-x-2'>
                    <span className='text-blue-600 font-bold'>Next.js</span>
                    <span className='text-gray-400'>•</span>
                    <span className='text-purple-600 font-bold'>React</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-20 bg-white relative overflow-hidden'>
        {/* Background decoration */}
        <div className='absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -translate-y-32 translate-x-32'></div>
        <div className='absolute bottom-0 left-0 w-48 h-48 bg-purple-50 rounded-full translate-y-24 -translate-x-24'></div>

        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
              {content.services.title}
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>{content.services.subtitle}</p>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-8'>
            {content.services.items.map((service: ServiceItem, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-blue-200 hover:-translate-y-2'>
                {/* Service Image */}
                <div className='mb-6 h-48 rounded-xl overflow-hidden bg-linear-to-br from-blue-50 to-purple-50'>
                  <Image
                    src={
                      index === 0
                        ? 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop'
                        : index === 1
                          ? 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=300&fit=crop'
                          : 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
                    }
                    alt={service.title}
                    width={400}
                    height={300}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                </div>

                <div className='mb-6'>{getServiceIcon(service.icon)}</div>
                <h3 className='text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors'>
                  {service.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className='py-20 bg-linear-to-br from-blue-50 to-indigo-50 relative overflow-hidden'>
        {/* Background image with overlay */}
        <div className='absolute inset-0 opacity-10'>
          <Image
            src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop'
            alt='Équipe agence web Paris'
            fill
            className='object-cover'
            quality={70}
          />
        </div>

        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
              {content.about.title}
            </h2>
            <p className='text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed'>
              {content.about.subtitle}
            </p>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-8'>
            {content.about.items.map((item: AboutItem, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='text-center p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/50'>
                <div className='flex justify-center mb-6'>{getAboutIcon(item.icon)}</div>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>{item.title}</h3>
                <p className='text-gray-600 leading-relaxed'>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-20 bg-white relative overflow-hidden'>
        {/* Background pattern */}
        <div className='absolute inset-0 opacity-5'>
          <Image
            src='https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop'
            alt='Processus développement web agence Paris'
            fill
            className='object-cover'
            quality={70}
          />
        </div>

        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
              {content.process.title}
            </h2>
          </motion.div>

          <div className='relative'>
            {/* Timeline line */}
            <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-blue-400 to-blue-600 rounded-full'></div>

            <div className='space-y-12 md:space-y-16'>
              {content.process.steps.map((step: ProcessStep, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                  {/* Content */}
                  <div
                    className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <div className='bg-white p-6 rounded-xl shadow-lg border border-gray-100'>
                      <h3 className='text-xl font-bold text-gray-900 mb-3'>{step.title}</h3>
                      <p className='text-gray-600 leading-relaxed'>{step.description}</p>
                    </div>
                  </div>

                  {/* Step number */}
                  <div className='relative z-10 flex items-center justify-center w-16 h-16 bg-linear-to-br from-blue-500 to-blue-600 text-white font-bold text-lg rounded-full shadow-lg my-4 md:my-0'>
                    {step.number}
                  </div>

                  {/* Spacer */}
                  <div className='hidden md:block md:w-5/12'></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Context Section — boosts text-to-HTML ratio */}
      <section className='py-20 bg-white relative overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-16 items-start'>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
                Créer un site web à Paris en 2026 : ce qui a changé
              </h2>
              <div className='prose prose-lg text-gray-700 space-y-4'>
                <p>
                  Le marché parisien est l'un des plus concurrentiels de France. Que vous soyez une startup dans le Marais, un cabinet d'avocats dans le 8ème, une boutique de mode dans le 6ème ou un restaurant dans le 11ème, votre site web est aujourd'hui votre premier commercial. Un internaute parisien prend sa décision en moins de 5 secondes : design, rapidité, clarté et confiance sont non négociables.
                </p>
                <p>
                  Depuis 2024, Google intègre les <strong>Core Web Vitals</strong> comme facteur de classement majeur. Cela signifie que les sites lents ou mal optimisés pour mobile perdent des positions, quelles que soient leurs autres qualités. C'est pourquoi nous construisons tous nos sites avec <strong>Next.js</strong>, un framework qui garantit des scores Lighthouse 95+ et un chargement en moins d'une seconde.
                </p>
                <p>
                  Notre agence web parisienne accompagne aussi bien les <strong>TPE et PME locales</strong> que les startups en phase de croissance. Nous comprenons les spécificités de chaque arrondissement : le tissu commercial du 10ème, les professions libérales du 16ème, les créatifs du 18ème ou les entreprises B2B de La Défense. Cette connaissance locale se traduit par des contenus ciblés et un référencement local précis.
                </p>
                <p>
                  Nos projets livrés à Paris incluent des sites pour : restaurants gastronomiques, cabinets médicaux, agences immobilières, artisans, e-commerçants et SaaS. Chaque site est pensé pour convertir — pas seulement pour être beau.
                </p>
              </div>
            </div>
            <div className='space-y-6'>
              <h3 className='text-2xl font-bold text-gray-900'>Pour qui travaillons-nous à Paris ?</h3>
              <div className='space-y-4'>
                {[
                  { emoji: '🏪', title: 'Commerces & boutiques', desc: 'Vitrines locales, menus en ligne, systèmes de réservation et e-commerce pour capter la clientèle de quartier et touristique.' },
                  { emoji: '⚕️', title: 'Professions de santé', desc: 'Sites conformes RGPD pour médecins, dentistes, kinésithérapeutes et psychologues. Prise de rendez-vous en ligne intégrée.' },
                  { emoji: '🏢', title: 'PME & startups', desc: 'Applications web sur mesure, sites institutionnels, landing pages de conversion et outils SaaS pour entreprises en croissance.' },
                  { emoji: '🎨', title: 'Freelances & créatifs', desc: 'Portfolios premium, sites vitrine et outils de facturation intégrés pour photographes, designers et consultants indépendants.' },
                  { emoji: '🍽️', title: 'Restauration & hôtellerie', desc: 'Sites avec menus dynamiques, galeries photos, réservation en ligne (Zenchef, TheFork) et SEO local pour apparaître sur Google Maps.' },
                ].map((item, i) => (
                  <div key={i} className='flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors'>
                    <span className='text-2xl flex-shrink-0'>{item.emoji}</span>
                    <div>
                      <h4 className='font-bold text-gray-900 mb-1'>{item.title}</h4>
                      <p className='text-gray-600 text-sm leading-relaxed'>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Arrondissements Section */}
      <section className='py-20 bg-gray-50 relative overflow-hidden'>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
            Notre expertise web par arrondissement
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-12'>
            Nous accompagnons les entreprises locales partout dans Paris avec une approche de proximité. Que vous soyez dans le Triangle d'Or du 8ème, les Batignolles du 17ème ou Belleville dans le 20ème, nous connaissons votre marché. Découvrez nos pages dédiées à chaque arrondissement.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link href='/services/agence-web-paris-15' className='px-6 py-3 bg-white text-blue-600 font-semibold rounded-full border border-blue-200 hover:bg-blue-50 transition'>Paris 15ème</Link>
            <Link href='/services/creation-site-internet-paris-16' className='px-6 py-3 bg-white text-blue-600 font-semibold rounded-full border border-blue-200 hover:bg-blue-50 transition'>Paris 16ème</Link>
            <Link href='/services/agence-web-paris-17' className='px-6 py-3 bg-white text-blue-600 font-semibold rounded-full border border-blue-200 hover:bg-blue-50 transition'>Paris 17ème</Link>
            <Link href='/services/agence-web-paris-19' className='px-6 py-3 bg-white text-blue-600 font-semibold rounded-full border border-blue-200 hover:bg-blue-50 transition'>Paris 19ème</Link>
            <Link href='/services/agence-web-paris-6' className='px-6 py-3 bg-white text-blue-600 font-semibold rounded-full border border-blue-200 hover:bg-blue-50 transition'>Paris 6ème</Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-20 bg-white relative overflow-hidden'>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
              Questions Fréquentes
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Tout ce que vous devez savoir sur la création de votre site web avec notre agence.
            </p>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Portfolio Section - Using existing Portfolio component */}
      <Portfolio
        isHomePage={true}
        className='py-20 bg-linear-to-br from-gray-50 to-blue-50'
      />

      {/* Final CTA Section */}
      <section className='py-20 bg-linear-to-br from-blue-900 via-blue-800 to-blue-600 text-white relative overflow-hidden'>
        {/* Background image with overlay */}
        <div className='absolute inset-0'>
          <Image
            src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop'
            alt='Skyline Paris Tour Eiffel agence web'
            fill
            className='object-cover opacity-20'
            quality={70}
          />
          <div className='absolute inset-0 bg-linear-to-br from-blue-900/80 via-blue-800/80 to-blue-600/80'></div>
        </div>

        <div className='relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>{content.cta.title}</h2>
            <p className='text-xl mb-8 opacity-90'>{content.cta.description}</p>

            <Link
              href='/contact'
              className='inline-flex items-center px-10 py-5 bg-white text-blue-900 font-bold text-lg rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl'>
              {content.cta.button}
              <ArrowRight className='ml-3 h-6 w-6' />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AgenceWebParisLandingContent

'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import { type Locale } from '@/lib/i18n'
import Section from '@/components/ui/Section'
import CTAButton from '@/components/ui/CTAButton'
import { ViewportHeightProvider } from '@/components/ViewportHeightProvider'
import { ArrowIcon, PlayIcon } from '@/components/ui/icons'
import { cardStyles } from '@/utils/styles'

interface ParisLandingContentProps {
  locale: Locale
}

// Animation configurations
const ANIMATION_CONFIG = {
  title: { duration: 0.8, delay: 0.2 },
  subtitle: { duration: 0.8, delay: 0.4 },
  buttons: { duration: 0.8, delay: 0.6 },
  image: { duration: 1, delay: 0.4 },
} as const

const CARD_ANIMATION = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: (index: number) => ({ duration: 0.6, delay: index * 0.1 }),
} as const

/**
 * Generate localized content based on locale
 */
function getLocalizedContent(locale: Locale) {
  if (locale === 'en') {
    return {
      hero: {
        badge: 'Paris Web Expert',
        title: 'Professional Website Creation in Paris',
        titleHighlight: 'Paris',
        description:
          'Paris web agency specialized in custom website creation. Modern, SEO-optimized sites adapted to your clients.',
        ctaPrimary: 'Get Free Quote',
        ctaSecondary: 'View Our Work',
        trustIndicators: ['100+ Paris Projects', '7 days Average Delivery', '24/7 Support'],
        metrics: [
          { number: '100+', label: 'Paris Projects' },
          { number: '7 days', label: 'Average Delivery' },
          { number: '24/7', label: 'Support' },
        ],
      },
      services: {
        title: 'Our Web Creation Services in Paris',
        description:
          'Modern showcase or e-commerce sites, with optimized SEO for Google and design adapted to your clients.',
        items: [
          {
            title: 'Showcase Website Paris',
            description:
              'Professional showcase website to present your services, attract new clients and strengthen your image in Paris and Île-de-France.',
            icon: '🌐',
            serviceType: 'creation-sites-web',
          },
          {
            title: 'E-commerce Website Paris',
            description:
              'Development of high-performance e-commerce sites: product catalog management, secure payment, responsive and SEO-optimized design.',
            icon: '🛒',
            serviceType: 'creation-site-ecommerce',
          },
          {
            title: 'Custom Web Development',
            description:
              'Creation of personalized functionalities, API integration, implementation of solutions adapted to your specific needs in Paris.',
            icon: '⚡',
            serviceType: 'creation-sites-web',
          },
          {
            title: 'Paris SEO Optimization',
            description:
              'Complete optimization and keyword strategy targeting Paris to appear at the top of Google results.',
            icon: '📈',
            serviceType: 'optimisation-seo',
          },
          {
            title: 'Modern Design & UX',
            description:
              'Design of intuitive, fast and aesthetic sites. User experience optimized to convert your visitors into customers.',
            icon: '🎨',
            serviceType: 'refonte-sites-web',
          },
          {
            title: 'Maintenance & Support',
            description:
              'Updates, security, backups, responsive technical support, with continuous monitoring to ensure your site performance.',
            icon: '🔧',
            serviceType: 'maintenance-support',
          },
        ],
      },
      whyChooseUs: {
        title: 'Why choose our Paris web agency?',
        subtitle: 'Local expertise for your digital success',
        items: [
          {
            title: 'Local Proximity',
            description: 'An agency based in Paris, close to your needs.',
            icon: '📍',
          },
          {
            title: 'Local SEO Expertise',
            description: 'Enhanced visibility in "website creation Paris" searches.',
            icon: '🎯',
          },
          {
            title: 'Personalized Support',
            description: 'A dedicated contact throughout the project.',
            icon: '👥',
          },
          {
            title: 'Measurable Results',
            description: 'Qualified traffic, new prospects, digital growth.',
            icon: '📊',
          },
          {
            title: 'Clear & Free Quote',
            description: 'No hidden fees, you know exactly what you pay.',
            icon: '💰',
          },
          {
            title: 'Quality Guarantee',
            description: 'High-performance, secure sites compliant with web standards.',
            icon: '✅',
          },
        ],
      },
      faq: {
        title: 'FAQ – Website Creation Paris',
        subtitle: 'Answers to frequently asked questions',
        items: [
          {
            question: 'What is the price for creating a website in Paris?',
            answer:
              'The price depends on the type of site (showcase, e-commerce, features). Each project is unique. Contact us for a free personalized quote.',
          },
          {
            question: 'How long does it take to design a website in Paris?',
            answer:
              'On average between 4 and 8 weeks, depending on the project size and content provided.',
          },
          {
            question: 'Will my site be visible on Google?',
            answer:
              'Yes. All our sites are optimized for local SEO in Paris, to maximize your local visibility.',
          },
          {
            question: 'Can I manage my site after it goes online?',
            answer:
              'Yes. We use intuitive CMS that allow you to easily update text, images and content.',
          },
        ],
      },
      cta: {
        title: 'Request a free quote today',
        subtitle:
          'Ready to boost your online visibility and attract new customers in Paris? Trust us with the creation of your professional website and benefit from a modern, high-performance and SEO-optimized site.',
        buttons: [
          { text: 'Request free quote', href: '/contact', variant: 'primary' },
          { text: 'View our work', href: '/projects', variant: 'secondary' },
          { text: 'Check our rates', href: '/pricing', variant: 'secondary' },
        ],
      },
    }
  } else if (locale === 'ru') {
    return {
      hero: {
        badge: 'Веб-эксперт в Париже',
        title: 'Профессиональное создание сайтов в Париже',
        titleHighlight: 'Париже',
        description:
          'Веб-агентство в Париже, специализирующееся на создании сайтов под заказ. Современные, SEO-оптимизированные сайты, адаптированные для ваших клиентов.',
        ctaPrimary: 'Получить расчет',
        ctaSecondary: 'Наши работы',
        trustIndicators: ['100+ Проектов в Париже', '7 дней Средний срок', '24/7 Поддержка'],
        metrics: [
          { number: '100+', label: 'Проектов в Париже' },
          { number: '7 дней', label: 'Средний срок' },
          { number: '24/7', label: 'Поддержка' },
        ],
      },
      services: {
        title: 'Наши услуги создания сайтов в Париже',
        description:
          'Современные витринные или e-commerce сайты с оптимизированным SEO для Google и дизайном, адаптированным для ваших клиентов.',
        items: [
          {
            title: 'Сайт-витрина Париж',
            description:
              'Профессиональный сайт-витрина для представления ваших услуг, привлечения новых клиентов и укрепления вашего имиджа в Париже.',
            icon: '🌐',
            serviceType: 'creation-sites-web',
          },
          {
            title: 'E-commerce сайт Париж',
            description:
              'Разработка высокопроизводительных e-commerce сайтов: управление каталогом товаров, безопасная оплата, адаптивный и SEO-оптимизированный дизайн.',
            icon: '🛒',
            serviceType: 'creation-site-ecommerce',
          },
          {
            title: 'Веб-разработка под заказ',
            description:
              'Создание персонализированных функций, интеграция API, внедрение решений, адаптированных для ваших специфических потребностей в Париже.',
            icon: '⚡',
            serviceType: 'creation-sites-web',
          },
          {
            title: 'SEO оптимизация Париж',
            description:
              'Полная оптимизация и стратегия ключевых слов, ориентированная на Париж для появления в топе результатов Google.',
            icon: '📈',
            serviceType: 'optimisation-seo',
          },
          {
            title: 'Современный дизайн и UX',
            description:
              'Дизайн интуитивных, быстрых и эстетичных сайтов. Пользовательский опыт, оптимизированный для превращения ваших посетителей в клиентов.',
            icon: '🎨',
            serviceType: 'refonte-sites-web',
          },
          {
            title: 'Обслуживание и поддержка',
            description:
              'Обновления, безопасность, резервные копии, отзывчивая техническая поддержка с непрерывным мониторингом для обеспечения производительности вашего сайта.',
            icon: '🔧',
            serviceType: 'maintenance-support',
          },
        ],
      },
      whyChooseUs: {
        title: 'Почему выбрать наше веб-агентство в Париже?',
        subtitle: 'Местная экспертиза для вашего цифрового успеха',
        items: [
          {
            title: 'Местная близость',
            description: 'Агентство, базирующееся в Париже, рядом с вашими потребностями.',
            icon: '📍',
          },
          {
            title: 'Местная SEO экспертиза',
            description: 'Улучшенная видимость в поисках "создание сайта Париж".',
            icon: '🎯',
          },
          {
            title: 'Персонализированная поддержка',
            description: 'Выделенный контакт на протяжении всего проекта.',
            icon: '👥',
          },
          {
            title: 'Измеримые результаты',
            description: 'Квалифицированный трафик, новые потенциальные клиенты, цифровой рост.',
            icon: '📊',
          },
          {
            title: 'Четкий и бесплатный расчет',
            description: 'Никаких скрытых платежей, вы точно знаете, что платите.',
            icon: '💰',
          },
          {
            title: 'Гарантия качества',
            description:
              'Высокопроизводительные, безопасные сайты, соответствующие веб-стандартам.',
            icon: '✅',
          },
        ],
      },
      faq: {
        title: 'Часто задаваемые вопросы – Создание сайта Париж',
        subtitle: 'Ответы на часто задаваемые вопросы',
        items: [
          {
            question: 'Какова цена создания сайта в Париже?',
            answer:
              'Цена зависит от типа сайта (витрина, электронная коммерция, функции). Каждый проект уникален. Свяжитесь с нами для бесплатного персонализированного расчета.',
          },
          {
            question: 'Сколько времени нужно для создания сайта в Париже?',
            answer:
              'В среднем от 4 до 8 недель, в зависимости от размера проекта и предоставленного контента.',
          },
          {
            question: 'Будет ли мой сайт виден в Google?',
            answer:
              'Да. Все наши сайты оптимизированы для локального SEO в Париже, чтобы максимизировать вашу местную видимость.',
          },
          {
            question: 'Смогу ли я управлять своим сайтом после запуска?',
            answer:
              'Да. Мы используем интуитивные CMS, которые позволяют легко обновлять тексты, изображения и контент.',
          },
        ],
      },
      cta: {
        title: 'Запросить бесплатный расчет сегодня',
        subtitle:
          'Готовы повысить свою онлайн-видимость и привлечь новых клиентов в Париже? Доверьте нам создание вашего профессионального сайта и получите современный, высокопроизводительный и SEO-оптимизированный сайт.',
        buttons: [
          { text: 'Запросить бесплатный расчет', href: '/contact', variant: 'primary' },
          { text: 'Посмотреть наши работы', href: '/projects', variant: 'secondary' },
          { text: 'Посмотреть наши тарифы', href: '/pricing', variant: 'secondary' },
        ],
      },
    }
  } else {
    // French (default)
    return {
      hero: {
        badge: 'Expert Web Paris',
        title: 'Création de site internet professionnel à Paris',
        titleHighlight: 'Paris',
        description:
          'Vous êtes une entreprise, un artisan, une startup ou un indépendant basé à Paris et vous souhaitez développer votre visibilité en ligne ? Notre agence web à Paris est spécialisée dans la création de sites internet sur mesure.',
        ctaPrimary: 'Demander un devis gratuit',
        ctaSecondary: 'Voir nos réalisations',
        trustIndicators: ['100+ Projets à Paris', '7j Délai moyen', '24/7 Support'],
        metrics: [
          { number: '100+', label: 'Projets à Paris' },
          { number: '7j', label: 'Délai moyen' },
          { number: '24/7', label: 'Support' },
        ],
      },
      services: {
        title: 'Nos services de création de site web à Paris',
        description:
          "Qu'il s'agisse de sites vitrines ou de boutiques e-commerce, avec un référencement optimisé pour Google et un design moderne adapté à vos clients.",
        items: [
          {
            title: 'Site vitrine à Paris',
            description:
              'Un site vitrine professionnel pour présenter vos services, attirer de nouveaux clients et renforcer votre image à Paris et en Île-de-France.',
            icon: '🌐',
            serviceType: 'creation-sites-web',
          },
          {
            title: 'Site e-commerce Paris',
            description:
              'Développement de sites e-commerce performants : gestion de catalogue produits, paiement sécurisé, design responsive et optimisé pour le SEO.',
            icon: '🛒',
            serviceType: 'creation-site-ecommerce',
          },
          {
            title: 'Développement web sur mesure',
            description:
              "Création de fonctionnalités personnalisées, intégration d'API, mise en place de solutions adaptées à vos besoins spécifiques à Paris.",
            icon: '⚡',
            serviceType: 'creation-sites-web',
          },
          {
            title: 'Référencement SEO Paris',
            description:
              'Optimisation complète (balises, vitesse, mobile friendly, maillage interne) et stratégie de mots-clés ciblant Paris pour apparaître en tête des résultats Google.',
            icon: '📈',
            serviceType: 'optimisation-seo',
          },
          {
            title: 'Design & UX moderne',
            description:
              'Conception de sites intuitifs, rapides et esthétiques. Expérience utilisateur optimisée pour convertir vos visiteurs en clients.',
            icon: '🎨',
            serviceType: 'refonte-sites-web',
          },
          {
            title: 'Maintenance & accompagnement',
            description:
              'Mises à jour, sécurité, sauvegardes, support technique réactif, avec un suivi continu pour assurer la performance de votre site.',
            icon: '🔧',
            serviceType: 'maintenance-support',
          },
        ],
      },
      whyChooseUs: {
        title: 'Pourquoi choisir notre agence web à Paris ?',
        subtitle: 'Une expertise locale au service de votre réussite digitale',
        items: [
          {
            title: 'Proximité locale',
            description: 'Une agence basée à Paris, au plus proche de vos besoins.',
            icon: '📍',
          },
          {
            title: 'Expertise SEO locale',
            description: 'Visibilité renforcée dans les recherches "création site internet Paris".',
            icon: '🎯',
          },
          {
            title: 'Accompagnement personnalisé',
            description: 'Un interlocuteur dédié tout au long du projet.',
            icon: '👥',
          },
          {
            title: 'Résultats mesurables',
            description: 'Trafic qualifié, nouveaux prospects, croissance digitale.',
            icon: '📊',
          },
          {
            title: 'Devis clair & gratuit',
            description: 'Pas de frais cachés, vous savez exactement ce que vous payez.',
            icon: '💰',
          },
          {
            title: 'Garantie de qualité',
            description: 'Sites performants, sécurisés et conformes aux standards web.',
            icon: '✅',
          },
        ],
      },
      faq: {
        title: 'FAQ – Création de site internet Paris',
        subtitle: 'Réponses aux questions les plus fréquentes',
        items: [
          {
            question: "Quel est le prix pour la création d'un site internet à Paris ?",
            answer:
              'Le tarif dépend du type de site (vitrine, e-commerce, fonctionnalités). Chaque projet est unique. Contactez-nous pour un devis personnalisé gratuit.',
          },
          {
            question: 'Combien de temps pour concevoir un site web à Paris ?',
            answer:
              'En moyenne entre 4 et 8 semaines, selon la taille du projet et le contenu fourni.',
          },
          {
            question: 'Mon site sera-t-il visible sur Google ?',
            answer:
              'Oui. Tous nos sites sont optimisés pour le référencement SEO à Paris, afin de maximiser votre visibilité locale.',
          },
          {
            question: 'Puis-je gérer mon site après sa mise en ligne ?',
            answer:
              'Oui. Nous utilisons des CMS intuitifs qui vous permettent de mettre à jour facilement textes, images et contenus.',
          },
        ],
      },
      cta: {
        title: "Demandez un devis gratuit dès aujourd'hui",
        subtitle:
          "Prêt à booster votre visibilité en ligne et à attirer de nouveaux clients à Paris ? Confiez-nous la création de votre site internet professionnel et bénéficiez d'un site moderne, performant et optimisé pour le SEO.",
        buttons: [
          { text: 'Demander un devis gratuit', href: '/contact', variant: 'primary' },
          { text: 'Voir nos réalisations', href: '/projects', variant: 'secondary' },
          { text: 'Consulter nos tarifs', href: '/tarifs', variant: 'secondary' },
        ],
      },
    }
  }
}

export default function ParisLandingContent({ locale }: ParisLandingContentProps) {
  const content = getLocalizedContent(locale)
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const isServicesInView = useInView(servicesRef, { once: true })

  return (
    <ViewportHeightProvider>
      <main className='relative'>
        {/* Hero Section */}
        <Section
          id='hero'
          variant='hero'
          background='transparent'
          padding='none'
          contentWidth='wide'
          className='relative overflow-hidden bg-gradient-to-br from-[#DBE2EF] via-[#F9F7FF] to-white'>
          {/* Background Pattern */}
          <div className='absolute inset-0 bg-[url("/images/hero-illustration.svg")] bg-no-repeat bg-right-top opacity-5'></div>

          <div ref={heroRef} className='relative z-10 hero-height flex items-center'>
            <div className='w-full grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center px-4 sm:px-6 lg:px-8'>
              {/* Content Column */}
              <div className='order-1 max-w-[800px] space-y-6 md:space-y-8 lg:pr-8'>
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className='inline-flex items-center bg-black/5 text-black px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm'>
                  <svg className='w-4 h-4 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                      clipRule='evenodd'
                    />
                  </svg>
                  {content.hero.badge}
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={ANIMATION_CONFIG.title}
                  className='text-3xl xl:text-5xl font-black text-black leading-[1.1] tracking-tight drop-shadow-xl'>
                  {content.hero.title.split(content.hero.titleHighlight).map((part, index) => (
                    <span key={index}>
                      {part}
                      {index === 0 && (
                        <span className='bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent'>
                          {content.hero.titleHighlight}
                        </span>
                      )}
                    </span>
                  ))}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={ANIMATION_CONFIG.subtitle}
                  className='max-w-2xl text-lg xl:text-2xl text-black/85 leading-[1.4] font-light drop-shadow-lg'>
                  {content.hero.description}
                </motion.p>

                {/* Trust indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ ...ANIMATION_CONFIG.subtitle, delay: 0.2 }}
                  className='flex flex-wrap items-center gap-4 text-sm font-medium text-black/70'>
                  {content.hero.trustIndicators.map((indicator: string, index: number) => (
                    <span key={index} className='flex items-center'>
                      <span className='w-2 h-2 bg-green-500 rounded-full mr-2'></span>
                      {indicator}
                    </span>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={ANIMATION_CONFIG.buttons}
                  className='flex flex-col xl:flex-row gap-3 sm:gap-4 lg:gap-6 pt-2'>
                  <CTAButton
                    variant='primary'
                    size='md'
                    href={locale === 'fr' ? '/contact' : `/${locale}/contact`}
                    className='w-full sm:w-auto flex-1 sm:flex-initial min-w-0 shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base xl:text-lg'>
                    <span className='mr-2 truncate'>{content.hero.ctaPrimary}</span>
                    <ArrowIcon />
                  </CTAButton>

                  <CTAButton
                    variant='secondary'
                    size='md'
                    href={locale === 'fr' ? '/projects' : `/${locale}/projects`}
                    className='w-full sm:w-auto flex-1 sm:flex-initial min-w-0 text-sm sm:text-base lg:text-lg'>
                    <PlayIcon />
                    <span className='ml-2 truncate'>{content.hero.ctaSecondary}</span>
                  </CTAButton>
                </motion.div>
              </div>

              {/* Hero Illustration */}
              <div className='relative order-2 lg:pl-8'>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
                  transition={ANIMATION_CONFIG.image}
                  className='relative w-full h-[200px] md:h-[250px] xl:h-[480px]'>
                  <Image
                    src='https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                    alt='Création site internet Paris - Bureau moderne'
                    className='rounded-2xl shadow-2xl object-cover'
                    fill
                    priority
                    loading='eager'
                    fetchPriority='high'
                    sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw'
                    quality={95}
                  />
                  <div className='absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent rounded-2xl'></div>
                </motion.div>

                {/* Floating Elements */}
                <div className='absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg z-20'>
                  <div className='flex items-center space-x-2'>
                    <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
                    <span className='text-sm font-medium text-gray-700'>En ligne</span>
                  </div>
                </div>

                <div className='absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg z-20'>
                  <div className='text-center'>
                    <div className='text-lg font-bold text-black'>SEO</div>
                    <div className='text-xs text-gray-600'>Optimisé</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Services Section */}
        <Section id='services' className='py-20 bg-gradient-to-b from-white to-gray-50' contentWidth='wide'>
          <div ref={servicesRef} className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6'>
                {content.services.title}
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                {content.services.description}
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {content.services.items.map((service, index) => (
                <motion.div
                  key={index}
                  initial={CARD_ANIMATION.initial}
                  animate={isServicesInView ? CARD_ANIMATION.animate : CARD_ANIMATION.initial}
                  transition={CARD_ANIMATION.transition(index)}
                  className={`${cardStyles.card} p-8 hover:shadow-xl transition-all duration-300 group`}>
                  <div className='text-4xl mb-6'>{service.icon}</div>
                  <h3 className='text-xl font-bold text-black mb-4 group-hover:text-gray-800 transition-colors'>
                    {service.title}
                  </h3>
                  <p className='text-gray-600 mb-6 leading-relaxed'>{service.description}</p>
                  <Link
                    href={
                      locale === 'fr'
                        ? `/services/${service.serviceType}`
                        : `/${locale}/services/${service.serviceType}`
                    }
                    className='text-black hover:text-gray-700 font-semibold inline-flex items-center group-hover:translate-x-1 transition-all'>
                    En savoir plus
                    <svg
                      className='w-4 h-4 ml-2'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Why Choose Us Section */}
        <Section
          id='why-choose-us'
          className='py-20 bg-gradient-to-br from-[#DBE2EF] via-[#F9F7FF] to-white'
          contentWidth='wide'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6'>
                {content.whyChooseUs.title}
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                {content.whyChooseUs.subtitle}
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {content.whyChooseUs.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={CARD_ANIMATION.initial}
                  animate={isServicesInView ? CARD_ANIMATION.animate : CARD_ANIMATION.initial}
                  transition={CARD_ANIMATION.transition(index)}
                  className='bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300'>
                  <div className='text-4xl mb-4'>{item.icon}</div>
                  <h3 className='text-xl font-bold text-black mb-3'>{item.title}</h3>
                  <p className='text-gray-600'>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* FAQ Section */}
        <Section id='faq' className='py-20 bg-gradient-to-br from-gray-50 via-white to-[#F9F7FF]' contentWidth='wide'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6'>
                {content.faq.title}
              </h2>
              <p className='text-xl text-gray-600'>{content.faq.subtitle}</p>
            </div>

            <div className='space-y-8'>
              {content.faq.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={CARD_ANIMATION.initial}
                  animate={isServicesInView ? CARD_ANIMATION.animate : CARD_ANIMATION.initial}
                  transition={CARD_ANIMATION.transition(index)}
                  className={`${cardStyles.card} p-8`}>
                  <h3 className='text-xl font-bold text-black mb-4'>{item.question}</h3>
                  <p className='text-gray-600'>{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section
          id='cta'
          className='py-20 bg-gradient-to-br from-black to-gray-800 text-white'
          contentWidth='wide'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>{content.cta.title}</h2>
            <p className='text-xl mb-8 opacity-90'>{content.cta.subtitle}</p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              {content.cta.buttons.map((button, index) => (
                <CTAButton
                  key={index}
                  href={locale === 'fr' ? button.href : `/${locale}${button.href}`}
                  variant={button.variant === 'primary' ? 'primary' : 'secondary'}
                  size='lg'
                  className={
                    button.variant === 'primary'
                      ? 'bg-white text-black hover:bg-gray-100 border-white'
                      : 'border-white text-white hover:bg-white/10'
                  }>
                  {button.text}
                </CTAButton>
              ))}
            </div>
          </div>
        </Section>
      </main>
    </ViewportHeightProvider>
  )
}

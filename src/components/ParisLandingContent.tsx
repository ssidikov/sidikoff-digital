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
            question: 'How much does it cost to create a professional website in Paris?',
            answer:
              'Website creation costs in Paris range from €800 to €15,000 depending on your project: showcase website (€800-€4,000), e-commerce site (€3,000-€8,000), or custom development (€5,000-€15,000). We offer free personalized quotes with an audit of your specific needs and Parisian competition. Contact our Paris web agency for your detailed estimate within 24h.',
          },
          {
            question: 'How long does it take to create my website with a Parisian agency?',
            answer:
              'Average website creation time in Paris is 4 to 8 weeks depending on complexity. Showcase site: 3-4 weeks, e-commerce site: 6-8 weeks, custom development: 8-12 weeks. Our geographical proximity in Paris allows us to accelerate exchanges and validations. We guarantee weekly follow-up and delivery within agreed deadlines.',
          },
          {
            question: 'Will my site be well ranked on Google Paris?',
            answer:
              'Yes, all our sites integrate local SEO optimization for Paris from creation. We optimize for geo-localized searches ("your sector + Paris"), create your Google My Business listing, and integrate strategic keywords for your Parisian market. On average, our clients see a 60% improvement in their local visibility within the first 3 months after going live.',
          },
          {
            question: 'Do you offer maintenance and technical support in Paris?',
            answer:
              'Absolutely! We offer a premium maintenance service with intervention within 2h for our Parisian clients. Included: daily backups, security updates, 24/7 monitoring, and reactive technical support. Our Paris-based team ensures proximity service with possibility of in-person meetings if necessary.',
          },
          {
            question: 'Can I manage my website myself after delivery?',
            answer:
              'Yes, we use intuitive CMS (WordPress, or custom according to your needs) with complete training included. You can easily modify texts, images, prices, and add content. We also offer personalized 2-hour in-person training in Paris to make you totally autonomous in the daily management of your site.',
          },
          {
            question: 'What types of websites do you create for Parisian businesses?',
            answer:
              'We specialize in all types of web projects: showcase sites for craftsmen and professionals, e-commerce sites for shops, institutional sites for companies, and custom solutions. We have particular expertise for thriving sectors in Paris: restaurants, lawyers, doctors, architects, and startups. Each project includes responsive design and mobile-first optimization.',
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
            question: 'Сколько стоит создание профессионального сайта в Париже?',
            answer:
              'Стоимость создания сайта в Париже варьируется от €800 до €15,000 в зависимости от проекта: сайт-визитка (€800-€4,000), интернет-магазин (€3,000-€8,000), или индивидуальная разработка (€5,000-€15,000). Мы предлагаем бесплатные персонализированные расчеты с аудитом ваших специфических потребностей и парижской конкуренции. Обратитесь к нашему веб-агентству в Париже для получения подробной оценки в течение 24 часов.',
          },
          {
            question: 'Сколько времени занимает создание сайта с парижским агентством?',
            answer:
              'Среднее время создания сайта в Париже составляет от 4 до 8 недель в зависимости от сложности. Сайт-визитка: 3-4 недели, интернет-магазин: 6-8 недель, индивидуальная разработка: 8-12 недель. Наша географическая близость в Париже позволяет ускорить обмен информацией и согласования. Мы гарантируем еженедельный контроль и соблюдение согласованных сроков.',
          },
          {
            question: 'Будет ли мой сайт хорошо ранжироваться в Google Париж?',
            answer:
              'Да, все наши сайты интегрируют локальную SEO-оптимизацию для Парижа с момента создания. Мы оптимизируем для геолокализованных поисков ("ваша сфера + Париж"), создаем профиль Google My Business и интегрируем стратегические ключевые слова для вашего парижского рынка. В среднем наши клиенты наблюдают улучшение местной видимости на 60% в первые 3 месяца после запуска.',
          },
          {
            question: 'Предлагаете ли вы техническую поддержку и обслуживание в Париже?',
            answer:
              'Абсолютно! Мы предлагаем премиум-сервис обслуживания с вмешательством в течение 2 часов для наших парижских клиентов. Включено: ежедневные резервные копии, обновления безопасности, мониторинг 24/7 и оперативная техническая поддержка. Наша команда в Париже обеспечивает близкий сервис с возможностью личных встреч при необходимости.',
          },
          {
            question: 'Смогу ли я управлять сайтом самостоятельно после запуска?',
            answer:
              'Да, мы используем интуитивные CMS (WordPress или индивидуальные решения в зависимости от ваших потребностей) с полным обучением. Вы сможете легко изменять тексты, изображения, цены и добавлять контент. Мы также предлагаем персонализированное 2-часовое очное обучение в Париже, чтобы сделать вас полностью автономными в ежедневном управлении сайтом.',
          },
          {
            question: 'Какие типы сайтов вы создаете для парижских предприятий?',
            answer:
              'Мы специализируемся на всех типах веб-проектов: сайты-визитки для ремесленников и специалистов, интернет-магазины для торговли, институциональные сайты для компаний и индивидуальные решения. У нас есть особая экспертиза для процветающих секторов в Париже: рестораны, юристы, врачи, архитекторы и стартапы. Каждый проект включает адаптивный дизайн и mobile-first оптимизацию.',
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
            question: "Combien coûte la création d'un site internet professionnel à Paris ?",
            answer:
              'Les tarifs pour créer un site internet à Paris varient de 900€ TTC à 15 000€ selon le type de projet : site vitrine (900€ TTC-4 000€), site e-commerce (3 000€-8 000€), ou développement sur-mesure (5 000€-15 000€). Nous proposons des devis gratuits personnalisés avec un audit de vos besoins spécifiques et de votre concurrence parisienne. Contactez notre agence web Paris pour obtenir votre estimation détaillée sous 24h.',
          },
          {
            question: 'Quel délai pour créer mon site web avec une agence parisienne ?',
            answer:
              "Le délai moyen pour la création d'un site internet à Paris est de 4 à 8 semaines selon la complexité. Site vitrine : 3-4 semaines, site e-commerce : 6-8 semaines, développement sur-mesure : 8-12 semaines. Notre proximité géographique à Paris nous permet d'accélérer les échanges et validations. Nous garantissons un suivi hebdomadaire et une livraison dans les délais convenus.",
          },
          {
            question: 'Mon site sera-t-il bien référencé sur Google Paris ?',
            answer:
              "Oui, tous nos sites intègrent une optimisation SEO locale Paris dès la création. Nous optimisons pour les recherches géolocalisées ('votre secteur + Paris'), créons votre fiche Google My Business, et intégrons les mots-clés stratégiques de votre marché parisien. En moyenne, nos clients observent une amélioration de 60% de leur visibilité locale dans les 3 premiers mois après mise en ligne.",
          },
          {
            question: 'Proposez-vous la maintenance et le support technique à Paris ?',
            answer:
              'Absolument ! Nous offrons un service de maintenance premium avec intervention sous 2h pour nos clients parisiens. Inclus : sauvegardes quotidiennes, mises à jour de sécurité, monitoring 24/7, et support technique réactif. Notre équipe basée à Paris assure un service de proximité avec possibilité de rendez-vous en personne si nécessaire.',
          },
          {
            question: 'Puis-je gérer mon site internet moi-même après la livraison ?',
            answer:
              'Oui, nous utilisons des CMS intuitifs (WordPress, ou sur-mesure selon vos besoins) avec une formation complète incluse. Vous pourrez facilement modifier textes, images, tarifs, et ajouter du contenu. Nous proposons également une formation personnalisée de 2h en présentiel à Paris pour vous rendre totalement autonome sur la gestion quotidienne de votre site.',
          },
          {
            question: 'Quels types de sites web créez-vous pour les entreprises parisiennes ?',
            answer:
              'Nous sommes spécialisés dans tous types de projets web : sites vitrines pour artisans et professions libérales, sites e-commerce pour boutiques, sites institutionnels pour entreprises, et solutions sur-mesure. Nous avons une expertise particulière pour les secteurs porteurs à Paris : restaurants, avocats, médecins, architectes, et startups. Chaque projet inclut design responsive et optimisation mobile-first.',
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
          className='relative overflow-hidden bg-linear-to-br from-[#DBE2EF] via-[#F9F7FF] to-white'>
          {/* Background Pattern */}
          <div className='absolute inset-0 bg-[url("/images/hero-illustration.svg")] bg-no-repeat bg-top-right opacity-5'></div>

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
                        <span className='bg-linear-to-r from-black to-gray-700 bg-clip-text text-transparent'>
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
                  <div className='absolute inset-0 bg-linear-to-tr from-black/20 to-transparent rounded-2xl'></div>
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
        <Section
          id='services'
          className='py-20 bg-linear-to-b from-white to-gray-50'
          contentWidth='wide'>
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
          className='py-20 bg-linear-to-br from-[#DBE2EF] via-[#F9F7FF] to-white'
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
        <Section
          id='faq'
          className='py-20 bg-linear-to-br from-gray-50 via-white to-[#F9F7FF]'
          contentWidth='wide'>
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
          className='py-20 bg-linear-to-br from-black to-gray-800 text-white'
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

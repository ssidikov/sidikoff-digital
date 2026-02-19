import { Metadata } from 'next'
import { Locale } from '@/lib/i18n'
import {
  createCanonicalUrl,
  generateAlternateUrls,
  generateFAQStructuredData,
  generateBreadcrumbStructuredData,
} from '@/lib/seo-utils'

import CaluireLandingContent, { VilleurbannContent } from '@/components/CaluireLandingContent'

// ─── Types ──────────────────────────────────────────────────────────────────────

interface PageProps {
  params: Promise<{ locale: Locale }>
}

// ─── SEO Slug (same across locales, route is locale-prefixed) ────────────────

const PAGE_PATH = 'services/creation-site-web-caluire-et-cuire'
const SITE_URL = 'https://sidikoff.com'

// ─── Content Data ───────────────────────────────────────────────────────────────

const seoContent = {
  fr: {
    title: 'Création site web Caluire-et-Cuire | Développeur freelance premium – SIDIKOFF DIGITAL',
    description:
      'Développeur web freelance à Caluire-et-Cuire (69300). Création de sites vitrines, e-commerce, refonte et SEO technique. Devis gratuit sous 24h.',
    keywords: [
      'création site web caluire',
      'développeur web caluire-et-cuire',
      'site internet caluire',
      'freelance web caluire',
      'agence web caluire',
      'création site vitrine caluire',
      'site e-commerce caluire',
      'refonte site web caluire',
      'seo caluire-et-cuire',
      'développeur freelance lyon',
      'création site internet lyon métropole',
      'webmaster caluire',
      'développeur react caluire',
      'site web professionnel caluire 69300',
    ],
  },
  en: {
    title: 'Web Development Caluire-et-Cuire | Premium Freelance Developer – SIDIKOFF DIGITAL',
    description:
      'Freelance web developer in Caluire-et-Cuire (69300), Lyon area. Showcase sites, e-commerce, redesign & technical SEO. Free quote within 24h.',
    keywords: [
      'web development caluire',
      'web developer caluire',
      'website creation caluire',
      'freelance developer lyon',
      'web agency caluire',
      'e-commerce caluire',
      'seo caluire',
      'website redesign caluire',
      'react developer lyon',
      'professional website caluire 69300',
    ],
  },
  ru: {
    title: 'Создание сайтов Калюир-э-Кюир | Премиум фриланс-разработчик – SIDIKOFF DIGITAL',
    description:
      'Фриланс веб-разработчик в Калюир-э-Кюир (69300), Лион. Сайты-визитки, интернет-магазины, редизайн, техническое SEO. Бесплатная консультация.',
    keywords: [
      'создание сайтов калюир',
      'веб-разработчик калюир',
      'создание сайта калюир',
      'фриланс разработчик лион',
      'веб-агентство калюир',
      'интернет-магазин калюир',
      'сео калюир',
      'редизайн сайта калюир',
      'react разработчик лион',
    ],
  },
}

const faqData = {
  fr: [
    {
      question: 'Combien coûte la création d\u2019un site web à Caluire-et-Cuire ?',
      answer:
        'Le tarif dépend du type de projet. Un site vitrine démarre à partir de 1 500 €, un site e-commerce à partir de 3 000 €. Je vous envoie un devis détaillé et gratuit sous 24 h après notre premier échange.',
    },
    {
      question: 'Quel est le délai de livraison d\u2019un site internet à Caluire ?',
      answer:
        'Un site vitrine est livré en 3 à 5 semaines. Un projet e-commerce ou sur mesure peut nécessiter 6 à 10 semaines. Chaque planning est défini ensemble en amont.',
    },
    {
      question:
        'Pourquoi choisir un développeur freelance à Caluire-et-Cuire plutôt qu\u2019une agence ?',
      answer:
        'Un freelance vous offre un interlocuteur unique, des tarifs compétitifs et une grande réactivité. Basé dans la métropole de Lyon, je me déplace pour nos rendez-vous à Caluire et ses environs.',
    },
    {
      question: 'Mon site sera-t-il bien référencé sur Google à Caluire ?',
      answer:
        'Oui, chaque site est conçu avec le SEO technique intégré : balises sémantiques, vitesse de chargement optimisée, données structurées et mots-clés géolocalisés pour Caluire, Lyon et la métropole.',
    },
    {
      question: 'Proposez-vous la maintenance après la mise en ligne ?',
      answer:
        'Absolument. Je propose des forfaits de maintenance incluant mises à jour de sécurité, sauvegardes, monitoring de performance et support technique réactif.',
    },
    {
      question: 'Quelles technologies utilisez-vous pour créer des sites web ?',
      answer:
        'J\u2019utilise des technologies modernes et performantes : React, Next.js, TypeScript et Tailwind CSS. Cela garantit des sites rapides, sécurisés et facilement évolutifs.',
    },
    {
      question: 'Créez-vous des sites web pour tous les quartiers de Caluire ?',
      answer:
        'Oui, j\u2019interviens dans toute la commune de Caluire-et-Cuire : Le Bourg, Cuire le Bas, Cuire le Haut, Montessuy, Saint-Clair, Vassieux et les communes limitrophes.',
    },
    {
      question: 'Quelle est la différence entre un freelance et une agence web à Caluire ?',
      answer:
        'Un freelance offre un interlocuteur unique, des tarifs compétitifs (pas de frais de structure), une réactivité sous 24h et des technologies modernes (React, Next.js). Une agence implique souvent plusieurs intermédiaires, des délais plus longs et un coût 50 à 100% supérieur.',
    },
  ],
  en: [
    {
      question: 'How much does website creation cost in Caluire-et-Cuire?',
      answer:
        'Pricing depends on project scope. Showcase websites start at €1,500, e-commerce at €3,000. I provide a free, detailed quote within 24 hours after our initial discussion.',
    },
    {
      question: 'What is the delivery timeline for a website in Caluire?',
      answer:
        'A showcase site takes 3 to 5 weeks. E-commerce or custom projects may require 6 to 10 weeks. Every timeline is defined together in advance.',
    },
    {
      question: 'Why choose a freelance developer in Caluire over an agency?',
      answer:
        'A freelancer gives you a single point of contact, competitive rates, and fast responsiveness. Based in the Lyon metropolitan area, I meet clients in Caluire and surrounding areas.',
    },
    {
      question: 'Will my website rank well on Google in Caluire?',
      answer:
        'Yes. Every site is built with technical SEO baked in: semantic markup, optimized load speed, structured data, and geo-targeted keywords for Caluire and Lyon métropole.',
    },
    {
      question: 'Do you offer maintenance after launch?',
      answer:
        'Absolutely. I offer maintenance packages including security updates, backups, performance monitoring, and responsive technical support.',
    },
    {
      question: 'What technologies do you use to build websites?',
      answer:
        'I use modern, high-performance technologies: React, Next.js, TypeScript, and Tailwind CSS. This ensures fast, secure, and easily scalable websites.',
    },
    {
      question: 'Do you build websites for all neighborhoods of Caluire?',
      answer:
        'Yes, I work across all of Caluire-et-Cuire: Le Bourg, Cuire le Bas, Cuire le Haut, Montessuy, Saint-Clair, Vassieux, and neighboring areas.',
    },
    {
      question: 'What is the difference between a freelancer and a web agency as Caluire?',
      answer:
        'A freelancer offers a single point of contact, competitive rates (no overhead costs), sub-24h responsiveness, and modern technologies (React, Next.js). An agency often involves multiple intermediaries, longer timelines, and 50-100% higher costs.',
    },
  ],
  ru: [
    {
      question: 'Сколько стоит создание сайта в Калюир-э-Кюир?',
      answer:
        'Стоимость зависит от типа проекта. Сайт-визитка — от 1 500 €, интернет-магазин — от 3 000 €. Бесплатный и подробный расчёт — в течение 24 часов после первого общения.',
    },
    {
      question: 'Какие сроки разработки сайта в Калюире?',
      answer:
        'Сайт-визитка занимает 3–5 недель. E-commerce или индивидуальный проект — 6–10 недель. Сроки согласовываются заранее.',
    },
    {
      question: 'Почему выбрать фрилансера в Калюире, а не агентство?',
      answer:
        'Фрилансер — это единый контакт, конкурентные цены и высокая оперативность. Я нахожусь в метрополии Лиона и встречаюсь с клиентами в Калюир-э-Кюир и окрестностях.',
    },
    {
      question: 'Будет ли мой сайт хорошо индексироваться в Google по Калюиру?',
      answer:
        'Да. Каждый сайт создаётся с техническим SEO: семантическая разметка, оптимизация скорости, структурированные данные и геотаргетированные ключевые слова для Калюира и Лиона.',
    },
    {
      question: 'Вы предлагаете поддержку после запуска?',
      answer:
        'Обязательно. Я предлагаю пакеты поддержки: обновления безопасности, резервное копирование, мониторинг производительности и быструю техническую помощь.',
    },
    {
      question: 'Какие технологии вы используете?',
      answer:
        'Я использую современные производительные технологии: React, Next.js, TypeScript и Tailwind CSS — для быстрых, безопасных и масштабируемых сайтов.',
    },
    {
      question: 'Вы создаёте сайты для всех районов Калюира?',
      answer:
        'Да, я работаю по всему Калюиру: Ле Бур, Кюир-ле-Ба, Кюир-ле-О, Монтессюи, Сен-Клер, Васьё и соседние коммуны.',
    },
    {
      question: 'Чем фрилансер отличается от веб-агентства в Калюире?',
      answer:
        'Фрилансер — это единый контакт, конкурентные цены (без накладных расходов), ответ в течение 24 часов и современные технологии (React, Next.js). Агентство часто означает нескольких посредников, более длительные сроки и стоимость на 50-100% выше.',
    },
  ],
}

// ─── generateMetadata ───────────────────────────────────────────────────────────

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const content = seoContent[locale]
  const alternates = generateAlternateUrls(PAGE_PATH)
  const canonical = createCanonicalUrl(PAGE_PATH, locale)

  return {
    title: content.title,
    description: content.description,
    keywords: content.keywords,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical,
      languages: {
        'fr-FR': alternates.fr,
        'en-US': alternates.en,
        'ru-RU': alternates.ru,
        'x-default': alternates.fr,
      },
    },
    openGraph: {
      title: content.title,
      description: content.description,
      type: 'website',
      locale: locale === 'fr' ? 'fr_FR' : locale === 'en' ? 'en_US' : 'ru_RU',
      url: canonical,
      siteName: 'SIDIKOFF DIGITAL',
      images: [
        {
          url: `${SITE_URL}/images/og/default.jpg`,
          width: 1200,
          height: 630,
          alt: content.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.description,
      images: [`${SITE_URL}/images/og/default.jpg`],
      creator: '@sidikoffdigital',
    },
  }
}

// ─── JSON-LD Schemas ────────────────────────────────────────────────────────────

function getStructuredData(locale: Locale) {
  const canonical = createCanonicalUrl(PAGE_PATH, locale)

  const professionalService = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}#LocalBusiness-caluire`,
    name: 'SIDIKOFF DIGITAL – Développeur Web Freelance à Caluire-et-Cuire',
    description:
      locale === 'fr'
        ? 'Développeur web freelance spécialisé en création de sites internet à Caluire-et-Cuire et Lyon métropole. Sites vitrines, e-commerce, SEO technique.'
        : locale === 'en'
          ? 'Freelance web developer specialized in website creation in Caluire-et-Cuire and Lyon metropolitan area. Showcase sites, e-commerce, technical SEO.'
          : 'Фриланс веб-разработчик, специализирующийся на создании сайтов в Калюир-э-Кюир и Лионской метрополии. Сайты-визитки, интернет-магазины, техническое SEO.',
    url: canonical,
    telephone: '+33626932734',
    email: 's.sidikoff@gmail.com',
    image: `${SITE_URL}/images/og/default.jpg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Caluire-et-Cuire',
      postalCode: '69300',
      addressRegion: 'Auvergne-Rhône-Alpes',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '45.7972',
      longitude: '4.8464',
    },
    areaServed: [
      { '@type': 'City', name: 'Caluire-et-Cuire' },
      { '@type': 'City', name: 'Lyon' },
      { '@type': 'AdministrativeArea', name: 'Lyon métropole' },
      { '@type': 'AdministrativeArea', name: 'Rhône' },
    ],
    serviceType: [
      'Création de site web',
      'Développement site vitrine',
      'Site e-commerce',
      'Refonte de site internet',
      'SEO technique',
      'Développement web sur mesure',
    ],
    priceRange: '€€',
    sameAs: [
      'https://github.com/ssidikov',
      'https://linkedin.com/in/sardorbeksidikov',
      'https://twitter.com/sidikoffdigital',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '20',
    },
    slogan: 'Votre transformation digitale à Caluire-et-Cuire',
    foundingDate: '2025',
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'SEO Technique',
      'Web Performance',
    ],
  }

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sardorbek SIDIKOV',
    jobTitle:
      locale === 'fr'
        ? 'Développeur Web Freelance'
        : locale === 'en'
          ? 'Freelance Web Developer'
          : 'Фриланс Веб-Разработчик',
    url: SITE_URL,
    worksFor: {
      '@type': 'Organization',
      name: 'SIDIKOFF DIGITAL',
    },
    sameAs: ['https://github.com/ssidikov', 'https://linkedin.com/in/sardorbeksidikov'],
    knowsAbout: ['React', 'Next.js', 'TypeScript', 'Node.js', 'SEO'],
  }

  const faqSchema = generateFAQStructuredData(faqData[locale])

  const breadcrumb = generateBreadcrumbStructuredData([
    {
      name: locale === 'fr' ? 'Accueil' : locale === 'en' ? 'Home' : 'Главная',
      url: createCanonicalUrl('', locale),
    },
    {
      name: 'Services',
      url: createCanonicalUrl('services', locale),
    },
    {
      name:
        locale === 'fr'
          ? 'Création site web Caluire-et-Cuire'
          : locale === 'en'
            ? 'Web Development Caluire-et-Cuire'
            : 'Создание сайтов Калюир-э-Кюир',
      url: canonical,
    },
  ])

  return [professionalService, person, faqSchema, breadcrumb]
}

// ─── Page Component ─────────────────────────────────────────────────────────────

export default async function CaluirePage({ params }: PageProps) {
  const { locale } = await params
  const faqs = faqData[locale]
  const structuredData = getStructuredData(locale)
  const t = getPageContent(locale)

  return (
    <CaluireLandingContent
      content={t}
      faqs={faqs}
      structuredData={structuredData}
      locale={locale}
    />
  )
}

// ─── Content per locale ─────────────────────────────────────────────────────────

function getPageContent(locale: Locale): VilleurbannContent {
  if (locale === 'en') {
    return {
      badge: 'Web Expert Caluire',
      h1Start: 'Professional Website Creation in ',
      h1City: 'Caluire',
      subtitle:
        'Freelance web developer based in the Lyon metropolitan area. I design high-performance, modern websites optimized for local SEO in Caluire-et-Cuire (69300).',
      cta1: 'Free Quote',
      cta2: 'View Projects',
      stat1: '20+',
      stat1Label: 'Projects Delivered',
      stat2: '2-4  wk',
      stat2Label: 'Average Timeline',
      stat3: '24/7',
      stat3Label: 'Support',
      servicesTitle: 'Web Development Services in Caluire-et-Cuire',
      servicesSubtitle:
        'Custom digital solutions for businesses, artisans, and freelancers in Caluire and Lyon metropolitan area.',
      services: [
        {
          icon: 'showcase',
          title: 'Showcase Website Caluire',
          desc: 'A professional showcase website to promote your business to clients in Caluire and the Lyon metropolitan area.',
          link: '/services/creation-sites-web',
        },
        {
          icon: 'ecommerce',
          title: 'High-Performance E-commerce',
          desc: 'Secure online store, product management, integrated payments and responsive design to sell online from Caluire.',
          link: '/services/creation-site-ecommerce',
        },
        {
          icon: 'custom',
          title: 'Custom Web Development',
          desc: 'Web applications, API integrations, custom CMS and solutions tailored to your specific business needs.',
          link: '/services/creation-sites-web',
        },
        {
          icon: 'seo',
          title: 'Technical SEO Caluire',
          desc: 'Optimized local SEO to rank your site for queries targeting Caluire-et-Cuire, Lyon and the Auvergne-Rhône-Alpes region.',
          link: '/services/optimisation-seo',
        },
        {
          icon: 'redesign',
          title: 'Website Redesign',
          desc: 'Modernize your existing site: new design, better performance, secure migration and SEO improvement.',
          link: '/services/refonte-sites-web',
        },
        {
          icon: 'maintenance',
          title: 'Maintenance & Support',
          desc: 'Ongoing monitoring, security updates, automatic backups and responsive technical support.',
          link: '/services/maintenance-support',
        },
      ],
      pricingTitle: 'Transparent Pricing',
      pricingSubtitle:
        'Clear rates with no hidden fees. Every project includes SEO, responsive design and post-launch support.',
      pricingTiers: [
        {
          name: 'Showcase Site',
          price: 'From €1,500',
          timeline: '2-4  weeks',
          features: [
            'Custom responsive design',
            'Technical SEO integrated',
            'CMS for easy management',
            'SSL & performance optimization',
            'Post-launch training',
          ],
        },
        {
          name: 'E-commerce',
          price: 'From €3,000',
          timeline: '6-10 weeks',
          featured: true,
          features: [
            'Full online store',
            'Secure payment integration',
            'Product catalog management',
            'Local SEO optimization',
            'Analytics dashboard',
            '3 months support',
          ],
        },
        {
          name: 'Custom Project',
          price: 'On quote',
          timeline: '8-12 weeks',
          features: [
            'API integration',
            'Custom functionalities',
            'Dedicated architecture',
            'Advanced performance',
            'Priority support',
          ],
        },
      ],
      pricingCta: 'Request Quote',
      pricingPopular: '\u2605 Most Popular',
      processTitle: 'Our Collaboration Process',
      processSubtitle: 'A proven methodology to deliver your project under the best conditions.',
      processSteps: [
        {
          step: '01',
          title: 'Discovery & Audit',
          desc: 'Analysis of your needs, market and competitors in Caluire.',
        },
        {
          step: '02',
          title: 'Development',
          desc: 'Clean and performant coding with React and Next.js.',
        },
        {
          step: '03',
          title: 'Testing & Optimization',
          desc: 'Quality control, SEO and cross-browser performance.',
        },
        {
          step: '04',
          title: 'Launch & Support',
          desc: 'Go-live, training and ongoing maintenance.',
        },
      ],
      ctaTitle: 'Ready to launch your web project in Caluire?',
      ctaSubtitle:
        'Get a free, detailed quote within 24 hours and start your digital transformation.',
      ctaBtn1: 'Free Quote',
      ctaBtn2: 'Contact Me',
      learnMore: 'Learn more',
    }
  }

  if (locale === 'ru') {
    return {
      badge: 'Веб-эксперт Калюир',
      h1Start: 'Создание сайтов в ',
      h1City: 'Калюир-э-Кюир',
      subtitle:
        'Фриланс веб-разработчик в метрополии Лиона. Создаю высокопроизводительные, современные сайты, оптимизированные для локального SEO в Калюире (69300).',
      cta1: 'Бесплатный расчёт',
      cta2: 'Наши работы',
      stat1: '20+',
      stat1Label: 'Проектов',
      stat2: '2-4  нед',
      stat2Label: 'Средний срок',
      stat3: '24/7',
      stat3Label: 'Поддержка',
      servicesTitle: 'Услуги создания сайтов в Калюире',
      servicesSubtitle:
        'Индивидуальные цифровые решения для бизнеса, ремесленников и предпринимателей Калюира и метрополии Лиона.',
      services: [
        {
          icon: 'showcase',
          title: 'Сайт-витрина Калюир',
          desc: 'Профессиональный сайт для продвижения вашего бизнеса среди клиентов Калюира и метрополии Лиона.',
          link: '/services/creation-sites-web',
        },
        {
          icon: 'ecommerce',
          title: 'Интернет-магазин',
          desc: 'Безопасный онлайн-магазин, управление товарами, интеграция платежей и адаптивный дизайн.',
          link: '/services/creation-site-ecommerce',
        },
        {
          icon: 'custom',
          title: 'Разработка под заказ',
          desc: 'Веб-приложения, интеграция API, кастомные CMS и решения под ваши задачи.',
          link: '/services/creation-sites-web',
        },
        {
          icon: 'seo',
          title: 'Техническое SEO Калюир',
          desc: 'Локальное SEO для позиционирования по запросам Калюира, Лиона и региона.',
          link: '/services/optimisation-seo',
        },
        {
          icon: 'redesign',
          title: 'Редизайн сайта',
          desc: 'Модернизация существующего сайта: новый дизайн, лучшая производительность и SEO.',
          link: '/services/refonte-sites-web',
        },
        {
          icon: 'maintenance',
          title: 'Поддержка и обслуживание',
          desc: 'Мониторинг, обновления безопасности, резервные копии и техническая поддержка.',
          link: '/services/maintenance-support',
        },
      ],
      pricingTitle: 'Прозрачные цены',
      pricingSubtitle:
        'Понятные тарифы без скрытых платежей. Каждый проект включает SEO, адаптивный дизайн и поддержку.',
      pricingTiers: [
        {
          name: 'Сайт-визитка',
          price: 'От €1 500',
          timeline: '2-4  недель',
          features: [
            'Индивидуальный дизайн',
            'Техническое SEO',
            'CMS для управления',
            'SSL и оптимизация',
            'Обучение после запуска',
          ],
        },
        {
          name: 'Интернет-магазин',
          price: 'От €3 000',
          timeline: '6-10 недель',
          featured: true,
          features: [
            'Полноценный магазин',
            'Безопасная оплата',
            'Управление каталогом',
            'Локальное SEO',
            'Аналитика',
            '3 месяца поддержки',
          ],
        },
        {
          name: 'Кастомный проект',
          price: 'По запросу',
          timeline: '8-12 недель',
          features: [
            'Интеграция API',
            'Кастомный функционал',
            'Выделенная архитектура',
            'Продвинутая оптимизация',
            'Приоритетная поддержка',
          ],
        },
      ],
      pricingCta: 'Запросить расчёт',
      pricingPopular: '\u2605 Популярный',
      processTitle: 'Процесс сотрудничества',
      processSubtitle: 'Проверенная методология для реализации вашего проекта.',
      processSteps: [
        {
          step: '01',
          title: 'Аудит и анализ',
          desc: 'Анализ потребностей, рынка и конкурентов в Калюире.',
        },
        {
          step: '02',
          title: 'Разработка',
          desc: 'Чистый и производительный код на React и Next.js.',
        },
        { step: '03', title: 'Тестирование', desc: 'Контроль качества, SEO и кросс-браузерность.' },
        {
          step: '04',
          title: 'Запуск и поддержка',
          desc: 'Публикация, обучение и текущее обслуживание.',
        },
      ],
      ctaTitle: 'Готовы запустить ваш веб-проект в Калюире?',
      ctaSubtitle:
        'Получите бесплатный подробный расчёт в течение 24 часов и начните цифровую трансформацию.',
      ctaBtn1: 'Бесплатный расчёт',
      ctaBtn2: 'Связаться со мной',
      learnMore: 'Подробнее',
    }
  }

  // Fallback to FR
  return {
    badge: 'Expert Web Caluire',
    h1Start: 'Création de sites internet à ',
    h1City: 'Caluire-et-Cuire',
    subtitle:
      'Développeur web freelance basé dans la métropole de Lyon. Je conçois des sites vitrines et e-commerce modernes, performants et optimisés pour le SEO local à Caluire-et-Cuire.',
    cta1: 'Devis Gratuit',
    cta2: 'Voir les projets',
    stat1: '20+',
    stat1Label: 'Projets livrés',
    stat2: '2-4  sem',
    stat2Label: 'Délai moyen',
    stat3: '7j/7',
    stat3Label: 'Support',
    servicesTitle: 'Services de création web à Caluire',
    servicesSubtitle:
      'Des solutions digitales sur mesure pour les entreprises, artisans et indépendants de Caluire et du Grand Lyon.',
    services: [
      {
        icon: 'showcase',
        title: 'Site Vitrine Caluire',
        desc: 'Un site internet professionnel pour valoriser votre activité auprès de vos clients à Caluire et Lyon métropole.',
        link: '/services/creation-sites-web',
      },
      {
        icon: 'ecommerce',
        title: 'E-commerce Performant',
        desc: 'Boutique en ligne sécurisée, gestion de produits, paiements intégrés et design vendeur pour vendre depuis Caluire.',
        link: '/services/creation-site-ecommerce',
      },
      {
        icon: 'custom',
        title: 'Développement Sur Mesure',
        desc: 'Applications web, intégrations API, CMS personnalisé et fonctionnalités spécifiques à votre métier.',
        link: '/services/creation-sites-web',
      },
      {
        icon: 'seo',
        title: 'SEO Technique Caluire',
        desc: 'Référencement local optimisé pour positionner votre site sur les requêtes ciblant Caluire et la région.',
        link: '/services/optimisation-seo',
      },
      {
        icon: 'redesign',
        title: 'Refonte de Site Web',
        desc: 'Modernisez votre site actuel : nouveau design, meilleures performances, migration sécurisée et gain de positions.',
        link: '/services/refonte-sites-web',
      },
      {
        icon: 'maintenance',
        title: 'Maintenance & Support',
        desc: 'Suivi régulier, mises à jour de sécurité, sauvegardes automatiques et assistance technique réactive.',
        link: '/services/maintenance-support',
      },
    ],
    pricingTitle: 'Une tarification transparente',
    pricingSubtitle:
      'Des forfaits clairs, sans frais cachés. Chaque projet inclut le SEO, le design responsive et le support post-livraison.',
    pricingTiers: [
      {
        name: 'Site Vitrine',
        price: 'Dès 1 500 €',
        timeline: '3 à 5 semaines',
        features: [
          'Design responsive sur mesure',
          'SEO technique intégré',
          'CMS pour gérer vos contenus',
          'Sécurisation SSL & performance',
          'Formation à l’utilisation',
        ],
      },
      {
        name: 'E-commerce',
        price: 'Dès 3 000 €',
        timeline: '6 à 10 semaines',
        featured: true,
        features: [
          'Boutique complète',
          'Paiement sécurisé intégré',
          'Gestion catalogue & stocks',
          'Optimisation SEO local',
          'Tableau de bord analytics',
          '3 mois de support inclus',
        ],
      },
      {
        name: 'Projet Sur Mesure',
        price: 'Sur devis',
        timeline: '8 à 12 semaines',
        features: [
          'Intégration d’API externes',
          'Fonctionnalités complexes',
          'Architecture dédiée',
          'Performance avancée',
          'Support prioritaire',
        ],
      },
    ],
    pricingCta: 'Demander un devis',
    pricingPopular: '\u2605 Populaire',
    processTitle: 'Notre process de collaboration',
    processSubtitle:
      'Une méthodologie éprouvée pour livrer votre projet dans les meilleures conditions.',
    processSteps: [
      {
        step: '01',
        title: 'Audit & Découverte',
        desc: 'Analyse de vos besoins, de votre marché et de la concurrence à Caluire.',
      },
      {
        step: '02',
        title: 'Développement',
        desc: 'Codage propre et performant respectant les standards (React, Next.js).',
      },
      {
        step: '03',
        title: 'Recette & Optimisation',
        desc: 'Tests complets, vérification SEO, performance et compatibilité mobile.',
      },
      {
        step: '04',
        title: 'Mise en ligne',
        desc: 'Déploiement sécurisé, formation à l’administration et suivi.',
      },
    ],
    ctaTitle: 'Prêt à lancer votre projet web à Caluire ?',
    ctaSubtitle:
      'Obtenez un devis détaillé gratuitement sous 24h et démarrez votre transformation digitale.',
    ctaBtn1: 'Devis Gratuit',
    ctaBtn2: 'Me contacter',
    learnMore: 'En savoir plus',
  }
}

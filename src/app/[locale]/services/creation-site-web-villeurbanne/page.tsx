import { Metadata } from 'next'
import { Locale } from '@/lib/i18n'
import {
  createCanonicalUrl,
  generateAlternateUrls,
  generateFAQStructuredData,
  generateBreadcrumbStructuredData,
} from '@/lib/seo-utils'

import VilleurbanneLandingContent from '@/components/VilleurbanneLandingContent'

// ─── Types ──────────────────────────────────────────────────────────────────────

interface VilleurbannPageProps {
  params: Promise<{ locale: Locale }>
}

// ─── SEO Slug (same across locales, route is locale-prefixed) ────────────────

const PAGE_PATH = 'services/creation-site-web-villeurbanne'
const SITE_URL = 'https://sidikoff.com'

// ─── Content Data ───────────────────────────────────────────────────────────────

const seoContent = {
  fr: {
    title: 'Création site web à Villeurbanne | Développeur freelance premium – SIDIKOFF DIGITAL',
    description:
      'Développeur web freelance à Villeurbanne (69100). Création de sites vitrines, e-commerce, refonte et SEO technique. Devis gratuit sous 24h.',
    keywords: [
      'création site web villeurbanne',
      'développeur web villeurbanne',
      'site internet villeurbanne',
      'freelance web villeurbanne',
      'agence web villeurbanne',
      'création site vitrine villeurbanne',
      'site e-commerce villeurbanne',
      'refonte site web villeurbanne',
      'seo villeurbanne',
      'développeur freelance lyon',
      'création site internet lyon métropole',
      'webmaster villeurbanne',
      'développeur react villeurbanne',
      'site web professionnel villeurbanne 69100',
    ],
  },
  en: {
    title: 'Web Development Villeurbanne | Premium Freelance Developer – SIDIKOFF DIGITAL',
    description:
      'Freelance web developer in Villeurbanne (69100), Lyon area. Showcase sites, e-commerce, redesign & technical SEO. Free quote within 24h.',
    keywords: [
      'web development villeurbanne',
      'web developer villeurbanne',
      'website creation villeurbanne',
      'freelance developer lyon',
      'web agency villeurbanne',
      'e-commerce villeurbanne',
      'seo villeurbanne',
      'website redesign villeurbanne',
      'react developer lyon',
      'professional website villeurbanne 69100',
    ],
  },
  ru: {
    title: 'Создание сайтов Вильюрбан | Премиум фриланс-разработчик – SIDIKOFF DIGITAL',
    description:
      'Фриланс веб-разработчик в Вильюрбане (69100), Лион. Сайты-визитки, интернет-магазины, редизайн, техническое SEO. Бесплатная консультация.',
    keywords: [
      'создание сайтов вильюрбан',
      'веб-разработчик вильюрбан',
      'создание сайта вильюрбан',
      'фриланс разработчик лион',
      'веб-агентство вильюрбан',
      'интернет-магазин вильюрбан',
      'сео вильюрбан',
      'редизайн сайта вильюрбан',
      'react разработчик лион',
    ],
  },
}

const faqData = {
  fr: [
    {
      question: 'Combien coûte la création d\u2019un site web à Villeurbanne ?',
      answer:
        'Le tarif dépend du type de projet. Un site vitrine démarre à partir de 1 500 €, un site e-commerce à partir de 3 000 €. Je vous envoie un devis détaillé et gratuit sous 24 h après notre premier échange.',
    },
    {
      question: 'Quel est le délai de livraison d\u2019un site internet à Villeurbanne ?',
      answer:
        'Un site vitrine est livré en 3 à 5 semaines. Un projet e-commerce ou sur mesure peut nécessiter 6 à 10 semaines. Chaque planning est défini ensemble en amont.',
    },
    {
      question:
        'Pourquoi choisir un développeur freelance à Villeurbanne plutôt qu\u2019une agence ?',
      answer:
        'Un freelance vous offre un interlocuteur unique, des tarifs compétitifs et une grande réactivité. Basé dans la métropole de Lyon, je me déplace pour nos rendez-vous à Villeurbanne et ses environs.',
    },
    {
      question: 'Mon site sera-t-il bien référencé sur Google à Villeurbanne ?',
      answer:
        'Oui, chaque site est conçu avec le SEO technique intégré : balises sémantiques, vitesse de chargement optimisée, données structurées et mots-clés géolocalisés pour Villeurbanne et Lyon métropole.',
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
      question: 'Créez-vous des sites web pour tous les quartiers de Villeurbanne ?',
      answer:
        'Oui, j\u2019interviens dans toute la commune de Villeurbanne : Gratte-ciel, Tonkin, Charpennes, Cusset, Les Buers, Flachet, La Doua et les quartiers limitrophes comme Bron, Vaulx-en-Velin et Caluire-et-Cuire.',
    },
    {
      question: 'Quelle est la différence entre un freelance et une agence web à Villeurbanne ?',
      answer:
        'Un freelance offre un interlocuteur unique, des tarifs compétitifs (pas de frais de structure), une réactivité sous 24h et des technologies modernes (React, Next.js). Une agence implique souvent plusieurs intermédiaires, des délais plus longs et un coût 50 à 100% supérieur.',
    },
  ],
  en: [
    {
      question: 'How much does website creation cost in Villeurbanne?',
      answer:
        'Pricing depends on project scope. Showcase websites start at €1,500, e-commerce at €3,000. I provide a free, detailed quote within 24 hours after our initial discussion.',
    },
    {
      question: 'What is the delivery timeline for a website in Villeurbanne?',
      answer:
        'A showcase site takes 3 to 5 weeks. E-commerce or custom projects may require 6 to 10 weeks. Every timeline is defined together in advance.',
    },
    {
      question: 'Why choose a freelance developer in Villeurbanne over an agency?',
      answer:
        'A freelancer gives you a single point of contact, competitive rates, and fast responsiveness. Based in the Lyon metropolitan area, I meet clients in Villeurbanne and surrounding areas.',
    },
    {
      question: 'Will my website rank well on Google in Villeurbanne?',
      answer:
        'Yes. Every site is built with technical SEO baked in: semantic markup, optimized load speed, structured data, and geo-targeted keywords for Villeurbanne and Lyon métropole.',
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
      question: 'Do you build websites for all neighborhoods of Villeurbanne?',
      answer:
        'Yes, I work across all of Villeurbanne: Gratte-ciel, Tonkin, Charpennes, Cusset, Les Buers, Flachet, La Doua, and neighboring areas like Bron, Vaulx-en-Velin, and Caluire-et-Cuire.',
    },
    {
      question: 'What is the difference between a freelancer and a web agency in Villeurbanne?',
      answer:
        'A freelancer offers a single point of contact, competitive rates (no overhead costs), sub-24h responsiveness, and modern technologies (React, Next.js). An agency often involves multiple intermediaries, longer timelines, and 50-100% higher costs.',
    },
  ],
  ru: [
    {
      question: 'Сколько стоит создание сайта в Вильюрбане?',
      answer:
        'Стоимость зависит от типа проекта. Сайт-визитка — от 1 500 €, интернет-магазин — от 3 000 €. Бесплатный и подробный расчёт — в течение 24 часов после первого общения.',
    },
    {
      question: 'Какие сроки разработки сайта в Вильюрбане?',
      answer:
        'Сайт-визитка занимает 3–5 недель. E-commerce или индивидуальный проект — 6–10 недель. Сроки согласовываются заранее.',
    },
    {
      question: 'Почему выбрать фрилансера в Вильюрбане, а не агентство?',
      answer:
        'Фрилансер — это единый контакт, конкурентные цены и высокая оперативность. Я нахожусь в метрополии Лиона и встречаюсь с клиентами в Вильюрбане и окрестностях.',
    },
    {
      question: 'Будет ли мой сайт хорошо индексироваться в Google по Вильюрбану?',
      answer:
        'Да. Каждый сайт создаётся с техническим SEO: семантическая разметка, оптимизация скорости, структурированные данные и геотаргетированные ключевые слова для Вильюрбана и Лиона.',
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
      question: 'Вы создаёте сайты для всех районов Вильюрбана?',
      answer:
        'Да, я работаю по всему Вильюрбану: Грат-Сьель, Тонкен, Шарпенн, Кюссе, Ле Бюэр, Флаше, Ла Дуа, а также в ближайших районах — Брон, Во-ан-Велен, Калюир-э-Кюир.',
    },
    {
      question: 'Чем фрилансер отличается от веб-агентства в Вильюрбане?',
      answer:
        'Фрилансер — это единый контакт, конкурентные цены (без накладных расходов), ответ в течение 24 часов и современные технологии (React, Next.js). Агентство часто означает нескольких посредников, более длительные сроки и стоимость на 50-100% выше.',
    },
  ],
}

// ─── generateMetadata ───────────────────────────────────────────────────────────

export async function generateMetadata({ params }: VilleurbannPageProps): Promise<Metadata> {
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
          url: `${SITE_URL}/images/og/creation-site-web-villeurbanne.jpg`,
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
      images: [`${SITE_URL}/images/og/creation-site-web-villeurbanne.jpg`],
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
    '@id': `${SITE_URL}#LocalBusiness-villeurbanne`,
    name: 'SIDIKOFF DIGITAL – Développeur Web Freelance à Villeurbanne',
    description:
      locale === 'fr'
        ? 'Développeur web freelance spécialisé en création de sites internet à Villeurbanne et Lyon métropole. Sites vitrines, e-commerce, SEO technique.'
        : locale === 'en'
          ? 'Freelance web developer specialized in website creation in Villeurbanne and Lyon metropolitan area. Showcase sites, e-commerce, technical SEO.'
          : 'Фриланс веб-разработчик, специализирующийся на создании сайтов в Вильюрбане и Лионской метрополии. Сайты-визитки, интернет-магазины, техническое SEO.',
    url: canonical,
    telephone: '+33626932734',
    email: 's.sidikoff@gmail.com',
    image: `${SITE_URL}/images/og/creation-site-web-villeurbanne.jpg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Villeurbanne',
      postalCode: '69100',
      addressRegion: 'Auvergne-Rhône-Alpes',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '45.7667',
      longitude: '4.8799',
    },
    areaServed: [
      { '@type': 'City', name: 'Villeurbanne' },
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
    slogan: 'Votre transformation digitale à Villeurbanne',
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
          ? 'Création site web Villeurbanne'
          : locale === 'en'
            ? 'Web Development Villeurbanne'
            : 'Создание сайтов Вильюрбан',
      url: canonical,
    },
  ])

  return [professionalService, person, faqSchema, breadcrumb]
}

// ─── Page Component ─────────────────────────────────────────────────────────────

export default async function VilleurbannePage({ params }: VilleurbannPageProps) {
  const { locale } = await params
  const faqs = faqData[locale]
  const structuredData = getStructuredData(locale)
  const t = getPageContent(locale)

  return (
    <VilleurbanneLandingContent
      content={t}
      faqs={faqs}
      structuredData={structuredData}
      locale={locale}
    />
  )
}

// ─── Content per locale ─────────────────────────────────────────────────────────

function getPageContent(locale: Locale) {
  if (locale === 'en') {
    return {
      badge: 'Web Expert Villeurbanne',
      h1Start: 'Professional Website Creation in ',
      h1City: 'Villeurbanne',
      subtitle:
        'Freelance web developer based in the Lyon metropolitan area. I design high-performance, modern websites optimized for local SEO in Villeurbanne (69100).',
      cta1: 'Free Quote',
      cta2: 'View Projects',
      stat1: '75+',
      stat1Label: 'Projects Delivered',
      stat2: '3-5 wk',
      stat2Label: 'Average Timeline',
      stat3: '24/7',
      stat3Label: 'Support',
      servicesTitle: 'Web Development Services in Villeurbanne',
      servicesSubtitle:
        'Custom digital solutions for businesses, artisans, and freelancers in Villeurbanne and Lyon metropolitan area.',
      services: [
        {
          icon: 'showcase',
          title: 'Showcase Website Villeurbanne',
          desc: 'A professional showcase website to promote your business to clients in Villeurbanne and the Lyon metropolitan area.',
          link: '/services/creation-sites-web',
        },
        {
          icon: 'ecommerce',
          title: 'High-Performance E-commerce',
          desc: 'Secure online store, product management, integrated payments and responsive design to sell online from Villeurbanne.',
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
          title: 'Technical SEO Villeurbanne',
          desc: 'Optimized local SEO to rank your site for queries targeting Villeurbanne, Lyon and the Auvergne-Rhône-Alpes region.',
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
          timeline: '3-5 weeks',
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
      whyTitle: 'Why Choose Me in Villeurbanne?',
      whySubtitle: 'Premium technical expertise and hands-on support for your digital project.',
      whyItems: [
        {
          title: 'Local Proximity',
          desc: 'Based in the Lyon metropolitan area, I meet clients in Villeurbanne for close follow-up.',
        },
        {
          title: 'Maximum Performance',
          desc: 'Ultra-fast websites with 95+ Lighthouse scores, optimized for Core Web Vitals.',
        },
        {
          title: 'Advanced Technical SEO',
          desc: 'SEO integrated from design: structured data, semantic markup, geo-targeted keywords.',
        },
        {
          title: 'Modern & Premium Design',
          desc: 'Elegant, responsive interfaces designed to convert your visitors into clients.',
        },
        {
          title: 'Modern Technologies',
          desc: 'React, Next.js, TypeScript — technologies ensuring security, scalability and maintainability.',
        },
        {
          title: 'Dedicated Support',
          desc: 'A single point of contact from brief to launch. Transparent communication guaranteed.',
        },
      ],
      comparisonTitle: 'Freelancer vs. Agency',
      comparisonHeaders: ['Criteria', 'Freelancer', 'Agency'],
      comparisonRows: [
        ['Pricing', 'Competitive, no overhead', '50-100% higher'],
        ['Communication', 'Single direct contact', 'Multiple intermediaries'],
        ['Responsiveness', '< 24h on average', '48-72h on average'],
        ['Technologies', 'React, Next.js (modern)', 'Often WordPress/legacy'],
        ['Flexibility', 'High, tailored approach', 'Standardized processes'],
      ],
      processTitle: 'Our Collaboration Process',
      processSubtitle: 'A proven methodology to deliver your project under the best conditions.',
      processSteps: [
        {
          step: '01',
          title: 'Discovery & Audit',
          desc: 'Analysis of your needs, market and competitors in Villeurbanne.',
        },
        {
          step: '02',
          title: 'Design & Prototype',
          desc: 'Creation of mockups and validation of the visual direction.',
        },
        {
          step: '03',
          title: 'Development',
          desc: 'Clean and performant coding with React and Next.js.',
        },
        {
          step: '04',
          title: 'Testing & Optimization',
          desc: 'Quality control, SEO and cross-browser performance.',
        },
        {
          step: '05',
          title: 'Launch & Support',
          desc: 'Go-live, training and ongoing maintenance.',
        },
      ],
      trustTitle: 'Proven Results',
      trustSubtitle: 'Measurable performance for my Villeurbanne and Lyon clients.',
      trustItems: [
        {
          metric: '95+',
          label: 'Lighthouse Score',
          desc: 'Average performance across all projects',
        },
        {
          metric: '< 24h',
          label: 'Response Time',
          desc: 'Reactivity guaranteed for every request',
        },
        { metric: '5/5', label: 'Client Rating', desc: 'Satisfaction based on 20+ reviews' },
        {
          metric: '75+',
          label: 'Projects Delivered',
          desc: 'Showcase sites, e-commerce, custom apps',
        },
      ],
      quartiersTitle: 'Web Developer for All of Villeurbanne',
      quartiersText:
        'I work across all of <strong>Villeurbanne</strong> and its neighborhoods, offering website creation, redesign and SEO optimization services for local businesses.',
      quartiersNearby:
        'I also serve nearby cities in the <strong>Lyon metropolitan area</strong>, ensuring proximity service and in-person meetings.',
      quartiersLabel: 'Villeurbanne Neighborhoods',
      quartiersList: [
        'Gratte-ciel',
        'Tonkin',
        'Charpennes',
        'Cusset',
        'Les Buers',
        'Flachet',
        'La Doua',
        'Croix-Luizet',
      ],
      quartiersProximity: 'Nearby Cities',
      quartiersNearbyList: [
        'Lyon',
        'Bron',
        'Vaulx-en-Velin',
        'Caluire-et-Cuire',
        'Décines-Charpieu',
        'Rillieux-la-Pape',
      ],
      faqTitle: 'FAQ — Website Creation Villeurbanne',
      ctaTitle: 'Ready to launch your web project?',
      ctaSubtitle:
        'Get a free, detailed quote within 24 hours and start your digital transformation in Villeurbanne.',
      ctaBtn1: 'Free Quote',
      ctaBtn2: 'Contact Me',
      learnMore: 'Learn more',
    }
  }

  if (locale === 'ru') {
    return {
      badge: 'Веб-эксперт Вильюрбан',
      h1Start: 'Создание сайтов в ',
      h1City: 'Вильюрбане',
      subtitle:
        'Фриланс веб-разработчик в метрополии Лиона. Создаю высокопроизводительные, современные сайты, оптимизированные для локального SEO в Вильюрбане (69100).',
      cta1: 'Бесплатный расчёт',
      cta2: 'Наши работы',
      stat1: '75+',
      stat1Label: 'Проектов',
      stat2: '3-5 нед',
      stat2Label: 'Средний срок',
      stat3: '24/7',
      stat3Label: 'Поддержка',
      servicesTitle: 'Услуги создания сайтов в Вильюрбане',
      servicesSubtitle:
        'Индивидуальные цифровые решения для бизнеса, ремесленников и предпринимателей Вильюрбана и метрополии Лиона.',
      services: [
        {
          icon: 'showcase',
          title: 'Сайт-витрина Вильюрбан',
          desc: 'Профессиональный сайт для продвижения вашего бизнеса среди клиентов Вильюрбана и метрополии Лиона.',
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
          title: 'Техническое SEO Вильюрбан',
          desc: 'Локальное SEO для позиционирования по запросам Вильюрбана, Лиона и региона.',
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
          timeline: '3-5 недель',
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
      whyTitle: 'Почему выбрать меня в Вильюрбане?',
      whySubtitle: 'Премиум техническая экспертиза и персональное сопровождение вашего проекта.',
      whyItems: [
        {
          title: 'Местная близость',
          desc: 'Базируюсь в метрополии Лиона, встречаюсь с клиентами в Вильюрбане.',
        },
        {
          title: 'Максимальная производительность',
          desc: 'Сверхбыстрые сайты с оценкой Lighthouse 95+.',
        },
        {
          title: 'Продвинутое техническое SEO',
          desc: 'SEO с момента разработки: данные, разметка, геоключевые слова.',
        },
        {
          title: 'Современный дизайн',
          desc: 'Элегантные адаптивные интерфейсы для конверсии посетителей.',
        },
        {
          title: 'Современные технологии',
          desc: 'React, Next.js, TypeScript — безопасность и масштабируемость.',
        },
        { title: 'Персональная поддержка', desc: 'Единый контакт от брифа до запуска.' },
      ],
      comparisonTitle: 'Фрилансер vs Агентство',
      comparisonHeaders: ['Критерий', 'Фрилансер', 'Агентство'],
      comparisonRows: [
        ['Стоимость', 'Конкурентная', 'На 50-100% выше'],
        ['Коммуникация', 'Прямой контакт', 'Несколько посредников'],
        ['Скорость ответа', '< 24 часов', '48-72 часа'],
        ['Технологии', 'React, Next.js', 'Часто WordPress'],
        ['Гибкость', 'Высокая', 'Стандартные процессы'],
      ],
      processTitle: 'Процесс сотрудничества',
      processSubtitle: 'Проверенная методология для реализации вашего проекта.',
      processSteps: [
        {
          step: '01',
          title: 'Аудит и анализ',
          desc: 'Анализ потребностей, рынка и конкурентов в Вильюрбане.',
        },
        {
          step: '02',
          title: 'Дизайн и прототип',
          desc: 'Создание макетов и утверждение визуального направления.',
        },
        {
          step: '03',
          title: 'Разработка',
          desc: 'Чистый и производительный код на React и Next.js.',
        },
        { step: '04', title: 'Тестирование', desc: 'Контроль качества, SEO и кросс-браузерность.' },
        {
          step: '05',
          title: 'Запуск и поддержка',
          desc: 'Публикация, обучение и текущее обслуживание.',
        },
      ],
      trustTitle: 'Подтверждённые результаты',
      trustSubtitle: 'Измеримая эффективность для клиентов Вильюрбана и Лиона.',
      trustItems: [
        { metric: '95+', label: 'Lighthouse', desc: 'Средняя оценка производительности' },
        { metric: '< 24ч', label: 'Время ответа', desc: 'Гарантированная оперативность' },
        { metric: '5/5', label: 'Оценка клиентов', desc: 'На основе 20+ отзывов' },
        { metric: '75+', label: 'Проектов', desc: 'Визитки, магазины, приложения' },
      ],
      quartiersTitle: 'Веб-разработчик для всего Вильюрбана',
      quartiersText:
        'Я работаю по всему <strong>Вильюрбану</strong> и его районам, предлагая услуги создания сайтов, редизайна и SEO-оптимизации.',
      quartiersNearby:
        'Также обслуживаю ближайшие города <strong>метрополии Лиона</strong> с возможностью личных встреч.',
      quartiersLabel: 'Районы Вильюрбана',
      quartiersList: [
        'Грат-Сьель',
        'Тонкен',
        'Шарпенн',
        'Кюссе',
        'Ле Бюэр',
        'Флаше',
        'Ла Дуа',
        'Круа-Люизе',
      ],
      quartiersProximity: 'Ближайшие города',
      quartiersNearbyList: [
        'Лион',
        'Брон',
        'Во-ан-Велен',
        'Калюир-э-Кюир',
        'Десин-Шарпьё',
        'Рийё-ла-Пап',
      ],
      faqTitle: 'Часто задаваемые вопросы',
      ctaTitle: 'Готовы запустить ваш проект?',
      ctaSubtitle:
        'Получите бесплатный расчёт в течение 24 часов и начните цифровую трансформацию.',
      ctaBtn1: 'Бесплатный расчёт',
      ctaBtn2: 'Связаться',
      learnMore: 'Подробнее',
    }
  }

  // French (default)
  return {
    badge: 'Expert Web Villeurbanne',
    h1Start: 'Création de site web à ',
    h1City: 'Villeurbanne',
    subtitle:
      'Développeur web freelance basé dans la métropole de Lyon. Je conçois des sites internet performants, modernes et optimisés pour le référencement local à Villeurbanne (69100).',
    cta1: 'Devis gratuit',
    cta2: 'Voir les réalisations',
    stat1: '75+',
    stat1Label: 'Projets livrés',
    stat2: '3-5 sem',
    stat2Label: 'Délai moyen',
    stat3: '24/7',
    stat3Label: 'Support',
    servicesTitle: 'Services de création de site web à Villeurbanne',
    servicesSubtitle:
      'Des solutions digitales sur mesure pour les entreprises, artisans et indépendants de Villeurbanne et Lyon métropole.',
    services: [
      {
        icon: 'showcase',
        title: 'Site vitrine à Villeurbanne',
        desc: 'Un site vitrine professionnel pour valoriser votre activité auprès de vos clients à Villeurbanne et dans la métropole de Lyon.',
        link: '/services/creation-sites-web',
      },
      {
        icon: 'ecommerce',
        title: 'Site e-commerce performant',
        desc: 'Boutique en ligne sécurisée, gestion des produits, paiement intégré et design responsive pour vendre en ligne depuis Villeurbanne.',
        link: '/services/creation-site-ecommerce',
      },
      {
        icon: 'custom',
        title: 'Développement web sur mesure',
        desc: 'Applications web, intégrations API, CMS personnalisés et solutions adaptées aux besoins spécifiques de votre entreprise.',
        link: '/services/creation-sites-web',
      },
      {
        icon: 'seo',
        title: 'SEO technique Villeurbanne',
        desc: 'Référencement local optimisé pour positionner votre site sur les requêtes ciblant Villeurbanne, Lyon et la région Auvergne-Rhône-Alpes.',
        link: '/services/optimisation-seo',
      },
      {
        icon: 'redesign',
        title: 'Refonte de site internet',
        desc: 'Modernisation de votre site existant : nouveau design, meilleure performance, migration sécurisée et amélioration du SEO.',
        link: '/services/refonte-sites-web',
      },
      {
        icon: 'maintenance',
        title: 'Maintenance & support',
        desc: 'Suivi continu, mises à jour de sécurité, sauvegardes automatiques et assistance technique réactive.',
        link: '/services/maintenance-support',
      },
    ],
    pricingTitle: 'Tarifs transparents',
    pricingSubtitle:
      'Des tarifs clairs, sans frais cachés. Chaque projet inclut le SEO, le design responsive et le support post-lancement.',
    pricingTiers: [
      {
        name: 'Site Vitrine',
        price: 'À partir de 1 500 €',
        timeline: '3-5 semaines',
        features: [
          'Design responsive sur mesure',
          'SEO technique intégré',
          'CMS pour gestion facile',
          'SSL & optimisation performance',
          'Formation post-lancement',
        ],
      },
      {
        name: 'E-commerce',
        price: 'À partir de 3 000 €',
        timeline: '6-10 semaines',
        featured: true,
        features: [
          'Boutique complète',
          'Paiement sécurisé intégré',
          'Gestion de catalogue produits',
          'SEO local optimisé',
          'Tableau de bord analytics',
          '3 mois de support',
        ],
      },
      {
        name: 'Sur Mesure',
        price: 'Sur devis',
        timeline: '8-12 semaines',
        features: [
          'Intégration API',
          'Fonctionnalités personnalisées',
          'Architecture dédiée',
          'Performance avancée',
          'Support prioritaire',
        ],
      },
    ],
    pricingCta: 'Demander un devis',
    pricingPopular: '\u2605 Le plus populaire',
    whyTitle: 'Pourquoi me choisir à Villeurbanne ?',
    whySubtitle:
      'Une expertise technique premium et un accompagnement de proximité pour votre projet digital.',
    whyItems: [
      {
        title: 'Proximité locale',
        desc: 'Basé dans la métropole de Lyon, je me déplace à Villeurbanne pour nos rendez-vous et assure un suivi rapproché.',
      },
      {
        title: 'Performance maximale',
        desc: 'Sites ultra-rapides avec un score Lighthouse 95+, optimisés pour les Core Web Vitals.',
      },
      {
        title: 'SEO technique avancé',
        desc: 'Référencement intégré dès la conception : données structurées, balisage sémantique, mots-clés géolocalisés.',
      },
      {
        title: 'Design moderne & premium',
        desc: 'Interfaces élégantes et responsive, conçues pour convertir vos visiteurs en clients.',
      },
      {
        title: 'Technologies modernes',
        desc: 'React, Next.js, TypeScript — des technologies qui garantissent sécurité, scalabilité et maintenabilité.',
      },
      {
        title: 'Accompagnement dédié',
        desc: 'Un interlocuteur unique du brief à la mise en ligne. Communication transparente et réactivité garantie.',
      },
    ],
    comparisonTitle: 'Freelancer vs Agence à Villeurbanne',
    comparisonHeaders: ['Critère', 'Freelance', 'Agence'],
    comparisonRows: [
      ['Tarif', 'Compétitif, pas de frais de structure', '50 à 100 % plus cher'],
      ['Communication', 'Interlocuteur unique direct', 'Plusieurs intermédiaires'],
      ['Réactivité', '< 24h en moyenne', '48-72h en moyenne'],
      ['Technologies', 'React, Next.js (modernes)', 'Souvent WordPress/legacy'],
      ['Flexibilité', 'Élevée, approche sur mesure', 'Processus standardisés'],
    ],
    processTitle: 'Notre processus de collaboration',
    processSubtitle:
      'Une méthodologie éprouvée pour livrer votre projet dans les meilleures conditions.',
    processSteps: [
      {
        step: '01',
        title: 'Découverte & audit',
        desc: 'Analyse de vos besoins, de votre marché et de vos concurrents à Villeurbanne.',
      },
      {
        step: '02',
        title: 'Design & maquettes',
        desc: 'Création des maquettes et validation de la direction visuelle.',
      },
      {
        step: '03',
        title: 'Développement',
        desc: 'Codage propre et performant avec React et Next.js.',
      },
      {
        step: '04',
        title: 'Tests & optimisation',
        desc: 'Contrôle qualité, SEO et performance cross-navigateurs.',
      },
      {
        step: '05',
        title: 'Lancement & suivi',
        desc: 'Mise en ligne, formation et maintenance continue.',
      },
    ],
    trustTitle: 'Résultats prouvés',
    trustSubtitle: 'Des performances mesurables pour mes clients de Villeurbanne et Lyon.',
    trustItems: [
      {
        metric: '95+',
        label: 'Score Lighthouse',
        desc: 'Performance moyenne sur tous les projets',
      },
      {
        metric: '< 24h',
        label: 'Temps de réponse',
        desc: 'Réactivité garantie pour chaque demande',
      },
      { metric: '5/5', label: 'Note clients', desc: 'Satisfaction basée sur 20+ avis' },
      {
        metric: '75+',
        label: 'Projets livrés',
        desc: 'Sites vitrines, e-commerce, apps sur mesure',
      },
    ],
    quartiersTitle: 'Développeur web pour tout Villeurbanne',
    quartiersText:
      'J\u2019interviens dans tout <strong>Villeurbanne</strong> et ses quartiers, en proposant des services de création de site web, refonte et optimisation SEO pour les entreprises locales.',
    quartiersNearby:
      'Je couvre également les villes voisines de la <strong>métropole de Lyon</strong>, garantissant un service de proximité et des rendez-vous en personne.',
    quartiersLabel: 'Quartiers de Villeurbanne',
    quartiersList: [
      'Gratte-ciel',
      'Tonkin',
      'Charpennes',
      'Cusset',
      'Les Buers',
      'Flachet',
      'La Doua',
      'Croix-Luizet',
    ],
    quartiersProximity: 'Villes voisines',
    quartiersNearbyList: [
      'Lyon',
      'Bron',
      'Vaulx-en-Velin',
      'Caluire-et-Cuire',
      'Décines-Charpieu',
      'Rillieux-la-Pape',
    ],
    faqTitle: 'FAQ — Création site web Villeurbanne',
    ctaTitle: 'Prêt à lancer votre projet web ?',
    ctaSubtitle:
      'Obtenez un devis gratuit et détaillé sous 24 h et démarrez votre transformation digitale à Villeurbanne.',
    ctaBtn1: 'Devis gratuit',
    ctaBtn2: 'Me contacter',
    learnMore: 'En savoir plus',
  }
}

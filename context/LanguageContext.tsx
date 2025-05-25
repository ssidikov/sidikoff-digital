'use client'

import type React from 'react'
import { createContext, useContext, useState, useEffect } from 'react'

type Language = 'fr' | 'en' | 'ru'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

// Définition des traductions
type TranslationMap = {
  [key: string]: string
}

const translations: Record<Language, TranslationMap> = {
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.portfolio': 'Réalisations',
    'nav.about': 'À propos',
    'nav.prices': 'Services',
    'nav.contact': 'Contact',

    // Hero
    'hero.title1': 'Création de sites web et applications web',
    'hero.title2': ' pour la croissance de votre entreprise',
    'hero.description':
      'Nous aidons les entreprises à attirer des clients grâce à des sites performants, des applications modernes et des stratégies digitales efficaces.',
    'hero.slogan': 'Votre transformation digitale commence ici.',
    'hero.contact': 'Nous contacter',
    'hero.download': '',
    'hero.viewWork': 'Voir nos projets',

    // Expertise
    'expertise.title': 'Notre Expertise',
    'expertise.subtitle': 'Ce que nous proposons',
    'expertise.item1.title': 'Développement web',
    'expertise.item1.description':
      'Sites web performants, adaptatifs et construits avec des technologies de pointe.',
    'expertise.item2.title': 'UI & UX Design',
    'expertise.item2.description':
      'Designs intuitifs et esthétiques, pensés pour une expérience utilisateur optimale.',
    'expertise.item3.title': 'Branding & Logo',
    'expertise.item3.description':
      'Identité visuelle forte et cohérente pour valoriser votre marque.',
    'expertise.item4.title': 'Intégration API',
    'expertise.item4.description':
      'Connexion fluide entre l’interface utilisateur et vos services backend.',

    // About
    'about.title': 'À propos',
    'about.subtitle': 'Notre agence',
    'about.p1':
      "SIDIKOFF DIGITAL est une agence web basée à Paris. Nous accompagnons les entreprises, PME et associations dans la création de sites internet performants, évolutifs et centrés sur l'utilisateur. Notre approche est basée sur l'écoute, la qualité du code et la réussite de vos projets.",
    'about.p2':
      'Notre équipe allie expertise technique, créativité et sens du détail pour livrer des expériences digitales sur mesure.',

    // Technologies
    'tech.title': 'Technologies',
    'tech.suffix': 'Nous utilisons pour créer des sites web modernes et performants',

    // Portfolio
    'portfolio.title': 'Projets récents',
    'portfolio.subtitle': 'Nos réalisations',
    'portfolio.viewAll': 'Voir tout',
    'portfolio.viewDetails': 'Détails du projet',
    'portfolio.showMore': 'Afficher plus',
    'portfolio.viewProject': 'Accéder au site',
    'project.notFound': 'Projet non trouvé',

    // Tarifs
    'prices.title': 'Services',
    'prices.subtitle': 'Des solutions accessibles et sur mesure',
    'prices.description':
      'Des sites modernes et efficaces pour lancer, développer ou digitaliser votre activité.',
    'prices.tier1.name': 'Site Présence Simple',
    'prices.tier1.price': 'À partir de 500€',
    'prices.tier1.description': 'Idéal pour une présence en ligne rapide et rassurante.',
    'prices.tier1.feature1': 'Site one-page ou jusqu’à 3 pages',
    'prices.tier1.feature2': 'Design responsive et rapide',
    'prices.tier1.feature3': 'Présentation claire de vos services',
    'prices.tier1.feature4': 'Formulaire de contact intégré',
    'prices.tier1.feature5': 'Optimisation SEO de base',
    'prices.tier1.feature6': 'Mise en ligne sur votre hébergement',
    'prices.tier1.feature7': 'Design personnalisé',
    'prices.tier1.cta': 'Démarrer mon projet',
    'prices.tier2.name': 'Site Vitrine Pro',
    'prices.tier2.price': 'À partir de 900€',
    'prices.tier2.description':
      'Un site complet et professionnel pour développer votre visibilité.',
    'prices.tier2.feature1': 'Jusqu’à 6 pages personnalisées',
    'prices.tier2.feature2': 'Design moderne et structuré',
    'prices.tier2.feature3': 'Optimisation SEO sur chaque page',
    'prices.tier2.feature4': 'Blog ou portfolio simple (option)',
    'prices.tier2.feature5': 'Pages éditables avec CMS (option)',
    'prices.tier2.feature6': 'Suivi & conseils post-livraison (1 mois)',
    'prices.tier2.feature7': 'Connexion Google Analytics (si souhaité)',
    'prices.tier2.feature8': 'Performance mobile optimisée',
    'prices.tier2.feature9': 'Site évolutif',
    'prices.tier2.cta': 'Voir les détails',
    'prices.tier3.name': 'Site Business Premium',
    'prices.tier3.price': 'Sur devis',
    'prices.tier3.description': 'Une solution sur mesure pour votre croissance digitale.',
    'prices.tier3.feature1': 'Design premium avec identité visuelle forte',
    'prices.tier3.feature2': 'Structure narrative + pages stratégiques',
    'prices.tier3.feature3': 'SEO avancé (métadonnées, contenu, technique)',
    'prices.tier3.feature4': 'Performances optimisées',
    'prices.tier3.feature5': 'Pages 100% administrables avec CMS',
    'prices.tier3.feature6': 'Blog, portfolio ou landing pages inclus',
    'prices.tier3.feature7': 'Préparation à la publicité ou référencement payant',
    'prices.tier3.feature8': 'Assistance technique personnalisée (3 mois)',
    'prices.tier3.feature9': 'Formation à l’édition du site',
    'prices.tier3.feature10': 'Installation complète sur votre domaine',
    'prices.tier3.cta': 'Obtenir un devis',
    'prices.custom':
      'Vous avez un besoin spécifique ? Contactez-nous pour une solution personnalisée.',
    'prices.quote': 'Demander un devis',

    // Contact
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Discutons de votre projet',
    'contact.description':
      'Vous avez un projet web ? Parlons-en ! Notre équipe vous accompagne de l’idée à la mise en ligne : site vitrine, refonte, SEO, performance, accessibilité… Chaque projet est unique, et nous sommes là pour vous conseiller à chaque étape.',
    'contact.address': 'Paris, France',
    'contact.send': 'Demander un devis gratuit',
    'contact.firstName': 'Prénom',
    'contact.placeholder.firstName': 'Votre prénom',
    'contact.lastName': 'Nom',
    'contact.placeholder.lastName': 'Votre nom de famille',
    'contact.email': 'E-mail',
    'contact.placeholder.email': 'Votre adresse e-mail',
    'contact.phone': 'Téléphone',
    'contact.placeholder.phone': 'Votre numéro de téléphone',
    'contact.message': 'Message',
    'contact.placeholder.message': 'Votre message',
    'contact.sending': 'Envoi en cours...',

    // Form validation errors
    'validation.firstName.required': 'Le prénom est obligatoire',
    'validation.firstName.minLength': 'Le prénom doit contenir au moins 2 caractères',
    'validation.lastName.required': 'Le nom est obligatoire',
    'validation.lastName.minLength': 'Le nom doit contenir au moins 2 caractères',
    'validation.email.required': "L'adresse e-mail est obligatoire",
    'validation.email.invalid': 'Veuillez saisir une adresse e-mail valide',
    'validation.phone.required': 'Le numéro de téléphone est obligatoire',
    'validation.phone.invalid': 'Veuillez saisir un numéro de téléphone valide',
    'validation.tariff.required': 'Veuillez sélectionner un service',
    'validation.message.required': 'Le message est obligatoire',
    'validation.message.minLength': 'Le message doit contenir au moins 10 caractères',

    // Success popup messages
    'popup.success.title': 'Envoyé avec succès !',
    'popup.success.message':
      'Votre message a été envoyé avec succès. Nous vous répondrons bientôt !',

    // Footer
    'footer.rights':
      'SIDIKOFF DIGITAL — Agence Web à Paris. Création de sites internet sur mesure.',
  },
  en: {
    'nav.home': 'Home',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.prices': 'Services',
    'nav.contact': 'Contact',
    'hero.title1': 'Website & Web App Development',
    'hero.title2': ' for your business growth',
    'hero.description':
      'We help businesses attract clients with effective websites, modern web apps, and comprehensive digital strategies.',
    'hero.slogan': 'Your digital transformation starts here.',
    'hero.contact': 'Contact Us',
    'hero.viewWork': 'View Our Projects',
    'expertise.title': 'Our Expertise',
    'expertise.subtitle': 'What we offer',
    'expertise.item1.title': 'Web Development',
    'expertise.item1.description':
      'High-performance, adaptive websites built with cutting-edge technologies.',
    'expertise.item2.title': 'UI & UX Design',
    'expertise.item2.description': 'Intuitive and aesthetic designs for optimal user experience.',
    'expertise.item3.title': 'Branding & Logo',
    'expertise.item3.description': 'Strong and consistent visual identity to enhance your brand.',
    'expertise.item4.title': 'API Integration',
    'expertise.item4.description':
      'Seamless connection between user interface and your backend services.',
    'about.title': 'About',
    'about.subtitle': 'Our Agency',
    'about.p1':
      "SIDIKOFF DIGITAL is a web agency based in Paris. We help businesses, SMEs, and associations build high-performance, scalable, and user-centric websites. Our approach is based on listening, code quality, and your project's success.",
    'about.p2':
      'Our team combines technical expertise, creativity, and attention to detail to deliver impactful and tailor-made digital experiences.',
    'tech.title': 'Technologies',
    'tech.suffix': 'We use to build modern, high-performance websites',
    'portfolio.title': 'Recent Projects',
    'portfolio.subtitle': 'Our Work',
    'portfolio.viewAll': 'View All',
    'portfolio.viewDetails': 'Project Details',
    'portfolio.showMore': 'Show More',
    'portfolio.viewProject': 'Visit Site',
    'project.notFound': 'Project not found',
    'prices.title': 'Services',
    'prices.subtitle': 'Accessible and tailored solutions',
    'prices.description':
      'Modern and efficient websites to launch, grow, or digitize your business.',
    'prices.tier1.name': 'Simple Online Presence',
    'prices.tier1.price': 'From €500',
    'prices.tier1.description': 'Ideal for a fast and trustworthy online presence.',
    'prices.tier1.feature1': 'One-page site or up to 3 pages',
    'prices.tier1.feature2': 'Responsive and fast design',
    'prices.tier1.feature3': 'Clear presentation of your services',
    'prices.tier1.feature4': 'Integrated contact form',
    'prices.tier1.feature5': 'Basic SEO optimization',
    'prices.tier1.feature6': 'Deployment on your hosting',
    'prices.tier1.feature7': 'Custom design',
    'prices.tier1.cta': 'Start my project',
    'prices.tier2.name': 'Pro Showcase Site',
    'prices.tier2.price': 'From €900',
    'prices.tier2.description': 'A complete and professional site to boost your visibility.',
    'prices.tier2.feature1': 'Up to 6 custom pages',
    'prices.tier2.feature2': 'Modern and structured design',
    'prices.tier2.feature3': 'On-page SEO optimization',
    'prices.tier2.feature4': 'Simple blog or portfolio (optional)',
    'prices.tier2.feature5': 'CMS editable pages (optional)',
    'prices.tier2.feature6': 'Post-launch support & tips (1 month)',
    'prices.tier2.feature7': 'Google Analytics setup (if needed)',
    'prices.tier2.feature8': 'Optimized for mobile',
    'prices.tier2.feature9': 'Scalable site',
    'prices.tier2.cta': 'View details',
    'prices.tier3.name': 'Premium Business Website',
    'prices.tier3.price': 'On request',
    'prices.tier3.description': 'A tailor-made solution for your digital growth.',
    'prices.tier3.feature1': 'Premium design with strong branding',
    'prices.tier3.feature2': 'Narrative structure + strategic pages',
    'prices.tier3.feature3': 'Advanced SEO (meta, content, technical)',
    'prices.tier3.feature4': 'Optimized performance',
    'prices.tier3.feature5': '100% editable pages with CMS',
    'prices.tier3.feature6': 'Blog, portfolio or landing pages included',
    'prices.tier3.feature7': 'Ad-ready or paid search preparation',
    'prices.tier3.feature8': 'Personalized technical support (3 months)',
    'prices.tier3.feature9': 'Short training for site editing',
    'prices.tier3.feature10': 'Full installation on your domain',
    'prices.tier3.cta': 'Request a quote',
    'prices.custom': 'Need something specific? Contact us for a custom solution.',
    'prices.quote': 'Request a quote',
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Let’s discuss your project',
    'contact.description':
      "Do you have a web project? Let's talk! Our team supports you from idea to launch: showcase site, redesign, SEO, performance, accessibility... Every project is unique, and we are here to advise you at every step.",
    'contact.address': 'Paris, France',
    'contact.send': 'Request a free quote',
    'contact.firstName': 'First Name',
    'contact.placeholder.firstName': 'Your first name',
    'contact.lastName': 'Last Name',
    'contact.placeholder.lastName': 'Your last name',
    'contact.email': 'Email',
    'contact.placeholder.email': 'Your email address',
    'contact.phone': 'Phone',
    'contact.placeholder.phone': 'Your phone number',
    'contact.message': 'Message',
    'contact.placeholder.message': 'Your message',
    'contact.sending': 'Sending...',

    // Form validation errors
    'validation.firstName.required': 'First name is required',
    'validation.firstName.minLength': 'First name must be at least 2 characters',
    'validation.lastName.required': 'Last name is required',
    'validation.lastName.minLength': 'Last name must be at least 2 characters',
    'validation.email.required': 'Email address is required',
    'validation.email.invalid': 'Please enter a valid email address',
    'validation.phone.required': 'Phone number is required',
    'validation.phone.invalid': 'Please enter a valid phone number',
    'validation.tariff.required': 'Please select a service',
    'validation.message.required': 'Message is required',
    'validation.message.minLength': 'Message must be at least 10 characters',

    // Success popup messages
    'popup.success.title': 'Successfully Sent!',
    'popup.success.message':
      'Your message has been sent successfully. We will get back to you soon!',

    'footer.rights': 'SIDIKOFF DIGITAL — Web Agency in Paris. Custom website development.',
  },
  ru: {
    'nav.home': 'Главная',
    'nav.portfolio': 'Портфолио',
    'nav.about': 'О нас',
    'nav.prices': 'Услуги',
    'nav.contact': 'Контакты',
    'hero.title1': 'Создание веб-сайтов и веб-приложений',
    'hero.title2': ' для роста вашего бизнеса',
    'hero.description':
      'Помогаем бизнесу привлекать клиентов с помощью эффективных сайтов, современных веб-приложений и комплексных digital-стратегий.',
    'hero.slogan': 'Ваша цифровая трансформация начинается здесь.',
    'hero.contact': 'Связаться с нами',
    'hero.viewWork': 'Наши проекты',
    'expertise.title': 'Наша экспертиза',
    'expertise.subtitle': 'Что мы предлагаем',
    'expertise.item1.title': 'Веб-разработка',
    'expertise.item1.description':
      'Современные, быстрые и масштабируемые сайты на передовых технологиях.',
    'expertise.item2.title': 'UI и UX дизайн',
    'expertise.item2.description':
      'Интуитивные и эстетичные интерфейсы для лучшего пользовательского опыта.',
    'expertise.item3.title': 'Брендинг и логотип',
    'expertise.item3.description': 'Сильный и узнаваемый визуальный стиль для вашего бренда.',
    'expertise.item4.title': 'Интеграция API',
    'expertise.item4.description': 'Бесшовная интеграция интерфейса с вашими сервисами и API.',
    'about.title': 'О нас',
    'about.subtitle': 'Наше агентство',
    'about.p1':
      'SIDIKOFF DIGITAL — веб-агентство из Парижа. Мы помогаем компаниям, малому бизнесу и ассоциациям создавать эффективные, масштабируемые и ориентированные на пользователя сайты. Наш подход — это внимание, качество кода и успех вашего проекта.',
    'about.p2':
      'Наша команда сочетает техническую экспертизу, креативность и внимание к деталям для создания ярких digital-решений.',
    'tech.title': 'Технологии',
    'tech.suffix': 'Мы используем для создания современных и эффективных сайтов',
    'portfolio.title': 'Недавние проекты',
    'portfolio.subtitle': 'Наши работы',
    'portfolio.viewAll': 'Смотреть все',
    'portfolio.viewDetails': 'Подробнее о проекте',
    'portfolio.showMore': 'Показать ещё',
    'portfolio.viewProject': 'Перейти на сайт',
    'project.notFound': 'Проект не найден',
    'prices.title': 'Услуги',
    'prices.subtitle': 'Доступные и индивидуальные решения',
    'prices.description': 'Современные сайты для запуска, развития и цифровизации вашего бизнеса.',
    'prices.tier1.name': 'Сайт-визитка',
    'prices.tier1.price': 'от 500€',
    'prices.tier1.description': 'Идеально для быстрой и надёжной онлайн-презентации.',
    'prices.tier1.feature1': 'Одна страница или до 3 страниц',
    'prices.tier1.feature2': 'Адаптивный и быстрый дизайн',
    'prices.tier1.feature3': 'Чёткое описание услуг',
    'prices.tier1.feature4': 'Интегрированная форма связи',
    'prices.tier1.feature5': 'Базовая SEO-оптимизация',
    'prices.tier1.feature6': 'Публикация на вашем хостинге',
    'prices.tier1.feature7': 'Индивидуальный дизайн',
    'prices.tier1.cta': 'Запустить проект',
    'prices.tier2.name': 'Pro сайт для бизнеса',
    'prices.tier2.price': 'от 900€',
    'prices.tier2.description': 'Полноценный сайт для роста вашего бизнеса.',
    'prices.tier2.feature1': 'До 6 индивидуальных страниц',
    'prices.tier2.feature2': 'Современный и структурированный дизайн',
    'prices.tier2.feature3': 'SEO-оптимизация каждой страницы',
    'prices.tier2.feature4': 'Блог или портфолио (опция)',
    'prices.tier2.feature5': 'Редактируемые страницы через CMS (опция)',
    'prices.tier2.feature6': 'Поддержка и советы после запуска (1 месяц)',
    'prices.tier2.feature7': 'Установка Google Analytics (по желанию)',
    'prices.tier2.feature8': 'Оптимизация под мобильные устройства',
    'prices.tier2.feature9': 'Гибкая структура',
    'prices.tier2.cta': 'Подробнее',
    'prices.tier3.name': 'Premium сайт для бизнеса',
    'prices.tier3.price': 'По договорённости',
    'prices.tier3.description': 'Индивидуальное решение для цифрового роста.',
    'prices.tier3.feature1': 'Премиум-дизайн и фирменный стиль',
    'prices.tier3.feature2': 'Нарративная структура + стратегические страницы',
    'prices.tier3.feature3': 'Продвинутая SEO (мета, контент, техника)',
    'prices.tier3.feature4': 'Максимальная производительность',
    'prices.tier3.feature5': 'Полная редактируемость через CMS',
    'prices.tier3.feature6': 'Блог, портфолио или лендинги включены',
    'prices.tier3.feature7': 'Готовность к рекламе и продвижению',
    'prices.tier3.feature8': 'Персональная техподдержка (3 месяца)',
    'prices.tier3.feature9': 'Обучение по редактированию сайта',
    'prices.tier3.feature10': 'Полная установка на ваш домен',
    'prices.tier3.cta': 'Запросить предложение',
    'prices.custom': 'Нужен индивидуальный проект? Свяжитесь с нами для обсуждения.',
    'prices.quote': 'Запросить расчёт',
    'contact.title': 'Связаться с нами',
    'contact.subtitle': 'Обсудим ваш проект',
    'contact.description':
      'Есть идея для сайта? Давайте обсудим! Наша команда поможет реализовать проект от концепции до запуска: корпоративный сайт, редизайн, SEO, производительность, доступность... Каждый проект уникален, и мы готовы сопровождать вас на каждом этапе.',
    'contact.address': 'Париж, Франция',
    'contact.send': 'Запросить бесплатную консультацию',
    'contact.firstName': 'Имя',
    'contact.placeholder.firstName': 'Ваше имя',
    'contact.lastName': 'Фамилия',
    'contact.placeholder.lastName': 'Ваша фамилия',
    'contact.email': 'Электронная почта',
    'contact.placeholder.email': 'Ваш e-mail',
    'contact.phone': 'Телефон',
    'contact.placeholder.phone': 'Ваш номер телефона',
    'contact.message': 'Сообщение',
    'contact.placeholder.message': 'Ваше сообщение',
    'contact.sending': 'Отправка...',

    // Form validation errors
    'validation.firstName.required': 'Имя обязательно для заполнения',
    'validation.firstName.minLength': 'Имя должно содержать минимум 2 символа',
    'validation.lastName.required': 'Фамилия обязательна для заполнения',
    'validation.lastName.minLength': 'Фамилия должна содержать минимум 2 символа',
    'validation.email.required': 'Электронная почта обязательна для заполнения',
    'validation.email.invalid': 'Пожалуйста, введите корректный адрес электронной почты',
    'validation.phone.required': 'Номер телефона обязателен для заполнения',
    'validation.phone.invalid': 'Пожалуйста, введите корректный номер телефона',
    'validation.tariff.required': 'Пожалуйста, выберите услугу',
    'validation.message.required': 'Сообщение обязательно для заполнения',
    'validation.message.minLength': 'Сообщение должно содержать минимум 10 символов',

    // Success popup messages
    'popup.success.title': 'Успешно отправлено!',
    'popup.success.message': 'Ваше сообщение было успешно отправлено. Мы скоро свяжемся с вами!',

    'footer.rights': 'SIDIKOFF DIGITAL — Веб-агентство в Париже. Разработка сайтов под ключ.',
  },
}

// Функция для определения языка браузера и сопоставления с доступными языками
const detectBrowserLanguage = (): Language => {
  if (typeof window !== 'undefined' && navigator) {
    // Получаем язык браузера (например: 'fr', 'en-US', 'ru-RU')
    const browserLang = navigator.language.toLowerCase().split('-')[0]

    // Также проверяем список всех языков браузера
    const browserLanguages = navigator.languages || [navigator.language]

    // Проверяем каждый язык из списка браузера
    for (const lang of browserLanguages) {
      const langCode = lang.toLowerCase().split('-')[0]
      if (langCode === 'fr') return 'fr'
      if (langCode === 'ru') return 'ru'
      if (langCode === 'en') return 'en'
    }

    // Если не найден точный матч, используем первый язык
    if (browserLang === 'fr') return 'fr'
    if (browserLang === 'ru') return 'ru'

    // По умолчанию используем английский для всех остальных языков
    return 'en'
  }

  // Fallback для SSR (серверный рендеринг)
  return 'fr'
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'fr',
  setLanguage: () => {},
  t: (key: string) => key,
})

export const useLanguage = () => useContext(LanguageContext)

interface LanguageProviderProps {
  children: React.ReactNode
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('fr')
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Сначала проверяем сохраненный язык в localStorage
    const savedLanguage = localStorage.getItem('language') as Language

    if (savedLanguage && ['fr', 'en', 'ru'].includes(savedLanguage)) {
      // Если есть сохраненный язык, используем его
      setLanguage(savedLanguage)
    } else {
      // Если нет сохраненного языка, определяем язык браузера
      const browserLanguage = detectBrowserLanguage()
      setLanguage(browserLanguage)
      localStorage.setItem('language', browserLanguage)
    }

    setIsInitialized(true)
  }, [])

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  const t = (key: string): string => {
    return translations[language]?.[key] || key
  }

  // Показываем детей сразу, но с fallback языком до инициализации
  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

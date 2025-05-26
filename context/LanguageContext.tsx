'use client'

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react'

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
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.projects': 'Projets',

    // Hero
    'hero.badge': 'Agence Web Premium',
    'hero.title1': 'Création de sites web',
    'hero.title2': ' pour la croissance de votre entreprise',
    'hero.description':
      'Nous aidons les entreprises à attirer des clients grâce à des sites performants, des applications modernes et des stratégies digitales efficaces.',
    'hero.slogan': 'Votre transformation digitale commence ici.',
    'hero.contact': 'Nous contacter',
    'hero.download': '',
    'hero.viewWork': 'Voir nos projets',
    'hero.scroll': 'Découvrir',
    'hero.stat1': 'Projets',
    'hero.stat2': 'Satisfaction',
    'hero.stat3': 'Support',

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
      'Connexion fluide entre l’interface utilisateur et vos services backend.',    'expertise.cta': 'Démarrer votre projet',
    'expertise.stats.projects': 'Projets réalisés',
    'expertise.stats.satisfaction': 'Satisfaction client',
    'expertise.stats.support': 'Support technique',
    'expertise.learnMore': 'En savoir plus',
    // About
    'about.title': 'À propos',
    'about.subtitle': 'Notre agence',
    'about.sectionTitle': 'À Propos de SIDIKOFF DIGITAL',
    'about.sectionSubtitle':
      'Votre agence web parisienne spécialisée en création de sites internet et applications web modernes',
    'about.mission.title': 'Notre Mission',
    'about.mission.p1':
      "SIDIKOFF DIGITAL est une agence web basée à Paris, dédiée à accompagner les entreprises, PME et associations dans leur transformation digitale. Nous créons des sites internet performants, évolutifs et centrés sur l'utilisateur.",
    'about.mission.p2':
      "Notre approche est basée sur l'écoute, la qualité du code et la réussite de vos projets. Nous allions expertise technique, créativité et sens du détail pour livrer des expériences digitales sur mesure.",
    'about.expertise.title': 'Notre Expertise',
    'about.expertise.item1': 'Développement web moderne (React, Next.js, TypeScript)',
    'about.expertise.item2': 'Design UX/UI responsive et accessible',
    'about.expertise.item3': 'Optimisation SEO et performances',
    'about.expertise.item4': 'E-commerce et applications web',
    'about.expertise.item5': 'Maintenance et support technique',
    'about.expertise.item6': 'Stratégie digitale et conseil',
    'about.whyChoose.title': 'Pourquoi Choisir SIDIKOFF DIGITAL ?',
    'about.whyChoose.advantage1.title': 'Approche Personnalisée',
    'about.whyChoose.advantage1.description':
      'Chaque projet est unique et mérite une solution sur mesure',
    'about.whyChoose.advantage2.title': 'Performance Optimale',
    'about.whyChoose.advantage2.description':
      'Sites rapides, sécurisés et optimisés pour le référencement',
    'about.whyChoose.advantage3.title': 'Accompagnement Complet',
    'about.whyChoose.advantage3.description':
      'De la conception à la maintenance, nous restons à vos côtés',
    'about.location.title': 'Prêt à Transformer Votre Vision en Réalité ?',
    'about.location.description':
      'Nous accompagnons votre croissance digitale avec des solutions innovantes et sur mesure. Découvrez comment nous pouvons propulser votre projet vers le succès !',
    'about.location.cta1': 'Démarrer votre projet',
    'about.location.cta2': 'Découvrir nos réalisations',

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

    // Services
    'services.title': 'Services & Tarifs',
    'services.subtitle': 'Des solutions web accessibles et sur mesure pour votre entreprise',
    'services.showcase.title': 'Sites Vitrine',
    'services.showcase.description':
      'Sites élégants et professionnels pour présenter votre activité et attirer de nouveaux clients.',
    'services.showcase.feature1': 'Design responsive',
    'services.showcase.feature2': 'Optimisation SEO',
    'services.showcase.feature3': 'Formulaire de contact',
    'services.showcase.feature4': 'Hébergement inclus',
    'services.ecommerce.title': 'E-commerce',
    'services.ecommerce.description':
      'Boutiques en ligne performantes pour vendre vos produits et développer votre activité.',
    'services.ecommerce.feature1': 'Gestion des commandes',
    'services.ecommerce.feature2': 'Paiement sécurisé',
    'services.ecommerce.feature3': 'Gestion des stocks',
    'services.ecommerce.feature4': 'Analytics avancées',
    'services.webapp.title': 'Applications Web',
    'services.webapp.description':
      'Applications web sur mesure pour automatiser vos processus et améliorer votre productivité.',
    'services.webapp.feature1': 'Développement sur mesure',
    'services.webapp.feature2': 'Interface intuitive',
    'services.webapp.feature3': 'Base de données',
    'services.webapp.feature4': 'API & intégrations',
    'services.features': 'Fonctionnalités',
    'services.learnMore': 'En savoir plus',

    // FAQ
    'faq.title': 'Questions Fréquentes',
    'faq.question1': "Combien coûte la création d'un site web ?",
    'faq.answer1':
      'Nos tarifs commencent à 500€ pour un site vitrine simple. Le prix varie selon vos besoins spécifiques : nombre de pages, fonctionnalités, design personnalisé, etc. Nous proposons un devis gratuit et personnalisé.',
    'faq.question2': 'Combien de temps faut-il pour créer un site web ?',
    'faq.answer2':
      'Un site vitrine simple prend généralement 2-3 semaines. Pour un site plus complexe avec fonctionnalités avancées, comptez 4-8 semaines. Nous définissons ensemble un planning précis dès le début du projet.',
    'faq.question3': 'Proposez-vous la maintenance de sites web ?',
    'faq.answer3':
      'Oui, nous proposons des contrats de maintenance pour assurer la sécurité, les mises à jour et les sauvegardes de votre site. Nous offrons également un support technique et des conseils pour optimiser votre présence en ligne.',
    'faq.question4': 'Mes sites sont-ils optimisés pour le référencement SEO ?',
    'faq.answer4':
      'Absolument ! Tous nos sites sont conçus avec les bonnes pratiques SEO : structure optimisée, balises méta, vitesse de chargement, responsive design, contenu structuré. Nous proposons également des prestations SEO avancées.',

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
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.projects': 'Projects',
    'hero.badge': 'Premium Web Agency',
    'hero.title1': 'Website Development',
    'hero.title2': ' for your business growth',
    'hero.description':
      'We help businesses attract clients with effective websites, modern web apps, and comprehensive digital strategies.',
    'hero.slogan': 'Your digital transformation starts here.',
    'hero.contact': 'Contact Us',
    'hero.viewWork': 'View Our Projects',
    'hero.scroll': 'Discover',
    'hero.stat1': 'Projects',
    'hero.stat2': 'Satisfaction',
    'hero.stat3': 'Support', // Expertise
    'expertise.title': 'Our Expertise',
    'expertise.subtitle': 'What we offer',
    'expertise.description':
      'We master the most advanced technologies to create exceptional digital experiences that grow your business.',
    'expertise.learnMore': 'Learn more',
    'expertise.cta': 'Start your project',
    'expertise.stats.projects': 'Completed Projects',
    'expertise.stats.satisfaction': 'Client Satisfaction',
    'expertise.stats.support': 'Technical Support',
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
    'about.sectionTitle': 'About SIDIKOFF DIGITAL',
    'about.sectionSubtitle':
      'Your Paris-based web agency specializing in modern website and web application development',
    'about.mission.title': 'Our Mission',
    'about.mission.p1':
      'SIDIKOFF DIGITAL is a web agency based in Paris, dedicated to helping businesses, SMEs, and associations in their digital transformation. We create high-performance, scalable, and user-centered websites.',
    'about.mission.p2':
      "Our approach is based on listening, code quality, and your project's success. We combine technical expertise, creativity, and attention to detail to deliver custom digital experiences.",
    'about.expertise.title': 'Our Expertise',
    'about.expertise.item1': 'Modern web development (React, Next.js, TypeScript)',
    'about.expertise.item2': 'Responsive and accessible UX/UI design',
    'about.expertise.item3': 'SEO optimization and performance',
    'about.expertise.item4': 'E-commerce and web applications',
    'about.expertise.item5': 'Maintenance and technical support',
    'about.expertise.item6': 'Digital strategy and consulting',
    'about.whyChoose.title': 'Why Choose SIDIKOFF DIGITAL?',
    'about.whyChoose.advantage1.title': 'Personalized Approach',
    'about.whyChoose.advantage1.description':
      'Each project is unique and deserves a tailor-made solution',
    'about.whyChoose.advantage2.title': 'Optimal Performance',
    'about.whyChoose.advantage2.description': 'Fast, secure websites optimized for search engines',
    'about.whyChoose.advantage3.title': 'Complete Support',
    'about.whyChoose.advantage3.description': 'From design to maintenance, we stay by your side',
    'about.location.title': 'Ready to Transform Your Vision into Reality?',
    'about.location.description':
      'We support your digital growth with innovative and tailored solutions. Discover how we can propel your project to success!',
    'about.location.cta1': 'Start your project',
    'about.location.cta2': 'Discover our work',
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
    'validation.message.minLength': 'Message must be at least 10 characters', // Success popup messages
    'popup.success.title': 'Successfully Sent!',
    'popup.success.message':
      'Your message has been sent successfully. We will get back to you soon!',

    // Services
    'services.title': 'Services & Pricing',
    'services.subtitle': 'Accessible and tailored web solutions for your business',
    'services.showcase.title': 'Showcase Websites',
    'services.showcase.description':
      'Elegant and professional websites to present your business and attract new clients.',
    'services.showcase.feature1': 'Responsive design',
    'services.showcase.feature2': 'SEO optimization',
    'services.showcase.feature3': 'Contact form',
    'services.showcase.feature4': 'Hosting included',
    'services.ecommerce.title': 'E-commerce',
    'services.ecommerce.description':
      'High-performance online stores to sell your products and grow your business.',
    'services.ecommerce.feature1': 'Order management',
    'services.ecommerce.feature2': 'Secure payment',
    'services.ecommerce.feature3': 'Inventory management',
    'services.ecommerce.feature4': 'Advanced analytics',
    'services.webapp.title': 'Web Applications',
    'services.webapp.description':
      'Custom web applications to automate your processes and improve your productivity.',
    'services.webapp.feature1': 'Custom development',
    'services.webapp.feature2': 'Intuitive interface',
    'services.webapp.feature3': 'Database',
    'services.webapp.feature4': 'API & integrations',
    'services.features': 'Features',
    'services.learnMore': 'Learn more',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.question1': 'How much does it cost to create a website?',
    'faq.answer1':
      'Our rates start at €500 for a simple showcase website. The price varies according to your specific needs: number of pages, features, custom design, etc. We offer a free and personalized quote.',
    'faq.question2': 'How long does it take to create a website?',
    'faq.answer2':
      'A simple showcase website generally takes 2-3 weeks. For a more complex site with advanced features, count 4-8 weeks. We define a precise schedule together from the start of the project.',
    'faq.question3': 'Do you offer website maintenance?',
    'faq.answer3':
      'Yes, we offer maintenance contracts to ensure the security, updates and backups of your site. We also offer technical support and advice to optimize your online presence.',
    'faq.question4': 'Are my sites optimized for SEO?',
    'faq.answer4':
      'Absolutely! All our sites are designed with SEO best practices: optimized structure, meta tags, loading speed, responsive design, structured content. We also offer advanced SEO services.',

    'footer.rights': 'SIDIKOFF DIGITAL — Web Agency in Paris. Custom website development.',
  },
  ru: {
    'nav.home': 'Главная',
    'nav.portfolio': 'Портфолио',
    'nav.about': 'О нас',
    'nav.prices': 'Услуги',
    'nav.services': 'Услуги',
    'nav.contact': 'Контакты',
    'nav.projects': 'Проекты',
    'hero.badge': 'Премиум Веб-Агентство',
    'hero.title1': 'Создание сайтов',
    'hero.title2': ' для роста вашего бизнеса',
    'hero.description':
      'Помогаем бизнесу привлекать клиентов с помощью эффективных сайтов, современных веб-приложений и комплексных digital-стратегий.',
    'hero.slogan': 'Ваша цифровая трансформация начинается здесь.',
    'hero.contact': 'Связаться с нами',
    'hero.viewWork': 'Наши проекты',
    'hero.scroll': 'Узнать больше',
    'hero.stat1': 'Проектов',
    'hero.stat2': 'Довольных клиентов',
    'hero.stat3': 'Поддержка', // Expertise
    'expertise.title': 'Наша экспертиза',
    'expertise.subtitle': 'Что мы предлагаем',
    'expertise.description':
      'Мы владеем самыми передовыми технологиями для создания исключительных цифровых решений, которые способствуют росту вашего бизнеса.',
    'expertise.learnMore': 'Узнать больше',
    'expertise.cta': 'Начать ваш проект',
    'expertise.stats.projects': 'Выполненных проектов',
    'expertise.stats.satisfaction': 'Довольных клиентов',
    'expertise.stats.support': 'Техническая поддержка',
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
    'about.sectionTitle': 'О SIDIKOFF DIGITAL',
    'about.sectionSubtitle':
      'Ваше парижское веб-агентство, специализирующееся на создании современных сайтов и веб-приложений',
    'about.mission.title': 'Наша миссия',
    'about.mission.p1':
      'SIDIKOFF DIGITAL — веб-агентство из Парижа, посвященное помощи компаниям, малому и среднему бизнесу, а также ассоциациям в их цифровой трансформации. Мы создаем высокопроизводительные, масштабируемые и ориентированные на пользователя веб-сайты.',
    'about.mission.p2':
      'Наш подход основан на внимании к клиенту, качестве кода и успехе ваших проектов. Мы сочетаем техническую экспертизу, креативность и внимание к деталям для создания индивидуальных цифровых решений.',
    'about.expertise.title': 'Наша экспертиза',
    'about.expertise.item1': 'Современная веб-разработка (React, Next.js, TypeScript)',
    'about.expertise.item2': 'Адаптивный и доступный UX/UI дизайн',
    'about.expertise.item3': 'SEO-оптимизация и производительность',
    'about.expertise.item4': 'Электронная коммерция и веб-приложения',
    'about.expertise.item5': 'Техническая поддержка и обслуживание',
    'about.expertise.item6': 'Цифровая стратегия и консалтинг',
    'about.whyChoose.title': 'Почему выбрать SIDIKOFF DIGITAL?',
    'about.whyChoose.advantage1.title': 'Индивидуальный подход',
    'about.whyChoose.advantage1.description':
      'Каждый проект уникален и заслуживает индивидуального решения',
    'about.whyChoose.advantage2.title': 'Оптимальная производительность',
    'about.whyChoose.advantage2.description':
      'Быстрые, безопасные сайты, оптимизированные для поисковых систем',
    'about.whyChoose.advantage3.title': 'Полная поддержка',
    'about.whyChoose.advantage3.description':
      'От дизайна до обслуживания — мы остаемся рядом с вами',
    'about.location.title': 'Готовы Воплотить Вашу Идею в Реальность?',
    'about.location.description':
      'Мы поддерживаем ваш цифровой рост с помощью инновационных и индивидуальных решений. Узнайте, как мы можем вывести ваш проект на новый уровень успеха!',
    'about.location.cta1': 'Начать ваш проект',
    'about.location.cta2': 'Изучить наши работы',
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
    'validation.message.minLength': 'Сообщение должно содержать минимум 10 символов', // Success popup messages
    'popup.success.title': 'Успешно отправлено!',
    'popup.success.message': 'Ваше сообщение было успешно отправлено. Мы скоро свяжемся с вами!',

    // Services
    'services.title': 'Услуги и Цены',
    'services.subtitle': 'Доступные и индивидуальные веб-решения для вашего бизнеса',
    'services.showcase.title': 'Сайты-визитки',
    'services.showcase.description':
      'Элегантные и профессиональные сайты для презентации вашего бизнеса и привлечения новых клиентов.',
    'services.showcase.feature1': 'Адаптивный дизайн',
    'services.showcase.feature2': 'SEO-оптимизация',
    'services.showcase.feature3': 'Форма обратной связи',
    'services.showcase.feature4': 'Хостинг включён',
    'services.ecommerce.title': 'Интернет-магазины',
    'services.ecommerce.description':
      'Высокопроизводительные онлайн-магазины для продажи ваших товаров и развития бизнеса.',
    'services.ecommerce.feature1': 'Управление заказами',
    'services.ecommerce.feature2': 'Безопасная оплата',
    'services.ecommerce.feature3': 'Управление товарами',
    'services.ecommerce.feature4': 'Продвинутая аналитика',
    'services.webapp.title': 'Веб-приложения',
    'services.webapp.description':
      'Индивидуальные веб-приложения для автоматизации процессов и повышения продуктивности.',
    'services.webapp.feature1': 'Разработка под заказ',
    'services.webapp.feature2': 'Интуитивный интерфейс',
    'services.webapp.feature3': 'База данных',
    'services.webapp.feature4': 'API и интеграции',
    'services.features': 'Возможности',
    'services.learnMore': 'Узнать больше',

    // FAQ
    'faq.title': 'Часто задаваемые вопросы',
    'faq.question1': 'Сколько стоит создание сайта?',
    'faq.answer1':
      'Наши цены начинаются от 500€ за простой сайт-визитку. Стоимость варьируется в зависимости от ваших потребностей: количество страниц, функции, индивидуальный дизайн и т.д. Мы предлагаем бесплатную персональную консультацию.',
    'faq.question2': 'Сколько времени нужно для создания сайта?',
    'faq.answer2':
      'Простой сайт-визитка обычно занимает 2-3 недели. Для более сложного сайта с дополнительными функциями рассчитывайте на 4-8 недель. Мы определим точный график в начале проекта.',
    'faq.question3': 'Предлагаете ли вы обслуживание сайтов?',
    'faq.answer3':
      'Да, мы предлагаем договоры на обслуживание для обеспечения безопасности, обновлений и резервного копирования вашего сайта. Мы также предлагаем техническую поддержку и советы по оптимизации вашего онлайн-присутствия.',
    'faq.question4': 'Оптимизированы ли мои сайты для SEO?',
    'faq.answer4':
      'Конечно! Все наши сайты создаются с учётом лучших SEO-практик: оптимизированная структура, мета-теги, скорость загрузки, адаптивный дизайн, структурированный контент. Мы также предлагаем расширенные SEO-услуги.',

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
  return (    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

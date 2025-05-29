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
    // Header    'nav.home': 'Accueil',
    'nav.home': 'Accueil',
    'nav.portfolio': 'Réalisations',
    'nav.expertise': 'À propos',
    'nav.prices': 'Tarifs',
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
    'hero.stat3': 'Support', // Expertise    'expertise.title': 'À propos',
    'expertise.subtitle': 'Ce qui nous rend unique',
    'expertise.description':
      'Nous maîtrisons les technologies les plus avancées pour créer des expériences digitales exceptionnelles qui font grandir votre entreprise.',
    'expertise.item1.title': 'Technologies Modernes',
    'expertise.item1.description':
      'React, Next.js, TypeScript et les dernières innovations pour des sites performants.',
    'expertise.item2.title': 'Design Centré Utilisateur',
    'expertise.item2.description':
      'Interfaces intuitives et expériences optimisées pour vos utilisateurs.',
    'expertise.item3.title': 'Performance & SEO',
    'expertise.item3.description':
      'Sites ultra-rapides et optimisés pour les moteurs de recherche.',
    'expertise.item4.title': 'Intégration API',
    'expertise.item4.description':
      'Connexion fluide entre l’interface utilisateur et vos services backend.',
    'expertise.cta': 'Démarrer votre projet',
    'expertise.stats.projects': 'Projets réalisés',
    'expertise.stats.satisfaction': 'Satisfaction client',
    'expertise.stats.support': 'Support technique',
    'expertise.learnMore': 'En savoir plus', // About (used in About component)
    'about.title': 'À propos',
    'about.intro.title':
      'SIDIKOFF DIGITAL est une agence web fondée en France, avec une vision internationale.',
    'about.intro.description':
      'SIDIKOFF DIGITAL est une agence web fondée en France, avec une vision internationale. Nous accompagnons les marques, freelancers, entrepreneurs et startups avec des solutions digitales sur mesure, percutantes et durables.',

    // Ce qui nous définit section
    'about.defining.title': 'Ce qui nous définit',

    'about.creativity.title': 'Créativité audacieuse',
    'about.creativity.description':
      'Chaque projet est pensé comme une œuvre unique, portée par une vision forte et des choix assumés.',

    'about.approach.title': 'Approche humaine',
    'about.approach.description':
      "Nous construisons une vraie relation avec chaque client — à l'écoute, disponibles, engagés.",

    'about.expertise.title': 'Expertise technique',
    'about.expertise.description':
      'Nous utilisons des technologies modernes et du code propre pour des performances durables.',

    // Quelques chiffres section
    'about.stats.title': 'Quelques chiffres',
    'about.stats.projects': '+50',
    'about.stats.projectsLabel': 'projets réalisés',
    'about.stats.satisfaction': '100%',
    'about.stats.satisfactionLabel': 'de clients satisfaits',
    'about.stats.experience': '10+',
    'about.stats.experienceLabel': "ans d'expérience IT", // Founder section
    'about.founder.name': 'Sardorbek SIDIKOV',
    'about.founder.title': 'Fondateur & Directeur technique',
    'about.founder.description':
      "Passionné par les nouvelles technologies et l'innovation numérique, je crée des solutions web sur mesure qui allient performance technique et excellence visuelle. Mon approche combine créativité et expertise technique pour donner vie à vos projets les plus ambitieux.",
    'about.founder.experienceYears': "10+ ans d'expérience IT",
    'about.founder.educationDegrees': 'Diplômes Master en développement web',
    'about.founder.experienceLabel': 'Expérience',
    'about.founder.educationLabel': 'Formation',
    'about.founder.contactCta': 'Discutons de votre projet', // CTA section
    'about.cta.title': 'Transformons ensemble vos idées en réalité numérique',
    'about.cta.description':
      'Nous accompagnons votre croissance digitale avec des solutions innovantes et sur mesure. Contactez-nous pour une consultation gratuite et découvrez comment nous pouvons booster votre présence en ligne.',
    'about.cta.button': 'Démarrer votre projet', // Portfolio
    'portfolio.title': 'Projets récents',
    'portfolio.subtitle': 'Nos réalisations',
    'portfolio.description':
      'Explorez nos derniers projets mettant en valeur des techniques de développement web modernes et des solutions innovantes.',
    'portfolio.filter': 'Filtrer',
    'portfolio.viewAll': 'Voir tout',
    'portfolio.viewDetails': 'Détails du projet',
    'portfolio.showMore': 'Afficher plus',
    'portfolio.viewProject': 'Accéder au site',
    'portfolio.technologies': 'Technologies',
    'project.notFound': 'Projet non trouvé',

    // Services
    'services.title': 'Services',
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
    'services.cta.pricing': 'Découvrir les tarifs',
    'services.cta.quote': 'Demander un devis',
    'services.learnMore': 'En savoir plus',

    // Tarifs
    'prices.title': 'Tarifs',
    'prices.subtitle': 'Des solutions accessibles et sur mesure',
    'prices.description':
      'Des sites web modernes, performants et optimisés SEO pour booster votre visibilité et attirer plus de clients.',
    'prices.tier1.name': 'Site Essentiel',
    'prices.tier1.price': '500 €',
    'prices.tier1.audience':
      'Idéal pour freelances, coachs, auto-entrepreneurs et projets personnels.',
    'prices.tier1.includes.title': 'Inclus :',
    'prices.tier1.includes.1': 'Design responsive rapide et sur-mesure',
    'prices.tier1.includes.2': 'Pages : Accueil, Services, À propos, Contact',
    'prices.tier1.includes.3': 'Optimisation SEO de base pour le référencement',
    'prices.tier1.includes.4': 'Compatible mobile & navigation fluide',
    'prices.tier1.includes.5': 'Présentation claire et professionnelle',
    'prices.tier1.cta': 'Démarrer mon projet',
    'prices.tier2.name': 'Site Vitrine Pro',
    'prices.tier2.price': '900 €',
    'prices.tier2.audience':
      'Parfait pour TPE, PME, artisans ou prestataires de services souhaitant se positionner sérieusement en ligne.',
    'prices.tier2.includes.title': 'Inclus :',
    'prices.tier2.includes.1': 'UX/UI design adapté à votre image de marque',
    'prices.tier2.includes.2':
      'Pages : Accueil, Services, À propos, Réalisations, Témoignages, Contact',
    'prices.tier2.includes.3': 'Structure SEO optimisée dès la conception',
    'prices.tier2.includes.4': 'Design responsive et performant',
    'prices.tier2.includes.5': "Intégration d'outils d’analyse et suivi",
    'prices.tier2.cta': 'Voir les détails',
    'prices.tier3.name': 'Site Premium Business',
    'prices.tier3.price': 'Prix sur demande',
    'prices.tier3.audience':
      'Recommandé pour marques, PME ou startups en phase de croissance avec des objectifs élevés de visibilité et de performance.',
    'prices.tier3.includes.title': 'Inclus :',
    'prices.tier3.includes.1': 'Design premium avec identité visuelle unique',
    'prices.tier3.includes.2': 'Stratégie SEO avancée : mots-clés, SEO local, contenu éditorial',
    'prices.tier3.includes.3': 'Performances web optimisées (Core Web Vitals)',
    'prices.tier3.includes.4': 'Intégration CMS, blog, options multilingues',
    'prices.tier3.includes.5': 'Accompagnement personnalisé & site évolutif',
    'prices.tier3.cta': 'Obtenir un devis',
    'prices.custom':
      'Vous avez un besoin spécifique ? Contactez-nous pour une solution personnalisée.',
    'prices.customDescription': 'Solutions sur mesure pour votre entreprise',
    'prices.quote': 'Demander un devis',
    'prices.features.enterpriseSecurity': 'Sécurité Entreprise',
    'prices.features.prioritySupport': 'Support Prioritaire',
    'prices.features.customFeatures': 'Fonctionnalités Personnalisées',

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
      'Votre message a été envoyé avec succès. Nous vous répondrons bientôt !', // Footer
    'footer.rights':
      'SIDIKOFF DIGITAL — Agence Web à Paris. Création de sites internet sur mesure.', // Legal Mentions
    'legal.title': 'Politique de confidentialité',
    'legal.company.title': "Informations sur l'entreprise",
    'legal.company.name': 'Nom commercial',
    'legal.company.nameValue': 'SIDIKOFF DIGITAL',
    'legal.company.form': 'Forme juridique',
    'legal.company.formValue': 'Micro-entreprise',
    'legal.company.SIREN': 'Numéro SIREN',
    'legal.company.SIRENValue': '943 266 213',
    'legal.company.address': 'Adresse du siège social',
    'legal.company.addressValue': 'Paris, France',
    'legal.company.phone': 'Téléphone',
    'legal.company.phoneValue': '+33 6 26 93 27 34',
    'legal.company.email': 'Email',
    'legal.company.emailValue': 'contact@sidikoff.com',
    'legal.director.title': 'Directeur de la publication',
    'legal.director.name': 'Sardorbek SIDIKOV',
    'legal.hosting.title': 'Hébergement',
    'legal.hosting.provider': 'Hébergeur',
    'legal.hosting.providerValue': 'Vercel Inc.',
    'legal.hosting.address': 'Adresse',
    'legal.hosting.addressValue': '340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis',
    'legal.hosting.website': 'Site web',
    'legal.hosting.websiteValue': 'https://vercel.com',
    'legal.property.title': 'Propriété intellectuelle',
    'legal.property.content':
      "Ce site web et tous ses éléments (textes, images, logos, etc.) sont protégés par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable.",
    'legal.data.title': 'Protection des données personnelles',
    'legal.data.content':
      "Conformément au RGPD, vous disposez de droits sur vos données personnelles. Les données collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes et ne sont pas transmises à des tiers. Vous pouvez exercer vos droits concernant vos données personnelles en contactant à l'adresse e-mail : contact@sidikoff.com.",
    'legal.cookies.title': 'Cookies',
    'legal.cookies.content':
      'Ce site utilise des cookies essentiels au fonctionnement du site. En continuant à naviguer sur ce site, vous acceptez leur utilisation.',
  },
  en: {
    'nav.home': 'Home',
    'nav.portfolio': 'Portfolio',
    'nav.expertise': 'About',
    'nav.prices': 'Tariffs',
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
      'Seamless connection between user interface and your backend services.', // About (used in About component)
    'about.title': 'About Us',
    'about.intro.title':
      'SIDIKOFF DIGITAL is a web agency founded in France with an international outlook.',
    'about.intro.description':
      'SIDIKOFF DIGITAL is a web agency founded in France with an international outlook. We support brands, freelancers, entrepreneurs, and startups with tailored digital solutions that are bold, effective, and built to last.',

    // What defines us section
    'about.defining.title': 'What defines us',

    'about.creativity.title': 'Bold creativity',
    'about.creativity.description':
      'Each project is crafted as a unique piece — driven by strong vision and deliberate design.',

    'about.approach.title': 'Human-centered approach',
    'about.approach.description':
      'We build real relationships — listening, supporting, and staying close to our clients throughout the process.',

    'about.expertise.title': 'Technical expertise',
    'about.expertise.description':
      'We use modern technologies and clean code to deliver fast, stable, and long-lasting results.',

    // Some key numbers section
    'about.stats.title': 'Some key numbers',
    'about.stats.projects': '50+',
    'about.stats.projectsLabel': 'projects delivered',
    'about.stats.satisfaction': '100%',
    'about.stats.satisfactionLabel': 'satisfied clients',
    'about.stats.experience': '10+',
    'about.stats.experienceLabel': 'years of IT experience',
    // Founder section
    'about.founder.name': 'Sardorbek SIDIKOV',
    'about.founder.title': 'Founder & Technical Director',
    'about.founder.experienceYears': '10+ years of IT experience',
    'about.founder.educationDegrees': "Master's degrees in web development",
    'about.founder.experienceLabel': 'Experience',
    'about.founder.educationLabel': 'Education',
    'about.founder.contactCta': "Let's discuss your project",
    'about.founder.description':
      'Passionate about new technologies and digital innovation, I create custom web solutions that combine technical performance and visual excellence. My approach combines creativity and technical expertise to bring your most ambitious projects to life.',

    // Founder personal stats
    'about.founderStats.projects': '50+',
    'about.founderStats.projectsLabel': 'Projects completed',
    'about.founderStats.satisfaction': '100%',
    'about.founderStats.satisfactionLabel': 'Positive feedback',
    // CTA section
    'about.cta.title': "Let's transform your ideas into digital reality together",
    'about.cta.description':
      'We support your digital growth with innovative and tailored solutions. Contact us for a free consultation and discover how we can boost your online presence.',
    'about.cta.button': 'Start your project', // Portfolio
    'portfolio.title': 'Recent Projects',
    'portfolio.subtitle': 'Our Work',
    'portfolio.description':
      'Explore our latest projects showcasing modern web development techniques and innovative solutions.',
    'portfolio.filter': 'Filter',
    'portfolio.viewAll': 'View All',
    'portfolio.viewDetails': 'Project Details',
    'portfolio.showMore': 'Show More',
    'portfolio.viewProject': 'Visit Site',
    'portfolio.technologies': 'Technologies',
    'project.notFound': 'Project not found',

    // Services
    'services.title': 'Services',
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
    'services.cta.pricing': 'Discover pricing',
    'services.cta.quote': 'Request a quote',
    'services.learnMore': 'Learn more',

    // Prices
    'prices.title': 'Plans',
    'prices.subtitle': 'Accessible and tailored solutions',
    'prices.description':
      'Modern, high-performance, SEO-optimized websites to boost your visibility and attract more clients.',
    'prices.tier1.name': 'Essential Website',
    'prices.tier1.price': '€500',
    'prices.tier1.audience':
      'Perfect for freelancers, consultants, coaches, solo entrepreneurs and personal projects.',
    'prices.tier1.includes.title': 'Includes:',
    'prices.tier1.includes.1': 'Custom design, fast loading, mobile-ready',
    'prices.tier1.includes.2': 'Structure: Home, Services, About, Contact',
    'prices.tier1.includes.3': 'Basic SEO for Google visibility',
    'prices.tier1.includes.4': 'Clear layout and professional appearance',
    'prices.tier1.includes.5': 'Clean code & high performance',
    'prices.tier1.cta': 'Start my project',
    'prices.tier2.name': 'Pro Website',
    'prices.tier2.price': '€900',
    'prices.tier2.audience':
      'Ideal for small businesses, artisans, agencies and independent professionals looking for a serious online presence.',
    'prices.tier2.includes.title': 'Includes:',
    'prices.tier2.includes.1': 'Custom UX/UI aligned with your brand',
    'prices.tier2.includes.2': 'Pages: Home, Services, About, Portfolio, Testimonials, Contact',
    'prices.tier2.includes.3': 'SEO-ready structure and optimized content',
    'prices.tier2.includes.4': 'Mobile-friendly, fast, and scalable',
    'prices.tier2.includes.5': 'Analytics and tracking integration',
    'prices.tier2.cta': 'View details',
    'prices.tier3.name': 'Premium Business Website',
    'prices.tier3.price': 'Custom quote on request',
    'prices.tier3.audience':
      'Perfect for growing businesses and brands seeking full SEO strategy, unique branding, and top-tier performance.',
    'prices.tier3.includes.title': 'Includes:',
    'prices.tier3.includes.1': 'Tailored premium design with brand identity',
    'prices.tier3.includes.2': 'Full SEO strategy: keywords, local SEO, content',
    'prices.tier3.includes.3': 'Maximum performance (Core Web Vitals optimized)',
    'prices.tier3.includes.4': 'CMS integration, blog, multilingual support (optional)',
    'prices.tier3.includes.5': 'Personalized guidance and scalable architecture',
    'prices.tier3.cta': 'Request a quote',

    // Custom prices
    'prices.custom': 'Custom Project',
    'prices.customDescription': 'Tailored solutions for your business',
    'prices.quote': 'Request a quote',
    'prices.features.enterpriseSecurity': 'Enterprise Security',
    'prices.features.prioritySupport': 'Priority Support',
    'prices.features.customFeatures': 'Custom Features',
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
      'Votre message a été envoyé avec succès. Nous vous répondrons bientôt !', // Footer
    'footer.rights':
      'SIDIKOFF DIGITAL — Agence Web à Paris. Création de sites internet sur mesure.', // Legal Mentions
    'legal.title': 'Politique de confidentialité',
    'legal.company.title': "Informations sur l'entreprise",
    'legal.company.name': 'Nom commercial',
    'legal.company.nameValue': 'SIDIKOFF DIGITAL',
    'legal.company.form': 'Forme juridique',
    'legal.company.formValue': 'Micro-entreprise',
    'legal.company.SIREN': 'Numéro SIREN',
    'legal.company.SIRENValue': '943 266 213',
    'legal.company.address': 'Adresse du siège social',
    'legal.company.addressValue': 'Paris, France',
    'legal.company.phone': 'Téléphone',
    'legal.company.phoneValue': '+33 6 26 93 27 34',
    'legal.company.email': 'Email',
    'legal.company.emailValue': 'contact@sidikoff.com',
    'legal.director.title': 'Directeur de la publication',
    'legal.director.name': 'Sardorbek SIDIKOV',
    'legal.hosting.title': 'Hébergement',
    'legal.hosting.provider': 'Hébergeur',
    'legal.hosting.providerValue': 'Vercel Inc.',
    'legal.hosting.address': 'Adresse',
    'legal.hosting.addressValue': '340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis',
    'legal.hosting.website': 'Site web',
    'legal.hosting.websiteValue': 'https://vercel.com',
    'legal.property.title': 'Propriété intellectuelle',
    'legal.property.content':
      "Ce site web et tous ses éléments (textes, images, logos, etc.) sont protégés par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable.",
    'legal.data.title': 'Protection des données personnelles',
    'legal.data.content':
      "Conformément au RGPD, vous disposez de droits sur vos données personnelles. Les données collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes et ne sont pas transmises à des tiers. Vous pouvez exercer vos droits concernant vos données personnelles en contactant à l'adresse e-mail : contact@sidikoff.com.",
    'legal.cookies.title': 'Cookies',
    'legal.cookies.content':
      'Ce site utilise des cookies essentiels au fonctionnement du site. En continuant à naviguer sur ce site, vous acceptez leur utilisation.',
  },
  ru: {
    'nav.home': 'Главная',
    'nav.portfolio': 'Портфолио',
    'nav.expertise': 'О нас',
    'nav.prices': 'Тарифы',
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
    'expertise.item4.description': 'Бесшовная интеграция интерфейса с вашими сервисами и API.', // About (used in About component)
    'about.title': 'О нас',
    'about.intro.title':
      'SIDIKOFF DIGITAL — это веб-агентство, основанное во Франции с международным подходом.',
    'about.intro.description':
      'SIDIKOFF DIGITAL — это веб-агентство, основанное во Франции с международным подходом. Мы помогаем брендам, фрилансерам, предпринимателям и стартапам создавать эффективные цифровые решения, которые работают и запоминаются.',

    // Наши принципы section
    'about.defining.title': 'Наши принципы',

    'about.creativity.title': 'Смелый креатив',
    'about.creativity.description':
      'Каждый проект — это уникальная идея, реализованная с вниманием к деталям и концепции.',

    'about.approach.title': 'Человечность и забота',
    'about.approach.description':
      'Мы работаем как партнёры, выстраиваем настоящие связи и всегда остаёмся на связи.',

    'about.expertise.title': 'Техническая точность',
    'about.expertise.description': 'Современные технологии, чистый код и ориентация на результат.',

    // В цифрах section
    'about.stats.title': 'В цифрах',
    'about.stats.projects': '50+',
    'about.stats.projectsLabel': 'реализованных проектов',
    'about.stats.satisfaction': '100%',
    'about.stats.satisfactionLabel': 'довольных клиентов',
    'about.stats.experience': '10+',
    'about.stats.experienceLabel': 'лет в IT',
    // Founder section
    'about.founder.name': 'Sardorbek SIDIKOV',
    'about.founder.title': 'Founder & CEO',
    'about.founder.experienceYears': '10+ лет опыта в IT',
    'about.founder.educationDegrees': 'Степень магистра в области веб-разработки',
    'about.founder.experienceLabel': 'Опыт',
    'about.founder.educationLabel': 'Образование',
    'about.founder.contactCta': 'Обсудим ваш проект',
    'about.founder.description':
      'Увлеченный новыми технологиями и цифровыми инновациями, я создаю индивидуальные веб-решения, сочетающие техническую производительность и визуальное совершенство. Мой подход объединяет креативность и техническую экспертизу для воплощения ваших самых амбициозных проектов.',

    // Founder personal stats
    'about.founderStats.projects': '50+',
    'about.founderStats.projectsLabel': 'Реализованных проектов',
    'about.founderStats.satisfaction': '100%',
    'about.founderStats.satisfactionLabel': 'Положительных отзывов',
    // CTA section
    'about.cta.title': 'Давайте вместе превратим ваши идеи в цифровую реальность',
    'about.cta.description':
      'Мы поддерживаем ваш цифровой рост с помощью инновационных и индивидуальных решений. Свяжитесь с нами для бесплатной консультации и узнайте, как мы можем улучшить ваше присутствие в интернете.',
    'about.cta.button': 'Начать ваш проект', // Portfolio
    'portfolio.title': 'Недавние проекты',
    'portfolio.subtitle': 'Наши работы',
    'portfolio.description':
      'Изучите наши последние проекты, демонстрирующие современные техники веб-разработки и инновационные решения.',
    'portfolio.filter': 'Фильтр',
    'portfolio.viewAll': 'Смотреть все',
    'portfolio.viewDetails': 'Подробнее о проекте',
    'portfolio.showMore': 'Показать ещё',
    'portfolio.viewProject': 'Перейти на сайт',
    'portfolio.technologies': 'Технологии',
    'project.notFound': 'Проект не найден',

    // Services
    'services.title': 'Услуги',
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
    'services.cta.pricing': 'Узнать цены',
    'services.cta.quote': 'Запросить предложение',
    'services.learnMore': 'Узнать больше',

    // Цены (Тарифы)
    'prices.title': 'Цены',
    'prices.subtitle': 'Доступные и индивидуальные решения',
    'prices.description':
      'Современные, быстрые и SEO-оптимизированные сайты для роста вашего бизнеса и привлечения клиентов.',
    'prices.tier1.name': 'Сайт-визитка',
    'prices.tier1.price': '500 €',
    'prices.tier1.audience':
      'Подходит для фрилансеров, экспертов, коучей, индивидуальных предпринимателей и личных проектов.',
    'prices.tier1.includes.title': 'Что входит:',
    'prices.tier1.includes.1': 'Индивидуальный дизайн и быстрая загрузка',
    'prices.tier1.includes.2': 'Страницы: Главная, Услуги, О нас, Контакты',
    'prices.tier1.includes.3': 'Мобильная адаптация и высокая производительность',
    'prices.tier1.includes.4': 'Базовая SEO-оптимизация для продвижения в поиске',
    'prices.tier1.includes.5': 'Чистая структура и современный внешний вид',
    'prices.tier1.cta': 'Запустить проект',
    'prices.tier2.name': 'Pro сайт для бизнеса',
    'prices.tier2.price': '900 €',
    'prices.tier2.audience':
      'Идеально для малого и среднего бизнеса, мастеров и специалистов, желающих профессионально представить свои услуги в интернете.',
    'prices.tier2.includes.title': 'Что входит:',
    'prices.tier2.includes.1': 'Уникальный UX/UI-дизайн с учетом бренда',
    'prices.tier2.includes.2': 'Страницы: Главная, Услуги, О компании, Портфолио, Отзывы, Контакты',
    'prices.tier2.includes.3': 'Контент и структура с оптимизацией под SEO',
    'prices.tier2.includes.4': 'Поддержка всех устройств и высокая скорость',
    'prices.tier2.includes.5': 'Подключение аналитики и отслеживания',
    'prices.tier2.cta': 'Подробнее',
    'prices.tier3.name': 'Premium сайт для бизнеса',
    'prices.tier3.price': 'Цена по запросу',
    'prices.tier3.audience':
      'Подходит компаниям, брендам и проектам с амбициями роста, ориентированным на максимальную видимость и масштабирование.',
    'prices.tier3.includes.title': 'Что входит:',
    'prices.tier3.includes.1': 'Уникальный дизайн с фирменным стилем',
    'prices.tier3.includes.2': 'Стратегия SEO: ключевые слова, локальное продвижение, контент',
    'prices.tier3.includes.3': 'Максимальные показатели производительности (Core Web Vitals)',
    'prices.tier3.includes.4': 'Интеграция CMS, блог, мультиязычность (по необходимости)',
    'prices.tier3.includes.5': 'Персональное сопровождение и гибкая структура',
    'prices.tier3.cta': 'Запросить предложение',
    'prices.custom': 'Нужен индивидуальный проект? Свяжитесь с нами для обсуждения.',
    'prices.customDescription': 'Индивидуальные решения для вашего бизнеса',
    'prices.quote': 'Запросить расчёт',
    'prices.features.enterpriseSecurity': 'Корпоративная безопасность',
    'prices.features.prioritySupport': 'Приоритетная поддержка',
    'prices.features.customFeatures': 'Индивидуальные функции',
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

    'footer.rights': 'SIDIKOFF DIGITAL — Веб-агентство в Париже. Разработка сайтов под ключ.', // Legal Mentions
    'legal.title': 'Политика конфиденциальности',
    'legal.company.title': 'Информация о компании',
    'legal.company.name': 'Название компании',
    'legal.company.nameValue': 'SIDIKOFF DIGITAL',
    'legal.company.form': 'Правовая форма',
    'legal.company.formValue': 'Индивидуальное предприятие',
    'legal.company.SIREN': 'Номер SIREN',
    'legal.company.SIRENValue': '943 266 213',
    'legal.company.address': 'Юридический адрес',
    'legal.company.addressValue': 'Париж, Франция',
    'legal.company.phone': 'Телефон',
    'legal.company.phoneValue': '+33 6 26 93 27 34',
    'legal.company.email': 'Email',
    'legal.company.emailValue': 'contact@sidikoff.com',
    'legal.director.title': 'Директор публикации',
    'legal.director.name': 'Сардорбек СИДИКОВ',
    'legal.hosting.title': 'Веб-хостинг',
    'legal.hosting.provider': 'Хостинг-провайдер',
    'legal.hosting.providerValue': 'Vercel Inc.',
    'legal.hosting.address': 'Адрес',
    'legal.hosting.addressValue': '340 S Lemon Ave #4133, Walnut, CA 91789, США',
    'legal.hosting.website': 'Веб-сайт',
    'legal.hosting.websiteValue': 'https://vercel.com',
    'legal.property.title': 'Интеллектуальная собственность',
    'legal.property.content':
      'Этот веб-сайт и все его элементы (тексты, изображения, логотипы и т.д.) защищены авторским правом. Любое воспроизведение, даже частичное, запрещено без предварительного разрешения.',
    'legal.data.title': 'Защита персональных данных',
    'legal.data.content':
      'В соответствии с GDPR, у вас есть права на ваши персональные данные. Данные, собранные через контактную форму, используются только для ответа на ваши запросы и не передаются третьим лицам. Вы можете осуществить свои права касательно ваших персональных данных, связавшись с нами по электронной почте: contact@sidikoff.com.',
    'legal.cookies.title': 'Куки',
    'legal.cookies.content':
      'Этот сайт использует основные куки, необходимые для функционирования сайта. Продолжая навигацию по этому сайту, вы принимаете их использование.',
  },
}

// Функция для определения языка браузера и сопоставления с доступными языками
const detectBrowserLanguage = (): Language => {
  // Проверяем, что мы на клиенте
  if (typeof window === 'undefined') {
    return 'fr' // Дефолтный язык для SSR
  }

  if (navigator) {
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

  // Fallback для случаев без navigator
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
    // Проверяем, что мы на клиенте
    if (typeof window === 'undefined') return

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
    // Проверяем, что мы на клиенте перед использованием localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newLanguage)
    }
  }

  const t = (key: string): string => {
    return translations[language]?.[key] || key
  }

  // Если не инициализирован, показываем с дефолтным языком
  if (!isInitialized) {
    return (
      <LanguageContext.Provider value={{ language: 'fr', setLanguage: handleSetLanguage, t }}>
        {children}
      </LanguageContext.Provider>
    )
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

'use client'

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react'

type Language = 'fr' | 'en' | 'ru'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
  plural: (count: number, singular: string, plural?: string) => string
}

// Définition des traductions
type TranslationMap = {
  [key: string]: string
}

const translations: Record<Language, TranslationMap> = {
  fr: {
    // Common
    'common.back': 'Retour',

    // Header    'nav.home': 'Accueil',
    'nav.home': 'Accueil',
    'nav.portfolio': 'Réalisations',
    'nav.expertise': 'À propos',
    'nav.prices': 'Tarifs',
    'nav.services': 'Services',
    'nav.blog': 'Blog',
    'nav.faq': 'FAQ',
    'nav.contact': 'Nous contacter',
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
    'hero.directContact': 'Ou contactez-nous directement :',
    'hero.contactSubtitle': 'Choisissez votre méthode de contact préférée',
    'hero.whatsappDesc': 'Réponse rapide',
    'hero.telegramDesc': 'Chat instantané',
    'hero.emailDesc': 'Contact formel', // Expertise    'expertise.title': 'À propos',
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
    'about.intro.title': 'SIDIKOFF DIGITAL',
    'about.intro.description':
      'est une agence web fondée en France, avec une vision internationale. Nous accompagnons les marques, freelancers, entrepreneurs et startups avec des solutions digitales sur mesure, percutantes et durables.',

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
    'portfolio.loading': 'Chargement...',
    'portfolio.viewProject': 'Accéder au site',
    'portfolio.technologies': 'Technologies',
    'portfolio.allProjects': 'Tous les projets',
    'portfolio.showingAll': 'Affichage de tous les',
    'portfolio.projects': 'projets',
    'portfolio.project': 'projet',
    'portfolio.found': 'Trouvé',
    'portfolio.projectsWith': 'projets avec',
    'portfolio.projectWith': 'projet avec',
    'project.notFound': 'Projet non trouvé',

    // Services
    'services.title': 'Services',
    'services.subtitle': 'Des solutions web accessibles et sur mesure pour votre entreprise',
    'services.creation.title': 'Création de Sites Web – De A à Z',
    'services.creation.description':
      "Chaque projet est conçu sur mesure pour répondre précisément à vos besoins. J'assure toute la chaîne : conception, développement, mise en ligne et suivi.",
    'services.creation.feature1': 'Conception sur mesure',
    'services.creation.feature2': 'Développement complet',
    'services.creation.feature3': 'Mise en ligne et déploiement',
    'services.creation.feature4': 'Suivi et maintenance',
    'services.redesign.title': 'Refonte / Redesign',
    'services.redesign.description':
      "Redonnez une nouvelle jeunesse à votre site existant ! Améliorez l'ergonomie, modernisez l'esthétique et optimisez la performance pour offrir une expérience utilisateur irréprochable.",
    'services.redesign.feature1': "Amélioration de l'ergonomie",
    'services.redesign.feature2': 'Modernisation esthétique',
    'services.redesign.feature3': 'Optimisation des performances',
    'services.redesign.feature4': 'Expérience utilisateur améliorée',
    'services.seo.title': 'SEO & Optimisation de la Visibilité',
    'services.seo.description':
      "Faites-vous trouver par vos clients. J'optimise le référencement naturel (SEO) de votre site grâce à des techniques éprouvées, un code allégé et une structure adaptée, afin de booster votre visibilité sur Google.",
    'services.seo.feature1': 'Référencement naturel (SEO)',
    'services.seo.feature2': 'Optimisation technique',
    'services.seo.feature3': 'Structure de code optimisée',
    'services.seo.feature4': 'Amélioration de la visibilité',
    'services.maintenance.title': 'Maintenance & Support',
    'services.maintenance.description':
      "Profitez d'un accompagnement continu : support technique, mise à jour, modification ou ajout de nouvelles fonctionnalités selon vos besoins. Une facturation horaire ou sur demande ponctuelle pour un service flexible et évolutif.",
    'services.maintenance.feature1': 'Support technique continu',
    'services.maintenance.feature2': 'Mises à jour régulières',
    'services.maintenance.feature3': 'Nouvelles fonctionnalités',
    'services.maintenance.feature4': 'Service flexible et évolutif',
    'services.features': 'Fonctionnalités',
    'services.cta.pricing': 'Voir les tarifs',
    'services.cta.quote': 'Demander un devis',
    'services.learnMore': 'En savoir plus',

    // Tarifs
    'prices.title': 'Tarifs',
    'prices.subtitle': 'Des solutions accessibles et sur mesure',
    'prices.popular': 'Le plus populaire',
    'prices.description':
      'Des sites web modernes, performants et optimisés SEO pour booster votre visibilité et attirer plus de clients.',
    'prices.tier1.name': 'Site Essentiel',
    'prices.tier1.price': 'à partir de 500 €',
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
    'prices.tier2.price': 'à partir de 900 €',
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
    'prices.tier3.price': 'Sur devis',
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

    // --- CustomQuoteSection translations ---
    'prices.maintenanceSupport.title': 'Maintenance et Support',
    'prices.maintenanceSupport.billing': 'Facturation horaire ou forfaitaire selon la demande',
    'prices.maintenanceSupport.1': 'Accompagnement personnalisé après livraison',
    'prices.maintenanceSupport.2': 'Interventions ponctuelles pour modifications et mises à jour',
    'prices.maintenanceSupport.3':
      'Support technique réactif par email, téléphone, WhatsApp ou Telegram',

    // FAQ
    'faq.title': 'Questions Fréquentes',
    'faq.subtitle': 'Retrouvez les réponses aux questions les plus fréquentes',

    // General FAQ
    'faq.question1': "Quel est le délai moyen pour la réalisation d'un site ?",
    'faq.answer1':
      'Le délai dépend de la complexité du projet. Pour un site classique, il faut prévoir entre 3 à 6 semaines.',

    'faq.question2': 'De quels éléments ai-je besoin pour démarrer mon projet ?',
    'faq.answer2':
      'Idéalement, une idée claire de vos besoins et quelques contenus de base (textes, images, logo). Je vous accompagne pour préciser ces éléments ensemble.',

    'faq.question3': "Que comprend l'optimisation SEO ?",
    'faq.answer3':
      "Il s'agit d'optimiser la structure du site, les temps de chargement, les balises et le contenu pour améliorer la visibilité sur les moteurs de recherche.",

    'faq.question4': 'Comment se passe la maintenance du site ?',
    'faq.answer4':
      'Je propose un service flexible et réactif : intervention à la demande avec une facturation horaire ou forfaitaire pour toute mise à jour ou modification.',

    'faq.question5': "Mon entreprise n'y connaît rien en web. Comment m'accompagnez-vous ?",
    'faq.answer5':
      "J'explique chaque étape de manière simple et claire. Mon objectif est de rendre le digital accessible et compréhensible pour tous, avec un accompagnement personnalisé.",

    // Technical section
    'faq.technical.title': '🛠️ Technique',
    'faq.technical.question1': 'Quelles technologies utilisez-vous ?',
    'faq.technical.answer1':
      "J'utilise les technologies modernes : Next.js, React, TypeScript, Tailwind CSS, Node.js. Le choix dépend des besoins du projet.",

    'faq.technical.question2': 'Le site sera-t-il responsive ?',
    'faq.technical.answer2':
      "Absolument ! Tous mes sites s'adaptent parfaitement aux mobiles, tablettes et ordinateurs. C'est un standard aujourd'hui.",

    // After delivery section
    'faq.afterDelivery.title': '📈 Après livraison',
    'faq.afterDelivery.question1': 'Proposez-vous de la formation ?',
    'faq.afterDelivery.answer1':
      "Oui, je forme mes clients à l'utilisation de leur site et fournis une documentation claire pour leur autonomie.",

    'faq.afterDelivery.question2': 'Que se passe-t-il en cas de problème ?',
    'faq.afterDelivery.answer2':
      'Support garanti pendant 3 mois après livraison. Ensuite, intervention rapide selon contrat de maintenance.',

    // Contact section
    'faq.contact.title': 'Vous ne trouvez pas la réponse à votre question ?',
    'faq.contact.description': "N'hésitez pas à me contacter directement, je réponds rapidement !",
    'faq.contact.askQuestion': 'Poser une question',
    'faq.contact.whatsapp': 'WhatsApp direct',

    // Cards
    'faq.card1.icon': '⚡',
    'faq.card1.title': 'Réactivité',
    'faq.card1.description': 'Réponse garantie sous 24h maximum',

    'faq.card2.icon': '🎯',
    'faq.card2.title': 'Conseil personnalisé',
    'faq.card2.description': 'Chaque projet est unique, mes conseils aussi',

    'faq.card3.icon': '💬',
    'faq.card3.title': 'Communication simple',
    'faq.card3.description': 'Pas de jargon technique, que du concret',

    // Contact
    'contact.title': 'Parlons de votre projet !',
    'contact.subtitle':
      "Pour toute demande de création de site, de refonte ou d'optimisation, n'hésitez pas à me contacter via le formulaire ci-dessous ou directement par :",
    'contact.description': '• WhatsApp / Telegram\n• Email\n• Appel téléphonique',
    'contact.email.label': 'Email',
    'contact.email.value': 's.sidikoff@gmail.com',
    'contact.phone.label': 'Téléphone',
    'contact.phone.value': '06 26 93 27 34',
    'contact.location.label': 'Localisation',
    'contact.location.value': 'Paris, Île-de-France, France',
    'contact.socialMedia.title': 'Réseaux sociaux',
    'contact.socialMedia.whatsapp': 'WhatsApp',
    'contact.socialMedia.telegram': 'Telegram',
    'contact.subdescription1': '',
    'contact.subdescription2': 'Réponse sous 24h',
    'contact.subdescription3': ' Devis gratuit',
    'contact.benefits.title': 'Pourquoi nous choisir ?',
    'contact.benefits.1': 'Solutions sur mesure',
    'contact.benefits.2': 'Support continu',
    'contact.form.title': 'Contactez-nous',
    'contact.form.subtitle': 'Remplissez le formulaire ci-dessous et recevez une réponse rapide',
    'contact.address': 'Paris, France',
    'contact.send': 'Demander un devis gratuit',
    'contact.firstName': 'Nom',
    'contact.placeholder.firstName': 'Votre nom',
    'contact.email': 'E-mail',
    'contact.placeholder.email': 'Votre adresse e-mail',
    'contact.message': 'Message',
    'contact.placeholder.message': 'Votre message',
    'contact.sending': 'Envoi en cours...',

    // Form validation errors
    'validation.firstName.required': 'Le nom est obligatoire',
    'validation.firstName.minLength': 'Le nom doit contenir au moins 2 caractères',
    'validation.email.required': "L'adresse e-mail est obligatoire",
    'validation.email.invalid': 'Veuillez saisir une adresse e-mail valide',
    'validation.tariff.required': 'Veuillez sélectionner un service',
    'validation.message.required': 'Le message est obligatoire',
    'validation.message.minLength': 'Le message doit contenir au moins 10 caractères',

    // Success popup messages
    'popup.success.title': 'Envoyé avec succès !',
    'popup.success.message':
      'Votre message a été envoyé avec succès ! Vous recevrez un email de confirmation sous peu. Nous vous contacterons bientôt !', // Footer
    'footer.rights':
      'SIDIKOFF DIGITAL — Agence Web à Paris. Création de sites internet sur mesure.',
    'footer.navigation.title': 'Navigation',
    'footer.navigation.home': 'Accueil',
    'footer.navigation.about': 'À propos',
    'footer.navigation.services': 'Services',
    'footer.navigation.portfolio': 'Portfolio',
    'footer.navigation.pricing': 'Tarifs',
    'footer.navigation.blog': 'Blog',
    'footer.navigation.contact': 'Contact',
    'footer.navigation.faq': 'FAQ',
    'footer.services.title': 'Services',
    'footer.services.webCreation': 'Création de sites web',
    'footer.services.redesign': 'Refonte / Redesign',
    'footer.services.seo': 'SEO & Optimisation',
    'footer.services.maintenance': 'Maintenance & Support',
    'footer.services.webApps': 'Applications web',
    'footer.services.ecommerce': 'E-commerce',
    'footer.contact.title': 'Contact',
    'footer.contact.email': 's.sidikoff@gmail.com',
    'footer.contact.phone': '+33 6 26 93 27 34',
    'footer.contact.location': 'Paris, France',
    'footer.contact.button': 'Nous contacter', // Legal Mentions
    'legal.title': 'Mentions légales',
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
    'legal.company.emailValue': 's.sidikoff@gmail.com',
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
      "Conformément au RGPD, vous disposez de droits sur vos données personnelles. Les données collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes et ne sont pas transmises à des tiers. Vous pouvez exercer vos droits concernant vos données personnelles en contactant à l'adresse e-mail : s.sidikoff@gmail.com.",
    'legal.cookies.title': 'Cookies',
    'legal.cookies.content':
      'Ce site utilise des cookies essentiels au fonctionnement du site. En continuant à naviguer sur ce site, vous acceptez leur utilisation.',
  },
  en: {
    // Common
    'common.back': 'Back',

    'nav.home': 'Home',
    'nav.portfolio': 'Portfolio',
    'nav.expertise': 'About',
    'nav.prices': 'Tariffs',
    'nav.services': 'Services',
    'nav.blog': 'Blog',
    'nav.faq': 'FAQ',
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
    'hero.stat3': 'Support',
    'hero.directContact': 'Or contact us directly:',
    'hero.contactSubtitle': 'Choose your preferred contact method',
    'hero.whatsappDesc': 'Quick response',
    'hero.telegramDesc': 'Instant chat',
    'hero.emailDesc': 'Formal contact', // Expertise
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
    'about.intro.title': 'SIDIKOFF DIGITAL',
    'about.intro.description':
      'is a web agency founded in France with an international outlook. We support brands, freelancers, entrepreneurs, and startups with tailored digital solutions that are bold, effective, and built to last.',

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
    'portfolio.loading': 'Loading...',
    'portfolio.viewProject': 'Visit Site',
    'portfolio.technologies': 'Technologies',
    'portfolio.allProjects': 'All Projects',
    'portfolio.showingAll': 'Showing all',
    'portfolio.projects': 'projects',
    'portfolio.project': 'project',
    'portfolio.found': 'Found',
    'portfolio.projectsWith': 'projects with',
    'portfolio.projectWith': 'project with',
    'project.notFound': 'Project not found',

    // Services
    'services.title': 'Services',
    'services.subtitle': 'Accessible and tailored web solutions for your business',
    'services.creation.title': 'Website Creation – From A to Z',
    'services.creation.description':
      'Each project is custom-designed to meet your specific needs. I handle the entire chain: design, development, deployment and monitoring.',
    'services.creation.feature1': 'Custom design',
    'services.creation.feature2': 'Complete development',
    'services.creation.feature3': 'Online deployment',
    'services.creation.feature4': 'Monitoring and maintenance',
    'services.redesign.title': 'Redesign / Makeover',
    'services.redesign.description':
      'Give your existing website a new lease of life! Improve usability, modernize aesthetics and optimize performance to deliver an impeccable user experience.',
    'services.redesign.feature1': 'Improved usability',
    'services.redesign.feature2': 'Aesthetic modernization',
    'services.redesign.feature3': 'Performance optimization',
    'services.redesign.feature4': 'Enhanced user experience',
    'services.seo.title': 'SEO & Visibility Optimization',
    'services.seo.description':
      "Get found by your customers. I optimize your website's natural referencing (SEO) using proven techniques, streamlined code and an adapted structure to boost your visibility on Google.",
    'services.seo.feature1': 'Natural referencing (SEO)',
    'services.seo.feature2': 'Technical optimization',
    'services.seo.feature3': 'Optimized code structure',
    'services.seo.feature4': 'Improved visibility',
    'services.maintenance.title': 'Maintenance & Support',
    'services.maintenance.description':
      'Enjoy continuous support: technical support, updates, modifications or addition of new features according to your needs. Hourly billing or on-demand for flexible and scalable service.',
    'services.maintenance.feature1': 'Continuous technical support',
    'services.maintenance.feature2': 'Regular updates',
    'services.maintenance.feature3': 'New features',
    'services.maintenance.feature4': 'Flexible and scalable service',
    'services.features': 'Features',
    'services.cta.pricing': 'View pricing',
    'services.cta.quote': 'Request a quote',
    'services.learnMore': 'Learn more',

    // Prices
    'prices.title': 'Plans',
    'prices.subtitle': 'Accessible and tailored solutions',
    'prices.popular': 'Most Popular',
    'prices.description':
      'Modern, high-performance, SEO-optimized websites to boost your visibility and attract more clients.',
    'prices.tier1.name': 'Essential Website',
    'prices.tier1.price': 'from 500 €',
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
    'prices.tier2.price': 'from 900 €',
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
    'prices.tier3.price': 'On request',
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

    // --- CustomQuoteSection translations ---
    'prices.maintenanceSupport.title': 'Maintenance and Support',
    'prices.maintenanceSupport.billing': 'Hourly billing or flat rate depending on the request',
    'prices.maintenanceSupport.1': 'Personalized support after delivery',
    'prices.maintenanceSupport.2': 'Occasional interventions for modifications and updates',
    'prices.maintenanceSupport.3':
      'Reactive technical support via email, phone, WhatsApp or Telegram',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Find answers to the most frequently asked questions',

    // General FAQ
    'faq.question1': 'What is the average timeframe for creating a website?',
    'faq.answer1':
      'The timeframe depends on the project complexity. For a standard website, plan between 3 to 6 weeks.',

    'faq.question2': 'What elements do I need to start my project?',
    'faq.answer2':
      'Ideally, a clear idea of your needs and some basic content (texts, images, logo). I help you clarify these elements together.',

    'faq.question3': 'What does SEO optimization include?',
    'faq.answer3':
      'It involves optimizing the site structure, loading times, tags, and content to improve visibility on search engines.',

    'faq.question4': 'How does website maintenance work?',
    'faq.answer4':
      'I offer a flexible and responsive service: on-demand intervention with hourly or flat rate billing for any updates or modifications.',

    'faq.question5': 'My company knows nothing about web technologies. How do you support me?',
    'faq.answer5':
      'I explain each step in simple and clear terms. My goal is to make digital accessible and understandable for everyone, with personalized support.',

    // Technical section
    'faq.technical.title': '🛠️ Technical',
    'faq.technical.question1': 'What technologies do you use?',
    'faq.technical.answer1':
      'I use modern technologies: Next.js, React, TypeScript, Tailwind CSS, Node.js. The choice depends on project needs.',

    'faq.technical.question2': 'Will the site be responsive?',
    'faq.technical.answer2':
      "Absolutely! All my sites adapt perfectly to mobile devices, tablets, and computers. It's a standard today.",

    // After delivery section
    'faq.afterDelivery.title': '📈 After delivery',
    'faq.afterDelivery.question1': 'Do you offer training?',
    'faq.afterDelivery.answer1':
      'Yes, I train my clients on how to use their site and provide clear documentation for their autonomy.',

    'faq.afterDelivery.question2': 'What happens in case of a problem?',
    'faq.afterDelivery.answer2':
      'Support guaranteed for 3 months after delivery. Then, quick intervention according to maintenance contract.',

    // Contact section
    'faq.contact.title': "Can't find the answer to your question?",
    'faq.contact.description': "Don't hesitate to contact me directly, I respond quickly!",
    'faq.contact.askQuestion': 'Ask a question',
    'faq.contact.whatsapp': 'Direct WhatsApp',

    // Cards
    'faq.card1.icon': '⚡',
    'faq.card1.title': 'Responsiveness',
    'faq.card1.description': 'Response guaranteed within 24h maximum',

    'faq.card2.icon': '🎯',
    'faq.card2.title': 'Personalized advice',
    'faq.card2.description': 'Each project is unique, my advice too',

    'faq.card3.icon': '💬',
    'faq.card3.title': 'Simple communication',
    'faq.card3.description': 'No technical jargon, only concrete solutions',

    'contact.title': "Let's talk about your project!",
    'contact.subtitle':
      'For any website creation, redesign or optimization request, feel free to contact me via the form below or directly by:',
    'contact.description': '• WhatsApp / Telegram\n• Email\n• Phone call',
    'contact.email.label': 'Email',
    'contact.email.value': 's.sidikoff@gmail.com',
    'contact.phone.label': 'Phone',
    'contact.phone.value': '06 26 93 27 34',
    'contact.location.label': 'Location',
    'contact.location.value': 'Paris, France',
    'contact.socialMedia.title': 'Social Media',
    'contact.socialMedia.whatsapp': 'WhatsApp',
    'contact.socialMedia.telegram': 'Telegram',
    'contact.subdescription1': '',
    'contact.subdescription2': 'Reply within 24h',
    'contact.subdescription3': ' Free quote',
    'contact.benefits.title': 'Why choose us?',
    'contact.benefits.1': 'Custom solutions',
    'contact.benefits.2': 'Continuous support',
    'contact.form.title': 'Contact Us',
    'contact.form.subtitle': 'Fill out the form below and receive a quick response',
    'contact.address': 'Paris, France',
    'contact.send': 'Request a free quote',
    'contact.firstName': 'Name',
    'contact.placeholder.firstName': 'Your full name',
    'contact.email': 'Email',
    'contact.placeholder.email': 'Your email address',
    'contact.message': 'Message',
    'contact.placeholder.message': 'Your message',
    'contact.sending': 'Sending...',

    // Form validation errors
    'validation.firstName.required': 'Name is required',
    'validation.firstName.minLength': 'Name must contain at least 2 characters',
    'validation.email.required': 'Email address is required',
    'validation.email.invalid': 'Please enter a valid email address',
    'validation.tariff.required': 'Please select a service',
    'validation.message.required': 'Message is required',
    'validation.message.minLength': 'Message must contain at least 10 characters',

    // Success popup messages
    'popup.success.title': 'Successfully sent!',
    'popup.success.message':
      'Your message has been sent successfully! You will receive a confirmation email shortly. We will contact you soon!', // Footer
    'footer.rights': 'SIDIKOFF DIGITAL — Web Agency in Paris. Custom website development.',
    'footer.navigation.title': 'Navigation',
    'footer.navigation.home': 'Home',
    'footer.navigation.about': 'About',
    'footer.navigation.services': 'Services',
    'footer.navigation.portfolio': 'Portfolio',
    'footer.navigation.pricing': 'Pricing',
    'footer.navigation.blog': 'Blog',
    'footer.navigation.contact': 'Contact',
    'footer.navigation.faq': 'FAQ',
    'footer.services.title': 'Services',
    'footer.services.webCreation': 'Website Creation',
    'footer.services.redesign': 'Redesign / Revamp',
    'footer.services.seo': 'SEO & Optimization',
    'footer.services.maintenance': 'Maintenance & Support',
    'footer.services.webApps': 'Web Applications',
    'footer.services.ecommerce': 'E-commerce',
    'footer.contact.title': 'Contact',
    'footer.contact.email': 's.sidikoff@gmail.com',
    'footer.contact.phone': '+33 6 26 93 27 34',
    'footer.contact.location': 'Paris, France',
    'footer.contact.button': 'Contact Us', // Legal Mentions
    'legal.title': 'Mentions légales',
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
    'legal.company.emailValue': 's.sidikoff@gmail.com',
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
      "Conformément au RGPD, vous disposez de droits sur vos données personnelles. Les données collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes et ne sont pas transmises à des tiers. Vous pouvez exercer vos droits concernant vos données personnelles en contactant à l'adresse e-mail : s.sidikoff@gmail.com.",
    'legal.cookies.title': 'Cookies',
    'legal.cookies.content':
      'Ce site utilise des cookies essentiels au fonctionnement du site. En continuant à naviguer sur ce site, vous acceptez leur utilisation.',
  },
  ru: {
    // Common
    'common.back': 'Назад',

    'nav.home': 'Главная',
    'nav.portfolio': 'Портфолио',
    'nav.expertise': 'О нас',
    'nav.prices': 'Тарифы',
    'nav.services': 'Услуги',
    'nav.blog': 'Блог',
    'nav.faq': 'Частые вопросы',
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
    'hero.stat3': 'Поддержка',
    'hero.directContact': 'Или свяжитесь с нами напрямую:',
    'hero.contactSubtitle': 'Выберите удобный способ связи',
    'hero.whatsappDesc': 'Быстрый ответ',
    'hero.telegramDesc': 'Мгновенный чат',
    'hero.emailDesc': 'Официальная связь', // Expertise
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
    'about.intro.title': 'SIDIKOFF DIGITAL',
    'about.intro.description':
      'это веб-агентство, основанное во Франции с международным подходом. Мы помогаем брендам, фрилансерам, предпринимателям и стартапам создавать эффективные цифровые решения, которые работают и запоминаются.',

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
    'portfolio.loading': 'Загрузка...',
    'portfolio.viewProject': 'Перейти на сайт',
    'portfolio.technologies': 'Технологии',
    'portfolio.allProjects': 'Все проекты',
    'portfolio.showingAll': 'Показаны все',
    'portfolio.projects': 'проектов',
    'portfolio.project': 'проект',
    'portfolio.found': 'Найдено',
    'portfolio.projectsWith': 'проектов с',
    'portfolio.projectWith': 'проект с',
    'project.notFound': 'Проект не найден',

    // Services
    'services.title': 'Услуги',
    'services.subtitle': 'Доступные и индивидуальные веб-решения для вашего бизнеса',
    'services.creation.title': 'Создание сайтов – От А до Я',
    'services.creation.description':
      'Каждый проект разрабатывается индивидуально для удовлетворения ваших потребностей. Я обеспечиваю весь цикл: дизайн, разработку, запуск и поддержку.',
    'services.creation.feature1': 'Индивидуальный дизайн',
    'services.creation.feature2': 'Полная разработка',
    'services.creation.feature3': 'Запуск в интернете',
    'services.creation.feature4': 'Мониторинг и поддержка',
    'services.redesign.title': 'Редизайн / Обновление',
    'services.redesign.description':
      'Дайте вашему существующему сайту новую жизнь! Улучшите эргономику, модернизируйте эстетику и оптимизируйте производительность для безупречного пользовательского опыта.',
    'services.redesign.feature1': 'Улучшение эргономики',
    'services.redesign.feature2': 'Эстетическая модернизация',
    'services.redesign.feature3': 'Оптимизация производительности',
    'services.redesign.feature4': 'Улучшенный пользовательский опыт',
    'services.seo.title': 'SEO и Оптимизация Видимости',
    'services.seo.description':
      'Позвольте клиентам найти вас. Я оптимизирую естественное продвижение (SEO) вашего сайта с помощью проверенных методов, облегченного кода и адаптированной структуры для повышения видимости в Google.',
    'services.seo.feature1': 'Естественное продвижение (SEO)',
    'services.seo.feature2': 'Техническая оптимизация',
    'services.seo.feature3': 'Оптимизированная структура кода',
    'services.seo.feature4': 'Повышение видимости',
    'services.maintenance.title': 'Техподдержка и Сопровождение',
    'services.maintenance.description':
      'Наслаждайтесь постоянной поддержкой: техническая поддержка, обновления, модификации или добавление новых функций согласно вашим потребностям. Почасовая оплата или по запросу для гибкого и масштабируемого сервиса.',
    'services.maintenance.feature1': 'Непрерывная техническая поддержка',
    'services.maintenance.feature2': 'Регулярные обновления',
    'services.maintenance.feature3': 'Новые функции',
    'services.maintenance.feature4': 'Гибкий и масштабируемый сервис',
    'services.features': 'Возможности',
    'services.cta.pricing': 'Посмотреть цены',
    'services.cta.quote': 'Запросить предложение',
    'services.learnMore': 'Узнать больше',

    // Цены (Тарифы)
    'prices.title': 'Цены',
    'prices.subtitle': 'Доступные и индивидуальные решения',
    'prices.popular': 'Популярно',
    'prices.description':
      'Современные, быстрые и SEO-оптимизированные сайты для роста вашего бизнеса и привлечения клиентов.',
    'prices.tier1.name': 'Сайт-визитка',
    'prices.tier1.price': 'от 500 €',
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
    'prices.tier2.price': 'от 900 €',
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

    // --- CustomQuoteSection translations ---
    'prices.maintenanceSupport.title': 'Техническая поддержка и сопровождение',
    'prices.maintenanceSupport.billing':
      'Почасовая оплата или фиксированная ставка в зависимости от запроса',
    'prices.maintenanceSupport.1': 'Персонализированное сопровождение после доставки',
    'prices.maintenanceSupport.2': 'Разовые вмешательства для модификаций и обновлений',
    'prices.maintenanceSupport.3':
      'Техническая поддержка по WhatsApp, Telegram или электронной почте',

    // FAQ
    'faq.title': 'Часто задаваемые вопросы',
    'faq.subtitle': 'Найдите ответы на самые часто задаваемые вопросы',

    // General FAQ
    'faq.question1': 'Какой средний срок создания сайта?',
    'faq.answer1':
      'Срок зависит от сложности проекта. Для обычного сайта планируйте от 3 до 6 недель.',

    'faq.question2': 'Какие элементы мне нужны для запуска проекта?',
    'faq.answer2':
      'В идеале — чёткое понимание ваших потребностей и базовый контент (тексты, изображения, логотип). Я помогу вам уточнить эти элементы вместе.',

    'faq.question3': 'Что включает SEO-оптимизация?',
    'faq.answer3':
      'Это оптимизация структуры сайта, времени загрузки, тегов и контента для улучшения видимости в поисковых системах.',

    'faq.question4': 'Как происходит поддержка сайта?',
    'faq.answer4':
      'Я предлагаю гибкий и отзывчивый сервис: вмешательство по запросу с почасовой оплатой или фиксированной ставкой для любых обновлений или изменений.',

    'faq.question5': 'Моя компания ничего не знает о веб-технологиях. Как вы меня поддержите?',
    'faq.answer5':
      'Я объясняю каждый шаг простым и понятным языком. Моя цель — сделать цифровые технологии доступными и понятными для всех, с персональной поддержкой.',

    // Technical section
    'faq.technical.title': '🛠️ Техническая часть',
    'faq.technical.question1': 'Какие технологии вы используете?',
    'faq.technical.answer1':
      'Я использую современные технологии: Next.js, React, TypeScript, Tailwind CSS, Node.js. Выбор зависит от потребностей проекта.',

    'faq.technical.question2': 'Будет ли сайт адаптивным?',
    'faq.technical.answer2':
      'Абсолютно! Все мои сайты идеально адаптируются к мобильным устройствам, планшетам и компьютерам. Это стандарт сегодня.',

    // After delivery section
    'faq.afterDelivery.title': '📈 После сдачи',
    'faq.afterDelivery.question1': 'Предлагаете ли вы обучение?',
    'faq.afterDelivery.answer1':
      'Да, я обучаю клиентов использованию их сайта и предоставляю понятную документацию для самостоятельной работы.',

    'faq.afterDelivery.question2': 'Что происходит в случае проблемы?',
    'faq.afterDelivery.answer2':
      'Поддержка гарантирована в течение 3 месяцев после сдачи. Затем — быстрое вмешательство согласно договору на поддержку.',

    // Contact section
    'faq.contact.title': 'Не можете найти ответ на свой вопрос?',
    'faq.contact.description': 'Не стесняйтесь связаться со мной напрямую, я быстро отвечаю!',
    'faq.contact.askQuestion': 'Задать вопрос',
    'faq.contact.whatsapp': 'WhatsApp напрямую',

    // Cards
    'faq.card1.icon': '⚡',
    'faq.card1.title': 'Быстрый отклик',
    'faq.card1.description': 'Ответ гарантирован максимум в течение 24ч',

    'faq.card2.icon': '🎯',
    'faq.card2.title': 'Персональные советы',
    'faq.card2.description': 'Каждый проект уникален, мои советы тоже',

    'faq.card3.icon': '💬',
    'faq.card3.title': 'Простое общение',
    'faq.card3.description': 'Никакого технического жаргона, только конкретика',

    'contact.title': 'Поговорим о вашем проекте!',
    'contact.subtitle':
      'По любому запросу создания сайта, редизайна или оптимизации, не стесняйтесь связаться со мной через форму ниже или напрямую:',
    'contact.description': '• WhatsApp / Telegram\n• Email\n• Телефонный звонок',
    'contact.email.label': 'Email',
    'contact.email.value': 's.sidikoff@gmail.com',
    'contact.phone.label': 'Телефон',
    'contact.phone.value': '06 26 93 27 34',
    'contact.location.label': 'Местоположение',
    'contact.location.value': 'Париж, Франция',
    'contact.socialMedia.title': 'Социальные сети',
    'contact.socialMedia.whatsapp': 'WhatsApp',
    'contact.socialMedia.telegram': 'Telegram',
    'contact.subdescription1': '',
    'contact.subdescription2': 'Ответ в течение 24 часов',
    'contact.subdescription3': ' Бесплатный расчёт стоимости',
    'contact.benefits.title': 'Почему выбирают нас?',
    'contact.benefits.1': 'Индивидуальные решения',
    'contact.benefits.2': 'Постоянная поддержка',
    'contact.form.title': 'Свяжитесь с нами',
    'contact.form.subtitle': 'Заполните форму ниже и получите быстрый ответ',
    'contact.address': 'Париж, Франция',
    'contact.send': 'Запросить бесплатную консультацию',
    'contact.firstName': 'Имя',
    'contact.placeholder.firstName': 'Ваше полное имя',
    'contact.email': 'Email',
    'contact.placeholder.email': 'Ваш адрес электронной почты',
    'contact.message': 'Сообщение',
    'contact.placeholder.message': 'Ваше сообщение',
    'contact.sending': 'Отправка...',

    // Form validation errors
    'validation.firstName.required': 'Имя обязательно для заполнения',
    'validation.firstName.minLength': 'Имя должно содержать минимум 2 символа',
    'validation.email.required': 'Электронная почта обязательна для заполнения',
    'validation.email.invalid': 'Пожалуйста, введите корректный адрес электронной почты',
    'validation.tariff.required': 'Пожалуйста, выберите услугу',
    'validation.message.required': 'Сообщение обязательно для заполнения',
    'validation.message.minLength': 'Сообщение должно содержать минимум 10 символов',

    // Success popup messages
    'popup.success.title': 'Успешно отправлено!',
    'popup.success.message':
      'Ваше сообщение было успешно отправлено! Вы получите подтверждение по электронной почте в ближайшее время. Мы скоро свяжемся с вами!',

    'footer.rights': 'SIDIKOFF DIGITAL — Веб-агентство в Париже. Разработка сайтов под ключ.',
    'footer.navigation.title': 'Навигация',
    'footer.navigation.home': 'Главная',
    'footer.navigation.about': 'О нас',
    'footer.navigation.services': 'Услуги',
    'footer.navigation.portfolio': 'Портфолио',
    'footer.navigation.pricing': 'Цены',
    'footer.navigation.blog': 'Блог',
    'footer.navigation.contact': 'Контакт',
    'footer.navigation.faq': 'FAQ',
    'footer.services.title': 'Услуги',
    'footer.services.webCreation': 'Создание веб-сайтов',
    'footer.services.redesign': 'Редизайн / Обновление',
    'footer.services.seo': 'SEO и Оптимизация',
    'footer.services.maintenance': 'Обслуживание и Поддержка',
    'footer.services.webApps': 'Веб-приложения',
    'footer.services.ecommerce': 'Электронная коммерция',
    'footer.contact.title': 'Контакт',
    'footer.contact.email': 's.sidikoff@gmail.com',
    'footer.contact.phone': '+33 6 26 93 27 34',
    'footer.contact.location': 'Париж, Франция',
    'footer.contact.button': 'Связаться с нами', // Legal Mentions
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
    'legal.company.emailValue': 's.sidikoff@gmail.com',
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
      'В соответствии с GDPR, у вас есть права на ваши персональные данные. Данные, собранные через контактную форму, используются только для ответа на ваши запросы и не передаются третьим лицам. Вы можете осуществить свои права касательно ваших персональных данных, связавшись с нами по электронной почте: s.sidikoff@gmail.com.',
    'legal.cookies.title': 'Куки',
    'legal.cookies.content':
      'Этот сайт использует основные куки, необходимые для функционирования сайта. Продолжая навигацию по этому сайту, вы принимаете их использование.',
  },
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'fr',
  setLanguage: () => {},
  t: (key: string) => key,
  plural: (count: number, singular: string, plural?: string) =>
    count === 1 ? singular : plural || singular,
})

export const useLanguage = () => useContext(LanguageContext)

interface LanguageProviderProps {
  children: React.ReactNode
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('fr')
  const [isInitialized, setIsInitialized] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    // Проверяем, что компонент примонтирован (клиент)
    if (!isMounted) return

    // Сначала проверяем сохраненный язык в localStorage
    const savedLanguage = localStorage.getItem('language') as Language

    if (savedLanguage && ['fr', 'en', 'ru'].includes(savedLanguage)) {
      // Если есть сохраненный язык, используем его
      setLanguage(savedLanguage)
    } else {
      // SEO оптимизация: используем французский как язык по умолчанию
      // вместо автоматического определения языка браузера.
      // Это улучшает SEO, так как поисковые системы видят согласованный
      // основной язык сайта при первом посещении.
      setLanguage('fr')
      localStorage.setItem('language', 'fr')
    }

    setIsInitialized(true)
  }, [isMounted])
  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    // Проверяем, что компонент примонтирован перед использованием localStorage
    if (isMounted) {
      localStorage.setItem('language', newLanguage)
    }
  }
  const t = (key: string): string => {
    return translations[language]?.[key] || key
  }

  const plural = (count: number, singular: string, plural?: string): string => {
    if (language === 'ru') {
      // Russian plural rules: 1, 2-4, 5+
      const lastDigit = count % 10
      const lastTwoDigits = count % 100

      if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        return plural || singular
      } else if (lastDigit === 1) {
        return singular
      } else if (lastDigit >= 2 && lastDigit <= 4) {
        return plural || singular
      } else {
        return plural || singular
      }
    } else {
      // French and English: simple plural rule
      return count === 1 ? singular : plural || singular
    }
  }
  // Если не инициализирован, показываем с дефолтным языком
  if (!isInitialized) {
    return (
      <LanguageContext.Provider
        value={{ language: 'fr', setLanguage: handleSetLanguage, t, plural }}>
        {children}
      </LanguageContext.Provider>
    )
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, plural }}>
      {children}
    </LanguageContext.Provider>
  )
}

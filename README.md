# SIDIKOFF Digital - Agence Web Parisienne

Site officiel de SIDIKOFF DIGITAL, agence web spécialisée en création de sites internet et applications web modernes à Paris. Une vitrine technologique démontrant l'expertise en développement web moderne avec Next.js 15, TypeScript et Tailwind CSS.

## 🌐 Site Web

**🔗 [www.sidikoff.com](https://www.sidikoff.com)**

## 🚀 Technologies Utilisées

- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Typage statique pour une meilleure fiabilité
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Animations et interactions avancées
- **Vercel Analytics** - Analyse de performance et utilisateur
- **Lucide React** - Icônes modernes et optimisées

## ✨ Fonctionnalités Principales

### 🎨 Interface Utilisateur

- 📱 **Design Responsive** - Optimisé pour tous les appareils
- 🌙 **Mode Sombre/Clair** - Commutation automatique de thème
- 🎭 **Animations Interactives** - Effets de survol avec Framer Motion
- 🎯 **Suivi de Souris** - Gradients radials qui suivent le curseur
- ✨ **Effets Visuels** - Gradients modernes et animations fluides

### 🌍 Multi-langue

- 🇫🇷 **Français** (principal) - Marché parisien
- 🇬🇧 **Anglais** - Clients internationaux
- 🇷🇺 **Russe** - Communauté russophone

### 🔍 SEO & Performance

- 🎯 **SEO Optimisé** - Méta-tags, données structurées JSON-LD
- ⚡ **Performance Élevée** - Core Web Vitals optimisés
- 🗺️ **Sitemap Dynamique** - Génération automatique XML
- 🤖 **Robots.txt** - Directives pour les moteurs de recherche
- 📊 **Analytics Intégrés** - Google Analytics 4 et Vercel Analytics

### 📱 Fonctionnalités Métier

- 🏢 **Présentation Agence** - À propos et expertise
- 💼 **Portfolio** - Projets réalisés avec détails techniques
- 🛠️ **Services** - Offres et tarifs transparents
- ❓ **FAQ Interactive** - Questions fréquentes avec animations
- 📧 **Contact** - Formulaire et informations de contact
- 🍪 **Mentions Légales** - Conformité RGPD

## 📁 Structure du Projet

```
app/
├── layout.tsx              # Layout principal avec SEO
├── page.tsx                # Page d'accueil
├── globals.css             # Styles globaux
├── error.tsx               # Gestion d'erreurs avec redirection
├── not-found.tsx           # Page 404 avec redirection
├── sitemap.ts              # Génération sitemap XML
├── robots.ts               # Configuration robots.txt
├── mentions-legales/       # Pages légales
├── projects/               # Portfolio de projets
│   ├── page.tsx           # Liste des projets
│   ├── [id]/              # Pages projet individuelles
│   └── not-found.tsx      # Redirection pour projets inexistants
└── services/               # Services et tarifs

components/
├── Header.tsx              # Navigation avec menu mobile
├── Hero.tsx                # Section héro avec CTA
├── About.tsx               # Présentation de l'agence
├── Services.tsx            # Services avec tarifs
├── Portfolio.tsx           # Galerie de projets
├── Prices.tsx              # Grille tarifaire
├── FAQ.tsx                 # Questions fréquentes
├── Contact.tsx             # Formulaire de contact
├── Footer.tsx              # Footer avec liens
├── Analytics.tsx           # Intégration analytics
└── StructuredData.tsx      # Données structurées SEO

lib/
├── seo.ts                  # Utilitaires SEO et métadonnées
├── redirect.ts             # Système de redirection
├── gtag.ts                 # Configuration Google Analytics
└── performance.ts          # Monitoring des performances

data/
└── portfolio-data.ts       # Base de données des projets

middleware.ts               # Middleware de redirection

```

## 🛠 Installation et Développement

### Prérequis

- Node.js 18+
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/sidikoff/sidikoff-digital.git
cd sidikoff-digital

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

### Scripts Disponibles

```bash
npm run dev      # Serveur de développement (http://localhost:3000)
npm run build    # Build de production
npm run start    # Serveur de production
npm run lint     # Analyse du code avec ESLint
```

## 🎯 Optimisations SEO Implémentées

### Données Structurées (Schema.org)

- **LocalBusiness** - Agence web parisienne
- **Organization** - Informations entreprise
- **WebSite** - Configuration site web
- **Service** - Services proposés
- **FAQ** - Questions fréquentes
- **Breadcrumb** - Navigation structurée

### Configuration Technique

- **Sitemap XML** - `/sitemap.xml`
- **Robots.txt** - `/robots.txt`
- **Open Graph** - Partage réseaux sociaux
- **Twitter Cards** - Optimisation Twitter
- **Meta Tags** - Titres et descriptions optimisés
- **Canonical URLs** - Prévention contenu dupliqué

### Performance

- **Core Web Vitals** - Métriques essentielles monitored
- **Lazy Loading** - Chargement optimisé des images
- **Code Splitting** - Optimisation du bundle
- **CDN** - Distribution via Vercel Edge Network

## 🔒 Fonctionnalités de Sécurité

- **Middleware de Redirection** - Protection contre les 404
- **Gestion d'Erreurs** - Redirection automatique vers l'accueil
- **Validation des Routes** - Contrôle des chemins valides
- **Headers de Sécurité** - Configuration via Next.js

## 🌐 Déploiement

### Vercel (Recommandé)

```bash
# Build du projet
npm run build

# Déployer via Vercel CLI
npx vercel --prod
```

### Autres Options

- **Netlify** - Déploiement statique
- **Railway** - Applications full-stack
- **AWS Amplify** - Solutions enterprise
- **DigitalOcean** - Cloud développeur

## 📊 Analytics et Monitoring

- **Google Analytics 4** - Suivi utilisateurs et conversions
- **Vercel Analytics** - Métriques de performance en temps réel
- **Speed Insights** - Optimisation vitesse de chargement
- **Core Web Vitals** - Métriques essentielles Google

## 🎨 Design System

### Couleurs

- **Primaire** - Indigo (#4f46e5)
- **Secondaire** - Purple (#7c3aed)
- **Accent** - Blue (#3b82f6)

### Typographie

- **Primaire** - Inter (Google Fonts)
- **Code** - JetBrains Mono
- **Support Cyrillic** - Multi-langue complet

### Breakpoints

```css
sm: 640px    # Mobile large
md: 768px    # Tablette
lg: 1024px   # Desktop
xl: 1280px   # Desktop large
2xl: 1536px  # Desktop XL
```

### Personnalisation

- **Couleurs** - Modifier `tailwind.config.ts`
- **Contenu** - Éditer `data/portfolio-data.ts`
- **SEO** - Configurer `lib/seo.ts`
- **Analytics** - Paramétrer `components/Analytics.tsx`

## 🧪 Tests et Qualité

### Lighthouse Scores Cibles

- **Performance** - 95+
- **Accessibility** - 95+
- **Best Practices** - 95+
- **SEO** - 95+

### Validation SEO

- ✅ Données structurées validées
- ✅ Meta tags optimisés
- ✅ Core Web Vitals en vert
- ✅ Mobile-friendly confirmé

## 📈 Roadmap

### Version Actuelle (v1.0)

- ✅ Site vitrine complet
- ✅ Portfolio interactif
- ✅ SEO optimisé
- ✅ Multi-langue
- ✅ Analytics intégrés

### Prochaines Versions

- 🔄 Blog technique
- 🔄 Espace client
- 🔄 Système de devis en ligne
- 🔄 Chatbot IA
- 🔄 PWA (Progressive Web App)

## 📧 Contact

**SIDIKOFF DIGITAL - Agence Web à Paris**

- 🌐 **Site Web** : [www.sidikoff.com](https://www.sidikoff.com)
- 📧 **Email** : s.sidikoff@gmail.com
- 📍 **Localisation** : Paris, France
- 💼 **LinkedIn** : [SIDIKOFF Digital](https://linkedin.com/company/sidikoff-digital)
- 🐙 **GitHub** : [ssidikov](https://github.com/ssidikov)

### Services Proposés

- 🏗️ **Création de sites web** - Sites vitrine, e-commerce, applications
- 📱 **Applications web** - React, Next.js, TypeScript
- 🎨 **Design UX/UI** - Interface moderne et intuitive
- 🔍 **Référencement SEO** - Optimisation moteurs de recherche
- 🚀 **Performance** - Optimisation vitesse et Core Web Vitals
- 🌐 **Multi-langue** - Sites internationaux

---

**Développé avec ❤️ à Paris en utilisant Next.js 15 et les technologies web modernes.**

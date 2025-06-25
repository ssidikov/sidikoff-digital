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

## 🤝 Contribution

Ce projet suit les standards de l'industrie pour le développement web moderne. Les contributions sont les bienvenues !

### Guidelines

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit les changements (`git commit -m 'Ajouter nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

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

_Dernière mise à jour : Mai 2025_

## 📧 Email Configuration & Troubleshooting

### Email Setup

The contact form uses Gmail SMTP to send confirmation emails to users and notifications to admins. The configuration is simplified with built-in Gmail settings.

#### Required Environment Variables

```bash
# Email Configuration (Gmail - Simplified Setup)
# Only MTP_PASSWORD is required - Gmail settings are built-in
MTP_PASSWORD=your-gmail-app-password

# Admin Configuration (optional - defaults to s.sidikoff@gmail.com)
ADMIN_EMAIL=s.sidikoff@gmail.com
```

#### Gmail Configuration

1. **Enable 2FA** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account Settings
   - Security → App passwords
   - Generate password for "Mail"
   - Use this password as `MTP_PASSWORD`

#### Testing Email Configuration

Run the email test script to verify your configuration:

```bash
npm run test-email
```

This script will:

- ✅ Check all required environment variables
- 📧 Send a test email to verify SMTP connection
- 🧪 Test user confirmation email template
- 📝 Provide troubleshooting guidance

### Common Email Issues on Vercel

#### Issue 1: "Email transporter is not available"

**Cause**: Missing MTP_PASSWORD environment variable

**Solution**:

1. Check that `MTP_PASSWORD` is set in Vercel environment variables
2. Ensure `MTP_PASSWORD` is your Gmail App Password, not your regular Gmail password
3. The Gmail user (s.sidikoff@gmail.com) is built into the configuration

#### Issue 2: "EAUTH - Authentication failed"

**Cause**: Incorrect Gmail App Password

**Solution**:

1. Regenerate Gmail App Password
2. Ensure 2FA is enabled on Gmail account
3. Check that `SMTP_USER` matches the Gmail account

#### Issue 3: "ETIMEDOUT - Connection timeout"

**Cause**: Network issues or firewall blocking SMTP

**Solution**:

1. Try different SMTP ports (587, 465)
2. For port 465, set `secure: true` in the email config
3. Consider using alternative SMTP providers (SendGrid, Mailgun)

#### Issue 4: Emails sent but not received

**Cause**: Spam filters or email delivery issues

**Solution**:

1. Check spam/junk folders
2. Verify sender email reputation
3. Add SPF/DKIM records to your domain
4. Use a dedicated email service for production

### Alternative SMTP Providers

For production deployments, consider these alternatives:

#### SendGrid

```bash
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=your-sendgrid-api-key
```

#### Mailgun

```bash
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=your-mailgun-username
SMTP_PASSWORD=your-mailgun-password
```

### Environment Variables on Vercel

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add all required email variables:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASSWORD`
   - `ADMIN_EMAIL`
4. Redeploy your application

### Debugging Email Issues

Enable detailed email logging by checking Vercel function logs:

1. Go to Vercel dashboard → Functions
2. Click on your deployment
3. View logs for the `/api/contact` endpoint
4. Look for email success/error messages

Common log messages:

- ✅ `Email sent successfully: [message-id]`
- ❌ `Email transporter is not available`
- ❌ `Email send error: [error details]`

# Page Agence Web Paris 15ème - UX/UI Redesign

## 🎨 Design System

### Palette de Couleurs

**Couleurs Principales:**
- **Indigo (#6366F1)** - Couleur primaire, moderne et professionnelle
- **Pink (#EC4899)** - Couleur secondaire, dynamique et accrocheuse  
- **Purple (#8B5CF6)** - Couleur d'accentuation
- **Slate Dark (#0F172A)** - Texte principal
- **Slate Light (#F8FAFC)** - Arrière-plans clairs

**Gradients:**
- Hero: `from-indigo-900/95 via-purple-900/90 to-pink-900/85`
- Buttons: `from-pink-500 to-purple-600`
- Cards: `from-indigo-600 to-purple-600`

### Typographie

**Fonts:**
- **Space Grotesk** - Titres et headings (geometric sans-serif)
- **Inter** - Corps de texte et contenu (variable: `--font-inter`)

**Hiérarchie:**
- H1: `text-5xl md:text-6xl lg:text-7xl font-black` (Space Grotesk)
- H2: `text-4xl md:text-5xl lg:text-6xl font-black` (Space Grotesk)  
- H3: `text-2xl md:text-3xl font-black` (Space Grotesk)
- Body: `text-xl font-light` (Inter)

## 📐 Sections

### 1. Hero Section (Full Viewport)
- **Background:** Image de Paris avec overlay gradient multi-couche
- **Stats Cards:** Grille 2x2 avec icônes et métriques clés
- **CTAs:** Boutons gradient rose-violet avec hover effects
- **Animated Orbs:** Orbes de gradient animés pour effet visuel

### 2. Services Section
- **Layout:** Grille 3 colonnes avec cards modernes
- **Images:** Photos Unsplash pour chaque service
- **Hover:** Scale image + border gradient
- **Icons:** Lucide React dans badges circulaires

### 3. About Section (Split Layout)
- **Background:** Gradient dark avec orbes animés
- **Image:** Photo d'équipe avec badge de stats floating
- **Cards:** Fond glassmorphism avec icônes gradient

### 4. Process Section (Timeline)
- **Numbers:** Grands badges carrés avec gradients
- **Connecteurs:** Lignes gradient entre les étapes
- **Cards:** Fond blanc avec hover shadow

### 5. Portfolio Teaser
- **CTA:** Bouton gradient indigo-violet centré

### 6. Final CTA
- **Background:** Photo avec overlay gradient foncé
- **Badge:** Localisation Paris 15ème avec icône
- **Trust Indicators:** Grid 4 colonnes avec stats

## 🖼️ Images Utilisées

Toutes les images proviennent d'Unsplash (libres de droits):

1. **hero-paris.jpg** - Tour Eiffel et Paris
2. **web-development.jpg** - Développement web  
3. **office-workspace.jpg** - Bureau moderne
4. **coding-laptop.jpg** - Programmation
5. **team-collaboration.jpg** - Équipe en collaboration
6. **team-meeting.jpg** - Réunion d'équipe

## 🎭 Animations

**Framer Motion:**
- Initial fade-in avec Y translation
- Viewport triggers pour sections
- Stagger animations pour listes
- Hover scale et translate effects
- Pulse animations pour orbes de background

## 🎯 Points Forts du Design

✅ **Moderne et Vibrant** - Palette purple/pink électrique  
✅ **Professional** - Typographie Grotesk pour crédibilité  
✅ **Immersif** - Hero full-height avec images de qualité  
✅ **Engageant** - Animations fluides et micro-interactions  
✅ **Responsive** - Adapté mobile-first avec breakpoints MD/LG  
✅ **Performance** - Images optimisées Next.js avec sizes  
✅ **SEO Friendly** - Sémantique HTML5 et alt texts  

## 📱 Responsive Breakpoints

- **Mobile:** < 768px (Stack vertical, full width)
- **Tablet:** 768px - 1024px (Grid 2 colonnes)  
- **Desktop:** > 1024px (Grid 3-4 colonnes, split layouts)

## 🚀 Performance

- Lazy loading images avec Next/Image
- Optimisation gradient CSS (bg-linear custom)
- Font display: swap/optional
- Viewport animations once: true (pas de re-trigger)
- Sizes attributes pour responsive images

---

**Créé:** Novembre 2025  
**Design Pattern:** Modern Glassmorphism + Bold Gradients  
**Framework:** Next.js 16 + Tailwind CSS 4 + Framer Motion

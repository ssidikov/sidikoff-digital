---
name: Sidikoff Digital Design System
description: Visual language for a premium, high-performance web agency website
colors:
  primary: "#3377FF"
  accent-dark: "#1A5CE6"
  accent-light: "#5B9BFF"
  neutral-bg: "#F9F7F7"
  neutral-fg: "#112D4E"
  neutral-muted: "#DBE2EF"
  neutral-card: "#FFFFFF"
  brand-blue: "#3F72AF"
typography:
  display:
    fontFamily: "var(--font-grotesk), Space Grotesk, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  body:
    fontFamily: "var(--font-inter), Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  xxl: "32px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "9999px"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.accent-dark}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "9999px"
    padding: "12px 24px"
---

# Design System: Sidikoff Digital

## 1. Overview

**Creative North Star: "The Performance Canvas"**

This visual system is built for a modern web development agency specializing in Next.js, React, and aggressive SEO optimization. The design is clean, fast, and structured, utilizing light-tinted backgrounds with highly focused electric blue accents. Content is framed with fine hairlines and high-contrast, premium typography, reflecting technical authority and engineering excellence.

**Key Characteristics:**
- High contrast, dark navy text on off-white canvas
- Saturated electric blue interactive elements
- Strict layout rhythm with dynamic responsive padding
- Zero unnecessary container fills or box-shadow bloat

## 2. Colors

The color palette is built on high-contrast tinted neutrals paired with a singular saturated blue accent.

### Primary
- **Electric Blue** (#3377FF): Used exclusively for interactive focal points, primary CTA buttons, and active states.
- **Deep Accent Blue** (#1A5CE6): Used for hover/pressed states on primary actions.

### Neutral
- **Off-White Canvas** (#F9F7F7): The primary background color. Sourced from cool light blue-gray.
- **Deep Navy Ink** (#112D4E): The primary text color. Complies with WCAG AA contrast (≥7:1).
- **Secondary Slate** (#DBE2EF): Used for borders, divider lines, and subtle background zones.
- **Card Base** (#FFFFFF): Solid white backgrounds to separate grouped visual units.

**The Accent Rarity Rule.** The primary accent color (#3377FF) is reserved for interactive actions. It must not be used for decorative background blobs or large text headings. Its rarity is what guides the user's eye.

## 3. Typography

**Display Font:** Space Grotesk (sans-serif)
**Body Font:** Inter (sans-serif)

The display face is a tight, geometric grotesque with high personality at large sizes. It pairs with a neutral, highly legible sans-serif for body copy.

### Hierarchy
- **Display** (Font Weight 900, clamp(2.5rem, 6vw, 4.5rem), Line Height 1.1): Used for main Hero titles and primary page introductions.
- **Headline** (Font Weight 700, text-3xl md:text-4xl, Line Height 1.2): Used for section titles.
- **Title** (Font Weight 700, text-xl md:text-2xl, Line Height 1.3): Used for cards and sub-section headings.
- **Body** (Font Weight 400, text-base, Line Height 1.6): Used for paragraphs. Limited to 65–75ch length for optimal reading comfort.
- **Label** (Font Weight 500, text-sm, Letter Spacing 0.05em, uppercase): Used for navigation, badges, and button labels.

## 4. Elevation

The system is flat-by-default, relying on structural borders and light background differences to create separation rather than deep shadows.

### Shadow Vocabulary
- **Tactile Hover Glow** (`box-shadow: 0 8px 25px rgba(51, 119, 255, 0.12)`): Used on primary button hover states.
- **Ambient Card Separation** (`box-shadow: 0 4px 6px -1px rgba(17, 45, 78, 0.1)`): A soft navy-tinted shadow used under cards.

**The State Response Rule.** Shadows are flat at rest. Cards and buttons display shadows only when hovered or active, simulating physical reactivity.

## 5. Components

### Buttons
- **Shape:** Full pill-shape (radius 9999px) for primary and secondary call-to-actions.
- **Primary:** Electric Blue background with white text, transitioning to Deep Accent Blue on hover with a subtle upward translate (`-translate-y-[2px]`).
- **Secondary:** Transparent background with Electric Blue text and border, converting to solid Electric Blue background on hover.

### Cards / Containers
- **Corner Style:** Rounded-2xl (16px) or Rounded-3xl (24px).
- **Background:** Solid Card Base (#FFFFFF) or light secondary slate (#DBE2EF).
- **Border:** 3px solid #FFFFFF for card container highlights.

### Navigation
- **Header:** Sticky floating header bar with blur backdrop (`backdrop-blur-xl`), white-tinted outline border (`border-white/30`), and 64-80px height constraint.
- **Items:** Medium weighted text, switching to accent background on active states.

## 6. Do's and Don'ts

### Do:
- **Do** verify text color contrast on buttons; text must be readable and pass ≥4.5:1.
- **Do** restrict display headings to 2 lines on desktop to prevent screen crowding.
- **Do** align touch targets to a minimum of 44x44px.

### Don't:
- **Don't** use border-left greater than 1px as a colored accent stripe on cards (no `border-l-4`).
- **Don't** apply text gradients or mixed-serif display typography.
- **Don't** use generic purple glows or purple background blobs (The Lila Rule).
- **Don't** allow primary call-to-actions to wrap to multiple lines on desktop.

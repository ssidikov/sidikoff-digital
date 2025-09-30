import { Inter } from 'next/font/google'

/**
 * Configuration optimisée de la font Inter pour le multilingue
 * Support: Français (latin), Anglais (latin), Russe (cyrillic)
 *
 * Optimisations appliquées:
 * - display: swap pour FOIT (Flash of Invisible Text) optimization
 * - Preload automatique par Next.js
 * - adjustFontFallback pour des fallback metrics-compatible
 * - Subsets optimisés pour les 3 langues supportées
 * - Weights spécifiques utilisés dans le design system
 */
export const inter = Inter({
  subsets: ['latin', 'cyrillic', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'sans-serif',
  ],
  adjustFontFallback: true,
  weight: ['300', '400', '500', '600', '700', '800'],
})

/**
 * Font configuration pour une utilisation dans Tailwind
 * Peut être ajouté à tailwind.config.ts:
 *
 * theme: {
 *   extend: {
 *     fontFamily: {
 *       sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
 *     },
 *   },
 * }
 */
export const fontConfig = {
  variable: inter.variable,
  className: inter.className,
}

/**
 * Helper pour obtenir les classes de font
 */
export function getFontClasses(): string {
  return inter.className
}

/**
 * Helper pour obtenir la variable CSS
 */
export function getFontVariable(): string {
  return inter.variable
}

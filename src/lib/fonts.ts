import { Inter, Space_Grotesk, Bebas_Neue } from 'next/font/google'

/**
 * Configuration optimisée de la font Inter pour le multilingue
 * Support: Français / English (latin)
 *
 * Optimisations appliquées:
 * - display: swap pour FOIT (Flash of Invisible Text) optimization
 * - display: optional для мобильных устройств (быстрая загрузка)
 * - Preload automatique par Next.js
 * - adjustFontFallback pour des fallback metrics-compatible
 * - Subset latin only to keep critical CSS small
 * - Weights spécifiques utilisés dans le design system
 */
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap', // ИСПРАВЛЕНО: swap предотвращает FOIT (невидимый текст) на мобильных
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
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

/**
 * Grotesk font - Modern geometric sans-serif for headings
 * Space Grotesk is a proportional variant of Space Mono
 */
export const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700'],
  fallback: [
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ],
  adjustFontFallback: true,
})

/**
 * Font configuration pour une utilisation dans Tailwind
 * Peut être ajouté à tailwind.config.ts:
 *
 * theme: {
 *   extend: {
 *     fontFamily: {
 *       sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
 *       grotesk: ['var(--font-grotesk)', ...defaultTheme.fontFamily.sans],
 *     },
 *   },
 * }
 */
/**
 * Bebas Neue — condensed display font for barbershop/impact headlines
 * Only loaded on pages that use the `--font-barber` CSS variable
 */
export const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-barber',
  display: 'swap',
  weight: ['400'],
  preload: false, // loaded on-demand, not critical path
  adjustFontFallback: false,
})

export const fontConfig = {
  variable: inter.variable,
  className: inter.className,
  groteskVariable: grotesk.variable,
  groteskClassName: grotesk.className,
}

/**
 * Helper pour obtenir les classes de font
 */
export function getFontClasses(): string {
  return `${inter.className} ${grotesk.className}`
}

/**
 * Helper pour obtenir la variable CSS
 */
export function getFontVariable(): string {
  return `${inter.variable} ${grotesk.variable}`
}

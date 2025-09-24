/**
 * Design System Colors
 * Централизованная палитра цветов для проекта
 */

export const colors = {
  // Brand Colors
  brand: {
    primary: '#3F72AF',      // Основной синий
    secondary: '#112D4E',    // Темно-синий
    accent: 'var(--accent)', // Динамический accent из CSS переменных
    light: '#DBE2EF',        // Светлый оттенок
  },

  // Grayscale
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712',
  },

  // Semantic Colors
  semantic: {
    success: {
      50: '#f0fdf4',
      500: '#10b981',
      600: '#059669',
      900: '#14532d',
    },
    warning: {
      50: '#fffbeb',
      500: '#f59e0b',
      600: '#d97706',
      900: '#92400e',
    },
    error: {
      50: '#fef2f2',
      500: '#ef4444',
      600: '#dc2626',
      900: '#7f1d1d',
    },
    info: {
      50: '#eff6ff',
      500: '#3b82f6',
      600: '#2563eb',
      900: '#1e3a8a',
    }
  },

  // Industry-specific colors
  industries: {
    restaurant: {
      primary: '#ef4444',
      secondary: '#dc2626',
      accent: '#fca5a5',
    },
    travel: {
      primary: '#0ea5e9',
      secondary: '#0284c7',
      accent: '#7dd3fc',
    },
    barbershop: {
      primary: '#64748b',
      secondary: '#475569',
      accent: '#cbd5e1',
    },
    doctor: {
      primary: '#10b981',
      secondary: '#059669',
      accent: '#6ee7b7',
    },
    photographer: {
      primary: '#8b5cf6',
      secondary: '#7c3aed',
      accent: '#c4b5fd',
    },
  }
} as const

export type ColorKey = keyof typeof colors
export type BrandColorKey = keyof typeof colors.brand
export type GrayColorKey = keyof typeof colors.gray
export type SemanticColorKey = keyof typeof colors.semantic
export type IndustryKey = keyof typeof colors.industries
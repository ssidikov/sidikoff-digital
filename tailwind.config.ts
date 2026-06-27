import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        card: 'var(--card)',
        accent: {
          DEFAULT: 'var(--accent)',
          light: 'var(--accent-light)',
          dark: 'var(--accent-dark)',
          'alpha-10': 'var(--accent-alpha-10)',
          'alpha-20': 'var(--accent-alpha-20)',
          'alpha-50': 'var(--accent-alpha-50)',
        },
      },
      maxWidth: {
        container: '1280px',
      },
      boxShadow: {
        soft: '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)',
        'soft-md': '0 4px 6px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.03)',
        'soft-lg': '0 10px 20px rgba(0,0,0,0.06), 0 4px 8px rgba(0,0,0,0.04)',
        'soft-xl': '0 20px 40px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.05)',
      },
      fontFamily: {
        sans: [
          'var(--font-inter)',
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
        barber: ['var(--font-barber)', 'Impact', 'Haettenschweiler', 'Arial Narrow', 'sans-serif'],
      },
      // Добавляем дополнительные spacing без переопределения стандартных
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      // Добавляем контейнеры для лучшей адаптивности
      screens: {
        xs: '475px',
      },
      // Дополнительные утилиты для анимаций
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'gradient-x': 'gradient-x 3s ease infinite',
        'gradient-rotate': 'gradient-rotate 3s linear infinite',
        marquee: 'marquee 22s linear infinite',
        shimmer: 'shimmer 3s ease-in-out infinite',
        'gold-pulse': 'gold-pulse 2.5s ease-in-out infinite',
        'float-slow': 'float-slow 5s ease-in-out infinite',
        'shine-x': 'shine-x 1.8s ease-in-out',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'gradient-rotate': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { 'background-position': '-200% 0' },
          '100%': { 'background-position': '200% 0' },
        },
        'gold-pulse': {
          '0%, 100%': { 'box-shadow': '0 0 0 0 rgba(245, 158, 11, 0)' },
          '50%': { 'box-shadow': '0 0 30px 10px rgba(245, 158, 11, 0.25)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'shine-x': {
          '0%': { transform: 'translateX(-100%) skewX(-12deg)' },
          '100%': { transform: 'translateX(300%) skewX(-12deg)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config

export default config

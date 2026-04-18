import coreWebVitals from 'eslint-config-next/core-web-vitals'
import typescript from 'eslint-config-next/typescript'

const eslintConfig = [
  {
    ignores: [
      'public/**',
      '.next/**',
      'node_modules/**',
      'sanity/**',
      '.agents/**',
      'graphify-out/**',
      '.cursor/**',
      'temp/**',
    ],
  },
  ...coreWebVitals,
  ...typescript,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      '@next/next/no-img-element': 'error',
      '@next/next/no-page-custom-font': 'warn',
    },
  },
]

export default eslintConfig

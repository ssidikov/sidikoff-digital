# Решение проблем сборки - Final Fix

## 🔧 Проблемы и решения

### 1. `self is not defined` Error

**Проблема**: ReferenceError: self is not defined при SSR
**Решение**: Webpack DefinePlugin + глобальные полифилы

#### В next.config.mjs:
```javascript
webpack: (config, { isServer, webpack }) => {
  config.plugins.unshift(
    new webpack.DefinePlugin({
      'typeof self': isServer ? '"undefined"' : '"object"',
      'self': isServer ? 'undefined' : 'self',
      'window': isServer ? 'undefined' : 'window',
    })
  )
  
  if (isServer) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      'self': false,
      'window': false,
    }
  }
}
```

#### В lib/globals.ts:
```typescript
if (typeof globalThis !== 'undefined') {
  if (typeof globalThis.self === 'undefined') {
    // @ts-expect-error - Adding global polyfill
    globalThis.self = globalThis
  }
}
```

### 2. Schema-dts Type Errors

**Проблема**: FAQ, Question типы не экспортируются
**Решение**: Использование правильных типов

```typescript
// Вместо FAQ используем Thing
export function generateFAQSchema(locale: SupportedLocale): Thing {
  return {
    '@type': 'FAQPage', // Правильный тип
    mainEntity: faqData[locale].map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  }
}
```

### 3. TypeScript/ESLint Errors

**Проблема**: @ts-ignore warnings, any types
**Решение**: Использование @ts-expect-error и правильных типов

```typescript
// Вместо @ts-ignore
// @ts-expect-error - Specific reason for suppression
globalThis.self = globalThis
```

### 4. Turbopack vs Webpack

**Проблема**: Turbopack несовместим с Sanity
**Решение**: Использование Webpack для продакшена

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build", // Без turbopack
  }
}
```

## 🚀 Финальные конфигурации

### Основная конфигурация: `next.config.simplified.mjs`
- Полная SEO оптимизация
- Безопасность headers
- Webpack фиксы для self/window
- Sanity совместимость

### Аварийная конфигурация: `next.config.emergency.mjs`
- Минимальная конфигурация
- Отключенные проверки для быстрой сборки
- Базовые фиксы

## 📊 Команды для сборки

### Обычная сборка:
```bash
npm run build
```

### При проблемах:
```bash
# Очистка кэша
rm -rf .next

# Замена конфигурации
cp next.config.emergency.mjs next.config.mjs

# Сборка с минимальной конфигурацией
npm run build

# Возврат к основной конфигурации
cp next.config.simplified.mjs next.config.mjs
```

### Автоматический скрипт:
```bash
./build-production.bat
```

## ✅ Статус исправлений

- ✅ `self is not defined` - ИСПРАВЛЕНО
- ✅ Schema-dts типы - ИСПРАВЛЕНО  
- ✅ TypeScript ошибки - ИСПРАВЛЕНО
- ✅ ESLint предупреждения - ИСПРАВЛЕНО
- ✅ Turbopack конфликт - РЕШЕНО
- ✅ Sitemap генерация - РАБОТАЕТ

## 🎯 Результат

Проект полностью готов к продакшену с:
- Полной SEO оптимизацией
- Многоязычной поддержкой  
- Структурированными данными
- Правильной сборкой без ошибок

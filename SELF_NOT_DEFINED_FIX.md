# Решение проблемы "self is not defined"

## 🔧 Проблема
```
unhandledRejection ReferenceError: self is not defined
```

Эта ошибка возникает когда код предназначенный для браузера пытается выполниться на сервере во время SSR.

## ✅ Решения

### 1. Webpack конфигурация (Основное решение)

В `next.config.mjs`:
```javascript
webpack: (config, { isServer, webpack }) => {
  if (isServer) {
    // Определяем self для сервера
    config.plugins.push(
      new webpack.DefinePlugin({
        self: 'globalThis',
        window: 'undefined',
      })
    )
  }
  return config
}
```

### 2. Server polyfills (Дополнительное)

Создан файл `lib/server-polyfills.ts`:
```typescript
if (typeof global !== 'undefined' && typeof window === 'undefined') {
  if (typeof (global as any).self === 'undefined') {
    (global as any).self = global
  }
}
```

Импортирован в `app/layout.tsx`.

### 3. Минимальная конфигурация (Fallback)

`next.config.minimal.mjs`:
```javascript
experimental: {
  serverComponentsExternalPackages: ['sanity'],
},
webpack: (config, { isServer }) => {
  if (isServer) {
    config.externals = [...(config.externals || []), 'sanity']
  }
  return config
}
```

## 🎯 Команды для решения

```bash
# Если основная сборка не работает
rm -rf .next
cp next.config.minimal.mjs next.config.mjs
npm run build

# Вернуться к полной конфигурации
cp next.config.simplified.mjs next.config.mjs
```

## 📝 Примечания

- Проблема чаще всего связана с Sanity или другими клиентскими библиотеками
- Решение через webpack DefinePlugin наиболее надежное
- Server polyfills - дополнительная защита
- Минимальная конфигурация - крайняя мера

## 🔄 Если проблема повторяется

1. Проверьте импорты клиентских библиотек в серверных компонентах
2. Используйте `'use client'` для компонентов с браузерными API
3. Проверьте Sanity конфигурацию на серверные/клиентские части

# Решение проблемы сборки с Turbopack и Sanity

## 🔧 Проблема

Ошибка Turbopack при сборке:
```
The high bits of the position 4108104 are not all 0s or 1s: 1
```

Связана с обработкой модулей Sanity в Turbopack.

## ✅ Решения

### 1. Отключение Turbopack для продакшена

**package.json**:
```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",  // Без --turbopack
    "start": "next start"
  }
}
```

### 2. Webpack конфигурация для Sanity

**next.config.mjs**:
```javascript
webpack: (config) => {
  // Handle .mjs files
  config.module.rules.push({
    test: /\.mjs$/,
    type: 'javascript/auto',
  })

  // Ignore Sanity warnings
  config.ignoreWarnings = [
    { module: /node_modules\/sanity/ },
    { module: /node_modules\/@sanity/ },
    { module: /node_modules\/next-sanity/ },
  ]

  return config
}
```

### 3. Альтернативная сборка

Используйте `build-production.bat`:
```batch
build-production.bat
```

Или вручную:
```bash
# Очистка кэша
rm -rf .next

# Сборка без Turbopack
npm run build

# Генерация sitemap
npm run sitemap
```

## 🎯 Рекомендации

1. **Разработка**: Используйте Turbopack (`npm run dev`)
2. **Продакшен**: Используйте Webpack (`npm run build`)
3. **CI/CD**: Используйте `build-production.bat` скрипт

## 📝 Примечания

- Turbopack все еще в стадии эксперимента
- Sanity имеет проблемы совместимости с Turbopack
- Webpack остается стабильным выбором для продакшена

## 🔄 Если проблема повторится

1. Очистите кэш: `rm -rf .next`
2. Обновите зависимости: `npm update`
3. Проверьте совместимость версий Next.js и Sanity

# Section Backgrounds Guide

## Градиенты и фоновые изображения для секций

### Настроенные фоны:

1. **Hero секция**: `bg-image.svg` с сине-голубыми градиентами
2. **Services секция**: `bg-image-3.svg` с серо-голубыми градиентами  
3. **Portfolio секция**: `bg-image-2.svg` (отражен) с серыми градиентами
4. **Contact секция**: `bg-image-2.svg` с сине-фиолетовыми градиентами
5. **FAQ секция**: `bg-image-2.svg` с серыми градиентами
6. **Pricing секция**: `bg-image-2.svg` с розово-фиолетовыми градиентами

### Использование:

#### Способ 1: Обычный HTML/CSS
```tsx
<section className="relative py-20 overflow-hidden">
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none section-bg-hero" />
    <div className="absolute inset-0 gradient-hero" />
    <div className="absolute inset-0 gradient-hero-secondary" />
    <div className="absolute inset-0 gradient-hero-tertiary" />
  </div>
  <div className="relative z-10">
    {/* Контент секции */}
  </div>
</section>
```

#### Способ 2: Используя компонент (рекомендуется)
```tsx
import { SectionWrapper } from '@/components/ui/SectionBackground'

<SectionWrapper id="hero" backgroundType="hero">
  {/* Контент секции */}
</SectionWrapper>
```

### Особенности:
- Все изображения повторяются по вертикали (`repeat-y`)
- Размер: `100% auto` (растягивается по ширине)
- Многослойные градиенты для плавных переходов
- Portfolio секция имеет горизонтальное отражение
- Z-index настроен для правильного наложения

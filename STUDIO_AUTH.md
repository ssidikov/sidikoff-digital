# Sanity Studio Basic Auth Protection

## Обзор

Sanity Studio защищено Basic Authentication через middleware.ts для предотвращения несанкционированного доступа к CMS.

## Настройка

### Переменные окружения

Добавьте следующие переменные в ваш `.env.local` файл:

```bash
# Sanity Studio Basic Auth Protection
STUDIO_AUTH_USERNAME=admin
STUDIO_AUTH_PASSWORD=your_secure_password
```

**⚠️ Важно:** Обязательно измените пароль по умолчанию в продакшене!

## Как это работает

1. При попытке доступа к `/studio` middleware проверяет наличие заголовка `Authorization`
2. Если заголовок отсутствует, возвращается HTTP 401 с запросом Basic Auth
3. Middleware декодирует Basic Auth данные и сравнивает с переменными окружения
4. При успешной аутентификации пользователь получает доступ к Studio

## Доступ к Studio

### Через браузер

1. Перейдите на `https://www.sidikoff.com/studio/`
2. Введите username и password в появившемся диалоге
3. Получите доступ к Sanity Studio

### Программный доступ

```bash
curl -u admin:password https://www.sidikoff.com/studio/
```

## Безопасность

- Basic Auth передается через HTTPS
- Пароли хранятся в переменных окружения
- Middleware проверяет каждый запрос к `/studio`
- Неверные учетные данные возвращают HTTP 401

## Настройка в продакшене

### Vercel

Добавьте переменные окружения в панели Vercel:

1. Перейдите в Settings → Environment Variables
2. Добавьте:
   - `STUDIO_AUTH_USERNAME` = ваш username
   - `STUDIO_AUTH_PASSWORD` = ваш безопасный пароль

### Другие платформы

Убедитесь, что переменные окружения доступны во время выполнения приложения.

## Troubleshooting

### Studio недоступно

- Проверьте правильность username/password
- Убедитесь, что переменные окружения установлены
- Проверьте, что запрос идет через HTTPS

### 401 ошибка

- Проверьте заголовок Authorization
- Убедитесь в правильности кодировки Base64
- Проверьте переменные окружения

## Альтернативы

Для более продвинутой защиты можно рассмотреть:

- JWT токены
- OAuth интеграцию
- IP whitelist
- VPN доступ

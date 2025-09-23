// Утилита для мягкой очистки кэша (только при необходимости)
;(function () {
  // Проверяем, нужна ли очистка кэша
  const shouldClearCache = sessionStorage.getItem('force-cache-clear')
  
  if (!shouldClearCache) {
    console.log('🔄 Cache Buster - кэш не требует очистки')
    return
  }

  console.log('🔄 Cache Buster - мягкая очистка кэша')

  // Очищаем только старые service workers
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
      registrations.forEach(function (registration) {
        if (registration.scope.includes('old') || registration.scope.includes('legacy')) {
          console.log('🗑️ Удаляем старый Service Worker:', registration.scope)
          registration.unregister()
        }
      })
    })
  }

  // Удаляем флаг после очистки
  sessionStorage.removeItem('force-cache-clear')
  console.log('✅ Cache Buster - очистка завершена')
})()

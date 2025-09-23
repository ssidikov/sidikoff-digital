// Утилита для принудительной очистки кэша браузера
;(function () {
  console.log('🔄 Cache Buster - принудительная очистка кэша')

  // Очищаем все возможные виды кэша
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
      registrations.forEach(function (registration) {
        console.log('🗑️ Удаляем Service Worker:', registration.scope)
        registration.unregister()
      })
    })
  }

  // Очищаем кэш через Cache API
  if ('caches' in window) {
    caches.keys().then(function (names) {
      names.forEach(function (name) {
        console.log('🗑️ Удаляем кэш:', name)
        caches.delete(name)
      })
    })
  }

  // Принудительно перезагружаем страницу без кэша
  setTimeout(() => {
    console.log('🔄 Перезагружаем страницу без кэша...')
    window.location.reload(true)
  }, 1000)
})()

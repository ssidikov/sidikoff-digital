// Cache-buster for development
// Adds timestamp to avoid browser caching during development
if (process.env.NODE_ENV === 'development') {
  const timestamp = Date.now()
  const links = document.querySelectorAll('link[rel="stylesheet"]')
  const scripts = document.querySelectorAll('script[src]')

  links.forEach((link) => {
    const href = link.href
    link.href = href + (href.includes('?') ? '&' : '?') + `t=${timestamp}`
  })

  scripts.forEach((script) => {
    const src = script.src
    if (src && !src.includes('cache-buster.js')) {
      script.src = src + (src.includes('?') ? '&' : '?') + `t=${timestamp}`
    }
  })
}

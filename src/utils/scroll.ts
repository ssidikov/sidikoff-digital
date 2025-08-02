// Smooth scroll utilities for better UX

export function smoothScrollToElement(elementId: string, offset: number = 100): Promise<boolean> {
  return new Promise((resolve) => {
    const element = document.getElementById(elementId)
    
    if (!element) {
      resolve(false)
      return
    }

    const headerOffset = offset
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })

    // Wait for scroll to complete
    setTimeout(() => resolve(true), 1000)
  })
}

export function scrollToElementWithRetry(
  elementId: string, 
  offset: number = 100, 
  maxRetries: number = 5,
  retryDelay: number = 200
): Promise<boolean> {
  return new Promise((resolve) => {
    let attempts = 0
    
    const tryScroll = () => {
      attempts++
      const element = document.getElementById(elementId)
      
      if (element) {
        smoothScrollToElement(elementId, offset).then(resolve)
        return
      }
      
      if (attempts < maxRetries) {
        setTimeout(tryScroll, retryDelay)
      } else {
        resolve(false)
      }
    }
    
    tryScroll()
  })
}

export function handleAnchorNavigation(href: string, currentPath: string, locale: string): boolean {
  const homeUrl = `/${locale === 'fr' ? '' : locale}`
  const isOnHomePage = currentPath === homeUrl || currentPath === `${homeUrl}/`
  
  if (href.includes('#')) {
    const sectionId = href.split('#')[1]
    
    if (sectionId) {
      if (isOnHomePage) {
        // Same page scroll
        smoothScrollToElement(sectionId)
        return true
      } else {
        // Different page - let Next.js handle navigation, 
        // scroll will be handled by useEffect in Header
        return false
      }
    }
  }
  
  return false
}

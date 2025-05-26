// lib/gtag.ts
export const GA_MEASUREMENT_ID = 'G-KFKPR6DVQ1'

export const pageview = (url: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  })
}

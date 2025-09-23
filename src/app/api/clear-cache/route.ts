import { NextResponse } from 'next/server'

export async function GET() {
  // Создаем ответ с максимально агрессивными анти-кеш заголовками
  const response = NextResponse.json({
    message: 'Cache cleared',
    timestamp: new Date().toISOString(),
    cacheStatus: 'disabled'
  })

  // Устанавливаем все возможные заголовки против кеширования
  response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0, proxy-revalidate')
  response.headers.set('Pragma', 'no-cache')
  response.headers.set('Expires', '0')
  response.headers.set('Last-Modified', new Date().toUTCString())
  response.headers.set('ETag', `"no-cache-${Date.now()}"`)
  response.headers.set('Vary', '*')
  response.headers.set('X-Cache-Status', 'DISABLED')
  
  return response
}
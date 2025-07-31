import { NextRequest, NextResponse } from 'next/server'

export async function authenticateStudio(request: NextRequest) {
  // Проверяем наличие токена в cookies
  const token = request.cookies.get('studio-auth')?.value

  if (!token) {
    return false
  }

  // Простая проверка токена (в реальном проекте используйте JWT или другую надежную схему)
  const validToken = process.env.STUDIO_AUTH_TOKEN || 'studio-access-token'
  
  return token === validToken
}

export function createAuthResponse(isValid: boolean) {
  if (!isValid) {
    return NextResponse.json(
      { error: 'Unauthorized access' },
      { status: 401 }
    )
  }
  
  return NextResponse.json({ success: true })
}

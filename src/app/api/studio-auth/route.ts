import { NextRequest, NextResponse } from 'next/server'

interface AuthRequest {
  username: string
  password: string
}

export async function GET(request: NextRequest) {
  // Проверяем аутентификацию
  const token = request.cookies.get('studio-auth')?.value
  const validToken = process.env.STUDIO_AUTH_TOKEN

  if (token === validToken) {
    return NextResponse.json({ authenticated: true })
  } else {
    return NextResponse.json({ authenticated: false }, { status: 401 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { username, password }: AuthRequest = await request.json()

    // Получаем логин и пароль из переменных окружения
    const validUsername = process.env.STUDIO_USERNAME
    const validPassword = process.env.STUDIO_PASSWORD

    // Проверяем учетные данные
    if (username === validUsername && password === validPassword) {
      // Создаем токен (в реальном проекте используйте JWT)
      const token = process.env.STUDIO_AUTH_TOKEN || 'studio-access-token'

      const response = NextResponse.json({
        success: true,
        message: 'Authentication successful',
      })

      // Устанавливаем cookie с токеном (действителен 24 часа)
      response.cookies.set('studio-auth', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000, // 24 часа
        path: '/studio',
      })

      return response
    } else {
      return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401 })
    }
  } catch (error) {
    console.error('Studio auth error:', error)
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE() {
  // Logout - удаляем cookie
  const response = NextResponse.json({
    success: true,
    message: 'Logged out successfully',
  })

  response.cookies.delete('studio-auth')

  return response
}

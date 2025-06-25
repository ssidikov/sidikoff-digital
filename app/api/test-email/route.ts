import { NextRequest, NextResponse } from 'next/server'
import { testEmailConfiguration } from '@/lib/email'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')

  // Simple security check
  if (secret !== 'test-email-123') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    console.log('🧪 Starting email test from API endpoint...')

    // Test email configuration
    const isValid = await testEmailConfiguration()

    return NextResponse.json({
      success: true,
      message: 'Email test completed',
      configurationValid: isValid,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('❌ Email test failed:', error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    )
  }
}

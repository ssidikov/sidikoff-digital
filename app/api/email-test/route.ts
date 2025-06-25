import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')

  // Simple security check
  if (secret !== 'test-123') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    console.log('🧪 Testing email sending...')

    const result = await sendEmail(
      's.sidikoff@gmail.com',
      '🧪 Vercel Test Email',
      '<h1>Test Email from Vercel</h1><p>This is a test email sent from Vercel deployment.</p>',
      'Test Email from Vercel\n\nThis is a test email sent from Vercel deployment.'
    )

    console.log('📧 Email test result:', result)

    return NextResponse.json({
      success: result.success,
      message: result.success ? 'Email sent successfully' : 'Email failed to send',
      error: result.error || null,
      messageId: result.messageId || null,
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

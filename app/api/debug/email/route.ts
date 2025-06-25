import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email'

/**
 * Email Debug API Endpoint
 * 
 * This endpoint helps debug email issues in production.
 * Usage: POST /api/debug/email
 * 
 * Body: {
 *   "email": "test@example.com",
 *   "secret": "your-debug-secret"
 * }
 */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, secret } = body

    // Basic security check - you should set DEBUG_SECRET in your environment
    const debugSecret = process.env.DEBUG_SECRET || 'debug-email-test'
    if (secret !== debugSecret) {
      return NextResponse.json(
        { error: 'Invalid debug secret' },
        { status: 401 }
      )
    }

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    console.log('🧪 [EMAIL DEBUG] Starting email debug test...')
    console.log('🧪 [EMAIL DEBUG] Target email:', email)
    console.log('🧪 [EMAIL DEBUG] Environment:', process.env.NODE_ENV)
    console.log('🧪 [EMAIL DEBUG] Timestamp:', new Date().toISOString())

    // Environment check
    const envCheck = {
      SMTP_HOST: !!process.env.SMTP_HOST,
      SMTP_PORT: !!process.env.SMTP_PORT,
      SMTP_USER: !!process.env.SMTP_USER,
      SMTP_PASSWORD: !!process.env.SMTP_PASSWORD,
      ADMIN_EMAIL: !!process.env.ADMIN_EMAIL,
    }

    console.log('🧪 [EMAIL DEBUG] Environment variables:', envCheck)

    // Send test email
    const testResult = await sendEmail(
      email,
      '🧪 Vercel Email Debug Test - SIDIKOFF Digital',
      `
      <h1>🧪 Email Debug Test</h1>
      <p>This is a test email sent from the Vercel production environment.</p>
      <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
      <p><strong>Environment:</strong> ${process.env.NODE_ENV || 'unknown'}</p>
      <p><strong>Vercel Region:</strong> ${process.env.VERCEL_REGION || 'unknown'}</p>
      <p><strong>SMTP Host:</strong> ${process.env.SMTP_HOST || 'not set'}</p>
      <p><strong>SMTP Port:</strong> ${process.env.SMTP_PORT || 'not set'}</p>
      <p><strong>SMTP User:</strong> ${process.env.SMTP_USER?.replace(/(.{3}).*(@.*)/, '$1***$2') || 'not set'}</p>
      
      <h2>Environment Variables Status:</h2>
      <ul>
        ${Object.entries(envCheck).map(([key, value]) => 
          `<li><strong>${key}:</strong> ${value ? '✅ Set' : '❌ Missing'}</li>`
        ).join('')}
      </ul>
      
      <p>If you received this email, the SMTP configuration is working correctly in production!</p>
      `,
      `
Email Debug Test

This is a test email sent from the Vercel production environment.

Timestamp: ${new Date().toISOString()}
Environment: ${process.env.NODE_ENV || 'unknown'}
Vercel Region: ${process.env.VERCEL_REGION || 'unknown'}

Environment Variables Status:
${Object.entries(envCheck).map(([key, value]) => 
  `- ${key}: ${value ? 'Set' : 'Missing'}`
).join('\n')}

If you received this email, the SMTP configuration is working correctly in production!
      `
    )

    console.log('🧪 [EMAIL DEBUG] Test result:', testResult)

    return NextResponse.json({
      success: true,
      message: 'Email debug test completed',
      emailResult: testResult,
      environmentCheck: envCheck,
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
      vercelRegion: process.env.VERCEL_REGION,
    })

  } catch (error) {
    console.error('🧪 [EMAIL DEBUG] Debug test failed:', error)
    return NextResponse.json(
      { 
        error: 'Debug test failed', 
        details: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}

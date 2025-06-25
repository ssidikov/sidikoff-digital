// Debug endpoint to check environment variables on Vercel
// Remove this file after debugging

import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  // Check if debug secret is provided for security
  const { searchParams } = new URL(request.url)
  const debugSecret = searchParams.get('secret')

  if (debugSecret !== process.env.EMAIL_DEBUG_SECRET && debugSecret !== 'temp-debug-123') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const envCheck = {
    NODE_ENV: process.env.NODE_ENV,
    VERCEL: process.env.VERCEL,
    VERCEL_ENV: process.env.VERCEL_ENV,
    EMAIL_USER: process.env.EMAIL_USER ? '✅ SET' : '❌ MISSING',
    EMAIL_PASS: process.env.EMAIL_PASS ? '✅ SET' : '❌ MISSING',
    EMAIL_SERVICE: process.env.EMAIL_SERVICE || 'gmail (default)',
    EMAIL_FROM: process.env.EMAIL_FROM || 'Using EMAIL_USER',
    EMAIL_TO: process.env.EMAIL_TO || 's.sidikoff@gmail.com (default)',
    timestamp: new Date().toISOString(),
  }

  return NextResponse.json({
    message: 'Environment Variables Check',
    environment: envCheck,
    instructions: {
      step1: 'Go to Vercel Dashboard > Your Project > Settings > Environment Variables',
      step2: 'Add the following environment variables:',
      step2a: 'EMAIL_USER=s.sidikoff@gmail.com',
      step2b: 'EMAIL_PASS=your-gmail-app-password',
      step2c: 'EMAIL_SERVICE=gmail',
      step2d: 'EMAIL_FROM=s.sidikoff@gmail.com',
      step2e: 'EMAIL_TO=s.sidikoff@gmail.com',
      step3: 'Redeploy your application',
      note: 'Delete this API route after debugging',
    },
  })
}

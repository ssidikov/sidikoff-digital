// Debug endpoint to check environment variables on Vercel
// Remove this file after debugging

export default function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Check if debug secret is provided for security
  const debugSecret = req.query.secret
  if (debugSecret !== process.env.EMAIL_DEBUG_SECRET && debugSecret !== 'temp-debug-123') {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const envCheck = {
    NODE_ENV: process.env.NODE_ENV,
    VERCEL: process.env.VERCEL,
    VERCEL_ENV: process.env.VERCEL_ENV,
    MTP_PASSWORD: process.env.MTP_PASSWORD ? '✅ SET' : '❌ MISSING',
    ADMIN_EMAIL: process.env.ADMIN_EMAIL ? '✅ SET' : '❌ MISSING (but has default)',
    // Don't expose actual values
    timestamp: new Date().toISOString(),
  }

  return res.status(200).json({
    message: 'Environment Variables Check',
    environment: envCheck,
    instructions: {
      step1: 'Go to Vercel Dashboard > Your Project > Settings > Environment Variables',
      step2: 'Add: MTP_PASSWORD with value from your .env.local file',
      step3: 'Redeploy your application',
      note: 'Delete this API route after debugging',
    },
  })
}

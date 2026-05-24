import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

import { userConfirmationFR, adminNotificationFR } from './mailTemplates'

// ── Rate limiter: max 5 requests per IP per 60 seconds ────────────────────────
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW_MS = 60_000

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  if (entry.count >= RATE_LIMIT_MAX) return true

  entry.count++
  return false
}

// ── Nodemailer transporter (module-level singleton) ───────────────────────────
function createTransporter() {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  })
}

interface ContactFormData {
  name: string
  email: string
  message: string
  locale?: 'fr'
}

const EMAIL_SUBJECTS = {
  user: 'Confirmation de votre demande - Sidikoff Digital',
  admin: 'Nouvelle demande reçue - Sidikoff Digital',
}

export async function POST(request: Request) {
  try {
    // Rate limiting
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      request.headers.get('x-real-ip') ??
      'unknown'

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again later.' },
        { status: 429 },
      )
    }

    const data: ContactFormData = await request.json()
    const { name, email, message } = data

    // Validation
    if (!name?.trim()) {
      return NextResponse.json({ success: false, error: 'Name is required' }, { status: 400 })
    }

    if (!email?.trim() || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'Valid email is required' },
        { status: 400 },
      )
    }

    if (!message?.trim()) {
      return NextResponse.json({ success: false, error: 'Message is required' }, { status: 400 })
    }

    if (!process.env.ADMIN_EMAIL) {
      console.error('ADMIN_EMAIL environment variable is not set')
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 },
      )
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      console.error('Gmail credentials are not set')
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 },
      )
    }

    const transporter = createTransporter()
    const subjects = EMAIL_SUBJECTS

    // User confirmation email
    const userMail = {
      from: `"Sidikoff Digital" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: subjects.user,
      html: userConfirmationFR({ name }),
      replyTo: process.env.ADMIN_EMAIL,
    }

    // Admin notification email
    const adminMail = {
      from: `"Contact Form - Sidikoff Digital" <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: subjects.admin,
      html: adminNotificationFR({ name, email, message }),
      replyTo: email,
    }

    // Send emails
    try {
      const [userResult, adminResult] = await Promise.all([
        transporter.sendMail(userMail),
        transporter.sendMail(adminMail),
      ])

      console.log('Emails sent successfully:', {
        userMessageId: userResult.messageId,
        adminMessageId: adminResult.messageId,
        timestamp: new Date().toISOString(),
      })

      return NextResponse.json({
        success: true,
        message: 'Emails sent successfully',
      })
    } catch (emailError) {
      console.error('Error sending emails:', emailError)
      return NextResponse.json({ success: false, error: 'Failed to send emails' }, { status: 500 })
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 })
  }
}

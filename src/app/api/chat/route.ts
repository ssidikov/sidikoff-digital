import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { chatbotAdminNotification, chatbotUserConfirmation } from './chatMailTemplates'

// ── Rate limiter: max 20 req per IP per 60s ────────────────────────────────────
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 })
    return false
  }
  if (entry.count >= 20) return true
  entry.count++
  return false
}

// ── System prompt ──────────────────────────────────────────────────────────────
const SYSTEM_PROMPT = `Tu es l'assistant virtuel de Sidikoff Digital, une agence web spécialisée basée à Villeurbanne / Lyon (France). Tu réponds UNIQUEMENT en français, de façon concise et professionnelle (max 3 paragraphes courts).

## À propos de Sidikoff Digital
- Agence web premium à Villeurbanne / Lyon
- Spécialités : sites vitrine Next.js, e-commerce haute performance, WebApp/SaaS, refonte WordPress → Next.js, SEO local Lyon
- Stack : Next.js 16, React 19, Tailwind CSS v4, Framer Motion, Vercel Edge
- Contact : s.sidikoff@gmail.com | Site : sidikoff.com

## Services et Tarifs
1. **Site Vitrine Next.js** — À partir de 890 € | Délai : 7-14 jours
   - Ultra-rapide, SEO optimisé, design sur-mesure
   - Idéal pour PME, indépendants, professions libérales

2. **E-Commerce High-Performance** — À partir de 2 500 € | Délai : 3-5 semaines
   - Boutique avec tunnel de conversion optimisé
   - Stripe, paiement sécurisé, gestion stock

3. **WebApp / SaaS** — À partir de 5 000 € | Délai : 4-8 semaines
   - Application React/Next.js scalable
   - Auth, base de données, API REST

4. **Refonte WordPress → Next.js** — À partir de 1 500 € | Délai : 2-3 semaines
   - Gain de vitesse x10, sécurité maximale
   - Migration complète du contenu

5. **SEO Local Lyon & Visibilité** — À partir de 500 €/mois | Résultats : 2-3 mois
   - Positionnement 1ère page Google
   - Google Maps, fiches locales, contenu SEO

6. **Audit SEO Gratuit** — Offert pour tout projet
   - Analyse complète du site existant

## Processus de réservation
Pour réserver ou demander un devis, collecte ces informations une par une de façon naturelle :
1. Prénom et nom
2. Email
3. Téléphone (optionnel)
4. Type de projet souhaité
5. Description courte du projet / objectifs

IMPORTANT : Dès que tu as obtenu le prénom+nom ET l'email de l'utilisateur (les autres infos sont optionnelles), tu DOIS ajouter à la toute fin de ta réponse (après le texte visible) ce bloc exactement :
<!--BOOKING:{"name":"PRENOM NOM","email":"EMAIL","phone":"TELEPHONE ou vide","project":"TYPE DE PROJET","description":"DESCRIPTION"}-->

Ce bloc ne sera jamais affiché à l'utilisateur. Il déclenche l'envoi automatique d'un email de notification à l'équipe. Génère-le une seule fois, lors du premier message où tu confirmes avoir reçu les coordonnées.

## Règles de comportement
- Réponds en français uniquement
- Sois chaleureux, professionnel, concis
- Si la question porte sur un service, recommande le tarif adapté
- Collecte les infos de réservation naturellement dans la conversation, sans formulaire
- Ne réponds qu'aux questions liées à Sidikoff Digital, au web, au SEO, ou au choix de prestation
- Pour les questions hors sujet, redirige poliment vers les services de l'agence
- Utilise des emojis avec modération (1-2 max par message)`

// ── Send booking email ─────────────────────────────────────────────────────────
interface BookingData {
  name: string
  email: string
  phone?: string
  project?: string
  description?: string
}

async function sendBookingEmail(booking: BookingData): Promise<void> {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS || !process.env.ADMIN_EMAIL) return

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS },
  })

  const message = `
[DEMANDE CHATBOT AI]
- Nom : ${booking.name}
- Email : ${booking.email}
- Téléphone : ${booking.phone || 'Non renseigné'}
- Projet : ${booking.project || 'Non précisé'}
- Description : ${booking.description || 'Non précisée'}
`.trim()

  await Promise.all([
    // Admin notification
    transporter.sendMail({
      from: `"Assistant Sidikoff AI" <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `🤖 Nouvelle demande chatbot — ${booking.name}`,
      html: chatbotAdminNotification(booking),
      replyTo: booking.email,
    }),
    // User confirmation
    transporter.sendMail({
      from: `"Sidikoff Digital" <${process.env.GMAIL_USER}>`,
      to: booking.email,
      subject: 'Votre demande a bien été reçue — Sidikoff Digital',
      html: chatbotUserConfirmation(booking),
      replyTo: process.env.ADMIN_EMAIL,
    }),
  ])
}

interface ChatMessage {
  role: 'user' | 'model'
  parts: Array<{ text: string }>
}

// ── Route handler ──────────────────────────────────────────────────────────────
export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      request.headers.get('x-real-ip') ??
      'unknown'

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Trop de requêtes. Réessayez dans une minute.' },
        { status: 429 },
      )
    }

    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'Configuration serveur manquante.' }, { status: 500 })
    }

    const { messages } = (await request.json()) as { messages: ChatMessage[] }

    if (!messages?.length) {
      return NextResponse.json({ error: 'Messages requis.' }, { status: 400 })
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`

    const body = {
      system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
      contents: messages,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 2048,
        topP: 0.9,
      },
    }

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Gemini error status:', res.status)
      console.error('Gemini error body:', err)
      if (res.status === 429) {
        return NextResponse.json(
          { error: 'Quota IA temporairement atteint. Réessayez dans 30 secondes.' },
          { status: 429 },
        )
      }
      return NextResponse.json({ error: 'Erreur du service IA. Réessayez.' }, { status: 502 })
    }

    const data = await res.json()
    let text: string = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? ''

    if (!text) {
      return NextResponse.json({ error: 'Réponse vide du service IA.' }, { status: 502 })
    }

    // ── Extract booking marker and trigger email ──────────────────────────────
    const bookingMatch = text.match(/<!--BOOKING:(\{.*?\})-->/s)
    if (bookingMatch) {
      // Strip marker from displayed text
      text = text.replace(/<!--BOOKING:.*?-->/s, '').trim()
      try {
        const booking: BookingData = JSON.parse(bookingMatch[1]!)
        if (booking.name && booking.email) {
          // Fire and forget — don't block response on email
          sendBookingEmail(booking).catch((e) => console.error('Booking email error:', e))
          console.log('📧 Booking email triggered for:', booking.email)
        }
      } catch (e) {
        console.error('Booking JSON parse error:', e)
      }
    }

    return NextResponse.json({ reply: text })
  } catch (err) {
    console.error('Chat route error:', err)
    return NextResponse.json({ error: 'Erreur interne.' }, { status: 500 })
  }
}

// ── Chatbot booking email templates ────────────────────────────────────────────
// Design: Artistic × Emil Design Eng × UI/UX Pro Max
// Dark luxury aesthetic · High-contrast · Surgical typography

interface BookingTemplateData {
  name: string
  email: string
  phone?: string
  project?: string
  description?: string
}

// ── Shared tokens ──────────────────────────────────────────────────────────────
const T = {
  bg: '#f1f5f9',
  surface: '#ffffff',
  card: '#f8fafc',
  border: '#e2e8f0',
  accent: '#2563eb',
  accentDim: '#1d4ed8',
  purple: '#7c3aed',
  green: '#16a34a',
  textPrimary: '#0f172a',
  textSecondary: '#475569',
  textMuted: '#94a3b8',
  fontSans: "'Inter', 'Helvetica Neue', Arial, sans-serif",
  fontMono: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
}

// ── Admin notification ─────────────────────────────────────────────────────────
export function chatbotAdminNotification(data: BookingTemplateData): string {
  const rows = [
    ['Nom', data.name],
    ['Email', data.email],
    ['Téléphone', data.phone || '—'],
    ['Projet', data.project || '—'],
  ]

  const rowsHtml = rows
    .map(
      ([label, value]) => `
    <tr>
      <td style="padding:10px 16px;font-family:${T.fontMono};font-size:11px;color:${T.textMuted};text-transform:uppercase;letter-spacing:0.08em;border-bottom:1px solid ${T.border};width:120px;white-space:nowrap;">${label}</td>
      <td style="padding:10px 16px;font-family:${T.fontSans};font-size:14px;color:${T.textPrimary};border-bottom:1px solid ${T.border};font-weight:500;">${value}</td>
    </tr>`,
    )
    .join('')

  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Nouvelle demande chatbot</title>
</head>
<body style="margin:0;padding:0;background:${T.bg};font-family:${T.fontSans};">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:${T.bg};min-height:100vh;">
    <tr><td align="center" style="padding:40px 16px;">

      <!-- Card -->
      <table width="580" cellpadding="0" cellspacing="0" style="max-width:580px;width:100%;background:${T.surface};border:1px solid ${T.border};border-radius:16px;overflow:hidden;">

        <!-- Top accent bar -->
        <tr>
          <td style="height:3px;background:linear-gradient(90deg,${T.accent},${T.purple});line-height:3px;font-size:0;">&nbsp;</td>
        </tr>

        <!-- Header -->
        <tr>
          <td style="padding:32px 36px 24px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <h1 style="margin:0 0 6px;font-size:22px;font-weight:700;color:${T.textPrimary};letter-spacing:-0.02em;line-height:1.2;">
                    Nouvelle demande reçue
                  </h1>
                  <p style="margin:0;font-size:13px;color:${T.textSecondary};line-height:1.5;">
                    Via l'assistant IA · ${new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Divider -->
        <tr><td style="height:1px;background:${T.border};margin:0 36px;"></td></tr>

        <!-- Data table -->
        <tr>
          <td style="padding:8px 20px 8px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${T.border};border-radius:10px;overflow:hidden;background:${T.card};">
              ${rowsHtml}
            </table>
          </td>
        </tr>

        <!-- Description block -->
        ${
          data.description
            ? `<tr>
          <td style="padding:0 20px 8px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:16px;background:${T.card};border:1px solid ${T.border};border-radius:10px;">
                  <p style="margin:0 0 8px;font-family:${T.fontMono};font-size:10px;color:${T.textMuted};text-transform:uppercase;letter-spacing:0.1em;">Description du projet</p>
                  <p style="margin:0;font-size:13px;color:${T.textSecondary};line-height:1.7;">${data.description}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>`
            : ''
        }

        <!-- CTA -->
        <tr>
          <td style="padding:20px 20px 32px;">
            <a href="mailto:${data.email}?subject=Re: Votre demande - Sidikoff Digital"
               style="display:inline-block;background:linear-gradient(135deg,${T.accent},${T.accentDim});color:#fff;text-decoration:none;font-family:${T.fontSans};font-size:13px;font-weight:600;padding:12px 24px;border-radius:8px;letter-spacing:0.01em;">
              Répondre à ${data.name} →
            </a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:16px 36px;border-top:1px solid ${T.border};background:${T.card};">
            <p style="margin:0;font-family:${T.fontMono};font-size:10px;color:${T.textMuted};text-transform:uppercase;letter-spacing:0.08em;">
              Sidikoff Digital · Assistant IA · sidikoff.com
            </p>
          </td>
        </tr>

      </table>

    </td></tr>
  </table>

</body>
</html>`
}

// ── User confirmation ──────────────────────────────────────────────────────────
export function chatbotUserConfirmation(data: BookingTemplateData): string {
  const firstName = data.name.split(' ')[0] ?? data.name

  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Demande reçue — Sidikoff Digital</title>
</head>
<body style="margin:0;padding:0;background:${T.bg};font-family:${T.fontSans};">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:${T.bg};min-height:100vh;">
    <tr><td align="center" style="padding:40px 16px;">

      <!-- Card -->
      <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:${T.surface};border:1px solid ${T.border};border-radius:16px;overflow:hidden;">

        <!-- Top gradient bar -->
        <tr>
          <td style="height:3px;background:linear-gradient(90deg,${T.purple},${T.accent});line-height:3px;font-size:0;">&nbsp;</td>
        </tr>

        <!-- Hero section -->
        <tr>
          <td style="padding:40px 36px 32px;text-align:center;">


            <h1 style="margin:0 0 10px;font-size:26px;font-weight:800;color:${T.textPrimary};letter-spacing:-0.03em;line-height:1.15;">
              Merci ${firstName} !
            </h1>
            <p style="margin:0;font-size:15px;color:${T.textSecondary};line-height:1.6;max-width:380px;margin:0 auto;">
              Votre demande a bien été transmise à notre équipe.<br/>Nous vous répondons sous <strong style="color:${T.textPrimary};">24 heures</strong>.
            </p>
          </td>
        </tr>

        <!-- Divider -->
        <tr><td style="height:1px;background:${T.border};"></td></tr>

        <!-- What's next -->
        <tr>
          <td style="padding:28px 36px;">
            <p style="margin:0 0 18px;font-family:${T.fontMono};font-size:10px;color:${T.textMuted};text-transform:uppercase;letter-spacing:0.12em;">Prochaines étapes</p>

            <!-- Step 1 -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:14px;">
              <tr>
                <td style="width:36px;vertical-align:top;padding-top:2px;">
                  <div style="width:24px;height:24px;background:rgba(59,130,246,0.12);border:1px solid rgba(59,130,246,0.3);border-radius:6px;text-align:center;line-height:24px;font-family:${T.fontMono};font-size:11px;font-weight:700;color:${T.accent};">1</div>
                </td>
                <td style="padding-left:12px;">
                  <p style="margin:0 0 2px;font-size:13px;font-weight:600;color:${T.textPrimary};">Analyse de votre projet</p>
                  <p style="margin:0;font-size:12px;color:${T.textSecondary};">Notre équipe étudie vos besoins et prépare une proposition personnalisée.</p>
                </td>
              </tr>
            </table>

            <!-- Step 2 -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:14px;">
              <tr>
                <td style="width:36px;vertical-align:top;padding-top:2px;">
                  <div style="width:24px;height:24px;background:rgba(139,92,246,0.12);border:1px solid rgba(139,92,246,0.3);border-radius:6px;text-align:center;line-height:24px;font-family:${T.fontMono};font-size:11px;font-weight:700;color:${T.purple};">2</div>
                </td>
                <td style="padding-left:12px;">
                  <p style="margin:0 0 2px;font-size:13px;font-weight:600;color:${T.textPrimary};">Devis sous 24h</p>
                  <p style="margin:0;font-size:12px;color:${T.textSecondary};">Vous recevez un devis détaillé avec planning et tarif sur-mesure.</p>
                </td>
              </tr>
            </table>

            <!-- Step 3 -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="width:36px;vertical-align:top;padding-top:2px;">
                  <div style="width:24px;height:24px;background:rgba(22,163,74,0.12);border:1px solid rgba(22,163,74,0.3);border-radius:6px;text-align:center;line-height:24px;font-family:${T.fontMono};font-size:11px;font-weight:700;color:${T.green};">3</div>
                </td>
                <td style="padding-left:12px;">
                  <p style="margin:0 0 2px;font-size:13px;font-weight:600;color:${T.textPrimary};">Lancement du projet</p>
                  <p style="margin:0;font-size:12px;color:${T.textSecondary};">On démarre dès validation — délai moyen 7 à 14 jours selon le projet.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Divider -->
        <tr><td style="height:1px;background:${T.border};"></td></tr>

        <!-- Summary recap -->
        ${
          data.project
            ? `<tr>
          <td style="padding:20px 36px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:${T.card};border:1px solid ${T.border};border-radius:10px;padding:16px;overflow:hidden;">
              <tr><td style="padding:0 16px 12px;">
                <p style="margin:0;font-family:${T.fontMono};font-size:10px;color:${T.textMuted};text-transform:uppercase;letter-spacing:0.1em;">Votre demande</p>
              </td></tr>
              <tr><td style="padding:0 16px 16px;">
                <p style="margin:0;font-size:14px;color:${T.textPrimary};font-weight:500;">${data.project}</p>
              </td></tr>
            </table>
          </td>
        </tr>`
            : ''
        }

        <!-- CTA -->
        <tr>
          <td style="padding:8px 36px 36px;text-align:center;">
            <a href="https://sidikoff.com"
               style="display:inline-block;background:linear-gradient(135deg,${T.accent},${T.accentDim});color:#fff;text-decoration:none;font-family:${T.fontSans};font-size:13px;font-weight:600;padding:13px 28px;border-radius:8px;letter-spacing:0.01em;">
              Visiter sidikoff.com
            </a>
            <p style="margin:14px 0 0;font-size:12px;color:${T.textMuted};">
              Une question urgente ? <a href="mailto:s.sidikoff@gmail.com" style="color:${T.accent};text-decoration:none;">s.sidikoff@gmail.com</a>
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:14px 36px;border-top:1px solid ${T.border};background:${T.card};">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <p style="margin:0;font-family:${T.fontMono};font-size:10px;color:${T.textMuted};text-transform:uppercase;letter-spacing:0.08em;">Sidikoff Digital · Villeurbanne / Lyon</p>
                </td>
                <td align="right">
                  <p style="margin:0;font-family:${T.fontMono};font-size:10px;color:${T.textMuted};">sidikoff.com</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

      </table>

    </td></tr>
  </table>

</body>
</html>`
}

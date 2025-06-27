import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'SIDIKOFF DIGITAL - Agence Web Parisienne | Création Sites Internet & Applications'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Cache busting and unique identification
export const generateImageMetadata = () => [
  {
    id: 'sidikoff-digital-main',
    contentType: 'image/png',
    size: { width: 1200, height: 630 },
    alt: 'SIDIKOFF DIGITAL - Agence Web Parisienne',
  },
]

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
          color: 'white',
          position: 'relative',
        }}>
        {/* Background pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'radial-gradient(circle at 25px 25px, rgba(255,255,255,0.15) 3%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255,255,255,0.1) 2%, transparent 0%)',
            backgroundSize: '100px 100px',
          }}
        />

        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: '50px',
            left: '50px',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            border: '2px solid rgba(255,255,255,0.2)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '80px',
            right: '80px',
            width: '60px',
            height: '60px',
            borderRadius: '8px',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            transform: 'rotate(45deg)',
          }}
        />

        {/* Branding watermark */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            fontSize: '12px',
            opacity: 0.6,
            fontWeight: '500',
          }}>
          SIDIKOFF.COM
        </div>

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            zIndex: 1,
            maxWidth: '1000px',
            padding: '0 50px',
          }}>
          <h1
            style={{
              fontSize: '68px',
              fontWeight: '900',
              margin: '0 0 24px 0',
              textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              letterSpacing: '-0.02em',
            }}>
            SIDIKOFF DIGITAL
          </h1>

          <p
            style={{
              fontSize: '32px',
              margin: '0 0 40px 0',
              opacity: 0.95,
              maxWidth: '900px',
              lineHeight: 1.4,
              fontWeight: '600',
              textShadow: '1px 1px 4px rgba(0,0,0,0.2)',
            }}>
            Agence Web Parisienne • Sites & Applications
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '35px',
              fontSize: '22px',
              opacity: 0.9,
              justifyContent: 'center',
              maxWidth: '800px',
            }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              🌐 Sites Web Modernes
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              ⚡ Applications React
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              🎨 Design UX/UI
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              📈 SEO & Performance
            </span>
          </div>
        </div>

        {/* Bottom bar with enhanced design */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '100px',
            background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.4) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            fontWeight: '500',
            borderTop: '1px solid rgba(255,255,255,0.2)',
          }}>
          <span style={{ opacity: 0.9 }}>📍 Paris, France</span>
          <span style={{ margin: '0 30px', opacity: 0.6 }}>•</span>
          <span style={{ opacity: 0.9 }}>www.sidikoff.com</span>
        </div>
      </div>
    ),
    {
      ...size,
      headers: {
        'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
      },
    }
  )
}

import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'SIDIKOFF DIGITAL - Agence Web à Paris'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Inter, sans-serif',
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
              'radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255,255,255,0.1) 2%, transparent 0%)',
            backgroundSize: '100px 100px',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            zIndex: 1,
          }}>
          <h1
            style={{
              fontSize: '60px',
              fontWeight: 'bold',
              margin: '0 0 20px 0',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}>
            SIDIKOFF DIGITAL
          </h1>

          <p
            style={{
              fontSize: '28px',
              margin: '0 0 30px 0',
              opacity: 0.9,
              maxWidth: '800px',
              lineHeight: 1.3,
            }}>
            Agence Web à Paris • Création Sites & Applications
          </p>

          <div
            style={{
              display: 'flex',
              gap: '30px',
              fontSize: '20px',
              opacity: 0.8,
            }}>
            <span>🌐 Sites Web</span>
            <span>⚡ Apps Modernes</span>
            <span>🎨 UX/UI Design</span>
            <span>📈 SEO</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '80px',
            background: 'rgba(0,0,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
          }}>
          📍 Paris, France • sidikoff-digital.fr
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

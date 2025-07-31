import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'SIDIKOFF DIGITAL- Agence Web & Développement'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color: 'white',
        }}>
        <div
          style={{
            fontSize: 60,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Sidikoff
        </div>
        <div
          style={{
            fontSize: 24,
            opacity: 0.9,
          }}>
          Agence Web & Développement Digital
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

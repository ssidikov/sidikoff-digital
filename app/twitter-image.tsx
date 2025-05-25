import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'SIDIKOFF DIGITAL - Agence Web à Paris'
export const size = {
  width: 1200,
  height: 600,
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
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Inter, sans-serif',
          color: 'white',
          position: 'relative',
        }}>
        {/* Logo placeholder */}
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '30px',
            fontSize: '40px',
          }}>
          🚀
        </div>

        <h1
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            margin: '0 0 15px 0',
            textAlign: 'center',
          }}>
          SIDIKOFF DIGITAL
        </h1>

        <p
          style={{
            fontSize: '24px',
            margin: '0',
            opacity: 0.9,
            textAlign: 'center',
          }}>
          Agence Web à Paris
        </p>

        <div
          style={{
            marginTop: '30px',
            fontSize: '16px',
            opacity: 0.8,
            textAlign: 'center',
          }}>
          Création de sites web & applications modernes
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

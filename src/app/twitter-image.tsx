import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'SIDIKOFF Digital - Modern Web Solutions'
export const size = {
  width: 1200,
  height: 600,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(135deg, #1DA1F2 0%, #0d8bd9 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'Inter',
        }}>
        <div
          style={{
            fontSize: 64,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          SIDIKOFF Digital
        </div>
        <div
          style={{
            fontSize: 28,
            textAlign: 'center',
            maxWidth: 700,
            lineHeight: 1.2,
          }}>
          Professional web development agency specializing in modern websites and applications
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

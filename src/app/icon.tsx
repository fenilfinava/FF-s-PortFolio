import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const size = { width: 512, height: 512 }
export const contentType = 'image/png'
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1a1a1a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '112px',
        }}
      >
        <div
          style={{
            fontSize: 260,
            fontWeight: 800,
            color: '#FAFAF8',
            letterSpacing: '-8px',
            lineHeight: 1,
            marginTop: '20px',
          }}
        >
          FF
        </div>
        <div
          style={{
            width: '120px',
            height: '24px',
            background: '#7d30e8',
            borderRadius: '12px',
            marginTop: '20px',
          }}
        />
      </div>
    ),
    { ...size }
  )
}

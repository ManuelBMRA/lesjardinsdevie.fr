import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Les jardins de vie - Jardinier & petits travaux'
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
          background: 'linear-gradient(135deg, #7B9C47 0%, #6C8B3F 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'serif',
          color: 'white',
          position: 'relative',
        }}
      >
        {/* Logo placeholder */}
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
            fontSize: 48,
            fontWeight: 'bold',
          }}
        >
          LJ
        </div>

        {/* Titre principal */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 20,
            lineHeight: 1.1,
          }}
        >
          Les jardins de vie
        </div>

        {/* Sous-titre */}
        <div
          style={{
            fontSize: 32,
            textAlign: 'center',
            opacity: 0.9,
            marginBottom: 40,
            maxWidth: 800,
            lineHeight: 1.3,
          }}
        >
          Jardinier & petits travaux
        </div>

        {/* Badges */}
        <div
          style={{
            display: 'flex',
            gap: 20,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              padding: '12px 24px',
              borderRadius: 25,
              fontSize: 20,
              fontWeight: '600',
            }}
          >
            Devis gratuit
          </div>
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              padding: '12px 24px',
              borderRadius: 25,
              fontSize: 20,
              fontWeight: '600',
            }}
          >
            Déplacement offert
          </div>
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              padding: '12px 24px',
              borderRadius: 25,
              fontSize: 20,
              fontWeight: '600',
            }}
          >
            Intervention rapide
          </div>
        </div>

        {/* URL en bas */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            fontSize: 24,
            opacity: 0.8,
          }}
        >
          lesjardinsdevie.fr
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

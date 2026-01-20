export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#0B1C2D',
      color: 'white',
      padding: '60px 24px',
      fontFamily: 'Inter, sans-serif'
    }}>
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '48px'
      }}>
        <div>
          <h1 style={{
            fontSize: '42px',
            fontWeight: 600,
            lineHeight: 1.2
          }}>
            TİMA PROJE
          </h1>

          <p style={{
            marginTop: '16px',
            fontSize: '20px',
            opacity: 0.85
          }}>
            Kentsel Dönüşümde<br />
            Gerçekçi ve Şeffaf Ön Görünüm
          </p>

          <button style={{
            marginTop: '32px',
            padding: '14px 28px',
            background: '#C9A24D',
            color: '#0B1C2D',
            border: 'none',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer'
          }}>
            Ön Görünümü İncele
          </button>
        </div>

        <div style={{
          height: '320px',
          background: '#122B45',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0.8
        }}>
          <span>3D Yapı Kütlesi (Temsili)</span>
        </div>
      </section>
    </main>
  )
}

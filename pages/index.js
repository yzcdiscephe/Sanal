import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('TİMA PROJE Asistanı');

  const startAssistant = () => {
    const recognition = new (window.webkitSpeechRecognition || window.SpeechRecognition)();
    recognition.lang = 'tr-TR';
    recognition.onstart = () => { setLoading(true); setStatus('Dinleniyor...'); };
    recognition.onresult = () => { setLoading(false); setStatus('Analiz ediliyor...'); };
    recognition.start();
  };

  return (
    <div style={{
      backgroundColor: '#050505',
      backgroundImage: 'radial-gradient(circle at top right, #1a1a1a, #050505)',
      height: '100vh',
      color: '#fff',
      fontFamily: '"Optima", serif',
      display: 'flex',
      flexDirection: 'column',
      padding: '60px'
    }}>
      
      {/* Sol Üst Kurumsal Logo */}
      <div style={{ textAlign: 'left' }}>
        <h1 style={{ fontSize: '2.5rem', letterSpacing: '10px', color: '#d4af37', margin: 0 }}>TİMA PROJE</h1>
        <p style={{ fontSize: '0.8rem', letterSpacing: '4px', color: '#666', marginTop: '10px' }}>GAYRİMENKUL & YATIRIM</p>
      </div>

      {/* Orta Alan - Boş ve Ferah (Lüks hissi verir) */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
        <div style={{ maxWidth: '500px' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: '300', lineHeight: '1.2' }}>Geleceği Güvenle İnşa Ediyoruz.</h2>
          <p style={{ color: '#888', marginTop: '20px', fontSize: '1.1rem' }}>Kentsel dönüşümde şeffaf ve profesyonel çözümler.</p>
        </div>
      </div>

      {/* Sağ Alt Köşe: Uzman Panel (Asistan Burada) */}
      <div style={{
        position: 'fixed',
        bottom: '40px',
        right: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '15px'
      }}>
        
        {/* Asistan Butonu */}
        <div 
          onClick={startAssistant}
          style={{
            backgroundColor: 'rgba(212, 175, 55, 0.1)',
            border: '1px solid #d4af37',
            padding: '15px 30px',
            borderRadius: '2px',
            cursor: 'pointer',
            textAlign: 'right',
            backdropFilter: 'blur(10px)',
            transition: '0.3s'
          }}
        >
          <span style={{ fontSize: '0.7rem', letterSpacing: '2px', color: '#d4af37', display: 'block' }}>SESLİ UZMAN</span>
          <span style={{ fontSize: '1rem', color: '#fff' }}>{status}</span>
        </div>

        {/* WhatsApp Butonu */}
        <a 
          href="https://wa.me/905323663922"
          style={{
            backgroundColor: '#d4af37',
            color: '#000',
            padding: '12px 25px',
            textDecoration: 'none',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            letterSpacing: '1px'
          }}
        >
          WHATSAPP HATTI
        </a>
      </div>

      <footer style={{ fontSize: '0.7rem', color: '#333', letterSpacing: '2px' }}>
        © 2024 TİMA PROJE | PRIVACY FIRST
      </footer>
    </div>
  );
}


import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('TİMA İNŞAAT UZMANI');

  const startAssistant = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;
    const recognition = new SpeechRecognition();
    recognition.lang = 'tr-TR';
    recognition.onstart = () => { setLoading(true); setStatus('Sizi Dinliyorum...'); };
    recognition.onresult = () => { setLoading(false); setStatus('Analiz Ediliyor...'); };
    recognition.start();
  };

  return (
    <div style={{
      backgroundColor: '#000',
      height: '100vh',
      color: '#d4af37', // Gerçek Gold rengi
      fontFamily: '"Times New Roman", Times, serif', // İstediğin klasik ağır yazı karakteri
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '50px 30px',
      boxSizing: 'border-box'
    }}>
      
      {/* Üst Kısım: Kurumsal Logo */}
      <header style={{ textAlign: 'center' }}>
        <h1 style={{ 
          fontSize: '3rem', 
          letterSpacing: '12px', 
          margin: 0, 
          fontWeight: '400',
          textTransform: 'uppercase' 
        }}>TİMA</h1>
        <h2 style={{ 
          fontSize: '1.5rem', 
          letterSpacing: '6px', 
          margin: '10px 0', 
          fontWeight: '300',
          color: '#fff' 
        }}>İNŞAAT</h2>
        <div style={{ height: '1px', width: '80px', backgroundColor: '#d4af37', margin: '20px auto' }}></div>
      </header>

      {/* Orta Kısım: İnşaat Sloganı */}
      <main style={{ textAlign: 'left' }}>
        <p style={{ 
          fontSize: '2.8rem', 
          lineHeight: '1.2', 
          color: '#fff', 
          margin: 0,
          fontStyle: 'italic'
        }}>
          Geleceği <br/> 
          <span style={{ color: '#d4af37' }}>Altın</span> <br/> 
          Standartlarla <br/> 
          İnşa Ediyoruz.
        </p>
      </main>

      {/* Alt Kısım: Butonlar */}
      <footer style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Asistan Butonu - Gold Çerçeve */}
        <button 
          onClick={startAssistant}
          style={{
            background: 'rgba(212, 175, 55, 0.05)',
            border: '2px solid #d4af37',
            padding: '25px',
            color: '#d4af37',
            cursor: 'pointer',
            width: '100%',
            transition: '0.4s'
          }}
        >
          <span style={{ fontSize: '0.7rem', letterSpacing: '3px', display: 'block', marginBottom: '8px', color: '#fff' }}>
            SESLİ YAPAY ZEKA SİSTEMİ
          </span>
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold', textTransform: 'uppercase' }}>{status}</span>
        </button>

        {/* WhatsApp Butonu - Tam Gold Blok */}
        <a 
          href="https://wa.me/905323663922"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#d4af37',
            color: '#000',
            padding: '20px',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: 'bold',
            letterSpacing: '2px',
            textAlign: 'center',
            display: 'block',
            textTransform: 'uppercase'
          }}
        >
          ÖZEL DANIŞMANLIK HATTI
        </a>
      </footer>

    </div>
  );
}

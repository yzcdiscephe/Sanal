import React, { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('TİMA İNŞAAT DANIŞMANI');

  const startAssistant = () => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) return;
      
      const recognition = new SpeechRecognition();
      recognition.lang = 'tr-TR';
      
      recognition.onstart = () => { 
        setLoading(true); 
        setStatus('Sizi Dinliyorum...'); 
      };
      
      recognition.onresult = () => { 
        setLoading(false); 
        setStatus('Analiz Ediliyor...'); 
      };

      recognition.onerror = () => {
        setLoading(false);
        setStatus('Tekrar Deneyin');
      };

      recognition.start();
    }
  };

  return (
    <div style={{
      backgroundColor: '#000',
      height: '100vh',
      color: '#d4af37',
      fontFamily: '"Times New Roman", Times, serif',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '50px 30px',
      boxSizing: 'border-box'
    }}>
      
      <header style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', letterSpacing: '12px', margin: 0, fontWeight: '400', color: '#d4af37' }}>TİMA</h1>
        <h2 style={{ fontSize: '1.4rem', letterSpacing: '8px', color: '#fff', margin: '5px 0', fontWeight: '300' }}>İNŞAAT</h2>
        <div style={{ height: '2px', width: '80px', backgroundColor: '#d4af37', margin: '20px auto' }}></div>
      </header>

      <main>
        <p style={{ fontSize: '2.5rem', lineHeight: '1.2', color: '#fff', fontStyle: 'italic', margin: 0 }}>
          Geleceği <br/> 
          <span style={{ color: '#d4af37', fontWeight: 'bold' }}>Altın</span> <br/> 
          Standartlarla <br/> 
          İnşa Ediyoruz.
        </p>
      </main>

      <footer style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <button 
          onClick={startAssistant}
          style={{
            background: 'rgba(212, 175, 55, 0.1)',
            border: '2px solid #d4af37',
            padding: '25px',
            color: '#d4af37',
            cursor: 'pointer',
            width: '100%',
            display: 'block'
          }}
        >
          <span style={{ fontSize: '0.7rem', letterSpacing: '3px', display: 'block', color: '#fff', marginBottom: '8px' }}>
            SESLİ YAPAY ZEKA SİSTEMİ
          </span>
          <span style={{ fontSize: '1.1rem', fontWeight: 'bold', textTransform: 'uppercase' }}>{status}</span>
        </button>

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
            textAlign: 'center',
            letterSpacing: '2px',
            display: 'block'
          }}
        >
          WHATSAPP İLETİŞİM HATTI
        </a>
      </footer>
    </div>
  );
}

import { useState, useEffect } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('TİMA PROJE Asistanı');

  const startAssistant = () => {
    // Tarayıcı desteği kontrolü
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Tarayıcınız ses tanımayı desteklemiyor.");
      return;
    }

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
  };

  return (
    <div style={{
      backgroundColor: '#000',
      height: '100vh',
      color: '#fff',
      fontFamily: '"Georgia", serif',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '40px 20px',
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>
      
      {/* Üst Kısım: Logo */}
      <header style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1 style={{ fontSize: '2.5rem', letterSpacing: '8px', color: '#d4af37', margin: 0 }}>TİMA PROJE</h1>
        <p style={{ fontSize: '0.7rem', letterSpacing: '3px', color: '#666', marginTop: '10px' }}>GAYRİMENKUL & YATIRIM</p>
      </header>

      {/* Orta Kısım: Slogan */}
      <main style={{ textAlign: 'left', padding: '0 10px' }}>
        <h2 style={{ fontSize: '2.8rem', fontWeight: '300', lineHeight: '1.1', marginBottom: '20px' }}>
          Geleceği <br/> Güvenle <br/> İnşa Ediyoruz.
        </h2>
      </main>

      {/* Alt Kısım: Butonlar (Birbirine çarpmayacak şekilde düzenlendi) */}
      <footer style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
        
        {/* Asistan Butonu - Daha şık ve tıklanabilir */}
        <button 
          onClick={startAssistant}
          style={{
            background: 'transparent',
            border: '1px solid #d4af37',
            padding: '20px',
            color: '#fff',
            cursor: 'pointer',
            textAlign: 'center',
            backdropFilter: 'blur(5px)',
            width: '100%',
            display: 'block'
          }}
        >
          <span style={{ fontSize: '0.6rem', letterSpacing: '2px', color: '#d4af37', display: 'block', marginBottom: '5px' }}>
            {loading ? 'SİSTEM AKTİF' : 'SESLİ UZMAN DANIŞMAN'}
          </span>
          <span style={{ fontSize: '1.1rem', fontWeight: '300' }}>{status}</span>
        </button>

        {/* WhatsApp Butonu - Asistanla karışmaz */}
        <a 
          href="https://wa.me/905323663922"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#d4af37',
            color: '#000',
            padding: '18px',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: 'bold',
            letterSpacing: '2px',
            textAlign: 'center',
            display: 'block'
          }}
        >
          WHATSAPP İLETİŞİM HATTI
        </a>
      </footer>

    </div>
  );
}


import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('Size nasıl yardımcı olabilirim?');

  const startAssistant = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'tr-TR';

    recognition.onstart = () => {
      setLoading(true);
      setStatus('Sizi dinliyorum...');
    };

    recognition.onresult = async (event) => {
      setLoading(false);
      setStatus('Analiz ediliyor...');
      // OpenAI API bağlantısı burada devreye girecek
    };

    recognition.start();
  };

  return (
    <div style={{
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop")', // Lüks İnşaat Görseli
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      textAlign: 'center'
    }}>
      
      {/* Üst Başlık (Kurumsal) */}
      <div style={{ position: 'absolute', top: '40px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', margin: 0 }}>TİMA PROJE</h1>
        <div style={{ height: '4px', width: '60px', backgroundColor: '#d4af37', margin: '10px auto' }}></div>
        <p style={{ fontSize: '1.2rem', color: '#d4af37' }}>Kentsel Dönüşümde Güven ve Estetik</p>
      </div>

      {/* Ana Asistan Alanı */}
      <div style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.1)', 
        backdropFilter: 'blur(10px)', 
        padding: '50px', 
        borderRadius: '30px', 
        border: '1px solid rgba(255,255,255,0.2)',
        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
        width: '80%',
        maxWidth: '400px'
      }}>
        <h2 style={{ marginBottom: '30px', fontWeight: '300' }}>Yapay Zeka Uzmanı</h2>
        
        <button 
          onClick={startAssistant}
          style={{
            backgroundColor: loading ? '#ff4b2b' : '#d4af37', // Altın sarısı (Lüks renk)
            border: 'none',
            borderRadius: '50%',
            width: '120px',
            height: '120px',
            cursor: 'pointer',
            fontSize: '50px',
            transition: 'all 0.3s ease',
            boxShadow: loading ? '0 0 30px #ff4b2b' : '0 10px 30px rgba(212, 175, 55, 0.4)'
          }}
        >
          {loading ? '⏳' : '🎤'}
        </button>
        
        <p style={{ marginTop: '25px', fontSize: '1.1rem', color: '#eee' }}>{status}</p>
      </div>

      {/* Alt Bilgi */}
      <p style={{ position: 'absolute', bottom: '100px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
        Tüm hakları saklıdır © 2024 TİMA PROJE
      </p>

      {/* WhatsApp Butonu (Profesyonel) */}
      <a 
        href="https://wa.me/905323663922" 
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          backgroundColor: '#25D366',
          color: 'white',
          borderRadius: '50px',
          padding: '12px 25px',
          textDecoration: 'none',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
          zIndex: 1000
        }}
      >
        <span style={{ marginRight: '10px' }}>Hızlı İletişim</span>
        💬
      </a>
    </div>
  );
}


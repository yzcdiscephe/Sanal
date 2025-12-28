import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('Asistanı Başlatmak İçin Basın');

  const startAssistant = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'tr-TR';

    recognition.onstart = () => {
      setLoading(true);
      setStatus('Dinliyorum...');
    };

    recognition.onresult = async (event) => {
      const text = event.results[0][0].transcript;
      setStatus('Düşünüyorum...');
      // OpenAI API bağlantısı burada yapılacak
    };

    recognition.onerror = () => {
      setLoading(false);
      setStatus('Bir hata oluştu. Tekrar deneyin.');
    };

    recognition.start();
  };

  return (
    <div style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")', // Modern Bina Resmi
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ backgroundColor: 'rgba(0,0,0,0.6)', padding: '40px', borderRadius: '20px', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '20px' }}>Kentsel Dönüşüm Temsilcisi</h1>
        
        {/* Mikrofon Butonu */}
        <button 
          onClick={startAssistant}
          style={{
            backgroundColor: loading ? '#ff4b2b' : '#0070f3',
            border: 'none',
            borderRadius: '50%',
            width: '100px',
            height: '100px',
            cursor: 'pointer',
            fontSize: '40px',
            boxShadow: '0 0 20px rgba(0,0,0,0.5)'
          }}
        >
          {loading ? '⏳' : '🎤'}
        </button>
        
        <p style={{ marginTop: '20px', fontWeight: 'bold' }}>{status}</p>
      </div>

      {/* WhatsApp Butonu */}
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
          padding: '15px 25px',
          textDecoration: 'none',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
        }}
      >
        <span style={{ marginRight: '10px' }}>WhatsApp Destek</span>
        💬
      </a>
    </div>
  );
}


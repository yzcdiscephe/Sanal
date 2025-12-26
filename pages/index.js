import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);

  const startAssistant = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'tr-TR';
    
    recognition.onstart = () => setLoading(true);
    
    recognition.onresult = async (event) => {
      const text = event.results[0][0].transcript;
      
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: text }),
      });
      const data = await res.json();
      
      // Sesli Yanıt (Tarayıcı TTS)
      const utterance = new SpeechSynthesisUtterance(data.answer);
      utterance.lang = 'tr-TR';
      window.speechSynthesis.speak(utterance);
      setLoading(false);
    };
    recognition.start();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#000', color: '#fff', textAlign: 'center' }}>
      <button onClick={startAssistant} style={{ width: '150px', height: '150px', borderRadius: '50%', backgroundColor: loading ? 'red' : 'blue', border: 'none', fontSize: '40px' }}>
        {loading ? '⏳' : '🎙️'}
      </button>
      <h1>Kentsel Dönüşüm Temsilcisi</h1>
      <p>{loading ? 'Dinliyorum...' : 'Başlatmak için dokun'}</p>
    </div>
  );
}

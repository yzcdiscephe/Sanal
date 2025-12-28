import React, { useState } from 'react';

export default function Home() {
  const [status, setStatus] = useState('TİMA İNŞAAT UZMANI');

  return (
    <div style={{ backgroundColor: '#000', height: '100vh', color: '#d4af37', fontFamily: 'serif', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '60px 20px', textAlign: 'center', boxSizing: 'border-box' }}>
      <header>
        <h1 style={{ fontSize: '3.5rem', letterSpacing: '10px', margin: '0', fontWeight: '400' }}>TİMA</h1>
        <p style={{ color: '#fff', letterSpacing: '5px', fontSize: '1.2rem' }}>İNŞAAT</p>
        <div style={{ height: '2px', width: '60px', backgroundColor: '#d4af37', margin: '20px auto' }}></div>
      </header>
      
      <main>
        <h2 style={{ fontSize: '2.5rem', fontStyle: 'italic', color: '#fff', lineHeight: '1.2' }}>Geleceği Altın Standartlarla İnşa Ediyoruz.</h2>
      </main>

      <footer style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <button onClick={() => alert('Asistan Devrede')} style={{ background: 'rgba(212,175,55,0.1)', border: '2px solid #d4af37', color: '#d4af37', padding: '25px', width: '100%', cursor: 'pointer', fontSize: '1.2rem', fontWeight: 'bold' }}>
          <small style={{ display: 'block', color: '#fff', letterSpacing: '2px', marginBottom: '5px' }}>SESLİ UZMAN</small>
          {status}
        </button>
        <a href="https://wa.me/905323663922" style={{ backgroundColor: '#d4af37', color: '#000', padding: '20px', display: 'block', textDecoration: 'none', fontWeight: 'bold', letterSpacing: '2px' }}>WHATSAPP HATTI</a>
      </footer>
    </div>
  );
}

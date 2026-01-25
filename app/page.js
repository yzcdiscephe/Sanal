'use client';

import { useEffect } from 'react';
import * as THREE from 'three';

export default function Page() {

  // === THREE.JS SADE 3D ===
  useEffect(() => {
    const container = document.getElementById('three-container');
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, container.offsetWidth / 360, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(container.offsetWidth, 360);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(2, 4, 2);
    const material = new THREE.MeshStandardMaterial({ color: '#b11226' });
    const building = new THREE.Mesh(geometry, material);
    scene.add(building);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 10, 5);
    scene.add(light);

    camera.position.z = 7;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return (
    <main style={{ background: '#0b0b0b', color: '#fff', fontFamily: 'Arial, sans-serif' }}>

      {/* HERO */}
      <section style={{
        minHeight: '100vh',
        background: "linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.9)), url('/building.jpg') center/cover",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '40px'
      }}>
        <div>
          <h1 style={{ fontSize: '3rem', maxWidth: 800 }}>
            Binanızın dönüşüm senaryosunu görün
          </h1>
          <button style={{
            marginTop: 30,
            padding: '14px 32px',
            background: '#b11226',
            color: '#fff',
            border: 'none',
            fontSize: 16,
            cursor: 'pointer'
          }}>
            Senaryoyu Başlat
          </button>
        </div>
      </section>

      {/* ÖNCE / SONRA */}
      <section style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h2>Önce / Sonra</h2>
        <p style={{ opacity: .6 }}>Aynı bina, farklı gelecek</p>
      </section>

      {/* 3D BİNA */}
      <section style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h2>Yeni Yapı Senaryosu</h2>
        <div
          id="three-container"
          style={{ maxWidth: 900, margin: '40px auto' }}
        />
        <p style={{ opacity: .6, marginTop: 20 }}>
          Bu görsel bir senaryo simülasyonudur
        </p>
      </section>

      {/* MALİYET SENARYOSU */}
      <section style={{ padding: '100px 20px', background: '#111', textAlign: 'center' }}>
        <h2>Daire İçi Senaryo</h2>
        <div style={{
          maxWidth: 600,
          margin: '40px auto',
          display: 'grid',
          gap: 16
        }}>
          <div style={cardStyle}>Mevcut Daire Durumu</div>
          <div style={cardStyle}>Devlet Destekleri</div>
          <div style={cardStyle}>Net Senaryo</div>
        </div>
        <p style={{ opacity: .5 }}>Bu bir ödeme planı değildir</p>
      </section>

      {/* MARKALAR */}
      <section style={{ padding: '100px 20px' }}>
        <h2 style={{ textAlign: 'center' }}>Kullanılan Yapı Markaları</h2>
        <div style={{
          maxWidth: 900,
          margin: '40px auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px,1fr))',
          gap: 20
        }}>
          {['Vitra','Rehau','Schneider','Knauf','Siemens'].map(m => (
            <div key={m} style={cardStyle}>{m}</div>
          ))}
        </div>
      </section>

      {/* TÜRKİYE */}
      <section style={{ padding: '80px 20px', textAlign: 'center', opacity: .6 }}>
        İstanbul · Ankara · İzmir · Bursa · Gaziantep · Adana
        <div>Türkiye genelinde dönüşüm senaryoları</div>
      </section>

      {/* KAPANIŞ */}
      <section style={{
        padding: '100px 20px',
        background: '#000',
        textAlign: 'center'
      }}>
        <h2>Binanız için senaryo görmek ister misiniz?</h2>
        <button style={{
          marginTop: 30,
          padding: '14px 32px',
          background: '#b11226',
          color: '#fff',
          border: 'none',
          fontSize: 16,
          cursor: 'pointer'
        }}>
          Senaryomu Gör
        </button>
      </section>

    </main>
  );
}

const cardStyle = {
  background: '#1a1a1a',
  padding: '20px',
  borderRadius: 8,
  textAlign: 'center'
};

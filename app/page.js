'use client';

import { useEffect } from 'react';
import * as THREE from 'three';

export default function Home() {

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / 400, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, 400);
    document.getElementById('three-area').appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(2, 4, 2);
    const material = new THREE.MeshStandardMaterial({ color: 0xbfa76f });
    const building = new THREE.Mesh(geometry, material);
    scene.add(building);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    camera.position.z = 6;

    const animate = () => {
      requestAnimationFrame(animate);
      building.rotation.y += 0.003;
      renderer.render(scene, camera);
    };
    animate();

    return () => renderer.dispose();
  }, []);

  return (
    <main style={{ fontFamily: 'Inter, sans-serif', background: '#0b0f1a', color: '#fff' }}>

      {/* HERO */}
      <section style={{
        height: '100vh',
        background: "linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.9)), url('/building.jpg') center/cover",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3rem', maxWidth: 800 }}>
          Kentsel dönüşüm, doğru senaryo ile başlar
        </h1>
      </section>

      {/* HESAPLAMA */}
      <section style={{ padding: '80px 20px', background: '#111827', textAlign: 'center' }}>
        <h2>Örnek Dönüşüm Hesabı</h2>
        <p style={{ opacity: .7 }}>Bu bölümde binaya özel senaryo oluşur.</p>
      </section>

      {/* 3D CEPHE */}
      <section style={{ padding: '80px 0', background: '#0b0f1a', textAlign: 'center' }}>
        <h2>Yeni Yapının Cephe Senaryosu</h2>
        <div id="three-area" style={{ marginTop: 40 }} />
      </section>

      {/* MARKALAR */}
      <section style={{ padding: '80px 20px', background: '#111827' }}>
        <h2 style={{ textAlign: 'center' }}>Kullanılan Yapı Markaları</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(120px,1fr))',
          gap: 20,
          marginTop: 40
        }}>
          {['Vitra','Siemens','Rehau','Schneider','Knauf'].map(m => (
            <div key={m} style={{
              padding: 20,
              background: '#1f2937',
              textAlign: 'center',
              borderRadius: 8
            }}>{m}</div>
          ))}
        </div>
      </section>

      {/* ALT KAPANIŞ */}
      <section style={{ padding: '60px 20px', textAlign: 'center', opacity: .6 }}>
        Her bina kendi şartlarıyla değerlendirilir.
      </section>

    </main>
  );
}

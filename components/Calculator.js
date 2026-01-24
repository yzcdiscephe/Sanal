'use client';
import { useState } from 'react';

export default function Calculator() {
  const [metre, setMetre] = useState(100);

  return (
    <section id="hesaplama" className="calculator">
      <h2>Dairen İçin Tahmini Senaryo</h2>

      <input
        type="range"
        min="70"
        max="150"
        value={metre}
        onChange={(e) => setMetre(e.target.value)}
      />

      <p><strong>{metre} m²</strong> mevcut daire</p>
      <p>Tahmini fark: <strong>{(metre * 2500).toLocaleString()} ₺</strong></p>
    </section>
  );
}

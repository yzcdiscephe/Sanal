'use client';
import { useState } from 'react';

export default function Calculator() {
  const [metre, setMetre] = useState(100);

  const fark = metre * 2500;

  return (
    <section id="hesaplama" className="calculator">
      <h2>Dairen İçin Tahmini Senaryo</h2>

      <label>Daire m²</label>
      <input
        type="range"
        min="70"
        max="150"
        value={metre}
        onChange={(e) => setMetre(e.target.value)}
      />

      <div className="result">
        <p>Tahmini Ödenecek Fark</p>
        <strong>{fark.toLocaleString()} ₺</strong>
      </div>
    </section>
  );
}

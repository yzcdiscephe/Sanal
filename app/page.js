export default function Home() {
  return (
    <main style={{ background: "#0e0e0e", color: "#fff", minHeight: "100vh" }}>

      {/* HEADER */}
      <header style={{
        position: "sticky",
        top: 0,
        background: "rgba(14,14,14,0.95)",
        padding: "20px 40px",
        borderBottom: "1px solid #222",
        zIndex: 10
      }}>
        <strong style={{ color: "#c81d25", fontSize: 18 }}>
          TİMA PROJE
        </strong>
      </header>

      {/* HERO */}
      <section style={{
        padding: "140px 40px 100px",
        textAlign: "center",
        background: "radial-gradient(circle at top, #1a1a1a, #0e0e0e)"
      }}>
        <h1 style={{ fontSize: 44, lineHeight: 1.2 }}>
          Geleceğin Güvenli Yapıları,<br />
          <span style={{ color: "#c81d25" }}>Bugünün Lüksüyle</span> Buluşuyor
        </h1>

        <p style={{ maxWidth: 720, margin: "30px auto", opacity: 0.8 }}>
          Kentsel dönüşüm sürecinizi vaatlerle değil, gerçekçi hesaplamalar
          ve şeffaf ön görünüm ile ele alıyoruz.
        </p>

        <button style={{
          marginTop: 30,
          padding: "16px 36px",
          background: "#c81d25",
          border: "none",
          color: "#fff",
          fontSize: 16,
          cursor: "pointer"
        }}>
          Ücretsiz Ön Görünüm Al
        </button>
      </section>

      {/* MARKALAR */}
      <section style={{ padding: "80px 40px" }}>
        <h2 style={{ marginBottom: 10 }}>Kalite Standartlarımız</h2>
        <p style={{ opacity: 0.6 }}>
          Sadece en iyi markalarla çalışıyoruz
        </p>

        <div style={{
          display: "flex",
          gap: 30,
          marginTop: 30,
          overflowX: "auto"
        }}>
          {["Vitra","Artema","Siemens","Rehau","Schneider","Knauf"].map(marka => (
            <div key={marka} style={{
              minWidth: 140,
              padding: 20,
              border: "1px solid #222",
              textAlign: "center",
              opacity: 0.85
            }}>
              {marka}
            </div>
          ))}
        </div>
      </section>

      {/* HESAPLAMA */}
      <section style={{
        padding: "80px 40px",
        background: "#111"
      }}>
        <h2>Ön Görünüm Hesaplama</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
          gap: 24,
          marginTop: 30
        }}>
          <div>
            <label>İlçe</label>
            <select id="ilce" style={{ width: "100%", padding: 12, marginTop: 8 }}>
              <option value="2.5">Fatih</option>
              <option value="2.2">Bahçelievler</option>
              <option value="2.0">Güngören</option>
              <option value="2.3">Bakırköy</option>
              <option value="2.1">Bağcılar</option>
            </select>
          </div>

          <div>
            <label>Mevcut Daire (m²)</label>
            <input
              id="m2"
              type="number"
              defaultValue="100"
              style={{ width: "100%", padding: 12, marginTop: 8 }}
            />
          </div>
        </div>

        <div id="sonuc" style={{
          marginTop: 30,
          padding: 20,
          border: "1px solid #222"
        }}>
          Hesaplama sonucu burada gösterilir.
        </div>
      </section>

      {/* 3D */}
      <section style={{ padding: "80px 40px" }}>
        <h2>3D Bina Ön İzleme</h2>
        <div style={{
          marginTop: 20,
          height: 320,
          background: "#0a0a0a",
          border: "1px solid #222",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#666"
        }}>
          360° Dış Cephe Görselleştirme Alanı
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: 40,
        textAlign: "center",
        fontSize: 14,
        opacity: 0.5,
        borderTop: "1px solid #222"
      }}>
        © TİMA PROJE — Bilgilendirme amaçlıdır.
      </footer>

      {/* JS */}
      <script dangerouslySetInnerHTML={{
        __html: `
          const ilce = document.getElementById("ilce");
          const m2 = document.getElementById("m2");
          const sonuc = document.getElementById("sonuc");

          function hesapla() {
            const emsal = Number(ilce.value);
            const alan = Number(m2.value);
            const yeniAlan = Math.round(alan * emsal * 0.4);

            sonuc.innerHTML =
              "Tahmini yeni daire alanı: <strong>" + yeniAlan +
              " m²</strong><br>Destekler ilçe bazlı değerlendirilir.";
          }

          ilce.onchange = hesapla;
          m2.oninput = hesapla;
          hesapla();
        `
      }} />

    </main>
  );
}

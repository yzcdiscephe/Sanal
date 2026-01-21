export default function Home() {
  return (
    <main style={{ background: "#0b0b0b", color: "#fff", minHeight: "100vh" }}>

      {/* HERO – BİNA ARKA PLAN */}
      <section
        style={{
          height: "100vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1593697820676-99d5d8f3e1b4')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 20px"
        }}
      >
        <div>
          <h1 style={{ fontSize: 48, lineHeight: 1.2 }}>
            Geleceğin Güvenli Yapıları<br />
            <span style={{ color: "#b11217" }}>
              Bugünün Lüksüyle
            </span>
          </h1>

          <p style={{ maxWidth: 700, margin: "30px auto", opacity: 0.85 }}>
            Kentsel dönüşüm sürecinde seçenek sunmayız.  
            Mevcut hakkınızı, gerçek destekleri ve net tabloyu gösteririz.
          </p>
        </div>
      </section>

      {/* DAİRE MALİYET HESAPLAMA */}
      <section style={{ padding: "90px 40px", maxWidth: 1100, margin: "auto" }}>
        <h2>Daire Bazlı Ön Görünüm Hesabı</h2>
        <p style={{ opacity: 0.6 }}>
          Bu hesaplama bilgilendirme amaçlıdır. İlçe ve desteklere göre değişebilir.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
            gap: 24,
            marginTop: 40
          }}
        >
          <div>
            <label>İlçe</label>
            <select id="ilce" style={{ width: "100%", padding: 12, marginTop: 8 }}>
              <option value="250000">Fatih</option>
              <option value="220000">Bahçelievler</option>
              <option value="200000">Güngören</option>
              <option value="270000">Bakırköy</option>
              <option value="210000">Bağcılar</option>
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

          <div>
            <label>Toplam İnşaat Bedeli (₺)</label>
            <input
              id="bedel"
              type="number"
              defaultValue="1500000"
              style={{ width: "100%", padding: 12, marginTop: 8 }}
            />
          </div>
        </div>

        <div
          id="sonuc"
          style={{
            marginTop: 40,
            padding: 24,
            border: "1px solid #222",
            background: "#111"
          }}
        >
          Hesaplama sonucu burada gösterilir.
        </div>
      </section>

      <footer style={{ padding: 40, textAlign: "center", opacity: 0.5 }}>
        © TİMA PROJE — Bilgilendirme amaçlıdır.
      </footer>

      {/* JS */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          const ilce = document.getElementById("ilce");
          const m2 = document.getElementById("m2");
          const bedel = document.getElementById("bedel");
          const sonuc = document.getElementById("sonuc");

          function hesapla() {
            const destek = Number(ilce.value);
            const toplam = Number(bedel.value);
            const net = toplam - destek;

            sonuc.innerHTML =
              "Tahmini toplam bedel: <strong>" + toplam.toLocaleString("tr-TR") + " ₺</strong><br>" +
              "Devlet & belediye destekleri: <strong>" + destek.toLocaleString("tr-TR") + " ₺</strong><br><br>" +
              "<span style='color:#b11217;font-size:18px;'>Tahmini sizin ödemeniz: " +
              net.toLocaleString("tr-TR") + " ₺</span>";
          }

          ilce.onchange = hesapla;
          m2.oninput = hesapla;
          bedel.oninput = hesapla;
          hesapla();
        `
        }}
      />
    </main>
  );
}

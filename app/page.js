export default function Home() {
  return (
    <main style={{ background: "#0c0c0c", color: "#fff", minHeight: "100vh" }}>

      {/* HEADER */}
      <header style={{
        position: "sticky",
        top: 0,
        background: "rgba(12,12,12,0.95)",
        padding: "18px 40px",
        borderBottom: "1px solid #222",
        zIndex: 10
      }}>
        <strong style={{ color: "#b11217", fontSize: 18 }}>
          TİMA PROJE
        </strong>
      </header>

      {/* HERO */}
      <section style={{
        padding: "140px 40px 110px",
        textAlign: "center",
        background: "radial-gradient(circle at top, #1b1b1b, #0c0c0c)"
      }}>
        <h1 style={{ fontSize: 46, lineHeight: 1.15 }}>
          Geleceğin Güvenli Yapıları,<br />
          <span style={{ color: "#b11217" }}>Bugünün Lüksüyle</span> Buluşuyor
        </h1>

        <p style={{ maxWidth: 760, margin: "32px auto", opacity: 0.8 }}>
          Kentsel dönüşüm sürecinde vaat değil, kalem kalem şeffaflık sunuyoruz.
          Hangi malzeme, hangi marka, hangi maliyet — hepsi net.
        </p>
      </section>

      {/* MARKA & ŞARTNAME KARŞILAŞTIRMA */}
      <section style={{ padding: "90px 40px" }}>
        <h2>Teknik Şartname Şeffaflığı</h2>
        <p style={{ opacity: 0.6 }}>
          Standart bir müteahhit şartnamesi ile TİMA PROJE yaklaşımı arasındaki fark
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 30,
          marginTop: 40
        }}>
          {/* DİĞER FİRMA */}
          <div style={{ border: "1px solid #222", padding: 30 }}>
            <h3 style={{ opacity: 0.7 }}>Standart İnşaat Firması</h3>
            <ul style={{ marginTop: 20, lineHeight: 1.9, opacity: 0.6 }}>
              <li>Kapı / pencere markası belirtilmez</li>
              <li>Cephe kaplaması tanımsız</li>
              <li>Yalıtım kalınlığı belirsiz</li>
              <li>Elektrik & vitrifiye muadil</li>
              <li>Maliyet kalemleri paylaşılmaz</li>
            </ul>
          </div>

          {/* TİMA PROJE */}
          <div style={{
            border: "1px solid #b11217",
            padding: 30,
            background: "#120909"
          }}>
            <h3 style={{ color: "#b11217" }}>TİMA PROJE</h3>
            <ul style={{ marginTop: 20, lineHeight: 1.9 }}>
              <li>Vitra / Artema vitrifiye</li>
              <li>Rehau pencere sistemleri</li>
              <li>Knauf dış cephe & mantolama</li>
              <li>Schneider elektrik altyapısı</li>
              <li>Kalem kalem şeffaf maliyet</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CEPHE GİYDİRME MALİYET */}
      <section style={{
        padding: "90px 40px",
        background: "#111"
      }}>
        <h2>Cephe Giydirme Ön Maliyet Hesabı</h2>
        <p style={{ opacity: 0.6 }}>
          Ortalama dış cephe alanı üzerinden bilgilendirici hesaplama
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
          gap: 24,
          marginTop: 30
        }}>
          <div>
            <label>Toplam Cephe Alanı (m²)</label>
            <input
              id="cephe"
              type="number"
              defaultValue="600"
              style={{ width: "100%", padding: 12, marginTop: 8 }}
            />
          </div>

          <div>
            <label>Birim Cephe Maliyeti (₺/m²)</label>
            <input
              id="birim"
              type="number"
              defaultValue="2500"
              style={{ width: "100%", padding: 12, marginTop: 8 }}
            />
          </div>
        </div>

        <div id="cepheSonuc" style={{
          marginTop: 30,
          padding: 20,
          border: "1px solid #222"
        }}>
          Hesaplama sonucu burada gösterilir.
        </div>
      </section>

      {/* 3D */}
      <section style={{ padding: "90px 40px" }}>
        <h2>3D Bina Dış Cephe Ön İzleme</h2>
        <div style={{
          height: 340,
          background: "#0a0a0a",
          border: "1px solid #222",
          marginTop: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#666"
        }}>
          360° Dış Cephe Görselleştirme Alanı
        </div>
      </section>

      <footer style={{
        padding: 40,
        textAlign: "center",
        opacity: 0.5,
        borderTop: "1px solid #222"
      }}>
        © TİMA PROJE — Bilgilendirme amaçlıdır.
      </footer>

      {/* JS */}
      <script dangerouslySetInnerHTML={{
        __html: `
          const cephe = document.getElementById("cephe");
          const birim = document.getElementById("birim");
          const sonuc = document.getElementById("cepheSonuc");

          function hesapla() {
            const toplam = Number(cephe.value) * Number(birim.value);
            sonuc.innerHTML =
              "Tahmini cephe giydirme maliyeti: <strong>" +
              toplam.toLocaleString("tr-TR") +
              " ₺</strong>";
          }

          cephe.oninput = hesapla;
          birim.oninput = hesapla;
          hesapla();
        `
      }} />

    </main>
  );
}

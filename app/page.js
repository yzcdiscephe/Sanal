export default function Home() {
  return (
    <main style={{ background: "#0b1c2d", color: "#fff", minHeight: "100vh" }}>
      
      <header style={{ padding: "20px 40px", position: "sticky", top: 0 }}>
        <strong style={{ color: "#d4af37" }}>TİMA PROJE</strong>
      </header>

      <section style={{ padding: "120px 40px", textAlign: "center" }}>
        <h1>
          Geleceğin Güvenli Yapıları,<br />
          Bugünün Lüksüyle Buluşuyor
        </h1>
        <p>
          Kentsel dönüşüm sürecinizi şeffaf ve gerçekçi şekilde ele alıyoruz.
        </p>
        <button style={{ padding: "16px 32px", background: "#d4af37", border: 0 }}>
          Ücretsiz Ön Görünüm Al
        </button>
      </section>

      <section style={{ padding: "60px 40px" }}>
        <h2>Kalite Standartlarımız</h2>
        <div style={{ display: "flex", gap: 24 }}>
          <div>Vitra</div>
          <div>Artema</div>
          <div>Siemens</div>
          <div>Rehau</div>
          <div>Schneider</div>
          <div>Knauf</div>
        </div>
      </section>

      <section style={{ padding: "60px 40px" }}>
        <h2>3D Bina Ön İzleme</h2>
        <div
          style={{
            height: 300,
            background: "#111",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#777"
          }}
        >
          360° Görselleştirme Alanı
        </div>
      </section>

    </main>
  );
}

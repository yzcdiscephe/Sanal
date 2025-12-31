export default function Home() {
  return (
    <main style={s.page}>

      {/* HERO */}
      <section style={s.hero}>
        <h1 style={s.h1}>Güvenle Yeniliyoruz.</h1>

        <p style={s.sub}>
          Türkiye genelinde kentsel dönüşüm çözümleri
        </p>

        <p style={s.text}>
          Merkezi <strong>Fatih / İstanbul</strong>’da bulunan
          <strong> TİMA PROJE</strong>, kentsel dönüşüm sürecini
          hukuki, teknik ve inşaat aşamalarıyla uçtan uca yöneten
          profesyonel bir çözüm ortağıdır.
        </p>

        <a href="tel:05557999111" style={s.cta}>
          📞 0555 799 91 11
        </a>

        <p style={s.note}>
          Ücretsiz yerinde inceleme · Şeffaf süreç · Tek muhatap
        </p>
      </section>

      {/* GÜVEN */}
      <section style={s.grid}>
        <div style={s.box}>✔ Hak kaybı olmadan dönüşüm</div>
        <div style={s.box}>✔ Sözleşmeli ve şeffaf ilerleme</div>
        <div style={s.box}>✔ Zamanında teslim anlayışı</div>
      </section>

      {/* GERÇEKLER */}
      <section style={s.alt}>
        <h2 style={s.h2}>
          Kentsel Dönüşümde Kimsenin Açıkça Söylemediği Gerçekler
        </h2>

        <ul style={s.list}>
          <li>❗ Teslim tarihi olmayan sözleşmeler ciddi risk taşır</li>
          <li>❗ Arsa payı net değilse hak kaybı yaşanabilir</li>
          <li>❗ Muhatap belli değilse süreç uzar</li>
          <li>❗ “Her şeyi biz hallederiz” diyenlere dikkat edilmelidir</li>
        </ul>

        <p style={s.italic}>
          Bu sayfayı, kentsel dönüşüm düşünen birine mutlaka okutun.
        </p>
      </section>

      {/* HİKAYE */}
      <section style={s.section}>
        <h2 style={s.h2}>Bize En Sık Sorulan Sorular</h2>

        <p><strong>“Evim yıkılınca ne olacak?”</strong><br />
        Geçici konut ve kira destekleri baştan planlanır.</p>

        <p><strong>“Bu iş yarım kalır mı?”</strong><br />
        Süreç, sözleşme ve iş planı ile güvence altına alınır.</p>

        <p><strong>“Komşular ikna olmuyor, ne yapacağız?”</strong><br />
        Uzlaşma süreçleri profesyonel şekilde yönetilir.</p>

        <p><strong>“Kimle muhatap olacağız?”</strong><br />
        Tüm süreç boyunca tek muhatap: <strong>TİMA PROJE</strong></p>
      </section>

      {/* SÜREÇ */}
      <section style={s.alt}>
        <h2 style={s.h2}>TİMA PROJE ile Süreç</h2>

        <ol style={s.list}>
          <li>Ücretsiz yerinde keşif</li>
          <li>Teknik ve risk analizi</li>
          <li>Hukuki hazırlık</li>
          <li>Proje ve ruhsat süreci</li>
          <li>İnşaat aşaması</li>
          <li>Anahtar teslim</li>
        </ol>
      </section>

      {/* FOOTER */}
      <footer style={s.footer}>
        <p><strong>TİMA PROJE</strong></p>
        <p>Kentsel Dönüşüm & İnşaat</p>
        <p>Merkez Ofis: Fatih / İstanbul</p>
        <p>📞 0555 799 91 11</p>
        <p style={s.footerNote}>
          Güveni reklamla değil, bilgiyle kurar.
        </p>
      </footer>

    </main>
  );
}

/* === STYLES === */

const s = {
  page: {
    fontFamily: "Inter, sans-serif",
    background: "#F6F6F4",
    color: "#2B2B2B",
    lineHeight: 1.7
  },
  hero: {
    padding: "70px 20px",
    textAlign: "center"
  },
  h1: {
    fontFamily: "Playfair Display, serif",
    fontSize: "38px",
    marginBottom: "10px"
  },
  h2: {
    fontFamily: "Playfair Display, serif",
    fontSize: "26px",
    marginBottom: "20px"
  },
  sub: {
    fontSize: "18px",
    marginBottom: "20px",
    fontWeight: 500
  },
  text: {
    maxWidth: "720px",
    margin: "0 auto 25px"
  },
  cta: {
    display: "inline-block",
    background: "#B59A5A",
    color: "#fff",
    padding: "16px 28px",
    borderRadius: "6px",
    fontWeight: 600,
    textDecoration: "none"
  },
  note: {
    marginTop: "15px",
    fontSize: "14px",
    opacity: 0.7
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "12px",
    padding: "20px"
  },
  box: {
    background: "#fff",
    padding: "18px",
    borderRadius: "10px",
    textAlign: "center",
    fontWeight: 500
  },
  alt: {
    background: "#ECE8E1",
    padding: "50px 20px"
  },
  section: {
    padding: "50px 20px"
  },
  list: {
    maxWidth: "650px",
    margin: "0 auto",
    paddingLeft: "20px"
  },
  italic: {
    marginTop: "25px",
    fontStyle: "italic",
    textAlign: "center"
  },
  footer: {
    background: "#2B2B2B",
    color: "#fff",
    padding: "40px 20px",
    textAlign: "center"
  },
  footerNote: {
    marginTop: "10px",
    fontSize: "14px",
    opacity: 0.7
  }
};

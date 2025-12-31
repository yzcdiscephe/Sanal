export default function Home() {
  return (
    <main style={s.page}>

      {/* HERO */}
      <section style={s.hero}>
        <h1 style={s.logo}>TİMA PROJE</h1>

        <p style={s.tag}>
          Urban Transformation & Private Developments
        </p>

        <p style={s.desc}>
          Merkezi İstanbul’da bulunan TİMA PROJE, Türkiye genelinde
          seçili kentsel dönüşüm ve özel proje geliştirme çalışmaları yürütür.
        </p>

        <a href="tel:05557999111" style={s.call}>
          0555&nbsp;799&nbsp;91&nbsp;11
        </a>
      </section>

      {/* AYIRICI */}
      <div style={s.line}></div>

      {/* DURUŞ */}
      <section style={s.section}>
        <p style={s.statement}>
          We take responsibility <br /> before we take projects.
        </p>
      </section>

      {/* AYIRICI */}
      <div style={s.line}></div>

      {/* GÜVEN */}
      <section style={s.section}>
        <p style={s.points}>
          Az sayıda proje · Net sorumluluk · Zamanında teslim
        </p>
      </section>

      {/* AYIRICI */}
      <div style={s.line}></div>

      {/* KONUM */}
      <section style={s.section}>
        <p style={s.small}>
          İstanbul merkezli. Türkiye genelinde.
        </p>
      </section>

      {/* FOOTER */}
      <footer style={s.footer}>
        <p>TİMA PROJE</p>
        <p>Kentsel Dönüşüm & İnşaat</p>
      </footer>

    </main>
  );
}

const s = {
  page: {
    fontFamily: "Inter, sans-serif",
    background: "#FAFAF8",
    color: "#1F1F1F"
  },
  hero: {
    minHeight: "100vh",
    padding: "140px 20px",
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto"
  },
  logo: {
    fontFamily: "Playfair Display, serif",
    fontSize: "48px",
    fontWeight: 500,
    letterSpacing: "1px",
    marginBottom: "10px"
  },
  tag: {
    fontSize: "14px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    opacity: 0.6,
    marginBottom: "40px"
  },
  desc: {
    maxWidth: "520px",
    margin: "0 auto 50px",
    fontSize: "15px",
    lineHeight: 1.9,
    opacity: 0.85
  },
  call: {
    fontSize: "15px",
    textDecoration: "none",
    color: "#B59A5A",
    borderBottom: "1px solid #B59A5A",
    paddingBottom: "4px",
    letterSpacing: "0.5px"
  },
  line: {
    width: "60px",
    height: "1px",
    background: "#D4D0C9",
    margin: "90px auto"
  },
  section: {
    textAlign: "center",
    maxWidth: "700px",
    margin: "0 auto",
    padding: "0 20px"
  },
  statement: {
    fontFamily: "Playfair Display, serif",
    fontSize: "28px",
    lineHeight: 1.5
  },
  points: {
    fontSize: "15px",
    opacity: 0.75
  },
  small: {
    fontSize: "14px",
    opacity: 0.6
  },
  footer: {
    marginTop: "140px",
    padding: "60px 20px",
    textAlign: "center",
    fontSize: "13px",
    opacity: 0.6
  }
};

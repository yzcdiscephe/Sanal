export default function Home() {
  return (
    <main style={s.page}>

      {/* HERO */}
      <section style={s.hero}>
        <h1 style={s.h1}>Güvenle Yeniliyoruz</h1>

        <p style={s.sub}>
          Kentsel dönüşümde sessiz ama sağlam çözümler
        </p>

        <p style={s.desc}>
          <strong>TİMA PROJE</strong>, merkezi İstanbul’da bulunan,
          Türkiye genelinde kentsel dönüşüm projeleri yürüten
          bir proje ve taahhüt firmasıdır.
        </p>

        <a href="tel:05557999111" style={s.cta}>
          0555 799 91 11
        </a>
      </section>

      {/* AYIRICI */}
      <div style={s.divider}></div>

      {/* FELSEFE */}
      <section style={s.section}>
        <h2 style={s.h2}>Yaklaşımımız</h2>

        <p style={s.min}>
          Her projeyi almıyoruz.  
          Her binayı dönüştürmüyoruz.
        </p>

        <p style={s.desc}>
          Teknik, hukuki ve insani olarak
          doğru ilerlemeyeceğini düşündüğümüz
          projelerde yer almıyoruz.
        </p>
      </section>

      {/* AYIRICI */}
      <div style={s.divider}></div>

      {/* SÜREÇ */}
      <section style={s.section}>
        <h2 style={s.h2}>Süreç</h2>

        <p style={s.min}>
          Keşif · Analiz · Planlama · İnşaat · Teslim
        </p>

        <p style={s.desc}>
          Sürecin her aşaması kayıt altındadır.
          Tek muhatap, şeffaf ilerleme.
        </p>
      </section>

      {/* AYIRICI */}
      <div style={s.divider}></div>

      {/* GÜVEN */}
      <section style={s.section}>
        <h2 style={s.h2}>Merkez</h2>

        <p style={s.desc}>
          Merkez ofisimiz İstanbul / Fatih’tedir.  
          Projelerimiz Türkiye genelindedir.
        </p>
      </section>

      {/* FOOTER */}
      <footer style={s.footer}>
        <p><strong>TİMA PROJE</strong></p>
        <p>Kentsel Dönüşüm & İnşaat</p>
        <p>İstanbul</p>
      </footer>

    </main>
  );
}

/* === STYLES === */

const s = {
  page: {
    fontFamily: "Inter, sans-serif",
    background: "#F7F7F5",
    color: "#2A2A2A"
  },
  hero: {
    padding: "120px 20px",
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto"
  },
  h1: {
    fontFamily: "Playfair Display, serif",
    fontSize: "44px",
    fontWeight: 500,
    marginBottom: "20px"
  },
  sub: {
    fontSize: "18px",
    opacity: 0.8,
    marginBottom: "40px"
  },
  desc: {
    maxWidth: "520px",
    margin: "0 auto 40px",
    fontSize: "15px",
    lineHeight: 1.8,
    opacity: 0.85
  },
  cta: {
    fontSize: "15px",
    letterSpacing: "0.5px",
    textDecoration: "none",
    color: "#B59A5A",
    borderBottom: "1px solid #B59A5A",
    paddingBottom: "4px"
  },
  divider: {
    width: "60px",
    height: "1px",
    background: "#D6D2CB",
    margin: "80px auto"
  },
  section: {
    textAlign: "center",
    maxWidth: "700px",
    margin: "0 auto",
    padding: "0 20px"
  },
  h2: {
    fontFamily: "Playfair Display, serif",
    fontSize: "26px",
    fontWeight: 500,
    marginBottom: "25px"
  },
  min: {
    fontSize: "16px",
    marginBottom: "20px",
    opacity: 0.8
  },
  footer: {
    marginTop: "140px",
    padding: "60px 20px",
    textAlign: "center",
    fontSize: "14px",
    opacity: 0.7
  }
};

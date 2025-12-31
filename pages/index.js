export default function Home() {
  return (
    <main style={s.page}>

      {/* HERO */}
      <section style={s.hero}>
        <h1 style={s.logo}>TİMA PROJE</h1>

        <p style={s.tag}>
          Residential Urban Transformation
        </p>

        <p style={s.desc}>
          Refined apartment developments focused on
          quality, proportion and long-term value.
        </p>

        <a href="tel:05557999111" style={s.call}>
          0555&nbsp;799&nbsp;91&nbsp;11
        </a>
      </section>

      {/* SEPARATOR */}
      <div style={s.sep}></div>

      {/* STATEMENT */}
      <section style={s.section}>
        <p style={s.statement}>
          Not towers. <br />
          Residences.
        </p>

        <p style={s.small}>
          Low-rise apartment projects designed
          with restraint and precision.
        </p>
      </section>

      {/* SEPARATOR */}
      <div style={s.sep}></div>

      {/* APPROACH */}
      <section style={s.section}>
        <p style={s.statement}>
          Quiet luxury. <br />
          Urban living.
        </p>

        <p style={s.small}>
          We prioritize livability, proportion
          and architectural clarity over scale.
        </p>
      </section>

      {/* SEPARATOR */}
      <div style={s.sep}></div>

      {/* LOCATION */}
      <section style={s.section}>
        <p style={s.small}>
          Based in Istanbul. <br />
          Working nationwide.
        </p>
      </section>

      {/* FOOTER */}
      <footer style={s.footer}>
        <p>TİMA PROJE</p>
        <p>Residential Development & Transformation</p>
      </footer>

    </main>
  );
}

const s = {
  page: {
    fontFamily: "Inter, sans-serif",
    background: "#F5F5F2",
    color: "#2A2A2A"
  },
  hero: {
    minHeight: "100vh",
    padding: "150px 20px",
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto"
  },
  logo: {
    fontFamily: "Playfair Display, serif",
    fontSize: "50px",
    fontWeight: 500,
    letterSpacing: "1px",
    marginBottom: "14px"
  },
  tag: {
    fontSize: "14px",
    letterSpacing: "1.6px",
    textTransform: "uppercase",
    opacity: 0.55,
    marginBottom: "42px"
  },
  desc: {
    maxWidth: "460px",
    margin: "0 auto 56px",
    fontSize: "15px",
    lineHeight: 1.9,
    opacity: 0.85
  },
  call: {
    fontSize: "14px",
    textDecoration: "none",
    color: "#8C7A52",
    borderBottom: "1px solid #8C7A52",
    paddingBottom: "4px",
    letterSpacing: "0.4px"
  },
  sep: {
    width: "64px",
    height: "1px",
    background: "#D8D4CC",
    margin: "96px auto"
  },
  section: {
    textAlign: "center",
    maxWidth: "720px",
    margin: "0 auto",
    padding: "0 20px"
  },
  statement: {
    fontFamily: "Playfair Display, serif",
    fontSize: "30px",
    lineHeight: 1.5,
    marginBottom: "22px"
  },
  small: {
    fontSize: "14px",
    lineHeight: 1.8,
    opacity: 0.65
  },
  footer: {
    marginTop: "160px",
    padding: "70px 20px",
    textAlign: "center",
    fontSize: "13px",
    opacity: 0.6
  }
};

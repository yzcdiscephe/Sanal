export const metadata = {
  title: "TİMA PROJE | Kentsel Dönüşüm",
  description: "Lüks ve şeffaf kentsel dönüşüm platformu"
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body style={{ margin: 0, fontFamily: "Inter, Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}

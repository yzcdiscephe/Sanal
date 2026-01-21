import "./globals.css";

export const metadata = {
  title: "TİMA PROJE",
  description: "Kentsel Dönüşüm Daire Analizi"
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}

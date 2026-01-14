export const metadata = {
  title: "TİMA PROJE",
  description: "Kentsel Dönüşüm Ön Görünüm Platformu"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        {children}
      </body>
    </html>
  );
}

export default function CostCards({ district, area, facade }) {
  // Temel varsayımlar (sonradan belediyeye göre değiştirilebilir)
  const baseCostPerM2 = 3000;
  const facadeCostPerM2 = 400;
  const monthlyRentSupport = 1850;
  const supportMonths = 12;

  const baseCost = area * baseCostPerM2;
  const facadeCost = facade ? area * facadeCostPerM2 : 0;
  const totalSupport = monthlyRentSupport * supportMonths;

  const estimatedDifference = baseCost + facadeCost - totalSupport;

  return (
    <div className="panel right">
      <h3>Genel Durum</h3>

      <p>
        İlçe: <strong>{district}</strong>
      </p>

      <p>
        Devlet Kira Desteği:{" "}
        <strong>- {totalSupport.toLocaleString("tr-TR")} ₺</strong>
      </p>

      <hr />

      <h2>
        Tahmini Ödenecek Fark
        <br />
        {estimatedDifference.toLocaleString("tr-TR")} ₺
      </h2>

      <p className="note">
        Bu hesaplama bilgilendirme amaçlıdır. Kesin rakam değildir.
      </p>
    </div>
  );
}

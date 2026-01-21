export default function LeftPanel({
  district,
  setDistrict,
  area,
  setArea,
  facade,
  setFacade
}) {
  return (
    <div className="panel left">
      <h3>Benim Dairem</h3>

      <label>İlçe</label>
      <select value={district} onChange={e => setDistrict(e.target.value)}>
        <option>Fatih</option>
        <option>Bahçelievler</option>
        <option>Bakırköy</option>
        <option>Güngören</option>
        <option>Zeytinburnu</option>
      </select>

      <label>Daire m²: {area}</label>
      <input
        type="range"
        min="70"
        max="140"
        value={area}
        onChange={e => setArea(Number(e.target.value))}
      />

      <label>
        <input
          type="checkbox"
          checked={facade}
          onChange={() => setFacade(!facade)}
        />
        Cephe Giydirme
      </label>
    </div>
  );
}

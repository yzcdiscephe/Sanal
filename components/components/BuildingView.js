export default function BuildingView({ area, facade }) {
  const floors = Math.max(3, Math.round(area / 20));

  return (
    <div className="building">
      {Array.from({ length: floors }).map((_, index) => (
        <div
          key={index}
          className={`floor ${facade ? "facade" : ""}`}
        />
      ))}
    </div>
  );
}

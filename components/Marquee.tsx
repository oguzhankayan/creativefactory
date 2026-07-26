export default function Marquee() {
  const items = [
    "Web Tasarım",
    "Marka Kimliği",
    "Dijital Reklam",
    "Sosyal Medya",
    "Strateji",
    "Motion",
    "Kreatif Direksiyon",
    "Performans",
  ];
  const row = (
    <>
      {items.map((t, i) => (
        <span className="marquee__item" key={i}>
          <span>{t}</span>
          <span className="marquee__star" aria-hidden="true">
            ●
          </span>
        </span>
      ))}
    </>
  );
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row}
        {row}
        {row}
      </div>
    </div>
  );
}

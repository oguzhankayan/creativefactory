export default function MarqueeBand() {
  const items = [
    "WEB TASARIM",
    "MARKA KİMLİĞİ",
    "DİJİTAL REKLAM",
    "SOSYAL MEDYA",
    "STRATEJİ",
    "İÇERİK ÜRETİMİ",
  ];

  const content = items.map((item, i) => (
    <span key={i} className="flex shrink-0 items-center gap-[48px]">
      <span>{item}</span>
      <span className="text-accent-orange">●</span>
    </span>
  ));

  return (
    <div className="w-full overflow-hidden bg-accent-yellow" aria-hidden="true">
      <div className="marquee-track font-heading text-[14px] font-bold uppercase tracking-[0.08em] text-text-primary">
        {content}
        {content}
      </div>
    </div>
  );
}

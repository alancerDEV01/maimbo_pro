export function MarqueeBanner() {
  const items = [
    "DRIP MODE ACTIVATED",
    "STREETWEAR ONLY",
    "MAIMBO",
    "50% OFF SELECTED",
    "SHADOW DIVISION",
    "WAR DRIP",
  ];

  const row = [...items, ...items];

  return (
    <section className="overflow-hidden border-b border-line bg-bg-soft py-3" aria-label="Promoción">
      <div className="marquee-track gap-8 whitespace-nowrap">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="display inline-flex items-center gap-8 text-2xl text-chrome/90 sm:text-3xl"
          >
            {item}
            <span className="text-accent">·</span>
          </span>
        ))}
      </div>
    </section>
  );
}

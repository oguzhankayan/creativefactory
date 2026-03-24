"use client";

const logos = [
  "Qualiko",
  "ICONICA",
  "Köpüklü",
  "SCOPS",
  "Akasya Token",
  "Müzedenal",
  "Eurosport",
];

export default function LogoCarousel() {
  return (
    <section className="overflow-hidden border-b border-black/5 bg-white py-10">
      <p className="mb-6 text-center font-body text-sm font-medium uppercase tracking-widest text-text-secondary">
        Güvendikleri markalar
      </p>
      <div className="relative overflow-hidden">
        <div className="marquee-track-slow">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex shrink-0 items-center gap-12 px-6">
              {logos.map((logo) => (
                <div
                  key={`${setIndex}-${logo}`}
                  className="flex h-12 items-center justify-center rounded-lg px-6"
                >
                  <span className="whitespace-nowrap font-heading text-lg font-bold text-primary/30 sm:text-xl">
                    {logo}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

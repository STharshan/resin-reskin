// components/ServiceAbout.jsx

export default function ServiceAbout({ data = {}, onCta }) {
  // Safe default — crashes if bullets is undefined otherwise
  const bullets = Array.isArray(data.bullets) ? data.bullets : [];

  return (
    <section
      className="bg-[#1c1917] py-32 relative overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Large decorative background number */}
      <div
        className="absolute right-5 top-5 leading-none select-none pointer-events-none text-white"
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(120px,18vw,200px)",
          opacity: 0,
          animation: "aboutBgNum .8s .2s forwards",
        }}
      >
        {data.subtitle}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-8">

        {/* Subtitle */}
        <p
          className="text-amber-400 font-mono text-sm mb-3"
          style={{ animation: "aboutSlide .6s .1s both" }}
        >
          / {data.subtitle}
        </p>

        {/* Heading */}
        <h2
          className="text-stone-100 mb-10 leading-tight"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(32px,4vw,50px)",
            animation: "aboutFadeUp .7s .2s both",
          }}
        >
          {data.heading}
        </h2>

        {/* Body */}
        <p
          className="text-stone-400 text-[16px] leading-[1.8] font-light mb-9"
          style={{ animation: "aboutFadeUp .7s .3s both" }}
        >
          {data.body}
        </p>

        {/* Bullets — safe with default [] */}
        <ul className="mb-10 space-y-0">
          {bullets.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-4 text-stone-300 py-[10px] border-b border-white/[.06] text-[14px] font-light"
              style={{ animation: `aboutFadeUp .6s ${0.3 + i * 0.1}s both` }}
            >
              <span className="text-amber-400 mt-[3px] text-[8px] flex-shrink-0">◆</span>
              {item}
            </li>
          ))}
        </ul>

        {/* Sub heading */}
        <h3
          className="text-stone-100 mb-3 text-[22px]"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            animation: "aboutFadeUp .7s .55s both",
          }}
        >
          {data.subHeading}
        </h3>

        {/* Sub body */}
        <p
          className="text-stone-400 text-[14px] leading-[1.75] font-light mb-10"
          style={{ animation: "aboutFadeUp .7s .6s both" }}
        >
          {data.subBody}
        </p>

        {/* CTA */}
        <button
          onClick={onCta}
          className="group inline-flex items-center gap-3 border border-white text-white bg-transparent px-8 py-4 text-[11px] tracking-[.2em] uppercase hover:bg-white hover:text-stone-900 transition-all duration-300"
          style={{ animation: "aboutFadeUp .7s .7s both" }}
        >
          {data.ctaText}
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </button>
      </div>

      <style>{`
        @keyframes aboutFadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes aboutSlide {
          from { opacity:0; transform:translateX(-18px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes aboutBgNum {
          from { opacity:0; transform:translate(20px,20px); }
          to   { opacity:.07; transform:translate(0,0); }
        }
      `}</style>
    </section>
  );
}
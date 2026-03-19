// components/ServiceHero.jsx

export default function ServiceHero({ data, onCta }) {
  return (
    <section
      className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#fafaf8]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Subtle vertical grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg,rgba(0,0,0,.04) 0px,rgba(0,0,0,.04) 1px,transparent 1px,transparent 20%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center py-28">

        {/* ── Text ── */}
        <div>
          <div
            className="flex items-center gap-3 mb-6"
            style={{ animation: "heroSlideRight .6s .1s both" }}
          >
            <div className="w-7 h-[2px] bg-amber-700" />
            <span className="text-[11px] tracking-[.25em] uppercase text-stone-500 font-medium">
              Service
            </span>
          </div>

          <h1
            className="text-[clamp(48px,6vw,80px)] leading-[.92] tracking-tight text-stone-900 mb-6"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              animation: "heroFadeUp .8s .2s both",
            }}
          >
            {data.title}
          </h1>

          <p
            className="text-[17px] text-stone-500 leading-relaxed max-w-sm font-light mb-8"
            style={{ animation: "heroFadeUp .8s .35s both" }}
          >
            {data.description}
          </p>

          <button
            onClick={onCta}
            className="group inline-flex items-center gap-3 bg-stone-900 text-white px-8 py-4 text-[11px] tracking-[.2em] uppercase hover:bg-amber-700 transition-colors duration-300"
            style={{ animation: "heroFadeUp .8s .5s both" }}
          >
            {data.ctaText}
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </button>
        </div>

        {/* ── Image ── */}
        <div
          className="relative"
          style={{ animation: "heroFadeIn 1s .3s both" }}
        >
          <div className="absolute -top-3 -left-3 right-3 bottom-3 border-2 border-amber-200 z-0" />

          <div
            className="relative z-10 overflow-hidden"
            style={{ animation: "heroImgReveal 1s .4s both" }}
          >
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-[480px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          <div
            className="absolute -bottom-3 -right-3 z-20 bg-amber-700 text-white px-6 py-3 text-[10px] tracking-[.18em] uppercase"
            style={{ animation: "heroBadgeFloat 3s ease-in-out 1.5s infinite" }}
          >
            Premium Service
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroFadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes heroFadeIn {
          from { opacity:0; }
          to   { opacity:1; }
        }
        @keyframes heroSlideRight {
          from { opacity:0; transform:translateX(-20px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes heroImgReveal {
          from { clip-path:inset(0 100% 0 0); }
          to   { clip-path:inset(0 0% 0 0); }
        }
        @keyframes heroBadgeFloat {
          0%,100% { transform:translateY(0); }
          50%      { transform:translateY(-5px); }
        }
      `}</style>
    </section>
  );
}
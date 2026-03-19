// components/ServiceHero.jsx

export default function ServiceHero({ data, onCta }) {
  return (
    <section
      className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#0E0E0E]"
    >
      {/* Subtle vertical grid lines using 'Line' color */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg,rgba(46,43,40,0.3) 0px,rgba(46,43,40,0.3) 1px,transparent 1px,transparent 20%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center py-28">

        {/* ── Text ── */}
        <div>
          <div
            className="flex items-center gap-3 mb-6"
            style={{ animation: "heroSlideRight .6s .1s both" }}
          >
            <div className="w-7 h-[2px] bg-[#C9A96E]" />
            <span className="text-[11px] tracking-[.25em] uppercase text-[#A8844A] font-bold">
              Service
            </span>
          </div>

          <h1
            className="text-[clamp(48px,6vw,80px)] leading-[.92] tracking-tight text-[#F2EDE8] mb-6"
            style={{
             
              animation: "heroFadeUp .8s .2s both",
            }}
          >
            {data.title}
          </h1>

          <p
            className="text-[17px] text-[#8C8480] leading-relaxed max-w-sm font-light mb-8"
            style={{ animation: "heroFadeUp .8s .35s both" }}
          >
            {data.description}
          </p>

          <button
            onClick={onCta}
            className="group inline-flex items-center gap-4 bg-[#C9A96E] text-[#0E0E0E] px-10 py-5 text-[11px] font-bold tracking-[.2em] uppercase hover:bg-[#A8844A] transition-all duration-300 shadow-xl"
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
          {/* Accent frame using 'Subtle Line' */}
          <div className="absolute -top-4 -left-4 right-4 bottom-4 border border-[#3A3633] z-0" />

          <div
            className="relative z-10 overflow-hidden shadow-2xl border border-[#2E2B28]"
            style={{ animation: "heroImgReveal 1s .4s both" }}
          >
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-[520px] object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
            />
          </div>

          {/* Badge using 'Deep Gold' */}
          <div
            className="absolute -bottom-4 -right-4 z-20 bg-[#A8844A] text-[#0E0E0E] px-6 py-4 text-[10px] font-bold tracking-[.18em] uppercase shadow-lg"
            style={{ animation: "heroBadgeFloat 4s ease-in-out 1.5s infinite" }}
          >
            Premium Service
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroFadeUp {
          from { opacity:0; transform:translateY(30px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes heroFadeIn {
          from { opacity:0; }
          to   { opacity:1; }
        }
        @keyframes heroSlideRight {
          from { opacity:0; transform:translateX(-25px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes heroImgReveal {
          from { clip-path:inset(0 100% 0 0); }
          to   { clip-path:inset(0 0% 0 0); }
        }
        @keyframes heroBadgeFloat {
          0%,100% { transform:translateY(0) rotate(0deg); }
          50%      { transform:translateY(-8px) rotate(-1deg); }
        }
      `}</style>
    </section>
  );
}
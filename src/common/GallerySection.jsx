import { useState, useRef, useCallback } from "react";

// Slide animations
const KEYFRAMES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300&display=swap');
  @keyframes gSlideR { from{opacity:0;transform:translateX(36px) scale(.98)} to{opacity:1;transform:none} }
  @keyframes gSlideL { from{opacity:0;transform:translateX(-36px) scale(.98)} to{opacity:1;transform:none} }
  @keyframes gFade   { from{opacity:0} to{opacity:1} }
  .g-ir { animation: gSlideR .42s cubic-bezier(.4,0,.2,1) both }
  .g-il { animation: gSlideL .42s cubic-bezier(.4,0,.2,1) both }
  .g-fi { animation: gFade .35s ease both }
`;

const IconLeft = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);
const IconRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);
const IconPlay = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

function ImageSlide({ src }) {
  return <img src={src} alt="" className="w-full h-full object-cover block" />;
}

function VideoSlide({ src }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const play  = () => { ref.current?.play();  setPlaying(true);  };
  const pause = () => { ref.current?.pause(); setPlaying(false); };

  return (
    <div className="relative w-full h-full bg-black flex items-center justify-center">
      <video ref={ref} src={src} playsInline onEnded={() => setPlaying(false)} className="w-full h-full object-contain" />
      {!playing && (
        <button onClick={play} className="absolute inset-0 flex items-center justify-center bg-black/30 border-0 cursor-pointer">
          <div className="w-[72px] h-[72px] rounded-full border-2 border-white/50 bg-white/10 flex items-center justify-center text-white">
            <IconPlay />
          </div>
        </button>
      )}
      {playing && (
        <button onClick={pause} className="absolute bottom-3 right-3 bg-black/50 border border-white/20 text-white/70 text-[11px] cursor-pointer px-2.5 py-1 rounded-md">
          ⏸ Pause
        </button>
      )}
      <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] tracking-widest uppercase text-white bg-white/15 border border-white/25 backdrop-blur-sm">
        ▶ Video
      </div>
    </div>
  );
}

// ✅ slides prop-ஆ வெளியிலிருந்து receive பண்றோம்
export default function GallerySection({ slides = [] }) {
  const [cur, setCur]           = useState(0);
  const [anim, setAnim]         = useState("g-fi");
  const [busy, setBusy]         = useState(false);
  const [slideKey, setSlideKey] = useState(0);

  const total = slides.length;

  const goTo = useCallback((idx, dir) => {
    if (busy || idx === cur) return;
    setBusy(true);
    setAnim(dir === "r" ? "g-ir" : "g-il");
    setTimeout(() => {
      setCur(idx);
      setSlideKey((k) => k + 1);
      setAnim("g-fi");
      setBusy(false);
    }, 420);
  }, [busy, cur]);

  const prev = () => goTo((cur - 1 + total) % total, "l");
  const next = () => goTo((cur + 1) % total, "r");

  // ✅ slides இல்லன்னா render பண்ணாத
  if (!slides.length) return null;

  const slide = slides[cur];

  return (
    <section className="bg-[#f0ede8] min-h-screen flex items-center justify-center px-6 py-8">
      <style>{KEYFRAMES}</style>

      <div className="relative w-full max-w-[820px]">

        {/* Counter */}
        <div
          className="absolute left-1/2 -translate-x-1/2 z-10 pointer-events-none select-none text-white/90 whitespace-nowrap"
          style={{
            top: "-4.5rem",
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(3.5rem, 10vw, 7.5rem)",
            letterSpacing: "-2px",
            lineHeight: 1,
            textShadow: "0 2px 40px rgba(0,0,0,0.15)",
          }}
        >
          {cur + 1} / {total}
        </div>

        {/* Stage */}
        <div
          className="relative w-full overflow-hidden rounded-[18px] bg-[#1a1a1a]"
          style={{ aspectRatio: "16/9", boxShadow: "0 24px 80px rgba(0,0,0,0.22)" }}
        >
          <div key={slideKey} className={`absolute inset-0 ${anim}`}>
            {slide.type === "image" && <ImageSlide src={slide.src} />}
            {slide.type === "video" && <VideoSlide src={slide.src} />}
          </div>
        </div>

        {/* Pill navigation */}
        <div
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-white/90 rounded-full px-5 py-2 backdrop-blur-md"
          style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.12)" }}
        >
          <button onClick={prev} className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-800 hover:bg-black/[0.07] transition-colors bg-transparent border-0 cursor-pointer">
            <IconLeft />
          </button>
          <div className="w-px h-[18px] bg-black/20" />
          <button onClick={next} className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-800 hover:bg-black/[0.07] transition-colors bg-transparent border-0 cursor-pointer">
            <IconRight />
          </button>
        </div>

      </div>
    </section>
  );
}
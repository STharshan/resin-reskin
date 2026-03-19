import { useState, useRef, useCallback } from "react";

// Slide animations with updated palette
const KEYFRAMES = `
  @keyframes gSlideR { from{opacity:0;transform:translateX(36px) scale(.98)} to{opacity:1;transform:none} }
  @keyframes gSlideL { from{opacity:0;transform:translateX(-36px) scale(.98)} to{opacity:1;transform:none} }
  @keyframes gFade   { from{opacity:0} to{opacity:1} }
  .g-ir { animation: gSlideR .42s cubic-bezier(.4,0,.2,1) both }
  .g-il { animation: gSlideL .42s cubic-bezier(.4,0,.2,1) both }
  .g-fi { animation: gFade .35s ease both }
`;

const IconLeft = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);
const IconRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);
const IconPlay = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

function ImageSlide({ src }) {
  return <img src={src} alt="" className="w-full h-full object-cover block brightness-90 contrast-[1.05]" />;
}

function VideoSlide({ src }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const play  = () => { ref.current?.play();  setPlaying(true);  };
  const pause = () => { ref.current?.pause(); setPlaying(false); };

  return (
    <div className="relative w-full h-full bg-[#0E0E0E] flex items-center justify-center">
      <video ref={ref} src={src} playsInline onEnded={() => setPlaying(false)} className="w-full h-full object-contain" />
      {!playing && (
        <button onClick={play} className="absolute inset-0 flex items-center justify-center bg-black/40 border-0 cursor-pointer group">
          <div className="w-[72px] h-[72px] rounded-full border border-[#C9A96E]/50 bg-[#221F1C]/80 flex items-center justify-center text-[#C9A96E] transition-transform duration-300 group-hover:scale-110">
            <IconPlay />
          </div>
        </button>
      )}
      {playing && (
        <button onClick={pause} className="absolute bottom-4 right-4 bg-[#1A1917]/80 border border-[#2E2B28] text-[#F2EDE8] text-[10px] tracking-widest uppercase cursor-pointer px-3 py-1.5 rounded-sm">
          Pause
        </button>
      )}
      <div className="absolute top-4 left-4 px-3 py-1 rounded-sm text-[10px] font-bold tracking-[.2em] uppercase text-[#0E0E0E] bg-[#C9A96E]">
        Video
      </div>
    </div>
  );
}

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

  if (!slides.length) return null;

  const slide = slides[cur];

  return (
    <section className="bg-[#1A1917] min-h-screen flex flex-col items-center justify-center px-6 py-20 border-t border-[#2E2B28]">
      <style>{KEYFRAMES}</style>

      <div className="relative w-full max-w-[900px]">

        {/* Cinematic Counter */}
        <div
          className="absolute left-1/2 -translate-x-1/2 z-10 pointer-events-none select-none text-[#F2EDE8]/5 whitespace-nowrap"
          style={{
            top: "-5rem",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(4rem, 15vw, 10rem)",
            letterSpacing: "-4px",
            lineHeight: 1,
          }}
        >
          {cur + 1} / {total}
        </div>

        {/* Stage Container */}
        <div
          className="relative w-full overflow-hidden rounded-sm bg-[#0E0E0E] border border-[#2E2B28]"
          style={{ aspectRatio: "16/10", boxShadow: "0 40px 100px -20px rgba(0,0,0,0.7)" }}
        >
          <div key={slideKey} className={`absolute inset-0 ${anim}`}>
            {slide.type === "image" && <ImageSlide src={slide.src} />}
            {slide.type === "video" && <VideoSlide src={slide.src} />}
          </div>
        </div>

        {/* Dark Mode Pill Navigation */}
        <div
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-[#221F1C] border border-[#3A3633] rounded-full px-6 py-3"
          style={{ boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
        >
          <button onClick={prev} className="w-10 h-10 rounded-full flex items-center justify-center text-[#8C8480] hover:text-[#C9A96E] transition-colors bg-transparent border-0 cursor-pointer">
            <IconLeft />
          </button>
          <div className="w-px h-5 bg-[#3A3633]" />
          <button onClick={next} className="w-10 h-10 rounded-full flex items-center justify-center text-[#8C8480] hover:text-[#C9A96E] transition-colors bg-transparent border-0 cursor-pointer">
            <IconRight />
          </button>
        </div>

      </div>

      {/* Label Footer */}
      <div className="mt-16 text-center">
        <p className="text-[#A8844A] text-[11px] font-bold tracking-[.3em] uppercase">
          Project Showcase
        </p>
      </div>
    </section>
  );
}
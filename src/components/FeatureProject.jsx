import { useEffect, useRef, useState } from "react";

const YOUTUBE_ID = "oyA7Ucnmje4";

export default function FeaturedProject() {
  const [loaded, setLoaded] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setLoaded(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") setLightbox(false); };
    if (lightbox) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox]);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <section 
      ref={sectionRef} 
      className="bg-[#0E0E0E] py-20 px-6 min-h-screen flex items-center  overflow-hidden border-t border-[#2E2B28]"
    >
      <div className="max-w-300 mx-auto w-full relative">
        
        {/* ── Image Area (Pushed Right) ── */}
        <div 
          className={`relative ml-auto w-full max-w-[95%] lg:max-w-[85%] transition-opacity duration-1000 
          ${loaded ? "opacity-100" : "opacity-0"}`}
        >
          <div className="relative aspect-video w-full overflow-hidden border border-[#2E2B28]">
            <img
              src="/a5.png"
              alt="Featured Project Video Thumbnail"
              className="w-full h-full object-cover brightness-[0.5] grayscale hover:grayscale-0 transition-all duration-700"
            />
            
            {/* Play Button Overlay */}
            <button 
              onClick={() => setLightbox(true)}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 bg-[#C9A96E] rounded-full flex items-center justify-center transition-all hover:scale-110 hover:bg-[#A8844A] z-10 group shadow-2xl"
              aria-label="Play video"
            >
              <svg 
                className="w-6 h-6 md:w-10 md:h-10 ml-1 transition-transform group-hover:scale-110" 
                viewBox="0 0 24 24" 
                fill="#0E0E0E"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Floating Content Box ── */}
        <div 
          className={`bg-[#1A1917] border border-[#3A3633] p-8 md:p-12 lg:p-16 z-20 shadow-2xl transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1)
          lg:absolute lg:top-1/2 lg:left-0 lg:-translate-y-1/2 lg:w-120
          relative w-[90%] mx-auto lg:mx-0
          ${loaded 
            ? "opacity-100 translate-y-0 lg:-translate-y-1/2" 
            : "opacity-0 translate-y-10 lg:-translate-y-1/4"}`}
        >
          <span className="text-[12px] font-bold tracking-[0.2em] text-[#A8844A] mb-5 block uppercase">
            / 04
          </span>
          <h2 className="text-[#F2EDE8]  font-extrabold text-[clamp(1.8rem,3.5vw,2.5rem)] leading-[1.2] mb-6">
            Witness the art of the perfect finish
          </h2>
          <p className="text-[#8C8480] text-[0.95rem] leading-relaxed mb-10 max-w-sm">
            Every project begins with preparation and ends with something extraordinary. Watch how raw surfaces are transformed layer by layer, entirely by hand into finishes that last a lifetime.
          </p>
          <a 
            href="/#contact" 
            className="group inline-flex items-center gap-3 bg-[#C9A96E] text-[#0E0E0E] px-8 py-4 rounded-full font-bold transition-all hover:bg-[#A8844A] active:scale-95 uppercase tracking-widest text-[0.8rem]"
          >
            Get in touch
            <svg 
                className="transition-transform duration-300 group-hover:translate-x-1" 
                width="16" height="12" viewBox="0 0 16 12" fill="none"
              >
                <path d="M1 6h14M9 1l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── Lightbox Overlay ── */}
      {lightbox && (
        <div 
          className="fixed inset-0 bg-[#0E0E0E]/95 z-100 flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300 backdrop-blur-sm"
          onClick={() => setLightbox(false)}
        >
          <button 
            className="absolute top-6 right-6 text-[#F2EDE8] text-4xl hover:text-[#C9A96E] hover:rotate-90 transition-all"
            onClick={() => setLightbox(false)}
          >
            ×
          </button>
          <div 
            className="w-full max-w-5xl aspect-video shadow-2xl border border-[#3A3633]"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1`}
              title="Project Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
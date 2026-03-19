import { useEffect, useState } from "react";

export default function HomeHero() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home-hero"
      className="bg-[#0E0E0E]  min-h-svh flex flex-col overflow-x-hidden"
    >
      <style>{`
        @keyframes lineDrop {
          0%   { top: -100%; }
          100% { top: 100%; }
        }
        .animate-line-drop {
          animation: lineDrop 1.8s ease-in-out infinite;
        }
      `}</style>

      {/* Text block */}
      <div className="px-6 py-14 sm:px-10 sm:py-18 lg:px-16 lg:pt-24 lg:pb-12">
        <h1
          className={` font-extrabold text-[clamp(2.6rem,9vw,6.5rem)] leading-[1.02] tracking-tight text-[#F2EDE8] mb-4.5 max-w-200 transition-all duration-650 ease-out transform
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
        >
          We are a fine Resin Reskin firm in{" "}
          <span className="whitespace-nowrap text-[#C9A96E]">London</span>
        </h1>

        <p
          className={`text-[clamp(0.85rem,2vw,0.975rem)] font-light leading-[1.7] text-[#8C8480] max-w-110 mb-7 transition-all duration-650 delay-180 ease-out transform
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          Expertly crafted surfaces that redefine luxury. We specialise in high-end 
          architectural finishes, delivering bespoke resin solutions for distinguished spaces.
        </p>

        <div
          className={`flex items-center gap-2.5 flex-wrap transition-all duration-650 delay-320 ease-out transform
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {/* Gold Button (Primary) */}
          <a
            href="/contact"
            className="inline-flex items-center gap-2.25 bg-[#C9A96E] text-[#0E0E0E] text-[0.85rem] font-bold px-5.5 py-3 rounded-full border-[1.5px] border-[#C9A96E] transition-all hover:bg-[#A8844A] hover:border-[#A8844A] whitespace-nowrap tracking-wide"
          >
            Get in touch
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" aria-hidden="true">
              <path d="M1 6h12M8 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          {/* Outlined Button (Secondary) */}
          <a
            href="/services"
            className="inline-flex items-center bg-transparent text-[#F2EDE8] text-[0.85rem] font-medium px-5.5 py-3 rounded-full border-[1.5px] border-[#3A3633] transition-all hover:border-[#C9A96E] hover:text-[#C9A96E] whitespace-nowrap"
          >
            Browse services
          </a>

          {/* Scroll circle */}
          <a
            href="#home-services"
            className="w-12 h-12 rounded-full border-[1.5px] border-[#3A3633] flex items-center justify-center transition-colors hover:border-[#C9A96E] shrink-0"
            aria-label="Scroll to services"
          >
            <div className="w-px h-4.5 bg-[#3A3633] relative overflow-hidden">
              <div className="absolute left-0 w-full h-full bg-[#C9A96E] animate-line-drop" />
            </div>
          </a>
        </div>
      </div>

      {/* Full-width video/image */}
      <div
        className={`flex-1 w-full overflow-hidden transition-opacity duration-900 delay-450 ease-in-out border-t border-[#2E2B28]
          ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        <video
          src="bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full block object-cover min-h-70 max-h-150 lg:max-h-none lg:h-[58vh]"
          style={{
            transform: `scale(1.04) translateY(${scrollY * 0.035}px)`,
          }}
        />
      </div>
    </section>
  );
}
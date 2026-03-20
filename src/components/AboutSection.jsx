import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setLoaded(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="bg-[#1A1917] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-30 overflow-hidden border-t border-[#2E2B28] flex justify-center"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image Column */}
          <div 
            className={`transition-all duration-1000 ease-out transform ${
              loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="w-full aspect-4/5 lg:aspect-auto lg:h-140 overflow-hidden border border-[#3A3633]">
              <img
                src="/a1.jpg"
                alt="Resin Reskin firm team at work"
                className="w-full h-full object-cover block grayscale hover:grayscale-0 transition-all duration-700"
                loading="eager"
              />
            </div>
          </div>

          {/* Content Column */}
          <div 
            className={`transition-all duration-1000 ease-out delay-200 transform ${
              loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <p className="text-[12px] font-bold tracking-[0.2em] text-[#A8844A] mb-3 uppercase">
              / 02
            </p>
            
            <h2 className="font-extrabold text-[clamp(2rem,4.5vw,3rem)] leading-[1.1] text-[#F2EDE8] mb-6 tracking-tight">
              About Our Studio
            </h2>
            
            <p className="text-[clamp(0.875rem,1.8vw,0.975rem)] font-light leading-[1.8] text-[#8C8480] mb-9 max-w-lg">
              Resin Reskin is a UK-based specialist finishing studio working with homeowners, interior designers, and commercial clients who value craftsmanship above all else. We work with a curated range of premium finishes — from traditional Venetian plaster to contemporary epoxy resin systems — applying each one by hand with meticulous attention to detail. Every project is unique, every finish is bespoke, and every result is built to last.
            </p>
            
            <a 
              href="/#contact" 
              className="group inline-flex items-center gap-3 bg-[#C9A96E] text-[#0E0E0E] text-[0.875rem] font-bold px-8 py-4.5 rounded-full transition-all duration-300 hover:bg-[#A8844A] hover:translate-x-1"
            >
              Get in touch
              <svg 
                className="transition-transform duration-300 group-hover:translate-x-1" 
                width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true"
              >
                <path
                  d="M1 6h14M9 1l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
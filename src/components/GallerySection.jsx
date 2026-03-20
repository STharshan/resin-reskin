import { useEffect, useRef, useState } from "react";

const projects = [
  {
    image: "a2.png",
  },
  {
    image: "a3.png",
  },
];

export default function Portfolio() {
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setLoaded(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="bg-[#0E0E0E] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-30  border-t border-[#2E2B28]"
    >
      <div className="max-w-300 mx-auto">
        
        {/* Header Section */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 items-end mb-14 lg:mb-16 transition-all duration-700 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div>
            <p className="text-[12px] font-bold tracking-[0.2em] text-[#A8844A] mb-2.5 uppercase">/ 03</p>
            <h2 className=" font-extrabold text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08] text-[#F2EDE8] tracking-tight">Recent Projects</h2>
          </div>
          <div className="lg:flex lg:justify-end">
            <p className="text-[clamp(0.85rem,1.6vw,0.95rem)] font-light leading-relaxed text-[#8C8480] max-w-105">
              Take a look at our most recent work A selection of residential and commercial projects — each one a collaboration between our craft and our client's vision.
            </p>
          </div>
        </div>

        {/* Projects List */}
        <div className="flex flex-col">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.href}
              className={`group grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-12 lg:gap-16 py-12 md:py-20 border-t border-[#2E2B28] transition-all duration-700 transform last:border-b
              ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Image Column */}
              <div className="aspect-4/3 overflow-hidden bg-[#1A1917] border border-[#3A3633]">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out group-hover:scale-105"
                  loading="eager"
                />
              </div>

            </a>
          ))}
        </div>

        {/* Footer Button */}
        <div className={`flex justify-center mt-20 transition-all duration-700 delay-300 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <a 
            href="/#contact" 
            className="inline-flex items-center gap-3 bg-[#C9A96E] text-[#0E0E0E] px-10 py-4 rounded-full border-[1.5px] border-[#C9A96E] font-bold text-[0.875rem] transition-all hover:bg-transparent hover:text-[#C9A96E] whitespace-nowrap uppercase tracking-widest"
          >
            Get in touch
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" aria-hidden="true">
              <path d="M1 6h12M8 1l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
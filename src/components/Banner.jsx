import { useEffect, useRef, useState } from "react";

export default function Banner() {
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setLoaded(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#221F1C] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-30 overflow-hidden border-y border-[#2E2B28]"
    >
      <div className="max-w-300 mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16">
          
          {/* Title */}
          <h2
            className={` font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] text-[#F2EDE8] tracking-tight max-w-160 transition-all duration-700 ease-out transform
              ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
          >
            Get a free project <span className="text-[#C9A96E]">consultation today.</span>
          </h2>

          {/* Buttons */}
          <div
            className={`flex items-center gap-4 flex-wrap shrink-0 transition-all duration-700 delay-200 ease-out transform
              ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            {/* Gold filled pill */}
            <a
              href="/#contact"
              className="inline-flex items-center gap-2.5 bg-[#C9A96E] text-[#0E0E0E]  text-[0.875rem] font-bold px-8 py-4 rounded-full border-[1.5px] border-[#C9A96E] transition-all duration-300 hover:bg-[#A8844A] hover:border-[#A8844A] whitespace-nowrap tracking-wide"
            >
              Get in touch
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none" aria-hidden="true">
                <path
                  d="M1 6h12M8 1l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* Outlined pill */}
            <a
              href="/#services"
              className="inline-flex items-center bg-transparent text-[#F2EDE8]  text-[0.875rem] font-medium px-8 py-4 rounded-full border-[1.5px] border-[#3A3633] transition-all duration-300 hover:border-[#C9A96E] hover:text-[#C9A96E] whitespace-nowrap"
            >
              Browse services
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
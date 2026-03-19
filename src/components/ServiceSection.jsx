import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Venetian Plaster",
    description: "Expertly applied Italian finishes that bring a timeless, marble-like depth to your interior surfaces.",
    image: "https://cdn.prod.website-files.com/615b611125aa45d5cc374140/615b611125aa4561ac374186_image-1-services-Resin Reskin-x-template.jpg",
    href: "/venetian-plaster",
  },
  {
    title: "Metallic Plaster",
    description: "Luxurious reflective coatings infused with metallic pigments for a contemporary, industrial-chic aesthetic.",
    image: "https://cdn.prod.website-files.com/615b611125aa45d5cc374140/615b611125aa45e3f0374189_image-2-services-Resin Reskin-x-template.jpg",
    href: "/metallic-plaster",
  },
  {
    title: "Micro Cement",
    description: "A seamless, durable, and waterproof coating perfect for floors, walls, and bespoke furniture projects.",
    image: "https://cdn.prod.website-files.com/615b611125aa45646937418b_image-3-services-Resin Reskin-x-template.jpg",
    href: "/micro-cement",
  },
  {
    title: "Polished Plaster",
    description: "Achieve a mirror-like sheen with our high-end polished finishes, designed for sophisticated modern spaces.",
    image: "https://cdn.prod.website-files.com/615b611125aa453c14374188_image-4-services-Resin Reskin-x-template.jpg",
    href: "/polished-plaster",
  },
  {
    title: "Epoxy Resin",
    description: "Bespoke high-performance flooring solutions combining extreme durability with unique artistic patterns.",
    image: "https://cdn.prod.website-files.com/615b611125aa45dd53374187_image-5-services-Resin Reskin-x-template.jpg",
    href: "/epoxy-resin",
  },
  {
    title: "Minerals Plaster",
    description: "Natural mineral-based finishes that offer a raw, organic texture and breathable surface for your walls.",
    image: "https://cdn.prod.website-files.com/615b611125aa45244137418a_image-6-services-Resin Reskin-x-template.jpg",
    href: "/minerals-plaster",
  },
];

export default function HomeServices() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(3);
  const sectionRef = useRef(null);
  const dragStart = useRef(null);

  const gap = 24; 

  useEffect(() => {
    const getVisible = () => {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    };
    const update = () => setVisible(getVisible());
    update();
    window.addEventListener("resize", update);
    
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setLoaded(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);

    return () => {
      window.removeEventListener("resize", update);
      obs.disconnect();
    };
  }, []);

  const maxIndex = services.length - visible;
  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  const onTouchStart = (e) => { dragStart.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (dragStart.current === null) return;
    const diff = dragStart.current - e.changedTouches[0].clientX;
    if (diff > 40) next();
    else if (diff < -40) prev();
    dragStart.current = null;
  };

  const slideWidthPct = 100 / visible;

  return (
    <section 
      ref={sectionRef}
      className="bg-[#0E0E0E] text-[#F2EDE8] py-20 px-6 sm:py-24 sm:px-10 lg:py-30 lg:px-16 overflow-hidden "
    >
      <div className="max-w-350 mx-auto">
        
        {/* Header Row */}
        <div className={`flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6 transition-all duration-700 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex-1">
            <div className="text-[12px] font-bold tracking-[0.2em] text-[#A8844A] mb-2.5 uppercase">/ 01</div>
            <h2 className=" font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.08] mb-3.5">Our services</h2>
            <p className="text-[0.9rem] font-light leading-[1.7] text-[#8C8480] max-w-100">
              We offer a comprehensive range of premium resin and plastering services tailored to architectural excellence.
            </p>
          </div>

          {/* Nav Arrows */}
          <div className="hidden sm:flex gap-2.5 shrink-0 pb-1">
            <button
              onClick={prev}
              disabled={current === 0}
              className="w-[52px] h-[52px] rounded-full border-[1.5px] border-[#2E2B28] text-[#F2EDE8] flex items-center justify-center transition-all hover:enabled:border-[#C9A96E] hover:enabled:text-[#C9A96E] disabled:opacity-20 disabled:cursor-default"
            >
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none"><path d="M17 7H1M7 1L1 7l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button
              onClick={next}
              disabled={current >= maxIndex}
              className="w-[52px] h-[52px] rounded-full border-[1.5px] border-[#2E2B28] text-[#F2EDE8] flex items-center justify-center transition-all hover:enabled:border-[#C9A96E] hover:enabled:text-[#C9A96E] disabled:opacity-20 disabled:cursor-default"
            >
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none"><path d="M1 7h16M11 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </div>

        {/* Slider Viewport */}
        <div 
          className={`transition-all duration-700 delay-200 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) will-change-transform"
            style={{ 
              gap: `${gap}px`,
              transform: `translateX(calc(-${current * slideWidthPct}% - ${current * gap}px))` 
            }}
          >
            {services.map((svc, i) => (
              <div 
                key={i}
                className="shrink-0"
                style={{ width: `calc(${slideWidthPct}% - ${(gap * (visible - 1)) / visible}px)` }}
              >
                <a href={svc.href} className="group block text-inherit no-underline cursor-pointer">
                  <div className="w-full aspect-[3/3.5] overflow-hidden mb-6 bg-[#1A1917] border border-[#2E2B28]">
                    <img 
                      src={svc.image} 
                      alt={svc.title}
                      className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                  </div>
                  <div>
                    <h3 className=" text-[clamp(1.1rem,2.5vw,1.5rem)] font-bold mb-2.5 leading-tight text-[#F2EDE8] group-hover:text-[#C9A96E] transition-colors">{svc.title}</h3>
                    <p className="text-[0.85rem] font-light leading-[1.65] text-[#8C8480] mb-4 line-clamp-2">{svc.description}</p>
                    <span className="inline-flex flex-col gap-1 text-[0.75rem] font-bold tracking-[0.15em] uppercase text-[#A8844A]">
                      View service
                      <span className="h-[1.5px] bg-[#C9A96E] w-8 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex gap-3 mt-12 justify-center">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${current === i ? 'bg-[#C9A96E] scale-150' : 'bg-[#3A3633] hover:bg-[#5A5652]'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
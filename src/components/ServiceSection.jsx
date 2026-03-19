import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Architectural Design",
    description: "Lorem ipsum dolor sit amet consectetur dolor si adipiscing elit netus praesent eu orci volu.",
    image: "https://cdn.prod.website-files.com/615b611125aa45d5cc374140/615b611125aa4561ac374186_image-1-services-architecture-x-template.jpg",
    href: "/service-single",
  },
  {
    title: "Interior Design",
    description: "Lorem ipsum dolor sit amet consectetur dolor si adipiscing elit netus praesent eu orci volu.",
    image: "https://cdn.prod.website-files.com/615b611125aa45d5cc374140/615b611125aa45e3f0374189_image-2-services-architecture-x-template.jpg",
    href: "/service-single",
  },
  {
    title: "Space Planning",
    description: "Lorem ipsum dolor sit amet consectetur dolor si adipiscing elit netus praesent eu orci volu.",
    image: "https://cdn.prod.website-files.com/615b611125aa45d5cc374140/615b611125aa45646937418b_image-3-services-architecture-x-template.jpg",
    href: "/service-single",
  },
  {
    title: "Decoration",
    description: "Lorem ipsum dolor sit amet consectetur dolor si adipiscing elit netus praesent eu orci volu.",
    image: "https://cdn.prod.website-files.com/615b611125aa45d5cc374140/615b611125aa453c14374188_image-4-services-architecture-x-template.jpg",
    href: "/service-single",
  },
  {
    title: "Exterior Design",
    description: "Lorem ipsum dolor sit amet consectetur dolor si adipiscing elit netus praesent eu orci volu.",
    image: "https://cdn.prod.website-files.com/615b611125aa45d5cc374140/615b611125aa45dd53374187_image-5-services-architecture-x-template.jpg",
    href: "/service-single",
  },
  {
    title: "Construction",
    description: "Lorem ipsum dolor sit amet consectetur dolor si adipiscing elit netus praesent eu orci volu.",
    image: "https://cdn.prod.website-files.com/615b611125aa45d5cc374140/615b611125aa45244137418a_image-6-services-architecture-x-template.jpg",
    href: "/service-single",
  },
];

export default function HomeServices() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [hovered, setHovered] = useState(null);
  const trackRef = useRef(null);
  const sectionRef = useRef(null);

  // How many slides visible at once
  const getVisible = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const update = () => setVisible(getVisible());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Intersection observer for fade-in
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setLoaded(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const maxIndex = services.length - visible;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  // Touch/drag support
  const dragStart = useRef(null);
  const onTouchStart = (e) => { dragStart.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (dragStart.current === null) return;
    const diff = dragStart.current - e.changedTouches[0].clientX;
    if (diff > 40) next();
    else if (diff < -40) prev();
    dragStart.current = null;
  };

  const slideWidthPct = 100 / visible;
  const gap = 24; // px gap between slides

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        .services-root {
          background: #111;
          color: #fff;
          font-family: 'Inter', sans-serif;
          padding: 80px 24px 100px;
          overflow: hidden;
        }
        @media (min-width: 640px) {
          .services-root { padding: 100px 40px 120px; }
        }
        @media (min-width: 1024px) {
          .services-root { padding: 120px 64px 140px; }
        }

        .services-inner {
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Header row */
        .services-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 56px;
          gap: 24px;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .services-header.loaded { opacity: 1; transform: translateY(0); }

        .services-header-left { flex: 1; }

        .subtitle {
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.1em;
          color: #666;
          margin-bottom: 10px;
        }

        .services-title {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: clamp(2rem, 5vw, 3.5rem);
          line-height: 1.08;
          color: #fff;
          margin-bottom: 14px;
        }

        .services-para {
          font-size: 0.9rem;
          font-weight: 300;
          line-height: 1.7;
          color: #888;
          max-width: 360px;
        }

        /* Nav arrows */
        .nav-arrows {
          display: flex;
          gap: 10px;
          flex-shrink: 0;
          align-self: flex-end;
          padding-bottom: 4px;
        }

        .arrow-btn {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 1.5px solid #444;
          background: transparent;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
          flex-shrink: 0;
        }
        .arrow-btn:hover:not(:disabled) {
          border-color: #fff;
          background: rgba(255,255,255,0.06);
        }
        .arrow-btn:disabled {
          opacity: 0.3;
          cursor: default;
        }

        /* Slider */
        .slider-viewport {
          overflow: hidden;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;
        }
        .slider-viewport.loaded { opacity: 1; transform: translateY(0); }

        .slider-track {
          display: flex;
          gap: ${gap}px;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }

        .service-slide {
          flex-shrink: 0;
        }

        /* Card */
        .service-card {
          display: block;
          text-decoration: none;
          color: inherit;
          cursor: pointer;
        }

        .service-img-wrap {
          width: 100%;
          aspect-ratio: 3 / 3.5;
          overflow: hidden;
          margin-bottom: 20px;
          background: #222;
        }
        .service-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.55s cubic-bezier(0.4,0,0.2,1);
        }
        .service-card:hover .service-img-wrap img {
          transform: scale(1.06);
        }

        .service-card-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.1rem, 2.5vw, 1.5rem);
          font-weight: 700;
          color: #fff;
          margin-bottom: 10px;
          line-height: 1.2;
        }

        .service-card-para {
          font-size: 0.85rem;
          font-weight: 300;
          line-height: 1.65;
          color: #888;
          margin-bottom: 16px;
        }

        .view-link {
          display: inline-flex;
          flex-direction: column;
          gap: 4px;
          font-size: 0.8rem;
          font-weight: 400;
          letter-spacing: 0.04em;
          color: #fff;
          text-decoration: none;
          position: relative;
        }
        .view-link-underline {
          height: 1px;
          background: #fff;
          width: 0;
          transition: width 0.3s ease;
        }
        .service-card:hover .view-link-underline {
          width: 100%;
        }

        /* Dots */
        .slider-dots {
          display: flex;
          gap: 8px;
          margin-top: 40px;
          justify-content: center;
        }
        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #444;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }
        .dot.active {
          background: #fff;
          transform: scale(1.3);
        }
      `}</style>

      <section className="services-root" id="home-services" ref={sectionRef}>
        <div className="services-inner">

          {/* Header */}
          <div className={`services-header${loaded ? " loaded" : ""}`}>
            <div className="services-header-left">
              <div className="subtitle">/ 01</div>
              <h2 className="services-title">Our services</h2>
              <p className="services-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit netus
                praesent eu orci, volutpat vel proin.
              </p>
            </div>

            {/* Arrows — shown top-right on desktop, hidden on mobile (dots used instead) */}
            <div className="nav-arrows" style={{ display: visible >= 2 ? "flex" : "none" }}>
              <button
                className="arrow-btn"
                onClick={prev}
                disabled={current === 0}
                aria-label="Previous slide"
              >
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                  <path d="M17 7H1M7 1L1 7l6 6" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                className="arrow-btn"
                onClick={next}
                disabled={current >= maxIndex}
                aria-label="Next slide"
              >
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                  <path d="M1 7h16M11 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Slider */}
          <div
            className={`slider-viewport${loaded ? " loaded" : ""}`}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              ref={trackRef}
              className="slider-track"
              style={{
                transform: `translateX(calc(-${current * (slideWidthPct)}% - ${current * gap}px))`,
              }}
            >
              {services.map((svc, i) => (
                <div
                  key={i}
                  className="service-slide"
                  style={{ width: `calc(${slideWidthPct}% - ${gap * (visible - 1) / visible}px)` }}
                >
                  <a
                    href={svc.href}
                    className="service-card"
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className="service-img-wrap">
                      <img
                        src={svc.image}
                        alt={svc.title}
                        loading="eager"
                      />
                    </div>
                    <div>
                      <h3 className="service-card-title">{svc.title}</h3>
                      <p className="service-card-para">{svc.description}</p>
                      <span className="view-link">
                        View service
                        <span className="view-link-underline" />
                      </span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Dots — mobile only / always show */}
          <div className="slider-dots" role="tablist">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                className={`dot${current === i ? " active" : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                role="tab"
                aria-selected={current === i}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
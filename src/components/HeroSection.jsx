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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .hero-root {
          background: #f7f6f3;
          font-family: 'Inter', sans-serif;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
        }

        .hero-content {
          padding: 56px 24px 32px;
        }
        @media (min-width: 640px) {
          .hero-content { padding: 72px 40px 40px; }
        }
        @media (min-width: 1024px) {
          .hero-content { padding: 96px 64px 48px; }
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-weight: 800;
          font-size: clamp(2.6rem, 9vw, 6.5rem);
          line-height: 1.02;
          letter-spacing: -0.02em;
          color: #111;
          margin-bottom: 18px;
          max-width: 800px;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        .hero-title.loaded { opacity: 1; transform: translateY(0); }

        .hero-para {
          font-size: clamp(0.85rem, 2vw, 0.975rem);
          font-weight: 300;
          line-height: 1.7;
          color: #555;
          max-width: 440px;
          margin-bottom: 28px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.65s ease 0.18s, transform 0.65s ease 0.18s;
        }
        .hero-para.loaded { opacity: 1; transform: translateY(0); }

        .hero-buttons {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.65s ease 0.32s, transform 0.65s ease 0.32s;
        }
        .hero-buttons.loaded { opacity: 1; transform: translateY(0); }

        /* Black pill */
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          background: #111;
          color: #fff;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          padding: 12px 22px;
          border-radius: 999px;
          border: 1.5px solid #111;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.2s;
          white-space: nowrap;
          letter-spacing: 0.01em;
        }
        .btn-primary:hover { background: #2a2a2a; }

        /* Outlined pill */
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          background: transparent;
          color: #111;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 400;
          padding: 12px 22px;
          border-radius: 999px;
          border: 1.5px solid #ccc;
          text-decoration: none;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s, color 0.2s;
          white-space: nowrap;
        }
        .btn-secondary:hover { border-color: #111; background: #111; color: #fff; }

        /* Scroll circle */
        .scroll-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1.5px solid #ccc;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          cursor: pointer;
          transition: border-color 0.2s;
          flex-shrink: 0;
        }
        .scroll-circle:hover { border-color: #111; }
        .scroll-line {
          width: 1px;
          height: 18px;
          background: #ccc;
          position: relative;
          overflow: hidden;
        }
        .scroll-line::after {
          content: '';
          position: absolute;
          top: -100%;
          left: 0;
          width: 100%;
          height: 100%;
          background: #111;
          animation: lineDrop 1.8s ease-in-out infinite;
        }
        @keyframes lineDrop {
          0%   { top: -100%; }
          100% { top: 100%; }
        }

        /* Image */
        .hero-image-block {
          flex: 1;
          width: 100%;
          overflow: hidden;
          opacity: 0;
          transition: opacity 0.9s ease 0.45s;
        }
        .hero-image-block.loaded { opacity: 1; }
        .hero-image-block img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          min-height: 280px;
          max-height: 600px;
          transition: transform 0.1s linear;
        }
        @media (min-width: 1024px) {
          .hero-image-block img {
            max-height: none;
            height: 58vh;
          }
        }
      `}</style>

      <section className="hero-root" id="home-hero">

        {/* Text block */}
        <div className="hero-content">
          <h1 className={`hero-title${loaded ? " loaded" : ""}`}>
            We are a fine architecture firm in{" "}
            <span style={{ whiteSpace: "nowrap" }}>New York</span>
          </h1>

          <p className={`hero-para${loaded ? " loaded" : ""}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit netus
            praesent eu orci, volutpat vel proin mattis id suspendisse vel
            egestas.
          </p>

          <div className={`hero-buttons${loaded ? " loaded" : ""}`}>
            <a href="/contact" className="btn-primary">
              Get in touch
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none" aria-hidden="true">
                <path d="M1 6h12M8 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a href="/services" className="btn-secondary">
              Browse services
            </a>

            <a href="#home-services" className="scroll-circle" aria-label="Scroll to services">
              <div className="scroll-line" />
            </a>
          </div>
        </div>

        {/* Full-width image */}
        <div className={`hero-image-block${loaded ? " loaded" : ""}`}>
          <img
            src="https://cdn.prod.website-files.com/615b611125aa45d5cc374140/615b611125aa452a4c374185_image-home-hero-architecture-x-template.jpg"
            srcSet="
              https://assets.website-files.com/615b611125aa45d5cc374140/615b611125aa452a4c374185_image-home-hero-architecture-x-template-p-500.jpeg 500w,
              https://assets.website-files.com/615b611125aa45d5cc374140/615b611125aa452a4c374185_image-home-hero-architecture-x-template-p-800.jpeg 800w,
              https://assets.website-files.com/615b611125aa45d5cc374140/615b611125aa452a4c374185_image-home-hero-architecture-x-template-p-1080.jpeg 1080w,
              https://assets.website-files.com/615b611125aa45d5cc374140/615b611125aa452a4c374185_image-home-hero-architecture-x-template.jpg 2686w
            "
            sizes="100vw"
            alt="Architecture firm project in New York"
            loading="eager"
            style={{
              transform: `scale(1.04) translateY(${scrollY * 0.035}px)`,
            }}
          />
        </div>

      </section>
    </>
  );
}
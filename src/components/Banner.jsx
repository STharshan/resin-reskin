import { useEffect, useRef, useState } from "react";

export default function Banner() {
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setLoaded(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .cta-root {
          background: #111;
          font-family: 'Inter', sans-serif;
          padding: 80px 24px;
        }
        @media (min-width: 640px) {
          .cta-root { padding: 100px 40px; }
        }
        @media (min-width: 1024px) {
          .cta-root { padding: 120px 64px; }
        }

        .cta-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .cta-wrapper {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        @media (min-width: 1024px) {
          .cta-wrapper {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 64px;
          }
        }

        .cta-title {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: clamp(2rem, 5vw, 3.5rem);
          line-height: 1.1;
          color: #fff;
          letter-spacing: -0.01em;
          max-width: 640px;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .cta-title.loaded { opacity: 1; transform: translateY(0); }

        .cta-buttons {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          flex-shrink: 0;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;
        }
        .cta-buttons.loaded { opacity: 1; transform: translateY(0); }

        /* White filled pill */
        .btn-white-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #fff;
          color: #111;
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          padding: 14px 26px;
          border-radius: 999px;
          border: 1.5px solid #fff;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.22s, color 0.22s;
          white-space: nowrap;
          letter-spacing: 0.01em;
        }
        .btn-white-primary:hover {
          background: transparent;
          color: #fff;
        }

        /* White outlined pill */
        .btn-white-secondary {
          display: inline-flex;
          align-items: center;
          background: transparent;
          color: #fff;
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          font-weight: 400;
          padding: 14px 26px;
          border-radius: 999px;
          border: 1.5px solid rgba(255,255,255,0.35);
          text-decoration: none;
          cursor: pointer;
          transition: border-color 0.22s, background 0.22s, color 0.22s;
          white-space: nowrap;
        }
        .btn-white-secondary:hover {
          border-color: #fff;
          background: #fff;
          color: #111;
        }
      `}</style>

      <section className="cta-root" ref={sectionRef}>
        <div className="cta-inner">
          <div className="cta-wrapper">

            <h2 className={`cta-title${loaded ? " loaded" : ""}`}>
              Get in touch today to get a free project quote.
            </h2>

            <div className={`cta-buttons${loaded ? " loaded" : ""}`}>
              <a href="/contact" className="btn-white-primary">
                Get in touch
                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" aria-hidden="true">
                  <path d="M1 6h12M8 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="/services" className="btn-white-secondary">
                Browse services
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
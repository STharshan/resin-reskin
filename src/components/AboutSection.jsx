import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setLoaded(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .about-root {
          background: #f0ede6;
          font-family: 'Inter', sans-serif;
          padding: 80px 24px;
        }
        @media (min-width: 640px) {
          .about-root { padding: 100px 40px; }
        }
        @media (min-width: 1024px) {
          .about-root { padding: 120px 64px; }
        }

        .about-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Two-column wrapper */
        .about-wrapper {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: center;
        }
        @media (min-width: 1024px) {
          .about-wrapper {
            grid-template-columns: 1fr 1fr;
            gap: 64px;
          }
        }

        /* Image */
        .about-img-col {
          opacity: 0;
          transform: translateX(-30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .about-img-col.loaded {
          opacity: 1;
          transform: translateX(0);
        }

        .about-img-wrap {
          width: 100%;
          overflow: hidden;
          /* Tall portrait crop like the screenshot */
          aspect-ratio: 4 / 5;
        }
        @media (min-width: 1024px) {
          .about-img-wrap {
            aspect-ratio: unset;
            height: 560px;
          }
        }

        .about-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Content */
        .about-content {
          opacity: 0;
          transform: translateX(30px);
          transition: opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s;
        }
        .about-content.loaded {
          opacity: 1;
          transform: translateX(0);
        }

        .about-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.12em;
          color: #888;
          margin-bottom: 12px;
        }

        .about-title {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: clamp(2rem, 4.5vw, 3rem);
          line-height: 1.1;
          color: #111;
          margin-bottom: 24px;
          letter-spacing: -0.01em;
        }

        .about-para {
          font-size: clamp(0.875rem, 1.8vw, 0.975rem);
          font-weight: 300;
          line-height: 1.8;
          color: #555;
          margin-bottom: 36px;
          max-width: 480px;
        }

        /* Button */
        .about-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #111;
          color: #fff;
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          padding: 15px 28px;
          border-radius: 999px;
          border: none;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.22s, transform 0.22s;
          letter-spacing: 0.01em;
        }
        .about-btn:hover {
          background: #2a2a2a;
          transform: translateX(2px);
        }
      `}</style>

      <section className="about-root" id="home-about" ref={sectionRef}>
        <div className="about-inner">
          <div className="about-wrapper">

            {/* Image */}
            <div className={`about-img-col${loaded ? " loaded" : ""}`}>
              <div className="about-img-wrap">
                <img
                  src="https://cdn.prod.website-files.com/615b611125aa45d5cc374140/615b611125aa45b1a437419b_image-home-about-architecture-x-template.jpg"
                  srcSet="
                    https://assets.website-files.com/615b611125aa45d5cc374140/615b611125aa45b1a437419b_image-home-about-architecture-x-template-p-500.jpeg 500w,
                    https://assets.website-files.com/615b611125aa45d5cc374140/615b611125aa45b1a437419b_image-home-about-architecture-x-template.jpg 1632w
                  "
                  sizes="(max-width: 479px) 90vw, (max-width: 991px) 94vw, 580px"
                  alt="Architecture firm team at work"
                  loading="eager"
                />
              </div>
            </div>

            {/* Content */}
            <div className={`about-content${loaded ? " loaded" : ""}`}>
              <p className="about-subtitle">/ 02</p>
              <h2 className="about-title">About our firm</h2>
              <p className="about-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sem etiam
                duis amet lectus vivamus varius volutpat tortor elementum unc
                viverra quam amet a viverra et vel lacus habitant vitae sit sit
                tincidunt etiam et convallis nulla latea pellentesque facilisi
                dignissim massa adipiscing pellentesque massa.
              </p>
              <a href="/contact" className="about-btn">
                Get in touch
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
                  <path
                    d="M1 6h14M9 1l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
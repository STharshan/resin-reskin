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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

        .fp-root {
          background: #000; /* Darker background like the screenshot */
          font-family: 'Inter', sans-serif;
          padding: 80px 24px;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .fp-inner { 
          max-width: 1200px; 
          margin: 0 auto; 
          width: 100%;
          position: relative;
        }

        /* ── The Image Container (The Base) ── */
        .fp-image-area {
          position: relative;
          width: 100%;
          margin-left: auto;
          max-width: 90%; /* Pushes image to the right */
          opacity: 0;
          transition: opacity 1s ease;
        }
        @media (min-width: 1024px) {
          .fp-image-area { max-width: 85%; }
        }
        .fp-image-area.loaded { opacity: 1; }

        .fp-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
        }

        .fp-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.7); /* Matches the dark cinematic look */
        }

        /* ── The Floating Black Box ── */
        .fp-content {
          background: #000;
          padding: 40px;
          z-index: 10;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid #222; /* Subtle definition */
        }

        @media (min-width: 1024px) {
          .fp-content {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            width: 450px;
            padding: 60px;
          }
          .fp-content.loaded { transform: translateY(-50%); opacity: 1; }
        }
        
        @media (max-width: 1023px) {
           .fp-content { margin-top: -60px; position: relative; width: 90%; }
           .fp-content.loaded { transform: translateY(0); opacity: 1; }
        }

        .fp-subtitle {
          font-size: 14px;
          color: #888;
          margin-bottom: 20px;
          display: block;
        }

        .fp-title {
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          line-height: 1.2;
          color: #fff;
          font-weight: 500;
          margin-bottom: 24px;
        }

        .fp-para {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #aaa;
          margin-bottom: 40px;
        }

        .fp-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #fff;
          color: #000;
          padding: 16px 32px;
          border-radius: 100px;
          text-decoration: none;
          font-weight: 500;
          transition: transform 0.2s;
        }
        .fp-btn:hover { transform: scale(1.03); }

        /* ── Play Button ── */
        .fp-play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100px;
          height: 100px;
          background: #fff;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
        }

        .fp-lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.95);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
        }
      `}</style>

      <section className="fp-root" ref={sectionRef}>
        <div className="fp-inner">
          
          {/* Background Image Area */}
          <div className={`fp-image-area${loaded ? " loaded" : ""}`}>
            <div className="fp-img-wrap">
              <img
                src="https://cdn.prod.website-files.com/615b611125aa45d5cc374140/615b611125aa45f90237419c_image-home-project-architecture-x-template.jpg"
                alt="Project"
              />
              <button className="fp-play-btn" onClick={() => setLightbox(true)}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="#000">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Floating Text Content Box */}
          <div className={`fp-content${loaded ? " loaded" : ""}`}>
            <span className="fp-subtitle">/ 04</span>
            <h2 className="fp-title">Take a look at our most recent project</h2>
            <p className="fp-para">
              Lorem ipsum dolor sit amet consectetur adipiscing elit etiam 
              duis amet lectus vivamus varius volutpat tortor ele.
            </p>
            <a href="#" className="fp-btn">
              Get in touch <span>→</span>
            </a>
          </div>

        </div>
      </section>

      {lightbox && (
        <div className="fp-lightbox" onClick={() => setLightbox(false)}>
          <div style={{ width: '100%', maxWidth: '1000px', aspectRatio: '16/9' }}>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
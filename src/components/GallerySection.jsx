import { useEffect, useRef, useState } from "react";

const projects = [
  {
    href: "/project/house-architecture-design-in-manhattan-new-york",
    image: "https://cdn.prod.website-files.com/615b611125aa450c4137415d/615b611125aa45239e374232_image-4-thumbnail-portfolio-architecture-x-template.jpg",
    srcSet: "https://cdn.prod.website-files.com/615b611125aa450c4137415d/615b611125aa45239e374232_image-4-thumbnail-portfolio-architecture-x-template-p-500.jpeg 500w, https://cdn.prod.website-files.com/615b611125aa450c4137415d/615b611125aa45239e374232_image-4-thumbnail-portfolio-architecture-x-template-p-800.jpeg 800w, https://cdn.prod.website-files.com/615b611125aa450c4137415d/615b611125aa45239e374232_image-4-thumbnail-portfolio-architecture-x-template.jpg 1402w",
    location: "New York, NY",
    date: "June 23, 2021",
    title: "House architecture design in Manhattan, New York",
  },
  {
    href: "/project/interior-design-in-brooklyn-heights-new-york",
    image: "https://cdn.prod.website-files.com/615b611125aa450c4137415d/615b611125aa45aecb374230_image-3-thumbnail-portfolio-architecture-x-template.jpg",
    srcSet: "https://cdn.prod.website-files.com/615b611125aa450c4137415d/615b611125aa45aecb374230_image-3-thumbnail-portfolio-architecture-x-template-p-500.jpeg 500w, https://cdn.prod.website-files.com/615b611125aa450c4137415d/615b611125aa45aecb374230_image-3-thumbnail-portfolio-architecture-x-template-p-800.jpeg 800w, https://cdn.prod.website-files.com/615b611125aa450c4137415d/615b611125aa45aecb374230_image-3-thumbnail-portfolio-architecture-x-template.jpg 1402w",
    location: "New York, NY",
    date: "June 23, 2021",
    title: "Interior design in Brooklyn Heights, New York",
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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .portfolio-root {
          background: #f0ede6;
          font-family: 'Inter', sans-serif;
          padding: 80px 24px 100px;
        }
        @media (min-width: 640px) {
          .portfolio-root { padding: 100px 40px 120px; }
        }
        @media (min-width: 1024px) {
          .portfolio-root { padding: 120px 64px 140px; }
        }

        .portfolio-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* ── Header row ── */
        .portfolio-header {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-bottom: 56px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        @media (min-width: 1024px) {
          .portfolio-header {
            grid-template-columns: 1fr 1fr;
            align-items: end;
            gap: 64px;
            margin-bottom: 64px;
          }
        }
        .portfolio-header.loaded { opacity: 1; transform: translateY(0); }

        .portfolio-subtitle {
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.12em;
          color: #888;
          margin-bottom: 10px;
        }

        .portfolio-title {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: clamp(2rem, 4.5vw, 3rem);
          line-height: 1.08;
          color: #111;
          letter-spacing: -0.01em;
        }

        .portfolio-header-right {
          display: flex;
          align-items: flex-end;
        }

        .portfolio-para {
          font-size: clamp(0.85rem, 1.6vw, 0.95rem);
          font-weight: 300;
          line-height: 1.75;
          color: #666;
          max-width: 420px;
        }

        /* ── Project list ── */
        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* ── Each project item: left image + right content ── */
        .project-item {
          display: grid;
          grid-template-columns: 1fr;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
          border-top: 1px solid rgba(0,0,0,0.1);
          padding: 40px 0;
        }
        .project-item:last-child { border-bottom: 1px solid rgba(0,0,0,0.1); }
        @media (min-width: 768px) {
          .project-item {
            grid-template-columns: 1fr 1fr;
            gap: 48px;
            align-items: center;
          }
        }
        @media (min-width: 1024px) {
          .project-item {
            grid-template-columns: 1fr 1fr;
            gap: 64px;
            padding: 56px 0;
          }
        }
        .project-item.loaded { opacity: 1; transform: translateY(0); }

        /* Image */
        .project-img-wrap {
          overflow: hidden;
          aspect-ratio: 4 / 3;
          margin-bottom: 28px;
          background: #ddd;
        }
        @media (min-width: 768px) {
          .project-img-wrap { margin-bottom: 0; }
        }
        .project-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Content */
        .project-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .project-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.8rem;
          font-weight: 300;
          color: #888;
          margin-bottom: 16px;
        }
        .project-meta-divider {
          width: 24px;
          height: 1px;
          background: #bbb;
          flex-shrink: 0;
        }

        .project-title {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: clamp(1.2rem, 2.5vw, 1.6rem);
          line-height: 1.2;
          color: #111;
          margin-bottom: 24px;
          letter-spacing: -0.01em;
        }

        /* View project link */
        .view-link {
          display: inline-flex;
          flex-direction: column;
          gap: 5px;
          font-size: 0.875rem;
          font-weight: 500;
          color: #111;
          text-decoration: none;
          width: fit-content;
        }
        .view-link-bar {
          height: 2px;
          background: #111;
          width: 0;
          transition: width 0.3s ease;
        }
        .project-item:hover .view-link-bar { width: 100%; }

        /* ── Bottom buttons ── */
        .portfolio-footer {
          display: flex;
          justify-content: center;
          margin-top: 56px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s;
        }
        .portfolio-footer.loaded { opacity: 1; transform: translateY(0); }

        .footer-buttons {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #111;
          color: #fff;
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          padding: 14px 26px;
          border-radius: 999px;
          border: 1.5px solid #111;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.22s, color 0.22s;
          white-space: nowrap;
        }
        .btn-primary:hover { background: #333; }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          background: transparent;
          color: #111;
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          font-weight: 400;
          padding: 14px 26px;
          border-radius: 999px;
          border: 1.5px solid #bbb;
          text-decoration: none;
          cursor: pointer;
          transition: border-color 0.22s, background 0.22s, color 0.22s;
          white-space: nowrap;
        }
        .btn-secondary:hover { border-color: #111; background: #111; color: #fff; }
      `}</style>

      <section className="portfolio-root" id="home-portfolio" ref={sectionRef}>
        <div className="portfolio-inner">

          {/* Header */}
          <div className={`portfolio-header${loaded ? " loaded" : ""}`}>
            <div>
              <p className="portfolio-subtitle">/ 03</p>
              <h2 className="portfolio-title">Our portfolio</h2>
            </div>
            <div className="portfolio-header-right">
              <p className="portfolio-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit netus
                praesent eu orci, volutpat vel proin sit.
              </p>
            </div>
          </div>

          {/* Projects */}
          <div className="projects-list">
            {projects.map((p, i) => (
              <a
                key={i}
                href={p.href}
                className={`project-item${loaded ? " loaded" : ""}`}
                style={{ transitionDelay: `${i * 0.15}s`, textDecoration: "none" }}
              >
                {/* Image */}
                <div className="project-img-wrap">
                  <img
                    src={p.image}
                    srcSet={p.srcSet}
                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 1919px) 46vw, 580px"
                    alt={p.title}
                    loading="eager"
                  />
                </div>

                {/* Content */}
                <div className="project-content">
                  <div className="project-meta">
                    <span>{p.location}</span>
                    <span className="project-meta-divider" />
                    <span>{p.date}</span>
                  </div>
                  <h3 className="project-title">{p.title}</h3>
                  <span className="view-link">
                    View project
                    <span className="view-link-bar" />
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Footer buttons */}
          <div className={`portfolio-footer${loaded ? " loaded" : ""}`}>
            <div className="footer-buttons">
              <a href="/contact" className="btn-primary">
                Get in touch
                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" aria-hidden="true">
                  <path d="M1 6h12M8 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="/portfolio" className="btn-secondary">
                Browse portfolio
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
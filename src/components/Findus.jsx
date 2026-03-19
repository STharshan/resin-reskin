import { useState } from "react";

const offices = [
  { id: 0, city: "Salford",   country: "Greater Manchester", lat: 53.4875, lng: -2.2901, zoom: 13 },
  { id: 1, city: "Stockport", country: "Greater Manchester", lat: 53.4106, lng: -2.1575, zoom: 13 },
  { id: 2, city: "Bolton",    country: "Greater Manchester", lat: 53.5781, lng: -2.4282, zoom: 13 },
  { id: 3, city: "Wigan",     country: "Greater Manchester", lat: 53.5450, lng: -2.6325, zoom: 13 },
  { id: 4, city: "Rochdale",  country: "Greater Manchester", lat: 53.6097, lng: -2.1561, zoom: 13 },
  { id: 5, city: "Oldham",    country: "Greater Manchester", lat: 53.5409, lng: -2.1114, zoom: 13 },
];

const LocationPinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0116 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

function buildMapUrl({ lat, lng }) {
  const bbox = 0.04;
  const left   = (lng - bbox).toFixed(4);
  const right  = (lng + bbox).toFixed(4);
  const bottom = (lat - bbox * 0.7).toFixed(4);
  const top    = (lat + bbox * 0.7).toFixed(4);
  return (
    `https://www.openstreetmap.org/export/embed.html` +
    `?bbox=${left},${bottom},${right},${top}` +
    `&layer=mapnik` +
    `&marker=${lat},${lng}`
  );
}

export default function Findus() {
  const [activeTab, setActiveTab] = useState(0);
  const active = offices[activeTab];

  return (
    <section
      className="w-full min-h-screen overflow-hidden"
      style={{ background: "#08060F" }}
    >
      <div className="flex flex-col lg:flex-row w-full min-h-screen">

        {/* ── LEFT PANEL ── */}
        <div className="flex flex-col w-full lg:w-[45%] px-6 sm:px-10 md:px-14 py-12 md:py-16 lg:min-h-screen">

          {/* Label */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full" style={{ background: "#FF6D00" }} />
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold" style={{ color: "#FF6D00" }}>
              Coverage
            </span>
          </div>

          {/* Heading */}
          <h2
            className="font-bold leading-[1.06] mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", color: "#FFFFFF", letterSpacing: "-0.02em" }}
          >
            Proudly Serving<br />
            <span style={{
              background: "linear-gradient(90deg, #FF6D00 0%, #D4187A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Greater Manchester
            </span>
          </h2>

          {/* Description */}
          <p className="text-sm leading-relaxed mb-10 max-w-sm" style={{ color: "#B8C0CC" }}>
           Based in Manchester, we provide professional auto body repair services across the surrounding areas. Wherever you are, getting your vehicle to us is easier than you think.
          </p>

          {/* Area Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3">
            {offices.map((office) => {
              const isActive = activeTab === office.id;
              return (
                <button
                  key={office.id}
                  onClick={() => setActiveTab(office.id)}
                  className="flex flex-col items-start gap-1 px-4 py-3 rounded-xl text-left transition-all duration-300 border"
                  style={{
                    background: isActive
                      ? "linear-gradient(135deg, rgba(255,109,0,0.18) 0%, rgba(212,24,122,0.18) 100%)"
                      : "rgba(255,255,255,0.04)",
                    borderColor: isActive ? "rgba(255,109,0,0.55)" : "rgba(255,255,255,0.08)",
                    boxShadow: isActive ? "0 0 18px rgba(255,109,0,0.12)" : "none",
                  }}
                >
                  <div className="flex items-center gap-1.5">
                    <span style={{ color: isActive ? "#FF6D00" : "#B8C0CC", transition: "color 0.3s" }}>
                      <LocationPinIcon />
                    </span>
                    <span className="text-sm font-semibold" style={{ color: isActive ? "#FFFFFF" : "#B8C0CC", transition: "color 0.3s" }}>
                      {office.city}
                    </span>
                  </div>
                  <span
                    className="text-[11px] pl-4.5"
                    style={{ color: isActive ? "rgba(255,184,0,0.8)" : "rgba(184,192,204,0.55)", transition: "color 0.3s" }}
                  >
                    {office.country}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active badge */}
          <div
            className="mt-8 flex items-center gap-2.5 px-4 py-2.5 rounded-xl self-start"
            style={{ background: "rgba(255,109,0,0.1)", border: "1px solid rgba(255,109,0,0.25)" }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#FF6D00" }} />
            <span className="text-xs font-medium" style={{ color: "#FF6D00" }}>
              Viewing: {active.city}
            </span>
          </div>
        </div>

        {/* ── RIGHT PANEL: MAP ── */}
        <div className="flex flex-col w-full lg:w-[55%] min-h-[70vw] sm:min-h-120 lg:min-h-screen">

          {/* Tab pills */}
          <div
            className="flex flex-wrap items-center gap-2 px-4 py-3 shrink-0"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            {offices.map((office) => (
              <button
                key={office.id}
                onClick={() => setActiveTab(office.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap"
                style={{
                  background: activeTab === office.id ? "rgba(255,109,0,0.15)" : "transparent",
                  border: activeTab === office.id ? "1px solid rgba(255,109,0,0.4)" : "1px solid transparent",
                  color: activeTab === office.id ? "#FF6D00" : "rgba(184,192,204,0.6)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{
                    background: activeTab === office.id ? "#FF6D00" : "rgba(184,192,204,0.35)",
                    transition: "background 0.2s",
                  }}
                />
                {office.city}
              </button>
            ))}
          </div>

          {/* Map area */}
          <div className="relative flex-1 overflow-hidden rounded-tl-2xl lg:rounded-tl-3xl" style={{ minHeight: "320px" }}>

            {/* Live OpenStreetMap iframe — key forces re-mount on tab change so pin updates */}
            <iframe
              key={activeTab}
              src={buildMapUrl(active)}
              title={`Map of ${active.city}`}
              width="100%"
              height="100%"
              className="absolute inset-0 border-0"
              style={{
                /* Dark theme: invert then hue-rotate to recover natural greens/blues */
                filter: "invert(0.9) hue-rotate(195deg) saturate(0.9) brightness(0.92)",
                minHeight: "320px",
              }}
              loading="lazy"
              referrerPolicy="no-referrer"
            />

            {/* Left blend */}
            <div
              className="absolute inset-y-0 left-0 w-10 pointer-events-none hidden lg:block"
              style={{ background: "linear-gradient(to right, rgba(8,6,15,0.55), transparent)", zIndex: 2 }}
            />

            {/* Bottom info bar */}
            <div
              className="absolute bottom-0 left-0 right-0 px-5 py-4 flex items-end justify-between pointer-events-none"
              style={{
                background: "linear-gradient(to top, rgba(8,6,15,0.95) 0%, rgba(8,6,15,0.55) 55%, transparent 100%)",
                zIndex: 2,
              }}
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest mb-1" style={{ color: "#FF6D00" }}>
                  Currently viewing
                </p>
                <h3
                  className="font-bold leading-none"
                  style={{ fontSize: "clamp(1.3rem, 3vw, 2rem)", color: "#FFFFFF", letterSpacing: "-0.02em" }}
                >
                  {active.city}
                </h3>
                <p className="text-xs mt-1" style={{ color: "rgba(184,192,204,0.7)" }}>
                  {active.country}
                </p>
              </div>
              <div className="flex flex-col items-end" style={{ color: "rgba(184,192,204,0.7)" }}>
                <span className="text-2xl font-bold" style={{ color: "#FFB800" }}>
                  {offices.length}
                </span>
                <span className="text-[11px]">areas covered</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
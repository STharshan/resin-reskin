// components/ServiceAbout.jsx

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServiceAbout({ data = {}, onCta }) {
  // Safe default — crashes if bullets is undefined otherwise
  const bullets = Array.isArray(data.bullets) ? data.bullets : [];

  return (
    <section
      className="bg-[#1A1917] py-32 relative overflow-hidden border-t border-[#2E2B28]"
    >
      {/* Large decorative background number using Off White at low opacity */}
      <div
        className="absolute right-5 top-5 leading-none select-none pointer-events-none text-[#F2EDE8]"
        style={{
          fontSize: "clamp(120px,18vw,200px)",
          opacity: 0,
          animation: "aboutBgNum .8s .2s forwards",
        }}
      >
        {data.subtitle}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-8">

        {/* Subtitle using Deep Gold */}
        <p
          className="text-[#A8844A] font-bold text-[11px] tracking-[.25em] uppercase mb-4"
          style={{ animation: "aboutSlide .6s .1s both" }}
        >
          / {data.subtitle}
        </p>

        {/* Heading using Off White */}
        <h2
          className="text-[#F2EDE8] mb-10 leading-tight"
          style={{
            fontSize: "clamp(32px,4vw,50px)",
            animation: "aboutFadeUp .7s .2s both",
          }}
        >
          {data.heading}
        </h2>

        {/* Body using Warm Grey */}
        <p
          className="text-[#8C8480] text-[16px] leading-[1.8] font-light mb-12"
          style={{ animation: "aboutFadeUp .7s .3s both" }}
        >
          {data.body}
        </p>

        {/* Bullets using Line color for borders and Warm Gold for diamonds */}
        <ul className="mb-12 space-y-0">
          {bullets.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-5 text-[#F2EDE8] py-[14px] border-b border-[#2E2B28] text-[15px] font-light"
              style={{ animation: `aboutFadeUp .6s ${0.3 + i * 0.1}s both` }}
            >
              <span className="text-[#C9A96E] mt-[6px] text-[10px] flex-shrink-0">◆</span>
              {item}
            </li>
          ))}
        </ul>

        {/* Sub heading using Off White */}
        <h3
          className="text-[#F2EDE8] mb-4 text-[24px] "
          style={{
            animation: "aboutFadeUp .7s .55s both",
          }}
        >
          {data.subHeading}
        </h3>

        {/* Sub body using Warm Grey */}
        <p
          className="text-[#8C8480] text-[14px] leading-[1.8] font-light mb-12 max-w-2xl"
          style={{ animation: "aboutFadeUp .7s .6s both" }}
        >
          {data.subBody}
        </p>

        {/* CTA using Warm Gold & Deep Charcoal */}
        <Link
          to="/#contact"
          className="group inline-flex items-center gap-4 bg-[#C9A96E] text-[#0E0E0E] px-10 py-5 text-[11px] font-bold tracking-[.2em] uppercase hover:bg-[#A8844A] transition-all duration-300 shadow-xl"
          style={{ animation: "aboutFadeUp .7s .7s both" }}
        >
          {data.ctaText}
          <ArrowRight
            size={16}
            strokeWidth={2.5}
            className="transition-transform duration-300 group-hover:translate-x-1.5"
          />
        </Link>
      </div>

      <style>{`
        @keyframes aboutFadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes aboutSlide {
          from { opacity:0; transform:translateX(-18px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes aboutBgNum {
          from { opacity:0; transform:translate(20px,20px); }
          to   { opacity:.04; transform:translate(0,0); }
        }
      `}</style>
    </section>
  );
}
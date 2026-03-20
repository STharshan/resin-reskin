import { useState } from "react";

const testimonials = [
  {
    id: 1,
    quote: "They did an amazing work for us",
    body: "The attention to detail in the venetian plastering was second to none. Our hallway has been transformed into a gallery-like space that feels incredibly premium.",
    name: "Kathie Corl",
    location: "London, UK",
    avatar: "https://i.pravatar.cc/48?img=47",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
  },
  {
    id: 2,
    quote: "Absolutely stunning transformation",
    body: "The team exceeded every expectation. Our space now feels like something out of a magazine, specifically the metallic finish in the lounge. Truly world-class.",
    name: "Marcus Lee",
    location: "Manchester, UK",
    avatar: "https://i.pravatar.cc/48?img=12",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
  },
  {
    id: 3,
    quote: "A truly world-class experience",
    body: "From the initial consultation to the final reveal, every step was seamless. The designers delivered a micro-cement floor that is both durable and beautiful.",
    name: "Sofia Reyes",
    location: "Birmingham, UK",
    avatar: "https://i.pravatar.cc/48?img=32",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80",
  },
];

export default function ClientTestimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="bg-[#221F1C] min-h-screen flex flex-col items-center justify-center px-6 py-20  overflow-hidden border-t border-[#2E2B28]">
      {/* Section Label */}
      <p className="text-[12px] tracking-[0.2em] text-[#A8844A] mb-3  font-bold uppercase">
        / 05
      </p>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F2EDE8] mb-14 text-center tracking-tight leading-tight">
        What our clients say
      </h2>

      {/* Card Area */}
      <div className="relative w-full max-w-5xl flex flex-col lg:flex-row items-center justify-start gap-0">
        {/* Room Image */}
        <div className="w-full lg:w-[58%] aspect-4/3 overflow-hidden shrink-0 z-10 shadow-2xl border border-[#2E2B28]">
          <img
            key={t.image}
            src={t.image}
            alt="Interior design showcase"
            className="w-full h-full object-cover block transition-opacity duration-700 brightness-75 grayscale hover:grayscale-0"
          />
        </div>

        {/* Testimonial Card */}
        <div className="relative lg:absolute right-0 lg:top-1/2 lg:-translate-y-1/2 w-[90%] lg:w-[58%] bg-[#1A1917] border border-[#3A3633] px-8 py-8 md:px-12 md:py-12 shadow-2xl z-20 -mt-12 lg:mt-0">
          {/* Quote icon */}
          <span className="text-6xl text-[#2E2B28]  leading-none select-none absolute top-6 left-8">"</span>

          {/* Quote Headline */}
          <h3 className="text-2xl md:text-3xl font-bold text-[#F2EDE8] mb-6 leading-snug relative z-10">
            {t.quote}
          </h3>

          {/* Body */}
          <p className="text-[15px] md:text-16px text-[#8C8480] leading-relaxed mb-10  font-light italic">
            "{t.body}"
          </p>

          {/* Author */}
          <div className="flex items-center gap-4 border-t border-[#2E2B28] pt-8">
            <img
              src={t.avatar}
              alt={t.name}
              className="w-12 h-12 rounded-full object-cover shrink-0 grayscale border border-[#C9A96E]"
            />
            <div>
              <p className="text-[15px] font-bold text-[#F2EDE8]  m-0 tracking-wide">
                {t.name}
              </p>
              <p className="text-[13px] text-[#A8844A]  m-0 uppercase tracking-widest font-medium">
                {t.location}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="flex gap-3 mt-16">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1.5 transition-all duration-500 rounded-full border-none cursor-pointer p-0 ${
              i === active ? "w-10 bg-[#C9A96E]" : "w-3 bg-[#3A3633] hover:bg-[#5A5652]"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* CTA Button */}
      <a 
        href="/#contact"
        className="mt-16 bg-[#C9A96E] text-[#0E0E0E] rounded-full px-10 py-5 text-sm  font-bold tracking-[0.15em] uppercase cursor-pointer flex items-center gap-3 transition-all duration-300 hover:bg-[#A8844A] hover:scale-105"
      >
        Get in touch
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 6H15M15 6L10 1M15 6L10 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </section>
  );
}
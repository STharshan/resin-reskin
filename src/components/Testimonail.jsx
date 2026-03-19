import { useState } from "react";

const testimonials = [
  {
    id: 1,
    quote: "They did an amazing work for us",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit cilisis pretium leo pellentesque ultricos est varius amet rhoncus sed euismod sit id purus elementum nulla tincidunt massa vol.",
    name: "Kathie Corl",
    location: "Brooklyn, New York",
    avatar: "https://i.pravatar.cc/48?img=47",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
  },
  {
    id: 2,
    quote: "Absolutely stunning transformation",
    body: "The team exceeded every expectation. Our space now feels like something out of a magazine, and we couldn't be happier with the attention to detail and craftsmanship.",
    name: "Marcus Lee",
    location: "Manhattan, New York",
    avatar: "https://i.pravatar.cc/48?img=12",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
  },
  {
    id: 3,
    quote: "A truly world-class experience",
    body: "From the initial consultation to the final reveal, every step was seamless. The designers listened and delivered something that felt uniquely ours.",
    name: "Sofia Reyes",
    location: "Austin, Texas",
    avatar: "https://i.pravatar.cc/48?img=32",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80",
  },
];

export default function ClientTestimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="bg-[#f0ede8] min-h-screen flex flex-col items-center justify-center px-6 py-20 font-serif">
      {/* Section Label */}
      <p className="text-xs tracking-[0.18em] text-gray-400 mb-3 font-sans uppercase">
        / 05
      </p>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-14 text-center tracking-tight leading-tight">
        What our clients say
      </h2>

      {/* Card Area */}
      <div className="relative w-full max-w-5xl flex items-center justify-start">
        {/* Room Image */}
        <div className="w-[58%] aspect-[4/3] rounded-md overflow-hidden shrink-0 z-10 shadow-xl">
          <img
            src={t.image}
            alt="Interior design"
            className="w-full h-full object-cover block transition-opacity duration-500"
          />
        </div>

        {/* Testimonial Card */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[58%] bg-white rounded-xl px-10 py-10 shadow-2xl z-20">
          {/* Quote icon */}
          <span className="text-5xl text-gray-200 font-serif leading-none select-none">"</span>

          {/* Quote Headline */}
          <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-snug -mt-3">
            {t.quote}
          </h3>

          {/* Body */}
          <p className="text-[15px] text-gray-500 leading-relaxed mb-8 font-sans">
            "{t.body}"
          </p>

          {/* Author */}
          <div className="flex items-center gap-4">
            <img
              src={t.avatar}
              alt={t.name}
              className="w-12 h-12 rounded-full object-cover shrink-0 ring-2 ring-gray-100"
            />
            <div>
              <p className="text-[15px] font-bold text-gray-900 font-sans m-0">
                {t.name}
              </p>
              <p className="text-[13px] text-gray-400 font-sans m-0">
                {t.location}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="flex gap-2 mt-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full border-none cursor-pointer p-0 transition-all duration-300 ${
              i === active ? "w-7 bg-gray-900" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* CTA Button */}
      <button className="mt-14 bg-gray-900 text-white border-none rounded-full px-10 py-5 text-base font-sans font-medium tracking-wide cursor-pointer flex items-center gap-3 transition-colors duration-200 hover:bg-gray-700">
        Get in touch <span className="text-xl">→</span>
      </button>
    </section>
  );
}
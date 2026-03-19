import React from "react";

const TestimonialsSection = () => {
  return (
    <section id="testimonial" className="bg-[#08060F] px-4 py-16 transition-colors">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text Side */}
        <div data-aos="fade-right">
          <div className="mb-4 flex space-x-2">
            {/* Using Sunset Orange for the accent line */}
            <span className="w-6 h-px bg-[#FF6D00] rotate-135 mt-3"></span>
            <span className="text-[#B8C0CC] uppercase text-sm tracking-widest font-bold">
              raving reviews
            </span>
          </div>
          {/* Deep Purple used for the brand emphasis */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-snug text-white">
            THOUSANDS OF <br />
            <span className="text-[#7C2FC0]">HAPPY CUSTOMERS</span>
          </h2>
          <div className="flex items-center gap-4 mt-2 md:mt-0" data-aos="fade-up" data-aos-delay="200">
            {/* Rating Box with Chrome Gold border/accents */}
            <div className="flex items-center gap-2 border border-[#7C2FC0]/30 px-5 py-2 rounded-full bg-[#08060F]">
              {/* Stars in Chrome Gold */}
              <div className="flex text-[#FFB800] text-sm space-x-1">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              {/* Score and Reviews in Alloy Silver */}
              <span className="text-[#B8C0CC] text-sm">5.0/5.0</span>
              <span className="px-3 py-1 rounded-full text-[#B8C0CC] text-xs border-l border-white/10 ml-2">
                31 Reviews
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
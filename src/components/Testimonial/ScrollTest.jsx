import React from "react";
import { testimonials } from "../Testimonial/TestimonialData";

const ScrollingTestimonials = () => {
  return (
    <section
      className="relative bg-[#08060F] py-20 overflow-hidden"
      data-aos="fade-up"
    >
      {/* Left Shadow - Matching Midnight Background */}
      <div className="absolute left-0 top-0 h-full w-24 bg-linear-to-r from-[#08060F] to-transparent pointer-events-none z-10"></div>

      {/* Right Shadow - Matching Midnight Background */}
      <div className="absolute right-0 top-0 h-full w-24 bg-linear-to-l from-[#08060F] to-transparent pointer-events-none z-10"></div>

      <div className="w-[200%] animate-scroll flex space-x-6">
        {[...testimonials, ...testimonials].map((t, index) => (
          <div
            key={index}
            className="min-w-75 sm:min-w-88 md:min-w-100 bg-white/5 border border-[#7C2FC0]/20 text-[#B8C0CC] p-8 rounded-2xl shadow-xl backdrop-blur-sm"
          >
            {/* Quote with Brand Silver */}
            <p className="text-base md:text-lg mb-6 italic leading-relaxed  font-medium">
              "{t.quote}"
            </p>
            
            {/* Author with Chrome Gold */}
            <div className="flex items-center gap-2">
               <div className="w-1 h-4 bg-[#FF6D00] rounded-full"></div>
               <p className="font-bold text-sm uppercase tracking-widest text-[#FFB800] ">
                 {t.author}
               </p>
            </div>
          </div>
        ))}
      </div>

      <style jsx="true">{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ScrollingTestimonials;
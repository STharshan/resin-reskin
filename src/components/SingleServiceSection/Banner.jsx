import React from "react";
import { ArrowRight } from "lucide-react";

const cardImageUrl =
  "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1600&auto=format&fit=crop";

const Banner = () => {
  return (
    <section className="bg-[#08060F] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-center">

        {/* Main Card */}
        <div
          className="relative w-full max-w-6xl aspect-video md:aspect-2/1 overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl transition-all duration-300 bg-cover bg-center bg-no-repeat group"
          style={{ backgroundImage: `url(${cardImageUrl})` }}
        >

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-tr from-[#08060F]/90 via-[#08060F]/40 to-[#08060F]/10 transition-opacity duration-500 group-hover:opacity-70"></div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 p-8 md:p-12 lg:p-16 max-w-2xl z-10 space-y-3 sm:space-y-4 md:space-y-6">

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white leading-tight">
              Get Your Free <br /> Repair Quote
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-[#B8C0CC] max-w-xl opacity-90 leading-relaxed">
              Quick, transparent pricing with no obligation.
            </p>

            {/* Button */}
            <a
              href="#"
              className="inline-flex items-center bg-[#FF6D00] text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold hover:bg-[#D4187A] transition-colors shadow-lg"
            >
              <span className="mr-2">Ask on WhatsApp</span>

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
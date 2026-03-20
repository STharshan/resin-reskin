import React from "react";

export default function FindUs() {
  return (
    <section
      className="py-24 px-6 bg-[#221F1C] border-t border-[#2E2B28] transition-colors duration-500"
      id="find-us"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading Label */}
        <p
          className="text-[#C9A96E]  font-bold tracking-[0.2em] mb-4 uppercase text-sm"
        >
          / 07 Find Us
        </p>

        <h2
          className="text-4xl md:text-5xl  font-extrabold text-[#F2EDE8] mb-12 tracking-tight"
        >
          Visit Our Workshop Location
        </h2>

        {/* Map Container */}
        <div
          className="rounded-2xl overflow-hidden shadow-2xl border border-[#3A3633] bg-[#1A1917] w-full h-113 relative"
        >
          {/* Subtle Overlay to blend the map slightly with the dark theme */}
          <div className="absolute inset-0 pointer-events-none border-12 border-[#1A1917] z-10 rounded-2xl"></div>
          
          <iframe
            title="Workshop Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.857504382062!2d-0.12775829999999997!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c38c8cd1d9%3A0x48839974e8306237!2sTrafalgar%20Square!5e0!3m2!1sen!2suk!4v1710900000000!5m2!1sen!2suk" 
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full grayscale-[0.3] contrast-[1.1] brightness-[0.8] hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
import React from "react";

const HeroSection = () => {
    return (
        <section className="relative bg-[#08060F]  h-screen flex flex-col overflow-hidden ">
            <div className="mt-10 w-[95%]  mx-auto rounded-4xl"></div>
            {/* Background Image */}
            <img
                src="https://framerusercontent.com/images/LmQpQxrCvAgtMxoBkA6UJXf6QA.webp"
                alt="Porsche Interior"
                className="absolute inset-0 w-[95%]  mx-auto rounded-4xl h-full object-cover"
            />

            

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-12 mt-auto">
                <div className="max-w-2xl">

                    <a href="/services" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6">
                        Services
                    </a>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl text-white leading-none mb-6">
                        Full Diagnostics
                    </h1>

                    <p className="text-[#B8C0CC] mb-8 max-w-lg">
                        Full system scan using advanced tools. Detects hidden issues early with clear recommendations.
                    </p>

                    <a
                        href="https://www.whatsapp.com/"
                        className="inline-block bg-white text-[#08060F] px-8 py-4 rounded-xl font-bold hover:bg-[#FFB800]"
                    >
                        ASK ON WHATSAPP
                    </a>

                </div>
            </div>

        </section>
    );
};

export default HeroSection;
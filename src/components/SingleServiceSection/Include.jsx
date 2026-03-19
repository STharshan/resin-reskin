import React from "react";

const Card = ({ title, description, imgSrc }) => (
  <div className="flex flex-col bg-[#08060F] rounded-2xl overflow-hidden shadow-lg border border-[#7C2FC0]/20 hover:border-[#FF6D00] transition-all duration-300">
    <img src={imgSrc} alt={title} className="w-full h-64 object-cover" />

    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

      <p className="text-[#B8C0CC] leading-relaxed">
        {description}
      </p>

      <div className="mt-4 h-1 w-12 bg-[#FFB800] rounded"></div>
    </div>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      title: "Engine Scan",
      description:
        "Reads fault codes and analyzes overall system performance.",
      imgSrc: "/path-to-image1.jpg",
    },
    {
      title: "Electrical Check",
      description:
        "Detects sensor faults and module communication issues reliably.",
      imgSrc: "/path-to-image2.jpg",
    },
    {
      title: "Safety Review",
      description:
        "Evaluates brakes, suspension, and key mechanical parts thoroughly.",
      imgSrc: "/path-to-image3.jpg",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-[#08060F]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white mb-4">
            What's Included
          </h2>

          <p className="text-[#B8C0CC] text-lg">
            Full diagnostic coverage for every essential system.
          </p>

          <div className="mx-auto mt-4 h-1 w-24 bg-[#FF6D00] rounded"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
import React from "react";

const Card = ({ title, description, imgSrc }) => (
  <div className="flex flex-col bg-[#08060F] rounded-2xl overflow-hidden shadow-lg border border-[#7C2FC0]/20 hover:border-[#FF6D00] transition-all duration-300">
    <img src={imgSrc} alt={title} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-[#B8C0CC] leading-relaxed">{description}</p>
      <div className="mt-4 h-1 w-12 bg-[#FFB800] rounded"></div>
    </div>
  </div>
);

const WhatsIncluded = ({ data }) => {
  const { heading, subheading, items } = data;

  return (
    <section className="py-20 px-4 md:px-8 bg-[#08060F]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white mb-4">{heading}</h2>
          <p className="text-[#B8C0CC] text-lg">{subheading}</p>
          <div className="mx-auto mt-4 h-1 w-24 bg-[#FF6D00] rounded"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;
import React from "react";

const PricingCard = ({ title, description, price, duration, features, popular }) => (
  <div
    className={`relative rounded-2xl p-8 flex flex-col justify-between border transition-all duration-300 ${
      popular
        ? "bg-[#08060F] border-[#7C2FC0] scale-[1.03] shadow-lg"
        : "bg-[#08060F] border-[#B8C0CC]/20"
    }`}
  >
    {popular && (
      <span className="absolute top-5 right-5 text-xs px-3 py-1 rounded-full bg-[#D4187A] text-white">
        Popular
      </span>
    )}

    <div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-[#B8C0CC] mt-1 mb-6 text-sm">{description}</p>

      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl font-bold text-[#FFB800]">${price}</span>
        <span className="text-[#B8C0CC] text-sm">| {duration}</span>
      </div>

      <p className="text-[#FF6D00] font-medium mb-3">Includes:</p>
      <ul className="space-y-2 text-[#B8C0CC] text-sm">
        {features.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>

    <button className="mt-8 w-full py-3 rounded-xl font-semibold text-white bg-[#FF6D00] hover:bg-[#D4187A] transition-all">
      Ask on WhatsApp
    </button>
  </div>
);

const PricingSection = ({ data }) => {
  const { heading, subheading, plans } = data;

  return (
    <section className="py-20 px-4 bg-[#08060F]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{heading}</h2>
        <p className="text-[#B8C0CC] mb-14">{subheading}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
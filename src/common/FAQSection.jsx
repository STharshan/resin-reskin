import React from "react";
import { Plus } from "lucide-react";

const FaqItem = ({ question }) => (
  <div className="flex items-center justify-between gap-4 p-5 rounded-[14px] bg-[#08060F] border border-[rgba(184,192,204,0.25)] cursor-pointer transition-colors duration-200 hover:border-[#7C2FC0]">
    <span className="text-white text-[15px] font-medium leading-6">{question}</span>
    <div className="w-8 h-8 min-w-9 rounded-full border border-[rgba(184,192,204,0.35)] flex items-center justify-center text-[#B8C0CC]">
      <Plus size={16} />
    </div>
  </div>
);

const FAQSection = ({ data }) => {
  const {
    heading,
    headingHighlight,
    subheading,
    ctaLabel,
    ctaHref,
    itemsLeft,
    itemsRight,
  } = data;

  return (
    <section className="bg-[#08060F] py-16 px-4">
      <div className="max-w-280 mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-[48px] font-extrabold text-white leading-[1.15] tracking-[-1px] mb-4">
            {heading} <br />
            <span className="text-[#7C2FC0]">{headingHighlight}</span>
          </h2>
          <p className="text-[#B8C0CC] text-[15px] leading-6 mb-7">{subheading}</p>
          <a
            href={ctaHref}
            className="inline-block bg-[#7C2FC0] text-white py-3 px-8 rounded-xl text-[14px] font-semibold"
          >
            {ctaLabel}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-10">
          <div className="flex flex-col gap-4">
            {itemsLeft.map((item, i) => (
              <FaqItem key={i} question={item} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {itemsRight.map((item, i) => (
              <FaqItem key={i} question={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
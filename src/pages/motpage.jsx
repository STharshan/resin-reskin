import React from "react";
import HeroSection from "../common/HeroSection";
import BenefitsSection from "../common/BenefitsSection";
import WhatsIncluded from "../common/WhatsIncluded";
import PricingSection from "../common/PricingSection";
import TestimonialSection from "../common/TestimonialSection";
import RepairCases from "../common/RepairCases";
import Banner from "../common/Banner";
import FAQSection from "../common/FAQSection";

// Switch this import to change which service is shown
import motServiceData from "../data/mot.js";

const motPage = () => {
  return (
    <div>
      <HeroSection data={motServiceData.hero} />
      <BenefitsSection data={motServiceData.benefits} />
      <WhatsIncluded data={motServiceData.included} />
      <PricingSection data={motServiceData.pricing} />
      <TestimonialSection data={motServiceData.testimonials} />
      <RepairCases data={motServiceData.repairCases} />
      <Banner data={motServiceData.banner} />
      <FAQSection data={motServiceData.faq} />
    </div>
  );
};

export default motPage;
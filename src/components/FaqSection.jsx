import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const faqData = [
  {
    question: "How long will my repair take?",
    answer: "Most repairs are completed the same day or within 24 hours depending on the extent of the damage. Scratches and minor dents can often be turned around in just a few hours. We'll always give you a clear timeframe when you book so you're never left guessing."
  },
  {
    question: "Do you offer a guarantee on your repairs?",
    answer: "Yes. Every repair we carry out comes with a 100% Satisfaction Guarantee. If you're not completely happy with the result, we'll make it right. That's a promise we stand behind on every single job."
  },
  {
    question: "Can you match my car's exact paint colour?",
    answer: "Absolutely. We use professional paint-matching technology to ensure the repaired area blends seamlessly with the rest of your vehicle. Whether your car is a standard colour or a custom finish, the result will be indistinguishable from the original."
  },
  {
    question: "Do I need to go through my insurance?",
    answer: "Not at all. Many of our customers choose to pay directly to avoid affecting their no-claims bonus. Our prices are kept fair and affordable specifically so that going through insurance isn't always necessary. We'll give you a transparent quote upfront so you can make the best decision for your situation."
  },
  {
    question: "How do I get a quote?",
    answer: "Getting a quote is simple and completely free. You can call us, message us on WhatsApp (+44 7440 366913), fill in the contact form on this page, or send us a photo of the damage via email. We aim to respond to all enquiries as quickly as possible."
  },
  {
    question: "Do you offer a price match guarantee?",
    answer: "Yes. If you've received a like-for-like quote from another reputable bodywork specialist, bring it to us and we'll match it. We believe you should never have to choose between quality and cost — with us, you get both."
  },
  {
    question: "What types of vehicles do you work on?",
    answer: "We work on all makes and models — from everyday hatchbacks and family cars to prestige vehicles and vans. Whatever you drive, our team has the experience and equipment to handle the repair to the highest standard."
  },
  {
    question: "Where are you located and do you have parking?",
    answer: "We're based at Unit 10, Orchard Trading Estate, Langley Road South, Manchester. Our workshop is easily accessible and has on-site parking available, so dropping your vehicle off is completely hassle-free."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#08060F] py-12 md:py-24 px-6 md:px-12 lg:px-24 min-h-screen">
      <div className="max-w-360 mx-auto w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-24 items-start">
          
          {/* Left Column: Headline - Sticky on both Mobile and Desktop */}
          <div className="flex flex-col gap-4 md:gap-6 sticky top-0 md:top-32 bg-[#08060F] z-20 py-6 md:py-0 w-full border-b border-white/5 md:border-none">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#FF6D00]" />
              <span className="text-[#B8C0CC] text-sm  tracking-widest uppercase">
                FAQ
              </span>
            </div>
            <h2 className="text-[2.5rem] md:text-[4.5rem] lg:text-[6rem] text-white leading-[0.9] tracking-normal">
             Questions, <br className="hidden md:block" />
              <span className="text-[#7C2FC0] italic block text-[1.8rem] md:text-[3.5rem] lg:text-[4.5rem]">
                Answered With Honesty
              </span>
            </h2>
          </div>

          {/* Right Column: Accordion - Scrolls while heading stays fixed */}
          <div className="flex flex-col gap-4 w-full pt-4 md:pt-0">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className={`group border transition-all duration-300 rounded-2xl overflow-hidden ${
                  openIndex === index 
                    ? 'border-[#7C2FC0] bg-[#7C2FC0]/5' 
                    : 'border-white/5 bg-white/5 hover:border-[#FF6D00]/30'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 md:p-8 text-left transition-colors"
                >
                  <span className={`text-lg md:text-2xl font-semibold tracking-wide transition-colors duration-300 ${
                    openIndex === index ? 'text-[#FFB800]' : 'text-[#B8C0CC]'
                  }`}>
                    {faq.question}
                  </span>
                  
                  <div className={`shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
                    openIndex === index ? 'bg-[#FF6D00] rotate-45 shadow-[0_0_20px_rgba(255,109,0,0.4)]' : 'bg-white/5'
                  }`}>
                    <Plus size={18} className={openIndex === index ? 'text-[#08060F]' : 'text-[#FF6D00]'} />
                  </div>
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 md:px-8 pb-8">
                    <p className="text-[#B8C0CC] text-base md:text-lg leading-relaxed max-w-[95%] font-medium">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
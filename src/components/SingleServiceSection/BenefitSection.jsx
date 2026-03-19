import React from 'react';
import { Search, ShieldAlert, BadgeDollarSign, Car } from 'lucide-react';

const benefits = [
  { icon: Search, title: "Find Issues Early", desc: "Catch issues early." },
  { icon: ShieldAlert, title: "Damage Prevention", desc: "Avoid major repairs." },
  { icon: BadgeDollarSign, title: "Cost Savings", desc: "Reduce repair costs long-term." },
  { icon: Car, title: "Safer Driving", desc: "Smoother, safer performance." },
];

const BenefitsSection = () => {
  return (
    <section className="bg-[#08060F] py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl  text-white mb-4">
            Essential for Your Vehicle
          </h2>
          <p className=" text-[#B8C0CC] text-lg md:text-xl">
            Detect issues early and prevent expensive repairs.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-8 rounded-2xl border border-white/10 bg-[#16141D] hover:border-[#FF6D00] transition-colors"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-xl mb-6">
                  <Icon size={32} className="text-[#08060F]" />
                </div>
                <h3 className=" text-2xl text-white mb-2 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className=" text-[#B8C0CC]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
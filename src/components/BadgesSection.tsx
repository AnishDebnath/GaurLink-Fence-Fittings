import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Globe2 } from 'lucide-react';

export const BadgesSection: React.FC = () => {
  const badges = [
    {
      title: 'ISO 9001:2015',
      subtitle: 'Certified Company',
      detail: 'International Quality Management Standard for manufacturing fence hardware & fittings.',
      icon: <ShieldCheck className="w-8 h-8 text-[#133E2B]" />,
      seal: 'VERIFIED ISO',
    },
    {
      title: '55 Years of Growth',
      subtitle: '1969 – 2024',
      detail: 'Over 5 decades of continuous metallurgical engineering and export reliability.',
      icon: <Award className="w-8 h-8 text-[#133E2B]" />,
      seal: 'EST. 1969',
    },
    {
      title: '100% Zero Defects',
      subtitle: 'Quality Assurance',
      detail: 'Comprehensive pre-dispatch dimensional inspection, tensile pull tests & zinc coating checks.',
      icon: <CheckCircle2 className="w-8 h-8 text-[#133E2B]" />,
      seal: 'ZERO DEFECTS',
    },
    {
      title: 'Govt. Export Excellence',
      subtitle: 'Engineering Awards',
      detail: 'Recognized for outstanding engineering goods export performance serving 4 continents.',
      icon: <Globe2 className="w-8 h-8 text-[#133E2B]" />,
      seal: 'EEPC RECOGNIZED',
    },
  ];

  return (
    <section className="py-12 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((b, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#F8FAF7] border border-[#D5DDD2] rounded-xl flex flex-col items-center text-center relative group hover:border-[#133E2B]/50 transition-colors"
            >
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#133E2B] bg-[#EAF2EC] px-2.5 py-0.5 rounded-full mb-4">
                {b.seal}
              </span>

              <div className="w-14 h-14 rounded-full bg-white border border-[#CBD5E1] shadow-2xs flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                {b.icon}
              </div>

              <h3 className="text-lg font-bold text-gray-900 leading-tight">
                {b.title}
              </h3>
              <span className="text-xs font-semibold text-[#133E2B] block mt-0.5">
                {b.subtitle}
              </span>

              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                {b.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

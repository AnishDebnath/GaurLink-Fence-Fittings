import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { IMAGES } from '../../data/images';

interface WhyChooseUsProps {
  onOpenSchedule: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenSchedule }) => {
  const points = [
    'DIRECT WHOLESALE BULK RATES ACROSS THE USA',
    'HOT-DIP GALVANIZED ASTM A153 HARDWARE',
    'IN-HOUSE TOOL & DIE PRECISION STAMPING',
  ];

  return (
    <section id="why-choose-us" className="py-16 sm:py-20 lg:py-24 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Framed Photo matching reference image layout */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg aspect-[4/4.5] sm:aspect-[4/4.2] rounded-[32px] overflow-hidden border-[2.5px] border-[#1C1C1C] shadow-md bg-gray-100">
              <img
                src={IMAGES.aboutUsGaurlink}
                alt="GaurLink USA fence and fittings manufacturing"
                className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column: Eyebrow pill, Headline, Description, 3 Checkmarks, and Pill CTA */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6 lg:space-y-6">
            
            {/* Pill Badge: • WHY CHOOSE US */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-800 text-[12px] font-bold tracking-wider text-gray-900 uppercase font-sans">
              <span className="w-2 h-2 rounded-full bg-[#0D3823]"></span>
              <span>WHY CHOOSE GAURLINK</span>
            </div>

            {/* Display Headline - Reduced size to fit cleanly in 2 lines */}
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] font-black uppercase text-gray-900 tracking-tight leading-[1.12] font-sans max-w-xl">
              PRECISION FENCE &amp; FITTINGS<br />
              MANUFACTURING AT WHOLESALE RATES
            </h2>

            {/* Description matching reference copy */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal max-w-lg">
              GaurLink is a USA-based fence and fittings manufacturing company. We supply high-grade chain link fittings, commercial gate hardware, and custom-stamped perimeter components at direct factory wholesale rates to supply yards and contractors nationwide.
            </p>

            {/* 3 Checkmarked items with website color theme */}
            <div className="space-y-3.5 w-full pt-1">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0D3823] text-[#E5A912] flex items-center justify-center shrink-0 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-black uppercase text-gray-900 tracking-wide">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Pill Button with circle arrow on left matching website theme */}
            <div className="pt-2">
              <button
                onClick={onOpenSchedule}
                className="h-[50px] sm:h-[52px] inline-flex items-center gap-3 bg-[#0D3823] hover:bg-[#072416] text-white font-black text-xs sm:text-sm uppercase tracking-wider pl-2 pr-6 sm:pr-7 rounded-full shadow-lg hover:shadow-xl transition-all transform active:scale-95 group border border-emerald-600/30 ring-1 ring-[#E5A912]/20 cursor-pointer"
                id="why-choose-us-cta"
              >
                <span className="w-8 h-8 rounded-full bg-[#E5A912] text-[#0D3823] font-black flex items-center justify-center group-hover:translate-x-0.5 transition-transform shadow-xs shrink-0">
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </span>
                <span className="whitespace-nowrap">REQUEST WHOLESALE QUOTE</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

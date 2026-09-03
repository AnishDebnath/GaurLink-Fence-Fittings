import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { IMAGES } from '../../data/images';

interface ConversionBannerProps {
  onOpenSchedule: () => void;
}

export const ConversionBanner: React.FC<ConversionBannerProps> = ({ onOpenSchedule }) => {
  return (
    <section className="relative bg-white pt-10 sm:pt-16 pb-0">
      {/* Background split: Top half is white (from above section), bottom half is dark green (matches footer below) */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#071910] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[22px] sm:rounded-[28px] overflow-hidden bg-[#0A2618] text-white shadow-2xl border border-emerald-500/20 min-h-[310px] sm:min-h-[350px] flex items-center justify-center p-6 sm:p-12 text-center">
          
          {/* Background Fence Craftsman Image with Gaur Green Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={IMAGES.installerWork || IMAGES.hero}
              alt="Professional Fence Repair Craftsman"
              className="w-full h-full object-cover object-center filter brightness-40 contrast-115"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071910]/95 via-[#0A2618]/90 to-[#071910]/95" />
          </div>

          {/* Content matching exact layout and typography */}
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white tracking-tight leading-[1.15] font-sans drop-shadow-md">
              NEED FENCE REPAIR FAST?
              <br />
              WE’RE READY TO THE HELP
            </h2>

            <p className="text-sm sm:text-[15px] text-emerald-100/90 leading-relaxed max-w-xl mx-auto font-normal">
              Protect your home or business with professional fence repair solutions designed last. We make the process simple, affordable, and stress-free from start to finish.
            </p>

            {/* Buttons Row matching exact image layout with website theme colors */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
              {/* Primary Schedule Button (Website Gold/Amber Capsule) */}
              <button
                onClick={onOpenSchedule}
                className="h-[48px] sm:h-[50px] inline-flex items-center gap-2.5 bg-[#E5A912] hover:bg-[#D89A08] text-[#071910] font-black text-xs sm:text-sm uppercase tracking-wider pl-3 pr-6 rounded-full shadow-lg transition-all transform active:scale-95 group cursor-pointer border border-[#E5A912]/40"
                id="cta-schedule-btn"
              >
                <span className="w-6 h-6 rounded-full bg-[#0D3823] text-[#E5A912] font-black flex items-center justify-center group-hover:translate-x-0.5 transition-transform shadow-xs shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span className="whitespace-nowrap">SCHEDULE SERVICE</span>
              </button>

              {/* Secondary Phone Button (White Capsule) */}
              <a
                href="tel:7208053155"
                className="h-[48px] sm:h-[50px] inline-flex items-center gap-2.5 bg-white hover:bg-gray-100 text-gray-950 font-black text-xs sm:text-sm uppercase tracking-wider px-6 rounded-full shadow-md transition-all group shrink-0 cursor-pointer"
                id="cta-phone-btn"
              >
                <Phone className="w-4 h-4 text-[#0D3823] fill-current" />
                <span className="whitespace-nowrap">(720) 805-3155</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};



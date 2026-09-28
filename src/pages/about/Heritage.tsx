import { motion } from 'motion/react';
import { assetUrl } from '../../lib/cdn';
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const Heritage: React.FC = () => {
  return (
    <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px 0px -60px 0px' }} transition={{ duration: 0.6, ease: 'easeOut' }} className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-300 bg-white text-[11px] sm:text-xs font-bold tracking-wider text-gray-800 uppercase font-sans shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#E5A912]"></span>
              <span>MANUFACTURING SINCE 1969</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black uppercase tracking-tight text-[#0D3823] leading-[1.1] font-sans">
              Who We Are &amp; <span className="text-[#E5A912]">Our Heritage</span>
            </h2>

            <p className="text-sm sm:text-base font-bold text-gray-900 leading-relaxed">
              With over 55 years of manufacturing excellence, our group has produced more than 150 million fence fittings across four continents with an uncompromising zero-defects policy.
            </p>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              We specialize in Pressed Steel, Malleable Iron, and Aluminum Fence Fittings &amp; Tension Bars — all hot-dip galvanized or powder-coated for superior durability. As a trusted industry name and FENCETECH exhibitor for over 30 years, we serve US supply yards and contractors with container and pallet volume shipments.
            </p>

            {/* 4 Core Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs font-bold text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-[#0D3823] shrink-0" />
                <span>ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-[#0D3823] shrink-0" />
                <span>FENCETECH 30+ Yrs Exhibitor</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-[#0D3823] shrink-0" />
                <span>100% Zero Defects Policy</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-[#0D3823] shrink-0" />
                <span>Custom Tool &amp; Die Stamping</span>
              </div>
            </div>
          </div>

          {/* Right Column: Plant & Facility Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-xl border-[2.5px] border-[#1C1C1C] bg-gray-900 aspect-[4/4.2] w-full max-w-md lg:max-w-none group">
              <img loading="lazy" decoding="async"
                src={assetUrl('About-us-home-page.jpg')}
                alt="GaurLink Manufacturing Facility"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Bottom 4 Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-10 sm:mt-14">
          <div className="bg-[#0D3823] text-white rounded-[24px] p-5 sm:p-6 shadow-lg border border-emerald-900/80 flex flex-col justify-between transition-all hover:-translate-y-0.5">
            <span className="text-2xl sm:text-3xl lg:text-[36px] font-black text-white tracking-tight leading-none mb-2">
              55+
            </span>
            <span className="text-xs sm:text-[12px] font-bold text-emerald-100 uppercase tracking-wide">
              Years Heritage (Since 1969)
            </span>
          </div>

          <div className="bg-[#F2F7F4] text-[#0D3823] rounded-[24px] p-5 sm:p-6 shadow-xs border border-emerald-900/10 flex flex-col justify-between transition-all hover:-translate-y-0.5">
            <span className="text-2xl sm:text-3xl lg:text-[36px] font-black text-[#0D3823] tracking-tight leading-none mb-2">
              150M+
            </span>
            <span className="text-xs sm:text-[12px] font-bold text-gray-700 uppercase tracking-wide">
              Pieces Manufactured
            </span>
          </div>

          <div className="bg-[#F2F7F4] text-[#0D3823] rounded-[24px] p-5 sm:p-6 shadow-xs border border-emerald-900/10 flex flex-col justify-between transition-all hover:-translate-y-0.5">
            <span className="text-2xl sm:text-3xl lg:text-[36px] font-black text-[#0D3823] tracking-tight leading-none mb-2">
              100%
            </span>
            <span className="text-xs sm:text-[12px] font-bold text-gray-700 uppercase tracking-wide">
              Zero Defects Policy
            </span>
          </div>

          <div className="bg-[#F2F7F4] text-[#0D3823] rounded-[24px] p-5 sm:p-6 shadow-xs border border-emerald-900/10 flex flex-col justify-between transition-all hover:-translate-y-0.5">
            <span className="text-2xl sm:text-3xl lg:text-[36px] font-black text-[#0D3823] tracking-tight leading-none mb-2">
              30+ Yrs
            </span>
            <span className="text-xs sm:text-[12px] font-bold text-gray-700 uppercase tracking-wide">
              FENCETECH Exhibitor
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

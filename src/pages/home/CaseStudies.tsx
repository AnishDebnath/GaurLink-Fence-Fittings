import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { IMAGES } from '../../data/images';

export const CaseStudies: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const projects = [
    {
      id: 'distributor-pallet-supply',
      title: 'DISTRIBUTION YARD BULK SUPPLY',
      tag: 'GAURLINK • WHOLESALE SUPPLY',
      image: IMAGES.gateRepair,
      alt: 'GaurLink wholesale pallet shipment and fence fittings',
      desc: 'Bulk container supply of malleable iron hinges and chain link hardware for national distributors.',
    },
    {
      id: 'drill-installation',
      title: 'ASTM A153 CHAIN LINK FITTINGS',
      tag: 'GAURLINK • HARDWARE SPEC',
      image: IMAGES.drillRepair,
      alt: 'ASTM A153 galvanized hardware and post caps',
      desc: 'Full pallet orders of line post caps, tension bands, and rail ends for commercial perimeter installations.',
    },
    {
      id: 'hero-worker',
      title: 'COMMERCIAL 180° GATE HINGE KITS',
      tag: 'GAURLINK • ACCESS HARDWARE',
      image: IMAGES.hero,
      alt: 'GaurLink commercial gate hinge installation',
      desc: 'Heavy-duty pressed steel offset hinges and industrial drop rods for high-traffic facility gates.',
    },
    {
      id: 'garden-picket-alignment',
      title: 'CUSTOM DIE-STAMPED CLAMPS',
      tag: 'GAURLINK • OEM TOOLING',
      image: IMAGES.workerBlue,
      alt: 'Custom die-stamped line post clamps',
      desc: 'Proprietary post clamps and brackets engineered in our tool & die division for commercial fence OEMs.',
    },
    {
      id: 'post-finishing',
      title: 'INDUSTRIAL CANTILEVER ROLLERS',
      tag: 'GAURLINK • SLIDE GATE SYSTEMS',
      image: IMAGES.installerWork,
      alt: 'Industrial cantilever gate roller assemblies',
      desc: 'Heavy-duty nylon and steel cantilever rollers with sealed bearings supplied at factory direct rates.',
    },
  ];

  const visibleCount = 3;
  const maxIndex = projects.length - visibleCount;

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const currentProjects = projects.slice(startIndex, startIndex + visibleCount);

  return (
    <section id="case-studies" className="py-16 sm:py-20 lg:py-24 bg-[#071910] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-emerald-500/40 bg-[#0D3823]/80 text-[12px] sm:text-[13px] font-bold tracking-wider text-emerald-100 uppercase font-sans shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#E5A912]"></span>
            <span>WHOLESALE SUPPLY CASE STUDIES</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-black uppercase text-white tracking-tight leading-[1.08] font-sans">
            MANUFACTURING &amp; SUPPLY IN ACTION
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm max-w-xl mx-auto font-normal leading-relaxed">
            Supplying commercial fence supply yards, regional distributors, and perimeter security contractors across the USA with ASTM-certified hardware at direct wholesale rates.
          </p>
        </div>

        {/* Carousel with Navigation Arrows & Non-Scrolling Responsive Grid */}
        <div className="relative px-0 sm:px-4 lg:px-6">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute -left-2 sm:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#0D3823] hover:bg-[#072416] text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all border border-emerald-500/40 focus:outline-none cursor-pointer"
            aria-label="Previous case studies"
            id="case-studies-prev"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute -right-2 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#E5A912] hover:bg-[#d89a08] text-[#071910] flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all focus:outline-none cursor-pointer"
            aria-label="Next case studies"
            id="case-studies-next"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
          </button>

          {/* Cards Grid: Clean Responsive Grid that fits 100% within container width */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {currentProjects.map((item, idx) => (
              <div
                key={item.id}
                className="group relative rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#0D3823]/40 border-2 border-emerald-900/60 hover:border-[#E5A912] transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                {/* Photo */}
                <div className="relative w-full aspect-[4/4.6] sm:aspect-[4/4.5] overflow-hidden bg-gray-900">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#071910]/90 text-[#E5A912] text-[10px] sm:text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full border border-emerald-500/30 shadow-md backdrop-blur-xs">
                      Case Study 0{startIndex + idx + 1}
                    </span>
                  </div>

                  {/* Dark gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Bottom Floating White Info Card */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-20">
                    <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-2xl flex items-center justify-between border-l-4 border-[#0D3823]">
                      <div className="text-left pr-3">
                        <div className="text-[10px] sm:text-[11px] font-black uppercase text-[#E5A912] tracking-wider font-sans leading-tight">
                          {item.tag}
                        </div>
                        <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-tight text-gray-900 font-sans mt-0.5 leading-snug">
                          {item.title}
                        </h3>
                      </div>

                      {/* Gold Circular Arrow Button */}
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#E5A912] group-hover:bg-[#0D3823] group-hover:text-[#E5A912] text-[#071910] flex items-center justify-center shrink-0 shadow-md transition-all group-hover:scale-105">
                        <ArrowRight className="w-4 h-4 stroke-[3]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Indicator Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-8 sm:mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setStartIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                startIndex === idx
                  ? 'w-8 bg-[#E5A912]'
                  : 'w-2.5 bg-emerald-900/80 hover:bg-emerald-700 border border-emerald-700/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

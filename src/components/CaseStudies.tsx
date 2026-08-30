import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../data/images';

export const CaseStudies: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(2); // Center card (Hero) is active by default

  const projects = [
    {
      id: 'wood-craft-prep',
      title: 'FENCE REPAIR WORKS',
      tag: 'FENCEFIX',
      image: IMAGES.gateRepair,
      alt: 'Fence craftsman preparing lumber',
    },
    {
      id: 'drill-installation',
      title: 'FENCE REPAIR WORKS',
      tag: 'FENCEFIX',
      image: IMAGES.drillRepair,
      alt: 'Electric drill securing fence pickets',
    },
    {
      id: 'hero-worker',
      title: 'FENCE REPAIR WORKS',
      tag: 'FENCEFIX',
      image: IMAGES.hero,
      alt: 'Fence specialist in hard hat and safety vest installing fence',
      isDefaultFeatured: true,
    },
    {
      id: 'garden-picket-alignment',
      title: 'FENCE REPAIR WORKS',
      tag: 'FENCEFIX',
      image: IMAGES.workerBlue,
      alt: 'Technician aligning garden fence pickets',
    },
    {
      id: 'post-finishing',
      title: 'FENCE REPAIR WORKS',
      tag: 'FENCEFIX',
      image: IMAGES.installerWork,
      alt: 'Fence installer finishing fence perimeter',
    },
  ];

  return (
    <section id="case-studies" className="py-16 sm:py-20 lg:py-24 bg-[#071910] text-white relative overflow-hidden">
      <div className="relative z-10 w-full">
        {/* Section Header matching reference image */}
        <div className="text-center max-w-4xl mx-auto px-4 space-y-4 mb-12 sm:mb-16">
          {/* Eyebrow Pill Badge: • REAL PROJECTS. REAL RESULTS. with brand theme */}
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-emerald-500/40 bg-[#0D3823]/80 text-[12px] sm:text-[13px] font-bold tracking-wider text-emerald-100 uppercase font-sans shadow-sm backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-[#E5A912]"></span>
            <span>REAL PROJECTS. REAL RESULTS.</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl lg:text-[46px] font-black uppercase text-white tracking-tight leading-[1.08] font-sans">
            OUR FENCE INSTALLATION CASE STUDIES
          </h2>
        </div>

        {/* 5-Card Panoramic Carousel matching the reference image layout */}
        <div className="relative w-full overflow-x-auto lg:overflow-hidden pb-4 no-scrollbar">
          <div className="flex items-center justify-start lg:justify-center gap-4 sm:gap-6 px-4 sm:px-6 min-w-max lg:min-w-0 mx-auto max-w-[1440px]">
            {projects.map((item, idx) => {
              const isSelected = activeSlide === idx;
              // First and last items are edge peekers on desktop
              const isEdge = idx === 0 || idx === 4;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`group relative rounded-[20px] sm:rounded-[24px] overflow-hidden cursor-pointer transition-all duration-300 select-none bg-[#0D3823]/50 ${
                    isEdge
                      ? 'w-[140px] sm:w-[180px] lg:w-[170px] h-[340px] sm:h-[400px] lg:h-[430px] opacity-70 hover:opacity-90 shrink-0 border border-emerald-900/40'
                      : isSelected
                      ? 'w-[230px] sm:w-[280px] lg:w-[315px] h-[340px] sm:h-[400px] lg:h-[430px] opacity-100 shrink-0 shadow-2xl ring-2 ring-[#E5A912]/80 z-20'
                      : 'w-[230px] sm:w-[280px] lg:w-[315px] h-[340px] sm:h-[400px] lg:h-[430px] opacity-90 hover:opacity-100 shrink-0 shadow-xl border border-emerald-900/50'
                  }`}
                >
                  {/* Photo */}
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gentle gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Active Slide Bottom Floating Banner matching reference layout */}
                  {isSelected && (
                    <div className="absolute bottom-4 sm:bottom-6 left-3 sm:left-4 right-3 sm:right-4 z-20 animate-fadeIn">
                      <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl flex items-center justify-between border-l-4 border-[#0D3823]">
                        <div className="text-left pr-2">
                          <div className="text-[11px] sm:text-[12px] font-black uppercase text-[#E5A912] tracking-wider font-sans leading-tight">
                            {item.tag}
                          </div>
                          <div className="text-xs sm:text-[14px] font-black uppercase tracking-tight text-[#111111] font-sans mt-0.5 whitespace-nowrap">
                            {item.title}
                          </div>
                        </div>

                        {/* Orange / Gold Circular Arrow Button */}
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#E5A912] hover:bg-[#D89A08] text-[#0D3823] flex items-center justify-center shrink-0 shadow-md transition-transform group-hover:scale-105">
                          <ArrowRight className="w-4 h-4 stroke-[3]" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 3 Pagination Indicator Dots matching reference */}
        <div className="flex items-center justify-center gap-2.5 mt-8 sm:mt-10">
          <button
            onClick={() => setActiveSlide(1)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSlide === 1 ? 'bg-[#E5A912] scale-110' : 'bg-emerald-900/80 hover:bg-emerald-700 border border-emerald-700/50'
            }`}
            aria-label="Previous case studies"
          />
          <button
            onClick={() => setActiveSlide(2)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSlide === 2 ? 'bg-[#E5A912] scale-110' : 'bg-emerald-900/80 hover:bg-emerald-700 border border-emerald-700/50'
            }`}
            aria-label="Featured case study"
          />
          <button
            onClick={() => setActiveSlide(3)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSlide === 3 ? 'bg-[#E5A912] scale-110' : 'bg-emerald-900/80 hover:bg-emerald-700 border border-emerald-700/50'
            }`}
            aria-label="Next case studies"
          />
        </div>
      </div>
    </section>
  );
};


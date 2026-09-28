import React, { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SHOWCASE_SERVICES } from '../../data/services';

interface ServicesShowcaseProps {
  onSelectService?: (serviceName: string) => void;
  onOpenSchedule: () => void;
}

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({
  onSelectService,
  onOpenSchedule,
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const [disableTransition, setDisableTransition] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const services = useMemo(() => SHOWCASE_SERVICES, []);

  // Triple set of items for continuous seamless loop animation
  const extendedServices = useMemo(() => [...services, ...services, ...services], [services]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    if (startIndex <= 0) {
      setDisableTransition(true);
      setStartIndex(services.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setDisableTransition(false);
          setStartIndex(services.length - 1);
        });
      });
    } else {
      setDisableTransition(false);
      setStartIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    setDisableTransition(false);
    setStartIndex((prev) => prev + 1);
  };

  // Auto-advance one by one continuously in an infinite forward loop
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setDisableTransition(false);
      setStartIndex((prev) => prev + 1);
    }, 1800);
    return () => clearInterval(timer);
  }, [isPaused]);

  const stepPercent = isMobile ? 100 : 33.333333;

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-white text-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching reference image layout */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-12 sm:mb-16">
          {/* Eyebrow Pill Badge: • WHAT WE MANUFACTURE */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-800 text-[12px] font-bold tracking-wider text-gray-900 uppercase font-sans">
            <span className="w-2 h-2 rounded-full bg-[#0D3823]"></span>
            <span>WHAT WE MANUFACTURE</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black uppercase text-gray-900 tracking-tight leading-[1.1] font-sans">
            FENCE FITTINGS &amp; HARDWARE
          </h2>
          
          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto font-normal">
            Pressed steel, malleable iron, and aluminum fence fittings. Custom sheet metal made to your exact specs.
          </p>
        </div>

        {/* Carousel Container with Left & Right Navigation Buttons */}
        <div
          className="relative px-0 sm:px-6 lg:px-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute -left-2 sm:-left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#111827] text-white flex items-center justify-center shadow-xl hover:bg-black hover:scale-105 active:scale-95 transition-all focus:outline-none cursor-pointer"
            aria-label="Previous services"
            id="services-carousel-prev"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute -right-2 sm:-right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#0D3823] hover:bg-[#072416] text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 ring-2 ring-[#E5A912]/40 transition-all focus:outline-none cursor-pointer"
            aria-label="Next services"
            id="services-carousel-next"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Smooth Sliding Cards Track */}
          <div className="overflow-hidden w-full py-4 -my-4">
            <motion.div
              className="flex items-stretch"
              animate={{ x: `-${startIndex * stepPercent}%` }}
              transition={
                disableTransition
                  ? { duration: 0 }
                  : {
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }
              }
              onAnimationComplete={() => {
                if (startIndex >= services.length) {
                  setDisableTransition(true);
                  setStartIndex(startIndex % services.length);
                }
              }}
            >
              {extendedServices.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={`${service.id}-${idx}`}
                    className="w-full md:w-1/3 shrink-0 px-3 lg:px-4 flex flex-col"
                  >
                    <div
                      className="group cursor-pointer flex flex-col h-full"
                      onClick={() => {
                        if (onSelectService) onSelectService(service.title);
                        onOpenSchedule();
                      }}
                    >
                      {/* Photo Container with rounded corners */}
                      <div className="relative w-full aspect-[4/4.5] sm:aspect-[4/4.4] rounded-[24px] overflow-hidden bg-gray-100 shadow-md">
                        <img loading="lazy" decoding="async"
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        
                        {/* Dark gradient at bottom for contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                        {/* Overlapping White Box at Bottom matching reference layout */}
                        <div className="absolute bottom-0 left-3 right-3 sm:left-4 sm:right-4 bg-white rounded-t-2xl rounded-b-lg p-4 sm:p-5 pt-7 sm:pt-8 shadow-xl border-b-4 border-[#0D3823] group-hover:border-[#E5A912] transition-colors">
                          
                          {/* Floating Circle Icon Badge on top left of white card */}
                          <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-[#F4F9F5] border border-emerald-200/80 text-[#0D3823] flex items-center justify-center shadow-md group-hover:bg-[#0D3823] group-hover:text-white group-hover:border-[#0D3823] transition-all">
                            <Icon className="w-5 h-5 stroke-[2.2]" />
                          </div>

                          {/* Product Name */}
                          <h3 className="text-base sm:text-lg font-black uppercase text-gray-900 tracking-tight leading-tight group-hover:text-[#0D3823] transition-colors text-left font-sans line-clamp-1">
                            {service.title}
                          </h3>

                          {/* Size Tag (Website Theme: Deep Green + Amber Accent) & Category */}
                          <div className="mt-3 flex items-center justify-between gap-2 border-t border-gray-100 pt-2.5">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D3823] text-white text-[11px] sm:text-[12px] font-bold shadow-xs border border-emerald-600/30 ring-1 ring-[#E5A912]/20">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#E5A912] shrink-0" />
                              <span className="whitespace-nowrap">{service.sizesAvailable}</span>
                            </div>
                            <span className="text-[10px] sm:text-[11px] text-gray-500 font-bold uppercase tracking-wider truncate">
                              {service.category}
                            </span>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Wrench, Shield, Drill, Hammer, Lock, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { IMAGES } from '../../data/images';

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

  const services = useMemo(() => [
    {
      id: 'barbed-arm-cup',
      title: 'BARBED ARM (CUP TYPE)',
      image: IMAGES.productBarbedArmCup,
      icon: Shield,
      tag: 'High Security',
      category: 'Perimeter Security',
      sizesAvailable: '3 Sizes Available',
      desc: 'Cup-type barbed arm for 3-strand barbed wire security tops.',
    },
    {
      id: 'cantilever-roller',
      title: 'CANTILEVER GATE ROLLER',
      image: IMAGES.productCantileverRoller,
      icon: Wrench,
      tag: 'Heavy Duty',
      category: 'Gate Hardware',
      sizesAvailable: '4 Sizes Available',
      desc: 'Nylon cantilever roller assembly with pressed steel cover for heavy slide gates.',
    },
    {
      id: 'brace-band',
      title: 'BRACE BAND (3/4" X 12 GA)',
      image: IMAGES.productBraceBand,
      icon: Layers,
      tag: 'Best Seller',
      category: 'Commercial Hardware',
      sizesAvailable: '8 Sizes Available',
      desc: 'Regular brace band 3/4 inch 12 gauge galvanized steel for chain link fencing.',
    },
    {
      id: 'box-hinge',
      title: 'BOX HINGE (PRESSED STEEL)',
      image: IMAGES.productBoxHingeSteel,
      icon: Lock,
      tag: 'Heavy Duty',
      category: 'Gate Hardware',
      sizesAvailable: '5 Sizes Available',
      desc: 'Pressed steel box hinge for commercial gate installations.',
    },
    {
      id: 'boulevard-clamp',
      title: 'BOULEVARD CLAMP (14 & 16 GA)',
      image: IMAGES.productBoulevardClamp,
      icon: Hammer,
      tag: 'Line Rail Clamp',
      category: 'Line Rail Hardware',
      sizesAvailable: '6 Sizes Available',
      desc: 'Boulevard line rail clamp available in 14 GA and 16 GA for secure rail connections.',
    },
    {
      id: 'barbed-arm-vertical',
      title: 'VERTICAL BARBED ARM (16 GA)',
      image: IMAGES.productBarbedArmVertical,
      icon: Shield,
      tag: 'High Security',
      category: 'Perimeter Security',
      sizesAvailable: '3 Sizes Available',
      desc: 'Vertical barbed arm 16 gauge pressed steel for perimeter security extensions.',
    },
    {
      id: 'post-cap',
      title: 'POST CAP (PRESSED STEEL)',
      image: IMAGES.productPostCapSteel,
      icon: Layers,
      tag: 'Pressed Steel',
      category: 'Terminal Fittings',
      sizesAvailable: '7 Sizes Available',
      desc: 'Pressed steel post cap for chain link fence terminal and line posts.',
    },
    {
      id: 'carriage-bolt',
      title: 'CARRIAGE BOLT & NUT',
      image: IMAGES.productCarriageBolt,
      icon: Drill,
      tag: 'ASTM Fasteners',
      category: 'Hardware & Fasteners',
      sizesAvailable: '6 Sizes Available',
      desc: 'Galvanized carriage bolt and nut for fence fitting assembly.',
    },
    {
      id: 'rail-end',
      title: 'RAIL END (1 HOLE)',
      image: IMAGES.productRailEnd1Hole,
      icon: Wrench,
      tag: 'ASTM A153',
      category: 'Line Rail Fittings',
      sizesAvailable: '5 Sizes Available',
      desc: 'Pressed steel rail end with 1 hole for top rail and line rail connections.',
    },
    {
      id: 'sleeve-top-rail',
      title: 'TOP RAIL SLEEVE',
      image: IMAGES.productSleeveTopRail,
      icon: Lock,
      tag: 'Commercial',
      category: 'Rail Hardware',
      sizesAvailable: '4 Sizes Available',
      desc: 'Sleeve top rail fitting for secure horizontal rail-to-post connections.',
    },
  ], []);

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
                        <img
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

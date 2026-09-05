import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Wrench, Shield, Drill, Hammer, Lock, Layers } from 'lucide-react';
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

  const services = [
    {
      id: 'barbed-arm-cup',
      title: 'BARBED ARM CUP TYPE',
      image: IMAGES.productBarbedArmCup,
      icon: Shield,
      category: 'High Security',
      desc: 'Cup-type barbed arm for 3-strand barbed wire security tops.',
    },
    {
      id: 'cantilever-roller',
      title: 'CANTILEVER ROLLER NYLON PRESSED STEEL',
      image: IMAGES.productCantileverRoller,
      icon: Wrench,
      category: 'Gate Hardware',
      desc: 'Nylon cantilever roller assembly with pressed steel cover for heavy slide gates.',
    },
    {
      id: 'brace-band',
      title: 'BRACE BAND REGULAR 3/4 X 12 GA',
      image: IMAGES.productBraceBand,
      icon: Layers,
      category: 'Commercial Hardware',
      desc: 'Regular brace band 3/4 inch 12 gauge galvanized steel for chain link fencing.',
    },
    {
      id: 'box-hinge',
      title: 'BOX HINGE PRESS STEEL',
      image: IMAGES.productBoxHinge,
      icon: Lock,
      category: 'Gate Hardware',
      desc: 'Pressed steel box hinge for commercial gate installations.',
    },
    {
      id: 'boulevard-clamp',
      title: 'BOULEVARD CLAMP 14 GA & 16 GA',
      image: IMAGES.productBoulevardClamp,
      icon: Hammer,
      category: 'Line Rail Clamp',
      desc: 'Boulevard line rail clamp available in 14 GA and 16 GA for secure rail connections.',
    },
    {
      id: 'barbed-arm-vertical',
      title: 'BARBED ARM VERTICAL 16 GA',
      image: IMAGES.productBarbedArmVertical,
      icon: Shield,
      category: 'High Security',
      desc: 'Vertical barbed arm 16 gauge pressed steel for perimeter security extensions.',
    },
    {
      id: 'post-cap',
      title: 'POST CAP PRESSED STEEL',
      image: IMAGES.productPostCap,
      icon: Layers,
      category: 'Fittings',
      desc: 'Pressed steel post cap for chain link fence terminal and line posts.',
    },
    {
      id: 'carriage-bolt',
      title: 'CARRIAGE BOLT & NUT',
      image: IMAGES.productCarriageBolt,
      icon: Drill,
      category: 'Fasteners',
      desc: 'Galvanized carriage bolt and nut for fence fitting assembly.',
    },
    {
      id: 'rail-end',
      title: 'RAIL END 1 HOLE PRESSED STEEL',
      image: IMAGES.productRailEnd,
      icon: Wrench,
      category: 'Fittings',
      desc: 'Pressed steel rail end with 1 hole for top rail and line rail connections.',
    },
    {
      id: 'sleeve-top-rail',
      title: 'SLEEVE TOP RAIL',
      image: IMAGES.productSleeveTopRail,
      icon: Lock,
      category: 'Fittings',
      desc: 'Sleeve top rail fitting for secure horizontal rail-to-post connections.',
    },
  ];

  const visibleCount = 3;
  const maxIndex = services.length - visibleCount;

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const currentServices = services.slice(startIndex, startIndex + visibleCount);

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-white text-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching reference image layout */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          {/* Eyebrow Pill Badge: • WHAT WE MANUFACTURE */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-800 text-[12px] font-bold tracking-wider text-gray-900 uppercase font-sans">
            <span className="w-2 h-2 rounded-full bg-[#0D3823]"></span>
            <span>WHAT WE MANUFACTURE</span>
          </div>

          {/* Heading matching reference typography */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black uppercase text-gray-900 tracking-tight leading-[1.08] font-sans">
            WHOLESALE FENCE &amp; FITTINGS<br />
            MANUFACTURED IN HIGH VOLUME
          </h2>
        </div>

        {/* Carousel Container with Left & Right Navigation Buttons */}
        <div className="relative px-0 sm:px-6 lg:px-10">
          
          {/* Left Arrow Button (Dark circle matching image) */}
          <button
            onClick={handlePrev}
            className="absolute -left-2 sm:-left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#111827] text-white flex items-center justify-center shadow-xl hover:bg-black hover:scale-105 active:scale-95 transition-all focus:outline-none"
            aria-label="Previous services"
            id="services-carousel-prev"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Right Arrow Button (Website theme color #0D3823 with gold ring) */}
          <button
            onClick={handleNext}
            className="absolute -right-2 sm:-right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#0D3823] hover:bg-[#072416] text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 ring-2 ring-[#E5A912]/40 transition-all focus:outline-none"
            aria-label="Next services"
            id="services-carousel-next"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Cards Grid matching reference layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {currentServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group cursor-pointer flex flex-col"
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

                      {/* Card Title */}
                      <h3 className="text-base sm:text-lg font-black uppercase text-gray-900 tracking-tight leading-tight group-hover:text-[#0D3823] transition-colors text-left font-sans">
                        {service.title}
                      </h3>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

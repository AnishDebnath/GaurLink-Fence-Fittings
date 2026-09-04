import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../../data/images';

export const CaseStudies: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isMouseDownRef = useRef(false);
  const isHoveredRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const [isDraggingState, setIsDraggingState] = useState(false);

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
    {
      id: 'plant-manufacturing',
      title: 'PRECISION HARDWARE BATCH RUNS',
      tag: 'GAURLINK • FACTORY PRODUCTION',
      image: IMAGES.manufacturingPlant,
      alt: 'Factory production line and galvanized hardware',
      desc: 'Automated progressive stamping and heavy hot-dip zinc immersion meeting ASTM A153 thickness standards.',
    },
  ];

  // Quadruple items for infinite auto-scrolling and unrestricted 2-way dragging
  const loopedProjects = [...projects, ...projects, ...projects, ...projects];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Center the scroll position initially so backward dragging is immediately possible
    const initialOffset = container.scrollWidth / 4;
    if (container.scrollLeft === 0) {
      container.scrollLeft = initialOffset;
    }

    let animationFrameId: number;
    const speed = 0.85; // Smooth automatic scroll speed (px/frame)

    const animate = () => {
      if (container && !isMouseDownRef.current && !isHoveredRef.current) {
        container.scrollLeft += speed;

        const setLength = container.scrollWidth / 4;
        if (container.scrollLeft >= setLength * 2.5) {
          container.scrollLeft -= setLength;
        } else if (container.scrollLeft <= setLength * 0.5) {
          container.scrollLeft += setLength;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isMouseDownRef.current = true;
    setIsDraggingState(true);
    startXRef.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftRef.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDownRef.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftRef.current - walk;

    const setLength = scrollRef.current.scrollWidth / 4;
    if (scrollRef.current.scrollLeft >= setLength * 2.5) {
      scrollRef.current.scrollLeft -= setLength;
      scrollLeftRef.current -= setLength;
    } else if (scrollRef.current.scrollLeft <= setLength * 0.5) {
      scrollRef.current.scrollLeft += setLength;
      scrollLeftRef.current += setLength;
    }
  };

  const handleMouseUpOrLeave = () => {
    isMouseDownRef.current = false;
    setIsDraggingState(false);
  };

  // Touch event support for mobile dragging
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    isMouseDownRef.current = true;
    setIsDraggingState(true);
    startXRef.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
    scrollLeftRef.current = scrollRef.current.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMouseDownRef.current || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftRef.current - walk;

    const setLength = scrollRef.current.scrollWidth / 4;
    if (scrollRef.current.scrollLeft >= setLength * 2.5) {
      scrollRef.current.scrollLeft -= setLength;
      scrollLeftRef.current -= setLength;
    } else if (scrollRef.current.scrollLeft <= setLength * 0.5) {
      scrollRef.current.scrollLeft += setLength;
      scrollLeftRef.current += setLength;
    }
  };

  const handleTouchEnd = () => {
    isMouseDownRef.current = false;
    setIsDraggingState(false);
  };

  return (
    <section id="case-studies" className="py-16 sm:py-20 lg:py-24 bg-[#071910] text-white relative overflow-hidden select-none">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-10 sm:mb-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
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
      </div>

      {/* Automatic & Draggable Cards Track */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => {
          isHoveredRef.current = true;
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false;
          handleMouseUpOrLeave();
        }}
      >
        {/* Soft edge fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 sm:w-16 lg:w-24 bg-gradient-to-r from-[#071910] to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 sm:w-16 lg:w-24 bg-gradient-to-l from-[#071910] to-transparent z-20" />

        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className={`flex gap-5 sm:gap-7 px-4 sm:px-8 lg:px-12 py-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${
            isDraggingState ? 'cursor-grabbing select-none' : 'cursor-grab'
          }`}
        >
          {loopedProjects.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="group relative w-[280px] sm:w-[340px] lg:w-[380px] shrink-0 rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#0D3823]/40 border-2 border-emerald-900/60 hover:border-[#E5A912] transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              {/* Photo */}
              <div className="relative w-full aspect-[4/4.6] sm:aspect-[4/4.5] overflow-hidden bg-gray-900">
                <img
                  src={item.image}
                  alt={item.alt}
                  draggable={false}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 pointer-events-none select-none"
                />

                {/* Dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                {/* Bottom Floating White Info Card with Title Upper Tag */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-20 pointer-events-none">
                  <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-2xl flex items-center justify-between border-l-4 border-[#0D3823]">
                    <div className="text-left pr-3 min-w-0">
                      <div className="text-[10px] sm:text-[11px] font-black uppercase text-[#E5A912] tracking-wider font-sans leading-tight truncate">
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
    </section>
  );
};

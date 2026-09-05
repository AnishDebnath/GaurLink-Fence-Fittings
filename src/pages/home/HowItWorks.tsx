import React, { useState, useEffect, useRef } from 'react';
import { IMAGES } from '../../data/images';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const timerRef = useRef<number | undefined>(undefined);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2000);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const steps = [
    {
      num: '01',
      title: 'SUBMIT SPECIFICATIONS & RFQ',
      desc: 'Send your part numbers, quantities, pipe diameters, or custom CAD drawings directly to our wholesale trade desk.',
      image: IMAGES.wholesaleProcess1,
    },
    {
      num: '02',
      title: 'ITEMIZED FACTORY QUOTE',
      desc: 'Receive transparent tiered wholesale pricing for pallet and container volumes within 12–24 business hours.',
      image: IMAGES.wholesaleProcess2,
    },
    {
      num: '03',
      title: 'HIGH-TONNAGE PRODUCTION',
      desc: 'Components are stamped, forged, and hot-dip galvanized to ASTM A153 with strict in-house quality inspection.',
      image: IMAGES.wholesaleProcess3,
    },
    {
      num: '04',
      title: 'DDP NATIONWIDE FREIGHT',
      desc: 'Your order is packaged in reinforced crates or banded pallets and delivered directly to your commercial dock across the USA.',
      image: IMAGES.wholesaleProcess4,
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-white text-gray-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading matching reference UI */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          {/* Eyebrow Pill Badge: • HOW IT WORKS */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-800 text-[12px] font-bold tracking-wider text-gray-900 uppercase font-sans">
            <span className="w-2 h-2 rounded-full bg-[#0D3823]"></span>
            <span>HOW IT WORKS</span>
          </div>

          {/* Heading in 2 bold lines */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black uppercase text-gray-900 tracking-tight leading-[1.08] font-sans">
            STREAMLINED WHOLESALE SUPPLY<br />
            FROM PRODUCTION TO YOUR YARD
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Framed Photo matching active step */}
          <div className="lg:col-span-5 relative flex justify-center pl-4 sm:pl-8 lg:pl-4">
            <div className="relative w-full max-w-[420px] aspect-[4/4.7] rounded-[32px] overflow-hidden shadow-sm bg-gray-100">
              <img
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                className="w-full h-full object-cover object-center transition-opacity duration-300"
              />
            </div>

            {/* Overlapping Floating Dark Badge with White Border on the Left Edge */}
            <div className="absolute top-[20%] -left-1 sm:-left-6 lg:-left-6 bg-[#222222] text-white rounded-[20px] p-5 sm:p-6 w-[170px] sm:w-[195px] shadow-2xl border-[1.5px] border-white z-20 select-none">
              <div className="text-5xl sm:text-[54px] font-black text-white leading-none tracking-tight font-sans">
                55+
              </div>
              <div className="text-[13px] sm:text-[14.5px] font-medium text-white leading-snug mt-3 font-sans">
                Years of Fence<br />
                Hardware Supply<br />
                Direct to Yards
              </div>
            </div>
          </div>

          {/* Right Column: 4 Step Cards matching reference image layout */}
          <div className="lg:col-span-7 flex flex-col space-y-3.5 sm:space-y-4">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => { setActiveStep(idx); resetTimer(); }}
                  className={`rounded-xl sm:rounded-2xl px-5 sm:px-7 py-4.5 sm:py-5 transition-all duration-200 flex items-center gap-5 sm:gap-6 cursor-pointer select-none ${isActive
                    ? 'bg-white border-[1.5px] border-[#0D3823] shadow-xs'
                    : 'bg-[#F8F9FB] border-[1.5px] border-transparent hover:bg-[#EFF1F5]'
                    }`}
                >
                  {/* Large Number matching reference geometry & vertical centering */}
                  <div
                    className={`text-4xl sm:text-[46px] font-black tracking-tight shrink-0 w-14 sm:w-16 leading-none font-sans text-center sm:text-left ${isActive ? 'text-[#0D3823]' : 'text-[#2D2D2D]'
                      }`}
                  >
                    {step.num}
                  </div>

                  {/* Content: Title & Description */}
                  <div className="flex-1 text-left">
                    <h3 className="text-sm sm:text-[16px] font-black uppercase text-[#1C1C1C] tracking-tight leading-snug font-sans">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#555E68] leading-relaxed font-normal mt-1 max-w-xl">
                      {step.desc}
                    </p>
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


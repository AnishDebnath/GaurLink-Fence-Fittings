import React from 'react';
import { Factory, ShieldCheck, Cog, Gauge, Anchor, Flame } from 'lucide-react';
import plantImage from '../assets/images/manufacturing_plant_1788071733745.jpg';

export const ManufacturingSection: React.FC = () => {
  const capabilities = [
    {
      icon: <Flame className="w-5 h-5 text-[#133E2B]" />,
      title: 'In-House Hot-Dip Galvanizing',
      desc: 'Our automated zinc dipping kettles ensure full internal and external coating coverage complying with ASTM A153 standards for superior atmospheric rust prevention.',
    },
    {
      icon: <Cog className="w-5 h-5 text-[#133E2B]" />,
      title: 'Die & Mold Development Center',
      desc: 'Our dedicated in-house tooling division engineers custom hard dies for stamping, bending, and punching custom fence hardware directly from client blueprints.',
    },
    {
      icon: <Gauge className="w-5 h-5 text-[#133E2B]" />,
      title: 'Metallurgical & Testing Lab',
      desc: 'Equipped with calibrated tensile test benches, salt-spray corrosion chambers, and digital coating thickness gauges to guarantee 100% zero-defect compliance.',
    },
    {
      icon: <Anchor className="w-5 h-5 text-[#133E2B]" />,
      title: 'Direct Ocean Freight & DDP Logistics',
      desc: 'We coordinate end-to-end containerized freight, customs clearance, and Delivered Duty Paid (DDP) logistics directly to your yard in the United States.',
    },
  ];

  return (
    <section id="infrastructure" className="py-16 lg:py-24 bg-[#F8FAF7] border-b border-[#E2E8F0] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#133E2B] bg-[#EAF2EC] px-3 py-1 rounded-full inline-block mb-3">
            PLANT &amp; INFRASTRUCTURE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B221E] tracking-tight leading-tight">
            Engineered for Consistency. Built for the Real World.
          </h2>
          <p className="text-base text-gray-600 mt-3">
            Our 20,000 SQFT state-of-the-art manufacturing facility brings heavy stamping, precision tooling, galvanizing, and quality testing under one roof for complete manufacturing oversight.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Factory Floor Photo with Spec Highlights */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#D5DDD2] bg-white">
              <img
                src={plantImage}
                alt="Gaur Link 20,000 SQFT Modern Manufacturing Facility"
                className="w-full h-auto object-cover aspect-[4/3] hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Metric Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-gray-200 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#133E2B]">
                      PLANT SPECIFICATION
                    </span>
                    <h4 className="text-sm font-bold text-gray-900 mt-0.5">
                      20,000 SQFT. Advanced Facility
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-gray-800 bg-[#EAF2EC] text-[#133E2B] px-2.5 py-1 rounded-md">
                      ISO 9001:2015
                    </span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  High-tonnage mechanical stamping presses, CNC wire benders &amp; dedicated testing laboratory.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Key Capabilities */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-[#D5DDD2] shadow-xs hover:border-[#133E2B]/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#F0F5F2] border border-[#D5DDD2] flex items-center justify-center mb-4">
                    {cap.icon}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Quality Statement Box */}
            <div className="p-4 bg-[#EFF5F1] rounded-xl border border-[#C5DDCB] flex items-center gap-4">
              <ShieldCheck className="w-8 h-8 text-[#133E2B] shrink-0" />
              <div className="text-xs text-[#133E2B]">
                <strong className="block text-sm font-bold text-[#133E2B]">
                  100% Zero-Defects Guarantee
                </strong>
                Every production run undergoes strict dimensional validation, pull-force verification, and zinc thickness testing before container loading.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

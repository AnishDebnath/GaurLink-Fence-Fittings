import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Wrench, PackageCheck, Layers } from 'lucide-react';
import hardwareCatalogImg from '../assets/images/fence_hardware_catalog_1788071714440.jpg';

interface AboutPreviewProps {
  onLearnMore: () => void;
}

export const AboutPreview: React.FC<AboutPreviewProps> = ({ onLearnMore }) => {
  return (
    <section className="py-16 lg:py-24 bg-[#F8FAF7] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Industrial Hardware Photo with Overlaid Quality Stamp */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#D5DDD2] bg-white">
              <img
                src={hardwareCatalogImg}
                alt="Precision Galvanized Steel Fence Fittings and Hardware Catalog"
                className="w-full h-auto object-cover aspect-[4/3] hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Credential Overlay on image */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-gray-200 shadow-md flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#133E2B]">
                    MANUFACTURING SPECIFICATION
                  </span>
                  <p className="text-xs font-bold text-gray-900 mt-0.5">
                    ASTM A153 Galvanized • ASTM F626 Fittings
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-[#133E2B] px-2 py-1 bg-[#EAF2EC] rounded">
                    100% Inspected
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -top-5 -left-4 hidden sm:flex items-center gap-3 bg-[#133E2B] text-white py-2.5 px-4 rounded-xl shadow-lg border border-[#1E583F]">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center font-bold text-base text-[#86EFAC]">
                55+
              </div>
              <div className="text-left">
                <span className="text-xs font-bold block leading-tight">Years of Excellence</span>
                <span className="text-[10px] text-gray-300 block">Founded 1969</span>
              </div>
            </div>
          </div>

          {/* Right Column: Company Story & Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#133E2B] bg-[#EAF2EC] px-3 py-1 rounded-full inline-block mb-3">
                ABOUT GAUR LINK
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B221E] tracking-tight leading-tight">
                Precision Fittings. Reliable Connections.
              </h2>
            </div>

            <p className="text-base text-gray-600 leading-relaxed">
              Founded in 1969, Gaur Link has grown into a world-class manufacturer of pressed steel, malleable iron, and aluminum fence fittings, industrial gate hardware, and tension bars. With over 150 million components delivered across four continents, we provide American fencing professionals and distributors with unmatched durability and consistency.
            </p>

            <p className="text-sm text-gray-600 leading-relaxed">
              Our 20,000 sq.ft state-of-the-art facility integrates in-house hot-dip galvanizing, precision tool and die development, metallurgical testing labs, and high-tonnage stamping presses. This vertically integrated control ensures every hinge, bracket, and clamp meets rigorous ASTM performance specifications with zero compromise.
            </p>

            {/* Feature Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#133E2B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Direct Factory Sourcing</h4>
                  <p className="text-xs text-gray-500">Eliminate distributor middle-margins</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#133E2B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Delivered Duty Paid (DDP)</h4>
                  <p className="text-xs text-gray-500">Door-to-door shipping to your US yard</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#133E2B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">In-House Galvanizing</h4>
                  <p className="text-xs text-gray-500">Uniform zinc thickness per ASTM A153</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#133E2B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Custom Die &amp; Tooling</h4>
                  <p className="text-xs text-gray-500">Custom fabrication per contractor CAD</p>
                </div>
              </div>
            </div>

            {/* CTA Button to About Page */}
            <div className="pt-4">
              <button
                onClick={onLearnMore}
                className="px-6 py-3.5 bg-[#133E2B] hover:bg-[#0D2B1E] text-white text-sm font-bold uppercase tracking-wider rounded-lg shadow-sm hover:shadow transition-all inline-flex items-center gap-2 group cursor-pointer"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Store, Building2, ShieldAlert, Wrench } from 'lucide-react';

interface ApplicationsSectionProps {
  onRequestQuote: () => void;
}

export const ApplicationsSection: React.FC<ApplicationsSectionProps> = () => {
  const applications = [
    {
      icon: <Store className="w-6 h-6 text-[#0D3823]" />,
      title: 'Fence Distributors & Supply Yards',
      subtitle: 'Bulk Pallets & Container Supply',
      description:
        'Container-load and multi-pallet supply programs with standardized barcoding, master cartons, and guaranteed wholesale rate schedules to maximize distributor margins.',
      fittings: ['Male Gate Hinges', 'Pressed Steel Clamps', 'Tension Bands', 'Corner Post Caps'],
    },
    {
      icon: <Building2 className="w-6 h-6 text-[#0D3823]" />,
      title: 'Commercial Fence Contractors',
      subtitle: 'Large-Scale Project Fulfillment',
      description:
        'High-capacity 180° offset hinges that fold flush with fence lines for clear truck access, rolling pipe-track gate kits, and durable brace bands built for high-traffic operations.',
      fittings: ['180° Offset Hinges', 'Rolling Gate Hardware Kits', 'Commercial Post Collars', 'Padlock Latches'],
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-[#0D3823]" />,
      title: 'Industrial & High-Security',
      subtitle: 'DOT, Utilities & Infrastructure',
      description:
        'Heavy ductile malleable iron box hinges, solid cantilever nylon rollers, and 3-strand barbed wire arms engineered to deter intrusion and resist high wind loads under extreme conditions.',
      fittings: ['3-Wire Barbed Arms', 'Bull Dog Pivot Hinges', 'Cantilever Nylon Rollers', 'High-Tensile Bars'],
    },
    {
      icon: <Wrench className="w-6 h-6 text-[#0D3823]" />,
      title: 'Gate Fabricators & OEMs',
      subtitle: 'Custom Tooling & Precision Fits',
      description:
        'Standardized bolt hole patterns, anti-spin square carriage bolt punches, and smooth deburred edges that speed up shop fabrication, reduce labor hours, and eliminate call-backs.',
      fittings: ['Master Contractor Bulk Cartons', 'Uniform Stamped Clamps', 'Chamfered Tension Bars', 'OEM Custom Tooling'],
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#0D3823] bg-[#EAF2EC] px-3.5 py-1 rounded-full inline-block mb-3 border border-emerald-200">
            WHOLESALE SUPPLY MARKETS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight uppercase">
            DIRECT FACTORY SUPPLY FOR DISTRIBUTORS, CONTRACTORS &amp; FABRICATORS
          </h2>
          <p className="text-base text-gray-600 mt-3">
            From regional fence supply yards to high-volume commercial contractors, Gaur Link delivers precision-engineered fittings and gate hardware at tier-one wholesale volume pricing.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAF7] border border-[#D5DDD2] rounded-2xl p-6 flex flex-col justify-between hover:border-[#0D3823] hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#D5DDD2] flex items-center justify-center mb-5 group-hover:bg-[#0D3823] group-hover:text-white transition-colors shadow-2xs">
                  {app.icon}
                </div>

                <span className="text-[11px] font-black uppercase tracking-wider text-[#0D3823] block mb-1">
                  {app.subtitle}
                </span>

                <h3 className="text-lg font-black text-gray-900 mb-2 leading-snug">
                  {app.title}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {app.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DEE5DC]">
                <span className="text-[11px] font-black uppercase tracking-wider text-gray-500 block mb-2">
                  Primary Wholesale Items:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {app.fittings.map((fit, fIdx) => (
                    <span
                      key={fIdx}
                      className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-white text-gray-700 border border-[#CBD5E1]"
                    >
                      {fit}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

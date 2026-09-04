import React from 'react';
import { Factory, ShieldCheck, PackageCheck, Truck } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const stats = [
    {
      icon: Factory,
      title: 'Factory Direct',
      subtitle: 'Wholesale Rates',
    },
    {
      icon: ShieldCheck,
      title: 'ASTM Certified',
      subtitle: 'A153 Spec Grade',
    },
    {
      icon: PackageCheck,
      title: 'Bulk Inventory',
      subtitle: 'Ready to Ship',
    },
    {
      icon: Truck,
      title: 'Fast Freight',
      subtitle: 'US Nationwide',
    },
  ];

  return (
    <section className="bg-[#0D3823] text-white py-6 sm:py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden shadow-lg border-y border-emerald-800/40">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 items-center">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 sm:gap-4 justify-start sm:justify-center"
              >
                {/* Clean White Circle Container with Brand Green Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-[#0D3823] flex items-center justify-center shrink-0 shadow-sm">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2]" />
                </div>

                {/* Text Content */}
                <div className="flex flex-col leading-tight min-w-0">
                  <span className="text-sm sm:text-base lg:text-lg font-black uppercase text-white tracking-tight truncate">
                    {stat.title}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-emerald-100/90 tracking-normal mt-0.5 whitespace-nowrap">
                    {stat.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

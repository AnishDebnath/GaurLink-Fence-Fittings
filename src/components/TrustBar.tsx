import React from 'react';
import { Briefcase, Star, FileText, Clock } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const stats = [
    {
      icon: Briefcase,
      value: '15+',
      label: 'Years Experience',
    },
    {
      icon: Star,
      value: '5 STAR',
      label: 'Rated 200+ Review',
      isStar: true,
    },
    {
      icon: FileText,
      value: 'LICENSED',
      label: 'Licensed Fully Insured',
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Dispatching',
    },
  ];

  return (
    <section className="bg-[#0D3823] text-white py-6 sm:py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden shadow-lg border-y border-emerald-800/40">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-center">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 sm:gap-4 justify-start sm:justify-center"
              >
                {/* White Circle Container with Brand Green Icon matching reference image */}
                <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-white text-[#0D3823] flex items-center justify-center shrink-0 shadow-md">
                  {stat.isStar ? (
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#0D3823] flex items-center justify-center">
                      <Star className="w-4 h-4 fill-current text-[#0D3823]" />
                    </div>
                  ) : (
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
                  )}
                </div>

                {/* Text Content */}
                <div className="flex flex-col leading-tight">
                  <span className="text-xl sm:text-2xl lg:text-[28px] font-black uppercase text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-normal text-white/90 tracking-normal mt-0.5 whitespace-nowrap">
                    {stat.label}
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

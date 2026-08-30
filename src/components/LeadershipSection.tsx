import React from 'react';
import { ArrowRight, Award, Shield, Users } from 'lucide-react';

interface LeadershipSectionProps {
  onLearnMore: () => void;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ onLearnMore }) => {
  return (
    <section className="py-16 lg:py-20 bg-[#F8FAF7] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#133E2B] bg-[#EAF2EC] px-3 py-1 rounded-full inline-block mb-3">
            COMPANY HERITAGE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B221E] tracking-tight">
            55+ Years of Leadership &amp; Engineering Integrity
          </h2>
          <p className="text-base text-gray-600 mt-3">
            Built on a multi-generational commitment to international export standards, metallurgical discipline, and long-term customer partnerships across four continents.
          </p>
        </div>

        {/* 2 Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Mr. O.P. Maskara */}
          <div className="bg-white p-8 rounded-xl border border-[#D5DDD2] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Mr. O.P. Maskara</h3>
                  <span className="text-xs font-semibold text-[#133E2B] uppercase tracking-wider">
                    Founder President
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#F0F5F2] border border-[#D5DDD2] flex items-center justify-center text-[#133E2B]">
                  <Award className="w-5 h-5" />
                </div>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed">
                A pioneer in international engineering exports with over 62 years of trade experience. Served as Deputy Regional Chairman (Eastern Region) of the Engineering Export Promotion Council (EEPC), Government of India, and long-serving leader with Lions Clubs International.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-[11px] font-semibold text-gray-500">
              <span className="w-1.5 h-1.5 rounded-full bg-[#133E2B]" />
              <span>Over Six Decades in Engineering Exports</span>
            </div>
          </div>

          {/* Mr. Som Maskara */}
          <div className="bg-white p-8 rounded-xl border border-[#D5DDD2] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Mr. Som Maskara</h3>
                  <span className="text-xs font-semibold text-[#133E2B] uppercase tracking-wider">
                    Vice President
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#F0F5F2] border border-[#D5DDD2] flex items-center justify-center text-[#133E2B]">
                  <Users className="w-5 h-5" />
                </div>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed">
                Directs international operations, modern manufacturing technology integration, and customer relationship strategy. Former President of Leo Club International with a dedicated history of humanitarian initiatives and corporate governance.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-[11px] font-semibold text-gray-500">
              <span className="w-1.5 h-1.5 rounded-full bg-[#133E2B]" />
              <span>Modern Manufacturing &amp; Global Operations</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <button
            onClick={onLearnMore}
            className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#133E2B] hover:text-[#0D2B1E] inline-flex items-center gap-1.5 transition-colors cursor-pointer group"
          >
            <span>Read Our Full Heritage Story</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
};

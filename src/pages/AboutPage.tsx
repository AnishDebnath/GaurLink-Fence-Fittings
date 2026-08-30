import React from 'react';
import { Award, ShieldCheck, Factory, Globe2, Users, CheckCircle2, ArrowRight, Flame, Cog, Gauge, Anchor } from 'lucide-react';
import plantImg from '../assets/images/manufacturing_plant_1788071733745.jpg';
import installerImg from '../assets/images/fence_installer_work_1788071755845.jpg';

interface AboutPageProps {
  onOpenQuote: () => void;
  onNavigateProducts: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuote, onNavigateProducts }) => {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="relative bg-[#0F3021] text-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={installerImg}
            alt="Commercial Fence Installation Field Operations"
            className="w-full h-full object-cover object-center opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C251A] via-[#0E2F20]/95 to-[#133E2B]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#86EFAC] text-xs font-semibold uppercase tracking-wider mb-4 border border-white/15">
            <Award className="w-3.5 h-3.5" />
            <span>FOUNDED 1969 • OVER FIVE DECADES OF TRUST</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-3xl leading-[1.1]">
            Engineering Strength Behind Every Perimeter.
          </h1>

          <p className="text-base sm:text-lg text-gray-200 mt-4 max-w-2xl leading-relaxed">
            Gaur Link is an ISO 9001:2015 certified manufacturer of heavy-duty fence fittings, gate hinges, tension hardware, and custom sheet metal stampings serving fencing contractors and distributors across the United States.
          </p>
        </div>
      </section>

      {/* Heritage & Mission Story */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#133E2B] bg-[#EAF2EC] px-3 py-1 rounded-full inline-block">
                OUR HERITAGE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B221E] tracking-tight">
                From a Precision Toolmaker to a Global Fence Hardware Leader
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Founded in 1969, Gaur Link began with a singular focus: manufacturing mechanical hardware that would never fail in the field. Over more than 55 years of continuous growth, we have manufactured over 150 million components deployed on chain-link, commercial gate, and high-security installations across North America, Europe, Asia, and Australasia.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Unlike trading companies or broker middlemen, Gaur Link is an authentic manufacturer with fully integrated production facilities. From raw steel slitting and heavy stamping to in-house hot-dip galvanizing and mechanical batch testing, our end-to-end control guarantees dimensional consistency and dependable field assembly on every contractor job site.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#F8FAF7] rounded-xl border border-[#D5DDD2]">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#133E2B] block">150M+</span>
                  <span className="text-xs text-gray-500 font-medium mt-1 block">Fittings Manufactured</span>
                </div>
                <div className="p-4 bg-[#F8FAF7] rounded-xl border border-[#D5DDD2]">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#133E2B] block">4 Continents</span>
                  <span className="text-xs text-gray-500 font-medium mt-1 block">Global Export Presence</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#D5DDD2]">
                <img
                  src={plantImg}
                  alt="Gaur Link 20,000 SQFT Advanced Stamping & Galvanizing Facility"
                  className="w-full h-auto object-cover"
                />
                <div className="p-6 bg-white border-t border-gray-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#133E2B]">
                    INTEGRATED MANUFACTURING
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-1">
                    20,000 SQFT. Advanced Stamping &amp; Galvanizing Facility
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Complete vertical integration ensures tight tolerances, uniform hot-dip zinc coatings, and zero-defect QA.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership Profile */}
      <section className="py-16 lg:py-24 bg-[#F8FAF7] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#133E2B] bg-[#EAF2EC] px-3 py-1 rounded-full inline-block mb-3">
              EXECUTIVE LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B221E] tracking-tight">
              Guided by Integrity &amp; International Export Excellence
            </h2>
            <p className="text-base text-gray-600 mt-3">
              Over six decades of leadership in engineering exports recognized by the Government of India and international trade councils.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Founder Card */}
            <div className="bg-white p-8 rounded-2xl border border-[#D5DDD2] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Mr. O.P. Maskara</h3>
                    <span className="text-xs font-bold text-[#133E2B] uppercase tracking-wider">
                      Founder President
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-[#F0F5F2] border border-[#D5DDD2] flex items-center justify-center text-[#133E2B]">
                    <Award className="w-6 h-6" />
                  </div>
                </div>

                <div className="space-y-3 text-xs text-gray-600 leading-relaxed">
                  <p>
                    With over 62 years of active leadership in manufacturing, metal fabrication, and international commerce, Mr. O.P. Maskara laid the foundation of Gaur Link's quality-first ethos in 1969.
                  </p>
                  <p>
                    He served with distinction as Deputy Regional Chairman (Eastern Region) of the Engineering Export Promotion Council (EEPC), Ministry of Commerce, Government of India, receiving national recognition for export excellence in engineering goods.
                  </p>
                  <p>
                    A respected community leader and humanitarian, he has served in leadership capacities with Lions Clubs International for decades.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#133E2B]" />
                <span>62+ Years Industry Experience</span>
              </div>
            </div>

            {/* VP Card */}
            <div className="bg-white p-8 rounded-2xl border border-[#D5DDD2] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Mr. Som Maskara</h3>
                    <span className="text-xs font-bold text-[#133E2B] uppercase tracking-wider">
                      Vice President
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-[#F0F5F2] border border-[#D5DDD2] flex items-center justify-center text-[#133E2B]">
                    <Users className="w-6 h-6" />
                  </div>
                </div>

                <div className="space-y-3 text-xs text-gray-600 leading-relaxed">
                  <p>
                    Leading Gaur Link's international client partnerships and modern manufacturing operations, Mr. Som Maskara spearheaded the expansion of our direct supply channels into the United States market.
                  </p>
                  <p>
                    He oversees technical tooling, die development, and automated quality assurance systems, ensuring every production run aligns precisely with ASTM specifications and contractor expectations.
                  </p>
                  <p>
                    Former President of Leo Club International with a lifelong devotion to youth leadership development and social welfare initiatives.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#133E2B]" />
                <span>Modern Operations &amp; US Market Strategy</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Facility & Capabilities Breakdown */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#133E2B] bg-[#EAF2EC] px-3 py-1 rounded-full inline-block mb-3">
              MANUFACTURING EXCELLENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B221E] tracking-tight">
              Vertical Integration Under One Roof
            </h2>
            <p className="text-base text-gray-600 mt-3">
              By owning and operating every production stage, Gaur Link controls costs, eliminates middleman delays, and enforces zero-defect quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#F8FAF7] border border-[#D5DDD2] rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#F0F5F2] border border-[#CBD5E1] flex items-center justify-center text-[#133E2B] mb-4">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">In-House Hot-Dip Galvanizing</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Full automated zinc kettles coating internal and external surfaces to ASTM A153 specifications for maximum rust prevention.
              </p>
            </div>

            <div className="p-6 bg-[#F8FAF7] border border-[#D5DDD2] rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#F0F5F2] border border-[#CBD5E1] flex items-center justify-center text-[#133E2B] mb-4">
                <Cog className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Tool &amp; Die Engineering</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                In-house EDM, wire-cut, and CNC die-making division building customized tooling for contractor hardware specs in days.
              </p>
            </div>

            <div className="p-6 bg-[#F8FAF7] border border-[#D5DDD2] rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#F0F5F2] border border-[#CBD5E1] flex items-center justify-center text-[#133E2B] mb-4">
                <Gauge className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Metallurgical Testing Lab</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Calibrated universal tensile testing machines, salt-spray corrosion chambers, and digital coating thickness gauges on site.
              </p>
            </div>

            <div className="p-6 bg-[#F8FAF7] border border-[#D5DDD2] rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#F0F5F2] border border-[#CBD5E1] flex items-center justify-center text-[#133E2B] mb-4">
                <Anchor className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Direct US DDP Logistics</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Container freight handling, customs clearance, and Delivered Duty Paid (DDP) shipping straight to your US warehouse dock.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-7 py-3.5 bg-[#133E2B] hover:bg-[#0D2B1E] text-white text-sm font-bold uppercase tracking-wider rounded-lg shadow-sm transition-all"
            >
              Request Commercial RFQ
            </button>
            <button
              onClick={onNavigateProducts}
              className="w-full sm:w-auto px-6 py-3.5 bg-white border border-[#133E2B] text-[#133E2B] hover:bg-[#F4F7F3] text-sm font-bold uppercase tracking-wider rounded-lg transition-all"
            >
              Explore Products Catalog
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

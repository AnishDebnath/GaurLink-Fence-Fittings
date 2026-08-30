import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { IMAGES } from '../data/images';

export const TestimonialsGrid: React.FC = () => {
  return (
    <section id="testimonials" className="py-14 sm:py-20 bg-white text-gray-900">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        
        {/* Section Header matching reference */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 sm:mb-12">
          {/* Eyebrow Pill Badge: • TESTIMONIALS with website theme */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-gray-900/80 bg-white text-[11px] sm:text-[12px] font-bold tracking-widest text-gray-900 uppercase font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D3823]"></span>
            <span>TESTIMONIALS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black uppercase text-gray-900 tracking-tight leading-tight font-sans">
            WHAT OUR CLIENTS SAY ABOUT FENCING
          </h2>
        </div>

        {/* 3-Column Grid with prominent Hero Center Card */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.14fr_1fr] gap-4.5 sm:gap-6 items-stretch">
          
          {/* LEFT COLUMN: 2 White Cards */}
          <div className="flex flex-col gap-4 sm:gap-5 justify-between">
            
            {/* Card 1: MARCUS T. */}
            <div className="bg-[#F8FAF8] border border-gray-200/80 rounded-[18px] p-5 shadow-xs flex flex-col justify-between flex-1 hover:border-emerald-300 transition-all">
              <div>
                {/* 5 Yellow Stars */}
                <div className="flex text-[#F59E0B] gap-1 mb-2.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                {/* Review Text */}
                <p className="text-[13px] sm:text-[13.5px] text-gray-700 leading-relaxed font-normal">
                  “Fence Shield Texas did an amazing job on our new privacy fence. Then team was professional fast and the best quality is very outstanding.”
                </p>
              </div>

              {/* Bottom Row */}
              <div className="flex items-center justify-between mt-4 pt-3.5 border-t border-gray-200/70">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#C0392B] text-white font-black text-sm flex items-center justify-center shrink-0 shadow-xs">
                    M
                  </div>
                  <div>
                    <div className="text-[12.5px] font-black uppercase text-gray-900 font-sans tracking-tight leading-tight">
                      MARCUS T.
                    </div>
                    <div className="text-[11px] text-gray-500 font-medium">
                      Homeowner
                    </div>
                  </div>
                </div>

                {/* Google G Logo */}
                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 2: SERGIO R. */}
            <div className="bg-[#F8FAF8] border border-gray-200/80 rounded-[18px] p-5 shadow-xs flex flex-col justify-between flex-1 hover:border-emerald-300 transition-all">
              <div>
                {/* 5 Yellow Stars */}
                <div className="flex text-[#F59E0B] gap-1 mb-2.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                {/* Review Text */}
                <p className="text-[13px] sm:text-[13.5px] text-gray-700 leading-relaxed font-normal">
                  “We hired them for a commercial fence installation, and everything was completed on time exactly as promised. Highly recommended.”
                </p>
              </div>

              {/* Bottom Row */}
              <div className="flex items-center justify-between mt-4 pt-3.5 border-t border-gray-200/70">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#374151] text-white font-black text-sm flex items-center justify-center shrink-0 shadow-xs">
                    S
                  </div>
                  <div>
                    <div className="text-[12.5px] font-black uppercase text-gray-900 font-sans tracking-tight leading-tight">
                      SERGIO R.
                    </div>
                    <div className="text-[11px] text-gray-500 font-medium">
                      Homeowner
                    </div>
                  </div>
                </div>

                {/* Google G Logo */}
                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                </div>
              </div>
            </div>

          </div>

          {/* CENTER COLUMN: Hero Featured Themed Dark Card (Prominently Larger) */}
          <div className="bg-[#071910] text-white rounded-[28px] p-6 sm:p-7.5 shadow-2xl flex flex-col justify-between border border-emerald-500/30 text-center relative overflow-hidden ring-1 ring-emerald-400/20">
            <div className="space-y-1.5 pt-1">
              {/* 99% stat */}
              <div className="text-5xl sm:text-[60px] font-black text-white tracking-tight leading-none font-sans">
                99%
              </div>
              <div className="text-xs sm:text-[13.5px] font-medium text-emerald-200/90 font-sans">
                Client Satisfaction
              </div>

              {/* Thin subtle divider line under Client Satisfaction */}
              <div className="w-full h-px bg-emerald-500/25 my-3.5" />

              {/* Colorful Google Logo */}
              <div className="py-2">
                <span className="text-3xl sm:text-[38px] font-black tracking-tight font-sans">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </span>
                <div className="text-[12px] sm:text-[12.5px] text-emerald-200/80 font-medium mt-1">
                  Based On 50 Reviews
                </div>
              </div>

              {/* Action Button styled according to other site buttons in theme colors */}
              <div className="pt-1 pb-1">
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="h-[46px] inline-flex items-center gap-3 bg-[#E5A912] hover:bg-[#D89A08] text-[#071910] font-black text-xs uppercase tracking-wider pl-2 pr-5 sm:pr-6 rounded-full shadow-lg hover:shadow-xl transition-all transform active:scale-95 group border border-[#E5A912]/50 ring-1 ring-[#E5A912]/30"
                  id="reviews-google-btn"
                >
                  <span className="w-7 h-7 rounded-full bg-[#071910] text-[#E5A912] font-black flex items-center justify-center group-hover:translate-x-0.5 transition-transform shadow-xs shrink-0">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span className="whitespace-nowrap">REVIEWS US ON GOOGLE</span>
                </a>
              </div>
            </div>

            {/* 2x2 Grid of 4 Fence Photos */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mt-4">
              <div className="aspect-[4/3.1] rounded-xl overflow-hidden bg-gray-900 border border-emerald-900/40 shadow-inner">
                <img
                  src={IMAGES.workerBlue}
                  alt="Carpenter fence picket fixing"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[4/3.1] rounded-xl overflow-hidden bg-gray-900 border border-emerald-900/40 shadow-inner">
                <img
                  src={IMAGES.installerWork}
                  alt="Technician in hard hat installing fence"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[4/3.1] rounded-xl overflow-hidden bg-gray-900 border border-emerald-900/40 shadow-inner">
                <img
                  src={IMAGES.drillRepair}
                  alt="Drill screwing fence pickets"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[4/3.1] rounded-xl overflow-hidden bg-gray-900 border border-emerald-900/40 shadow-inner">
                <img
                  src={IMAGES.gateRepair}
                  alt="Fence technician at work"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 2 White Cards */}
          <div className="flex flex-col gap-4 sm:gap-5 justify-between">
            
            {/* Card 3: LUCAS H. */}
            <div className="bg-[#F8FAF8] border border-gray-200/80 rounded-[18px] p-5 shadow-xs flex flex-col justify-between flex-1 hover:border-emerald-300 transition-all">
              <div>
                {/* 5 Yellow Stars */}
                <div className="flex text-[#F59E0B] gap-1 mb-2.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                {/* Review Text */}
                <p className="text-[13px] sm:text-[13.5px] text-gray-700 leading-relaxed font-normal">
                  “Fence Shield Texas was delivered excellent quality work on our fence installation. Fast professional and reliable service from start finish.”
                </p>
              </div>

              {/* Bottom Row */}
              <div className="flex items-center justify-between mt-4 pt-3.5 border-t border-gray-200/70">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#0D3823] text-white font-black text-sm flex items-center justify-center shrink-0 shadow-xs">
                    L
                  </div>
                  <div>
                    <div className="text-[12.5px] font-black uppercase text-gray-900 font-sans tracking-tight leading-tight">
                      LUCAS H.
                    </div>
                    <div className="text-[11px] text-gray-500 font-medium">
                      Homeowner
                    </div>
                  </div>
                </div>

                {/* Google G Logo */}
                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 4: PAULO M. */}
            <div className="bg-[#F8FAF8] border border-gray-200/80 rounded-[18px] p-5 shadow-xs flex flex-col justify-between flex-1 hover:border-emerald-300 transition-all">
              <div>
                {/* 5 Yellow Stars */}
                <div className="flex text-[#F59E0B] gap-1 mb-2.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                {/* Review Text */}
                <p className="text-[13px] sm:text-[13.5px] text-gray-700 leading-relaxed font-normal">
                  “Fence Shield Texas provided fast and professional of service for our fence installation. The quality and finish exceeded our expectations.”
                </p>
              </div>

              {/* Bottom Row */}
              <div className="flex items-center justify-between mt-4 pt-3.5 border-t border-gray-200/70">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#1E6FD9] text-white font-black text-sm flex items-center justify-center shrink-0 shadow-xs">
                    P
                  </div>
                  <div>
                    <div className="text-[12.5px] font-black uppercase text-gray-900 font-sans tracking-tight leading-tight">
                      PAULO M.
                    </div>
                    <div className="text-[11px] text-gray-500 font-medium">
                      Homeowner
                    </div>
                  </div>
                </div>

                {/* Google G Logo */}
                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};



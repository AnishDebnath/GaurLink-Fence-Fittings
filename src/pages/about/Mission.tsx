import React, { useState, useEffect } from 'react';
import { Play, X } from 'lucide-react';
import introVideo from '../../assets/images/about us/about-video.mp4';

export const Mission: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    if (isVideoModalOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isVideoModalOpen]);

  return (
    <>
      <section className="relative bg-white pt-16 sm:pt-20 lg:pt-24 pb-14 sm:pb-18 lg:pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[60%] sm:h-[64%] lg:h-[66%] bg-[#071910] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-900/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-8 sm:mb-11 text-white">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/40 bg-[#0D3823]/80 text-[11px] sm:text-xs font-bold tracking-wider text-emerald-100 uppercase font-sans shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#E5A912]"></span>
                <span>OUR VALUES</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black uppercase tracking-tight text-white leading-[1.08] font-sans">
                Mission &amp; <span className="text-[#E5A912]">Vision</span>
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-4 lg:pt-2">
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                <strong className="text-white font-black uppercase tracking-wide">Our Mission:</strong> Supply top-tier, ASTM-compliant commercial fence fittings and gate hardware directly to American supply yards at the best wholesale rates with guaranteed zero defects.
              </p>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                <strong className="text-white font-black uppercase tracking-wide">Our Vision:</strong> Be North America's most dependable direct manufacturing partner for commercial fence hardware, custom progressive stamping, and perimeter security fittings.
              </p>
            </div>
          </div>

          {/* Video preview container */}
          <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl border-[2.5px] border-[#1C1C1C] bg-gray-900 aspect-[16/9] sm:aspect-[21/10] w-full group">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            >
              <source src={introVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="inline-flex items-center gap-3 px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-full bg-[#071910]/85 hover:bg-[#071910] backdrop-blur-md border border-emerald-500/40 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-2xl transition-all hover:scale-105 active:scale-95 cursor-pointer group/btn"
              >
                <span>Facility Video</span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#E5A912] text-[#071910] flex items-center justify-center shrink-0 shadow-md group-hover/btn:bg-white transition-colors">
                  <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current ml-0.5" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Player Modal */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-3 right-3 z-30 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 shadow-lg transition-all cursor-pointer"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-video bg-black flex items-center justify-center">
              <video
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              >
                <source src={introVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

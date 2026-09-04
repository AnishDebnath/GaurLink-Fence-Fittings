import React, { useState, useEffect } from 'react';
import { PhoneCall, ArrowRight, ShieldCheck, CheckCircle2, Award, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { IMAGES } from '../../data/images';

interface HeroProps {
  onOpenSchedule: () => void;
  onExploreServices?: () => void;
}

const HARDWARE_OBJECTS = [
  {
    id: 'gate-hinge',
    name: 'Galvanized Industrial Gate Hinge',
    image: IMAGES.gateHingeObj,
  },
  {
    id: 'tension-band',
    name: 'Heavy Pressed Steel Tension Band',
    image: IMAGES.tensionBandObj,
  },
  {
    id: 'cantilever-roller',
    name: 'Cantilever Sliding Gate Roller Assembly',
    image: IMAGES.cantileverRollerObj,
  },
  {
    id: 'barbed-arm',
    name: '3-Wire Commercial Barbed Extension Arm',
    image: IMAGES.barbedArmObj,
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenSchedule }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance items right to left
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HARDWARE_OBJECTS.length);
    }, 3600);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HARDWARE_OBJECTS.length);
  };

  const currentObject = HARDWARE_OBJECTS[currentIndex];

  return (
    <section id="home" className="relative min-h-[640px] lg:min-h-[740px] flex items-center bg-[#071910] text-white overflow-hidden pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24">
      {/* Background Photography matching reference */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="GaurLink USA fence and fittings manufacturing specialist"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-110"
        />
        {/* Dark Vignette Overlay tinted with website deep forest green tones */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071910]/95 via-[#071910]/85 via-50% to-[#071910]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071910] via-transparent to-[#071910]/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Reviews, CTAs & 3 Glass Cards */}
          <div className="lg:col-span-7 flex flex-col space-y-6 lg:space-y-7">
            
            {/* Top Row: Facebook, Google, Yelp 5.0 Rating Badges (Clean floating style matching reference image) */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              
              {/* Facebook 5.0 Rating Badge */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center font-bold text-sm shadow-md shrink-0">
                  <span className="font-sans font-black leading-none">f</span>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex text-[#E5A912] gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current text-[#E5A912]" />
                    ))}
                  </div>
                  <span className="text-white text-[11px] font-black tracking-wider leading-none mt-1">
                    5.0 RATING
                  </span>
                </div>
              </div>

              {/* Google 5.0 Rating Badge */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-xs shadow-md shrink-0">
                  <span className="font-black text-sm">
                    <span className="text-[#4285F4]">G</span>
                  </span>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex text-[#E5A912] gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current text-[#E5A912]" />
                    ))}
                  </div>
                  <span className="text-white text-[11px] font-black tracking-wider leading-none mt-1">
                    5.0 RATING
                  </span>
                </div>
              </div>

              {/* Yelp 5.0 Rating Badge */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#D32323] text-white flex items-center justify-center font-bold text-xs shadow-md shrink-0">
                  <span className="font-serif font-black text-xs italic">★</span>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex text-[#E5A912] gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current text-[#E5A912]" />
                    ))}
                  </div>
                  <span className="text-white text-[11px] font-black tracking-wider leading-none mt-1">
                    5.0 RATING
                  </span>
                </div>
              </div>

            </div>

            {/* Display Headline matching image bold style with website color theme */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-black text-white uppercase tracking-tight leading-[1.05] drop-shadow-md font-sans">
              FENCE &amp; FITTINGS<br />
              MANUFACTURING AT<br />
              <span className="text-[#E5A912]">WHOLESALE RATES</span>
            </h1>

            {/* Subtitle matching reference format */}
            <p className="text-gray-200 text-sm sm:text-base max-w-xl leading-relaxed font-normal">
              GaurLink is a USA-based fence and fittings manufacturing company, supplying commercial fence and fittings items at direct factory wholesale rates to supply yards, distributors, and contractors nationwide.
            </p>

            {/* Action Buttons matching reference image layout in website color theme */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-1">
              {/* Primary CTA Button: Deep Green #0D3823 with Golden Circle Arrow */}
              <button
                onClick={onOpenSchedule}
                className="h-[50px] sm:h-[52px] inline-flex items-center gap-3 bg-[#0D3823] hover:bg-[#072416] text-white font-black text-xs sm:text-sm uppercase tracking-wider pl-2 pr-6 rounded-full shadow-lg border border-emerald-500/30 hover:border-emerald-400/50 hover:shadow-emerald-950/40 transition-all transform active:scale-95 group ring-1 ring-[#E5A912]/20 shrink-0"
                id="hero-get-estimate-btn"
              >
                <span className="w-8 h-8 rounded-full bg-[#E5A912] text-[#0D3823] font-black flex items-center justify-center group-hover:translate-x-0.5 transition-transform shadow-xs shrink-0">
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </span>
                <span className="whitespace-nowrap">REQUEST WHOLESALE QUOTE</span>
              </button>

              {/* White Pill Button with Telephone Receiver */}
              <a
                href="tel:7208053155"
                className="h-[50px] sm:h-[52px] inline-flex items-center gap-2.5 bg-white hover:bg-gray-100 text-gray-900 font-black text-xs sm:text-sm px-6 rounded-full shadow-md transition-all group shrink-0"
                id="hero-phone-btn"
              >
                <PhoneCall className="w-4 h-4 text-[#0D3823] stroke-[2.4] shrink-0" />
                <span className="whitespace-nowrap">(720) 805-3155</span>
              </a>
            </div>

            {/* Bottom 3 Prominent Glass Badges matching reference image */}
            <div className="pt-2 sm:pt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5 max-w-[560px] sm:max-w-[600px] w-full">
              {/* Card 1: FACTORY DIRECT / Wholesale Rates */}
              <div
                id="hero-feature-factory-direct"
                className="bg-black/40 backdrop-blur-md border border-white/20 hover:border-emerald-400/60 rounded-2xl p-3.5 sm:p-4 flex items-center gap-3 transition-all shadow-md group hover:bg-black/50"
              >
                <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-[#E5A912] sm:text-white group-hover:text-[#E5A912] stroke-[1.8] shrink-0 transition-colors" />
                <div className="min-w-0 text-left">
                  <div className="text-[12px] sm:text-[13px] font-black uppercase text-white tracking-wide leading-tight whitespace-nowrap">
                    FACTORY DIRECT
                  </div>
                  <div className="text-[11px] sm:text-xs text-gray-300 font-normal leading-tight mt-1 whitespace-nowrap">
                    Wholesale Rates
                  </div>
                </div>
              </div>

              {/* Card 2: ASTM A153 / Galvanized Zinc */}
              <div
                id="hero-feature-astm"
                className="bg-black/40 backdrop-blur-md border border-white/20 hover:border-emerald-400/60 rounded-2xl p-3.5 sm:p-4 flex items-center gap-3 transition-all shadow-md group hover:bg-black/50"
              >
                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-[#E5A912] sm:text-white group-hover:text-[#E5A912] stroke-[1.8] shrink-0 transition-colors" />
                <div className="min-w-0 text-left">
                  <div className="text-[12px] sm:text-[13px] font-black uppercase text-white tracking-wide leading-tight whitespace-nowrap">
                    ASTM A153
                  </div>
                  <div className="text-[11px] sm:text-xs text-gray-300 font-normal leading-tight mt-1 whitespace-nowrap">
                    Galvanized Zinc
                  </div>
                </div>
              </div>

              {/* Card 3: IN STOCK / Pallet Ready */}
              <div
                id="hero-feature-in-stock"
                className="bg-black/40 backdrop-blur-md border border-white/20 hover:border-emerald-400/60 rounded-2xl p-3.5 sm:p-4 flex items-center gap-3 transition-all shadow-md group hover:bg-black/50"
              >
                <Award className="w-7 h-7 sm:w-8 sm:h-8 text-[#E5A912] sm:text-white group-hover:text-[#E5A912] stroke-[1.8] shrink-0 transition-colors" />
                <div className="min-w-0 text-left">
                  <div className="text-[12px] sm:text-[13px] font-black uppercase text-white tracking-wide leading-tight whitespace-nowrap">
                    IN STOCK
                  </div>
                  <div className="text-[11px] sm:text-xs text-gray-300 font-normal leading-tight mt-1 whitespace-nowrap">
                    Pallet Ready
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Floating PNG Hardware Objects Showcase (moving right to left) */}
          {/* Right Column: Directly show floating object image moving right to left */}
          <div className="lg:col-span-5 flex items-center justify-center relative min-h-[360px] sm:min-h-[420px] lg:min-h-[480px] w-full select-none">
            {/* Ambient subtle warm/emerald glow directly on hero section */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#0D3823]/60 via-[#E5A912]/20 to-transparent blur-3xl pointer-events-none" />

            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentObject.id}
                  initial={{ opacity: 0, x: 140 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -140 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  onClick={handleNext}
                  className="cursor-pointer flex items-center justify-center"
                  title="Click to view next fitting"
                >
                  {/* Weightless vertical floating motion */}
                  <motion.div
                    animate={{ y: [0, -14, 0] }}
                    transition={{ repeat: Infinity, duration: 3.6, ease: 'easeInOut' }}
                    className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[440px] lg:h-[440px] flex items-center justify-center"
                  >
                    <img
                      src={currentObject.image}
                      alt={currentObject.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain mix-blend-screen [mask-image:radial-gradient(ellipse_at_center,black_62%,transparent_98%)] filter drop-shadow-[0_25px_40px_rgba(0,0,0,0.95)] contrast-125 brightness-110 select-none pointer-events-none"
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { GaurLinkLogo } from './GaurLinkLogo';
import { IMAGES } from '../../data/images';

export const LaunchingSoon: React.FC = () => {
  // 7-Day live countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 5);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#071910] text-white flex flex-col justify-between selection:bg-[#E5A912] selection:text-[#071910] relative overflow-hidden font-sans">

      {/* Fence Manufacturing Background with Gaur Green Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={IMAGES.banner}
          alt="Fence and fittings background"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center filter brightness-35 contrast-120 saturate-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071910]/90 via-[#071910]/80 to-[#071910]/95" />
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/3 w-[350px] h-[250px] bg-[#E5A912]/10 blur-[120px] pointer-events-none" />

      {/* Top Header - Centered Gaur Link Logo */}
      <header className="relative z-10 max-w-4xl mx-auto w-full px-4 pt-10 sm:pt-14 flex items-center justify-center">
        <GaurLinkLogo size="lg" showSubtitle={true} />
      </header>

      {/* Center Main Content - Very Minimal */}
      <main className="relative z-10 max-w-2xl mx-auto w-full px-4 py-8 text-center my-auto">

        {/* Launching Soon Pill */}
        <div className="inline-flex items-center gap-2 bg-[#0D291B]/90 border border-emerald-500/40 text-[#E5A912] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-md backdrop-blur-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>WEBSITE LAUNCHING SOON</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight drop-shadow-lg font-sans">
          FENCE &amp; FITTINGS MANUFACTURING
        </h1>

        {/* Sub-heading */}
        <p className="text-sm sm:text-base text-emerald-100/80 max-w-lg mx-auto mt-4 font-medium leading-relaxed">
          Engineered chain link fabrics, industrial hardware, and complete perimeter security solutions.
        </p>

        {/* 7-Day Countdown Timer */}
        <div className="grid grid-cols-4 gap-3 sm:gap-4 max-w-sm mx-auto mt-8 sm:mt-10">
          {[
            { label: 'DAYS', value: timeLeft.days },
            { label: 'HOURS', value: timeLeft.hours },
            { label: 'MINUTES', value: timeLeft.minutes },
            { label: 'SECONDS', value: timeLeft.seconds },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0A2618]/90 border border-emerald-500/25 rounded-2xl py-3.5 sm:py-4 px-2 text-center shadow-xl backdrop-blur-sm flex flex-col items-center justify-center"
            >
              <span className="text-3xl sm:text-4xl font-black text-[#E5A912] tracking-tight font-mono">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-emerald-300/70 mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </main>

      {/* Clean Bottom Copyright */}
      <footer className="relative z-10 border-t border-emerald-900/30 max-w-4xl mx-auto w-full px-4 py-6 text-center text-xs text-emerald-200/50 font-medium">
        Copyright © 2026 GaurLink. All Rights Reserved.
      </footer>

    </div>
  );
};

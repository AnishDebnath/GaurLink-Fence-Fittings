import React, { useState } from 'react';
import { PhoneCall, ArrowRight, ShieldCheck, CheckCircle2, Award, Star, Check, ChevronDown } from 'lucide-react';
import { IMAGES } from '../../data/images';

interface HeroProps {
  onOpenSchedule: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSchedule }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    productLine: 'Chain Link Fittings & Clamps',
    orderVolume: 'Full 40ft Container',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        productLine: 'Chain Link Fittings & Clamps',
        orderVolume: 'Full 40ft Container',
        message: '',
      });
    }, 5000);
  };

  return (
    <section id="home" className="relative min-h-[640px] lg:min-h-[740px] flex items-center bg-[#071910] text-white overflow-hidden pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24">
      {/* Background Photography matching reference */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Fence repair and hardware specialist"
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
              Direct factory manufacturer of precision pressed steel, malleable iron fence fittings, gate hardware, and chain-link components. Supplying fence distributors, commercial contractors, and builders nationwide at competitive wholesale rates.
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

            {/* Bottom 3 Glass Cards matching reference image */}
            <div className="pt-2 sm:pt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl w-full">
              {/* Card 1: FACTORY DIRECT / LICENSE INSURE */}
              <div className="bg-black/35 backdrop-blur-md border border-white/20 hover:border-emerald-400/50 rounded-xl p-3.5 sm:p-4 flex items-center gap-3.5 transition-all">
                <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-white stroke-[1.8] shrink-0" />
                <div className="min-w-0 text-left">
                  <div className="text-[12px] sm:text-[13px] font-black uppercase text-white tracking-wide leading-tight truncate">
                    FACTORY DIRECT
                  </div>
                  <div className="text-[11px] text-gray-300 font-normal leading-tight mt-0.5 truncate">
                    Wholesale Rates
                  </div>
                </div>
              </div>

              {/* Card 2: ASTM A153 / FREE ESTIMATE */}
              <div className="bg-black/35 backdrop-blur-md border border-white/20 hover:border-emerald-400/50 rounded-xl p-3.5 sm:p-4 flex items-center gap-3.5 transition-all">
                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-white stroke-[1.8] shrink-0" />
                <div className="min-w-0 text-left">
                  <div className="text-[12px] sm:text-[13px] font-black uppercase text-white tracking-wide leading-tight truncate">
                    ASTM A153 / F626
                  </div>
                  <div className="text-[11px] text-gray-300 font-normal leading-tight mt-0.5 truncate">
                    Hot-Dip Galvanized
                  </div>
                </div>
              </div>

              {/* Card 3: BULK IN STOCK / BEST PRICE */}
              <div className="bg-black/35 backdrop-blur-md border border-white/20 hover:border-emerald-400/50 rounded-xl p-3.5 sm:p-4 flex items-center gap-3.5 transition-all">
                <Award className="w-7 h-7 sm:w-8 sm:h-8 text-white stroke-[1.8] shrink-0" />
                <div className="min-w-0 text-left">
                  <div className="text-[12px] sm:text-[13px] font-black uppercase text-white tracking-wide leading-tight truncate">
                    BULK IN STOCK
                  </div>
                  <div className="text-[11px] text-gray-300 font-normal leading-tight mt-0.5 truncate">
                    Pallet &amp; Container
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Floating Form Card matching reference image style */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 text-gray-900 border border-gray-100/90 relative">
              <div className="mb-5">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-gray-900 tracking-tight text-left">
                  LET'S FIX YOUR FENCE FAST
                </h2>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-3 animate-in fade-in">
                  <div className="w-14 h-14 bg-emerald-100 text-[#0D3823] rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <Check className="w-7 h-7 stroke-[3]" />
                  </div>
                  <h3 className="text-lg font-black text-gray-900 uppercase">
                    SCHEDULE REQUEST RECEIVED!
                  </h3>
                  <p className="text-xs text-gray-600 max-w-xs mx-auto">
                    Thank you, {formData.fullName}! Our team will prepare your quote and contact you at {formData.phone}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
                  {/* Row 1: Full Name & Phone Number side by side matching image */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[#EEEEEE] border-0 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-gray-800 placeholder-gray-500 font-medium focus:bg-white focus:ring-2 focus:ring-[#0D3823] transition-all"
                        id="hero-form-name"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#EEEEEE] border-0 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-gray-800 placeholder-gray-500 font-medium focus:bg-white focus:ring-2 focus:ring-[#0D3823] transition-all"
                        id="hero-form-phone"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email Address (full width matching image) */}
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#EEEEEE] border-0 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-gray-800 placeholder-gray-500 font-medium focus:bg-white focus:ring-2 focus:ring-[#0D3823] transition-all"
                      id="hero-form-email"
                    />
                  </div>

                  {/* Row 3: Service Type Dropdown matching image */}
                  <div className="relative">
                    <select
                      value={formData.productLine}
                      onChange={(e) => setFormData({ ...formData, productLine: e.target.value })}
                      className="w-full appearance-none bg-[#EEEEEE] border-0 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-gray-800 font-medium focus:bg-white focus:ring-2 focus:ring-[#0D3823] transition-all cursor-pointer pr-10"
                      id="hero-form-service"
                    >
                      <option value="Chain Link Fittings & Clamps">Chain Link Fittings &amp; Clamps</option>
                      <option value="Commercial Gate Hardware">Commercial Gate Hardware &amp; 180° Hinges</option>
                      <option value="Fence Repair & Restoration">Fence Repair &amp; Restoration</option>
                      <option value="Tension Bars & Wire">Tension Bars, Truss Rods &amp; Wire</option>
                      <option value="Cantilever Gate Rollers">Industrial Cantilever Nylon Rollers</option>
                      <option value="Barbed Wire Extension Arms">Barbed Wire Extension Arms</option>
                      <option value="Custom OEM Tooling & Wholesale">Wholesale Pallets &amp; Containers</option>
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none stroke-[2.2]" />
                  </div>

                  {/* Row 4: Write Your Message Textarea matching image */}
                  <div>
                    <textarea
                      rows={4}
                      placeholder="Write Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#EEEEEE] border-0 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-gray-800 placeholder-gray-500 font-medium focus:bg-white focus:ring-2 focus:ring-[#0D3823] transition-all resize-none"
                      id="hero-form-message"
                    ></textarea>
                  </div>

                  {/* Submit Button matching image style (pill with circle arrow on left) in website color theme */}
                  <button
                    type="submit"
                    className="w-full h-[50px] sm:h-[52px] inline-flex items-center justify-center gap-3 bg-[#0D3823] hover:bg-[#072416] text-white font-black text-xs sm:text-sm uppercase tracking-wider rounded-full shadow-lg hover:shadow-xl transition-all transform active:scale-98 group border border-emerald-600/30 ring-1 ring-[#E5A912]/20"
                    id="hero-form-submit-btn"
                  >
                    <span className="w-8 h-8 rounded-full bg-[#E5A912] text-[#0D3823] font-black flex items-center justify-center group-hover:translate-x-0.5 transition-transform shadow-xs shrink-0">
                      <ArrowRight className="w-4 h-4 stroke-[3]" />
                    </span>
                    <span>BOOK A SCHEDULE</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

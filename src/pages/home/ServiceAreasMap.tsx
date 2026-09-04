import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceAreasMapProps {
  onOpenSchedule: () => void;
}

interface ServiceCity {
  id: string;
  name: string;
  query: string;
  zoom: number;
}

const SERVICE_CITIES: ServiceCity[] = [
  { id: 'usa', name: 'USA NATIONWIDE', query: 'United States', zoom: 4 },
  { id: 'texas', name: 'HOUSTON, TX (HQ)', query: 'Houston, TX', zoom: 10 },
  { id: 'dallas', name: 'DALLAS / FT WORTH', query: 'Dallas, TX', zoom: 10 },
  { id: 'atlanta', name: 'ATLANTA, GA', query: 'Atlanta, GA', zoom: 10 },
  { id: 'chicago', name: 'CHICAGO, IL', query: 'Chicago, IL', zoom: 10 },
  { id: 'los-angeles', name: 'LOS ANGELES, CA', query: 'Los Angeles, CA', zoom: 10 },
  { id: 'philadelphia', name: 'PHILADELPHIA, PA', query: 'Philadelphia, PA', zoom: 10 },
  { id: 'kansas-city', name: 'KANSAS CITY, MO', query: 'Kansas City, MO', zoom: 10 },
  { id: 'phoenix', name: 'PHOENIX, AZ', query: 'Phoenix, AZ', zoom: 10 },
  { id: 'tampa', name: 'TAMPA, FL', query: 'Tampa, FL', zoom: 10 },
];

export const ServiceAreasMap: React.FC<ServiceAreasMapProps> = ({ onOpenSchedule }) => {
  const [activeCityId, setActiveCityId] = useState<string>('usa');

  const activeCity = SERVICE_CITIES.find((c) => c.id === activeCityId) || SERVICE_CITIES[0];

  // Original Google Maps embed URL
  const googleMapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    activeCity.query
  )}&t=m&z=${activeCity.zoom}&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="service-areas" className="relative w-full min-h-[580px] sm:min-h-[640px] bg-[#E8ECE9] overflow-hidden">
      
      {/* Real Original Google Map Container */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-auto">
        <iframe
          title="Google Map Service Areas"
          src={googleMapSrc}
          className="w-full h-full border-0 grayscale-[15%] contrast-[105%]"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* Subtle gradient vignette to blend with card and edges */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-black/10" />
      </div>

      {/* Floating Service Areas Card matching reference screenshot UI with website brand theme */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 min-h-[560px] sm:min-h-[620px] flex items-end justify-start pointer-events-none">
        <div className="pointer-events-auto bg-[#071910] text-white rounded-[24px] p-6 sm:p-7 max-w-[430px] w-full shadow-2xl border border-emerald-500/30 ring-1 ring-emerald-400/20 backdrop-blur-xs select-none">
          
          {/* Card Title */}
          <h2 className="text-2xl sm:text-[26px] font-black uppercase tracking-tight text-white font-sans mb-1">
            USA DISTRIBUTION HUBS
          </h2>
          <p className="text-xs text-emerald-200/80 mb-4 font-normal">
            Factory-direct wholesale pallet &amp; container freight shipping across all 50 states.
          </p>

          {/* City Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-5">
            {SERVICE_CITIES.map((city) => {
              const isSelected = activeCityId === city.id;
              return (
                <button
                  key={city.id}
                  onClick={() => setActiveCityId(city.id)}
                  type="button"
                  className={`text-[12px] sm:text-[12.5px] font-black uppercase tracking-wider px-4 py-2 rounded-full transition-all cursor-pointer font-sans select-none ${
                    isSelected
                      ? 'bg-[#E5A912] text-[#071910] shadow-md transform scale-102 font-black'
                      : 'bg-[#0D3823] text-emerald-100/90 hover:bg-[#124a2f] hover:text-white border border-emerald-500/20'
                  }`}
                  id={`area-pill-${city.id}`}
                >
                  {city.name}
                </button>
              );
            })}
          </div>

          {/* Action Button matching other page buttons and website theme */}
          <button
            onClick={onOpenSchedule}
            type="button"
            className="w-full h-[50px] inline-flex items-center justify-center gap-3 bg-[#0D3823] hover:bg-[#072416] text-white font-black text-xs uppercase tracking-wider pl-2 pr-6 rounded-full shadow-lg border border-emerald-500/30 hover:border-emerald-400/50 hover:shadow-emerald-950/40 transition-all transform active:scale-95 group ring-1 ring-[#E5A912]/20 cursor-pointer"
            id="explore-service-areas-btn"
          >
            <span className="w-7 h-7 rounded-full bg-[#E5A912] text-[#0D3823] font-black flex items-center justify-center group-hover:translate-x-0.5 transition-transform shadow-xs shrink-0">
              <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
            </span>
            <span className="whitespace-nowrap">REQUEST WHOLESALE FREIGHT</span>
          </button>
        </div>
      </div>
    </section>
  );
};

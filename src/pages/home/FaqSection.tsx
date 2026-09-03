import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FaqSectionProps {
  onOpenSchedule: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = () => {
  // Matching the reference image where the bottom question is opened by default
  const [openIndex, setOpenIndex] = useState<number | null>(5);

  const faqs = [
    {
      q: 'How quickly can FenceFix Houston repair my fence?',
      a: 'We offer rapid dispatch across Texas with same-day emergency triage and 24 to 48-hour standard repair turnaround. Our mobile fence fabrication trucks carry full post, picket, and gate hardware stock to complete most residential repairs in a single visit.',
    },
    {
      q: 'How much does fence repair usually cost in Houston?',
      a: 'Fence repair costs depend on the length of damaged sections, post stability, and material type (cedar, pine, iron, or chain link). We provide 100% upfront, itemized estimates with no hidden fees before starting any work.',
    },
    {
      q: 'Do you serve residential and commercial properties?',
      a: 'Yes, we service both residential perimeter fences and heavy-duty commercial security installations, including industrial chain link, automated cantilever slide gates, masonry pillar repairs, and security enclosures.',
    },
    {
      q: 'What should I do if my fence is leaning or unstable?',
      a: 'A leaning fence often indicates rotted wooden posts beneath ground level or compromised concrete footers. We recommend keeping pets and children clear of the unstable run and booking an immediate inspection so our crew can set reinforced steel or concrete posts.',
    },
    {
      q: 'Can you repair gates that are not closing properly?',
      a: 'Yes! Gate sagging, latch misalignment, rusted hinges, and warped wood frames are among our most frequent repair calls. We re-square gate frames, reinforce diagonal truss bracing, and replace heavy-duty self-closing hardware.',
    },
    {
      q: 'How do I prepare my yard before fence repair?',
      a: 'Before our team arrives, it is helps clear the area around your fence so we can work safely and efficiently. Move outdoor furniture, plants, decorations, or any objects that are close to then fence line. If possible, trim back bushes or vine that may be blocking access our FenceFix.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white text-gray-900">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6">
        
        {/* Section Header matching exact image layout */}
        <div className="text-center space-y-3.5 mb-12 sm:mb-14">
          {/* Eyebrow Pill Badge: • FREQUENTLY ASKED QUESTION */}
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-gray-900/80 bg-white text-[11px] sm:text-[12px] font-bold tracking-wider text-gray-900 uppercase font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D3823]"></span>
            <span>FREQUENTLY ASKED QUESTION</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-black uppercase text-gray-900 tracking-tight leading-[1.1] font-sans">
            GOT QUESTIONS? WE'VE GOT ANSWERS
          </h2>
        </div>

        {/* FAQ Accordion List matching screenshot structure */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-[14px] border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0D3823] border-[#072416] text-white shadow-lg ring-1 ring-[#0D3823]/30'
                    : 'bg-white border-gray-900/85 text-gray-900 hover:border-gray-900 shadow-2xs'
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between px-5 sm:px-6 py-4.5 text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={`text-[14px] sm:text-[16px] font-bold tracking-tight leading-snug font-sans ${isOpen ? 'text-white italic' : 'text-gray-900'}`}>
                    Q. {faq.q}
                  </span>

                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ml-3 transition-colors ${
                      isOpen
                        ? 'border border-white/60 text-white bg-white/10'
                        : 'border border-gray-900/70 text-gray-900 bg-transparent'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {/* Accordion Answer */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-[13px] sm:text-[13.5px] leading-relaxed text-emerald-100/90 font-normal">
                    <p>
                      <span className="font-bold text-[#E5A912] mr-1">A.</span>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


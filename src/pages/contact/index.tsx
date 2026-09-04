import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  Send, 
  ChevronRight, 
  Check,
  Building2,
  MessageSquare,
  FileText
} from 'lucide-react';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { MarqueeTicker } from '../home/MarqueeTicker';
import { ServiceAreasMap } from '../home/ServiceAreasMap';
import { FaqSection } from '../home/FaqSection';
import { ConversionBanner } from '../home/ConversionBanner';
import { PRODUCTS_DATA } from '../../data/products';
import { IMAGES } from '../../data/images';

interface ContactPageProps {
  initialProductId?: string;
  initialQuoteMode?: boolean;
  onNavigateSection: (sectionId: string) => void;
  onNavigatePage: (page: 'home' | 'products' | 'about' | 'contact', params?: { quote?: boolean; productId?: string }) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  initialProductId,
  onNavigateSection,
  onNavigatePage,
}) => {
  const [contactType, setContactType] = useState<'wholesale' | 'general'>('wholesale');

  // Wholesale form state
  const [wholesaleForm, setWholesaleForm] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    productLine: initialProductId 
      ? (PRODUCTS_DATA.find((p) => p.id === initialProductId)?.name || 'Custom Fittings & Stamping') 
      : 'Chain Link Fittings & Post Clamps',
    orderVolume: 'Mixed Pallet Quantity',
    customNotes: '',
  });

  // General contact form state
  const [generalForm, setGeneralForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'General Question',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');

  useEffect(() => {
    if (initialProductId) {
      const prod = PRODUCTS_DATA.find((p) => p.id === initialProductId);
      if (prod) {
        setWholesaleForm((prev) => ({
          ...prev,
          productLine: prod.name,
        }));
        setContactType('wholesale');
      }
    }
  }, [initialProductId]);

  const handleWholesaleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!wholesaleForm.companyName || !wholesaleForm.contactName || !wholesaleForm.phone) return;
    const generatedRfq = `RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceNumber(generatedRfq);
    setSubmitted(true);
    const el = document.getElementById('contact-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGeneralSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!generalForm.fullName || !generalForm.email || !generalForm.message) return;
    const generatedMsg = `MSG-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceNumber(generatedMsg);
    setSubmitted(true);
    const el = document.getElementById('contact-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleReset = () => {
    setSubmitted(false);
    setWholesaleForm({
      companyName: '',
      contactName: '',
      phone: '',
      email: '',
      productLine: 'Chain Link Fittings & Post Clamps',
      orderVolume: 'Mixed Pallet Quantity',
      customNotes: '',
    });
    setGeneralForm({
      fullName: '',
      email: '',
      phone: '',
      subject: 'General Question',
      message: '',
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-[#0D3823] selection:text-[#E5A912]">
      <Navbar
        onOpenSchedule={() => {
          const el = document.getElementById('contact-form');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onNavigateSection={onNavigateSection}
        onNavigatePage={onNavigatePage}
        currentRoute="contact"
      />

      <main className="flex-1">
        {/* Simple, Clean Hero - Full Height, No Tag */}
        <section className="relative bg-[#071910] text-white pt-32 sm:pt-40 lg:pt-44 pb-16 sm:pb-24 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-25">
            <img
              src={IMAGES.installerWork || IMAGES.hero}
              alt="GaurLink Wholesale Desk"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#071910] via-[#071910]/80 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
              <button 
                onClick={() => onNavigatePage('home')}
                className="hover:text-[#E5A912] transition-colors cursor-pointer"
              >
                Home
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-[#E5A912]" />
              <span className="text-[#E5A912]">Contact</span>
            </div>

            <div className="max-w-3xl space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-tight">
                GET IN TOUCH<br className="hidden sm:inline" /> WITH GAURLINK
              </h1>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                Direct container and pallet pricing for fence supply yards, or general customer support and technical specifications.
              </p>
            </div>
          </div>
        </section>

        {/* Marquee Ticker under Hero */}
        <MarqueeTicker
          variant="deep-green"
          items={[
            'DIRECT WHOLESALE DESK',
            '12-24H RFQ TURNAROUND',
            'ASTM A153 GALVANIZED SPEC',
            'FULL CONTAINER & PALLET RATES',
            'DDP US NATIONWIDE FREIGHT',
          ]}
        />

        {/* Form & Contact Details Container */}
        <section id="contact-form" className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Form with Wholesale / Normal Toggle */}
              <div className="lg:col-span-7 bg-white rounded-[28px] p-6 sm:p-8 border-2 border-gray-900 shadow-sm">
                
                {/* Toggle Switcher */}
                <div className="flex items-center p-1.5 bg-gray-100 rounded-2xl mb-6 border border-gray-200/80">
                  <button
                    type="button"
                    onClick={() => { setContactType('wholesale'); setSubmitted(false); }}
                    className={`flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                      contactType === 'wholesale'
                        ? 'bg-[#0D3823] text-white shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <FileText className="w-4 h-4" />
                    <span>Wholesale &amp; RFQ</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => { setContactType('general'); setSubmitted(false); }}
                    className={`flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                      contactType === 'general'
                        ? 'bg-[#0D3823] text-white shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>General Contact</span>
                  </button>
                </div>

                {submitted ? (
                  <div className="text-center py-8 space-y-5">
                    <div className="w-14 h-14 rounded-full bg-emerald-50 text-[#0D3823] flex items-center justify-center mx-auto border-2 border-emerald-200">
                      <Check className="w-7 h-7 stroke-[3]" />
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-xs font-black text-[#0D3823] uppercase tracking-wider bg-emerald-100/70 px-3 py-1 rounded-full">
                        Reference ID: {referenceNumber}
                      </span>
                      <h3 className="text-xl font-black uppercase text-gray-900">
                        {contactType === 'wholesale' ? 'Quote Request Received' : 'Message Received'}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                        Thank you, <strong>{contactType === 'wholesale' ? wholesaleForm.contactName : generalForm.fullName}</strong>. Our team will review your inquiry and reply within 12–24 business hours.
                      </p>
                    </div>

                    {contactType === 'wholesale' && (
                      <div className="p-3.5 bg-[#FBFBFA] rounded-2xl border border-gray-200 max-w-sm mx-auto text-left text-xs space-y-1">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Company:</span>
                          <span className="font-bold text-gray-900">{wholesaleForm.companyName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Product Line:</span>
                          <span className="font-bold text-gray-900 truncate max-w-[200px]">{wholesaleForm.productLine}</span>
                        </div>
                      </div>
                    )}

                    <div className="pt-2 flex items-center justify-center gap-3">
                      <button
                        onClick={handleReset}
                        className="h-[42px] px-5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-black uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Submit Another
                      </button>
                      <button
                        onClick={() => onNavigatePage('products')}
                        className="h-[42px] px-5 rounded-full bg-[#0D3823] hover:bg-[#072416] text-white text-xs font-black uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Browse Products
                      </button>
                    </div>
                  </div>
                ) : contactType === 'wholesale' ? (
                  /* Wholesale RFQ Form */
                  <form onSubmit={handleWholesaleSubmit} className="space-y-4">
                    <div>
                      <h2 className="text-lg sm:text-xl font-black uppercase text-gray-900 tracking-tight">
                        Request Wholesale Quote
                      </h2>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Tell us about your company and container or pallet specifications.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="text-[11px] font-black text-gray-700 uppercase tracking-wider block mb-1">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={wholesaleForm.companyName}
                          onChange={(e) => setWholesaleForm({ ...wholesaleForm, companyName: e.target.value })}
                          placeholder="e.g. Apex Fence Supply"
                          className="w-full h-[42px] px-3.5 rounded-xl bg-gray-50 border border-gray-300 text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D3823]"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-black text-gray-700 uppercase tracking-wider block mb-1">
                          Contact Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={wholesaleForm.contactName}
                          onChange={(e) => setWholesaleForm({ ...wholesaleForm, contactName: e.target.value })}
                          placeholder="e.g. Robert Davis"
                          className="w-full h-[42px] px-3.5 rounded-xl bg-gray-50 border border-gray-300 text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D3823]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="text-[11px] font-black text-gray-700 uppercase tracking-wider block mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={wholesaleForm.phone}
                          onChange={(e) => setWholesaleForm({ ...wholesaleForm, phone: e.target.value })}
                          placeholder="(555) 000-0000"
                          className="w-full h-[42px] px-3.5 rounded-xl bg-gray-50 border border-gray-300 text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D3823]"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-black text-gray-700 uppercase tracking-wider block mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={wholesaleForm.email}
                          onChange={(e) => setWholesaleForm({ ...wholesaleForm, email: e.target.value })}
                          placeholder="procurement@company.com"
                          className="w-full h-[42px] px-3.5 rounded-xl bg-gray-50 border border-gray-300 text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D3823]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="text-[11px] font-black text-gray-700 uppercase tracking-wider block mb-1">
                          Product Line
                        </label>
                        <select
                          value={wholesaleForm.productLine}
                          onChange={(e) => setWholesaleForm({ ...wholesaleForm, productLine: e.target.value })}
                          className="w-full h-[42px] px-3 rounded-xl bg-gray-50 border border-gray-300 text-xs font-bold text-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D3823]"
                        >
                          <option value="Chain Link Fittings & Post Clamps">Chain Link Fittings</option>
                          <option value="Gate Hinges & Latches">Gate Hinges &amp; Latches</option>
                          <option value="Tension Bars & Wire Grips">Tension Bars</option>
                          <option value="Cantilever & Industrial Rollers">Cantilever Rollers</option>
                          <option value="Custom Stamping & OEM Die Works">Custom Stamping &amp; OEM</option>
                          <option value="Mixed Full Container Load">Mixed Container Load</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[11px] font-black text-gray-700 uppercase tracking-wider block mb-1">
                          Estimated Volume
                        </label>
                        <select
                          value={wholesaleForm.orderVolume}
                          onChange={(e) => setWholesaleForm({ ...wholesaleForm, orderVolume: e.target.value })}
                          className="w-full h-[42px] px-3 rounded-xl bg-gray-50 border border-gray-300 text-xs font-bold text-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D3823]"
                        >
                          <option value="Mixed Pallet Quantity">Mixed Pallet (LCL)</option>
                          <option value="Full 20ft Container">20ft Container</option>
                          <option value="Full 40ft High Cube Container">40ft Container</option>
                          <option value="Sample Order / Prototype Die">Sample Order</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-black text-gray-700 uppercase tracking-wider block mb-1">
                        Notes or Part Specifications
                      </label>
                      <textarea
                        rows={3}
                        value={wholesaleForm.customNotes}
                        onChange={(e) => setWholesaleForm({ ...wholesaleForm, customNotes: e.target.value })}
                        placeholder="Specify post/pipe sizes, quantities, ASTM requirements, or drawing references..."
                        className="w-full p-3 rounded-xl bg-gray-50 border border-gray-300 text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D3823]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full h-[48px] inline-flex items-center justify-center gap-2.5 bg-[#0D3823] hover:bg-[#072416] text-white font-black text-xs uppercase tracking-wider rounded-full shadow-md transition-all cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Request Wholesale Quote</span>
                    </button>
                  </form>
                ) : (
                  /* General / Normal Contact Form */
                  <form onSubmit={handleGeneralSubmit} className="space-y-4">
                    <div>
                      <h2 className="text-lg sm:text-xl font-black uppercase text-gray-900 tracking-tight">
                        General Contact &amp; Support
                      </h2>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Have a general question, product inquiry, or customer service need?
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="text-[11px] font-black text-gray-700 uppercase tracking-wider block mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={generalForm.fullName}
                          onChange={(e) => setGeneralForm({ ...generalForm, fullName: e.target.value })}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full h-[42px] px-3.5 rounded-xl bg-gray-50 border border-gray-300 text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D3823]"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-black text-gray-700 uppercase tracking-wider block mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={generalForm.email}
                          onChange={(e) => setGeneralForm({ ...generalForm, email: e.target.value })}
                          placeholder="sarah@example.com"
                          className="w-full h-[42px] px-3.5 rounded-xl bg-gray-50 border border-gray-300 text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D3823]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="text-[11px] font-black text-gray-700 uppercase tracking-wider block mb-1">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          value={generalForm.phone}
                          onChange={(e) => setGeneralForm({ ...generalForm, phone: e.target.value })}
                          placeholder="(555) 000-0000"
                          className="w-full h-[42px] px-3.5 rounded-xl bg-gray-50 border border-gray-300 text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D3823]"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-black text-gray-700 uppercase tracking-wider block mb-1">
                          Topic / Subject
                        </label>
                        <select
                          value={generalForm.subject}
                          onChange={(e) => setGeneralForm({ ...generalForm, subject: e.target.value })}
                          className="w-full h-[42px] px-3 rounded-xl bg-gray-50 border border-gray-300 text-xs font-bold text-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D3823]"
                        >
                          <option value="General Question">General Question</option>
                          <option value="Product Specifications & Catalog">Product Specifications &amp; Catalog</option>
                          <option value="Distributor Partnerships">Distributor Partnerships</option>
                          <option value="Order Status & Tracking">Order Status &amp; Tracking</option>
                          <option value="Feedback & Quality">Feedback &amp; Quality</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-black text-gray-700 uppercase tracking-wider block mb-1">
                        Your Message *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={generalForm.message}
                        onChange={(e) => setGeneralForm({ ...generalForm, message: e.target.value })}
                        placeholder="How can our customer service or technical team help you today?"
                        className="w-full p-3 rounded-xl bg-gray-50 border border-gray-300 text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D3823]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full h-[48px] inline-flex items-center justify-center gap-2.5 bg-[#0D3823] hover:bg-[#072416] text-white font-black text-xs uppercase tracking-wider rounded-full shadow-md transition-all cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Right Column: Clean Contact Details */}
              <div className="lg:col-span-5 space-y-4">
                
                {/* Phone Card */}
                <div className="bg-white rounded-[24px] p-5 border-2 border-gray-900 shadow-xs flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0D3823] text-[#E5A912] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                      Wholesale Phone Desk
                    </span>
                    <a
                      href="tel:7208053155"
                      className="text-base sm:text-lg font-black text-gray-900 hover:text-[#0D3823] transition-colors"
                    >
                      (720) 805-3155
                    </a>
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-white rounded-[24px] p-5 border-2 border-gray-900 shadow-xs flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0D3823] text-[#E5A912] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                      Email Inquiries
                    </span>
                    <a
                      href="mailto:contact@gaurlink.com"
                      className="text-base sm:text-lg font-black text-gray-900 hover:text-[#0D3823] transition-colors"
                    >
                      contact@gaurlink.com
                    </a>
                  </div>
                </div>

                {/* Facility Card */}
                <div className="bg-white rounded-[24px] p-5 border-2 border-gray-900 shadow-xs flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0D3823] text-[#E5A912] flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                      Manufacturing Facility
                    </span>
                    <span className="text-sm font-black text-gray-900 block">
                      20,000 Sq.Ft Plant • DDP US Shipping
                    </span>
                  </div>
                </div>

                {/* Wholesale Guarantees - Clean Green Box */}
                <div className="bg-[#0D3823] rounded-[24px] p-5 text-white shadow-md space-y-2.5">
                  <span className="text-xs font-black uppercase text-[#E5A912] tracking-wider block">
                    Wholesale Standards
                  </span>
                  <div className="space-y-2">
                    {[
                      '12-24h quote turnaround',
                      'ASTM A153 Mill test reports',
                      'DDP delivery to your yard dock',
                      'Custom tooling samples in 15-25 days',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs font-bold text-gray-200">
                        <Check className="w-3.5 h-3.5 text-[#E5A912] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Marquee Ticker right above Map Section */}
        <MarqueeTicker
          variant="deep-green"
          items={[
            'DIRECT WHOLESALE SUPPLY',
            'PALLET & CONTAINER VOLUME',
            'PRECISION PRESSED STEEL',
            'MALLEABLE IRON GATE HINGES',
            'NATIONWIDE CONTRACTOR SUPPLY',
            'CUSTOM OEM TOOLING',
            '12-24H RFQ TURNAROUND',
            'ASTM F626 COMPLIANT',
          ]}
        />

        {/* Map Location Section */}
        <ServiceAreasMap onOpenSchedule={() => {
          const el = document.getElementById('contact-form');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />

        {/* FAQ Section */}
        <FaqSection onOpenSchedule={() => {
          const el = document.getElementById('contact-form');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />

        {/* Conversion Banner */}
        <ConversionBanner onOpenSchedule={() => {
          const el = document.getElementById('contact-form');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />
      </main>

      <Footer
        onNavigateSection={onNavigateSection}
        onOpenSchedule={() => {
          const el = document.getElementById('contact-form');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onNavigatePage={onNavigatePage}
      />
    </div>
  );
};

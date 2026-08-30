import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ShieldCheck, FileCheck } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    buyerType: 'Fence Contractor / Installer',
    productCategory: 'Fence Fittings & Gate Hinges',
    estimatedQuantity: '1,000 - 5,000 pcs',
    destinationZip: '',
    message: '',
    hasBlueprints: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setRefId(`INQ-GL-${Math.floor(100000 + Math.random() * 900000)}`);
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="bg-[#F8FAF7] min-h-screen">
      {/* Contact Page Hero */}
      <section className="bg-[#0F3021] text-white py-14 lg:py-20 border-b border-[#184631]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#86EFAC] bg-white/10 px-3 py-1 rounded-full inline-block mb-3 border border-white/15">
            DIRECT FACTORY COMMUNICATION
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Contact the Gaur Link Commercial Desk
          </h1>
          <p className="text-base sm:text-lg text-gray-200 mt-3 max-w-2xl mx-auto leading-relaxed">
            Speak directly with our engineering and commercial sales specialists. Inquiries answered within 12 to 24 business hours.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Direct Contact Info & Direct DDP Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#1B221E]">Direct US Communications</h2>
                <p className="text-sm text-gray-600 mt-1">
                  We maintain dedicated phone and digital channels for US fence contractors, distributors, and procurement teams.
                </p>
              </div>

              {/* Phone Card */}
              <div className="p-6 bg-white rounded-xl border border-[#D5DDD2] shadow-xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#F0F5F2] border border-[#D5DDD2] flex items-center justify-center text-[#133E2B] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#133E2B]">
                    US Sales Desk &amp; WhatsApp
                  </span>
                  <a
                    href="tel:+13464337572"
                    className="text-lg font-bold text-gray-900 hover:text-[#133E2B] block mt-0.5"
                  >
                    +1 (346) 433-7572
                  </a>
                  <p className="text-xs text-gray-500 mt-1">
                    Direct calling &amp; WhatsApp messaging for prompt pricing quotes and specs.
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-6 bg-white rounded-xl border border-[#D5DDD2] shadow-xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#F0F5F2] border border-[#D5DDD2] flex items-center justify-center text-[#133E2B] shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#133E2B]">
                    Commercial Email
                  </span>
                  <a
                    href="mailto:gaurlink.sales1969@gmail.com"
                    className="text-base font-bold text-gray-900 hover:text-[#133E2B] block mt-0.5 break-all"
                  >
                    gaurlink.sales1969@gmail.com
                  </a>
                  <p className="text-xs text-gray-500 mt-1">
                    Send RFP documents, RFQs, part drawings, or purchase orders.
                  </p>
                </div>
              </div>

              {/* Manufacturing Facility */}
              <div className="p-6 bg-white rounded-xl border border-[#D5DDD2] shadow-xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#F0F5F2] border border-[#D5DDD2] flex items-center justify-center text-[#133E2B] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#133E2B]">
                    Manufacturing Works
                  </span>
                  <h3 className="text-sm font-bold text-gray-900 mt-0.5">
                    20,000 SQFT Advanced Stamping &amp; Hot-Dip Galvanizing Works
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    ISO 9001:2015 Certified Plant • Container Dispatch directly to US Ports.
                  </p>
                </div>
              </div>

              {/* Ocean Freight Delivery Note */}
              <div className="p-5 bg-[#EFF5F1] rounded-xl border border-[#C5DDCB] text-xs text-[#133E2B] space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#133E2B]" />
                  <span>Delivered Duty Paid (DDP) to Your Yard</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We handle the complete ocean transit, US customs tariffs, port clearance, and inland trucking right to your warehouse unloading bay. No customs hassle for your team.
                </p>
              </div>

            </div>

            {/* Right Column: Interactive Commercial Inquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#D5DDD2] shadow-sm">
                
                {submitted ? (
                  <div className="text-center py-10 space-y-6">
                    <div className="w-16 h-16 bg-[#133E2B]/10 text-[#133E2B] rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-10 h-10" />
                    </div>

                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#133E2B] bg-[#EAF2EC] px-3 py-1 rounded-full">
                        Inquiry Dispatched
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mt-3">
                        Thank you, {formData.fullName}!
                      </h3>
                      <p className="text-sm text-gray-600 max-w-md mx-auto mt-2">
                        Your inquiry has been logged with our US commercial department. A technical specialist will contact you shortly.
                      </p>
                      <div className="inline-block mt-3 px-4 py-2 bg-[#F1F5F0] border border-[#CBD5E1] rounded-lg font-mono font-bold text-[#133E2B]">
                        Tracking ID: {refId}
                      </div>
                    </div>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-[#133E2B] text-white font-bold rounded-lg text-sm hover:bg-[#0D2B1E] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Commercial Quote &amp; Specification Request</h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Fill out the form below to receive factory pricing, ASTM certifications, and container delivery schedules.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Robert Smith"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#133E2B] focus:border-transparent outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                          Company / Contractor Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Apex Perimeter Solutions LLC"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#133E2B] focus:border-transparent outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                          Work Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="rsmith@apexperimeter.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#133E2B] focus:border-transparent outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="(832) 555-0144"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#133E2B] focus:border-transparent outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                          Business Profile
                        </label>
                        <select
                          value={formData.buyerType}
                          onChange={(e) => setFormData({ ...formData, buyerType: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-[#133E2B] focus:border-transparent outline-none"
                        >
                          <option value="Fence Contractor / Installer">Fence Contractor / Installer</option>
                          <option value="Fencing Supply Wholesaler">Fencing Supply Wholesaler</option>
                          <option value="General Commercial Builder">General Commercial Builder</option>
                          <option value="Industrial / Facility Owner">Industrial / Facility Owner</option>
                          <option value="Gate Automation Specialist">Gate Automation Specialist</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                          Estimated Order Volume
                        </label>
                        <select
                          value={formData.estimatedQuantity}
                          onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-[#133E2B] focus:border-transparent outline-none"
                        >
                          <option value="Sample Order (< 250 pcs)">Sample Order (&lt; 250 pcs)</option>
                          <option value="1,000 - 5,000 pcs">1,000 - 5,000 pcs (Contractor Bulk)</option>
                          <option value="5,000 - 25,000 pcs">5,000 - 25,000 pcs (High Volume)</option>
                          <option value="Full 20ft / 40ft Container Load">Full 20ft / 40ft Container Load (FCL)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Delivery State &amp; Zip Code (Continental USA)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Atlanta, GA 30303"
                        value={formData.destinationZip}
                        onChange={(e) => setFormData({ ...formData, destinationZip: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#133E2B] focus:border-transparent outline-none"
                      />
                    </div>

                    <div className="p-3 bg-[#F4F7F3] rounded-lg border border-[#D7E2D5] flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="hasCadContact"
                        checked={formData.hasBlueprints}
                        onChange={(e) => setFormData({ ...formData, hasBlueprints: e.target.checked })}
                        className="w-4 h-4 text-[#133E2B] rounded border-gray-300 focus:ring-[#133E2B]"
                      />
                      <label htmlFor="hasCadContact" className="text-xs text-gray-800 font-medium cursor-pointer">
                        <strong>Custom Tooling / OEM Die Mold Needed:</strong> I have blueprints or custom specs for Gaur Link to fabricate.
                      </label>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Detailed Project Requirements or Questions
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Specify part types (e.g. 180° offset hinges, barbed arms, tension bars), pipe OD dimensions, required finish, target delivery dates..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#133E2B] focus:border-transparent outline-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 bg-[#133E2B] hover:bg-[#0D2B1E] text-white font-bold text-sm uppercase tracking-wider rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {submitting ? (
                        <span>Processing Request...</span>
                      ) : (
                        <>
                          <span>Submit Commercial Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-gray-400 text-center">
                      We never share customer contact information. Certified mill test reports provided upon request.
                    </p>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string | null;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    cityState: '',
    productLine: initialService || 'Chain Link Fittings & Clamps',
    orderVolume: 'Mixed Pallet Quantity',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.contactName || !formData.phone) return;
    const generatedId = `RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(generatedId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      companyName: '',
      contactName: '',
      phone: '',
      email: '',
      cityState: '',
      productLine: 'Chain Link Fittings & Clamps',
      orderVolume: 'Mixed Pallet Quantity',
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Ribbon in Gaur Brand Green */}
        <div className="bg-[#0D3823] text-white p-6 relative border-b border-emerald-800">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E5A912] text-[#0D3823] text-[10px] font-black uppercase tracking-wider mb-2">
            B2B WHOLESALE DESK • FACTORY DIRECT
          </div>

          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
            REQUEST WHOLESALE QUOTE
          </h3>
          <p className="text-xs text-emerald-100/80 mt-1">
            Submit your bill of materials, master carton specs, or container load requirements for tier-one pricing.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#0D3823] flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-9 h-9 stroke-[2.5]" />
              </div>

              <div className="space-y-1">
                <h4 className="text-xl font-black text-gray-900 uppercase">
                  WHOLESALE RFQ RECEIVED!
                </h4>
                <p className="text-xs text-gray-500">
                  Confirmation Tracking ID: <span className="font-mono font-bold text-[#0D3823]">{ticketId}</span>
                </p>
              </div>

              <p className="text-xs text-gray-600 max-w-xs mx-auto leading-relaxed">
                Thank you, <strong>{formData.contactName}</strong> from <strong>{formData.companyName}</strong>. Our commercial wholesale desk will review your specs and email your tiered price quotation and freight estimate.
              </p>

              <div className="bg-[#F8FAF8] rounded-xl p-3.5 border border-gray-200 text-left text-xs space-y-1 text-gray-700">
                <div className="flex justify-between">
                  <span className="text-gray-500">Product Line:</span>
                  <span className="font-bold text-gray-900">{formData.productLine}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Order Volume:</span>
                  <span className="font-bold text-gray-900">{formData.orderVolume}</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="w-full bg-[#0D3823] hover:bg-[#072416] text-white font-bold text-xs uppercase py-3 rounded-full transition-colors shadow-md"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                    Company / Supply Yard *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Fence Supply Co."
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full bg-[#F4F7F5] border border-gray-200 rounded-lg px-3.5 py-2 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0D3823]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full bg-[#F4F7F5] border border-gray-200 rounded-lg px-3.5 py-2 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0D3823]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(720) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#F4F7F5] border border-gray-200 rounded-lg px-3.5 py-2 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0D3823]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="purchasing@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#F4F7F5] border border-gray-200 rounded-lg px-3.5 py-2 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0D3823]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                  Destination City, State &amp; Zip
                </label>
                <input
                  type="text"
                  placeholder="Houston, TX 77001 or freight terminal"
                  value={formData.cityState}
                  onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                  className="w-full bg-[#F4F7F5] border border-gray-200 rounded-lg px-3.5 py-2 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0D3823]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                    Primary Product Line
                  </label>
                  <select
                    value={formData.productLine}
                    onChange={(e) => setFormData({ ...formData, productLine: e.target.value })}
                    className="w-full bg-[#F4F7F5] border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0D3823]"
                  >
                    <option value="Chain Link Fittings & Clamps">Chain Link Fittings &amp; Clamps</option>
                    <option value="Commercial Gate Hinges (180° / Box)">Commercial Gate Hinges (180° / Box)</option>
                    <option value="Tension Bands, Bars & Collars">Tension Bands, Bars &amp; Collars</option>
                    <option value="Rolling Gate Hardware & Cantilever Rollers">Rolling Gate &amp; Cantilever Rollers</option>
                    <option value="Industrial Drop Rods & Latches">Industrial Drop Rods &amp; Latches</option>
                    <option value="Custom OEM Tooling & Stamping">Custom OEM Tooling &amp; Stamping</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                    Estimated Order Volume
                  </label>
                  <select
                    value={formData.orderVolume}
                    onChange={(e) => setFormData({ ...formData, orderVolume: e.target.value })}
                    className="w-full bg-[#F4F7F5] border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0D3823]"
                  >
                    <option value="Master Carton Quantities (50-200 pcs)">Master Cartons (50-200 pcs)</option>
                    <option value="Mixed Pallet Quantity">Mixed Pallet Quantity</option>
                    <option value="Full Truckload / Multi-Pallet">Full Truckload / Multi-Pallet</option>
                    <option value="20ft / 40ft Container Load">20ft / 40ft Container Load</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                  SKU Requirements or Blueprint Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. 500 pcs 2-3/8 in. line post caps, 200 sets 180-deg hinges, HDG finish..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#F4F7F5] border border-gray-200 rounded-lg px-3.5 py-2 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0D3823] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#0D3823] hover:bg-[#072416] text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-full shadow-md transition-all mt-2 group border border-emerald-600/30"
              >
                <span>SUBMIT WHOLESALE RFQ</span>
                <span className="w-5 h-5 rounded-full bg-[#E5A912] text-[#0D3823] flex items-center justify-center font-bold">
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

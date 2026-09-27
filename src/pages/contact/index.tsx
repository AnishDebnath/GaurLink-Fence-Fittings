import React, { useState, useEffect } from 'react';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { MarqueeTicker } from '../../components/common/Ticker';
import { TICKER_CONTACT_TOP, TICKER_CONTACT_BOTTOM } from '../../data/ticker';
import { ServiceAreasMap } from '../../components/common/Areas';
import { FaqSection } from '../../components/common/Faq';
import { ConversionBanner } from '../../components/common/Cta';
import { PRODUCTS_DATA } from '../../data/products';
import { Hero } from './Hero';
import { Form } from './Form';

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

  const scrollToForm = () => {
    const el = document.getElementById('contact-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-[#0D3823] selection:text-[#E5A912]">
      <Navbar
        onOpenSchedule={scrollToForm}
        onNavigateSection={onNavigateSection}
        onNavigatePage={onNavigatePage}
        currentRoute="contact"
      />

      <main className="flex-1">
        <Hero onNavigatePage={onNavigatePage} />

        {/* Marquee Ticker under Hero */}
        <MarqueeTicker
          variant="deep-green"
          items={TICKER_CONTACT_TOP}
        />

        <Form
          contactType={contactType}
          setContactType={(type) => { setContactType(type); setSubmitted(false); }}
          wholesaleForm={wholesaleForm}
          setWholesaleForm={setWholesaleForm}
          generalForm={generalForm}
          setGeneralForm={setGeneralForm}
          submitted={submitted}
          referenceNumber={referenceNumber}
          handleWholesaleSubmit={handleWholesaleSubmit}
          handleGeneralSubmit={handleGeneralSubmit}
          handleReset={handleReset}
          onNavigatePage={onNavigatePage}
        />

        {/* Marquee Ticker right above Map Section */}
        <MarqueeTicker
          variant="deep-green"
          items={TICKER_CONTACT_BOTTOM}
        />

        {/* Map Location Section */}
        <ServiceAreasMap onOpenSchedule={scrollToForm} />

        {/* FAQ Section */}
        <FaqSection onOpenSchedule={scrollToForm} />

        {/* Conversion Banner */}
        <ConversionBanner onOpenSchedule={scrollToForm} />
      </main>

      <Footer
        onNavigateSection={onNavigateSection}
        onOpenSchedule={scrollToForm}
        onNavigatePage={onNavigatePage}
      />
    </div>
  );
};

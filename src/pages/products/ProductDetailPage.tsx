import React, { useState } from 'react';
import { 
  ChevronRight, 
  ArrowRight, 
  ShieldCheck, 
  Download, 
  Phone, 
  Package, 
  Truck, 
  FileText, 
  ArrowLeft, 
  Share2, 
  Check, 
  Building2, 
  Star
} from 'lucide-react';
import { PRODUCTS_DATA } from '../../data/products';
import { ProductItem } from '../../types';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { MarqueeTicker } from '../home/MarqueeTicker';
import { ConversionBanner } from '../home/ConversionBanner';

interface ProductDetailPageProps {
  productId: string;
  onNavigateSection: (sectionId: string) => void;
  onNavigatePage: (page: 'home' | 'products' | 'about' | 'contact', params?: { quote?: boolean; productId?: string }) => void;
  onSelectProduct: (productId: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  productId,
  onNavigateSection,
  onNavigatePage,
  onSelectProduct,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'specs' | 'features' | 'applications' | 'shipping'>('specs');
  const [copiedLink, setCopiedLink] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const product: ProductItem = 
    PRODUCTS_DATA.find((p) => p.id === productId) || PRODUCTS_DATA[0];

  // Initialize selected size
  React.useEffect(() => {
    if (product.commonSizes && product.commonSizes.length > 0) {
      setSelectedSize(product.commonSizes[0]);
    }
  }, [product]);

  // Related products from same category or others
  const relatedProducts = PRODUCTS_DATA
    .filter((p) => p.id !== product.id)
    .sort((a) => (a.category === product.category ? -1 : 1))
    .slice(0, 3);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleDownloadSpec = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-[#0D3823] selection:text-[#E5A912]">
      <Navbar
        onOpenSchedule={() => onNavigatePage('contact', { quote: true, productId: product.id })}
        onNavigateSection={onNavigateSection}
        onNavigatePage={onNavigatePage}
        currentRoute="products"
      />

      <main className="flex-1">
        {/* Top Breadcrumb Bar */}
        <section className="bg-[#FBFBFA] border-b border-gray-200 pt-28 sm:pt-32 pb-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 font-bold text-gray-600 uppercase tracking-wider">
              <button
                onClick={() => onNavigatePage('home')}
                className="hover:text-[#0D3823] transition-colors cursor-pointer"
              >
                Home
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <button
                onClick={() => onNavigatePage('products')}
                className="hover:text-[#0D3823] transition-colors cursor-pointer"
              >
                Products
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-gray-400">{product.categoryLabel}</span>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="font-black text-[#0D3823] truncate max-w-[200px] sm:max-w-none">{product.name}</span>
            </div>

            <button
              onClick={() => onNavigatePage('products')}
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-gray-700 hover:text-[#0D3823] cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Catalog</span>
            </button>
          </div>
        </section>

        {/* Product Main Showcase */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            
            {/* Left Column: Framed Image Showcase */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-[32px] overflow-hidden bg-white border-[2.5px] border-[#1C1C1C] shadow-lg aspect-4/3 sm:aspect-16/11">
                {product.imageSrc ? (
                  <img
                    src={product.imageSrc}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-emerald-950 text-white font-black text-xl">
                    {product.name}
                  </div>
                )}

                {/* Badges on Image */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-[#0D3823] text-[#E5A912] text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md border border-[#E5A912]/30">
                    {product.categoryLabel}
                  </span>
                  {product.tag && (
                    <span className="bg-[#E5A912] text-[#071910] text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md self-start">
                      {product.tag}
                    </span>
                  )}
                </div>

                {/* ASTM Badge */}
                {product.astmCompliance && (
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-[#071910]/95 text-white text-xs font-black px-3.5 py-1.5 rounded-full border border-emerald-500/40 shadow-lg">
                    <ShieldCheck className="w-4 h-4 text-[#E5A912]" />
                    <span>{product.astmCompliance}</span>
                  </div>
                )}
              </div>

              {/* Quality & Trust Badges Strip */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-[#FBFBFA] rounded-[24px] border border-gray-200 text-center">
                <div className="space-y-1">
                  <span className="text-[11px] font-black text-gray-400 uppercase tracking-wider block">Finish</span>
                  <span className="text-xs font-black text-gray-900 block truncate">{product.finish}</span>
                </div>
                <div className="space-y-1 border-x border-gray-200">
                  <span className="text-[11px] font-black text-gray-400 uppercase tracking-wider block">Material</span>
                  <span className="text-xs font-black text-gray-900 block truncate">{product.material}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-black text-gray-400 uppercase tracking-wider block">Production</span>
                  <span className="text-xs font-black text-[#0D3823] block truncate">ISO 9001:2015</span>
                </div>
              </div>
            </div>

            {/* Right Column: Title, Specs, Sizes, and Home Page Pill CTAs */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                {/* 5.0 Star Rating */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex text-[#E5A912] gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-[#E5A912]" />
                    ))}
                  </div>
                  <span className="text-xs font-black text-gray-900 uppercase tracking-wider">
                    5.0 • ASTM CERTIFIED HARDWARE
                  </span>
                </div>

                {/* Eyebrow Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-800 text-[11px] font-bold tracking-wider text-gray-900 uppercase font-sans mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#0D3823]"></span>
                  <span>COMMERCIAL HARDWARE SPEC</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-gray-900 tracking-tight leading-tight font-sans">
                  {product.name}
                </h1>
                <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
                  {product.description || product.shortDesc}
                </p>
              </div>

              {/* Sizes Selection */}
              {product.commonSizes && product.commonSizes.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-gray-900 uppercase tracking-wider">
                      Select Post &amp; Pipe Size:
                    </span>
                    <span className="text-xs font-bold text-gray-500">
                      Active: <strong className="text-[#0D3823]">{selectedSize || 'All Sizes'}</strong>
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.commonSizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`h-[40px] px-4 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer border ${
                          selectedSize === size
                            ? 'bg-[#0D3823] text-white border-[#0D3823] shadow-md ring-1 ring-[#E5A912]/40'
                            : 'bg-white text-gray-800 border-gray-300 hover:border-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Specs Summary Table */}
              <div className="bg-[#FBFBFA] rounded-[24px] p-5 border border-gray-200 space-y-2.5">
                <span className="text-xs font-black text-gray-900 uppercase tracking-wider block mb-2">
                  Technical Parameters:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {product.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 rounded-xl bg-white border border-gray-200">
                      <span className="font-bold text-gray-500">{spec.label}:</span>
                      <span className="font-black text-gray-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons matching Home Page Pill Buttons */}
              <div className="space-y-3 pt-2">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => onNavigatePage('contact', { quote: true, productId: product.id })}
                    className="h-[52px] sm:h-[54px] flex-1 inline-flex items-center justify-center gap-3 bg-[#0D3823] hover:bg-[#072416] text-white font-black text-xs sm:text-sm uppercase tracking-wider pl-2 pr-6 rounded-full shadow-lg border border-emerald-500/30 hover:shadow-xl transition-all transform active:scale-95 group ring-1 ring-[#E5A912]/20 cursor-pointer"
                  >
                    <span className="w-8 h-8 rounded-full bg-[#E5A912] text-[#0D3823] font-black flex items-center justify-center group-hover:translate-x-0.5 transition-transform shadow-xs shrink-0">
                      <ArrowRight className="w-4 h-4 stroke-[3]" />
                    </span>
                    <span className="whitespace-nowrap">REQUEST WHOLESALE RFQ</span>
                  </button>

                  <a
                    href="tel:7208053155"
                    className="h-[52px] sm:h-[54px] inline-flex items-center justify-center gap-2.5 bg-white hover:bg-gray-100 text-gray-950 font-black text-xs sm:text-sm uppercase tracking-wider px-6 rounded-full shadow-md transition-all group shrink-0 cursor-pointer border-2 border-gray-900"
                  >
                    <Phone className="w-4 h-4 text-[#0D3823] fill-current" />
                    <span>(720) 805-3155</span>
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleDownloadSpec}
                    className="flex-1 py-2.5 px-4 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border border-gray-200"
                  >
                    <Download className="w-3.5 h-3.5 text-gray-600" />
                    <span>{downloadSuccess ? 'Specification Sheet Downloaded!' : 'Download Technical Submittal (PDF)'}</span>
                  </button>

                  <button
                    onClick={handleCopyLink}
                    className="py-2.5 px-4 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-gray-200"
                  >
                    <Share2 className="w-3.5 h-3.5 text-gray-600" />
                    <span>{copiedLink ? 'Copied!' : 'Share SKU'}</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Marquee Ticker */}
        <MarqueeTicker
          variant="deep-green"
          items={[
            `${product.name.toUpperCase()} SPECIFICATION`,
            'ASTM A153 GALVANIZED',
            'ISO 9001:2015 CERTIFIED',
            'PALLET & CONTAINER DIRECT SUPPLY',
            'COMMERCIAL CONTRACTOR GRADE',
            'DDP US NATIONWIDE LOGISTICS',
          ]}
        />

        {/* Technical Details Tabs with Home Page styling */}
        <section className="py-14 sm:py-20 bg-[#FBFBFA] border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-800 text-[12px] font-bold tracking-wider text-gray-900 uppercase font-sans mb-3">
                <span className="w-2 h-2 rounded-full bg-[#0D3823]"></span>
                <span>ENGINEERING SUBMITTAL</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-gray-900 tracking-tight">
                COMPREHENSIVE SPECIFICATIONS &amp; SUBMITTALS
              </h2>
            </div>

            {/* Tab Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 pb-4 border-b border-gray-300">
              {[
                { id: 'specs', label: 'Technical Specs', icon: FileText },
                { id: 'features', label: 'Engineering Features', icon: ShieldCheck },
                { id: 'applications', label: 'Commercial Applications', icon: Building2 },
                { id: 'shipping', label: 'Packaging & Freight (DDP)', icon: Truck },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`h-[44px] px-5 sm:px-6 rounded-full text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer border ${
                      isActive
                        ? 'bg-[#0D3823] text-white border-[#0D3823] shadow-md ring-1 ring-[#E5A912]/40'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#E5A912]' : 'text-gray-500'}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Contents in Home Page Card Container */}
            <div className="mt-8 bg-white rounded-[32px] p-6 sm:p-10 border-[2.5px] border-[#1C1C1C] shadow-md">
              {activeTab === 'specs' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-black uppercase text-gray-900">
                    Product Parameters &amp; ASTM Standards
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.specs.map((s, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-[#FBFBFA] border border-gray-200">
                        <span className="font-bold text-gray-600 text-sm">{s.label}</span>
                        <span className="font-black text-gray-900 text-sm text-right">{s.value}</span>
                      </div>
                    ))}
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-[#FBFBFA] border border-gray-200">
                      <span className="font-bold text-gray-600 text-sm">Finishing Process</span>
                      <span className="font-black text-[#0D3823] text-sm text-right">{product.finish}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-[#FBFBFA] border border-gray-200">
                      <span className="font-bold text-gray-600 text-sm">Quality Compliance</span>
                      <span className="font-black text-[#0D3823] text-sm text-right">ISO 9001:2015 Certified</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'features' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-black uppercase text-gray-900">
                    Precision Manufacturing &amp; Structural Integrity
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {product.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FBFBFA] border border-gray-200">
                        <div className="w-6 h-6 rounded-full bg-[#0D3823] text-[#E5A912] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-gray-900 leading-relaxed uppercase tracking-wide">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'applications' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-black uppercase text-gray-900">
                    Recommended Project Sectors &amp; Installations
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {product.applications.map((app, idx) => (
                      <div key={idx} className="p-5 rounded-2xl bg-[#FBFBFA] border border-gray-200 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-[#0D3823] flex items-center justify-center font-black text-xs shrink-0">
                          0{idx + 1}
                        </div>
                        <span className="text-xs sm:text-sm font-black uppercase text-gray-900">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'shipping' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-black uppercase text-gray-900">
                    Packaging Configurations &amp; Freight Options
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-5 rounded-2xl bg-[#FBFBFA] border border-gray-200 space-y-2">
                      <Package className="w-6 h-6 text-[#0D3823]" />
                      <h4 className="font-black text-gray-900 uppercase text-sm">Master Carton Packing</h4>
                      <p className="text-xs text-gray-600 leading-relaxed font-normal">
                        Heavy-duty export corrugated boxes packed with moisture-resistant PE liners and clear SKU barcoding.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#FBFBFA] border border-gray-200 space-y-2">
                      <Truck className="w-6 h-6 text-[#0D3823]" />
                      <h4 className="font-black text-gray-900 uppercase text-sm">Palletized &amp; Banded</h4>
                      <p className="text-xs text-gray-600 leading-relaxed font-normal">
                        Heat-treated ISPM-15 export pallets, corner-board protected, and high-tension steel or PET banded.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#FBFBFA] border border-gray-200 space-y-2">
                      <Building2 className="w-6 h-6 text-[#0D3823]" />
                      <h4 className="font-black text-gray-900 uppercase text-sm">DDP US Direct Freight</h4>
                      <p className="text-xs text-gray-600 leading-relaxed font-normal">
                        Full customs clearance, tariffs, harbor duties, and domestic inland trucking delivered to your supply yard.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* Related Products Grid matching Home Page Cards */}
        {relatedProducts.length > 0 && (
          <section className="py-16 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-800 text-[12px] font-bold tracking-wider text-gray-900 uppercase font-sans mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#0D3823]"></span>
                    <span>RELATED HARDWARE</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black uppercase text-gray-900 tracking-tight">
                    FREQUENTLY ORDERED TOGETHER
                  </h2>
                </div>
                <button
                  onClick={() => onNavigatePage('products')}
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0D3823] hover:underline cursor-pointer self-start sm:self-auto"
                >
                  <span>View Complete Catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProducts.map((rel) => (
                  <div
                    key={rel.id}
                    className="group bg-white rounded-[30px] overflow-hidden border-[2.5px] border-[#1C1C1C] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div 
                        className="relative h-52 w-full overflow-hidden bg-gray-100 cursor-pointer border-b-[2.5px] border-[#1C1C1C]"
                        onClick={() => {
                          onSelectProduct(rel.id);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                      >
                        <img
                          src={rel.imageSrc}
                          alt={rel.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="bg-[#0D3823] text-[#E5A912] text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-md border border-[#E5A912]/30">
                            {rel.categoryLabel}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h4 
                          onClick={() => {
                            onSelectProduct(rel.id);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="text-base font-black uppercase text-gray-900 group-hover:text-[#0D3823] transition-colors cursor-pointer leading-tight mb-2 line-clamp-2 min-h-[2.4em]"
                        >
                          {rel.name}
                        </h4>
                        <p className="text-gray-600 text-xs leading-relaxed line-clamp-2 font-normal">
                          {rel.shortDesc}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-0">
                      <button
                        onClick={() => {
                          onSelectProduct(rel.id);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="w-full h-[42px] sm:h-[44px] flex items-center justify-between bg-[#0D3823] hover:bg-[#072416] text-white pl-1.5 pr-4 sm:pr-5 rounded-full shadow-md hover:shadow-lg transition-all transform active:scale-95 group/btn shrink-0 ring-1 ring-[#E5A912]/30 border border-emerald-600/30 cursor-pointer"
                      >
                        <span className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-[#E5A912] flex items-center justify-center text-[#0D3823] shrink-0 group-hover/btn:translate-x-0.5 transition-transform shadow-xs">
                          <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                        </span>
                        <span className="text-[11.5px] sm:text-[12px] font-black uppercase tracking-wider text-white select-none whitespace-nowrap">
                          VIEW PRODUCT DETAILS
                        </span>
                        <span className="w-2" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>
        )}

        {/* Conversion Banner */}
        <ConversionBanner onOpenSchedule={() => onNavigatePage('contact', { quote: true, productId: product.id })} />
      </main>

      <Footer
        onNavigateSection={onNavigateSection}
        onOpenSchedule={() => onNavigatePage('contact', { quote: true, productId: product.id })}
        onNavigatePage={onNavigatePage}
      />
    </div>
  );
};

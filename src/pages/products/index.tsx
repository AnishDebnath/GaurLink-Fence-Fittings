import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  ChevronRight,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { PRODUCTS_DATA } from '../../data/products';
import { ProductCategory } from '../../types';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { MarqueeTicker } from '../home/MarqueeTicker';
import { ConversionBanner } from '../home/ConversionBanner';
import { IMAGES } from '../../data/images';

interface ProductsPageProps {
  onNavigateSection: (sectionId: string) => void;
  onNavigatePage: (page: 'home' | 'products' | 'about' | 'contact', params?: { quote?: boolean; productId?: string }) => void;
  onSelectProduct: (productId: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onNavigateSection,
  onNavigatePage,
  onSelectProduct,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: ProductCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Products', count: PRODUCTS_DATA.length },
    { id: 'hinges', label: 'Gate Hinges', count: PRODUCTS_DATA.filter((p) => p.category === 'hinges').length },
    { id: 'fittings', label: 'Fence Fittings', count: PRODUCTS_DATA.filter((p) => p.category === 'fittings').length },
    { id: 'gate-hardware', label: 'Gate Hardware', count: PRODUCTS_DATA.filter((p) => p.category === 'gate-hardware').length },
    { id: 'tension-bars', label: 'Tension Bars', count: PRODUCTS_DATA.filter((p) => p.category === 'tension-bars').length },
    { id: 'industrial', label: 'Industrial & Cantilever', count: PRODUCTS_DATA.filter((p) => p.category === 'industrial').length },
    { id: 'custom', label: 'Custom & OEM', count: PRODUCTS_DATA.filter((p) => p.category === 'custom').length },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.material.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-[#0D3823] selection:text-[#E5A912]">
      <Navbar
        onOpenSchedule={() => onNavigatePage('contact', { quote: true })}
        onNavigateSection={onNavigateSection}
        onNavigatePage={onNavigatePage}
        currentRoute="products"
      />

      <main className="flex-1">
        {/* Simple, Clean Header matching Home Page style */}
        <section className="relative bg-[#071910] text-white pt-32 sm:pt-36 pb-12 sm:pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-25">
            <img
              src={IMAGES.hardwareCatalog || IMAGES.hero}
              alt="Fence Hardware Catalog"
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
              <span className="text-[#E5A912]">Products</span>
            </div>

            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/40 bg-[#0D3823]/70 text-[11px] font-bold tracking-wider text-[#E5A912] uppercase font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5A912]"></span>
                <span>FENCE HARDWARE CATALOG</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-tight">
                COMMERCIAL FITTINGS &amp; HARDWARE
              </h1>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                ASTM A153 galvanized pressed steel, malleable iron hinges, and gate hardware for supply yards and contractors.
              </p>
            </div>
          </div>
        </section>

        {/* Marquee Ticker */}
        <MarqueeTicker
          variant="deep-green"
          items={[
            'ASTM A153 HOT-DIP GALVANIZED',
            'ISO 9001:2015 CERTIFIED',
            'COMMERCIAL CONTRACTOR GRADE',
            'DDP US NATIONWIDE LOGISTICS',
            'PALLET & CONTAINER DIRECT SUPPLY',
          ]}
        />

        {/* Clean Filter Bar & Product Catalog */}
        <section className="py-10 sm:py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Filter & Search Controls */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-gray-200 mb-8">
              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`h-[40px] px-4 rounded-full text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 border ${
                        isSelected
                          ? 'bg-[#0D3823] text-white border-[#0D3823] shadow-sm ring-1 ring-[#E5A912]/40'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isSelected ? 'bg-[#E5A912] text-[#071910] font-black' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-72 shrink-0">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-300 rounded-full text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0D3823] focus:border-[#0D3823]"
                />
              </div>
            </div>

            {/* Products Grid - Simple, Clean Cards with Details on Detail Page */}
            {filteredProducts.length === 0 ? (
              <div className="bg-[#FBFBFA] rounded-[24px] p-10 text-center border border-gray-200 max-w-md mx-auto">
                <Filter className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                <h3 className="text-base font-black uppercase text-gray-900">No products found</h3>
                <p className="text-xs text-gray-500 mt-1">Try resetting your category or search keyword.</p>
                <button
                  onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                  className="mt-4 h-[38px] px-5 bg-[#0D3823] text-white text-xs font-black uppercase tracking-wider rounded-full hover:bg-[#072416] transition-colors cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      onSelectProduct(product.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group bg-white rounded-[28px] overflow-hidden border-[2px] border-gray-900 shadow-sm hover:shadow-xl hover:border-[#0D3823] transition-all duration-300 flex flex-col justify-between cursor-pointer"
                  >
                    {/* Product Photo */}
                    <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-100 border-b-2 border-gray-900">
                      <img
                        src={product.imageSrc}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      
                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                        <span className="bg-[#0D3823] text-[#E5A912] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm border border-[#E5A912]/30">
                          {product.categoryLabel}
                        </span>
                        {product.tag && (
                          <span className="bg-[#E5A912] text-[#071910] text-[10px] font-black uppercase px-2 py-0.5 rounded-full shadow-sm">
                            {product.tag}
                          </span>
                        )}
                      </div>

                      {/* ASTM Compliance Badge */}
                      {product.astmCompliance && (
                        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-[#071910]/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#E5A912]" />
                          <span>{product.astmCompliance}</span>
                        </div>
                      )}
                    </div>

                    {/* Card Body - Clean & Concise */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                          {product.material}
                        </span>
                        <h3 className="text-base sm:text-lg font-black uppercase text-gray-900 group-hover:text-[#0D3823] transition-colors leading-snug">
                          {product.name}
                        </h3>
                      </div>

                      {/* Bottom Button */}
                      <div className="pt-2">
                        <div className="w-full h-[42px] rounded-full bg-white group-hover:bg-[#0D3823] text-gray-900 group-hover:text-white text-xs font-black uppercase tracking-wider transition-all flex items-center justify-between px-5 border-2 border-gray-900 group-hover:border-[#0D3823] shadow-xs">
                          <span>View Product Details</span>
                          <ChevronRight className="w-4 h-4 text-[#E5A912] stroke-[3]" />
                        </div>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            )}

            {/* Quick Custom Tooling Note - Simple & Punchy */}
            <div className="mt-14 p-6 sm:p-8 bg-[#FBFBFA] rounded-[28px] border-2 border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[11px] font-black text-[#0D3823] uppercase tracking-wider block">
                  OEM &amp; CUSTOM BLUEPRINTS
                </span>
                <h3 className="text-lg sm:text-xl font-black uppercase text-gray-900">
                  Need Custom Stamped Dies or Bulk Container Pricing?
                </h3>
                <p className="text-xs text-gray-600">
                  Our tool &amp; die division builds custom stamping dies in 15–25 days from your CAD drawings.
                </p>
              </div>
              <button
                onClick={() => onNavigatePage('contact', { quote: true })}
                className="h-[46px] inline-flex items-center gap-2.5 bg-[#0D3823] hover:bg-[#072416] text-white font-black text-xs uppercase tracking-wider pl-2 pr-5 rounded-full shadow-md shrink-0 cursor-pointer"
              >
                <span className="w-7 h-7 rounded-full bg-[#E5A912] text-[#0D3823] flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>Request Custom Quote</span>
              </button>
            </div>

          </div>
        </section>

        {/* Conversion Banner */}
        <ConversionBanner onOpenSchedule={() => onNavigatePage('contact', { quote: true })} />
      </main>

      <Footer
        onNavigateSection={onNavigateSection}
        onOpenSchedule={() => onNavigatePage('contact', { quote: true })}
        onNavigatePage={onNavigatePage}
      />
    </div>
  );
};

export { ProductDetailPage } from './ProductDetailPage';

import React from 'react';
import { 
  ChevronRight, 
  ArrowRight, 
  ArrowLeft, 
  Check 
} from 'lucide-react';
import { PRODUCTS_DATA } from '../../data/products';
import { ProductItem } from '../../types';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';

interface ProductDetailPageProps {
  productId: string;
  onNavigateSection: (sectionId: string) => void;
  onNavigatePage: (page: 'home' | 'products' | 'about' | 'contact', params?: { quote?: boolean; productId?: string }) => void;
  onSelectProduct: (productId: string) => void;
}

interface SpecRow {
  code: string;
  size: string;
  pcsPerBag: number | string;
  bagPerPallet: number | string;
  pcsPerPallet: number | string;
}

// Industry-standard packaging matrix for fence fittings & hardware
function getProductPackagingRows(product: ProductItem): SpecRow[] {
  const id = product.id.toLowerCase();

  if (id.includes('barbed-arm') || id.includes('barbed-y-arm') || id.includes('barbed-arm-vertical') || id.includes('barbed-arm-cup')) {
    return [
      { code: '350', size: '1 5/8"', pcsPerBag: 25, bagPerPallet: 48, pcsPerPallet: 1200 },
      { code: '370', size: '2"', pcsPerBag: 25, bagPerPallet: 40, pcsPerPallet: 1000 },
      { code: '390', size: '2 1/2"', pcsPerBag: 25, bagPerPallet: 32, pcsPerPallet: 800 },
      { code: '410', size: '3"', pcsPerBag: 20, bagPerPallet: 32, pcsPerPallet: 640 },
    ];
  }

  if (id.includes('tension-band') || id.includes('brace-band')) {
    return [
      { code: '210', size: '1 3/8"', pcsPerBag: 100, bagPerPallet: 40, pcsPerPallet: 4000 },
      { code: '220', size: '1 5/8"', pcsPerBag: 100, bagPerPallet: 40, pcsPerPallet: 4000 },
      { code: '230', size: '2"', pcsPerBag: 100, bagPerPallet: 36, pcsPerPallet: 3600 },
      { code: '240', size: '2 1/2"', pcsPerBag: 50, bagPerPallet: 40, pcsPerPallet: 2000 },
      { code: '250', size: '3"', pcsPerBag: 50, bagPerPallet: 32, pcsPerPallet: 1600 },
      { code: '260', size: '4"', pcsPerBag: 25, bagPerPallet: 40, pcsPerPallet: 1000 },
    ];
  }

  if (id.includes('hinge') || id.includes('male-hinge') || id.includes('female-hinge') || id.includes('box-hinge')) {
    return [
      { code: '110', size: '1 3/8" x 2 3/8"', pcsPerBag: 50, bagPerPallet: 36, pcsPerPallet: 1800 },
      { code: '120', size: '1 5/8" x 2 3/8"', pcsPerBag: 50, bagPerPallet: 32, pcsPerPallet: 1600 },
      { code: '130', size: '1 5/8" x 2 7/8"', pcsPerBag: 25, bagPerPallet: 40, pcsPerPallet: 1000 },
      { code: '140', size: '2" x 4"', pcsPerBag: 20, bagPerPallet: 32, pcsPerPallet: 640 },
    ];
  }

  if (id.includes('post-cap') || id.includes('bullet-cap') || id.includes('loop-cap')) {
    return [
      { code: '510', size: '1 5/8"', pcsPerBag: 100, bagPerPallet: 48, pcsPerPallet: 4800 },
      { code: '520', size: '2"', pcsPerBag: 50, bagPerPallet: 50, pcsPerPallet: 2500 },
      { code: '530', size: '2 1/2"', pcsPerBag: 50, bagPerPallet: 40, pcsPerPallet: 2000 },
      { code: '540', size: '3"', pcsPerBag: 25, bagPerPallet: 40, pcsPerPallet: 1000 },
      { code: '550', size: '4"', pcsPerBag: 20, bagPerPallet: 36, pcsPerPallet: 720 },
    ];
  }

  if (id.includes('rail-end') || id.includes('boulevard') || id.includes('clamp') || id.includes('collar') || id.includes('fork')) {
    return [
      { code: '420', size: '1 3/8"', pcsPerBag: 50, bagPerPallet: 48, pcsPerPallet: 2400 },
      { code: '430', size: '1 5/8"', pcsPerBag: 50, bagPerPallet: 40, pcsPerPallet: 2000 },
      { code: '440', size: '2"', pcsPerBag: 25, bagPerPallet: 48, pcsPerPallet: 1200 },
      { code: '450', size: '2 1/2"', pcsPerBag: 25, bagPerPallet: 36, pcsPerPallet: 900 },
    ];
  }

  if (id.includes('roller') || id.includes('cantilever') || id.includes('wheel') || id.includes('track')) {
    return [
      { code: '610', size: '2 3/8" Post / 2" Pipe', pcsPerBag: 4, bagPerPallet: 60, pcsPerPallet: 240 },
      { code: '620', size: '2 7/8" Post / 2" Pipe', pcsPerBag: 4, bagPerPallet: 48, pcsPerPallet: 192 },
      { code: '630', size: '4" Post / 2" Pipe', pcsPerBag: 2, bagPerPallet: 60, pcsPerPallet: 120 },
      { code: '640', size: '4" Post / 2 3/8" Pipe', pcsPerBag: 2, bagPerPallet: 48, pcsPerPallet: 96 },
    ];
  }

  if (product.commonSizes && product.commonSizes.length > 0 && product.commonSizes[0] !== 'Standard') {
    return product.commonSizes.map((size, idx) => ({
      code: `${350 + idx * 20}`,
      size,
      pcsPerBag: idx === 0 ? 50 : 25,
      bagPerPallet: 48 - idx * 8,
      pcsPerPallet: (idx === 0 ? 50 : 25) * (48 - idx * 8),
    }));
  }

  return [
    { code: '350', size: '1 5/8"', pcsPerBag: 25, bagPerPallet: 48, pcsPerPallet: 1200 },
    { code: '370', size: '2"', pcsPerBag: 25, bagPerPallet: 40, pcsPerPallet: 1000 },
    { code: '390', size: '2 1/2"', pcsPerBag: 25, bagPerPallet: 32, pcsPerPallet: 800 },
    { code: '410', size: '3"', pcsPerBag: 20, bagPerPallet: 32, pcsPerPallet: 640 },
  ];
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  productId,
  onNavigateSection,
  onNavigatePage,
  onSelectProduct,
}) => {
  const product: ProductItem = 
    PRODUCTS_DATA.find((p) => p.id === productId) || PRODUCTS_DATA[0];

  // Similar products from same category or catalog (4 items)
  const similarProducts = PRODUCTS_DATA
    .filter((p) => p.id !== product.id)
    .sort((a) => (a.category === product.category ? -1 : 1))
    .slice(0, 4);

  const packagingRows = getProductPackagingRows(product);

  const keyFeatures = [
    'Premium quality material',
    'Durable construction',
    'Industry standard compliance',
    'Global quality certified',
    ...(product.features && product.features.length > 0 ? product.features.slice(0, 2) : []),
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-[#0D3823] selection:text-[#E5A912]">
      <Navbar
        onOpenSchedule={() => onNavigatePage('contact', { quote: true, productId: product.id })}
        onNavigateSection={onNavigateSection}
        onNavigatePage={onNavigatePage}
        currentRoute="products"
      />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* Product Details Section with Section-Width Page Menu at the Top */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          
          {/* Top Breadcrumb Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs mb-6 sm:mb-8 pb-3 border-b border-gray-200">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
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
              className="h-[36px] px-4 inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-black text-xs uppercase tracking-wider rounded-full border border-gray-300 hover:border-gray-900 transition-all cursor-pointer shadow-2xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Catalog</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Product Image in 1:1 Aspect Ratio with GaurLink Theme Frame (Edge to Edge, No Inner Padding) */}
            <div className="lg:col-span-6">
              <div className="w-full aspect-square rounded-[32px] overflow-hidden bg-white border-[2.5px] border-[#1C1C1C] shadow-lg">
                {product.imageSrc ? (
                  <img
                    src={product.imageSrc}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#0D3823] text-white font-black text-xl">
                    {product.name}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Structured Details styled in GaurLink Website Theme */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Product Header: Product Name & Sub-heading */}
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-800 text-[11px] font-bold tracking-wider text-gray-900 uppercase font-sans mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#0D3823]"></span>
                  <span>COMMERCIAL HARDWARE SPEC</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-gray-900 tracking-tight leading-tight font-sans">
                  {product.name}
                </h1>
                <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
                  {product.shortDesc || product.description}
                </p>
              </div>

              {/* Product Information Card */}
              <div className="bg-[#FBFBFA] rounded-[24px] p-5 sm:p-6 border-[2.5px] border-[#1C1C1C] shadow-xs">
                <h2 className="text-sm font-black uppercase tracking-wider text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Product Information
                </h2>
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-500 uppercase tracking-wider">Product ID</span>
                    <span className="font-black text-[#0D3823] font-mono">{product.id}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-500 uppercase tracking-wider">Category</span>
                    <span className="inline-flex items-center gap-2 font-black text-gray-900 uppercase">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#0D3823] ring-2 ring-[#E5A912]/40" />
                      {product.categoryLabel}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-500 uppercase tracking-wider">Size Available</span>
                    <span className="font-black text-[#0D3823]">
                      {Array.from(new Set(packagingRows.map((r) => r.size))).length} Sizes Available
                    </span>
                  </div>
                </div>
              </div>

              {/* Specifications / Packaging Table in Theme Color */}
              <div className="overflow-hidden rounded-[24px] border-[2.5px] border-[#1C1C1C] shadow-xs bg-white">
                <div className="overflow-x-auto">
                  <table className="w-full text-center text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#0D3823] text-white uppercase text-[11px] sm:text-xs font-black tracking-wider border-b-2 border-[#1C1C1C]">
                        <th className="py-3.5 px-3 sm:px-4">CODE</th>
                        <th className="py-3.5 px-3 sm:px-4">SIZE</th>
                        <th className="py-3.5 px-3 sm:px-4">PCS PER BAG</th>
                        <th className="py-3.5 px-3 sm:px-4">BAG PER PALLET</th>
                        <th className="py-3.5 px-3 sm:px-4">PCS PER PALLET</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {packagingRows.map((row, idx) => (
                        <tr 
                          key={idx} 
                          className={idx % 2 === 0 ? 'bg-white hover:bg-[#F8FAF7] transition-colors' : 'bg-[#FBFBFA] hover:bg-[#F8FAF7] transition-colors'}
                        >
                          <td className="py-3.5 px-3 font-black text-gray-900">{row.code}</td>
                          <td className="py-3.5 px-3 font-black text-[#0D3823]">{row.size}</td>
                          <td className="py-3.5 px-3 font-bold text-gray-700">{row.pcsPerBag}</td>
                          <td className="py-3.5 px-3 font-bold text-gray-700">{row.bagPerPallet}</td>
                          <td className="py-3.5 px-3 font-black text-gray-900">{row.pcsPerPallet}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key Features Card */}
              <div className="bg-[#F0F5F2] border-[2.5px] border-[#0D3823]/30 rounded-[24px] p-5 sm:p-6 shadow-xs">
                <h3 className="text-sm font-black uppercase tracking-wider text-gray-900 mb-4 pb-2 border-b border-[#0D3823]/15">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3.5 text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wide">
                      <div className="w-6 h-6 rounded-full bg-[#0D3823] text-[#E5A912] flex items-center justify-center shrink-0 shadow-xs">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Interested In This Product CTA Card matching site theme */}
              <div className="bg-gradient-to-br from-[#0D3823] via-[#0A2D1C] to-[#071910] rounded-[28px] p-6 sm:p-8 text-center text-white border-[2.5px] border-[#1C1C1C] shadow-xl relative overflow-hidden">
                <div className="relative z-10 space-y-3">
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-black uppercase text-white tracking-tight">
                    Interested in this product?
                  </h4>
                  <p className="text-emerald-100/90 text-xs sm:text-sm max-w-md mx-auto font-normal leading-relaxed">
                    Contact us for direct factory wholesale rates, volume pallet pricing, and custom requirements.
                  </p>
                  
                  <div className="pt-2">
                    <button
                      onClick={() => onNavigatePage('contact', { quote: true, productId: product.id })}
                      className="h-[48px] sm:h-[50px] inline-flex items-center gap-2.5 bg-[#E5A912] hover:bg-[#D89A08] text-[#071910] font-black text-xs sm:text-sm uppercase tracking-wider pl-2.5 pr-6 rounded-full shadow-lg transition-all transform active:scale-95 group cursor-pointer border border-[#E5A912]/40"
                    >
                      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0D3823] text-[#E5A912] font-black flex items-center justify-center group-hover:translate-x-0.5 transition-transform shadow-xs shrink-0">
                        <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                      <span>REQUEST A QUOTE</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Similar Products Section (4 cards in a row matching Products Showcase page) */}
        {similarProducts.length > 0 && (
          <section className="pt-8 sm:pt-12 pb-16 sm:pb-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-800 text-[11px] font-bold tracking-wider text-gray-900 uppercase font-sans mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#0D3823]"></span>
                    <span>SIMILAR PRODUCTS</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black uppercase text-gray-900 tracking-tight font-sans">
                    FREQUENTLY ORDERED TOGETHER
                  </h2>
                </div>
                <button
                  onClick={() => onNavigatePage('products')}
                  className="h-[36px] px-4 inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-black text-xs uppercase tracking-wider rounded-full border border-gray-300 hover:border-gray-900 transition-all cursor-pointer shadow-2xs self-start sm:self-auto"
                >
                  <span>View Complete Catalog</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {similarProducts.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => {
                      onSelectProduct(rel.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group bg-white rounded-[20px] overflow-hidden border-[2px] border-gray-900 shadow-sm hover:shadow-xl hover:border-[#0D3823] transition-all duration-300 flex flex-col justify-between cursor-pointer"
                  >
                    {/* Clean Product Photo - 1:1 Aspect Ratio without on-image tags */}
                    <div className="relative aspect-square w-full overflow-hidden bg-gray-100 border-b-2 border-gray-900">
                      <img
                        src={rel.imageSrc}
                        alt={rel.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    {/* Card Body - Clean & Concise without right side tags */}
                    <div className="p-3.5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <span 
                          className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-0.5 truncate whitespace-nowrap overflow-hidden text-ellipsis" 
                          title={rel.material}
                        >
                          {rel.material}
                        </span>
                        <h3 className="text-[13px] sm:text-sm font-black uppercase text-gray-900 group-hover:text-[#0D3823] transition-colors leading-snug line-clamp-2 min-h-[2.4em]">
                          {rel.name}
                        </h3>
                      </div>

                      {/* Bottom Button matching showcase page */}
                      <div className="pt-0.5">
                        <div className="w-full h-[36px] flex items-center justify-between bg-[#0D3823] group-hover:bg-[#072416] text-white pl-1 pr-3 rounded-full shadow-md group-hover:shadow-lg transition-all transform active:scale-95 group/btn shrink-0 ring-1 ring-[#E5A912]/30 border border-emerald-600/30">
                          <span className="w-6 h-6 rounded-full bg-[#E5A912] flex items-center justify-center text-[#0D3823] shrink-0 group-hover:translate-x-0.5 transition-transform shadow-xs">
                            <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                          </span>
                          <span className="text-[10px] font-black uppercase tracking-wider text-white select-none whitespace-nowrap">
                            VIEW DETAILS
                          </span>
                          <span className="w-1.5" />
                        </div>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </section>
        )}
      </main>

      <Footer
        onNavigateSection={onNavigateSection}
        onOpenSchedule={() => onNavigatePage('contact', { quote: true, productId: product.id })}
        onNavigatePage={onNavigatePage}
      />
    </div>
  );
};

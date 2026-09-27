import React from 'react';
import { ChevronRight, ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { ProductItem } from '../../types';

interface SpecRow {
  code: string;
  size: string;
  pcsPerBag: number | string;
  bagPerPallet: number | string;
  pcsPerPallet: number | string;
}

interface InfoProps {
  product: ProductItem;
  packagingRows: SpecRow[];
  keyFeatures: string[];
  onNavigatePage: (page: 'home' | 'products' | 'about' | 'contact', params?: { quote?: boolean; productId?: string }) => void;
}

export const Info: React.FC<InfoProps> = ({
  product,
  packagingRows,
  keyFeatures,
  onNavigatePage,
}) => {
  return (
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
          <span>Catalog</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

        {/* Left Column: Product Image */}
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

        {/* Right Column: Structured Details */}
        <div className="lg:col-span-6 space-y-6">

          {/* Product Header */}
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

          {/* Specifications / Packaging Table */}
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

          {/* Interested CTA Card */}
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
                  <span>GET A QUOTE</span>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

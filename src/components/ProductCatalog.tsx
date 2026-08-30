import React, { useState, useMemo } from 'react';
import { PRODUCTS_DATA } from '../data/products';
import { ProductItem, ProductCategory } from '../types';
import { ProductGraphic } from './ProductGraphic';
import { Search, ArrowRight, Eye, ShieldCheck, Layers, FileText, Check } from 'lucide-react';

interface ProductCatalogProps {
  onSelectProduct: (product: ProductItem) => void;
  onRequestQuote: (product: ProductItem) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onSelectProduct,
  onRequestQuote,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'hinges', label: 'Gate Hinges' },
    { id: 'fittings', label: 'Fence Fittings & Clamps' },
    { id: 'tension-bars', label: 'Tension Bars' },
    { id: 'gate-hardware', label: 'Rolling Gate Hardware' },
    { id: 'industrial', label: 'Cantilever & Industrial' },
    { id: 'custom', label: 'Custom Stamping & Dies' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="products" className="py-16 lg:py-24 bg-white border-b border-[#E2E8F0] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#133E2B] bg-[#EAF2EC] px-3 py-1 rounded-full inline-block mb-3">
              INDUSTRIAL CATALOG
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B221E] tracking-tight">
              Precision Engineered Fence Hardware
            </h2>
            <p className="text-base text-gray-600 mt-2 max-w-2xl">
              Manufactured from high-grade pressed steel, malleable iron, and aluminum. Built to ASTM standards with hot-dip galvanized coating for maximum lifespan.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search fittings or part #..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#133E2B] focus:border-transparent outline-none font-medium placeholder:text-gray-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#133E2B] text-white shadow-sm'
                  : 'bg-[#F4F7F3] text-gray-700 hover:bg-[#E5ECE3] border border-[#D5DDD2]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#F8FAF7] rounded-xl border border-dashed border-gray-300">
            <p className="text-base text-gray-600 font-semibold">No hardware found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-bold text-[#133E2B] underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col justify-between bg-white border border-[#D8DFD4] rounded-xl overflow-hidden shadow-xs hover:shadow-md hover:border-[#133E2B]/50 transition-all duration-300"
              >
                {/* Visual Header */}
                <div className="relative p-3 bg-[#F8FAF7]">
                  <ProductGraphic id={product.id} name={product.name} className="h-48 w-full" />
                  
                  {/* Tag Pill */}
                  {product.tag && (
                    <span className="absolute top-5 left-5 text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-[#133E2B] text-white shadow-xs">
                      {product.tag}
                    </span>
                  )}

                  {product.astmCompliance && (
                    <span className="absolute top-5 right-5 text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded bg-white/90 text-gray-700 border border-gray-200">
                      {product.astmCompliance}
                    </span>
                  )}
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#133E2B] mb-1">
                      {product.categoryLabel}
                    </div>
                    <h3 className="text-xl font-bold text-[#1B221E] group-hover:text-[#133E2B] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                      {product.shortDesc}
                    </p>

                    {/* Key Specs Pills */}
                    <div className="mt-4 pt-3 border-t border-[#EEF2EC] flex flex-wrap gap-1.5">
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#F1F5F0] text-gray-700 border border-[#DEE5DC]">
                        {product.material.split('/')[0]}
                      </span>
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#F1F5F0] text-gray-700 border border-[#DEE5DC]">
                        Hot-Dip Galv
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="text-xs font-bold text-gray-700 hover:text-[#133E2B] flex items-center gap-1.5 transition-colors cursor-pointer py-1"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Specs</span>
                    </button>

                    <button
                      onClick={() => onRequestQuote(product)}
                      className="px-3.5 py-2 bg-[#133E2B] hover:bg-[#0D2B1E] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-2xs transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Request Quote</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Custom Tooling Note */}
        <div className="mt-12 p-6 bg-[#F4F7F3] rounded-xl border border-[#D5DDD2] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white border border-[#CBD5E1] flex items-center justify-center shrink-0 text-[#133E2B]">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-gray-900">
                Don't See Your Exact Sizing or Fitting Profile?
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                We develop in-house dies and tooling for custom contractor requirements, proprietary gate profiles, and OEM programs.
              </p>
            </div>
          </div>

          <button
            onClick={() =>
              onRequestQuote({
                id: 'custom-molds-fabrication',
                name: 'Custom Tooling & Sheet Metal Stamping',
                category: 'custom',
                categoryLabel: 'Custom Engineering',
                material: 'Carbon Steel / Aluminum',
                finish: 'Hot-Dip Galvanized',
                shortDesc: 'Custom die development for US contractor specifications.',
                description: '',
                specs: [],
                features: [],
                commonSizes: [],
                applications: [],
                imagePlaceholderId: 'custom',
              })
            }
            className="w-full md:w-auto px-5 py-2.5 bg-white border border-[#133E2B] text-[#133E2B] hover:bg-[#133E2B] hover:text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            Inquire About Custom Dies
          </button>
        </div>

      </div>
    </section>
  );
};

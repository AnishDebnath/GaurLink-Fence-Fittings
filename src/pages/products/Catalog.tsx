import { motion } from 'motion/react';
import React from 'react';
import { Search, Filter } from 'lucide-react';
import { PRODUCTS_DATA } from '../../data/products';
import { ProductCategory } from '../../types';
import { ProductCard } from '../../components/product/ProductCard';

interface CatalogProps {
  selectedCategory: ProductCategory;
  setSelectedCategory: (category: ProductCategory) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSelectProduct: (productId: string) => void;
}

export const Catalog: React.FC<CatalogProps> = ({
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  onSelectProduct,
}) => {
  const categories: { id: ProductCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Products', count: PRODUCTS_DATA.length },
    { id: 'hinges', label: 'Gate Hinges', count: PRODUCTS_DATA.filter((p) => p.category === 'hinges').length },
    { id: 'fittings', label: 'Fence Fittings', count: PRODUCTS_DATA.filter((p) => p.category === 'fittings').length },
    { id: 'gate-hardware', label: 'Gate Hardware', count: PRODUCTS_DATA.filter((p) => p.category === 'gate-hardware').length },
    { id: 'tension-bars', label: 'Tension Bars', count: PRODUCTS_DATA.filter((p) => p.category === 'tension-bars').length },
    { id: 'industrial', label: 'Industrial & Cantilever', count: PRODUCTS_DATA.filter((p) => p.category === 'industrial').length },
    { id: 'security', label: 'Security & Perimeter', count: PRODUCTS_DATA.filter((p) => p.category === 'security').length },
  ];

  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.material.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px 0px -60px 0px' }} transition={{ duration: 0.6, ease: 'easeOut' }} className="py-10 sm:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filter & Search Controls */}
        <div className="space-y-5 pb-8 border-b border-gray-200 mb-8">
          {/* Top Row: Search Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full max-w-md">
              <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by fitting, dimension, ASTM spec, or material..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 hover:bg-white focus:bg-white border border-gray-300 rounded-full text-xs font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0D3823] focus:border-[#0D3823] transition-all shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-700 font-bold p-1 cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider hidden sm:block">
              Showing {filteredProducts.length} of {PRODUCTS_DATA.length} fittings
            </span>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`h-[38px] px-4 rounded-full text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 border ${
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
        </div>

        {/* Products Grid */}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {filteredProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} onSelectProduct={onSelectProduct} />
            ))}
          </div>
        )}

      </div>
    </motion.section>
  );
};

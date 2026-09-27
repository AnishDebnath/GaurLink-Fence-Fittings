import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ProductItem } from '../../types';
import { ProductCard } from '../../components/product/ProductCard';

interface SimilarProps {
  similarProducts: ProductItem[];
  onNavigatePage: (page: 'home' | 'products' | 'about' | 'contact', params?: { quote?: boolean; productId?: string }) => void;
  onSelectProduct: (productId: string) => void;
}

export const Similar: React.FC<SimilarProps> = ({
  similarProducts,
  onNavigatePage,
  onSelectProduct,
}) => {
  if (similarProducts.length === 0) return null;

  return (
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
            <ProductCard key={rel.id} product={rel} onSelectProduct={onSelectProduct} />
          ))}
        </div>

      </div>
    </section>
  );
};

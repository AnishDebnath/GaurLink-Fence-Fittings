import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ProductItem } from '../../types';

interface ProductCardProps {
  product: ProductItem;
  onSelectProduct: (productId: string) => void;
  index?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelectProduct, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -40px 0px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: (index % 4) * 0.06 }}
      onClick={() => {
        onSelectProduct(product.id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      className="group bg-white rounded-[20px] overflow-hidden border-[2px] border-gray-900 shadow-sm hover:shadow-xl hover:border-[#0D3823] transition-all duration-300 flex flex-col justify-between cursor-pointer"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-gray-100 border-b-2 border-gray-900">
        <img
          src={product.imageSrc}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      <div className="p-3.5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <span
            className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-0.5 truncate whitespace-nowrap overflow-hidden text-ellipsis"
            title={product.material}
          >
            {product.material}
          </span>
          <h3 className="text-[13px] sm:text-sm font-black uppercase text-gray-900 group-hover:text-[#0D3823] transition-colors leading-snug line-clamp-2 min-h-[2.4em]">
            {product.name}
          </h3>
        </div>

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
    </motion.div>
  );
};

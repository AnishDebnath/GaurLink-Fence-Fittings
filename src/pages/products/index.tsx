import React, { useState } from 'react';
import { ProductCategory } from '../../types';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { MarqueeTicker } from '../../components/common/Ticker';
import { TICKER_PRODUCTS } from '../../data/ticker';
import { ConversionBanner } from '../../components/common/Cta';
import { Hero } from './Hero';
import { Catalog } from './Catalog';

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

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-[#0D3823] selection:text-[#E5A912]">
      <Navbar
        onOpenSchedule={() => onNavigatePage('contact', { quote: true })}
        onNavigateSection={onNavigateSection}
        onNavigatePage={onNavigatePage}
        currentRoute="products"
      />

      <main className="flex-1">
        <Hero onNavigatePage={onNavigatePage} />

        {/* Marquee Ticker */}
        <MarqueeTicker
          variant="deep-green"
          items={TICKER_PRODUCTS}
        />

        <Catalog
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSelectProduct={onSelectProduct}
        />

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

export { ProductDetailPage } from '../product-detail';

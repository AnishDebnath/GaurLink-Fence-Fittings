import React from 'react';
import { PRODUCTS_DATA } from '../../data/products';
import { ProductItem } from '../../types';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { Info } from './Info';
import { Similar } from './Similar';

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
        <Info
          product={product}
          packagingRows={packagingRows}
          keyFeatures={keyFeatures}
          onNavigatePage={onNavigatePage}
        />

        <Similar
          similarProducts={similarProducts}
          onNavigatePage={onNavigatePage}
          onSelectProduct={onSelectProduct}
        />
      </main>

      <Footer
        onNavigateSection={onNavigateSection}
        onOpenSchedule={() => onNavigatePage('contact', { quote: true, productId: product.id })}
        onNavigatePage={onNavigatePage}
      />
    </div>
  );
};

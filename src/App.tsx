/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { HomePage } from './pages/home';
import { LaunchingSoon } from './pages/coming-soon';
import { AboutPage } from './pages/about';
import { ContactPage } from './pages/contact';
import { ProductsPage, ProductDetailPage } from './pages/products';

type RouteType = 'home' | 'products' | 'product-detail' | 'about' | 'contact' | 'launching-soon';

interface NavigationParams {
  quote?: boolean;
  productId?: string;
}

export default function App() {
  const parseCurrentLocation = useCallback((): {
    route: RouteType;
    productId?: string;
    quoteMode?: boolean;
  } => {
    if (typeof window === 'undefined') {
      return { route: 'home' };
    }

    const pathname = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    const searchParams = new URLSearchParams(window.location.search);
    const quoteParam = searchParams.get('quote') === 'true';
    const productParam = searchParams.get('product') || undefined;

    // Helper to check path or hash prefix
    const matches = (target: string) => {
      return (
        pathname === target ||
        pathname === `${target}/` ||
        hash === `#${target}` ||
        hash === `/#${target}` ||
        hash === `#/` ||
        hash.startsWith(`#${target}/`) ||
        hash.startsWith(`/#${target}/`)
      );
    };

    // 1. Check Product Detail route: /products/:id or /product/:id or #/products/:id
    const productDetailMatch =
      pathname.match(/^\/products?\/([^/]+)/) ||
      hash.match(/^#\/?products?\/([^/]+)/);

    if (productDetailMatch && productDetailMatch[1]) {
      const id = productDetailMatch[1];
      return { route: 'product-detail', productId: id, quoteMode: quoteParam };
    }

    // 2. Check Products Catalog route
    if (matches('/products') || hash === '#/products' || hash === '#products') {
      return { route: 'products', quoteMode: quoteParam };
    }

    // 3. Check About route
    if (matches('/about') || hash === '#/about' || hash === '#about') {
      return { route: 'about', quoteMode: quoteParam };
    }

    // 4. Check Contact route
    if (matches('/contact') || hash === '#/contact' || hash === '#contact') {
      return { route: 'contact', quoteMode: quoteParam || true, productId: productParam };
    }

    // 5. Check Launching Soon route
    if (matches('/launching-soon') || hash === '#/launching-soon') {
      return { route: 'launching-soon' };
    }

    // Default to Home
    return { route: 'home', quoteMode: quoteParam, productId: productParam };
  }, []);

  const [navigationState, setNavigationState] = useState<{
    route: RouteType;
    productId?: string;
    quoteMode?: boolean;
  }>(() => parseCurrentLocation());

  useEffect(() => {
    const handleLocationChange = () => {
      const parsed = parseCurrentLocation();
      setNavigationState(parsed);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, [parseCurrentLocation]);

  const navigateTo = (path: string, params?: NavigationParams) => {
    if (typeof window !== 'undefined') {
      let fullUrl = path;
      if (params?.quote) {
        fullUrl += `${fullUrl.includes('?') ? '&' : '?'}quote=true`;
      }
      if (params?.productId) {
        fullUrl += `${fullUrl.includes('?') ? '&' : '?'}product=${encodeURIComponent(params.productId)}`;
      }

      window.history.pushState({}, '', fullUrl);
      window.scrollTo({ top: 0, behavior: 'instant' });

      // Determine state directly
      if (path.startsWith('/products/') || path.startsWith('/product/')) {
        const id = path.replace(/^\/products?\//, '');
        setNavigationState({
          route: 'product-detail',
          productId: id,
          quoteMode: params?.quote,
        });
      } else if (path === '/products') {
        setNavigationState({ route: 'products', quoteMode: params?.quote });
      } else if (path === '/about') {
        setNavigationState({ route: 'about', quoteMode: params?.quote });
      } else if (path === '/contact') {
        setNavigationState({
          route: 'contact',
          quoteMode: params?.quote ?? true,
          productId: params?.productId,
        });
      } else if (path === '/launching-soon') {
        setNavigationState({ route: 'launching-soon' });
      } else {
        setNavigationState({ route: 'home', quoteMode: params?.quote });
      }
    }
  };

  const handleNavigatePage = (
    page: 'home' | 'products' | 'about' | 'contact',
    params?: NavigationParams
  ) => {
    navigateTo(`/${page === 'home' ? 'home' : page}`, params);
  };

  const handleSelectProduct = (productId: string) => {
    navigateTo(`/products/${productId}`);
  };

  const handleNavigateSection = (sectionId: string) => {
    if (navigationState.route !== 'home') {
      navigateTo('/home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 120);
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (navigationState.route === 'launching-soon') {
    return <LaunchingSoon />;
  }

  if (navigationState.route === 'products') {
    return (
      <ProductsPage
        onNavigateSection={handleNavigateSection}
        onNavigatePage={handleNavigatePage}
        onSelectProduct={handleSelectProduct}
      />
    );
  }

  if (navigationState.route === 'product-detail') {
    return (
      <ProductDetailPage
        productId={navigationState.productId || 'pressed-steel-male-hinge'}
        onNavigateSection={handleNavigateSection}
        onNavigatePage={handleNavigatePage}
        onSelectProduct={handleSelectProduct}
      />
    );
  }

  if (navigationState.route === 'about') {
    return (
      <AboutPage
        onNavigateSection={handleNavigateSection}
        onNavigatePage={handleNavigatePage}
      />
    );
  }

  if (navigationState.route === 'contact') {
    return (
      <ContactPage
        initialProductId={navigationState.productId}
        initialQuoteMode={navigationState.quoteMode}
        onNavigateSection={handleNavigateSection}
        onNavigatePage={handleNavigatePage}
      />
    );
  }

  return (
    <HomePage
      onNavigateSection={handleNavigateSection}
      onNavigatePage={handleNavigatePage}
      currentRoute={navigationState.route}
    />
  );
}

export interface FooterQuickLink {
  label: string;
  page: 'home' | 'products' | 'about' | 'contact';
}

export const FOOTER_QUICK_LINKS: FooterQuickLink[] = [
  { label: 'Home', page: 'home' },
  { label: 'Products Catalog', page: 'products' },
  { label: 'About Us', page: 'about' },
  { label: 'Contact & Wholesale Quote', page: 'contact' },
];

export const FOOTER_PRODUCT_CATEGORIES: string[] = [
  'Barbed Arms (Cup & Vertical)',
  'Cantilever Gate Rollers',
  'Brace Bands (3/4" x 12 GA)',
  'Pressed Steel Box Hinges',
  'Boulevard Line Rail Clamps',
  'Post Caps & Rail Ends',
  'Custom Sheet Metal Fabrication',
];

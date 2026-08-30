export type ProductCategory = 
  | 'all'
  | 'hinges'
  | 'fittings'
  | 'tension-bars'
  | 'gate-hardware'
  | 'industrial'
  | 'custom';

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'hinges' | 'fittings' | 'tension-bars' | 'gate-hardware' | 'industrial' | 'custom';
  categoryLabel: string;
  material: string;
  finish: string;
  shortDesc: string;
  description: string;
  specs: ProductSpec[];
  features: string[];
  commonSizes: string[];
  applications: string[];
  imagePlaceholderId: string;
  astmCompliance?: string;
  tag?: string;
}

export interface QuoteFormState {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  projectType: string;
  productRequirement: string;
  estimatedQuantity: string;
  specifications: string;
  deliveryLocation: string;
  needCustomMolds: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'ordering' | 'products' | 'shipping' | 'quality';
}

export interface MetricItem {
  value: string;
  label: string;
  sublabel: string;
  badge?: string;
}

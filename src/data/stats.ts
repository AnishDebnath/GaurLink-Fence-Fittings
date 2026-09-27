import { Factory, ShieldCheck, Award, Truck } from 'lucide-react';

export interface TrustStat {
  icon: typeof Factory;
  title: string;
  subtitle: string;
}

export const TRUST_BAR_STATS: TrustStat[] = [
  {
    icon: Factory,
    title: '55+ Years Heritage',
    subtitle: 'Mfg Since 1969',
  },
  {
    icon: ShieldCheck,
    title: 'ISO 9001:2015',
    subtitle: 'Zero Defects Policy',
  },
  {
    icon: Award,
    title: '150M+ Produced',
    subtitle: 'FENCETECH 30+ Yrs',
  },
  {
    icon: Truck,
    title: 'DDP US Freight',
    subtitle: 'Duty-Paid To Your Dock',
  },
];

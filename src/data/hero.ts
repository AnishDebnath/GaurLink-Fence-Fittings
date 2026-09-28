import { assetUrl } from '../lib/cdn';

export interface HeroObject {
  id: string;
  name: string;
  image: string;
}

export const HERO_HARDWARE_OBJECTS: HeroObject[] = [
  { id: 'gaurlink-1', name: 'GaurLink Product 1', image: assetUrl('gaurlink-1.png') },
  { id: 'gaurlink-2', name: 'GaurLink Product 2', image: assetUrl('gaurlink-2.png') },
  { id: 'gaurlink-3', name: 'GaurLink Product 3', image: assetUrl('gaurlink-3.png') },
  { id: 'gaurlink-4', name: 'GaurLink Product 4', image: assetUrl('gaurlink-4.png') },
  { id: 'gaurlink-5', name: 'GaurLink Product 5', image: assetUrl('gaurlink-5.png') },
  { id: 'gaurlink-6', name: 'GaurLink Product 6', image: assetUrl('gaurlink-6.png') },
  { id: 'gaurlink-7', name: 'GaurLink Product 7', image: assetUrl('gaurlink-7.png') },
  { id: 'gaurlink-8', name: 'GaurLink Product 8', image: assetUrl('gaurlink-8.png') },
  { id: 'gaurlink-9', name: 'GaurLink Product 9', image: assetUrl('gaurlink-9.png') },
  { id: 'gaurlink-10', name: 'GaurLink Product 10', image: assetUrl('gaurlink-10.png') },
];

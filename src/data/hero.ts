import gaurlink1Img from '../assets/images/product png/gaurlink-1.png';
import gaurlink2Img from '../assets/images/product png/gaurlink-2.png';
import gaurlink3Img from '../assets/images/product png/gaurlink-3.png';
import gaurlink4Img from '../assets/images/product png/gaurlink-4.png';
import gaurlink5Img from '../assets/images/product png/gaurlink-5.png';
import gaurlink6Img from '../assets/images/product png/gaurlink-6.png';
import gaurlink7Img from '../assets/images/product png/gaurlink-7.png';
import gaurlink8Img from '../assets/images/product png/gaurlink-8.png';
import gaurlink9Img from '../assets/images/product png/gaurlink-9.png';
import gaurlink10Img from '../assets/images/product png/gaurlink-10.png';

export interface HeroObject {
  id: string;
  name: string;
  image: string;
}

export const HERO_HARDWARE_OBJECTS: HeroObject[] = [
  { id: 'gaurlink-1', name: 'GaurLink Product 1', image: gaurlink1Img },
  { id: 'gaurlink-2', name: 'GaurLink Product 2', image: gaurlink2Img },
  { id: 'gaurlink-3', name: 'GaurLink Product 3', image: gaurlink3Img },
  { id: 'gaurlink-4', name: 'GaurLink Product 4', image: gaurlink4Img },
  { id: 'gaurlink-5', name: 'GaurLink Product 5', image: gaurlink5Img },
  { id: 'gaurlink-6', name: 'GaurLink Product 6', image: gaurlink6Img },
  { id: 'gaurlink-7', name: 'GaurLink Product 7', image: gaurlink7Img },
  { id: 'gaurlink-8', name: 'GaurLink Product 8', image: gaurlink8Img },
  { id: 'gaurlink-9', name: 'GaurLink Product 9', image: gaurlink9Img },
  { id: 'gaurlink-10', name: 'GaurLink Product 10', image: gaurlink10Img },
];

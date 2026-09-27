import productBarbedArmCupImg from '../assets/images/product image/3-barbed-arm-cup-type.jpg';
import productCantileverRollerImg from '../assets/images/product image/12-cantilever-roller-nylon-pressed-steel-with-cover.jpg';
import productBraceBandImg from '../assets/images/product image/8-brace-band-regular-34-x-12-ga.jpg';
import productBoxHingeSteelImg from '../assets/images/product image/7-box-hinge-press-steel.jpg';
import productBoulevardClampImg from '../assets/images/product image/5-boulevard-clamp-14-ga-and-16-ga-line-rail-clamp.jpg';
import productBarbedArmVerticalImg from '../assets/images/product image/2-barbed-arm-vertical-16-ga.jpg';
import productPostCapSteelImg from '../assets/images/product image/33-post-cap-pressed-steel.jpg';
import productCarriageBoltImg from '../assets/images/product image/11-carriage-bolt-and-nut.jpg';
import productRailEnd1HoleImg from '../assets/images/product image/37-rail-end-1-hole-pressed-steel.jpg';
import productSleeveTopRailImg from '../assets/images/product image/44-sleeve-top-rail.jpg';
import { Wrench, Shield, Drill, Hammer, Lock, Layers } from 'lucide-react';

export interface ShowcaseService {
  id: string;
  title: string;
  image: string;
  icon: typeof Wrench;
  tag: string;
  category: string;
  sizesAvailable: string;
  desc: string;
}

export const SHOWCASE_SERVICES: ShowcaseService[] = [
  {
    id: 'barbed-arm-cup',
    title: 'BARBED ARM (CUP TYPE)',
    image: productBarbedArmCupImg,
    icon: Shield,
    tag: 'High Security',
    category: 'Perimeter Security',
    sizesAvailable: '3 Sizes Available',
    desc: 'Cup-type barbed arm for 3-strand barbed wire security tops.',
  },
  {
    id: 'cantilever-roller',
    title: 'CANTILEVER GATE ROLLER',
    image: productCantileverRollerImg,
    icon: Wrench,
    tag: 'Heavy Duty',
    category: 'Gate Hardware',
    sizesAvailable: '4 Sizes Available',
    desc: 'Nylon cantilever roller assembly with pressed steel cover for heavy slide gates.',
  },
  {
    id: 'brace-band',
    title: 'BRACE BAND (3/4" X 12 GA)',
    image: productBraceBandImg,
    icon: Layers,
    tag: 'Best Seller',
    category: 'Commercial Hardware',
    sizesAvailable: '8 Sizes Available',
    desc: 'Regular brace band 3/4 inch 12 gauge galvanized steel for chain link fencing.',
  },
  {
    id: 'box-hinge',
    title: 'BOX HINGE (PRESSED STEEL)',
    image: productBoxHingeSteelImg,
    icon: Lock,
    tag: 'Heavy Duty',
    category: 'Gate Hardware',
    sizesAvailable: '5 Sizes Available',
    desc: 'Pressed steel box hinge for commercial gate installations.',
  },
  {
    id: 'boulevard-clamp',
    title: 'BOULEVARD CLAMP (14 & 16 GA)',
    image: productBoulevardClampImg,
    icon: Hammer,
    tag: 'Line Rail Clamp',
    category: 'Line Rail Hardware',
    sizesAvailable: '6 Sizes Available',
    desc: 'Boulevard line rail clamp available in 14 GA and 16 GA for secure rail connections.',
  },
  {
    id: 'barbed-arm-vertical',
    title: 'VERTICAL BARBED ARM (16 GA)',
    image: productBarbedArmVerticalImg,
    icon: Shield,
    tag: 'High Security',
    category: 'Perimeter Security',
    sizesAvailable: '3 Sizes Available',
    desc: 'Vertical barbed arm 16 gauge pressed steel for perimeter security extensions.',
  },
  {
    id: 'post-cap',
    title: 'POST CAP (PRESSED STEEL)',
    image: productPostCapSteelImg,
    icon: Layers,
    tag: 'Pressed Steel',
    category: 'Terminal Fittings',
    sizesAvailable: '7 Sizes Available',
    desc: 'Pressed steel post cap for chain link fence terminal and line posts.',
  },
  {
    id: 'carriage-bolt',
    title: 'CARRIAGE BOLT & NUT',
    image: productCarriageBoltImg,
    icon: Drill,
    tag: 'ASTM Fasteners',
    category: 'Hardware & Fasteners',
    sizesAvailable: '6 Sizes Available',
    desc: 'Galvanized carriage bolt and nut for fence fitting assembly.',
  },
  {
    id: 'rail-end',
    title: 'RAIL END (1 HOLE)',
    image: productRailEnd1HoleImg,
    icon: Wrench,
    tag: 'ASTM A153',
    category: 'Line Rail Fittings',
    sizesAvailable: '5 Sizes Available',
    desc: 'Pressed steel rail end with 1 hole for top rail and line rail connections.',
  },
  {
    id: 'sleeve-top-rail',
    title: 'TOP RAIL SLEEVE',
    image: productSleeveTopRailImg,
    icon: Lock,
    tag: 'Commercial',
    category: 'Rail Hardware',
    sizesAvailable: '4 Sizes Available',
    desc: 'Sleeve top rail fitting for secure horizontal rail-to-post connections.',
  },
];

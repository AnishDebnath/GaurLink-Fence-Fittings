import { assetUrl } from '../lib/cdn';

export interface CaseStudy {
  id: string;
  title: string;
  tag: string;
  image: string;
  alt: string;
  desc: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'chain-link-gate-hardware',
    title: 'CHAIN LINK GATE HARDWARE',
    tag: 'GAURLINK • SUPPLY IN ACTION',
    image: assetUrl('commercial-chain-link-gate-hardware.jpg'),
    alt: 'Commercial chain link gate hardware',
    desc: 'Heavy-duty gate hardware for commercial perimeter fencing.',
  },
  {
    id: 'fence-gate-hardware',
    title: 'PRESSED STEEL FITTINGS',
    tag: 'GAURLINK • SUPPLY IN ACTION',
    image: assetUrl('commercial-fence-gate-and-hardware.jpg'),
    alt: 'Pressed steel fence fittings',
    desc: 'Precision-stamped galvanized fittings for wholesale supply yards.',
  },
  {
    id: 'fence-hardware-installation',
    title: 'COMMERCIAL FENCE HARDWARE',
    tag: 'GAURLINK • SUPPLY IN ACTION',
    image: assetUrl('commercial-fence-hardware-insta.jpg'),
    alt: 'Commercial fence hardware installation',
    desc: 'Galvanized chain link fittings installed across commercial sites.',
  },
  {
    id: 'security-gate-fence',
    title: 'HIGH-SECURITY PERIMETER HARDWARE',
    tag: 'GAURLINK • SUPPLY IN ACTION',
    image: assetUrl('commercial-security-gate-and-fence.jpg'),
    alt: 'High-security perimeter hardware',
    desc: 'Heavy-duty barbed arms and gate locks for secure industrial facilities.',
  },
  {
    id: 'fittings-macro',
    title: 'ASTM A153 HOT-DIP GALVANIZING',
    tag: 'GAURLINK • SUPPLY IN ACTION',
    image: assetUrl('galvanized-fence-fittings-macro.jpg'),
    alt: 'ASTM A153 galvanized coating',
    desc: 'Heavy zinc coating engineered for maximum outdoor corrosion resistance.',
  },
  {
    id: 'hardware-system',
    title: 'WHOLESALE HARDWARE PACKAGING',
    tag: 'GAURLINK • SUPPLY IN ACTION',
    image: assetUrl('galvanized-fence-hardware-system.jpg'),
    alt: 'Wholesale hardware packaging',
    desc: 'Palletized and crate-packed hardware ready for bulk warehouse distribution.',
  },
  {
    id: 'manufacturing',
    title: 'IN-HOUSE TOOL & DIE DIVISION',
    tag: 'GAURLINK • SUPPLY IN ACTION',
    image: assetUrl('industrial-fence-hardware-manufa.jpg'),
    alt: 'In-house tool and die division',
    desc: 'Custom tooling and high-tonnage stamping made to exact customer drawings.',
  },
  {
    id: 'security-hardware',
    title: 'GATE ROLLERS & BOX HINGES',
    tag: 'GAURLINK • SUPPLY IN ACTION',
    image: assetUrl('industrial-security-fence-hardwa.jpg'),
    alt: 'Gate rollers and hinges',
    desc: 'Industrial cantilever rollers and pressed steel box hinges.',
  },
  {
    id: 'chain-link-installation',
    title: 'NATIONWIDE FENCE CONTRACTORS',
    tag: 'GAURLINK • SUPPLY IN ACTION',
    image: assetUrl('installing-commercial-chain-link.jpg'),
    alt: 'Nationwide contractor supply',
    desc: 'Reliable bulk supply for regional fence contractors across the USA.',
  },
  {
    id: 'quality-inspection',
    title: 'ISO 9001:2015 ZERO DEFECTS QC',
    tag: 'GAURLINK • SUPPLY IN ACTION',
    image: assetUrl('technician-inspecting-fence-hard.jpg'),
    alt: 'ISO 9001 zero defects inspection',
    desc: '100% item inspection before palletizing and container loading.',
  },
  {
    id: 'warehouse-inventory',
    title: 'DDP DIRECT WAREHOUSE DELIVERY',
    tag: 'GAURLINK • SUPPLY IN ACTION',
    image: assetUrl('warehouse-inventory-of-fence-har.jpg'),
    alt: 'DDP warehouse delivery',
    desc: 'Ocean freight and customs duty paid, delivered straight to your dock.',
  },
];

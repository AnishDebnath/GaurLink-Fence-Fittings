import supplyAction1Img from '../assets/images/supply in action/commercial-chain-link-gate-hardware.jpg';
import supplyAction2Img from '../assets/images/supply in action/commercial-fence-gate-and-hardware.jpg';
import supplyAction3Img from '../assets/images/supply in action/commercial-fence-hardware-insta.jpg';
import supplyAction4Img from '../assets/images/supply in action/commercial-security-gate-and-fence.jpg';
import supplyAction5Img from '../assets/images/supply in action/galvanized-fence-fittings-macro.jpg';
import supplyAction6Img from '../assets/images/supply in action/galvanized-fence-hardware-system.jpg';
import supplyAction7Img from '../assets/images/supply in action/industrial-fence-hardware-manufa.jpg';
import supplyAction8Img from '../assets/images/supply in action/industrial-security-fence-hardwa.jpg';
import supplyAction9Img from '../assets/images/supply in action/installing-commercial-chain-link.jpg';
import supplyAction10Img from '../assets/images/supply in action/technician-inspecting-fence-hard.jpg';
import supplyAction11Img from '../assets/images/supply in action/warehouse-inventory-of-fence-har.jpg';

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
    image: supplyAction1Img,
    alt: 'Commercial chain link gate hardware',
    desc: 'Heavy-duty gate hardware for commercial perimeter fencing.',
  },
  {
    id: 'fence-gate-hardware',
    title: 'PRESSED STEEL FITTINGS',
    tag: 'GAURLINK • SUPPLY IN ACTION',
    image: supplyAction2Img,
    alt: 'Pressed steel fence fittings',
    desc: 'Precision-stamped galvanized fittings for wholesale supply yards.',
  },
  {
    id: 'fence-hardware-installation',
    title: 'COMMERCIAL FENCE HARDWARE',
    tag: 'GAURLINK • SUPPLY IN ACTION',
    image: supplyAction3Img,
    alt: 'Commercial fence hardware installation',
    desc: 'Galvanized chain link fittings installed across commercial sites.',
  },
  {
    id: 'security-gate-fence',
    title: 'HIGH-SECURITY PERIMETER HARDWARE',
    tag: 'GAURLINK • SUPPLY IN ACTION',
    image: supplyAction4Img,
    alt: 'High-security perimeter hardware',
    desc: 'Heavy-duty barbed arms and gate locks for secure industrial facilities.',
  },
  {
    id: 'fittings-macro',
    title: 'ASTM A153 HOT-DIP GALVANIZING',
    tag: 'GAURLINK • SUPPLY IN ACTION',
    image: supplyAction5Img,
    alt: 'ASTM A153 galvanized coating',
    desc: 'Heavy zinc coating engineered for maximum outdoor corrosion resistance.',
  },
  {
    id: 'hardware-system',
    title: 'WHOLESALE HARDWARE PACKAGING',
    tag: 'GAURLINK • SUPPLY IN ACTION',
    image: supplyAction6Img,
    alt: 'Wholesale hardware packaging',
    desc: 'Palletized and crate-packed hardware ready for bulk warehouse distribution.',
  },
  {
    id: 'manufacturing',
    title: 'IN-HOUSE TOOL & DIE DIVISION',
    tag: 'GAURLINK • SUPPLY IN ACTION',
    image: supplyAction7Img,
    alt: 'In-house tool and die division',
    desc: 'Custom tooling and high-tonnage stamping made to exact customer drawings.',
  },
  {
    id: 'security-hardware',
    title: 'GATE ROLLERS & BOX HINGES',
    tag: 'GAURLINK • SUPPLY IN ACTION',
    image: supplyAction8Img,
    alt: 'Gate rollers and hinges',
    desc: 'Industrial cantilever rollers and pressed steel box hinges.',
  },
  {
    id: 'chain-link-installation',
    title: 'NATIONWIDE FENCE CONTRACTORS',
    tag: 'GAURLINK • SUPPLY IN ACTION',
    image: supplyAction9Img,
    alt: 'Nationwide contractor supply',
    desc: 'Reliable bulk supply for regional fence contractors across the USA.',
  },
  {
    id: 'quality-inspection',
    title: 'ISO 9001:2015 ZERO DEFECTS QC',
    tag: 'GAURLINK • SUPPLY IN ACTION',
    image: supplyAction10Img,
    alt: 'ISO 9001 zero defects inspection',
    desc: '100% item inspection before palletizing and container loading.',
  },
  {
    id: 'warehouse-inventory',
    title: 'DDP DIRECT WAREHOUSE DELIVERY',
    tag: 'GAURLINK • SUPPLY IN ACTION',
    image: supplyAction11Img,
    alt: 'DDP warehouse delivery',
    desc: 'Ocean freight and customs duty paid, delivered straight to your dock.',
  },
];

import wholesaleProcess1Img from '../assets/wholesale-process/01-send-your-requirements.jpg';
import wholesaleProcess2Img from '../assets/wholesale-process/02-get-direct-factory-quote.jpg';
import wholesaleProcess3Img from '../assets/wholesale-process/03-precision-production-and-qc.jpg';
import wholesaleProcess4Img from '../assets/wholesale-process/04-ddp-delivery-to-your-door.jpg';

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
  image: string;
}

export const HOW_IT_WORKS_STEPS: ProcessStep[] = [
  {
    num: '01',
    title: 'SEND YOUR REQUIREMENTS',
    desc: 'Send your part numbers, quantities, or custom drawings to our team.',
    image: wholesaleProcess1Img,
  },
  {
    num: '02',
    title: 'GET DIRECT FACTORY QUOTE',
    desc: 'Receive clear wholesale pricing and freight details within 24 hours.',
    image: wholesaleProcess2Img,
  },
  {
    num: '03',
    title: 'PRECISION PRODUCTION & QC',
    desc: 'Manufactured to ASTM standards with ISO 9001 zero-defect inspection.',
    image: wholesaleProcess3Img,
  },
  {
    num: '04',
    title: 'DDP DELIVERY TO YOUR DOOR',
    desc: 'Duty-paid freight shipped directly to your warehouse across the USA.',
    image: wholesaleProcess4Img,
  },
];

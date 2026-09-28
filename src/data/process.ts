import { assetUrl } from '../lib/cdn';

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
    image: assetUrl('01-send-your-requirements.jpg'),
  },
  {
    num: '02',
    title: 'GET DIRECT FACTORY QUOTE',
    desc: 'Receive clear wholesale pricing and freight details within 24 hours.',
    image: assetUrl('02-get-direct-factory-quote.jpg'),
  },
  {
    num: '03',
    title: 'PRECISION PRODUCTION & QC',
    desc: 'Manufactured to ASTM standards with ISO 9001 zero-defect inspection.',
    image: assetUrl('03-precision-production-and-qc.jpg'),
  },
  {
    num: '04',
    title: 'DDP DELIVERY TO YOUR DOOR',
    desc: 'Duty-paid freight shipped directly to your warehouse across the USA.',
    image: assetUrl('04-ddp-delivery-to-your-door.jpg'),
  },
];

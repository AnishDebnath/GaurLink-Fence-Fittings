import clientSatisfaction1Img from '../assets/images/client-reviews/client-satisfaction-1.jpg';
import clientSatisfaction2Img from '../assets/images/client-reviews/client-satisfaction-2.jpg';
import clientSatisfaction3Img from '../assets/images/client-reviews/client-satisfaction-3.jpg';
import clientSatisfaction4Img from '../assets/images/client-reviews/client-satisfaction-4.jpg';

export interface Testimonial {
  name: string;
  role: string;
  initial: string;
  avatarColor: string;
  text: string;
}

export const TESTIMONIALS_LEFT: Testimonial[] = [
  {
    name: 'MARCUS T.',
    role: 'Supply Yard Manager',
    initial: 'M',
    avatarColor: '#C0392B',
    text: '“GaurLink delivers unmatched consistency on high-volume container orders. Their hot-dip galvanized chain link fittings always meet ASTM specs, and wholesale pricing is direct from the manufacturer.”',
  },
  {
    name: 'SERGIO R.',
    role: 'Commercial Contractor',
    initial: 'S',
    avatarColor: '#374151',
    text: '“We buy our commercial gate hinges and cantilever rollers in pallet quantities from GaurLink. Heavy-duty build, clean stamping, and prompt freight delivery to our yard every single time.”',
  },
];

export const TESTIMONIALS_RIGHT: Testimonial[] = [
  {
    name: 'LUCAS H.',
    role: 'Regional Fence Distributor',
    initial: 'L',
    avatarColor: '#0D3823',
    text: '“Switching to GaurLink for our wholesale post clamps and tension bars reduced our procurement lead times dramatically. The hot-dip zinc finish and steel gauge are top notch.”',
  },
  {
    name: 'PAULO M.',
    role: 'Perimeter Security Installer',
    initial: 'P',
    avatarColor: '#1E6FD9',
    text: '“GaurLink\'s in-house tool & die room produced custom post brackets for our commercial projects in record time. Excellent manufacturer-direct pricing and USA freight support.”',
  },
];

export interface FeaturedReviewStat {
  value: string;
  label: string;
}

export const FEATURED_REVIEW: FeaturedReviewStat = {
  value: '99%',
  label: 'Client Satisfaction',
};

export const FEATURED_REVIEW_COUNT = 'Based On 50 Reviews';

export const FEATURED_REVIEW_GOOGLE_URL = 'https://google.com';

export interface ReviewPhoto {
  image: string;
  alt: string;
}

export const FEATURED_REVIEW_PHOTOS: ReviewPhoto[] = [
  { image: clientSatisfaction1Img, alt: 'Client satisfaction review 1' },
  { image: clientSatisfaction2Img, alt: 'Client satisfaction review 2' },
  { image: clientSatisfaction3Img, alt: 'Client satisfaction review 3' },
  { image: clientSatisfaction4Img, alt: 'Client satisfaction review 4' },
];

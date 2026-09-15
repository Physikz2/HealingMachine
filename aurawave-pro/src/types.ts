export interface VideoScene {
  id: number;
  title: string;
  subtitle: string;
  duration: number; // in seconds
  startTime: number;
  endTime: number;
  image: string;
  altImage?: string;
  techHighlight: string;
  specs: string[];
  color: string;
}

export interface TechFeature {
  id: string;
  title: string;
  componentName: string;
  pdfReference: string;
  benefit: string;
  mechanism: string;
  specs: { label: string; value: string }[];
  tag: string;
  iconName: string;
}

export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  price: number;
  originalPrice: number;
  description: string;
  features: string[];
  includedHardware: string[];
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  result: string;
  verifiedPurchase: boolean;
  avatar: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'technology' | 'health' | 'maintenance' | 'shipping';
}

export interface ResonanceMode {
  id: string;
  name: string;
  frequency: string;
  hzValue: number;
  targetBenefit: string;
  sparkRate: string;
  description: string;
  waveColor: string;
}

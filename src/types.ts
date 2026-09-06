export type ServiceId =
  | 'cooling'
  | 'heating'
  | 'drain-sewer'
  | 'plumbing'
  | 'water-quality'
  | 'insulation'
  | 'electrical'
  | 'garage-renovation';

export interface ServiceInfo {
  id: ServiceId;
  title: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  bulletPoints: string[];
  commonIssues: string[];
  startingPrice?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  serviceCategory: string;
  rating: number;
  text: string;
  date: string;
  source: string;
  location: string;
}

export interface CouponItem {
  id: string;
  code: string;
  title: string;
  discount: string;
  description: string;
  terms: string;
  serviceId?: ServiceId;
  expires: string;
}

export interface BookingState {
  serviceId: ServiceId;
  subService: string;
  urgency: 'emergency' | 'today' | 'flexible';
  preferredDate: string;
  preferredTime: string;
  fullName: string;
  phone: string;
  email: string;
  streetAddress: string;
  city: string;
  zipCode: string;
  appliedCoupon?: string;
  notes: string;
}

export type ActiveScreen = 
  | 'home'
  | 'schedule'
  | 'coupons'
  | 'reviews'
  | 'community'
  | 'plans'
  | 'service-detail';

export interface LocationInfo {
  city: 'Phoenix' | 'Tucson';
  phone: string;
  phoneDisplay: string;
  address: string;
  coverage: string;
}

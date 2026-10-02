export type PageId = 'home' | 'dermatology' | 'dentistry' | 'about' | 'contact';

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  department: 'Dermatology' | 'Dentistry';
  preferredDate: string;
  preferredTime: string;
  serviceConcern: string;
  message: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  text: string;
  isTruncated?: boolean;
  highlightTopic?: string;
  date?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'dermatology' | 'dentistry';
  description: string;
  isPlaceholder?: boolean;
  tag?: string;
}

export interface DoctorPlaceholder {
  id: string;
  role: string;
  specialty: string;
  department: 'Dermatology' | 'Dentistry';
}

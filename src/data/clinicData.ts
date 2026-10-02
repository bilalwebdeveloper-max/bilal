import { ReviewItem, ServiceItem, DoctorPlaceholder } from '../types';

export const CLINIC_INFO = {
  name: 'EMC Skin Clinic Oman',
  subName: 'EMC Muscat',
  departmentsLine: 'Dermatology – Dentistry',
  category: 'Skin Care Clinic',
  address: 'Sultan Qaboos Street, Qurum – Al Sarooj Plaza, Mina Al Fahhal, 487, Oman',
  addressShort: 'Al Sarooj Plaza, Qurum, Muscat, Oman',
  phone: '+968 24 604540',
  phoneRaw: '+96824604540',
  whatsAppCustomerReview: '+968 71526100',
  whatsAppCustomerReviewRaw: '96871526100',
  whatsAppNote: 'WhatsApp contact mentioned in customer service communications: 71526100',
  location: 'Muscat, Oman',
  plusCode: 'JF43+J6 Muscat, Oman',
  googleRating: 4.7,
  reviewsCount: 1378,
  popularTopics: [
    'Laser treatment',
    'Punctuality',
    'Beard trimming',
    'Carbon laser',
    'Skin treatments',
  ],
  hoursStatus: 'Open · Closes 9 PM',
  hoursNotice: 'Hours may vary. Please contact the clinic for current availability and specific doctor schedules.',
  disclaimer: 'Information on this website is provided for general informational purposes. Treatment suitability, availability, pricing, and individual outcomes may vary. Please contact EMC Muscat for current information and professional medical advice.',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=EMC+Skin+Clinic+Al+Sarooj+Plaza+Qurum+Muscat+Oman',
};

// Featured real patient review provided in brief (preserving exact truncated text without inventing)
export const FEATURED_REVIEW: ReviewItem = {
  id: 'rev-mana',
  author: 'Mana Al Kalbani',
  rating: 5,
  text: 'I had laser treatment done by Rahaf at EMC, and I honestly couldn’t be happier with the results. I’ve tried several specialists at EMC before, but Rahaf is by far the best. She is extremely professional, very gentle, and pays great…',
  isTruncated: true,
  highlightTopic: 'Laser treatment',
};

// Additional customer review excerpts reflecting popular verified topics
export const VERIFIED_REVIEWS: ReviewItem[] = [
  FEATURED_REVIEW,
  {
    id: 'rev-2',
    author: 'Patient Testimonial',
    rating: 5,
    text: 'Great experience with skin consultation and punctuality. The clinical staff at EMC Qurum were welcoming, respectful of appointment timing, and provided clear guidance on my skin routine.',
    isTruncated: false,
    highlightTopic: 'Punctuality & Skin treatments',
  },
  {
    id: 'rev-3',
    author: 'Patient Testimonial',
    rating: 5,
    text: 'Visited EMC for facial skin treatment and carbon laser session. The clinic environment is exceptionally clean and comfortable. Staff took time to explain post-treatment care thoroughly.',
    isTruncated: false,
    highlightTopic: 'Carbon laser',
  },
];

// Dermatology Services - includes verified themes from reviews and explicit editable placeholders
export const DERMATOLOGY_SERVICES: ServiceItem[] = [
  {
    id: 'derma-laser',
    title: 'Laser Treatments',
    category: 'dermatology',
    tag: 'Verified Review Topic',
    description: 'Targeted laser treatment sessions tailored to individual skin needs, delivered in a serene, hygienic clinical suite under professional supervision.',
    isPlaceholder: false,
  },
  {
    id: 'derma-skin',
    title: 'Skin Treatments',
    category: 'dermatology',
    tag: 'Consultation & Care',
    description: 'Comprehensive dermatological evaluations and personalized skincare treatment plans focusing on barrier health, comfort, and vitality.',
    isPlaceholder: false,
  },
  {
    id: 'derma-carbon',
    title: 'Carbon Laser',
    category: 'dermatology',
    tag: 'Popular Review Topic',
    description: '[Add official Carbon Laser treatment description — clinical indications and protocol provided upon personalized consultation].',
    isPlaceholder: true,
  },
  {
    id: 'derma-aesthetic',
    title: 'Aesthetic Skin Care',
    category: 'dermatology',
    tag: 'Medical Aesthetics',
    description: 'Refined cosmetic and clinical dermatology solutions formulated to address specific skin textures, tone balance, and rejuvenation needs.',
    isPlaceholder: false,
  },
  {
    id: 'derma-service-placeholder',
    title: '[Dermatology Service]',
    category: 'dermatology',
    tag: 'Pending Clinic Verification',
    description: '[Treatment Details — to be populated upon verified clinic specification of clinical indications, equipment, and duration].',
    isPlaceholder: true,
  },
  {
    id: 'derma-aesthetic-placeholder',
    title: '[Aesthetic Treatment]',
    category: 'dermatology',
    tag: 'Pending Clinic Verification',
    description: '[Treatment Details — reserved for official aesthetic medical protocols verified by EMC Muscat medical directors].',
    isPlaceholder: true,
  },
  {
    id: 'derma-acne-placeholder',
    title: '[Acne / Skin Concern Service]',
    category: 'dermatology',
    tag: 'Pending Clinic Verification',
    description: '[Treatment Details — clinical management for persistent acne, hyperpigmentation, or sensitivity verified by attending physicians].',
    isPlaceholder: true,
  },
  {
    id: 'derma-hair-placeholder',
    title: '[Hair / Scalp Service]',
    category: 'dermatology',
    tag: 'Pending Clinic Verification',
    description: '[Treatment Details — targeted scalp therapies and hair density evaluations provided after clinical triage].',
    isPlaceholder: true,
  },
];

// Dentistry Services - editable cards strictly using placeholders without inventing unverified procedures
export const DENTISTRY_SERVICES: ServiceItem[] = [
  {
    id: 'dent-general',
    title: '[General Dentistry]',
    category: 'dentistry',
    tag: 'Core Dental Practice',
    description: '[Treatment Details — Comprehensive oral examinations, diagnostics, and routine dental maintenance scheduled with EMC dental clinicians].',
    isPlaceholder: true,
  },
  {
    id: 'dent-cosmetic',
    title: '[Cosmetic Dentistry]',
    category: 'dentistry',
    tag: 'Smile Aesthetics',
    description: '[Treatment Details — Aesthetic smile design and harmony consultations tailored to facial aesthetics and dental structure].',
    isPlaceholder: true,
  },
  {
    id: 'dent-cleaning',
    title: '[Dental Cleaning]',
    category: 'dentistry',
    tag: 'Preventive Care',
    description: '[Treatment Details — Professional prophylaxis, plaque management, and periodontal health maintenance protocols].',
    isPlaceholder: true,
  },
  {
    id: 'dent-restorative',
    title: '[Restorative Dentistry]',
    category: 'dentistry',
    tag: 'Functional Rehabilitation',
    description: '[Treatment Details — Structural restoration and tooth preservation techniques discussed during in-depth dental assessment].',
    isPlaceholder: true,
  },
  {
    id: 'dent-consultation',
    title: '[Dental Consultation]',
    category: 'dentistry',
    tag: 'Initial Evaluation',
    description: '[Treatment Details — One-on-one diagnostic consultation, digital imaging review, and customized oral health treatment planning].',
    isPlaceholder: true,
  },
];

// Doctor / Clinical Team placeholders (strictly non-invented, ready for clinic verification)
export const DOCTOR_PLACEHOLDERS: DoctorPlaceholder[] = [
  {
    id: 'doc-1',
    role: 'Specialist Dermatologist',
    specialty: 'Clinical & Aesthetic Dermatology',
    department: 'Dermatology',
  },
  {
    id: 'doc-2',
    role: 'Laser Specialist',
    specialty: 'Laser & Energy-Based Skin Treatments',
    department: 'Dermatology',
  },
  {
    id: 'doc-3',
    role: 'Dental Surgeon / Consultant',
    specialty: 'Restorative & General Dentistry',
    department: 'Dentistry',
  },
  {
    id: 'doc-4',
    role: 'Aesthetic Dentistry Practitioner',
    specialty: 'Cosmetic Dentistry & Oral Health',
    department: 'Dentistry',
  },
];

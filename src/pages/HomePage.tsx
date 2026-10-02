import React, { useState } from 'react';
import { PageId } from '../types';
import { CLINIC_INFO, FEATURED_REVIEW, VERIFIED_REVIEWS } from '../data/clinicData';
import { ArrowRight, Phone, Star, ShieldCheck, HeartHandshake, Sparkles, Building2, ExternalLink } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (department?: 'Dermatology' | 'Dentistry') => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  const [showAllReviews, setShowAllReviews] = useState(false);

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              {/* Trust Badge - clean unboxed typography */}
              <div className="flex flex-wrap items-center gap-3 text-xs tracking-wider text-[#4A5560]">
                <div className="flex items-center gap-1 text-[#C5A880]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C5A880]" />
                  ))}
                </div>
                <span className="font-semibold text-[#181C20]">{CLINIC_INFO.googleRating} Google Rating</span>
                <span aria-hidden="true" className="text-[#B8C2CC]">·</span>
                <span>{CLINIC_INFO.reviewsCount.toLocaleString()} Verified Reviews</span>
                <span aria-hidden="true" className="text-[#B8C2CC]">·</span>
                <span className="text-[#697785]">Qurum, Muscat, Oman</span>
              </div>

              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block">
                  EMC Skin Clinic Oman · EMC Muscat
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#181C20] leading-[1.1] font-normal">
                  Advanced Skin & Dental Care in Muscat
                </h1>
                <p className="text-base sm:text-lg text-[#4A5560] leading-relaxed max-w-2xl font-light">
                  Professional dermatology and dentistry in a modern, comfortable clinical environment located at Al Sarooj Plaza, Qurum.
                </p>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenBooking()}
                  className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#181C20] hover:bg-[#2B333B] transition-all rounded-lg shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Book an Appointment</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A880]" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('featured-services');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#181C20] hover:text-[#C5A880] border border-[#D5CDC2] hover:border-[#C5A880] transition-colors rounded-lg flex items-center justify-center"
                >
                  Explore Our Services
                </button>
              </div>

              {/* Review highlights strip */}
              <div className="pt-4 border-t border-[#E8E2D9] text-xs text-[#63707D]">
                <span className="font-medium text-[#181C20]">Frequently Recommended For: </span>
                <span className="text-[#4A5560]">
                  {CLINIC_INFO.popularTopics.join(' · ')}
                </span>
              </div>
            </div>

            {/* Right Media Carrier */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E0D8CD] aspect-[4/3] lg:aspect-[5/6] bg-[#EDE5DC]">
                <img
                  src="/src/assets/images/emc_muscat_hero_reception_1790848602270.jpg"
                  alt="EMC Muscat clinic reception and waiting lounge in Qurum"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    // Graceful fallback container
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Measured Scrim & Subtle Caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-medium">
                  <p className="font-serif text-sm tracking-wide">EMC Muscat Clinical Suite</p>
                  <p className="text-[11px] text-[#EDE7DF] font-light">Al Sarooj Plaza, Sultan Qaboos Street</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / CREDIBILITY STRIP */}
      <section className="border-y border-[#E8E2D9] bg-[#F7F3EE]/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#E2D9CD]">
            <div className="pt-2 md:pt-0">
              <p className="font-serif text-2xl sm:text-3xl text-[#181C20]">{CLINIC_INFO.googleRating} ★</p>
              <p className="text-xs uppercase tracking-wider text-[#687684] mt-1">Google Rating</p>
            </div>
            <div className="pt-2 md:pt-0">
              <p className="font-serif text-2xl sm:text-3xl text-[#181C20]">{CLINIC_INFO.reviewsCount.toLocaleString()}</p>
              <p className="text-xs uppercase tracking-wider text-[#687684] mt-1">Patient Reviews</p>
            </div>
            <div className="pt-2 md:pt-0">
              <p className="font-serif text-2xl sm:text-3xl text-[#181C20]">Dermatology</p>
              <p className="text-xs uppercase tracking-wider text-[#687684] mt-1">Skin & Aesthetic</p>
            </div>
            <div className="pt-2 md:pt-0">
              <p className="font-serif text-2xl sm:text-3xl text-[#181C20]">Dentistry</p>
              <p className="text-xs uppercase tracking-wider text-[#687684] mt-1">Oral Health</p>
            </div>
            <div className="pt-2 md:pt-0 col-span-2 md:col-span-1">
              <p className="font-serif text-2xl sm:text-3xl text-[#181C20]">Muscat, Oman</p>
              <p className="text-xs uppercase tracking-wider text-[#687684] mt-1">Qurum · Al Sarooj</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTRODUCTION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block">
              Integrated Practice
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#181C20] leading-snug font-normal">
              Where Skin Health Meets Modern Dental Care
            </h2>
            <div className="w-12 h-[2px] bg-[#C5A880]" />
          </div>

          <div className="lg:col-span-7 space-y-6 text-[#4A5560] text-base leading-relaxed">
            <p>
              EMC Muscat unites dermatology and dentistry within a single, refined healthcare destination in Qurum. Designed to eliminate the stress of traditional clinical visits, our practice emphasizes thoughtful consultations, attentive practitioner listening, and personalized treatment planning.
            </p>
            <p>
              Whether you are addressing specific dermatological concerns, exploring laser treatments, or scheduling a comprehensive dental consultation, your care is managed within a contemporary clinical environment crafted for comfort, hygiene, and patient privacy.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-xs text-[#2C343D]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                <span>Patient-Focused Care</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                <span>Private Consultations</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                <span>Modern Clinical Suites</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                <span>Individualized Planning</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                <span>Clean & Calm Ambience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                <span>Central Qurum Location</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED SERVICES (TWO CATEGORIES) */}
      <section id="featured-services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block">
            Clinical Focus Areas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#181C20] font-normal">
            Specialized Care Under One Roof
          </h2>
          <p className="text-sm text-[#5B6774]">
            Explore our primary clinical departments dedicated to skin health, aesthetic dermatology, and dentistry.
          </p>
        </div>

        {/* Category 1: Dermatology */}
        <div className="space-y-8 bg-white/70 border border-[#E8E2D9] rounded-2xl p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EFE8DF] pb-6">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider text-[#4E6857] font-semibold">
                Department 01
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#181C20]">
                Dermatology & Skin
              </h3>
              <p className="text-xs text-[#63707D]">
                Laser therapies, skin treatments, carbon laser, and aesthetic consultations.
              </p>
            </div>
            <button
              onClick={() => {
                onNavigate('dermatology');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#181C20] hover:text-[#C5A880] transition-colors"
            >
              <span>View Dermatology Department</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Laser Treatments */}
            <div className="p-6 rounded-xl bg-[#FAF8F5] border border-[#E6DFD4] hover:border-[#C5A880] transition-all space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[11px] text-[#C5A880] uppercase tracking-wider font-semibold block">
                  Review-Supported
                </span>
                <h4 className="font-serif text-xl text-[#181C20]">Laser Treatments</h4>
                <p className="text-xs text-[#525E6A] leading-relaxed">
                  Carefully tailored laser sessions addressing patient needs with precision in a modern clinical room.
                </p>
              </div>
              <button
                onClick={() => onOpenBooking('Dermatology')}
                className="text-xs font-semibold text-[#181C20] hover:text-[#C5A880] inline-flex items-center gap-1.5 pt-2"
              >
                <span>Inquire About Laser</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Card 2: Skin Treatments */}
            <div className="p-6 rounded-xl bg-[#FAF8F5] border border-[#E6DFD4] hover:border-[#C5A880] transition-all space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[11px] text-[#4E6857] uppercase tracking-wider font-semibold block">
                  Clinical Care
                </span>
                <h4 className="font-serif text-xl text-[#181C20]">Skin Treatments</h4>
                <p className="text-xs text-[#525E6A] leading-relaxed">
                  Comprehensive skin examinations and personalized treatment regimens for optimal skin vitality.
                </p>
              </div>
              <button
                onClick={() => onOpenBooking('Dermatology')}
                className="text-xs font-semibold text-[#181C20] hover:text-[#C5A880] inline-flex items-center gap-1.5 pt-2"
              >
                <span>Book Skin Evaluation</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Card 3: Carbon Laser */}
            <div className="p-6 rounded-xl bg-[#FAF8F5] border border-[#E6DFD4] hover:border-[#C5A880] transition-all space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[11px] text-[#C5A880] uppercase tracking-wider font-semibold block">
                  Popular Service
                </span>
                <h4 className="font-serif text-xl text-[#181C20]">Carbon Laser</h4>
                <p className="text-xs text-[#525E6A] leading-relaxed">
                  [Add official Carbon Laser treatment description — clinical indications and protocol provided upon personalized consultation].
                </p>
              </div>
              <button
                onClick={() => onOpenBooking('Dermatology')}
                className="text-xs font-semibold text-[#181C20] hover:text-[#C5A880] inline-flex items-center gap-1.5 pt-2"
              >
                <span>Consultation Details</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Card 4: Aesthetic Skin Care */}
            <div className="p-6 rounded-xl bg-[#FAF8F5] border border-[#E6DFD4] hover:border-[#C5A880] transition-all space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[11px] text-[#4E6857] uppercase tracking-wider font-semibold block">
                  Aesthetic Planning
                </span>
                <h4 className="font-serif text-xl text-[#181C20]">Aesthetic Skin Care</h4>
                <p className="text-xs text-[#525E6A] leading-relaxed">
                  Customized facial aesthetic protocols focused on balance, radiance, and personalized skin health.
                </p>
              </div>
              <button
                onClick={() => onOpenBooking('Dermatology')}
                className="text-xs font-semibold text-[#181C20] hover:text-[#C5A880] inline-flex items-center gap-1.5 pt-2"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Category 2: Dentistry */}
        <div className="space-y-8 bg-white/70 border border-[#E8E2D9] rounded-2xl p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EFE8DF] pb-6">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider text-[#C5A880] font-semibold">
                Department 02
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#181C20]">
                Dentistry
              </h3>
              <p className="text-xs text-[#63707D]">
                Professional dental care and consultations in a comfortable, contemporary setting.
              </p>
            </div>
            <button
              onClick={() => {
                onNavigate('dentistry');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#181C20] hover:text-[#C5A880] transition-colors"
            >
              <span>View Dental Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Placeholders strictly as instructed */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-[#FAF8F5] border border-[#E6DFD4] hover:border-[#C5A880] transition-all space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[11px] text-[#707D8A] uppercase tracking-wider font-semibold block">
                  Dental Service 01
                </span>
                <h4 className="font-serif text-xl text-[#181C20]">[General Dentistry]</h4>
                <p className="text-xs text-[#63707D] leading-relaxed">
                  [Treatment Details — comprehensive clinical dental examination and routine oral maintenance].
                </p>
              </div>
              <button
                onClick={() => onOpenBooking('Dentistry')}
                className="text-xs font-semibold text-[#181C20] hover:text-[#C5A880] inline-flex items-center gap-1.5 pt-2"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="p-6 rounded-xl bg-[#FAF8F5] border border-[#E6DFD4] hover:border-[#C5A880] transition-all space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[11px] text-[#707D8A] uppercase tracking-wider font-semibold block">
                  Dental Service 02
                </span>
                <h4 className="font-serif text-xl text-[#181C20]">[Cosmetic Dentistry]</h4>
                <p className="text-xs text-[#63707D] leading-relaxed">
                  [Treatment Details — smile aesthetic consultations planned according to patient dental goals].
                </p>
              </div>
              <button
                onClick={() => onOpenBooking('Dentistry')}
                className="text-xs font-semibold text-[#181C20] hover:text-[#C5A880] inline-flex items-center gap-1.5 pt-2"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="p-6 rounded-xl bg-[#FAF8F5] border border-[#E6DFD4] hover:border-[#C5A880] transition-all space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[11px] text-[#707D8A] uppercase tracking-wider font-semibold block">
                  Dental Service 03
                </span>
                <h4 className="font-serif text-xl text-[#181C20]">[Dental Cleaning]</h4>
                <p className="text-xs text-[#63707D] leading-relaxed">
                  [Treatment Details — professional hygiene assessment, plaque cleaning, and preventative guidance].
                </p>
              </div>
              <button
                onClick={() => onOpenBooking('Dentistry')}
                className="text-xs font-semibold text-[#181C20] hover:text-[#C5A880] inline-flex items-center gap-1.5 pt-2"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="p-6 rounded-xl bg-[#FAF8F5] border border-[#E6DFD4] hover:border-[#C5A880] transition-all space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[11px] text-[#707D8A] uppercase tracking-wider font-semibold block">
                  Dental Service 04
                </span>
                <h4 className="font-serif text-xl text-[#181C20]">[Restorative Dentistry]</h4>
                <p className="text-xs text-[#63707D] leading-relaxed">
                  [Treatment Details — structural oral restorations evaluated and scheduled after clinical diagnosis].
                </p>
              </div>
              <button
                onClick={() => onOpenBooking('Dentistry')}
                className="text-xs font-semibold text-[#181C20] hover:text-[#C5A880] inline-flex items-center gap-1.5 pt-2"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PATIENT EXPERIENCE (FOUR COLUMNS) */}
      <section className="bg-[#F4EFEB] py-16 sm:py-20 border-y border-[#E6DFD4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block">
              The Clinic Standards
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#181C20] font-normal">
              The EMC Muscat Experience
            </h2>
            <p className="text-sm text-[#5B6774]">
              Every visit is designed with patient comfort, clinical integrity, and clear communication at its core.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3 p-6 bg-white rounded-xl border border-[#E2DAD0] shadow-sm">
              <ShieldCheck className="w-6 h-6 text-[#C5A880]" />
              <h3 className="font-serif text-xl text-[#181C20]">Professional Care</h3>
              <p className="text-xs text-[#525E6A] leading-relaxed">
                Consultations conducted with clinical diligence, transparent communication, and patient-centered respect.
              </p>
            </div>

            <div className="space-y-3 p-6 bg-white rounded-xl border border-[#E2DAD0] shadow-sm">
              <HeartHandshake className="w-6 h-6 text-[#4E6857]" />
              <h3 className="font-serif text-xl text-[#181C20]">Personalized Attention</h3>
              <p className="text-xs text-[#525E6A] leading-relaxed">
                Care plans designed around individual patient goals, medical history, and specific aesthetic or oral concerns.
              </p>
            </div>

            <div className="space-y-3 p-6 bg-white rounded-xl border border-[#E2DAD0] shadow-sm">
              <Sparkles className="w-6 h-6 text-[#C5A880]" />
              <h3 className="font-serif text-xl text-[#181C20]">Comfortable Environment</h3>
              <p className="text-xs text-[#525E6A] leading-relaxed">
                Calming reception lounges, discreet consultation suites, and soothing amenities in Al Sarooj Plaza.
              </p>
            </div>

            <div className="space-y-3 p-6 bg-white rounded-xl border border-[#E2DAD0] shadow-sm">
              <Building2 className="w-6 h-6 text-[#4E6857]" />
              <h3 className="font-serif text-xl text-[#181C20]">Modern Clinical Experience</h3>
              <p className="text-xs text-[#525E6A] leading-relaxed">
                Clean, contemporary healthcare infrastructure maintaining strict hygiene protocols and scheduled punctuality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FEATURED PATIENT REVIEW (Customer Review - Strictly no fabrication) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-white border border-[#E2DAD0] shadow-md space-y-6 text-center">
          <div className="flex items-center justify-center gap-1.5 text-[#C5A880]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#C5A880]" />
            ))}
          </div>

          <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#181C20] leading-snug font-normal max-w-3xl mx-auto">
            “{FEATURED_REVIEW.text}”
          </blockquote>

          <div className="space-y-1">
            <p className="font-semibold text-sm text-[#181C20]">{FEATURED_REVIEW.author}</p>
            <p className="text-xs text-[#707D8A]">
              Google Review · Topic: {FEATURED_REVIEW.highlightTopic}
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setShowAllReviews(!showAllReviews)}
              className="text-xs font-semibold uppercase tracking-wider text-[#181C20] hover:text-[#C5A880] transition-colors inline-flex items-center gap-2 border-b border-[#C5A880] pb-1"
            >
              <span>{showAllReviews ? 'Hide Patient Reviews' : 'View Patient Reviews'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={CLINIC_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#5E6B78] hover:text-[#181C20] inline-flex items-center gap-1.5"
            >
              <span>1,378 Reviews on Google (4.7 ★)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Expandable Verified Reviews drawer */}
          {showAllReviews && (
            <div className="pt-6 border-t border-[#EFE8DF] grid grid-cols-1 md:grid-cols-2 gap-6 text-left animate-fadeIn">
              {VERIFIED_REVIEWS.map((rev) => (
                <div key={rev.id} className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD4] space-y-2">
                  <div className="flex items-center gap-1 text-[#C5A880]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#C5A880]" />
                    ))}
                  </div>
                  <p className="text-xs text-[#3A4550] leading-relaxed italic">
                    "{rev.text}"
                  </p>
                  <p className="text-[11px] font-semibold text-[#181C20] pt-1">
                    — {rev.author} <span className="font-normal text-[#75828F]">({rev.highlightTopic})</span>
                  </p>
                </div>
              ))}
            </div>
          )}

          <p className="text-[11px] text-[#7A8692] italic pt-2">
            *Customer reviews reflect individual experiences and do not constitute medical guarantees or uniform clinical outcomes.
          </p>
        </div>
      </section>

      {/* 7. HOMEPAGE FINAL CTA (Dark contrast section) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#181C20] text-white p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl border border-[#2B333B]">
          <div className="relative z-10 max-w-2xl space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block">
              Consultations in Qurum
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
              Your Care Starts With the Right Consultation
            </h2>
            <p className="text-sm sm:text-base text-[#D0D7DE] font-light leading-relaxed">
              Connect with EMC Muscat to discuss your dermatology or dental care needs. Our coordinators are ready to assist you.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => onOpenBooking()}
                className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#14171A] bg-[#C5A880] hover:bg-[#B5966B] transition-colors rounded-lg shadow-sm flex items-center justify-center gap-2"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white border border-[#454E57] hover:border-[#C5A880] hover:text-[#C5A880] transition-colors rounded-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C5A880]" />
                <span>Call {CLINIC_INFO.phone}</span>
              </a>
            </div>

            <div className="pt-2 text-xs text-[#8C98A5] flex flex-wrap gap-4">
              <span>Sultan Qaboos Street, Qurum</span>
              <span aria-hidden="true">·</span>
              <span>Al Sarooj Plaza</span>
              <span aria-hidden="true">·</span>
              <span>Muscat, Oman</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

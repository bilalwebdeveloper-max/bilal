import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { ArrowRight, Phone, Sparkles, Shield, CheckCircle, FileText } from 'lucide-react';

interface DermatologyPageProps {
  onOpenBooking: (department?: 'Dermatology' | 'Dentistry') => void;
}

export const DermatologyPage: React.FC<DermatologyPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      {/* 1. HERO */}
      <section className="relative pt-6 sm:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#4E6857] font-semibold block">
                EMC Muscat · Dermatology Department
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#181C20] font-normal leading-[1.1]">
                Dermatology & Skin Care
              </h1>
              <p className="text-base sm:text-lg text-[#4A5560] leading-relaxed max-w-2xl font-light">
                Personalized dermatology and aesthetic skin care in Muscat, delivered in a serene, modern clinical environment at Al Sarooj Plaza.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenBooking('Dermatology')}
                  className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#181C20] hover:bg-[#2B333B] transition-colors rounded-lg shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Book Dermatology Appointment</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A880]" />
                </button>

                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#181C20] border border-[#D5CDC2] hover:border-[#C5A880] transition-colors rounded-lg flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#C5A880]" />
                  <span>Call +968 24 604540</span>
                </a>
              </div>

              <div className="pt-4 border-t border-[#E8E2D9] flex flex-wrap items-center gap-4 text-xs text-[#525E6A]">
                <span>Laser Treatment Focused</span>
                <span aria-hidden="true" className="text-[#C5D0D9]">·</span>
                <span>Carbon Laser Available</span>
                <span aria-hidden="true" className="text-[#C5D0D9]">·</span>
                <span>Personalized Treatment Planning</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E0D8CD] aspect-[4/3] bg-[#EDE5DC]">
                <img
                  src="/src/assets/images/emc_dermatology_consultation_1790848617843.jpg"
                  alt="Dermatology consultation room at EMC Muscat"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                  <p className="font-serif text-sm">EMC Dermatology Suite</p>
                  <p className="text-[11px] text-[#E5DDD2] font-light">Muscat, Sultanate of Oman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED SKIN SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block">
            Specialized Treatments
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#181C20] font-normal">
            Skin Therapies & Consultations
          </h2>
          <p className="text-sm text-[#5B6774]">
            Services reflected in verified patient feedback and tailored for Muscat residents.
          </p>
        </div>

        {/* 3 Main Highlighted Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Laser Treatments */}
          <div className="bg-white border border-[#E2DAD0] rounded-2xl p-8 shadow-sm space-y-5 flex flex-col justify-between hover:border-[#C5A880] transition-colors">
            <div className="space-y-3">
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#C5A880]">
                Customer-Reviewed Practice
              </span>
              <h3 className="font-serif text-2xl text-[#181C20]">Laser Treatments</h3>
              <p className="text-sm text-[#4E5B67] leading-relaxed">
                Laser treatment is among the most frequently mentioned services in our patient reviews. EMC Muscat offers targeted laser sessions conducted by trained specialists with careful attention to skin sensitivity, comfort, and patient satisfaction.
              </p>
              <div className="pt-2 text-xs text-[#707D8A] space-y-1">
                <p>• Tailored to individual skin profiles</p>
                <p>• Gentle, professional treatment technique</p>
                <p>• Pre-treatment evaluation included</p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#EFE8DF]">
              <button
                onClick={() => onOpenBooking('Dermatology')}
                className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#181C20] bg-[#FAF8F5] hover:bg-[#F2ECE4] border border-[#D5CDC2] rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>Ask About Laser Treatments</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
              </button>
            </div>
          </div>

          {/* Skin Treatments */}
          <div className="bg-white border border-[#E2DAD0] rounded-2xl p-8 shadow-sm space-y-5 flex flex-col justify-between hover:border-[#C5A880] transition-colors">
            <div className="space-y-3">
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#4E6857]">
                Clinical Evaluation
              </span>
              <h3 className="font-serif text-2xl text-[#181C20]">Skin Treatments</h3>
              <p className="text-sm text-[#4E5B67] leading-relaxed">
                General skincare evaluations and therapeutic sessions dedicated to supporting skin health, restoring moisture balance, and addressing specific patient concerns through evidence-based clinical routines.
              </p>
              <div className="pt-2 text-xs text-[#707D8A] space-y-1">
                <p>• In-depth skin health consultation</p>
                <p>• Routine and preventive care planning</p>
                <p>• Post-treatment home care guidance</p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#EFE8DF]">
              <button
                onClick={() => onOpenBooking('Dermatology')}
                className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#181C20] bg-[#FAF8F5] hover:bg-[#F2ECE4] border border-[#D5CDC2] rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>Inquire About Skin Treatments</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#4E6857]" />
              </button>
            </div>
          </div>

          {/* Carbon Laser */}
          <div className="bg-white border border-[#E2DAD0] rounded-2xl p-8 shadow-sm space-y-5 flex flex-col justify-between hover:border-[#C5A880] transition-colors">
            <div className="space-y-3">
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#C5A880]">
                Verified Review Topic
              </span>
              <h3 className="font-serif text-2xl text-[#181C20]">Carbon Laser</h3>
              <p className="text-sm text-[#4E5B67] leading-relaxed">
                Recognized in clinic reviews as a preferred aesthetic skin service in Muscat. Provides specialized focus on pore clarity and texture renewal under professional care.
              </p>
              <div className="p-3 rounded-lg bg-[#FAF8F5] border border-[#EAE3D8] text-xs text-[#6B7886] italic">
                [Add official Carbon Laser treatment description — clinical indications and protocol provided upon personalized consultation]
              </div>
            </div>

            <div className="pt-4 border-t border-[#EFE8DF]">
              <button
                onClick={() => onOpenBooking('Dermatology')}
                className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#181C20] bg-[#FAF8F5] hover:bg-[#F2ECE4] border border-[#D5CDC2] rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>Book Carbon Laser Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
              </button>
            </div>
          </div>
        </div>

        {/* Laser Clinical Image Showcase */}
        <div className="rounded-2xl overflow-hidden border border-[#E0D8CD] bg-[#EDE5DC] shadow-sm relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 h-64 lg:h-96 relative">
              <img
                src="/src/assets/images/emc_laser_skin_treatment_1790848651594.jpg"
                alt="EMC Muscat laser treatment room"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div className="lg:col-span-5 p-8 lg:p-12 space-y-4 bg-white/90">
              <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block">
                Clinical Atmosphere
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#181C20]">
                Comfort, Hygiene, & Precision
              </h3>
              <p className="text-xs sm:text-sm text-[#525E6A] leading-relaxed">
                Laser and skincare sessions at EMC Muscat are conducted in dedicated suites prioritizing patient privacy, sterile protocols, and soothing ambient comfort.
              </p>
              <p className="text-xs text-[#7A8692]">
                Appointments are scheduled with deliberate intervals to ensure punctuality and dedicated attention.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Dermatology Services - Editable Cards clearly marked */}
        <div className="space-y-6 pt-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#7B8794] font-medium block">
              Additional Dermatology Services
            </span>
            <h3 className="font-serif text-2xl text-[#181C20]">
              Customized Treatment Offerings
            </h3>
            <p className="text-xs text-[#63707D]">
              Placeholder categories prepared for clinic-verified service additions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-white border border-dashed border-[#D5CDC2] space-y-3">
              <FileText className="w-5 h-5 text-[#C5A880]" />
              <h4 className="font-serif text-lg text-[#181C20]">[Dermatology Service]</h4>
              <p className="text-xs text-[#707D8A] leading-relaxed">
                [Treatment Details — to be populated upon verified clinic specification of clinical indications, equipment, and duration].
              </p>
              <span className="inline-block text-[11px] text-[#A0ACB8] font-mono">
                Status: Pending Verification
              </span>
            </div>

            <div className="p-6 rounded-xl bg-white border border-dashed border-[#D5CDC2] space-y-3">
              <FileText className="w-5 h-5 text-[#4E6857]" />
              <h4 className="font-serif text-lg text-[#181C20]">[Aesthetic Treatment]</h4>
              <p className="text-xs text-[#707D8A] leading-relaxed">
                [Treatment Details — reserved for official aesthetic medical protocols verified by EMC Muscat medical directors].
              </p>
              <span className="inline-block text-[11px] text-[#A0ACB8] font-mono">
                Status: Pending Verification
              </span>
            </div>

            <div className="p-6 rounded-xl bg-white border border-dashed border-[#D5CDC2] space-y-3">
              <FileText className="w-5 h-5 text-[#C5A880]" />
              <h4 className="font-serif text-lg text-[#181C20]">[Acne / Skin Concern Service]</h4>
              <p className="text-xs text-[#707D8A] leading-relaxed">
                [Treatment Details — clinical management for persistent acne, hyperpigmentation, or sensitivity verified by attending physicians].
              </p>
              <span className="inline-block text-[11px] text-[#A0ACB8] font-mono">
                Status: Pending Verification
              </span>
            </div>

            <div className="p-6 rounded-xl bg-white border border-dashed border-[#D5CDC2] space-y-3">
              <FileText className="w-5 h-5 text-[#4E6857]" />
              <h4 className="font-serif text-lg text-[#181C20]">[Hair / Scalp Service]</h4>
              <p className="text-xs text-[#707D8A] leading-relaxed">
                [Treatment Details — targeted scalp therapies and hair density evaluations provided after clinical triage].
              </p>
              <span className="inline-block text-[11px] text-[#A0ACB8] font-mono">
                Status: Pending Verification
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DERMATOLOGY CONSULTATION CALLOUT */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] border border-[#E0D7CC] rounded-2xl p-8 sm:p-12 text-center space-y-6 shadow-sm">
          <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block">
            Personalized Treatment Planning
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#181C20] font-normal max-w-2xl mx-auto">
            Start With a Professional Consultation
          </h2>
          <p className="text-sm sm:text-base text-[#4E5B67] leading-relaxed max-w-2xl mx-auto font-light">
            Every skin type is unique. A clinical consultation allows the EMC team to carefully evaluate your concerns, assess your skin barrier, and recommend appropriate, gentle, and medically suitable options.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking('Dermatology')}
              className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#181C20] hover:bg-[#2B333B] transition-colors rounded-lg shadow-sm flex items-center gap-2"
            >
              <span>Book Dermatology Appointment</span>
              <ArrowRight className="w-4 h-4 text-[#C5A880]" />
            </button>

            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#181C20] border border-[#D5CDC2] hover:border-[#C5A880] transition-colors rounded-lg"
            >
              Call +968 24 604540
            </a>
          </div>

          <p className="text-[11px] text-[#8C98A5] italic">
            *Clinical assessments and treatments are conducted strictly in accordance with local healthcare regulations.
          </p>
        </div>
      </section>
    </div>
  );
};

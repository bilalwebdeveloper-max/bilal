import React from 'react';
import { CLINIC_INFO, DOCTOR_PLACEHOLDERS } from '../data/clinicData';
import { ArrowRight, Phone, Star, UserCheck, HeartHandshake, Compass, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onOpenBooking: (department?: 'Dermatology' | 'Dentistry') => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      {/* 1. HERO */}
      <section className="relative pt-6 sm:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block">
                The Clinic Story
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#181C20] font-normal leading-[1.1]">
                About EMC Muscat
              </h1>
              <p className="text-base sm:text-lg text-[#4A5560] leading-relaxed max-w-2xl font-light">
                A modern destination for dermatology and dentistry in Muscat, Oman, located at Al Sarooj Plaza on Sultan Qaboos Street.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenBooking()}
                  className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#181C20] hover:bg-[#2B333B] transition-colors rounded-lg shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A880]" />
                </button>

                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#181C20] border border-[#D5CDC2] hover:border-[#C5A880] transition-colors rounded-lg flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#C5A880]" />
                  <span>Call {CLINIC_INFO.phone}</span>
                </a>
              </div>

              <div className="pt-4 border-t border-[#E8E2D9] flex flex-wrap items-center gap-4 text-xs text-[#525E6A]">
                <span>Al Sarooj Plaza</span>
                <span aria-hidden="true" className="text-[#C5D0D9]">·</span>
                <span>Qurum, Muscat</span>
                <span aria-hidden="true" className="text-[#C5D0D9]">·</span>
                <span>Dermatology & Dentistry</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E0D8CD] aspect-[4/3] bg-[#EDE5DC]">
                <img
                  src="/src/assets/images/emc_clinic_interior_lounge_1790848667266.jpg"
                  alt="EMC Muscat clinic interior and lounge"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                  <p className="font-serif text-sm">EMC Muscat Interior</p>
                  <p className="text-[11px] text-[#E5DDD2] font-light">Warm wood paneling & crystal chandeliers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR APPROACH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#4E6857] font-semibold block">
              Clinical Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#181C20] font-normal leading-snug">
              Professional Care With a Personal Approach
            </h2>
            <div className="w-12 h-[2px] bg-[#4E6857]" />
            <p className="text-sm text-[#5B6774] leading-relaxed pt-2">
              At EMC Muscat, healthcare is not transactional. We believe the foundation of effective clinical practice is establishing clear trust and attentive dialogue with every patient who enters our doors.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-white border border-[#E2DAD0] space-y-2 shadow-sm">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A880]">01. Active Listening</span>
                <h3 className="font-serif text-xl text-[#181C20]">Listening to Patients</h3>
                <p className="text-xs text-[#525E6A] leading-relaxed">
                  We give patients unhurried time to voice their aesthetic objectives, skin sensitivities, or dental concerns without pressure.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#E2DAD0] space-y-2 shadow-sm">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#4E6857]">02. Understanding</span>
                <h3 className="font-serif text-xl text-[#181C20]">Individual Concerns</h3>
                <p className="text-xs text-[#525E6A] leading-relaxed">
                  Every patient has unique medical history, skin pigmentation, and oral anatomy requiring tailored clinical assessment.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#E2DAD0] space-y-2 shadow-sm">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A880]">03. Guidance</span>
                <h3 className="font-serif text-xl text-[#181C20]">Professional Consultation</h3>
                <p className="text-xs text-[#525E6A] leading-relaxed">
                  Detailed discussions highlighting realistic clinical outcomes, suitability, and step-by-step procedure phases.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#E2DAD0] space-y-2 shadow-sm">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#4E6857]">04. Individualization</span>
                <h3 className="font-serif text-xl text-[#181C20]">Personalized Planning</h3>
                <p className="text-xs text-[#525E6A] leading-relaxed">
                  Custom treatment schedules built around your personal timeline, comfort preferences, and recovery expectations.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#F7F3EE] border border-[#E0D7CC] flex items-center gap-4">
              <HeartHandshake className="w-8 h-8 text-[#C5A880] shrink-0" />
              <div>
                <h4 className="font-serif text-lg text-[#181C20]">Comfortable Patient Experience</h4>
                <p className="text-xs text-[#525E6A] leading-relaxed">
                  From welcoming reception staff to punctual clinical rooms, our team strives to make your visit tranquil and respectful of your time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR SPECIALTIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block">
            Practice Structure
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#181C20] font-normal">
            Our Specialties
          </h2>
          <p className="text-sm text-[#5B6774]">
            Two dedicated departments operating under cohesive clinical standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-white border border-[#E2DAD0] space-y-5 shadow-sm">
            <span className="text-xs uppercase tracking-wider text-[#4E6857] font-semibold block">
              Department 01
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#181C20]">Dermatology</h3>
            <p className="text-sm text-[#4E5B67] leading-relaxed">
              Skin care, dermatology, laser, and aesthetic treatment delivered within private, modern treatment rooms in Qurum.
            </p>
            <div className="pt-2 border-t border-[#EFE8DF] text-xs text-[#707D8A] space-y-1.5">
              <p>• Patient-centered skin evaluations</p>
              <p>• Laser treatments & carbon laser protocols</p>
              <p>• Aesthetic skin rejuvenation planning</p>
            </div>
            <button
              onClick={() => onOpenBooking('Dermatology')}
              className="text-xs font-semibold uppercase tracking-wider text-[#181C20] hover:text-[#C5A880] inline-flex items-center gap-2 pt-2"
            >
              <span>Book Dermatology</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#E2DAD0] space-y-5 shadow-sm">
            <span className="text-xs uppercase tracking-wider text-[#C5A880] font-semibold block">
              Department 02
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#181C20]">Dentistry</h3>
            <p className="text-sm text-[#4E5B67] leading-relaxed">
              Professional dental care in a modern clinical environment equipped for consultation, preventive oral maintenance, and dental care.
            </p>
            <div className="pt-2 border-t border-[#EFE8DF] text-xs text-[#707D8A] space-y-1.5">
              <p>• Comprehensive dental evaluations</p>
              <p>• Hygiene, cleaning & preventive maintenance</p>
              <p>• Restorative & cosmetic smile consultations</p>
            </div>
            <button
              onClick={() => onOpenBooking('Dentistry')}
              className="text-xs font-semibold uppercase tracking-wider text-[#181C20] hover:text-[#C5A880] inline-flex items-center gap-2 pt-2"
            >
              <span>Book Dentistry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. TEAM SECTION (Doctor profile cards with editable placeholders - strictly NO invented staff) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#7B8794] font-medium block">
            Clinical Team Directory
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#181C20] font-normal">
            Our Practitioners & Specialists
          </h2>
          <p className="text-xs text-[#7A8692]">
            Doctor profile cards are prepared as editable placeholders awaiting official clinic publication of licensed staff.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCTOR_PLACEHOLDERS.map((doc, idx) => (
            <div
              key={doc.id}
              className="p-6 rounded-2xl bg-white border border-dashed border-[#D2C9BD] space-y-4 hover:border-[#C5A880] transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-[#FAF8F5] border border-[#E2DAD0] flex items-center justify-center text-[#8C98A5]">
                <UserCheck className="w-6 h-6" />
              </div>

              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-[#C5A880] font-semibold block">
                  {doc.department}
                </span>
                <h3 className="font-serif text-xl text-[#181C20]">[Doctor Name]</h3>
                <p className="text-xs text-[#525E6A] font-medium">[Specialization]</p>
                <p className="text-[11px] text-[#788592]">[Credentials]</p>
              </div>

              <div className="pt-3 border-t border-[#EFE8DF] text-xs text-[#6B7886] leading-relaxed">
                <p>[Professional Biography — official verified biography to be provided by EMC Muscat].</p>
              </div>

              <div className="pt-2">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#A0ACB8] bg-[#F2EDE5] px-2 py-1 rounded">
                  Placeholder 0{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. PATIENT EXPERIENCE (Large Image-Led Section) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#FAF8F5] border border-[#E2DAD0] p-8 sm:p-12 lg:p-16 space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block">
              Patient First
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#181C20] font-normal">
              Designed For Patient Tranquility
            </h2>
            <p className="text-sm text-[#5B6774]">
              Every element of our Qurum clinic reflects four core pillars.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-4 border-t border-[#EAE3D8]">
            <div className="space-y-2">
              <h3 className="font-serif text-2xl text-[#181C20]">Comfortable</h3>
              <p className="text-xs text-[#525E6A] leading-relaxed">
                Plush waiting lounges, warm lighting, and a soothing acoustic environment.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl text-[#181C20]">Professional</h3>
              <p className="text-xs text-[#525E6A] leading-relaxed">
                Transparent communication, rigorous medical ethics, and sterile hygiene.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl text-[#181C20]">Personalized</h3>
              <p className="text-xs text-[#525E6A] leading-relaxed">
                Custom care recommendations developed for your specific health goals.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl text-[#181C20]">Modern</h3>
              <p className="text-xs text-[#525E6A] leading-relaxed">
                Contemporary clinical suites located conveniently at Al Sarooj Plaza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. REVIEW STATISTICS (Sophisticated large-number design) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#181C20] text-white rounded-3xl p-10 sm:p-16 border border-[#2B333B] shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block">
                Reputation in Muscat
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal">
                Reflected in Patient Reviews
              </h2>
              <p className="text-sm text-[#A8B2BC] leading-relaxed font-light">
                Patients across the Muscat capital area trust EMC for dermatology treatments, laser therapy, and dental appointments.
              </p>
            </div>

            <div className="md:col-span-6 flex flex-col sm:flex-row items-center justify-around gap-8 text-center border-t md:border-t-0 md:border-l border-[#2E3640] pt-8 md:pt-0 md:pl-8">
              <div className="space-y-1">
                <div className="font-serif text-5xl sm:text-6xl text-[#C5A880] font-normal tracking-tight">
                  4.7 <span className="text-2xl text-[#C5A880]/70">/ 5</span>
                </div>
                <div className="flex items-center justify-center gap-1 text-[#C5A880] pt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A880]" />
                  ))}
                </div>
                <p className="text-xs uppercase tracking-wider text-[#A8B2BC] pt-1">
                  Google Review Rating
                </p>
              </div>

              <div className="space-y-1">
                <div className="font-serif text-5xl sm:text-6xl text-white font-normal tracking-tight">
                  1,378
                </div>
                <p className="text-sm text-[#C5A880] font-medium pt-1">
                  Verified Patient Reviews
                </p>
                <p className="text-xs uppercase tracking-wider text-[#A8B2BC]">
                  Muscat, Oman
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

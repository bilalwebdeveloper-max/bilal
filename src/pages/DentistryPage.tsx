import React from 'react';
import { CLINIC_INFO, DENTISTRY_SERVICES } from '../data/clinicData';
import { ArrowRight, Phone, Sparkles, Smile, Shield, HeartHandshake, CheckCircle } from 'lucide-react';

interface DentistryPageProps {
  onOpenBooking: (department?: 'Dermatology' | 'Dentistry') => void;
}

export const DentistryPage: React.FC<DentistryPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      {/* 1. HERO */}
      <section className="relative pt-6 sm:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block">
                EMC Muscat · Dentistry Department
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#181C20] font-normal leading-[1.1]">
                Modern Dentistry in Muscat
              </h1>
              <p className="text-base sm:text-lg text-[#4A5560] leading-relaxed max-w-2xl font-light">
                Professional dental care in a comfortable and contemporary clinical environment located at Al Sarooj Plaza, Qurum.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenBooking('Dentistry')}
                  className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#181C20] hover:bg-[#2B333B] transition-colors rounded-lg shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Book Dental Appointment</span>
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
                <span>Preventive Oral Health</span>
                <span aria-hidden="true" className="text-[#C5D0D9]">·</span>
                <span>Gentle Patient Care</span>
                <span aria-hidden="true" className="text-[#C5D0D9]">·</span>
                <span>Contemporary Dental Suites</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E0D8CD] aspect-[4/3] bg-[#EDE5DC]">
                <img
                  src="/src/assets/images/emc_modern_dentistry_suite_1790848634427.jpg"
                  alt="Modern dental consultation suite at EMC Muscat"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                  <p className="font-serif text-sm">EMC Dentistry Operatory</p>
                  <p className="text-[11px] text-[#E5DDD2] font-light">Al Sarooj Plaza, Qurum, Muscat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DENTISTRY SERVICES (Strictly using placeholders without fabricating procedures) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block">
            Dental Focus Areas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#181C20] font-normal">
            Dental Services & Consultations
          </h2>
          <p className="text-sm text-[#5B6774]">
            Treatment cards structured for clinic verification. Exact procedures are scheduled upon professional consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DENTISTRY_SERVICES.map((serv) => (
            <div
              key={serv.id}
              className="p-8 rounded-2xl bg-white border border-[#E2DAD0] hover:border-[#C5A880] transition-colors shadow-sm space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-[#C5A880]">
                  {serv.tag}
                </span>
                <h3 className="font-serif text-2xl text-[#181C20]">{serv.title}</h3>
                <p className="text-sm text-[#4E5B67] leading-relaxed">
                  {serv.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EFE8DF] space-y-3">
                <button
                  onClick={() => onOpenBooking('Dentistry')}
                  className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#181C20] bg-[#FAF8F5] hover:bg-[#F2ECE4] border border-[#D5CDC2] rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <span>Book Dental Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
                </button>
                <p className="text-[11px] text-[#8E9BA7] text-center italic">
                  *Specific procedure details confirmed by attending dental practitioner.
                </p>
              </div>
            </div>
          ))}

          {/* Dental Care Protocol Card */}
          <div className="p-8 rounded-2xl bg-[#F7F3EE] border border-[#E0D7CC] space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#4E6857]">
                Clinical Protocol
              </span>
              <h3 className="font-serif text-2xl text-[#181C20]">Comprehensive Oral Review</h3>
              <p className="text-sm text-[#4E5B67] leading-relaxed">
                Prior to recommending any cosmetic or restorative procedure, our team conducts a thorough examination of gums, bite balance, and tooth structure.
              </p>
            </div>
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="text-xs font-semibold text-[#181C20] hover:text-[#C5A880] inline-flex items-center gap-1.5"
            >
              <span>Speak with Dental Reception ({CLINIC_INFO.phone})</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. DENTAL EXPERIENCE */}
      <section className="bg-[#FAF8F5] py-16 sm:py-20 border-y border-[#E6DFD4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block">
              Patient Well-Being
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#181C20] font-normal">
              The Dental Experience at EMC
            </h2>
            <p className="text-sm text-[#5B6774]">
              Dental visits designed around four steadfast clinical principles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-xl border border-[#E2DAD0] space-y-3 shadow-sm">
              <Smile className="w-6 h-6 text-[#C5A880]" />
              <h3 className="font-serif text-xl text-[#181C20]">Comfort</h3>
              <p className="text-xs text-[#525E6A] leading-relaxed">
                Ergonomic dental seating, gentle clinical handling, and a serene atmosphere to alleviate treatment hesitation.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-[#E2DAD0] space-y-3 shadow-sm">
              <Shield className="w-6 h-6 text-[#4E6857]" />
              <h3 className="font-serif text-xl text-[#181C20]">Professional Consultation</h3>
              <p className="text-xs text-[#525E6A] leading-relaxed">
                Detailed one-on-one evaluations where patient questions and oral health priorities are thoroughly discussed.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-[#E2DAD0] space-y-3 shadow-sm">
              <HeartHandshake className="w-6 h-6 text-[#C5A880]" />
              <h3 className="font-serif text-xl text-[#181C20]">Personalized Care</h3>
              <p className="text-xs text-[#525E6A] leading-relaxed">
                Step-by-step oral treatment regimens designed specifically for your lifestyle, dental history, and comfort level.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-[#E2DAD0] space-y-3 shadow-sm">
              <Sparkles className="w-6 h-6 text-[#4E6857]" />
              <h3 className="font-serif text-xl text-[#181C20]">Modern Environment</h3>
              <p className="text-xs text-[#525E6A] leading-relaxed">
                Pristine sterilization standards, updated dental units, and high-standard clinical hygiene in Qurum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DENTAL CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#181C20] text-white rounded-3xl p-8 sm:p-14 text-center space-y-6 border border-[#2B333B] shadow-xl">
          <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block">
            Dentistry in Qurum
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight max-w-2xl mx-auto">
            A Healthier Smile Starts With a Consultation
          </h2>
          <p className="text-sm sm:text-base text-[#D0D7DE] font-light leading-relaxed max-w-xl mx-auto">
            Schedule an initial dental assessment with EMC Muscat to discuss hygiene, restoration, or aesthetic smile goals in a comfortable setting.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking('Dentistry')}
              className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#14171A] bg-[#C5A880] hover:bg-[#B5966B] transition-colors rounded-lg shadow-sm flex items-center justify-center gap-2"
            >
              <span>Book Dental Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white border border-[#454E57] hover:border-[#C5A880] hover:text-[#C5A880] transition-colors rounded-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#C5A880]" />
              <span>Call +968 24 604540</span>
            </a>
          </div>

          <p className="text-[11px] text-[#8C98A5] italic">
            *Consultation appointments are scheduled based on doctor clinic availability.
          </p>
        </div>
      </section>
    </div>
  );
};

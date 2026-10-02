import React from 'react';
import { PageId } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { Phone, MapPin, MessageCircle, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const quickLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'dermatology', label: 'Dermatology' },
    { id: 'dentistry', label: 'Dentistry' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-[#14171A] text-[#EDE7DF] border-t border-[#262C33]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#C5A880] font-medium block">
              Muscat, Sultanate of Oman
            </span>
            <div className="space-y-1">
              <h2 className="font-serif text-2xl font-normal tracking-wide text-white">
                EMC SKIN CLINIC OMAN
              </h2>
              <p className="font-serif text-lg text-[#DCD5CB]">EMC MUSCAT</p>
              <p className="text-xs tracking-wider uppercase text-[#9EA8B3]">
                Dermatology • Dentistry
              </p>
            </div>
            <p className="text-sm text-[#A8B2BC] leading-relaxed pt-2">
              Advanced dermatology, laser treatments, and contemporary dentistry delivered with patient-focused care in Qurum.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-[#CFD7DE] hover:text-[#C5A880] transition-colors inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:underline"
                  >
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] mb-5">
              Contact & Location
            </h3>
            <div className="space-y-3 text-sm text-[#CFD7DE]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  Sultan Qaboos Street, Qurum<br />
                  Al Sarooj Plaza, Mina Al Fahhal<br />
                  Muscat, Oman (Plus Code: {CLINIC_INFO.plusCode})
                </address>
              </div>

              <div className="flex items-center gap-2.5 pt-2">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="font-mono hover:text-[#C5A880] transition-colors"
                >
                  {CLINIC_INFO.phone}
                </a>
              </div>

              <div className="pt-2 text-xs text-[#9EA8B3] border-t border-[#262C33]">
                <p className="font-medium text-[#CFD7DE]">{CLINIC_INFO.hoursStatus}</p>
                <p className="mt-0.5 text-[11px] text-[#8C96A1]">{CLINIC_INFO.hoursNotice}</p>
              </div>
            </div>
          </div>

          {/* Col 4: Action CTAs */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] mb-5">
              Appointments & Inquiries
            </h3>
            <div className="space-y-3">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider bg-[#C5A880] hover:bg-[#B5966B] text-[#14171A] rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="w-full py-2.5 px-4 text-xs font-medium border border-[#3A434D] hover:border-[#C5A880] text-[#EDE7DF] rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Call Now (+968 24 604540)</span>
              </a>

              <a
                href={`https://wa.me/${CLINIC_INFO.whatsAppCustomerReviewRaw}?text=Hello%20EMC%20Muscat,%20I%20would%20like%20to%20inquire%20about%20a%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 text-xs font-medium border border-[#3A434D] hover:border-[#4E6857] text-[#EDE7DF] rounded-lg transition-colors flex items-center justify-center gap-2 hover:bg-[#1E2721]"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#6BBF8B]" />
                <span>WhatsApp Us (71526100)</span>
              </a>

              <p className="text-[11px] text-[#7C8792] leading-tight pt-1">
                WhatsApp number referenced in patient service responses. Direct calls handled via reception during operational hours.
              </p>
            </div>
          </div>
        </div>

        {/* Medical & Legal Disclaimer */}
        <div className="pt-8 border-t border-[#262C33] text-xs text-[#8C96A1] space-y-4">
          <p className="leading-relaxed">
            <strong className="text-[#B8C2CC] font-medium">Medical Notice: </strong>
            {CLINIC_INFO.disclaimer}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-[12px] text-[#707B86]">
            <p>© 2026 EMC Muscat. All Rights Reserved.</p>
            <p className="flex items-center gap-4">
              <span>Dermatology Clinic in Qurum</span>
              <span aria-hidden="true">·</span>
              <span>Muscat, Sultanate of Oman</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

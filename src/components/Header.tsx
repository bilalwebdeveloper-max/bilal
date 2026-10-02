import React, { useState } from 'react';
import { PageId } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { Phone, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBooking: (department?: 'Dermatology' | 'Dentistry') => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'dermatology', label: 'Dermatology' },
    { id: 'dentistry', label: 'Dentistry' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D9] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark in display face */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="text-2xl sm:text-3xl font-serif tracking-tight text-[#181C20] hover:text-[#C5A880] transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
          >
            EMC MUSCAT
          </a>

          {/* Zone 2: 5 clean text navigation links with subtle underline */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4A5560]">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1.5 transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-[#181C20] font-semibold'
                      : 'hover:text-[#181C20]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A880] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#181C20] hover:text-[#C5A880] transition-colors whitespace-nowrap py-2 px-3 rounded-lg border border-[#DCD5CB] hover:border-[#C5A880]"
              title="Call EMC Muscat"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="font-mono">{CLINIC_INFO.phone}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="px-4 py-2 text-xs font-semibold tracking-wide uppercase text-white bg-[#181C20] hover:bg-[#2B333B] transition-colors rounded-lg shadow-sm whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#C5A880]"
            >
              Book an Appointment
            </button>
          </div>

          {/* Mobile Hamburger toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 text-xs font-semibold uppercase text-white bg-[#181C20] rounded-md"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="p-2 text-[#181C20] hover:text-[#C5A880] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col bg-[#FAF8F5] pt-20 px-6 pb-8 animate-fadeIn">
          <div className="flex items-center justify-between pb-6 border-b border-[#E8E2D9]">
            <span className="font-serif text-2xl text-[#181C20]">EMC MUSCAT</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#4A5560] hover:text-[#181C20]"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-4 py-8 text-lg font-serif">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left py-2 border-b border-[#F0EBE3] transition-colors ${
                  currentPage === link.id
                    ? 'text-[#C5A880] font-semibold'
                    : 'text-[#181C20]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="mt-auto space-y-3 pt-6 border-t border-[#E8E2D9]">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-3 w-full py-3 text-sm font-medium border border-[#DCD5CB] rounded-lg text-[#181C20]"
            >
              <Phone className="w-4 h-4 text-[#C5A880]" />
              <span>Call {CLINIC_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 text-sm font-semibold uppercase tracking-wider text-white bg-[#181C20] rounded-lg shadow-sm"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      )}
    </>
  );
};

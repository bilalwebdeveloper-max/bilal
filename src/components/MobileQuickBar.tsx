import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

interface MobileQuickBarProps {
  onOpenBooking: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#DCD5CB] px-3 py-2 shadow-lg">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={`tel:${CLINIC_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-white border border-[#D5CDC2] text-[#181C20] text-[11px] font-medium active:bg-[#F2ECE4] transition-colors"
        >
          <Phone className="w-4 h-4 text-[#C5A880] mb-0.5" />
          <span>Call</span>
        </a>

        <a
          href={`https://wa.me/${CLINIC_INFO.whatsAppCustomerReviewRaw}?text=Hello%20EMC%20Muscat,%20I%20would%20like%20to%20inquire%20about%20an%20appointment.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-white border border-[#D5CDC2] text-[#181C20] text-[11px] font-medium active:bg-[#F2ECE4] transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-[#4E6857] mb-0.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-[#181C20] text-white text-[11px] font-semibold tracking-wide active:bg-[#2B333B] transition-colors"
        >
          <Calendar className="w-4 h-4 text-[#C5A880] mb-0.5" />
          <span>Book Visit</span>
        </button>
      </div>
    </div>
  );
};

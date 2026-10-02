import React, { useState } from 'react';
import { AppointmentFormData } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { X, CheckCircle2, Phone, MessageSquare, Calendar, Clock, User, Mail, ShieldAlert } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDepartment?: 'Dermatology' | 'Dentistry';
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialDepartment = 'Dermatology',
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    department: initialDepartment,
    preferredDate: '',
    preferredTime: 'Morning (09:00 - 13:00)',
    serviceConcern: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate real brief network handover
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      department: initialDepartment,
      preferredDate: '',
      preferredTime: 'Morning (09:00 - 13:00)',
      serviceConcern: '',
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#FAF8F5] border border-[#E0D8CD] rounded-2xl shadow-2xl p-6 sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#707D8A] hover:text-[#181C20] rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-[#C5A880]"
          aria-label="Close appointment modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center space-y-5">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#EBF5EF] flex items-center justify-center text-[#3D7A53]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 id="modal-headline" className="font-serif text-2xl text-[#181C20]">
                Inquiry Received
              </h3>
              <p className="text-sm font-medium text-[#2C333A] max-w-md mx-auto leading-relaxed">
                Thank you. Your appointment request has been received. The clinic will contact you to confirm availability.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F2EDE5] border border-[#E3DBD0] text-xs text-[#525E6A] text-left space-y-1.5">
              <p>
                <strong className="text-[#181C20]">Patient:</strong> {formData.fullName}
              </p>
              <p>
                <strong className="text-[#181C20]">Department:</strong> {formData.department}
              </p>
              <p>
                <strong className="text-[#181C20]">Contact Phone:</strong> {formData.phone}
              </p>
              {formData.serviceConcern && (
                <p>
                  <strong className="text-[#181C20]">Concern / Service:</strong> {formData.serviceConcern}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-[#181C20] border border-[#D0C6B8] hover:border-[#C5A880] rounded-lg"
              >
                <Phone className="w-4 h-4 text-[#C5A880]" />
                <span>Call {CLINIC_INFO.phone}</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto py-2.5 px-6 text-xs font-semibold uppercase tracking-wider text-white bg-[#181C20] hover:bg-[#2B333B] rounded-lg transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#C5A880] font-medium block">
                EMC Muscat · Qurum
              </span>
              <h2 id="modal-headline" className="font-serif text-2xl sm:text-3xl text-[#181C20]">
                Request an Appointment
              </h2>
              <p className="text-xs text-[#63707D]">
                Consultations for dermatology, skin treatments, or contemporary dentistry.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3C4752] mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#98A3AF] absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Fatima Al Lawati"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 text-sm bg-white border border-[#D5CDC2] rounded-lg focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] outline-none text-[#181C20]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#3C4752] mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#98A3AF] absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+968 9XXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-white border border-[#D5CDC2] rounded-lg focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] outline-none text-[#181C20]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#3C4752] mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#98A3AF] absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="patient@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-white border border-[#D5CDC2] rounded-lg focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] outline-none text-[#181C20]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3C4752] mb-1.5">
                  Department *
                </label>
                <select
                  value={formData.department}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      department: e.target.value as 'Dermatology' | 'Dentistry',
                    })
                  }
                  className="w-full px-3 py-2.5 text-sm bg-white border border-[#D5CDC2] rounded-lg focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] outline-none text-[#181C20]"
                >
                  <option value="Dermatology">Dermatology (Skin & Laser)</option>
                  <option value="Dentistry">Dentistry</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#3C4752] mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#98A3AF] absolute left-3 top-3" />
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-white border border-[#D5CDC2] rounded-lg focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] outline-none text-[#181C20]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#3C4752] mb-1.5">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#98A3AF] absolute left-3 top-3" />
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-white border border-[#D5CDC2] rounded-lg focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] outline-none text-[#181C20]"
                    >
                      <option value="Morning (09:00 - 13:00)">Morning (09:00 - 13:00)</option>
                      <option value="Afternoon (13:00 - 17:00)">Afternoon (13:00 - 17:00)</option>
                      <option value="Evening (17:00 - 21:00)">Evening (17:00 - 21:00)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3C4752] mb-1.5">
                  Service / Concern
                </label>
                <input
                  type="text"
                  placeholder="e.g. Laser Consultation, Carbon Laser, Dental Checkup"
                  value={formData.serviceConcern}
                  onChange={(e) => setFormData({ ...formData, serviceConcern: e.target.value })}
                  className="w-full px-3 py-2.5 text-sm bg-white border border-[#D5CDC2] rounded-lg focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] outline-none text-[#181C20]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3C4752] mb-1.5">
                  Message / Special Request
                </label>
                <textarea
                  rows={2}
                  placeholder="Briefly describe your schedule preference or questions for the clinical team..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2.5 text-sm bg-white border border-[#D5CDC2] rounded-lg focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] outline-none text-[#181C20]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#181C20] hover:bg-[#2B333B] transition-colors rounded-lg shadow-sm disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <span>Request Appointment</span>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-[#788491] text-center leading-normal">
                Submissions are received by EMC clinic coordinators who will verify availability and reach out directly.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { AppointmentFormData } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Calendar,
  Send,
  CheckCircle2,
  Navigation,
  ExternalLink,
  ShieldCheck,
  Mail,
  User,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    department: 'Dermatology',
    preferredDate: '',
    preferredTime: 'Morning (09:00 - 13:00)',
    serviceConcern: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
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
      department: 'Dermatology',
      preferredDate: '',
      preferredTime: 'Morning (09:00 - 13:00)',
      serviceConcern: '',
      message: '',
    });
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      {/* 1. HERO */}
      <section className="relative pt-6 sm:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block">
            Appointments & Inquiries
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#181C20] font-normal leading-[1.1]">
            Book Your Visit to EMC Muscat
          </h1>
          <p className="text-base sm:text-lg text-[#4A5560] leading-relaxed font-light">
            Connect with our clinic for dermatology or dental care in Qurum, Muscat. Our clinical coordinators are ready to assist with scheduling and treatment questions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs text-[#525E6A]">
            <span>Sultan Qaboos Street</span>
            <span aria-hidden="true" className="text-[#C5D0D9]">·</span>
            <span>Al Sarooj Plaza</span>
            <span aria-hidden="true" className="text-[#C5D0D9]">·</span>
            <span>Qurum, Muscat, Oman</span>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONVERSION SECTION: FORM & CONTACT DETAILS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-[#E2DAD0] rounded-3xl p-8 sm:p-10 shadow-md">
            {submitted ? (
              <div className="py-12 text-center space-y-6 animate-fadeIn">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#EBF5EF] flex items-center justify-center text-[#3D7A53]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h2 className="font-serif text-3xl text-[#181C20]">
                    Inquiry Received
                  </h2>
                  <p className="text-base font-medium text-[#2C333A] max-w-lg mx-auto leading-relaxed">
                    Thank you. Your appointment request has been received. The clinic will contact you to confirm availability.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E3DBD0] text-xs text-[#525E6A] text-left max-w-md mx-auto space-y-2">
                  <p>
                    <strong className="text-[#181C20]">Patient Name:</strong> {formData.fullName}
                  </p>
                  <p>
                    <strong className="text-[#181C20]">Department:</strong> {formData.department}
                  </p>
                  <p>
                    <strong className="text-[#181C20]">Phone:</strong> {formData.phone}
                  </p>
                  {formData.serviceConcern && (
                    <p>
                      <strong className="text-[#181C20]">Concern / Service:</strong> {formData.serviceConcern}
                    </p>
                  )}
                  {formData.preferredDate && (
                    <p>
                      <strong className="text-[#181C20]">Requested Date:</strong> {formData.preferredDate} ({formData.preferredTime})
                    </p>
                  )}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={`tel:${CLINIC_INFO.phoneRaw}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 text-xs font-semibold text-[#181C20] border border-[#D0C6B8] hover:border-[#C5A880] rounded-lg transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#C5A880]" />
                    <span>Call Reception ({CLINIC_INFO.phone})</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto py-3 px-8 text-xs font-semibold uppercase tracking-wider text-white bg-[#181C20] hover:bg-[#2B333B] rounded-lg transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-8 space-y-2">
                  <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block">
                    Direct Appointment Request
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#181C20]">
                    Request an Appointment
                  </h2>
                  <p className="text-xs text-[#63707D]">
                    Fill in your details below. Our clinic staff will review your preferences and contact you to confirm available consultation slots.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#3C4752] mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#98A3AF] absolute left-3 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mana Al Kalbani"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full pl-9 pr-3 py-3 text-sm bg-[#FAF8F5] border border-[#D5CDC2] rounded-xl focus:border-[#C5A880] focus:bg-white focus:ring-1 focus:ring-[#C5A880] outline-none text-[#181C20]"
                      />
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#3C4752] mb-1.5">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-[#98A3AF] absolute left-3 top-3.5" />
                        <input
                          type="tel"
                          required
                          placeholder="+968 9XXXXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-9 pr-3 py-3 text-sm bg-[#FAF8F5] border border-[#D5CDC2] rounded-xl focus:border-[#C5A880] focus:bg-white focus:ring-1 focus:ring-[#C5A880] outline-none text-[#181C20]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#3C4752] mb-1.5">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-[#98A3AF] absolute left-3 top-3.5" />
                        <input
                          type="email"
                          required
                          placeholder="patient@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-9 pr-3 py-3 text-sm bg-[#FAF8F5] border border-[#D5CDC2] rounded-xl focus:border-[#C5A880] focus:bg-white focus:ring-1 focus:ring-[#C5A880] outline-none text-[#181C20]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Department */}
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
                      className="w-full px-3 py-3 text-sm bg-[#FAF8F5] border border-[#D5CDC2] rounded-xl focus:border-[#C5A880] focus:bg-white focus:ring-1 focus:ring-[#C5A880] outline-none text-[#181C20]"
                    >
                      <option value="Dermatology">Dermatology (Skin & Laser)</option>
                      <option value="Dentistry">Dentistry</option>
                    </select>
                  </div>

                  {/* Preferred Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#3C4752] mb-1.5">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-[#98A3AF] absolute left-3 top-3.5" />
                        <input
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className="w-full pl-9 pr-3 py-3 text-sm bg-[#FAF8F5] border border-[#D5CDC2] rounded-xl focus:border-[#C5A880] focus:bg-white focus:ring-1 focus:ring-[#C5A880] outline-none text-[#181C20]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#3C4752] mb-1.5">
                        Preferred Time
                      </label>
                      <div className="relative">
                        <Clock className="w-4 h-4 text-[#98A3AF] absolute left-3 top-3.5" />
                        <select
                          value={formData.preferredTime}
                          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                          className="w-full pl-9 pr-3 py-3 text-sm bg-[#FAF8F5] border border-[#D5CDC2] rounded-xl focus:border-[#C5A880] focus:bg-white focus:ring-1 focus:ring-[#C5A880] outline-none text-[#181C20]"
                        >
                          <option value="Morning (09:00 - 13:00)">Morning (09:00 - 13:00)</option>
                          <option value="Afternoon (13:00 - 17:00)">Afternoon (13:00 - 17:00)</option>
                          <option value="Evening (17:00 - 21:00)">Evening (17:00 - 21:00)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Service / Concern */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#3C4752] mb-1.5">
                      Service / Concern
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Laser Consultation, Carbon Laser, Dental Cleaning"
                      value={formData.serviceConcern}
                      onChange={(e) => setFormData({ ...formData, serviceConcern: e.target.value })}
                      className="w-full px-3 py-3 text-sm bg-[#FAF8F5] border border-[#D5CDC2] rounded-xl focus:border-[#C5A880] focus:bg-white focus:ring-1 focus:ring-[#C5A880] outline-none text-[#181C20]"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#3C4752] mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share any questions regarding treatment suitability, timing, or prior visits..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-3 text-sm bg-[#FAF8F5] border border-[#D5CDC2] rounded-xl focus:border-[#C5A880] focus:bg-white focus:ring-1 focus:ring-[#C5A880] outline-none text-[#181C20]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-white bg-[#181C20] hover:bg-[#2B333B] transition-colors rounded-xl shadow-md disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Processing Request...</span>
                      ) : (
                        <>
                          <span>Request Appointment</span>
                          <Send className="w-3.5 h-3.5 text-[#C5A880]" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-[#7A8692] text-center">
                    Submissions are received by EMC clinic coordinators who will verify availability and reach out directly.
                  </p>
                </form>
              </div>
            )}
          </div>

          {/* Right Column: Contact Information & Direct Action Buttons */}
          <div className="lg:col-span-5 space-y-8">
            {/* Business Info Card */}
            <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E2DAD0] space-y-6 shadow-sm">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block">
                  Muscat Healthcare Center
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#181C20]">
                  {CLINIC_INFO.name}
                </h2>
                <p className="font-serif text-lg text-[#4E5B67]">{CLINIC_INFO.subName}</p>
                <p className="text-xs tracking-wider uppercase text-[#707D8A]">
                  {CLINIC_INFO.departmentsLine}
                </p>
              </div>

              <div className="space-y-4 text-sm text-[#38434F] pt-2 border-t border-[#EAE3D8]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#181C20] font-medium">Clinic Address:</strong>
                    <address className="not-italic text-xs text-[#525E6A] leading-relaxed pt-0.5">
                      {CLINIC_INFO.address}
                    </address>
                    <p className="text-[11px] text-[#788592] pt-1">
                      Plus Code: <span className="font-mono text-[#181C20]">{CLINIC_INFO.plusCode}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#181C20] font-medium">Telephone:</strong>
                    <a
                      href={`tel:${CLINIC_INFO.phoneRaw}`}
                      className="font-mono text-xs text-[#181C20] hover:text-[#C5A880] transition-colors"
                    >
                      {CLINIC_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#181C20] font-medium">Operating Hours:</strong>
                    <p className="text-xs text-[#181C20] font-medium">{CLINIC_INFO.hoursStatus}</p>
                    <p className="text-[11px] text-[#707D8A] leading-relaxed pt-0.5">
                      {CLINIC_INFO.hoursNotice}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Prominent Action Buttons */}
            <div className="space-y-3">
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="w-full py-3.5 px-6 rounded-xl bg-[#181C20] hover:bg-[#2B333B] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-between shadow-sm transition-all"
              >
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#C5A880]" />
                  <span>Call Now ({CLINIC_INFO.phone})</span>
                </span>
                <span className="font-mono text-[11px] text-[#C5A880]">Direct</span>
              </a>

              <a
                href={`https://wa.me/${CLINIC_INFO.whatsAppCustomerReviewRaw}?text=Hello%20EMC%20Muscat,%20I%20would%20like%20to%20inquire%20about%20an%20appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-white border border-[#D5CDC2] hover:border-[#4E6857] text-[#181C20] text-xs font-semibold uppercase tracking-wider flex items-center justify-between shadow-sm transition-all hover:bg-[#F2F7F4]"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-[#4E6857]" />
                  <span>WhatsApp (+968 71526100)</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-[#7E8D9B]" />
              </a>

              <a
                href={CLINIC_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-white border border-[#D5CDC2] hover:border-[#C5A880] text-[#181C20] text-xs font-semibold uppercase tracking-wider flex items-center justify-between shadow-sm transition-all"
              >
                <span className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#C5A880]" />
                  <span>Get Directions (Google Maps)</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-[#7E8D9B]" />
              </a>

              <p className="text-[11px] text-[#7A8692] italic pt-1">
                *Note: The number 71526100 is referenced in patient customer-service responses and is provided for verified chat convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE MAP & BUSINESS HOURS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block">
              Location & Accessibility
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#181C20]">
              Find EMC Muscat in Qurum
            </h2>
            <p className="text-xs text-[#63707D]">
              Located conveniently at Al Sarooj Plaza along Sultan Qaboos Street.
            </p>
          </div>

          <a
            href={CLINIC_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#181C20] hover:text-[#C5A880] transition-colors border-b border-[#C5A880] pb-1 self-start sm:self-auto"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Map Container */}
        <div className="rounded-3xl overflow-hidden border border-[#E0D8CD] bg-[#EDE5DC] shadow-md relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
            {/* Interactive styled map frame */}
            <div className="lg:col-span-8 relative bg-[#E6DFD4] min-h-[320px] flex items-center justify-center overflow-hidden">
              <iframe
                title="EMC Skin Clinic Oman Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.764491741512!2d58.4582!3d23.6062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ff4e183201a7%3A0x8e878e47bf00e49!2sAl%20Sarooj%20Plaza!5e0!3m2!1sen!2som!4v1700000000000!5m2!1sen!2som"
                className="w-full h-full min-h-[350px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Map sidebar details */}
            <div className="lg:col-span-4 p-8 bg-white flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#4E6857] font-semibold block">
                  Clinic Landmark
                </span>
                <h3 className="font-serif text-2xl text-[#181C20]">EMC Muscat</h3>
                <p className="text-xs text-[#525E6A] leading-relaxed">
                  Situated in Al Sarooj Plaza, Mina Al Fahhal, along Sultan Qaboos Street in Qurum. Easy vehicular access and plaza parking available.
                </p>

                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD4] text-xs space-y-2">
                  <p>
                    <strong className="text-[#181C20]">Plus Code:</strong>{' '}
                    <span className="font-mono text-[#C5A880]">{CLINIC_INFO.plusCode}</span>
                  </p>
                  <p>
                    <strong className="text-[#181C20]">Address:</strong>{' '}
                    <span>{CLINIC_INFO.addressShort}</span>
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EFE8DF] space-y-3">
                <a
                  href={CLINIC_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#181C20] hover:bg-[#2B333B] rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours Clean Editable Area */}
        <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E2DAD0] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EAE3D8] pb-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block">
                Operational Availability
              </span>
              <h3 className="font-serif text-2xl text-[#181C20]">Clinic Opening Hours</h3>
            </div>
            <div className="text-xs font-semibold text-[#3D7A53] bg-[#EBF5EF] px-3 py-1.5 rounded-full self-start sm:self-auto">
              Current Status: {CLINIC_INFO.hoursStatus}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#525E6A] leading-relaxed">
            {CLINIC_INFO.hoursNotice}
          </p>

          <div className="pt-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#7B8794] block mb-2">
              Verified Weekly Schedule [Editable Schedule Area]
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-xs">
              {['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(
                (day) => (
                  <div
                    key={day}
                    className="p-3 bg-white rounded-lg border border-[#E2DAD0] text-center space-y-1"
                  >
                    <p className="font-semibold text-[#181C20]">{day}</p>
                    <p className="text-[11px] text-[#707D8A]">Contact Clinic</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

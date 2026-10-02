import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { MobileQuickBar } from './components/MobileQuickBar';
import { HomePage } from './pages/HomePage';
import { DermatologyPage } from './pages/DermatologyPage';
import { DentistryPage } from './pages/DentistryPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [modalDepartment, setModalDepartment] = useState<'Dermatology' | 'Dentistry'>('Dermatology');

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'dermatology', 'dentistry', 'about', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (department: 'Dermatology' | 'Dentistry' = 'Dermatology') => {
    setModalDepartment(department);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#181C20] font-sans">
      {/* Top Bar adheres to 3-zone contract */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />
        )}
        {currentPage === 'dermatology' && (
          <DermatologyPage onOpenBooking={handleOpenBooking} />
        )}
        {currentPage === 'dentistry' && (
          <DentistryPage onOpenBooking={handleOpenBooking} />
        )}
        {currentPage === 'about' && (
          <AboutPage onOpenBooking={handleOpenBooking} />
        )}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Global Luxury Footer */}
      <Footer onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />

      {/* Reusable Fast Appointment Inquiry Modal */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialDepartment={modalDepartment}
      />

      {/* Mobile Sticky Action Bar */}
      <MobileQuickBar onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}

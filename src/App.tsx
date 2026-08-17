import React, { useState } from 'react';
import { FirmProvider, useFirm } from './context/FirmContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { LeadershipSection } from './components/LeadershipSection';
import { ServicesSection } from './components/ServicesSection';
import { CorporateSection } from './components/CorporateSection';
import { TaxationSection } from './components/TaxationSection';
import { ImmigrationSection } from './components/ImmigrationSection';
import { IPSection } from './components/IPSection';
import { WebocNgoSection } from './components/WebocNgoSection';
import { OfficialLetterheadPreview } from './components/OfficialLetterheadPreview';
import { ConsultationSection } from './components/ConsultationSection';
import { ClientInquirySection } from './components/ClientInquirySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ConsultationModal } from './components/ConsultationModal';
import { CaseTrackerModal } from './components/CaseTrackerModal';
import { LegalNoticeModal } from './components/LegalNoticeModal';
import { MessageSquare, Calendar, Search } from 'lucide-react';

const MainLayout: React.FC = () => {
  const { setIsConsultationModalOpen, setIsCaseTrackerModalOpen } = useFirm();
  const [legalModalType, setLegalModalType] = useState<'disclaimer' | 'privacy' | 'terms' | null>(null);

  return (
    <div className="min-h-screen bg-[#0A192F] text-white selection:bg-[#C5A059] selection:text-[#0A192F] antialiased font-sans-body relative">
      
      {/* Top Navbar */}
      <Navbar />

      {/* Main Website Flow */}
      <main className="relative">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Firm Section */}
        <AboutSection />

        {/* 3. Leadership Section (H D AZAD CEO & Kamran Abro Advocate) */}
        <LeadershipSection />

        {/* 4. Complete Services Section (All 20 categories with filter & search) */}
        <ServicesSection />

        {/* 5. Dedicated Corporate & Business Law Section */}
        <CorporateSection />

        {/* 6. Dedicated Taxation & Customs Section */}
        <TaxationSection />

        {/* 7. Dedicated Immigration & Visa Section */}
        <ImmigrationSection />

        {/* 8. Dedicated Intellectual Property Section */}
        <IPSection />

        {/* 9. Dedicated NGO/NPO, WEBOC & Other Services Section */}
        <WebocNgoSection />

        {/* 10. Official Letterhead & Case Proceeding Docket Showcase */}
        <OfficialLetterheadPreview />

        {/* 11. Consultation Booking Section */}
        <ConsultationSection />

        {/* 12. Case / Client Inquiry Form Section */}
        <ClientInquirySection />

        {/* 13. Chambers & Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenLegalModal={(type) => setLegalModalType(type)} />

      {/* Modals */}
      <ServiceDetailModal />
      <ConsultationModal />
      <CaseTrackerModal />
      <LegalNoticeModal type={legalModalType} onClose={() => setLegalModalType(null)} />

      {/* Floating Quick Action Widget (Desktop & Mobile) with Geometric Balance aesthetics */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        
        {/* Track Case Floating Pill */}
        <button
          onClick={() => setIsCaseTrackerModalOpen(true)}
          className="px-3.5 py-2 bg-[#0F1E35]/95 hover:bg-[#112240] text-[#C5A059] text-xs font-cinzel font-bold border border-[#C5A059]/40 shadow-2xl backdrop-blur-md flex items-center gap-2 hover:border-[#C5A059] transition-all"
          title="Track Active Case"
        >
          <Search className="w-3.5 h-3.5 text-[#C5A059]" />
          <span className="hidden sm:inline tracking-wider uppercase text-[11px]">Track Docket</span>
        </button>

        {/* WhatsApp Direct */}
        <a
          href="https://wa.me/923048440932?text=Hello%20IDEAL%20INTERNATIONAL%20LAW%20FIRM%20AND%20CONSULTANCY"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 bg-[#112240] hover:bg-[#C5A059] text-[#C5A059] hover:text-[#0A192F] border border-[#C5A059]/50 flex items-center justify-center shadow-2xl transition-all"
          title="Direct WhatsApp Helpline"
          aria-label="Direct WhatsApp Helpline"
        >
          <MessageSquare className="w-5 h-5" />
        </a>

        {/* Primary Consultation Floating Button */}
        <button
          onClick={() => setIsConsultationModalOpen(true)}
          className="px-4 py-2.5 bg-[#C5A059] hover:bg-[#D8B572] text-[#0A192F] text-xs font-bold font-cinzel shadow-2xl shadow-black/60 flex items-center gap-2 uppercase tracking-widest transition-all"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Consultation</span>
        </button>
      </div>

    </div>
  );
};

export default function App() {
  return (
    <FirmProvider>
      <MainLayout />
    </FirmProvider>
  );
}

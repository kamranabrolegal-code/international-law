import React from 'react';
import { 
  Building2, 
  Briefcase, 
  FileCheck, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck,
  TrendingUp,
  FileSpreadsheet
} from 'lucide-react';
import { useFirm } from '../context/FirmContext';

export const CorporateSection: React.FC = () => {
  const { setIsConsultationModalOpen, setConsultationPreselectedService } = useFirm();

  const handleBook = (serviceName: string) => {
    setConsultationPreselectedService(serviceName);
    setIsConsultationModalOpen(true);
  };

  return (
    <section id="corporate-section" className="py-20 bg-[#0A192F] relative border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#112240] border border-[#C5A059]/40 text-[#C5A059] text-xs font-cinzel font-bold tracking-widest uppercase">
            <Building2 className="w-3.5 h-3.5" />
            <span>ENTERPRISE ADVISORY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cinzel font-bold text-white tracking-tight">
            CORPORATE & BUSINESS SERVICES
          </h2>
          <div className="h-0.5 w-20 bg-[#C5A059] mx-auto" />
          <p className="text-[#8892B0] text-sm sm:text-base leading-relaxed font-sans-body">
            Strategic corporate structuring, regulatory compliance, contract lifecycle management, and institutional legal advisory for enterprises of all scales.
          </p>
        </div>

        {/* 3 Dedicated Feature Cards */}
        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Company Services */}
          <div className="bg-[#112240] p-6 sm:p-7 border border-[#C5A059]/30 hover:border-[#C5A059] transition-all flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 border border-[#C5A059]/40 bg-[#0A192F] text-[#C5A059] flex items-center justify-center mb-5">
                <Building2 className="w-5 h-5" />
              </div>

              <h3 className="text-lg font-serif-title font-bold text-white group-hover:text-[#C5A059] transition-colors">
                Company Services
              </h3>
              
              <p className="text-xs sm:text-sm text-[#8892B0] mt-2 font-sans-body leading-relaxed">
                Company formation, corporate documentation, compliance support and legal consultancy for businesses.
              </p>

              <div className="mt-5 space-y-2 text-xs text-[#CCD6F6] border-t border-[#C5A059]/15 pt-4 font-sans-body">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>SECP Private Limited, Public & SMC Incorporation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Memorandum & Articles of Association Drafting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Annual Statutory Returns (Form 29, Form A, Form 21)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Foreign Branch Office & FDI Approvals</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#C5A059]/15">
              <button
                onClick={() => handleBook('Company Services')}
                className="w-full py-2.5 bg-[#0A192F] hover:bg-[#C5A059] hover:text-[#0A192F] text-[#C5A059] border border-[#C5A059]/40 text-xs font-bold uppercase tracking-widest font-cinzel transition-all flex items-center justify-center gap-1.5"
              >
                <span>Consult Company Setup</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Firm / Business Consultancy */}
          <div className="bg-[#112240] p-6 sm:p-7 border border-[#C5A059]/30 hover:border-[#C5A059] transition-all flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 border border-[#C5A059]/40 bg-[#0A192F] text-[#C5A059] flex items-center justify-center mb-5">
                <Briefcase className="w-5 h-5" />
              </div>

              <h3 className="text-lg font-serif-title font-bold text-white group-hover:text-[#C5A059] transition-colors">
                Firm / Business Consultancy
              </h3>
              
              <p className="text-xs sm:text-sm text-[#8892B0] mt-2 font-sans-body leading-relaxed">
                Legal consultancy for firms, businesses, entrepreneurs and organizations.
              </p>

              <div className="mt-5 space-y-2 text-xs text-[#CCD6F6] border-t border-[#C5A059]/15 pt-4 font-sans-body">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Partnership Deed Drafting & Registrar of Firms (Form C)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Joint Venture & Strategic Partnership Agreements</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Franchise, Agency & Distribution Contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Commercial Leases & Operational Restructuring</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#C5A059]/15">
              <button
                onClick={() => handleBook('Firm / Business Consultancy')}
                className="w-full py-2.5 bg-[#0A192F] hover:bg-[#C5A059] hover:text-[#0A192F] text-[#C5A059] border border-[#C5A059]/40 text-xs font-bold uppercase tracking-widest font-cinzel transition-all flex items-center justify-center gap-1.5"
              >
                <span>Consult Business Structure</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Corporate Legal Services */}
          <div className="bg-[#112240] p-6 sm:p-7 border border-[#C5A059]/30 hover:border-[#C5A059] transition-all flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 border border-[#C5A059]/40 bg-[#0A192F] text-[#C5A059] flex items-center justify-center mb-5">
                <FileCheck className="w-5 h-5" />
              </div>

              <h3 className="text-lg font-serif-title font-bold text-white group-hover:text-[#C5A059] transition-colors">
                Corporate Legal Services
              </h3>
              
              <p className="text-xs sm:text-sm text-[#8892B0] mt-2 font-sans-body leading-relaxed">
                Corporate agreements, contracts, business disputes, corporate documentation and legal advisory.
              </p>

              <div className="mt-5 space-y-2 text-xs text-[#CCD6F6] border-t border-[#C5A059]/15 pt-4 font-sans-body">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Commercial Contracts & Non-Disclosure Agreements (NDA)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Employment Law, HR Policies & Service Rules</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Commercial Arbitration & Dispute Mediation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Ongoing Corporate Retainer & Legal Due Diligence</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#C5A059]/15">
              <button
                onClick={() => handleBook('Corporate Legal Services')}
                className="w-full py-2.5 bg-[#0A192F] hover:bg-[#C5A059] hover:text-[#0A192F] text-[#C5A059] border border-[#C5A059]/40 text-xs font-bold uppercase tracking-widest font-cinzel transition-all flex items-center justify-center gap-1.5"
              >
                <span>Request Corporate Retainer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

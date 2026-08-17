import React from 'react';
import { 
  PlaneTakeoff, 
  ArrowRight, 
  CheckCircle2, 
  Globe2, 
  FileCheck2,
  Users2
} from 'lucide-react';
import { useFirm } from '../context/FirmContext';

export const ImmigrationSection: React.FC = () => {
  const { setIsConsultationModalOpen, setConsultationPreselectedService } = useFirm();

  const handleBook = (serviceName: string) => {
    setConsultationPreselectedService(serviceName);
    setIsConsultationModalOpen(true);
  };

  return (
    <section id="immigration-section" className="py-20 bg-[#0A192F] relative border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#112240] border border-[#C5A059]/40 text-[#C5A059] text-xs font-cinzel font-bold tracking-widest uppercase">
            <Globe2 className="w-3.5 h-3.5" />
            <span>GLOBAL MOBILITY & CITIZENSHIP</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cinzel font-bold text-white tracking-tight">
            IMMIGRATION & VISA SERVICES
          </h2>
          <div className="h-0.5 w-20 bg-[#C5A059] mx-auto" />
          <p className="text-[#8892B0] text-sm sm:text-base leading-relaxed font-sans-body">
            Professional legal assistance for visa applications, nationality documentation, overseas Pakistan Origin Cards (POC), and cross-border immigration compliance.
          </p>
        </div>

        {/* 2 Main Dedicated Cards */}
        <div className="mt-14 grid md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: Visa */}
          <div className="bg-[#112240] p-6 sm:p-8 border border-[#C5A059]/30 hover:border-[#C5A059] transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 border border-[#C5A059]/40 bg-[#0A192F] text-[#C5A059] flex items-center justify-center">
                  <PlaneTakeoff className="w-5 h-5" />
                </div>
                <span className="px-2 py-0.5 bg-[#0A192F] border border-[#C5A059]/40 text-[10px] font-mono text-[#C5A059] uppercase tracking-wider">
                  Global Visas
                </span>
              </div>

              <h3 className="text-xl font-serif-title font-bold text-white group-hover:text-[#C5A059] transition-colors">
                Visa Services
              </h3>
              
              <p className="text-sm text-[#8892B0] mt-2 font-sans-body leading-relaxed">
                Visa-related legal consultancy and assistance.
              </p>

              <div className="mt-6 space-y-2.5 text-xs text-[#CCD6F6] border-t border-[#C5A059]/15 pt-4 font-sans-body">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                  <span>Business, Commercial & Investor Visa Legal Documentation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                  <span>Work Permits, Expatriate Quotas & Ministry Approvals</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                  <span>Visa Extension & Overstay Regularization Protocols</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                  <span>Legal Sponsorship Affidavits & Embassy Dossier Preparation</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#C5A059]/15">
              <button
                onClick={() => handleBook('Visa Services')}
                className="w-full py-3 bg-[#0A192F] hover:bg-[#C5A059] hover:text-[#0A192F] text-[#C5A059] border border-[#C5A059]/40 text-xs font-bold uppercase tracking-widest font-cinzel transition-all flex items-center justify-center gap-2"
              >
                <span>Consult Visa Counsel</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Nationality */}
          <div className="bg-[#112240] p-6 sm:p-8 border border-[#C5A059]/30 hover:border-[#C5A059] transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 border border-[#C5A059]/40 bg-[#0A192F] text-[#C5A059] flex items-center justify-center">
                  <Globe2 className="w-5 h-5" />
                </div>
                <span className="px-2 py-0.5 bg-[#0A192F] border border-[#C5A059]/40 text-[10px] font-mono text-[#C5A059] uppercase tracking-wider">
                  Citizenship & NADRA
                </span>
              </div>

              <h3 className="text-xl font-serif-title font-bold text-white group-hover:text-[#C5A059] transition-colors">
                Nationality & Citizenship
              </h3>
              
              <p className="text-sm text-[#8892B0] mt-2 font-sans-body leading-relaxed">
                Legal consultancy regarding nationality and related matters.
              </p>

              <div className="mt-6 space-y-2.5 text-xs text-[#CCD6F6] border-t border-[#C5A059]/15 pt-4 font-sans-body">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                  <span>Dual Nationality Certification & Legal Verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                  <span>Pakistan Origin Card (POC) & NICOP Legal Guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                  <span>Blocked CNIC & NADRA Discrepancy Court Remedies</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                  <span>Naturalization & Citizenship Re-acquisition Procedures</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#C5A059]/15">
              <button
                onClick={() => handleBook('Nationality Services')}
                className="w-full py-3 bg-[#0A192F] hover:bg-[#C5A059] hover:text-[#0A192F] text-[#C5A059] border border-[#C5A059]/40 text-xs font-bold uppercase tracking-widest font-cinzel transition-all flex items-center justify-center gap-2"
              >
                <span>Consult Nationality Matters</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

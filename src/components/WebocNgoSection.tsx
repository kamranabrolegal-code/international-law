import React from 'react';
import { 
  HeartHandshake, 
  Layers, 
  MoreHorizontal, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink
} from 'lucide-react';
import { useFirm } from '../context/FirmContext';

export const WebocNgoSection: React.FC = () => {
  const { services, setIsConsultationModalOpen, setConsultationPreselectedService } = useFirm();

  const handleBook = (serviceName: string) => {
    setConsultationPreselectedService(serviceName);
    setIsConsultationModalOpen(true);
  };

  const otherServices = services.filter(s => s.category === 'other' || s.id === 'other-services');

  return (
    <section id="trade-ngo-section" className="py-20 bg-[#0A192F] relative border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#112240] border border-[#C5A059]/40 text-[#C5A059] text-xs font-cinzel font-bold tracking-widest uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>TRADE, CUSTOMS & NON-PROFIT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cinzel font-bold text-white tracking-tight">
            NGO / NPO, WEBOC & SPECIALIZED SERVICES
          </h2>
          <div className="h-0.5 w-20 bg-[#C5A059] mx-auto" />
          <p className="text-[#8892B0] text-sm sm:text-base leading-relaxed font-sans-body">
            Dedicated registration, customs portal facilitation, statutory non-profit licensing, and bespoke consultancy solutions.
          </p>
        </div>

        {/* 3 Prominent Cards: NGO/NPO, WEBOC, and Other Services */}
        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* 1. NGO / NPO Services */}
          <div className="bg-[#112240] p-6 sm:p-7 border border-[#C5A059]/30 hover:border-[#C5A059] transition-all flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 border border-[#C5A059]/40 bg-[#0A192F] text-[#C5A059] flex items-center justify-center mb-5">
                <HeartHandshake className="w-5 h-5" />
              </div>

              <h3 className="text-lg font-serif-title font-bold text-white group-hover:text-[#C5A059] transition-colors">
                NGO / NPO Services
              </h3>
              
              <p className="text-xs sm:text-sm text-[#8892B0] mt-2 font-sans-body leading-relaxed">
                Provide legal and consultancy services relating to establishment, registration, documentation, compliance and related legal matters.
              </p>

              <div className="mt-5 space-y-2 text-xs text-[#CCD6F6] border-t border-[#C5A059]/15 pt-4 font-sans-body">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>SECP Section 42 Non-Profit Licensing & Registration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Societies Registration Act 1860 & Trust Act Filings</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Economic Affairs Division (EAD) MoUs & Approvals</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>PCP Certification & Tax Exemption (100C) Applications</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#C5A059]/15">
              <button
                onClick={() => handleBook('NGO / NPO Services')}
                className="w-full py-2.5 bg-[#0A192F] hover:bg-[#C5A059] hover:text-[#0A192F] text-[#C5A059] border border-[#C5A059]/40 text-xs font-bold uppercase tracking-widest font-cinzel transition-all flex items-center justify-center gap-1.5"
              >
                <span>Consult NGO / NPO</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 2. WEBOC Services */}
          <div className="bg-[#112240] p-6 sm:p-7 border border-[#C5A059]/30 hover:border-[#C5A059] transition-all flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 border border-[#C5A059]/40 bg-[#0A192F] text-[#C5A059] flex items-center justify-center mb-5">
                <Layers className="w-5 h-5" />
              </div>

              <h3 className="text-lg font-serif-title font-bold text-white group-hover:text-[#C5A059] transition-colors">
                WEBOC Services
              </h3>
              
              <p className="text-xs sm:text-sm text-[#8892B0] mt-2 font-sans-body leading-relaxed">
                Legal and consultancy assistance relating to WEBOC, customs and online trade-related documentation and matters.
              </p>

              <div className="mt-5 space-y-2 text-xs text-[#CCD6F6] border-t border-[#C5A059]/15 pt-4 font-sans-body">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>WEBOC User ID Issuance for Importers & Exporters</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Pakistan Single Window (PSW) Integration & Biometrics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Customs Collectorate Verification & Document Clearance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Trade Chamber & Export Development Fund Support</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#C5A059]/15">
              <button
                onClick={() => handleBook('WEBOC Services')}
                className="w-full py-2.5 bg-[#0A192F] hover:bg-[#C5A059] hover:text-[#0A192F] text-[#C5A059] border border-[#C5A059]/40 text-xs font-bold uppercase tracking-widest font-cinzel transition-all flex items-center justify-center gap-1.5"
              >
                <span>Consult WEBOC Setup</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 3. Other Legal & Consultancy Services */}
          <div className="bg-[#112240] p-6 sm:p-7 border border-[#C5A059]/30 hover:border-[#C5A059] transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 border border-[#C5A059]/40 bg-[#0A192F] text-[#C5A059] flex items-center justify-center">
                  <MoreHorizontal className="w-5 h-5" />
                </div>
                <span className="px-2 py-0.5 bg-[#0A192F] border border-[#C5A059]/40 text-[10px] font-mono text-[#C5A059] uppercase tracking-wider">
                  Custom Advisory
                </span>
              </div>

              <h3 className="text-lg font-serif-title font-bold text-white group-hover:text-[#C5A059] transition-colors">
                Other Services
              </h3>
              
              <p className="text-xs sm:text-sm text-[#8892B0] mt-2 font-sans-body leading-relaxed">
                Other Legal & Consultancy Services tailored for specific institutional or individual needs, fully editable via admin.
              </p>

              <div className="mt-5 space-y-2 text-xs text-[#CCD6F6] border-t border-[#C5A059]/15 pt-4 font-sans-body">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Custom Legal Drafting & Regulatory Approvals</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>High Court Power of Attorney & Attestation Assistance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Commercial Feasibility & Statutory Due Diligence</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Comprehensive Legal Research & Document Drafting</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#C5A059]/15">
              <button
                onClick={() => handleBook('Other Legal & Consultancy Services')}
                className="w-full py-2.5 bg-[#0A192F] hover:bg-[#C5A059] hover:text-[#0A192F] text-[#C5A059] border border-[#C5A059]/40 text-xs font-bold uppercase tracking-widest font-cinzel transition-all flex items-center justify-center gap-1.5"
              >
                <span>Request Custom Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

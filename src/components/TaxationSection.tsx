import React from 'react';
import { 
  Receipt, 
  Calculator, 
  Truck, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  ShieldAlert,
  Percent
} from 'lucide-react';
import { useFirm } from '../context/FirmContext';

export const TaxationSection: React.FC = () => {
  const { setIsConsultationModalOpen, setConsultationPreselectedService } = useFirm();

  const handleBook = (serviceName: string) => {
    setConsultationPreselectedService(serviceName);
    setIsConsultationModalOpen(true);
  };

  return (
    <section id="taxation-section" className="py-20 bg-[#0F1E35] relative border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#112240] border border-[#C5A059]/40 text-[#C5A059] text-xs font-cinzel font-bold tracking-widest uppercase">
            <Percent className="w-3.5 h-3.5" />
            <span>FISCAL & REVENUE COUNSEL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cinzel font-bold text-white tracking-tight">
            TAXATION SERVICES
          </h2>
          <div className="h-0.5 w-20 bg-[#C5A059] mx-auto" />
          <p className="text-[#8892B0] text-sm sm:text-base leading-relaxed font-sans-body">
            Authoritative legal and consultancy support for direct and indirect taxes, provincial revenue authorities, customs adjudication, and appellate tribunal litigation.
          </p>
        </div>

        {/* 3 Dedicated Taxation Cards */}
        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* 1. Income Tax */}
          <div className="bg-[#112240] p-6 sm:p-7 border border-[#C5A059]/30 hover:border-[#C5A059] transition-all flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 border border-[#C5A059]/40 bg-[#0A192F] text-[#C5A059] flex items-center justify-center mb-5">
                <Receipt className="w-5 h-5" />
              </div>

              <h3 className="text-lg font-serif-title font-bold text-white group-hover:text-[#C5A059] transition-colors">
                Income Tax
              </h3>
              
              <p className="text-xs sm:text-sm text-[#8892B0] mt-2 font-sans-body leading-relaxed">
                Legal and consultancy services relating to income-tax matters.
              </p>

              <div className="mt-5 space-y-2 text-xs text-[#CCD6F6] border-t border-[#C5A059]/15 pt-4 font-sans-body">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>NTN Registration for Individuals, AOPs & Companies</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Annual Income Tax Return Preparation & Iris Filing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Defense against FBR Audit Notices (Sec 122 & 177)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Appeals before Commissioner IR & ATIR Benches</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#C5A059]/15">
              <button
                onClick={() => handleBook('Income Tax')}
                className="w-full py-2.5 bg-[#0A192F] hover:bg-[#C5A059] hover:text-[#0A192F] text-[#C5A059] border border-[#C5A059]/40 text-xs font-bold uppercase tracking-widest font-cinzel transition-all flex items-center justify-center gap-1.5"
              >
                <span>Consult Income Tax</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 2. Sales Tax */}
          <div className="bg-[#112240] p-6 sm:p-7 border border-[#C5A059]/30 hover:border-[#C5A059] transition-all flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 border border-[#C5A059]/40 bg-[#0A192F] text-[#C5A059] flex items-center justify-center mb-5">
                <Calculator className="w-5 h-5" />
              </div>

              <h3 className="text-lg font-serif-title font-bold text-white group-hover:text-[#C5A059] transition-colors">
                Sales Tax
              </h3>
              
              <p className="text-xs sm:text-sm text-[#8892B0] mt-2 font-sans-body leading-relaxed">
                Legal and consultancy services relating to sales-tax matters.
              </p>

              <div className="mt-5 space-y-2 text-xs text-[#CCD6F6] border-t border-[#C5A059]/15 pt-4 font-sans-body">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Sales Tax Registration (STRN) on Goods & Services</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Balochistan Revenue Authority (BRA) Returns Filing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Input Tax Adjustments, Invoicing & POS Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Show-Cause Notice Defense & Appellate Appeals</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#C5A059]/15">
              <button
                onClick={() => handleBook('Sales Tax')}
                className="w-full py-2.5 bg-[#0A192F] hover:bg-[#C5A059] hover:text-[#0A192F] text-[#C5A059] border border-[#C5A059]/40 text-xs font-bold uppercase tracking-widest font-cinzel transition-all flex items-center justify-center gap-1.5"
              >
                <span>Consult Sales Tax</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 3. Customs */}
          <div className="bg-[#112240] p-6 sm:p-7 border border-[#C5A059]/30 hover:border-[#C5A059] transition-all flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 border border-[#C5A059]/40 bg-[#0A192F] text-[#C5A059] flex items-center justify-center mb-5">
                <Truck className="w-5 h-5" />
              </div>

              <h3 className="text-lg font-serif-title font-bold text-white group-hover:text-[#C5A059] transition-colors">
                Customs
              </h3>
              
              <p className="text-xs sm:text-sm text-[#8892B0] mt-2 font-sans-body leading-relaxed">
                Legal consultancy and assistance relating to customs matters, disputes and proceedings.
              </p>

              <div className="mt-5 space-y-2 text-xs text-[#CCD6F6] border-t border-[#C5A059]/15 pt-4 font-sans-body">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Customs Valuation Rulings (Section 25 / 25A)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Seizure, Confiscation & Contravention Proceedings</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Representation before Collector of Customs (Adjudication)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Customs Appellate Tribunal Appeals & High Court Writs</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#C5A059]/15">
              <button
                onClick={() => handleBook('Customs')}
                className="w-full py-2.5 bg-[#0A192F] hover:bg-[#C5A059] hover:text-[#0A192F] text-[#C5A059] border border-[#C5A059]/40 text-xs font-bold uppercase tracking-widest font-cinzel transition-all flex items-center justify-center gap-1.5"
              >
                <span>Consult Customs Matter</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

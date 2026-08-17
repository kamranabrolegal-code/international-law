import React from 'react';
import { 
  Award, 
  Gavel, 
  Scale, 
  ShieldCheck, 
  Building2, 
  FileText, 
  Phone, 
  Mail, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { useFirm } from '../context/FirmContext';

export const LeadershipSection: React.FC = () => {
  const { firmProfile, setIsConsultationModalOpen, setConsultationPreselectedService } = useFirm();

  const handleConsultCivilCriminal = (service: string) => {
    setConsultationPreselectedService(service);
    setIsConsultationModalOpen(true);
  };

  return (
    <section id="leadership" className="py-20 bg-[#0A192F] relative border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#112240] border border-[#C5A059]/40 text-[#C5A059] text-xs font-cinzel font-bold tracking-widest uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>FIRM LEADERSHIP & ADVOCACY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cinzel font-bold text-white tracking-tight">
            LEADERSHIP & LEGAL COUNSEL
          </h2>
          <div className="h-0.5 w-20 bg-[#C5A059] mx-auto" />
          <p className="text-[#8892B0] text-sm sm:text-base leading-relaxed font-sans-body">
            Headed by executive leadership with dedicated court advocacy and comprehensive corporate guidance for <strong className="text-[#C5A059] font-semibold">{firmProfile.name}</strong>.
          </p>
        </div>

        {/* 2 Main Spotlight Cards */}
        <div className="mt-14 grid md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* 1. H D AZAD — CEO */}
          <div className="bg-[#112240] p-6 sm:p-8 border border-[#C5A059]/40 shadow-2xl relative group">
            <div className="absolute top-6 right-6 px-2.5 py-0.5 bg-[#0A192F] border border-[#C5A059]/50 text-[#C5A059] text-[10px] font-cinzel font-bold uppercase tracking-wider">
              HEAD OF FIRM
            </div>

            {/* Profile Avatar / Emblem */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 border-2 border-[#C5A059] bg-[#0A192F] flex items-center justify-center flex-shrink-0">
                <span className="font-cinzel text-lg font-black text-[#C5A059]">HDA</span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-serif-title font-bold text-white">
                  {firmProfile.ceo.name}
                </h3>
                <div className="text-xs font-cinzel font-bold text-[#C5A059] uppercase tracking-wider">
                  {firmProfile.ceo.title} — Chief Executive Officer
                </div>
                <div className="text-[11px] text-[#8892B0] mt-0.5 uppercase tracking-wide">
                  IDEAL INTERNATIONAL LAW FIRM AND CONSULTANCY
                </div>
              </div>
            </div>

            {/* Content & Role */}
            <div className="space-y-4 text-[#8892B0] text-sm leading-relaxed font-sans-body">
              <p>
                As Chief Executive Officer, <strong className="text-white">H D AZAD</strong> leads <strong className="text-[#CCD6F6]">IDEAL INTERNATIONAL LAW FIRM AND CONSULTANCY</strong>, steering the firm’s executive vision, corporate consulting practices, institutional client advisory, and strategic development across Pakistan.
              </p>

              <blockquote className="p-4 bg-[#0A192F] border-l-2 border-[#C5A059] text-xs text-[#CCD6F6] italic font-serif-title">
                "{firmProfile.ceo.statement}"
              </blockquote>

              <div className="pt-2">
                <div className="text-xs font-cinzel font-bold text-[#C5A059] uppercase tracking-wider mb-2">
                  Executive Responsibilities:
                </div>
                <ul className="space-y-2 text-xs text-[#8892B0]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                    <span>Overall Firm Administration & Institutional Management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                    <span>Corporate Consultancy & Business Advisory Oversight</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                    <span>Strategic Client Engagement & Professional Standards</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                    <span>Cross-Chamber Operations (Quetta & Islamabad)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card Action */}
            <div className="mt-6 pt-4 border-t border-[#C5A059]/20 flex items-center justify-between">
              <span className="text-xs font-mono text-[#8892B0]">Executive Office</span>
              <button
                onClick={() => setIsConsultationModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0A192F] hover:bg-[#C5A059] text-[#C5A059] hover:text-[#0A192F] border border-[#C5A059]/40 text-xs font-bold uppercase tracking-wider font-cinzel transition-colors"
              >
                <span>Consult Office of CEO</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 2. Kamran Abro, Advocate */}
          <div className="bg-[#112240] p-6 sm:p-8 border border-[#C5A059]/40 shadow-2xl relative group">
            <div className="absolute top-6 right-6 px-2.5 py-0.5 bg-[#0A192F] border border-[#C5A059]/50 text-[#C5A059] text-[10px] font-cinzel font-bold uppercase tracking-wider">
              LEGAL REPRESENTATION
            </div>

            {/* Profile Avatar / Emblem */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 border-2 border-[#C5A059] bg-[#0A192F] flex items-center justify-center flex-shrink-0">
                <Gavel className="w-6 h-6 text-[#C5A059]" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-serif-title font-bold text-white">
                  {firmProfile.primaryAdvocate.name}, {firmProfile.primaryAdvocate.title}
                </h3>
                <div className="text-xs font-cinzel font-bold text-[#C5A059] uppercase tracking-wider">
                  Advocate for Civil Law & Criminal Law
                </div>
                <div className="text-[11px] text-[#8892B0] mt-0.5 uppercase tracking-wide">
                  IDEAL INTERNATIONAL LAW FIRM AND CONSULTANCY
                </div>
              </div>
            </div>

            {/* Content & Role */}
            <div className="space-y-4 text-[#8892B0] text-sm leading-relaxed font-sans-body">
              <p>
                <strong className="text-white">Kamran Abro, Advocate</strong> is the designated counsel providing professional legal representation, litigation support, courtroom advocacy, and trial defence for <strong className="text-[#C5A059] font-semibold">Civil Law</strong> and <strong className="text-[#C5A059] font-semibold">Criminal Law</strong> matters.
              </p>

              <blockquote className="p-4 bg-[#0A192F] border-l-2 border-[#C5A059] text-xs text-[#CCD6F6] italic font-serif-title">
                "{firmProfile.primaryAdvocate.statement}"
              </blockquote>

              <div className="pt-2">
                <div className="text-xs font-cinzel font-bold text-[#C5A059] uppercase tracking-wider mb-2">
                  Specialized Legal Representation:
                </div>
                <ul className="space-y-2 text-xs text-[#8892B0]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                    <span><strong>Civil Law:</strong> Property suits, contracts, injunctions, declarations & recovery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                    <span><strong>Criminal Law:</strong> Pre-arrest/post-arrest bail, trial defence, FIRs & appeals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                    <span>Court appearances before Civil Courts, Sessions Courts, and High Court</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                    <span>Legal drafting of plaints, written statements, bail petitions & appeals</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card Action */}
            <div className="mt-6 pt-4 border-t border-[#C5A059]/20 flex flex-wrap gap-2 items-center justify-between">
              <div className="flex gap-2">
                <button
                  onClick={() => handleConsultCivilCriminal('Civil Law')}
                  className="px-2.5 py-1 bg-[#0A192F] hover:bg-[#C5A059] hover:text-[#0A192F] border border-[#C5A059]/30 text-white text-[11px] font-bold uppercase tracking-wider transition-colors"
                >
                  Civil Case
                </button>
                <button
                  onClick={() => handleConsultCivilCriminal('Criminal Law')}
                  className="px-2.5 py-1 bg-[#0A192F] hover:bg-[#C5A059] hover:text-[#0A192F] border border-[#C5A059]/30 text-white text-[11px] font-bold uppercase tracking-wider transition-colors"
                >
                  Criminal Case
                </button>
              </div>

              <button
                onClick={() => handleConsultCivilCriminal('Civil & Criminal Law')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#C5A059] hover:bg-[#D8B572] text-[#0A192F] text-[11px] font-bold uppercase tracking-widest font-cinzel transition-colors"
              >
                <span>Book Representation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { 
  Scale, 
  Shield, 
  Award, 
  FileCheck2, 
  CheckCircle2, 
  Users, 
  Briefcase, 
  Landmark, 
  ArrowRight,
  Gavel
} from 'lucide-react';
import { useFirm } from '../context/FirmContext';

export const AboutSection: React.FC = () => {
  const { firmProfile, setIsConsultationModalOpen } = useFirm();

  return (
    <section id="about" className="py-20 bg-[#0F1E35] relative border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#112240] border border-[#C5A059]/40 text-[#C5A059] text-xs font-cinzel font-bold tracking-widest uppercase">
            <Scale className="w-3.5 h-3.5" />
            <span>ABOUT THE FIRM</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cinzel font-bold text-white tracking-tight">
            IDEAL INTERNATIONAL LAW FIRM AND CONSULTANCY
          </h2>
          <div className="h-0.5 w-20 bg-[#C5A059] mx-auto" />
          <p className="text-[#8892B0] text-sm sm:text-base leading-relaxed font-sans-body">
            The firm provides legal representation, consultancy, litigation and advisory services across multiple areas of law and business.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="mt-14 grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Authoritative Profile & Leadership Showcase (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="p-6 sm:p-8 bg-[#112240] border border-[#C5A059]/30 space-y-5">
              <h3 className="text-lg sm:text-xl font-serif-title font-bold text-[#C5A059]">
                Institutional Legal Standing & Strategic Advisory
              </h3>
              
              <p className="text-[#8892B0] text-sm leading-relaxed font-sans-body">
                Established with a mission to deliver diligent legal representation and structured corporate consultancy, <strong className="text-white">IDEAL INTERNATIONAL LAW FIRM AND CONSULTANCY</strong> serves private individuals, commercial corporations, non-governmental organizations, and commercial enterprises.
              </p>

              <p className="text-[#8892B0] text-sm leading-relaxed font-sans-body">
                Operating through established chambers in Quetta and Islamabad, our practice integrates courtroom litigation with comprehensive business advisory, taxation filings, customs dispute resolution, intellectual property management, and immigration consultancy.
              </p>

              {/* Leadership Verification Cards */}
              <div className="pt-4 border-t border-[#C5A059]/20 grid sm:grid-cols-2 gap-4">
                
                {/* H D AZAD CEO Card */}
                <div className="p-4 bg-[#0A192F] border-l-2 border-[#C5A059] border-t border-r border-b border-[#C5A059]/20">
                  <div className="text-[10px] font-bold text-[#C5A059] font-cinzel uppercase tracking-widest">
                    EXECUTIVE LEADERSHIP
                  </div>
                  <div className="text-lg font-serif-title font-bold text-white mt-1">
                    {firmProfile.ceo.name}
                  </div>
                  <div className="text-xs text-[#C5A059] font-cinzel font-bold">
                    {firmProfile.ceo.title}
                  </div>
                  <p className="text-xs text-[#8892B0] mt-2 font-sans-body">
                    Head of IDEAL INTERNATIONAL LAW FIRM AND CONSULTANCY, directing overall firm operations, consultancy practice, and client engagements.
                  </p>
                </div>

                {/* Kamran Abro Advocate Card */}
                <div className="p-4 bg-[#0A192F] border-l-2 border-[#C5A059] border-t border-r border-b border-[#C5A059]/20">
                  <div className="text-[10px] font-bold text-[#C5A059] font-cinzel uppercase tracking-widest">
                    LEGAL REPRESENTATION
                  </div>
                  <div className="text-lg font-serif-title font-bold text-white mt-1">
                    {firmProfile.primaryAdvocate.name}
                  </div>
                  <div className="text-xs text-[#C5A059] font-cinzel font-bold">
                    {firmProfile.primaryAdvocate.title}
                  </div>
                  <p className="text-xs text-[#8892B0] mt-2 font-sans-body">
                    Designated advocate for Civil Law and Criminal Law representation, courtroom trial advocacy, bail matters, and civil disputes.
                  </p>
                </div>

              </div>
            </div>

            {/* Core Values */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-4 bg-[#112240] border border-[#C5A059]/20">
                <Shield className="w-5 h-5 text-[#C5A059] mb-2" />
                <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-wider">CONFIDENTIALITY</h4>
                <p className="text-[11px] text-[#8892B0] mt-1">Absolute discretion and privilege in all client affairs and casework.</p>
              </div>

              <div className="p-4 bg-[#112240] border border-[#C5A059]/20">
                <FileCheck2 className="w-5 h-5 text-[#C5A059] mb-2" />
                <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-wider">PROCEDURAL RIGOR</h4>
                <p className="text-[11px] text-[#8892B0] mt-1">Meticulous case drafting, statutory research, and court compliance.</p>
              </div>

              <div className="p-4 bg-[#112240] border border-[#C5A059]/20">
                <Landmark className="w-5 h-5 text-[#C5A059] mb-2" />
                <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-wider">FULL SPECTRUM</h4>
                <p className="text-[11px] text-[#8892B0] mt-1">Unified solutions spanning civil, criminal, corporate, and tax law.</p>
              </div>
            </div>

          </div>

          {/* Right: Registration & Credentials Breakdown (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 bg-[#112240] border border-[#C5A059]/30 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-[#C5A059] bg-[#0A192F] flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-widest">STATUTORY PARTICULARS</h4>
                  <p className="text-[10px] text-[#8892B0] font-mono">Official Regulatory Record</p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs font-sans-body">
                <div className="flex items-center justify-between p-2.5 bg-[#0A192F] border border-[#C5A059]/15">
                  <span className="text-[#8892B0]">Firm Name:</span>
                  <span className="font-bold text-[#C5A059] text-right">IDEAL INTERNATIONAL LAW FIRM AND CONSULTANCY</span>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-[#0A192F] border border-[#C5A059]/15">
                  <span className="text-[#8892B0]">Head of Firm:</span>
                  <span className="font-bold text-white">H D AZAD (CEO)</span>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-[#0A192F] border border-[#C5A059]/15">
                  <span className="text-[#8892B0]">Civil & Criminal Advocate:</span>
                  <span className="font-bold text-[#C5A059]">Kamran Abro, Advocate</span>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-[#0A192F] border border-[#C5A059]/15">
                  <span className="text-[#8892B0]">Practice Courts:</span>
                  <span className="font-medium text-[#CCD6F6]">High Court & District Courts</span>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-[#0A192F] border border-[#C5A059]/15">
                  <span className="text-[#8892B0]">Chamber Locations:</span>
                  <span className="font-medium text-white">Quetta & Islamabad</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setIsConsultationModalOpen(true)}
                  className="w-full py-3 text-center text-xs font-bold uppercase tracking-widest text-[#0A192F] bg-[#C5A059] hover:bg-[#D8B572] transition-colors font-cinzel flex items-center justify-center gap-2"
                >
                  <span>Request Legal Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Client Advisory Quote */}
            <div className="p-4 bg-[#0A192F] border-l-2 border-[#C5A059] border-t border-r border-b border-[#C5A059]/20 text-xs text-[#8892B0] italic font-serif-title leading-relaxed">
              "We represent our clients with procedural diligence, offering strategic legal insight and ethical counsel across trial courts, appellate forums, and regulatory authorities."
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

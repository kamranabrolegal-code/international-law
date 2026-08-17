import React from 'react';
import { 
  Scale, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Award, 
  FileSpreadsheet, 
  PhoneCall,
  Gavel,
  Lock
} from 'lucide-react';
import { useFirm } from '../context/FirmContext';

export const Hero: React.FC = () => {
  const { firmProfile, setIsConsultationModalOpen, setIsCaseTrackerModalOpen } = useFirm();

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-32 sm:pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-[#0A192F] border-b border-[#C5A059]/20">
      {/* Background Architectural & Geometric Grid */}
      <div className="absolute inset-0 bg-geometric-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-gradient pointer-events-none opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Verified Firm Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#112240] border border-[#C5A059]/40 text-[#C5A059] text-xs font-cinzel tracking-widest uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Registered Law Firm & Consultancy • Est. 2017</span>
            </div>

            {/* Exact Firm Name Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-cinzel font-bold text-white tracking-tight leading-tight">
                <span className="text-[#C5A059]">IDEAL</span> INTERNATIONAL <br className="hidden sm:inline" />
                <span className="text-[#CCD6F6] font-normal text-2xl sm:text-3xl md:text-4xl block mt-1">
                  LAW FIRM AND CONSULTANCY
                </span>
              </h1>
              
              <div className="h-0.5 w-24 bg-[#C5A059] mx-auto lg:mx-0" />
            </div>

            {/* Subtitle & Mission */}
            <div className="space-y-3 max-w-2xl mx-auto lg:mx-0">
              <h2 className="text-lg sm:text-xl font-serif-title font-semibold text-[#C5A059] italic">
                Professional Legal & Consultancy Services
              </h2>
              <p className="text-[#8892B0] text-sm sm:text-base leading-relaxed font-sans-body">
                Provide reliable legal representation, litigation support, consultancy and business-related legal services for individuals, companies, organizations and institutions.
              </p>
            </div>

            {/* Key Pillars Geometric Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-[#CCD6F6] font-sans-body">
              <div className="flex items-center gap-2.5 bg-[#0F1E35] p-3 border-l-2 border-[#C5A059] border-t border-r border-b border-[#C5A059]/10">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <span><strong className="text-white">Civil & Criminal Law:</strong> Kamran Abro, Advocate</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#0F1E35] p-3 border-l-2 border-[#C5A059] border-t border-r border-b border-[#C5A059]/10">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <span><strong className="text-white">Executive Leadership:</strong> H D AZAD (CEO)</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#0F1E35] p-3 border-l-2 border-[#C5A059] border-t border-r border-b border-[#C5A059]/10">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <span><strong className="text-white">Dual Offices:</strong> Quetta & Islamabad Hubs</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#0F1E35] p-3 border-l-2 border-[#C5A059] border-t border-r border-b border-[#C5A059]/10">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <span><strong className="text-white">Corporate & Tax:</strong> SECP, FBR & Customs</span>
              </div>
            </div>

            {/* Primary Action Buttons - Geometric Balance Style */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={() => setIsConsultationModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0A192F] bg-[#C5A059] hover:bg-[#D8B572] transition-colors font-cinzel"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToServices}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C5A059] bg-[#0F1E35] hover:bg-[#C5A059] hover:text-[#0A192F] border border-[#C5A059] transition-colors font-cinzel"
              >
                <span>Our Services</span>
                <Scale className="w-4 h-4" />
              </button>
            </div>

            {/* Fast Stats / Practice Details Bar */}
            <div className="pt-6 border-t border-[#C5A059]/20 flex flex-wrap items-center justify-between gap-4 text-xs text-[#8892B0] font-mono">
              <div>
                <span className="text-[#8892B0]/70">HEAD OF FIRM:</span>{' '}
                <span className="text-[#CCD6F6] font-medium">{firmProfile.ceo.name}</span>
              </div>
              <div>
                <span className="text-[#8892B0]/70">PRACTICE:</span>{' '}
                <span className="text-[#CCD6F6] font-medium">High Court & Supreme Court</span>
              </div>
              <div>
                <span className="text-[#8892B0]/70">JURISDICTIONS:</span>{' '}
                <span className="text-[#C5A059] font-medium">Balochistan • Islamabad • Federal</span>
              </div>
            </div>
          </div>

          {/* Institutional Card Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-[#112240] p-6 sm:p-8 border border-[#C5A059]/40 shadow-2xl">
              
              {/* Gold Emblem Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#C5A059]/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border border-[#C5A059] bg-[#0A192F] flex items-center justify-center">
                    <Scale className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-xs font-bold text-white tracking-widest uppercase">OFFICIAL CHARTER</h3>
                    <p className="text-[10px] text-[#C5A059] font-mono">IDEAL INTERNATIONAL</p>
                  </div>
                </div>
                <div className="px-2 py-0.5 bg-[#0A192F] border border-[#C5A059]/50 text-[10px] font-mono text-[#C5A059] uppercase tracking-wider">
                  VERIFIED
                </div>
              </div>

              {/* Leadership Spotlights inside Card */}
              <div className="mt-5 space-y-3.5">
                
                {/* CEO Profile Box */}
                <div className="p-4 bg-[#0A192F] border border-[#C5A059]/20 hover:border-[#C5A059] transition-colors">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-widest text-[#C5A059] font-cinzel">
                        FIRM LEADERSHIP
                      </div>
                      <div className="text-base font-serif-title font-bold text-white mt-0.5">
                        {firmProfile.ceo.name}
                      </div>
                      <div className="text-xs text-[#C5A059] font-medium font-cinzel">
                        {firmProfile.ceo.title}
                      </div>
                    </div>
                    <div className="w-7 h-7 border border-[#C5A059]/40 bg-[#112240] flex items-center justify-center text-[#C5A059]">
                      <Award className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <p className="text-xs text-[#8892B0] mt-2 leading-relaxed font-sans-body">
                    Executive head overseeing corporate standards, client confidentiality, and strategic legal counsel.
                  </p>
                </div>

                {/* Advocate Profile Box */}
                <div className="p-4 bg-[#0A192F] border border-[#C5A059]/20 hover:border-[#C5A059] transition-colors">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-widest text-[#C5A059] font-cinzel">
                        LEGAL REPRESENTATION
                      </div>
                      <div className="text-base font-serif-title font-bold text-white mt-0.5">
                        {firmProfile.primaryAdvocate.name}, {firmProfile.primaryAdvocate.title}
                      </div>
                      <div className="text-xs text-[#C5A059] font-medium font-cinzel">
                        Civil Law & Criminal Law Practice
                      </div>
                    </div>
                    <div className="w-7 h-7 border border-[#C5A059]/40 bg-[#112240] flex items-center justify-center text-[#C5A059]">
                      <Gavel className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <p className="text-xs text-[#8892B0] mt-2 leading-relaxed font-sans-body">
                    Lead advocate for civil litigation, bail matters, property disputes, criminal defence, and trial proceedings.
                  </p>
                </div>

                {/* Interactive Case Proceeding Lookup Preview */}
                <div className="p-3 bg-[#0F1E35] border border-[#C5A059]/30 flex items-center justify-between gap-3">
                  <div className="text-xs">
                    <div className="font-semibold text-white">Active Client? Track Docket</div>
                    <div className="text-[10px] text-[#8892B0]">Search proceeding status and court hearings</div>
                  </div>
                  <button
                    onClick={() => setIsCaseTrackerModalOpen(true)}
                    className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0A192F] bg-[#C5A059] hover:bg-[#D8B572] flex items-center gap-1 flex-shrink-0 transition-colors"
                  >
                    <span>Track</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>

              {/* Office Chambers footer */}
              <div className="mt-5 pt-3.5 border-t border-[#C5A059]/20 grid grid-cols-2 gap-2 text-center text-xs text-[#8892B0]">
                <div className="p-2 bg-[#0A192F] border border-[#C5A059]/15">
                  <div className="font-semibold text-white">Quetta Chamber</div>
                  <div className="text-[10px] text-[#C5A059]">Manan Chowk</div>
                </div>
                <div className="p-2 bg-[#0A192F] border border-[#C5A059]/15">
                  <div className="font-semibold text-white">Islamabad Chamber</div>
                  <div className="text-[10px] text-[#C5A059]">F-8 Judicial Area</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

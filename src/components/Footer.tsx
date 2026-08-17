import React from 'react';
import { 
  Scale, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp, 
  FileText, 
  Award,
  ExternalLink
} from 'lucide-react';
import { useFirm } from '../context/FirmContext';

interface FooterProps {
  onOpenLegalModal: (type: 'disclaimer' | 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegalModal }) => {
  const { firmProfile, setIsConsultationModalOpen, setIsCaseTrackerModalOpen } = useFirm();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A192F] text-[#8892B0] font-sans-body border-t border-[#C5A059]/30">
      
      {/* Top Banner */}
      <div className="border-b border-[#C5A059]/20 bg-[#0F1E35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-cinzel font-bold text-white tracking-wide">
              {firmProfile.name}
            </h3>
            <p className="text-xs text-[#C5A059] font-mono">
              Advocates, Corporate & Tax Consultants • Quetta & Islamabad
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setIsConsultationModalOpen(true)}
              className="px-6 py-2.5 bg-[#C5A059] hover:bg-[#C5A059]/90 text-[#0A192F] font-bold text-xs font-cinzel uppercase tracking-widest transition-all"
            >
              Book a Consultation
            </button>
            <button
              onClick={() => setIsCaseTrackerModalOpen(true)}
              className="px-5 py-2.5 bg-[#112240] hover:bg-[#0A192F] text-[#CCD6F6] border border-[#C5A059]/30 text-xs font-cinzel uppercase tracking-wider transition-colors"
            >
              Track Case Proceedings
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1 & 2: Firm Identity & Leadership */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#112240] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <div className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
                  IDEAL INTERNATIONAL
                </div>
                <div className="text-[10px] text-[#C5A059] font-cinzel uppercase tracking-wider">
                  LAW FIRM AND CONSULTANCY
                </div>
              </div>
            </div>

            <p className="text-xs text-[#8892B0] leading-relaxed font-sans-body">
              A registered international law and consultancy firm providing reliable legal representation, litigation support, consultancy, and business legal services across Pakistan and cross-border jurisdictions.
            </p>

            {/* Leadership Spotlight in Footer */}
            <div className="p-3.5 bg-[#112240] border border-[#C5A059]/30 space-y-2 text-xs">
              <div className="flex items-center justify-between border-b border-[#C5A059]/20 pb-1.5">
                <span className="text-[#8892B0]">Head of Firm:</span>
                <span className="font-bold text-white">{firmProfile.ceo.name} — {firmProfile.ceo.title}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#8892B0]">Legal Representation:</span>
                <span className="font-bold text-[#C5A059]">{firmProfile.primaryAdvocate.name}, {firmProfile.primaryAdvocate.title}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-[#8892B0]">
              <span className="flex items-center gap-1.5 text-[#C5A059]">
                <ShieldCheck className="w-3.5 h-3.5" />
                Quetta & Islamabad Chambers
              </span>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-widest border-b border-[#C5A059]/20 pb-1">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-[#C5A059] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-[#C5A059] transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-[#C5A059] transition-colors">
                  Our Services (20+)
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('leadership')} className="hover:text-[#C5A059] transition-colors">
                  Leadership (H D AZAD)
                </button>
              </li>
              <li>
                <button onClick={() => setIsCaseTrackerModalOpen(true)} className="text-[#C5A059] hover:underline transition-colors flex items-center gap-1">
                  <span>Case Tracking Docket</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-[#C5A059] transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Key Legal Practice Areas */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-widest border-b border-[#C5A059]/20 pb-1">
              Practice Areas
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-[#C5A059] transition-colors flex items-center justify-between w-full">
                  <span>Civil Law</span>
                  <span className="text-[10px] text-[#C5A059] font-mono">Kamran Abro</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-[#C5A059] transition-colors flex items-center justify-between w-full">
                  <span>Criminal Law</span>
                  <span className="text-[10px] text-[#C5A059] font-mono">Kamran Abro</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('corporate-section')} className="hover:text-[#C5A059] transition-colors">
                  Corporate & Business Law
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('taxation-section')} className="hover:text-[#C5A059] transition-colors">
                  Taxation & Customs
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('immigration-section')} className="hover:text-[#C5A059] transition-colors">
                  Immigration & Visa
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('ip-section')} className="hover:text-[#C5A059] transition-colors">
                  Intellectual Property
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('trade-ngo-section')} className="hover:text-[#C5A059] transition-colors">
                  WEBOC & NGO / NPO
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Chamber Locations */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-widest border-b border-[#C5A059]/20 pb-1">
              Chambers
            </h4>
            
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-[#112240] border border-[#C5A059]/30 space-y-1">
                <div className="font-bold text-white uppercase tracking-wider font-cinzel text-[11px]">Quetta Office</div>
                <div className="text-[11px] text-[#8892B0]">Office # T1 KFK Business Center, Manan Chowk</div>
                <div className="font-mono text-[#C5A059] text-[11px]">0304-8440932</div>
              </div>

              <div className="p-3 bg-[#112240] border border-[#C5A059]/30 space-y-1">
                <div className="font-bold text-white uppercase tracking-wider font-cinzel text-[11px]">Islamabad Office</div>
                <div className="text-[11px] text-[#8892B0]">Chamber # 2, Football Ground St # 6, Anwar Block, F-8</div>
                <div className="font-mono text-[#C5A059] text-[11px]">0311-1005727</div>
              </div>
            </div>
          </div>

        </div>

        {/* Official Legal Disclaimer Box (Strict Requirement) */}
        <div className="mt-12 p-4 sm:p-5 bg-[#112240] border border-[#C5A059]/30 text-xs text-[#8892B0] leading-relaxed font-sans-body space-y-2">
          <div className="flex items-center gap-2 text-[#C5A059] font-cinzel font-bold text-xs uppercase tracking-wider">
            <Scale className="w-4 h-4" />
            <span>Official Legal Notice & Statutory Disclaimer</span>
          </div>
          <p>
            The information presented on this website is for general informational purposes only and does not by itself constitute formal legal advice or establish an advocate-client relationship. Visitors and clients should seek formal legal counsel before taking or refraining from any legal action. Transmission of confidential documents or inquiries through this portal is safeguarded, but formal representation commences upon written engagement and power of attorney (Wakalatnama).
          </p>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="mt-8 pt-6 border-t border-[#C5A059]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8892B0]">
          <div>
            © {new Date().getFullYear()} <strong className="text-white">IDEAL INTERNATIONAL LAW FIRM AND CONSULTANCY</strong>. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button 
              onClick={() => onOpenLegalModal('disclaimer')} 
              className="hover:text-[#C5A059] transition-colors"
            >
              Disclaimer
            </button>
            <span>•</span>
            <button 
              onClick={() => onOpenLegalModal('privacy')} 
              className="hover:text-[#C5A059] transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button 
              onClick={() => onOpenLegalModal('terms')} 
              className="hover:text-[#C5A059] transition-colors"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <button 
              onClick={scrollToTop} 
              className="p-1 bg-[#112240] hover:bg-[#0F1E35] text-[#C5A059] border border-[#C5A059]/30 transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

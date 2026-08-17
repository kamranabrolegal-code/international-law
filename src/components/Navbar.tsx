import React, { useState, useEffect } from 'react';
import { 
  Scale, 
  Phone, 
  Mail, 
  MapPin, 
  Shield, 
  ChevronDown, 
  Menu, 
  X, 
  FileText, 
  Search,
  Building2,
  Briefcase,
  Layers,
  ArrowRight
} from 'lucide-react';
import { useFirm } from '../context/FirmContext';

export const Navbar: React.FC = () => {
  const { 
    firmProfile, 
    services, 
    setIsConsultationModalOpen, 
    setSelectedServiceModal,
    setIsCaseTrackerModalOpen
  } = useFirm();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 font-sans-body">
      {/* Top Credentials & Contact Bar */}
      <div className="bg-[#0A192F] text-[#8892B0] text-xs border-b border-[#C5A059]/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap justify-between items-center gap-2">
          {/* Credentials badge */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[11px]">
            <div className="flex items-center gap-1.5 text-[#C5A059] font-medium tracking-wide">
              <Shield className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Advocates & Legal Consultants</span>
            </div>
            <span className="text-[#8892B0]/40 hidden md:inline">•</span>
            <div className="text-[#8892B0] hidden md:flex items-center gap-1">
              <span className="text-[#C5A059]">CEO:</span>
              <span className="font-semibold text-white">{firmProfile.ceo.name}</span>
            </div>
          </div>

          {/* Quick Direct Contacts */}
          <div className="flex flex-wrap items-center gap-4 text-[11px] text-[#8892B0]">
            <a 
              href="tel:03048440932" 
              className="flex items-center gap-1 hover:text-[#C5A059] transition-colors"
              title="Quetta Principal Office"
            >
              <Phone className="w-3 h-3 text-[#C5A059]" />
              <span className="font-mono text-white">0304-8440932</span>
              <span className="text-[10px] text-[#C5A059]/80 ml-0.5">(Quetta)</span>
            </a>
            <a 
              href="tel:03111005727" 
              className="hidden sm:flex items-center gap-1 hover:text-[#C5A059] transition-colors"
              title="Islamabad Capital Office"
            >
              <Phone className="w-3 h-3 text-[#C5A059]" />
              <span className="font-mono text-white">0311-1005727</span>
              <span className="text-[10px] text-[#C5A059]/80 ml-0.5">(Islamabad)</span>
            </a>
            <a 
              href={`mailto:${firmProfile.primaryEmail}`} 
              className="hidden lg:flex items-center gap-1 hover:text-[#C5A059] transition-colors"
            >
              <Mail className="w-3 h-3 text-[#C5A059]" />
              <span className="text-[#CCD6F6]">{firmProfile.primaryEmail}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0F1E35]/95 shadow-2xl shadow-black/80 backdrop-blur-md border-b border-[#C5A059]/30 py-3' 
          : 'bg-[#0F1E35] border-b border-[#C5A059]/30 py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Firm Brand Identity - Geometric Balance Box */}
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
              className="flex items-center gap-3 group text-left"
            >
              <div className="w-10 h-10 border-2 border-[#C5A059] bg-[#0A192F] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C5A059] transition-colors duration-300">
                <span className="text-[#C5A059] group-hover:text-[#0A192F] font-serif text-xl font-bold transition-colors duration-300">I</span>
              </div>
              <div>
                <div className="font-cinzel text-xs sm:text-sm lg:text-base font-bold tracking-wider text-white uppercase leading-tight">
                  <span className="text-[#C5A059]">Ideal International</span> Law Firm
                </div>
                <div className="text-[9px] sm:text-[10px] tracking-[0.18em] text-[#8892B0] uppercase font-bold">
                  & Consultancy
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center space-x-1 text-[11px] uppercase tracking-wider font-semibold">
              <button 
                onClick={() => scrollToSection('home')} 
                className="px-3 py-2 text-[#CCD6F6] hover:text-[#C5A059] transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="px-3 py-2 text-[#CCD6F6] hover:text-[#C5A059] transition-colors"
              >
                About
              </button>

              {/* Services Mega Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button 
                  onClick={() => scrollToSection('services')}
                  className="px-3 py-2 text-[#CCD6F6] hover:text-[#C5A059] transition-colors flex items-center gap-1"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-[#C5A059] transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {servicesDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[740px] bg-[#0F1E35] border border-[#C5A059] shadow-2xl p-5 mt-1 grid grid-cols-3 gap-4 z-50">
                    <div className="border-r border-[#C5A059]/20 pr-3">
                      <div className="text-[11px] font-bold text-[#C5A059] uppercase tracking-widest mb-3 flex items-center gap-1.5">
                        <Scale className="w-3.5 h-3.5" />
                        Litigation & Courts
                      </div>
                      <div className="space-y-1 text-xs font-normal normal-case">
                        <button 
                          onClick={() => { scrollToSection('services'); }} 
                          className="w-full text-left p-1.5 bg-[#112240]/40 hover:bg-[#112240] text-[#CCD6F6] hover:text-[#C5A059] border border-transparent hover:border-[#C5A059]/30 flex items-center justify-between transition-all"
                        >
                          <span className="font-semibold text-white">Civil Law</span>
                          <span className="text-[10px] text-[#C5A059] italic font-serif">Kamran Abro</span>
                        </button>
                        <button 
                          onClick={() => { scrollToSection('services'); }} 
                          className="w-full text-left p-1.5 bg-[#112240]/40 hover:bg-[#112240] text-[#CCD6F6] hover:text-[#C5A059] border border-transparent hover:border-[#C5A059]/30 flex items-center justify-between transition-all"
                        >
                          <span className="font-semibold text-white">Criminal Law</span>
                          <span className="text-[10px] text-[#C5A059] italic font-serif">Kamran Abro</span>
                        </button>
                        <button 
                          onClick={() => { scrollToSection('services'); }} 
                          className="w-full text-left p-1.5 hover:bg-[#112240] text-[#8892B0] hover:text-white transition-colors"
                        >
                          Banking Law
                        </button>
                        <button 
                          onClick={() => { scrollToSection('services'); }} 
                          className="w-full text-left p-1.5 hover:bg-[#112240] text-[#8892B0] hover:text-white transition-colors"
                        >
                          Family Law
                        </button>
                        <button 
                          onClick={() => { scrollToSection('services'); }} 
                          className="w-full text-left p-1.5 hover:bg-[#112240] text-[#8892B0] hover:text-white transition-colors"
                        >
                          Cyber Law & PECA
                        </button>
                        <button 
                          onClick={() => { scrollToSection('services'); }} 
                          className="w-full text-left p-1.5 hover:bg-[#112240] text-[#8892B0] hover:text-white transition-colors"
                        >
                          Tribunal Matters
                        </button>
                      </div>
                    </div>

                    <div className="border-r border-[#C5A059]/20 pr-3">
                      <div className="text-[11px] font-bold text-[#C5A059] uppercase tracking-widest mb-3 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5" />
                        Corporate & Tax
                      </div>
                      <div className="space-y-1 text-xs font-normal normal-case">
                        <button 
                          onClick={() => scrollToSection('corporate-section')} 
                          className="w-full text-left p-1.5 hover:bg-[#112240] text-[#8892B0] hover:text-white transition-colors"
                        >
                          Company Services (SECP)
                        </button>
                        <button 
                          onClick={() => scrollToSection('corporate-section')} 
                          className="w-full text-left p-1.5 hover:bg-[#112240] text-[#8892B0] hover:text-white transition-colors"
                        >
                          Firm / Business Consultancy
                        </button>
                        <button 
                          onClick={() => scrollToSection('corporate-section')} 
                          className="w-full text-left p-1.5 hover:bg-[#112240] text-[#8892B0] hover:text-white transition-colors"
                        >
                          Corporate Legal Advisory
                        </button>
                        <button 
                          onClick={() => scrollToSection('taxation-section')} 
                          className="w-full text-left p-1.5 hover:bg-[#112240] text-[#8892B0] hover:text-white transition-colors"
                        >
                          Income Tax & FBR
                        </button>
                        <button 
                          onClick={() => scrollToSection('taxation-section')} 
                          className="w-full text-left p-1.5 hover:bg-[#112240] text-[#8892B0] hover:text-white transition-colors"
                        >
                          Sales Tax (BRA / PRA / FBR)
                        </button>
                        <button 
                          onClick={() => scrollToSection('taxation-section')} 
                          className="w-full text-left p-1.5 hover:bg-[#112240] text-[#8892B0] hover:text-white transition-colors"
                        >
                          Customs & Adjudication
                        </button>
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-[#C5A059] uppercase tracking-widest mb-3 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5" />
                        Immigration & IP
                      </div>
                      <div className="space-y-1 text-xs font-normal normal-case">
                        <button 
                          onClick={() => scrollToSection('immigration-section')} 
                          className="w-full text-left p-1.5 hover:bg-[#112240] text-[#8892B0] hover:text-white transition-colors"
                        >
                          Visa Consultancy
                        </button>
                        <button 
                          onClick={() => scrollToSection('immigration-section')} 
                          className="w-full text-left p-1.5 hover:bg-[#112240] text-[#8892B0] hover:text-white transition-colors"
                        >
                          Nationality & Citizenship
                        </button>
                        <button 
                          onClick={() => scrollToSection('ip-section')} 
                          className="w-full text-left p-1.5 hover:bg-[#112240] text-[#8892B0] hover:text-white transition-colors"
                        >
                          IPO Trademarks & Copyrights
                        </button>
                        <button 
                          onClick={() => scrollToSection('ip-section')} 
                          className="w-full text-left p-1.5 hover:bg-[#112240] text-[#8892B0] hover:text-white transition-colors"
                        >
                          Patent Law & Registration
                        </button>
                        <button 
                          onClick={() => scrollToSection('trade-ngo-section')} 
                          className="w-full text-left p-1.5 hover:bg-[#112240] text-[#8892B0] hover:text-white transition-colors"
                        >
                          NGO / NPO Societies
                        </button>
                        <button 
                          onClick={() => scrollToSection('trade-ngo-section')} 
                          className="w-full text-left p-1.5 hover:bg-[#112240] text-[#8892B0] hover:text-white transition-colors"
                        >
                          WEBOC & PSW Single Window
                        </button>
                      </div>
                    </div>

                    <div className="col-span-3 pt-3 border-t border-[#C5A059]/20 flex justify-between items-center text-xs font-normal">
                      <span className="text-[#8892B0]">All 20+ specialized practice disciplines</span>
                      <button 
                        onClick={() => scrollToSection('services')}
                        className="text-[#C5A059] hover:text-white font-bold uppercase tracking-wider text-[10px] flex items-center gap-1"
                      >
                        View Full Services Directory <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button 
                onClick={() => scrollToSection('leadership')} 
                className="px-3 py-2 text-[#CCD6F6] hover:text-[#C5A059] transition-colors"
              >
                Leadership
              </button>

              <button 
                onClick={() => setIsCaseTrackerModalOpen(true)} 
                className="px-3 py-2 text-[#C5A059] hover:text-white transition-colors flex items-center gap-1.5"
              >
                <FileText className="w-3 h-3 text-[#C5A059]" />
                <span>Case Docket</span>
              </button>

              <button 
                onClick={() => scrollToSection('contact')} 
                className="px-3 py-2 text-[#CCD6F6] hover:text-[#C5A059] transition-colors"
              >
                Contact
              </button>
            </div>

            {/* CTA Button - Geometric Balance Solid Gold */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => setIsConsultationModalOpen(true)}
                className="bg-[#C5A059] hover:bg-[#D8B572] text-[#0A192F] px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-colors font-cinzel"
              >
                Book a Consultation
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex xl:hidden items-center gap-2">
              <button
                onClick={() => setIsConsultationModalOpen(true)}
                className="sm:hidden px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#0A192F] bg-[#C5A059]"
              >
                Consult
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 bg-[#112240] text-[#C5A059] border border-[#C5A059]/30 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#0F1E35] border-b border-[#C5A059] px-4 pt-3 pb-6 space-y-3 mt-2 shadow-2xl">
            <div className="grid grid-cols-2 gap-2 text-xs uppercase tracking-wider font-semibold">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-left px-3 py-2 bg-[#112240] text-white hover:text-[#C5A059] border border-[#C5A059]/20"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-left px-3 py-2 bg-[#112240] text-white hover:text-[#C5A059] border border-[#C5A059]/20"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-left px-3 py-2 bg-[#112240] text-white hover:text-[#C5A059] border border-[#C5A059]/20"
              >
                Services (20+)
              </button>
              <button 
                onClick={() => scrollToSection('leadership')} 
                className="text-left px-3 py-2 bg-[#112240] text-white hover:text-[#C5A059] border border-[#C5A059]/20"
              >
                Leadership
              </button>
              <button 
                onClick={() => scrollToSection('corporate-section')} 
                className="text-left px-3 py-2 bg-[#112240] text-white hover:text-[#C5A059] border border-[#C5A059]/20"
              >
                Corporate & Tax
              </button>
              <button 
                onClick={() => scrollToSection('immigration-section')} 
                className="text-left px-3 py-2 bg-[#112240] text-white hover:text-[#C5A059] border border-[#C5A059]/20"
              >
                Immigration & IP
              </button>
              <button 
                onClick={() => { setMobileMenuOpen(false); setIsCaseTrackerModalOpen(true); }}
                className="text-left px-3 py-2 bg-[#112240] text-[#C5A059] border border-[#C5A059]/40 flex items-center gap-1.5 col-span-2"
              >
                <FileText className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Track Case Docket</span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left px-3 py-2 bg-[#112240] text-white hover:text-[#C5A059] border border-[#C5A059]/20 col-span-2"
              >
                Contact (Quetta & Islamabad)
              </button>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsConsultationModalOpen(true);
                }}
                className="w-full py-3 text-center text-xs font-bold uppercase tracking-widest text-[#0A192F] bg-[#C5A059] hover:bg-[#D8B572]"
              >
                Book a Consultation
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

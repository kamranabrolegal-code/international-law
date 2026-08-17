import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  Gavel, 
  Send, 
  CheckCircle2, 
  Shield, 
  Search, 
  Building2, 
  Scale, 
  Phone, 
  User, 
  Mail, 
  MapPin,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { useFirm } from '../context/FirmContext';

export const ClientInquirySection: React.FC = () => {
  const { services, addInquiry, setIsCaseTrackerModalOpen } = useFirm();

  const [clientName, setClientName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Quetta');
  const [courtTribunal, setCourtTribunal] = useState('');
  const [caseType, setCaseType] = useState('Civil Suit / Dispute');
  const [caseReference, setCaseReference] = useState('');
  const [briefCaseDetails, setBriefCaseDetails] = useState('');
  const [requiredLegalService, setRequiredLegalService] = useState('Civil Law');
  const [submittedInquiryId, setSubmittedInquiryId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !contactNumber || !caseType) return;

    setIsSubmitting(true);

    const id = addInquiry({
      clientName,
      contactNumber,
      email,
      city,
      courtTribunal: courtTribunal || 'Pending Court Assignment',
      caseType,
      caseReference: caseReference || 'N/A (Pre-Litigation)',
      briefCaseDetails,
      requiredLegalService
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedInquiryId(id);
    }, 600);
  };

  const handleReset = () => {
    setSubmittedInquiryId(null);
    setClientName('');
    setContactNumber('');
    setEmail('');
    setCourtTribunal('');
    setCaseReference('');
    setBriefCaseDetails('');
  };

  return (
    <section id="case-inquiry" className="py-20 bg-[#0A192F] relative border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#112240] border border-[#C5A059]/40 text-[#C5A059] text-xs font-cinzel font-bold tracking-widest uppercase">
            <Gavel className="w-3.5 h-3.5" />
            <span>CASE & CLIENT INTAKE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cinzel font-bold text-white tracking-tight">
            CASE / CLIENT INQUIRY
          </h2>
          <div className="h-0.5 w-20 bg-[#C5A059] mx-auto" />
          <p className="text-[#8892B0] text-sm sm:text-base leading-relaxed font-sans-body">
            Submit existing or prospective litigation records, court references, and tribunal matters directly to our legal assessment department.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Case Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#112240] p-6 sm:p-8 border border-[#C5A059]/30 shadow-xl">
            {submittedInquiryId ? (
              <div className="text-center py-10 space-y-5">
                <div className="w-14 h-14 bg-[#0A192F] border border-[#C5A059] text-[#C5A059] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                
                <div className="space-y-1.5">
                  <h3 className="text-xl font-cinzel font-bold text-white">
                    Case Intake Lodged Successfully
                  </h3>
                  <p className="text-xs text-[#8892B0] font-sans-body">
                    Your inquiry record has been registered for evaluation by our legal team.
                  </p>
                  <div className="inline-block px-4 py-2 mt-2 bg-[#0A192F] border border-[#C5A059] font-mono text-base font-bold text-[#C5A059]">
                    INTAKE REF: {submittedInquiryId}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                  <button
                    onClick={() => setIsCaseTrackerModalOpen(true)}
                    className="w-full sm:w-auto px-5 py-2.5 bg-[#C5A059] text-[#0A192F] text-xs font-bold font-cinzel uppercase tracking-wider hover:bg-[#C5A059]/90 transition-colors"
                  >
                    Open Case Tracking Portal
                  </button>
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-5 py-2.5 bg-[#0A192F] text-[#CCD6F6] hover:text-white text-xs font-medium font-cinzel uppercase tracking-wider border border-[#C5A059]/30 transition-colors"
                  >
                    Submit Another Case
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 font-sans-body">
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Client Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#CCD6F6] flex items-center gap-1.5 uppercase tracking-wider">
                      <User className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Client Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Haji Ghulam Rasool"
                      className="w-full px-3 py-2 bg-[#0A192F] border border-[#C5A059]/30 focus:border-[#C5A059] text-xs sm:text-sm text-white placeholder:text-[#8892B0]/60 focus:outline-none"
                    />
                  </div>

                  {/* Contact Number */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#CCD6F6] flex items-center gap-1.5 uppercase tracking-wider">
                      <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Contact Number *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      placeholder="e.g. 0304-8440932"
                      className="w-full px-3 py-2 bg-[#0A192F] border border-[#C5A059]/30 focus:border-[#C5A059] text-xs sm:text-sm text-white placeholder:text-[#8892B0]/60 focus:outline-none font-mono"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#CCD6F6] flex items-center gap-1.5 uppercase tracking-wider">
                      <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Email</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. client@example.com"
                      className="w-full px-3 py-2 bg-[#0A192F] border border-[#C5A059]/30 focus:border-[#C5A059] text-xs sm:text-sm text-white placeholder:text-[#8892B0]/60 focus:outline-none"
                    />
                  </div>

                  {/* City */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#CCD6F6] flex items-center gap-1.5 uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>City *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Quetta / Islamabad / Karachi"
                      className="w-full px-3 py-2 bg-[#0A192F] border border-[#C5A059]/30 focus:border-[#C5A059] text-xs sm:text-sm text-white placeholder:text-[#8892B0]/60 focus:outline-none"
                    />
                  </div>

                  {/* Court / Tribunal */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#CCD6F6] flex items-center gap-1.5 uppercase tracking-wider">
                      <Building2 className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Court / Tribunal</span>
                    </label>
                    <input
                      type="text"
                      value={courtTribunal}
                      onChange={(e) => setCourtTribunal(e.target.value)}
                      placeholder="e.g. High Court Balochistan / ASJ / Banking Court"
                      className="w-full px-3 py-2 bg-[#0A192F] border border-[#C5A059]/30 focus:border-[#C5A059] text-xs sm:text-sm text-white placeholder:text-[#8892B0]/60 focus:outline-none"
                    />
                  </div>

                  {/* Case Reference */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#CCD6F6] flex items-center gap-1.5 uppercase tracking-wider">
                      <FileSpreadsheet className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Case Reference / Suit #</span>
                    </label>
                    <input
                      type="text"
                      value={caseReference}
                      onChange={(e) => setCaseReference(e.target.value)}
                      placeholder="e.g. Suit No. 104/2026 or Cr.Misc 88"
                      className="w-full px-3 py-2 bg-[#0A192F] border border-[#C5A059]/30 focus:border-[#C5A059] text-xs sm:text-sm text-white placeholder:text-[#8892B0]/60 focus:outline-none font-mono"
                    />
                  </div>

                  {/* Case Type */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#CCD6F6] flex items-center gap-1.5 uppercase tracking-wider">
                      <Scale className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Case Type *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={caseType}
                      onChange={(e) => setCaseType(e.target.value)}
                      placeholder="e.g. Civil Suit / Bail Petition / Customs Appeal"
                      className="w-full px-3 py-2 bg-[#0A192F] border border-[#C5A059]/30 focus:border-[#C5A059] text-xs sm:text-sm text-white placeholder:text-[#8892B0]/60 focus:outline-none"
                    />
                  </div>

                  {/* Required Legal Service */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#CCD6F6] flex items-center gap-1.5 uppercase tracking-wider">
                      <Gavel className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Required Legal Service *</span>
                    </label>
                    <select
                      value={requiredLegalService}
                      onChange={(e) => setRequiredLegalService(e.target.value)}
                      className="w-full px-3 py-2 bg-[#0A192F] border border-[#C5A059]/30 focus:border-[#C5A059] text-xs sm:text-sm text-white focus:outline-none"
                    >
                      {services.map(s => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Brief Case Details */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#CCD6F6] flex items-center gap-1.5 uppercase tracking-wider">
                    <span>Brief Case Details *</span>
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={briefCaseDetails}
                    onChange={(e) => setBriefCaseDetails(e.target.value)}
                    placeholder="Describe facts, stage of proceedings, current orders, or emergency stay requirements..."
                    className="w-full px-3 py-2 bg-[#0A192F] border border-[#C5A059]/30 focus:border-[#C5A059] text-xs sm:text-sm text-white placeholder:text-[#8892B0]/60 focus:outline-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 text-center text-xs font-bold text-[#0A192F] bg-[#C5A059] hover:bg-[#C5A059]/90 transition-all font-cinzel uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  <Shield className="w-4 h-4" />
                  <span>{isSubmitting ? 'Submitting Case...' : 'Submit Case Inquiry to Legal Team'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Live Case Proceeding Tracker Preview (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-[#112240] p-6 sm:p-7 border border-[#C5A059]/30 shadow-xl">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#C5A059]/20">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-[#0A192F] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                    <Search className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-xs sm:text-sm font-bold text-white uppercase tracking-wider">ONLINE CASE TRACKING</h4>
                    <p className="text-[10px] text-[#C5A059] font-mono uppercase">COURT PROCEEDINGS LEDGER</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsCaseTrackerModalOpen(true)}
                  className="px-2.5 py-1 text-[11px] font-bold text-[#0A192F] bg-[#C5A059] hover:bg-[#C5A059]/90 font-cinzel uppercase tracking-wider"
                >
                  Launch Tracker
                </button>
              </div>

              <div className="mt-4 space-y-3 text-xs text-[#CCD6F6] font-sans-body">
                <p className="text-xs text-[#8892B0] leading-relaxed">
                  Active clients of <strong className="text-white">IDEAL INTERNATIONAL LAW FIRM AND CONSULTANCY</strong> can look up real-time proceedings matching our official chamber ledger:
                </p>

                <div className="p-3 bg-[#0A192F] border border-[#C5A059]/20 space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-[#C5A059] font-mono font-bold">CASE: CS-482/2026</span>
                    <span className="px-2 py-0.5 bg-[#112240] border border-[#C5A059]/40 text-[#C5A059] text-[10px] font-mono uppercase">Under Hearing</span>
                  </div>
                  <div className="text-[11px] text-[#CCD6F6] font-medium truncate">
                    Abdul Rauf vs. Federal Board of Revenue & Collector
                  </div>
                  <div className="text-[10px] text-[#8892B0]">
                    Appointed Council: <span className="text-white">Kamran Abro, Advocate</span>
                  </div>
                  <div className="pt-1 text-[10px] text-[#C5A059] font-mono">
                    Next Court Date: 2026-09-15 (Divisional Bench)
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs">
                  <span className="text-[#8892B0]">Search by Case No. or Name</span>
                  <button
                    onClick={() => setIsCaseTrackerModalOpen(true)}
                    className="text-[#C5A059] hover:underline font-semibold flex items-center gap-1 font-cinzel text-[11px] uppercase tracking-wider"
                  >
                    <span>Search Case Database</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>

            {/* Direct Urgent Helpline Box */}
            <div className="p-4 bg-[#112240] border border-[#C5A059]/30 flex items-center justify-between gap-3 text-xs">
              <div className="space-y-0.5">
                <div className="font-bold text-white font-cinzel uppercase tracking-wider">Urgent Court Stay / Bail Matter?</div>
                <div className="text-[#8892B0] text-xs font-sans-body">Call Quetta Principal Chamber direct line</div>
              </div>
              <a
                href="tel:03048440932"
                className="px-3 py-1.5 bg-[#0A192F] hover:bg-[#C5A059] hover:text-[#0A192F] text-[#C5A059] border border-[#C5A059]/40 font-mono font-bold flex items-center gap-1 flex-shrink-0 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>0304-8440932</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

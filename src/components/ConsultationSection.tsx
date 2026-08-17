import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  FileText, 
  Scale, 
  CheckCircle2, 
  Send, 
  ShieldCheck,
  Sparkles,
  PhoneCall,
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useFirm } from '../context/FirmContext';

export const ConsultationSection: React.FC = () => {
  const { services, addConsultation, consultationPreselectedService, setConsultationPreselectedService } = useFirm();

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Quetta');
  const [serviceRequired, setServiceRequired] = useState(consultationPreselectedService || 'Civil Law');
  const [caseType, setCaseType] = useState('');
  const [briefDescription, setBriefDescription] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('11:00 AM');
  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync if preselected changes
  React.useEffect(() => {
    if (consultationPreselectedService) {
      setServiceRequired(consultationPreselectedService);
    }
  }, [consultationPreselectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phoneNumber || !serviceRequired) return;

    setIsSubmitting(true);

    const id = addConsultation({
      fullName,
      phoneNumber,
      email,
      city,
      serviceRequired,
      caseType: caseType || 'General Consultation',
      briefDescription,
      preferredDate: preferredDate || new Date().toISOString().split('T')[0],
      preferredTime: preferredTime || '11:00 AM'
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedId(id);
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch {}
    }, 600);
  };

  const handleReset = () => {
    setSubmittedId(null);
    setFullName('');
    setPhoneNumber('');
    setEmail('');
    setCaseType('');
    setBriefDescription('');
    setPreferredDate('');
  };

  return (
    <section id="consultation" className="py-20 bg-[#0F1E35] relative border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#112240] border border-[#C5A059]/40 text-[#C5A059] text-xs font-cinzel font-bold tracking-widest uppercase">
            <Calendar className="w-3.5 h-3.5" />
            <span>LEGAL CONSULTATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cinzel font-bold text-white tracking-tight">
            Need Legal Assistance?
          </h2>
          <div className="h-0.5 w-20 bg-[#C5A059] mx-auto" />
          <p className="text-[#8892B0] text-sm sm:text-base leading-relaxed font-sans-body">
            “Speak with our legal team regarding your matter and receive professional legal guidance.”
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto bg-[#112240] p-6 sm:p-10 border border-[#C5A059]/30 relative">
          
          {submittedId ? (
            <div className="text-center py-10 space-y-6">
              <div className="w-16 h-16 bg-[#0A192F] border border-[#C5A059] text-[#C5A059] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-cinzel font-bold text-white">
                  Consultation Request Received
                </h3>
                <p className="text-sm text-[#8892B0] max-w-lg mx-auto font-sans-body">
                  Thank you, <strong className="text-white">{fullName}</strong>. Your consultation request has been logged in our chamber registry under reference code:
                </p>
                <div className="inline-block px-4 py-2 bg-[#0A192F] border border-[#C5A059] font-mono text-lg font-bold text-[#C5A059]">
                  {submittedId}
                </div>
              </div>

              <div className="p-4 bg-[#0A192F] border border-[#C5A059]/20 max-w-md mx-auto text-xs text-[#CCD6F6] space-y-2 font-sans-body text-left">
                <div className="flex justify-between">
                  <span className="text-[#8892B0]">Service:</span>
                  <span className="font-semibold text-white">{serviceRequired}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8892B0]">Chamber / City:</span>
                  <span className="font-semibold text-white">{city}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8892B0]">Preferred Date & Time:</span>
                  <span className="font-semibold text-[#C5A059]">{preferredDate || 'Earliest Slot'} at {preferredTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8892B0]">Responsible Advocate / Lead:</span>
                  <span className="font-semibold text-[#C5A059]">
                    {serviceRequired.includes('Civil') || serviceRequired.includes('Criminal') 
                      ? 'Kamran Abro, Advocate' 
                      : 'H D AZAD (CEO Office)'}
                  </span>
                </div>
              </div>

              {/* Instant WhatsApp / Phone Action */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={`https://wa.me/923048440932?text=Hello%20IDEAL%20INTERNATIONAL%20LAW%20FIRM%2C%20I%20have%20submitted%20consultation%20request%20${submittedId}%20for%20${serviceRequired}.%20Name:%20${encodeURIComponent(fullName)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-[#0A192F] hover:bg-[#C5A059] hover:text-[#0A192F] text-[#C5A059] border border-[#C5A059]/40 text-xs font-bold font-cinzel flex items-center justify-center gap-2 uppercase tracking-wider transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Notify via WhatsApp (Quetta)</span>
                </a>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3 bg-[#0A192F] hover:bg-[#112240] text-[#CCD6F6] text-xs font-medium font-cinzel uppercase tracking-wider border border-[#C5A059]/30 transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 font-sans-body">
              
              <div className="border-b border-[#C5A059]/20 pb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-cinzel font-bold text-white uppercase tracking-wide">
                    Book a Confidential Consultation
                  </h3>
                  <p className="text-xs text-[#8892B0] mt-0.5">
                    IDEAL INTERNATIONAL LAW FIRM AND CONSULTANCY — Direct Chamber Booking
                  </p>
                </div>
                <span className="text-xs font-mono text-[#C5A059] hidden sm:inline uppercase tracking-wider">
                  CONFIDENTIAL & PRIVILEGED
                </span>
              </div>

              {/* Form Grid */}
              <div className="grid sm:grid-cols-2 gap-5">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#CCD6F6] flex items-center gap-1.5 uppercase tracking-wider">
                    <User className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Sardar Muhammad Khan"
                    className="w-full px-3.5 py-2.5 bg-[#0A192F] border border-[#C5A059]/30 focus:border-[#C5A059] text-xs sm:text-sm text-white placeholder:text-[#8892B0]/60 focus:outline-none transition-colors"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#CCD6F6] flex items-center gap-1.5 uppercase tracking-wider">
                    <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="e.g. 0300-1234567"
                    className="w-full px-3.5 py-2.5 bg-[#0A192F] border border-[#C5A059]/30 focus:border-[#C5A059] text-xs sm:text-sm text-white placeholder:text-[#8892B0]/60 focus:outline-none transition-colors font-mono"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#CCD6F6] flex items-center gap-1.5 uppercase tracking-wider">
                    <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Email Address</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. client@domain.com"
                    className="w-full px-3.5 py-2.5 bg-[#0A192F] border border-[#C5A059]/30 focus:border-[#C5A059] text-xs sm:text-sm text-white placeholder:text-[#8892B0]/60 focus:outline-none transition-colors"
                  />
                </div>

                {/* City */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#CCD6F6] flex items-center gap-1.5 uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>City / Chamber *</span>
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#0A192F] border border-[#C5A059]/30 focus:border-[#C5A059] text-xs sm:text-sm text-white focus:outline-none transition-colors"
                  >
                    <option value="Quetta">Quetta (KFK Business Center, Manan Chowk)</option>
                    <option value="Islamabad">Islamabad (Anwar Block, F-8)</option>
                    <option value="Karachi">Karachi / Sindh</option>
                    <option value="Lahore">Lahore / Punjab</option>
                    <option value="Peshawar">Peshawar / KPK</option>
                    <option value="International / Overseas">Overseas / International</option>
                  </select>
                </div>

                {/* Service Required */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#CCD6F6] flex items-center gap-1.5 uppercase tracking-wider">
                    <Scale className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Service Required *</span>
                  </label>
                  <select
                    value={serviceRequired}
                    onChange={(e) => setServiceRequired(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#0A192F] border border-[#C5A059]/30 focus:border-[#C5A059] text-xs sm:text-sm text-white focus:outline-none transition-colors"
                  >
                    {services.map(s => (
                      <option key={s.id} value={s.title}>
                        {s.title} {s.responsibleAdvocate ? `(Advocate: ${s.responsibleAdvocate})` : ''}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Case Type */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#CCD6F6] flex items-center gap-1.5 uppercase tracking-wider">
                    <FileText className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Case Type / Matter Subject</span>
                  </label>
                  <input
                    type="text"
                    value={caseType}
                    onChange={(e) => setCaseType(e.target.value)}
                    placeholder="e.g. Property Dispute / Bail / SECP Compliance"
                    className="w-full px-3.5 py-2.5 bg-[#0A192F] border border-[#C5A059]/30 focus:border-[#C5A059] text-xs sm:text-sm text-white placeholder:text-[#8892B0]/60 focus:outline-none transition-colors"
                  />
                </div>

                {/* Preferred Date */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#CCD6F6] flex items-center gap-1.5 uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Preferred Consultation Date</span>
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#0A192F] border border-[#C5A059]/30 focus:border-[#C5A059] text-xs sm:text-sm text-white focus:outline-none transition-colors"
                  />
                </div>

                {/* Preferred Time */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#CCD6F6] flex items-center gap-1.5 uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Preferred Consultation Time</span>
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#0A192F] border border-[#C5A059]/30 focus:border-[#C5A059] text-xs sm:text-sm text-white focus:outline-none transition-colors"
                  >
                    <option value="10:00 AM">10:00 AM – Morning Session</option>
                    <option value="11:30 AM">11:30 AM – Morning Session</option>
                    <option value="02:30 PM">02:30 PM – Afternoon Session</option>
                    <option value="04:00 PM">04:00 PM – Evening Session</option>
                    <option value="05:30 PM">05:30 PM – Evening Session</option>
                  </select>
                </div>

              </div>

              {/* Brief Description of Matter */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#CCD6F6] flex items-center gap-1.5 uppercase tracking-wider">
                  <FileText className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Brief Description of Matter</span>
                </label>
                <textarea
                  rows={3}
                  value={briefDescription}
                  onChange={(e) => setBriefDescription(e.target.value)}
                  placeholder="Provide concise details regarding the litigation, notice received, or consultancy needed..."
                  className="w-full px-3.5 py-2.5 bg-[#0A192F] border border-[#C5A059]/30 focus:border-[#C5A059] text-xs sm:text-sm text-white placeholder:text-[#8892B0]/60 focus:outline-none transition-colors"
                />
              </div>

              {/* Privacy Notice */}
              <div className="p-3.5 bg-[#0A192F] border border-[#C5A059]/20 text-[11px] text-[#8892B0] flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <span>All submitted information is strictly protected under legal advocate-client confidentiality privilege.</span>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 text-center text-xs font-bold text-[#0A192F] bg-[#C5A059] hover:bg-[#C5A059]/90 transition-all font-cinzel uppercase tracking-widest flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Submitting Request...' : 'Submit Consultation Request'}</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};

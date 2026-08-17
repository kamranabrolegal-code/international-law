import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Scale, 
  FileText, 
  CheckCircle2, 
  Send, 
  ShieldCheck,
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useFirm } from '../context/FirmContext';

export const ConsultationModal: React.FC = () => {
  const { 
    isConsultationModalOpen, 
    setIsConsultationModalOpen, 
    services, 
    addConsultation,
    consultationPreselectedService,
    setConsultationPreselectedService
  } = useFirm();

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Quetta');
  const [serviceRequired, setServiceRequired] = useState('Civil Law');
  const [caseType, setCaseType] = useState('');
  const [briefDescription, setBriefDescription] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('11:00 AM');
  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (consultationPreselectedService) {
      setServiceRequired(consultationPreselectedService);
    }
  }, [consultationPreselectedService, isConsultationModalOpen]);

  if (!isConsultationModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phoneNumber) return;

    setIsSubmitting(true);

    const id = addConsultation({
      fullName,
      phoneNumber,
      email,
      city,
      serviceRequired,
      caseType: caseType || 'General Legal Consultation',
      briefDescription,
      preferredDate: preferredDate || new Date().toISOString().split('T')[0],
      preferredTime: preferredTime || '11:00 AM'
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedId(id);
      try {
        confetti({
          particleCount: 70,
          spread: 50,
          origin: { y: 0.5 }
        });
      } catch {}
    }, 500);
  };

  const handleClose = () => {
    setIsConsultationModalOpen(false);
    setSubmittedId(null);
    setConsultationPreselectedService('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A192F]/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-[#112240] border border-[#C5A059]/40 p-6 sm:p-8 shadow-2xl text-[#CCD6F6] font-sans-body">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 bg-[#0A192F] hover:bg-[#0F1E35] text-[#8892B0] hover:text-[#C5A059] border border-[#C5A059]/30 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedId ? (
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 bg-[#0A192F] border border-[#C5A059] text-[#C5A059] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <div className="space-y-1.5">
              <h3 className="text-2xl font-cinzel font-bold text-white">
                Consultation Booked
              </h3>
              <p className="text-xs text-[#8892B0] max-w-md mx-auto">
                Your request has been filed with <strong className="text-white">IDEAL INTERNATIONAL LAW FIRM AND CONSULTANCY</strong>.
              </p>
              <div className="inline-block px-4 py-2 mt-2 bg-[#0A192F] border border-[#C5A059] font-mono text-base font-bold text-[#C5A059]">
                BOOKING REF: {submittedId}
              </div>
            </div>

            <div className="p-4 bg-[#0A192F] border border-[#C5A059]/20 max-w-sm mx-auto text-xs text-[#CCD6F6] space-y-1.5 text-left font-sans-body">
              <div className="flex justify-between">
                <span className="text-[#8892B0]">Client:</span>
                <span className="font-semibold text-white">{fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8892B0]">Service:</span>
                <span className="font-semibold text-white">{serviceRequired}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8892B0]">City / Chamber:</span>
                <span className="font-semibold text-white">{city}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8892B0]">Slot:</span>
                <span className="font-semibold text-[#C5A059]">{preferredDate || 'Earliest'} ({preferredTime})</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/923048440932?text=Hello%20IDEAL%20INTERNATIONAL%20LAW%20FIRM%2C%20I%20have%20booked%20consultation%20${submittedId}%20for%20${serviceRequired}.%20Name:%20${encodeURIComponent(fullName)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 bg-[#0A192F] hover:bg-[#C5A059] hover:text-[#0A192F] text-[#C5A059] border border-[#C5A059]/40 text-xs font-bold font-cinzel uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </a>
              <button
                onClick={handleClose}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#0A192F] hover:bg-[#112240] text-[#CCD6F6] border border-[#C5A059]/30 text-xs font-medium font-cinzel uppercase tracking-wider transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 font-sans-body">
            
            <div className="border-b border-[#C5A059]/20 pb-3">
              <div className="text-xs font-cinzel font-bold text-[#C5A059] uppercase tracking-widest">
                CONFIDENTIAL LEGAL INTAKE
              </div>
              <h3 className="text-xl font-cinzel font-bold text-white mt-0.5">
                Book a Consultation
              </h3>
              <p className="text-xs text-[#8892B0]">
                IDEAL INTERNATIONAL LAW FIRM AND CONSULTANCY
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3.5">
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#CCD6F6] flex items-center gap-1 uppercase tracking-wider">
                  <User className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Full Name *</span>
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Sardar Muhammad Khan"
                  className="w-full px-3 py-2 bg-[#0A192F] border border-[#C5A059]/30 text-xs text-white placeholder:text-[#8892B0]/60 focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#CCD6F6] flex items-center gap-1 uppercase tracking-wider">
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Phone Number *</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="e.g. 0300-1234567"
                  className="w-full px-3 py-2 bg-[#0A192F] border border-[#C5A059]/30 text-xs text-white placeholder:text-[#8892B0]/60 focus:outline-none focus:border-[#C5A059] font-mono"
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#CCD6F6] flex items-center gap-1 uppercase tracking-wider">
                  <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Email Address</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. client@domain.com"
                  className="w-full px-3 py-2 bg-[#0A192F] border border-[#C5A059]/30 text-xs text-white placeholder:text-[#8892B0]/60 focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              {/* City */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#CCD6F6] flex items-center gap-1 uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>City / Chamber *</span>
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3 py-2 bg-[#0A192F] border border-[#C5A059]/30 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                >
                  <option value="Quetta">Quetta (KFK Business Center)</option>
                  <option value="Islamabad">Islamabad (Anwar Block, F-8)</option>
                  <option value="Karachi">Karachi / Sindh</option>
                  <option value="Lahore">Lahore / Punjab</option>
                  <option value="Peshawar">Peshawar / KPK</option>
                  <option value="Overseas">Overseas / International</option>
                </select>
              </div>

              {/* Service Required */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#CCD6F6] flex items-center gap-1 uppercase tracking-wider">
                  <Scale className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Service Required *</span>
                </label>
                <select
                  value={serviceRequired}
                  onChange={(e) => setServiceRequired(e.target.value)}
                  className="w-full px-3 py-2 bg-[#0A192F] border border-[#C5A059]/30 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                >
                  {services.map(s => (
                    <option key={s.id} value={s.title}>
                      {s.title} {s.responsibleAdvocate ? `(${s.responsibleAdvocate})` : ''}
                    </option>
                  ))}
                </select>
              </div>

              {/* Case Type */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#CCD6F6] flex items-center gap-1 uppercase tracking-wider">
                  <FileText className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Case Type / Matter</span>
                </label>
                <input
                  type="text"
                  value={caseType}
                  onChange={(e) => setCaseType(e.target.value)}
                  placeholder="e.g. Civil Property Suit / Bail Matter"
                  className="w-full px-3 py-2 bg-[#0A192F] border border-[#C5A059]/30 text-xs text-white placeholder:text-[#8892B0]/60 focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              {/* Preferred Date */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#CCD6F6] flex items-center gap-1 uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Preferred Date</span>
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-3 py-2 bg-[#0A192F] border border-[#C5A059]/30 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              {/* Preferred Time */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#CCD6F6] flex items-center gap-1 uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Preferred Time</span>
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full px-3 py-2 bg-[#0A192F] border border-[#C5A059]/30 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                >
                  <option value="10:00 AM">10:00 AM – Morning</option>
                  <option value="11:30 AM">11:30 AM – Morning</option>
                  <option value="02:30 PM">02:30 PM – Afternoon</option>
                  <option value="04:00 PM">04:00 PM – Evening</option>
                  <option value="05:30 PM">05:30 PM – Evening</option>
                </select>
              </div>
            </div>

            {/* Brief Description */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#CCD6F6] uppercase tracking-wider">
                Brief Description of Matter
              </label>
              <textarea
                rows={2}
                value={briefDescription}
                onChange={(e) => setBriefDescription(e.target.value)}
                placeholder="Key facts, notice received, or advisory needed..."
                className="w-full px-3 py-2 bg-[#0A192F] border border-[#C5A059]/30 text-xs text-white placeholder:text-[#8892B0]/60 focus:outline-none focus:border-[#C5A059]"
              />
            </div>

            <div className="pt-2 flex items-center justify-between gap-3">
              <span className="text-[11px] text-[#8892B0] flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Protected by Advocate-Client Privilege</span>
              </span>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 bg-[#C5A059] hover:bg-[#C5A059]/90 text-[#0A192F] text-xs font-bold font-cinzel uppercase tracking-widest transition-all flex items-center gap-1.5 disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'Booking...' : 'Confirm Request'}</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};

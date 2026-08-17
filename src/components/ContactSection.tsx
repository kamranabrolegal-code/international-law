import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Building2, 
  ShieldCheck,
  ExternalLink,
  Edit
} from 'lucide-react';
import { useFirm } from '../context/FirmContext';

export const ContactSection: React.FC = () => {
  const { firmProfile } = useFirm();
  const [selectedCity, setSelectedCity] = useState<'Quetta' | 'Islamabad'>('Quetta');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const quettaOffice = firmProfile.offices.find(o => o.city === 'Quetta') || firmProfile.offices[0];
  const islamabadOffice = firmProfile.offices.find(o => o.city === 'Islamabad') || firmProfile.offices[1];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setContactName('');
      setContactPhone('');
      setContactEmail('');
      setContactSubject('');
      setContactMessage('');
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-[#0F1E35] relative border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#112240] border border-[#C5A059]/40 text-[#C5A059] text-xs font-cinzel font-bold tracking-widest uppercase">
            <MapPin className="w-3.5 h-3.5" />
            <span>CHAMBER DIRECTORY & COMMUNICATIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cinzel font-bold text-white tracking-tight">
            CONTACT OUR CHAMBERS
          </h2>
          <div className="h-0.5 w-20 bg-[#C5A059] mx-auto" />
          <p className="text-[#8892B0] text-sm sm:text-base leading-relaxed font-sans-body">
            Get in touch directly with our principal office in Quetta or our capital chamber in Islamabad for confidential consultations and case evaluation.
          </p>
        </div>

        {/* 2 Office Chambers Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* Quetta Principal Chamber */}
          <div className="bg-[#112240] p-6 sm:p-8 border border-[#C5A059] shadow-xl flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#C5A059]/20">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 border border-[#C5A059]/40 bg-[#0A192F] text-[#C5A059] flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-serif-title font-bold text-white">
                      {quettaOffice.title}
                    </h3>
                    <p className="text-xs text-[#C5A059] font-cinzel font-semibold uppercase tracking-wider">
                      PRINCIPAL CHAMBER
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-[#0A192F] border border-[#C5A059]/40 text-[10px] font-mono text-[#C5A059] uppercase tracking-wider">
                  Balochistan
                </span>
              </div>

              <div className="mt-6 space-y-4 text-xs sm:text-sm font-sans-body">
                <div className="flex items-start gap-3 text-[#CCD6F6]">
                  <MapPin className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Address:</span>
                    <span>{quettaOffice.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-[#CCD6F6]">
                  <Phone className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Direct Mobile Numbers:</span>
                    <div className="flex flex-wrap gap-3 mt-1 font-mono">
                      {quettaOffice.phoneNumbers.map((num, i) => (
                        <a 
                          key={i} 
                          href={`tel:${num.replace(/[^0-9]/g, '')}`}
                          className="px-2.5 py-1 bg-[#0A192F] hover:bg-[#C5A059] hover:text-[#0A192F] text-[#C5A059] border border-[#C5A059]/30 transition-colors"
                        >
                          {num}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-[#CCD6F6]">
                  <Mail className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Chamber Email:</span>
                    <a href={`mailto:${quettaOffice.email}`} className="text-[#CCD6F6] hover:text-[#C5A059]">
                      {quettaOffice.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-[#CCD6F6]">
                  <Clock className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Chamber Hours:</span>
                    <span className="text-[#8892B0]">{quettaOffice.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#C5A059]/20 flex flex-wrap gap-2">
              <a
                href={`https://wa.me/923048440932?text=Hello%20IDEAL%20INTERNATIONAL%20LAW%20FIRM%20Quetta%20Chamber`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-[#0A192F] hover:bg-[#C5A059] hover:text-[#0A192F] text-[#C5A059] border border-[#C5A059]/40 text-xs font-bold font-cinzel uppercase tracking-widest flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Quetta</span>
              </a>
              <a
                href="tel:03048440932"
                className="py-3 px-5 bg-[#0A192F] hover:bg-[#112240] text-[#CCD6F6] text-xs font-bold font-cinzel uppercase tracking-wider border border-[#C5A059]/30 flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Direct Call</span>
              </a>
            </div>
          </div>

          {/* Islamabad Capital Chamber */}
          <div className="bg-[#112240] p-6 sm:p-8 border border-[#C5A059]/40 hover:border-[#C5A059] transition-all shadow-xl flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#C5A059]/20">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 border border-[#C5A059]/40 bg-[#0A192F] text-[#C5A059] flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-serif-title font-bold text-white">
                      {islamabadOffice.title}
                    </h3>
                    <p className="text-xs text-[#C5A059] font-cinzel font-semibold uppercase tracking-wider">
                      CAPITAL CHAMBER
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-[#0A192F] border border-[#C5A059]/40 text-[10px] font-mono text-[#C5A059] uppercase tracking-wider">
                  Federal Capital
                </span>
              </div>

              <div className="mt-6 space-y-4 text-xs sm:text-sm font-sans-body">
                <div className="flex items-start gap-3 text-[#CCD6F6]">
                  <MapPin className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Address:</span>
                    <span>{islamabadOffice.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-[#CCD6F6]">
                  <Phone className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Direct Mobile Numbers:</span>
                    <div className="flex flex-wrap gap-3 mt-1 font-mono">
                      {islamabadOffice.phoneNumbers.map((num, i) => (
                        <a 
                          key={i} 
                          href={`tel:${num.replace(/[^0-9]/g, '')}`}
                          className="px-2.5 py-1 bg-[#0A192F] hover:bg-[#C5A059] hover:text-[#0A192F] text-[#C5A059] border border-[#C5A059]/30 transition-colors"
                        >
                          {num}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-[#CCD6F6]">
                  <Mail className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Chamber Email:</span>
                    <a href={`mailto:${islamabadOffice.email}`} className="text-[#CCD6F6] hover:text-[#C5A059]">
                      {islamabadOffice.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-[#CCD6F6]">
                  <Clock className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Chamber Hours:</span>
                    <span className="text-[#8892B0]">{islamabadOffice.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#C5A059]/20 flex flex-wrap gap-2">
              <a
                href={`https://wa.me/923111005727?text=Hello%20IDEAL%20INTERNATIONAL%20LAW%20FIRM%20Islamabad%20Chamber`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-[#0A192F] hover:bg-[#C5A059] hover:text-[#0A192F] text-[#C5A059] border border-[#C5A059]/40 text-xs font-bold font-cinzel uppercase tracking-widest flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Islamabad</span>
              </a>
              <a
                href="tel:03111005727"
                className="py-3 px-5 bg-[#0A192F] hover:bg-[#112240] text-[#CCD6F6] text-xs font-bold font-cinzel uppercase tracking-wider border border-[#C5A059]/30 flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Direct Call</span>
              </a>
            </div>
          </div>

        </div>

        {/* Interactive Quick Message & Map Section */}
        <div className="bg-[#112240] p-6 sm:p-8 border border-[#C5A059]/30 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Quick Message Form */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <h3 className="text-lg font-cinzel font-bold text-white uppercase tracking-wide">
                  Send a Direct Written Dispatch
                </h3>
                <p className="text-xs text-[#8892B0] mt-1 font-sans-body">
                  For formal corporate inquiries, institutional tenders, or urgent notices.
                </p>
              </div>

              {isSent ? (
                <div className="p-4 bg-[#0A192F] border border-[#C5A059] text-[#C5A059] text-xs font-sans-body flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                  <span>Your message has been sent to our chamber secretariat. We will respond promptly.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 font-sans-body">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Your Full Name *"
                      className="w-full px-3 py-2 bg-[#0A192F] border border-[#C5A059]/30 text-xs text-white placeholder:text-[#8892B0]/60 focus:outline-none focus:border-[#C5A059]"
                    />
                    <input
                      type="tel"
                      required
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      placeholder="Your Contact Phone *"
                      className="w-full px-3 py-2 bg-[#0A192F] border border-[#C5A059]/30 text-xs text-white placeholder:text-[#8892B0]/60 focus:outline-none focus:border-[#C5A059] font-mono"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <input
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="Email Address"
                      className="w-full px-3 py-2 bg-[#0A192F] border border-[#C5A059]/30 text-xs text-white placeholder:text-[#8892B0]/60 focus:outline-none focus:border-[#C5A059]"
                    />
                    <input
                      type="text"
                      required
                      value={contactSubject}
                      onChange={(e) => setContactSubject(e.target.value)}
                      placeholder="Subject / Reference *"
                      className="w-full px-3 py-2 bg-[#0A192F] border border-[#C5A059]/30 text-xs text-white placeholder:text-[#8892B0]/60 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <textarea
                    rows={3}
                    required
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Type your message or inquiry..."
                    className="w-full px-3 py-2 bg-[#0A192F] border border-[#C5A059]/30 text-xs text-white placeholder:text-[#8892B0]/60 focus:outline-none focus:border-[#C5A059]"
                  />

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#C5A059] hover:bg-[#C5A059]/90 text-[#0A192F] text-xs font-bold font-cinzel uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Chamber Official Information */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 bg-[#0A192F] border border-[#C5A059]/30 space-y-3 text-xs font-sans-body">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white font-cinzel uppercase tracking-wider">CHAMBER INFORMATION</span>
                  <span className="text-[#C5A059] font-mono text-[11px]">Quetta & Islamabad</span>
                </div>
                
                <p className="text-[#8892B0] text-[11px] leading-relaxed">
                  For official court inquiries, urgency filings, or in-person legal consultations, visit our chambers during working hours or call our direct numbers.
                </p>

                <div className="p-3 bg-[#112240] border border-[#C5A059]/20 space-y-1.5 text-[11px]">
                  <div className="text-[#CCD6F6]"><strong>Head of Firm:</strong> {firmProfile.ceo.name} ({firmProfile.ceo.title})</div>
                  <div className="text-[#CCD6F6]"><strong>Advocate:</strong> {firmProfile.primaryAdvocate.name} ({firmProfile.primaryAdvocate.title})</div>
                  <div className="text-[#CCD6F6]"><strong>Jurisdictions:</strong> High Courts of Balochistan & Islamabad</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

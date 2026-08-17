import React from 'react';
import { X, Scale, ShieldCheck, FileCheck2, AlertCircle } from 'lucide-react';
import { useFirm } from '../context/FirmContext';

interface LegalNoticeModalProps {
  type: 'disclaimer' | 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalNoticeModal: React.FC<LegalNoticeModalProps> = ({ type, onClose }) => {
  const { firmProfile } = useFirm();

  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A192F]/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto bg-[#112240] border border-[#C5A059]/40 p-6 sm:p-8 shadow-2xl text-[#CCD6F6] font-sans-body">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-[#0A192F] hover:bg-[#0F1E35] text-[#8892B0] hover:text-[#C5A059] border border-[#C5A059]/30 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 border-b border-[#C5A059]/20 pb-4 mb-6">
          <div className="w-12 h-12 bg-[#0A192F] border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center">
            {type === 'disclaimer' && <Scale className="w-6 h-6" />}
            {type === 'privacy' && <ShieldCheck className="w-6 h-6" />}
            {type === 'terms' && <FileCheck2 className="w-6 h-6" />}
          </div>
          <div>
            <div className="text-xs font-cinzel font-bold text-[#C5A059] uppercase tracking-widest">
              {firmProfile.name}
            </div>
            <h2 className="text-xl font-cinzel font-bold text-white uppercase tracking-wide">
              {type === 'disclaimer' && 'Statutory Legal Disclaimer'}
              {type === 'privacy' && 'Privacy & Client Confidentiality Policy'}
              {type === 'terms' && 'Terms & Conditions of Legal Engagement'}
            </h2>
          </div>
        </div>

        {/* Content by Type */}
        <div className="space-y-4 text-xs sm:text-sm text-[#CCD6F6] leading-relaxed font-sans-body">
          
          {type === 'disclaimer' && (
            <>
              <div className="p-3.5 bg-[#0A192F] border border-[#C5A059]/40 text-xs text-[#C5A059] flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <span>
                  The contents of this website are strictly for informational and legal awareness purposes under Pakistan Bar Council regulations.
                </span>
              </div>
              <p>
                <strong className="text-white">No Attorney-Client Relationship:</strong> Browsing this website, submitting an inquiry form, or requesting a consultation does not, by itself, create an advocate-client relationship between you and <strong>IDEAL INTERNATIONAL LAW FIRM AND CONSULTANCY</strong> or its legal representatives.
              </p>
              <p>
                <strong className="text-white">Formal Engagement:</strong> A legal representation relationship is established only upon the formal execution of a power of attorney (Wakalatnama) or a written retainer engagement signed by the authorized council.
              </p>
              <p>
                <strong className="text-white">Jurisdiction:</strong> Legal practices are governed in accordance with the Laws of the Islamic Republic of Pakistan and the canons of professional conduct framed by the Pakistan Bar Council and Balochistan Bar Council.
              </p>
            </>
          )}

          {type === 'privacy' && (
            <>
              <p>
                <strong className="text-white">Advocate-Client Privilege:</strong> At <strong>IDEAL INTERNATIONAL LAW FIRM AND CONSULTANCY</strong>, we observe the highest standards of professional secrecy and client confidentiality mandated by the Legal Practitioners and Bar Councils Act and international legal ethics.
              </p>
              <p>
                <strong className="text-white">Information Collection:</strong> Personal information submitted via our consultation and case inquiry portals (names, contact numbers, case dockets, CNIC numbers, corporate filings) is used exclusively for evaluating legal matters and communicating chamber notices.
              </p>
              <p>
                <strong className="text-white">No Third-Party Disclosures:</strong> We never sell, rent, or disclose client data to commercial third parties. Data is only submitted to courts, tribunals, or regulatory bodies (SECP, FBR, Customs, IPO) pursuant to specific client instructions and legal representation.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p>
                <strong className="text-white">1. Scope of Online Inquiries:</strong> Inquiries submitted through this website are reviewed by our chamber desk within 24 to 48 business hours. Urgent matters (stay orders, bail petitions) should be followed up via our direct telephone hotlines.
              </p>
              <p>
                <strong className="text-white">2. Leadership & Council Structure:</strong> The firm is headed by <strong>{firmProfile.ceo.name} ({firmProfile.ceo.title})</strong>. Civil and Criminal legal representations are conducted by <strong>{firmProfile.primaryAdvocate.name}, {firmProfile.primaryAdvocate.title}</strong>.
              </p>
              <p>
                <strong className="text-white">3. Chamber Jurisdictions:</strong> The firm operates chambers in Quetta and Islamabad, representing clients across Balochistan High Court, Islamabad High Court, and subordinate courts.
              </p>
            </>
          )}

        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-[#C5A059]/20 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#C5A059] hover:bg-[#C5A059]/90 text-[#0A192F] text-xs font-bold font-cinzel uppercase tracking-widest transition-colors"
          >
            Understood & Close
          </button>
        </div>

      </div>
    </div>
  );
};

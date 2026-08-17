import React from 'react';
import { 
  X, 
  Scale, 
  CheckCircle2, 
  Building2, 
  Gavel, 
  ArrowRight, 
  ShieldCheck, 
  Calendar,
  PhoneCall
} from 'lucide-react';
import { useFirm } from '../context/FirmContext';
import { getServiceIcon } from './ServicesSection';

export const ServiceDetailModal: React.FC = () => {
  const { 
    selectedServiceModal, 
    setSelectedServiceModal, 
    setIsConsultationModalOpen, 
    setConsultationPreselectedService 
  } = useFirm();

  if (!selectedServiceModal) return null;

  const handleBook = () => {
    const title = selectedServiceModal.title;
    setSelectedServiceModal(null);
    setConsultationPreselectedService(title);
    setIsConsultationModalOpen(true);
  };

  const isCivilOrCriminal = 
    selectedServiceModal.id === 'civil-law' || 
    selectedServiceModal.id === 'criminal-law';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A192F]/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#112240] border border-[#C5A059]/40 p-6 sm:p-8 shadow-2xl text-[#CCD6F6] font-sans-body">
        
        {/* Close Button */}
        <button
          onClick={() => setSelectedServiceModal(null)}
          className="absolute top-4 right-4 p-2 bg-[#0A192F] hover:bg-[#0F1E35] text-[#8892B0] hover:text-[#C5A059] border border-[#C5A059]/30 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-start gap-4 pr-10 pb-6 border-b border-[#C5A059]/20">
          <div className="w-14 h-14 bg-[#0A192F] border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center flex-shrink-0">
            {getServiceIcon(selectedServiceModal.iconName, 'w-7 h-7')}
          </div>
          <div>
            <div className="text-xs font-cinzel font-semibold text-[#C5A059] uppercase tracking-widest">
              {selectedServiceModal.category.replace('_', ' & ')}
            </div>
            <h2 className="text-xl sm:text-2xl font-cinzel font-bold text-white mt-0.5 uppercase tracking-wide">
              {selectedServiceModal.title}
            </h2>
            {selectedServiceModal.responsibleAdvocate && (
              <div className="mt-1 inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#0A192F] border border-[#C5A059]/40 text-xs font-mono text-[#C5A059] font-semibold">
                <Gavel className="w-3 h-3 text-[#C5A059]" />
                <span>Advocate: {selectedServiceModal.responsibleAdvocate}</span>
              </div>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="py-6 space-y-5 text-sm leading-relaxed text-[#CCD6F6]">
          <div>
            <h4 className="text-xs font-cinzel font-bold text-white uppercase tracking-widest mb-2 border-b border-[#C5A059]/20 pb-1">
              Practice Area Overview
            </h4>
            <p className="font-sans-body leading-relaxed text-[#8892B0]">
              {selectedServiceModal.fullDescription}
            </p>
          </div>

          {selectedServiceModal.applicableCourts && (
            <div className="p-3.5 bg-[#0A192F] border border-[#C5A059]/30 text-xs">
              <span className="text-[#8892B0] font-semibold block mb-1 uppercase font-cinzel">Competent Courts & Forums:</span>
              <span className="text-[#C5A059] font-medium">{selectedServiceModal.applicableCourts}</span>
            </div>
          )}

          <div>
            <h4 className="text-xs font-cinzel font-bold text-white uppercase tracking-widest mb-3 border-b border-[#C5A059]/20 pb-1">
              Key Legal Services & Scope
            </h4>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {selectedServiceModal.keyOfferings.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2 bg-[#0A192F] border border-[#C5A059]/20 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <span className="text-[#CCD6F6]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {isCivilOrCriminal && (
            <div className="p-4 bg-[#0A192F] border border-[#C5A059]/40 text-xs text-[#8892B0] space-y-1">
              <div className="font-bold text-[#C5A059] font-cinzel uppercase tracking-wider">Dedicated Legal Representation</div>
              <p>
                Civil and Criminal Law matters at <strong className="text-white">IDEAL INTERNATIONAL LAW FIRM AND CONSULTANCY</strong> are represented directly by <strong className="text-[#C5A059] font-semibold">Kamran Abro, Advocate</strong> across civil courts, session courts, and appellate high court benches.
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="pt-4 border-t border-[#C5A059]/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#8892B0]">
            Confidential Consultation Available
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => setSelectedServiceModal(null)}
              className="w-1/2 sm:w-auto px-4 py-2.5 bg-[#0A192F] hover:bg-[#0F1E35] text-[#CCD6F6] border border-[#C5A059]/30 text-xs font-cinzel uppercase tracking-wider transition-colors"
            >
              Close
            </button>
            <button
              onClick={handleBook}
              className="w-1/2 sm:w-auto px-6 py-2.5 bg-[#C5A059] hover:bg-[#C5A059]/90 text-[#0A192F] text-xs font-bold font-cinzel uppercase tracking-widest transition-all flex items-center justify-center gap-1.5"
            >
              <span>Book This Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

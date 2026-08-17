import React from 'react';
import { 
  Stamp, 
  Lightbulb, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  Plus
} from 'lucide-react';
import { useFirm } from '../context/FirmContext';

export const IPSection: React.FC = () => {
  const { services, setIsConsultationModalOpen, setConsultationPreselectedService } = useFirm();

  const ipServices = services.filter(s => s.category === 'ip');

  const handleBook = (serviceName: string) => {
    setConsultationPreselectedService(serviceName);
    setIsConsultationModalOpen(true);
  };

  return (
    <section id="ip-section" className="py-20 bg-[#0F1E35] relative border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#112240] border border-[#C5A059]/40 text-[#C5A059] text-xs font-cinzel font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BRAND PROTECTION & INVENTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cinzel font-bold text-white tracking-tight">
            INTELLECTUAL PROPERTY
          </h2>
          <div className="h-0.5 w-20 bg-[#C5A059] mx-auto" />
          <p className="text-[#8892B0] text-sm sm:text-base leading-relaxed font-sans-body">
            Safeguarding brands, inventions, software, and industrial designs through IPO Pakistan registration, opposition proceedings, and enforcement litigation.
          </p>
        </div>

        {/* Dynamic IP Cards from state */}
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {ipServices.map((ip) => {
            const isIPO = ip.id === 'ipo-services';

            return (
              <div 
                key={ip.id}
                className="bg-[#112240] p-6 sm:p-7 border border-[#C5A059]/30 hover:border-[#C5A059] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 border border-[#C5A059]/40 bg-[#0A192F] text-[#C5A059] flex items-center justify-center">
                      {isIPO ? <Stamp className="w-5 h-5" /> : <Lightbulb className="w-5 h-5" />}
                    </div>
                    <span className="px-2 py-0.5 bg-[#0A192F] border border-[#C5A059]/40 text-[10px] font-mono text-[#C5A059] uppercase tracking-wider">
                      IPO Pakistan
                    </span>
                  </div>

                  <h3 className="text-lg font-serif-title font-bold text-white group-hover:text-[#C5A059] transition-colors">
                    {ip.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#8892B0] mt-2 font-sans-body leading-relaxed">
                    {ip.shortDescription}
                  </p>

                  <div className="mt-5 space-y-2 text-xs text-[#CCD6F6] border-t border-[#C5A059]/15 pt-4 font-sans-body">
                    {ip.keyOfferings.slice(0, 4).map((offering, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                        <span>{offering}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#C5A059]/15">
                  <button
                    onClick={() => handleBook(ip.title)}
                    className="w-full py-2.5 bg-[#0A192F] hover:bg-[#C5A059] hover:text-[#0A192F] text-[#C5A059] border border-[#C5A059]/40 text-xs font-bold uppercase tracking-widest font-cinzel transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Protect {ip.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* Admin Extensible Card Placeholder */}
          <div className="bg-[#112240]/40 border border-dashed border-[#C5A059]/30 hover:border-[#C5A059] p-6 sm:p-7 flex flex-col justify-between text-center transition-colors">
            <div className="my-auto space-y-3">
              <div className="w-11 h-11 border border-[#C5A059]/40 bg-[#0A192F] text-[#C5A059] mx-auto flex items-center justify-center">
                <Plus className="w-5 h-5" />
              </div>
              <h3 className="text-base font-cinzel font-bold text-white uppercase tracking-wider">
                Custom IP Services
              </h3>
              <p className="text-xs text-[#8892B0] font-sans-body max-w-xs mx-auto">
                Additional IP categories, trade secrets, and domain disputes can be configured and managed via the Admin Panel.
              </p>
            </div>

            <div className="pt-4 border-t border-[#C5A059]/15 mt-6">
              <button
                onClick={() => handleBook('Intellectual Property Advisory')}
                className="w-full py-2.5 bg-[#0A192F] hover:bg-[#C5A059] hover:text-[#0A192F] text-[#C5A059] text-xs font-bold uppercase tracking-wider font-cinzel border border-[#C5A059]/40 transition-all flex items-center justify-center gap-1.5"
              >
                <span>Request Advisory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

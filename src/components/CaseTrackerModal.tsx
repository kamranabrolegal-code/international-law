import React, { useState } from 'react';
import { 
  X, 
  Search, 
  Gavel, 
  Calendar, 
  Building2, 
  User, 
  Scale, 
  CheckCircle2, 
  FileText, 
  Printer, 
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import { useFirm } from '../context/FirmContext';

export const CaseTrackerModal: React.FC = () => {
  const { isCaseTrackerModalOpen, setIsCaseTrackerModalOpen, caseProceedings } = useFirm();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCaseId, setSelectedCaseId] = useState<string>(caseProceedings[0]?.id || '');

  if (!isCaseTrackerModalOpen) return null;

  const filteredCases = caseProceedings.filter(c => 
    c.caseNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.caseTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedCase = caseProceedings.find(c => c.id === selectedCaseId) || filteredCases[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A192F]/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#112240] border border-[#C5A059]/40 p-6 sm:p-8 shadow-2xl text-[#CCD6F6] font-sans-body">
        
        {/* Close Button */}
        <button
          onClick={() => setIsCaseTrackerModalOpen(false)}
          className="absolute top-4 right-4 p-2 bg-[#0A192F] hover:bg-[#0F1E35] text-[#8892B0] hover:text-[#C5A059] border border-[#C5A059]/30 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header */}
        <div className="border-b border-[#C5A059]/20 pb-4">
          <div className="flex items-center gap-2 text-xs font-cinzel font-bold text-[#C5A059] uppercase tracking-widest">
            <Search className="w-4 h-4" />
            <span>ONLINE COURT PROCEEDINGS & DOCKET REGISTRY</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-cinzel font-bold text-white mt-1 uppercase tracking-wide">
            IDEAL INTERNATIONAL LAW FIRM CASE TRACKER
          </h2>
          <p className="text-xs text-[#8892B0] mt-0.5">
            Verify real-time court dates, interim orders, and appointed counsel.
          </p>
        </div>

        {/* Search Input */}
        <div className="my-5">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8892B0]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Case No. (e.g. CS-482, CR-109), Client Name, or City..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#0A192F] border border-[#C5A059]/30 focus:border-[#C5A059] text-xs sm:text-sm text-white placeholder:text-[#8892B0]/60 focus:outline-none"
            />
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          
          {/* Left: Case List (4 cols) */}
          <div className="lg:col-span-4 space-y-2 max-h-96 overflow-y-auto pr-1">
            <div className="text-xs font-cinzel font-bold text-white uppercase tracking-widest mb-2 border-b border-[#C5A059]/20 pb-1">
              Registered Dockets ({filteredCases.length})
            </div>

            {filteredCases.length === 0 ? (
              <div className="p-4 bg-[#0A192F] border border-[#C5A059]/20 text-center text-xs text-[#8892B0]">
                No matching case records found.
              </div>
            ) : (
              filteredCases.map(c => {
                const isSelected = selectedCase?.id === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCaseId(c.id)}
                    className={`w-full text-left p-3 border transition-all ${
                      isSelected
                        ? 'bg-[#0A192F] border-[#C5A059] shadow-lg text-white'
                        : 'bg-[#0F1E35] border-[#C5A059]/20 hover:border-[#C5A059]/50 text-[#8892B0]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="font-bold text-[#C5A059]">{c.caseNo}</span>
                      <span className="text-[#8892B0]">{c.city}</span>
                    </div>
                    <div className="text-xs font-semibold text-white mt-1 truncate">
                      {c.caseTitle}
                    </div>
                    <div className="text-[10px] text-[#8892B0] mt-1 flex items-center justify-between">
                      <span>Client: {c.clientName}</span>
                      <ChevronRight className="w-3 h-3 text-[#C5A059]" />
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Right: Selected Case Details & Proceedings Table (8 cols) */}
          <div className="lg:col-span-8">
            {selectedCase ? (
              <div className="bg-[#0A192F] border border-[#C5A059]/30 p-5 space-y-5">
                
                {/* Header of Case */}
                <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#C5A059]/20 pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-bold text-[#C5A059]">{selectedCase.caseNo}</span>
                      <span className="px-2 py-0.5 bg-[#112240] border border-[#C5A059]/30 text-[10px] font-mono text-[#CCD6F6]">
                        {selectedCase.city}
                      </span>
                    </div>
                    <h3 className="text-base font-cinzel font-bold text-white mt-1">
                      {selectedCase.caseTitle}
                    </h3>
                  </div>

                  <button
                    onClick={() => window.print()}
                    className="px-3 py-1.5 bg-[#112240] hover:bg-[#0F1E35] text-[#CCD6F6] border border-[#C5A059]/30 text-xs font-cinzel uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                  >
                    <Printer className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Print Ledger</span>
                  </button>
                </div>

                {/* Grid of details */}
                <div className="grid sm:grid-cols-2 gap-3 text-xs bg-[#112240] p-3.5 border border-[#C5A059]/30">
                  <div>
                    <span className="text-[#8892B0] block text-[11px] uppercase font-cinzel">Court / Tribunal:</span>
                    <span className="font-semibold text-white">{selectedCase.courtTribunal}</span>
                  </div>
                  <div>
                    <span className="text-[#8892B0] block text-[11px] uppercase font-cinzel">Appointed Council:</span>
                    <span className="font-semibold text-[#C5A059]">{selectedCase.appointedCouncil}</span>
                  </div>
                  <div>
                    <span className="text-[#8892B0] block text-[11px] uppercase font-cinzel">Client Name:</span>
                    <span className="font-semibold text-white">{selectedCase.clientName}</span>
                  </div>
                  <div>
                    <span className="text-[#8892B0] block text-[11px] uppercase font-cinzel">Next Hearing Date:</span>
                    <span className="font-mono font-bold text-[#C5A059]">
                      {selectedCase.proceedings[selectedCase.proceedings.length - 1]?.nextDate || 'Under Notice'}
                    </span>
                  </div>
                </div>

                {/* Proceedings Table */}
                <div>
                  <h4 className="text-xs font-cinzel font-bold text-white uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Proceedings & Court Diary</span>
                  </h4>

                  <div className="border border-[#C5A059]/30 overflow-hidden">
                    <table className="w-full text-left text-xs border-collapse font-sans-body">
                      <thead>
                        <tr className="bg-[#112240] text-[#C5A059] font-cinzel text-[11px] uppercase tracking-wider">
                          <th className="p-2.5 border-r border-[#C5A059]/20 w-28">Date</th>
                          <th className="p-2.5 border-r border-[#C5A059]/20">Proceeding</th>
                          <th className="p-2.5 w-28">Next Date</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#C5A059]/20 bg-[#0A192F]">
                        {selectedCase.proceedings.map((p, idx) => (
                          <tr key={idx} className="hover:bg-[#112240]/40">
                            <td className="p-2.5 font-mono text-[#CCD6F6] border-r border-[#C5A059]/20 align-top">
                              {p.date}
                            </td>
                            <td className="p-2.5 text-[#8892B0] border-r border-[#C5A059]/20 leading-relaxed">
                              <div className="text-white">{p.proceeding}</div>
                              {p.bench && (
                                <div className="text-[10px] text-[#C5A059] mt-0.5 font-mono">
                                  {p.bench}
                                </div>
                              )}
                            </td>
                            <td className="p-2.5 font-mono text-[#C5A059] align-top">
                              {p.nextDate || '—'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            ) : (
              <div className="p-8 bg-[#0A192F] border border-[#C5A059]/30 text-center text-xs text-[#8892B0]">
                Select a case docket on the left to view the complete proceeding ledger.
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

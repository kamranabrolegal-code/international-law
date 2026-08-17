import React, { useState } from 'react';
import { 
  Scale, 
  Printer, 
  Download, 
  ShieldCheck, 
  Calendar, 
  FileText, 
  Building2, 
  CheckSquare, 
  Square,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { useFirm } from '../context/FirmContext';

export const OfficialLetterheadPreview: React.FC = () => {
  const { firmProfile, caseProceedings, setIsCaseTrackerModalOpen } = useFirm();
  const [selectedCaseIndex, setSelectedCaseIndex] = useState(0);

  const activeCase = caseProceedings[selectedCaseIndex] || caseProceedings[0];

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="py-20 bg-[#0F1E35] relative border-t border-[#C5A059]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#112240] border border-[#C5A059]/40 text-[#C5A059] text-xs font-cinzel font-semibold tracking-widest uppercase">
            <FileText className="w-3.5 h-3.5" />
            <span>OFFICIAL CHAMBER PROCEEDINGS DOCKET</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cinzel font-bold text-white tracking-wide uppercase">
            CASE PROCEEDING & LETTERHEAD REGISTRY
          </h2>
          <div className="h-0.5 w-20 bg-[#C5A059] mx-auto" />
          <p className="text-[#8892B0] text-sm sm:text-base leading-relaxed font-sans-body">
            Digital representation of our standardized chamber ledger and court proceeding records, ensuring complete transparency for our clients.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <span className="text-xs text-[#8892B0] font-cinzel font-semibold mr-1 uppercase tracking-wider">Active Dockets:</span>
            {caseProceedings.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => setSelectedCaseIndex(idx)}
                className={`px-3.5 py-1.5 text-xs font-mono transition-colors ${
                  selectedCaseIndex === idx
                    ? 'bg-[#C5A059] text-[#0A192F] font-bold shadow'
                    : 'bg-[#0A192F] text-[#8892B0] border border-[#C5A059]/30 hover:border-[#C5A059]'
                }`}
              >
                {c.caseNo} ({c.city})
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsCaseTrackerModalOpen(true)}
              className="px-3.5 py-1.5 bg-[#112240] hover:bg-[#0A192F] text-[#C5A059] border border-[#C5A059]/40 text-xs font-cinzel font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Full Docket Search</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 bg-[#0A192F] hover:bg-[#112240] text-[#CCD6F6] border border-[#C5A059]/30 text-xs font-cinzel uppercase tracking-wider flex items-center gap-1.5 transition-colors"
              title="Print Official Record"
            >
              <Printer className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Print Memo</span>
            </button>
          </div>
        </div>

        {/* Letterhead Canvas Container */}
        <div className="max-w-4xl mx-auto bg-[#faf8f5] text-slate-900 shadow-2xl p-6 sm:p-10 border border-[#C5A059]/40 font-serif-title overflow-x-auto print:shadow-none print:border-none">
          
          {/* Letterhead Top Header */}
          <div className="border-b-2 border-slate-900 pb-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              
              {/* Brand Logo & Name */}
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-slate-950 text-amber-400 flex items-center justify-center font-cinzel text-xl font-black shadow flex-shrink-0">
                  <Scale className="w-8 h-8 text-[#C5A059]" />
                </div>
                <div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-black text-slate-950 tracking-tight leading-tight">
                    IDEAL INTERNATIONAL
                  </h3>
                  <div className="font-cinzel text-xs sm:text-sm font-bold text-slate-800 tracking-wider">
                    LAW FIRM AND CONSULTANCY
                  </div>
                </div>
              </div>

              {/* Chambers Badge Box */}
              <div className="bg-slate-100 p-2.5 rounded border border-slate-300 text-right font-sans-body text-xs space-y-0.5 self-stretch sm:self-auto">
                <div className="font-cinzel font-bold text-slate-900 text-[11px] uppercase tracking-wider">
                  QUETTA & ISLAMABAD
                </div>
                <div className="font-sans text-slate-700 text-[11px]">
                  Advocates & Legal Consultants
                </div>
              </div>

            </div>

            {/* Offices & Contact Details Sub-header */}
            <div className="mt-3 pt-2 border-t border-slate-300 grid sm:grid-cols-2 gap-3 text-[11px] font-sans-body text-slate-700">
              <div className="bg-white/80 p-2 rounded border border-slate-200 space-y-0.5">
                <div className="font-bold text-slate-900 uppercase tracking-wider text-[10px] font-cinzel">QUETTA OFFICE:</div>
                <div>{firmProfile.offices[0].address}</div>
                <div className="font-mono text-slate-900">
                  Mob # {firmProfile.offices[0].phoneNumbers.join(', ')}
                </div>
                <div>Email: {firmProfile.offices[0].email} | Web: {firmProfile.websiteUrl}</div>
              </div>

              <div className="bg-white/80 p-2 rounded border border-slate-200 space-y-0.5">
                <div className="font-bold text-slate-900 uppercase tracking-wider text-[10px] font-cinzel">ISLAMABAD OFFICE:</div>
                <div>{firmProfile.offices[1].address}</div>
                <div className="font-mono text-slate-900">
                  Mob # {firmProfile.offices[1].phoneNumbers.join(', ')}
                </div>
                <div>Chambers adjacent to Judicial Complex F-8</div>
              </div>
            </div>
          </div>

          {/* Service Checklist Row (As seen in the official reference document) */}
          <div className="my-4 p-3 bg-slate-100/90 rounded border border-slate-300 text-[11px] font-sans-body text-slate-800">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <div className="flex items-center gap-1.5">
                <CheckSquare className="w-3.5 h-3.5 text-amber-700" />
                <span>Civil Law</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckSquare className="w-3.5 h-3.5 text-amber-700" />
                <span>Criminal Law</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Square className="w-3.5 h-3.5 text-slate-400" />
                <span>Banking Law</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Square className="w-3.5 h-3.5 text-slate-400" />
                <span>Family Law</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Square className="w-3.5 h-3.5 text-slate-400" />
                <span>Cyber Law</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Square className="w-3.5 h-3.5 text-slate-400" />
                <span>Tribunal Matters</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Square className="w-3.5 h-3.5 text-slate-400" />
                <span>Company Services</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckSquare className="w-3.5 h-3.5 text-amber-700" />
                <span>Customs & Taxation</span>
              </div>
            </div>
          </div>

          {/* Case Particulars Docket Grid */}
          <div className="border border-slate-300 bg-white rounded p-4 text-xs font-sans-body space-y-3">
            <div className="grid sm:grid-cols-3 gap-3 border-b border-slate-200 pb-2">
              <div>
                <span className="text-slate-500 block text-[10px]">Court / Tribunal:</span>
                <span className="font-bold text-slate-900">{activeCase?.courtTribunal}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">City / Forum:</span>
                <span className="font-bold text-slate-900">{activeCase?.city}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">Case #:</span>
                <span className="font-mono font-bold text-amber-800">{activeCase?.caseNo}</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-3 border-b border-slate-200 pb-2">
              <div className="sm:col-span-2">
                <span className="text-slate-500 block text-[10px]">Case Title:</span>
                <span className="font-semibold text-slate-900">{activeCase?.caseTitle}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">Appointed Council:</span>
                <span className="font-bold text-amber-900">{activeCase?.appointedCouncil}</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              <div>
                <span className="text-slate-500 block text-[10px]">Client Name:</span>
                <span className="font-semibold text-slate-900">{activeCase?.clientName}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">Defence Council:</span>
                <span className="text-slate-800">{activeCase?.defenceCouncil || 'N/A'}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">Case Reference / Referral:</span>
                <span className="font-mono text-slate-800">{activeCase?.referralNo || 'REF-2026/01'}</span>
              </div>
            </div>
          </div>

          {/* Head of Firm Callout in Document */}
          <div className="my-4 py-2 px-4 bg-slate-900 text-white rounded text-center font-cinzel">
            <div className="text-sm font-bold tracking-wider">
              {firmProfile.ceo.name} ({firmProfile.ceo.title})
            </div>
            <div className="text-[10px] text-amber-400 font-sans-body tracking-normal">
              Head of IDEAL INTERNATIONAL LAW FIRM AND CONSULTANCY
            </div>
          </div>

          {/* Legal Representation Callout */}
          <div className="mb-4 text-center text-xs font-sans-body text-slate-700 bg-amber-50 p-2 rounded border border-amber-200">
            Civil & Criminal Representation: <strong className="text-slate-900">Kamran Abro, Advocate</strong>
          </div>

          {/* Proceedings Ledger Table (Matching Document Table Exactly) */}
          <div className="border border-slate-900 rounded overflow-hidden">
            <table className="w-full text-left text-xs font-sans-body border-collapse">
              <thead>
                <tr className="bg-slate-900 text-amber-300 font-cinzel text-[11px]">
                  <th className="p-2.5 border-r border-slate-700 w-28">Date</th>
                  <th className="p-2.5 border-r border-slate-700">Proceeding / Court Order</th>
                  <th className="p-2.5 w-32">Next Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {activeCase?.proceedings.map((proc, pIdx) => (
                  <tr key={pIdx} className="hover:bg-slate-50">
                    <td className="p-2.5 font-mono font-bold text-slate-900 border-r border-slate-200 align-top">
                      {proc.date}
                    </td>
                    <td className="p-2.5 text-slate-800 border-r border-slate-200 leading-relaxed">
                      <div>{proc.proceeding}</div>
                      {proc.bench && (
                        <div className="text-[10px] text-slate-500 mt-1 font-mono">
                          Bench: {proc.bench}
                        </div>
                      )}
                    </td>
                    <td className="p-2.5 font-mono font-bold text-amber-800 align-top">
                      {proc.nextDate || 'To be fixed'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Official Seal / Signature Footer */}
          <div className="mt-8 pt-4 border-t border-slate-300 flex justify-between items-end text-[10px] font-sans-body text-slate-600">
            <div>
              <div>IDEAL INTERNATIONAL LAW FIRM AND CONSULTANCY</div>
              <div>Authorized Chamber Docket • Quetta & Islamabad</div>
            </div>
            <div className="text-right">
              <div className="font-serif-title italic font-bold text-slate-800 text-sm">H D AZAD</div>
              <div>Chief Executive Officer (CEO)</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

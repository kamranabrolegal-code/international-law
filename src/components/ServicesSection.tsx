import React, { useState } from 'react';
import { 
  Scale, 
  ShieldAlert, 
  Landmark, 
  Users, 
  ShieldCheck, 
  Gavel, 
  Globe, 
  FileSearch, 
  Building2, 
  Briefcase, 
  FileCheck, 
  Receipt, 
  Calculator, 
  Truck, 
  PlaneTakeoff, 
  Globe2, 
  Stamp, 
  Lightbulb, 
  HeartHandshake, 
  Layers, 
  MoreHorizontal,
  Search,
  ArrowRight,
  Filter,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
import { useFirm } from '../context/FirmContext';
import { ServiceItem, ServiceCategory } from '../types';

export const getServiceIcon = (iconName: string, className = 'w-6 h-6') => {
  switch (iconName) {
    case 'Scale': return <Scale className={className} />;
    case 'ShieldAlert': return <ShieldAlert className={className} />;
    case 'Landmark': return <Landmark className={className} />;
    case 'Users': return <Users className={className} />;
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'Gavel': return <Gavel className={className} />;
    case 'Globe': return <Globe className={className} />;
    case 'FileSearch': return <FileSearch className={className} />;
    case 'Building2': return <Building2 className={className} />;
    case 'Briefcase': return <Briefcase className={className} />;
    case 'FileCheck': return <FileCheck className={className} />;
    case 'Receipt': return <Receipt className={className} />;
    case 'Calculator': return <Calculator className={className} />;
    case 'Truck': return <Truck className={className} />;
    case 'PlaneTakeoff': return <PlaneTakeoff className={className} />;
    case 'Passport': return <Globe2 className={className} />;
    case 'Globe2': return <Globe2 className={className} />;
    case 'Stamp': return <Stamp className={className} />;
    case 'Lightbulb': return <Lightbulb className={className} />;
    case 'HeartHandshake': return <HeartHandshake className={className} />;
    case 'Layers': return <Layers className={className} />;
    case 'MoreHorizontal': return <MoreHorizontal className={className} />;
    default: return <Scale className={className} />;
  }
};

export const ServicesSection: React.FC = () => {
  const { 
    services, 
    setSelectedServiceModal, 
    setIsConsultationModalOpen, 
    setConsultationPreselectedService 
  } = useFirm();

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Services (20+)' },
    { id: 'litigation', label: 'Litigation & Core Law' },
    { id: 'corporate', label: 'Corporate & Business' },
    { id: 'taxation', label: 'Taxation & Customs' },
    { id: 'immigration', label: 'Immigration & Visa' },
    { id: 'ip', label: 'Intellectual Property' },
    { id: 'trade_ngo', label: 'NGO / NPO & WEBOC' },
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (service.responsibleAdvocate && service.responsibleAdvocate.toLowerCase().includes(searchQuery.toLowerCase())) ||
      service.keyOfferings.some(o => o.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleBookService = (service: ServiceItem, e: React.MouseEvent) => {
    e.stopPropagation();
    setConsultationPreselectedService(service.title);
    setIsConsultationModalOpen(true);
  };

  return (
    <section id="services" className="py-20 bg-[#0F1E35] relative border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#112240] border border-[#C5A059]/40 text-[#C5A059] text-xs font-cinzel font-bold tracking-widest uppercase">
            <Scale className="w-3.5 h-3.5" />
            <span>PRACTICE AREAS & CONSULTANCY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cinzel font-bold text-white tracking-tight">
            OUR LEGAL & CONSULTANCY SERVICES
          </h2>
          <div className="h-0.5 w-20 bg-[#C5A059] mx-auto" />
          <p className="text-[#8892B0] text-sm sm:text-base leading-relaxed font-sans-body">
            Comprehensive legal representation, litigation defence, corporate structuring, and regulatory advisory delivered with strict adherence to professional ethics.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="mt-12 space-y-4">
          
          {/* Search and Category Filter */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-[#8892B0] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search civil, criminal, tax, SECP..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#0A192F] border border-[#C5A059]/30 focus:border-[#C5A059] text-xs sm:text-sm text-white placeholder:text-[#8892B0]/70 focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8892B0] hover:text-[#C5A059]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Total Badge */}
            <div className="text-xs text-[#8892B0] flex items-center gap-2 self-start md:self-auto font-mono">
              <span>Showing <strong className="text-[#C5A059]">{filteredServices.length}</strong> of {services.length} services</span>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#C5A059] text-[#0A192F] font-cinzel'
                    : 'bg-[#112240] hover:bg-[#0A192F] text-[#8892B0] hover:text-white border border-[#C5A059]/20 font-sans-body'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Services Grid */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredServices.map((service) => {
            const isCivilOrCriminal = service.id === 'civil-law' || service.id === 'criminal-law';

            return (
              <div
                key={service.id}
                onClick={() => setSelectedServiceModal(service)}
                className={`group cursor-pointer bg-[#112240] p-5 sm:p-6 border transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between ${
                  isCivilOrCriminal
                    ? 'border-[#C5A059] shadow-lg shadow-[#C5A059]/5'
                    : 'border-[#C5A059]/20 hover:border-[#C5A059]'
                }`}
              >
                <div>
                  {/* Icon & Special Badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className={`w-11 h-11 border flex items-center justify-center transition-colors ${
                      isCivilOrCriminal
                        ? 'border-[#C5A059] bg-[#0A192F] text-[#C5A059]'
                        : 'border-[#C5A059]/30 bg-[#0A192F] text-[#C5A059] group-hover:border-[#C5A059]'
                    }`}>
                      {getServiceIcon(service.iconName, 'w-5 h-5')}
                    </div>

                    {service.responsibleAdvocate ? (
                      <span className="px-2 py-0.5 bg-[#0A192F] border border-[#C5A059] text-[9px] font-mono text-[#C5A059] font-bold uppercase tracking-wider">
                        {service.responsibleAdvocate}
                      </span>
                    ) : service.isPopular ? (
                      <span className="px-2 py-0.5 bg-[#0A192F] border border-[#C5A059]/40 text-[9px] font-mono text-[#CCD6F6] uppercase tracking-wider">
                        Corporate
                      </span>
                    ) : null}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-serif-title font-bold text-white group-hover:text-[#C5A059] transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-[#8892B0] mt-2 leading-relaxed line-clamp-3 font-sans-body">
                    {service.shortDescription}
                  </p>

                  {/* Quick highlights */}
                  <div className="mt-4 pt-3 border-t border-[#C5A059]/15 space-y-1.5">
                    {service.keyOfferings.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-[11px] text-[#CCD6F6] font-sans-body">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action footer */}
                <div className="mt-6 pt-4 border-t border-[#C5A059]/15 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059] font-cinzel flex items-center gap-1">
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>

                  <button
                    onClick={(e) => handleBookService(service, e)}
                    className="text-[11px] px-2.5 py-1 bg-[#0A192F] hover:bg-[#C5A059] text-[#C5A059] hover:text-[#0A192F] border border-[#C5A059]/40 transition-colors font-bold uppercase font-cinzel"
                    title="Book for this service"
                  >
                    Book
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-[#112240] border border-[#C5A059]/30 mt-6">
            <Scale className="w-10 h-10 text-[#C5A059]/50 mx-auto mb-3" />
            <h4 className="text-base font-cinzel font-bold text-white uppercase tracking-wider">No Services Found</h4>
            <p className="text-xs text-[#8892B0] mt-1">Try refining your search keyword or selecting a different category tab.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 bg-[#C5A059] text-[#0A192F] text-xs font-bold uppercase tracking-widest font-cinzel"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

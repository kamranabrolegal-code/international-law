import React, { createContext, useContext, useState, useEffect } from 'react';
import { FirmProfile, ServiceItem, ConsultationRequest, ClientCaseInquiry, CaseProceedingRecord } from '../types';
import { INITIAL_FIRM_PROFILE, INITIAL_SERVICES, INITIAL_CASE_PROCEEDINGS, INITIAL_CONSULTATIONS } from '../data/initialData';

interface FirmContextType {
  firmProfile: FirmProfile;
  services: ServiceItem[];
  consultations: ConsultationRequest[];
  inquiries: ClientCaseInquiry[];
  caseProceedings: CaseProceedingRecord[];
  
  // Actions
  updateFirmProfile: (profile: Partial<FirmProfile>) => void;
  addService: (service: Omit<ServiceItem, 'id'>) => void;
  updateService: (id: string, service: Partial<ServiceItem>) => void;
  deleteService: (id: string) => void;
  
  // Consultation
  addConsultation: (consultation: Omit<ConsultationRequest, 'id' | 'createdAt' | 'status'>) => string;
  updateConsultationStatus: (id: string, status: ConsultationRequest['status'], adminNotes?: string) => void;
  deleteConsultation: (id: string) => void;

  // Inquiries
  addInquiry: (inquiry: Omit<ClientCaseInquiry, 'id' | 'createdAt' | 'status'>) => string;
  updateInquiryStatus: (id: string, status: ClientCaseInquiry['status'], adminNotes?: string) => void;
  deleteInquiry: (id: string) => void;

  // Case Proceedings (Matching Official Letterhead Proceeding Table)
  addCaseProceedingRecord: (record: Omit<CaseProceedingRecord, 'id' | 'createdAt'>) => string;
  addProceedingEntry: (caseId: string, entry: { date: string; proceeding: string; nextDate?: string; bench?: string }) => void;
  updateCaseProceedingRecord: (id: string, record: Partial<CaseProceedingRecord>) => void;
  deleteCaseProceedingRecord: (id: string) => void;

  // Reset & Backup
  resetToDefaults: () => void;
  exportDataJson: () => string;
  importDataJson: (jsonString: string) => boolean;

  // Active modals / navigation helpers
  selectedServiceModal: ServiceItem | null;
  setSelectedServiceModal: (service: ServiceItem | null) => void;
  isConsultationModalOpen: boolean;
  setIsConsultationModalOpen: (open: boolean) => void;
  consultationPreselectedService: string;
  setConsultationPreselectedService: (serviceTitle: string) => void;
  isCaseTrackerModalOpen: boolean;
  setIsCaseTrackerModalOpen: (open: boolean) => void;
}

const STORAGE_KEYS = {
  FIRM_PROFILE: 'iilf_firm_profile_v1',
  SERVICES: 'iilf_services_v1',
  CONSULTATIONS: 'iilf_consultations_v1',
  INQUIRIES: 'iilf_inquiries_v1',
  PROCEEDINGS: 'iilf_proceedings_v1',
};

const FirmContext = createContext<FirmContextType | undefined>(undefined);

export const FirmProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load from localStorage or initialData
  const [firmProfile, setFirmProfile] = useState<FirmProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.FIRM_PROFILE);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...INITIAL_FIRM_PROFILE,
          ...parsed,
          regNumber: parsed.regNumber && parsed.regNumber !== 'RF/ICT/2871' ? parsed.regNumber : INITIAL_FIRM_PROFILE.regNumber,
          ntnNumber: parsed.ntnNumber || INITIAL_FIRM_PROFILE.ntnNumber,
        };
      }
      return INITIAL_FIRM_PROFILE;
    } catch {
      return INITIAL_FIRM_PROFILE;
    }
  });

  const [services, setServices] = useState<ServiceItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SERVICES);
      return saved ? JSON.parse(saved) : INITIAL_SERVICES;
    } catch {
      return INITIAL_SERVICES;
    }
  });

  const [consultations, setConsultations] = useState<ConsultationRequest[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CONSULTATIONS);
      return saved ? JSON.parse(saved) : INITIAL_CONSULTATIONS;
    } catch {
      return INITIAL_CONSULTATIONS;
    }
  });

  const [inquiries, setInquiries] = useState<ClientCaseInquiry[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.INQUIRIES);
      return saved ? JSON.parse(saved) : [
        {
          id: 'inq-1',
          clientName: 'Manan Commercial Plaza Association',
          contactNumber: '0304-9988776',
          email: 'plaza.assoc@gmail.com',
          city: 'Quetta',
          courtTribunal: 'Senior Civil Judge Quetta',
          caseType: 'Civil Litigation / Property Injunction',
          caseReference: 'Civ.Suit 92/2026',
          briefCaseDetails: 'Commercial building encroachment and partition dispute requiring immediate stay application.',
          requiredLegalService: 'Civil Law',
          status: 'Advocate Assigned',
          createdAt: '2026-08-15T14:20:00.000Z',
          adminNotes: 'Assigned to Kamran Abro, Advocate for urgent injunction filing.'
        }
      ];
    } catch {
      return [];
    }
  });

  const [caseProceedings, setCaseProceedings] = useState<CaseProceedingRecord[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROCEEDINGS);
      return saved ? JSON.parse(saved) : INITIAL_CASE_PROCEEDINGS;
    } catch {
      return INITIAL_CASE_PROCEEDINGS;
    }
  });

  // Modal states
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [consultationPreselectedService, setConsultationPreselectedService] = useState('');
  const [isCaseTrackerModalOpen, setIsCaseTrackerModalOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.FIRM_PROFILE, JSON.stringify(firmProfile));
    } catch (e) {
      console.error(e);
    }
  }, [firmProfile]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(services));
    } catch (e) {
      console.error(e);
    }
  }, [services]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CONSULTATIONS, JSON.stringify(consultations));
    } catch (e) {
      console.error(e);
    }
  }, [consultations]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(inquiries));
    } catch (e) {
      console.error(e);
    }
  }, [inquiries]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.PROCEEDINGS, JSON.stringify(caseProceedings));
    } catch (e) {
      console.error(e);
    }
  }, [caseProceedings]);

  // Actions
  const updateFirmProfile = (updated: Partial<FirmProfile>) => {
    setFirmProfile(prev => ({ ...prev, ...updated }));
  };

  const addService = (newServiceData: Omit<ServiceItem, 'id'>) => {
    const id = newServiceData.title.toLowerCase().replace(/[^a-z0-9]/g, '-') + '-' + Date.now();
    const newService: ServiceItem = { id, ...newServiceData };
    setServices(prev => [...prev, newService]);
  };

  const updateService = (id: string, updated: Partial<ServiceItem>) => {
    setServices(prev => prev.map(s => s.id === id ? { ...s, ...updated } : s));
  };

  const deleteService = (id: string) => {
    setServices(prev => prev.filter(s => s.id !== id));
  };

  const addConsultation = (data: Omit<ConsultationRequest, 'id' | 'createdAt' | 'status'>): string => {
    const id = 'cons-' + Math.floor(100000 + Math.random() * 900000);
    const newRecord: ConsultationRequest = {
      ...data,
      id,
      status: 'New',
      createdAt: new Date().toISOString()
    };
    setConsultations(prev => [newRecord, ...prev]);
    return id;
  };

  const updateConsultationStatus = (id: string, status: ConsultationRequest['status'], adminNotes?: string) => {
    setConsultations(prev => prev.map(c => c.id === id ? { ...c, status, adminNotes: adminNotes ?? c.adminNotes } : c));
  };

  const deleteConsultation = (id: string) => {
    setConsultations(prev => prev.filter(c => c.id !== id));
  };

  const addInquiry = (data: Omit<ClientCaseInquiry, 'id' | 'createdAt' | 'status'>): string => {
    const id = 'inq-' + Math.floor(100000 + Math.random() * 900000);
    const newRecord: ClientCaseInquiry = {
      ...data,
      id,
      status: 'Pending Review',
      createdAt: new Date().toISOString()
    };
    setInquiries(prev => [newRecord, ...prev]);
    return id;
  };

  const updateInquiryStatus = (id: string, status: ClientCaseInquiry['status'], adminNotes?: string) => {
    setInquiries(prev => prev.map(i => i.id === id ? { ...i, status, adminNotes: adminNotes ?? i.adminNotes } : i));
  };

  const deleteInquiry = (id: string) => {
    setInquiries(prev => prev.filter(i => i.id !== id));
  };

  const addCaseProceedingRecord = (data: Omit<CaseProceedingRecord, 'id' | 'createdAt'>): string => {
    const id = 'case-' + Date.now();
    const newRecord: CaseProceedingRecord = {
      ...data,
      id,
      createdAt: new Date().toISOString()
    };
    setCaseProceedings(prev => [newRecord, ...prev]);
    return id;
  };

  const addProceedingEntry = (caseId: string, entry: { date: string; proceeding: string; nextDate?: string; bench?: string }) => {
    setCaseProceedings(prev => prev.map(c => {
      if (c.id === caseId) {
        const newProc = { id: 'proc-' + Date.now(), ...entry };
        return {
          ...c,
          proceedings: [...c.proceedings, newProc]
        };
      }
      return c;
    }));
  };

  const updateCaseProceedingRecord = (id: string, record: Partial<CaseProceedingRecord>) => {
    setCaseProceedings(prev => prev.map(c => c.id === id ? { ...c, ...record } : c));
  };

  const deleteCaseProceedingRecord = (id: string) => {
    setCaseProceedings(prev => prev.filter(c => c.id !== id));
  };

  const resetToDefaults = () => {
    setFirmProfile(INITIAL_FIRM_PROFILE);
    setServices(INITIAL_SERVICES);
    setConsultations(INITIAL_CONSULTATIONS);
    setCaseProceedings(INITIAL_CASE_PROCEEDINGS);
    localStorage.clear();
  };

  const exportDataJson = (): string => {
    return JSON.stringify({
      firmProfile,
      services,
      consultations,
      inquiries,
      caseProceedings,
      exportedAt: new Date().toISOString()
    }, null, 2);
  };

  const importDataJson = (jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.firmProfile) setFirmProfile(parsed.firmProfile);
      if (parsed.services) setServices(parsed.services);
      if (parsed.consultations) setConsultations(parsed.consultations);
      if (parsed.inquiries) setInquiries(parsed.inquiries);
      if (parsed.caseProceedings) setCaseProceedings(parsed.caseProceedings);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  return (
    <FirmContext.Provider value={{
      firmProfile,
      services,
      consultations,
      inquiries,
      caseProceedings,
      updateFirmProfile,
      addService,
      updateService,
      deleteService,
      addConsultation,
      updateConsultationStatus,
      deleteConsultation,
      addInquiry,
      updateInquiryStatus,
      deleteInquiry,
      addCaseProceedingRecord,
      addProceedingEntry,
      updateCaseProceedingRecord,
      deleteCaseProceedingRecord,
      resetToDefaults,
      exportDataJson,
      importDataJson,
      selectedServiceModal,
      setSelectedServiceModal,
      isConsultationModalOpen,
      setIsConsultationModalOpen,
      consultationPreselectedService,
      setConsultationPreselectedService,
      isCaseTrackerModalOpen,
      setIsCaseTrackerModalOpen
    }}>
      {children}
    </FirmContext.Provider>
  );
};

export const useFirm = () => {
  const context = useContext(FirmContext);
  if (!context) {
    throw new Error('useFirm must be used within a FirmProvider');
  }
  return context;
};

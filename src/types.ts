export type ServiceCategory = 
  | 'litigation' 
  | 'corporate' 
  | 'taxation' 
  | 'immigration' 
  | 'ip' 
  | 'trade_ngo' 
  | 'other';

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  iconName: string;
  shortDescription: string;
  fullDescription: string;
  responsibleAdvocate?: string; // Strictly 'Kamran Abro, Advocate' for civil/criminal
  keyOfferings: string[];
  applicableCourts?: string;
  isPopular?: boolean;
}

export type LegalService = ServiceItem;

export interface OfficeLocation {
  city: 'Quetta' | 'Islamabad';
  title: string;
  address: string;
  landmark?: string;
  phoneNumbers: string[];
  email: string;
  hours: string;
  mapEmbedUrl?: string;
}

export interface FirmProfile {
  name: string;
  regNumber: string;
  ntnNumber: string;
  tagline: string;
  heroHeadline: string;
  heroSubtitle: string;
  ceo: {
    name: string;
    title: string;
    roleDescription: string;
    statement: string;
    bio?: string;
  };
  primaryAdvocate: {
    name: string;
    title: string;
    specialization: string;
    statement: string;
    bio?: string;
  };
  offices: OfficeLocation[];
  websiteUrl: string;
  primaryEmail: string;
}

export interface ConsultationRequest {
  id: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  city: string;
  serviceRequired: string;
  caseType: string;
  briefDescription: string;
  preferredDate: string;
  preferredTime: string;
  status: 'New' | 'Contacted' | 'Scheduled' | 'Completed' | 'Archived' | 'pending' | 'scheduled' | 'completed' | 'cancelled';
  createdAt: string;
  adminNotes?: string;
}

export interface ClientCaseInquiry {
  id: string;
  clientName: string;
  contactNumber: string;
  email: string;
  city: string;
  courtTribunal: string;
  caseType: string;
  caseReference: string;
  briefCaseDetails: string;
  requiredLegalService: string;
  status: 'Pending Review' | 'In Analysis' | 'Advocate Assigned' | 'Closed' | 'new' | 'under_review' | 'assigned' | 'closed';
  createdAt: string;
  adminNotes?: string;
}

export interface CaseProceedingRecord {
  id: string;
  clientName: string;
  contactNumber?: string;
  caseNo: string;
  caseTitle: string;
  courtTribunal: string;
  city: string;
  defenceCouncil?: string;
  appointedCouncil: string; // e.g. 'Kamran Abro, Advocate'
  eIdNumber?: string;
  referralNo?: string;
  serviceCategory?: string;
  caseType?: string;
  status?: 'Active' | 'Under Hearing' | 'Reserved for Judgment' | 'Disposed';
  proceedings: {
    id?: string;
    date: string;
    proceeding: string;
    nextDate?: string;
    bench?: string;
  }[];
  createdAt?: string;
}

export type CaseProceedingDocket = CaseProceedingRecord;

import { FirmProfile, ServiceItem, CaseProceedingRecord } from '../types';

export const INITIAL_FIRM_PROFILE: FirmProfile = {
  name: 'IDEAL INTERNATIONAL LAW FIRM AND CONSULTANCY',
  regNumber: 'RF/ICT/2871 of 2017',
  ntnNumber: '5558740',
  tagline: 'Professional Legal Representation & Corporate Consultancy Services',
  heroHeadline: 'IDEAL INTERNATIONAL LAW FIRM AND CONSULTANCY',
  heroSubtitle: 'Professional Legal & Consultancy Services',
  ceo: {
    name: 'H D AZAD',
    title: 'CEO',
    roleDescription: 'Chief Executive Officer & Head of Firm',
    statement: 'At IDEAL INTERNATIONAL LAW FIRM AND CONSULTANCY, our foremost commitment is to deliver unwavering integrity, strategic acumen, and exceptional legal counsel to individuals, corporate enterprises, and institutions across Pakistan and internationally.'
  },
  primaryAdvocate: {
    name: 'Kamran Abro',
    title: 'Advocate',
    specialization: 'Civil Law & Criminal Law Practice',
    statement: 'Dedicated to resolute courtroom advocacy, meticulous case preparation, and defending our clients’ legal rights with procedural excellence before Civil, Session, and High Courts.'
  },
  offices: [
    {
      city: 'Quetta',
      title: 'Quetta Principal Office',
      address: 'Office # T1 KFK Business Center, Manan Chowk, Quetta, Balochistan, Pakistan',
      landmark: 'Manan Chowk Commercial District',
      phoneNumbers: ['0304-8440932', '0306-3020227'],
      email: 'iilf404@gmail.com',
      hours: 'Monday – Saturday: 9:00 AM – 7:00 PM (Friday break 1:00 PM - 3:00 PM)',
      mapEmbedUrl: 'https://maps.google.com/maps?q=Manan+Chowk+Quetta&t=&z=15&ie=UTF8&iwloc=&output=embed'
    },
    {
      city: 'Islamabad',
      title: 'Islamabad Capital Office',
      address: 'Chamber # 2, Football Ground Street # 6, Anwar Block, F-8, Islamabad, Pakistan',
      landmark: 'Adjacent to F-8 District & Judicial Complex',
      phoneNumbers: ['0311-1005727'],
      email: 'iilf404@gmail.com',
      hours: 'Monday – Saturday: 10:00 AM – 6:00 PM',
      mapEmbedUrl: 'https://maps.google.com/maps?q=Anwar+Block+F-8+Islamabad&t=&z=15&ie=UTF8&iwloc=&output=embed'
    }
  ],
  websiteUrl: 'www.iilf.pk',
  primaryEmail: 'iilf404@gmail.com'
};

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: 'civil-law',
    title: 'Civil Law',
    category: 'litigation',
    iconName: 'Scale',
    shortDescription: 'Civil litigation, disputes, property-related matters, contracts, recovery proceedings, and execution matters.',
    fullDescription: 'Comprehensive civil legal services covering civil litigation, title & property disputes, contract enforcement, recovery proceedings, injunctions, declarations, and appeals before competent civil courts and appellate forums.',
    responsibleAdvocate: 'Kamran Abro, Advocate',
    keyOfferings: [
      'Civil Suits for Declaration, Possession & Injunction',
      'Property, Land & Real Estate Disputes',
      'Specific Performance & Breach of Contracts',
      'Recovery Suits & Financial Claims',
      'Rent Disputes & Eviction Matters',
      'Civil Appeals, Revisions & Execution Proceedings'
    ],
    applicableCourts: 'Civil Courts, District & Sessions Courts, High Court',
    isPopular: true
  },
  {
    id: 'criminal-law',
    title: 'Criminal Law',
    category: 'litigation',
    iconName: 'ShieldAlert',
    shortDescription: 'Criminal litigation, bail matters, criminal defense, complaints, trial proceedings, and appeals.',
    fullDescription: 'Resolute criminal defense and trial representation across all stages of criminal proceedings including pre-arrest/post-arrest bail, FIR quashing, trials before magistrate and session courts, criminal revisions, and High Court appeals.',
    responsibleAdvocate: 'Kamran Abro, Advocate',
    keyOfferings: [
      'Pre-Arrest, Post-Arrest & Protective Bail Petitions',
      'Trial Defense in Sessions & Magistrate Courts',
      'FIR Lodging, Quashing & Police Complaints (Sec 22-A/22-B)',
      'Criminal Appeals, Revisions & Writ Petitions',
      'Cross-Examination & Evidentiary Defense',
      'Anti-Corruption & Special Court Proceedings'
    ],
    applicableCourts: 'Magistrate Courts, Sessions Courts, Special Courts, High Court',
    isPopular: true
  },
  {
    id: 'banking-law',
    title: 'Banking Law',
    category: 'litigation',
    iconName: 'Landmark',
    shortDescription: 'Legal consultancy and representation relating to banking matters, financial disputes, and recovery documentation.',
    fullDescription: 'Advisory and litigation support in banking transactions, loan defaults, recovery suits under the Financial Institutions (Recovery of Finances) Ordinance, banking documentation, and State Bank compliance.',
    keyOfferings: [
      'Banking Court Litigation & Defense',
      'Recovery Suits under FIO 2001',
      'Financial Documentation, Mortgages & Hypothecations',
      'Settlement Negotiations & Loan Restructuring',
      'Negotiable Instruments & Cheque Dishonour (489-F PPC)',
      'Regulatory Compliance with SBP Directives'
    ],
    applicableCourts: 'Banking Courts, High Court Appellate Benches'
  },
  {
    id: 'family-law',
    title: 'Family Law',
    category: 'litigation',
    iconName: 'Users',
    shortDescription: 'Legal assistance in family matters, matrimonial disputes, maintenance, custody, and succession proceedings.',
    fullDescription: 'Compassionate yet firm legal assistance in marital disputes, dissolution of marriage (Khula/Talaq), child custody, guardianship, maintenance claims, dowry article recovery, and succession certificate petitions.',
    keyOfferings: [
      'Dissolution of Marriage (Khula / Divorce)',
      'Child Custody & Visitation Rights Petitions',
      'Maintenance Suits (Wife & Minor Maintenance)',
      'Recovery of Dowry Articles & Dower Amount (Haq Mehr)',
      'Succession Certificates & Letters of Administration',
      'Guardianship Proceedings before Guardian Judges'
    ],
    applicableCourts: 'Family Courts, Guardian Courts, Civil Courts'
  },
  {
    id: 'cyber-law',
    title: 'Cyber Law',
    category: 'litigation',
    iconName: 'ShieldCheck',
    shortDescription: 'Cybercrime defense, online offences, digital disputes, electronic evidence, and social-media legal issues.',
    fullDescription: 'Specialized legal representation under the Prevention of Electronic Crimes Act (PECA), digital defamation, online fraud, cyber harassment, electronic evidence admissibility, and FIA Cyber Crime Wing proceedings.',
    keyOfferings: [
      'Proceedings under PECA 2016',
      'FIA Cyber Crime Inquiries & Defenses',
      'Online Defamation & Social Media Harassment',
      'Digital Evidence Analysis & Evidentiary Objections',
      'Data Privacy, Unauthorized Access & Data Theft',
      'E-Commerce & Digital Contract Disputes'
    ],
    applicableCourts: 'Special Cyber Courts, Sessions Courts, High Court'
  },
  {
    id: 'tribunal-matters',
    title: 'Tribunal Matters',
    category: 'litigation',
    iconName: 'Gavel',
    shortDescription: 'Representation and legal consultancy before relevant tribunals and quasi-judicial forums.',
    fullDescription: 'Dedicated legal representation before administrative, service, environmental, tax, and specialized quasi-judicial tribunals across provincial and federal jurisdictions.',
    keyOfferings: [
      'Service Tribunal Matters (Balochistan & Federal)',
      'Appellate Tribunals (Inland Revenue & Customs)',
      'Environmental Protection Tribunals',
      'Labour Courts & Industrial Relations Tribunals',
      'Consumer Protection Courts & Redressal',
      'Quasi-Judicial Departmental Inquiries'
    ],
    applicableCourts: 'Service Tribunals, ATIR, Customs Appellate Tribunal, Labour Courts'
  },
  {
    id: 'public-litigation',
    title: 'Public Litigation',
    category: 'litigation',
    iconName: 'Globe',
    shortDescription: 'Legal representation and consultancy concerning public-interest and constitutional public-law litigation.',
    fullDescription: 'Constitutional law practice encompassing Writ Petitions under Article 199 of the Constitution of Pakistan, enforcement of fundamental rights, judicial review of executive actions, and public interest litigation.',
    keyOfferings: [
      'Constitutional Writ Petitions (Article 199)',
      'Public Interest Litigation for Civil Rights',
      'Judicial Review of Arbitrary Administrative Actions',
      'Challenging Ultra Vires Notifications & Policies',
      'Habeas Corpus & Illegal Detention Petitions',
      'Statutory Authority Accountability Matters'
    ],
    applicableCourts: 'High Court of Balochistan, Islamabad High Court, Supreme Court'
  },
  {
    id: 'legal-research',
    title: 'Legal Research',
    category: 'litigation',
    iconName: 'FileSearch',
    shortDescription: 'Case-law research, statutory analysis, authoritative legal opinions, and research dossiers.',
    fullDescription: 'Meticulous legal research and preparation of comprehensive legal opinions, precedent analysis, statutory interpretation briefs, and legislative vetting for corporate entities and individual litigants.',
    keyOfferings: [
      'Statutory & Constitutional Law In-depth Research',
      'Superior Court Precedent Dossiers (SCMR, PLD, CLD, PTD)',
      'Formal Written Legal Opinions & Feasibility Studies',
      'Legislative Drafting & Policy Vetting',
      'Regulatory Due Diligence & Gap Analysis',
      'Jurisdictional Risk Assessments'
    ]
  },
  {
    id: 'company-services',
    title: 'Company Services',
    category: 'corporate',
    iconName: 'Building2',
    shortDescription: 'Company formation, SECP corporate documentation, compliance support, and enterprise legal structuring.',
    fullDescription: 'End-to-end corporate services including incorporation of private/public limited companies with SECP, single-member companies (SMC), foreign subsidiary registration, annual statutory filings, and secretarial compliance.',
    keyOfferings: [
      'SECP Company Incorporation (Pvt Ltd, Public, SMC)',
      'Drafting Memorandum & Articles of Association (MoA / AoA)',
      'Statutory Returns Filing (Form 29, Form A, Form 21)',
      'Share Transfer, Capital Increase & Allotment Documentation',
      'Corporate Governance & Board Resolutions',
      'Foreign Direct Investment (FDI) & Branch Office Setup'
    ],
    isPopular: true
  },
  {
    id: 'firm-consultancy',
    title: 'Firm / Business Consultancy',
    category: 'corporate',
    iconName: 'Briefcase',
    shortDescription: 'Legal consultancy for partnership firms, businesses, entrepreneurs, startups, and commercial entities.',
    fullDescription: 'Strategic legal counsel for partnership registrations with Registrar of Firms, joint ventures, franchise arrangements, vendor contracts, regulatory licensing, and organizational structuring.',
    keyOfferings: [
      'Partnership Deed Drafting & Registrar of Firms Registration (Form C)',
      'Joint Venture Agreements & Strategic Alliances',
      'Business Restructuring, Dissolution & Asset Settlement',
      'Franchise, Agency & Distribution Agreements',
      'Vendor Agreements & Procurement Policies',
      'Commercial Lease & Premises Acquisition Contracts'
    ]
  },
  {
    id: 'corporate-legal',
    title: 'Corporate Legal Services',
    category: 'corporate',
    iconName: 'FileCheck',
    shortDescription: 'Corporate agreements, contracts, commercial disputes, corporate documentation, and ongoing legal advisory.',
    fullDescription: 'Full-spectrum corporate legal retainer services offering contract lifecycle management, dispute mediation, corporate governance oversight, employment law compliance, and commercial representation.',
    keyOfferings: [
      'Non-Disclosure (NDA), SLA & Master Service Agreements',
      'Employment Contracts, HR Policies & Labour Compliance',
      'Mergers, Acquisitions & Corporate Due Diligence',
      'Commercial Arbitration & Out-of-Court Dispute Settlement',
      'Corporate Retainer Services for Companies & Institutions',
      'Legal Risk Audits & Compliance Reviews'
    ],
    isPopular: true
  },
  {
    id: 'income-tax',
    title: 'Income Tax',
    category: 'taxation',
    iconName: 'Receipt',
    shortDescription: 'Legal and consultancy services relating to direct income-tax matters, NTN registration, and FBR proceedings.',
    fullDescription: 'Comprehensive direct tax consultancy, National Tax Number (NTN) registration, annual income tax return filings for individuals/companies, withholding tax compliance, and representation in FBR audit notices.',
    keyOfferings: [
      'NTN Registration for Salaried, Business & Companies',
      'Annual Income Tax Return Preparation & Iris E-filing',
      'Handling FBR Audit Notices (Section 122 / 177 / 214C)',
      'Tax Exemption Certificates & Withholding Tax Statements',
      'Appeals before Commissioner Inland Revenue (Appeals)',
      'Tax Planning & Strategic Wealth Reconciliation'
    ],
    isPopular: true
  },
  {
    id: 'sales-tax',
    title: 'Sales Tax',
    category: 'taxation',
    iconName: 'Calculator',
    shortDescription: 'Sales tax registration (STRN), provincial revenue authority filings (BRA/SRB/PRA/FBR), and audit defense.',
    fullDescription: 'Advisory and compliance for sales tax on goods (FBR) and services (Balochistan Revenue Authority - BRA, SRB, PRA, KPRA), monthly return filing, input tax adjustments, and sales tax adjudication.',
    keyOfferings: [
      'Sales Tax Registration (STRN / Sales Tax on Services)',
      'BRA / FBR Monthly Sales Tax Returns Filing',
      'Input Tax Adjustment & Refund Processing',
      'Show-Cause Notices & Assessment Orders Defense',
      'Appellate Representation before ATIR & High Court Benches',
      'Sales Tax Invoicing & Point-of-Sale (POS) Compliance'
    ]
  },
  {
    id: 'customs',
    title: 'Customs',
    category: 'taxation',
    iconName: 'Truck',
    shortDescription: 'Legal consultancy and assistance relating to customs valuation, clearance disputes, classification, and proceedings.',
    fullDescription: 'Specialized legal support in customs clearance disputes, tariff classification, valuation adjudication (Section 25/25A Customs Act), seizure & contravention cases, and Customs Appellate Tribunal proceedings.',
    keyOfferings: [
      'Customs Classification & Tariff Adjudication',
      'Handling Seizure, Confiscation & Contravention Reports',
      'Customs Duty Valuation Rulings & Challenges',
      'Representation before Collector of Customs (Adjudication)',
      'Customs Appellate Tribunal Appeals & Writ Petitions',
      'Cross-Border Trade Duty Optimization & Bonded Warehousing'
    ]
  },
  {
    id: 'visa-services',
    title: 'Visa Services',
    category: 'immigration',
    iconName: 'PlaneTakeoff',
    shortDescription: 'Visa-related legal consultancy, business/work visa documentation, appeals, and overseas immigration advisory.',
    fullDescription: 'Professional legal guidance on business visas, work permits, extension of stay, family reunification, visitor visas, student visas, and legal documentation for foreign nationals visiting Pakistan or Pakistanis travelling abroad.',
    keyOfferings: [
      'Business & Commercial Visa Legal Documentation',
      'Work Permits & Expatriate Entry Approvals',
      'Visa Extensions & Overstay Regularization',
      'Immigration Appeals & Refusal Review Dossiers',
      'Notarized Legal Sponsorships & Affidavits',
      'Overseas Legal Documentation & Embassy Attestations'
    ]
  },
  {
    id: 'nationality-services',
    title: 'Nationality & Citizenship',
    category: 'immigration',
    iconName: 'Passport',
    shortDescription: 'Legal consultancy regarding nationality, dual citizenship, POC cards, NADRA matters, and naturalization.',
    fullDescription: 'Comprehensive legal assistance for Pakistani citizenship, dual nationality certification, Pakistan Origin Cards (POC), NICOP, NADRA cancellation/correction disputes, and naturalization procedures.',
    keyOfferings: [
      'Dual Nationality Legal Advisory & Applications',
      'Pakistan Origin Card (POC) & NICOP Legal Assistance',
      'NADRA Blocked CNIC Inquiries & Court Remedies',
      'Citizenship Renunciation & Re-acquisition Processes',
      'Cross-Border Marriage & Child Citizenship Registration',
      'Legal Representation in Ministry of Interior Matters'
    ]
  },
  {
    id: 'ipo-services',
    title: 'Intellectual Property (IPO)',
    category: 'ip',
    iconName: 'Stamp',
    shortDescription: 'Intellectual Property Organization (IPO Pakistan) services: trademark registration, copyright, and brand protection.',
    fullDescription: 'Full protection of intellectual assets through IPO Pakistan: trademark search, trademark filing, opposition proceedings, copyright registration for software/literary/artistic works, and brand enforcement.',
    keyOfferings: [
      'Trademark Search, Clearance & Classification',
      'IPO Pakistan Trademark Filing & Prosecution',
      'Trademark Opposition & Rectification Proceedings',
      'Copyright Registration (Software, Literary, Artistic)',
      'Anti-Counterfeiting & Brand Infringement Notices',
      'IP Licensing & Assignment Agreements'
    ]
  },
  {
    id: 'patent-services',
    title: 'Patent Law',
    category: 'ip',
    iconName: 'Lightbulb',
    shortDescription: 'Patent-related legal consultancy, patent searches, specification drafting, and patent prosecution.',
    fullDescription: 'Strategic patent protection for technological, mechanical, chemical, and industrial innovations. Handling prior-art searches, complete specification drafting, PCT national phase entries, and patent defense.',
    keyOfferings: [
      'Patentability Searches & Prior-Art Assessments',
      'Patent Specification & Claims Drafting',
      'Filing with Patent Office of Pakistan',
      'Response to Official Examination Reports (FER)',
      'Design Registration for Industrial Shapes & Aesthetics',
      'Patent Enforcement & Infringement Litigation'
    ]
  },
  {
    id: 'ngo-npo-services',
    title: 'NGO / NPO Services',
    category: 'trade_ngo',
    iconName: 'HeartHandshake',
    shortDescription: 'Establishment, registration, documentation, PCP certification, and compliance for non-profit organizations.',
    fullDescription: 'End-to-end legal support for non-governmental organizations (NGOs), non-profits under Section 42 of Companies Act, Societies Registration Act 1860, Voluntary Social Welfare Agencies, and Trust Act registrations.',
    keyOfferings: [
      'Section 42 License & SECP Non-Profit Company Setup',
      'Registration under Societies Act 1860 & Trust Act',
      'EAD (Economic Affairs Division) MoUs & Foreign Funding Approvals',
      'PCP (Pakistan Centre for Philanthropy) Certification Support',
      'Tax Exemption Status (Section 100C / 2(36) Income Tax Ord)',
      'Annual Statutory Governance & Board Compliance'
    ]
  },
  {
    id: 'weboc-services',
    title: 'WEBOC Services',
    category: 'trade_ngo',
    iconName: 'Layers',
    shortDescription: 'Legal & consultancy assistance for WEBOC user ID registration, customs PSW portal, and international trade documentation.',
    fullDescription: 'Specialized assistance in acquiring and maintaining Web-Based One Customs (WEBOC) and Pakistan Single Window (PSW) IDs for commercial importers, exporters, and clearing agents, including biometrics and customs verifications.',
    keyOfferings: [
      'WEBOC User ID Issuance for Commercial Importers / Exporters',
      'Pakistan Single Window (PSW) Registration & Subscription',
      'Biometric Verification & Collectorate Documentation',
      'WEBOC Account Re-activation & Password Recovery Support',
      'Chamber of Commerce Membership Documentation',
      'Customs Bonded Carrier & Warehouse License Consultancy'
    ]
  },
  {
    id: 'other-services',
    title: 'Other Legal & Consultancy Services',
    category: 'other',
    iconName: 'MoreHorizontal',
    shortDescription: 'Customized legal advisory, regulatory licensing, contract vetting, and general legal consultancy.',
    fullDescription: 'Bespoke legal and management consultancy tailored for institutions, high-net-worth individuals, commercial partnerships, and entities requiring customized legal solutions across Pakistan.',
    keyOfferings: [
      'Bespoke Legal Opinions & Feasibility Documentation',
      'Regulatory Clearances & Government Department Liaisings',
      'Attestation, Notarization & Legal Translation Protocols',
      'Power of Attorney Preparation & High Court Enrolment Procedures',
      'Specialized Arbitration & Mediation Services',
      'Custom Legal Drafting for Unique Business Models'
    ]
  }
];

export const INITIAL_CASE_PROCEEDINGS: CaseProceedingRecord[] = [
  {
    id: 'case-2026-01',
    clientName: 'Abdul Rauf & Sons Trade Ltd.',
    contactNumber: '0300-1234567',
    caseNo: 'CS-482/2026',
    caseTitle: 'Abdul Rauf vs. Federal Board of Revenue & Collector Customs',
    courtTribunal: 'Customs Appellate Tribunal, Quetta Bench',
    city: 'Quetta',
    defenceCouncil: 'State Attorney',
    appointedCouncil: 'Kamran Abro, Advocate',
    eIdNumber: 'E-ID-88210',
    referralNo: 'REF-2026/QTA/104',
    serviceCategory: 'Customs & Taxation',
    status: 'Under Hearing',
    proceedings: [
      {
        id: 'proc-1',
        date: '2026-07-12',
        proceeding: 'Appeal admitted for regular hearing. Record requisitioned from Collectorate.',
        nextDate: '2026-08-04',
        bench: 'Single Bench - Quetta'
      },
      {
        id: 'proc-2',
        date: '2026-08-04',
        proceeding: 'Arguments on interim relief heard. Stay granted against disputed recovery.',
        nextDate: '2026-09-15',
        bench: 'Divisional Bench'
      }
    ],
    createdAt: '2026-07-01'
  },
  {
    id: 'case-2026-02',
    clientName: 'Haji Ghulam Rasool Tareen',
    contactNumber: '0333-7654321',
    caseNo: 'Cr.Misc-119/2026',
    caseTitle: 'Ghulam Rasool vs. The State & Another',
    courtTribunal: 'Court of Additional Sessions Judge-I, Quetta',
    city: 'Quetta',
    appointedCouncil: 'Kamran Abro, Advocate',
    defenceCouncil: 'Public Prosecutor',
    eIdNumber: 'E-ID-91402',
    referralNo: 'REF-2026/CR/089',
    serviceCategory: 'Criminal Law',
    status: 'Active',
    proceedings: [
      {
        id: 'proc-201',
        date: '2026-07-28',
        proceeding: 'Pre-arrest bail petition argued. Ad-interim pre-arrest bail confirmed.',
        nextDate: '2026-08-25',
        bench: 'ASJ-I'
      }
    ],
    createdAt: '2026-07-20'
  },
  {
    id: 'case-2026-03',
    clientName: 'Balochistan Minerals & Logistics Corp',
    contactNumber: '0312-9876543',
    caseNo: 'WP-772/2026',
    caseTitle: 'Balochistan Minerals vs. Ministry of Energy & Province',
    courtTribunal: 'High Court of Balochistan, Quetta',
    city: 'Quetta',
    appointedCouncil: 'Kamran Abro, Advocate',
    defenceCouncil: 'Advocate General Balochistan',
    eIdNumber: 'E-ID-94112',
    referralNo: 'REF-2026/HC/310',
    serviceCategory: 'Public Litigation / Civil Law',
    status: 'Under Hearing',
    proceedings: [
      {
        id: 'proc-301',
        date: '2026-06-18',
        proceeding: 'Notice issued to respondents. Para-wise comments called for.',
        nextDate: '2026-08-30',
        bench: 'DB - Hon. Chief Justice & Judge'
      }
    ],
    createdAt: '2026-06-10'
  }
];

export const INITIAL_CONSULTATIONS = [
  {
    id: 'cons-101',
    fullName: 'Sardar Muhammad Khan',
    phoneNumber: '0300-8877665',
    email: 'sm.khan@business.pk',
    city: 'Quetta',
    serviceRequired: 'Civil Law',
    caseType: 'Property & Title Dispute in Cantt Area',
    briefDescription: 'Need representation in a commercial land declaration suit regarding ancestral ownership papers.',
    preferredDate: '2026-08-20',
    preferredTime: '11:00 AM',
    status: 'Scheduled' as const,
    createdAt: '2026-08-16T10:30:00.000Z',
    adminNotes: 'Assigned for preliminary review with Kamran Abro, Advocate.'
  },
  {
    id: 'cons-102',
    fullName: 'Dr. Ayesha Siddiqui',
    phoneNumber: '0333-5544332',
    email: 'dr.ayesha@healthcorp.org',
    city: 'Islamabad',
    serviceRequired: 'Company Services',
    caseType: 'SECP Non-Profit / Section 42 Registration',
    briefDescription: 'Registering an international medical charity foundation with SECP and EAD approvals.',
    preferredDate: '2026-08-22',
    preferredTime: '03:00 PM',
    status: 'New' as const,
    createdAt: '2026-08-17T09:15:00.000Z'
  }
];

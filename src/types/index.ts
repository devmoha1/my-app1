export type UserRole = 'CANDIDATE' | 'RECRUITER' | 'ADMIN';

export type JobCategory =
  | 'INFORMATIQUE'
  | 'TELECOM'
  | 'BANQUE'
  | 'BTP'
  | 'MARKETING'
  | 'LOGISTIQUE'
  | 'SANTE'
  | 'EDUCATION'
  | 'VENTE'
  | 'RESSOURCES_HUMAINES'
  | 'FINANCE'
  | 'AUTRE';

export type ContractType = 'CDI' | 'CDD' | 'STAGE' | 'FREELANCE' | 'ALTERNANCE';

export type ApplicationStatus = 'PENDING' | 'REVIEWED' | 'REJECTED' | 'ACCEPTED';

export interface User {
  id: string;
  email: string;
  name?: string;
  image?: string;
  phone?: string;
  bio?: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export interface CandidateProfile {
  id: string;
  userId: string;
  cvUrl?: string;
  headline?: string;
  location?: string;
  category?: string;
  experience?: string;
  education?: string;
  skills: string[];
  lookingForJob: boolean;
}

export interface RecruiterProfile {
  id: string;
  userId: string;
  companyId?: string;
  jobTitle?: string;
  department?: string;
}

export interface Company {
  id: string;
  name: string;
  slug: string;
  description?: string;
  logo?: string;
  website?: string;
  email?: string;
  phone?: string;
  location: string;
  employeeCount?: string;
  industry?: string;
  ownerId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Job {
  id: string;
  title: string;
  slug: string;
  description: string;
  requirements: string[];
  benefits: string[];
  category: JobCategory;
  location: string;
  salary?: number;
  salaryMax?: number;
  contractType: ContractType;
  companyId: string;
  company?: Company;
  published: boolean;
  featured: boolean;
  viewCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Application {
  id: string;
  jobId: string;
  job?: Job;
  candidateId: string;
  candidate?: User & { candidateProfile?: CandidateProfile };
  cvUrl?: string;
  coverLetter?: string;
  status: ApplicationStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface SavedJob {
  id: string;
  jobId: string;
  job?: Job;
  userId: string;
  createdAt: Date;
}

export interface SessionUser {
  id: string;
  email: string;
  name?: string;
  image?: string;
  role: UserRole;
}

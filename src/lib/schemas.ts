import * as z from 'zod';

// Authentication schemas
export const SignUpSchema = z.object({
  email: z
    .string()
    .email('Email invalide')
    .toLowerCase(),
  password: z
    .string()
    .min(8, 'Le mot de passe doit avoir au moins 8 caractères')
    .regex(/[A-Z]/, 'Le mot de passe doit contenir une majuscule')
    .regex(/[0-9]/, 'Le mot de passe doit contenir un chiffre'),
  confirmPassword: z.string(),
  name: z
    .string()
    .min(2, 'Le nom doit avoir au moins 2 caractères'),
  role: z.enum(['CANDIDATE', 'RECRUITER']),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Les mots de passe ne correspondent pas',
  path: ['confirmPassword'],
});

export const SignInSchema = z.object({
  email: z
    .string()
    .email('Email invalide')
    .toLowerCase(),
  password: z.string().min(1, 'Le mot de passe est requis'),
});

// Job schemas
export const JobSchema = z.object({
  title: z
    .string()
    .min(5, 'Le titre doit avoir au moins 5 caractères')
    .max(100, 'Le titre ne doit pas dépasser 100 caractères'),
  description: z
    .string()
    .min(50, 'La description doit avoir au moins 50 caractères'),
  requirements: z
    .array(z.string())
    .min(1, 'Au moins une exigence est requise'),
  benefits: z.array(z.string()).optional(),
  category: z.enum([
    'INFORMATIQUE',
    'TELECOM',
    'BANQUE',
    'BTP',
    'MARKETING',
    'LOGISTIQUE',
    'SANTE',
    'EDUCATION',
    'VENTE',
    'RESSOURCES_HUMAINES',
    'FINANCE',
    'AUTRE',
  ]),
  location: z
    .enum(['Dakar', 'Pikine', 'Guédiawaye', 'Rufisque', 'Thiès'])
    .or(z.string()),
  salary: z.coerce.number().optional(),
  salaryMax: z.coerce.number().optional(),
  contractType: z.enum(['CDI', 'CDD', 'STAGE', 'FREELANCE', 'ALTERNANCE']),
});

export const JobSearchSchema = z.object({
  search: z.string().optional(),
  category: z.string().optional(),
  location: z.string().optional(),
  contractType: z.string().optional(),
  salaryMin: z.coerce.number().optional(),
  salaryMax: z.coerce.number().optional(),
  page: z.coerce.number().default(1),
  limit: z.coerce.number().default(10),
});

// Application schemas
export const ApplicationSchema = z.object({
  jobId: z.string(),
  coverLetter: z.string().optional(),
  cvUrl: z.string().optional(),
});

// User profile schemas
export const CandidateProfileSchema = z.object({
  headline: z.string().optional(),
  location: z.string().optional(),
  category: z.string().optional(),
  experience: z.string().optional(),
  education: z.string().optional(),
  skills: z.array(z.string()).optional(),
  lookingForJob: z.boolean().optional(),
});

export const RecruiterProfileSchema = z.object({
  jobTitle: z.string().optional(),
  department: z.string().optional(),
});

// Company schemas
export const CompanySchema = z.object({
  name: z.string().min(2, 'Le nom doit avoir au moins 2 caractères'),
  description: z.string().optional(),
  website: z.string().url().optional().or(z.literal('')),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  location: z.string(),
  employeeCount: z.string().optional(),
  industry: z.string().optional(),
});

// Export types
export type SignUpInput = z.infer<typeof SignUpSchema>;
export type SignInInput = z.infer<typeof SignInSchema>;
export type JobInput = z.infer<typeof JobSchema>;
export type JobSearchInput = z.infer<typeof JobSearchSchema>;
export type ApplicationInput = z.infer<typeof ApplicationSchema>;
export type CandidateProfileInput = z.infer<typeof CandidateProfileSchema>;
export type RecruiterProfileInput = z.infer<typeof RecruiterProfileSchema>;
export type CompanyInput = z.infer<typeof CompanySchema>;

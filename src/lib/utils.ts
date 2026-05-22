import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const LOCATIONS = ['Dakar', 'Pikine', 'Guédiawaye', 'Rufisque', 'Thiès'];

export const CATEGORIES = [
  { value: 'INFORMATIQUE', label: 'Informatique' },
  { value: 'TELECOM', label: 'Télécom' },
  { value: 'BANQUE', label: 'Banque' },
  { value: 'BTP', label: 'BTP' },
  { value: 'MARKETING', label: 'Marketing' },
  { value: 'LOGISTIQUE', label: 'Logistique' },
  { value: 'SANTE', label: 'Santé' },
  { value: 'EDUCATION', label: 'Éducation' },
  { value: 'VENTE', label: 'Vente' },
  { value: 'RESSOURCES_HUMAINES', label: 'Ressources Humaines' },
  { value: 'FINANCE', label: 'Finance' },
  { value: 'AUTRE', label: 'Autre' },
];

export const CONTRACT_TYPES = [
  { value: 'CDI', label: 'CDI' },
  { value: 'CDD', label: 'CDD' },
  { value: 'STAGE', label: 'Stage' },
  { value: 'FREELANCE', label: 'Freelance' },
  { value: 'ALTERNANCE', label: 'Alternance' },
];

export const APPLICATION_STATUS = {
  PENDING: 'En attente',
  REVIEWED: 'Examinée',
  REJECTED: 'Rejetée',
  ACCEPTED: 'Acceptée',
};

export const formatSalary = (salary: number): string => {
  return new Intl.NumberFormat('fr-SN', {
    style: 'currency',
    currency: 'XOF',
    minimumFractionDigits: 0,
  }).format(salary);
};

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

export const truncate = (text: string, length: number): string => {
  return text.length > length ? text.slice(0, length) + '...' : text;
};

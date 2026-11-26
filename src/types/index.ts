export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: ProjectCategory;
  tools: string[];
  status: 'completed' | 'in-progress' | 'planned';
  github?: string;
  live?: string;
  featured: boolean;
  businessProblem: string;
  objectives: string[];
  datasetDescription: string;
  methodology: string[];
  keyFindings: string[];
  businessRecommendations: string[];
  chartData?: Record<string, unknown>;
}

export type ProjectCategory =
  | 'all'
  | 'power-bi'
  | 'sql'
  | 'excel'
  | 'python'
  | 'business-analytics';

export interface Skill {
  name: string;
  description: string;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  type: 'internship' | 'training' | 'employment';
  startDate: string;
  endDate: string | null;
  location: string;
  description: string[];
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  graduation: string;
  cgpa?: string;
  highlights: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
  image?: string;
  status: 'verified' | 'pending-verification';
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

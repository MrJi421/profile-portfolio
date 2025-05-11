export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  thumbnailUrl: string;
  dataAiHint?: string; // For next/image placeholder AI hint
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
  category?: string;
  icon?: React.ComponentType<{ className?: string }>;
  date?: string; // Expected completion or completion date
}

export interface Skill {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  level?: string; // e.g., "Advanced", "Intermediate", or specific from resume
  category?: string; // e.g., "Machine Learning & Data Analysis", "Programming & Development"
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  duration: string;
  descriptionPoints: string[];
  logoUrl?: string; // Optional company logo
  dataAiHint?: string; // For logo placeholder
  tags?: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  institutionUrl?: string;
  degree: string;
  fieldOfStudy?: string;
  duration: string; // Changed to reflect "Expected July 2025"
  description?: string;
  logoUrl?: string; // Optional institution logo
  dataAiHint?: string; // For logo placeholder
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date?: string; // Optional: if a date is relevant like "Issued May 2024"
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  url?: string; // Optional link to certificate
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date?: string;
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  issuer?: string; // e.g., Kristu Jayanti College
}

export interface LeadershipRole {
  id: string;
  role: string;
  organization: string;
  duration?: string; // Optional duration for the role
  description: string;
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

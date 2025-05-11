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
}

export interface Skill {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  level?: string; // e.g., "Advanced", "Intermediate", or a percentage for a progress bar
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
  duration: string;
  description?: string;
  logoUrl?: string; // Optional institution logo
  dataAiHint?: string; // For logo placeholder
}

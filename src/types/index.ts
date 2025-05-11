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

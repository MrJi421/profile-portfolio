'use client';

import { useState, useTransition } from 'react';
import SectionWrapper from '@/components/layout/section-wrapper';
import ProjectGrid from '@/components/projects/project-grid';
import { mockProjects, mockUserHistory } from '@/lib/data';
import type { Project } from '@/types';
import { Button } from '@/components/ui/button';
import { curateProjects } from '@/ai/flows/curate-projects';
import { Wand2, RotateCcw } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import FadeIn from '@/components/shared/fade-in'; // Added FadeIn

const ProjectsSection = () => {
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>(mockProjects);
  const [isCurated, setIsCurated] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const formatProjectsForAI = (projects: Project[]): string => {
    return projects
      .map(p => `Project ID: ${p.id}, Title: ${p.title}, Description: ${p.description}, Tags: ${p.tags.join(', ')}, Category: ${p.category || 'N/A'}, Date: ${p.date || 'N/A'}`)
      .join('; ');
  };

  const handleCurateProjects = async () => {
    startTransition(async () => {
      try {
        toast({
          title: "Curating Projects ✨",
          description: `Finding the best projects for you...`,
        });
        const availableProjectsString = formatProjectsForAI(mockProjects);
        const result = await curateProjects({
          userHistory: mockUserHistory, 
          availableProjects: availableProjectsString,
        });
        
        const curatedIds = result.curatedProjects.split(',').map(id => id.trim());
        const newDisplayedProjects = mockProjects.filter(p => curatedIds.includes(p.id));
        
        const orderedProjects = curatedIds
          .map(id => newDisplayedProjects.find(p => p.id === id))
          .filter((p): p is Project => Boolean(p));

        setDisplayedProjects(orderedProjects.length > 0 ? orderedProjects : mockProjects);
        setIsCurated(true);
        toast({
          title: "Projects Curated! 🪄",
          description: "Tailored the project list based on relevance.",
          variant: "default", 
        });
      } catch (error) {
        console.error('Error curating projects:', error);
        setDisplayedProjects(mockProjects);
        toast({
          title: "Curation Failed 😔",
          description: "Something went wrong. Showing all projects instead.",
          variant: "destructive",
        });
      }
    });
  };

  const handleResetProjects = () => {
    setDisplayedProjects(mockProjects);
    setIsCurated(false);
    toast({
      title: "Projects Reset",
      description: "Showing all available projects.",
    });
  };

  return (
    <SectionWrapper id="projects" className="bg-background">
      <div className="space-y-8">
        <FadeIn className="text-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">My Projects</h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/80">
            A collection of projects showcasing diverse skills and creative solutions. 
            Use the AI curator to discover projects aligned with my profile!
          </p>
        </FadeIn>
        
        <FadeIn delay={200} className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <Button onClick={handleCurateProjects} disabled={isPending} size="lg" className="shadow-md hover:shadow-lg transition-shadow">
            <Wand2 className="mr-2 h-5 w-5" />
            {isPending ? 'Curating...' : 'AI Curate For Me'}
          </Button>
          {isCurated && (
            <Button onClick={handleResetProjects} disabled={isPending} variant="outline" size="lg" className="shadow-md hover:shadow-lg transition-shadow">
              <RotateCcw className="mr-2 h-5 w-5" />
              Show All Projects
            </Button>
          )}
        </FadeIn>
        
        {/* ProjectGrid itself handles staggered animation for its items */}
        <ProjectGrid projects={displayedProjects} isLoading={isPending && !isCurated} />
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;

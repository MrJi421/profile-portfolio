'use client';

import { useState, useEffect, useTransition } from 'react';
import SectionWrapper from '@/components/layout/section-wrapper';
import ProjectGrid from '@/components/projects/project-grid';
import { mockProjects, mockUserHistory } from '@/lib/data';
import type { Project } from '@/types';
import { Button } from '@/components/ui/button';
import { curateProjects } from '@/ai/flows/curate-projects';
import { Wand2, RotateCcw } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ProjectsSection = () => {
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>(mockProjects);
  const [isCurated, setIsCurated] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  // Format projects for AI
  const formatProjectsForAI = (projects: Project[]): string => {
    return projects
      .map(p => `Project ID: ${p.id}, Title: ${p.title}, Description: ${p.description}, Tags: ${p.tags.join(', ')}, Category: ${p.category}`)
      .join('; ');
  };

  const handleCurateProjects = async () => {
    startTransition(async () => {
      try {
        toast({
          title: "Curating Projects ✨",
          description: "Our AI is finding the best projects for you...",
        });
        const availableProjectsString = formatProjectsForAI(mockProjects);
        const result = await curateProjects({
          userHistory: mockUserHistory,
          availableProjects: availableProjectsString,
        });
        
        // Assuming result.curatedProjects is a string like "proj1,proj3,proj2"
        const curatedIds = result.curatedProjects.split(',').map(id => id.trim());
        const newDisplayedProjects = mockProjects.filter(p => curatedIds.includes(p.id));
        
        // Maintain order from AI if possible, or sort by original order for found IDs
        const orderedProjects = curatedIds
          .map(id => newDisplayedProjects.find(p => p.id === id))
          .filter((p): p is Project => Boolean(p));

        setDisplayedProjects(orderedProjects.length > 0 ? orderedProjects : mockProjects); // Fallback if curation is empty
        setIsCurated(true);
        toast({
          title: "Projects Curated! 🪄",
          description: "We've tailored the project list to your interests.",
          variant: "default", 
        });
      } catch (error) {
        console.error('Error curating projects:', error);
        setDisplayedProjects(mockProjects); // Fallback to all projects on error
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
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">My Adventures</h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/80">
            A collection of projects showcasing diverse skills and creative solutions. 
            Use the AI curator to discover projects aligned with your interests!
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
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
        </div>
        
        <ProjectGrid projects={displayedProjects} isLoading={isPending && !isCurated} />
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;

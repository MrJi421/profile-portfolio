import type { Project } from '@/types';
import ProjectCard from './project-card';
import { Skeleton } from '@/components/ui/skeleton';

interface ProjectGridProps {
  projects: Project[];
  isLoading?: boolean;
}

const ProjectGrid = ({ projects, isLoading = false }: ProjectGridProps) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex flex-col space-y-3">
            <Skeleton className="h-[225px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
            <div className="flex gap-2 pt-2">
              <Skeleton className="h-8 w-1/4" />
              <Skeleton className="h-8 w-1/4" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (projects.length === 0) {
    return <p className="text-center text-lg text-muted-foreground">No projects found matching your criteria.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} delay={index * 100} />
      ))}
    </div>
  );
};

export default ProjectGrid;

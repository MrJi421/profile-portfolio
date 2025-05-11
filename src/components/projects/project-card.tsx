import Image from 'next/image';
import type { Project } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLink, Github, CalendarDays } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const IconComponent = project.icon;

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
      <CardHeader className="p-0 relative">
        <div className="aspect-video w-full relative overflow-hidden">
          <Image
            src={project.thumbnailUrl}
            alt={project.title}
            fill // Changed from layout="fill" objectFit="cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 hover:scale-110"
            data-ai-hint={project.dataAiHint || 'project image'}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6 space-y-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-2xl font-semibold text-primary">{project.title}</CardTitle>
          {IconComponent && <IconComponent className="h-7 w-7 text-accent flex-shrink-0" />}
        </div>
        {project.date && (
          <div className="flex items-center text-xs text-muted-foreground">
            <CalendarDays className="mr-1.5 h-4 w-4" />
            <span>{project.date}</span>
          </div>
        )}
        <CardDescription className="text-foreground/80 min-h-[3em] line-clamp-3">{project.description}</CardDescription>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-accent/20 text-accent-foreground hover:bg-accent/30 transition-colors">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 bg-muted/30 border-t">
        <div className="flex gap-2 w-full">
          {project.liveUrl && (
            <Button asChild variant="default" className="flex-1">
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                View Live <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
          {project.sourceUrl && (
            <Button asChild variant="outline" className="flex-1">
              <Link href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                Source Code <Github className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
          {/* If neither live nor source URL, show a disabled or placeholder button or nothing */}
          {!project.liveUrl && !project.sourceUrl && (
             <Button variant="outline" className="flex-1" disabled>
                Details Unavailable
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

import SectionWrapper from '@/components/layout/section-wrapper';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { mockExperience } from '@/lib/data';
import type { ExperienceItem } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { BriefcaseBusiness, ExternalLink } from 'lucide-react';

const ExperienceCard = ({ item }: { item: ExperienceItem }) => {
  return (
    <Card className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 bg-card/80 backdrop-blur-sm overflow-hidden">
      <CardHeader className="flex flex-row items-start gap-4 space-y-0 p-6">
        {item.logoUrl ? (
          <Image
            src={item.logoUrl}
            alt={`${item.company} logo`}
            width={56}
            height={56}
            className="rounded-md border border-border object-contain aspect-square"
            data-ai-hint={item.dataAiHint || 'company logo'}
          />
        ) : (
          <div className="p-3 bg-muted rounded-md">
            <BriefcaseBusiness className="h-8 w-8 text-muted-foreground" />
          </div>
        )}
        <div className="flex-1">
          <CardTitle className="text-xl font-semibold text-primary">{item.role}</CardTitle>
          {item.companyUrl ? (
            <Link href={item.companyUrl} target="_blank" rel="noopener noreferrer" className="text-md text-accent hover:underline inline-flex items-center">
              {item.company} <ExternalLink className="ml-1.5 h-4 w-4" />
            </Link>
          ) : (
            <p className="text-md text-accent">{item.company}</p>
          )}
          <CardDescription className="text-sm text-foreground/70 mt-1">{item.duration}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <ul className="list-disc list-outside space-y-2 pl-5 text-foreground/80">
          {item.descriptionPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </CardContent>
      {item.tags && item.tags.length > 0 && (
        <CardFooter className="p-6 pt-0 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-accent/20 text-accent-foreground hover:bg-accent/30 transition-colors">
              {tag}
            </Badge>
          ))}
        </CardFooter>
      )}
    </Card>
  );
};

const ExperienceSection = () => {
  return (
    <SectionWrapper id="experience" className="bg-secondary/30">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Work Experience</h2>
        <p className="max-w-2xl mx-auto text-lg text-foreground/80">
          My professional journey and contributions in various roles.
        </p>
      </div>
      <div className="relative space-y-10">
        {/* Optional: Add a timeline line if desired later: 
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border -ml-0.5 hidden md:block" aria-hidden="true"></div>
        */}
        {mockExperience.map((item, index) => (
          <div key={item.id} className="flex md:items-center w-full">
            {/* Optional: Timeline Dot
              <div className="hidden md:flex w-1/2 justify-end">
                {index % 2 === 0 && <div className="w-1/2"></div>}
              </div>
              <div className="hidden md:block relative">
                <div className="h-4 w-4 rounded-full bg-primary border-2 border-card absolute top-1/2 -translate-y-1/2 -translate-x-[calc(50%-1px)]"></div>
              </div>
            */}
            <div className="w-full">
              <ExperienceCard item={item} />
            </div>
             {/* Optional: For alternating sides timeline
              <div className="hidden md:flex w-1/2">
                {index % 2 !== 0 && <div className="w-1/2"></div>}
              </div>
            */}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;

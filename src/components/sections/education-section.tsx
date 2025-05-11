import SectionWrapper from '@/components/layout/section-wrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { mockEducation, personalDetails } from '@/lib/data';
import type { EducationItem } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { GraduationCap, ExternalLink } from 'lucide-react';

const EducationCard = ({ item }: { item: EducationItem }) => {
  return (
    <Card className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 bg-card/80 backdrop-blur-sm overflow-hidden">
      <CardHeader className="flex flex-row items-start gap-4 space-y-0 p-6">
        {item.logoUrl ? (
          <Image
            src={item.logoUrl}
            alt={`${item.institution} logo`}
            width={56}
            height={56}
            className="rounded-md border border-border object-contain aspect-square"
            data-ai-hint={item.dataAiHint || 'institution logo'}
          />
        ) : (
           <div className="p-3 bg-muted rounded-md">
            <GraduationCap className="h-8 w-8 text-muted-foreground" />
          </div>
        )}
        <div className="flex-1">
          <CardTitle className="text-xl font-semibold text-primary">{item.degree}</CardTitle>
          {item.institutionUrl ? (
             <Link href={item.institutionUrl} target="_blank" rel="noopener noreferrer" className="text-md text-accent hover:underline inline-flex items-center">
              {item.institution} {item.fieldOfStudy && `- ${item.fieldOfStudy}`} <ExternalLink className="ml-1.5 h-4 w-4" />
            </Link>
          ) : (
            <p className="text-md text-accent">{item.institution} {item.fieldOfStudy && `- ${item.fieldOfStudy}`}</p>
          )}
          <CardDescription className="text-sm text-foreground/70 mt-1">{item.duration}</CardDescription>
        </div>
      </CardHeader>
      {item.description && (
        <CardContent className="p-6 pt-0">
          <p className="text-foreground/80">{item.description}</p>
        </CardContent>
      )}
    </Card>
  );
};

const EducationSection = () => {
  return (
    <SectionWrapper id="education" className="bg-background">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Education</h2>
        <p className="max-w-2xl mx-auto text-lg text-foreground/80">
          My academic background and qualifications.
        </p>
      </div>
      <div className="space-y-8 max-w-3xl mx-auto">
        {mockEducation.map((item) => (
          <EducationCard key={item.id} item={item} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default EducationSection;

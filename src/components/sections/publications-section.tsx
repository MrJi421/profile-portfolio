import SectionWrapper from '@/components/layout/section-wrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockPublications } from '@/lib/data';
import type { Publication } from '@/types';
import { FileText, Link as LinkIcon } from 'lucide-react';
import FadeIn from '@/components/shared/fade-in';
import Link from 'next/link';

const PublicationCard = ({ item, delay }: { item: Publication; delay: number }) => {
  const IconComponent = item.icon || FileText;
  return (
    <FadeIn delay={delay}>
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 bg-card/80 backdrop-blur-sm">
        <CardHeader className="p-6">
          <div className="flex items-start gap-4">
            <IconComponent className="h-8 w-8 text-accent flex-shrink-0 mt-1" strokeWidth={1.5} />
            <div className="flex-1">
              <CardTitle className="text-xl font-semibold text-primary">{item.title}</CardTitle>
              <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                <Badge variant="secondary" className="text-xs">
                  {item.type}
                </Badge>
                <CardDescription className="text-sm text-foreground/70">
                  {item.date}
                </CardDescription>
              </div>
            </div>
            {item.url && (
              <Link href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`View publication: ${item.title}`}>
                <LinkIcon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-6 pt-0 space-y-3">
          <div>
            <h4 className="text-sm font-medium text-foreground/90">Authors:</h4>
            <p className="text-sm text-foreground/70">{item.authors}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-foreground/90">Venue:</h4>
            <p className="text-sm text-foreground/70">{item.venue}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-foreground/90">Abstract:</h4>
            <p className="text-foreground/80 text-sm">{item.description}</p>
          </div>
        </CardContent>
      </Card>
    </FadeIn>
  );
};

const PublicationsSection = () => {
  if (!mockPublications || mockPublications.length === 0) {
    return null;
  }
  return (
    <SectionWrapper id="publications" className="bg-secondary/30">
      <FadeIn className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Publications & Presentations</h2>
        <p className="max-w-2xl mx-auto text-lg text-foreground/80">
          My contributions to research and knowledge sharing in the field.
        </p>
      </FadeIn>
      <div className="space-y-8 max-w-3xl mx-auto">
        {mockPublications.map((pub, index) => (
          <PublicationCard key={pub.id} item={pub} delay={index * 150} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default PublicationsSection;

import SectionWrapper from '@/components/layout/section-wrapper';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { mockCertifications } from '@/lib/data';
import type { Certification } from '@/types';
import { BadgeCheck, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';
import FadeIn from '@/components/shared/fade-in';

const CertificationCard = ({ certification, delay }: { certification: Certification; delay: number }) => {
  const IconComponent = certification.icon || BadgeCheck;
  return (
    <FadeIn delay={delay}>
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 bg-card/80 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center gap-4 space-y-0 p-4">
          <IconComponent className="h-8 w-8 text-accent flex-shrink-0" strokeWidth={1.5} />
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold text-primary">{certification.name}</CardTitle>
            <CardDescription className="text-sm text-foreground/70">
              Issued by: {certification.issuer}
              {certification.date && ` - ${certification.date}`}
            </CardDescription>
          </div>
          {certification.url && (
            <Link href={certification.url} target="_blank" rel="noopener noreferrer" aria-label={`View certificate for ${certification.name}`}>
              <LinkIcon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          )}
        </CardHeader>
      </Card>
    </FadeIn>
  );
};

const CertificationsSection = () => {
  if (!mockCertifications || mockCertifications.length === 0) {
    return null;
  }

  return (
    <SectionWrapper id="certifications" className="bg-secondary/30">
      <FadeIn className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Certifications & Trainings</h2>
        <p className="max-w-2xl mx-auto text-lg text-foreground/80">
          My professional certifications and completed training programs.
        </p>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {mockCertifications.map((cert, index) => (
          <CertificationCard key={cert.id} certification={cert} delay={index * 100} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default CertificationsSection;

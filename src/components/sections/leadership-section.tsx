import SectionWrapper from '@/components/layout/section-wrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { mockLeadership, personalDetails } from '@/lib/data';
import type { LeadershipRole } from '@/types';
import { Users } from 'lucide-react';

const LeadershipCard = ({ roleItem }: { roleItem: LeadershipRole }) => {
  const IconComponent = roleItem.icon || Users;
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 bg-card/80 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-start gap-4 space-y-0 p-6">
        <IconComponent className="h-10 w-10 text-accent flex-shrink-0 mt-1" strokeWidth={1.5} />
        <div className="flex-1">
          <CardTitle className="text-xl font-semibold text-primary">{roleItem.role}</CardTitle>
          <CardDescription className="text-sm text-foreground/70 mt-1">
            {roleItem.organization}
            {roleItem.duration && ` - ${roleItem.duration}`}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <p className="text-foreground/80">{roleItem.description}</p>
      </CardContent>
    </Card>
  );
};

const LeadershipSection = () => {
  if (!mockLeadership || mockLeadership.length === 0) {
    return null;
  }
  return (
    <SectionWrapper id="leadership" className="bg-secondary/30">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Leadership Roles</h2>
        <p className="max-w-2xl mx-auto text-lg text-foreground/80">
          Positions where I've had the opportunity to lead and contribute to team success.
        </p>
      </div>
      <div className="space-y-8 max-w-3xl mx-auto">
        {mockLeadership.map((roleItem) => (
          <LeadershipCard key={roleItem.id} roleItem={roleItem} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default LeadershipSection;

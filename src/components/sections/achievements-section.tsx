import SectionWrapper from '@/components/layout/section-wrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { mockAchievements } from '@/lib/data';
import type { Achievement } from '@/types';
import { Trophy } from 'lucide-react';
import FadeIn from '@/components/shared/fade-in';

const AchievementCard = ({ achievement, delay }: { achievement: Achievement; delay: number }) => {
  const IconComponent = achievement.icon || Trophy;
  return (
    <FadeIn delay={delay}>
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 bg-card/80 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-start gap-4 space-y-0 p-6">
          <IconComponent className="h-10 w-10 text-accent flex-shrink-0 mt-1" strokeWidth={1.5} />
          <div className="flex-1">
            <CardTitle className="text-xl font-semibold text-primary">{achievement.title}</CardTitle>
            <CardDescription className="text-sm text-foreground/70 mt-1">
              {achievement.issuer && `${achievement.issuer}`}
              {achievement.date && ` - ${achievement.date}`}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <p className="text-foreground/80">{achievement.description}</p>
        </CardContent>
      </Card>
    </FadeIn>
  );
};

const AchievementsSection = () => {
  if (!mockAchievements || mockAchievements.length === 0) {
    return null;
  }
  return (
    <SectionWrapper id="achievements" className="bg-background">
      <FadeIn className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Achievements</h2>
        <p className="max-w-2xl mx-auto text-lg text-foreground/80">
          Recognitions and accomplishments throughout my academic and professional journey.
        </p>
      </FadeIn>
      <div className="space-y-8 max-w-3xl mx-auto">
        {mockAchievements.map((ach, index) => (
          <AchievementCard key={ach.id} achievement={ach} delay={index * 150} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default AchievementsSection;

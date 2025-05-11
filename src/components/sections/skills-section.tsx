import SectionWrapper from '@/components/layout/section-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mockSkills } from '@/lib/data';
import type { Skill } from '@/types';
import { Badge } from '@/components/ui/badge';

const SkillItem = ({ skill }: { skill: Skill }) => {
  const IconComponent = skill.icon;
  return (
    <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 bg-card/80 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <div className="flex justify-center mb-3">
          <IconComponent className="h-10 w-10 text-accent" strokeWidth={1.5} />
        </div>
        <CardTitle className="text-lg font-semibold text-primary">{skill.name}</CardTitle>
      </CardHeader>
      {skill.level && (
         <CardContent className="pb-4">
          <Badge variant="secondary" className="bg-primary/20 text-primary-foreground hover:bg-primary/30 transition-colors text-xs">
            {skill.level}
          </Badge>
        </CardContent>
      )}
    </Card>
  );
};

const SkillsSection = () => {
  return (
    <SectionWrapper id="skills" className="bg-background">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">My Skillset</h2>
        <p className="max-w-2xl mx-auto text-lg text-foreground/80">
          A collection of technologies and tools I excel in, constantly learning and growing.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {mockSkills.map((skill) => (
          <SkillItem key={skill.id} skill={skill} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;

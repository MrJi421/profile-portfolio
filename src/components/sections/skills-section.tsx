import SectionWrapper from '@/components/layout/section-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mockSkills } from '@/lib/data';
import type { Skill } from '@/types';
import { Badge } from '@/components/ui/badge';
import FadeIn from '@/components/shared/fade-in';

const SkillItem = ({ skill, delay }: { skill: Skill; delay: number }) => {
  const IconComponent = skill.icon;
  return (
    <FadeIn delay={delay}>
      <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 bg-card/80 backdrop-blur-sm h-full">
        <CardHeader className="pb-2 pt-4">
          <div className="flex justify-center mb-3">
            <IconComponent className="h-10 w-10 text-accent" strokeWidth={1.5} />
          </div>
          <CardTitle className="text-md font-semibold text-primary">{skill.name}</CardTitle>
        </CardHeader>
        {skill.level && (
           <CardContent className="pb-4">
            <Badge variant="secondary" className="bg-primary/20 text-primary-foreground hover:bg-primary/30 transition-colors text-xs font-medium">
              {skill.level}
            </Badge>
          </CardContent>
        )}
      </Card>
    </FadeIn>
  );
};

const SkillsSection = () => {
  const groupedSkills: { [key: string]: Skill[] } = {};
  mockSkills.forEach(skill => {
    const category = skill.category || 'Other';
    if (!groupedSkills[category]) {
      groupedSkills[category] = [];
    }
    groupedSkills[category].push(skill);
  });

  let itemDelay = 0;

  return (
    <SectionWrapper id="skills" className="bg-background">
      <FadeIn className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Technical Skills</h2>
        <p className="max-w-2xl mx-auto text-lg text-foreground/80">
          A collection of technologies and tools I excel in, categorized for clarity.
        </p>
      </FadeIn>
      
      {Object.entries(groupedSkills).map(([category, skillsInCategory], categoryIndex) => (
        <div key={category} className="mb-12">
          <FadeIn delay={categoryIndex * 150}>
            <h3 className="text-2xl font-semibold text-center text-primary mb-6 capitalize">{category}</h3>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {skillsInCategory.map((skill) => {
              itemDelay += 50; // Increment delay for each item
              return <SkillItem key={skill.id} skill={skill} delay={itemDelay} />;
            })}
          </div>
        </div>
      ))}
    </SectionWrapper>
  );
};

export default SkillsSection;

import SectionWrapper from '@/components/layout/section-wrapper';
import Image from 'next/image';
import { Award, Brain, Users, Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="bg-secondary/30">
      <div className="grid gap-12 md:grid-cols-2 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">About AdventureFolio</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            AdventureFolio is more than just a portfolio; it's a testament to the spirit of exploration in technology and design. 
            This platform showcases a curated collection of projects that blend creativity with cutting-edge solutions.
            Driven by a passion for innovation and user-centric experiences, each project reflects a commitment to excellence and a forward-thinking approach.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Discover how intelligent design and smart technology can bring ideas to life.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="flex items-start space-x-3">
              <Award className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-primary">Quality Driven</h3>
                <p className="text-foreground/70">Focused on delivering high-quality, robust, and scalable solutions.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Brain className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-primary">Innovative Ideas</h3>
                <p className="text-foreground/70">Constantly exploring new technologies and creative approaches.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Users className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-primary">User Centric</h3>
                <p className="text-foreground/70">Designing with the user experience at the forefront of every project.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Zap className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-primary">Dynamic Solutions</h3>
                <p className="text-foreground/70">Building adaptable and future-proof applications.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-80 md:h-[500px] rounded-xl overflow-hidden shadow-2xl group">
          <Image
            src="https://picsum.photos/seed/aboutus/800/600"
            alt="Creative workspace"
            data-ai-hint="creative workspace"
            layout="fill"
            objectFit="cover"
            className="transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;

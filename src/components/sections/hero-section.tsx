import SectionWrapper from '@/components/layout/section-wrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AnimatedGradientText from '@/components/shared/animated-gradient-text';
import { ArrowDown } from 'lucide-react';
import { personalDetails } from '@/lib/data';
import FadeIn from '@/components/shared/fade-in';

const HeroSection = () => {
  return (
    <SectionWrapper 
      id="hero" 
      className="bg-cover bg-center parallax-bg relative" 
      style={{ backgroundImage: "url('https://picsum.photos/seed/techhero/1920/1080')" }}
      data-ai-hint="abstract tech data"
      isFullScreen
      hasPadding={false}
    >
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
      <div className="container relative z-10 flex flex-col items-center justify-center h-full text-center space-y-8 px-4 md:px-6">
        <FadeIn delay={100}>
          <AnimatedGradientText text={personalDetails.name} className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl" />
        </FadeIn>
        <FadeIn delay={300}>
          <p className="text-2xl font-medium text-foreground/90 sm:text-3xl md:text-4xl">
            {personalDetails.title}
          </p>
        </FadeIn>
        <FadeIn delay={500}>
          <p className="max-w-3xl text-lg text-foreground/80 sm:text-xl md:text-2xl">
            Welcome to my personal portfolio. Explore my projects, skills, and professional journey in data analytics and machine learning.
          </p>
        </FadeIn>
        <FadeIn delay={700} className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="shadow-lg transform transition-transform hover:scale-105">
            <Link href="#projects">Explore Projects <ArrowDown className="ml-2 h-5 w-5" /></Link>
          </Button>
           <Button asChild size="lg" variant="outline" className="shadow-lg transform transition-transform hover:scale-105">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;


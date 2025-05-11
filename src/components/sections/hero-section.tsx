import SectionWrapper from '@/components/layout/section-wrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AnimatedGradientText from '@/components/shared/animated-gradient-text';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <SectionWrapper 
      id="hero" 
      className="bg-cover bg-center parallax-bg relative" 
      style={{ backgroundImage: "url('https://picsum.photos/seed/adventurehero/1920/1080')" }}
      data-ai-hint="mountain landscape"
      isFullScreen
      hasPadding={false}
    >
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
      <div className="container relative z-10 flex flex-col items-center justify-center h-full text-center space-y-8 px-4 md:px-6">
        <AnimatedGradientText text="AdventureFolio" className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl" />
        <p className="max-w-3xl text-lg text-foreground/90 sm:text-xl md:text-2xl">
          Embark on a journey through innovative projects and creative endeavors. Discover unique solutions and captivating stories.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="shadow-lg transform transition-transform hover:scale-105">
            <Link href="#projects">Explore Projects <ArrowDown className="ml-2 h-5 w-5" /></Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="shadow-lg transform transition-transform hover:scale-105">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;

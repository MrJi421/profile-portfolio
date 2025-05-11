import SectionWrapper from '@/components/layout/section-wrapper';
import Image from 'next/image';
import { Mail, Phone, Linkedin as LinkedinIcon, MapPin } from 'lucide-react';
import { personalDetails } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import FadeIn from '@/components/shared/fade-in';

const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="bg-secondary/30">
      <div className="grid gap-12 md:grid-cols-2 items-center">
        <FadeIn className="space-y-6">
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">About Me</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            {personalDetails.summary}
          </p>
          
          <div className="space-y-3 pt-4">
            <h3 className="text-2xl font-semibold text-primary">Contact Details</h3>
            <div className="flex items-center space-x-3 text-foreground/80">
              <Mail className="h-5 w-5 text-accent" />
              <a href={`mailto:${personalDetails.email}`} className="hover:text-primary transition-colors">{personalDetails.email}</a>
            </div>
            <div className="flex items-center space-x-3 text-foreground/80">
              <Phone className="h-5 w-5 text-accent" />
              <span>{personalDetails.phone}</span>
            </div>
            <div className="flex items-center space-x-3 text-foreground/80">
              <LinkedinIcon className="h-5 w-5 text-accent" />
              <a href={personalDetails.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                linkedin.com/in/hemantkumar421
              </a>
            </div>
            <div className="flex items-center space-x-3 text-foreground/80">
              <MapPin className="h-5 w-5 text-accent" />
              <span>{personalDetails.location}</span>
            </div>
          </div>

          <div className="pt-6">
            <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-shadow">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </FadeIn>
        <FadeIn delay={200} className="relative h-80 md:h-[500px] rounded-xl overflow-hidden shadow-2xl group">
          <Image
            src="https://picsum.photos/seed/developerworkspace/800/600"
            alt={personalDetails.name || "Profile picture"}
            data-ai-hint="developer workspace"
            layout="fill"
            objectFit="cover"
            className="transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;


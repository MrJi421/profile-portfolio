import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import SkillsSection from '@/components/sections/skills-section';
import ExperienceSection from '@/components/sections/experience-section';
import ProjectsSection from '@/components/sections/projects-section';
import EducationSection from '@/components/sections/education-section';
import CertificationsSection from '@/components/sections/certifications-section';
import AchievementsSection from '@/components/sections/achievements-section';
import LeadershipSection from '@/components/sections/leadership-section';
import ContactSection from '@/components/sections/contact-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <CertificationsSection />
      <AchievementsSection />
      <LeadershipSection />
      <ContactSection />
    </>
  );
}

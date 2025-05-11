import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Link from 'next/link';
import { personalDetails } from '@/lib/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-20 md:flex-row md:py-0">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {currentYear} {personalDetails.name}. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
          {personalDetails.linkedin && (
            <Link href={personalDetails.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
          )}
          {personalDetails.githubUsername && (
             <Link href={`https://github.com/${personalDetails.githubUsername}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </Link>
          )}
          <Link href={`mailto:${personalDetails.email}`} aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-5 w-5" />
          </Link>
          {/* Add other social links if available, e.g., Twitter */}
          {/* <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="h-5 w-5" />
          </Link> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

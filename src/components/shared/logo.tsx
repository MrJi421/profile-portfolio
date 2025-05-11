import { Cpu } from 'lucide-react'; 
import Link from 'next/link';
import { personalDetails } from '@/lib/data';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:text-primary/80 transition-colors duration-300" aria-label={`${personalDetails.name} Home`}>
      <Cpu className="h-8 w-8 stroke-[1.5px]" /> 
      <span>{personalDetails.name}</span>
    </Link>
  );
};

export default Logo;

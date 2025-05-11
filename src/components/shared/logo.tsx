import { MountainSnow } from 'lucide-react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:text-primary/80 transition-colors duration-300" aria-label="AdventureFolio Home">
      <MountainSnow className="h-8 w-8 stroke-[1.5px]" />
      <span>AdventureFolio</span>
    </Link>
  );
};

export default Logo;

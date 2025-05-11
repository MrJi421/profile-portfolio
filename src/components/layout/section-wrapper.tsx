import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  hasPadding?: boolean;
  isFullScreen?: boolean;
}

const SectionWrapper = ({ children, className, id, hasPadding = true, isFullScreen = false, ...props }: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={cn(
        'w-full',
        hasPadding && 'py-16 md:py-24 lg:py-32',
        isFullScreen && 'min-h-screen flex flex-col justify-center',
        className
      )}
      {...props}
    >
      <div className="container max-w-screen-xl px-4 md:px-6">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;

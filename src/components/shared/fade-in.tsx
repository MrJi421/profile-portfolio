'use client';

import type { ReactNode, HTMLAttributes } from 'react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface FadeInProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  delay?: number; // delay in milliseconds
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  threshold?: number;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  className,
  as: Component = 'div',
  threshold = 0.1,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = domRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold } 
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <Component
      ref={domRef as any} // Using 'as any' for simplicity with 'as' prop and ref forwarding
      className={cn(
        'fade-in-element',
        isVisible && 'is-visible',
        className
      )}
      style={{ transitionDelay: `${delay}ms`, ...props.style }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default FadeIn;

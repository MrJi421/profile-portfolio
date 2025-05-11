import { cn } from '@/lib/utils';

interface AnimatedGradientTextProps {
  text: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const AnimatedGradientText = ({ text, className, as: Component = 'span' }: AnimatedGradientTextProps) => {
  return (
    <Component className={cn('animated-gradient-text', className)}>
      {text}
    </Component>
  );
};

export default AnimatedGradientText;

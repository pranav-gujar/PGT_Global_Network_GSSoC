import React from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'zoomIn' | 'slideDown';
  delay?: number;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  animation = 'fadeIn',
  delay = 0
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-700 ease-out';
    
    if (!inView) {
      switch (animation) {
        case 'slideUp':
          return `${baseClasses} opacity-0 translate-y-8`;
        case 'slideDown':
          return `${baseClasses} opacity-0 -translate-y-8`;
        case 'slideLeft':
          return `${baseClasses} opacity-0 translate-x-8`;
        case 'slideRight':
          return `${baseClasses} opacity-0 -translate-x-8`;
        case 'zoomIn':
          return `${baseClasses} opacity-0 scale-95`;
        default:
          return `${baseClasses} opacity-0`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
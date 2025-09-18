import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useCountUp } from '../hooks/useCountUp';

interface CountUpNumberProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}

const CountUpNumber: React.FC<CountUpNumberProps> = ({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  decimals = 0,
  className = ''
}) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const count = useCountUp({
    end: inView ? end : 0,
    duration,
    decimals
  });

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

export default CountUpNumber;
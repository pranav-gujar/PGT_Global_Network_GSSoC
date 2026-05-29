import React, { useEffect, useState } from 'react';

interface LoadingSpinnerProps {
  show?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ show = true }) => {
  const [shouldRender, setShouldRender] = useState(show);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (show) {
      setShouldRender(true);
      // Wait for next frame before setting active = true to trigger CSS transition
      const frame = requestAnimationFrame(() => {
        setActive(true);
      });
      return () => cancelAnimationFrame(frame);
    } else {
      setActive(false);
      // Wait for transition duration (300ms) before unmounting
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 bg-white/90 backdrop-blur-sm z-50 flex items-center justify-center transition-all duration-300 ${
        active ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Wrapper keeps spinner + text centered as one unit */}
      <div className="flex flex-col items-center text-center">
        <div className="relative w-16 h-16">
          {/* Outer ring */}
          <div className="absolute inset-0 border-4 border-blue-200 rounded-full animate-[spin_3s_linear_infinite]"></div>
          {/* Inner ring */}
          <div className="absolute inset-0 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
        </div>
        {/* Text will always stay below, but loader remains centered */}
        <p className="mt-4 max-w-xs text-gray-600 font-medium px-4">
          Charging up Positivity ...
        </p>
      </div>
    </div>
  );
};

export default React.memo(LoadingSpinner);
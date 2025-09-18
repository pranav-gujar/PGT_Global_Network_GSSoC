import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white/90 backdrop-blur-sm z-50 flex items-center justify-center">
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
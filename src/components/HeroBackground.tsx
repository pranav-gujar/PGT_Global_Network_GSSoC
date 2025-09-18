import React from 'react';

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 animate-gradient-flow"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float-hero"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${10 + Math.random() * 15}s`
            }}
          />
        ))}
      </div>
      
      {/* Wave animation */}
      {/* Single wave at bottom */}
<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
  <svg
    className="relative w-[200%] h-24 animate-wave"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
  >
    <path
      fill="rgba(255,255,255,0.2)"   // 75% opacity, more visible
      d="M0,192L30,186.7C60,181,120,171,180,181.3C240,192,300,224,360,240C420,256,480,256,540,234.7C600,213,660,171,720,154.7C780,139,840,149,900,170.7C960,192,1020,224,1080,229.3C1140,235,1200,213,1260,192C1320,171,1380,149,1410,138.7L1440,128L1440,320L0,320Z"
    />
  </svg>
</div>

    </div>
  );
};

export default HeroBackground;
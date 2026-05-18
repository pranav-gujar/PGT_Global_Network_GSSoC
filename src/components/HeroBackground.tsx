import React from 'react';

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gray-950">
      {/* Base deep background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1c] via-[#111827] to-[#0f172a]"></div>
      
      {/* Glowing orbs for mesh effect */}
      <div className="absolute top-0 -left-1/4 w-full h-full bg-blue-600/30 rounded-full blur-[120px] mix-blend-screen animate-float-hero" style={{ animationDuration: '18s' }}></div>
      <div className="absolute top-0 -right-1/4 w-full h-full bg-purple-600/30 rounded-full blur-[120px] mix-blend-screen animate-float-hero" style={{ animationDuration: '22s', animationDelay: '2s' }}></div>
      <div className="absolute -bottom-1/2 left-1/4 w-full h-full bg-indigo-600/30 rounded-full blur-[120px] mix-blend-screen animate-float-hero" style={{ animationDuration: '25s', animationDelay: '4s' }}></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full animate-float-hero shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${10 + Math.random() * 15}s`
            }}
          />
        ))}
      </div>
      
      {/* Bottom fade for seamless transition to next section (gray-50) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default HeroBackground;
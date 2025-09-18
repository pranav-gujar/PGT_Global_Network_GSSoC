import React from 'react';

const AnnouncementBar = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 overflow-hidden relative fixed top-0 w-full z-40">
      <div className="flex">
        {/* Desktop version - centered */}
        <div className="hidden md:flex w-full justify-center items-center">
          <p className="text-sm font-medium">
            🎉 Join our global network of 10,000+ changemakers! Apply for our programs today.
          </p>
        </div>
        
        {/* Mobile version - marquee scrolling */}
        <div className="md:hidden flex">
          <div className="animate-marquee whitespace-nowrap hover:pause-marquee">
            <span className="text-sm font-medium mx-4">
              🎉 Join our global network of 10,000+ changemakers! Apply for our programs today.
            </span>
            <span className="text-sm font-medium mx-4">
              🌍 Operating in 50+ countries worldwide.
            </span>
            <span className="text-sm font-medium mx-4">
              📚 5 transformative programs available.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
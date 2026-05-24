import React from 'react';

interface SkeletonElementProps {
  type: 'text' | 'title' | 'avatar' | 'thumbnail';
}

export const SkeletonElement: React.FC<SkeletonElementProps> = ({ type }) => {
  // Base styles for the pulsing background blocks
  const baseClass = 'animate-pulse bg-gray-200 dark:bg-gray-700 rounded';

  // Specific sizing metrics for different element shapes
  const typeClasses = {
    text: 'h-3 w-full my-2',
    title: 'h-5 w-2/3 my-3',
    avatar: 'h-10 w-10 rounded-full',
    thumbnail: 'w-full aspect-video rounded-lg',
  };

  return <div className={`${baseClass} ${typeClasses[type]}`} />;
};
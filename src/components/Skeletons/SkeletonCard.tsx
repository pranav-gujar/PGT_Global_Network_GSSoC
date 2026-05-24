import React from 'react';
import { SkeletonElement } from './SkeletonElement';

export const SkeletonCard: React.FC = () => {
  return (
    <div className="border border-gray-100 dark:border-gray-800 rounded-xl p-4 shadow-sm bg-white dark:bg-gray-900 flex flex-col space-y-4 h-full">
      {/* Blog Post Feature Image Placeholder */}
      <SkeletonElement type="thumbnail" />

      {/* Meta info & Titles */}
      <div className="flex-1 space-y-2">
        <SkeletonElement type="text" /> {/* Category / Date line */}
        <SkeletonElement type="title" /> {/* Main heading line */}
        
        {/* Short description paragraph lines */}
        <div className="pt-2">
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
      </div>

      {/* Author Profile Footer block */}
      <div className="flex items-center space-x-3 pt-4 border-t border-gray-50 dark:border-gray-800">
        <SkeletonElement type="avatar" />
        <div className="flex-1">
          <SkeletonElement type="text" />
        </div>
      </div>
    </div>
  );
};
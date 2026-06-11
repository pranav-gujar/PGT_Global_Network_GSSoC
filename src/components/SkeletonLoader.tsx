import React from 'react';

// Blog Card Skeleton
export const BlogCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="w-full h-48 bg-gradient-to-r from-gray-200 to-gray-100 animate-shimmer"></div>

      <div className="p-6">
        {/* Category badge skeleton */}
        <div className="flex items-center justify-between mb-4">
          <div className="px-3 py-1 bg-gray-200 rounded-full h-6 w-20 animate-shimmer"></div>
          <div className="h-4 w-12 bg-gray-200 rounded animate-shimmer"></div>
        </div>

        {/* Title skeleton */}
        <div className="mb-3 space-y-2">
          <div className="h-5 bg-gray-200 rounded animate-shimmer"></div>
          <div className="h-5 bg-gray-200 rounded w-5/6 animate-shimmer"></div>
        </div>

        {/* Excerpt skeleton */}
        <div className="mb-4 space-y-2">
          <div className="h-4 bg-gray-200 rounded animate-shimmer"></div>
          <div className="h-4 bg-gray-200 rounded animate-shimmer"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6 animate-shimmer"></div>
        </div>

        {/* Footer skeleton */}
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-2/3 animate-shimmer"></div>
          </div>
          <div className="h-6 w-24 bg-gray-200 rounded animate-shimmer"></div>
        </div>
      </div>
    </div>
  );
};

// Loading Skeleton Grid Container
export const BlogSkeletonGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, index) => (
        <BlogCardSkeleton key={index} />
      ))}
    </div>
  );
};

// Image Skeleton
export const ImageSkeleton = ({ className = "w-full h-48" }) => {
  return (
    <div className={`bg-gradient-to-r from-gray-200 to-gray-100 animate-shimmer rounded-lg ${className}`}></div>
  );
};

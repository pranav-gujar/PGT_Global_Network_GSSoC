import React from 'react';
import SkeletonElement from './SkeletonElement';

const SkeletonCard: React.FC = () => {
  return (
    <div className="p-4 border border-gray-700 bg-gray-900/50 rounded-xl shadow-lg w-full mb-4">
      <SkeletonElement type="thumbnail" />
      <SkeletonElement type="title" />
      <SkeletonElement type="text" />
      <SkeletonElement type="text" />
    </div>
  );
};

export default SkeletonCard;
import React from 'react';
import './Skeleton.css';

interface SkeletonProps {
  type: 'title' | 'text' | 'thumbnail' | 'avatar';
}

const SkeletonElement: React.FC<SkeletonProps> = ({ type }) => {
  return <div className={`skeleton ${type}`}></div>;
};

export default SkeletonElement;
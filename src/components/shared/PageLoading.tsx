import React from 'react';
import LoadingSpinner from './LoadingSpinner';

export default function PageLoading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <LoadingSpinner />
    </div>
  );
}
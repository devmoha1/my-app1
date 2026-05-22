'use client';

import React from 'react';

export function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="bg-white dark:bg-slate-800 rounded-lg shadow p-6 animate-pulse"
        >
          <div className="h-6 bg-gray-200 dark:bg-slate-700 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-5/6 mb-4"></div>
          <div className="flex gap-2 pt-4">
            <div className="flex-1 h-10 bg-gray-200 dark:bg-slate-700 rounded"></div>
            <div className="flex-1 h-10 bg-gray-200 dark:bg-slate-700 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
